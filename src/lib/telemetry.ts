/**
 * First-party telemetry — `telemetry_events` in Supabase.
 */

import { createClient, createServiceClient } from "@/lib/supabase/server";
import type { Json } from "@/types/database.types";

export type PlatformTelemetryEventType =
  | "lesson_started"
  | "lesson_completed"
  | "checkpoint_attempted"
  | "xp_earned"
  | "streak_changed"
  | "onboarding_completed"
  | "recommendation_rated";

/** Inline quiz / task / slide snapshots (lesson_progress no longer has metadata JSONB). */
export type AuxiliaryTelemetryEventType =
  | "inline_quiz_state"
  | "challenge_task_state"
  | "slide_progress"
  | "task_response_saved"
  | "stripe_webhook_processed"
  | "page_view"
  | "user_feedback"
  | "checkout_auth_processed"
  | "checkout_session_activity"
  | "client_error"
  | "server_diagnostic";

/**
 * Persist a telemetry row for the signed-in user. Swallows errors (non-blocking).
 */
export async function logTelemetryEvent(
  userId: string,
  eventType: PlatformTelemetryEventType,
  payload: Record<string, unknown>,
): Promise<void> {
  await persistTelemetryRow(userId, eventType, payload);
}

/**
 * Persist arbitrary telemetry (quiz state, dedup markers, etc.).
 */
export async function persistTelemetryRow(
  userId: string | null,
  eventType: PlatformTelemetryEventType | AuxiliaryTelemetryEventType | string,
  payload: Record<string, unknown>,
): Promise<void> {
  try {
    const supabase = userId ? await createClient() : createServiceClient();
    const { error } = await supabase.from("telemetry_events").insert({
      user_id: userId,
      event_type: eventType,
      payload: payload as Json,
    });
    if (error) {
      console.error("[telemetry]", eventType, error.message);
    }
  } catch (err) {
    console.error("[telemetry] unexpected", eventType, err);
  }
}

/**
 * Latest telemetry payload for an event type and payload field match (e.g. lesson_id).
 */
export async function getLatestTelemetryPayload<T extends Record<string, unknown>>(props: {
  userId: string;
  eventType: string;
  match: { lesson_id: string };
}): Promise<T | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("telemetry_events")
    .select("payload")
    .eq("user_id", props.userId)
    .eq("event_type", props.eventType)
    .filter("payload->>lesson_id", "eq", props.match.lesson_id)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error || !data?.payload || typeof data.payload !== "object") {
    return null;
  }
  return data.payload as T;
}
