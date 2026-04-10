/**
 * Midjourney learn landing config.
 */

import type { CourseLandingConfig } from "@/types/course-landing";

export const midjourneyLandingConfig: CourseLandingConfig = {
  moduleId: "09-tools-midjourney",
  slug: "midjourney",
  seo: {
    tagline: "Transform ideas into stunning visuals. Master AI image generation from concept to final output.",
    keywords: [
      "Midjourney course",
      "AI image generation course",
      "learn Midjourney",
      "Midjourney tutorial",
      "AI art prompts",
      "Midjourney for business",
    ],
    ogImage: "/images/og/courses/midjourney.png",
  },
  skills: {
    outcomes: [
      "Create strong images from simple prompts",
      "Get more control over style and look",
      "Create consistent visuals for your brand or projects",
      "Refine AI-generated images into better final results",
    ],
    tags: [
      "visual prompting",
      "style control",
      "iteration workflows",
      "brand imagery",
      "creative direction",
      "image refinement",
      "commercial visuals",
      "prompt composition",
    ],
  },
  relatedCourses: ["ai-fundamentals", "ai-content-creation", "chatgpt", "prompt-engineering"],
  level: "Intermediate",
};
