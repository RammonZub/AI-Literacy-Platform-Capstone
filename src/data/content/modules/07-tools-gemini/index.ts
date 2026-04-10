/**
 * Module 7: Gemini Mastery
 *
 * PURPOSE: Complete toolkit for personal and professional productivity with Google's Gemini AI
 *
 * MODULE STRUCTURE:
 * - Chapter 1: Getting Started - Your AI Partner (Lessons 7.1-7.5)
 * - Chapter 2: The 5-Step Prompting Framework (Lessons 7.6-7.7)
 * - Chapter 3: Gemini + Google Workspace (Lessons 7.8-7.12)
 * - Chapter 4: Mobile-First Mastery (Lessons 7.13-7.17)
 * - Chapter 5: Real-Time Intelligence (Lessons 7.18-7.20)
 * - Chapter 6: Advanced Professional Applications (Lessons 7.21-7.24)
 * - Chapter 7: Privacy, Security, and Responsible AI (Lessons 7.25-7.26)
 * - Chapter 8: Building Your AI-Powered Future (Lesson 7.27)
 *
 * ESTIMATED TIME: 405 minutes (27 lessons x 15 minutes)
 *
 * XP REWARD: 2700 XP (27 lessons x 100 XP)
 *
 * TARGET AUDIENCE: 40-55+ non-technical professionals
 * PREREQUISITES: None (beginner-friendly)
 *
 * UNIQUE FEATURES:
 * - Real-time information via Google Search integration
 * - Google Workspace integration (Gmail, Docs, Sheets, Slides)
 * - Mobile-first design with Gemini Live
 * - Multimodal capabilities (text, voice, images)
 */

import type { Module } from "@/types/content";
import { chapter1Essentials } from "./chapter1-essentials";
import { chapter2Prompting } from "./chapter2-prompting";
import { chapter3Workspace } from "./chapter3-workspace";
import { chapter4Mobile } from "./chapter4-mobile";
import { chapter5Realtime } from "./chapter5-realtime";
import { chapter6Professional } from "./chapter6-professional";
import { chapter7Privacy } from "./chapter7-privacy";
import { chapter8Future } from "./chapter8-future";

export const tools_gemini: Module = {
  id: "07-tools-gemini",
  title: "Gemini Mastery",
  description:
    "Master Google's AI assistant for real-time intelligence, Google Workspace integration, and mobile-first productivity",
  category: "AI Tools",
  color: {
    from: "#4285F4", // Google Blue
    to: "#34A853", // Google Green
  },
  // Custom cover image for Gemini Mastery
  imageUrl: "/images/courses/modules/gemini.webp",
  order: 7,
  estimatedMinutes: 405,
  chapters: [
    chapter1Essentials.chapters[0],
    chapter2Prompting.chapters[0],
    chapter3Workspace.chapters[0],
    chapter4Mobile.chapters[0],
    chapter5Realtime.chapters[0],
    chapter6Professional.chapters[0],
    chapter7Privacy.chapters[0],
    chapter8Future.chapters[0],
  ],
};

// Export chapter modules for easier imports
export { chapter1Essentials };
export { chapter2Prompting };
export { chapter3Workspace };
export { chapter4Mobile };
export { chapter5Realtime };
export { chapter6Professional };
export { chapter7Privacy };
export { chapter8Future };

// Export individual lessons for direct access
// Chapter 1: Getting Started - Your AI Partner
export { lesson_7_1 } from "./chapter1-essentials/lesson-7-1";
export { lesson_7_2 } from "./chapter1-essentials/lesson-7-2";
export { lesson_7_3 } from "./chapter1-essentials/lesson-7-3";
export { lesson_7_4 } from "./chapter1-essentials/lesson-7-4";
export { lesson_7_5 } from "./chapter1-essentials/lesson-7-5";
// Chapter 2: 5-Step Prompting Framework
export { lesson_7_6 } from "./chapter2-prompting/lesson-7-6";
export { lesson_7_7 } from "./chapter2-prompting/lesson-7-7";
// Chapter 3: Gemini + Google Workspace
export { lesson_7_8 } from "./chapter3-workspace/lesson-7-8";
export { lesson_7_9 } from "./chapter3-workspace/lesson-7-9";
export { lesson_7_10 } from "./chapter3-workspace/lesson-7-10";
export { lesson_7_11 } from "./chapter3-workspace/lesson-7-11";
export { lesson_7_12 } from "./chapter3-workspace/lesson-7-12";
// Chapter 4: Mobile-First Mastery
export { lesson_7_13 } from "./chapter4-mobile/lesson-7-13";
export { lesson_7_14 } from "./chapter4-mobile/lesson-7-14";
export { lesson_7_15 } from "./chapter4-mobile/lesson-7-15";
export { lesson_7_16 } from "./chapter4-mobile/lesson-7-16";
export { lesson_7_17 } from "./chapter4-mobile/lesson-7-17";
// Chapter 5: Real-Time Intelligence
export { lesson_7_18 } from "./chapter5-realtime/lesson-7-18";
export { lesson_7_19 } from "./chapter5-realtime/lesson-7-19";
export { lesson_7_20 } from "./chapter5-realtime/lesson-7-20";
// Chapter 6: Advanced Professional Applications
export { lesson_7_21 } from "./chapter6-professional/lesson-7-21";
export { lesson_7_22 } from "./chapter6-professional/lesson-7-22";
export { lesson_7_23 } from "./chapter6-professional/lesson-7-23";
export { lesson_7_24 } from "./chapter6-professional/lesson-7-24";
// Chapter 7: Privacy, Security, and Responsible AI
export { lesson_7_25 } from "./chapter7-privacy/lesson-7-25";
export { lesson_7_26 } from "./chapter7-privacy/lesson-7-26";
// Chapter 8: Building Your AI-Powered Future
export { lesson_7_27 } from "./chapter8-future/lesson-7-27";
