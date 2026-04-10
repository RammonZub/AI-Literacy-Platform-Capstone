/**
 * Lesson 9.22: Inpainting, Remix & Advanced Refinement
 *
 * CHAPTER: 6 - Advanced Techniques for Consistency
 * LESSON: 4 of 4 - Inpainting, Remix & Advanced Refinement
 *
 * DURATION: 15 minutes (advanced technical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach advanced editing and refinement techniques
 * for iterative image improvement.
 *
 * KEY RESPONSIBILITIES:
 * - Explain Vary Region (inpainting)
 * - Show Remix mode workflow
 * - Provide advanced refinement strategies
 */

import type { Lesson } from "@/types/content";

export const lesson_9_22: Lesson = {
  id: "lesson-9-22",
  chapterId: "ch9-6-advanced",
  moduleId: "08-tools-midjourney",
  title: "Inpainting, Remix & Advanced Refinement",
  description:
    "Master advanced editing techniques to fix, refine, and iterate on your AI-generated images with surgical precision",
  order: 22,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-22-cover.webp",
        imageAlt: "Image editing and refinement process",
        title: "Inpainting, Remix & Advanced Refinement",
        subtitle:
          "Master advanced editing techniques to fix, refine, and iterate on your AI-generated images with surgical precision",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Vary Region: Surgical Image Editing",
        paragraphs: [
          "Vary Region (inpainting) lets you select specific areas of an image to regenerate while keeping the rest unchanged. Fix a hand, change a background element, add details—without affecting what's already working.",
          "This is how you fix those almost-perfect images that have one small issue.",
        ],
      },
    },
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "Vary Region Workflow",
        insights: [
          "Step 1: Click Vary Region on your image",
          "Step 2: Use rectangle or lasso to select the area to change",
          "Step 3: Enter a prompt describing what you want in that area",
          "Step 4: Submit and review the regenerated section",
          "The rest of your image remains untouched",
        ],
      },
    },
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Vary Region Use Cases",
        paragraphs: [
          "Fix and enhance specific areas with surgical precision that would otherwise require starting over or external editing. Anatomy corrections become straightforward when you can selectively fix hands, faces, or proportions that didn't generate correctly without affecting the rest of your image. Changing elements lets you swap objects, update clothing choices, or modify background details to better suit your vision.",
          "Adding details works by inserting new elements into empty spaces that feel too sparse or unfinished. Removing unwanted items becomes a matter of selecting and regenerating those areas, letting the AI fill in with contextually appropriate content. Enhancing focus allows you to add detail to key areas while preserving the surrounding context, drawing viewer attention exactly where you want it.",
        ],
      },
    },
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "Vary Region Best Practices",
        insights: [
          "Select slightly more than needed for seamless blending",
          "Be specific in your region prompt—describe exactly what you want",
          "Use the original prompt as a starting point, modify for the region",
          "Multiple small edits often work better than one large change",
        ],
      },
    },
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Remix Mode: Edit While Varying",
        paragraphs: [
          "Remix mode lets you modify your prompt when creating variations. Instead of getting random variations of the same concept, you can guide the variation in a specific direction.",
          "This bridges the gap between generating new images and editing existing ones.",
        ],
        imageUrl: "/images/courses/modules/08-tools-midjourney/lesson-9-22-inline-1.webp",
        imageAlt: "Remix mode showing prompt editing",
      },
    },
    {
      id: "section-6",
      type: "textWithBullets",
      content: {
        title: "Remix Mode Workflow",
        paragraphs: ["Enable and use Remix mode:"],
        bullets: [
          "**Enable**: Type /remix or click Remix in settings",
          "**Activate**: When creating variations, Remix prompts appear",
          "**Edit prompt**: Modify the prompt before variation generates",
          "**Control direction**: Guide variations toward your vision",
          "**Disable**: Turn off when you want random variations again",
        ],
      },
    },
    {
      id: "section-7",
      type: "highlightCard",
      content: {
        heading: "When to Remix vs. Start Fresh",
        insights: [
          "REMIX when: Image is 80% there, need specific adjustments",
          "REMIX when: Want to test style/subject variations on good composition",
          "START FRESH when: Fundamental concept isn't working",
          "START FRESH when: Prompt needs complete rethinking",
          "Remix saves time on iterative refinement",
        ],
      },
    },
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Vary Strong vs. Vary Subtle",
        paragraphs: [
          "Control how much variation you get by choosing between Strong and Subtle modes. Vary Strong produces significant changes with more creative freedom, potentially transforming your image in unexpected but interesting directions. Vary Subtle makes minor adjustments that stay closer to the original, perfect for refinement rather than exploration.",
          "Choose Strong when you want to explore different directions, perhaps when your original concept feels stale or you're seeking creative inspiration. Choose Subtle when refining an almost-perfect image that just needs small tweaks rather than dramatic changes. The real power comes from combining these modes with Remix, allowing you to guide strong variations in specific directions rather than accepting random creative departures.",
        ],
      },
    },
    {
      id: "section-9",
      type: "highlightCard",
      content: {
        heading: "Advanced Workflow Combinations",
        insights: [
          "Vary Subtle + Remix: Fine-tune details with prompt guidance",
          "Vary Strong + Remix: Explore variations in specific direction",
          "Vary Region + Remix: Change area while adjusting overall style",
          "Multiple Vary Region passes: Build up complex changes incrementally",
          "Combine with --cref/--sref for consistent refinement",
        ],
      },
    },
    {
      id: "section-10",
      type: "textWithBullets",
      content: {
        title: "Iterative Refinement Strategy",
        paragraphs: ["A professional approach to perfecting images:"],
        bullets: [
          "**Step 1**: Generate base image with strong prompt",
          "**Step 2**: Use Vary Subtle to refine composition",
          "**Step 3**: Apply Vary Region to fix specific issues",
          "**Step 4**: Use Remix to explore style adjustments",
          "**Step 5**: Upscale and final polish",
        ],
      },
    },
    {
      id: "section-11",
      type: "text",
      content: {
        title: "The Refinement Mindset",
        paragraphs: [
          "Think of Midjourney as a collaborative tool, not a one-shot generator. The best images come from iteration: generate, evaluate, refine, repeat.",
          "Each tool—Vary Region, Remix, Vary Strong/Subtle—is a brush in your refinement toolkit. Master them all for complete creative control.",
        ],
      },
    },
    {
      id: "section-12",
      type: "quickPrompt",
      content: {
        heading: "Practice: Iterative Refinement",
        description:
          "Think about an image you've generated that was 'almost perfect.' Plan your refinement strategy:",
        promptText:
          "My refinement plan: Image issue: [what needs fixing] | Tool: [Vary Region/Remix/Vary Subtle/Vary Strong] | Prompt modification: [how you'll adjust]",
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "midjourney",
        action: "Use Midjourney in Discord",
        task: "Refine an image using advanced editing tools",
        feature: "Vary Region (inpainting), Remix mode, Vary Strong/Subtle",
        tip: "Use Vary Region for surgical fixes, Remix to guide variations in a specific direction, and Vary Subtle for almost-perfect images",
      },
    },
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Plan an Image Refinement",
        purpose: "Practice the refinement mindset by planning how to improve an image.",
        instructions: [
          "Generate an image (any subject you like)",
          "Identify ONE specific thing that could be improved",
          "Decide which tool would best fix it: Vary Region, Vary Subtle, Vary Strong, or Remix",
          "Write down your refinement plan before executing it",
        ],
        deliverable: "A refinement plan for an image, with the tool and approach specified",
        estimatedTime: "10 minutes",
        starterPrompt:
          "/imagine prompt: a cozy coffee shop corner, rain outside window, warm interior lighting, books on shelves, comfortable armchair --ar 16:9 --v 6",
        successCriteria: [
          "You generated a base image to work with",
          "You identified a specific element to improve",
          "You chose the appropriate refinement tool (Vary Region/Remix/etc.)",
          "You documented your plan before taking action",
        ],
      },
    },
    {
      id: "section-13",
      type: "completion",
      content: {
        title: "Advanced Refinement Complete",
        description:
          "You've mastered the complete Midjourney refinement toolkit. From surgical inpainting with Vary Region to guided iteration with Remix mode, you now have professional-level control over every aspect of your AI-generated images.",
        xpReward: 100,
        buttonText: "Complete Advanced Refinement Skills",
      },
    },
  ],
};
