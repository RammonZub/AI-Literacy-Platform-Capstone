/**
 * Chapter 8: Best Practices & Implementation
 *
 * PURPOSE: Master templates, optimize costs, and implement your 30-day plan
 *
 * CHAPTERS:
 * - Chapter 8: Best Practices & Implementation (Lessons 8.26-8.29)
 *
 * ESTIMATED TIME: 60 minutes (4 lessons × 15 min each)
 *
 * XP REWARD: 100 XP per lesson × 4 lessons = 400 XP
 *
 * This is the FINAL chapter of the Workflow and Automation course.
 */

import type { Lesson } from "@/types/content";
import { lesson_8_26 } from "./lesson-8-26";
import { lesson_8_27 } from "./lesson-8-27";
import { lesson_8_28 } from "./lesson-8-28";
import { lesson_8_29 } from "./lesson-8-29";

export const chapter8BestPractices = {
  id: "ch8-8-best-practices",
  moduleId: "09-workflow-automation",
  title: "Best Practices & Implementation",
  description: "Master templates, optimize costs, and implement your 30-day plan",
  category: "AI Tools",
  color: {
    from: "#FF6B35",
    to: "#D32F2F",
  },
  imageUrl: "/images/lessons/abstract-data-flow.jpg",
  order: 8,
  estimatedMinutes: 60,
  chapters: [
    {
      id: "ch8-8-best-practices",
      moduleId: "09-workflow-automation",
      title: "Best Practices & Implementation",
      description: "Master templates, optimize costs, and implement your 30-day plan",
      order: 8,
      lessons: [lesson_8_26, lesson_8_27, lesson_8_28, lesson_8_29],
    },
  ],
};

// Export individual lessons for direct access
export { lesson_8_26, lesson_8_27, lesson_8_28, lesson_8_29 };
