/**
 * Lesson Navigation Utilities
 *
 * PURPOSE: Helper functions for navigating between lessons
 *
 * CONTEXT: Used to determine the "next lesson" for post-completion navigation
 */

import { getModuleById } from "@/data/content";

/**
 * Get the next lesson ID after the current lesson
 *
 * @param moduleId - The module ID
 * @param currentLessonId - The current lesson ID
 * @returns The next lesson ID, or null if this is the last lesson
 *
 * @example
 * const nextLessonId = getNextLessonId('module1-foundation', 'lesson-1')
 * // Returns 'lesson-2' or null if lesson-1 is the last lesson
 */
export function getNextLessonId(moduleId: string, currentLessonId: string): string | null {
  const courseModule = getModuleById(moduleId);
  if (!courseModule) return null;

  // Flatten all lessons from all chapters in order
  const allLessons = courseModule.chapters.flatMap((chapter) => chapter.lessons);

  // Find current lesson index
  const currentIndex = allLessons.findIndex((lesson) => lesson.id === currentLessonId);

  if (currentIndex === -1) return null;

  // Return next lesson if exists
  const nextLesson = allLessons[currentIndex + 1];
  return nextLesson?.id ?? null;
}

/**
 * Get the next lesson's chapter ID
 *
 * @param moduleId - The module ID
 * @param currentLessonId - The current lesson ID
 * @returns The next lesson's chapter ID, or null if this is the last lesson
 */
export function getNextLessonChapterId(moduleId: string, currentLessonId: string): string | null {
  const courseModule = getModuleById(moduleId);
  if (!courseModule) return null;

  // Flatten all lessons with their chapter IDs
  const allLessonsWithChapters = courseModule.chapters.flatMap((chapter) =>
    chapter.lessons.map((lesson) => ({ lessonId: lesson.id, chapterId: chapter.id })),
  );

  // Find current lesson index
  const currentIndex = allLessonsWithChapters.findIndex(
    (item) => item.lessonId === currentLessonId,
  );

  if (currentIndex === -1) return null;

  // Return next lesson's chapter ID if exists
  const nextItem = allLessonsWithChapters[currentIndex + 1];
  return nextItem?.chapterId ?? null;
}

/**
 * Check if a lesson is the last lesson in a module
 *
 * @param moduleId - The module ID
 * @param lessonId - The lesson ID to check
 * @returns true if this is the last lesson
 */
export function isLastLesson(moduleId: string, lessonId: string): boolean {
  return getNextLessonId(moduleId, lessonId) === null;
}

/**
 * Get the next lesson's title
 *
 * @param moduleId - The module ID
 * @param currentLessonId - The current lesson ID
 * @returns The next lesson's title, or null if this is the last lesson
 */
export function getNextLessonTitle(moduleId: string, currentLessonId: string): string | null {
  const courseModule = getModuleById(moduleId);
  if (!courseModule) return null;

  // Flatten all lessons from all chapters in order
  const allLessons = courseModule.chapters.flatMap((chapter) => chapter.lessons);

  // Find current lesson index
  const currentIndex = allLessons.findIndex((lesson) => lesson.id === currentLessonId);

  if (currentIndex === -1) return null;

  // Return next lesson title if exists
  const nextLesson = allLessons[currentIndex + 1];
  return nextLesson?.title ?? null;
}

/**
 * Get next lesson info (id and title)
 *
 * @param moduleId - The module ID
 * @param currentLessonId - The current lesson ID
 * @returns Object with id and title of next lesson, or null if this is the last lesson
 */
export function getNextLessonInfo(
  moduleId: string,
  currentLessonId: string,
): { id: string; title: string } | null {
  const courseModule = getModuleById(moduleId);
  if (!courseModule) return null;

  // Flatten all lessons from all chapters in order
  const allLessons = courseModule.chapters.flatMap((chapter) => chapter.lessons);

  // Find current lesson index
  const currentIndex = allLessons.findIndex((lesson) => lesson.id === currentLessonId);

  if (currentIndex === -1) return null;

  // Return next lesson info if exists
  const nextLesson = allLessons[currentIndex + 1];
  if (!nextLesson) return null;

  return { id: nextLesson.id, title: nextLesson.title };
}
