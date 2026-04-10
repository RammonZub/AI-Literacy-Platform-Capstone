/**
 * ============================================================================
 * STREAK CALCULATION UTILITIES
 * ============================================================================
 *
 * Shared streak calculation logic for server actions.
 *
 * Streak rules:
 * - If last activity was today: streak stays the same (no increment)
 * - If last activity was yesterday: increment streak by 1
 * - Otherwise: streak resets to 1 (streak broken or first activity)
 *
 * Updates the users table with new streak values.
 *
 * ============================================================================
 */

import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database.types";

// Type for the Supabase client returned by createClient()
type SupabaseServerClient = SupabaseClient<Database>;

/**
 * Helper function to get yesterday's date in YYYY-MM-DD format
 */
function getYesterdayDate(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split("T")[0];
}

/**
 * User profile data needed for streak calculation
 */
export interface UserProfile {
  total_xp: number | null;
  current_streak: number | null;
  longest_streak: number | null;
  last_activity_date: string | null;
}

/**
 * Result of streak calculation
 */
export interface StreakUpdateResult {
  currentStreak: number;
  longestStreak: number;
  today: string;
}

/**
 * Calculates and updates the user's streak based on their last activity date.
 *
 * @param supabase - Supabase client instance
 * @param userId - The user's ID
 * @returns The updated streak values
 */
export async function calculateAndUpdateStreak(
  supabase: SupabaseServerClient,
  userId: string,
): Promise<StreakUpdateResult> {
  // Get current user profile
  const { data: userProfile } = await supabase
    .from("users")
    .select("total_xp, current_streak, longest_streak, last_activity_date")
    .eq("id", userId)
    .single();

  if (!userProfile) {
    throw new Error("User profile not found");
  }

  // Calculate streak
  const today = new Date().toISOString().split("T")[0];
  const lastActivity = userProfile.last_activity_date
    ? new Date(userProfile.last_activity_date).toISOString().split("T")[0]
    : null;

  let newStreak = userProfile.current_streak || 0;

  if (lastActivity === today) {
    // Already completed today - no change to streak
    newStreak = newStreak;
  } else if (lastActivity === getYesterdayDate()) {
    // Completed yesterday - increment streak
    newStreak += 1;
  } else {
    // Streak broken or first time - start at 1
    newStreak = 1;
  }

  const newLongestStreak = Math.max(newStreak, userProfile.longest_streak || 0);

  // Update users table
  await supabase
    .from("users")
    .update({
      current_streak: newStreak,
      longest_streak: newLongestStreak,
      last_activity_date: today,
    })
    .eq("id", userId);

  return {
    currentStreak: newStreak,
    longestStreak: newLongestStreak,
    today,
  };
}

/**
 * Calculates streak without updating the database.
 * Useful for previewing what the streak would be.
 *
 * @param userProfile - The user's profile data
 * @returns The calculated streak values (not yet persisted)
 */
export function calculateStreakPreview(userProfile: UserProfile): StreakUpdateResult {
  const today = new Date().toISOString().split("T")[0];
  const lastActivity = userProfile.last_activity_date
    ? new Date(userProfile.last_activity_date).toISOString().split("T")[0]
    : null;

  let newStreak = userProfile.current_streak || 0;

  if (lastActivity === today) {
    // Already completed today - no change to streak
    newStreak = newStreak;
  } else if (lastActivity === getYesterdayDate()) {
    // Completed yesterday - increment streak
    newStreak += 1;
  } else {
    // Streak broken or first time - start at 1
    newStreak = 1;
  }

  return {
    currentStreak: newStreak,
    longestStreak: Math.max(newStreak, userProfile.longest_streak || 0),
    today,
  };
}
