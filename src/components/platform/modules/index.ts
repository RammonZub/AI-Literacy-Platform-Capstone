/**
 * Module Components Barrel Export
 *
 * Module browsing and display components.
 * Now includes LessonCard, ChapterAccordion, and ModuleProgressBar for module journey view.
 */

// Re-export LessonStatus from centralized location
export type { LessonStatus } from "@/types/progress";
export type { ChapterAccordionProps } from "./ChapterAccordion";
export { default as ChapterAccordion } from "./ChapterAccordion";
export { default as CourseGridItem } from "./CourseGridItem";
// Type exports
export type { LessonCardProps } from "./LessonCard";
export { default as LessonCard } from "./LessonCard";
export { default as ModuleCard } from "./ModuleCard";
export { default as ModuleJourneySkeleton } from "./ModuleJourneySkeleton";
export type { ModuleProgressBarProps } from "./ModuleProgressBar";
export { default as ModuleProgressBar } from "./ModuleProgressBar";
