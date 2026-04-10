/**
 * Lesson 9.24: Building Efficient Workflows
 *
 * CHAPTER: 7 - Refinement and Professional Workflows
 * LESSON: 2 of 2 - Professional Organization
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Establish professional workflows for efficient Midjourney use
 *
 * KEY RESPONSIBILITIES:
 * - Teach prompt template creation
 * - Guide organization strategies
 * - Provide time-saving techniques
 * - Establish asset management practices
 */

import type { Lesson } from "@/types/content";

export const lesson_9_24: Lesson = {
  id: "lesson-9-24",
  chapterId: "ch9-7-workflows",
  moduleId: "08-tools-midjourney",
  title: "Building Efficient Workflows",
  description:
    "Create systems that turn occasional image generation into a streamlined creative process",
  order: 24,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-24-cover.webp",
        imageAlt: "Organized workspace representing efficient workflows",
        title: "Building Efficient Workflows",
        subtitle: "Turn occasional image generation into a streamlined creative process",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Creating Reusable Prompt Templates",
        paragraphs: [
          "Stop writing prompts from scratch. Build templates for the types of images you create repeatedly.",
          "A prompt template is a structured framework with placeholders. Instead of crafting each prompt fresh, you fill in the blanks of a proven structure.",
          "Templates save time, ensure consistency, and help you remember all the parameters that make your best images work.",
        ],
      },
    },
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "Template Structure Example",
        insights: [
          "[SUBJECT] in [SETTING], [STYLE DETAILS], [LIGHTING], [MOOD] --ar [ASPECT] --s [STYLIZE] --v 6",
          "Example filled: 'Mountain cabin in snowy forest at dusk, photorealistic landscape photography, golden hour light, peaceful and serene --ar 16:9 --s 75 --v 6'",
          "Keep a document with 5-10 templates for your most common use cases",
        ],
      },
    },
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Organizing Your Image Library",
        paragraphs: [
          "As you create more images, organization becomes critical for maintaining productivity and finding your best work when you need it. A chaotic library wastes time searching and risks losing good work in the noise. Organizing by project creates folders for each client or project you're working on, keeping related materials together for easy access during active work.",
          "Grouping by aesthetic organizes images by style categories like photorealistic, illustration, or abstract, helping you find visually similar content quickly. Organizing by purpose separates folders for social media, print, presentations, and experiments, matching how you actually use your images. Monthly folders work well for general exploration and experiments that don't fit specific projects. Finally, maintaining a favorites folder collects your top creations across all categories for quick access to your best work.",
        ],
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Documenting Successful Prompts",
        paragraphs: [
          "Every great image is a learning opportunity. When something works, capture it.",
          "Create a 'Prompt Journal'—a simple document where you paste successful prompts alongside their results. Note what made them work. Was it the lighting description? The aspect ratio? A specific style reference?",
          "Over time, this becomes your personal recipe book. You'll spot patterns in what makes your best images succeed.",
        ],
      },
    },
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Naming Conventions That Work",
        paragraphs: [
          "Good file names make your library searchable and organized, transforming chaos into a system you can navigate efficiently. Adopt a consistent format like PROJECT_SUBJECT_STYLE_DATE_VERSION to capture essential information at a glance. For example, a file named BrandX_LogoMinimalist_Geometric_20240115_v3.png immediately tells you the client, subject matter, style approach, creation date, and iteration number.",
          "Include the prompt number from Discord in your naming convention for easy reference back to the original generation. Add 'FINAL' to approved images to distinguish them from drafts and variations that didn't make the cut. Keep a master spreadsheet linking file names to original prompts, creating a searchable database that connects your saved images to the prompts that created them.",
        ],
      },
    },
    {
      id: "section-6",
      type: "highlightCard",
      content: {
        heading: "Cloud Storage & Backup Strategy",
        insights: [
          "Local files can be lost. Professional creators backup everything.",
          "Use cloud storage (Google Drive, Dropbox, iCloud) for automatic sync",
          "Organize in the cloud the same way you organize locally",
          "Keep your prompt journal in the cloud too—not just images",
          "Consider a monthly archive of your best work to an external drive",
        ],
      },
    },
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Batch Generation Techniques",
        paragraphs: [
          "When you need multiple related images, batch generation saves enormous time.",
          "**Technique 1**: Use the same prompt with small variations. Generate your base prompt, then add iterative changes (different colors, different times of day, different angles).",
          "**Technique 2**: Create a series by varying one element. Same subject, four seasons. Same composition, different styles. Same setting, different times of day.",
          "**Technique 3**: Grid generation for options. Use `--grid 4` (or more in newer versions) to see multiple variations at once, then refine your favorites.",
        ],
      },
    },
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Version Control for Creations",
        paragraphs: [
          "Track your creative process like software developers track code, building a history that lets you backtrack and learn from your iterations. Never overwrite a good version without saving it separately first, because you might need to return to an earlier approach. Use clear version numbers like v1, v2, v3 in your filenames to maintain chronological order and distinguish iterations from each other.",
          "Keep your raw originals even after editing, because you never know when you'll need to return to the unmodified source for alternative edits or reference. Document what changed between versions in your prompt journal, creating a narrative of your creative decisions that helps you understand what worked and what didn't. For client work specifically, keep all presented options until project completion, because clients sometimes circle back to earlier versions they initially rejected.",
        ],
      },
    },
    {
      id: "section-9",
      type: "highlightCard",
      content: {
        heading: "Power User Time-Savers",
        insights: [
          "Use Discord threads for complex projects—keeps related generations together",
          "Set up keyboard shortcuts for common actions in your image editor",
          "Create a 'scratchpad' prompt for quick tests before committing to full generations",
          "Schedule generation sessions—batch create when inspiration strikes",
          "Use image references (sref, cref) to maintain consistency across sessions",
        ],
      },
    },
    {
      id: "section-10",
      type: "text",
      content: {
        title: "Building a Personal Asset Database",
        paragraphs: [
          "Your best creations are reusable building blocks. A personal asset database captures this value.",
          "Include your successful sref codes, character references (cref), texture images, and style guides. When a new project comes in, you're not starting from zero—you're remixing proven elements.",
          "This database grows more valuable over time. In six months, you'll have a toolkit that makes you significantly faster and more consistent than when you started.",
        ],
      },
    },
    {
      id: "section-11",
      type: "quickPrompt",
      content: {
        heading: "Build Your Template",
        description: "Create a reusable prompt template for your most common image type:",
        promptText:
          "My template: [SUBJECT] in [SETTING], [STYLE DETAILS], [LIGHTING], [MOOD] --ar [ASPECT] --s [STYLIZE] --v 6",
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "midjourney",
        action: "Use Midjourney in Discord",
        task: "Create and test a reusable prompt template",
        feature: "Prompt templates with placeholder variables",
        tip: "Keep 5-10 templates for your most common use cases",
      },
    },
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create Your Prompt Template Library",
        purpose: "Build your first reusable prompt template that you'll use repeatedly.",
        instructions: [
          "Identify the type of image you create most often",
          "Write a template with bracketed placeholders for each variable",
          "Test the template with 2-3 different subject fills",
          "Save the template in a document for future use",
        ],
        deliverable:
          "A documented prompt template with at least 4 placeholders, tested with multiple subjects",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "/imagine prompt: [SUBJECT] in [SETTING], [STYLE DETAILS], [LIGHTING], [MOOD] --ar [ASPECT] --s [STYLIZE] --v 6",
        successCriteria: [
          "Your template has clear bracketed placeholders",
          "You tested the template with at least 2 different subjects",
          "Both tests produced good results",
          "You saved the template in an accessible document",
        ],
      },
    },
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Chapter 7 Complete",
        description:
          "You've mastered refinement tools and professional workflows. You now have systems for upscaling, organization, and efficient creation that separate serious creators from casual users. One chapter remains—let's cover the business side of AI-generated visuals.",
        xpReward: 100,
        buttonText: "Continue to Commercial Usage",
      },
    },
  ],
};
