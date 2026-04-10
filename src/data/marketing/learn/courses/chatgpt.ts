/**
 * ChatGPT learn landing config.
 */

import type { CourseLandingConfig } from "@/types/course-landing";

export const chatgptLandingConfig: CourseLandingConfig = {
  moduleId: "05-tools-chatgpt",
  slug: "chatgpt",
  seo: {
    tagline: "Complete toolkit for personal and professional productivity with the world's most popular AI.",
    keywords: [
      "ChatGPT course",
      "ChatGPT tutorial",
      "learn ChatGPT",
      "ChatGPT for beginners",
      "ChatGPT training",
      "ChatGPT mastery",
    ],
    ogImage: "/images/og/courses/chatgpt.png",
  },
  hero: {
    transformationLine:
      "Go from \"AI makes me slower\" to using ChatGPT with more confidence at work.",
  },
  skills: {
    outcomes: [
      "Use ChatGPT with more clarity and confidence",
      "Set up ChatGPT helpers for repeated tasks",
      "Use ChatGPT for real work situations",
      "Make ChatGPT part of your day-to-day workflow",
    ],
    tags: [
      "ChatGPT setup",
      "custom GPTs",
      "advanced prompting",
      "daily workflows",
      "writing support",
      "analysis tasks",
      "AI collaboration",
      "business use cases",
    ],
  },
  relatedCourses: ["ai-fundamentals", "prompt-engineering", "claude", "gemini"],
  level: "Beginner",
};
