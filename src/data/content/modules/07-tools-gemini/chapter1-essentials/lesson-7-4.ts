/**
 * Lesson 7.4: Understanding Gemini's Three Modes
 *
 * CHAPTER: 1 - Getting Started — Your AI Partner at Work
 * LESSON: 4 of 5 - Choosing the Right Mode for Each Task
 *
 * DURATION: 15 minutes (practical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Help learners choose appropriate Gemini modes for different tasks
 *
 * KEY RESPONSIBILITIES:
 * - Explain Fast, Thinking, and Pro modes clearly
 * - Provide decision framework for mode selection
 * - Show how to switch modes mid-conversation
 * - Set realistic expectations for each mode's capabilities
 */

import type { Lesson } from "@/types/content";

export const lesson_7_4: Lesson = {
  id: "lesson-7-4",
  chapterId: "ch7-1-essentials",
  moduleId: "07-tools-gemini",
  title: "Understanding Gemini's Three Modes",
  description: "Learn when to use Fast, Thinking, and Pro modes for best results",
  order: 4,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-4-cover.webp",
        imageAlt: "Dashboard with multiple data modes and options",
        title: "Understanding Gemini's Three Modes",
        subtitle: "Choose the right mode for each task",
      },
    },
    // ===========================================================================
    // SECTION 1: Introduction
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        paragraphs: [
          "Gemini offers different modes for different types of tasks. Understanding when to use each mode helps you get better results faster—and avoid waiting longer than necessary for simple answers.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Fast Mode
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Fast Mode: Quick Answers for Everyday Questions",
        paragraphs: [
          "**Best for**: 80% of your daily tasks",
          "",
          "Fast Mode is your go-to for quick, straightforward assistance:",
          "- Answering factual questions",
          "- Simple writing tasks (emails, short messages)",
          "- Quick explanations of concepts",
          "- Summaries and lists",
          "- Basic research with real-time information",
          "",
          "**Speed**: Almost instant responses",
          "**When to use**: When you need a quick, helpful answer without deep analysis",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Thinking Mode
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "Thinking Mode: Balanced Reasoning for Work Tasks",
        insights: [
          "Best for 15% of tasks requiring more thought",
          "Shows reasoning steps for complex questions",
          "Better for analysis, comparisons, and recommendations",
          "Takes a bit longer but provides more thorough answers",
          "Ideal for most professional work tasks",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Visual Break - Thinking Mode
    // ===========================================================================
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "When You Need More Thought",
        paragraphs: [
          "Thinking Mode is perfect for tasks where the answer isn't straightforward. Gemini will work through the problem step-by-step, showing its reasoning, which helps you understand and trust the response.",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-4-inline-1.webp",
        imageAlt: "Professional analyzing data and thinking through problems",
      },
    },
    // ===========================================================================
    // SECTION 5: Pro Mode (Deep Analysis)
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Pro Mode: Deep Analysis for Complex Problems",
        paragraphs: [
          "**Best for**: 5% of tasks—the really challenging ones",
          "",
          "Pro Mode (requires Gemini Advanced subscription) tackles sophisticated tasks:",
          "- Complex research and synthesis",
          "- Nuanced analysis with many factors",
          "- Advanced coding and technical problems",
          "- Detailed strategic thinking",
          "- Creative projects requiring depth",
          "",
          "**Speed**: Longer response time (worth it for complex tasks)",
          "**When to use**: When Fast and Thinking modes aren't giving you the depth you need",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Decision Framework
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Which Mode Should I Use?",
        paragraphs: [
          "Choosing the right mode becomes intuitive once you understand the pattern. Start by asking yourself what kind of answer you need. If you just need a quick fact or simple assistance, Fast Mode is your best choice. It responds almost instantly and handles the majority of everyday questions with ease.",
          "",
          "When you're working on something that requires more thought, switch to Thinking Mode. This is ideal for work tasks involving analysis, comparisons, or recommendations where you want to see how Gemini arrives at its conclusions. The extra processing time delivers more thorough and nuanced responses.",
          "",
          "For genuinely complex challenges with multiple competing considerations, Pro Mode offers the deepest analysis. This mode shines when you're tackling sophisticated research, nuanced strategic thinking, or creative projects that benefit from extensive exploration. And here's the key insight: if you're unsure which mode to use, start with Fast Mode and upgrade if the answer isn't sufficient for your needs.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Switching Modes
    // ===========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "You Can Switch Anytime",
        paragraphs: [
          "Here's the key insight: you can switch modes mid-conversation.",
          "",
          "**Example workflow:**",
          "1. Start in Fast Mode with a general question",
          "2. Get a quick overview",
          "3. Switch to Thinking Mode for deeper analysis on a specific point",
          "4. Continue the conversation with more context",
          "",
          "You're not locked in. Think of modes as tools in your toolkit—use the right one for each job.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Practical Examples
    // ===========================================================================
    {
      id: "section-8",
      type: "highlightCard",
      content: {
        heading: "Examples by Mode",
        insights: [
          "Fast Mode: 'What's the weather?' | 'Summarize this email' | 'Give me 5 icebreaker questions'",
          "Thinking Mode: 'Compare these software options' | 'Analyze pros and cons' | 'Help me think through this decision'",
          "Pro Mode: 'Create a comprehensive marketing strategy' | 'Analyze this complex contract' | 'Develop a detailed project plan'",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: Quick Prompt
    // ===========================================================================
    {
      id: "section-9",
      type: "quickPrompt",
      content: {
        heading: "Practice Mode Selection",
        description: "Think of a task you need help with. Which mode would you start with?",
        promptText:
          "My task: [describe your task] | I would use [Fast/Thinking/Pro] Mode because [your reasoning]",
      },
    },
    // ===========================================================================
    // SECTION 10: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Practice Mode Selection",
        purpose:
          "Understanding modes intellectually is different from using them. This exercise builds your intuition for choosing the right mode for different task types.",
        instructions: [
          "Think of 5 different tasks you might ask Gemini to help with this week",
          "For each task, write down: the task, which mode you'd use, and why",
          "Include at least ONE task for each mode (Fast, Thinking, and if available, Pro)",
          "Now actually try ONE of your Fast Mode tasks in Gemini",
          "Note: Did the mode you chose feel right? Would you switch for next time?",
        ],
        deliverable:
          "A written list of 5 tasks with mode selections, plus one completed Fast Mode task",
        estimatedTime: "8-10 minutes",
        starterPrompt:
          "My task: [describe your task] | I would use [Fast/Thinking/Pro] Mode because [your reasoning]",
        successCriteria: [
          "You have listed 5 different tasks with mode selections",
          "Each mode (Fast, Thinking) is represented at least once",
          "You have explained your reasoning for each choice",
          "You have completed at least one task in Fast Mode",
        ],
      },
    },
    // ===========================================================================
    // SECTION 11: Completion
    // ===========================================================================
    {
      id: "section-11",
      type: "completion",
      content: {
        title: "You Understand Gemini's Modes",
        description:
          "You now know how to choose between Fast, Thinking, and Pro modes. Remember: start simple, upgrade if needed. Next up: putting it all together with quick wins you can try today.",
        xpReward: 100,
        buttonText: "Continue to Quick Wins",
      },
    },
  ],
};
