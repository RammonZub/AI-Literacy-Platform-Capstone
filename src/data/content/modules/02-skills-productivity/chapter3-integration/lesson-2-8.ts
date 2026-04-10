/**
 * Lesson 2.8: Building Your AI Productivity System (ARTICLE FORMAT - CHALLENGE)
 *
 * XP CALCULATION:
 * - Base: 75 XP
 * - Length: 46 min -> x1.0
 * - Difficulty: x1.2 (Intermediate)
 * - Quizzes: +20 XP
 * - Checkpoint: +5 XP
 * - Total: 115 XP
 *
 * Duration: 46 minutes
 * XP REWARD: 115 points
 *
 * lessonCategory: challenge - Hands-on system building exercise
 */

import type { Lesson } from "@/types/content";

export const lesson_2_8: Lesson = {
  id: "lesson-2-8",
  chapterId: "ch2-3-integration",
  moduleId: "02-skills-productivity",
  title: "Build Your Personal Productivity System",
  description: "Learn how to choose tools, set routines, and make AI stick",
  order: 8,
  estimatedMinutes: 15,
  xpReward: 115,
  format: "article",
  coverImage:
    "/images/courses/lessons/modules/professional-workspace-with-tools-and-technology.webp",
  coverTitle: "Build Your Personal Productivity System",
  lessonCategory: "challenge",

  sections: [
    // ==========================================================================
    // HERO IMAGE
    // ==========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/02-skills-productivity/lesson-2-8-cover.webp",
        imageAlt: "Professional workspace with AI productivity tools",
        title: "Build Your Personal Productivity System",
        subtitle: "Learn how to choose tools, set routines, and make AI stick",
      },
    },

    // ==========================================================================
    // SECTION 1: THE PRODUCTIVITY SYSTEM
    // ==========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Productivity System",
        paragraphs: [
          "Tools alone aren't enough. You need a system. A workflow. A way of working.",
          "Great tools plus poor system equals frustration.",
          "Good tools plus great system equals transformation.",
          "This lesson ties everything together into a cohesive productivity system.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Key Insight
    // ==========================================================================
    {
      id: "highlight-1",
      type: "highlightCard",
      content: {
        heading: "The System Mindset",
        insights: [
          "A productivity system is a repeatable process for getting work done",
          "The best systems reduce decision fatigue - you know exactly which tool to use for each task",
          "Systems compound: each improvement makes all your tools more valuable",
        ],
      },
    },

    // ==========================================================================
    // COMPARISON TABLE: Tool Selection Guide
    // ==========================================================================
    {
      id: "comparison-table",
      type: "comparisonTable",
      content: {
        title: "AI Tool Selection Guide",
        intro:
          "Each tool has strengths. The key is knowing when to use what. This guide helps you choose the right tool for each task.",
        columns: [
          { name: "Claude", description: "Deep analysis", recommended: false },
          { name: "Gemini", description: "Research", recommended: false },
          { name: "NotebookLM", description: "Knowledge base", recommended: false },
          { name: "Make.com", description: "Automation", recommended: false },
        ],
        rows: [
          {
            feature: "Best For",
            values: [
              "Long-form writing, analysis, coding",
              "Real-time research, fact-checking",
              "Document synthesis, knowledge bases",
              "Repetitive tasks, integrations",
            ],
          },
          {
            feature: "Strengths",
            values: [
              "Nuanced reasoning, large context",
              "Live web access, citations",
              "Multi-document analysis",
              "1,000+ app connections",
            ],
          },
          {
            feature: "Use When",
            values: [
              "Writing reports, brainstorming, editing",
              "Verifying claims, finding sources",
              "Studying, research synthesis",
              "Manual tasks, data routing",
            ],
          },
          {
            feature: "Cost",
            values: [
              "Free tier, Pro $20/mo",
              "Free tier, Pro $20/mo",
              "Free",
              "Free tier, paid plans available",
            ],
          },
        ],
        footer: "All four tools work together. Use multiple in a single workflow for best results.",
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: Visual workflow
    // ==========================================================================
    {
      id: "section-2",
      type: "textWithImage",
      content: {
        title: "How Your Tools Connect",
        paragraphs: [
          "Your productivity system isn't four separate tools - it's one integrated workflow.",
          "Claude generates content. Gemini verifies facts. NotebookLM stores knowledge. Make.com automates the handoffs between them.",
          "When one tool hands off to another seamlessly, you save time at every step.",
        ],
        imageUrl: "/images/courses/modules/02-skills-productivity/lesson-2-8-inline-1.webp",
        imageAlt: "Diagram showing AI tool integration workflow",
        imageCaption: "Your integrated productivity system: each tool plays a specific role",
      },
    },

    // ==========================================================================
    // SECTION 3: TOOL INTEGRATION MAP
    // ==========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "When to Use Each Tool",
        paragraphs: [
          "Each tool has strengths. Together they're unstoppable. The key is knowing when to use what—and combining them strategically.",
          "Claude excels at long-form work, deep analysis, coding, document writing, brainstorming, and editing. Use Claude when you need nuanced reasoning or creative output that requires careful thought. Its larger context window makes it ideal for working with extensive documents or complex projects.",
          "Gemini dominates at research, fact-checking, finding sources, current events, and comparing options. Use Gemini when you need citations or real-time information from the web. Every claim comes with a clickable source, making it your go-to for verified research.",
          "NotebookLM specializes in knowledge bases, document synthesis, studying, and creating summaries from multiple sources. Use NotebookLM when working with your own documents—upload PDFs, articles, and notes, then query across everything you've collected.",
          "Make.com handles automation, workflows, connecting apps, processing data, and scheduled tasks. Use Make.com when you find yourself doing the same thing repeatedly. It's the glue that connects all your other tools into seamless workflows.",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 1: Check understanding of tool selection
    // ==========================================================================
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        quiz: {
          question:
            "You need to verify a claim from a news article and find original sources. Which tool?",
          options: ["Claude", "Gemini", "NotebookLM", "Make.com"],
          correctAnswer: 1,
        },
        context:
          "Gemini is the best choice for verifying claims because it searches the web in real-time and provides clickable source citations. You can instantly see where information came from and verify its accuracy.",
      },
    },

    // ==========================================================================
    // SECTION 4: DAILY WORKFLOW DESIGN
    // ==========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Daily Workflow Design",
        paragraphs: [
          "Design your day for maximum productivity with AI as your partner. The key is matching the right tool to each type of work, creating natural rhythms that maximize your focus.",
          "Start your morning by reviewing an AI-compiled overnight summary. Check Make.com notifications for any automated task completions that happened while you slept. Get your AI-generated brief of what needs attention, so you start the day informed and ready rather than reactive and overwhelmed.",
          "Reserve your peak focus hours for deep work with Claude. Use Projects for complex tasks that require sustained attention. Apply iterative prompting to refine outputs until they're ready to use. This is where your most valuable creative and analytical work happens.",
          "Schedule a dedicated research block using Gemini for quick answers and fact-checking. Switch to NotebookLM when you need deep document synthesis from your knowledge base. Grouping research together prevents constant context-switching throughout the day.",
          "Handle admin time by letting Make.com automations do the routine work. Your job is to review outputs, not do the manual work. Approve drafts, check logs, and adjust automations as needed. This approach transforms you from a doer into a reviewer and optimizer.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Workflow Pro Tips
    // ==========================================================================
    {
      id: "highlight-2",
      type: "highlightCard",
      content: {
        heading: "Workflow Integration Tips",
        insights: [
          "Batch similar tasks: Process all your research at once with Gemini, then switch to Claude for all your writing",
          "Use Make.com to move data between tools: Auto-save Gemini research to NotebookLM for future reference",
          "Start each morning with a Claude-generated plan: Ask it to prioritize your tasks based on your calendar and deadlines",
        ],
      },
    },

    // ==========================================================================
    // SECTION 5: COMMUNICATION BATCHING
    // ==========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Communication Batching",
        paragraphs: [
          "Check communications on a schedule, not constantly. AI helps you process faster while protecting your focus time from endless interruptions.",
          "Process email three times daily: morning, post-lunch, and end-of-day. Let Claude draft responses in your voice, then you review and send. Make.com can pre-sort and label incoming messages, so you only see what matters. This batching approach reduces the cognitive cost of constant email checking.",
          "Check Slack every two hours rather than keeping it open constantly. AI can summarize unread channels so you catch up in minutes instead of scrolling endlessly. Post urgent updates only, and let Make.com alert you to specific keywords that truly require immediate attention.",
          "Batch meetings on two or three days when possible, leaving other days meeting-free for deep work. Use Claude to prepare agendas before meetings and capture action items during them. Send AI-generated summaries afterward to ensure everyone stays aligned without manual documentation effort.",
          "Handle social media by scheduling all content in batches. AI generates variations for each platform from your core content. You review everything once weekly in a focused session. Make.com posts at optimal times automatically, maintaining your presence without daily effort.",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 2: Check understanding of workflow design
    // ==========================================================================
    {
      id: "quiz-2",
      type: "quiz",
      content: {
        quiz: {
          question: "What's the principle behind communication batching?",
          options: [
            "Check messages as soon as they arrive",
            "Process similar communications together to minimize context switching",
            "Use different tools for each message",
            "Never use AI for communication",
          ],
          correctAnswer: 1,
        },
        context:
          "Communication batching minimizes context switching and maximizes focus. By processing similar communications together (email 3x daily, Slack every 2 hours), you maintain flow state for deep work while staying responsive.",
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: Cost management visual
    // ==========================================================================
    {
      id: "section-6",
      type: "textWithImage",
      content: {
        title: "Understanding Your Investment",
        paragraphs: [
          "Productivity tools are an investment that pays for itself many times over.",
          "The combined cost of your AI toolkit is less than what you'd spend on a single business lunch - but it delivers value every single day.",
        ],
        imageUrl: "/images/courses/modules/02-skills-productivity/lesson-2-8-inline-1.webp",
        imageAlt: "ROI visualization for AI productivity tools",
        imageCaption: "Your AI toolkit investment vs. time saved",
      },
    },

    // ==========================================================================
    // SECTION 7: COST MANAGEMENT & ROI
    // ==========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Cost Management & ROI",
        paragraphs: [
          "Understanding the investment and return helps you advocate for these tools and justify the expense to yourself or your organization.",
          "Let's look at costs with examples—not quotes. Vendor pricing changes; verify before you buy. A Claude paid tier plus a Google AI workspace tier is a common combination for this stack; NotebookLM and Make.com frequently offer free tiers to start. The point is magnitude: even modest subscriptions are tiny beside weekly time saved.",
          "Now consider the time saved. A conservative estimate suggests 5 hours saved per week. At $50 per hour (well below most knowledge workers' effective rate), that's $1,000 per month in recovered productivity. The ROI calculation becomes clear: $1,000 value divided by $40 cost equals a 25x return on investment. Even saving just 1 hour per week, you'd break even.",
          "The compound benefits extend beyond raw time savings. Better outputs from AI assistance mean higher quality work. Fewer errors mean less rework. Faster decisions mean quicker progress. More creativity means better solutions. These benefits compound over time as you get better at using the tools and as the tools themselves improve.",
        ],
      },
    },

    // ==========================================================================
    // CHECKPOINT: Test comprehensive understanding
    // ==========================================================================
    {
      id: "checkpoint-1",
      type: "checkpoint",
      content: {
        question: "Outline your 28-day AI transformation plan. What will you focus on each week?",
        options: [
          "Try everything at once in week 1",
          "Week 1: Master Claude for daily tasks. Week 2: Add Gemini for research, create NotebookLM knowledge bases. Week 3: Set up Make.com automations. Week 4: Optimize full system, measure impact.",
          "Wait until I have more time",
          "Skip straight to week 4",
        ],
        correctAnswer: 1,
        hint: "Think about building complexity gradually over 4 weeks",
      },
    },

    // ==========================================================================
    // SECTION 8: SCALING YOUR SYSTEM
    // ==========================================================================
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Scaling Your System",
        paragraphs: [
          "Personal systems scale to team systems.",
          "Once you've optimized your personal workflow, share what works:",
          "Share templates with teammates. Standardize tools across your team. Train others on best practices. Create governance policies for sensitive work.",
          "Best practices from your personal workflow become team standards. What saves you 5 hours can save a 10-person team 50 hours.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Scaling Tips
    // ==========================================================================
    {
      id: "highlight-3",
      type: "highlightCard",
      content: {
        heading: "Team Adoption Tips",
        insights: [
          "Start with one high-impact workflow that benefits everyone - get a quick win",
          "Create shared prompt libraries so everyone benefits from refined prompts",
          "Document your automations: Make.com scenarios should have clear documentation for handoffs",
        ],
      },
    },

    // ==========================================================================
    // SECTION 9: CONCLUSION
    // ==========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Your AI Productivity System Awaits",
        paragraphs: [
          "You have all the tools. You know how to use them.",
          "Claude for deep work. Gemini for research. NotebookLM for knowledge. Make.com for automation.",
          "This is your system. Make it yours.",
          "Start today. Build iteratively. Optimize continuously.",
          "In 28 days, you'll work differently forever.",
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
        action: "Use Claude with Projects for complex workflows",
        task: "Build your integrated productivity system with multiple AI tools",
        feature: "Claude Projects for persistent context across your productivity work",
        tip: "Start with one tool (Claude), master it, then add others gradually over 2-4 weeks",
      },
    },

    // ==========================================================================
    // ACTIONABLE TASK: Build Your System Challenge
    // ==========================================================================
    {
      id: "actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Build Your AI Productivity System",
        purpose:
          "Design and implement a personalized AI productivity system that transforms your daily work",
        instructions: [
          "Map your current workflow: What tasks do you do daily? Where do you lose time?",
          "Identify 3 tasks to automate or enhance with AI tools",
          "Choose your tool stack: Which tools from this module will you use?",
          "Create your first Make.com automation this week",
          "Track time saved for one month - measure your improvement",
        ],
        deliverable:
          "Your personalized AI productivity system plan with first automation implemented",
        estimatedTime: "30-45 minutes for planning, ongoing for implementation",
        starterPrompt:
          "My current daily workflow includes [TASKS]. I lose the most time on [TIME_SINK]. The three tasks I want to automate are: 1) [TASK_1], 2) [TASK_2], 3) [TASK_3]. My tool stack will be: [TOOLS]. My first automation will be: [AUTOMATION].",
        successCriteria: [
          "Documented current workflow with at least 5 regular tasks identified",
          "Three specific tasks identified for AI enhancement or automation",
          "First Make.com automation created and tested",
          "System for tracking time saved established (spreadsheet, log, etc.)",
        ],
      },
    },
  ],
};
