/**
 * Chapter 2: Productivity & Research (Days 8-14)
 *
 * Master productivity workflows and research skills with AI.
 * Covers: Gemini (grounding), research workflows, Midjourney handoffs, note-taking, analysis.
 *
 * Includes Week 2 Review (Day 14) for spaced repetition.
 */

import type { Chapter } from "@/types/content";

import { lessonDay8 } from "./lesson-day-8";
import { lessonDay9 } from "./lesson-day-9";
import { lessonDay10 } from "./lesson-day-10";
import { lessonDay11 } from "./lesson-day-11";
import { lessonDay12 } from "./lesson-day-12";
import { lessonDay13 } from "./lesson-day-13";
import { lessonDay14 } from "./lesson-day-14";

export const chapter2ProductivityResearch: Chapter = {
  id: "chapter2-productivity-research",
  moduleId: "10-challenge-28-day-ai",
  title: "Productivity & Research",
  description:
    "Master research workflows, document analysis, and data insights with AI-powered productivity tools.",
  order: 2,
  lessons: [
    lessonDay8, // Gemini Fundamentals
    lessonDay9, // Research Workflow Mastery
    lessonDay10, // Gemini Multimodal AI (merged from old Days 5-6)
    lessonDay11, // AI-Powered Note Taking
    lessonDay12, // Document Analysis
    lessonDay13, // Data Analysis Basics
    lessonDay14, // Week 2 Review + Mini-Challenge
  ],
};

export { lessonDay8, lessonDay9, lessonDay10, lessonDay11, lessonDay12, lessonDay13, lessonDay14 };
