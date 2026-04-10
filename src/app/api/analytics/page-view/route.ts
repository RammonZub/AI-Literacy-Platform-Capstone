/**
 * Page view API — persists anonymous or signed-in views to `telemetry_events`.
 *
 * POST /api/analytics/page-view
 */

import { type NextRequest, NextResponse } from "next/server";
import {
  derivePageTypeFromPath,
  normalizeScrollDepthPercent,
  normalizeTimeOnPageSeconds,
  resolvePageType,
} from "@/lib/analytics/page-view-utils";
import { createClient, createServiceClient } from "@/lib/supabase/server";
import type { Json } from "@/types/database.types";
import type { PageViewRequest, PageViewResponse } from "@/types/analytics";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as PageViewRequest;
    const page_path = typeof body.page_path === "string" ? body.page_path : "/";
    const page_title = body.page_title ?? null;
    const page_type = resolvePageType(body.page_type, page_path) ?? derivePageTypeFromPath(page_path);
    const time_on_page_seconds = normalizeTimeOnPageSeconds(body.time_on_page_seconds);
    const scroll_depth_percent = normalizeScrollDepthPercent(body.scroll_depth_percent);

    const supabaseUser = await createClient();
    const {
      data: { user },
    } = await supabaseUser.auth.getUser();

    const payload: Record<string, unknown> = {
      page_path,
      page_title,
      page_type,
      time_on_page_seconds,
      scroll_depth_percent,
      clicked_cta: body.clicked_cta ?? undefined,
      referrer: body.referrer ?? undefined,
    };

    const admin = createServiceClient();
    const { data: inserted, error } = await admin
      .from("telemetry_events")
      .insert({
        user_id: user?.id ?? null,
        event_type: "page_view",
        payload: payload as Json,
      })
      .select("id, created_at")
      .single();

    if (error || !inserted?.id) {
      console.error("[page-view] insert failed:", error?.message);
      return NextResponse.json({ error: "Failed to record page view" }, { status: 500 });
    }

    const responseBody: PageViewResponse = {
      success: true,
      recorded_at: inserted.created_at ?? new Date().toISOString(),
      id: inserted.id,
    };

    return NextResponse.json(responseBody);
  } catch (err) {
    console.error("[page-view]", err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
