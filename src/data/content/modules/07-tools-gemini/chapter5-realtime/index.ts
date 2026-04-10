/**
 * Chapter 5: Real-Time Intelligence
 *
 * PURPOSE: Harness Google Search integration for informed decision-making
 *
 * CHAPTER:
 * - Chapter 5: Real-Time Intelligence (Lessons 7.18-7.20)
 *
 * ESTIMATED TIME: 45 minutes (3 lessons × 15 min each)
 *
 * XP REWARD: 100 XP per lesson × 3 lessons = 300 XP
 *
 * KEY TOPICS:
 * - Real-time Google Search integration
 * - News, trends, and industry monitoring
 * - Maps, travel, and location intelligence
 */

import type { Lesson } from "@/types/content";
import { lesson_7_18 } from "./lesson-7-18";
import { lesson_7_19 } from "./lesson-7-19";
import { lesson_7_20 } from "./lesson-7-20";

export const chapter5Realtime = {
  id: "ch7-5-realtime",
  moduleId: "07-tools-gemini",
  title: "Real-Time Intelligence",
  description:
    "Harness live information for smarter research, industry monitoring, and location-based decisions",
  category: "AI Tools",
  color: {
    from: "#4285F4", // Google Blue
    to: "#34A853", // Google Green
  },
  imageUrl: "/images/lessons/digital-structure.jpg",
  order: 5,
  estimatedMinutes: 45,
  chapters: [
    {
      id: "ch7-5-realtime",
      moduleId: "07-tools-gemini",
      title: "Real-Time Intelligence",
      description: "Harness Google Search integration for informed decision-making",
      order: 5,
      lessons: [lesson_7_18, lesson_7_19, lesson_7_20],
    },
  ],
};

// Export individual lessons for direct access
export { lesson_7_18 } from "./lesson-7-18";
export { lesson_7_19 } from "./lesson-7-19";
export { lesson_7_20 } from "./lesson-7-20";
