/**
 * Lesson 9.13: Presentation Graphics That Impress
 *
 * CHAPTER: 4 - Business Applications
 * LESSON: 13 of 16 - Presentation Graphics
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * LEARNING OBJECTIVES:
 * - Create professional slide backgrounds and hero images
 * - Design for text overlays with negative space
 * - Build cohesive presentation decks
 */

import type { Lesson } from "@/types/content";

export const lesson_9_13: Lesson = {
  id: "lesson-9-13",
  chapterId: "ch9-4-business",
  moduleId: "08-tools-midjourney",
  title: "Presentation Graphics That Impress",
  description: "Create stunning slide backgrounds and hero images for professional presentations",
  order: 13,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "exercise",
  sections: [
    // ===========================================================================
    // HERO IMAGE
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-13-cover.webp",
        imageAlt: "Professional business presentation setting",
        title: "Presentation Graphics That Impress",
        subtitle:
          "Create stunning slide backgrounds and hero images for professional presentations",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why Custom Graphics Matter",
        paragraphs: [
          "Stock photos are recognizable. Your audience has seen them before. Custom AI-generated graphics feel fresh, unique, and specifically created for your message.",
          "",
          "Plus, you can match your brand colors, style, and tone exactly, creating a cohesive visual identity throughout your deck.",
        ],
      },
    },
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "Presentation Aspect Ratio",
        insights: [
          "Modern presentations use 16:9 aspect ratio",
          "Add --ar 16:9 to presentation graphics",
          "Matches PowerPoint, Google Slides, Keynote",
        ],
      },
    },
    {
      id: "section-3",
      type: "textWithBullets",
      content: {
        title: "Types of Presentation Graphics",
        paragraphs: ["Different slides need different visual approaches:"],
        bullets: [
          "**Title/Hero slides**: Full-bleed images with text overlay, dramatic visuals",
          "",
          "**Section dividers**: Abstract graphics that signal topic changes",
          "",
          "**Background slides**: Subtle patterns or gradients that don't compete with content",
          "",
          "**Concept illustrations**: Visual metaphors for complex ideas",
          "",
          "**Data backgrounds**: Clean images that complement charts and graphs",
        ],
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Professional Styles That Work",
        paragraphs: [
          "For business presentations, these styles consistently deliver professional results:",
        ],
      },
    },
    {
      id: "section-5",
      type: "textWithBullets",
      content: {
        title: "",
        paragraphs: [],
        bullets: [
          "**Corporate minimalist**: Clean lines, simple shapes, subtle gradients",
          "",
          "**Abstract geometric**: Triangles, circles, polygons in brand colors",
          "",
          "**Nature/organic**: Soft natural elements, blurred backgrounds, gentle textures",
          "",
          "**Tech/modern**: Gradient meshes, flowing lights, futuristic elements",
          "",
          "**Professional photography style**: Realistic scenes with commercial quality",
        ],
      },
    },
    {
      id: "section-6",
      type: "highlightCard",
      content: {
        heading: "Design for Text Overlays",
        insights: [
          "Leave negative space for text placement",
          "Include 'minimalist' or 'clean' in your prompt",
          "Add 'space for text' or 'negative space' to prompts",
        ],
      },
    },
    {
      id: "section-7",
      type: "textWithImage",
      content: {
        title: "Creating Space for Text",
        paragraphs: [
          "The biggest mistake in presentation graphics: creating images so busy that text becomes unreadable.",
          "",
          "Your prompts should explicitly request negative space. Use phrases like 'minimalist composition', 'clean left side', 'simple background area', or 'generous negative space'.",
        ],
        imageUrl: "/images/courses/modules/08-tools-midjourney/lesson-9-13-inline-1.webp",
        imageAlt: "Clean presentation slide with space for text",
      },
    },
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Matching Brand Colors",
        paragraphs: [
          "Midjourney can create images in any color palette. Specify colors directly in your prompt:",
          "",
          "**Example**: 'abstract geometric background, navy blue and gold, minimalist, corporate' --ar 16:9",
          "",
          "**Example**: 'gradient mesh background, teal and white, soft modern, tech aesthetic' --ar 16:9",
          "",
          "Generate several variations until you find one that matches your brand guidelines.",
        ],
      },
    },
    {
      id: "section-9",
      type: "textWithBullets",
      content: {
        title: "Building Cohesive Decks",
        paragraphs: ["For a unified presentation, create a visual system:"],
        bullets: [
          "**Use consistent prompts**: Same style keywords across all slides",
          "",
          "**Limit color palette**: 2-3 brand colors throughout",
          "",
          "**Match visual weight**: All images should feel equally bold or subtle",
          "",
          "**Use seeds for variations**: Same seed, different subjects creates visual consistency",
          "",
          "**Create a template system**: Standard prompts for each slide type you use often",
        ],
      },
    },
    {
      id: "section-10",
      type: "highlightCard",
      content: {
        heading: "Before/After Impact",
        insights: [
          "Stock photos: Generic, recognizable, forgettable",
          "Custom AI graphics: Unique, on-brand, memorable",
          "Audience notices the difference",
        ],
      },
    },
    {
      id: "section-11",
      type: "quickPrompt",
      content: {
        heading: "Create a Title Slide Background",
        description: "Generate a professional hero image with space for your presentation title:",
        promptText:
          "abstract geometric gradient, corporate minimalist, navy blue and silver, generous negative space on left, professional business aesthetic --ar 16:9 --s 150",
        placeholders: ["navy blue and silver", "minimalist", "16:9"],
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "midjourney",
        action: "Use Midjourney in Discord",
        task: "Create professional slide backgrounds and hero images",
        feature: "--ar 16:9 (presentation format)",
        tip: 'Always include "negative space" or "minimalist" in your prompt for text overlay areas',
      },
    },
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create a Presentation Slide Background",
        purpose:
          "Design a professional slide background that you could use in an actual presentation.",
        instructions: [
          "Think of a presentation topic you need or could use (work, school, personal project)",
          "Create a prompt for a slide background with your brand colors",
          "Include 'negative space' or 'minimalist' for text overlay area",
          "Use --ar 16:9 for presentation format",
          "Save the result and test how text looks on top of it",
        ],
        deliverable: "A presentation-ready slide background with space for text",
        estimatedTime: "10 minutes",
        starterPrompt:
          "/imagine prompt: abstract geometric gradient background, navy blue and gold accents, corporate minimalist style, generous negative space on left side, professional business aesthetic --ar 16:9 --s 150 --v 6",
        successCriteria: [
          "Your image is 16:9 aspect ratio for presentations",
          "It has clear negative space where text could be placed",
          "The colors match a professional aesthetic",
          "You tested adding text on top and it remains readable",
        ],
      },
    },
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Presentation Graphics Mastered",
        description:
          "You can now create custom presentation graphics that look more professional than stock photos. Use 16:9 aspect ratio, design for text overlays, and build cohesive visual systems for your decks.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
