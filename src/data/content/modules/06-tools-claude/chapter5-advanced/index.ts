/**
 * Chapter 5: Advanced Features Deep Dive
 *
 * PURPOSE: Master Claude's most sophisticated capabilities for power users
 *
 * CHAPTERS:
 * - Chapter 5: Advanced Features Deep Dive (Lessons 6.21-6.24)
 *
 * ESTIMATED TIME: 54 minutes (4 lessons × ~13 min each)
 *
 * XP REWARD: 100 XP per lesson × 4 lessons = 400 XP
 */

import type { Lesson } from "@/types/content";
import { lesson_6_21 } from "./lesson-6-21";
import { lesson_6_22 } from "./lesson-6-22";
import { lesson_6_23 } from "./lesson-6-23";
import { lesson_6_24 } from "./lesson-6-24";

export const chapter5Advanced = {
  id: "ch6-5-advanced",
  moduleId: "06-tools-claude",
  title: "Advanced Features Deep Dive",
  description:
    "Master Extended Thinking, advanced Artifacts, code capabilities, and browser integration",
  category: "AI Tools",
  color: {
    from: "#D97706",
    to: "#B45309",
  },
  imageUrl: "/images/lessons/abstract-data-flow.jpg",
  order: 5,
  estimatedMinutes: 54,
  chapters: [
    {
      id: "ch6-5-advanced",
      moduleId: "06-tools-claude",
      title: "Advanced Features Deep Dive",
      description: "Master Claude's sophisticated capabilities",
      order: 5,
      lessons: [lesson_6_21, lesson_6_22, lesson_6_23, lesson_6_24],
    },
  ],
};

// Export individual lessons
export { lesson_6_21 };
export { lesson_6_22 };
export { lesson_6_23 };
export { lesson_6_24 };
