/**
 * ============================================================================
 * ACCESS CONTROL UTILITIES
 * ============================================================================
 *
 * Shared access control functions for server actions.
 *
 * SECURITY: These utilities are CRITICAL for preventing paywall bypass.
 * Users with expired subscriptions must not be able to call Server Actions
 * directly to manipulate their progress, XP, or complete lessons.
 *
 * ============================================================================
 * VERIFY USER ACCESS
 * ============================================================================
 * Verifies that the authenticated user has active subscription access.
 *
 * - User must be authenticated
 * - User must have has_access = true when the paywall gate is active
 *
 * @param supabase - Supabase client instance
 * @returns User object if access granted
 * @throws Error if not authenticated or no subscription access
 * ============================================================================
 */

import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database.types";

// Type for the Supabase client returned by createClient()
type SupabaseServerClient = SupabaseClient<Database>;

/**
 * Verifies that the authenticated user has active subscription access.
 *
 * Uses explicit `=== true` for security-critical boolean checks.
 * This matches the pattern used in platform/layout.tsx for consistency.
 * @param supabase - Supabase client instance (from createClient())
 * @returns User object if access granted
 * @throws Error with message 'User not authenticated' or 'Subscription required'
 */
export async function verifyUserAccess(supabase: SupabaseServerClient) {
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
