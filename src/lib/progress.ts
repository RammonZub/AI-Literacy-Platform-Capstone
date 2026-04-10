/**
 * Progress Tracking Helpers
 *
 * Functions for managing user lesson progress, module progress,
 * and XP calculations.
 */

import type { Lesson, Module } from "@/types/content";
import type { LessonStatus } from "@/types/progress";

export interface LessonProgress {
  lessonId: string;
  status: LessonStatus;
  currentSlide: number;
  totalSlides: number;
  xpEarned: number;
}

export interface ModuleProgress {
  moduleId: string;
  lessonsCompleted: number;
  totalLessons: number;
  percentComplete: number;
  xpTotal: number;
}

/**
 * Calculate lesson status based on progress data and lesson order
 *
 * Rules:
 * - First lesson is always unlocked
 * - Lesson is unlocked if previous lesson is completed
 * - Lesson is in_progress if user has started but not completed
 * - Lesson is completed if user finished all slides
 * - Otherwise, lesson is locked
 */
export function getLessonStatus(
  lessonId: string,
  lessonOrder: number,
  allProgress: Record<string, LessonProgress>,
  moduleLessons: Lesson[],
): LessonStatus {
  const progress = allProgress[lessonId];

  // Already has progress data
  if (progress) {
    if (progress.status === "completed") return "completed";
    if (progress.status === "in_progress") return "in_progress";
  }

  // First lesson is always unlocked
  if (lessonOrder === 1) {
    return progress?.status || "unlocked";
  }

  // Check if previous lesson is completed
  const previousLesson = moduleLessons.find((l) => l.order === lessonOrder - 1);
  if (previousLesson) {
    const previousProgress = allProgress[previousLesson.id];
    if (previousProgress?.status === "completed") {
      return progress?.status || "unlocked";
    }
  }

  // Check if any earlier lesson is completed (for edge cases)
  const hasCompletedEarlierLesson = moduleLessons
    .filter((l) => l.order < lessonOrder)
    .some((l) => allProgress[l.id]?.status === "completed");

  if (hasCompletedEarlierLesson) {
    return progress?.status || "unlocked";
  }

  return "locked";
}

/**
 * Calculate module progress from lesson progress data
 */
export function calculateModuleProgress(
  moduleId: string,
  lessonProgress: Record<string, LessonProgress>,
  totalLessons: number,
): ModuleProgress {
  const moduleLessonIds = Object.keys(lessonProgress);
  const completedLessons = moduleLessonIds.filter(
    (id) => lessonProgress[id]?.status === "completed",
  ).length;

  const percentComplete =
    totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  const totalXP = moduleLessonIds.reduce((sum, id) => sum + (lessonProgress[id]?.xpEarned || 0), 0);

  return {
    moduleId,
    lessonsCompleted: completedLessons,
    totalLessons,
    percentComplete,
    xpTotal: totalXP,
  };
}

/**
 * Get XP for a lesson (can be customized per lesson)
 */
export function getLessonXP(lesson: Lesson): number {
  // Base XP per lesson
  const baseXP = 50;

  // Could add logic for variable XP based on:
  // - Lesson difficulty
  // - Number of slides
  // - Estimated time
  // - Actionable task completion

  return baseXP;
}

/**
 * Format progress for display
 */
export function formatProgress(percent: number): string {
  return `${percent}%`;
}

/**
 * Get progress bar color based on percentage
 */
export function getProgressColor(percent: number): string {
  if (percent >= 100) return "bg-success";
  if (percent >= 50) return "bg-secondary";
  if (percent >= 25) return "bg-yellow-500";
  return "bg-muted";
}

/**
 * Check if user can access a lesson
 */
export function canAccessLesson(
  lessonId: string,
  lessonOrder: number,
  allProgress: Record<string, LessonProgress>,
  moduleLessons: Lesson[],
): boolean {
  const status = getLessonStatus(lessonId, lessonOrder, allProgress, moduleLessons);
  return status !== "locked";
}

/**
 * Get next unlocked lesson
 */
export function getNextLesson(
  moduleLessons: Lesson[],
  allProgress: Record<string, LessonProgress>,
): Lesson | null {
  // Find first lesson that's not completed
  for (const lesson of moduleLessons) {
    const status = getLessonStatus(lesson.id, lesson.order, allProgress, moduleLessons);
    if (status === "unlocked" || status === "in_progress") {
      return lesson;
    }
  }

  // All lessons completed
  return null;
}
