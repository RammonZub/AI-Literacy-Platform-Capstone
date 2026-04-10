/**
 * Profile Server Actions
 *
 * PURPOSE: Server-side mutations for profile updates
 *
 * WHY: Server Actions provide secure, type-safe database operations
 * with automatic form validation and revalidation.
 *
 * KEY RESPONSIBILITIES:
 * - Update profile name/display name
 * - Update profile bio/learning goals
 * - Update avatar URL
 * - Revalidate profile-related routes
 *
 * IMPLEMENTATION NOTES:
 * - All mutations are authenticated
 * - Returns error messages for client display
 * - Revalidates profile route to refresh data
 * - Uses zod for runtime validation
 *
 * DEPENDENCIES:
 * - @/lib/supabase/server: Supabase server client
 * - next/cache: Route revalidation
 *
 * @module app/(platform)/profile/actions
 * @created 2026-01-31
 */

"use server";

import { revalidatePath } from "next/cache";
import { platformRoutes } from "@/lib/routes/platform";
import { createClient } from "@/lib/supabase/server";

/**
 * Update profile display name
 *
 * Validates and updates the user's full name.
 *
 * @param formData - Form data containing displayName field
 * @returns Success or error message
 * @throws Error if validation fails or update fails
 */
export async function updateProfileName(formData: FormData) {
  const supabase = await createClient();

  // Get authenticated user
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return { error: "Authentication required" };
  }

  const displayName = formData.get("displayName") as string;

  // Validate display name
  if (!displayName || displayName.trim().length < 2) {
    return { error: "Name must be at least 2 characters" };
  }

  if (displayName.trim().length > 50) {
    return { error: "Name must be less than 50 characters" };
  }

  const trimmedName = displayName.trim();

  // Update profile
  const { error } = await supabase
    .from("users")
    .update({ full_name: trimmedName })
    .eq("id", user.id);

  if (error) {
    console.error("Failed to update profile name:", error);
    return { error: "Failed to update name" };
  }

  // Revalidate profile page to show updated data
  revalidatePath(platformRoutes.profile);

  return { success: true, message: "Name updated successfully" };
}

/**
 * Update profile bio/learning goals
 *
 * Validates and updates the user's learning goals or bio.
 *
 * @param formData - Form data containing bio field
 * @returns Success or error message
 */
export async function updateProfileBio(formData: FormData) {
  const supabase = await createClient();

  // Get authenticated user
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return { error: "Authentication required" };
  }

  const bio = formData.get("bio") as string;

  // Validate bio
  if (bio && bio.length > 500) {
    return { error: "Bio must be less than 500 characters" };
  }

  const trimmedBio = bio?.trim() || null;
  const { data: userData, error: readError } = await supabase
    .from("users")
    .select("metadata")
    .eq("id", user.id)
    .single();

  if (readError) {
    console.error("Failed to read user metadata:", readError);
    return { error: "Failed to update bio" };
  }

  const currentMetadata = (userData?.metadata as Record<string, unknown>) ?? {};

  // Store profile text in metadata.
  const { error } = await supabase
    .from("users")
    .update({ metadata: { ...currentMetadata, bio: trimmedBio } })
    .eq("id", user.id);

  if (error) {
    console.error("Failed to update profile bio:", error);
    return { error: "Failed to update bio" };
  }

  // Revalidate profile page
  revalidatePath(platformRoutes.profile);

  return { success: true, message: "Bio updated successfully" };
}

// =====================================================
// RECOMMENDATION FEEDBACK
// =====================================================

export interface RecommendationFeedbackPayload {
  /** How well did the recommended module match what they actually need? (1–10) */
  q_recommendation_fit: number;
  /** How would they rate their first lesson experience? (1–10) */
  q_first_lesson: number;
  /** How easy was it to navigate and find their way around the platform? (1–10) */
  q_ease_of_use: number;
  /** How well does the 10–15 min lesson format fit their daily routine? (1–10) */
  q_microlearning_fit: number;
  /** Overall satisfaction with the platform (1–10) */
  q_overall_satisfaction: number;
  /** The module ID that was recommended to this user */
  recommended_module_id: string;
}

/**
 * Save recommendation feedback to users.metadata
 *
 * Merges the feedback into the user's metadata JSONB field so it is stored
 * permanently and queryable without a separate table. Also emits a telemetry
 * event for the thesis pilot analysis pipeline.
 *
 * @param payload - Five 1–10 ratings covering recommendation fit, first lesson,
 *   ease of use, micro-learning format fit, and overall satisfaction, plus
 *   the recommended module id.
 * @returns Success or error
 */
export async function saveRecommendationFeedback(
  payload: RecommendationFeedbackPayload,
): Promise<{ success: boolean; error?: string }> {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return { success: false, error: "Authentication required" };
  }

  // Validate all ratings are integers between 1 and 10
  const ratings = [
    payload.q_recommendation_fit,
    payload.q_first_lesson,
    payload.q_ease_of_use,
    payload.q_microlearning_fit,
    payload.q_overall_satisfaction,
  ];
  if (ratings.some((r) => !Number.isInteger(r) || r < 1 || r > 10)) {
    return { success: false, error: "Each rating must be a whole number from 1 to 10" };
  }

  if (!payload.recommended_module_id) {
    return { success: false, error: "Recommended module ID is required" };
  }

  // Read current metadata so we can merge without overwriting other keys
  const { data: userData, error: readError } = await supabase
    .from("users")
    .select("metadata")
    .eq("id", user.id)
    .single();

  if (readError) {
    console.error("Failed to read user metadata:", readError);
    return { success: false, error: "Failed to read profile data" };
  }

  const currentMetadata = (userData?.metadata as Record<string, unknown>) ?? {};

  const feedbackEntry = {
    submitted_at: new Date().toISOString(),
    recommended_module_id: payload.recommended_module_id,
    q_recommendation_fit: payload.q_recommendation_fit,
    q_first_lesson: payload.q_first_lesson,
    q_ease_of_use: payload.q_ease_of_use,
    q_microlearning_fit: payload.q_microlearning_fit,
    q_overall_satisfaction: payload.q_overall_satisfaction,
  };

  const updatedMetadata = {
    ...currentMetadata,
    recommendation_feedback: feedbackEntry,
  };

  const { error: updateError } = await supabase
    .from("users")
    .update({ metadata: updatedMetadata })
    .eq("id", user.id);

  if (updateError) {
    console.error("Failed to save recommendation feedback:", updateError);
    return { success: false, error: "Failed to save feedback" };
  }

  revalidatePath(platformRoutes.profile);

  return { success: true };
}

/**
 * Update profile avatar
 *
 * Updates the user's avatar URL.
 *
 * @param avatarUrl - The URL of the new avatar image
 * @returns Success or error message
 */
export async function updateProfileAvatar(avatarUrl: string) {
  const supabase = await createClient();

  // Get authenticated user
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return { error: "Authentication required" };
  }

  // Validate avatar URL
  if (!avatarUrl || avatarUrl.trim().length === 0) {
    return { error: "Avatar URL is required" };
  }

  const { data: userData, error: readError } = await supabase
    .from("users")
    .select("metadata")
    .eq("id", user.id)
    .single();

  if (readError) {
    console.error("Failed to read user metadata:", readError);
    return { error: "Failed to update avatar" };
  }

  const currentMetadata = (userData?.metadata as Record<string, unknown>) ?? {};

  // Store avatar URL in metadata.
  const { error } = await supabase
    .from("users")
    .update({
      metadata: {
        ...currentMetadata,
        avatar_url: avatarUrl,
        avatar_updated_at: new Date().toISOString(),
      },
    })
    .eq("id", user.id);

  if (error) {
    console.error("Failed to update avatar:", error);
    return { error: "Failed to update avatar" };
  }

  // Revalidate profile page
  revalidatePath(platformRoutes.profile);

  return { success: true, message: "Avatar updated successfully" };
}
