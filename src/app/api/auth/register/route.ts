/**
 * Password registration API
 *
 * Simple signup: create the user (pre-confirmed) and sign them in via response
 * cookies. No email verification step.
 *
 * @see src/app/(auth)/signup/SignupPageClient.tsx — caller
 * @see src/app/api/auth/create-and-signin-from-checkout/route.ts — same cookie pattern
 */

import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import type { PersonalizationResult } from "@/lib/personalization/algorithm";
import { buildNormalizedOnboardingResponses, isCompleteOnboardingAnswers, mergeOnboardingAnswersLastWins, type OnboardingSessionSnapshotV1 } from "@/lib/personalization/onboarding-db";
import { buildUserPersonalizationMetadata, mergeUserPersonalizationMetadata } from "@/lib/personalization/user-personalization-metadata";
import { checkRateLimit, getRateLimitIdentifier } from "@/lib/rate-limit";
import { getSafeRedirect } from "@/lib/security/redirect-validation";
import { mergeCookieOptions } from "@/lib/supabase/cookie-config";
import { createServiceClient } from "@/lib/supabase/server";
import type { Json } from "@/types/database.types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type RegistrationOnboardingPayload = {
  answers: Array<{ questionId: string; value: string }>;
  result: PersonalizationResult;
  audit?: unknown;
  currentQuestionIndex?: number;
};

function isDuplicateUserMessage(message: string): boolean {
  const m = message.toLowerCase();
  return (
    m.includes("already been registered") ||
    m.includes("already registered") ||
    m.includes("user already registered") ||
    m.includes("email_exists") ||
    m.includes("duplicate")
  );
}

function parseRegistrationOnboardingPayload(
  value: unknown,
): RegistrationOnboardingPayload | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const record = value as Record<string, unknown>;
  const answers = Array.isArray(record.answers)
    ? record.answers.filter(
        (entry): entry is { questionId: string; value: string } =>
          typeof entry === "object" &&
          entry !== null &&
          typeof (entry as { questionId?: unknown }).questionId === "string" &&
          typeof (entry as { value?: unknown }).value === "string",
      )
    : [];

  const resultRecord =
    record.result && typeof record.result === "object"
      ? (record.result as Record<string, unknown>)
      : null;

  if (
    !resultRecord ||
    typeof resultRecord.customerProfile !== "string" ||
    typeof resultRecord.persona !== "string" ||
    typeof resultRecord.aiExperience !== "string" ||
    !Array.isArray(resultRecord.recommendedPath) ||
    !resultRecord.recommendedPath.every((entry) => typeof entry === "string") ||
    typeof resultRecord.pathLength !== "number"
  ) {
    return null;
  }

  return {
    answers,
    result: {
      customerProfile: resultRecord.customerProfile,
      persona: resultRecord.persona,
      aiExperience: resultRecord.aiExperience,
      recommendedPath: resultRecord.recommendedPath as string[],
      pathLength: resultRecord.pathLength,
    } as PersonalizationResult,
    audit: record.audit,
    currentQuestionIndex:
      typeof record.currentQuestionIndex === "number" ? record.currentQuestionIndex : undefined,
  };
}

async function persistOnboardingForRegisteredUser(props: {
  admin: ReturnType<typeof createServiceClient>;
  onboardingSession: RegistrationOnboardingPayload;
  userId: string;
}): Promise<void> {
  const mergedAnswers = mergeOnboardingAnswersLastWins(props.onboardingSession.answers);
  if (!isCompleteOnboardingAnswers(mergedAnswers)) {
    return;
  }

  const completedAt = new Date().toISOString();
  const normalizedResponses = buildNormalizedOnboardingResponses(mergedAnswers);
  const sessionSnapshot: OnboardingSessionSnapshotV1 = {
    v: 1,
    answers: mergedAnswers,
    result: props.onboardingSession.result as PersonalizationResult,
    ...(props.onboardingSession.audit ? { audit: props.onboardingSession.audit as never } : {}),
    ...(props.onboardingSession.currentQuestionIndex !== undefined
      ? { currentQuestionIndex: props.onboardingSession.currentQuestionIndex }
      : {}),
  };

  const { error: deleteError } = await props.admin
    .from("onboarding_sessions")
    .delete()
    .eq("user_id", props.userId);

  if (deleteError) {
    throw new Error(`delete onboarding session failed: ${deleteError.message}`);
  }

  const { error: insertError } = await props.admin.from("onboarding_sessions").insert({
    user_id: props.userId,
    responses: normalizedResponses as unknown as Json,
    session_snapshot: sessionSnapshot as unknown as Json,
    customer_profile: props.onboardingSession.result.customerProfile,
    persona: props.onboardingSession.result.persona,
    ai_experience: props.onboardingSession.result.aiExperience,
    recommended_path: props.onboardingSession.result.recommendedPath as unknown as Json,
    path_length: props.onboardingSession.result.pathLength,
    completed_at: completedAt,
  });

  if (insertError) {
    throw new Error(`insert onboarding session failed: ${insertError.message}`);
  }

  const personalizationMetadata = buildUserPersonalizationMetadata({
    completedAt,
    recommendedPath: props.onboardingSession.result.recommendedPath,
    pathLength: props.onboardingSession.result.pathLength,
    customerProfile: props.onboardingSession.result.customerProfile,
    persona: props.onboardingSession.result.persona,
    aiExperience: props.onboardingSession.result.aiExperience,
  });

  if (!personalizationMetadata) {
    return;
  }

  const { data: userRow, error: userReadError } = await props.admin
    .from("users")
    .select("metadata")
    .eq("id", props.userId)
    .maybeSingle();

  if (userReadError) {
    throw new Error(`read user metadata failed: ${userReadError.message}`);
  }

  const mergedMetadata = mergeUserPersonalizationMetadata(
    userRow?.metadata ?? null,
    personalizationMetadata,
  );

  const { error: userUpdateError } = await props.admin
    .from("users")
    .update({ metadata: mergedMetadata })
    .eq("id", props.userId);

  if (userUpdateError) {
    throw new Error(`update user metadata failed: ${userUpdateError.message}`);
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const identifier = getRateLimitIdentifier(request);
  const { success, resetTime } = checkRateLimit(identifier);
  if (!success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: {
          "X-RateLimit-Reset": String(resetTime),
          "Retry-After": String(Math.ceil((resetTime - Date.now()) / 1000)),
        },
      },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const rec = body as Record<string, unknown>;
  const email = typeof rec.email === "string" ? rec.email.trim() : "";
  const password = typeof rec.password === "string" ? rec.password : "";
  const fullName =
    typeof rec.fullName === "string" ? rec.fullName.trim() : "";
  const onboardingSession = parseRegistrationOnboardingPayload(rec.onboardingSession);
  const redirect = getSafeRedirect(
    typeof rec.redirect === "string" ? rec.redirect : null,
    "/platform",
  );

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
  }
  if (password.length < 6) {
    return NextResponse.json(
      { error: "Password must be at least 6 characters" },
      { status: 400 },
    );
  }
  if (fullName.length < 2) {
    return NextResponse.json(
      { error: "Name must be at least 2 characters" },
      { status: 400 },
    );
  }

  const admin = createServiceClient();
  const { data: created, error: createError } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: {
      full_name: fullName,
    },
  });

  if (createError || !created.user) {
    const msg = createError?.message ?? "Registration failed";
    if (isDuplicateUserMessage(msg)) {
      return NextResponse.json(
        { error: "An account with this email already exists. Try signing in." },
        { status: 409 },
      );
    }
    console.error("[AUTH-REGISTER] createUser:", msg);
    return NextResponse.json({ error: "Could not create account" }, { status: 500 });
  }

  const response = NextResponse.json({
    success: true,
    redirect,
  });

  const cookieStore = await cookies();
  const { createServerClient } = await import("@supabase/ssr");
  const supabaseSSR = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, mergeCookieOptions(options || {}));
          });
        },
      },
    },
  );

  const { error: signInError } = await supabaseSSR.auth.signInWithPassword({
    email,
    password,
  });

  if (signInError) {
    console.error("[AUTH-REGISTER] signIn:", signInError);
    return NextResponse.json(
      { error: "Account created but sign-in failed. Try logging in." },
      { status: 500 },
    );
  }

  if (onboardingSession) {
    try {
      await persistOnboardingForRegisteredUser({
        admin,
        onboardingSession,
        userId: created.user.id,
      });
    } catch (error) {
      console.error("[AUTH-REGISTER] onboarding sync failed:", error);
    }
  }

  return response;
}
