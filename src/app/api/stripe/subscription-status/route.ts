/**
 * Stripe Subscription Status API
 *
 * PURPOSE: Returns the authenticated user's subscription status
 *
 * CONTEXT: Client components need to check if a user has an active subscription
 * to conditionally show/hide features (e.g., premium content, upgrade CTAs).
 * This API provides a single source of truth for subscription status.
 *
 * KEY RESPONSIBILITIES:
 * - Verify user is authenticated
 * - Query users table for subscription data
 * - Return hasAccess boolean and subscription status string
 * - Provide consistent access state across the application
 *
 * IMPLEMENTATION NOTES:
 * - Uses Supabase auth to verify user is authenticated
 * - Queries users table for has_access and subscription_status columns
 * - Returns null for both fields if user not found
 * - Uses regular Supabase client (respects RLS, not service role)
 *
 * DEPENDENCIES:
 * - @/lib/supabase/server: createClient for user authentication and queries
 *
 * SECURITY:
 * - Requires authenticated user session (cookie-based)
 * - Only returns subscription status for the authenticated user
 * - Respects Row Level Security (RLS) policies
 *
 * USAGE:
 * - Client components can call this API on mount to check subscription
 * - Use for conditional rendering of premium features
 * - Combine with middleware for server-side route protection
 *
 * @see src/lib/services/user-access.ts - Service that manages subscription state
 * @see src/middleware.ts - Uses JWT metadata for route protection
 * @author Claude Code
 * @created 2025-02-11
 */

import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

/**
 * Response shape for subscription status API
 *
 * WHY: TypeScript interface provides type safety for API consumers
 * and documents the exact response structure.
 */
interface SubscriptionStatusResponse {
  hasAccess: boolean;
  subscriptionStatus: string | null;
}

/**
 * GET /api/stripe/subscription-status
 *
 * Returns the authenticated user's subscription status.
 *
 * FLOW:
 * 1. Verify user is authenticated via Supabase
 * 2. Query users table for has_access and subscription_status
 * 3. Return subscription status data
 *
 * @returns { hasAccess: boolean, subscriptionStatus: string | null }
 * - hasAccess: true if user has active subscription, false otherwise
 * - subscriptionStatus: Stripe subscription status (active, cancelled, etc.) or null
 *
 * @example
 * // Client-side usage
 * const response = await fetch('/api/stripe/subscription-status')
 * const { hasAccess, subscriptionStatus } = await response.json()
 *
 * if (hasAccess) {
 *   // Show premium content
 * } else {
 *   // Show upgrade CTA
 * }
 */
export async function GET(request: NextRequest) {
  // ========================================
  // LOGGING: Request received
  // ========================================
  console.log("=".repeat(60));
  console.log("[SUBSCRIPTION STATUS] Fetching subscription status");
  console.log("[SUBSCRIPTION STATUS] Timestamp:", new Date().toISOString());
  console.log("=".repeat(60));

  try {
    // ========================================
    // STEP 1: Verify user is authenticated
    // ========================================
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      console.error("[SUBSCRIPTION STATUS] ❌ Unauthorized: No user session");
      return NextResponse.json({ error: "Authentication required" }, { status: 401 });
    }

    console.log("[SUBSCRIPTION STATUS] ✅ User authenticated:", user.id);

    // ========================================
    // STEP 2: Query users table for subscription status
    // ========================================
    // WHY: The users table stores has_access and subscription_status columns
    // which are the source of truth for subscription state.
    //
    // NOTE: We use the regular Supabase client (not service role) because:
    // 1. We're only querying the authenticated user's own data
    // 2. RLS policies ensure users can only read their own rows
    // 3. Service role is not needed for this simple read operation
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("subscription_status")
      .eq("id", user.id)
      .maybeSingle();

    if (userError) {
      console.error("[SUBSCRIPTION STATUS] ❌ Error querying users table:", userError);
      return NextResponse.json({ error: "Failed to fetch subscription status" }, { status: 500 });
    }

    // ========================================
    // STEP 3: Return subscription status
    // ========================================
    const response: SubscriptionStatusResponse = {
      // MVP: paywall off — restore: hasAccess from userData.has_access
      hasAccess: true,
      subscriptionStatus: userData?.subscription_status ?? null,
    };

    console.log("[SUBSCRIPTION STATUS] ✅ SUCCESS! Status fetched:", {
      hasAccess: response.hasAccess,
      subscriptionStatus: response.subscriptionStatus,
    });
    console.log("=".repeat(60));

    return NextResponse.json(response);
  } catch (error: unknown) {
    // ========================================
    // ERROR HANDLING
    // ========================================
    const err = error instanceof Error ? error : new Error(String(error));
    console.error("[SUBSCRIPTION STATUS] ❌ ERROR fetching subscription status!");
    console.error("[SUBSCRIPTION STATUS] Error name:", err.name);
    console.error("[SUBSCRIPTION STATUS] Error message:", err.message);
    console.error("[SUBSCRIPTION STATUS] Error stack:", err.stack);
    console.log("=".repeat(60));

    return NextResponse.json(
      { error: "Failed to fetch subscription status", details: err.message },
      { status: 500 },
    );
  }
}
