/**
 * Lesson 9.16: Print-on-Demand Business Basics
 *
 * CHAPTER: 4 - Business Applications
 * LESSON: 16 of 16 - Print-on-Demand Business
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * LEARNING OBJECTIVES:
 * - Understand the POD business model
 * - Create designs optimized for different products
 * - Build a workflow for scaling design creation
 */

import type { Lesson } from "@/types/content";

export const lesson_9_16: Lesson = {
  id: "lesson-9-16",
  chapterId: "ch9-4-business",
  moduleId: "08-tools-midjourney",
  title: "Print-on-Demand Business Basics",
  description: "Build a print-on-demand business with AI-generated designs for products",
  order: 16,
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
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-16-cover.webp",
        imageAlt: "E-commerce and online shopping concept",
        title: "Print-on-Demand Business Basics",
        subtitle: "Build a print-on-demand business with AI-generated designs for products",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "How POD Works",
        paragraphs: [
          "The POD model is simple:",
          "",
          "1. You create designs (now with AI assistance)",
          "2. You upload to POD platforms (Redbubble, Society6, Merch by Amazon, etc.)",
          "3. Customers browse and order",
          "4. The platform prints, packs, and ships",
          "5. You receive a royalty payment",
          "",
          "No inventory. No shipping logistics. No upfront costs.",
        ],
      },
    },
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "Major POD Platforms",
        insights: [
          "Redbubble: Easy start, large marketplace",
          "Society6: Higher-end, artist-focused",
          "Merch by Amazon: Huge reach, competitive",
          "Printful + Etsy: More control, your own store",
        ],
      },
    },
    {
      id: "section-3",
      type: "textWithBullets",
      content: {
        title: "Design Specifications by Product",
        paragraphs: ["Each product type has specific requirements:"],
        bullets: [
          "**T-shirts**: 4500x5400px, PNG with transparency, bold designs work best",
          "",
          "**Posters/prints**: 10,000px+ on longest side, high detail OK",
          "",
          "**Phone cases**: Varies by phone model, centered composition",
          "",
          "**Mugs**: Wrap-around designs, consider handle placement",
          "",
          "**Stickers**: Clean edges, works at small sizes",
          "",
          "**Hoodies**: Large print area, chunky designs work well",
        ],
      },
    },
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "Designs That Sell",
        paragraphs: [
          "Not all AI art makes good products. Successful POD designs tend to share characteristics:",
        ],
        imageUrl: "/images/courses/modules/08-tools-midjourney/lesson-9-16-inline-1.webp",
        imageAlt: "Product photography of custom items",
      },
    },
    {
      id: "section-5",
      type: "textWithBullets",
      content: {
        title: "Winning Design Characteristics",
        paragraphs: [],
        bullets: [
          "**Bold and clear**: Readable from a distance, works at small size",
          "",
          "**Niche-focused**: Target specific communities (hobbies, professions, interests)",
          "",
          "**Trend-aware**: Capitalize on current topics (responsibly)",
          "",
          "**Emotional**: Makes people feel something (funny, inspiring, relatable)",
          "",
          "**Clean compositions**: Not cluttered, one clear message",
          "",
          "**Good contrast**: Visible on various product colors",
        ],
      },
    },
    {
      id: "section-6",
      type: "highlightCard",
      content: {
        heading: "Midjourney for POD",
        insights: [
          "Generate at highest quality (--q 2)",
          "Create transparent backgrounds for t-shirts",
          "Upscale for print resolution",
          "Test on multiple product types",
        ],
      },
    },
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Researching Trending Niches",
        paragraphs: [
          "Successful POD sellers research before creating:",
          "",
          "**Browse bestsellers**: What's selling on each platform?",
          "",
          "**Check search trends**: Google Trends, Amazon bestsellers",
          "",
          "**Join communities**: Reddit, Facebook groups for niche interests",
          "",
          "**Seasonal planning**: Holidays, events, back-to-school",
          "",
          "**Gap analysis**: What's missing? What could be better?",
        ],
      },
    },
    {
      id: "section-8",
      type: "textWithBullets",
      content: {
        title: "Bulk Creation Workflow",
        paragraphs: ["Scale your design production with a systematic approach:"],
        bullets: [
          "**1. Research**: Identify 5-10 promising niches",
          "",
          "**2. Prompt templates**: Create reusable prompts for each niche",
          "",
          "**3. Batch generate**: Create 20+ variations per session",
          "",
          "**4. Curate**: Select the best 3-5 from each batch",
          "",
          "**5. Prepare**: Upscale, remove backgrounds, format for products",
          "",
          "**6. Upload**: Post to multiple platforms simultaneously",
        ],
      },
    },
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Quality Control",
        paragraphs: [
          "AI art isn't perfect. Before uploading, check:",
          "",
          "**Artifacts**: Weird glitches, extra limbs, text that doesn't make sense",
          "",
          "**Resolution**: Sharp enough for print (no pixelation)",
          "",
          "**Composition**: Centered properly for the product",
          "",
          "**Colors**: Look good on the product background color",
        ],
      },
    },
    {
      id: "section-10",
      type: "highlightCard",
      content: {
        heading: "Legal Considerations",
        insights: [
          "You own images created with Midjourney (paid plan)",
          "Don't infringe on existing trademarks or IP",
          "Check platform terms for AI-generated content",
          "Original concepts are safest",
        ],
      },
    },
    {
      id: "section-11",
      type: "quickPrompt",
      content: {
        heading: "Create a T-Shirt Design",
        description: "Generate a bold design optimized for apparel:",
        promptText:
          "vintage retro hiking adventure design, majestic mountain landscape, sunset colors, minimalist illustration style, bold clean lines, centered composition, t-shirt graphic design --ar 1:1 --s 250 --q 2",
        placeholders: ["vintage retro hiking adventure", "minimalist illustration", "1:1"],
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "midjourney",
        action: "Use Midjourney in Discord",
        task: "Create print-on-demand designs for products",
        feature: "--q 2 (high quality) and --ar 1:1 (versatile product format)",
        tip: "Always use --q 2 for print-quality output and test your design at thumbnail size",
      },
    },
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create a POD-Ready Design",
        purpose: "Design an image optimized for print-on-demand products like t-shirts or posters.",
        instructions: [
          "Choose a niche (hobbies, professions, pets, quotes, etc.)",
          "Create a bold design that works at both small and large sizes",
          "Use --ar 1:1 for versatile product application",
          "Include --q 2 for high-quality output",
          "Generate and evaluate if the design would work on products",
        ],
        deliverable: "A bold, clean design suitable for print-on-demand products",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "/imagine prompt: vintage retro hiking adventure design, majestic mountain landscape, sunset colors, minimalist illustration style, bold clean lines, centered composition, t-shirt graphic design --ar 1:1 --s 250 --q 2 --v 6",
        successCriteria: [
          "Your design is bold enough to work on a t-shirt",
          "The composition is centered and balanced",
          "Colors are vibrant and would print well",
          "The design works at both small and large sizes",
        ],
      },
    },
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Chapter 4 Complete: Business Applications",
        description:
          "You've completed the Business Applications chapter. You can now create presentation graphics, marketing materials, book covers, product mockups, and POD designs. These skills turn Midjourney from a creative tool into a business asset.",
        xpReward: 100,
        buttonText: "Complete Chapter 4",
      },
    },
  ],
};
