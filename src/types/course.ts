/**
 * Course Type Definitions
 *
 * Data structure for learning content modules and chapters.
 * Includes modules, chapters, lessons, and lesson slides.
 */

// Import LessonStatus from centralized types/progress for use in interfaces
import type { LessonStatus } from "@/types/progress";

// Re-export LessonStatus from centralized types/progress
export type { LessonStatus } from "@/types/progress";

/**
 * Lesson slide types
 */
export type SlideType = "cover" | "text" | "image-text" | "card" | "quiz";

/**
 * Individual lesson slide
 */
export interface LessonSlide {
  id: string;
  type: SlideType;
  title?: string;
  content?: string;
  imageUrl?: string;
  order: number;
}

/**
 * Single lesson within a module
 */
export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  order: number;
  estimatedMinutes: number;
  status: LessonStatus;
  slides: LessonSlide[];
}

/**
 * Learning module (collection of lessons)
 */
export interface Module {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  order: number;
  totalLessons: number;
  completedLessons: number;
  lessons: Lesson[];
}

/**
 * User progress for a specific lesson
 */
export interface UserProgress {
  userId: string;
  lessonId: string;
  moduleId: string;
  completedAt?: Date;
  startedAt: Date;
  currentSlide: number;
}

/**
 * Overall user learning statistics
 */
export interface UserStats {
  totalLessonsCompleted: number;
  currentStreak: number;
  longestStreak: number;
  totalMinutesLearned: number;
}
