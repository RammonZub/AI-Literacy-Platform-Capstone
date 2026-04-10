/**
 * Module 4: Content Creation
 *
 * PURPOSE: Teach learners to create professional content with AI as a collaborative partner,
 * not a replacement
 *
 * MODULE STRUCTURE:
 * - Chapter 1: Content Creation Fundamentals (Lessons 4.1-4.10)
 *   - 4.1: AI as Your Writing Partner
 *   - 4.2: Reports and Proposals
 *   - 4.3: Social Media & Newsletters
 *   - 4.4: Ad Copy & Descriptions
 *   - 4.5: Human-AI Collaboration
 *   - 4.6: Consistent Brand Voice
 *   - 4.7: Planning with AI
 *   - 4.8: Image Prompt Writing
 *   - 4.9: Repurpose One Source Many Ways
 *   - 4.10: Reviewing AI Output
 *
 * ESTIMATED TIME: 120 minutes (10 lessons)
 * XP REWARD: 1000 XP (10 lessons × 100 XP)
 *
 * TARGET AUDIENCE: 30-55+ year old professionals who want to create compelling
 * business content. Time-poor (max 10-15 min/day), non-technical, business-focused.
 *
 * PREREQUISITES: Basic AI familiarity (Modules 1-3 recommended)
 *
 * KEY THEMES:
 * - AI as writing partner, not replacement
 * - Human-AI collaboration workflows
 * - Brand voice consistency
 * - Content repurposing strategies
 * - Quality control and review
 *
 * @module data/content/modules
 */

import type { Module } from "@/types/content";
import { lesson_4_1 } from "./chapter1-fundamentals/lesson-4-1";
import { lesson_4_2 } from "./chapter1-fundamentals/lesson-4-2";
import { lesson_4_3 } from "./chapter1-fundamentals/lesson-4-3";
import { lesson_4_4 } from "./chapter1-fundamentals/lesson-4-4";
import { lesson_4_5 } from "./chapter1-fundamentals/lesson-4-5";
import { lesson_4_6 } from "./chapter1-fundamentals/lesson-4-6";
import { lesson_4_7 } from "./chapter1-fundamentals/lesson-4-7";
import { lesson_4_8 } from "./chapter1-fundamentals/lesson-4-8";
import { lesson_4_9 } from "./chapter1-fundamentals/lesson-4-9";
import { lesson_4_10 } from "./chapter1-fundamentals/lesson-4-10";

/**
 * Module 4: Content Creation
 *
 * Comprehensive module covering all aspects of content creation with AI,
 * from foundational writing skills to advanced repurposing strategies.
 */
export const skills_creation: Module = {
  id: "04-skills-creation",
  title: "Content Creation Mastery",
  description: "Create compelling content in minutes, not hours. Your voice, amplified.",
  category: "Skills",
  // Custom cover image for Content Creation Mastery
  imageUrl: "/images/courses/modules/content-creation.webp",
  color: {
    from: "#10B981", // Emerald 500
    to: "#059669", // Emerald 600
  },
  order: 4,
  chapters: [
    {
      id: "ch1-fundamentals",
      moduleId: "04-skills-creation",
      title: "Content Creation Fundamentals",
      description:
        "Master the art of creating professional content with AI assistance—from writing and editing to brand voice consistency and strategic repurposing.",
      order: 1,
      lessons: [
        lesson_4_1, // AI as Your Writing Partner
        lesson_4_2, // Reports and Proposals
        lesson_4_3, // Social Media & Newsletters
        lesson_4_4, // Ad Copy & Descriptions
        lesson_4_5, // Human-AI Collaboration
        lesson_4_6, // Consistent Brand Voice
        lesson_4_7, // Planning with AI
        lesson_4_8, // Image Prompt Writing
        lesson_4_9, // Repurpose One Source Many Ways
        lesson_4_10, // Reviewing AI Output
      ],
    },
  ],
  estimatedMinutes: 120, // Total estimated time for all lessons
};

/**
 * Re-export all lessons for convenient importing
 */
export {
  lesson_4_1,
  lesson_4_2,
  lesson_4_3,
  lesson_4_4,
  lesson_4_5,
  lesson_4_6,
  lesson_4_7,
  lesson_4_8,
  lesson_4_9,
  lesson_4_10,
};
