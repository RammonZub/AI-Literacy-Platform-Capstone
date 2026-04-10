/**
 * Lesson 5.27: Custom GPTs and Actions (Advanced)
 *
 * CHAPTER: 5 - Integrations & Capstone
 * LESSON: 27 of 30 - Custom GPTs & Actions
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Master advanced Custom GPT features including API actions and webhooks
 *
 * KEY CONCEPTS:
 * - Creating advanced custom GPTs
 * - API actions and webhooks
 * - Knowledge base integration
 * - Sharing and publishing GPTs
 */

import type { Lesson } from "@/types/content";

export const lesson_5_27: Lesson = {
  id: "lesson-5-27",
  chapterId: "ch5-5-integrations",
  moduleId: "05-tools-chatgpt",
  title: "Custom GPTs and Actions (Advanced)",
  description: "Build GPTs that connect to external systems and access real-time data",
  order: 27,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // SECTION: Hero Image
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-27-cover.webp",
        imageAlt: "Advanced AI and custom GPT development",
        title: "Custom GPTs and Actions",
        subtitle: "Build GPTs that connect to external systems",
      },
    },
    // ===========================================================================
    // SECTION: Introduction
    // ===========================================================================
    {
      id: "section-intro",
      type: "text",
      content: {
        title: "Understanding Actions",
        paragraphs: [
          "You've created basic custom GPTs. Now we go further: GPTs that fetch real data, call APIs, and integrate with your existing tools through Actions.",
          "",
          "**Actions** let your custom GPT interact with external services. While a basic GPT only knows what's in its instructions and uploaded files, a GPT with Actions can:",
          "",
          "- Fetch real-time data from APIs",
          "- Send information to external systems",
          "- Query databases (with proper authentication)",
          "- Trigger workflows in other tools",
          "",
          "Think of Actions as giving your GPT hands to work with the outside world.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Highlight Card - Actions vs Basic GPTs
    // ===========================================================================
    {
      id: "section-highlight-actions",
      type: "highlightCard",
      content: {
        heading: "Actions vs. Basic GPTs",
        insights: [
          "Basic GPT: Knows training data and uploaded files only",
          "GPT with Actions: Can fetch live data, update systems, and trigger workflows",
          "Actions require API endpoints and authentication setup",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Actions Technical Overview
    // ===========================================================================
    {
      id: "section-technical-overview",
      type: "textWithBullets",
      content: {
        title: "Actions Technical Overview",
        paragraphs: ["To add Actions to your GPT:"],
        bullets: [
          "**1. Define the Schema**: Describe what your API can do using OpenAPI specification (JSON format)",
          "",
          "**2. Authentication**: Set up how the GPT authenticates with your API (API key, OAuth, etc.)",
          "",
          "**3. Configure in GPT Builder**: Paste your schema into the Actions section of your GPT",
          "",
          "**4. Test**: Use the GPT to call your API and verify responses",
          "",
          "**Important**: This requires access to APIs. Many services provide APIs (weather, CRM, databases), or you can create your own using tools like Zapier's webhooks.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Visual Break - Real-World Use Cases
    // ===========================================================================
    {
      id: "section-usecases-visual",
      type: "textWithImage",
      content: {
        title: "Real-World Action Use Cases",
        paragraphs: [
          "Here's what becomes possible when GPTs connect to external systems. These are professional-grade GPTs that can actually DO things, not just talk.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-27-inline-1.webp",
        imageAlt: "API integrations and connected systems",
      },
    },
    // ===========================================================================
    // SECTION: Advanced GPT Examples
    // ===========================================================================
    {
      id: "section-gpt-examples",
      type: "text",
      content: {
        title: "Advanced GPT Examples",
        paragraphs: [
          "Professional GPTs with Actions transform how businesses operate. A CRM Assistant GPT can query HubSpot or Salesforce for customer data, create new contacts when provided with information, and update deal stages based on conversation context. This eliminates the need to switch between ChatGPT and your CRM constantly, allowing sales professionals to maintain conversation flow while keeping records updated in real time.",
          "",
          "An Inventory Check GPT demonstrates the power of connecting AI to operational systems. By querying product databases for stock levels, creating purchase orders when inventory runs low, and sending alerts through webhook connections, this type of GPT moves beyond conversation into actual business process automation. The GPT becomes an active participant in supply chain management rather than just a source of information.",
          "",
          "Knowledge Base GPTs represent perhaps the most transformative application for large organizations. These GPTs search company documentation via API, return live policy information, and can even update the knowledge base when gaps are identified. Instead of employees hunting through wikis and shared drives, they simply ask the GPT and receive accurate, current information instantly. This capability fundamentally changes how institutional knowledge flows through an organization.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Highlight Card - Webhooks
    // ===========================================================================
    {
      id: "section-highlight-webhooks",
      type: "highlightCard",
      content: {
        heading: "Webhooks: The No-Code Bridge",
        insights: [
          "Webhooks let GPTs trigger actions without building APIs",
          "Use Zapier or Make.com webhooks as simple API endpoints",
          "Your GPT sends data to the webhook, which then triggers your automation",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Setting Up Webhook Actions
    // ===========================================================================
    {
      id: "section-webhook-setup",
      type: "text",
      content: {
        title: "Setting Up Webhook Actions",
        paragraphs: [
          "Webhooks provide a no-code bridge between your GPT and thousands of other tools. The setup process connects your GPT to automation platforms without requiring programming knowledge.",
          "Start by creating a webhook URL in Zapier or Make.com. This URL becomes the destination your GPT will send data to. Each automation platform generates a unique webhook URL that you can copy and use immediately.",
          "Next, add an Action in your GPT that points to that webhook URL. In the GPT Builder's Actions section, you'll configure the schema that describes what data your GPT can send. This tells the GPT what information to include when it calls the webhook.",
          "Then configure what data the GPT sends to the webhook. Depending on your use case, this might be task details, form submissions, or any structured information the user provides. Finally, build your automation in Zapier or Make that receives the webhook data and takes action.",
          "For example, when a user asks the GPT to 'Create a task,' the GPT sends task details to the webhook, and Zapier creates the task in Asana or ClickUp automatically. The entire process happens seamlessly—the user just talks to the GPT, and the task appears in their project management tool.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Advanced Knowledge Management
    // ===========================================================================
    {
      id: "section-knowledge-management",
      type: "text",
      content: {
        title: "Advanced Knowledge Management",
        paragraphs: [
          "For GPTs that need extensive reference material, you have two options:",
          "",
          "**File Uploads**: Upload documents directly (PDFs, docs, spreadsheets). Best for static content under 20 files.",
          "",
          "**Knowledge via Actions**: Query an external knowledge base via API. Best for large, frequently updated content.",
          "",
          "**Hybrid Approach**: Upload core documents for immediate context, use Actions for live data queries.",
          "",
          "Consider your content's update frequency when choosing.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Sharing Advanced GPTs
    // ===========================================================================
    {
      id: "section-sharing-gpts",
      type: "text",
      content: {
        title: "Sharing Advanced GPTs",
        paragraphs: [
          "Once you've built an advanced GPT, you have several distribution options depending on your needs and audience. The right choice depends on who needs access and what level of control you require.",
          "Private deployment keeps your GPT accessible only to you. This is best for sensitive business processes where you don't want others modifying or even seeing your workflow. Your GPT remains your personal tool, secure and controlled.",
          "Sharing via link allows anyone with the URL to access your GPT, though recipients need a ChatGPT Plus subscription to use it. This works well for sharing with colleagues, clients, or a select audience without making the GPT publicly discoverable.",
          "Publishing to the GPT Store makes your creation publicly discoverable. Anyone can find and use it through OpenAI's marketplace. This is ideal for GPTs you want to share broadly—perhaps a useful tool you've built that could help others in your industry.",
          "Enterprise deployment is designed for organizations. GPTs can be deployed company-wide with administrative controls, ensuring consistent access across teams while maintaining governance. This option requires an Enterprise subscription but provides the control and visibility that large organizations need.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Tool Reference - ChatGPT
    // ===========================================================================
    {
      id: "section-tool-reference",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "For this lesson",
        task: "Open ChatGPT and navigate to Create a GPT to add Actions to your custom GPTs",
        feature: "GPT Builder",
        tip: "Start with webhooks—they're the easiest way to add Actions without building APIs",
      },
    },
    // ===========================================================================
    // SECTION: Quick Prompt
    // ===========================================================================
    {
      id: "section-quick-prompt",
      type: "quickPrompt",
      content: {
        heading: "Design Your Action-Enabled GPT",
        description:
          "Identify what external data or actions would make your GPT more powerful. Sketch the integration.",
        promptText:
          "My GPT needs to: [describe external action]. It would connect to [service/API]. The value this adds is: [specific benefit].",
      },
    },
    // ===========================================================================
    // SECTION: Actionable Task (Inline)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Design an Action-Enabled GPT",
        purpose:
          "Designing a GPT with external Actions transforms it from a knowledge tool into an operational tool. This blueprint can be implemented when you're ready.",
        instructions: [
          "Identify what external data or actions would make your most useful GPT even more powerful",
          "Research whether that service has an API or webhook capability",
          "Design what data the GPT would send and receive",
          "Sketch the integration flow on paper",
        ],
        deliverable: "An Action-enabled GPT design document with integration specifications",
        estimatedTime: "10 minutes",
        starterPrompt:
          "**Advanced GPT Design**: Name: [GPT name]. Core Function: [what it does]. External Connection Needed: [API/service]. Data to Send: [what GPT sends]. Data to Receive: [what comes back]. Value Added: [why this connection matters].",
        successCriteria: [
          "Identified a real external service connection",
          "Specified what data flows in both directions",
          "Explained the business value of the connection",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Completion
    // ===========================================================================
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Custom GPT Actions Mastered",
        description:
          "You understand how to build GPTs that connect to external systems through Actions and webhooks. This capability transforms GPTs from knowledge tools into operational tools that integrate with your workflow.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
