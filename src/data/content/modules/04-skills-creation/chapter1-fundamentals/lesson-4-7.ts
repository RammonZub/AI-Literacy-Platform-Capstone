/**
 * Lesson 4.7: Planning with AI
 *
 * PURPOSE: Learn to use AI for strategic content planning and ideation
 *
 * KEY CONCEPTS:
 * - Content strategy development
 * - Editorial calendar creation
 * - Topic ideation and clustering
 * - Audience research insights
 * - Performance forecasting
 *
 * - Original: 24 slides → Converted to 19 sections
 * - Added 2 quizzes (after sections 6 and 12)
 * - Added 1 checkpoint (after section 17)
 * - XP: 125 (base) × 1.0 (13min) × 1.0 (intermediate) + 20 (quizzes) + 5 (checkpoint) = 150 XP
 *
 * @created 2025-02-03
 * @modified 2026-02-06 - Converted to article format with quizzes and checkpoint
 * @modified 2026-02-23 - Added heroImage, lessonCategory, inline actionableTask, highlightCard, textWithImage, quickPrompt sections
 */

import type { Lesson, LessonSection } from "@/types/content";

export const lesson_4_7: Lesson = {
  id: "lesson-4-7",
  chapterId: "ch1-fundamentals",
  moduleId: "04-skills-creation",
  title: "Planning with AI",
  description:
    "Use AI to develop comprehensive content strategies, editorial calendars, and strategic plans that align with your business goals.",
  order: 7,
  estimatedMinutes: 13,
  xpReward: 150,
  format: "article",
  lessonCategory: "tutorial",
  coverImage: "/images/courses/lessons/modules/creative-design-and-illustration-process.webp",
  coverTitle: "Planning with AI",

  sections: [
    // ==========================================================================
    // HERO IMAGE SECTION (at start)
    // ==========================================================================
    {
      id: "hero-image",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/04-skills-creation/lesson-4-7-cover.webp",
        imageAlt: "Strategic content planning with AI",
        title: "Planning with AI",
        subtitle: "Transform chaos into strategic content systems",
      },
    },

    // ==========================================================================
    // SECTION 1: Introduction
    // ==========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Content Planning Challenge",
        paragraphs: [
          "Creating content without a plan is like building without blueprints.",
          "You might make progress, but you won't end up where you want.",
          "Effective content planning requires understanding your audience deeply, mapping content to business goals, maintaining variety and freshness, timing content strategically, and coordinating across channels.",
          "AI excels at all of this.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: AI Planning Superpowers
    // ==========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "AI Planning Superpowers",
        paragraphs: [
          "AI transforms content planning from chaos to strategy. These capabilities fundamentally change how you approach content strategy, making sophisticated planning accessible to everyone.",
          "Infinite ideas flow from AI when you need them. Generate 100 content ideas in seconds from your themes, never facing a blank page again. Pattern recognition identifies content gaps and opportunities you might miss, analyzing your existing content to find underserved topics. Audience insights emerge when AI analyzes what content resonates with different segments, helping you understand what your audience actually wants.",
          "Calendar logic ensures your content timing is strategic rather than random. AI spaces content for maximum impact, avoiding topic fatigue and maintaining variety. Trend spotting connects your content to timely topics and emerging conversations, making your brand relevant to current events. Goal alignment maps every piece to specific business objectives, ensuring your content serves a purpose beyond mere publication.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Key Insight
    // ==========================================================================
    {
      id: "hc1-planning-advantage",
      type: "highlightCard",
      content: {
        heading: "The Planning Advantage",
        insights: [
          "Businesses with documented content strategy are 3x more likely to report success",
          "Planned content gets published 67% more consistently than ad-hoc content",
          "AI can generate a 90-day content calendar in under 5 minutes",
        ],
      },
    },

    // ==========================================================================
    // SECTION 3: Content Strategy Framework
    // ==========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Content Strategy Framework with AI",
        paragraphs: [
          "Building a content strategy with AI follows a five-step framework that takes you from business context to ongoing optimization.",
          "Step one is defining your foundation. Give AI your business context—who are you, who do you serve, and what are your goals? This context shapes every recommendation AI makes, so be thorough. The more AI understands your business, the more relevant its strategic suggestions become.",
          "Step two is the audience deep dive. Describe your target audience in detail, then ask AI to identify their pain points, questions, and content preferences. AI can analyze your audience description and surface insights you might miss, revealing what content would actually resonate.",
          "Step three focuses on content pillars. Ask AI to suggest 3-5 content themes that align with your expertise and audience needs. These pillars become the organizing structure for everything you create, ensuring consistency and coherence across your content library.",
          "Step four is calendar generation. Have AI create a 30-90 day content calendar mapped to your pillars and business cadence. This transforms abstract strategy into concrete publishing plans. Step five is ongoing optimization—review performance, feed data back to AI, and refine your strategy based on what works. This creates a continuous improvement loop that makes your content more effective over time.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 5: Developing Content Pillars
    // ==========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Developing Content Pillars",
        paragraphs: [
          "Content pillars are the foundational themes that anchor your content strategy. Developing them requires finding the intersection of multiple factors.",
          "Start with your expertise by listing what you're uniquely qualified to teach. What knowledge do you have that others don't? What perspective can you offer that's genuinely distinctive? This becomes the substance behind your content.",
          "Next, identify audience needs by finding the problems your audience wants solved. What questions keep them up at night? What challenges do they face daily? The best content pillars address real pain points with your unique expertise.",
          "Then define your business goals by determining what content should achieve for your business. Are you building awareness, generating leads, establishing thought leadership, or driving sales? Your pillars should serve these objectives.",
          "Now comes the AI synthesis step—ask AI to find the overlap between your expertise, audience needs, and business goals, then suggest pillars that hit all three. AI can see patterns and connections you might miss. Finally, select 3-5 pillars that hit the sweet spot. Fewer pillars mean more focus; more pillars mean more variety. Find the balance that works for your capacity and audience.",
        ],
      },
    },

    // ==========================================================================
    // QUICK PROMPT: Content Pillars Example
    // ==========================================================================
    {
      id: "section-6",
      type: "quickPrompt",
      content: {
        heading: "Real Example: Content Pillars for Productivity App",
        description: "Use this prompt template to generate content pillars for your business:",
        promptText:
          "Suggest 5 content pillars for a productivity app targeting professionals 30-50. Our expertise: time management systems, focus techniques, workflow optimization. Audience pain points: overwhelmed, distracted, burnt out. Business goals: build email list, drive trial signups. Each pillar should be broad enough for endless content, specific enough to be memorable.",
        placeholders: [
          "Your business type",
          "Target audience",
          "Your expertise",
          "Audience pain points",
          "Business goals",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 1: Test understanding of content pillars
    // ==========================================================================
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "Let's check your understanding of content pillars.",
        quiz: {
          question: "What's the ideal number of content pillars for a content strategy?",
          options: [
            "1-2 pillars to stay focused",
            "3-5 pillars that balance expertise with audience needs",
            "10+ pillars to cover everything",
            "As many as you can think of",
          ],
          correctAnswer: 1,
        },
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: Visual Break
    // ==========================================================================
    {
      id: "twi-calendar",
      type: "textWithImage",
      content: {
        title: "Creating Editorial Calendars",
        paragraphs: [
          "Transform your content pillars into an actionable publishing schedule.",
          "Define your cadence by deciding how often you'll post and on which platforms. Map pillars by assigning content themes to each day or post. Add variety by mixing formats: educational, inspirational, and promotional.",
          "Plan promotions by scheduling product launches and campaigns. Always leave 20% buffer for timely opportunities.",
        ],
        imageUrl: "/images/courses/modules/04-skills-creation/lesson-4-7-inline-1.webp",
        imageAlt: "Editorial calendar planning visualization",
      },
    },

    // ==========================================================================
    // QUICK PROMPT: Calendar Creation
    // ==========================================================================
    {
      id: "section-8",
      type: "quickPrompt",
      content: {
        heading: "Calendar Creation Prompt Template",
        description: "Copy and customize this prompt to generate your content calendar:",
        promptText:
          "Create a [duration] content calendar for [platforms].\n\nContent Pillars:\n1. [Pillar 1]\n2. [Pillar 2]\n3. [Pillar 3]\n\nPosting Schedule:\n- [Platform]: [frequency]\n- [Platform]: [frequency]\n\nContent Mix:\n- [X]% educational\n- [X]% inspirational\n- [X]% promotional\n\nSpecial Dates:\n- [Event/Launch dates]\n- [Seasonal relevance]\n\nFor each piece, specify:\n- Topic/angle\n- Format\n- Goal\n- Call-to-action",
        placeholders: [
          "Duration",
          "Platforms",
          "Pillar 1",
          "Pillar 2",
          "Pillar 3",
          "Frequency",
          "Percentages",
        ],
      },
    },

    // ==========================================================================
    // SECTION 9: Topic Clustering for SEO
    // ==========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Topic Clustering for SEO",
        paragraphs: [
          "Organize your content strategically to boost search visibility. Topic clustering is a proven SEO strategy that AI can help you implement at scale.",
          "Pillar content forms the foundation—comprehensive guides that cover broad topics in depth. These become the authoritative resources on your site. Cluster content consists of specific articles that link back to the pillar, creating a network of related content that signals topical authority to search engines.",
          "The AI strategy for topic clustering is straightforward. Give AI a pillar topic and ask for 20 cluster article ideas. AI generates variations, questions, and angles you might not have considered. Internal linking maps how each piece connects to others, creating a logical structure that helps both readers and search engines navigate your content.",
          "Keyword mapping assigns target keywords to each piece in the cluster, ensuring comprehensive coverage without keyword cannibalization. Your update strategy plans pillar updates as clusters grow, keeping your authoritative content fresh and comprehensive.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: SEO Tips
    // ==========================================================================
    {
      id: "hc2-seo-tips",
      type: "highlightCard",
      content: {
        heading: "Topic Cluster Benefits",
        insights: [
          "Pillar pages with strong cluster content rank 40% higher in search results",
          "Internal linking through topic clusters improves crawlability and user navigation",
          "AI can identify keyword gaps and content opportunities you might miss",
        ],
      },
    },

    // ==========================================================================
    // SECTION 10: Performance Forecasting
    // ==========================================================================
    {
      id: "section-10",
      type: "text",
      content: {
        title: "Performance Forecasting",
        paragraphs: [
          "Move from guessing to data-informed planning. AI can help you predict content performance before you publish, allowing you to optimize your approach.",
          "Guessing looks like this: \"This should do well.\" It's based on gut feeling with no data to support your prediction. You can't improve next time because you don't know why something succeeded or failed. This approach wastes resources on content that never resonates.",
          'AI-informed planning transforms this process. Instead of hoping, you ask: "Based on topic, format, and timing, what\'s the expected performance?" AI analyzes patterns in similar content to identify success factors. It improves forecasts over time as it learns from your results. You test hypotheses systematically, treating each piece of content as a data point that refines your strategy.',
        ],
      },
    },

    // ==========================================================================
    // SECTION 11: Build Testing into Your Plan
    // ==========================================================================
    {
      id: "section-11",
      type: "text",
      content: {
        title: "Build Testing into Your Plan",
        paragraphs: [
          "Treat your content calendar as a laboratory for continuous improvement. The most successful content strategies don't just publish—they experiment, measure, and optimize.",
          'Start by forming hypotheses. A good hypothesis is specific and testable: "LinkedIn video will outperform text for how-to content" gives you something concrete to prove or disprove. Without a hypothesis, you\'re just publishing randomly.',
          "Next, design tests by planning 3-5 variations of the same core content. This might mean different headlines, formats, lengths, or posting times. The key is changing one variable at a time so you know what caused any performance differences.",
          "Schedule tests strategically by spacing them out in your calendar. You need enough time between variations to gather meaningful data, but not so much that external factors change. Then measure results by tracking engagement and conversions. Look beyond vanity metrics to what actually matters for your goals.",
          "Finally, double down on what works by shifting your calendar toward winning formats. When you find something that performs well, do more of it. This systematic approach transforms content creation from guesswork into a data-driven practice that improves over time.",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 2: Test understanding of content planning
    // ==========================================================================
    {
      id: "quiz-2",
      type: "quiz",
      content: {
        context: "Let's practice content repurposing strategy.",
        quiz: {
          question: "What's the key benefit of planning content repurposing upfront?",
          options: [
            "You create less original content",
            "You can distribute one core idea across multiple formats efficiently",
            "It's faster to create content",
            "You don't need a content calendar",
          ],
          correctAnswer: 1,
        },
      },
    },

    // ==========================================================================
    // SECTION 13: Seasonal & Timely Content
    // ==========================================================================
    {
      id: "section-13",
      type: "text",
      content: {
        title: "Seasonal & Timely Content",
        paragraphs: [
          "AI can identify timely opportunities you might miss. Strategic content planning balances reactive timely content with proactive evergreen content.",
          'Seasonal peaks present predictable opportunities. Ask AI: "What seasonal moments matter to our audience?" The response might reveal industry-specific events, holidays, or annual cycles that should shape your content calendar. Trending topics offer chances for relevance. Ask: "What\'s trending in our industry? How can we authentically contribute?" This helps you join conversations while they\'re happening.',
          'News jacking connects your expertise to current events. Ask: "What recent news connects to our expertise? What\'s our angle?" This positions your brand as a thought leader on relevant developments. Your evergreen buffer ensures stability—keep timely content balanced with evergreen pieces that work anytime, regardless of current events.',
          "The balance matters strategically. Timely content gets traffic spikes but has a short shelf life. Evergreen content builds long-term traffic that compounds over time. Your best strategy combines both: show up for relevant moments while building a library of lasting value.",
        ],
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: Visual Break
    // ==========================================================================
    {
      id: "twi-metrics",
      type: "textWithImage",
      content: {
        title: "Planning for Metrics That Matter",
        paragraphs: [
          "Track what matters for your business goals.",
          "Awareness metrics include impressions, reach, and follower growth. Engagement metrics cover likes, comments, shares, and saves. Conversion metrics track clicks, signups, and purchases. Retention metrics monitor return visitors and email open rates.",
          "Quality over quantity: better to hit 2 goals than miss 10.",
        ],
        imageUrl: "/images/courses/modules/04-skills-creation/lesson-4-7-inline-1.webp",
        imageAlt: "Content performance metrics dashboard",
      },
    },

    // ==========================================================================
    // SECTION 16: Quarterly Planning Cycle
    // ==========================================================================
    {
      id: "section-16",
      type: "text",
      content: {
        title: "Quarterly Planning Cycle",
        paragraphs: [
          "Content strategy is iterative. The most effective approach is to review and refine every quarter, creating a rhythm of continuous improvement.",
          "Start each quarterly cycle by reviewing performance. What worked? What didn't? Why? Look for patterns in your top-performing content and your flops. The insights you gain here inform everything that follows.",
          "Next, update audience insights by feeding your learnings back to AI. Tell it what resonated with your audience and what fell flat. This context helps AI generate better recommendations for the next quarter.",
          "Then adjust your pillars by adding, removing, or refining themes based on what you learned. Maybe one pillar consistently outperforms others—consider expanding it. Maybe another never connects with your audience—consider replacing it.",
          "Generate your new calendar by creating next quarter's plan with your refined strategy. This isn't starting from scratch; it's building on what you've learned. Finally, set experiments by planning new tests and optimizations. What hypotheses do you want to test this quarter? Building experimentation into your planning ensures you're always learning and improving.",
        ],
      },
    },

    // ==========================================================================
    // CHECKPOINT: Final knowledge check
    // ==========================================================================
    {
      id: "checkpoint-1",
      type: "checkpoint",
      content: {
        question: "What's the most important principle of content planning with AI?",
        options: [
          "Plan every single piece of content in advance",
          "Balance strategic planning with flexibility for timely opportunities",
          "Let AI make all the decisions",
          "Never change your plan once it's set",
        ],
        correctAnswer: 1,
        hint: "Think about the balance between planning and spontaneity.",
      },
    },

    // ==========================================================================
    // SECTION 18: AI as Your Content Strategist
    // ==========================================================================
    {
      id: "section-18",
      type: "text",
      content: {
        title: "AI as Your Content Strategist",
        paragraphs: [
          "AI won't replace your strategic brain.",
          "But it will generate more ideas than you ever could alone.",
          "It will find patterns and gaps you might miss.",
          "It will structure vague thoughts into actionable plans.",
          "It will scale planning across channels and team members.",
          "It will enable data-driven iteration.",
          "You provide the vision and judgment.",
          "AI provides the horsepower and structure.",
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
        tool: "claude",
        action: "Develop content strategies and editorial calendars",
        task: "Create content pillars and multi-platform content plans",
        feature: "Strategic thinking for comprehensive content strategy development",
        tip: "Provide Claude with your business goals and audience details for a tailored 90-day content calendar",
      },
    },

    // ==========================================================================
    // ACTIONABLE TASK SECTION (inline at end)
    // ==========================================================================
    {
      id: "actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create Your Content Plan",
        purpose:
          "Build a strategic content plan that aligns with your business goals and audience needs.",
        instructions: [
          "Describe your target audience in detail (demographics, pain points, goals)",
          "List your 3-5 areas of expertise",
          "Ask AI for 5 content pillar suggestions based on your audience and expertise",
          "Generate a 30-day content calendar with topics, formats, and publishing dates",
          "Refine the calendar to match your capacity and brand voice",
        ],
        deliverable:
          "Your audience description, content pillars, and a sample week from your content calendar showing topic, format, and goal for each piece.",
        estimatedTime: "20-30 minutes",
        starterPrompt:
          "Create a 30-day content calendar for [your business] targeting [audience].\n\nOur expertise: [list 3-5 areas]\nAudience pain points: [list 3-5 pain points]\nBusiness goals: [list goals]\n\nPlatforms: [list platforms]\nPosting frequency: [frequency per platform]\n\nContent pillars:\n1. [Pillar 1]\n2. [Pillar 2]\n3. [Pillar 3]\n\nFor each piece, include: date, topic, format, goal, call-to-action.",
        successCriteria: [
          "Audience description includes demographics and audience attitudes",
          "Content pillars clearly connect expertise to audience needs",
          "Calendar includes variety of formats (educational, inspirational, promotional)",
          "Each piece has a clear goal and call-to-action",
        ],
      },
    },
  ] as LessonSection[],
};
