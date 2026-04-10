/**
 * Prompt Engineering learn landing config.
 */

import type { CourseLandingConfig } from "@/types/course-landing";

export const promptEngineeringLandingConfig: CourseLandingConfig = {
  moduleId: "03-skills-prompting",
  slug: "prompt-engineering",
  seo: {
    tagline:
      "Learn the simple prompting habits that make AI clearer, more useful, and easier to reuse.",
    keywords: [
      "prompt engineering course",
      "AI prompting tutorial",
      "prompt writing",
      "learn prompt engineering",
      "prompt design",
      "AI communication skills",
    ],
    ogImage: "/images/og/courses/prompt-engineering.png",
  },
  skills: {
    outcomes: [
      "Learn a simple structure for getting better AI answers",
      "Write clearer prompts for any AI tool without sounding technical",
      "Guide AI with better context, examples, and structure",
      "Build a prompt library you can reuse at work",
    ],
    tags: [
      "prompt recipe",
      "clear roles",
      "context framing",
      "output structure",
      "prompt improvement",
      "prompt libraries",
      "real work prompts",
      "reusable patterns",
    ],
  },
  hero: {
    subtitle:
      "A beginner-safe course for improving prompts, fixing weak outputs, and building reusable prompt habits for real work.",
  },
  programOverview: {
    heading: "Prompt Engineering, taught in plain English",
    body:
      "This course turns prompting into a practical skill instead of a technical specialty. You will learn a simple prompt recipe, improve weak outputs, apply prompt patterns to real work, and finish with your own prompt library.",
  },
  relatedCourses: ["ai-fundamentals", "ai-productivity", "chatgpt", "claude"],
  level: "Beginner",
};
