/**
 * Chapter 2: Core Capabilities - Lesson Exports
 *
 * Second chapter of Module 1: AI Fundamentals.
 * Covers practical ways AI helps with writing, documents, listening, and thinking.
 *
 * @module data/content/modules/01-skills-foundations
 */

import type { Chapter } from "@/types/content";
import { lesson_1_4 } from "./lesson-1-4";
import { lesson_1_5_a } from "./lesson-1-5-a";
import { lesson_1_5_b } from "./lesson-1-5B";
import { lesson_1_6 } from "./lesson-1-6";
import { lesson_1_7 } from "./lesson-1-7";

export const chapter2CoreCapabilities: Chapter = {
  id: "ch2-core-capabilities",
  moduleId: "01-skills-foundations",
  title: "What AI Helps With In Real Work",
  description: "Explore the everyday tasks AI supports well, from writing and documents to thinking and review.",
  order: 2,
  lessons: [lesson_1_4, lesson_1_5_a, lesson_1_5_b, lesson_1_6, lesson_1_7],
};

// Individual lesson exports
export { lesson_1_4, lesson_1_5_a, lesson_1_5_b, lesson_1_6, lesson_1_7 };
