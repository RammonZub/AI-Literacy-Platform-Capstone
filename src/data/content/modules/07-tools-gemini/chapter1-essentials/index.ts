/**
 * Chapter 1: Getting Started — Your AI Partner at Work
 *
 * PURPOSE: Build foundational confidence and understanding for Gemini use
 *
 * CHAPTERS:
 * - Chapter 1: Getting Started (Lessons 7.1-7.5)
 *
 * ESTIMATED TIME: 75 minutes (5 lessons x 15 min each)
 *
 * XP REWARD: 100 XP per lesson x 5 lessons = 500 XP
 */

import type { Lesson } from "@/types/content";
import { lesson_7_1 } from "./lesson-7-1";
import { lesson_7_2 } from "./lesson-7-2";
import { lesson_7_3 } from "./lesson-7-3";
import { lesson_7_4 } from "./lesson-7-4";
import { lesson_7_5 } from "./lesson-7-5";

export const chapter1Essentials = {
  id: "ch7-1-essentials",
  moduleId: "07-tools-gemini",
  title: "Getting Started — Your AI Partner at Work",
  description:
    "Build foundational skills and confidence for effective Gemini use in your daily work",
  category: "AI Tools",
  color: {
    from: "#4285F4", // Google Blue
    to: "#34A853", // Google Green
  },
  imageUrl: "/images/lessons/digital-structure.jpg",
  order: 1,
  estimatedMinutes: 75,
  chapters: [
    {
      id: "ch7-1-essentials",
      moduleId: "07-tools-gemini",
      title: "Getting Started — Your AI Partner at Work",
      description: "Build foundational confidence with Gemini through practical, hands-on lessons",
      order: 1,
      lessons: [lesson_7_1, lesson_7_2, lesson_7_3, lesson_7_4, lesson_7_5],
    },
  ],
};
