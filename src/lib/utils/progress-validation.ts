/**
 * Progress Metadata Validation Utilities
 *
 * PURPOSE: Validate lesson_progress metadata before database operations
 *
 * WHY THIS EXISTS:
 * - Ensures data integrity before writing to the database
 * - Provides clear error messages for invalid data
 * - Supports the unified progress system with quiz and task metadata
 *
 * ARCHITECTURE NOTES:
 * - These validators run on the application layer before database operations
 * - Database triggers provide a second layer of defense (Phase 2)
 * - All validators return structured ValidationResult for consistent error handling
 *
 * USAGE:
 * ```tsx
 * import { validateQuizMetadata, validateXP } from '@/lib/utils/progress-validation'
 *
 * const validation = validateQuizMetadata(quizData)
 * if (!validation.valid) {
 *   throw new Error(validation.errors.join(', '))
 * }
 * ```
 */

import type { LessonProgressMetadata, QuizMetadata, TaskMetadata } from "@/types/progress-metadata";

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

/**
 * Validates quiz metadata before saving
 *
 * @param quiz - The quiz metadata to validate
 * @returns ValidationResult indicating success and any errors
 *
 * VALIDATION RULES:
 * - Must be an object (not null/undefined)
 * - Score must be a number between 0-100 (percentage)
 * - Total questions must be positive if provided
 * - Passed must be a boolean if provided
 */
export function validateQuizMetadata(quiz: unknown): ValidationResult {
  const errors: string[] = [];

  if (typeof quiz !== "object" || quiz === null) {
    return { valid: false, errors: ["Quiz metadata must be an object"] };
  }

  const q = quiz as Partial<QuizMetadata>;

  // Score must be percentage (0-100)
  if (q.score !== undefined) {
    if (typeof q.score !== "number" || isNaN(q.score)) {
      errors.push("Quiz score must be a number");
    } else if (q.score < 0 || q.score > 100) {
      errors.push(`Quiz score must be 0-100 (percentage), got ${q.score}`);
    }
  }

  if (q.total_questions !== undefined && q.total_questions <= 0) {
    errors.push("Quiz total_questions must be positive");
  }

  if (q.passed !== undefined && typeof q.passed !== "boolean") {
    errors.push("Quiz passed must be a boolean");
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Validates task metadata before saving
 *
 * @param task - The task metadata to validate
 * @returns ValidationResult indicating success and any errors
 *
 * VALIDATION RULES:
 * - Must be an object (not null/undefined)
 * - Completed must be a boolean if provided
 */
export function validateTaskMetadata(task: unknown): ValidationResult {
  const errors: string[] = [];

  if (typeof task !== "object" || task === null) {
    return { valid: false, errors: ["Task metadata must be an object"] };
  }

  const t = task as Partial<TaskMetadata>;

  if (t.completed !== undefined && typeof t.completed !== "boolean") {
    errors.push("Task completed must be a boolean");
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Validates XP value
 *
 * @param xp - The XP amount to validate
 * @returns ValidationResult indicating success and any errors
 *
 * VALIDATION RULES:
 * - Must be a number if provided (null/undefined allowed)
 * - Cannot be negative
 * - Maximum 1000 XP per lesson
 */
export function validateXP(xp: number | undefined | null): ValidationResult {
  const errors: string[] = [];

  if (xp === undefined || xp === null) return { valid: true, errors: [] };

  if (typeof xp !== "number" || isNaN(xp)) {
    errors.push("XP must be a number");
  } else if (xp < 0) {
    errors.push("XP cannot be negative");
  } else if (xp > 1000) {
    errors.push("XP exceeds maximum (1000)");
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Converts correct answer count to percentage score
 *
 * @param correctCount - Number of correct answers
 * @param totalQuestions - Total number of questions
 * @returns Score as percentage (0-100), rounded to nearest integer
 *
 * DESIGN NOTES:
 * - Returns 0 if totalQuestions is 0 or negative (prevents NaN)
 * - Rounds to nearest integer for clean display
 * - Used to normalize quiz scores before storage
 */
export function calculateScorePercentage(correctCount: number, totalQuestions: number): number {
  if (totalQuestions <= 0) return 0;
  return Math.round((correctCount / totalQuestions) * 100);
}

/**
 * Validates complete lesson progress metadata
 *
 * @param metadata - The full metadata object to validate
 * @returns ValidationResult indicating success and any errors
 *
 * VALIDATION RULES:
 * - Must be an object (not null/undefined)
 * - Validates quiz metadata if present
 * - Validates task metadata if present
 */
export function validateLessonProgressMetadata(metadata: unknown): ValidationResult {
  const errors: string[] = [];

  if (typeof metadata !== "object" || metadata === null) {
    return { valid: false, errors: ["Metadata must be an object"] };
  }

  const m = metadata as Partial<LessonProgressMetadata>;

  if (m.quiz !== undefined) {
    const quizValidation = validateQuizMetadata(m.quiz);
    if (!quizValidation.valid) {
      errors.push(...quizValidation.errors.map((e) => `quiz.${e}`));
    }
  }

  if (m.task !== undefined) {
    const taskValidation = validateTaskMetadata(m.task);
    if (!taskValidation.valid) {
      errors.push(...taskValidation.errors.map((e) => `task.${e}`));
    }
  }

  return { valid: errors.length === 0, errors };
}
