/**
 * Lesson 9.15: Book Covers & Product Mockups
 *
 * CHAPTER: 4 - Business Applications
 * LESSON: 15 of 16 - Book Covers & Product Mockups
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * LEARNING OBJECTIVES:
 * - Design book covers that meet genre expectations
 * - Create product concept visualizations
 * - Prepare images for print and digital platforms
 */

import type { Lesson } from "@/types/content";

export const lesson_9_15: Lesson = {
  id: "lesson-9-15",
  chapterId: "ch9-4-business",
  moduleId: "08-tools-midjourney",
  title: "Book Covers & Product Mockups",
  description: "Design compelling book covers and product visualizations for print and digital",
  order: 15,
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
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-15-cover.webp",
        imageAlt: "Books and product mockups",
        title: "Book Covers & Product Mockups",
        subtitle: "Design compelling book covers and product visualizations for print and digital",
      },
    },
    {
      id: "section-1",
      type: "highlightCard",
      content: {
        heading: "Book Cover Aspect Ratio",
        insights: [
          "Standard book covers: --ar 2:3",
          "This matches 6x9 inch trade paperback",
          "Works for Amazon KDP and most platforms",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Genre Conventions Matter",
        paragraphs: [
          "Readers judge books by their covers, literally. Each genre has visual expectations that signal 'this book is for you.'",
          "",
          "**Romance**: Soft lighting, couples, warm colors, elegant typography space",
          "",
          "**Thriller**: Dark, dramatic, tense imagery, bold contrasts",
          "",
          "**Fantasy**: Epic landscapes, magical elements, rich detail",
          "",
          "**Business/Self-help**: Clean, modern, professional, aspirational",
          "",
          "**Sci-fi**: Futuristic, tech elements, space, neon accents",
        ],
      },
    },
    {
      id: "section-3",
      type: "textWithBullets",
      content: {
        title: "Book Cover Best Practices",
        paragraphs: ["Effective book covers follow proven principles:"],
        bullets: [
          "**Single focal point**: One main image, not cluttered scenes",
          "",
          "**Clear title space**: Top or center, unobstructed by imagery",
          "",
          "**Readable at thumbnail**: Works as a tiny icon on Amazon",
          "",
          "**Genre-appropriate**: Matches reader expectations",
          "",
          "**Author name visible**: Build recognition over time",
        ],
      },
    },
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "Typography Integration",
        paragraphs: [
          "Midjourney creates the background art. You'll add text (title, author name) in design software like Canva, Photoshop, or even PowerPoint.",
          "",
          "Generate covers with clear negative space where text will go. Avoid busy patterns in the title area.",
        ],
        imageUrl: "/images/courses/modules/08-tools-midjourney/lesson-9-15-inline-1.webp",
        imageAlt: "Book cover design process",
      },
    },
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Series Consistency",
        paragraphs: [
          "For book series, visual consistency helps readers recognize your work:",
          "",
          "**Use the same seed**: Generate all covers from the same seed with small prompt variations",
          "",
          "**Consistent style keywords**: Same art style across all books",
          "",
          "**Color scheme**: Each book has a dominant color, but overall palette matches",
          "",
          "**Layout template**: Same text placement, same composition style",
        ],
      },
    },
    {
      id: "section-6",
      type: "highlightCard",
      content: {
        heading: "Print Specifications",
        insights: [
          "For print, you need high resolution (300 DPI)",
          "Upscale your Midjourney images before export",
          "Add bleed area for full-bleed printing",
        ],
      },
    },
    {
      id: "section-7",
      type: "textWithBullets",
      content: {
        title: "Product Mockups",
        paragraphs: ["Beyond book covers, Midjourney creates product concept visualizations:"],
        bullets: [
          "**Packaging design**: Bottles, boxes, labels before manufacturing",
          "",
          "**Apparel concepts**: T-shirt designs, clothing mockups",
          "",
          "**Tech products**: Device concepts, gadget visualizations",
          "",
          "**Food packaging**: Product labels, container designs",
          "",
          "**Cosmetics**: Beauty product photography style",
        ],
      },
    },
    {
      id: "section-8",
      type: "text",
      content: {
        title: "From Concept to Pitch Deck",
        paragraphs: [
          "Product mockups are powerful for presentations and investor pitches. Show what your product will look like before spending money on manufacturing.",
          "",
          "**Workflow**: Generate concept -> Refine with iterations -> Select best -> Add branding in design software -> Present to stakeholders",
        ],
      },
    },
    {
      id: "section-9",
      type: "textWithBullets",
      content: {
        title: "Exporting for Platforms",
        paragraphs: ["Different platforms have different requirements:"],
        bullets: [
          "**Amazon KDP**: JPEG or TIFF, 300 DPI, correct dimensions",
          "",
          "**IngramSpark**: Similar to KDP, check their specs",
          "",
          "**Web/Digital**: 72 DPI, optimized file size, RGB color",
          "",
          "**Print-on-demand**: Check each platform's specific requirements",
          "",
          "**Social media**: Resize from your master high-res file",
        ],
      },
    },
    {
      id: "section-10",
      type: "quickPrompt",
      content: {
        heading: "Create a Book Cover",
        description: "Generate a book cover background with space for your title:",
        promptText:
          "mystery thriller book cover, dark moody forest path, dramatic lighting, fog and shadows, cinematic, negative space at top for title, professional book cover design --ar 2:3 --s 150",
        placeholders: ["mystery thriller", "dark moody forest", "2:3"],
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "midjourney",
        action: "Use Midjourney in Discord",
        task: "Design book covers and product mockups",
        feature: "--ar 2:3 (book cover format)",
        tip: 'Include "negative space at top" in your prompt for title placement, use --q 2 for print-quality output',
      },
    },
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Design a Book Cover",
        purpose:
          "Create a book cover background for a real or imaginary book in your preferred genre.",
        instructions: [
          "Choose a genre (mystery, romance, fantasy, business, etc.)",
          "Create a prompt that matches genre conventions",
          "Use --ar 2:3 for standard book proportions",
          "Include negative space for title and author name",
          "Generate and save your book cover design",
        ],
        deliverable: "A book cover design in 2:3 aspect ratio with space for typography",
        estimatedTime: "10 minutes",
        starterPrompt:
          "/imagine prompt: mystery thriller book cover, dark moody forest path, dramatic lighting, fog and shadows, cinematic, generous negative space at top for title, professional book cover design --ar 2:3 --s 150 --v 6",
        successCriteria: [
          "Your cover uses --ar 2:3 (book proportions)",
          "The design matches genre conventions",
          "There's clear space for title text (top or center)",
          "The image would work at thumbnail size on Amazon",
        ],
      },
    },
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Book Covers & Product Mockups Mastered",
        description:
          "You can now create professional book covers that meet genre expectations and product mockups for presentations. Remember to design for text overlays, maintain series consistency, and export at proper resolution for your platform.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
