/**
 * Lesson quiz types
 *
 * PURPOSE: Define the quiz structures attached to lesson content inside the
 * learner platform.
 *
 * SCOPE:
 * - These types model lesson-level knowledge checks only.
 * - They do not describe onboarding sessions, checkout flows, or any older
 *   pre-thesis experimentation models.
 */

/**
 * A single multiple-choice question inside a lesson quiz.
 */
export interface LessonQuizQuestion {
  /** Unique identifier for the question */
  id: string;

  /** Question prompt shown to the learner */
  question: string;

  /** Answer choices in display order */
  options: string[];

  /** Zero-based index of the correct option */
  correctAnswer: number;

  /** Explanation shown after answering */
  explanation: string;

  /** Optional learner hint */
  hint?: string;

  /** Optional context shown before the question */
  context?: string;
}

/**
 * A complete quiz attached to a lesson.
 */
export interface LessonQuiz {
  /** Stable quiz identifier */
  id: string;

  /** Optional UI title */
  title?: string;

  /** Optional descriptive subtitle */
  description?: string;

  /** Ordered quiz questions */
  questions: LessonQuizQuestion[];

  /** Passing threshold as a percentage */
  passingScore?: number;

  /** Optional XP reward for a successful completion */
  xpReward?: number;

  /** Whether retries are allowed */
  retryAllowed?: boolean;
}
