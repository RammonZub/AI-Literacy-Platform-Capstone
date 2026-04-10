/**
 * Public feedback API — stored as `telemetry_events` (`event_type`: user_feedback).
 */

import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { persistTelemetryRow } from "@/lib/telemetry";

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const body = await request.json();
    const { rating, feedback_text: feedbackText } = body as {
      rating?: unknown;
      feedback_text?: unknown;
    };

    if (typeof rating !== "number" || rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Rating must be between 1 and 5" }, { status: 400 });
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    await persistTelemetryRow(user?.id ?? null, "user_feedback", {
      rating,
      feedback_text: typeof feedbackText === "string" ? feedbackText : null,
      feedback_type: "general",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Feedback API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
