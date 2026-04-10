/**
 * Chapter 3: The Toolkit - Lesson Exports
 *
 * Third chapter of Module 1: AI Fundamentals.
 * Covers the core tools beginners are most likely to use and how to use them safely.
 *
 * @module data/content/modules/01-skills-foundations
 */

import type { Chapter } from "@/types/content";
import { lesson_1_8 } from "./lesson-1-8";
import { lesson_1_9 } from "./lesson-1-9";
import { lesson_1_10 } from "./lesson-1-10";

export const chapter3Toolkit: Chapter = {
  id: "ch3-the-toolkit",
  moduleId: "01-skills-foundations",
  title: "The Main Tools And When To Use Them",
  description: "Get a practical view of the core AI tools and learn how to choose the right one without getting overwhelmed.",
  order: 3,
  lessons: [lesson_1_8, lesson_1_9, lesson_1_10],
};

// Individual lesson exports
export { lesson_1_8, lesson_1_9, lesson_1_10 };
