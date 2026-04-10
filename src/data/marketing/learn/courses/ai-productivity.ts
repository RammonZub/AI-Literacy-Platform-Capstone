/**
 * AI Productivity learn landing config.
 */

import type { CourseLandingConfig } from "@/types/course-landing";

export const aiProductivityLandingConfig: CourseLandingConfig = {
  moduleId: "02-skills-productivity",
  slug: "ai-productivity",
  seo: {
    tagline:
      "Save time on real work with practical AI workflows for writing, research, meetings, documents, and simple automation.",
    keywords: [
      "AI productivity training",
      "AI for productivity",
      "AI automation",
      "work smarter with AI",
      "AI workflow optimization",
      "AI efficiency tools",
    ],
    ogImage: "/images/og/courses/ai-productivity.png",
  },
  skills: {
    outcomes: [
      "Get better AI results with prompts, context, and refinement",
      "Handle research, notes, meetings, and documents with less busywork",
      "Create repeatable workflows for work you do every week",
      "Build a simple AI productivity system that actually sticks",
    ],
    tags: [
      "better prompts",
      "context management",
      "email drafting",
      "meeting summaries",
      "research workflows",
      "document workflows",
      "repeatable systems",
      "simple automation",
      "time savings",
      "weekly routines",
    ],
  },
  hero: {
    subtitle:
      "A practical course for using AI across writing, research, meetings, documents, and repeatable workflows without turning your day into tool chaos.",
  },
  programOverview: {
    heading: "AI Productivity, organized around real work",
    body:
      "Move from better prompts into research, document work, communication, and simple automation. The course stays focused on work you already do, then helps you turn those wins into a repeatable system.",
  },
  relatedCourses: ["ai-fundamentals", "prompt-engineering", "ai-content-creation", "claude"],
  level: "Beginner",
};
