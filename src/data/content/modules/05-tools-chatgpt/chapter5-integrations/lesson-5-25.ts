/**
 * Lesson 5.25: Zapier Automation Fundamentals
 *
 * CHAPTER: 5 - Integrations & Capstone
 * LESSON: 25 of 30 - Zapier Automation
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Introduction to Zapier for connecting ChatGPT to 5000+ apps
 *
 * KEY CONCEPTS:
 * - What is Zapier (non-technical explanation)
 * - Connecting ChatGPT to other apps
 * - Simple automation examples
 * - Trigger -> ChatGPT -> Action workflows
 */

import type { Lesson } from "@/types/content";

export const lesson_5_25: Lesson = {
  id: "lesson-5-25",
  chapterId: "ch5-5-integrations",
  moduleId: "05-tools-chatgpt",
  title: "Zapier Automation Fundamentals",
  description: "Connect ChatGPT to 5000+ apps without writing a single line of code",
  order: 25,
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
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-25-cover.webp",
        imageAlt: "Automation and workflow connections",
        title: "Zapier Automation Fundamentals",
        subtitle: "Connect ChatGPT to 5000+ apps without code",
      },
    },
    // ===========================================================================
    // SECTION: Introduction
    // ===========================================================================
    {
      id: "section-intro",
      type: "text",
      content: {
        title: "Zapier: Your Digital Connector",
        paragraphs: [
          "What if ChatGPT could automatically respond to form submissions, summarize incoming emails, or create drafts based on calendar events? With Zapier, it can—all without coding.",
          "",
          "Zapier is like a universal translator between apps. It connects tools that don't normally talk to each other, moving information automatically based on triggers you define.",
          "",
          "**Think of it this way**: When you get a new email (trigger), Zapier can automatically forward the content to ChatGPT (action), which summarizes it, and then Zapier sends that summary to Slack (another action).",
          "",
          "No coding. No API knowledge. Just point, click, and connect.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Highlight Card - Key Concepts
    // ===========================================================================
    {
      id: "section-highlight-concepts",
      type: "highlightCard",
      content: {
        heading: "Key Zapier Concepts",
        insights: [
          "Zap: An automated workflow (like 'When X happens, do Y')",
          "Trigger: The event that starts your Zap (new email, form submission, calendar event)",
          "Action: What happens after the trigger (send to ChatGPT, create document, send message)",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Setting Up ChatGPT in Zapier
    // ===========================================================================
    {
      id: "section-setup",
      type: "text",
      content: {
        title: "Setting Up ChatGPT in Zapier",
        paragraphs: [
          "To connect ChatGPT to Zapier, you'll need three things. First, a Zapier Account—the free tier works for basic automations with 100 tasks per month, which is enough to experiment and learn. Second, an OpenAI API Key from platform.openai.com, which requires paid API access. This is separate from a ChatGPT Plus subscription.",
          "",
          'Third, you\'ll make the connection in Zapier by searching for "ChatGPT" or "OpenAI" and connecting using your API key. It\'s important to understand that this uses the OpenAI API, not the ChatGPT web interface. Costs are based on API usage, typically pennies per automation for most tasks. The API gives you programmatic access to the same models, but billing works differently than the monthly subscription.',
        ],
      },
    },
    // ===========================================================================
    // SECTION: Visual Break - Practical Examples
    // ===========================================================================
    {
      id: "section-examples-visual",
      type: "textWithImage",
      content: {
        title: "Practical Automation Examples",
        paragraphs: [
          "Here are real workflows that professionals use to save time. These are simple but powerful automations you can build today.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-25-inline-1.webp",
        imageAlt: "Business automation and workflow",
      },
    },
    // ===========================================================================
    // SECTION: Beginner-Friendly Zaps
    // ===========================================================================
    {
      id: "section-beginner-zaps",
      type: "text",
      content: {
        title: "Beginner-Friendly Zaps",
        paragraphs: [
          'Start with these simple but powerful automations that solve real problems. The Email Summarizer works like this: when a new email arrives in Gmail, Zapier sends the email body to ChatGPT with the prompt "Summarize in 3 bullet points," then sends that summary to a Slack channel. This keeps your team informed without everyone reading every email.',
          "",
          'The Form Response Generator triggers when someone submits a Google Form. Zapier sends the response to ChatGPT with "Draft a helpful reply," then creates a draft email in Gmail for your review before sending. This speeds up response time while keeping human oversight. The Social Media Helper triggers when you publish a new blog post on WordPress. Zapier sends the content to ChatGPT with "Create 3 LinkedIn post variations," then saves those drafts to Google Sheets for review. Each automation handles a specific workflow that would otherwise require manual effort.',
        ],
      },
    },
    // ===========================================================================
    // SECTION: Highlight Card - Automation Formula
    // ===========================================================================
    {
      id: "section-highlight-formula",
      type: "highlightCard",
      content: {
        heading: "The Automation Formula",
        insights: [
          "Trigger: Something happens in an app (new email, form submission, calendar event)",
          "ChatGPT: Processes the information using your prompt",
          "Action: Result goes somewhere useful (document, message, database)",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Building Your First Zap
    // ===========================================================================
    {
      id: "section-building-zap",
      type: "text",
      content: {
        title: "Building Your First Zap",
        paragraphs: [
          "Follow this step-by-step process to create your first automation. Step 1: Choose your trigger app—Gmail, Google Forms, Slack, or any of thousands of options. Step 2: Select the specific trigger event, such as new email, new form response, or new message. The trigger is what starts your automation.",
          "",
          "Step 3: Connect your account and test the trigger to make sure Zapier can access your data. Step 4: Add ChatGPT as the action. Write your prompt, using data from the trigger—Zapier shows you what's available from the previous step. Step 5: Add the final action where ChatGPT's response should go, whether that's an email draft, a Slack message, or a document. Step 6: Test the entire workflow with real data, then turn it on when you're satisfied. Each step builds on the previous one, creating a complete chain from trigger to final output.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Best Practices
    // ===========================================================================
    {
      id: "section-best-practices",
      type: "text",
      content: {
        title: "Zapier Best Practices",
        paragraphs: [
          "**Start Simple**: Build one-step automations first. Add complexity only after they work reliably.",
          "",
          "**Always Include Review**: For important outputs, route to a draft folder or review queue rather than sending automatically.",
          "",
          "**Test Thoroughly**: Run several tests with different inputs before going live.",
          "",
          "**Monitor Costs**: Free Zapier has limits. API costs are separate. Track usage to avoid surprises.",
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
        task: "You'll need an OpenAI API key from platform.openai.com to connect ChatGPT to Zapier",
        feature: "API Access",
        tip: "Keep your API key secure and monitor usage in the OpenAI dashboard",
      },
    },
    // ===========================================================================
    // SECTION: Quick Prompt
    // ===========================================================================
    {
      id: "section-quick-prompt",
      type: "quickPrompt",
      content: {
        heading: "Design Your First Zap",
        description:
          "Identify one repetitive task in your workflow. Design a Trigger -> ChatGPT -> Action automation for it.",
        promptText:
          "When [trigger happens in app], send [data] to ChatGPT with prompt '[your prompt]', then [action with result].",
      },
    },
    // ===========================================================================
    // SECTION: Actionable Task (Inline)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Design Your First Zapier Automation",
        purpose:
          "Designing a Zapier automation creates a blueprint for hands-free AI workflows. Even if you don't build it immediately, the design clarifies what's possible.",
        instructions: [
          "Identify one repetitive task in your workflow (email triage, form responses, social posting)",
          "Design a complete Trigger -> ChatGPT -> Action workflow on paper",
          "Specify: What triggers it? What prompt does ChatGPT use? Where does the result go?",
          "Research whether the apps you need are available in Zapier",
        ],
        deliverable: "A complete Zapier automation design document ready to implement",
        estimatedTime: "10 minutes",
        starterPrompt:
          "**Automation Design**: Trigger: When [event] happens in [app]. ChatGPT Action: Send [data] with prompt '[specific prompt]'. Output: Send result to [destination app]. Human Check: [Yes/No - where do I review?]",
        successCriteria: [
          "Identified a real repetitive task from your work",
          "Designed complete Trigger -> ChatGPT -> Action flow",
          "Researched app availability in Zapier",
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
        title: "Zapier Fundamentals Mastered",
        description:
          "You understand how Zapier connects ChatGPT to thousands of apps through simple trigger-action workflows. This is the foundation of automation without coding.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
