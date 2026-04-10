/**
 * Module 6: Claude Mastery
 *
 * PURPOSE: Complete toolkit for personal and professional productivity with Claude
 *
 * MODULE STRUCTURE:
 * - Chapter 1: Claude Essentials (Lessons 6.1-6.5) - Foundational skills
 * - Chapter 2: Professional Applications (Lessons 6.6-6.10) - Real-world workflows
 * - Chapter 3: Advanced Features (Lessons 6.11-6.15) - Sophisticated techniques
 * - Chapter 4: Projects & Knowledge Bases (Lessons 6.16-6.20) - Claude's biggest differentiator
 * - Chapter 5: Advanced Features Deep Dive (Lessons 6.21-6.24) - Extended Thinking, Code, Chrome
 * - Chapter 6: Integrations & Team Features (Lessons 6.25-6.30) - Automations and capstone
 *
 * ESTIMATED TIME: 430 minutes (30 lessons across 6 chapters)
 *
 * XP REWARD: 3200 XP (26 lessons × 100 XP + 2 capstones × 150 XP + 1 ultimate capstone × 200 XP)
 *
 * TARGET AUDIENCE: Professionals who want to use Claude effectively and responsibly
 * PREREQUISITES: None (beginner-friendly)
 * NEXT STEPS: Module 7 - Gemini Mastery
 */

import type { Module } from "@/types/content";
import { chapter1Essentials } from "./chapter1-essentials";
import { chapter2Applications } from "./chapter2-applications";
import { chapter3Advanced } from "./chapter3-advanced";
import { chapter4Projects } from "./chapter4-projects";
import { chapter5Advanced } from "./chapter5-advanced";
import { chapter6Integrations } from "./chapter6-integrations";

export const tools_claude: Module = {
  id: "06-tools-claude",
  title: "Claude Mastery",
  description:
    "Complete toolkit for personal and professional productivity with Claude—designed to be helpful, harmless, and honest",
  category: "AI Tools",
  color: {
    from: "#D9775A", // Warm orange/terracotta
    to: "#CC785C", // Softer coral
  },
  // Custom cover image for Claude Mastery (Anthropic)
  imageUrl: "/images/courses/modules/anthropic.webp",
  order: 6,
  estimatedMinutes: 430,
  chapters: [
    chapter1Essentials.chapters[0],
    chapter2Applications.chapters[0],
    chapter3Advanced.chapters[0],
    chapter4Projects.chapters[0],
    chapter5Advanced.chapters[0],
    chapter6Integrations.chapters[0],
  ],
};

// Export chapter modules for easier imports
export { chapter1Essentials };
export { chapter2Applications };
export { chapter3Advanced };
export { chapter4Projects };
export { chapter5Advanced };
export { chapter6Integrations };

// Export individual lessons for direct access
export { lesson_6_1 } from "./chapter1-essentials/lesson-6-1";
export { lesson_6_2 } from "./chapter1-essentials/lesson-6-2";
export { lesson_6_3 } from "./chapter1-essentials/lesson-6-3";
export { lesson_6_4 } from "./chapter1-essentials/lesson-6-4";
export { lesson_6_5 } from "./chapter1-essentials/lesson-6-5";
export { lesson_6_6 } from "./chapter2-applications/lesson-6-6";
export { lesson_6_7 } from "./chapter2-applications/lesson-6-7";
export { lesson_6_8 } from "./chapter2-applications/lesson-6-8";
export { lesson_6_9 } from "./chapter2-applications/lesson-6-9";
export { lesson_6_10 } from "./chapter2-applications/lesson-6-10";
export { lesson_6_11 } from "./chapter3-advanced/lesson-6-11";
export { lesson_6_12 } from "./chapter3-advanced/lesson-6-12";
export { lesson_6_13 } from "./chapter3-advanced/lesson-6-13";
export { lesson_6_14 } from "./chapter3-advanced/lesson-6-14";
export { lesson_6_15 } from "./chapter3-advanced/lesson-6-15";
export { lesson_6_16 } from "./chapter4-projects/lesson-6-16";
export { lesson_6_17 } from "./chapter4-projects/lesson-6-17";
export { lesson_6_18 } from "./chapter4-projects/lesson-6-18";
export { lesson_6_19 } from "./chapter4-projects/lesson-6-19";
export { lesson_6_20 } from "./chapter4-projects/lesson-6-20";
export { lesson_6_21 } from "./chapter5-advanced/lesson-6-21";
export { lesson_6_22 } from "./chapter5-advanced/lesson-6-22";
export { lesson_6_23 } from "./chapter5-advanced/lesson-6-23";
export { lesson_6_24 } from "./chapter5-advanced/lesson-6-24";
export { lesson_6_25 } from "./chapter6-integrations/lesson-6-25";
export { lesson_6_26 } from "./chapter6-integrations/lesson-6-26";
export { lesson_6_27 } from "./chapter6-integrations/lesson-6-27";
export { lesson_6_28 } from "./chapter6-integrations/lesson-6-28";
export { lesson_6_29 } from "./chapter6-integrations/lesson-6-29";
export { lesson_6_30 } from "./chapter6-integrations/lesson-6-30";
