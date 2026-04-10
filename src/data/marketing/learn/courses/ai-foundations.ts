/**
 * AI Fundamentals learn landing config.
 */

import type { CourseLandingConfig } from "@/types/course-landing";

export const aiFoundationsLandingConfig: CourseLandingConfig = {
  moduleId: "01-skills-foundations",
  slug: "ai-fundamentals",
  seo: {
    tagline: "Understand AI clearly, use it with more confidence, and build your first real workflow.",
    keywords: [
      "AI courses for beginners",
      "AI literacy",
      "learn AI basics",
      "AI fundamentals",
      "AI for professionals",
      "intro to AI",
      "AI training",
    ],
    ogImage: "/images/og/courses/ai-foundations.png",
  },
  skills: {
    outcomes: [
      "Understand AI in plain English without the hype",
      "See where AI actually helps in real work",
      "Choose the right tools without feeling overwhelmed",
      "Build a confident starting point for using AI well",
    ],
    tags: [
      "AI fundamentals",
      "tool selection",
      "beginner prompting",
      "workflow judgment",
      "everyday use cases",
      "responsible AI",
      "trust and verification",
      "confidence building",
    ],
  },
  hero: {
    subtitle:
      "A calm beginner course for understanding what AI is, what it helps with, and how to start using it without technical overwhelm.",
  },
  programOverview: {
    heading: "A beginner-friendly path into AI Fundamentals",
    body:
      "This course gives you a clear first path into AI. You will understand the basics, see where AI helps in real work, learn the main tools, and finish with a simple workflow plus a next-step plan.",
  },
  relatedCourses: ["ai-productivity", "prompt-engineering", "chatgpt", "28-day-ai-challenge"],
  level: "Beginner",
};
