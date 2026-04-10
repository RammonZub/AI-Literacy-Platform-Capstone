/**
 * Claude learn landing config.
 */

import type { CourseLandingConfig } from "@/types/course-landing";

export const claudeLandingConfig: CourseLandingConfig = {
  moduleId: "06-tools-claude",
  slug: "claude",
  seo: {
    tagline: "Harness Claude's analytical depth and writing excellence for professional results.",
    keywords: [
      "Claude AI course",
      "Claude AI tutorial",
      "learn Claude AI",
      "Claude training",
      "Claude vs ChatGPT",
      "Anthropic Claude guide",
    ],
    ogImage: "/images/og/courses/claude.png",
  },
  skills: {
    outcomes: [
      "Use Claude for clearer writing and deeper thinking",
      "Create longer pieces of work with more ease",
      "Work through bigger documents without losing context",
      "Know when Claude is the better tool to use",
    ],
    tags: [
      "long-form writing",
      "deep analysis",
      "large-context work",
      "document review",
      "research synthesis",
      "thinking partner",
      "workflow design",
      "tool comparison",
    ],
  },
  relatedCourses: ["ai-fundamentals", "prompt-engineering", "chatgpt", "ai-content-creation"],
  level: "Intermediate",
};
