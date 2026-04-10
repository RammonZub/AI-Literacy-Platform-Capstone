/**
 * Progress types
 *
 * PURPOSE: Centralize the progress models used by the learner platform.
 *
 * SCOPE:
 * - Lesson and module status
 * - Unified lesson progress rows
 * - Typed quiz/task metadata extracted from `lesson_progress.metadata`
 *
 * This file intentionally excludes older onboarding or quiz-session models
 * that are not part of the current thesis artifact.
 */

import type { LessonProgressMetadata } from "@/types/progress-metadata";

export type {
  LessonProgressMetadata,
  QuizMetadata,
  TaskMetadata,
} from "@/types/progress-metadata";

export { getQuizStatus, getTaskStatus } from "@/types/progress-metadata";

export type { TaskProgress } from "@/types/task";

/**
 * Availability state for a lesson.
 */
export type LessonStatus = "locked" | "unlocked" | "in_progress" | "completed";

/**
 * Availability state for a module.
 */
export type ModuleStatus = "locked" | "unlocked" | "in_progress" | "completed";

/**
 * Unified `lesson_progress` row shape.
 */
export interface LessonProgressRow {
  id: string;
  user_id: string | null;
  module_id: string;
  lesson_id: string;
  chapter_id: string | null;
  status: LessonStatus | null;
  metadata: LessonProgressMetadata | null;
  started_at: string | null;
  completed_at: string | null;
  xp_earned: number | null;
}

/**
 * Combined lesson completion status used by platform UI.
 */
export interface LessonCompletionStatus {
  /** Overall lesson state */
  status: LessonStatus;

  /** Quiz completion details when the lesson has a quiz */
  quiz?: {
    hasQuiz: boolean;
    completed: boolean;
    passed: boolean;
    score?: number | null;
  };

  /** Task completion details when the lesson has a task */
  task?: {
    hasTask: boolean;
    completed: boolean;
    completedAt?: string | Date | null;
  };

  /**
   * Backward-compatible alias retained for lesson cards that still reference
   * `challenge` while the underlying content type is a task.
   */
  challenge?: {
    hasChallenge: boolean;
    completed: boolean;
  };
}
