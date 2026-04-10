/**
 * Lesson 2.9: Module 2 Review - Your Productivity System (REVIEW FORMAT)
 *
 * PURPOSE: Consolidate Module 2 learning and build personal AI productivity system
 *
 * XP CALCULATION:
 * - Base: 50 XP (Review lesson standard)
 * - Length: 15 min -> x0.8
 * - Difficulty: x1.0 (Consolidation)
 * - Knowledge Checks: +20 XP (4 checks x 5)
 * - Actionable Task: +10 XP
 * - Total: 100 XP
 *
 * Duration: 15 minutes
 * XP REWARD: 100 points
 */

import type { Lesson } from "@/types/content";

export const lesson_2_9: Lesson = {
  id: "lesson-2-9",
  chapterId: "ch2-3-integration",
  moduleId: "02-skills-productivity",
  lessonCategory: "review",
  title: "Your 30-Day Productivity Plan",
  description: "Consolidate the course into a simple plan you can use next week",
  order: 9,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  coverImage:
    "/images/courses/lessons/modules/professional-workspace-with-tools-and-technology.webp",
  coverTitle: "Your 30-Day Productivity Plan",

  imageSearchTerms: [
    "productivity success achievement celebration",
    "organized workspace system tools",
    "professional growth milestone completion",
  ],

  sections: [
    // ==========================================================================
    // SECTION 1: HERO IMAGE - Module Completion Celebration
    // ==========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/02-skills-productivity/lesson-2-9-cover.webp",
        imageAlt: "Module 2 Complete - Your AI Productivity System",
        title: "You've Mastered Productivity Fundamentals",
        subtitle: "Module 2 Complete. Now let's make it stick.",
      },
    },

    // ==========================================================================
    // SECTION 2: OPENING TEXT
    // ==========================================================================
    {
      id: "opening",
      type: "text",
      content: {
        title: "You've Mastered Productivity Fundamentals",
        paragraphs: [
          "**Congratulations on completing Module 2!**",
          "",
          "You've learned the skills that separate AI dabblers from AI power users. Prompt engineering. Context management. Iteration. Research synthesis. Knowledge management. Communication workflows. Automation. System integration.",
          "",
          "Now it's time to consolidate everything into your personal productivity system.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 3: WHAT YOU'VE LEARNED - Summary of All 8 Lessons
    // ==========================================================================
    {
      id: "what-you-learned",
      type: "text",
      content: {
        title: "What You've Learned",
        paragraphs: [
          "In Module 2, you mastered eight essential productivity skills that transform how you work with AI. Let's recap the journey that brought you here.",
          "You started with Advanced Prompt Engineering in Lesson 2.1, learning the 4-part framework of Context, Role, Task, and Constraints. You discovered chain of thought prompting, few-shot prompting with examples, and negative constraints that tell AI what to avoid. These fundamentals shape every interaction you have with AI.",
          "Lesson 2.2 taught Context Management: understanding AI memory limits, document consolidation techniques, strategic reference approaches, and Claude Projects for unlimited context. You learned to give AI the information it needs without overwhelming it.",
          "Iterative Refinement in Lesson 2.3 introduced the iteration loop of Generate, Evaluate, Identify, and Refine. You practiced six refinement techniques and learned when to stop iterating—recognizing that perfect is the enemy of done.",
          "Research with Gemini in Lesson 2.4 showed you live web search with citations, six research query types for different needs, Deep Research mode for comprehensive analysis, and verification practices that ensure accuracy.",
          "Lesson 2.5 covered Knowledge Management with NotebookLM: building document knowledge bases, using Audio Overview for passive learning, and applying these tools to professional use cases like competitive analysis and meeting preparation.",
          "Meeting and Communication Workflows in Lesson 2.6 taught AI-powered meeting preparation, email batch processing, follow-up automation, and handling difficult conversations with AI assistance.",
          "Make.com Automation in Lesson 2.7 introduced no-code workflow automation with the trigger-process-output pattern, connecting Gmail, Sheets, Slack, and hundreds of other apps into seamless workflows.",
          "Finally, Building Your System in Lesson 2.8 brought everything together: tool integration strategies, daily workflow design, communication batching, cost management, and scaling your system for teams.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 4: KNOWLEDGE CHECK 1 - Prompting Frameworks
    // ==========================================================================
    {
      id: "knowledge-check-1",
      type: "knowledgeCheck",
      content: {
        question: "What are the four parts of the master prompt framework?",
        options: [
          "Header, Body, Footer, Signature",
          "Context, Role, Task, Constraints",
          "Introduction, Explanation, Examples, Conclusion",
          "Problem, Solution, Benefits, Call-to-Action",
        ],
        correctAnswer: 1,
        explanation:
          "The 4-part framework is Context (who you are, situation, history), Role (what perspective AI should take), Task (what exactly needs to be done), and Constraints (tone, length, format, what to avoid). Each part gives AI crucial direction for high-quality outputs.",
        hint: "Think about what information AI needs to give you exactly what you want.",
      },
    },

    // ==========================================================================
    // SECTION 5: KNOWLEDGE CHECK 2 - Tool Selection
    // ==========================================================================
    {
      id: "knowledge-check-2",
      type: "knowledgeCheck",
      content: {
        question:
          "You need to verify a claim from a news article with credible sources. Which tool should you use?",
        options: [
          "Claude - for deep analysis",
          "ChatGPT - for general conversation",
          "Gemini - for research with citations",
          "NotebookLM - for document synthesis",
        ],
        correctAnswer: 2,
        explanation:
          "Gemini is the best fit here when Google Search grounding is enabled and compliant: answers can include retrievable links so you verify before you cite.",
        hint: "Think about which tool provides verifiable sources for every claim.",
      },
    },

    // ==========================================================================
    // SECTION 6: KNOWLEDGE CHECK 3 - Workflow Patterns
    // ==========================================================================
    {
      id: "knowledge-check-3",
      type: "knowledgeCheck",
      content: {
        question: "What is the basic automation pattern for Make.com (or Zapier-style) workflows?",
        options: [
          "Code, Compile, Debug, Deploy",
          "Trigger, Process, Output, Notify",
          "Research, Draft, Edit, Publish",
          "Plan, Do, Check, Act",
        ],
        correctAnswer: 1,
        explanation:
          "The automation pattern is: Trigger (what starts it - new email, scheduled time, form submission), Process (what AI does - extract, transform, analyze), Output (what gets created/updated), and Notify (how you know it's done). This pattern works for any repetitive task.",
        hint: "Think about the lifecycle of an automated task from start to finish.",
      },
    },

    // ==========================================================================
    // SECTION 7: KNOWLEDGE CHECK 4 - Context & Iteration
    // ==========================================================================
    {
      id: "knowledge-check-4",
      type: "knowledgeCheck",
      content: {
        question: "Your AI output is good but not great. What's the best next step?",
        options: [
          "Start over with a completely different prompt",
          "Switch to a different AI tool",
          "Identify what needs improvement and request specific refinements",
          "Accept it as-is and move on",
        ],
        correctAnswer: 2,
        explanation:
          "The iterative refinement approach is to identify what specifically needs improvement (tone, length, detail, format) and request targeted changes. This is faster and more effective than starting over. Most great outputs require 2-3 refinement iterations.",
        hint: "Remember the iteration loop: Generate, Evaluate, Identify, Refine.",
      },
    },

    // ==========================================================================
    // SECTION 8: COMPARISON TABLE - Tool Selection Guide
    // ==========================================================================
    {
      id: "tool-comparison",
      type: "comparisonTable",
      content: {
        title: "Tool Selection Guide",
        intro: "Each tool has strengths. Use this guide to choose the right one for each task.",
        columns: [{ name: "Claude" }, { name: "Gemini" }, { name: "ChatGPT" }],
        rows: [
          {
            feature: "Best For",
            values: [
              "Long-form work, deep analysis",
              "Research, fact-checking",
              "General tasks, quick answers",
            ],
          },
          {
            feature: "Key Strength",
            values: [
              "200K+ context, Claude Projects",
              "Live web search with citations",
              "Versatile, fast, wide range",
            ],
          },
          {
            feature: "Use When",
            values: [
              "Need to think deeply about documents",
              "Need current information",
              "Need quick, reliable help",
            ],
          },
        ],
        footer: "The power comes from combining tools strategically, not using one for everything.",
      },
    },

    // ==========================================================================
    // SECTION 9: HIGHLIGHT CARD - Key Principles to Remember
    // ==========================================================================
    {
      id: "key-principles",
      type: "highlightCard",
      content: {
        heading: "Key Principles to Remember",
        insights: [
          "Specificity creates quality - The more specific your prompts, the better your outputs. Vague prompts get vague results.",
          "Context is everything - AI can only work with what you give it. Provide background, examples, and constraints.",
          "Iteration beats perfection - First outputs are rarely final. Refine strategically rather than starting over.",
          "Tools are complementary - Each tool has strengths. Use the right tool for the right job.",
          "Systems beat willpower - Build workflows and automations. Don't rely on remembering to use AI each time.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 10: REFLECTION PROMPT - Your 30-Day Productivity Plan
    // ==========================================================================
    {
      id: "reflection",
      type: "reflectionPrompt",
      content: {
        title: "Your 30-Day Productivity Plan",
        intro:
          "Taking time to plan your application of these skills dramatically increases your success. Reflect on how you'll integrate what you've learned.",
        reflections: [
          {
            question:
              "What's the ONE skill from Module 2 that will have the biggest impact on your work?",
            placeholder: "Think about which skill addresses your biggest pain point...",
            context: "Focus on the skill that solves your most frustrating daily problem.",
          },
          {
            question:
              'Which tool will become your "go-to" AI assistant, and for what types of tasks?',
            placeholder: "Be specific about the tasks you'll use this tool for...",
            context:
              "Claude for deep work, Gemini for grounded scans, NotebookLM for knowledge, or Make.com for automation.",
          },
          {
            question: "What's ONE automation or workflow you'll build in the next 30 days?",
            placeholder: "Choose a repetitive task that could run on autopilot...",
            context: "Start with something you do weekly that follows a clear pattern.",
          },
        ],
        allowWriting: true,
        encouragement:
          "Your answers become your action plan. Write them down and revisit in 30 days.",
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
        action: "Use Claude to consolidate your learning",
        task: "Build your personalized AI productivity system",
        feature: "Claude Projects for organizing your productivity workflows",
        tip: 'Create a Claude Project called "My AI Productivity System" to store your templates and workflows',
      },
    },

    // ==========================================================================
    // SECTION 11: ACTIONABLE TASK (Inline) - Build Your Productivity System
    // ==========================================================================
    {
      id: "main-task",
      type: "actionableTask",
      content: {
        title: "Your Challenge: Build Your AI Productivity System",
        purpose:
          "Create a personalized system that integrates everything you've learned in Module 2 into a cohesive workflow.",
        instructions: [
          "Step 1 - Map Your Current Workflow: List your top 5 time-consuming daily tasks. Identify which ones follow patterns that AI could help with.",
          "Step 2 - Choose Your Tool Stack: Based on your tasks, decide which tools you'll use (Claude, Gemini, NotebookLM, Make.com). Write down what each will handle.",
          "Step 3 - Create One Automation: Pick ONE repetitive task and set up an automation in Make.com, or create a prompt template you'll reuse.",
          "Step 4 - Set Your Daily AI Workflow: Write down when you'll use AI each day (morning prep, during work, end-of-day review) and for what.",
          "Step 5 - Track for 30 Days: Commit to using your system for 30 days. Track time saved weekly. Adjust based on what works.",
        ],
        deliverable: "Your personalized AI productivity system document",
        estimatedTime: "15-20 minutes",
        starterPrompt:
          "My AI Productivity System\n\n**Top 5 Time-Consuming Tasks:**\n1.\n2.\n3.\n4.\n5.\n\n**My Tool Stack:**\n- Claude: [what I'll use it for]\n- Gemini: [what I'll use it for]\n- NotebookLM: [what I'll use it for]\n- Make.com: [what I'll use it for]\n\n**My First Automation:**\n[Describe the task and how you'll automate it]\n\n**Daily AI Workflow:**\n- Morning:\n- During Work:\n- End of Day:\n\n**30-Day Goal:**\n[What success looks like in 30 days]",
        successCriteria: [
          "You've identified at least 3 tasks where AI can help",
          'You\'ve chosen specific tools for specific purposes (not "use AI for everything")',
          "You've created at least one reusable prompt template or automation",
          "Your daily workflow has specific AI touchpoints",
          "You have a measurable 30-day goal",
        ],
      },
    },

    // ==========================================================================
    // SECTION 12: CLOSING HIGHLIGHT
    // ==========================================================================
    {
      id: "closing-highlight",
      type: "highlightCard",
      content: {
        heading: "You're Ready for Advanced Productivity",
        insights: [
          "You have the frameworks: 4-part prompting, iteration loop, context management",
          "You know the tools: Claude, Gemini, NotebookLM, Make.com, and when to use each",
          "You understand the principles: specificity, context, iteration, systems",
          "You have a plan: your personalized 30-day productivity system",
          "The compound effect of daily AI use will transform your work",
        ],
      },
    },

    // ==========================================================================
    // SECTION 13: CLOSING
    // ==========================================================================
    {
      id: "closing",
      type: "textWithImage",
      content: {
        title: "Your Productivity Transformation Begins Now",
        paragraphs: [
          "You have all the tools. You know how to use them.",
          "",
          "Claude for deep work. Gemini for research.",
          "NotebookLM for knowledge. Make.com for automation.",
          "",
          "This is your system. Make it yours.",
          "",
          "Start today. Build iteratively. Optimize continuously.",
          "",
          "In 30 days, you'll work differently forever.",
          "",
          "**See you in Module 3.**",
        ],
        image: {
          src: "/images/courses/lessons/modules/ai-technology-artificial-intelligence-concept.webp",
          alt: "Your productivity journey continues",
          caption: "Your AI productivity journey continues in Module 3",
        },
      },
    },
  ],
};
