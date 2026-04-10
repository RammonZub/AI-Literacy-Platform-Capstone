/**
 * Chapter 1: Foundation - Lesson Exports
 *
 * First chapter of Module 1: AI Fundamentals.
 * Covers the basics: what AI is, why it feels overwhelming, and the tool landscape.
 *
 * Lessons in this chapter:
 * - 1.1: What AI Actually Is
 * - 1.2: Why AI Feels Overwhelming
 * - 1.3: The AI Tool Landscape
 *
 * @module data/content/modules/01-skills-foundations
 */

import type { Chapter } from "@/types/content";
import { lesson_1_1 } from "./lesson-1-1";
import { lesson_1_2 } from "./lesson-1-2";
import { lesson_1_3 } from "./lesson-1-3";

export const chapter1Foundation: Chapter = {
  id: "ch1-why-this-matters",
  moduleId: "01-skills-foundations",
  title: "What AI Is And Why It Matters Now",
  description: "Understand the basics, calm the noise, and get a clear map of the AI landscape.",
  order: 1,
  lessons: [lesson_1_1, lesson_1_2, lesson_1_3],
};

// Individual lesson exports
export { lesson_1_1, lesson_1_2, lesson_1_3 };
