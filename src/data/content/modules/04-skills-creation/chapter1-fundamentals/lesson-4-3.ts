/**
 * Lesson 4.3: Social Media & Newsletters
 *
 * PURPOSE: Learn to use AI for creating engaging marketing content
 *
 * CONTEXT: Third lesson of Module 4 (Creation). Focuses on content marketing
 * channels like social media and email newsletters.
 *
 * KEY RESPONSIBILITIES:
 * - Teach social media post creation with AI
 * - Show newsletter writing techniques
 * - Demonstrate platform-specific optimization
 * - Explain content calendar creation
 * - Emphasize brand voice consistency
 *
 * IMPLEMENTATION NOTES:
 * - 13-minute lesson with comprehensive examples
 * - Covers multiple platforms (LinkedIn, Twitter, Instagram, etc.)
 * - Focuses on consistency and engagement
 * - XP Calculation: Base 125 x 1.0 (10-20min) x 1.0 (Beginner) + 30 (2 quizzes x 10 + 1 checkpoint x 10) = 155 XP
 *
 *
 * DEPENDENCIES:
 * - Module 1 (Foundation): Basic AI familiarity
 * - Lesson 4.1: AI as Writing Partner (prerequisite)
 *
 * @see lesson-4-1.ts - Prerequisite: basic AI writing collaboration
 * @see lesson-4-4.ts - Builds on this with ad copy
 * @created 2026-02-06
 */

import type { Lesson, LessonSection } from "@/types/content";

export const lesson_4_3: Lesson = {
  id: "lesson-4-3",
  chapterId: "ch1-fundamentals",
  moduleId: "04-skills-creation",
  lessonCategory: "tutorial",
  title: "Social Media & Newsletters",
  description:
    "Create engaging social media content and newsletters that resonate with your audience while saving hours of creative time.",
  order: 3,
  estimatedMinutes: 13,
  xpReward: 155,
  format: "article",
  coverImage: "/images/courses/lessons/modules/artist-palette-and-creative-tools.webp",
  coverTitle: "Social Media & Newsletters",
  sections: [
    // ==========================================================================
    // HERO SECTION
    // ==========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/04-skills-creation/lesson-4-3-cover.webp",
        imageAlt: "Social Media & Newsletters",
        title: "Social Media & Newsletters",
        subtitle: "Consistent content without the burnout. AI ideates, you curate.",
      },
    },

    // ==========================================================================
    // SECTION 1: Introduction
    // ==========================================================================
    {
      id: "s1-intro",
      type: "text",
      content: {
        title: "The Content Treadmill",
        paragraphs: [
          "Social media demands constant posting. Newsletters need weekly or monthly content. And it all needs to be engaging, on-brand, and valuable.",
          "No wonder so many businesses struggle with consistency. Who has time to create all this content?",
          "AI doesn't just save time. It makes consistency possible.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: Comparison
    // ==========================================================================
    {
      id: "s2-comparison",
      type: "text",
      content: {
        title: "Content Creation: Solo vs. AI-Assisted",
        paragraphs: [
          "The difference in output and consistency between working alone and with AI assistance is dramatic. This contrast reveals where AI delivers the most value in your content workflow.",
          "Without AI, content creation is a constant struggle. You brainstorm ideas from scratch, often staring at a blank page for twenty minutes before writing a single word. You write multiple drafts, second-guessing your wording at every turn. You post sporadically when you find time, managing only three or four posts per week despite your best intentions.",
          "With AI as your partner, everything changes. You generate ten ideas in thirty seconds, turning brainstorming from a bottleneck into a firehose of possibilities. You create variations instantly, allowing you to A/B test different approaches without extra effort. You post consistently every day, reaching ten to fifteen posts per week. Better engagement follows from your ability to test and iterate rapidly.",
        ],
      },
    },

    // ==========================================================================
    // SCENARIO CARD: Social Media Workflow
    // ==========================================================================
    {
      id: "scenario-social-workflow",
      type: "scenarioCard",
      content: {
        title: "Real-World Scenario: The Content Crunch",
        situation:
          "Maya runs marketing for a growing SaaS startup. Her CEO wants daily LinkedIn posts, a weekly newsletter, and consistent Twitter presence. She's currently managing 3-4 posts per week and missing newsletter deadlines.",
        challenge:
          "She needs to 3x her content output without hiring help or working weekends. The content still needs to feel authentic and drive engagement.",
        context:
          "Maya has been writing everything from scratch, spending 2+ hours per LinkedIn post.",
        outcome:
          "Using AI, Maya now batch-creates content in 2-hour sessions. She generates 20 post ideas in 10 minutes, drafts 10 posts in an hour, and schedules everything. Her newsletter now goes out consistently every week.",
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Social Media Content Workflow
    // ==========================================================================
    {
      id: "highlight-workflow",
      type: "highlightCard",
      content: {
        heading: "Social Media Content Workflow",
        insights: [
          "1. Input Topic: Give AI your core idea or theme",
          "2. Generate Options: Get 5-10 post variations to choose from",
          "3. Select & Edit: Pick the best, add your voice",
          "4. Platform Optimize: Adapt for each platform's style",
          "5. Schedule & Post: Add to your content calendar",
        ],
      },
    },

    // ==========================================================================
    // QUICK PROMPT: LinkedIn Content Prompt
    // ==========================================================================
    {
      id: "s4-linkedin-example",
      type: "quickPrompt",
      content: {
        heading: "LinkedIn Content Prompt",
        description: "Use this structure for LinkedIn thought leadership posts:",
        promptText:
          "Topic: [Your core idea or theme]\n\nTarget Audience: [Who are they? What do they care about?]\n\nMy Angle: [Your unique perspective or take]\n\nFormat: LinkedIn post with: hook (surprising insight), 3-4 key points as bullet list, engagement question, relevant hashtags\n\nTone: Professional but conversational, not preachy, acknowledge complexity",
        placeholders: ["Topic", "Audience", "Unique angle"],
      },
    },

    // ==========================================================================
    // SECTION 3: Post Evolution
    // ==========================================================================
    {
      id: "s5-post-evolution",
      type: "text",
      content: {
        title: "Your Polish Made the Difference",
        paragraphs: [
          "AI generates a solid draft. Your edits make it authentic and engaging. Understanding this transformation helps you see exactly where your human contribution matters most.",
          "The AI draft often has a generic hook that could apply to anyone. The tips, while accurate, feel interchangeable—they lack your unique perspective. There's no personal experience to ground the advice in reality. The engagement question at the end is weak, unlikely to spark meaningful conversation.",
          "Your final version transforms every element. You write a provocative hook about async communication that grabs attention immediately. You include a specific data point—40% increase—that grounds your claims in evidence. You share your actual experience, the real story that only you can tell. And you craft a specific question that drives genuine engagement from your audience.",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 1
    // ==========================================================================
    {
      id: "q1-platforms",
      type: "quiz",
      content: {
        quiz: {
          question: "Which platform requires the most professional tone?",
          options: ["TikTok", "LinkedIn", "Instagram", "Twitter/X"],
          correctAnswer: 1,
        },
        context: "LinkedIn is for professional networking and thought leadership.",
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: One Idea, Four Platforms
    // ==========================================================================
    {
      id: "highlight-platforms",
      type: "highlightCard",
      content: {
        heading: "One Idea, Four Platforms",
        insights: [
          "LinkedIn: Professional tone, 2-3 line paragraphs, include hashtags, end with question",
          "Twitter/X: Punchy, thread-ready, under 280 chars or use thread format",
          "Instagram: Visual-first, carousel for education, saveable content",
          "Facebook: Conversational, community feel, longer-form OK, ask questions",
        ],
      },
    },

    // ==========================================================================
    // SECTION 4: Newsletter Section
    // ==========================================================================
    {
      id: "s8-newsletter",
      type: "textWithImage",
      content: {
        title: "Newsletters That Get Read",
        paragraphs: [
          "Great newsletters share these characteristics that AI can help you achieve.",
          "Each newsletter should have ONE main topic. Start with a genuine thought. Use scannable structure with headings and bullets. Give value before you ask. End with an engagement hook.",
        ],
        image: {
          src: "/images/courses/lessons/abstract-data-flow.jpg",
          alt: "Newsletter structure diagram",
          caption: "One topic. Genuine voice. Scannable structure. Value first.",
        },
      },
    },

    // ==========================================================================
    // QUICK PROMPT: Content Calendar Prompt
    // ==========================================================================
    {
      id: "s10-calendar",
      type: "quickPrompt",
      content: {
        heading: "Content Calendar Prompt",
        description: "Generate a full month of content in one session:",
        promptText:
          "Create a 30-day content calendar for [platform].\n\nMy themes: [list 3-5 main topics]\nMy audience: [who they are]\nMy goals: [engagement, leads, awareness]\nPosting frequency: [daily, 3x/week, etc.]\nContent mix: [% educational, % promotional, % personal]\n\nFor each day, suggest: Topic/angle, Format (carousel, video, text post), Goal, Call to action",
        placeholders: ["Platform", "Themes", "Audience", "Goals", "Frequency"],
      },
    },

    // ==========================================================================
    // CHECKPOINT
    // ==========================================================================
    {
      id: "c1-checkpoint",
      type: "checkpoint",
      content: {
        question: "What's the optimal content mix for most social media strategies?",
        options: [
          "100% promotional content",
          "80% value, 20% promotion",
          "50% value, 50% promotion",
          "20% value, 80% promotion",
        ],
        correctAnswer: 1,
        hint: "Give before you ask. Most people will tune out constant selling.",
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: CTA Comparison
    // ==========================================================================
    {
      id: "highlight-ctas",
      type: "highlightCard",
      content: {
        heading: "Call-to-Action: Weak vs. Strong",
        insights: [
          'WEAK: "Let me know your thoughts in the comments" - Nobody does this',
          'WEAK: "Like and follow for more content" - Pure self-interest',
          'WEAK: "Check out the link in bio" - No reason to click',
          'STRONG: "What\'s YOUR biggest productivity challenge? Drop it below" - Specific question',
          'STRONG: "Save this for when you\'re planning your next project" - Value-driven',
          'STRONG: "Click the link to get the exact template I used to save 10 hours" - Clear benefit',
        ],
      },
    },

    // ==========================================================================
    // SECTION 5: Maintaining Voice
    // ==========================================================================
    {
      id: "s13-voice",
      type: "text",
      content: {
        title: "Maintaining Your Voice",
        paragraphs: [
          "The fear with AI content: everything sounds generic.",
          "The solution: Your voice checklist. Before publishing, ask yourself: Would I say it this way? Does this reflect my actual opinions? Is there a personal story or example? Am I overusing popular phrases?",
          "AI drafts. You ensure it sounds like you.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Batch Workflow
    // ==========================================================================
    {
      id: "highlight-batch",
      type: "highlightCard",
      content: {
        heading: "Batch Content Creation Workflow",
        insights: [
          "1. Choose Themes: Pick 3-5 topics for the week/month",
          "2. Generate Calendar: AI creates day-by-day content plan",
          "3. Draft in Bulk: Create all posts in one session",
          "4. Review & Refine: Add your voice, ensure quality",
          "5. Schedule: Upload to scheduling tool",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 2
    // ==========================================================================
    {
      id: "q2-consistency",
      type: "quiz",
      content: {
        quiz: {
          question: "What's the biggest advantage of batch content creation?",
          options: [
            "You write everything faster",
            "AI creates better content when you batch",
            "Consistency becomes sustainable without daily stress",
            "You can use the same content everywhere",
          ],
          correctAnswer: 2,
        },
        context: "Batching makes consistency achievable even during busy weeks.",
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Content Mistakes
    // ==========================================================================
    {
      id: "highlight-mistakes",
      type: "highlightCard",
      content: {
        heading: "Content Mistakes to Avoid",
        insights: [
          "Posting AI as-is: AI drafts need your voice and review. Never publish without editing.",
          "Ignoring Comments: Post-comment interaction is where relationships are built",
          "Wrong Platform: LinkedIn content doesn't work on TikTok. Adapt for each platform",
          "Overselling: 80% value, 20% promotion. More selling = less engagement",
          "Inconsistent Posting: Algorithm favors consistency. Use AI to maintain steady output",
          "No Engagement Hook: Posts without questions or CTAs get less engagement",
        ],
      },
    },

    // ==========================================================================
    // SECTION 6: Closing
    // ==========================================================================
    {
      id: "s17-closing",
      type: "text",
      content: {
        title: "Consistency is Now Possible",
        paragraphs: [
          "The biggest challenge with social media and newsletters wasn't ideas. It was time.",
          "AI solves the time problem. You can now: Post daily across multiple platforms, Send weekly newsletters without stress, Test different approaches and learn what works, Stay consistent even during busy weeks.",
          "The content treadmill just became manageable.",
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
        action: "Create social media and newsletter content",
        task: "Generate content calendars, posts, and platform-specific variations",
        feature: "Quick iteration for multiple content formats and platforms",
        tip: "Batch your content creation by asking ChatGPT to generate a full week of posts at once",
      },
    },

    // ==========================================================================
    // ACTIONABLE TASK
    // ==========================================================================
    {
      id: "main-challenge",
      type: "actionableTask",
      content: {
        title: "Create Your Content Calendar",
        purpose:
          "Build a sustainable content system that keeps you consistent without burning out.",
        instructions: [
          "Choose ONE platform to focus on (LinkedIn, Twitter, Instagram, or newsletter)",
          "Give AI your expertise areas (5-10 topics you could post about)",
          "Generate a 30-day content calendar with AI",
          "Create the first week of posts using AI assistance",
          "Add your personal voice, stories, and opinions to each post",
        ],
        deliverable: "A 30-day content calendar and 7 drafted posts ready to schedule",
        estimatedTime: "20-30 minutes",
        successCriteria: [
          'Your calendar has specific topics for each day (not just "post something")',
          "Each post includes a clear hook and engagement-driving question",
          "You added personal stories or opinions AI couldn't generate",
          "The content mix follows 80% value, 20% promotion",
          "You have a realistic plan for staying consistent",
        ],
      },
    },
  ] as LessonSection[],
};
