/**
 * Paywall Checkout Session API
 *
 * PURPOSE: Create Stripe Checkout sessions for authenticated users without access
 *
 * CONTEXT: Called from PaywallPopup when an authenticated user with expired/no
 * subscription clicks "Get subscription". Unlike the main checkout flow, this
 * doesn't require a quiz session or checkoutId.
 *
 * FLOW:
 * 1. Verify user is authenticated
 * 2. Create Stripe Checkout session with subscription mode
 * 3. Return Stripe checkout URL for redirect
 *
 * SECURITY:
 * - Requires authentication (returns 401 if not logged in)
 * - User email is pulled from auth session (not client-provided)
 * - Cancel URL redirects back to platform (paywall will show again)
 */

import { type NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe/client";
import { getPriceIdForPlan, type PriceTierId, STRIPE_DEFAULT_COUPON_ID } from "@/lib/stripe/config";
import { createClient } from "@/lib/supabase/server";

// Default plan if none specified
const DEFAULT_PLAN: PriceTierId = "4week";

export async function POST(request: NextRequest) {
  // ========================================
  // LOGGING: Request received
  // ========================================
  console.log("=".repeat(60));
  console.log("[PAYWALL-CHECKOUT] Stripe Checkout Session Creation Started");
  console.log("[PAYWALL-CHECKOUT] Timestamp:", new Date().toISOString());
  console.log("=".repeat(60));

  try {
    // ========================================
    // AUTHENTICATION: Verify user is logged in
    // ========================================
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      console.error("[PAYWALL-CHECKOUT] ❌ Unauthorized: No authenticated user");
      return NextResponse.json({ error: "Unauthorized - Please log in" }, { status: 401 });
    }

    console.log("[PAYWALL-CHECKOUT] ✅ Authenticated user:", user.id, user.email);

    // ========================================
    // INPUT VALIDATION: Get plan selection
    // ========================================
    const body = await request.json().catch(() => ({}));
    const planId = body.planId || DEFAULT_PLAN;

    console.log("[PAYWALL-CHECKOUT] Requested plan:", planId);

    // Validate plan and get price ID using centralized config
    let priceId: string;
    try {
      priceId = getPriceIdForPlan(planId);
    } catch (validationError) {
      console.error("[PAYWALL-CHECKOUT] ❌ Invalid planId:", planId);
      return NextResponse.json({ error: "Invalid plan selected" }, { status: 400 });
    }

    console.log("[PAYWALL-CHECKOUT] ✅ Plan validated, Price ID:", priceId);

    // ========================================
    // STRIPE SESSION: Create checkout session
    // ========================================
    console.log("[PAYWALL-CHECKOUT] 🔄 Creating Stripe Checkout session...");

    // WHY .trim(): Vercel env vars can pick up trailing newlines
    const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").trim();

    // Generate a unique ID for tracking (combines user_id + timestamp)
    const trackingId = `pw_${user.id.slice(0, 8)}_${Date.now()}`;

    const sessionParams = {
      mode: "subscription" as const,
      // WHY no payment_method_types: Enables Apple Pay, Google Pay, Link automatically
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      // After successful payment, redirect to checkout success (then normal app routes)
      success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      // If canceled, go back to platform (paywall will show since hasAccess is false)
      cancel_url: `${siteUrl}/platform`,
      // Pre-fill with authenticated user's email
      customer_email: user.email,
      // Apply default discount coupon
      ...(STRIPE_DEFAULT_COUPON_ID ? { discounts: [{ coupon: STRIPE_DEFAULT_COUPON_ID }] } : {}),
      metadata: {
        checkout_id: trackingId,
        plan_id: planId,
        user_id: user.id,
        user_email: user.email || "",
        source: "paywall", // Track that this came from paywall popup
      },
      subscription_data: {
        metadata: {
          checkout_id: trackingId,
          plan_id: planId,
          user_id: user.id,
          user_email: user.email || "",
          source: "paywall",
        },
      },
    };

    console.log("[PAYWALL-CHECKOUT] Session params:", JSON.stringify(sessionParams, null, 2));

    const session = await stripe.checkout.sessions.create(sessionParams);

    // ========================================
    // SUCCESS: Return checkout URL
    // ========================================
    console.log("[PAYWALL-CHECKOUT] ✅ SUCCESS! Session created");
    console.log("[PAYWALL-CHECKOUT] Session ID:", session.id);
    console.log("[PAYWALL-CHECKOUT] Checkout URL:", session.url);
    console.log("=".repeat(60));

    return NextResponse.json({
      checkoutUrl: session.url,
      sessionId: session.id,
    });
  } catch (error: unknown) {
    // ========================================
    // ERROR HANDLING
    // ========================================
    const errorType =
      typeof error === "object" && error !== null && "type" in error
        ? String((error as { type?: unknown }).type ?? "unknown")
        : "unknown";
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const errorStack = error instanceof Error ? error.stack : undefined;

    console.error("[PAYWALL-CHECKOUT] ❌ ERROR creating checkout session!");
    console.error("[PAYWALL-CHECKOUT] Error type:", errorType);
    console.error("[PAYWALL-CHECKOUT] Error message:", errorMessage);
    console.error("[PAYWALL-CHECKOUT] Error stack:", errorStack);
    console.log("=".repeat(60));

    return NextResponse.json(
      { error: "Failed to create checkout session. Please try again." },
      { status: 500 },
    );
  }
}
