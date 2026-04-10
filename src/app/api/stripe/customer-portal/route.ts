/**
 * Stripe Customer Portal — requires JWT `stripe_customer_id` and active access (`users` row).
 */

import { type NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe/client";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  void request;
  console.log("[CUSTOMER PORTAL] Creating Customer Portal session");

  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      console.error("[CUSTOMER PORTAL] ❌ Unauthorized");
      return NextResponse.json({ error: "Authentication required" }, { status: 401 });
    }

    const { error: profileError } = await supabase
      .from("users")
      .select("id")
      .eq("id", user.id)
      .maybeSingle();

    if (profileError) {
      return NextResponse.json({ error: "Profile not found" }, { status: 500 });
    }

    // MVP: subscription gate off — restore post-MVP
    // if (!userData?.has_access) {
    //   const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").trim();
    //   return NextResponse.json({ checkoutUrl: `${siteUrl}/checkout` }, { status: 200 });
    // }

    const customerId = user.user_metadata?.stripe_customer_id as string | undefined;
    if (!customerId) {
      const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").trim();
      return NextResponse.json({ checkoutUrl: `${siteUrl}/checkout` }, { status: 200 });
    }

    const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").trim();
    const returnUrl = `${siteUrl}/platform/profile`;

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: returnUrl,
    });

    return NextResponse.json({ url: portalSession.url });
  } catch (error: unknown) {
    console.error("[CUSTOMER PORTAL]", error);
    return NextResponse.json({ error: "Failed to create portal session" }, { status: 500 });
  }
}
