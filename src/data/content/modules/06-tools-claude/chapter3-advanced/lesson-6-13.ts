/**
 * Lesson 6.13: API and Integration Basics
 *
 * CHAPTER: 3 - Advanced Features
 * LESSON: 3 of 5 - Programmatic Access
 *
 * DURATION: 12 minutes (technical overview)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Introduce Claude API for programmatic access
 *
 * KEY RESPONSIBILITIES:
 * - Explain API access and use cases
 * - Provide practical integration patterns
 * - Show when API makes sense vs. web interface
 */

import type { Lesson } from "@/types/content";

export const lesson_6_13: Lesson = {
  id: "lesson-6-13",
  chapterId: "ch6-3-advanced",
  moduleId: "06-tools-claude",
  title: "API and Integration Basics",
  description: "Understand when and how to use Claude's API for programmatic access",
  order: 13,
  estimatedMinutes: 12,
  xpReward: 100,
  lessonCategory: "tutorial",
  format: "article",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-13-cover.webp",
        imageAlt: "API connections and system integration",
        title: "API and Integration Basics",
        subtitle: "Connect Claude to your tools and workflows",
      },
    },
    // ===========================================================================
    // SECTION 1: When to Use the API
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "When to Use the API",
        paragraphs: [
          "The web interface (claude.ai) is perfect for interactive use. The API becomes valuable when you need: programmatic access, integration into tools or workflows, automated interactions, or building features on top of Claude.",
          "Think: API for when Claude needs to be part of a system; web interface for when you're the system.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Tool Reference
    // ===========================================================================
    {
      id: "section-tool-reference",
      type: "toolReference",
      content: {
        tool: "claude",
        action: "To explore the API",
        task: "Visit docs.anthropic.com to see API documentation and examples",
        feature: "API Access",
        tip: "Sign up at console.anthropic.com for API keys and testing",
      },
    },
    // ===========================================================================
    // SECTION 3: API Use Cases
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "API Use Cases",
        paragraphs: [
          "Understanding when Claude's API is the right choice helps you make informed decisions about how to integrate AI into your work. The API becomes valuable when you need programmatic access rather than interactive conversations.",
          "",
          "Internal tools represent one of the most common API use cases. You can build company-specific assistants that leverage Claude's capabilities within your organization's existing systems. These custom tools can incorporate your company's knowledge, follow your processes, and integrate with your other software.",
          "",
          "Workflow automation is another powerful application. The API lets you trigger Claude responses from existing systems automatically, enabling AI assistance without manual intervention. For example, you could automatically have Claude summarize incoming support tickets or categorize customer feedback.",
          "",
          "Customer-facing features let you embed AI-powered capabilities directly into your product. Whether that's a chatbot for customer support, a content recommendation engine, or a document analysis tool, the API enables you to offer Claude's capabilities to your users through your own interface.",
          "",
          "Batch processing becomes possible through the API in ways that wouldn't be practical through the web interface. You can process many items programmatically, whether that's analyzing thousands of documents, generating content at scale, or transforming data sets.",
          "",
          "Custom interfaces built with the API let you create specialized UIs for specific use cases. You're not limited to chat interfaces—you can build whatever interaction model makes sense for your application, from form-based tools to voice interfaces to visual applications.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: API Basics
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "API Basics",
        insights: [
          "Claude's API provides programmatic access through a REST interface",
          "You send messages (like a conversation) and receive responses",
          "The API supports the same models with streaming and customization options",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Comparison Table
    // ===========================================================================
    {
      id: "section-comparison",
      type: "comparisonTable",
      content: {
        title: "Web Interface vs. API",
        intro: "Choose the right access method for your needs:",
        columns: [
          { name: "Web Interface", description: "claude.ai" },
          { name: "API", description: "Programmatic access" },
        ],
        rows: [
          { feature: "Best for", values: ["Interactive conversations", "Automated workflows"] },
          { feature: "User type", values: ["Human users", "Developers, systems"] },
          { feature: "Integration", values: ["Manual copy/paste", "Direct app integration"] },
          { feature: "Automation", values: [false, true] },
          { feature: "Batch processing", values: [false, true] },
          { feature: "Setup required", values: ["Just login", "API key + code"] },
        ],
        footer:
          "Most users start with the web interface and add API access when they need automation.",
      },
    },
    // ===========================================================================
    // SECTION 6: Getting Started with the API
    // ===========================================================================
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "Getting Started with the API",
        paragraphs: [
          "**Access**: Sign up at console.anthropic.com for API access",
          "**Documentation**: docs.anthropic.com has comprehensive API docs, examples, and best practices",
          "**SDKs**: Official SDKs available for Python and TypeScript (recommended over direct REST)",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-13-inline-1.webp",
        imageAlt: "Developer tools and API integration",
      },
    },
    // ===========================================================================
    // SECTION 7: Quick Prompt
    // ===========================================================================
    {
      id: "section-5",
      type: "quickPrompt",
      content: {
        heading: "Explore: API Documentation",
        description: "Visit docs.anthropic.com and explore the Claude API documentation.",
        promptText:
          "Visit docs.anthropic.com and explore the Claude API documentation. Look at the quickstart example to understand the basic structure of API requests.",
      },
    },
    // ===========================================================================
    // SECTION 8: Actionable Task (Inline)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Evaluate API Opportunities",
        purpose: "Identify a real opportunity in your work where Claude's API could add value.",
        instructions: [
          "Think about repetitive tasks in your workflow that involve AI assistance",
          "Identify one task that could benefit from automation or integration",
          "Visit docs.anthropic.com and find an example similar to your use case",
          "Sketch out how an API integration would work (no coding required)",
        ],
        deliverable:
          "A brief description of an API opportunity and how it would improve your workflow",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "Consider: What task do I do repeatedly that Claude could handle automatically if integrated into my tools?",
        successCriteria: [
          "You identified a real workflow opportunity for API integration",
          "You explored the Anthropic API documentation",
          "You have a clear picture of how the integration would work",
          "You understand when API vs. web interface is the right choice",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: End-of-Lesson Checkpoint
    // ===========================================================================
    {
      id: "section-quiz",
      type: "checkpoint",
      content: {
        question: "When does it make sense to use Claude API instead of the web interface?",
        options: [
          "Always - API is better for everything",
          "Never - the web interface is always superior",
          "When building integrations, automating workflows, or embedding Claude in applications",
          "Only for personal use",
        ],
        correctAnswer: 2,
        hint: 'Review "When to Use the API" section if needed.',
      },
    },
    // ===========================================================================
    // SECTION 9: Completion
    // ===========================================================================
    {
      id: "section-8",
      type: "completion",
      content: {
        title: "API Awareness Complete",
        description:
          "You now understand when Claude's API makes sense, what use cases it enables, and how to get started. Whether you build integrations yourself or work with developers who do, you have the foundation to make informed decisions.",
        xpReward: 100,
        buttonText: "Complete API Understanding",
      },
    },
  ],
};
