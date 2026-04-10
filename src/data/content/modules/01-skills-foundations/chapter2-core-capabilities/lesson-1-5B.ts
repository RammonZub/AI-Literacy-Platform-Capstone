/**
 * Lesson 1.5B: Creating Images With AI (foundations bridge)
 *
 * Short foundations lesson on text-to-image basics; deep craft lives in Module 8 (Midjourney).
 *
 * @module data/content/modules/01-skills-foundations
 */

import type { Lesson } from "@/types/content";

export const lesson_1_5_b: Lesson = {
  id: "foundations-5b",
  chapterId: "ch2-core-capabilities",
  moduleId: "01-skills-foundations",
  lessonCategory: "tutorial",
  title: "Creating Images With AI",
  description:
    "Learn a simple prompt pattern for professional-looking visuals, before you specialise in Module 8.",
  order: 6,
  estimatedMinutes: 15,
  format: "article",
  xpReward: 70,
  coverImage: "/images/courses/lessons/modules/brain-memory-and-thinking-neural-network.webp",
  coverTitle: "Image creation basics",
  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/01-skills-foundations/foundations-5b-cover.webp",
        imageAlt: "AI-generated professional visuals concept",
        title: "Creating Images With AI",
        subtitle:
          "You do not need design training to get useful slides, thumbnails, and concept art—just clear language.",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        paragraphs: [
          "Text chat tools and image tools share the same habit: **describe the outcome, not the tool.**",
          "",
          "For images, that usually means subject, setting, style, and any hard constraints (aspect ratio, no text in frame, brand-safe colours).",
        ],
      },
    },
    {
      id: "section-2",
      type: "textWithImage",
      content: {
        title: "A five-part formula",
        paragraphs: [
          "**Subject** (what is in the scene)",
          "**Setting** (where, time of day, context)",
          "**Style** (photorealistic, illustration, flat corporate, etc.)",
          "**Details** (lighting, camera, mood)",
          "**Quality guardrails** (e.g. “no watermark”, “high resolution”)",
        ],
        imageUrl: "/images/courses/modules/01-skills-foundations/foundations-5b-inline-1.webp",
        imageAlt: "Structured prompt formula for image generation",
      },
    },
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Where this course goes next",
        paragraphs: [
          "Module 8 (**Midjourney Mastery**) covers Discord workflows, parameters, consistency, and professional use cases in depth.",
          "",
          "For now, use any built-in image feature in the tools you already have (e.g. ChatGPT or Gemini with image output) to practice the formula.",
        ],
      },
    },
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        quiz: {
          question: "Which part of the prompt should you define first so the model knows *what* to draw?",
          options: [
            "Subject — the main person, object, or scene",
            "Only the filename you will use later",
            "The hex colour of your brand (nothing else)",
          ],
          correctAnswer: 0,
          explanation:
            "Start with the subject and setting; style and constraints refine the result. Details come after the scene is clear.",
        },
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "gemini",
        action: "Generate a simple visual",
        task: "Use one sentence per formula part (subject, setting, style, details, guardrails)",
        feature: "Image generation where available in your workspace account",
        tip: "If output misses the brief, tighten one dimension at a time instead of rewriting everything.",
      },
    },
    {
      id: "main-challenge",
      type: "actionableTask",
      content: {
        title: "Draft one image prompt",
        purpose: "Turn the formula into a single block of text you could paste into an image tool.",
        instructions: [
          "Pick a real work need (LinkedIn banner, slide illustration, or product mockup).",
          "Write 4–6 short lines: subject, setting, style, details, guardrails.",
          "Run it once; note what you would change on the second pass.",
        ],
        deliverable: "Your final prompt + one line on what to change next time",
        estimatedTime: "5 minutes",
        starterPrompt:
          "Subject: …\nSetting: …\nStyle: …\nDetails: …\nGuardrails: …",
        successCriteria: [
          "Prompt mentions subject and style explicitly",
          "Includes at least one constraint (e.g. aspect ratio or “no text”)",
        ],
      },
    },
  ],
};
