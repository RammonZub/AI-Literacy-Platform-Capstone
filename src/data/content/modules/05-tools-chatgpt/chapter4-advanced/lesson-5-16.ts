/**
 * Lesson 5.16: Model Selection Mastery
 *
 * CHAPTER: 4 - Advanced Features Deep Dive
 * LESSON: 16 of 22 - Model Selection Mastery
 *
 * DURATION: 15 minutes (advanced feature exploration)
 * XP REWARD: 120 XP
 *
 * PURPOSE: Help users understand when to use each ChatGPT model
 * and make informed decisions based on speed, capability, and cost.
 *
 * KEY RESPONSIBILITIES:
 * - Explain differences between GPT-4o, o1, o3, GPT-4 Turbo
 * - Provide decision framework for model selection
 * - Cover speed vs. capability tradeoffs
 * - Address cost considerations for Plus subscribers
 */

import type { Lesson } from "@/types/content";

export const lesson_5_16: Lesson = {
  id: "lesson-5-16",
  chapterId: "ch5-4-advanced",
  moduleId: "05-tools-chatgpt",
  title: "Model Selection Mastery",
  description: "Choose the right ChatGPT model for any task",
  order: 16,
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
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-16-cover.webp",
        imageAlt: "Technology choices and decision making",
        title: "Model Selection Mastery",
        subtitle: "Choose the right ChatGPT model for any task",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why Model Selection Matters",
        paragraphs: [
          "ChatGPT offers multiple models, each optimized for different tasks. Using the right model means:",
          "",
          "- **Faster responses** for simple tasks",
          "- **Better reasoning** for complex problems",
          "- **Lower costs** when you don't need top-tier capabilities",
          "",
          "Think of it like choosing the right tool from a toolbox. You wouldn't use a sledgehammer to hang a picture frame.",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "The Current Model Lineup",
        paragraphs: [
          "ChatGPT offers several models, each optimized for different use cases. GPT-4o is the all-rounder, best for everyday tasks, creative writing, and general conversation. It's very fast and handles text, images, and audio seamlessly. GPT-4 Turbo is the high-performance standard model, ideal for complex reasoning, detailed analysis, and long documents with its 128K token context window.",
          "",
          "The o1 reasoning model is a deep thinking specialist designed for complex analysis, coding, multi-step problems, and math. It's slower because it thinks before responding, but this deliberation produces better reasoning. The trade-off is limited messages and higher tier access. The o3-mini is a fast reasoning model that balances speed and capability for quick analytical tasks, coding help, and logic problems. It's faster than o1 while still showing its reasoning process, making it more affordable than the full o1 model.",
        ],
      },
    },
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "The Speed vs. Capability Tradeoff",
        insights: [
          "GPT-4o = Speed king, great for most tasks",
          "o1 = Deep thinking, best for complex problems",
          "Choose based on task complexity, not just preference",
        ],
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Decision Framework: Which Model Should You Use?",
        paragraphs: [
          "Choosing the right model requires asking yourself a few key questions. First, is this a simple, everyday task? Quick emails, basic summaries, and simple questions should use GPT-4o, which is fastest and most efficient for routine work. There's no reason to use a reasoning model for tasks that don't require deep thinking.",
          "",
          "Second, do you need to analyze complex information? Long documents, data analysis, and detailed research benefit from GPT-4 Turbo or GPT-4o, which have the context window and analytical capability to handle substantial inputs. Third, is this a multi-step reasoning problem? Complex math, code debugging, and strategic planning call for o1 or o3-mini, which are specifically designed to work through logical chains. Finally, do you need to see the thinking process? For learning, verification, or understanding the logic behind an answer, o1 or o3-mini will show their work rather than just giving conclusions.",
        ],
      },
    },
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Cost Considerations for Plus Subscribers",
        paragraphs: [
          "If you have ChatGPT Plus, you get access to all models, but with different limits:",
          "",
          "- **GPT-4o and GPT-4 Turbo**: Generous message limits (80+ messages per 3 hours)",
          "- **o1 and o3-mini**: Limited messages per week (varies by plan)",
          "",
          "**Pro tip**: Don't burn your o1 messages on simple tasks. Save reasoning models for when you really need deep analysis.",
        ],
      },
    },
    // CONTEXTUAL IMAGE
    {
      id: "section-context-image",
      type: "textWithImage",
      content: {
        title: "Matching Models to Tasks",
        paragraphs: [
          "The key is matching model capabilities to your actual needs. A faster model for simple tasks, a smarter model for complex ones.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-16-inline-1.webp",
        imageAlt: "Selecting the right tools for the job",
      },
    },
    {
      id: "section-quick-prompt",
      type: "quickPrompt",
      content: {
        heading: "Practice: Model Selection",
        description:
          "Think about a complex task you need help with. Which model would you choose and why? Consider speed, capability needs, and message limits.",
        promptText:
          "I need to analyze [complex task]. Should I use GPT-4o, o1, or o3-mini? Consider: [complexity level], [time sensitivity], [reasoning required].",
      },
    },
    // TOOL REFERENCE
    {
      id: "section-tool-reference",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "For this exercise",
        task: "Open ChatGPT and experiment with different models for the same prompt to compare their responses.",
        feature: "Model selector dropdown",
        tip: "Try the same complex question with both GPT-4o and o1 to see the difference in reasoning depth.",
      },
    },
    // INLINE ACTIONABLE TASK - At the END
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Model Selection Challenge",
        purpose:
          "Applying the model selection framework to real tasks builds intuition for choosing the right tool. This saves time and message limits while maximizing output quality.",
        instructions: [
          "List 5 tasks you regularly use ChatGPT for (ranging from simple to complex)",
          "For each task, identify which model you would use and explain why",
          "Try one task with your chosen model and one with a different model to compare",
          "Note the differences in speed, quality, and reasoning depth",
        ],
        deliverable: "A model selection guide for your 5 most common tasks with comparison notes",
        estimatedTime: "10 minutes",
        starterPrompt:
          "Task: [description]. Complexity: [simple/medium/complex]. Model choice: [GPT-4o/o1/o3-mini]. Reasoning: [why this model fits].",
        successCriteria: [
          "Listed 5 real tasks from your workflow",
          "Each task has a justified model selection",
          "Tested at least one task with different models and compared results",
        ],
      },
    },
    {
      id: "section-7",
      type: "completion",
      content: {
        title: "Model Selection Mastered",
        description:
          "You now understand when to use each ChatGPT model. This knowledge helps you get better results faster while managing your message limits wisely.",
        xpReward: 120,
        buttonText: "Complete Model Selection",
      },
    },
  ],
};
