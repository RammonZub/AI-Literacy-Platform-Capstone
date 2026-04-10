/**
 * Chapter 7: Advanced Strategies
 *
 * PURPOSE: Master multi-model workflows and hybrid AI approaches for
 * maximum productivity and intelligent task routing.
 *
 * CHAPTERS:
 * - Chapter 7: Advanced Strategies (Lessons 8.23-8.25)
 *
 * ESTIMATED TIME: 45 minutes (3 lessons x 15 min each)
 *
 * XP REWARD: 100 XP per lesson x 3 lessons = 300 XP
 *
 * LESSONS:
 * - Lesson 8.23: Building Your Personal AI Stack
 * - Lesson 8.24: Multi-Model Workflow Patterns
 * - Lesson 8.25: Hybrid AI Strategies
 */

import type { Chapter } from "@/types/content";
import { lesson_8_23 } from "./lesson-8-23";
import { lesson_8_24 } from "./lesson-8-24";
import { lesson_8_25 } from "./lesson-8-25";

export const chapter7Strategies = {
  id: "ch8-7-strategies",
  moduleId: "09-workflow-automation",
  title: "Advanced Strategies",
  description: "Build multi-model workflows and hybrid AI approaches",
  category: "Strategy",
  color: {
    from: "#FF6B35",
    to: "#D32F2F",
  },
  imageUrl: "/images/lessons/digital-circuit.jpg",
  order: 7,
  estimatedMinutes: 45,
  chapters: [
    {
      id: "ch8-7-strategies",
      moduleId: "09-workflow-automation",
      title: "Advanced Strategies",
      description: "Build multi-model workflows and hybrid AI approaches",
      order: 7,
      lessons: [lesson_8_23, lesson_8_24, lesson_8_25],
    },
  ] as Chapter[],
};

export { lesson_8_23, lesson_8_24, lesson_8_25 };
