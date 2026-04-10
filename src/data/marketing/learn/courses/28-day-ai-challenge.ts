/**
 * 28-Day AI Challenge learn landing config.
 */

import type { CourseLandingConfig } from "@/types/course-landing";

export const challenge28DayAiLandingConfig: CourseLandingConfig = {
  moduleId: "10-challenge-28-day-ai",
  slug: "28-day-ai-challenge",
  seo: {
    tagline: "28 days, 10 hands-on projects, one transformative AI habit. Your fast track to AI fluency.",
    keywords: [
      "AI learning challenge",
      "28 day AI challenge",
      "AI habit building",
      "AI skills bootcamp",
      "learn AI in 30 days",
      "AI transformation program",
    ],
    ogImage: "/images/og/courses/28-day-ai-challenge.png",
  },
  skills: {
    outcomes: [
      "Build a daily AI habit that sticks",
      "Use AI across 10 real-life situations",
      "Finish hands-on projects you can actually use",
      "Build momentum and confidence day by day",
      "Earn a certificate that shows you followed through",
    ],
    tags: [
      "daily AI habit",
      "practical repetition",
      "confidence building",
      "workflow variety",
      "small wins",
      "consistent output",
      "cross-tool fluency",
      "applied momentum",
    ],
  },
  relatedCourses: ["ai-fundamentals", "ai-productivity", "prompt-engineering", "chatgpt"],
  level: "Beginner",
};
