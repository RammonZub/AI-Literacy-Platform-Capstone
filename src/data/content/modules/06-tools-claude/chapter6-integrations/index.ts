/**
 * Chapter 6: Integrations & Team Features
 *
 * PURPOSE: Connect Claude to your tools and teams for maximum productivity
 *
 * CHAPTERS:
 * - Chapter 6: Integrations & Team Features (Lessons 6.25-6.30)
 *
 * ESTIMATED TIME: 86 minutes (6 lessons total)
 *
 * XP REWARD: 100 XP × 4 + 150 XP + 200 XP capstone = 750 XP
 */

import type { Lesson } from "@/types/content";
import { lesson_6_25 } from "./lesson-6-25";
import { lesson_6_26 } from "./lesson-6-26";
import { lesson_6_27 } from "./lesson-6-27";
import { lesson_6_28 } from "./lesson-6-28";
import { lesson_6_29 } from "./lesson-6-29";
import { lesson_6_30 } from "./lesson-6-30";

export const chapter6Integrations = {
  id: "ch6-6-integrations",
  moduleId: "06-tools-claude",
  title: "Integrations & Team Features",
  description: "Connect Claude with your tools, teams, and workflows for maximum productivity",
  category: "AI Tools",
  color: {
    from: "#D97706",
    to: "#B45309",
  },
  imageUrl: "/images/lessons/digital-structure.jpg",
  order: 6,
  estimatedMinutes: 86,
  chapters: [
    {
      id: "ch6-6-integrations",
      moduleId: "06-tools-claude",
      title: "Integrations & Team Features",
      description: "Connect Claude to your complete productivity ecosystem",
      order: 6,
      lessons: [lesson_6_25, lesson_6_26, lesson_6_27, lesson_6_28, lesson_6_29, lesson_6_30],
    },
  ],
};

// Export individual lessons
export { lesson_6_25 };
export { lesson_6_26 };
export { lesson_6_27 };
export { lesson_6_28 };
export { lesson_6_29 };
export { lesson_6_30 };
