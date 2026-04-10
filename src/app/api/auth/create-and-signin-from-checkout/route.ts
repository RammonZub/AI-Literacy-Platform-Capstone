/**
 * Create and Sign In From Checkout API
 *
 * PURPOSE: Authenticate users immediately after Stripe checkout using server-side sign-in
 *
 * APPROACH: Sign the user in on the SERVER and set cookies directly in the HTTP response.
 * Uses signInWithPassword with a temporary password, which creates an authenticated session
 * and sets cookies immediately (no email verification needed).
 *
 * FLOW:
 * 1. Validate session ID format and check for replay attacks
 * 2. Fetch checkout session from Stripe and verify payment
 * 3. Check if user exists in database
 * 4. For existing users: Generate new temp password via admin API
 * 5. For new users: Create user with temp password
 * 6. Sign in using signInWithPassword (sets cookies in HTTP response)
 * 7. Grant access
 * 8. Mark session as processed to prevent replay attacks
 * 9. Return success with redirect URL
 *
 * WHY THIS WORKS:
 * - signInWithPassword creates an authenticated session immediately
 * - Supabase SSR client with custom cookie handler sets cookies in the HTTP response
 * - Browser receives cookies with the response
 * - User is authenticated when they land on the next page (no email delay)
 *
 * @see src/components/checkout/AnonymousUserAuth.tsx - calls this API
 * @see https://supabase.com/docs/reference/javascript/auth-signinwithpassword
 */

import { randomBytes } from "crypto";
import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { checkRateLimit, getRateLimitIdentifier } from "@/lib/rate-limit";
import { mergeCookieOptions } from "@/lib/supabase/cookie-config";
import { createServiceClient } from "@/lib/supabase/server";
import { persistTelemetryRow } from "@/lib/telemetry";

async function isCheckoutAuthProcessed(sessionId: string): Promise<boolean> {
  const admin = createServiceClient();
  const { data } = await admin
    .from("telemetry_events")
    .select("id")
    .eq("event_type", "checkout_auth_processed")
    .filter("payload->>session_id", "eq", sessionId)
    .maybeSingle();
  return !!data;
}

async function markCheckoutAuthProcessed(sessionId: string): Promise<void> {
  await persistTelemetryRow(null, "checkout_auth_processed", { session_id: sessionId });
}

// ========================================
// STRIPE CLIENT
// ========================================
// Get Stripe client (auto-detects test/live mode from session ID prefix)
function getClientForSession(sessionId: string): Stripe {
  const key = process.env.STRIPE_SECRET_KEY!;
  const stripe = new Stripe(key, {
    apiVersion: "2026-01-28.clover",
    timeout: 10000, // 10 second timeout to prevent hanging
    maxNetworkRetries: 2, // Retry network failures but not errors
  });

  // Log which mode we're using for debugging
  const isLiveSession = sessionId.startsWith("cs_live_");
  const isTestSession = sessionId.startsWith("cs_test_");

  if (isLiveSession || isTestSession) {
    const mode = isLiveSession ? "live" : "test";
    console.log(`[AUTH-CHECKOUT] Using ${mode} Stripe client for session`);
  } else {
    console.warn(
      `[AUTH-CHECKOUT] Unable to detect session mode from ID: ${sessionId}. Using default client.`,
    );
  }

  return stripe;
}

// ========================================
// TEMP PASSWORD CONFIG
// ========================================
const TEMP_PASSWORD_BYTES = 32; // 256-bit password (32 bytes = 256 bits when base64 encoded)

// ========================================
// SESSION ID VALIDATION
// ========================================
// Stripe session IDs are either "cs_test_" (test mode) or "cs_live_" (live mode)
// followed by alphanumeric characters (typically 14+ characters)
const SESSION_ID_PATTERN = /^cs_(?:test|live)_[a-zA-Z0-9]{14,}$/;

export async function POST(request: NextRequest) {
  console.log("=".repeat(60));
  console.log("[AUTH-CHECKOUT] Create and Sign In From Checkout - Started");
  console.log("[AUTH-CHECKOUT] Timestamp:", new Date().toISOString());
  console.log("=".repeat(60));

  // ========================================
  // RATE LIMITING CHECK
  // ========================================
  // Check rate limit BEFORE any expensive operations
  const identifier = getRateLimitIdentifier(request);
  const { success, resetTime } = checkRateLimit(identifier);

  if (!success) {
    console.warn("[AUTH-CHECKOUT] ⚠️ Rate limit exceeded for:", identifier);
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

  // ========================================
  // STEP 1: Validate Request
  // ========================================
  const { sessionId } = await request.json();

  if (!sessionId) {
    console.error("[AUTH-CHECKOUT] ❌ No session ID provided");
    return NextResponse.json({ error: "Session ID required" }, { status: 400 });
  }

  // Validate session ID format to prevent injection attacks
  if (!SESSION_ID_PATTERN.test(sessionId)) {
    console.error("[AUTH-CHECKOUT] ❌ Invalid session ID format:", sessionId);
    return NextResponse.json({ error: "Invalid session ID format" }, { status: 400 });
  }

  console.log(
    "[AUTH-CHECKOUT] Request received with session ID:",
    sessionId.substring(0, 12) + "...",
  );

  const supabaseAdmin = createServiceClient();

  // ========================================
  // STEP 2: Fetch Checkout Session from Stripe
  // ========================================
  console.log("[AUTH-CHECKOUT] 🔄 Fetching checkout session from Stripe...");

  const stripe = getClientForSession(sessionId);

  let checkoutSession: Stripe.Checkout.Session;
  try {
    checkoutSession = await stripe.checkout.sessions.retrieve(sessionId);
  } catch (error) {
    console.error("[AUTH-CHECKOUT] ❌ Failed to retrieve checkout session:", error);
    return NextResponse.json({ error: "Invalid checkout session" }, { status: 404 });
  }

  // Verify payment status
  if (checkoutSession.payment_status !== "paid") {
    console.error("[AUTH-CHECKOUT] ❌ Payment not completed:", checkoutSession.payment_status);
    return NextResponse.json({ error: "Payment not completed" }, { status: 402 });
  }

  if (await isCheckoutAuthProcessed(sessionId)) {
    console.error("[AUTH-CHECKOUT] ❌ Session already used for checkout auth");
    return NextResponse.json(
      { error: "This checkout session has already been used" },
      { status: 409 },
    );
  }

  console.log("[AUTH-CHECKOUT] ✅ Stripe session fetched and verified:", {
    id: checkoutSession.id,
    status: checkoutSession.status,
    payment_status: checkoutSession.payment_status,
  });

  // ========================================
  // STEP 4: Extract Session Details
  // ========================================
  const customerEmail = checkoutSession.customer_details?.email;
  const subscriptionId = checkoutSession.subscription as string;
  const planId = checkoutSession.metadata?.plan_id;

  if (!customerEmail) {
    console.error("[AUTH-CHECKOUT] ❌ No email in checkout session");
    return NextResponse.json({ error: "No email in checkout session" }, { status: 400 });
  }

  console.log("[AUTH-CHECKOUT] ✅ Email extracted successfully");
  console.log("[AUTH-CHECKOUT] Session details:", {
    subscriptionId,
    planId,
  });

  // ========================================
  // STEP 5: Check if User Exists
  // ========================================
  console.log("[AUTH-CHECKOUT] 🔍 Checking if user exists...");

  const { data: existingUser } = await supabaseAdmin
    .from("users")
    .select("id, email, has_access, subscription_status")
    .eq("email", customerEmail)
    .maybeSingle();

  // ========================================
  // STEP 6: Prepare Response and SSR Client
  // ========================================
  // Create response first - we'll set cookies on it
  const response = NextResponse.json({
    success: true,
    redirectUrl: "/platform",
    email: customerEmail,
    isNewUser: !existingUser,
  });

  // Get cookieStore from Next.js headers (official SSR pattern)
  // WHY: Using cookies() from 'next/headers' provides the mutable cookie store
  // that properly sets cookies in the HTTP response for API routes
  const cookieStore = await cookies();

  // Create SSR client with official cookie handler pattern
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
            // CRITICAL: Route handlers must attach auth cookies to the actual
            // HTTP response object so the browser persists the session.
            response.cookies.set(name, value, mergeCookieOptions(options || {}));
          });
        },
      },
    },
  );

  // Variables to track user ID and temp password
  let userId: string;
  let tempPassword: string;

  // ========================================
  // STEP 7: Existing User Flow
  // ========================================
  if (existingUser) {
    console.log("[AUTH-CHECKOUT] 📋 Existing user found:", {
      userId: existingUser.id,
      email: existingUser.email,
      hasAccess: existingUser.has_access,
    });

    userId = existingUser.id;

    // Generate a new temporary password for sign-in
    // WHY: We don't have the user's existing password, so we generate a temp one
    tempPassword = randomBytes(TEMP_PASSWORD_BYTES).toString("base64");
    console.log("[AUTH-CHECKOUT] 🔐 Generated temporary password for existing user");

    // Update user's password using admin API
    // WHY: Also confirm email to prevent "Email not confirmed" error on signIn
    const { error: updateError } = await supabaseAdmin.auth.admin.updateUserById(userId, {
      password: tempPassword,
      email_confirm: true, // Confirm email so signInWithPassword works
    });

    if (updateError) {
      console.error("[AUTH-CHECKOUT] ❌ Failed to update password:", updateError);
      return NextResponse.json({ error: "Failed to prepare authentication" }, { status: 500 });
    }

    console.log("[AUTH-CHECKOUT] ✅ Temporary password set for existing user");
  } else {
    // ========================================
    // STEP 8: New User Flow
    // ========================================
    console.log("[AUTH-CHECKOUT] 👤 New user detected, creating account...");

    // Generate secure temporary password
    tempPassword = randomBytes(TEMP_PASSWORD_BYTES).toString("base64");
    console.log("[AUTH-CHECKOUT] 🔐 Generated temporary password for new user");

    // Create auth user with email_confirm: true
    const { data: authData, error: createError } = await supabaseAdmin.auth.admin.createUser({
      email: customerEmail,
      password: tempPassword,
      email_confirm: true,
      user_metadata: {
        created_from_checkout: true,
        checkout_session_id: sessionId,
        stripe_customer_id: checkoutSession.customer as string,
        plan_id: planId,
      },
    });

    if (createError || !authData.user) {
      console.error("[AUTH-CHECKOUT] ❌ Failed to create auth user:", createError);
      return NextResponse.json({ error: "Failed to create user account" }, { status: 500 });
    }

    userId = authData.user.id;
    console.log("[AUTH-CHECKOUT] ✅ Auth user created:", userId);
    // `public.users` row is created by `handle_new_user` trigger on auth.users insert.
  }

  // ========================================
  // STEP 9: Grant Platform Access
  // ========================================
  // WHY: Grant access for BOTH subscriptions AND lifetime (one-time) payments
  // For subscriptions: subscriptionId is set, payment_mode is 'subscription'
  // For lifetime: subscriptionId is null, payment_mode is 'payment'
  console.log("[AUTH-CHECKOUT] 🔄 Granting access...");

  const paymentMode = checkoutSession.metadata?.payment_mode || checkoutSession.mode;
  const stripeCustomerId = checkoutSession.customer as string | null;

  if (subscriptionId || paymentMode === "payment") {
    const { grantAccess } = await import("@/lib/services/user-access");
    await grantAccess(userId, subscriptionId, "active", stripeCustomerId);
    console.log("[AUTH-CHECKOUT] ✅ Access granted for", paymentMode, "payment");

    // Update Stripe customer metadata with user_id for future reference
    if (stripeCustomerId) {
      try {
        const { updateCustomerWithUserId } = await import("@/lib/stripe/customer");
        await updateCustomerWithUserId(stripeCustomerId, userId);
        console.log("[AUTH-CHECKOUT] ✅ Stripe customer metadata updated");
      } catch (err) {
        console.error("[AUTH-CHECKOUT] ⚠️ Failed to update Stripe customer metadata:", err);
        // Don't fail the request - customer metadata is optional
      }
    }
  } else {
    console.warn(
      "[AUTH-CHECKOUT] ⚠️ No access granted - missing subscriptionId and not a one-time payment",
    );
  }

  console.log("[AUTH-CHECKOUT] ✅ Access step completed");

  // ========================================
  // STEP 10: Sign In User (Server-Side with Cookies)
  // ========================================
  // CRITICAL: Use signInWithPassword (NOT signInWithOTP)
  // WHY: signInWithPassword creates an authenticated session immediately and sets cookies
  // signInWithOTP sends an email and doesn't authenticate the user
  console.log("[AUTH-CHECKOUT] 🔐 Signing in user (server-side with cookies)...");

  const { data: signInData, error: signInError } = await supabaseSSR.auth.signInWithPassword({
    email: customerEmail,
    password: tempPassword,
  });

  if (signInError) {
    console.error("[AUTH-CHECKOUT] ❌ Sign in failed:", signInError);
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 });
  }

  console.log("[AUTH-CHECKOUT] ✅ Sign in successful, session created:", {
    hasAccessToken: !!signInData.session?.access_token,
    hasRefreshToken: !!signInData.session?.refresh_token,
    userId: signInData.user?.id,
  });

  // Verify cookies were attached to the outgoing response
  const finalCookies = response.cookies.getAll();
  console.log("[AUTH-CHECKOUT] 🔍 Cookie verification:");
  console.log("[AUTH-CHECKOUT] Cookie count:", finalCookies.length);
  console.log(
    "[AUTH-CHECKOUT] Cookie names:",
    finalCookies.map((c) => c.name),
  );

  if (finalCookies.length === 0) {
    console.error("[AUTH-CHECKOUT] ❌ CRITICAL: No cookies were set!");
  } else {
    console.log("[AUTH-CHECKOUT] ✅ Cookies were set successfully");
  }

  // ========================================
  // CRITICAL VERIFICATION: Check Response Headers
  // ========================================
  // WHY: cookieStore.getAll() only checks the cookie store state,
  // NOT whether cookies will be sent in the HTTP response.
  // This verification ensures cookies are actually in the response headers.
  const responseHeaders = response.headers;
  const setCookieHeaders = responseHeaders.getSetCookie();
  console.log("[AUTH-CHECKOUT] 🔍 Response Set-Cookie headers:", setCookieHeaders.length);

  if (setCookieHeaders.length === 0) {
    console.error("[AUTH-CHECKOUT] ❌ CRITICAL: No Set-Cookie headers in response!");
    console.error("[AUTH-CHECKOUT] ❌ Users will NOT be authenticated after redirect!");
    // Note: We still return success here to avoid webhook retries,
    // but the client will hit 401s on follow-up authenticated API calls
  } else {
    console.log("[AUTH-CHECKOUT] ✅ Set-Cookie headers present in response");
    // Log each cookie name for debugging
    const cookieNames = setCookieHeaders.map((header) => {
      const match = header.match(/^([^=]+)=/);
      return match ? match[1] : "unknown";
    });
    console.log("[AUTH-CHECKOUT] Cookie names in response:", cookieNames);
  }

  // ========================================
  // STEP 11: Return Success
  // ========================================
  console.log("[AUTH-CHECKOUT] ✅ SUCCESS! User authenticated, returning redirect URL");
  console.log("=".repeat(60));

  await markCheckoutAuthProcessed(sessionId);

  return response;
}
