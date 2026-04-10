/**
 * Module 1: AI Fundamentals
 *
 * PURPOSE: Public front-door AI course for non-technical beginners. It builds
 * confidence from zero to a first real workflow using plain-English guidance.
 *
 * MODULE STRUCTURE:
 * - Chapter 1: What AI Is And Why It Matters Now (Lessons 1.1-1.3)
 *   - Calm the noise, explain AI clearly, and orient the learner
 * - Chapter 2: What AI Helps With In Real Work (Lessons 1.4-1.7)
 *   - Includes a short image-creation bridge (1.5b); Module 8 covers visual craft in depth
 * - Chapter 3: The Main Tools And When To Use Them (Lessons 1.8-1.10)
 *   - Help beginners choose tools and use them responsibly
 * - Chapter 4: Real Workflows And Your Path Forward (Lessons 1.11-1.12)
 *   - Move from first real workflow into a sustainable next-step plan
 *
 * ESTIMATED TIME: 65 minutes (12 lessons)
 * XP REWARD: 1200 XP (12 lessons × 100 XP)
 *
 * TARGET AUDIENCE: Complete beginners new to AI, no technical background required
 * PREREQUISITES: None (entry point for entire course)
 *
 * OUTCOMES:
 * - User understands AI in plain English
 * - User sees where AI helps in everyday work
 * - User has a simple view of the major tools
 * - User has completed a first real AI workflow
 *
 * @module data/content/modules
 */

import type { Module } from "@/types/content";
import { chapter1Foundation } from "./chapter1-foundation";
import { chapter2CoreCapabilities } from "./chapter2-core-capabilities";
import { chapter3Toolkit } from "./chapter3-the-toolkit";
import { chapter4GettingStarted } from "./chapter4-getting-started";

export const skills_foundations: Module = {
  id: "01-skills-foundations",
  title: "AI Fundamentals",
  description: "Understand AI clearly, use it more confidently, and build your first real workflow.",
  category: "Skills",
  // Custom cover image for AI Fundamentals course
  imageUrl: "/images/courses/modules/ai-foundations.webp",
  color: {
    from: "#B86B6E", // Deeper rose red from theme
    to: "#1E4A6D", // Darker gem blue from theme
  },
  order: 1,
  chapters: [chapter1Foundation, chapter2CoreCapabilities, chapter3Toolkit, chapter4GettingStarted],
  estimatedMinutes: 65, // 15 + 12 + 13 + 14 + 11, will update as more lessons are added
};
