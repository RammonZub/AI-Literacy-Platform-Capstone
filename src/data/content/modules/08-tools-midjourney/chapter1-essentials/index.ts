/**
 * Chapter 1: Getting Started
 *
 * PURPOSE: Build foundational skills for Midjourney use from setup to first images
 *
 * CHAPTERS:
 * - Chapter 1: Getting Started (Lessons 9.1-9.5)
 *
 * ESTIMATED TIME: 75 minutes (15 minutes per lesson)
 *
 * XP REWARD: 100 XP per lesson × 5 lessons = 500 XP
 */

import type { Lesson } from "@/types/content";
import { lesson_9_1 } from "./lesson-9-1";
import { lesson_9_2 } from "./lesson-9-2";
import { lesson_9_3 } from "./lesson-9-3";
import { lesson_9_4 } from "./lesson-9-4";
import { lesson_9_5 } from "./lesson-9-5";

export const chapter1Essentials = {
  id: "ch9-1-essentials",
  moduleId: "08-tools-midjourney",
  title: "Getting Started",
  description: "From zero to your first AI-generated image",
  category: "AI Tools",
  color: {
    from: "#5865F2",
    to: "#EB459E",
  },
  imageUrl: "/images/lessons/midjourney-getting-started.jpg",
  order: 1,
  estimatedMinutes: 75,
  chapters: [
    {
      id: "ch9-1-essentials",
      moduleId: "08-tools-midjourney",
      title: "Getting Started",
      description: "From zero to your first AI-generated image",
      order: 1,
      lessons: [lesson_9_1, lesson_9_2, lesson_9_3, lesson_9_4, lesson_9_5],
    },
  ],
};

export { lesson_9_1, lesson_9_2, lesson_9_3, lesson_9_4, lesson_9_5 };
