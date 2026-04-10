/**
 * Shared utilities and types for progress actions
 *
 * This module contains common utilities, types, and helper functions
 * used across lesson, quiz, and task progress actions.
 */

import type { createClient } from "@/lib/supabase/server";
import type { Json } from "@/types/database.types";

// Type for progress data structure stored in JSONB
export type ProgressData = {
  slides?: Array<{ slideId: string; viewedAt: string }>;
  responses?: Array<{ taskId: string; response: string; submittedAt: string }>;
  currentSlide?: number;
  lastAccessedAt?: string;
};

/**
 * Helper function to get yesterday's date in YYYY-MM-DD format
 */
export function getYesterdayDate(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split("T")[0];
}

export function isMissingRpcFunctionError(error: unknown): boolean {
  if (!error || typeof error !== "object") return false;
  const maybeMessage =
    "message" in error ? String((error as { message?: unknown }).message ?? "") : "";
  return (
    maybeMessage.includes("Could not find the function") ||
    maybeMessage.includes("function public.")
  );
}

export function getFirstRpcRow<T extends Record<string, unknown>>(data: unknown): T | null {
  if (!Array.isArray(data) || data.length === 0) return null;
  const first = data[0];
  if (!first || typeof first !== "object") return null;
  return first as T;
}

type RpcCapableClient = {
  rpc: (fn: string, params?: Record<string, unknown>) => Promise<{ data: unknown; error: unknown }>;
};

export async function callRpc(
  supabase: Awaited<ReturnType<typeof createClient>>,
  fn: string,
  params?: Record<string, unknown>,
): Promise<{ data: unknown; error: unknown }> {
  const rpcClient = supabase as unknown as RpcCapableClient;
  return rpcClient.rpc(fn, params);
}

export async function awardXpWithAtomicFallback(
  supabase: Awaited<ReturnType<typeof createClient>>,
  userId: string,
  xp: number,
): Promise<{ newTotalXP: number }> {
  const today = new Date().toISOString().split("T")[0];

  const { data: userProfile } = await supabase
    .from("users")
    .select("total_xp, current_streak, longest_streak, last_activity_date")
    .eq("id", userId)
    .single();

  const newXP = (userProfile?.total_xp || 0) + xp;
  const newLevel = Math.floor(newXP / 100) + 1;

  const lastActivity = userProfile?.last_activity_date
    ? new Date(userProfile.last_activity_date).toISOString().split("T")[0]
    : null;

  let newStreak = userProfile?.current_streak || 0;
  if (lastActivity === today) {
    // Keep streak unchanged
  } else if (lastActivity === getYesterdayDate()) {
    newStreak += 1;
  } else {
    newStreak = 1;
  }

  await supabase
    .from("users")
    .update({
      total_xp: newXP,
      current_level: newLevel,
      current_streak: newStreak,
      longest_streak: Math.max(newStreak, userProfile?.longest_streak || 0),
      last_activity_date: today,
    })
    .eq("id", userId);

  return { newTotalXP: newXP };
}

/**
 * ============================================================================
 * ACCESS CONTROL HELPER
 * ============================================================================
 * Verifies that the authenticated user has active subscription access.
 *
 * SECURITY: This is CRITICAL for preventing paywall bypass. Users with
 * expired subscriptions must not be able to call Server Actions directly
 * to manipulate their progress, XP, or complete lessons.
 *
 * @param supabase - Supabase client instance
 * @returns User object if access granted
 * @throws Error if not authenticated or no subscription access
 * ============================================================================
 */
export async function verifyUserAccess(supabase: Awaited<ReturnType<typeof createClient>>) {
  // Step 1: Check authentication
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("User not authenticated");
  }

  // -------------------------------------------------------------------------
  // MVP: subscription / paywall gate disabled — restore post-MVP
  // -------------------------------------------------------------------------
  // const { data: profile, error } = await supabase
  //   .from("users")
  //   .select("has_access")
  //   .eq("id", user.id)
  //   .maybeSingle();
  //
  // if (error) {
  //   console.error("[Access Check] Database error:", error);
  //   throw new Error("Failed to verify access");
  // }
  //
  // const hasAccess =
  //   profile?.has_access === true || isDashboardAdminEmail(user.email ?? null);
  //
  // if (!hasAccess) {
  //   throw new Error("Subscription required");
  // }

  return user;
}

// Re-export Json type for convenience
export type { Json };
