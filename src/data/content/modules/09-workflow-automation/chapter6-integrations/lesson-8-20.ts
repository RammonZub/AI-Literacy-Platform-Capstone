/**
 * Lesson 8.20: No-Code Integrations
 *
 * CHAPTER: 6 - Integrations & Connections
 * LESSON: 1 of 3 - No-Code Integrations
 *
 * DURATION: 15 minutes (practical application)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Connect ChatGPT to existing tools without writing code
 *
 * KEY RESPONSIBILITIES:
 * - Introduce no-code integration platforms (Zapier, Make, Vercel)
 * - Provide practical workflow examples
 * - Help users choose the right platform for their needs
 */

import type { Lesson } from "@/types/content";

export const lesson_8_20: Lesson = {
  id: "lesson-8-20",
  chapterId: "ch8-6-integrations",
  moduleId: "09-workflow-automation",
  title: "No-Code Integrations",
  description: "Connect ChatGPT to your existing tools without coding",
  order: 20,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // HERO IMAGE SECTION
    // ===========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-20-cover.webp",
        imageAlt: "Connected technology and integrations",
        title: "No-Code Integrations",
        subtitle: "Connect ChatGPT to your existing tools without writing a single line of code",
      },
    },
    // ===========================================================================
    // SECTION 1: Why No-Code Integrations Matter
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why No-Code Integrations Matter",
        paragraphs: [
          "Every time you switch between apps, you lose momentum. Copy-paste from ChatGPT to your email. Copy-paste from your documents to ChatGPT. It adds up.",
          "",
          "No-code integrations eliminate this friction. They connect ChatGPT directly to the tools you already use—Gmail, Slack, Google Sheets, calendars, and thousands more.",
          "",
          "The result? AI-powered workflows that run automatically in the background, saving you time on every task.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: The Integration Advantage
    // ===========================================================================
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "The Integration Advantage",
        insights: [
          "Connect ChatGPT to 5,000+ apps without writing code",
          "Automate repetitive tasks that currently take minutes each",
          "Speed becomes even more valuable when it's automatic",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Zapier: The Easiest Starting Point
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Zapier: The Easiest Starting Point",
        paragraphs: [
          "Zapier is the most popular no-code automation platform, and for good reason. It connects to over 5,000 apps and uses a simple 'when this happens, do that' structure.",
          "",
          "**How it works**: You create 'Zaps'—automated workflows that trigger when something happens in one app and perform actions in another.",
          "",
          "**ChatGPT + Zapier**: ChatGPT can be the 'brain' in your Zaps, processing text, generating content, or making decisions based on data.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Example Zapier Workflows with ChatGPT
    // ===========================================================================
    {
      id: "section-4",
      type: "textWithBullets",
      content: {
        title: "Example Zapier Workflows with ChatGPT",
        paragraphs: ["Here are practical workflows you can set up in minutes:"],
        bullets: [
          "**Email Summary to Slack**: New Gmail message triggers ChatGPT to summarize the email and post key points to a Slack channel",
          "",
          "**Form Response Analysis**: New Google Form submission triggers ChatGPT to categorize the response and add insights to a spreadsheet",
          "",
          "**RSS Feed Digest**: New articles in an RSS feed trigger ChatGPT to summarize and send a daily digest email",
          "",
          "**Calendar Meeting Prep**: New calendar event triggers ChatGPT to research attendees and prepare talking points, sent to your inbox",
          "",
          "**Customer Support Triage**: New support ticket triggers ChatGPT to classify urgency and suggest response, routed to the right team",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Make.com: For More Complex Workflows
    // ===========================================================================
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Make.com: For More Complex Workflows",
        paragraphs: [
          "Make.com (formerly Integromat) is similar to Zapier but offers more visual complexity and better pricing for high-volume use.",
          "",
          "**When to choose Make over Zapier**:",
          "- You need multiple branching logic paths",
          "- You're processing high volumes (1000+ operations/day)",
          "- You want more control over data transformation",
          "- Cost is a primary concern (Make is often cheaper at scale)",
        ],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-20-inline-1.webp",
        imageAlt: "Complex workflow visualization",
      },
    },
    // ===========================================================================
    // SECTION 6: Vercel Marketplace: For Simple Custom Apps
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Vercel Marketplace: For Simple Custom Apps",
        paragraphs: [
          "If you want to build a simple custom tool that uses ChatGPT, Vercel's AI marketplace offers one-click deployment options that bridge the gap between no-code and full development. This approach works well when you need something more customized than what Zapier provides but don't want to build from scratch.",
          "The marketplace offers pre-built templates for common use cases like AI chatbots, document analyzers, and content generators. These templates come with ChatGPT integration already configured, so you don't need to figure out API connections or authentication yourself. Vercel handles all the server management automatically, meaning you can deploy a functional AI tool without worrying about infrastructure, scaling, or maintenance.",
          "Perhaps most appealing for those just getting started, Vercel offers a free tier that lets you experiment without cost. You can build and test your custom tool, then scale up only when you're ready for production use. This makes it an excellent middle ground between the simplicity of Zapier and the flexibility of custom development.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Choosing Your Platform
    // ===========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Choosing Your Platform",
        paragraphs: [
          "**Choose Zapier if**:",
          "- You're new to automation and want the easiest setup",
          "- You need integrations with the widest range of apps",
          "- Your workflows are relatively straightforward",
          "",
          "**Choose Make.com if**:",
          "- You have complex, multi-step workflows with branching logic",
          "- You process high volumes and cost matters",
          "- You're comfortable with a slightly steeper learning curve",
          "",
          "**Choose Vercel if**:",
          "- You want a standalone tool (like a custom chatbot)",
          "- You're okay with a bit more technical setup",
          "- You need something public-facing (like a customer tool)",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Quick Prompt Example
    // ===========================================================================
    {
      id: "section-8",
      type: "quickPrompt",
      content: {
        heading: "Your First Integration Idea",
        description:
          "Think about a repetitive task you do weekly. Describe it, and we'll identify how ChatGPT could automate it:",
        promptText:
          "I want to automate [task description]. It currently takes me [time] and involves [apps/tools]. I want ChatGPT to [what ChatGPT should do].",
      },
    },
    // ===========================================================================
    // SECTION 9: Tool Reference
    // ===========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Connect via Zapier or Make",
        task: "Build no-code automation workflows",
        feature: "API integration with 5,000+ apps through Zapier/Make",
        tip: "Start with Zapier for simplicity. Use Make.com when you need complex branching or high-volume processing.",
      },
    },
    // ===========================================================================
    // SECTION 10: Actionable Task
    // ===========================================================================
    {
      id: "section-9",
      type: "actionableTask",
      content: {
        title: "Your Turn: Design Your First Integration",
        purpose: "Identify and plan a no-code integration that would save you time every week.",
        instructions: [
          "List 3 repetitive tasks that involve copy-pasting between apps",
          "Choose the one that would save the most time if automated",
          "Describe the trigger (what starts the workflow)",
          "Define what ChatGPT should do in the middle",
          "Specify the output destination (where results should go)",
        ],
        deliverable: "A detailed integration plan ready to implement in Zapier or Make",
        estimatedTime: "8-10 minutes",
        starterPrompt:
          "I want to automate [task]. It currently takes me [time] and involves [apps/tools]. I want ChatGPT to [specific AI task]. Design a Zapier workflow that would automate this.",
        successCriteria: [
          "Identified at least 3 automation opportunities",
          "Chose one high-impact integration to prioritize",
          "Documented trigger, action, and output clearly",
          "Ready to implement in Zapier or Make",
        ],
      },
    },
    // ===========================================================================
    // SECTION 11: Completion
    // ===========================================================================
    {
      id: "section-10",
      type: "completion",
      content: {
        title: "Integration Possibilities Unlocked",
        description:
          "You now understand how no-code platforms can connect ChatGPT to your existing tools. The key insight: ChatGPT's speed becomes even more valuable when it's automatic. Start with one simple Zapier workflow and expand from there.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
