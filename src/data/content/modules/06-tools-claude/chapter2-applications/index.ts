/**
 * Chapter 2: Professional Applications
 *
 * PURPOSE: Apply Claude to real-world professional scenarios
 *
 * CHAPTERS:
 * - Chapter 2: Professional Applications (Lessons 6.6-6.10)
 *
 * ESTIMATED TIME: 63 minutes (5 lessons × ~12 min each)
 *
 * XP REWARD: 100 XP per lesson × 5 lessons = 500 XP
 */

import type { Lesson } from "@/types/content";
import { lesson_6_6 } from "./lesson-6-6";
import { lesson_6_7 } from "./lesson-6-7";
import { lesson_6_8 } from "./lesson-6-8";
import { lesson_6_9 } from "./lesson-6-9";
import { lesson_6_10 } from "./lesson-6-10";

export const chapter2Applications = {
  id: "ch6-2-applications",
  moduleId: "06-tools-claude",
  title: "Professional Applications",
  description: "Apply Claude to real-world professional work scenarios",
  category: "AI Tools",
  color: {
    from: "#D9775A",
    to: "#CC785C",
  },
  imageUrl: "/images/lessons/connection-web.jpg",
  order: 2,
  estimatedMinutes: 63,
  chapters: [
    {
      id: "ch6-2-applications",
      moduleId: "06-tools-claude",
      title: "Professional Applications",
      description: "Apply Claude to real-world workplace scenarios",
      order: 2,
      lessons: [lesson_6_6, lesson_6_7, lesson_6_8, lesson_6_9, lesson_6_10],
    },
  ],
};
