/**
 * Chapter 4: Compound AI & Research
 *
 * PURPOSE: Master ChatGPT's tool-enabled models for real-time research
 *
 * CHAPTERS:
 * - Chapter 4: Compound AI & Research (Lessons 8.13-8.15)
 *
 * ESTIMATED TIME: 45 minutes (3 lessons x 15 min each)
 *
 * XP REWARD: 100 XP per lesson x 3 lessons = 300 XP
 */

import type { Lesson } from "@/types/content";
import { lesson_8_13 } from "./lesson-8-13";
import { lesson_8_14 } from "./lesson-8-14";
import { lesson_8_15 } from "./lesson-8-15";

export const chapter4Compound = {
  id: "ch8-4-compound",
  moduleId: "09-workflow-automation",
  title: "Compound AI & Research",
  description: "Master real-time research with ChatGPT's tool-enabled models",
  category: "AI Tools",
  color: {
    from: "#FF6B35",
    to: "#D32F2F",
  },
  imageUrl: "/images/lessons/digital-structure.jpg",
  order: 4,
  estimatedMinutes: 45,
  chapters: [
    {
      id: "ch8-4-compound",
      moduleId: "09-workflow-automation",
      title: "Compound AI & Research",
      description: "Master real-time research with ChatGPT's tool-enabled models",
      order: 4,
      lessons: [lesson_8_13, lesson_8_14, lesson_8_15],
    },
  ],
};

// Export individual lessons for direct access
export { lesson_8_13 } from "./lesson-8-13";
export { lesson_8_14 } from "./lesson-8-14";
export { lesson_8_15 } from "./lesson-8-15";
