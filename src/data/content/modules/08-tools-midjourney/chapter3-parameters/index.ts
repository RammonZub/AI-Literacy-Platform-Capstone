/**
 * Chapter 3: Controlling Your Results
 *
 * Module 9 - Midjourney Mastery
 *
 * PURPOSE: Master parameters that give you precise control over Midjourney output
 *
 * CHAPTER OVERVIEW:
 * This chapter covers the essential parameters that transform you from a casual
 * Midjourney user into someone who can reliably create exactly what they envision.
 *
 * LESSONS:
 * - 9.9: Aspect Ratios: The Shape of Your Image (15 min, 100 XP)
 * - 9.10: Quality & Stylization Settings (15 min, 100 XP)
 * - 9.11: Chaos, Seeds & Negative Prompting (15 min, 100 XP)
 * - 9.12: Niji Mode & Alternative Models (15 min, 100 XP)
 *
 * TOTAL DURATION: 60 minutes
 * TOTAL XP: 400 XP
 *
 * KEY SKILLS DEVELOPED:
 * - Aspect ratio control for any platform
 * - Quality and stylization fine-tuning
 * - Variation control with chaos parameter
 * - Reproducibility with seeds
 * - Exclusion control with negative prompting
 * - Model selection for different styles
 */

export { lesson_9_9 } from "./lesson-9-9";
export { lesson_9_10 } from "./lesson-9-10";
export { lesson_9_11 } from "./lesson-9-11";
export { lesson_9_12 } from "./lesson-9-12";

import type { Chapter } from "@/types/content";
import { lesson_9_9 } from "./lesson-9-9";
import { lesson_9_10 } from "./lesson-9-10";
import { lesson_9_11 } from "./lesson-9-11";
import { lesson_9_12 } from "./lesson-9-12";

export const chapter3Parameters: Chapter = {
  id: "ch9-3-parameters",
  moduleId: "08-tools-midjourney",
  title: "Controlling Your Results",
  description: "Master the parameters that give you precise control over every image",
  order: 3,
  lessons: [lesson_9_9, lesson_9_10, lesson_9_11, lesson_9_12],
};
