/**
 * Batch lesson init — `lesson_progress` + telemetry-backed quiz/task state.
 */

"use server";

import { persistTelemetryRow } from "@/lib/telemetry";
import { createClient } from "@/lib/supabase/server";
import type { Json } from "@/types/database.types";
import { startLesson } from "./lesson-actions";
import { getQuizProgress } from "./quiz-actions";
import { getTaskProgress } from "./task-actions";
import { verifyUserAccess } from "./shared";

export interface QuizStatus {
  passed: boolean;
  score?: number;
  totalQuestions?: number;
}

export interface ChallengeStatus {
  completed: boolean;
}

export interface LessonInitData {
  userId: string;
  lessonProgress: {
    id: string;
    status: string | null;
    current_slide: number | null;
    total_slides: number | null;
    completed_at: string | null;
    module_id: string;
    chapter_id: string;
    progress_data: Json;
  } | null;
  quizStatus: QuizStatus | null;
  challengeStatus: ChallengeStatus | null;
}

export async function getLessonInitData(props: {
  lessonId: string;
  moduleId: string;
  chapterId: string;
  totalSlides: number;
  shouldRestart?: boolean;
}): Promise<LessonInitData> {
  const supabase = await createClient();
  const user = await verifyUserAccess(supabase);
  void props.shouldRestart;

  await startLesson({
    lessonId: props.lessonId,
    moduleId: props.moduleId,
    chapterId: props.chapterId,
    totalSlides: props.totalSlides,
  });

  const { data: row } = await supabase
    .from("lesson_progress")
    .select("*")
    .eq("user_id", user.id)
    .eq("lesson_id", props.lessonId)
    .maybeSingle();

  const [quizProgress, taskProgress] = await Promise.all([
    getQuizProgress({ lessonId: props.lessonId }),
    getTaskProgress({ lessonId: props.lessonId }),
  ]);

  const quizStatus: QuizStatus | null = quizProgress
    ? {
        passed: quizProgress.passed,
        score:
          quizProgress.totalQuestions > 0
            ? Math.round((quizProgress.score / quizProgress.totalQuestions) * 100)
            : undefined,
        totalQuestions: quizProgress.totalQuestions,
      }
    : null;

  const challengeStatus: ChallengeStatus | null = taskProgress?.completed
    ? { completed: true }
    : null;

  return {
    userId: user.id,
    lessonProgress: row
      ? {
          id: row.id,
          status: row.status,
          current_slide: null,
          total_slides: null,
          completed_at: row.completed_at,
          module_id: row.module_id,
          chapter_id: "",
          progress_data: {} as Json,
        }
      : null,
    quizStatus,
    challengeStatus,
  };
}

export async function updateSlideProgressBatch(props: {
  lessonId: string;
  currentSlide: number;
  userId?: string;
}): Promise<{ success: boolean }> {
  const supabase = await createClient();
  const uid = props.userId ?? (await verifyUserAccess(supabase)).id;
  await persistTelemetryRow(uid, "slide_progress", {
    lesson_id: props.lessonId,
    current_slide: props.currentSlide,
    at: new Date().toISOString(),
  });
  return { success: true };
}
