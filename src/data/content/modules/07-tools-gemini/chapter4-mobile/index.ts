/**
 * Chapter 4: Mobile-First Mastery
 *
 * PURPOSE: Master Gemini's mobile capabilities for productivity anywhere, anytime
 *
 * LESSONS:
 * - Lesson 7.13: Getting Started with Gemini Mobile
 * - Lesson 7.14: Gemini Live - Conversational AI on the Go
 * - Lesson 7.15: Screen Awareness and Camera Intelligence
 * - Lesson 7.16: On-Device AI and Mobile Privacy
 * - Lesson 7.17: Mobile Workflows for Real Life
 *
 * ESTIMATED TIME: 75 minutes (5 lessons × 15 min each)
 *
 * XP REWARD: 100 XP per lesson × 5 lessons = 500 XP
 */

import type { Lesson } from "@/types/content";
import { lesson_7_13 } from "./lesson-7-13";
import { lesson_7_14 } from "./lesson-7-14";
import { lesson_7_15 } from "./lesson-7-15";
import { lesson_7_16 } from "./lesson-7-16";
import { lesson_7_17 } from "./lesson-7-17";

export const chapter4Mobile = {
  id: "ch7-4-mobile",
  moduleId: "07-tools-gemini",
  title: "Mobile-First Mastery",
  description:
    "Use Gemini anywhere, anytime, with voice and visual features for productivity on the go",
  category: "AI Tools",
  color: {
    from: "#4285F4",
    to: "#34A853",
  },
  imageUrl: "/images/lessons/digital-structure.jpg",
  order: 4,
  estimatedMinutes: 75,
  chapters: [
    {
      id: "ch7-4-mobile",
      moduleId: "07-tools-gemini",
      title: "Mobile-First Mastery",
      description: "Master Gemini mobile features for productivity anywhere",
      order: 4,
      lessons: [lesson_7_13, lesson_7_14, lesson_7_15, lesson_7_16, lesson_7_17],
    },
  ],
};

// Export individual lessons for direct access
export { lesson_7_13 } from "./lesson-7-13";
export { lesson_7_14 } from "./lesson-7-14";
export { lesson_7_15 } from "./lesson-7-15";
export { lesson_7_16 } from "./lesson-7-16";
export { lesson_7_17 } from "./lesson-7-17";
