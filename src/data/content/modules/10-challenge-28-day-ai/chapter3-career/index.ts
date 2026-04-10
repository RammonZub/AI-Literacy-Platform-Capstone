/**
 * Chapter 3: Career Growth (Days 15-18)
 *
 * Accelerate your career with AI-powered strategies for resumes,
 * interviews, and professional development.
 *
 * Day 18: Week 3 Review for spaced repetition
 */

import type { Chapter } from "@/types/content";

import { lessonDay15 } from "./lesson-day-15";
import { lessonDay16 } from "./lesson-day-16";
import { lessonDay17 } from "./lesson-day-17";
import { lessonDay18 } from "./lesson-day-18";

export const chapter3Career: Chapter = {
  id: "chapter3-career",
  moduleId: "10-challenge-28-day-ai",
  title: "Career Growth",
  description:
    "Accelerate your career with AI-powered strategies for resumes, interviews, and professional branding.",
  order: 3,
  lessons: [
    lessonDay15, // AI as Your Thinking Partner
    lessonDay16, // Resume Enhancement with AI
    lessonDay17, // Interview Preparation
    lessonDay18, // Week 3 Review + Mini-Challenge
  ],
};

export { lessonDay15, lessonDay16, lessonDay17, lessonDay18 };
