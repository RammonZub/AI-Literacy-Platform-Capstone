/**
 * Module 10: 28-Day AI Challenge
 *
 * A 28-day challenge that builds AI habits across life domains:
 * - Foundations (Days 1-7) - AI understanding + tool mastery + CTF Framework
 * - Productivity & Research (Days 8-14) - Research workflows + weekly review
 * - Career Growth (Days 15-18) - Resumes, interviews, professional branding
 * - Business Building (Days 19-21) - Idea validation, automation, marketing
 * - Personal Life (Days 22-25) - Learning, health, finances, creativity
 * - Integration & Mastery (Days 26-28) - Systems + 90-day roadmap
 *
 * CRITICAL FIX (Hybrid Structure):
 * - CTF Framework moved to Day 4 (was Day 9) - students learn prompting early
 * - Weekly reviews added (Days 7, 14, 21) for spaced repetition
 * - Automation chapter added (Days 19-21) for workflow skills
 *
 * This module serves as the SOURCE OF TRUTH for course structure.
 */

import type { Module } from "@/types/content";

import { chapter1Foundations } from "./chapter1-foundations";
import { chapter2ProductivityResearch } from "./chapter2-productivity-research";
import { chapter3Career } from "./chapter3-career";
import { chapter4Business } from "./chapter4-business";
import { chapter5Personal } from "./chapter5-personal";
import { chapter6Mastery } from "./chapter6-mastery";

export const challenge_28DayAI: Module = {
  id: "10-challenge-28-day-ai",
  title: "28-Day AI Challenge",
  description:
    "Build AI habits that transform your career, business, and personal life in 28 days. One focused lesson per day.",
  category: "Challenge",
  courseType: "challenge",
  durationDays: 28,
  imageUrl: "/images/courses/modules/28-day-challenge.webp",
  color: {
    from: "#4F46E5",
    to: "#7C3AED",
  },
  order: 10,
  chapters: [
    chapter1Foundations,
    chapter2ProductivityResearch,
    chapter3Career,
    chapter4Business,
    chapter5Personal,
    chapter6Mastery,
  ],
  estimatedMinutes: 336, // 28 days x 12 min avg
};

export default challenge_28DayAI;

// Re-export chapters for convenience
export {
  chapter1Foundations,
  chapter2ProductivityResearch,
  chapter3Career,
  chapter4Business,
  chapter5Personal,
  chapter6Mastery,
};
