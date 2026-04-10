/**
 * Chapter 4: Business + Automation (Days 19-21)
 *
 * Validate ideas and automate your business workflows with AI.
 *
 * Day 20: Zapier & Automation Basics
 * Day 21: Week 4 Review for spaced repetition
 */

import type { Chapter } from "@/types/content";

import { lessonDay19 } from "./lesson-day-19";
import { lessonDay20 } from "./lesson-day-20";
import { lessonDay21 } from "./lesson-day-21";

export const chapter4Business: Chapter = {
  id: "chapter4-business",
  moduleId: "10-challenge-28-day-ai",
  title: "Business + Automation",
  description:
    "Validate ideas, research markets, and automate your business workflows with AI as your co-founder.",
  order: 4,
  lessons: [
    lessonDay19, // Idea Validation with AI
    lessonDay20, // Zapier & Automation Basics
    lessonDay21, // Week 4 Review + Mini-Challenge
  ],
};

export { lessonDay19, lessonDay20, lessonDay21 };
