/**
 * AI Content Creation learn landing config.
 */

import type { CourseLandingConfig } from "@/types/course-landing";

export const aiContentCreationLandingConfig: CourseLandingConfig = {
  moduleId: "04-skills-creation",
  slug: "ai-content-creation",
  seo: {
    tagline: "Create high-quality content at scale without sacrificing quality or brand voice.",
    keywords: [
      "AI content creation",
      "AI writing course",
      "AI for content creators",
      "AI content generation",
      "blog writing with AI",
      "AI copywriting",
    ],
    ogImage: "/images/og/courses/ai-content-creation.png",
  },
  skills: {
    outcomes: [
      "Create stronger written content faster",
      "Use AI to brainstorm and shape ideas",
      "Keep your voice while getting AI help",
      "Edit AI drafts into polished final content",
    ],
    tags: [
      "content ideation",
      "brand voice",
      "editing workflows",
      "channel adaptation",
      "content planning",
      "faster drafting",
      "creative direction",
      "publishing systems",
    ],
  },
  relatedCourses: ["ai-productivity", "prompt-engineering", "chatgpt", "midjourney"],
  level: "Intermediate",
};
