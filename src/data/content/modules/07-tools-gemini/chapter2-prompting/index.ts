/**
 * Chapter 2: The 5-Step Prompting Framework
 *
 * PURPOSE: Master Google's signature framework for consistently excellent AI results
 *
 * CHAPTERS:
 * - Chapter 2: The 5-Step Prompting Framework (Lessons 7.6-7.7)
 *
 * ESTIMATED TIME: 30 minutes (2 lessons × 15 min each)
 *
 * XP REWARD: 100 XP per lesson × 2 lessons = 200 XP
 */

import type { Lesson } from "@/types/content";
import { lesson_7_6 } from "./lesson-7-6";
import { lesson_7_7 } from "./lesson-7-7";

export const chapter2Prompting = {
  id: "ch7-2-prompting",
  moduleId: "07-tools-gemini",
  title: "The 5-Step Prompting Framework",
  description: "Master Google's signature framework for consistently excellent results",
  category: "AI Tools",
  color: {
    from: "#4285F4", // Google Blue
    to: "#34A853", // Google Green
  },
  imageUrl: "/images/lessons/digital-structure.jpg",
  order: 2,
  estimatedMinutes: 30,
  chapters: [
    {
      id: "ch7-2-prompting",
      moduleId: "07-tools-gemini",
      title: "The 5-Step Prompting Framework",
      description: "Master Google's signature framework for consistently excellent results",
      order: 2,
      lessons: [lesson_7_6, lesson_7_7],
    },
  ],
};
