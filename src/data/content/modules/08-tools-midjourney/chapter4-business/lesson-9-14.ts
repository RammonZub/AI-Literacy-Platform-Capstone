/**
 * Lesson 9.14: Marketing Materials & Social Media
 *
 * CHAPTER: 4 - Business Applications
 * LESSON: 14 of 16 - Marketing & Social Media
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * LEARNING OBJECTIVES:
 * - Create social media images for different platforms
 * - Design blog headers and email visuals
 * - Maintain visual consistency across campaigns
 */

import type { Lesson } from "@/types/content";

export const lesson_9_14: Lesson = {
  id: "lesson-9-14",
  chapterId: "ch9-4-business",
  moduleId: "08-tools-midjourney",
  title: "Marketing Materials & Social Media",
  description: "Generate scroll-stopping visuals for social media, blogs, and email campaigns",
  order: 14,
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
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-14-cover.webp",
        imageAlt: "Social media marketing concept with phone and icons",
        title: "Marketing Materials & Social Media",
        subtitle: "Generate scroll-stopping visuals for social media, blogs, and email campaigns",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Platform-Specific Aspect Ratios",
        paragraphs: [
          "Each social platform has optimal image dimensions. Use the right aspect ratio to ensure your images display perfectly without cropping.",
        ],
      },
    },
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "Social Media Aspect Ratios",
        insights: [
          "Instagram Feed: --ar 1:1 (square) or --ar 4:5 (portrait)",
          "Instagram Stories/Reels: --ar 9:16",
          "LinkedIn: --ar 1.91:1 or --ar 1:1",
          "Twitter/X: --ar 16:9 or --ar 1:1",
          "Pinterest: --ar 2:3",
        ],
      },
    },
    {
      id: "section-3",
      type: "textWithBullets",
      content: {
        title: "Creating Scroll-Stopping Visuals",
        paragraphs: ["Social feeds are crowded. Your images need to stand out:"],
        bullets: [
          "**Bold colors**: High contrast grabs attention in crowded feeds",
          "",
          "**Simple compositions**: One clear focal point, not busy scenes",
          "",
          "**Unexpected imagery**: Avoid cliches everyone has seen",
          "",
          "**Text-friendly design**: Leave space for headlines and captions",
          "",
          "**Emotional impact**: Images that make people feel something",
        ],
      },
    },
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "Blog Header Images",
        paragraphs: [
          "Every blog post needs a compelling header image. This appears in social shares, email previews, and search results.",
          "",
          "Blog headers typically work best at 16:9 or 2:1 aspect ratios. Include space for the article title overlay.",
        ],
        imageUrl: "/images/courses/modules/08-tools-midjourney/lesson-9-14-inline-1.webp",
        imageAlt: "Laptop with blog content",
      },
    },
    {
      id: "section-5",
      type: "textWithBullets",
      content: {
        title: "Email Newsletter Visuals",
        paragraphs: ["Email visuals need to work in small preview panes and support your message:"],
        bullets: [
          "**Hero images**: 600px wide, eye-catching, supports subject line",
          "",
          "**Section dividers**: Visual breaks between email sections",
          "",
          "**Product spotlights**: Clean product photography style",
          "",
          "**Animated-style graphics**: Illustrations that explain concepts",
          "",
          "**CTA backgrounds**: Images that highlight call-to-action buttons",
        ],
      },
    },
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Ad Creative Concepts",
        paragraphs: [
          "For paid advertising, you often need multiple variations for A/B testing. Midjourney excels at generating multiple concepts from the same prompt theme.",
          "",
          "**Strategy**: Create 4-8 variations of the same concept, test which performs best, then refine the winner.",
        ],
      },
    },
    {
      id: "section-7",
      type: "highlightCard",
      content: {
        heading: "Visual Consistency Tips",
        insights: [
          "Use the same style keywords across all images",
          "Maintain 2-3 brand colors throughout",
          "Keep visual 'voice' consistent",
          "Create prompt templates for recurring content types",
        ],
      },
    },
    {
      id: "section-8",
      type: "textWithBullets",
      content: {
        title: "Maintaining Campaign Consistency",
        paragraphs: ["A marketing campaign needs unified visuals across all touchpoints:"],
        bullets: [
          "**Create a master prompt**: Core prompt with your brand style, use variations for different content",
          "",
          "**Use seeds strategically**: Same seed + small changes = visual cohesion",
          "",
          "**Document your style**: Keep a reference of prompts that worked",
          "",
          "**Batch create**: Generate all campaign images in one session for consistency",
          "",
          "**Color palette prompts**: Include your hex colors or color names in every prompt",
        ],
      },
    },
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Batch Creating Content Calendars",
        paragraphs: [
          "Many social media managers create content weeks in advance. With Midjourney, you can generate a month's worth of visuals in one session.",
          "",
          "**Workflow**:",
          "1. Plan your content themes for the month",
          "2. Create prompt templates for each theme",
          "3. Generate all images in batches",
          "4. Select and organize by posting date",
          "5. Schedule with your social media tool",
        ],
      },
    },
    {
      id: "section-10",
      type: "highlightCard",
      content: {
        heading: "A/B Testing Visuals",
        insights: [
          "Generate multiple versions of the same concept",
          "Test different colors, styles, compositions",
          "Let data guide your creative decisions",
        ],
      },
    },
    {
      id: "section-11",
      type: "quickPrompt",
      content: {
        heading: "Create an Instagram Post",
        description: "Generate a bold, scroll-stopping image for your brand:",
        promptText:
          "bold minimalist graphic, abstract geometric shapes, coral and navy blue, modern brand aesthetic, clean composition, space for text overlay --ar 1:1 --s 200",
        placeholders: ["coral and navy blue", "minimalist", "1:1"],
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "midjourney",
        action: "Use Midjourney in Discord",
        task: "Create scroll-stopping visuals for social media and marketing",
        feature: "--ar (platform-specific ratios)",
        tip: "Use --ar 1:1 for Instagram feed, --ar 9:16 for Stories, --ar 16:9 for YouTube and blogs",
      },
    },
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create Social Media Content",
        purpose: "Generate a scroll-stopping image for a real social media platform you use.",
        instructions: [
          "Choose a platform you actually post on (Instagram, LinkedIn, Twitter)",
          "Decide on a topic or theme for your post",
          "Create a prompt optimized for that platform's aspect ratio",
          "Include bold elements that will stand out in a feed",
          "Generate, upscale, and save your creation",
        ],
        deliverable: "A social media-ready image in the correct aspect ratio for your platform",
        estimatedTime: "10 minutes",
        starterPrompt:
          "/imagine prompt: bold minimalist graphic, abstract geometric shapes, coral and navy blue, modern brand aesthetic, clean composition, space for text overlay, high contrast --ar 1:1 --s 200 --v 6",
        successCriteria: [
          "Your image uses the correct aspect ratio for your chosen platform",
          "The design is bold enough to stand out in a social feed",
          "There's space for text overlay if needed",
          "You saved the upscaled version ready to post",
        ],
      },
    },
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Marketing & Social Media Mastered",
        description:
          "You can now create platform-optimized visuals for social media, blog headers, email campaigns, and ad creative. Focus on scroll-stopping impact, maintain visual consistency, and use batching for efficiency.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
