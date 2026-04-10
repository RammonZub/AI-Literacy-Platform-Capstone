/**
 * Stripe Checkout Session Details API
 *
 * PURPOSE: Retrieve Stripe checkout session details for the success page (confirmation + analytics)
 *
 * CONTEXT: After successful checkout, Stripe redirects to the success page
 * with a session_id query parameter. This API fetches the session details
 * to display order confirmation and optional client-side purchase telemetry when enabled.
 *
 * SECURITY: Only retrieves sessions, does not modify any data.
 * WHY: Success page needs actual payment amount (amount_total) for accurate purchase reporting
 *
 * IMPLEMENTATION NOTES:
 * - Auto-detects session mode (test/live) from session ID prefix
 * - Uses appropriate Stripe API key for the mode
 * - WHY: Stripe enforces mode matching - cannot fetch live sessions with test keys
 *
 * Session ID Prefix Patterns:
 * - cs_test_ → Test mode (uses STRIPE_SECRET_KEY)
 * - cs_live_ → Live mode (uses STRIPE_SECRET_LIVE_KEY)
 */

import { type NextRequest, NextResponse } from "next/server";
import { getClientForSession } from "@/lib/stripe/client";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json({ error: "Missing session_id parameter" }, { status: 400 });
    }

    // Get appropriate Stripe client based on session mode
    // WHY: Live sessions require live keys, test sessions require test keys
    const stripe = getClientForSession(sessionId);

    // Fetch session details from Stripe with payment_intent expanded
    // WHY: Expanding payment_intent gives us access to payment_status
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["payment_intent"], // Includes payment_status in response
    });

    // Return relevant session data for success page and client purchase event
    // WHY: amount_total is needed for purchase value (in cents, convert to dollars on client)
    // WHY: payment_status is needed to display actual payment status (not 'N/A')
    return NextResponse.json({
      id: session.id,
      amount_total: session.amount_total, // Payment amount in cents
      currency: session.currency, // Currency code (e.g., 'usd')
      customer_email: session.customer_email,
      metadata: session.metadata,
      subscription: session.subscription,
      payment_status: session.payment_status, // Payment status ('paid', 'unpaid', etc.)
    });
  } catch (error) {
    console.error("Error fetching checkout session:", error);
    return NextResponse.json({ error: "Failed to fetch session details" }, { status: 500 });
  }
}
