/**
 * Chapter 6: Advanced Professional Applications
 *
 * PURPOSE: Apply Gemini to complex, high-value professional tasks
 *
 * CHAPTERS:
 * - Chapter 6: Advanced Professional Applications (Lessons 7.21-7.24)
 *
 * ESTIMATED TIME: 60 minutes (4 lessons × 15 min each)
 *
 * XP REWARD: 100 XP per lesson × 4 lessons = 400 XP
 *
 * TARGET AUDIENCE: Professionals ready for advanced Gemini applications
 * PREREQUISITES: Completion of Chapters 1-5
 */

import type { Lesson } from "@/types/content";
import { lesson_7_21 } from "./lesson-7-21";
import { lesson_7_22 } from "./lesson-7-22";
import { lesson_7_23 } from "./lesson-7-23";
import { lesson_7_24 } from "./lesson-7-24";

export const chapter6Professional = {
  id: "ch7-6-professional",
  moduleId: "07-tools-gemini",
  title: "Advanced Professional Applications",
  description: "Apply Gemini to complex, high-value professional tasks",
  category: "AI Tools",
  color: {
    from: "#4285F4", // Google Blue
    to: "#34A853", // Google Green
  },
  imageUrl: "/images/lessons/digital-structure.jpg",
  order: 6,
  estimatedMinutes: 60,
  chapters: [
    {
      id: "ch7-6-professional",
      moduleId: "07-tools-gemini",
      title: "Advanced Professional Applications",
      description: "Apply Gemini to complex, high-value professional tasks",
      order: 6,
      lessons: [lesson_7_21, lesson_7_22, lesson_7_23, lesson_7_24],
    },
  ],
};

// Export individual lessons for direct access
export { lesson_7_21 } from "./lesson-7-21";
export { lesson_7_22 } from "./lesson-7-22";
export { lesson_7_23 } from "./lesson-7-23";
export { lesson_7_24 } from "./lesson-7-24";
