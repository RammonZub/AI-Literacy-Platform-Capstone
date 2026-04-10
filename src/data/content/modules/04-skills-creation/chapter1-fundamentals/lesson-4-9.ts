/**
 * Lesson 4.9: Repurpose One Source Many Ways
 *
 * PURPOSE: Learn to efficiently repurpose content across multiple formats and channels
 *
 * KEY CONCEPTS:
 * - Content repurposing strategy
 * - Format adaptation techniques
 * - Platform-specific optimization
 * - Efficient content workflows
 * - Maximizing content ROI
 *
 * - Original: 20 slides → Converted to 17 sections
 * - Added 2 quizzes (after sections 5 and 10)
 * - Added 1 checkpoint (after section 14)
 * - XP: 125 (base) × 0.9 (11min) × 1.0 (intermediate) + 20 (quizzes) + 5 (checkpoint) = 137.5 → 138 XP
 *
 * @created 2025-02-03
 * @modified 2026-02-06 - Converted to article format with quizzes and checkpoint
 * @modified 2026-02-23 - Added heroImage, lessonCategory, inline actionableTask, highlightCard, textWithImage, comparisonTable, quickPrompt sections
 */

import type { Lesson, LessonSection } from "@/types/content";

export const lesson_4_9: Lesson = {
  id: "lesson-4-9",
  chapterId: "ch1-fundamentals",
  moduleId: "04-skills-creation",
  title: "Repurpose One Source Many Ways",
  description:
    "Transform one piece of content into dozens of assets across all channels. Work smarter, not harder.",
  order: 9,
  estimatedMinutes: 11,
  xpReward: 138,
  format: "article",
  lessonCategory: "challenge",
  coverImage: "/images/courses/lessons/modules/writing-and-creative-vocabulary.webp",
  coverTitle: "Repurpose One Source Many Ways",

  sections: [
    // ==========================================================================
    // HERO IMAGE SECTION (at start)
    // ==========================================================================
    {
      id: "hero-image",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/04-skills-creation/lesson-4-9-cover.webp",
        imageAlt: "Content repurposing and multi-channel distribution",
        title: "Repurpose One Source Many Ways",
        subtitle: "Create once, distribute everywhere",
      },
    },

    // ==========================================================================
    // SECTION 1: Introduction
    // ==========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Content Repurposing Advantage",
        paragraphs: [
          "Most businesses create content inefficiently.",
          "Write a blog post from scratch.",
          "Write a LinkedIn post from scratch.",
          "Write an email newsletter from scratch.",
          "Create social graphics from scratch.",
          "Hours of work. Ideas exhausted weekly.",
          "Smart businesses do it differently.",
          "Create ONE core piece of content.",
          "Repurpose into 10+ derivatives.",
          "Maintain consistent message everywhere.",
          "Save 80% of content creation time.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Time Savings
    // ==========================================================================
    {
      id: "hc1-time-savings",
      type: "highlightCard",
      content: {
        heading: "The Repurposing Advantage",
        insights: [
          "One core piece can become 10+ derivative content pieces",
          "Save 80% of content creation time with smart repurposing",
          "Consistent messaging across all channels builds brand recognition",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: One-Off vs. Repurposed
    // ==========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Content Creation: One-Off vs. Repurposed",
        paragraphs: [
          "The difference in efficiency between one-off creation and strategic repurposing is dramatic. This comparison reveals why shifting your approach transforms your content capacity.",
          "One-off creation is the default for most teams, but it's incredibly inefficient. Each piece starts from scratch, requiring five hours per piece on average. Ten pieces means fifty hours of work. Messages may be inconsistent across pieces because each is created independently. Burnout comes from constant ideation—you're always searching for the next idea. Consistency becomes hard to maintain when everything is created fresh.",
          "A repurposing strategy changes the equation entirely. You create one core piece in five hours, then repurpose it into ten pieces in another five hours. The total is just ten hours for ten pieces. Your message stays consistent everywhere because all derivatives come from the same source. One idea generates maximum impact across all channels. The effective time per final piece drops to one hour.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 3: The Repurposing Framework
    // ==========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "The Repurposing Framework",
        paragraphs: [
          "Efficient repurposing follows a five-step framework that maximizes the value of every piece of content you create.",
          "Step one is creating your core content. Develop one comprehensive piece—whether that's a guide, video, or webinar—that thoroughly covers your topic. This becomes the source material for everything that follows, so invest the time to make it excellent.",
          "Step two is extraction. Pull out key points, quotes, statistics, and stories from your core piece. These elements become the raw material for derivative content. A 2,000-word guide might yield 10 quotable insights, 3 compelling statistics, and 5 illustrative stories.",
          "Step three is adaptation. Transform your extracts for each platform and format. A key point that becomes a LinkedIn post needs different framing than the same point adapted for a Twitter thread or Instagram carousel. The core message stays the same; the presentation changes.",
          "Step four is distribution. Publish across all channels strategically, timing your content for maximum impact on each platform. Step five is archiving. Save an organized library of your content for future reuse. Tag it by topic, format, and performance so you can find and repromote winners later.",
        ],
      },
    },

    // ==========================================================================
    // COMPARISON TABLE: Repurposing Formats
    // ==========================================================================
    {
      id: "comparison-repurposing",
      type: "comparisonTable",
      content: {
        title: "Content Repurposing: Blog to Multi-Channel",
        intro: "See how one blog post transforms into content for every platform:",
        columns: [
          { name: "Source", description: "Original content", recommended: true },
          { name: "LinkedIn", description: "Professional network" },
          { name: "Twitter/X", description: "Micro-content" },
          { name: "Email", description: "Direct to inbox" },
          { name: "Video", description: "Visual/YouTube" },
        ],
        rows: [
          {
            feature: "Format",
            values: [
              "2,000-word guide",
              "1,200-word article",
              "10-tweet thread",
              "600-word newsletter",
              "8-minute script",
            ],
          },
          {
            feature: "Hook",
            values: [
              "Full context",
              "Key insight only",
              "Surprising stat",
              "Personal benefit",
              "Visual teaser",
            ],
          },
          {
            feature: "Depth",
            values: [
              "Comprehensive",
              "Condensed",
              "Bullet points",
              "Key takeaways",
              "Spoken overview",
            ],
          },
          {
            feature: "CTA",
            values: [
              "Related resources",
              "Comment question",
              "Follow for more",
              "Read full guide",
              "Subscribe link",
            ],
          },
          {
            feature: "AI Task",
            values: [
              "Original creation",
              "Summarize for LinkedIn",
              "Break into thread",
              "Extract key points",
              "Convert to script",
            ],
          },
        ],
        footer:
          "Each format maintains the core message while adapting to platform conventions and audience expectations.",
      },
    },

    // ==========================================================================
    // QUIZ 1: Test understanding of content hierarchy
    // ==========================================================================
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "Let's check your understanding of content hierarchy.",
        quiz: {
          question: "What's the correct order of content hierarchy from largest to smallest?",
          options: [
            "Micro → Short → Mid → Core",
            "Core → Mid → Short → Micro",
            "Short → Mid → Core → Micro",
            "Mid → Core → Micro → Short",
          ],
          correctAnswer: 1,
        },
      },
    },

    // ==========================================================================
    // SECTION 5: Real Example - Blog to 10 Derivatives
    // ==========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Real Example: Blog Post → 10 Derivatives",
        paragraphs: [
          'Let\'s walk through a concrete example. Your core content is a 2,000-word blog guide titled "The Complete Guide to Remote Team Productivity." This single piece can become 10 distinct content assets.',
          "Start with the most substantial derivatives: a LinkedIn article at 1,200 words (a condensed version for professional audiences) and a newsletter at 600 words (key takeaways formatted for email). These long-form pieces capture the guide's main value in different contexts.",
          "Then create social content: a Twitter thread of 10 tweets providing a sequential breakdown, plus 5 individual LinkedIn posts each highlighting one key point from the guide. These drive engagement and awareness across platforms.",
          "Visual content comes next: 5 Instagram carousel slides presenting the framework visually, 3 TikTok scripts for 60-second video tips, and 1 YouTube video script for an 8-minute overview. These formats reach audiences who prefer video and visual learning.",
          "Finally, create shareable assets: 1 infographic data visualization, 5 quote graphics for social sharing, and 1 downloadable PDF checklist. These extend your reach through shares and provide lead magnets for list building. One core piece becomes 10 derivatives that reach your audience across every channel they use.",
        ],
      },
    },

    // ==========================================================================
    // QUICK PROMPT: LinkedIn Repurposing
    // ==========================================================================
    {
      id: "section-6",
      type: "quickPrompt",
      content: {
        heading: "LinkedIn Post Template",
        description: "Transform any content into a LinkedIn post with this prompt:",
        promptText:
          "Turn this [content] into a LinkedIn post. Hook with the most surprising insight. 3-4 key points as bullet list. End with engagement question. Under 1,500 characters.",
        placeholders: ["Content to repurpose", "Target audience", "Main insight to highlight"],
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: Visual Break
    // ==========================================================================
    {
      id: "twi-batch-workflow",
      type: "textWithImage",
      content: {
        title: "Batch Repurposing Workflow",
        paragraphs: [
          "Maximize efficiency by batching your repurposing work.",
          "Create your core content first, whether it's a comprehensive guide or video. Then batch extract all key elements at once using AI. Generate all platform formats in a single session. Review and polish all outputs together.",
          "Finally, schedule everything at once for the next 2-4 weeks.",
        ],
        imageUrl: "/images/courses/modules/04-skills-creation/lesson-4-9-inline-1.webp",
        imageAlt: "Batch content repurposing workflow",
      },
    },

    // ==========================================================================
    // SECTION 8: Fill Your Content Calendar
    // ==========================================================================
    {
      id: "section-8",
      type: "text",
      content: {
        title: "One Core Piece = One Month of Content",
        paragraphs: [
          "A single core piece can fill your entire content calendar for a month when you plan strategically.",
          "Week one focuses on your flagship content. Publish your core blog post, then immediately follow with the LinkedIn article version and your newsletter. These three long-form pieces establish your thought leadership and provide substantial value to different audience segments.",
          "Week two expands your social presence. Deploy your social posts across LinkedIn, Twitter, and Instagram. Space them throughout the week to maintain visibility without overwhelming your audience. Each post links back to your core content, driving traffic and engagement.",
          "Week three brings video content to the forefront. Publish your YouTube video and TikTok clips. Video reaches audiences who prefer watching over reading, and platforms like TikTok can dramatically expand your reach beyond your existing followers.",
          "Week four is for optimization. Repromote your best performers from the first three weeks. Look at your analytics, identify what resonated most, and give those pieces another push. Creating just one core piece per month means you never run out of content while maintaining consistent presence across all channels.",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 2: Test understanding of repurposing workflow
    // ==========================================================================
    {
      id: "quiz-2",
      type: "quiz",
      content: {
        context: "Let's practice understanding repurposing workflow.",
        quiz: {
          question: "What's the key benefit of batch repurposing?",
          options: [
            "You create less content overall",
            "You generate all platform formats in one session for maximum efficiency",
            "You only need to create content once a month",
            "You don't need to review the outputs",
          ],
          correctAnswer: 1,
        },
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Update Strategy
    // ==========================================================================
    {
      id: "hc2-update-strategy",
      type: "highlightCard",
      content: {
        heading: "Keep Content Fresh",
        insights: [
          "Review analytics quarterly to identify winners worth repromoting",
          "Add fresh examples and case studies to evergreen content",
          "Rotate formats: turn blogs into videos, videos into blogs",
        ],
      },
    },

    // ==========================================================================
    // SECTION 9: Keep Content Fresh
    // ==========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Keep Content Fresh: The Update Cycle",
        paragraphs: [
          "Content gets stale over time, but you don't always need to create from scratch. Strategic updates breathe new life into existing content, extending its value indefinitely.",
          "A quarterly review keeps your content library fresh. Check your analytics to see what performed well, then update and repromote those winners. Your best performers from six months ago can become your best performers today with smart updates.",
          "Adding fresh examples makes old content relevant again. New case studies, updated statistics, and recent data points transform dated content into current resources. Format rotation extends reach: turn blog posts into videos for different audiences, or transform videos into blog posts for readers who prefer text.",
          "Seasonal angles connect evergreen content to current events or timely moments. The same fundamental advice becomes newsworthy when tied to a relevant season, holiday, or trending topic. This approach maximizes the value of every piece you create.",
        ],
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: Visual Break
    // ==========================================================================
    {
      id: "twi-content-library",
      type: "textWithImage",
      content: {
        title: "Build Your Content Library",
        paragraphs: [
          "Every piece of content you create is an asset.",
          "Organize by topic/theme, format, performance metrics, and date created. When you need content, search your library first. Update and repromote before creating from scratch.",
          "AI helps organize: feed your content to AI with tags and categories, and it creates a searchable index.",
        ],
        imageUrl: "/images/courses/modules/04-skills-creation/lesson-4-9-inline-1.webp",
        imageAlt: "Content library organization system",
      },
    },

    // ==========================================================================
    // CHECKPOINT: Final knowledge check
    // ==========================================================================
    {
      id: "checkpoint-1",
      type: "checkpoint",
      content: {
        question: "What's the most important principle of content repurposing?",
        options: [
          "Copy the same content everywhere to save time",
          "Adapt core content for each platform while maintaining consistent message",
          "Only create new content, never reuse old content",
          "Repurpose everything without updating it",
        ],
        correctAnswer: 1,
        hint: "Think about balancing efficiency with platform-specific adaptation.",
      },
    },

    // ==========================================================================
    // SECTION 12: Team Repurposing Workflow
    // ==========================================================================
    {
      id: "section-12",
      type: "text",
      content: {
        title: "Team Repurposing Workflow",
        paragraphs: [
          "For larger teams, clear role assignment transforms repurposing from chaotic to systematic. Each team member owns a specific part of the workflow.",
          "The Creator develops the core content—whether that's a blog, video, or podcast. This person focuses on producing one excellent comprehensive piece that captures the full value of the topic. Quality at this stage determines the quality of everything that follows.",
          "The Repurposer uses AI to generate all platform derivatives. They take the core piece and systematically create versions for every channel, using AI to accelerate the process while maintaining message consistency. This role requires understanding both AI capabilities and platform requirements.",
          "The Reviewer polishes each output for brand voice and accuracy. They catch AI hallucinations, ensure tone consistency, and verify that every piece meets quality standards. This quality control step prevents embarrassing mistakes from reaching your audience.",
          "The Scheduler uploads all content to scheduling tools, ensuring strategic timing across platforms. The Analyst tracks performance and identifies winners worth repromoting. Finally, the Librarian organizes the content library for easy reuse, tagging everything by topic, format, and performance. Together, these roles create a content engine that produces consistently high-quality output at scale.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 13: The Repurposing Mindset
    // ==========================================================================
    {
      id: "section-13",
      type: "text",
      content: {
        title: "The Repurposing Mindset",
        paragraphs: [
          'Stop thinking "What should I create today?"',
          'Start thinking "What can I repurpose today?"',
          "Every piece of content is a standalone asset.",
          "Every piece is a source for 10 derivatives.",
          "Every piece is a candidate for future updates.",
          "Every piece is part of your searchable library.",
          "Create once. Repurpose infinitely. Distribute everywhere.",
        ],
      },
    },

    // ==========================================================================
    // TOOL REFERENCE
    // ==========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Repurpose content across formats",
        task: "Transform one core piece into platform-specific variations",
        feature: "Quick adaptation of content for LinkedIn, Twitter, Instagram, and more",
        tip: "Paste your full content into ChatGPT and ask for specific platform formats in a single prompt",
      },
    },

    // ==========================================================================
    // ACTIONABLE TASK SECTION (inline at end)
    // ==========================================================================
    {
      id: "actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Repurpose Your Content",
        purpose:
          "Transform one piece of existing content into multiple platform-specific formats using AI.",
        instructions: [
          "Choose one piece of content you've created (blog post, video, or guide)",
          "Feed it to AI with the context of what you want to create",
          "Generate repurposed versions for LinkedIn (1 article + 3 posts), Twitter (one thread), and Instagram (carousel concept)",
          "Review each output and refine for brand voice",
          "Document what you changed and why for each format",
        ],
        deliverable:
          "Your original content and 2-3 repurposed versions with notes on what you adjusted and why.",
        estimatedTime: "20-30 minutes",
        starterPrompt:
          "I have this content: [paste your content]\n\nTransform it into:\n1. A LinkedIn post (hook + 3-4 bullets + engagement question, under 1,500 characters)\n2. A Twitter thread (8-10 tweets, each under 280 characters)\n3. An Instagram carousel concept (5-7 slides with text for each)\n\nMaintain the core message but adapt the tone and format for each platform.",
        successCriteria: [
          "Each repurposed piece maintains the core message of the original",
          "Format and tone are adapted appropriately for each platform",
          "At least one piece includes a clear call-to-action",
          "You identified and corrected at least one AI-generated element that didn't match your brand",
        ],
      },
    },
  ] as LessonSection[],
};
