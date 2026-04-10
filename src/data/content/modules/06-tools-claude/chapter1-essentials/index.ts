/**
 * Chapter 1: Claude Essentials
 *
 * PURPOSE: Build foundational skills for effective Claude use
 *
 * CHAPTERS:
 * - Chapter 1: Claude Essentials (Lessons 6.1-6.5)
 *
 * ESTIMATED TIME: 64 minutes (5 lessons × ~12 min each)
 *
 * XP REWARD: 100 XP per lesson × 5 lessons = 500 XP
 */

import type { Lesson } from "@/types/content";
import { lesson_6_1 } from "./lesson-6-1";
import { lesson_6_2 } from "./lesson-6-2";
import { lesson_6_3 } from "./lesson-6-3";
import { lesson_6_4 } from "./lesson-6-4";
import { lesson_6_5 } from "./lesson-6-5";

export const chapter1Essentials = {
  id: "ch6-1-essentials",
  moduleId: "06-tools-claude",
  title: "Claude Essentials",
  description: "Foundational skills for effective Claude use in your daily work",
  category: "AI Tools",
  color: {
    from: "#D9775A",
    to: "#CC785C",
  },
  imageUrl: "/images/lessons/digital-structure.jpg",
  order: 1,
  estimatedMinutes: 64,
  chapters: [
    {
      id: "ch6-1-essentials",
      moduleId: "06-tools-claude",
      title: "Claude Essentials",
      description: "Build foundational skills for effective Claude use",
      order: 1,
      lessons: [lesson_6_1, lesson_6_2, lesson_6_3, lesson_6_4, lesson_6_5],
    },
  ],
};
