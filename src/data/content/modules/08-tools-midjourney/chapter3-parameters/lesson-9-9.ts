/**
 * Lesson 9.9: Aspect Ratios: The Shape of Your Image
 *
 * CHAPTER: 3 - Controlling Your Results
 * LESSON: 9 of 16 - Aspect Ratios
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * LEARNING OBJECTIVES:
 * - Understand aspect ratio concept (shape, not resolution)
 * - Master the --ar parameter for different platforms
 * - Learn which ratio to use for each use case
 */

import type { Lesson } from "@/types/content";

export const lesson_9_9: Lesson = {
  id: "lesson-9-9",
  chapterId: "ch9-3-parameters",
  moduleId: "08-tools-midjourney",
  title: "Aspect Ratios: The Shape of Your Image",
  description: "Master the --ar parameter to create images in the perfect shape for any platform",
  order: 9,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // HERO IMAGE
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-9-cover.webp",
        imageAlt: "Abstract shapes demonstrating different aspect ratios",
        title: "Aspect Ratios: The Shape of Your Image",
        subtitle:
          "Master the --ar parameter to create perfectly-proportioned images for any platform",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "What Is Aspect Ratio?",
        paragraphs: [
          "Aspect ratio describes the **proportional relationship** between width and height. It's not about how many pixels, but about the shape.",
          "",
          "**Example**: An image that's 1000 pixels wide by 500 pixels tall has an aspect ratio of 2:1 (twice as wide as tall). An image that's 2000 x 1000 has the same 2:1 ratio, just at higher resolution.",
          "",
          "Midjourney defaults to square (1:1), but you can change this with the `--ar` parameter.",
        ],
      },
    },
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "The --ar Parameter",
        insights: [
          "Add --ar WIDTH:HEIGHT to any prompt",
          "Example: a sunset landscape --ar 16:9",
          "Works with any ratio Midjourney supports",
        ],
      },
    },
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Common Aspect Ratios & When to Use Them",
        paragraphs: [
          "Each aspect ratio has natural use cases based on where and how the image will be displayed. Understanding these associations helps you quickly select the right ratio without having to think through the math each time. Let's explore the most commonly used ratios and their typical applications.",
          "",
          "Square images at 1:1 are the most versatile format. They work perfectly for social media posts across almost all platforms, profile pictures, album covers, and Instagram feed posts. The symmetry of square compositions creates a balanced, centered feeling that works well for portraits, products, and graphic designs. Because the width and height are equal, subjects sit naturally in the center without feeling cramped or lost in empty space.",
          "",
          "Widescreen 16:9 images feel cinematic and expansive. This ratio dominates modern presentations, YouTube thumbnails, website headers, and desktop wallpapers. The horizontal emphasis naturally accommodates landscapes, group shots, and scenes with multiple elements spread across the frame. Use 16:9 whenever you want to evoke a movie-like quality or need imagery for screens and presentations.",
          "",
          "The vertical 9:16 ratio has become essential in the mobile-first era. This portrait orientation fills phone screens perfectly, making it ideal for phone wallpapers, Instagram Stories, TikTok content, and Reels. When viewers hold their phones vertically, 9:16 images use the full screen without black bars or cropping. The vertical emphasis naturally draws the eye from top to bottom, making it effective for full-body portraits, tall architecture, and any subject with vertical emphasis.",
          "",
          "Classic ratios like 4:3 and 3:2 come from traditional photography. The 4:3 ratio was standard for older televisions and digital cameras, still useful for traditional photo prints and some presentation formats. The 3:2 ratio comes from 35mm film photography and remains the standard for prints like 4x6 and 8x12 photos. For book covers, posters, and magazine layouts, the 2:3 portrait ratio matches standard publication dimensions, ensuring your generated images fit real-world print formats without awkward cropping.",
        ],
      },
    },
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "Platform-Specific Requirements",
        paragraphs: [
          "Different platforms have different optimal aspect ratios. Using the right ratio means your image displays perfectly without cropping.",
        ],
        imageUrl: "/images/courses/modules/08-tools-midjourney/lesson-9-9-inline-1.webp",
        imageAlt: "Social media apps and platform interfaces",
      },
    },
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Quick Platform Guide",
        paragraphs: [
          "Each social media platform has optimal aspect ratios that determine how your images appear to viewers. Using the correct ratio ensures your images display fully without cropping or awkward letterboxing, maximizing visual impact and professional appearance.",
          "",
          "Instagram offers multiple formats depending on where your content appears. The main feed works best with square 1:1 images or 4:5 portrait format, which occupies more screen space and tends to perform better. Instagram Stories and Reels require 9:16 vertical format to fill the entire phone screen. YouTube thumbnails demand 16:9 widescreen format to match video dimensions. LinkedIn posts perform well with 1.91:1 landscape images or 1:1 squares, while Twitter/X accommodates both 16:9 and 1:1 formats.",
          "",
          "Pinterest stands apart with its vertical emphasis, where 2:3 pins consistently outperform other formats because they occupy more vertical feed space. For presentations in PowerPoint or Google Slides, 16:9 has become the modern standard, replacing the older 4:3 format. Phone wallpapers require 9:16 for most devices, though some newer phones with taller screens may need 9:19.5 or similar ratios. When creating images for specific platforms, always verify current recommendations as platforms occasionally update their optimal dimensions.",
        ],
      },
    },
    {
      id: "section-6",
      type: "highlightCard",
      content: {
        heading: "Aspect Ratio vs Resolution",
        insights: [
          "Aspect ratio = SHAPE (proportions)",
          "Resolution = SIZE (pixel count)",
          "--ar changes shape, not quality",
        ],
      },
    },
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Important: Ratio Is Not Resolution",
        paragraphs: [
          "Don't confuse aspect ratio with resolution. Aspect ratio is the shape. Resolution is how many pixels.",
          "",
          "**Aspect ratio** determines whether your image is square, wide, or tall.",
          "",
          "**Resolution** determines how sharp and detailed it is.",
          "",
          "In Midjourney, you control resolution through quality settings and upscaling, not through --ar. A 16:9 image at low quality still has the same shape as a 16:9 at high quality.",
        ],
      },
    },
    {
      id: "section-8",
      type: "quickPrompt",
      content: {
        heading: "Try Different Ratios",
        description:
          "Generate the same subject at different aspect ratios to see how composition changes:",
        promptText: "a serene mountain lake at golden hour --ar 16:9",
        placeholders: ["16:9", "1:1", "9:16", "2:3"],
      },
    },
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Decision Framework: Which Ratio?",
        paragraphs: [
          "Choosing the right aspect ratio becomes intuitive once you understand the connection between use case and format. When you're uncertain, work through these questions to arrive at the appropriate ratio for your specific situation.",
          "",
          "Start by considering where your image will appear. For social media, consult the platform guide above, as each platform has specific requirements that affect how your content displays. For presentations, whether PowerPoint, Google Slides, or Keynote, 16:9 widescreen has become the universal standard for modern displays and projectors. Print work requires matching your intended paper size, so consider standard photo sizes like 4x6, 5x7, or 8x10 when selecting your ratio.",
          "",
          "Book covers demand 2:3 format because that's the standard proportion for printed books across most genres. Phone wallpapers need 9:16 to fill vertical screens properly, though you may need to adjust slightly for specific device models. When you're genuinely unsure of the final use, start with 1:1 square format, which works acceptably almost everywhere. You can always generate a different ratio later once your use case becomes clear.",
        ],
      },
    },
    {
      id: "section-10",
      type: "highlightCard",
      content: {
        heading: "Aspect Ratio Quick Reference",
        insights: [
          "--ar 1:1 — Square (Instagram posts)",
          "--ar 16:9 — Wide (Presentations, YouTube)",
          "--ar 9:16 — Tall (Stories, phone wallpapers)",
          "--ar 2:3 — Portrait (Book covers)",
        ],
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "midjourney",
        action: "Use Midjourney in Discord",
        task: "Create images in the correct aspect ratio for your target platform",
        feature: "--ar (aspect ratio)",
        tip: "Start with --ar 16:9 for presentations and YouTube, --ar 1:1 for social posts, --ar 9:16 for Stories",
      },
    },
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create Platform-Specific Images",
        purpose:
          "Practice using aspect ratios by creating the same image optimized for three different platforms.",
        instructions: [
          "Choose a simple subject (like 'a mountain lake at sunrise')",
          "Generate the image for Instagram feed using --ar 1:1",
          "Generate the same subject for YouTube thumbnail using --ar 16:9",
          "Generate the same subject for Instagram Stories using --ar 9:16",
          "Compare how the composition changes with each aspect ratio",
        ],
        deliverable: "Three images of the same subject in different aspect ratios",
        estimatedTime: "10 minutes",
        starterPrompt:
          "/imagine prompt: a serene mountain lake at sunrise, mist over water, dramatic peaks reflected, peaceful wilderness --ar 16:9 --v 6",
        successCriteria: [
          "You generated three images with the same subject but different --ar values",
          "The square image (1:1) looks balanced and centered",
          "The widescreen image (16:9) has a cinematic feel",
          "The vertical image (9:16) fills a phone screen properly",
        ],
      },
    },
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Aspect Ratios Mastered",
        description:
          "You now understand how to control the shape of your Midjourney images. The --ar parameter is your key to creating perfectly-proportioned images for any platform or purpose.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
