/**
 * Lesson 1.8: ChatGPT As Your Starting Point
 *
 * PURPOSE: Introduce ChatGPT as a calm, practical first tool for everyday AI use
 *
 * FORMAT: Article with sections, quizzes, and checkpoint
 *
 * KEY CONCEPTS:
 * - Free vs Plus tier differences
 * - Why ChatGPT is a sensible beginner starting point
 * - Which simple capabilities matter first
 * - How to get better answers without overcomplicating the tool
 *
 * Duration: 20 minutes
 * XP: Base 50 x 1.0 (10-20min) x 1.0 (Beginner) + 20 bonus = 70 XP
 */

import type { Lesson } from "@/types/content";

export const lesson_1_8: Lesson = {
  id: "foundations-8",
  chapterId: "ch3-the-toolkit",
  moduleId: "01-skills-foundations",
  title: "ChatGPT As Your Starting Point",
  description: "What ChatGPT is good at and when it makes sense to start there.",
  order: 9,
  estimatedMinutes: 20,
  format: "article",
  lessonCategory: "tutorial",
  coverImage: "/images/courses/lessons/modules/brain-memory-and-thinking-neural-network.webp",
  coverTitle: "ChatGPT As Your Starting Point",
  xpReward: 70,
  sections: [
    // === HERO SECTION ===
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/01-skills-foundations/foundations-8-cover.webp",
        imageAlt: "ChatGPT interface showing various features",
        title: "ChatGPT As Your Starting Point",
        subtitle: "A practical place to begin if you want one tool that can help with everyday work.",
      },
    },

    // === WHAT IS CHATGPT ===
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Start Here, Not Everywhere",
        paragraphs: [
          "ChatGPT is often the easiest place to start because it can help with everyday tasks without asking you to learn a whole system first.",
          "",
          "You can use it to write, summarize, brainstorm, clean up rough ideas, or ask simple questions when you are stuck.",
          "",
          "You do not need to understand every feature on day one. You just need one tool that feels useful enough to keep using.",
        ],
      },
    },

    // === FREE VS PLUS ===
    {
      id: "section-3",
      type: "textWithBullets",
      content: {
        title: "Start Free First",
        paragraphs: [
          "Start with the free version. It is enough to learn the basics and complete real tasks. Upgrade later if you feel limited or want faster access.",
        ],
        bullets: [
          "**Free Tier:**",
          "Good for conversation, drafting, summaries, and light research",
          "Enough for learning and occasional work tasks",
          "Helps you see whether it fits your workflow before paying",
          "",
          "**Plus Tier ($20/month):**",
          "Faster access when demand is high",
          "Higher usage limits",
          "Extra features and more capable models",
        ],
      },
    },

    // === QUIZ 1 ===
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "Start with the free version unless you have a clear reason to upgrade.",
        quiz: {
          question: "Why is the free version of ChatGPT a good place to start?",
          options: [
            "It lets you test the tool without paying first",
            "It includes every advanced feature",
            "It is the only version that can answer questions",
            "It works only for research",
          ],
          correctAnswer: 0,
        },
      },
    },

    // === WEB BROWSING ===
    {
      id: "section-4",
      type: "text",
      content: {
        title: "When You Need Fresh Information",
        paragraphs: [
          "Sometimes you need current information, not just a general answer. ChatGPT can help with that too.",
          "",
          '**Use cases:** "What are the current interest rates?", "Summarize this article: [URL]", "What changed about [topic] this week?"',
          "",
          "**Limit:** It is only as useful as the sources it finds. Check important facts before you rely on them.",
        ],
      },
    },

    // === DALL-E 3 ===
    {
      id: "section-5",
      type: "text",
      content: {
        title: "A Simple Way To Sketch Ideas",
        paragraphs: [
          "ChatGPT can also help you create quick images from a description.",
          "",
          "**Use cases:** quick presentation visuals, rough concept images, social posts, or a simple mockup when you do not need a full design tool.",
          "",
          "**Quality:** Good for quick ideas and early drafts. Specialized image tools can still offer more control later.",
        ],
      },
    },

    // === VOICE MODE ===
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Talk It Out",
        paragraphs: [
          "If typing feels slow, the mobile app lets you talk to ChatGPT instead.",
          "",
          "**Use cases:** practice a pitch, brainstorm while walking, ask for feedback on the go, or talk through a rough idea out loud.",
          "",
          "**Experience:** It feels close to a normal phone conversation and works well for quick back-and-forth thinking.",
        ],
      },
    },

    // === CHECKPOINT 1 ===
    {
      id: "checkpoint-1",
      type: "checkpoint",
      content: {
        question:
          "You need to analyze a spreadsheet and find trends. Which ChatGPT feature would you use?",
        options: [
          "Voice mode",
          "File upload for analysis",
          "DALL-E 3 image generation",
          "Memory feature",
        ],
        correctAnswer: 1,
        hint: "Think about which feature handles data analysis.",
      },
    },

    // === FILE UPLOAD ===
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Let It Read The File",
        paragraphs: [
          "ChatGPT can look at documents, spreadsheets, and images too.",
          "",
          '**Use cases:** "Summarize this PDF report", "What trends do you see in this spreadsheet?", "Pull the key details from this receipt".',
          "",
          "**Pro tip:** Tell it what you want it to notice, not just what you uploaded. That keeps the result focused.",
        ],
      },
    },

    // === MEMORY ===
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Let It Remember Useful Preferences",
        paragraphs: [
          "If you turn on Memory, ChatGPT can remember a few things you want it to keep in mind.",
          "",
          "**What it remembers:** preferences, details you have shared, and a little context from earlier chats.",
          "",
          '**Use cases:** "Remember I prefer concise responses", "Draft this in the style we used last time".',
          "",
          "**Control:** You can review or delete remembered information at any time in settings.",
        ],
      },
    },

    // === STRENGTHS ===
    {
      id: "section-9",
      type: "text",
      content: {
        title: "When ChatGPT Is Enough",
        paragraphs: [
          "ChatGPT is a good first choice when you want one capable general assistant.",
          "",
          "It is especially useful for first drafts, quick questions, brainstorming, light analysis, and everyday work support.",
          "",
          "**Choose ChatGPT when:** you want one tool that covers most everyday tasks without extra setup.",
        ],
      },
    },

    // === QUIZ 2 ===
    {
      id: "quiz-2",
      type: "quiz",
      content: {
        context: "Different tools excel at different things.",
        quiz: {
          question: "When should you choose Claude over ChatGPT?",
          options: [
            "When you need faster responses",
            "When you need longer context windows or more nuanced reasoning",
            "When you want to generate images",
            "When you need voice mode",
          ],
          correctAnswer: 1,
        },
      },
    },

    // === GETTING MORE FROM CHATGPT ===
    {
      id: "section-10",
      type: "text",
      content: {
        title: "How To Get Better Answers",
        paragraphs: [
          '**Be specific:** "Write a marketing email" becomes "Write a marketing email for a SaaS product targeting HR directors."',
          "",
          '**Provide context:** "Improve this email" becomes "This email is to a frustrated customer. Help me respond professionally."',
          "",
          "**Use conversation history:** Keep building in the same chat when you want the answer to get better over time.",
          "",
          '**Ask for reasoning:** "Why did you structure it this way?" helps you learn from the answer instead of just copying it.',
        ],
      },
    },

    // === QUICK PROMPT - BEST PRACTICES ===
    {
      id: "quick-prompt",
      type: "quickPrompt",
      content: {
        heading: "A Simple ChatGPT Starter Template",
        description: "Use this when you want a clear first answer without making the prompt too long.",
        promptText: `Help me with [specific task].

Context: [one or two sentences about the situation]
What I need: [the exact output or decision you want]
Tone: [plain, concise, friendly, etc.]
Constraints: [anything to avoid or keep in mind]

If anything is unclear, ask me one question at a time.`,
        placeholders: [
          "[specific task]",
          "[one or two sentences about the situation]",
          "[the exact output or decision you want]",
          "[plain, concise, friendly, etc.]",
          "[anything to avoid or keep in mind]",
        ],
      },
    },

    // === TOOL REFERENCE ===
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Try it now",
        task: "Open ChatGPT and use it for one real task you already need to do",
        feature: "New conversation",
        tip: "Bookmark chat.openai.com so it is easy to come back to when you need it.",
      },
    },

    // === KEY INSIGHTS ===
    {
      id: "key-insight",
      type: "highlightCard",
      content: {
        heading: "What Matters Most",
        insights: [
          "ChatGPT is a sensible place to begin because it handles a lot of everyday work",
          "The free version is enough to learn and get real value",
          "Specific requests work better than vague ones",
          "You do not need to master every feature before you start using it",
        ],
      },
    },

    // === ACTIONABLE TASK ===
    {
      id: "actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Challenge: Use ChatGPT On One Real Task",
        purpose:
          "Use ChatGPT on something you actually need this week so the lesson turns into a real habit.",
        instructions: [
          "Choose one real task from your work or life",
          "Open ChatGPT and ask for help with that task",
          "If useful, try one extra feature like web browsing, file upload, or voice",
          "Write down what felt helpful and what still needs a human check",
        ],
        deliverable:
          "A short note describing what you asked, what ChatGPT gave you, and whether you would use it again",
        estimatedTime: "5-10 minutes",
        successCriteria: [
          "You used ChatGPT on one real task",
          "You can explain in plain English what helped",
          "You noticed at least one thing to verify or improve yourself",
          "You know whether this tool fits your workflow",
        ],
      },
    },
  ],
};
