/**
 * Chapter 4: Getting Started - Lesson Exports
 *
 * Fourth chapter of Module 1: AI Fundamentals.
 * Covers the first real workflow plus the learner's next-step plan.
 *
 * @module data/content/modules/01-skills-foundations
 */

import type { Chapter } from "@/types/content";
import { lesson_1_11 } from "./lesson-1-11";
import { lesson_1_12 } from "./lesson-1-12";

export const chapter4GettingStarted: Chapter = {
  id: "ch4-getting-started",
  moduleId: "01-skills-foundations",
  title: "Real Workflows And Your Path Forward",
  description: "Complete a real workflow, then turn it into a simple next-step plan you can keep using.",
  order: 4,
  lessons: [lesson_1_11, lesson_1_12],
};

// Individual lesson exports
export { lesson_1_11, lesson_1_12 };
