/**
 * Checkout session heartbeat.
 *
 * Records lightweight checkout telemetry such as currency detection, CTA
 * source, and selected plan without introducing a dedicated checkout session
 * persistence table.
 */

import { headers } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import { getCurrencyForCountry, getTestCountryOverride } from "@/lib/stripe/config";
import { createServiceClient } from "@/lib/supabase/server";
import type { Json } from "@/types/database.types";

interface CreateSessionRequest {
  checkout_id: string;
  selected_plan?: string;
  checkout_version?: string;
  offer_variant?: string;
  action?: "page_load" | "checkout_initiated" | "cta_click" | "plan_changed";
  cta_type?: "header_scroll" | "main_cta" | "sticky_cta" | "banner_cta" | "primary_cta";
  testCountry?: string;
}

interface CreateSessionResponse {
  success: boolean;
  checkout_id: string;
  is_new: boolean;
  currency: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CreateSessionRequest;
    const checkout_id =
      typeof body.checkout_id === "string" && body.checkout_id.length > 0
        ? body.checkout_id
        : null;
    if (!checkout_id) {
      return NextResponse.json({ error: "checkout_id required" }, { status: 400 });
    }

    const headersList = await headers();
    const testCountryOverride = getTestCountryOverride(body.testCountry);
    const countryCode = testCountryOverride || headersList.get("x-vercel-ip-country");
    const currency = countryCode ? getCurrencyForCountry(countryCode) : "usd";

    const admin = createServiceClient();
    const telemetryPayload: Json = {
      checkout_id,
      action: body.action ?? "page_load",
      selected_plan: body.selected_plan ?? null,
      checkout_version: body.checkout_version ?? null,
      offer_variant: body.offer_variant ?? null,
      cta_type: body.cta_type ?? null,
      currency,
      country: countryCode ?? null,
    };

    const { error } = await admin.from("telemetry_events").insert({
      user_id: null,
      event_type: "checkout_session_activity",
      payload: telemetryPayload,
    });

    if (error) {
      console.error("[create-session] telemetry insert:", error.message);
    }

    const res: CreateSessionResponse = {
      success: true,
      checkout_id,
      is_new: true,
      currency,
    };

    return NextResponse.json(res);
  } catch (err) {
    console.error("[create-session]", err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
