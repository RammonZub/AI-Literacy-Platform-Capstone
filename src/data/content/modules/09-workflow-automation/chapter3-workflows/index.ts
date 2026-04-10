/**
 * Chapter 3: Daily Productivity Workflows
 *
 * PURPOSE: Practical workflows for email, meetings, research, and content creation
 *
 * CHAPTERS:
 * - Chapter 3: Daily Productivity Workflows (Lessons 8.8-8.12)
 *
 * ESTIMATED TIME: 75 minutes (5 lessons × 15 min each)
 *
 * XP REWARD: 100 XP per lesson × 5 lessons = 500 XP
 *
 * TARGET AUDIENCE: 40-55+ non-technical professionals who want to maximize productivity
 *
 * UNIQUE FOCUS:
 * - Speed-focused workflows leveraging ChatGPT's instant responses
 * - Ready-to-use templates for common tasks
 * - Daily routines that compound productivity gains
 */

import type { Chapter } from "@/types/content";
import { lesson_8_8 } from "./lesson-8-8";
import { lesson_8_9 } from "./lesson-8-9";
import { lesson_8_10 } from "./lesson-8-10";
import { lesson_8_11 } from "./lesson-8-11";
import { lesson_8_12 } from "./lesson-8-12";

export const chapter3Workflows = {
  id: "ch8-3-workflows",
  moduleId: "09-workflow-automation",
  title: "Daily Productivity Workflows",
  description:
    "Practical workflows for email, meetings, research, and content creation that leverage ChatGPT's speed",
  category: "AI Tools",
  color: {
    from: "#FF6B35", // ChatGPT Orange
    to: "#D32F2F", // Speed Red
  },
  imageUrl: "/images/lessons/digital-structure.jpg",
  order: 3,
  estimatedMinutes: 75,
  chapters: [
    {
      id: "ch8-3-workflows",
      moduleId: "09-workflow-automation",
      title: "Daily Productivity Workflows",
      description: "Practical workflows for email, meetings, research, and content creation",
      order: 3,
      lessons: [lesson_8_8, lesson_8_9, lesson_8_10, lesson_8_11, lesson_8_12],
    },
  ],
};

// Export individual lessons for direct access
export { lesson_8_8 } from "./lesson-8-8";
export { lesson_8_9 } from "./lesson-8-9";
export { lesson_8_10 } from "./lesson-8-10";
export { lesson_8_11 } from "./lesson-8-11";
export { lesson_8_12 } from "./lesson-8-12";
