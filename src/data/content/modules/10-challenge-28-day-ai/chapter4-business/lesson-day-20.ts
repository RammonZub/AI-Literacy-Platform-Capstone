/**
 * Day 20: Zapier & Automation Basics
 *
 * TOOL MASTERY LESSON - Zapier workflow automation
 *
 * ENDING: actionableTask - This lesson teaches practical automation skills
 * using Zapier to connect AI tools with other apps. Students build real
 * automations that save time and eliminate repetitive tasks.
 * NO gamification
 */

import type { Lesson } from "@/types/content";

export const lessonDay20: Lesson = {
  id: "day-20",
  chapterId: "chapter4-business",
  moduleId: "10-challenge-28-day-ai",
  title: "Zapier & Automation Basics",
  description:
    "Connect your AI tools to the rest of your workflow. Learn Zapier fundamentals to automate repetitive tasks and save hours every week.",
  order: 20,
  format: "article",
  lessonCategory: "tutorial",
  estimatedMinutes: 15,

  imageSearchTerms: [
    "workflow automation diagram",
    "Zapier integration connections",
    "productivity automation tools",
  ],

  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-20-cover.webp",
        imageAlt: "Zapier & Automation Basics",
        title: "Day 20: Zapier & Automation Basics",
        subtitle:
          "Connect your AI tools to the rest of your workflow. Learn Zapier fundamentals to automate repetitive tasks and save hours every week.",
      },
    },
    {
      id: "opening",
      type: "text",
      content: {
        paragraphs: [
          "**Tool for this lesson:** Zapier",
          "**Where to access:** zapier.com (free tier available)",
          "",
          "You've learned to use AI for content, research, and business tasks. But there's a problem: you're still manually copying results between apps. That's where automation comes in.",
          "Zapier connects your AI tools to everything else. When ChatGPT generates content, Zapier can automatically save it to Notion. When a form gets submitted, Zapier can trigger an AI response and email it. These automations save 5+ hours per week once set up.",
          "Today, you'll learn to connect your AI workflows to the rest of your business.",
        ],
      },
    },
    {
      id: "why-automation",
      type: "text",
      content: {
        title: "Why Automation Matters",
        paragraphs: [
          "Every manual task you repeat is time you'll never get back. Consider how much of your day disappears into copy-pasting data between apps—thirty minutes here, fifteen minutes there, adding up to hours weekly. Then there are the repetitive responses: answering the same customer questions, sending the same follow-up emails, creating the same document structures. These tasks feel productive because you're busy, but they're actually time you could spend on higher-value work.",
          "The hidden costs of manual work compound beyond just time. When you handle follow-ups manually, some slip through the cracks—you forget to nurture that promising lead or check in with that important client. When you execute processes manually, each iteration varies slightly, creating inconsistency that confuses customers and colleagues. And perhaps most insidiously, the mental overhead of remembering every step drains your cognitive energy, leaving less capacity for creative thinking and strategic decisions.",
          "Automation doesn't just save time—it creates consistency, reduces errors, and frees your mind for work that actually requires human judgment. The goal isn't to automate everything, but to automate the repetitive tasks that don't benefit from your personal touch.",
        ],
      },
    },
    {
      id: "what-is-zapier",
      type: "text",
      content: {
        title: "What is Zapier?",
        paragraphs: [
          "Zapier is the glue that connects your apps together. With over 6,000 app integrations available, it can link tools you already use—Gmail, Slack, Notion, ChatGPT, Google Sheets, and thousands more—into automated workflows that run without your involvement. If two apps can't talk to each other directly, Zapier bridges the gap.",
          'What makes Zapier accessible is that it requires no coding. You build automations through a visual interface, clicking through options rather than writing scripts. The core concept is trigger-based workflows: when something happens in one app, Zapier automatically does something in another. This "when X, do Y" structure is simple enough to understand immediately yet powerful enough to handle complex business processes.',
          "Zapier runs in the cloud 24/7, meaning your automations work even when your computer is off. The free tier includes 100 tasks per month, which is enough to get started and see real value. As your automation needs grow, paid plans offer more capacity and advanced features. The key is starting simple: one trigger, one action, proving the concept before building more sophisticated workflows.",
        ],
      },
    },
    {
      id: "zapier-interface",
      type: "textWithImage",
      content: {
        title: "The Zapier Interface",
        paragraphs: [
          'Zapier\'s dashboard shows your automations (called "Zaps") and makes it easy to create new ones. The interface walks you through each step of building a workflow.',
        ],
        image: {
          src: "/images/courses/modules/10-challenge-28-day-ai/day-20-inline-1.webp",
          alt: "Zapier dashboard interface",
          caption: "Zapier dashboard: Your automation command center",
        },
      },
    },
    {
      id: "zapier-access",
      type: "text",
      content: {
        title: "Accessing Zapier",
        paragraphs: [
          "**To get started:**",
          "",
          "1. Go to [zapier.com](https://zapier.com)",
          '2. Click "Sign Up" for a free account',
          "3. Free tier includes 100 tasks/month (enough to get started)",
          "",
          "**Recommended approach:** Start with a simple automation before building complex workflows. The free tier lets you create up to 5 Zaps, which is plenty for learning.",
        ],
      },
    },
    {
      id: "key-concepts",
      type: "text",
      content: {
        title: "Key Concepts: Triggers, Actions, and Zaps",
        paragraphs: [
          "Zapier has three core concepts you need to understand:",
          "",
          "**Trigger:** The event that starts your automation",
          "- Examples: New email received, form submitted, spreadsheet row added",
          "- Every Zap needs exactly one trigger",
          "",
          "**Action:** What Zapier does after the trigger fires",
          "- Examples: Send an email, create a document, post a message",
          "- A Zap can have multiple actions in sequence",
          "",
          "**Zap:** The complete automation = Trigger + Action(s)",
          "- Example: When a form is submitted (trigger), send me an email (action 1), then add to spreadsheet (action 2)",
        ],
      },
    },
    {
      id: "common-workflows",
      type: "text",
      content: {
        title: "Common AI Automation Workflows",
        paragraphs: [
          "Several proven workflows combine AI with other tools to create immediate value. One of the most practical connects form submissions to AI-powered responses: when someone fills out a Typeform or Google Form, Zapier sends that information to ChatGPT to generate a personalized response, then automatically emails it via Gmail. This creates instant engagement without manual effort.",
          "Another powerful pattern routes new emails through AI for summarization. Important messages get processed by ChatGPT, which extracts key points and action items, then sends a summary to Notion or posts it to Slack. This keeps your team informed without anyone reading every message manually. Similarly, AI-generated content can flow directly to social media scheduling tools like Buffer or Hootsuite, turning ChatGPT drafts into scheduled posts.",
          "Calendar-based automations prepare you for meetings by having Google Calendar trigger ChatGPT to create preparation documents in Google Docs based on meeting details. And customer service benefits enormously from routing questions through AI: Intercom messages get analyzed by ChatGPT, which drafts responses that humans can review and send. Each of these workflows eliminates repetitive work while maintaining quality and personalization.",
        ],
      },
    },
    {
      id: "step-by-step",
      type: "text",
      content: {
        title: "Step-by-Step: Create Your First Zap",
        paragraphs: [
          "Let's build a simple automation together:",
          "",
          "**1. Sign up for Zapier**",
          "Go to zapier.com and create a free account.",
          "",
          '**2. Click "Create Zap"**',
          "This opens the Zap editor where you'll build your automation.",
          "",
          "**3. Set up your Trigger**",
          '- Search for and select your trigger app (e.g., "Google Forms")',
          '- Choose the trigger event (e.g., "New Response in Spreadsheet")',
          "- Connect your account and select the specific form",
          "- Test that Zapier can find recent responses",
          "",
          "**4. Add your Action**",
          '- Click the "+" button to add an action',
          '- Search for and select your action app (e.g., "Gmail")',
          '- Choose the action event (e.g., "Send Email")',
          "- Map the data from your trigger to the action fields",
          "- Test that the email sends correctly",
          "",
          "**5. Turn on your Zap**",
          "Give your Zap a name and toggle it on. It will now run automatically!",
        ],
      },
    },
    {
      id: "quick-prompt-automation",
      type: "quickPrompt",
      content: {
        heading: "Automation Idea Generator",
        description:
          "Not sure what to automate? Use this prompt with ChatGPT to find opportunities:",
        promptText:
          "I want to find tasks in my workflow that I can automate with Zapier.\n\nHere's what I do regularly:\n- [Task 1: e.g., Respond to customer inquiries]\n- [Task 2: e.g., Create weekly reports]\n- [Task 3: e.g., Post content to social media]\n- [Task 4: e.g., Save interesting articles for later]\n\nPlease suggest 5 specific Zapier automations that would save me time. For each:\n1. Name the automation\n2. List the trigger app and event\n3. List the action app(s) and what they do\n4. Estimate time saved per week\n5. Note any AI tools that could be part of this workflow",
        placeholders: [
          "Task 1: e.g., Respond to customer inquiries",
          "Task 2: e.g., Create weekly reports",
          "Task 3: e.g., Post content to social media",
          "Task 4: e.g., Save interesting articles for later",
        ],
      },
    },
    {
      id: "scenario-card",
      type: "scenarioCard",
      content: {
        title: "Scenario: Auto-Save AI Content to Notion",
        situation:
          "You use ChatGPT regularly to generate content ideas, meeting notes, and research summaries. Currently, you copy each output manually into Notion. This takes 10+ minutes daily.",
        challenge: "Build an automation that saves ChatGPT responses to Notion automatically.",
        context:
          'Zap: When you send a message to ChatGPT with a specific keyword (like "#notion"), Zapier detects it, waits for the response, then creates a new page in Notion with the content.',
        outcome:
          "Every ChatGPT conversation tagged #notion automatically appears in your Notion workspace. Zero manual copy-paste. 10+ minutes saved daily.",
      },
    },
    {
      id: "quiz",
      type: "quiz",
      content: {
        quiz: {
          question: "In Zapier, what is a 'Trigger'?",
          options: [
            "The action Zapier performs after something happens",
            "The event that starts your automation workflow",
            "A setting that controls how often your Zap runs",
            "The notification you receive when a Zap completes",
          ],
          correctAnswer: 1,
        },
        context: "Understanding triggers is fundamental to building effective automations.",
      },
    },
    {
      id: "testing-troubleshooting",
      type: "text",
      content: {
        title: "Testing and Troubleshooting",
        paragraphs: [
          "Your first Zap might not work perfectly. Here's how to debug:",
          "",
          "**Common Issues:**",
          "- **Connection problems:** Reconnect your account in Zapier settings",
          "- **Missing data:** Check that data mapping is correct between trigger and action",
          "- **Timing issues:** Some triggers have delays (Gmail can take 5-15 minutes)",
          "- **Field format errors:** Make sure dates and numbers are formatted correctly",
          "",
          "**Testing Best Practices:**",
          '- Always use the "Test" button before turning on a Zap',
          "- Send a test trigger (like submitting a form) to see if it works end-to-end",
          '- Check Zapier\'s "Task History" to see what happened with each run',
          "- Start simple: Get one trigger + one action working before adding complexity",
          "",
          '**Pro Tip:** Name your Zaps clearly so you can find them later. "Form to Email" is better than "My Zap 1".',
        ],
      },
    },
    {
      id: "best-practices",
      type: "highlightCard",
      content: {
        heading: "Automation Best Practices",
        insights: [
          "Start simple: One trigger, one action. Add complexity once it works.",
          "Test thoroughly before relying on automations for important tasks.",
          "Document your Zaps so you remember what they do months later.",
          "Monitor task usage on free tier to avoid running out unexpectedly.",
          "Use filters to control when Zaps run (e.g., only for high-priority emails).",
          "Keep a backup process until you trust your automation completely.",
        ],
      },
    },
    {
      id: "main-task",
      type: "actionableTask",
      content: {
        title: "Your Challenge: Build Your First Automation",
        purpose: "Create a real automation that saves you time.",
        instructions: [
          "1. Sign up for Zapier (free tier)",
          "2. Choose one workflow from the lesson (or create your own)",
          "3. Build and test the Zap",
          "4. Run it for a day and measure time saved",
        ],
        deliverable:
          "A working Zapier automation that: (1) Connects at least 2 apps together, (2) Uses a trigger that happens regularly in your workflow, (3) Performs an action that saves you manual work, (4) Has been tested and confirmed working, (5) Includes a brief note on expected time savings.",
        estimatedTime: "15-20 minutes",
        successCriteria: [
          "Zap is active and running in Zapier",
          "Trigger fires correctly when tested",
          "Action executes as expected",
          "You understand how to modify the Zap if needed",
          "You can identify at least 2 more tasks to automate",
        ],
      },
    },
    {
      id: "checkpoint",
      type: "checkpoint",
      content: {
        question: "What's the best approach when building your first Zapier automation?",
        options: [
          "Build a complex multi-step automation to save maximum time",
          "Start with a simple trigger + action, test it, then add complexity",
          "Copy someone else's Zap without understanding how it works",
          "Skip testing and turn it on immediately",
        ],
        correctAnswer: 1,
        hint: "Think about what approach minimizes frustration and maximizes learning...",
      },
    },
  ],
};

export default lessonDay20;
