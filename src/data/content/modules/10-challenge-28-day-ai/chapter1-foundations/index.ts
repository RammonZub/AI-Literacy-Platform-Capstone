/**
 * Chapter 1: Foundations (Days 1-7)
 *
 * Build a solid AI foundation: understand what AI is, master ChatGPT basics,
 * learn the CTF Framework for prompting, apply it with Claude and email workflows,
 * and cement your knowledge with a weekly review.
 *
 * STRUCTURE (Updated 2026-02-25):
 * - Day 1: What AI Is & Why It Matters
 * - Day 2: ChatGPT Fundamentals
 * - Day 3: ChatGPT Advanced Features
 * - Day 4: CTF Framework for Effective Prompting (THE KEY LESSON)
 * - Day 5: Claude Fundamentals
 * - Day 6: Email Workflow (apply CTF in practice)
 * - Day 7: Week 1 Review + Mini-Challenge
 *
 * Day 4 Rule: CTF Framework taught by Day 4 ensures students learn prompting
 * fundamentals BEFORE advanced tool tutorials.
 */

import type { Chapter } from "@/types/content";

import { lessonDay1 } from "./lesson-day-1";
import { lessonDay2 } from "./lesson-day-2";
import { lessonDay3 } from "./lesson-day-3";
import { lessonDay4CTF } from "./lesson-day-4-ctf";
import { lessonDay5 } from "./lesson-day-5";
import { lessonDay6 } from "./lesson-day-6";
import { lessonDay7 } from "./lesson-day-7";

// Note: Old lesson-day-4.ts (Claude Advanced Features) archived
// Claude content is covered in Day 5 (Claude Fundamentals)

export const chapter1Foundations: Chapter = {
  id: "chapter1-foundations",
  moduleId: "10-challenge-28-day-ai",
  title: "Foundations",
  description:
    "Build your AI foundation: understand what AI is, master ChatGPT basics, learn the CTF Framework for effective prompting, and apply your skills with Claude and practical email workflows.",
  order: 1,
  lessons: [
    lessonDay1, // What AI Is & Why It Matters Now
    lessonDay2, // ChatGPT Fundamentals
    lessonDay3, // ChatGPT Advanced Features
    lessonDay4CTF, // The CTF Framework for Effective Prompting
    lessonDay5, // Claude Fundamentals
    lessonDay6, // Email Workflow Mastery
    lessonDay7, // Week 1 Review + Mini-Challenge
  ],
};

export {
  lessonDay1,
  lessonDay2,
  lessonDay3,
  lessonDay4CTF as lessonDay4,
  lessonDay5,
  lessonDay6,
  lessonDay7,
};
