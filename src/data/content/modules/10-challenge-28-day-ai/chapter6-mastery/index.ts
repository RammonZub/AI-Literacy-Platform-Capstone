/**
 * Chapter 6: Integration & Mastery (Days 26-28)
 *
 * Build your personal AI workflow system and plan your 90-day AI mastery roadmap.
 */

import type { Chapter } from "@/types/content";
import { lessonDay26 } from "./lesson-day-26";
import { lessonDay27 } from "./lesson-day-27";
import { lessonDay28 } from "./lesson-day-28";

export const chapter6Mastery: Chapter = {
  id: "chapter6-mastery",
  moduleId: "10-challenge-28-day-ai",
  title: "Integration & Mastery",
  description: "Build your personal AI workflow system and plan your 90-day AI mastery roadmap.",
  order: 6,
  lessons: [
    lessonDay26, // Building Your AI Workflow System
    lessonDay27, // AI Habits for Long-Term Success
    lessonDay28, // Your 90-Day AI Mastery Roadmap
  ],
};

export { lessonDay26, lessonDay27, lessonDay28 };
