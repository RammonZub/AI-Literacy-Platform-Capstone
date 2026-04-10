/**
 * Chapter 5: Integrations & Capstone
 *
 * PURPOSE: Advanced integrations and course completion capstone
 *
 * LESSONS:
 * - Lesson 5.23: Gmail Integration Mastery
 * - Lesson 5.24: Google Workspace Integration
 * - Lesson 5.25: Zapier Automation Fundamentals
 * - Lesson 5.26: Advanced Automations with Make.com
 * - Lesson 5.27: Custom GPTs and Actions (Advanced)
 * - Lesson 5.28: Team and Enterprise Features
 * - Lesson 5.29: Building Your AI Workflow System
 * - Lesson 5.30: Capstone Project: Your AI-Powered Workflow
 *
 * ESTIMATED TIME: 120 minutes (8 lessons x 15 min average)
 *
 * XP REWARD: 900 XP total (7 lessons x 100 XP + 1 capstone x 200 XP)
 */

import type { Chapter } from "@/types/content";
import { lesson_5_23 } from "./lesson-5-23";
import { lesson_5_24 } from "./lesson-5-24";
import { lesson_5_25 } from "./lesson-5-25";
import { lesson_5_26 } from "./lesson-5-26";
import { lesson_5_27 } from "./lesson-5-27";
import { lesson_5_28 } from "./lesson-5-28";
import { lesson_5_29 } from "./lesson-5-29";
import { lesson_5_30 } from "./lesson-5-30";

export const chapter5Integrations: Chapter = {
  id: "ch5-5-integrations",
  moduleId: "05-tools-chatgpt",
  title: "Integrations & Capstone",
  description: "Connect ChatGPT to your tools and build your complete AI workflow",
  order: 5,
  lessons: [
    lesson_5_23,
    lesson_5_24,
    lesson_5_25,
    lesson_5_26,
    lesson_5_27,
    lesson_5_28,
    lesson_5_29,
    lesson_5_30,
  ],
};

// Export individual lessons for direct imports
export {
  lesson_5_23,
  lesson_5_24,
  lesson_5_25,
  lesson_5_26,
  lesson_5_27,
  lesson_5_28,
  lesson_5_29,
  lesson_5_30,
};
