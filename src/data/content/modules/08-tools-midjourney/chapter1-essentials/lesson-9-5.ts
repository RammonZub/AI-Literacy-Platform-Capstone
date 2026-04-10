/**
 * Lesson 9.5: Subscription Plans & Commercial Rights
 *
 * CHAPTER: 1 - Getting Started
 * LESSON: 5 of 5 - Understanding Plans & Rights
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Explain Midjourney subscription options and usage rights
 *
 * KEY RESPONSIBILITIES:
 * - Explain each subscription tier
 * - Clarify GPU time and Fast vs Relax modes
 * - Cover commercial usage rights
 * - Help learners choose the right plan
 */

import type { Lesson } from "@/types/content";

export const lesson_9_5: Lesson = {
  id: "lesson-9-5",
  chapterId: "ch9-1-essentials",
  moduleId: "08-tools-midjourney",
  title: "Subscription Plans & Commercial Rights",
  description: "Understand Midjourney's subscription options and your usage rights",
  order: 5,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "theory",
  sections: [
    // ===========================================================================
    // HERO IMAGE
    // ===========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-5-cover.webp",
        imageAlt: "Business planning and subscription concepts for Midjourney plans",
        title: "Subscription Plans & Commercial Rights",
        subtitle:
          "Understand Midjourney's subscription options and your usage rights to get the most value",
      },
    },
    // ===========================================================================
    // SECTION 1: Why Subscriptions Exist
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why Subscriptions?",
        paragraphs: [
          "Creating AI images requires significant computing power—specifically, GPUs (Graphics Processing Units). These are expensive to run.",
          "",
          "Midjourney charges subscriptions to cover these costs while keeping the service accessible. Think of it like paying for cloud storage or streaming—except instead of space or content, you're paying for GPU time.",
          "",
          "The good news: Midjourney offers a free trial so you can test before committing.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: The Free Trial
    // ===========================================================================
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "The Free Trial",
        insights: [
          "Limited number of free generations (typically ~25)",
          "Full access to all model versions",
          "No commercial rights on free trial images",
          "Great for testing before subscribing",
          "Availability varies—sometimes Midjourney pauses free trials during high demand",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Subscription Tiers Overview
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Subscription Tiers at a Glance",
        paragraphs: [
          "Midjourney offers four main subscription tiers designed to match different usage patterns and professional needs. Understanding the differences between them will help you choose the plan that provides the best value for your specific situation. Note that prices may change, so always verify current pricing on Midjourney's official website.",
          "",
          "The Basic Plan, priced around $10 per month, provides approximately 200 generations in Fast mode. This plan is ideal for casual users who want to create images occasionally without a significant financial commitment. However, it lacks access to Relax mode, meaning every generation consumes your limited Fast mode allowance. You do receive general commercial terms, allowing you to use generated images for commercial purposes with some revenue limitations.",
          "",
          "The Standard Plan, at approximately $30 per month, represents the sweet spot for most regular users. You get around 900 Fast mode generations plus unlimited access to Relax mode, which we'll explain shortly. This combination effectively gives you unlimited image generation if you're willing to wait a bit longer during periods of high demand. Like the Basic plan, it includes general commercial terms for business use.",
          "",
          "For power users and professionals, the Pro Plan (around $60/month) and Mega Plan (around $120/month) offer substantially more Fast mode generations, 1,800 and 3,600 respectively, along with unlimited Relax mode. The key differentiator for these tiers is Stealth mode, which makes your generations private rather than visible to other users. These plans also include extended commercial terms, which remove revenue limitations and provide better legal protections, essential for businesses generating significant revenue or working with client projects that require confidentiality.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Understanding GPU Time
    // ===========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Understanding GPU Time",
        paragraphs: [
          "Every image you generate consumes GPU time. Here's how it works in simple terms:",
          "",
          "**One generation** = One prompt submission = Four images",
          "",
          "Different actions consume different amounts:",
          "- Initial generation: ~1 unit",
          "- Variation: ~1 unit",
          "- Upscale: Less than 1 unit",
          "- High-quality modes: More units",
          "",
          "Your subscription gives you a pool of GPU time. When it runs low, you can buy more or wait for your monthly reset.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Fast vs Relax Mode
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Fast Mode vs Relax Mode",
        paragraphs: [
          "Understanding the difference between Fast and Relax modes is crucial for choosing the right subscription plan and managing your image generation workflow effectively. These two modes represent fundamentally different approaches to how your requests are processed.",
          "",
          "Fast Mode is the default experience where your images generate immediately, typically within 30 to 60 seconds. When you submit a prompt in Fast Mode, Midjourney prioritizes your request and dedicates GPU resources to it right away. This immediacy is excellent for iterative workflows where you want to see results quickly and refine your prompts based on what you observe. However, every generation in Fast Mode consumes your GPU allowance, which is the limited resource included with your subscription.",
          "",
          "Relax Mode works differently. Instead of generating immediately, your images enter a queue and are processed when GPU capacity becomes available. This typically means waiting anywhere from 1 to 10 minutes for your results, depending on system demand. The crucial difference is that Relax Mode does NOT consume your GPU allowance. Your generations are essentially free in terms of your subscription limits, you just pay with a bit of patience instead.",
          "",
          "This distinction has profound implications for plan selection. With Relax Mode available on Standard and higher plans, you can generate effectively unlimited images. You simply need to be willing to wait a bit longer for each one. For patient users or those generating large batches of images, this makes the Standard plan an exceptional value proposition compared to the limited Fast Mode generations on the Basic plan.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Which Plan is Right for You?
    // ===========================================================================
    {
      id: "section-6",
      type: "highlightCard",
      content: {
        heading: "Plan Recommendations",
        insights: [
          "Casual users (few images/week): Basic is usually sufficient",
          "Regular users (daily creation): Standard offers best value with Relax mode",
          "Power users (heavy daily use): Pro gives more Fast hours plus Stealth",
          "Commercial/professional: Consider Pro or Mega for extended commercial terms",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Commercial Usage Rights
    // ===========================================================================
    {
      id: "section-7",
      type: "textWithImage",
      content: {
        title: "Commercial Usage Rights",
        paragraphs: [
          "Can you use Midjourney images commercially? Yes—with conditions.",
          "",
          "Understanding these rights is essential if you plan to use images for business, products, or client work.",
        ],
        imageUrl: "/images/courses/modules/08-tools-midjourney/lesson-9-5-inline-1.webp",
        imageAlt: "Business and legal documents",
      },
    },
    // ===========================================================================
    // SECTION 8: General Commercial Terms
    // ===========================================================================
    {
      id: "section-8",
      type: "text",
      content: {
        title: "General Commercial Terms (All Paid Plans)",
        paragraphs: [
          "With any paid Midjourney subscription, you receive commercial rights to the images you generate. This means you own your creations, with some exceptions outlined in the terms of service, and can use them for commercial purposes including marketing materials, product designs, client work, and more. You're also permitted to sell products that feature your generated images, such as prints, merchandise, or digital products.",
          "",
          "There is one important exception to be aware of: if your company generates more than $1 million USD in annual revenue, you must subscribe to the Pro or Mega plan to maintain commercial rights. This threshold exists to ensure that larger commercial enterprises contribute appropriately to the platform's sustainability while keeping the service accessible to individuals and small businesses. For most individual creators and small businesses, the Basic or Standard plans provide all the commercial rights you need.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: Extended Commercial Terms
    // ===========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Extended Commercial Terms (Pro & Mega)",
        paragraphs: [
          "The Pro and Mega plans include extended commercial terms that provide enhanced rights and protections for professional and business use. These extended terms remove the revenue threshold entirely, granting full commercial ownership regardless of how much revenue your company generates. This makes these plans essential for established businesses and agencies that exceed the $1 million annual revenue mark.",
          "",
          "Beyond removing revenue limits, the extended terms provide better legal protections and a more complete ownership position. Essentially, you receive a complete buyout of the AI's portion of the rights, meaning you own 100% of the commercial rights to your generated images. For businesses working with client projects, creating proprietary assets, or building commercial products based on Midjourney images, these enhanced rights provide the legal clarity and protection that professional work demands. This is why the Pro and Mega plans are strongly recommended for any professional or commercial use beyond personal projects.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: Stealth Mode
    // ===========================================================================
    {
      id: "section-10",
      type: "highlightCard",
      content: {
        heading: "Stealth Mode (Pro & Mega)",
        insights: [
          "By default, your generated images are visible to other Midjourney users",
          "Stealth Mode makes your generations private",
          "Essential for proprietary work or client projects",
          "Only available on Pro and Mega plans",
          "You can toggle between public and private at any time",
        ],
      },
    },
    // ===========================================================================
    // SECTION 11: Managing Your Subscription
    // ===========================================================================
    {
      id: "section-11",
      type: "textWithBullets",
      content: {
        title: "Managing Your Subscription",
        paragraphs: ["To view or change your subscription:"],
        bullets: [
          "DM the Midjourney Bot on Discord and type /subscribe",
          "This opens a link to your account management page",
          "You can upgrade, downgrade, or cancel anytime",
          "Changes take effect at the start of your next billing cycle",
          "Purchased extra GPU hours roll over (for now)",
        ],
      },
    },
    // ===========================================================================
    // SECTION 12: Important Notes
    // ===========================================================================
    {
      id: "section-12",
      type: "text",
      content: {
        title: "Important Notes",
        paragraphs: [
          "**Prices and terms can change**: Midjourney occasionally updates pricing and terms. Always check the official website for current information.",
          "",
          "**Read the Terms of Service**: This lesson summarizes key points, but you should read the full ToS before using images commercially.",
          "",
          "**Copyright considerations**: The legal landscape around AI-generated art is evolving. Midjourney grants you rights to use images, but AI copyright law is still being established in many jurisdictions.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 13: Plan Selection Task
    // ===========================================================================
    {
      id: "section-13",
      type: "quickPrompt",
      content: {
        heading: "Choose Your Plan",
        description:
          "Based on what you've learned, which subscription tier fits your needs? Write down your choice and reasoning:",
        promptText:
          "My chosen plan: [Basic/Standard/Pro/Mega] because [your reasoning: frequency of use, commercial needs, budget considerations]",
      },
    },
    // ===========================================================================
    // TOOL REFERENCE
    // ===========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "midjourney",
        action: "Use Midjourney in Discord",
        task: "Choose the right subscription plan for your needs",
        feature: "/subscribe command",
        tip: "Standard plan offers best value with Relax mode for effectively unlimited generations",
      },
    },
    // ===========================================================================
    // SECTION 14: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Choose Your Plan",
        purpose:
          "Making an informed decision about your subscription ensures you get the right features for your needs without overspending.",
        instructions: [
          "Consider how often you'll use Midjourney (daily, weekly, occasionally)",
          "Determine if you need commercial rights for your images",
          "Decide if privacy (Stealth mode) is important for your work",
          "Check the current Midjourney pricing page for up-to-date plans",
          "Choose the plan that best fits your needs and write down your reasoning",
        ],
        deliverable:
          "A documented decision on which subscription tier you'll choose, with your reasoning",
        estimatedTime: "5-10 minutes",
        starterPrompt:
          "My chosen plan: [Basic/Standard/Pro/Mega]\n\nReasoning:\n- Expected usage frequency: [daily/weekly/monthly]\n- Commercial needs: [yes/no/don't know yet]\n- Privacy requirements: [need stealth/not needed]\n- Budget consideration: [your notes]",
        successCriteria: [
          "You reviewed all available subscription tiers",
          "You considered your actual usage needs (not just wanting the 'best' one)",
          "You documented your choice and reasoning",
          "You know what features are included in your chosen plan",
        ],
      },
    },
    // ===========================================================================
    // SECTION 15: Completion
    // ===========================================================================
    {
      id: "section-15",
      type: "completion",
      content: {
        title: "Chapter 1 Complete!",
        description:
          "You've finished the Getting Started chapter. You understand Midjourney's models, can navigate Discord, have created your first image, and know how subscriptions work. In Chapter 2, we'll dive deep into prompt engineering—the skill that transforms basic images into stunning visuals.",
        xpReward: 100,
        buttonText: "Start Chapter 2: Prompts",
      },
    },
  ],
};
