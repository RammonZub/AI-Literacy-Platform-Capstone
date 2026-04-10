/**
 * Gemini learn landing config.
 */

import type { CourseLandingConfig } from "@/types/course-landing";

export const geminiLandingConfig: CourseLandingConfig = {
  moduleId: "07-tools-gemini",
  slug: "gemini",
  seo: {
    tagline: "Master Google's multimodal AI for research, analysis, and creative work.",
    keywords: [
      "Gemini AI course",
      "Google Gemini tutorial",
      "learn Gemini",
      "Gemini AI training",
      "Google Bard to Gemini",
      "Gemini vs GPT",
    ],
    ogImage: "/images/og/courses/gemini.png",
  },
  skills: {
    outcomes: [
      "Use Gemini across text, images, and everyday tasks",
      "Use Gemini for research and analysis",
      "Bring Gemini into your Google Workspace flow",
      "Know where Gemini fits best compared with other tools",
    ],
    tags: [
      "multimodal work",
      "Google Workspace AI",
      "research support",
      "image understanding",
      "workflow acceleration",
      "cross-tool judgment",
      "AI collaboration",
      "practical experimentation",
    ],
  },
  relatedCourses: ["ai-fundamentals", "chatgpt", "claude", "midjourney"],
  level: "Intermediate",
};
