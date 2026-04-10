/**
 * Chapter 8: Commercial Usage, Rights, and Next Steps
 *
 * PURPOSE: Navigate commercial usage and celebrate course completion
 *
 * CHAPTERS:
 * - Chapter 8: Commercial Usage, Rights, and Next Steps (Lessons 9.25-9.27)
 *
 * ESTIMATED TIME: 45 minutes (3 lessons × 15 min each)
 *
 * XP REWARD: 100 XP per lesson × 3 lessons = 300 XP
 */

import type { Lesson } from "@/types/content";
import { lesson_9_25 } from "./lesson-9-25";
import { lesson_9_26 } from "./lesson-9-26";
import { lesson_9_27 } from "./lesson-9-27";

export const chapter8Commercial = {
  id: "ch9-8-commercial",
  moduleId: "08-tools-midjourney",
  title: "Commercial Usage, Rights, and Next Steps",
  description:
    "Navigate legal considerations, prepare images for output, and plan your continued growth",
  category: "AI Tools",
  color: {
    from: "#5865F2",
    to: "#EB459E",
  },
  imageUrl: "/images/lessons/digital-structure.jpg",
  order: 8,
  estimatedMinutes: 45,
  chapters: [
    {
      id: "ch9-8-commercial",
      moduleId: "08-tools-midjourney",
      title: "Commercial Usage, Rights, and Next Steps",
      description: "Complete your journey with legal knowledge and future planning",
      order: 8,
      lessons: [lesson_9_25, lesson_9_26, lesson_9_27],
    },
  ],
};
