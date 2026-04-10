/**
 * In-lesson quiz progress — stored in `telemetry_events` (inline_quiz_state).
 */

"use server";

import { revalidatePath } from "next/cache";
import { platformPaths } from "@/lib/routes/platform";
import { getLatestTelemetryPayload, logTelemetryEvent, persistTelemetryRow } from "@/lib/telemetry";
import { createClient } from "@/lib/supabase/server";
import { awardXpWithAtomicFallback, verifyUserAccess } from "./shared";

export interface QuizProgress {
  lessonId: string;
  moduleId: string;
  quizId: string;
  score: number;
  totalQuestions: number;
  answers: Record<string, number>;
  completedAt: string;
  passed: boolean;
  attempts: number;
}

type QuizPayload = {
  lesson_id: string;
  module_id: string;
  quiz_id: string;
  score: number;
  total_questions: number;
  answers: Record<string, number>;
  completed_at: string;
  passed: boolean;
  attempts: number;
};

export async function getQuizProgress(props: { lessonId: string }): Promise<QuizProgress | null> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const payload = await getLatestTelemetryPayload<QuizPayload>({
    userId: user.id,
    eventType: "inline_quiz_state",
    match: { lesson_id: props.lessonId },
  });
  if (!payload) return null;

  return {
    lessonId: props.lessonId,
    moduleId: payload.module_id,
    quizId: payload.quiz_id || "",
    score: payload.score || 0,
    totalQuestions: payload.total_questions || 0,
    answers: payload.answers || {},
    completedAt: payload.completed_at || "",
    passed: payload.passed || false,
    attempts: payload.attempts || 0,
  };
}

export async function saveQuizProgress(props: {
  moduleId: string;
  lessonId: string;
  chapterId?: string;
  quizId: string;
  score: number;
  totalQuestions: number;
  answers: Record<string, number>;
  passed: boolean;
  xpEarned?: number;
}): Promise<void> {
  const supabase = await createClient();
  const user = await verifyUserAccess(supabase);
  void props.chapterId;

  const prior = await getLatestTelemetryPayload<QuizPayload>({
    userId: user.id,
    eventType: "inline_quiz_state",
    match: { lesson_id: props.lessonId },
  });
  const wasAlreadyPassed = prior?.passed === true;
  const attempts = (prior?.attempts ?? 0) + 1;

  await persistTelemetryRow(user.id, "inline_quiz_state", {
    lesson_id: props.lessonId,
    module_id: props.moduleId,
    quiz_id: props.quizId,
    score: props.score,
    total_questions: props.totalQuestions,
    answers: props.answers,
    passed: props.passed,
    attempts,
    completed_at: new Date().toISOString(),
  });

  if (props.passed && props.xpEarned && !wasAlreadyPassed) {
    const { data: streakBeforeQuizXp } = await supabase
      .from("users")
      .select("current_streak")
      .eq("id", user.id)
      .maybeSingle();

    await awardXpWithAtomicFallback(supabase, user.id, props.xpEarned);

    void logTelemetryEvent(user.id, "xp_earned", {
      lesson_id: props.lessonId,
      module_id: props.moduleId,
      amount: props.xpEarned,
      source: "quiz_pass",
    });

    const { data: streakAfterQuizXp } = await supabase
      .from("users")
      .select("current_streak")
      .eq("id", user.id)
      .maybeSingle();
    if (
      streakAfterQuizXp?.current_streak !== undefined &&
      streakAfterQuizXp.current_streak !== streakBeforeQuizXp?.current_streak
    ) {
      void logTelemetryEvent(user.id, "streak_changed", {
        previous: streakBeforeQuizXp?.current_streak ?? null,
        current: streakAfterQuizXp.current_streak,
        lesson_id: props.lessonId,
        source: "quiz_pass",
      });
    }
  }

  revalidatePath(platformPaths.module(props.moduleId));
  revalidatePath(`/platform/module/${props.moduleId}/lesson/${props.lessonId}/quiz`);
}
