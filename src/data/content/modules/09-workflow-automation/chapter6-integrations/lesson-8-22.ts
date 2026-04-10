/**
 * Lesson 8.22: Simple API Concepts
 *
 * CHAPTER: 6 - Integrations & Connections
 * LESSON: 3 of 3 - Simple API Concepts
 *
 * DURATION: 15 minutes (conceptual/practical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Explain API basics for working with developers or simple integrations
 *
 * KEY RESPONSIBILITIES:
 * - Demystify APIs with plain English explanations
 * - Explain OpenAI compatibility for easy migration
 * - Guide when to involve developers vs. DIY
 */

import type { Lesson } from "@/types/content";

export const lesson_8_22: Lesson = {
  id: "lesson-8-22",
  chapterId: "ch8-6-integrations",
  moduleId: "09-workflow-automation",
  title: "Simple API Concepts",
  description: "Understand API basics for working with developers or simple integrations",
  order: 22,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "theory",
  sections: [
    // ===========================================================================
    // HERO IMAGE SECTION
    // ===========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-22-cover.webp",
        imageAlt: "Code and API connections",
        title: "Simple API Concepts",
        subtitle: "Demystify APIs and learn to communicate effectively about integrations",
      },
    },
    // ===========================================================================
    // SECTION 1: What Is an API? (Plain English)
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "What Is an API? (Plain English)",
        paragraphs: [
          "An API (Application Programming Interface) is simply a way for two pieces of software to talk to each other.",
          "",
          "**Think of it like a restaurant**:",
          "- **You** = the customer who wants something",
          "- **The kitchen** = the system that can make what you want",
          "- **The waiter** = the API",
          "",
          "You don't walk into the kitchen and cook yourself. You tell the waiter what you want, the waiter communicates with the kitchen, and the kitchen delivers your order.",
          "",
          "APIs work the same way. You send a request (your order), the API delivers it to the system (the kitchen), and you receive a response (your meal).",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: API in One Sentence
    // ===========================================================================
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "API in One Sentence",
        insights: [
          "An API is a messenger that takes your request, delivers it to a system, and brings back the response",
          "You don't need to understand how the system works internally",
          "You just need to know what to ask for and how to understand the answer",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: ChatGPT's API: What You're Requesting
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "ChatGPT's API: What You're Requesting",
        paragraphs: [
          "When you use ChatGPT's API, you're essentially asking: 'Take this text, process it with AI, and give me the response.'",
          "",
          "**Your request might look like**: 'Here's an email thread. Summarize it in 3 bullet points.'",
          "",
          "**ChatGPT's API response**: '- Meeting scheduled for Tuesday - Budget approved with one modification - Follow-up needed on timeline'",
          "",
          "That's it. You send text, you get text back. The magic is in the AI processing, but the API itself is straightforward communication.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: OpenAI Compatibility: Why It Matters
    // ===========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "OpenAI Compatibility: Why It Matters",
        paragraphs: [
          "Something that makes ChatGPT particularly easy to work with is its compatibility with OpenAI's API format. ChatGPT uses the same API structure as OpenAI, the company behind ChatGPT. This means the way you format requests and receive responses is identical between the two platforms. For practical purposes, this compatibility dramatically simplifies migration and integration.",
          "Switching from ChatGPT to ChatGPT often requires just changing the URL endpoint in your code or configuration. You don't need to rewrite your entire integration or learn a new system from scratch. This drop-in replacement capability means you can test ChatGPT's speed advantages with minimal investment of time and effort.",
          "The ecosystem benefits are substantial too. Many tools built for OpenAI work with ChatGPT automatically because they speak the same language. Developers already familiar with OpenAI's patterns can use ChatGPT immediately without a learning curve. This compatibility extends to documentation, examples, and community resources, making it easier to find help when you need it.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: What This Means Practically
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "What This Means Practically",
        paragraphs: [
          "If you find a tool, integration, or template that works with ChatGPT, there's a good chance it can work with ChatGPT too—often with minimal modification.",
          "",
          "This is a significant advantage. Instead of building everything from scratch, you can leverage the entire ecosystem of OpenAI-compatible tools and just point them at ChatGPT's faster infrastructure.",
          "",
          "**Example**: A developer who has built ChatGPT integrations can switch to ChatGPT in minutes, not days.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: API Key Basics
    // ===========================================================================
    {
      id: "section-6",
      type: "textWithImage",
      content: {
        title: "API Key Basics",
        paragraphs: [
          "To use ChatGPT's API, you need an API key—think of it like a password that proves you're authorized to use the service.",
          "",
          "**What an API key does**:",
          "- Identifies you to ChatGPT's systems",
          "- Tracks your usage for billing (free tier or paid)",
          "- Ensures only you can use your allocated resources",
          "",
          "**API key safety**:",
          "- Never share your API key publicly (like on GitHub)",
          "- Treat it like a password—keep it secret",
          "- You can regenerate your key if it's ever compromised",
        ],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-22-inline-1.webp",
        imageAlt: "Security keys and authentication",
      },
    },
    // ===========================================================================
    // SECTION 7: Finding Your ChatGPT API Key
    // ===========================================================================
    {
      id: "section-7",
      type: "highlightCard",
      content: {
        heading: "Finding Your ChatGPT API Key",
        insights: [
          "Log into chat.openai.com",
          "Navigate to API Keys section",
          "Create a new key (give it a descriptive name)",
          "Copy and store it securely—you won't see it again",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: When to Involve a Developer
    // ===========================================================================
    {
      id: "section-8",
      type: "text",
      content: {
        title: "When to Involve a Developer",
        paragraphs: [
          "No-code platforms (Zapier, Make) handle most needs. But sometimes you need custom development:",
          "",
          "**Involve a developer when**:",
          "- You need a custom app or interface",
          "- Your workflow requires complex logic beyond no-code capabilities",
          "- You're integrating with proprietary or custom systems",
          "- You need to process sensitive data with specific security requirements",
          "",
          "**What to ask for**:",
          "- 'I need to connect ChatGPT to [specific system]'",
          "- 'Here's what I want to happen: [describe the workflow]'",
          "- 'The inputs are [X] and I need outputs like [Y]'",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: No-Code vs. Low-Code vs. Code
    // ===========================================================================
    {
      id: "section-9",
      type: "textWithBullets",
      content: {
        title: "No-Code vs. Low-Code vs. Code",
        paragraphs: ["Understanding the spectrum helps you choose the right approach:"],
        bullets: [
          "**No-Code** (Zapier, Make): Visual builders, no technical knowledge needed. Best for: Most business users, standard integrations, quick wins.",
          "",
          "**Low-Code** (Google Apps Script, simple modifications): Some coding, but mostly visual. Best for: Spreadsheet power users, minor customizations.",
          "",
          "**Code** (Full custom development): Complete flexibility, requires programming. Best for: Complex requirements, proprietary systems, scaled deployments.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: The Pragmatic Approach
    // ===========================================================================
    {
      id: "section-10",
      type: "text",
      content: {
        title: "The Pragmatic Approach",
        paragraphs: [
          "Start with no-code. It covers 80% of integration needs with 20% of the effort.",
          "",
          "Only escalate to low-code or full development when you hit specific limitations. Most professionals never need to go beyond Zapier or Make.",
          "",
          "**Your decision framework**:",
          "1. Can Zapier or Make do it? Start there.",
          "2. Need more control? Try Google Apps Script for spreadsheet work.",
          "3. Still not enough? Involve a developer for custom solutions.",
          "",
          "The goal isn't to become a programmer—it's to choose the simplest tool that solves your problem.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 11: Quick Prompt Example
    // ===========================================================================
    {
      id: "section-11",
      type: "quickPrompt",
      content: {
        heading: "Your Integration Comfort Level",
        description: "Reflect on where you are and where you might want to go:",
        promptText:
          "I'm currently comfortable with [no-code/low-code/coding]. My next integration challenge is [describe]. I should probably [approach].",
      },
    },
    // ===========================================================================
    // SECTION 12: Tool Reference
    // ===========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Get API Key from Console",
        task: "Connect to ChatGPT via API",
        feature: "OpenAI-compatible API for easy integration",
        tip: "Your API key is like a password—never share it publicly. Get yours from platform.openai.com/api-keys",
      },
    },
    // ===========================================================================
    // SECTION 13: Actionable Task
    // ===========================================================================
    {
      id: "section-11-actionable",
      type: "actionableTask",
      content: {
        title: "Your Turn: Assess Your Integration Path",
        purpose:
          "Determine whether no-code, low-code, or custom development is right for your integration needs.",
        instructions: [
          "List the 3 most important integrations you want to build",
          "For each, assess: complexity, volume, and technical requirements",
          "Categorize each as no-code, low-code, or custom development",
          "Identify which one to tackle first based on impact vs. effort",
          "Create a learning plan if developer help is needed",
        ],
        deliverable: "An integration roadmap with categorized projects and priority order",
        estimatedTime: "10 minutes",
        starterPrompt:
          "I need to build an integration that [describe what it does]. The data volume is [amount]. Should I use no-code (Zapier/Make), low-code (Apps Script), or involve a developer? Explain why.",
        successCriteria: [
          "Listed 3 specific integration projects",
          "Categorized each by implementation approach",
          "Prioritized based on impact vs. effort",
          "Have clear next steps for the first integration",
        ],
      },
    },
    // ===========================================================================
    // SECTION 14: Completion
    // ===========================================================================
    {
      id: "section-12",
      type: "completion",
      content: {
        title: "API Concepts Unlocked",
        description:
          "You now understand what APIs are (messengers between systems), why ChatGPT's OpenAI compatibility matters, what API keys do, and when to involve developers vs. handle things yourself. The key insight: APIs are communication tools, and you don't need to be technical to understand what they do.",
        xpReward: 100,
        buttonText: "Complete Chapter 6",
      },
    },
  ],
};
