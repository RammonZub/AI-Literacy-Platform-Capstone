/**
 * Chapter 4: Business Applications
 *
 * Module 9 - Midjourney Mastery
 *
 * PURPOSE: Apply Midjourney skills to real-world business and professional scenarios
 *
 * CHAPTER OVERVIEW:
 * This chapter focuses on practical business applications where Midjourney
 * delivers immediate value: presentations, marketing, publishing, and e-commerce.
 *
 * LESSONS:
 * - 9.13: Presentation Graphics That Impress (15 min, 100 XP)
 * - 9.14: Marketing Materials & Social Media (15 min, 100 XP)
 * - 9.15: Book Covers & Product Mockups (15 min, 100 XP)
 * - 9.16: Print-on-Demand Business Basics (15 min, 100 XP)
 *
 * TOTAL DURATION: 60 minutes
 * TOTAL XP: 400 XP
 *
 * KEY SKILLS DEVELOPED:
 * - Professional presentation graphics creation
 * - Social media visual optimization
 * - Book cover design for publishing
 * - Product visualization and mockups
 * - Print-on-demand business workflows
 * - Design scaling and batch production
 */

export { lesson_9_13 } from "./lesson-9-13";
export { lesson_9_14 } from "./lesson-9-14";
export { lesson_9_15 } from "./lesson-9-15";
export { lesson_9_16 } from "./lesson-9-16";

import type { Chapter } from "@/types/content";
import { lesson_9_13 } from "./lesson-9-13";
import { lesson_9_14 } from "./lesson-9-14";
import { lesson_9_15 } from "./lesson-9-15";
import { lesson_9_16 } from "./lesson-9-16";

export const chapter4Business: Chapter = {
  id: "ch9-4-business",
  moduleId: "08-tools-midjourney",
  title: "Business Applications",
  description: "Apply Midjourney to professional scenarios: presentations, marketing, and products",
  order: 4,
  lessons: [lesson_9_13, lesson_9_14, lesson_9_15, lesson_9_16],
};
