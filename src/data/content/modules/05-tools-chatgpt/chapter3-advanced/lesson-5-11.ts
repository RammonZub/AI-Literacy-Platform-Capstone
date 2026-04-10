/**
 * Lesson 5.11: Custom GPTs - Your AI Employees
 *
 * CHAPTER: 3 - Advanced Features
 * LESSON: 11 of 15 - Custom GPTs Overview
 *
 * DURATION: 15 minutes
 * XP REWARD: 125 XP
 *
 * LEARNING OBJECTIVES:
 * - Understand what Custom GPTs are and how they differ from regular ChatGPT
 * - Identify professional use cases for Custom GPTs
 * - Explore the GPT Store to see what's possible
 */

import type { Lesson } from "@/types/content";

export const lesson_5_11: Lesson = {
  id: "lesson-5-11",
  chapterId: "ch5-3-advanced",
  moduleId: "05-tools-chatgpt",
  lessonCategory: "tutorial",
  title: "Custom GPTs - Your AI Employees",
  description: "Transform ChatGPT into specialized assistants for your specific work",
  order: 11,
  estimatedMinutes: 15,
  xpReward: 125,
  format: "article",
  sections: [
    // ===========================================================================
    // HERO IMAGE SECTION
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-11-cover.webp",
        imageAlt: "Robot and automation technology representing custom AI assistants",
        title: "Custom GPTs - Your AI Employees",
        subtitle: "Transform ChatGPT into specialized assistants for your specific work",
      },
    },
    // ===========================================================================
    // SECTION 1: Introduction
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Power of Specialized AI",
        paragraphs: [
          "Think of ChatGPT as a knowledgeable generalist. It can help with almost anything, but doesn't know your specific workflows, preferences, or recurring tasks.",
          "",
          "**Custom GPTs** are specialized versions of ChatGPT that you create ONCE and use forever. They're like having employees who understand exactly how you work.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Why Custom GPTs Transform Work
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Why Custom GPTs Transform Work",
        paragraphs: [
          "Custom GPTs solve the repetition problem. With permanent instructions, you tell your GPT once how you like emails written, and it remembers forever. No more re-explaining your preferences every conversation. Your knowledge base means you can upload templates, style guides, or process documents, and your GPT references them automatically whenever relevant.",
          "",
          "Conversation starters give you pre-built prompts that you click instead of typing the same requests repeatedly. Team sharing lets you create GPTs for your entire team so everyone uses the same trained assistant with consistent outputs. And specialized capabilities mean you can add web browsing, image generation, or data analysis as needed for specific workflows. The combination of these features transforms ChatGPT from a general tool into a specialized team member who knows exactly how you work.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Highlight Card - Key Insight
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "The Custom GPT Advantage",
        insights: [
          "Create specialized assistants once instead of explaining preferences repeatedly",
          "Your GPT knows your signature, tone preferences, and common responses",
          "All your customization is built in and available every time",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Professional Use Cases
    // ===========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Custom GPTs That Professionals Create",
        paragraphs: [
          "Professionals create Custom GPTs for their most repetitive, high-value tasks. An Email Response GPT knows your writing style, common responses, and tone preferences, so every email draft sounds like you wrote it. A Report Writer GPT is trained on your report structure, formatting rules, and frequently-used phrases, producing consistent outputs without constant guidance.",
          "",
          "A Meeting Prep GPT creates agendas based on your template, researches attendees from LinkedIn summaries you provide, and drafts follow-up emails in your voice. A Client Onboarding GPT generates welcome sequences, contracts, and project plans using your proven process, ensuring no steps are missed. Even a Proofreading GPT can be trained to know your personal grammar preferences, industry terminology, and the common mistakes you tend to make, catching errors generic tools miss.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Comparison Table - ChatGPT vs Custom GPT
    // ===========================================================================
    {
      id: "section-5",
      type: "comparisonTable",
      content: {
        title: "Regular ChatGPT vs. Custom GPT",
        intro: "Understanding the difference helps you decide when to use each approach.",
        columns: [{ name: "Regular ChatGPT" }, { name: "Custom GPT", recommended: true }],
        rows: [
          {
            feature: "Setup Time",
            values: ["None - start immediately", "10-30 minutes to configure"],
          },
          { feature: "Remembers Your Preferences", values: [false, true] },
          { feature: "Access to Your Documents", values: [false, true] },
          { feature: "Pre-built Prompts", values: [false, true] },
          {
            feature: "Best For",
            values: ["One-off tasks, exploration", "Recurring work, team workflows"],
          },
        ],
        footer:
          "Start with regular ChatGPT. When you find yourself typing the same instructions repeatedly, it's time to create a Custom GPT.",
      },
    },
    // ===========================================================================
    // SECTION 6: How Custom GPTs Work
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "How Custom GPTs Work",
        paragraphs: [
          "You don't need coding skills. The GPT Builder is entirely no-code—you type instructions, upload files, and configure capabilities through a simple interface.",
          "",
          "Behind the scenes, ChatGPT combines your instructions with its general knowledge. Every time you chat with your custom GPT, it reads your instructions first, then responds based on that context.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Highlight Card - Time Savings
    // ===========================================================================
    {
      id: "section-7",
      type: "highlightCard",
      content: {
        heading: "Real-World Time Savings",
        insights: [
          "One consulting firm created a 'Proposal GPT' trained on 50 winning proposals",
          "New consultants draft proposals in 20 minutes instead of 2 hours",
          "The firm's winning style is maintained automatically",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Visual Break
    // ===========================================================================
    {
      id: "section-8",
      type: "textWithImage",
      content: {
        title: "Explore the GPT Store",
        paragraphs: [
          "The GPT Store is a marketplace of specialized assistants created by others. You'll find GPTs for writing, coding, research, and specialized tasks—many available for free.",
          "",
          "Browse to see what's possible, then get inspired to create your own.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-11-inline-1.webp",
        imageAlt: "Digital marketplace and app store interface",
      },
    },
    // ===========================================================================
    // SECTION 9: Quick Prompt
    // ===========================================================================
    {
      id: "section-9",
      type: "quickPrompt",
      content: {
        heading: "Explore the GPT Store",
        description:
          "In ChatGPT, click 'Explore GPTs' in the sidebar. Browse public GPTs others have created.",
        promptText:
          "In ChatGPT, click 'Explore GPTs' in the sidebar. Browse public GPTs others have created. You'll see assistants for writing, coding, research, and specialized tasks.",
      },
    },
    // ===========================================================================
    // SECTION 10: Tool Reference
    // ===========================================================================
    {
      id: "section-10",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "To explore and create Custom GPTs",
        task: 'Click "Explore GPTs" in the sidebar to browse existing GPTs, or click "Create" to build your own',
        feature: "GPT Store",
        tip: "Browse by category to find GPTs relevant to your work before creating your own",
      },
    },
    // ===========================================================================
    // SECTION 11: Actionable Task (Inline)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Design Your First Custom GPT",
        purpose:
          "Designing a custom GPT forces you to articulate your workflow clearly. Even before building, this exercise clarifies what you need from AI assistance.",
        instructions: [
          "Identify a recurring task you do weekly (emails, reports, research)",
          "Write the instructions you'd give a new employee for this task - be specific",
          "List any documents, examples, or knowledge the GPT should have",
          "Explore the GPT Store for similar GPTs and note what you'd do differently",
        ],
        deliverable:
          "A GPT design document with: task name, detailed instructions, knowledge requirements, and differentiation from existing GPTs",
        estimatedTime: "10 minutes",
        starterPrompt:
          "**My Custom GPT Design**\n\n**Task**: [What the GPT will help with]\n**Instructions**: 1) [Step 1], 2) [Step 2], 3) [Step 3]...\n**Knowledge needed**: [Documents, examples, context]\n**Unique value**: [What makes this different from existing GPTs]",
        successCriteria: [
          "Instructions are specific enough for a new employee to follow",
          "Identified at least 1 document or example the GPT would need",
          "Explored the GPT Store and found similar/inspiring examples",
        ],
      },
    },
    // ===========================================================================
    // SECTION 12: Knowledge Check
    // ===========================================================================
    {
      id: "section-quiz",
      type: "checkpoint",
      content: {
        question: "What is the main advantage of a Custom GPT over regular ChatGPT?",
        options: [
          "It costs less to use",
          "It remembers your instructions and preferences permanently",
          "It responds faster",
          "It has access to more training data",
        ],
        correctAnswer: 1,
        hint: "Think about what happens when you don't have to repeat instructions every time.",
      },
    },
    // ===========================================================================
    // SECTION 13: Completion
    // ===========================================================================
    {
      id: "section-13",
      type: "completion",
      content: {
        title: "GPT Store Exploration Complete",
        description: "You've seen what's possible with custom GPTs. Next, you'll create your own.",
        xpReward: 125,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
