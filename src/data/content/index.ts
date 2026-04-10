/**
 * Content Management System - Central Export
 *
 * Single source of truth for all course content.
 * Provides helper functions to access modules and lessons.
 *
 * Module Status:
 * - Module 1: AI Fundamentals (done)
 * - Module 2: Productivity Basics (done)
 * - Module 3: Prompt Engineering (done)
 * - Module 4: Content Creation (done)
 * - Module 5: ChatGPT Mastery (done)
 * - Module 6: Claude Mastery (done)
 * - Module 7: Gemini Mastery (done)
 * - Module 8: Midjourney Mastery (done)
 * - Module 9: Workflow and Automation (chained use of M5–8 tools + automation patterns)
 * - Module 10: 28-Day AI Challenge (done)
 *
 * @module data/content
 */

import type { Chapter, Lesson, Module } from "@/types/content";
import { skills_foundations } from "./modules/01-skills-foundations";
import { skills_productivity } from "./modules/02-skills-productivity";
import { skills_prompting } from "./modules/03-skills-prompting";
import { skills_creation } from "./modules/04-skills-creation";
import { tools_chatgpt } from "./modules/05-tools-chatgpt";
import { tools_claude } from "./modules/06-tools-claude";
import { tools_gemini } from "./modules/07-tools-gemini";
import { tools_midjourney } from "./modules/08-tools-midjourney";
import { workflow_automation } from "./modules/09-workflow-automation";
import { challenge_28DayAI } from "./modules/10-challenge-28-day-ai";

/**
 * All available modules
 */
export const modules: Module[] = [
  skills_foundations,
  skills_productivity,
  skills_prompting,
  skills_creation,
  tools_chatgpt,
  tools_claude,
  tools_gemini,
  tools_midjourney,
  workflow_automation,
  challenge_28DayAI,
];

/**
 * Get module by ID
 */
export const getModuleById = (id: string): Module | undefined => {
  return modules.find((m) => m.id === id);
};

/**
 * Get chapter from a module
 */
export const getChapter = (moduleId: string, chapterId: string): Chapter | undefined => {
  const courseModule = getModuleById(moduleId);
  return courseModule?.chapters.find((ch) => ch.id === chapterId);
};

/**
 * Get lesson by reference (module > chapter > lesson)
 */
export const getLesson = (
  moduleId: string,
  chapterId: string,
  lessonId: string,
): Lesson | undefined => {
  const chapter = getChapter(moduleId, chapterId);
  return chapter?.lessons.find((l) => l.id === lessonId);
};

/**
 * Get lesson by ID (searches across all chapters in a module)
 * Useful when you only have moduleId and lessonId
 */
export const getLessonById = (moduleId: string, lessonId: string): Lesson | undefined => {
  const lessons = getModuleLessons(moduleId);
  return lessons.find((l) => l.id === lessonId);
};

/**
 * Get all lessons from a module (flattened from chapters)
 */
export const getModuleLessons = (moduleId: string): Lesson[] => {
  const courseModule = getModuleById(moduleId);
  if (!courseModule) return [];

  return courseModule.chapters.flatMap((chapter) => chapter.lessons);
};

/**
 * Calculate module progress
 *
 * Implementation note: completion counts should be sourced from persistent
 * progress (for example Supabase) once that path is wired for this helper.
 */
export const calculateModuleProgress = (
  moduleId: string,
): { completed: number; total: number; percentage: number } => {
  const lessons = getModuleLessons(moduleId);
  const total = lessons.length;
  // No lessons completed by default - will use Supabase data for real progress
  const completed = 0;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return { completed, total, percentage };
};

/**
 * Get modules by category
 */
export const getModulesByCategory = () => {
  return modules.reduce(
    (acc, module) => {
      if (!acc[module.category]) {
        acc[module.category] = [];
      }
      acc[module.category].push(module);
      return acc;
    },
    {} as Record<string, Module[]>,
  );
};

/**
 * Get modules by course type
 */
export const getModulesByCourseType = (courseType: string): Module[] => {
  return modules.filter((m) => m.courseType === courseType);
};

/**
 * Get the active challenge module (first module with courseType 'challenge')
 */
export const getChallengeModule = (): Module | undefined => {
  return modules.find((m) => m.courseType === "challenge");
};

/**
 * Get all mastery path modules (AI Tools Mastery)
 *
 * PURPOSE: Filter modules for the Mastery Path section on home page
 * Returns modules like ChatGPT, Claude, Gemini, Midjourney, and workflow/automation
 *
 * These are modules 5-9 (AI tool mastery courses)
 */
export function getMasteryModules(): Module[] {
  const masteryIds = [
    "05-tools-chatgpt",
    "06-tools-claude",
    "07-tools-gemini",
    "08-tools-midjourney",
    "09-workflow-automation",
  ];
  return modules.filter((m) => masteryIds.includes(m.id));
}

/**
 * Get skill building modules (AI Skills Building)
 *
 * PURPOSE: Filter core AI Skills Building modules for the home page
 * Returns the first 4 foundational modules:
 * - Module 1: AI Foundations
 * - Module 2: Productivity Basics
 * - Module 3: Prompt Engineering
 * - Module 4: Content Creation
 */
export function getSkillModules(): Module[] {
  const skillIds = [
    "01-skills-foundations",
    "02-skills-productivity",
    "03-skills-prompting",
    "04-skills-creation",
  ];
  return modules.filter((m) => skillIds.includes(m.id));
}
