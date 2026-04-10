/**
 * Lesson 5.17: Memory & Custom Instructions
 *
 * CHAPTER: 4 - Advanced Features Deep Dive
 * LESSON: 17 of 22 - Memory & Custom Instructions
 *
 * DURATION: 15 minutes (personalization setup)
 * XP REWARD: 120 XP
 *
 * PURPOSE: Teach users how to set up persistent memory and custom instructions
 * for consistent, personalized AI interactions.
 *
 * KEY RESPONSIBILITIES:
 * - Explain Memory feature and how to configure it
 * - Cover Custom Instructions for consistent outputs
 * - Show personalization techniques
 * - Address privacy considerations
 */

import type { Lesson } from "@/types/content";

export const lesson_5_17: Lesson = {
  id: "lesson-5-17",
  chapterId: "ch5-4-advanced",
  moduleId: "05-tools-chatgpt",
  title: "Memory & Custom Instructions",
  description: "Set up persistent memory for personalized AI assistance",
  order: 17,
  estimatedMinutes: 15,
  xpReward: 120,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // HERO IMAGE - At the START
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-17-cover.webp",
        imageAlt: "Data memory and personalization",
        title: "Memory & Custom Instructions",
        subtitle: "Set up persistent memory for personalized AI assistance",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Problem: Repeating Yourself",
        paragraphs: [
          "Without memory, every conversation starts from scratch. You have to explain:",
          "",
          "- Who you are and what you do",
          "- Your writing style preferences",
          "- Your industry and context",
          "- What you've already discussed",
          "",
          "That's tedious and inefficient. Memory solves this.",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "ChatGPT Memory: How It Works",
        paragraphs: [
          "Memory allows ChatGPT to remember information across all your conversations. It stores personal facts you share like your name, job, and preferences. It keeps track of project details and context, your writing style preferences, and important dates, names, and relationships that come up in conversation. All of this becomes available in future chats without you having to repeat yourself.",
          "",
          'Adding to memory is straightforward. You can tell ChatGPT directly: "Remember that I work in marketing at a startup." Or you can manually add items in Settings under Memory. Managing memory is equally simple: you can view stored memories anytime, delete specific memories that are no longer relevant, or clear all memory if needed. ChatGPT automatically references relevant memories when they would be helpful—you don\'t need to explicitly invoke them. The system quietly uses what it knows about you to provide more personalized responses.',
        ],
      },
    },
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "Memory Best Practices",
        insights: [
          "Add professional context first (job, industry, common tasks)",
          "Include writing preferences (tone, format, length)",
          "Review and prune memory monthly - keep it relevant",
          "Never store sensitive information like passwords or financial data",
        ],
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Custom Instructions: Set It and Forget It",
        paragraphs: [
          'Custom Instructions define how ChatGPT should respond to you by default, eliminating the need to repeat preferences in every conversation. Part one asks what you\'d like ChatGPT to know about you. A good example would be: "I am a marketing manager at a B2B software company. I write for technical audiences but prefer clear, jargon-free language. I often need help with emails, reports, and presentation content." This gives ChatGPT immediate context about your role and communication needs.',
          "",
          'Part two asks how you\'d like ChatGPT to respond. An effective response might be: "Always be concise. Use bullet points when listing information. Prefer direct language over hedging. When suggesting edits, explain briefly why the change improves the text." These instructions shape every response ChatGPT gives you. You can find Custom Instructions in Settings under Customization. Once set, they apply to all your conversations automatically.',
        ],
      },
    },
    {
      id: "section-5",
      type: "text",
      content: {
        title: "The Difference Between Memory and Custom Instructions",
        paragraphs: [
          "**Custom Instructions** = Static rules that always apply",
          "- 'Always respond in bullet points'",
          "- 'I work in healthcare'",
          "",
          "**Memory** = Dynamic facts that accumulate over time",
          "- 'My current project is the Q2 product launch'",
          "- 'My manager's name is Sarah'",
          "",
          "Use both together for maximum personalization.",
        ],
      },
    },
    // CONTEXTUAL IMAGE
    {
      id: "section-context-image",
      type: "textWithImage",
      content: {
        title: "Building Your AI Profile",
        paragraphs: [
          "Over time, your memory and custom instructions create a rich profile that makes every conversation more productive.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-17-inline-1.webp",
        imageAlt: "Customizing and personalizing settings",
      },
    },
    {
      id: "section-6",
      type: "highlightCard",
      content: {
        heading: "Privacy Considerations",
        insights: [
          "Never store passwords, API keys, or financial details",
          "Avoid confidential client information",
          "Use Temporary Chat for sensitive conversations (memory disabled)",
          "Review your memory regularly and delete outdated information",
        ],
      },
    },
    {
      id: "section-quick-prompt",
      type: "quickPrompt",
      content: {
        heading: "Practice: Set Up Your Custom Instructions",
        description:
          "Go to Settings > Customization > Custom Instructions and write your profile. What should ChatGPT know about you and how you work?",
        promptText:
          "Custom Instructions Template:\n\nABOUT ME:\nI am a [role] at [company type]. I work on [main responsibilities]. My audience is [who you communicate with].\n\nHOW TO RESPOND:\nPlease be [tone preference]. Use [format preference]. When [specific situation], always [specific instruction].",
      },
    },
    // TOOL REFERENCE
    {
      id: "section-tool-reference",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "For this exercise",
        task: "Open ChatGPT Settings, navigate to Customization > Custom Instructions, and complete both sections.",
        feature: "Custom Instructions settings",
        tip: "Start with your professional context - that's what you'll use most often.",
      },
    },
    // INLINE ACTIONABLE TASK - At the END
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Configure Memory & Custom Instructions",
        purpose:
          "Setting up persistent memory and custom instructions eliminates repetitive context-setting. Every future conversation becomes more productive automatically.",
        instructions: [
          "Go to ChatGPT Settings > Customization > Custom Instructions",
          "Write the 'About Me' section with your role, industry, and key responsibilities",
          "Write the 'How to Respond' section with tone, format, and special instructions",
          "Add 3 items to Memory using 'Remember that...' statements (job, preferences, current projects)",
        ],
        deliverable: "Completed Custom Instructions and 3 Memory items saved in ChatGPT",
        estimatedTime: "10 minutes",
        starterPrompt:
          "Add to Memory: 'Remember that I work in [industry] as a [role]. Remember that I prefer [communication style]. Remember that my current focus is [project/priority].'",
        successCriteria: [
          "Custom Instructions are saved with both sections completed",
          "At least 3 Memory items have been added",
          "Tested with a simple question to verify personalization works",
        ],
      },
    },
    {
      id: "section-8",
      type: "completion",
      content: {
        title: "Memory and Customization Complete",
        description:
          "You've learned how to personalize ChatGPT for consistent, relevant responses. Your AI now knows who you are and how you work.",
        xpReward: 120,
        buttonText: "Complete Memory Setup",
      },
    },
  ],
};
