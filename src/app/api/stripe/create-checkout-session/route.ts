/**
 * Stripe Checkout Session API
 *
 * PURPOSE: Create Stripe Checkout sessions for subscription purchases
 *
 * CONTEXT: Called from checkout page when user clicks "GET MY PLAN"
 *
 * FLOW:
 * 1. Receive checkoutId and selected plan
 * 2. Create Stripe Checkout session with subscription mode
 * 3. Include checkoutId in metadata
 * 4. Return Stripe checkout URL for redirect
 */

import { headers } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe/client";
import {
  getCurrencyForCountry,
  getPaymentModeForPlan,
  getPriceIdForPlanAndCurrency,
  getTestCountryOverride,
  isValidWelcomeCoupon,
  STRIPE_DEFAULT_COUPON_ID,
  STRIPE_RUNTIME_MODE,
  STRIPE_TESTING_COUPON_ID,
  type SupportedCurrency,
  validateStripeModeConfiguration,
} from "@/lib/stripe/config";
import { getOrCreateStripeCustomer } from "@/lib/stripe/customer";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  // ========================================
  // LOGGING: Request received
  // ========================================
  console.log("=".repeat(60));
  console.log("[CHECKOUT] Stripe Checkout Session Creation Started");
  console.log("[CHECKOUT] Timestamp:", new Date().toISOString());
  console.log("=".repeat(60));

  try {
    // ========================================
    // PARSE REQUEST BODY FIRST
    // ========================================
    const {
      checkoutId,
      planId,
      noDiscount,
      currency: clientCurrency,
      testCountry,
      couponCode,
    } = await request.json();

    // ========================================
    // MULTI-CURRENCY: Use client-provided currency OR detect from geo headers
    // ========================================
    // Priority: 1) Client-provided currency (already detected server-side)
    //           2) Geo header detection (fallback)
    let currency: SupportedCurrency;

    if (clientCurrency && ["usd", "cad", "aud", "gbp", "eur"].includes(clientCurrency)) {
      // Use currency provided by frontend (already detected server-side from geo headers)
      currency = clientCurrency as SupportedCurrency;
      console.log("[CHECKOUT] Using client-provided currency:", currency);
    } else {
      // Fallback: Detect from geo headers
      const headersList = await headers();
      const testCountryOverride = getTestCountryOverride(testCountry);
      const countryCode = testCountryOverride || headersList.get("x-vercel-ip-country");
      currency = countryCode ? getCurrencyForCountry(countryCode) : "usd";
      console.log("[CHECKOUT] Fallback currency detection from headers:", {
        country: countryCode || "unknown",
        detected_currency: currency,
        testOverride: Boolean(testCountryOverride),
      });
    }

    console.log("[CHECKOUT] Request payload:", {
      checkoutId: checkoutId ? `${String(checkoutId).slice(0, 8)}...` : null,
      planId,
      noDiscount: !!noDiscount,
      currency,
      clientCurrency: clientCurrency || "not provided",
    });

    // Log if testing mode (no discount) is enabled
    if (noDiscount) {
      console.log(
        "[CHECKOUT] 🧪 TEST MODE: Automatic discount bypassed, allowing manual promo codes",
      );
    }

    // Validate input
    if (!checkoutId || !planId) {
      console.error("[CHECKOUT] ❌ Validation failed: Missing checkoutId or planId");
      return NextResponse.json({ error: "Missing checkoutId or planId" }, { status: 400 });
    }

    // Validate plan and get price ID for the detected currency
    let priceId: string;
    try {
      priceId = getPriceIdForPlanAndCurrency(planId, currency);
    } catch {
      console.error("[CHECKOUT] ❌ Validation failed: Invalid planId or currency", {
        planId,
        currency,
      });
      return NextResponse.json(
        { error: "Invalid planId or currency configuration" },
        { status: 400 },
      );
    }

    console.log("[CHECKOUT] ✅ Input validation passed");
    console.log("[CHECKOUT] Price ID for plan:", planId, "currency:", currency, "=", priceId);

    // Determine payment mode (subscription vs one-time payment)
    const paymentMode = getPaymentModeForPlan(planId);
    console.log("[CHECKOUT] Payment mode:", paymentMode);
    console.log("[CHECKOUT] Stripe runtime mode:", STRIPE_RUNTIME_MODE);

    const modeValidation = validateStripeModeConfiguration();
    if (!modeValidation.clean) {
      console.warn("[CHECKOUT] ⚠️ Stripe mode-scoped env warnings:", modeValidation.warnings);
    }

    // Bind checkout success auth to this browser/session.
    // This token is stored in Stripe metadata and a first-party HttpOnly cookie.
    const checkoutAuthToken = crypto.randomUUID();

    // Get Supabase client to check for authenticated user
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log(
      "[CHECKOUT] Auth status:",
      user ? `Authenticated (user_id: ${user.id})` : "Anonymous",
    );

    const authEmail = user?.email || null;
    const checkoutEmail = authEmail;

    if (authEmail) {
      console.log("[CHECKOUT] ✅ Using authenticated user email:", authEmail);
    } else {
      console.log("[CHECKOUT] ⚠️ No email found for checkout prefill");
    }

    // Create Stripe Checkout session for subscription
    console.log("[CHECKOUT] 🔄 Creating Stripe Checkout session...");
    // WHY .trim(): Vercel env vars can pick up trailing newlines from dashboard copy-paste,
    // which causes Stripe to reject the URL as invalid (url_invalid on success_url param)
    const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").trim();

    // Look up welcome promotion code if applicable
    // WHY: User codes like "WELCOME-JOSH" are Promotion Codes (not Coupons)
    // Promotion codes have API IDs like "promo_xxx" that we need to pass to Stripe
    let welcomePromoCodeId: string | null = null;
    if (isValidWelcomeCoupon(couponCode)) {
      console.log("[CHECKOUT] 🔍 Looking up promotion code:", couponCode);
      try {
        const promoCodes = await stripe.promotionCodes.list({
          code: couponCode,
          active: true,
          limit: 1,
        });
        if (promoCodes.data.length > 0) {
          welcomePromoCodeId = promoCodes.data[0].id;
          console.log("[CHECKOUT] ✅ Found promotion code ID:", welcomePromoCodeId);
        } else {
          console.error("[CHECKOUT] ❌ Promotion code not found:", couponCode);
        }
      } catch (err) {
        console.error("[CHECKOUT] ❌ Error looking up promotion code:", err);
      }
    }

    // ========================================
    // STRIPE CUSTOMER: Get or create customer BEFORE checkout
    // ========================================
    // WHY: Creating customers before checkout enables:
    // - Customer portal access (requires persistent customer)
    // - Payment method reuse for returning customers
    // - Subscription management
    // - Clean payment history tracking
    // - Abandoned cart recovery
    //
    // DESIGN: Reuse existing customers by email to prevent duplicates.
    // Customers who abandon checkout are acceptable (industry standard).
    let stripeCustomerId: string | null = null;

    if (checkoutEmail) {
      try {
        const customerMetadata: Record<string, string> = {
          checkout_id: checkoutId,
        };

        stripeCustomerId = await getOrCreateStripeCustomer(checkoutEmail, customerMetadata);
        console.log("[CHECKOUT] ✅ Stripe customer ready:", stripeCustomerId);
      } catch (err) {
        console.error("[CHECKOUT] ⚠️ Failed to create/get Stripe customer:", err);
        // Continue without customer - will use customer_email as fallback
      }
    }

    // Build subscription metadata conditionally (Stripe types don't allow undefined)
    const subscriptionMetadata: Record<string, string> = {
      checkout_id: checkoutId,
      plan_id: planId,
      user_id: user?.id || "anonymous",
      checkout_auth_token: checkoutAuthToken,
      stripe_customer_id: stripeCustomerId || "",
    };
    // Authenticated checkout uses the signed-in email for Stripe customer linkage.
    if (checkoutEmail) {
      subscriptionMetadata.user_email = checkoutEmail;
    }

    const checkoutSuccessPath = "/checkout/success";
    const checkoutCancelPath = `/checkout/${checkoutId}?canceled=true`;

    const sessionParams = {
      mode: paymentMode,
      // WHY no payment_method_types: Omitting this lets Stripe use "automatic_payment_methods",
      // which enables Apple Pay, Google Pay, Link, and all methods configured in the Stripe Dashboard.
      // Explicitly setting ['card'] was blocking all other payment methods.
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}${checkoutSuccessPath}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}${checkoutCancelPath}`,
      // CUSTOMER LINKING: Use customer ID if available, fallback to customer_email
      // WHY: customer: cus_xxx creates a linked customer (not guest)
      // customer_email only creates a temporary guest customer
      customer: stripeCustomerId || undefined,
      customer_email: stripeCustomerId ? undefined : checkoutEmail || undefined,
      // Coupon priority: welcome coupon > noDiscount testing > default 50% off
      ...(() => {
        // Priority 1: Welcome promotion code (100% off for early access users)
        // Use promotion_code (not coupon) because these are Promotion Codes in Stripe
        if (welcomePromoCodeId) {
          console.log(
            "[CHECKOUT] 🎁 Welcome promotion code applied:",
            couponCode,
            "->",
            welcomePromoCodeId,
          );
          return { discounts: [{ promotion_code: welcomePromoCodeId }] };
        }
        // Priority 2: Testing mode (noDiscount=true)
        if (noDiscount) {
          return STRIPE_TESTING_COUPON_ID
            ? { discounts: [{ coupon: STRIPE_TESTING_COUPON_ID }] }
            : { allow_promotion_codes: true };
        }
        // Priority 3: Default 50% off coupon
        return STRIPE_DEFAULT_COUPON_ID
          ? { discounts: [{ coupon: STRIPE_DEFAULT_COUPON_ID }] }
          : {};
      })(),
      metadata: {
        checkout_id: checkoutId,
        plan_id: planId,
        user_id: user?.id || "anonymous",
        checkout_auth_token: checkoutAuthToken,
        stripe_customer_id: stripeCustomerId || "", // Track customer ID for webhook
        no_discount: noDiscount ? "true" : "false", // Track test mode for debugging
        welcome_coupon: isValidWelcomeCoupon(couponCode) ? couponCode : undefined, // Track welcome coupon usage
        payment_mode: paymentMode, // Track whether subscription or one-time
        currency: currency, // Track the currency used for this checkout
      },
      // Only add subscription_data for subscription mode
      ...(paymentMode === "subscription" && {
        subscription_data: {
          metadata: subscriptionMetadata,
        },
      }),
      // Add payment_intent_data for one-time payments
      ...(paymentMode === "payment" && {
        payment_intent_data: {
          metadata: subscriptionMetadata,
        },
      }),
    };

    console.log("[CHECKOUT] Session params summary:", {
      mode: paymentMode,
      hasStripeCustomer: Boolean(stripeCustomerId),
      stripeCustomerId: stripeCustomerId ? `${stripeCustomerId.slice(0, 8)}...` : null,
      hasCustomerEmail: Boolean(checkoutEmail),
      hasDiscount: Boolean((sessionParams as { discounts?: unknown }).discounts),
      successUrlHost: siteUrl,
    });

    let session;
    try {
      session = await stripe.checkout.sessions.create(sessionParams);
    } catch (stripeErr: unknown) {
      // Stripe rejects mixed currencies on the same customer. If this happens,
      // look up the customer's existing currency and retry with that currency.
      const isCurrencyConflict =
        stripeErr instanceof Error &&
        stripeErr.message.includes("cannot combine currencies");

      if (isCurrencyConflict && stripeCustomerId) {
        console.warn("[CHECKOUT] Currency conflict for customer", stripeCustomerId, "— retrying with customer's existing currency");

        // Extract the customer's existing currency from the error message
        const currencyMatch = stripeErr instanceof Error
          ? stripeErr.message.match(/with currency (\w+)/)
          : null;
        const customerCurrency = currencyMatch?.[1]?.toLowerCase() as SupportedCurrency | undefined;

        if (customerCurrency && ["usd", "cad", "aud", "gbp", "eur"].includes(customerCurrency)) {
          currency = customerCurrency;
          priceId = getPriceIdForPlanAndCurrency(planId, currency);
          (sessionParams.line_items as { price: string; quantity: number }[])[0].price = priceId;
          (sessionParams.metadata as Record<string, string>).currency = currency;

          console.log("[CHECKOUT] Retrying with currency:", currency, "priceId:", priceId);
          session = await stripe.checkout.sessions.create(sessionParams);
        } else {
          throw stripeErr; // Can't recover — rethrow
        }
      } else {
        throw stripeErr; // Not a currency conflict — rethrow
      }
    }

    console.log("[CHECKOUT] ✅ SUCCESS! Session created");
    console.log("[CHECKOUT] Session ID:", session.id);
    console.log("[CHECKOUT] Checkout URL:", session.url);
    console.log("[CHECKOUT] Customer ID:", session.customer || "none");
    console.log("[CHECKOUT] Customer Email Present:", Boolean(session.customer_email));
    console.log("[CHECKOUT] Mode:", session.mode);
    console.log("[CHECKOUT] Payment Status:", session.payment_status);
    console.log("[CHECKOUT] Status:", session.status);
    console.log("=".repeat(60));

    const response = NextResponse.json({
      checkoutUrl: session.url,
      sessionId: session.id,
      currency: currency, // Return detected currency to frontend
    });

    response.cookies.set("checkout_auth_proof", `${checkoutId}:${checkoutAuthToken}`, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 2, // 2 hours
    });

    return response;
  } catch (error: unknown) {
    // Detailed error logging
    console.error("[CHECKOUT] ❌ ERROR creating checkout session!");

    let errorDetail = "Unknown error";
    if (error instanceof Error) {
      console.error("[CHECKOUT] Error name:", error.name);
      console.error("[CHECKOUT] Error message:", error.message);
      console.error("[CHECKOUT] Error stack:", error.stack);
      errorDetail = error.message;

      // Log Stripe-specific properties if present
      const stripeError = error as Error & {
        type?: string;
        code?: string;
        param?: string;
        statusCode?: number;
      };
      if (stripeError.type) {
        console.error("[CHECKOUT] Stripe error type:", stripeError.type);
        errorDetail = `[Stripe ${stripeError.type}] ${errorDetail}`;
      }
      if (stripeError.code) console.error("[CHECKOUT] Stripe error code:", stripeError.code);
      if (stripeError.param) console.error("[CHECKOUT] Stripe error param:", stripeError.param);
    }
    console.error("[CHECKOUT] Raw error:", JSON.stringify(error, null, 2));
    console.log("=".repeat(60));

    return NextResponse.json(
      {
        error: "Failed to create checkout session. Please try again.",
        debug_hint: errorDetail,
      },
      { status: 500 },
    );
  }
}
