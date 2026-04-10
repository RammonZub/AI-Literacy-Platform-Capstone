/**
 * Lesson 6.25: Claude Integrations & Automations
 *
 * CHAPTER: 6 - Integrations & Team Features
 * LESSON: 1 of 6 - Third-Party Integrations
 *
 * DURATION: 14 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Connect Claude with other tools through integrations and automation
 *
 * KEY RESPONSIBILITIES:
 * - Explain available third-party integrations
 * - Demonstrate automation workflows with Zapier/Make
 * - Show how to build a connected AI stack
 */

import type { Lesson } from "@/types/content";

export const lesson_6_25: Lesson = {
  id: "lesson-6-25",
  chapterId: "ch6-6-integrations",
  moduleId: "06-tools-claude",
  lessonCategory: "tutorial",
  title: "Claude Integrations & Automations",
  description:
    "Connect Claude with your favorite tools through integrations and automation platforms",
  order: 25,
  estimatedMinutes: 14,
  xpReward: 100,
  format: "article",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-25-cover.webp",
        imageAlt: "Claude integrations and automation workflows",
        title: "Claude Integrations & Automations",
        subtitle:
          "Connect Claude with your favorite tools through integrations and automation platforms",
      },
    },
    // ===========================================================================
    // SECTION 1: Cover Introduction
    // ===========================================================================
    {
      id: "section-cover",
      type: "textWithImage",
      content: {
        title: "Claude Integrations & Automations",
        paragraphs: [
          "Claude becomes exponentially more powerful when connected to your other tools. Learn to build automated workflows that put Claude to work in the background.",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-25-inline-1.webp",
        imageAlt: "System integrations and automation workflows",
      },
    },
    // ===========================================================================
    // SECTION 2: The Integration Landscape
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "The Integration Landscape",
        paragraphs: [
          "Claude connects with other tools through several pathways:",
          "",
          "**Direct integrations**: Built-in connections to popular platforms (Slack, Google Workspace, etc.)",
          "",
          "**API access**: Claude's API lets developers build custom integrations",
          "",
          "**Automation platforms**: Tools like Zapier and Make connect Claude to thousands of apps",
          "",
          "**Native features**: Chrome extension, desktop apps, mobile apps",
          "",
          "For most professionals, automation platforms offer the best balance of power and accessibility.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Automation Platforms
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Zapier and Make: Your Automation Enablers",
        paragraphs: [
          "Automation platforms act as bridges between Claude and other applications. They let you connect Claude to thousands of other tools without writing code, making AI-powered automation accessible to anyone regardless of technical background.",
          "",
          "Zapier is the most user-friendly option for getting started. It connects to over 5000 apps and excels at straightforward automations. If your workflow follows a clear trigger-action pattern—when X happens, do Y—Zapier handles it elegantly. The interface guides you through each step, and extensive templates help you get started quickly.",
          "",
          "Make (formerly Integromat) offers more visual and sophisticated workflow building. When you need complex multi-step workflows with conditional logic, branching paths, and data transformations, Make provides the flexibility Zapier sometimes lacks. The visual canvas lets you see exactly how your automation flows from start to finish.",
          "",
          "Both platforms share important advantages: no coding is required, visual workflow builders make automation accessible, and extensive template libraries help you get started quickly. You can often find pre-built automation recipes that do almost what you need, then customize them for your exact requirements.",
          "",
          "The key requirement for both platforms is a Claude API key, available through your Anthropic account settings. This key authenticates your automations with Claude's API, allowing the platforms to send requests on your behalf. Keep this key secure—it's essentially your password for API access.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Practical Automation Examples
    // ===========================================================================
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "Automation Ideas",
        insights: [
          "Auto-summarize emails and save to Notion",
          "Generate social posts from blog RSS feeds",
          "Draft responses to customer feedback forms",
          "Analyze survey responses and create reports",
          "Transcribe and summarize meeting recordings",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Setting Up Your First Automation
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Setting Up Your First Automation",
        paragraphs: [
          "A simple Zapier automation to get started:",
          "",
          "**Trigger**: New email received in Gmail with specific label",
          "",
          "**Action**: Send email content to Claude for summarization",
          "",
          "**Action**: Save Claude's summary to a Google Doc or Notion page",
          "",
          "**Result**: Every important email automatically summarized and archived.",
          "",
          "The setup process is guided—no technical expertise required. Both platforms offer extensive documentation and templates.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Building Your Claude Stack
    // ===========================================================================
    {
      id: "section-6",
      type: "textWithImage",
      content: {
        title: "Building Your Claude Stack",
        paragraphs: [
          "Think of your Claude stack as an integrated productivity system:",
          "",
          "**Input sources**: Email, Slack, forms, documents, web pages",
          "",
          "**Claude processing**: Summarization, analysis, drafting, transformation",
          "",
          "**Output destinations**: Documents, databases, communication tools, storage",
          "",
          "**Automation glue**: Zapier, Make, or custom scripts connecting everything",
          "",
          "Start simple with one automation, then expand as you identify more opportunities.",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-25-inline-2.webp",
        imageAlt: "Integrated productivity system architecture",
      },
    },
    // ===========================================================================
    // SECTION 7: Best Practices
    // ===========================================================================
    {
      id: "section-7",
      type: "highlightCard",
      content: {
        heading: "Integration Best Practices",
        insights: [
          "Start small: One automation at a time, test thoroughly",
          "Monitor costs: API usage can add up—set budgets and alerts",
          "Human review: Build in review steps for important outputs",
          "Document workflows: Keep notes on what each automation does",
          "Regular audits: Remove unused, optimize others",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Tool Reference
    // ===========================================================================
    {
      id: "section-tool-reference",
      type: "toolReference",
      content: {
        tool: "claude",
        action: "For integrations and automations",
        task: "Connect Claude to your favorite tools through Zapier, Make, or direct API access for automated workflows",
        feature: "API & Integrations",
        tip: "Start with automation platforms like Zapier or Make, and keep your API key secure",
      },
    },
    // ===========================================================================
    // SECTION 9: Quick Prompt
    // ===========================================================================
    {
      id: "section-9",
      type: "quickPrompt",
      content: {
        heading: "Identify Automation Opportunities",
        description: "Think about repetitive tasks that Claude could handle automatically.",
        promptText:
          "Ask Claude: 'Help me identify tasks in my workflow that could be automated. I frequently [describe 2-3 things you do regularly].'",
      },
    },
    // ===========================================================================
    // SECTION 10: Your Turn - Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Design an Automation",
        purpose:
          "Plan a real automation that connects Claude to your existing tools and workflows.",
        instructions: [
          "Identify one repetitive task in your workflow that could be automated",
          "Map out: What triggers it? What should Claude do? Where should output go?",
          "Sketch the automation flow (trigger -> Claude -> output)",
          "If ambitious, try setting it up in Zapier or Make",
        ],
        deliverable:
          "An automation design document with trigger, Claude action, and output destination",
        estimatedTime: "15 minutes",
        successCriteria: [
          "You identified a real automation opportunity",
          "You mapped the complete automation flow",
          "You understand what tools would be needed",
          "You have a clear next step for implementation",
        ],
      },
    },
    // ===========================================================================
    // SECTION 11: End-of-Lesson Checkpoint
    // ===========================================================================
    {
      id: "section-quiz",
      type: "checkpoint",
      content: {
        question: "How can you connect Claude with other tools automatically?",
        options: [
          "It is not possible to connect Claude with other tools",
          "Through automation platforms like Zapier and Make that trigger Claude based on events",
          "Only through manual copy-paste",
          "Claude works with all tools natively",
        ],
        correctAnswer: 1,
        hint: 'Review "Automation Platforms" section if needed.',
      },
    },
    // ===========================================================================
    // SECTION 12: Completion
    // ===========================================================================
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Integration Possibilities Explored",
        description:
          "You now understand how to connect Claude with your other tools through automation platforms. These integrations multiply Claude's impact by putting it to work automatically in your existing workflows.",
        xpReward: 100,
        buttonText: "Complete Integrations",
      },
    },
  ],
};
