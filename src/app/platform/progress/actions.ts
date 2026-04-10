/**
 * Progress Server Actions
 *
 * ============================================================================
 * OVERVIEW
 * ============================================================================
 * Server-side actions for lesson progress tracking using Supabase.
 *
 * This file re-exports actions from modularized files.
 * The implementations live in:
 * - ./actions/lesson-actions.ts - Lesson progress actions
 * - ./actions/quiz-actions.ts - Quiz progress actions
 * - ./actions/task-actions.ts - Task progress actions
 * - ./actions/shared.ts - Shared utilities and types
 *
 * ============================================================================
 * SECURITY
 * ============================================================================
 * ALL actions verify user has active subscription when the paywall gate is active
 * before allowing any modifications. This prevents users with expired
 * subscriptions from manipulating progress data via direct API calls.
 *
 * Access check pattern:
 * - User must be authenticated
 * - User must have has_access = true
 * - Throws 'Subscription required' error if access denied
 * ============================================================================
 *
 * ============================================================================
 * DATA MODEL
 * ============================================================================
 * Uses simplified schema with progress_data JSONB column for flexibility:
 * - currentSlide: The slide user is currently viewing
 * - slides: Array of { slideId, viewedAt } tracking each slide view
 * - responses: Array of task submissions
 * - completedAt: When lesson was marked complete
 * - lastAccessedAt: Last time user interacted with lesson
 *
 * ============================================================================
 * ACTIONS
 * ============================================================================
 * - startLesson: Create or update lesson progress entry
 * - getLessonProgress: Retrieve saved progress for resuming
 * - updateSlideProgress: Update current slide and track views
 * - saveTaskResponse: Store actionable task submissions
 * - completeLesson: Mark lesson complete, award XP
 * - getUserStats: Get user's learning statistics
 * ============================================================================
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
} from "./actions/lesson-actions";
export type { QuizProgress } from "./actions/quiz-actions";
// Quiz actions
export { getQuizProgress, saveQuizProgress } from "./actions/quiz-actions";
// Shared types
export type { ProgressData } from "./actions/shared";
export type { CompleteTaskResult, TaskProgress } from "./actions/task-actions";
// Task actions
export {
  completeTask,
  getAllTaskProgress,
  getTaskProgress,
  updateTaskNotes,
} from "./actions/task-actions";
