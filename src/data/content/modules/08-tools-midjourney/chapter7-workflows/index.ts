/**
 * Chapter 7: Refinement and Professional Workflows
 *
 * PURPOSE: Master image refinement and establish professional creation systems
 *
 * CHAPTERS:
 * - Chapter 7: Refinement and Professional Workflows (Lessons 9.23-9.24)
 *
 * ESTIMATED TIME: 30 minutes (2 lessons × 15 min each)
 *
 * XP REWARD: 100 XP per lesson × 2 lessons = 200 XP
 */

import type { Lesson } from "@/types/content";
import { lesson_9_23 } from "./lesson-9-23";
import { lesson_9_24 } from "./lesson-9-24";

export const chapter7Workflows = {
  id: "ch9-7-workflows",
  moduleId: "08-tools-midjourney",
  title: "Refinement and Professional Workflows",
  description:
    "Transform raw generations into polished, production-ready images with efficient systems",
  category: "AI Tools",
  color: {
    from: "#5865F2",
    to: "#EB459E",
  },
  imageUrl: "/images/lessons/abstract-data-flow.jpg",
  order: 7,
  estimatedMinutes: 30,
  chapters: [
    {
      id: "ch9-7-workflows",
      moduleId: "08-tools-midjourney",
      title: "Refinement and Professional Workflows",
      description: "Master image refinement and efficient creation systems",
      order: 7,
      lessons: [lesson_9_23, lesson_9_24],
    },
  ],
};
