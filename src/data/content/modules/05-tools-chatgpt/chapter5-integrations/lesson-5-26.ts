/**
 * Lesson 5.26: Advanced Automations with Make.com
 *
 * CHAPTER: 5 - Integrations & Capstone
 * LESSON: 26 of 30 - Make.com Advanced Automation
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Master complex multi-step workflows with Make.com (Integromat)
 *
 * KEY CONCEPTS:
 * - Make.com vs Zapier comparison
 * - Complex multi-step workflows
 * - Conditional logic with AI
 * - Error handling and monitoring
 */

import type { Lesson } from "@/types/content";

export const lesson_5_26: Lesson = {
  id: "lesson-5-26",
  chapterId: "ch5-5-integrations",
  moduleId: "05-tools-chatgpt",
  title: "Advanced Automations with Make.com",
  description: "Build sophisticated AI workflows with conditional logic and error handling",
  order: 26,
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
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-26-cover.webp",
        imageAlt: "Advanced automation and workflow design",
        title: "Advanced Automations with Make.com",
        subtitle: "Build sophisticated AI workflows with conditional logic",
      },
    },
    // ===========================================================================
    // SECTION: Introduction
    // ===========================================================================
    {
      id: "section-intro",
      type: "text",
      content: {
        title: "When Simple Isn't Enough",
        paragraphs: [
          "When simple trigger-action workflows aren't enough, Make.com (formerly Integromat) provides the visual programming environment for complex, multi-step AI automations with branching logic.",
          "",
          "Make.com excels when you need conditional routing: if X, do A; if Y, do B; if Z, do C.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Make.com vs Zapier
    // ===========================================================================
    {
      id: "section-comparison",
      type: "text",
      content: {
        title: "When to Choose Make.com",
        paragraphs: [
          "Both tools connect apps, but they serve different complexity levels. Choose Zapier when you need simple, linear workflows, when speed of setup matters more than complexity, or when you're just starting with automation. Zapier excels at straightforward trigger-then-action sequences.",
          "",
          "Choose Make.com when you need branching logic—where if X happens, do A, but if Y happens, do B. It's better when workflows have multiple possible paths, when you need loops to process each item in a list, when error handling and retries are important, or when you're processing higher volumes (Make's pricing favors volume over simplicity). The key difference is complexity: Zapier for linear paths, Make.com for branching decision trees.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Highlight Card - Make.com Advantage
    // ===========================================================================
    {
      id: "section-highlight-advantage",
      type: "highlightCard",
      content: {
        heading: "Key Make.com Advantage",
        insights: [
          "Visual canvas shows your entire workflow at a glance",
          "Conditional routing: different paths based on data content",
          "Built-in error handling: retry, notify, or fail gracefully",
          "More operations per dollar at scale compared to Zapier",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Visual Break - Building Workflows
    // ===========================================================================
    {
      id: "section-workflows-visual",
      type: "textWithImage",
      content: {
        title: "Building Complex Workflows",
        paragraphs: [
          "Make.com uses a visual canvas where you drag, drop, and connect modules. Each module performs an action, and you create paths between them.",
          "",
          "The power comes from routing: data flows through different paths based on conditions you define.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-26-inline-1.webp",
        imageAlt: "Visual workflow design and automation",
      },
    },
    // ===========================================================================
    // SECTION: Advanced Workflow Example
    // ===========================================================================
    {
      id: "section-workflow-example",
      type: "text",
      content: {
        title: "Advanced Workflow Example",
        paragraphs: [
          'Consider a customer inquiry automation with intelligent routing. The trigger is a new email received. Step 1 sends the email to ChatGPT for classification: "Classify this email as: sales, support, billing, or other. Return only the category." Then a router directs the email based on that classification.',
          "",
          "Path A handles Sales inquiries: ChatGPT drafts a response, creates a HubSpot lead, and notifies the sales team. Path B handles Support: ChatGPT suggests a solution from the knowledge base, creates a ticket, and routes to the appropriate agent. Path C handles Billing: the system retrieves customer data, ChatGPT drafts an explanation, and creates a Zendesk ticket. Path D handles everything else: routes to the general inbox with an AI summary. This single workflow handles all incoming email with appropriate routing based on content.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Conditional Logic with AI
    // ===========================================================================
    {
      id: "section-conditional-logic",
      type: "text",
      content: {
        title: "Conditional Logic with AI",
        paragraphs: [
          'Make AI part of your decision-making by using it to classify and route information. For sentiment-based routing, prompt: "Analyze the sentiment of this message. Return: positive, neutral, or negative." Positive messages go through the standard response path. Neutral messages go to a priority queue for human review. Negative messages get escalated to a manager with a carefully drafted response.',
          "",
          'For urgency detection: "Rate the urgency of this request: high, medium, or low. Explain why." High urgency triggers immediate notification and expedited response. Medium goes to the same-day queue. Low urgency gets batch processing. For content-based actions: "Does this email mention: pricing, timeline, or technical details? List all that apply." Different information gets appended to the response based on which topics are mentioned. Each of these patterns uses AI classification to route work appropriately.',
        ],
      },
    },
    // ===========================================================================
    // SECTION: Highlight Card - Error Handling
    // ===========================================================================
    {
      id: "section-highlight-error",
      type: "highlightCard",
      content: {
        heading: "Error Handling Strategies",
        insights: [
          "Define what happens when things go wrong—don't let automations fail silently",
          "Set up retry logic for temporary failures (API timeouts, rate limits)",
          "Create error notifications so you know when human intervention is needed",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Error Handling Details
    // ===========================================================================
    {
      id: "section-error-details",
      type: "text",
      content: {
        title: "Make.com Error Handling",
        paragraphs: [
          "Build resilient automations that handle failures gracefully. The Retry Directive automatically retries failed operations up to a specified number of times with delays between attempts—useful for temporary failures like API timeouts. A Fallback Path ensures that if the ChatGPT API fails, the workflow routes to a template response instead of breaking entirely.",
          "",
          "Error Emails send you details when automation fails, including what triggered it and where it failed, so you can diagnose problems quickly. The Ignore vs Break setting lets you choose whether errors stop the entire scenario or just skip problematic items and continue processing. A Data Store logs errors to a spreadsheet for pattern analysis, helping you identify recurring issues that need systematic fixes. Each strategy serves a different purpose in keeping your automations reliable.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Monitoring
    // ===========================================================================
    {
      id: "section-monitoring",
      type: "text",
      content: {
        title: "Monitoring Your Automations",
        paragraphs: [
          "Make.com provides detailed operation logs showing every step of every execution. Review these regularly to:",
          "",
          "**Catch failures early**: See which modules fail and how often.",
          "",
          "**Optimize costs**: Identify operations consuming the most credits.",
          "",
          "**Improve prompts**: If ChatGPT outputs aren't useful, refine your prompts based on real examples.",
          "",
          "**Track volume**: Understand how your automations scale over time.",
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
        task: "Use ChatGPT within Make.com workflows for intelligent classification and routing",
        feature: "OpenAI API",
        tip: "Keep prompts focused and specific—AI classification works best with clear categories",
      },
    },
    // ===========================================================================
    // SECTION: Quick Prompt
    // ===========================================================================
    {
      id: "section-quick-prompt",
      type: "quickPrompt",
      content: {
        heading: "Design a Conditional Workflow",
        description:
          "Sketch a workflow where ChatGPT classifies incoming data and routes it to different paths based on content.",
        promptText:
          "When [data arrives], send to ChatGPT: 'Classify as [categories]. Return only the category.' Route to [Path A if X], [Path B if Y], [Path C if Z].",
      },
    },
    // ===========================================================================
    // SECTION: Actionable Task (Inline)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Design a Conditional Automation",
        purpose:
          "Conditional workflows with AI classification enable intelligent routing without manual sorting. This design skill scales to many business processes.",
        instructions: [
          "Identify a workflow where incoming items need different handling (inquiries, tasks, content)",
          "Define 3-4 categories for classification",
          "Design what happens in each path after ChatGPT classifies the item",
          "Include error handling: what if classification is unclear?",
        ],
        deliverable:
          "A conditional workflow diagram with classification logic and path definitions",
        estimatedTime: "10 minutes",
        starterPrompt:
          "**Conditional Workflow**: Input: [what comes in]. Classification Prompt: 'Classify this as [A, B, C, or D]. Return only the category.' Paths: A->[action], B->[action], C->[action], D->[action]. Unclear->[fallback action].",
        successCriteria: [
          "Defined 3-4 meaningful categories",
          "Each category has a distinct action path",
          "Included fallback for unclear classifications",
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
        title: "Advanced Automation Mastered",
        description:
          "You've learned to build sophisticated workflows with Make.com—conditional logic, error handling, and multi-step processing. These skills separate basic users from automation architects.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
