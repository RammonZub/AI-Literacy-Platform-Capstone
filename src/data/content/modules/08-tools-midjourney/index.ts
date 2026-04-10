/**
 * Module 8: Midjourney Mastery
 *
 * PURPOSE: Complete toolkit for creating professional visuals without design skills
 *
 * MODULE STRUCTURE:
 * - Chapter 1: Getting Started (Lessons 9.1-9.5)
 * - Chapter 2: Prompt Engineering Fundamentals (Lessons 9.6-9.8)
 * - Chapter 3: Controlling Your Results—Parameters (Lessons 9.9-9.12)
 * - Chapter 4: Business Applications (Lessons 9.13-9.16)
 * - Chapter 5: Personal Creative Projects (Lessons 9.17-9.18)
 * - Chapter 6: Advanced Techniques for Consistency (Lessons 9.19-9.22)
 * - Chapter 7: Refinement and Professional Workflows (Lessons 9.23-9.24)
 * - Chapter 8: Commercial Usage, Rights, and Next Steps (Lessons 9.25-9.27)
 *
 * ESTIMATED TIME: 405 minutes (27 lessons × 15 min average)
 *
 * XP REWARD: 2700 XP (27 lessons × 100 XP)
 *
 * TARGET AUDIENCE: 40-55+ non-technical professionals who want to create visuals
 * PREREQUISITES: None (beginner-friendly)
 *
 * UNIQUE FEATURES:
 * - Image generation (not text-based like other modules)
 * - Discord-based interface
 * - Parameters for precise control (--ar, --q, --s, --c, etc.)
 * - Style and character references (--sref, --cref)
 * - Business and personal creative applications
 */

import type { Module } from "@/types/content";
import { chapter1Essentials } from "./chapter1-essentials";
import { chapter2Prompts } from "./chapter2-prompts";
import { chapter3Parameters } from "./chapter3-parameters";
import { chapter4Business } from "./chapter4-business";
import { chapter5Personal } from "./chapter5-personal";
import { chapter6Advanced } from "./chapter6-advanced";
import { chapter7Workflows } from "./chapter7-workflows";
import { chapter8Commercial } from "./chapter8-commercial";

export const tools_midjourney: Module = {
  id: "08-tools-midjourney",
  title: "Midjourney Mastery",
  description:
    "Create stunning professional visuals without design skills—from first prompt to advanced techniques",
  category: "AI Tools",
  color: {
    from: "#5865F2", // Discord/Midjourney Purple
    to: "#EB459E", // Magenta/Pink
  },
  // Custom cover image for Midjourney Mastery
  imageUrl: "/images/courses/modules/midjourney.webp",
  order: 8,
  estimatedMinutes: 405,
  chapters: [
    chapter1Essentials.chapters[0], // Wrapped in chapters array
    chapter2Prompts.chapters[0], // Wrapped in chapters array
    chapter3Parameters, // Direct Chapter export
    chapter4Business, // Direct Chapter export
    chapter5Personal.chapters[0], // Wrapped in chapters array
    chapter6Advanced.chapters[0], // Wrapped in chapters array
    chapter7Workflows.chapters[0], // Wrapped in chapters array
    chapter8Commercial.chapters[0], // Wrapped in chapters array
  ],
};

// Export chapter modules for easier imports
export { chapter1Essentials };
export { chapter2Prompts };
export { chapter3Parameters };
export { chapter4Business };
export { chapter5Personal };
export { chapter6Advanced };
export { chapter7Workflows };
export { chapter8Commercial };

// Export individual lessons for direct access
// Chapter 1: Getting Started
export { lesson_9_1 } from "./chapter1-essentials/lesson-9-1";
export { lesson_9_2 } from "./chapter1-essentials/lesson-9-2";
export { lesson_9_3 } from "./chapter1-essentials/lesson-9-3";
export { lesson_9_4 } from "./chapter1-essentials/lesson-9-4";
export { lesson_9_5 } from "./chapter1-essentials/lesson-9-5";
// Chapter 2: Prompt Engineering Fundamentals
export { lesson_9_6 } from "./chapter2-prompts/lesson-9-6";
export { lesson_9_7 } from "./chapter2-prompts/lesson-9-7";
export { lesson_9_8 } from "./chapter2-prompts/lesson-9-8";
// Chapter 3: Controlling Your Results—Parameters
export { lesson_9_9 } from "./chapter3-parameters/lesson-9-9";
export { lesson_9_10 } from "./chapter3-parameters/lesson-9-10";
export { lesson_9_11 } from "./chapter3-parameters/lesson-9-11";
export { lesson_9_12 } from "./chapter3-parameters/lesson-9-12";
// Chapter 4: Business Applications
export { lesson_9_13 } from "./chapter4-business/lesson-9-13";
export { lesson_9_14 } from "./chapter4-business/lesson-9-14";
export { lesson_9_15 } from "./chapter4-business/lesson-9-15";
export { lesson_9_16 } from "./chapter4-business/lesson-9-16";
// Chapter 5: Personal Creative Projects
export { lesson_9_17 } from "./chapter5-personal/lesson-9-17";
export { lesson_9_18 } from "./chapter5-personal/lesson-9-18";
// Chapter 6: Advanced Techniques for Consistency
export { lesson_9_19 } from "./chapter6-advanced/lesson-9-19";
export { lesson_9_20 } from "./chapter6-advanced/lesson-9-20";
export { lesson_9_21 } from "./chapter6-advanced/lesson-9-21";
export { lesson_9_22 } from "./chapter6-advanced/lesson-9-22";
// Chapter 7: Refinement and Professional Workflows
export { lesson_9_23 } from "./chapter7-workflows/lesson-9-23";
export { lesson_9_24 } from "./chapter7-workflows/lesson-9-24";
// Chapter 8: Commercial Usage, Rights, and Next Steps
export { lesson_9_25 } from "./chapter8-commercial/lesson-9-25";
export { lesson_9_26 } from "./chapter8-commercial/lesson-9-26";
export { lesson_9_27 } from "./chapter8-commercial/lesson-9-27";
