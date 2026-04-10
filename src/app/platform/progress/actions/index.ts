/**
 * Progress Actions Barrel Export
 *
 * Re-exports all progress-related server actions from their respective modules.
 */

// Lesson actions
export {
  completeLesson,
  getLessonProgress,
  getUserStats,
  recordCheckpointAttempt,
  saveTaskResponse,
  startLesson,
  updateSlideProgress,
} from "./lesson-actions";
export type { QuizProgress } from "./quiz-actions";
// Quiz actions
export { getQuizProgress, saveQuizProgress } from "./quiz-actions";
// Shared types
export type { ProgressData } from "./shared";
export type { CompleteTaskResult, TaskProgress } from "./task-actions";
// Task actions
export {
  completeTask,
  getAllTaskProgress,
  getTaskProgress,
  updateTaskNotes,
} from "./task-actions";
