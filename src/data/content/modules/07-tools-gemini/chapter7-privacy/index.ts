/**
 * Chapter 7: Privacy, Security, and Responsible AI
 *
 * PURPOSE: Equip learners with essential knowledge for using AI safely
 * and responsibly in professional settings
 *
 * CHAPTERS:
 * - Chapter 7: Privacy, Security, and Responsible AI (Lessons 7.25-7.26)
 *
 * ESTIMATED TIME: 30 minutes (2 lessons × 15 min each)
 *
 * XP REWARD: 100 XP per lesson × 2 lessons = 200 XP
 */

import type { Lesson } from "@/types/content";
import { lesson_7_25 } from "./lesson-7-25";
import { lesson_7_26 } from "./lesson-7-26";

export const chapter7Privacy = {
  id: "ch7-7-privacy",
  moduleId: "07-tools-gemini",
  title: "Privacy, Security, and Responsible AI",
  description: "Essential knowledge for using Gemini safely and ethically",
  category: "AI Tools",
  color: {
    from: "#4285F4",
    to: "#34A853",
  },
  imageUrl: "/images/lessons/digital-structure.jpg",
  order: 7,
  estimatedMinutes: 30,
  chapters: [
    {
      id: "ch7-7-privacy",
      moduleId: "07-tools-gemini",
      title: "Privacy, Security, and Responsible AI",
      description: "Protect your data and use AI responsibly",
      order: 7,
      lessons: [lesson_7_25, lesson_7_26],
    },
  ],
};

// Export individual lessons for direct access
export { lesson_7_25 };
export { lesson_7_26 };
