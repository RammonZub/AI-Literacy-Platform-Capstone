/**
 * Chapter 3: Advanced Features
 *
 * PURPOSE: Master sophisticated Claude techniques and features
 *
 * CHAPTERS:
 * - Chapter 3: Advanced Features (Lessons 6.11-6.15)
 *
 * ESTIMATED TIME: 63 minutes (5 lessons × ~12 min each)
 *
 * XP REWARD: 100 XP per lesson × 5 lessons = 500 XP
 */

import type { Lesson } from "@/types/content";
import { lesson_6_11 } from "./lesson-6-11";
import { lesson_6_12 } from "./lesson-6-12";
import { lesson_6_13 } from "./lesson-6-13";
import { lesson_6_14 } from "./lesson-6-14";
import { lesson_6_15 } from "./lesson-6-15";

export const chapter3Advanced = {
  id: "ch6-3-advanced",
  moduleId: "06-tools-claude",
  title: "Advanced Features",
  description: "Master sophisticated techniques for exceptional Claude results",
  category: "AI Tools",
  color: {
    from: "#D9775A",
    to: "#CC785C",
  },
  imageUrl: "/images/lessons/abstract-data-flow.jpg",
  order: 3,
  estimatedMinutes: 63,
  chapters: [
    {
      id: "ch6-3-advanced",
      moduleId: "06-tools-claude",
      title: "Advanced Features",
      description: "Master sophisticated Claude techniques",
      order: 3,
      lessons: [lesson_6_11, lesson_6_12, lesson_6_13, lesson_6_14, lesson_6_15],
    },
  ],
};
