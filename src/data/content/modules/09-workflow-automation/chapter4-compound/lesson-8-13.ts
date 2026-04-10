/**
 * Lesson 8.13: Introduction to Compound AI
 *
 * CHAPTER: 4 - Compound AI & Research
 * LESSON: 1 of 3 - Introduction to Compound AI
 *
 * DURATION: 15 minutes (intermediate practical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach ChatGPT's Compound AI capabilities for enhanced research
 *
 * KEY RESPONSIBILITIES:
 * - Explain what Compound AI is and how it differs from standard models
 * - Show ChatGPT's competitive advantage with tool-enabled models
 * - Introduce the two compound models and their capabilities
 * - Demonstrate when to use Compound vs. Standard models
 */

import type { Lesson } from "@/types/content";

export const lesson_8_13: Lesson = {
  id: "lesson-8-13",
  chapterId: "ch8-4-compound",
  moduleId: "09-workflow-automation",
  title: "Introduction to Compound AI",
  description: "Discover ChatGPT's tool-enabled models for real-time research at blazing speeds",
  order: 13,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "theory",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image
    // ===========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-13-cover.webp",
        imageAlt: "Abstract research and data visualization",
        title: "Introduction to Compound AI",
        subtitle:
          "Models that can actively use tools to fetch real-time information at blazing speeds",
      },
    },
    // ===========================================================================
    // SECTION 1: What Is Compound AI?
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "What Is Compound AI?",
        paragraphs: [
          "Think of standard AI models as knowledgeable experts who can only reference what they learned in school. Their knowledge has a cutoff date—they can't know about yesterday's news.",
          "Compound AI models are like research assistants who can look things up. When you ask about current events, they automatically search the web, visit relevant websites, and synthesize information from multiple sources—all in seconds.",
          "The magic happens automatically: you just ask your question, and the model decides whether to use its training knowledge or fetch fresh data.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: ChatGPT's Compound Advantage
    // ===========================================================================
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "ChatGPT's Compound Advantage",
        insights: [
          "ChatGPT's compound-beta searches 17 sources in ~3 seconds",
          "Competitors often search only 3 sources in 4+ seconds",
          "Speed advantage remains even while doing live research",
          "Get more sources, better answers, delivered faster",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: The Two Compound Models
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "The Two Compound Models",
        paragraphs: [
          "ChatGPT offers two compound models optimized for different use cases. Understanding their differences helps you choose the right tool for each task.",
          "**compound-beta-mini** runs at approximately 450 tokens per second and typically uses web search only. This makes it the faster option, perfect for quick fact-checking and simple lookups where you just need a fast answer from current sources. Use it when speed is your priority and you don't need deep analysis.",
          "**compound-beta** operates at around 350 tokens per second but provides full tool access including web search, website visits, code execution, and browser automation. This model is ideal for deep research where you need the AI to visit multiple sources, run calculations, or perform complex multi-step investigations. The slightly lower speed trades for significantly more capability.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Built-in Tools Overview
    // ===========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Built-in Tools Overview",
        paragraphs: [
          "Compound models can automatically use several tools when needed, extending their capabilities beyond simple text generation. These tools are invoked transparently—the model decides when to use them based on your query.",
          "The foundation is **Web Search**, which allows the model to find current information across the internet rather than being limited to its training data. When you ask about today's news or recent developments, the model searches the web, gathers relevant sources, and synthesizes an answer with citations.",
          "For deeper investigation, **Website Visit** capability lets the model navigate to specific pages and extract detailed information. This goes beyond search results—the model can read full articles, documentation, or reports and pull out the specific details you need. More advanced tools include **Code Execution** for running calculations and data processing, and **Browser Automation** for complex web interactions. These advanced features are typically used in specialized workflows but demonstrate the breadth of what compound models can accomplish.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: When to Use Compound vs. Standard
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "When to Use Compound vs. Standard",
        paragraphs: [
          "**Use Compound AI when you need:**",
          "Current events, real-time data, stock prices, recent news, weather, live sports scores, or any information that changes frequently.",
          "",
          "**Use Standard models when you need:**",
          "Creative writing, drafting emails, analyzing text you provide, brainstorming, summarization, or working with information that doesn't require live data.",
          "",
          "The speed trade-off is minimal—compound models are still faster than most competitors' standard models.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Try Compound AI
    // ===========================================================================
    {
      id: "section-6",
      type: "quickPrompt",
      content: {
        heading: "Try Compound AI",
        description: "Test compound-beta-mini with a question that requires current information:",
        promptText:
          "What are the top 3 tech news stories today? Summarize each in 2 sentences with sources.",
      },
    },
    // ===========================================================================
    // SECTION 7: Tool Reference
    // ===========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Use ChatGPT Console",
        task: "Select and test compound-beta models",
        feature: "Tool-enabled models with web search",
        tip: "Use compound-beta-mini for quick lookups and compound-beta for deeper research requiring multiple sources",
      },
    },
    // ===========================================================================
    // SECTION 8: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Test Compound AI with Real-Time Research",
        purpose:
          "Experience Compound AI's ability to fetch current information that standard models cannot access.",
        instructions: [
          "Open ChatGPT Console and select 'compound-beta-mini'",
          "Ask a question requiring current/recent information",
          "Observe how the model searches and synthesizes sources",
          "Compare the sources cited and their recency",
          "Try the same question with a standard model to see the difference",
        ],
        deliverable: "A real-time research result with cited sources showing Compound AI in action",
        estimatedTime: "5-7 minutes",
        starterPrompt:
          "What are the top 3 tech news stories today? Summarize each in 2 sentences and include your sources.",
        successCriteria: [
          "Used compound-beta-mini for real-time information",
          "Received response with current (today's/recent) information",
          "Saw sources cited in the response",
          "Understand when to use Compound vs. standard models",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: Completion
    // ===========================================================================
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Compound AI Foundations Complete",
        description:
          "You now understand ChatGPT's Compound AI models—tool-enabled assistants that can fetch real-time information at incredible speeds. You know when to use compound-beta-mini for quick lookups and compound-beta for deeper research. Next, we'll dive into specific research workflows.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
