/**
 * Module 2: AI Productivity
 *
 * PURPOSE: Help people save time on real work with practical AI workflows for writing,
 * research, meetings, documents, and simple automation.
 *
 * MODULE STRUCTURE:
 * - Chapter 1: Better Results With AI (Lessons 2.1-2.3) - prompts, context, and refinement
 * - Chapter 2: Research, Notes, And Communication (Lessons 2.4-2.6) - source work and follow-through
 * - Chapter 3: Tools, Automation, And Your System (Lessons 2.7-2.9) - repeatable workflows and planning
 *
 * ESTIMATED TIME: 140 minutes (9 lessons)
 * XP REWARD: 900 XP (9 lessons × 100 XP)
 *
 * TARGET AUDIENCE: Professionals who want practical AI help in their daily work
 * PREREQUISITES: Basic AI familiarity (Module 1 recommended)
 *
 * KEY OUTCOMES:
 * - Write better prompts, use context well, and refine outputs faster
 * - Handle research, notes, meetings, and documents with less busywork
 * - Build a simple AI workflow that fits real work and can grow over time
 *
 * @module data/content/modules
 */

import type { Module } from "@/types/content";
import { lesson_2_1 } from "./chapter1-prompting/lesson-2-1";
import { lesson_2_2 } from "./chapter1-prompting/lesson-2-2";
import { lesson_2_3 } from "./chapter1-prompting/lesson-2-3";
import { lesson_2_4 } from "./chapter2-workflows/lesson-2-4";
import { lesson_2_5 } from "./chapter2-workflows/lesson-2-5";
import { lesson_2_6 } from "./chapter2-workflows/lesson-2-6";
import { lesson_2_7 } from "./chapter3-integration/lesson-2-7";
import { lesson_2_8 } from "./chapter3-integration/lesson-2-8";
import { lesson_2_9 } from "./chapter3-integration/lesson-2-9";

export const skills_productivity: Module = {
  id: "02-skills-productivity",
  title: "AI Productivity",
  description:
    "Save time on real work with practical AI workflows for writing, research, meetings, documents, and simple automation.",
  category: "Skills",
  // Custom cover image for AI Productivity
  imageUrl: "/images/courses/modules/productivity.webp",
  color: { from: "#60A5FA", to: "#3B82F6" },
  order: 2,
  estimatedMinutes: 140,
  chapters: [
    {
      id: "ch2-1-prompting",
      moduleId: "02-skills-productivity",
      title: "Better Results With AI",
      description: "Learn how prompts, context, and refinement improve the quality of every AI answer.",
      order: 1,
      lessons: [lesson_2_1, lesson_2_2, lesson_2_3],
    },
    {
      id: "ch2-2-workflows",
      moduleId: "02-skills-productivity",
      title: "Research, Notes, And Communication",
      description:
        "Use AI for research, document work, meeting prep, and clearer follow-through.",
      order: 2,
      lessons: [lesson_2_4, lesson_2_5, lesson_2_6],
    },
    {
      id: "ch2-3-integration",
      moduleId: "02-skills-productivity",
      title: "Tools, Automation, And Your System",
      description:
        "Connect tools, reduce repeat work, and finish with a simple weekly workflow.",
      order: 3,
      lessons: [lesson_2_7, lesson_2_8, lesson_2_9],
    },
  ],
};
