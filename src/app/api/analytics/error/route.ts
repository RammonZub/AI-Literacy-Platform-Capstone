/**
 * Client-side error tracking — persisted to `telemetry_events`.
 *
 * POST /api/analytics/error
 */

import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { persistTelemetryRow } from "@/lib/telemetry";

interface ErrorTrackingRequest {
  event_name: string;
  page_path: string;
  error_message?: string;
  error_stack?: string;
  error_name?: string;
  user_agent?: string;
  context?: Record<string, unknown>;
}

interface ErrorTrackingResponse {
  success: boolean;
  recorded_at?: string;
  error?: string;
}

export async function POST(request: NextRequest): Promise<NextResponse<ErrorTrackingResponse>> {
  try {
    let body: ErrorTrackingRequest;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ success: false, error: "Invalid JSON body" }, { status: 400 });
    }

    if (!body.event_name || typeof body.event_name !== "string") {
      return NextResponse.json(
        { success: false, error: "event_name is required" },
        { status: 400 },
      );
    }

    if (!body.page_path || typeof body.page_path !== "string") {
      return NextResponse.json({ success: false, error: "page_path is required" }, { status: 400 });
    }

    let visitorId: string | null = null;
    try {
      const cookieStore = await cookies();
      visitorId = cookieStore.get("visitor_id")?.value || null;
    } catch {
      /* ignore */
    }

    const geoCountry = request.headers.get("x-vercel-ip-country");
    const geoRegion = request.headers.get("x-vercel-ip-country-region");
    const userAgent = (request.headers.get("user-agent") || body.user_agent || "").slice(0, 500);

    const context: Record<string, unknown> = {
      ...(body.context ?? {}),
      error_stack: body.error_stack,
      error_name: body.error_name,
      device: { user_agent: userAgent },
    };

    let errorReason: string | null = null;
    if (body.error_name && body.error_message) {
      errorReason = `${body.error_name}: ${body.error_message}`.slice(0, 500);
    } else if (body.error_message) {
      errorReason = body.error_message.slice(0, 500);
    }

    const now = new Date().toISOString();

    const payload: Record<string, unknown> = {
      source_event_name: body.event_name,
      page_path: body.page_path,
      error_reason: errorReason,
      visitor_session_token: visitorId,
      geo_country: geoCountry,
      geo_region: geoRegion,
      context,
    };

    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    await persistTelemetryRow(user?.id ?? null, "client_error", payload);

    return NextResponse.json({ success: true, recorded_at: now });
  } catch (error) {
    console.error("[analytics/error POST] Unexpected error:", error);
    return NextResponse.json({
      success: true,
      recorded_at: new Date().toISOString(),
    });
  }
}

export async function OPTIONS(): Promise<NextResponse> {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    },
  });
}
