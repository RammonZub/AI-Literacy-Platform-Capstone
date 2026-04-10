/**
 * Progress Metadata Types
 *
 * PURPOSE: Type definitions for lesson_progress.metadata JSONB column
 *
 * WHY THIS EXISTS:
 * - Provides type safety for accessing quiz and task data from metadata
 * - Documents the expected structure of progress metadata
 * - Ensures consistency across the codebase when working with unified progress
 *
 * ARCHITECTURE NOTES:
 * - The lesson_progress table uses a JSONB metadata column
 * - Quiz and task progress are stored as nested objects
 * - This replaces separate lesson_quiz_progress and lesson_challenge_progress tables
 *
 * USAGE:
 * ```tsx
 * import type { LessonProgressMetadata } from '@/types/progress-metadata'
 *
 * const metadata: LessonProgressMetadata = progress.metadata || {}
 * const quizPassed = metadata.quiz?.passed ?? false
 * const taskCompleted = metadata.task?.completed ?? false
 * ```
 */

/**
 * Quiz progress stored in lesson_progress.metadata.quiz
 *
 * PURPOSE: Track user's quiz completion data
 */
export interface QuizMetadata {
  /** Score as percentage (0-100) */
  score?: number;
  /** Total number of questions in quiz */
  total_questions?: number;
  /** Whether user met passing score requirement */
  passed?: boolean;
  /** Number of times user has attempted this quiz */
  attempts?: number;
  /** ISO timestamp when quiz was completed */
  completed_at?: string;
  /** Quiz identifier from LessonQuiz.id */
  quiz_id?: string;
  /** User's answers: questionId -> selectedOptionIndex */
  answers?: Record<string, number>;
}

/**
 * Task (formerly challenge) progress stored in lesson_progress.metadata.task
 *
 * PURPOSE: Track user's task completion data
 */
export interface TaskMetadata {
  /** Whether the task has been completed */
  completed: boolean;
  /** Optional user notes about their experience */
  notes?: string;
  /** ISO timestamp when task was completed */
  completed_at?: string;
  /** Task identifier from LessonTask.id */
  task_id?: string;
}

/**
 * Complete metadata structure for lesson_progress.metadata
 *
 * PURPOSE: Type for the entire metadata JSONB column
 *
 * DESIGN NOTES:
 * - Both quiz and task are optional (not all lessons have them)
 * - Use default empty object when metadata is null
 * - Check for existence of nested objects before accessing
 */
export interface LessonProgressMetadata {
  /** Quiz completion data (if lesson has quiz) */
  quiz?: QuizMetadata;
  /** Task completion data (if lesson has task) */
  task?: TaskMetadata;
}

/**
 * Helper type for partial metadata updates
 *
 * PURPOSE: Type for upsert operations that update only part of metadata
 */
export type PartialLessonProgressMetadata = Partial<LessonProgressMetadata>;

/**
 * Helper to extract quiz status from metadata
 *
 * @param metadata - The lesson_progress.metadata value
 * @returns Quiz completion status for UI display
 */
export function getQuizStatus(metadata: LessonProgressMetadata | null): {
  hasQuiz: boolean;
  completed: boolean;
  passed: boolean;
  score?: number;
} {
  const quiz = metadata?.quiz;
  return {
    hasQuiz: !!quiz,
    completed: !!quiz?.completed_at,
    passed: quiz?.passed ?? false,
    score: quiz?.score,
  };
}

/**
 * Helper to extract task status from metadata
 *
 * @param metadata - The lesson_progress.metadata value
 * @returns Task completion status for UI display
 */
export function getTaskStatus(metadata: LessonProgressMetadata | null): {
  hasTask: boolean;
  completed: boolean;
  completedAt?: Date;
} {
  const task = metadata?.task;
  return {
    hasTask: !!task,
    completed: task?.completed ?? false,
    completedAt: task?.completed_at ? new Date(task.completed_at) : undefined,
  };
}
