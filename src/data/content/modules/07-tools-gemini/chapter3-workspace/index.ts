/**
 * Chapter 3: Gemini + Google Workspace
 *
 * PURPOSE: Transform how learners work with Gmail, Docs, Sheets, and Slides
 *
 * CHAPTERS:
 * - Chapter 3: Gemini + Google Workspace (Lessons 7.8-7.12)
 *
 * ESTIMATED TIME: 75 minutes (5 lessons × 15 min each)
 *
 * XP REWARD: 100 XP per lesson × 5 lessons = 500 XP
 *
 * TARGET AUDIENCE: 40-55+ non-technical professionals
 */

import type { Lesson } from "@/types/content";
import { lesson_7_8 } from "./lesson-7-8";
import { lesson_7_9 } from "./lesson-7-9";
import { lesson_7_10 } from "./lesson-7-10";
import { lesson_7_11 } from "./lesson-7-11";
import { lesson_7_12 } from "./lesson-7-12";

export const chapter3Workspace = {
  id: "ch7-3-workspace",
  moduleId: "07-tools-gemini",
  title: "Gemini + Google Workspace",
  description:
    "Transform how you work with Gmail, Docs, Sheets, and Slides using AI-powered features",
  category: "AI Tools",
  color: {
    from: "#4285F4", // Google Blue
    to: "#34A853", // Google Green
  },
  imageUrl: "/images/lessons/digital-structure.jpg",
  order: 3,
  estimatedMinutes: 75,
  chapters: [
    {
      id: "ch7-3-workspace",
      moduleId: "07-tools-gemini",
      title: "Gemini + Google Workspace",
      description: "Transform how you work with Gmail, Docs, Sheets, and Slides",
      order: 3,
      lessons: [lesson_7_8, lesson_7_9, lesson_7_10, lesson_7_11, lesson_7_12],
    },
  ],
};

// Export individual lessons for direct access
export { lesson_7_8 } from "./lesson-7-8";
export { lesson_7_9 } from "./lesson-7-9";
export { lesson_7_10 } from "./lesson-7-10";
export { lesson_7_11 } from "./lesson-7-11";
export { lesson_7_12 } from "./lesson-7-12";
