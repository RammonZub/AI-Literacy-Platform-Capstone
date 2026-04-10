/**
 * Lesson 4.1: AI as Your Writing Partner
 *
 * PURPOSE: Introduce AI as a collaborative writing partner, not a replacement
 *
 * CONTEXT: First lesson of Module 4 (Creation). Establishes the fundamental
 * mindset that AI is a tool for collaboration, not replacement, in writing tasks.
 *
 * KEY RESPONSIBILITIES:
 * - Show how AI overcomes writer's block
 * - Explain what AI can and can't do in writing
 * - Teach the collaboration workflow
 * - Provide real examples (email, report, social post)
 * - Emphasize that human expertise remains essential
 *
 * IMPLEMENTATION NOTES:
 * - 12-minute lesson with comprehensive coverage
 * - Uses before/after examples extensively
 * - Progressive: starts with problem, shows solution, provides practice
 * - All examples use business contexts (emails, reports, social posts)
 * - XP Calculation: Base 125 x 1.0 (10-20min) x 1.0 (Beginner) + 30 (2 quizzes x 10 + 1 checkpoint x 10) = 155 XP
 *
 *
 * DEPENDENCIES:
 * - Module 1 (Foundation): Basic AI familiarity
 * - Module 2 (Productivity): Context concepts
 * - Module 3 (Prompting): C-RT-F framework
 *
 * @see lesson-4-2.ts - Builds on this with reports and proposals
 * @created 2026-02-06
 */

import type { Lesson, LessonSection } from "@/types/content";

export const lesson_4_1: Lesson = {
  id: "lesson-4-1",
  chapterId: "ch1-fundamentals",
  moduleId: "04-skills-creation",
  lessonCategory: "theory",
  title: "AI as Your Writing Partner",
  description:
    "Discover how to collaborate with AI to create professional content faster while maintaining your unique voice.",
  order: 1,
  estimatedMinutes: 12,
  xpReward: 155,
  format: "article",
  coverImage: "/images/courses/lessons/modules/creative-design-and-illustration-process.webp",
  coverTitle: "AI as Your Writing Partner",
  sections: [
    // ==========================================================================
    // HERO SECTION
    // ==========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/04-skills-creation/lesson-4-1-cover.webp",
        imageAlt: "AI as Your Writing Partner",
        title: "AI as Your Writing Partner",
        subtitle: "End the blank page struggle. AI drafts, you direct, together you create.",
      },
    },

    // ==========================================================================
    // SECTION 1: Introduction - The Writing Challenge
    // ==========================================================================
    {
      id: "s1-intro",
      type: "text",
      content: {
        title: "The Writing Challenge",
        paragraphs: [
          "We've all been there. Staring at a blank page. The cursor blinking. Minutes ticking by.",
          "Writer's block isn't about lacking ideas. It's about getting stuck getting them onto paper.",
          "What if you had a partner who could help you start, keep you going, and polish your work?",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: Comparison - Old vs New approach
    // ==========================================================================
    {
      id: "s2-comparison",
      type: "text",
      content: {
        title: "Writing Alone vs. Writing with AI",
        paragraphs: [
          "The difference between writing alone and collaborating with AI is dramatic.",
          "When writing alone, you stare at a blank page for twenty minutes before putting down a single word. The first draft takes two hours of struggle. You get stuck on phrasing and second-guess every word choice. The polishing phase adds another hour. The total process consumes over three hours of mental energy.",
          "With AI as your partner, everything changes. You generate a complete outline in two minutes. The draft comes together in thirty minutes instead of hours. When you get stuck, AI offers instant alternatives. Refining becomes a collaborative conversation rather than a solitary struggle. The final polish takes just fifteen minutes. The entire process takes forty-seven minutes instead of three hours, freeing up more than two hours for strategic thinking and creativity.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: AI Writing Superpowers
    // ==========================================================================
    {
      id: "highlight-ai-strengths",
      type: "highlightCard",
      content: {
        heading: "What AI Does Well",
        insights: [
          "Start Writing: Break through writer's block with prompts, outlines, and first drafts",
          "Rephrase: Instantly rewrite sentences in different tones and styles",
          "Expand Ideas: Turn bullet points into full paragraphs or sections",
          "Condense: Summarize long documents into key points",
          "Adjust Tone: Make text more formal, casual, persuasive, or friendly",
        ],
      },
    },

    // ==========================================================================
    // SECTION 3: What AI Can't Do
    // ==========================================================================
    {
      id: "s5-ai-cannot",
      type: "text",
      content: {
        title: "What AI Can't Do (Yet)",
        paragraphs: [
          "These are exclusively human capabilities that AI cannot replace.",
          "Your experience is uniquely yours. AI lacks the life lessons, professional milestones, failures, and victories that shape how you see the world. When you write from experience, you bring authenticity that no machine can replicate.",
          "Original ideas remain a human strength. AI remixes and recombines existing content, but it cannot generate truly novel insights or breakthrough thinking. The spark of creativity, the unexpected connection, the paradigm-shifting perspective, these come from human minds.",
          "Context is another human domain. AI does not know your audience's unspoken concerns, your company's inside jokes and culture, or the history behind your current projects. This contextual intelligence shapes every decision you make as a writer.",
          "Strategic judgment requires human wisdom. AI can generate options, but it cannot decide which ones matter most. It cannot weigh trade-offs, anticipate reactions, or make the difficult calls about what to include and what to cut.",
          "Finally, relationships are fundamentally human. AI cannot read the emotional cues in a room, navigate office politics, or understand the delicate dynamics between colleagues. These social skills are essential for communication that truly connects.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 4: The Collaboration Workflow
    // ==========================================================================
    {
      id: "s6-workflow",
      type: "textWithImage",
      content: {
        title: "The AI Writing Workflow",
        paragraphs: [
          "Follow this four-step process for every writing task.",
          "First, set direction by telling AI what you need, who it's for, and the goal. Second, generate a draft based on your brief. Third, review and add your expertise, voice, and corrections. Finally, refine together to polish and perfect.",
        ],
        image: {
          src: "/images/courses/lessons/abstract-blue.jpg",
          alt: "Collaborative workflow diagram showing four steps",
          caption: "Direction -> Generate -> Review -> Refine",
        },
      },
    },

    // ==========================================================================
    // QUIZ 1
    // ==========================================================================
    {
      id: "q1-workflow",
      type: "quiz",
      content: {
        quiz: {
          question: "What is the correct order of the AI writing workflow?",
          options: [
            "Generate -> Set Direction -> Review -> Refine",
            "Set Direction -> Generate -> Review -> Refine",
            "Review -> Generate -> Set Direction -> Refine",
            "Generate -> Review -> Refine -> Set Direction",
          ],
          correctAnswer: 1,
        },
        context: "Remember: direction comes first, then AI creates the draft.",
      },
    },

    // ==========================================================================
    // SECTION 5: Real Example - Difficult Email
    // ==========================================================================
    {
      id: "s7-email-intro",
      type: "text",
      content: {
        title: "Real Example: Difficult Email",
        paragraphs: [
          "You need to decline a meeting request without burning bridges. Here's how AI helps.",
          "The key is giving AI the right context about the situation, your relationship, and your goals.",
        ],
      },
    },

    // ==========================================================================
    // QUICK PROMPT: Email Prompt Template
    // ==========================================================================
    {
      id: "s8-email-prompt",
      type: "quickPrompt",
      content: {
        heading: "Your Prompt to AI",
        description: "Use this structured prompt for declining a meeting professionally:",
        promptText:
          "Context: I need to decline a meeting invitation from a client. We're fully booked this week, but I want to maintain the relationship and show we value their business.\n\nTone: Professional, warm, apologetic but confident\n\nGoal: Decline the meeting, suggest alternative times, reaffirm commitment\n\nLength: Brief (under 150 words)",
        placeholders: ["Client name", "Specific dates", "Alternative times"],
      },
    },

    // ==========================================================================
    // SECTION 6: Email Evolution - AI Draft
    // ==========================================================================
    {
      id: "s9-email-ai",
      type: "text",
      content: {
        title: "AI Draft Generation",
        paragraphs: [
          "AI generates a professional draft based on your prompt. It captures all the key elements but may be overly formal.",
          "The AI draft opens with a professional greeting and maintains a clear, logical structure throughout. It provides a clear explanation of the situation, explaining why you cannot attend the meeting. The decline is polite and includes reasoning that shows respect for the other party's time.",
          "The draft also includes alternative time suggestions, demonstrating your willingness to meet despite the scheduling conflict. Finally, it reaffirms the value of the relationship, ensuring the recipient knows this decline is about timing, not lack of interest.",
          "This gives you a solid foundation to build upon. Your job is to add the personal touches that transform a good email into a great one.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 7: Email Evolution - Final Version
    // ==========================================================================
    {
      id: "s11-email-final",
      type: "textWithImage",
      content: {
        title: "The Final Email",
        paragraphs: [
          "After your edits, the email sounds like YOU - professional yet warm, direct yet tactful.",
          "The combination of AI's structure + your voice = perfect email.",
        ],
        image: {
          src: "/images/courses/lessons/abstract-data-flow.jpg",
          alt: "Email evolution from AI draft to final polished version",
          caption: "AI provides structure. You add the human touch.",
        },
      },
    },

    // ==========================================================================
    // CHECKPOINT
    // ==========================================================================
    {
      id: "c1-checkpoint",
      type: "checkpoint",
      content: {
        question: "Which of these is YOUR unique contribution that AI cannot provide?",
        options: [
          "Grammar and spelling corrections",
          "Strategic business judgment about what metrics matter most",
          "Sentence structure and flow improvements",
          "Multiple formatting options for documents",
        ],
        correctAnswer: 1,
        hint: "Think about what requires deep business understanding and context.",
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: LinkedIn Post Success
    // ==========================================================================
    {
      id: "highlight-linkedin",
      type: "highlightCard",
      content: {
        heading: "Real Example: LinkedIn Post",
        insights: [
          "Your Notes: Raw ideas from a conference or event",
          "AI-Generated Post: Professional hook, specific insight, company connection, engagement question",
          "Your Polish: Add genuine excitement, connect to actual results, make question more specific, add relevant hashtags",
        ],
      },
    },

    // ==========================================================================
    // SECTION 8: Report Example
    // ==========================================================================
    {
      id: "s13-report",
      type: "textWithImage",
      content: {
        title: "Real Example: Quarterly Report Summary",
        paragraphs: [
          "You need to summarize quarterly results for executives. AI turns pages of data into a clear narrative.",
          "AI accurately presents the data. But you add the strategic context AI can't know.",
        ],
        image: {
          src: "/images/courses/lessons/wave-pattern.jpg",
          alt: "Data visualization showing quarterly performance",
          caption: "AI presents data. You provide strategic interpretation.",
        },
      },
    },

    // ==========================================================================
    // QUICK PROMPT: Starter Templates
    // ==========================================================================
    {
      id: "s15-templates",
      type: "quickPrompt",
      content: {
        heading: "Starter Prompt Templates",
        description: "Copy and adapt these templates for common writing tasks:",
        promptText:
          "EMAIL: Write an email to [person] about [topic]. Tone: [tone]. Goal: [outcome]. Keep it under [length].\n\nREPORT SECTION: Summarize this data for [audience]. Focus on [key metrics]. Format as [structure]. Highlight [insights].\n\nSOCIAL POST: Create a [platform] post about [topic]. Hook: [angle]. Include: [elements]. Tone: [style]. Add relevant hashtags.",
        placeholders: ["Person/audience", "Topic", "Tone", "Goal", "Length", "Platform"],
      },
    },

    // ==========================================================================
    // SECTION 9: Prompt Quality Matters
    // ==========================================================================
    {
      id: "s16-prompt-quality",
      type: "text",
      content: {
        title: "Prompt Quality Matters",
        paragraphs: [
          "The specificity of your prompt directly impacts the quality of AI's output. A vague prompt produces vague results; a specific prompt produces targeted, useful output.",
          "Consider the difference between these two approaches. A vague prompt like \"Write a marketing email\" produces generic, cookie-cutter output that doesn't fit your brand or resonate with your audience. You'll spend significant time editing to make it relevant.",
          'A specific prompt transforms the result: "Write a marketing email for our SaaS product. Target: marketing managers overwhelmed with tools. Offer: free audit. Tone: empathetic but confident." This produces targeted, relevant content that needs only minor tweaks. The extra thirty seconds you spend on specificity saves you twenty minutes of editing.',
        ],
      },
    },

    // ==========================================================================
    // QUIZ 2
    // ==========================================================================
    {
      id: "q2-prompts",
      type: "quiz",
      content: {
        quiz: {
          question: "Which prompt will produce better results?",
          options: [
            '"Write a sales email"',
            '"Write a sales email for our project management tool targeting startup founders who are overwhelmed by spreadsheets. Offer a free 30-minute consultation. Tone: confident but understanding."',
            '"Create something that sells stuff"',
            '"Make an email that\'s not too long"',
          ],
          correctAnswer: 1,
        },
        context: "Specific prompts with clear context, audience, and goals produce better results.",
      },
    },

    // ==========================================================================
    // SECTION 10: Time Savings Stats
    // ==========================================================================
    {
      id: "s18-stats",
      type: "text",
      content: {
        title: "The Impact of AI Writing",
        paragraphs: [
          "The collaboration approach delivers measurable improvements in productivity and quality.",
          "Email writing becomes 60% faster on average. Report drafting saves 45% of time. Social content output increases 70% while maintaining quality.",
          "The best writing combines AI's speed with your humanity.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Key Principle
    // ==========================================================================
    {
      id: "highlight-closing",
      type: "highlightCard",
      content: {
        heading: "Your Voice Still Matters",
        insights: [
          "AI doesn't replace your voice. It amplifies it.",
          "Think of AI like a power tool for writing. You're still the craftsman.",
          "The blank page is no longer something to fear. It's just the starting point for your next collaboration.",
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
        action: "Collaborate on writing tasks",
        task: "Draft emails, reports, and social content with AI assistance",
        feature: "Generate structured drafts from your context and goals",
        tip: "Give ChatGPT specific details about your audience and tone for better results",
      },
    },

    // ==========================================================================
    // ACTIONABLE TASK
    // ==========================================================================
    {
      id: "main-challenge",
      type: "actionableTask",
      content: {
        title: "Your First AI Writing Collaboration",
        purpose: "Put the AI writing workflow into practice with a real task from your work.",
        instructions: [
          "Pick ONE writing task you have this week: a work email (follow-up, request, decline), a report section or summary, or a social media post",
          "Give AI clear context: who is it for, what's the goal, what tone do you need",
          "Generate a first draft with AI",
          "Edit and add your expertise: your voice, your context, your judgment",
        ],
        deliverable: "A completed piece of writing using the AI collaboration workflow",
        estimatedTime: "10-15 minutes",
        successCriteria: [
          'You gave AI specific context (not just "write an email")',
          "The AI draft captured your intent but needed your polish",
          "You added at least one element AI couldn't know (personal context, specific details, your voice)",
          "You compared the time to your normal writing process",
        ],
      },
    },
  ] as LessonSection[],
};
