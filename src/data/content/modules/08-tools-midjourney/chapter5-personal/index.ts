/**
 * Chapter 5: Personal Creative Projects
 *
 * PURPOSE: Create meaningful personal projects with Midjourney
 *
 * CHAPTERS:
 * - Chapter 5: Personal Creative Projects (Lessons 9.17-9.18)
 *
 * ESTIMATED TIME: 30 minutes (2 lessons × ~15 min each)
 *
 * XP REWARD: 100 XP per lesson × 2 lessons = 200 XP
 */

import type { Lesson } from "@/types/content";
import { lesson_9_17 } from "./lesson-9-17";
import { lesson_9_18 } from "./lesson-9-18";

export const chapter5Personal = {
  id: "ch9-5-personal",
  moduleId: "08-tools-midjourney",
  title: "Personal Creative Projects",
  description: "Create meaningful gifts, home decor, and legacy projects with Midjourney",
  category: "AI Tools",
  color: {
    from: "#5865F2",
    to: "#EB459E",
  },
  imageUrl: "/images/lessons/brain-neural-network.jpg",
  order: 5,
  estimatedMinutes: 30,
  chapters: [
    {
      id: "ch9-5-personal",
      moduleId: "08-tools-midjourney",
      title: "Personal Creative Projects",
      description: "Create meaningful personal projects that last",
      order: 5,
      lessons: [lesson_9_17, lesson_9_18],
    },
  ],
};
