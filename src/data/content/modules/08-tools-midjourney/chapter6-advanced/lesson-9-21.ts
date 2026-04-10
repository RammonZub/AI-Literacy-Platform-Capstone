/**
 * Lesson 9.21: Character References (--cref) & Style Tuner
 *
 * CHAPTER: 6 - Advanced Techniques for Consistency
 * LESSON: 3 of 4 - Character References & Style Tuner
 *
 * DURATION: 15 minutes (advanced technical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach character consistency across images and custom style tuning
 * for maximum creative control.
 *
 * KEY RESPONSIBILITIES:
 * - Explain --cref parameter for character consistency
 * - Show character weight control
 * - Introduce Style Tuner for custom aesthetics
 */

import type { Lesson } from "@/types/content";

export const lesson_9_21: Lesson = {
  id: "lesson-9-21",
  chapterId: "ch9-6-advanced",
  moduleId: "08-tools-midjourney",
  title: "Character References (--cref) & Style Tuner",
  description:
    "Maintain perfect character consistency across multiple images and create your own signature visual styles",
  order: 21,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-21-cover.webp",
        imageAlt: "Portrait showing character consistency",
        title: "Character References (--cref) & Style Tuner",
        subtitle:
          "Maintain perfect character consistency across multiple images and create your own signature visual styles",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "What --cref Does",
        paragraphs: [
          "The --cref parameter locks in a character's appearance from a reference image. Face, features, hair, clothing—it carries over to new images with the same character in different situations.",
          "This is essential for storytelling, comics, character design, and any project requiring consistent characters.",
        ],
      },
    },
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "Character Reference Syntax",
        insights: [
          "--cref [URL] — Apply character from reference image",
          "--cref [URL] --cw 100 — Full character (face + outfit + features)",
          "--cref [URL] --cw 0 — Face only (allows outfit changes)",
          "Best results with clear, well-lit character portraits",
        ],
      },
    },
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Character Weight (--cw) Explained",
        paragraphs: [
          "The --cw parameter controls how much of the character is preserved when applying your reference. At the default setting of --cw 100, the full character transfers over: face, hair, outfit, build, and all features remain consistent with your reference image. This is ideal when you need complete character fidelity across different scenes.",
          "Moderate values between 50 and 75 preserve most features while allowing some flexibility in outfit and pose, useful when your character needs to adapt to different contexts. Lower values from 25 to 50 maintain a strong face match while granting more freedom in clothing and environmental context. At --cw 0, only facial features are preserved, letting you place the same face into entirely different outfits and roles, perfect for scenarios where you want the same actor performing different characters.",
        ],
      },
    },
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "When to Use Different Character Weights",
        insights: [
          "--cw 100: Character sheets, consistent mascot, same outfit required",
          "--cw 50: Same character in varied contexts, some outfit flexibility",
          "--cw 0: Same actor in different roles, face consistency only",
          "Experiment to find what works for your specific character",
        ],
      },
    },
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Character Reference Use Cases",
        paragraphs: [
          "Create consistent characters for any project using --cref to solve the age-old problem of character inconsistency across generated images. Storytelling projects benefit enormously from maintaining the same protagonist across different scenes, allowing readers to follow a consistent visual character through your narrative journey. Comics and manga require consistent characters panel after panel, page after page, which becomes achievable when your character reference ensures visual continuity.",
          "Brand mascots gain power when the same character appears in various situations while remaining instantly recognizable. Personal avatars can be placed in different contexts, from professional headshots to fantasy adventures, while maintaining your core visual identity. Character design workflows improve when you can explore variations while maintaining core identity, iterating on poses and expressions without losing the essential characteristics that define your creation.",
        ],
      },
    },
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Creating Character Sheets",
        paragraphs: [
          "Build a comprehensive reference library for your characters that serves as the foundation for all future generations. Start by generating a base portrait that captures your ideal character image with clear, well-lit features that Midjourney can easily reference. Save the URL of this portrait carefully, as it becomes your primary --cref reference for all subsequent generations featuring this character.",
          "Test consistency by generating variations to verify that the look holds up across different prompts and contexts. Document expressions by creating reference images for different moods, building an emotional library you can draw upon when directing your character through various narrative beats. Create action poses to build a pose library using --cref, ensuring your character remains recognizable whether standing still, running, fighting, or relaxing.",
        ],
      },
    },
    {
      id: "section-7",
      type: "quickPrompt",
      content: {
        heading: "Practice: Character Consistency",
        description:
          "Place the same character in a new scene (replace URL with your character reference).",
        promptText:
          "[New scene description: e.g., exploring an ancient temple] --cref [Your character reference URL] --cw 50 --ar 16:9 --v 6.1",
      },
    },
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Style Tuner: Custom Visual Styles",
        paragraphs: [
          "Style Tuner lets you create your own visual style codes. Instead of referencing external images, you generate a personalized aesthetic that you can apply to any prompt.",
          "Think of it as programming your own visual signature into Midjourney.",
        ],
      },
    },
    {
      id: "section-9",
      type: "highlightCard",
      content: {
        heading: "Style Tuner Workflow",
        insights: [
          "Step 1: Use /tune command with your style concept",
          "Step 2: Midjourney generates style variations",
          "Step 3: Select your preferred variations",
          "Step 4: Receive a unique style code to use with --style",
          "Apply with: [prompt] --style [your-code]",
        ],
      },
    },
    {
      id: "section-10",
      type: "text",
      content: {
        title: "Building Brand Consistency",
        paragraphs: [
          "Combine --cref and Style Tuner for complete consistency that covers both character identity and visual aesthetic. Your style code defines the overall visual aesthetic, controlling color palettes, lighting approaches, texture treatments, and artistic techniques across all your content. Character reference maintains character identity, ensuring faces, features, and distinguishing characteristics remain consistent regardless of context or scene.",
          "The combined workflow using --cref with your character URL alongside --style with your custom code produces perfect consistency across every dimension. Document everything by saving your codes and URLs in a comprehensive style guide that anyone on your team can reference. Team sharing becomes straightforward when you distribute these codes and URLs to collaborators, ensuring everyone generates content with a unified visual language regardless of who creates each piece.",
        ],
      },
    },
    {
      id: "section-11",
      type: "quickPrompt",
      content: {
        heading: "Practice: Combined References",
        description: "Use both character and style together for maximum consistency.",
        promptText:
          "[Scene description] --cref [Character URL] --cw 75 --sref [Style URL] --sw 300 --ar 3:4 --v 6.1",
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "midjourney",
        action: "Use Midjourney in Discord",
        task: "Maintain character consistency across scenes",
        feature: "--cref (character reference) with --cw (character weight)",
        tip: "Use --cw 0 when you want the same face in different outfits or roles, --cw 100 for complete character consistency",
      },
    },
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Maintain Character Consistency",
        purpose: "Learn to keep a character consistent across different scenes using --cref.",
        instructions: [
          "Generate a character portrait you like (simple, clear features)",
          "Save or copy the URL of that character image",
          "Create a new scene with the same character using --cref",
          "Experiment with --cw (0, 50, 100) to control how much is preserved",
        ],
        deliverable: "Two images showing the same character in different scenes",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "/imagine prompt: exploring an ancient temple, mysterious atmosphere, dramatic lighting --cref [YOUR_CHARACTER_URL] --cw 50 --ar 16:9 --v 6",
        successCriteria: [
          "You created a base character image first",
          "You used --cref to place that character in a new scene",
          "The character's face/appearance is consistent between images",
          "You understand how --cw affects what gets preserved",
        ],
      },
    },
    {
      id: "section-12",
      type: "completion",
      content: {
        title: "Character & Style Control Mastered",
        description:
          "You now understand how to maintain character consistency with --cref and create custom styles with Style Tuner. These advanced tools give you professional-level control over your AI-generated content.",
        xpReward: 100,
        buttonText: "Complete Character Reference Skills",
      },
    },
  ],
};
