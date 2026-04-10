/**
 * Lesson 9.20: Style References (--sref)
 *
 * CHAPTER: 6 - Advanced Techniques for Consistency
 * LESSON: 2 of 4 - Style References
 *
 * DURATION: 15 minutes (advanced technical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach style references for consistent aesthetic matching
 * across multiple generated images.
 *
 * KEY RESPONSIBILITIES:
 * - Explain sref parameter usage
 * - Show style matching workflow
 * - Provide brand consistency techniques
 */

import type { Lesson } from "@/types/content";

export const lesson_9_20: Lesson = {
  id: "lesson-9-20",
  chapterId: "ch9-6-advanced",
  moduleId: "08-tools-midjourney",
  title: "Style References (--sref)",
  description:
    "Master style references to create perfectly consistent aesthetics across all your AI-generated images",
  order: 20,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-20-cover.webp",
        imageAlt: "Abstract art showing consistent visual style",
        title: "Style References (--sref)",
        subtitle:
          "Master style references to create perfectly consistent aesthetics across all your AI-generated images",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "What --sref Does",
        paragraphs: [
          "The --sref parameter extracts aesthetic qualities from reference images: color palettes, lighting styles, texture treatments, artistic techniques, and overall mood. Your prompt determines content; --sref determines how it looks.",
          "Think of it as teaching Midjourney a visual language by showing examples.",
        ],
      },
    },
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "Style Reference Syntax",
        insights: [
          "--sref [URL] — Use single style reference",
          "--sref [URL1] [URL2] — Blend multiple styles",
          "--sref [URL] --sw 500 — Control style strength",
          "Works with any publicly accessible image URL",
        ],
      },
    },
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Style Weight (--sw) Control",
        paragraphs: [
          "The --sw parameter controls how strongly the style reference influences your final image, giving you precise control over the aesthetic balance. Setting --sw to 0 tells Midjourney to ignore the style reference completely, essentially disabling the feature while keeping it in your prompt. Values between 100 and 200 produce very subtle style hints, just barely suggesting the reference aesthetic without dominating the result.",
          "The moderate range of 300 to 500 often produces ideal results, applying noticeable style influence while allowing your prompt content to shine through. Strong style matching occurs between 600 and 800, where the reference aesthetic becomes a defining characteristic of your image. At the maximum value of 1000, the style reference exerts maximum influence, potentially transforming even simple subjects into heavily stylized renditions that closely match your reference's aesthetic qualities.",
        ],
      },
    },
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "Finding Your Style Weight Sweet Spot",
        insights: [
          "Start with --sw 400 for balanced results",
          "Increase if style isn't coming through enough",
          "Decrease if style is overwhelming your subject",
          "Different images need different weights—experiment!",
        ],
      },
    },
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Using Multiple Style References",
        paragraphs: [
          "Combine 2-3 style references to create unique aesthetic blends. Each URL contributes its qualities, and you can weight them differently for fine control.",
          "Example: --sref [URL1]::2 [URL2]::1 blends two styles with the first having twice the influence.",
        ],
        imageUrl: "/images/courses/modules/08-tools-midjourney/lesson-9-20-inline-1.webp",
        imageAlt: "Mixed media art showing blended styles",
      },
    },
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Building a Style Library",
        paragraphs: [
          "Create a personal collection of go-to style references that becomes increasingly valuable over time. Start by saving URLs in a dedicated document, building a catalog of your favorite style references that you can quickly access when starting new projects. Organize these references by mood, color scheme, or art style so you can find the right aesthetic quickly when inspiration strikes or deadlines loom.",
          "Test new references regularly to expand your library and discover aesthetic directions you might not have considered. Mix and match different references to create unique combinations that become your signature style. Document your results by noting which combinations work best together, creating a personal knowledge base that accelerates your creative process with each project you complete.",
        ],
      },
    },
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Brand Consistency with --sref",
        paragraphs: [
          "Maintain visual consistency across all content by leveraging style references as your brand's visual anchor. Use your brand's existing visuals as style references to ensure new AI-generated content matches your established aesthetic without requiring manual style matching. Apply the same --sref across all campaign images to create cohesive visual campaigns where every piece feels like part of a unified whole.",
          "Social media cohesion becomes achievable when you maintain a unified aesthetic across your feed, making your content instantly recognizable to followers scrolling through crowded timelines. Product lines benefit from matching visual styles that communicate relatedness across different items in your catalog. Create a set of reference images for team use, establishing style guides that ensure everyone generates content with consistent visual language regardless of who creates it.",
        ],
      },
    },
    {
      id: "section-8",
      type: "quickPrompt",
      content: {
        heading: "Practice: Style Reference Application",
        description:
          "Apply a style reference to create a matching image (replace URL with your reference).",
        promptText:
          "[Your content description: e.g., a serene mountain landscape at sunset] --sref [Your style reference URL] --sw 400 --ar 16:9 --v 6.1",
      },
    },
    {
      id: "section-9",
      type: "highlightCard",
      content: {
        heading: "--sref vs Other Reference Types",
        insights: [
          "--sref extracts STYLE only (colors, lighting, textures)",
          "--cref extracts CHARACTER (face, features, appearance)",
          "--iref (legacy) was replaced by --sref for style matching",
          "Use --sref when you want the LOOK without the content",
        ],
      },
    },
    {
      id: "section-10",
      type: "text",
      content: {
        title: "Troubleshooting Style References",
        paragraphs: [
          "When style isn't matching your expectations, systematic troubleshooting helps identify and resolve the issue. If the style appears too weak, increase your --sw value in increments of 200 until the aesthetic qualities become more prominent. Conversely, when style feels too dominant and overwhelms your subject, decrease the --sw value or strengthen your text prompt with more specific content descriptions.",
          "Sometimes the wrong aspects get extracted from your reference, in which case trying a different reference image with clearer aesthetic qualities often solves the problem. Conflicting styles can emerge when combining multiple references that pull in opposite directions, so simplify to one reference at a time until you understand how each affects your results. If your URL isn't working at all, verify that the image is publicly accessible and not behind authentication or password protection.",
        ],
      },
    },
    {
      id: "section-11",
      type: "quickPrompt",
      content: {
        heading: "Practice: Multi-Style Blend",
        description: "Blend two style references for a unique aesthetic.",
        promptText:
          "[Your subject] --sref [Style URL 1]::2 [Style URL 2]::1 --sw 500 --ar 3:4 --v 6.1",
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "midjourney",
        action: "Use Midjourney in Discord",
        task: "Apply a style reference to new content",
        feature: "--sref (style reference) with --sw (style weight)",
        tip: "Start with --sw 400 for balanced results, then adjust up or down depending on how strongly the style comes through",
      },
    },
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Apply a Style Reference",
        purpose: "Learn to extract and apply visual style from an existing image to new content.",
        instructions: [
          "Find an image with a distinctive style you like (upload to Discord or use a URL)",
          "Copy the image URL",
          "Create a new prompt with a different subject but same style using --sref",
          "Experiment with --sw values (try 300, 500, 700) to control style strength",
        ],
        deliverable: "An image demonstrating style transfer from a reference to new content",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "/imagine prompt: a serene mountain landscape at sunset --sref [YOUR_IMAGE_URL] --sw 400 --ar 16:9 --v 6",
        successCriteria: [
          "You successfully used --sref with an image URL",
          "The generated image reflects the style of your reference",
          "You tested different --sw values to find the right balance",
          "You understand how --sref differs from --cref",
        ],
      },
    },
    {
      id: "section-12",
      type: "completion",
      content: {
        title: "Style Reference Mastery Achieved",
        description:
          "You now understand how to use --sref for perfect style consistency. This is the key to creating cohesive visual projects and maintaining brand aesthetics across all your AI-generated content.",
        xpReward: 100,
        buttonText: "Complete Style Reference Skills",
      },
    },
  ],
};
