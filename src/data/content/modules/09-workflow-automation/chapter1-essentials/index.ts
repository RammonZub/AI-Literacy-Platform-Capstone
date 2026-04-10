/**
 * Chapter 1: Getting Started
 *
 * PURPOSE: Workflow mindset and hands-on patterns for Module 9
 *
 * CHAPTER: 1 - Getting Started (Lessons 8.0-8.3)
 *
 * ESTIMATED TIME: 60 minutes (15 + 15 + 12 + 18 minutes)
 *
 * XP REWARD: 100 XP per lesson x 4 lessons = 400 XP
 *
 * LESSONS:
 * - Lesson 8.0: Workflow Mindset & Module Overview (15 min)
 * - Lesson 8.1: Confirm Your Four-Tool Stack (15 min)
 * - Lesson 8.2: Why Tool Chains Beat One-Off Prompts (12 min)
 * - Lesson 8.3: Your First Hands-On Workflows (18 min)
 */

import type { Lesson } from "@/types/content";
import { lesson_8_0 } from "./lesson-8-0";
import { lesson_8_1 } from "./lesson-8-1";
import { lesson_8_2 } from "./lesson-8-2";
import { lesson_8_3 } from "./lesson-8-3";

export const chapter1Essentials = {
  id: "ch8-1-essentials",
  moduleId: "09-workflow-automation",
  title: "Getting Started",
  description: "Workflow mindset, stack check, chain thinking, and chat patterns",
  category: "AI Tools",
  color: {
    from: "#FF6B35",
    to: "#D32F2F",
  },
  imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-0-cover.webp",
  order: 1,
  estimatedMinutes: 60,
  chapters: [
    {
      id: "ch8-1-essentials",
      moduleId: "09-workflow-automation",
      title: "Getting Started",
      description: "Workflow mindset, stack check, chain thinking, and chat patterns",
      order: 1,
      lessons: [lesson_8_0, lesson_8_1, lesson_8_2, lesson_8_3],
    },
  ],
};

// Export individual lessons for module-level imports
export { lesson_8_0, lesson_8_1, lesson_8_2, lesson_8_3 };
