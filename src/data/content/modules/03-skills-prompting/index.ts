/**
 * Module 3: Prompt Engineering
 *
 * PURPOSE: Teach the prompting habits that make AI responses clearer, more useful,
 * and easier to reuse for non-technical professionals.
 *
 * MODULE STRUCTURE:
 * - Chapter 1: Prompting Fundamentals (Lessons 3.1-3.10)
 *   - 3.1: Why Context Matters
 *   - 3.2: A Simple Prompt Recipe
 *   - 3.3: Organize Background Info
 *   - 3.4: Give AI A Clear Role
 *   - 3.5: Ask AI To Think Step By Step
 *   - 3.6: Show AI An Example
 *   - 3.7: Ask For The Format You Need
 *   - 3.8: Improve Prompts In Rounds
 *   - 3.9: Fix A Prompt That Missed The Mark
 *   - 3.10: Build Your Prompt Library
 *
 * ESTIMATED TIME: 120 minutes (10 lessons)
 * XP REWARD: 1000 XP (10 lessons × 100 XP)
 *
 * TARGET AUDIENCE: Beginners and non-technical professionals who want better AI results
 * PREREQUISITES: None (beginner-friendly, Modules 1-2 recommended)
 *
 * KEY CONCEPTS:
 * - Clear communication habits
 * - Simple prompt structure
 * - Context and background organization
 * - Role, task, and format control
 * - Step-by-step prompting
 * - Example-based prompting
 * - Iterative refinement
 * - Troubleshooting weak outputs
 * - Reusable prompt templates
 *
 * @module data/content/modules
 */

import type { Module } from "@/types/content";
import { lesson_3_1 } from "./chapter1-fundamentals/lesson-3-1";
import { lesson_3_2 } from "./chapter1-fundamentals/lesson-3-2";
import { lesson_3_3 } from "./chapter1-fundamentals/lesson-3-3";
import { lesson_3_4 } from "./chapter1-fundamentals/lesson-3-4";
import { lesson_3_5 } from "./chapter1-fundamentals/lesson-3-5";
import { lesson_3_6 } from "./chapter1-fundamentals/lesson-3-6";
import { lesson_3_7 } from "./chapter1-fundamentals/lesson-3-7";
import { lesson_3_8 } from "./chapter1-fundamentals/lesson-3-8";
import { lesson_3_9 } from "./chapter1-fundamentals/lesson-3-9";
import { lesson_3_10 } from "./chapter1-fundamentals/lesson-3-10";

export const skills_prompting: Module = {
  id: "03-skills-prompting",
  title: "Prompt Engineering",
  description: "Learn the simple prompting habits that make AI clearer, more useful, and easier to reuse.",
  category: "Skills",
  // Custom cover image for Prompt Engineering
  imageUrl: "/images/courses/modules/prompt-engineering.webp",
  color: {
    from: "#9333EA", // Purple
    to: "#4F46E5", // Indigo
  },
  order: 3,
  estimatedMinutes: 120, // ~2 hours for all 10 lessons
  chapters: [
    {
      id: "ch1-fundamentals",
      moduleId: "03-skills-prompting",
      title: "Prompting Fundamentals",
      description: "Learn the core prompt habits that help beginners get better results without the jargon.",
      order: 1,
      lessons: [
        lesson_3_1,
        lesson_3_2,
        lesson_3_3,
        lesson_3_4,
        lesson_3_5,
        lesson_3_6,
        lesson_3_7,
        lesson_3_8,
        lesson_3_9,
        lesson_3_10,
      ],
    },
  ],
};
