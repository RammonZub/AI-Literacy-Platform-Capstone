/**
 * Challenge / task progress — snapshots in `telemetry_events` (challenge_task_state).
 */

"use server";

import { revalidatePath } from "next/cache";
import { platformPaths } from "@/lib/routes/platform";
import { getLatestTelemetryPayload, persistTelemetryRow } from "@/lib/telemetry";
import { createClient } from "@/lib/supabase/server";
import { awardXpWithAtomicFallback, verifyUserAccess } from "./shared";

export interface TaskProgress {
  lessonId: string;
  moduleId: string;
  taskId: string;
  notes?: string | null;
  completedAt: Date | null;
  completed: boolean;
}

export interface CompleteTaskResult {
  success: boolean;
  xpAwarded: number;
  newTotalXP?: number;
  error?: string;
}

type TaskPayload = {
  lesson_id: string;
  module_id: string;
  task_id: string;
  completed: boolean;
  notes?: string | null;
  completed_at: string;
};

export async function completeTask(props: {
  lessonId: string;
  moduleId: string;
  chapterId?: string;
  taskId: string;
  notes?: string;
  xpReward?: number;
}): Promise<CompleteTaskResult> {
  const supabase = await createClient();
  const user = await verifyUserAccess(supabase);
  void props.chapterId;

  const xp = props.xpReward || 25;
  const now = new Date().toISOString();

  const prior = await getLatestTelemetryPayload<TaskPayload>({
    userId: user.id,
    eventType: "challenge_task_state",
    match: { lesson_id: props.lessonId },
  });

  if (prior?.completed) {
    if (props.notes !== undefined && props.notes !== prior.notes) {
      await persistTelemetryRow(user.id, "challenge_task_state", {
        lesson_id: props.lessonId,
        module_id: props.moduleId,
        task_id: props.taskId,
        completed: true,
        notes: props.notes,
        completed_at: prior.completed_at,
      });
    }
    revalidatePath(platformPaths.module(props.moduleId));
    revalidatePath("/platform/tasks");
    revalidatePath("/platform/profile");
    return { success: true, xpAwarded: 0 };
  }

  await persistTelemetryRow(user.id, "challenge_task_state", {
    lesson_id: props.lessonId,
    module_id: props.moduleId,
    task_id: props.taskId,
    completed: true,
    notes: props.notes ?? null,
    completed_at: now,
  });

  const xpResult = await awardXpWithAtomicFallback(supabase, user.id, xp);

  revalidatePath(platformPaths.module(props.moduleId));
  revalidatePath("/platform/tasks");
  revalidatePath("/platform/profile");

  return {
    success: true,
    xpAwarded: xp,
    newTotalXP: xpResult.newTotalXP,
  };
}

export async function getTaskProgress(props: {
  lessonId: string;
  taskId?: string;
}): Promise<TaskProgress | null> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const payload = await getLatestTelemetryPayload<TaskPayload>({
    userId: user.id,
    eventType: "challenge_task_state",
    match: { lesson_id: props.lessonId },
  });
  if (!payload?.completed) return null;

  return {
    lessonId: props.lessonId,
    moduleId: payload.module_id,
    taskId: payload.task_id || props.taskId || `task-${props.lessonId}`,
    notes: payload.notes ?? null,
    completedAt: payload.completed_at ? new Date(payload.completed_at) : null,
    completed: payload.completed,
  };
}

export async function getAllTaskProgress(): Promise<TaskProgress[]> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return [];

  const { data: rows } = await supabase
    .from("telemetry_events")
    .select("payload")
    .eq("user_id", user.id)
    .eq("event_type", "challenge_task_state")
    .order("created_at", { ascending: false });

  if (!rows?.length) return [];

  const byLesson = new Map<string, TaskPayload>();
  for (const row of rows) {
    const p = row.payload as TaskPayload | null;
    if (!p || !p.lesson_id || !p.completed) continue;
    if (!byLesson.has(p.lesson_id)) {
      byLesson.set(p.lesson_id, p);
    }
  }

  return Array.from(byLesson.values()).map((payload) => ({
    lessonId: payload.lesson_id,
    moduleId: payload.module_id,
    taskId: payload.task_id,
    notes: payload.notes ?? null,
    completedAt: payload.completed_at ? new Date(payload.completed_at) : null,
    completed: payload.completed,
  }));
}

export async function updateTaskNotes(props: {
  lessonId: string;
  taskId: string;
  notes: string;
}): Promise<{ success: boolean; error?: string }> {
  const supabase = await createClient();
  try {
    const user = await verifyUserAccess(supabase);
    const prior = await getLatestTelemetryPayload<TaskPayload>({
      userId: user.id,
      eventType: "challenge_task_state",
      match: { lesson_id: props.lessonId },
    });
    if (!prior?.completed) {
      return { success: false, error: "Task not found or not completed" };
    }
    await persistTelemetryRow(user.id, "challenge_task_state", {
      ...prior,
      notes: props.notes,
    });
    return { success: true };
  } catch (error: unknown) {
    console.error("Error updating task notes:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return { success: false, error: message };
  }
}
