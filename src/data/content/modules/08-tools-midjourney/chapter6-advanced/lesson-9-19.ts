/**
 * Lesson 9.19: Multi-Prompts & Image References
 *
 * CHAPTER: 6 - Advanced Techniques for Consistency
 * LESSON: 1 of 4 - Multi-Prompts & Image References
 *
 * DURATION: 15 minutes (advanced technical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach advanced prompting with multi-weights and image references
 * for precise control over AI-generated images.
 *
 * KEY RESPONSIBILITIES:
 * - Explain multi-prompt syntax and weights
 * - Show image reference workflow
 * - Provide practical prompt templates
 */

import type { Lesson } from "@/types/content";

export const lesson_9_19: Lesson = {
  id: "lesson-9-19",
  chapterId: "ch9-6-advanced",
  moduleId: "08-tools-midjourney",
  title: "Multi-Prompts & Image References",
  description:
    "Master advanced prompting with multi-weights and image references for precise creative control",
  order: 19,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-19-cover.webp",
        imageAlt: "Abstract creative composition showing layered elements",
        title: "Multi-Prompts & Image References",
        subtitle:
          "Master advanced prompting with multi-weights and image references for precise creative control",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Multi-Prompt Separator (::)",
        paragraphs: [
          "The double colon (::) splits your prompt into distinct parts, each processed independently. This prevents concepts from bleeding together and gives you granular control.",
          "Without ::, Midjourney blends everything. With ::, you're the conductor of a precisely orchestrated image.",
        ],
      },
    },
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "Multi-Prompt Syntax",
        insights: [
          "cat :: dog — Two equal concepts in one image",
          "surreal landscape :: cityscape — Blended concepts with equal weight",
          "Each segment is processed separately, then combined",
          "Useful when concepts might otherwise conflict or merge",
        ],
      },
    },
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Weight Control (::2, ::0.5)",
        paragraphs: [
          "Numbers after the double colon control relative importance between prompt segments. When you write cat::2 dog, the cat concept has twice the influence of the dog concept, making felines the dominant subject while canines play a supporting role. Similarly, landscape::3 figure::1 creates images where the landscape dominates and the figure remains subtle within the scene.",
          "You can also reduce influence with fractional weights. Writing style::0.5 content::2 makes the style subtle while the content becomes strong and prominent. Perhaps most powerfully, negative weights let you subtract concepts entirely: concept::-0.5 actively removes that element from your generation. If no number is specified after the double colon, the default weight of 1 applies automatically.",
        ],
      },
    },
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "Weight Parameter Guide",
        insights: [
          "::0.25 — Very subtle influence",
          "::1 — Normal/default weight",
          "::2 — Strong influence (twice normal)",
          "::3-5 — Dominant element",
          "::-0.5 to ::-1 — Negative weight (subtracts concept)",
        ],
      },
    },
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Image References: Using Images as Input",
        paragraphs: [
          "Image references let you start from an existing image rather than text alone. Upload any image to Discord, copy its URL, and use it at the start of your prompt.",
          "This enables photo-to-illustration transformations, style transfers, and using reference compositions.",
        ],
        imageUrl: "/images/courses/modules/08-tools-midjourney/lesson-9-19-inline-1.webp",
        imageAlt: "Photo being transformed into artistic illustration",
      },
    },
    {
      id: "section-6",
      type: "textWithBullets",
      content: {
        title: "Image Reference Workflow",
        paragraphs: ["How to use images as starting points:"],
        bullets: [
          "**Step 1**: Upload image to Discord (drag and drop or click upload)",
          "**Step 2**: Right-click the image and 'Copy Link'",
          "**Step 3**: Paste URL at the START of your prompt",
          "**Step 4**: Add text prompt describing what you want",
          "**Format**: [image URL] [your text prompt] --parameters",
        ],
      },
    },
    {
      id: "section-7",
      type: "highlightCard",
      content: {
        heading: "Image Weight (--iw)",
        insights: [
          "--iw 0.5 — Subtle image influence, text dominates",
          "--iw 1 — Balanced (default)",
          "--iw 2 — Strong image influence, text is secondary",
          "--iw 3 — Very strong image reference (max value)",
          "Lower IW = more creative freedom from text prompt",
        ],
      },
    },
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Practical Image Reference Uses",
        paragraphs: [
          "Transform and build upon existing images in powerful ways that extend your creative capabilities. Photo to illustration workflows let you upload a photograph and prompt for an illustrated style, turning snapshots into artistic renderings while preserving the original composition. Style transfer takes this further by uploading existing artwork and applying its aesthetic qualities to entirely different subjects.",
          "Composition reference allows you to use an image's layout as a template for new subjects, maintaining the visual structure while completely changing the content. Color reference extracts and applies color palettes from reference images, helping you match specific moods or brand colors without manually specifying each hue. Multiple references enable sophisticated blending by using two or three images together, letting you combine influences from different sources into cohesive new creations.",
        ],
      },
    },
    {
      id: "section-9",
      type: "quickPrompt",
      content: {
        heading: "Practice: Weighted Multi-Prompt",
        description: "Create an image with precise control over competing elements.",
        promptText:
          "[Primary subject]::2 [Secondary subject]::1 [Style/mood]::1.5 [Background]::0.5 --ar 16:9 --v 6.1",
      },
    },
    {
      id: "section-10",
      type: "quickPrompt",
      content: {
        heading: "Practice: Image Reference Prompt",
        description: "Transform a photo into an illustration (replace with your image URL).",
        promptText:
          "[Your image URL] artistic illustration style, hand-drawn aesthetic, warm colors, detailed linework --iw 1.5 --ar 3:4 --v 6.1",
      },
    },
    {
      id: "section-11",
      type: "text",
      content: {
        title: "Combining Text and Image Prompts",
        paragraphs: [
          "The real power comes from combining image references with weighted text concepts. Use an image for composition, text for style, and weights to balance.",
          "Example: [photo URL] cinematic lighting::2 film noir style::1.5 dramatic shadows --iw 1.5",
          "This is how professional creators achieve consistent, controlled results.",
        ],
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "midjourney",
        action: "Use Midjourney in Discord",
        task: "Create an image with weighted multi-prompts",
        feature: "Multi-prompt separator (::) with weights",
        tip: "Use the :: separator to control exactly how much influence each concept has on your final image",
      },
    },
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Use Multi-Prompt Weights",
        purpose: "Practice precise control over your images using the :: separator and weights.",
        instructions: [
          "Choose two concepts that might compete (like 'city' and 'nature')",
          "Write a multi-prompt with weights to control the balance",
          "Try a primary concept::2 and secondary concept::1",
          "Generate and observe how weights affect the final image",
        ],
        deliverable: "An image demonstrating weighted multi-prompt control",
        estimatedTime: "10 minutes",
        starterPrompt:
          "/imagine prompt: futuristic city::2 overgrown with nature::1, organic architecture, vines on skyscrapers, solar-punk aesthetic, harmonious balance --ar 16:9 --v 6",
        successCriteria: [
          "Your prompt uses at least two :: separated concepts",
          "You applied weights (::2, ::1, etc.) to control importance",
          "The primary weighted concept is clearly dominant in the result",
          "You understand how weights change the image balance",
        ],
      },
    },
    {
      id: "section-12",
      type: "completion",
      content: {
        title: "Multi-Prompt & Image Reference Mastery",
        description:
          "You now understand how to use multi-prompts for precise control and image references for transformations. These techniques unlock a new level of creative precision.",
        xpReward: 100,
        buttonText: "Complete Multi-Prompt Skills",
      },
    },
  ],
};
