/**
 * Chapter 6: Advanced Techniques for Consistency
 *
 * PURPOSE: Master advanced Midjourney techniques for professional-level control
 *
 * CHAPTERS:
 * - Chapter 6: Advanced Techniques for Consistency (Lessons 9.19-9.22)
 *
 * ESTIMATED TIME: 60 minutes (4 lessons × ~15 min each)
 *
 * XP REWARD: 100 XP per lesson × 4 lessons = 400 XP
 */

import type { Lesson } from "@/types/content";
import { lesson_9_19 } from "./lesson-9-19";
import { lesson_9_20 } from "./lesson-9-20";
import { lesson_9_21 } from "./lesson-9-21";
import { lesson_9_22 } from "./lesson-9-22";

export const chapter6Advanced = {
  id: "ch9-6-advanced",
  moduleId: "08-tools-midjourney",
  title: "Advanced Techniques for Consistency",
  description: "Master advanced Midjourney techniques for professional-level creative control",
  category: "AI Tools",
  color: {
    from: "#5865F2",
    to: "#EB459E",
  },
  imageUrl: "/images/lessons/brain-neural-network.jpg",
  order: 6,
  estimatedMinutes: 60,
  chapters: [
    {
      id: "ch9-6-advanced",
      moduleId: "08-tools-midjourney",
      title: "Advanced Techniques for Consistency",
      description: "Professional-level Midjourney mastery",
      order: 6,
      lessons: [lesson_9_19, lesson_9_20, lesson_9_21, lesson_9_22],
    },
  ],
};
