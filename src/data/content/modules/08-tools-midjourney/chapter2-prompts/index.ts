/**
 * Chapter 2: Prompt Engineering
 *
 * PURPOSE: Master the skill of writing effective Midjourney prompts
 *
 * CHAPTERS:
 * - Chapter 2: Prompt Engineering (Lessons 9.6-9.8)
 *
 * ESTIMATED TIME: 45 minutes (15 minutes per lesson)
 *
 * XP REWARD: 100 XP per lesson × 3 lessons = 300 XP
 */

import type { Lesson } from "@/types/content";
import { lesson_9_6 } from "./lesson-9-6";
import { lesson_9_7 } from "./lesson-9-7";
import { lesson_9_8 } from "./lesson-9-8";

export const chapter2Prompts = {
  id: "ch9-2-prompts",
  moduleId: "08-tools-midjourney",
  title: "Prompt Engineering",
  description: "Learn the art of writing prompts that produce stunning results",
  category: "AI Tools",
  color: {
    from: "#5865F2",
    to: "#EB459E",
  },
  imageUrl: "/images/lessons/midjourney-prompts.jpg",
  order: 2,
  estimatedMinutes: 45,
  chapters: [
    {
      id: "ch9-2-prompts",
      moduleId: "08-tools-midjourney",
      title: "Prompt Engineering",
      description: "Learn the art of writing prompts that produce stunning results",
      order: 2,
      lessons: [lesson_9_6, lesson_9_7, lesson_9_8],
    },
  ],
};

export { lesson_9_6, lesson_9_7, lesson_9_8 };
