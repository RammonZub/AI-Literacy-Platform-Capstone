/**
 * Onboarding server actions
 *
 * PURPOSE:
 * Persist completed onboarding sessions and recommendation feedback while
 * keeping the learner's recommendation order available in two places:
 * `onboarding_sessions` for audit/history and `users.metadata` for the live
 * dashboard experience.
 *
 * DESIGN:
 * - The session table remains the historical record of the assessment.
 * - The user metadata payload is the per-user source of truth consumed by the
 *   dashboard so personalization survives beyond a single session query.
 */

"use server";

import { createClient } from "@/lib/supabase/server";
import type { PersonalizationResult } from "@/lib/personalization/algorithm";
import {
  buildNormalizedOnboardingResponses,
  isCompleteOnboardingAnswers,
  mergeOnboardingAnswersLastWins,
  type OnboardingSessionSnapshotV1,
} from "@/lib/personalization/onboarding-db";
import {
  buildUserPersonalizationMetadata,
  mergeUserPersonalizationMetadata,
} from "@/lib/personalization/user-personalization-metadata";
import { logTelemetryEvent } from "@/lib/telemetry";
import type { Json } from "@/types/database.types";

/**
 * Save a completed onboarding result and mirror the recommendation order onto
 * the user's metadata record for dashboard rendering.
 */
export async function saveOnboardingSessionToDatabase(payload: {
  result: PersonalizationResult;
  sessionSnapshot: OnboardingSessionSnapshotV1;
}): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user?.id) {
    return { ok: false, error: "not_authenticated" };
  }

  const snapshot = payload.sessionSnapshot;
  const answers = mergeOnboardingAnswersLastWins(snapshot.answers ?? []);
  if (!isCompleteOnboardingAnswers(answers)) {
    console.error("[onboarding] incomplete answers", {
      count: answers.length,
      ids: answers.map((a) => a.questionId),
    });
    return { ok: false, error: "incomplete_onboarding_answers" };
  }

  const normalized = buildNormalizedOnboardingResponses(answers);

  const { error: deleteError } = await supabase
    .from("onboarding_sessions")
    .delete()
    .eq("user_id", user.id);

  if (deleteError) {
    console.error("[onboarding] delete existing failed", deleteError.message);
    return { ok: false, error: deleteError.message };
  }

  const snapshotForDb: OnboardingSessionSnapshotV1 = {
    ...snapshot,
    answers,
  };
  const snapshotJson = snapshotForDb as unknown as Json;
  const completedAt = new Date().toISOString();

  const { error } = await supabase.from("onboarding_sessions").insert({
    user_id: user.id,
    responses: normalized as unknown as Json,
    session_snapshot: snapshotJson,
    customer_profile: payload.result.customerProfile,
    persona: payload.result.persona,
    ai_experience: payload.result.aiExperience,
    recommended_path: payload.result.recommendedPath as unknown as Json,
    path_length: payload.result.pathLength,
    completed_at: completedAt,
  });

  if (error) {
    console.error("[onboarding] insert failed", error.message);
    return { ok: false, error: error.message };
  }

  const personalizationMetadata = buildUserPersonalizationMetadata({
    completedAt,
    recommendedPath: payload.result.recommendedPath,
    pathLength: payload.result.pathLength,
    customerProfile: payload.result.customerProfile,
    persona: payload.result.persona,
    aiExperience: payload.result.aiExperience,
  });

  if (personalizationMetadata) {
    const { data: userRow, error: userReadError } = await supabase
      .from("users")
      .select("metadata")
      .eq("id", user.id)
      .maybeSingle();

    if (userReadError) {
      console.error("[onboarding] metadata read failed", userReadError.message);
      return { ok: false, error: userReadError.message };
    }

    const mergedMetadata = mergeUserPersonalizationMetadata(
      userRow?.metadata ?? null,
      personalizationMetadata,
    );

    const { error: userUpdateError } = await supabase
      .from("users")
      .update({ metadata: mergedMetadata })
      .eq("id", user.id);

    if (userUpdateError) {
      console.error("[onboarding] metadata update failed", userUpdateError.message);
      return { ok: false, error: userUpdateError.message };
    }
  }

  void logTelemetryEvent(user.id, "onboarding_completed", {
    path_length: payload.result.pathLength,
    first_module: payload.result.recommendedPath[0] ?? null,
  });

  return { ok: true };
}

export async function submitRecommendationRelevanceRating(payload: {
  rating: number;
  recommendedModuleId: string;
}): Promise<{ ok: boolean; error?: string }> {
  const r = payload.rating;
  if (!Number.isInteger(r) || r < 1 || r > 5) {
    return { ok: false, error: "invalid_rating" };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user?.id) {
    return { ok: false, error: "not_authenticated" };
  }

  void logTelemetryEvent(user.id, "recommendation_rated", {
    rating: r,
    recommended_module_id: payload.recommendedModuleId,
  });

  return { ok: true };
}
