/**
 * Chapter 5: Personal Life (Days 22-25)
 *
 * Apply AI to learning, health, and personal productivity.
 *
 * Day 23: Custom GPTs for Personal Use (advanced topic)
 * Day 25: AI Agents Overview (cutting-edge topic)
 */

import type { Chapter } from "@/types/content";

import { lessonDay22 } from "./lesson-day-22";
import { lessonDay23 } from "./lesson-day-23";
import { lessonDay24 } from "./lesson-day-24";
import { lessonDay25 } from "./lesson-day-25";

export const chapter5Personal: Chapter = {
  id: "chapter5-personal",
  moduleId: "10-challenge-28-day-ai",
  title: "Personal Life",
  description: "Apply AI to learning, health, and personal productivity with cutting-edge tools.",
  order: 5,
  lessons: [
    lessonDay22, // Learning & Skill Development
    lessonDay23, // Custom GPTs for Personal Use
    lessonDay24, // Health & Fitness Planning
    lessonDay25, // AI Agents Overview
  ],
};

export { lessonDay22, lessonDay23, lessonDay24, lessonDay25 };
