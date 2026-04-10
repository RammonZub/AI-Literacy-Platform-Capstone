/**
 * Task Types
 *
 * PURPOSE: Type definitions for lesson-attached actionable tasks.
 *
 * WHY THIS EXISTS:
 * - Separates task-specific types from general content types
 * - Provides clear structure for actionable tasks within lessons
 * - Supports the unified task system architecture
 *
 * DESIGN NOTES:
 * - LessonTask is the content definition (what the task is)
 * - TaskProgress is the user's progress on a task
 * - TaskMetadata is stored in lesson_progress_unified.metadata
 */

/**
 * Lesson-attached actionable task definition
 *
 * PURPOSE: Defines a task that users can complete as part of a lesson
 *
 * DESIGN NOTES:
 * - Tasks are optional attachments to lessons
 * - They provide hands-on practice opportunities
 * - XP rewards incentivize completion
 */
export interface LessonTask {
  /** Unique identifier for the task */
  id: string;

  /** Task title displayed to users */
  title: string;

  /** The purpose/goal of this task */
  purpose: string;

  /** Step-by-step instructions for completing the task */
  instructions: string[];

  /** What the user should produce/complete */
  deliverable: string;

  /** Estimated time to complete (e.g., "15 minutes") */
  estimatedTime?: string;

  /** Optional starter prompt to help users begin */
  starterPrompt?: string;

  /** Criteria for successful completion */
  successCriteria: string[];

  /** XP points awarded for completion */
  xpReward?: number;

  /** Difficulty level (e.g., "beginner", "intermediate", "advanced") */
  level?: string;

  /** Primary skill being practiced */
  skill?: string;

  /** Focus area for the task */
  focus?: string;
}

/**
 * User's progress on a specific task
 *
 * PURPOSE: Tracks completion status and notes for a user's task
 *
 * DESIGN NOTES:
 * - Links to specific lesson, module, and task
 * - Stores optional user notes
 * - Tracks completion timestamp
 */
export interface TaskProgress {
  /** ID of the lesson this task belongs to */
  lessonId: string;

  /** ID of the module this lesson belongs to */
  moduleId: string;

  /** ID of the task */
  taskId: string;

  /** User's notes for this task (optional) */
  notes?: string;

  /** When the task was completed (null if not completed) */
  completedAt: Date | null;
}

/**
 * Metadata structure for lesson_progress.metadata
 *
 * Re-exported from `progress-metadata.ts`.
 */
export type { TaskMetadata } from "./progress-metadata";
