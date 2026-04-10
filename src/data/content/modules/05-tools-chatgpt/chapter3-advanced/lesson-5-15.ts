/**
 * Lesson 5.15: Automation & Workflows - Save Hours Weekly
 *
 * CHAPTER: 3 - Advanced Features
 * LESSON: 15 of 15 - Workflow Automation
 *
 * DURATION: 15 minutes
 * XP REWARD: 150 XP (Chapter finale)
 */

import type { Lesson } from "@/types/content";

export const lesson_5_15: Lesson = {
  id: "lesson-5-15",
  chapterId: "ch5-3-advanced",
  moduleId: "05-tools-chatgpt",
  lessonCategory: "tutorial",
  title: "Automation & Workflows - Save Hours Weekly",
  description:
    "Transform repetitive tasks into automated systems that run while you focus on important work",
  order: 15,
  estimatedMinutes: 15,
  xpReward: 150,
  format: "article",
  sections: [
    // ===========================================================================
    // HERO IMAGE SECTION
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-15-cover.webp",
        imageAlt: "Automation and productivity workflow systems",
        title: "Automation & Workflows - Save Hours Weekly",
        subtitle: "Transform repetitive tasks into automated systems",
      },
    },
    // ===========================================================================
    // SECTION 1: Introduction
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "From One-Off Tasks to Ongoing Systems",
        paragraphs: [
          "Every lesson so far has shown you how to use ChatGPT for individual tasks—writing an email, analyzing data, researching a topic.",
          "",
          "**Advanced ChatGPT users think differently**. They build systems. Once configured, these systems repeat automatically, saving hours every week.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: The Four Automation Layers
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "The Four Automation Layers",
        paragraphs: [
          "There are four layers of automation you can build with ChatGPT, each more powerful than the last. Layer 1 is saved prompts: store your best prompts in a document for reuse. This takes five minutes to set up and saves hours over time. Layer 2 is Custom GPTs: specialized assistants with permanent instructions, knowledge bases, and conversation starters. These take 15-30 minutes to create but handle complex recurring tasks automatically.",
          "",
          "Layer 3 is Projects: organized workspaces for ongoing initiatives that keep all related conversations and context in one place. These take just two minutes to create and eliminate the problem of finding old chats. Layer 4 is scheduled tasks: recurring AI work that runs automatically, though this requires external tools like Zapier or Make for full automation. Most professionals find that layers 1-3 cover 90% of their automation needs without any technical setup.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Highlight Card - Automation Mindset
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "The Automation Mindset",
        insights: [
          "Every time you catch yourself thinking 'I do this every week...', that's your automation signal",
          "Create a system for it once, benefit forever",
          "The best automation targets are tasks you repeat regularly",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Building Your Personal Prompt Library
    // ===========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Building Your Personal Prompt Library",
        paragraphs: [
          "Your most powerful prompts are too valuable to use once and forget. Create a simple document—a Google Doc, Notion page, or even a text file—where you save prompts that work.",
          "",
          "Organize by category: 'Email Prompts', 'Report Writing', 'Meeting Prep', 'Client Communication'. When you need that task done, you don't start from scratch. You copy, paste, customize.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Comparison Table - Automation Layers
    // ===========================================================================
    {
      id: "section-5",
      type: "comparisonTable",
      content: {
        title: "Choosing Your Automation Level",
        intro: "Match your automation approach to the complexity and frequency of the task.",
        columns: [{ name: "Layer" }, { name: "Best For" }, { name: "Setup Time" }],
        rows: [
          { feature: "Saved Prompts", values: ["Weekly tasks", "5 minutes"] },
          { feature: "Custom GPTs", values: ["Daily complex tasks", "15-30 minutes"] },
          { feature: "Projects", values: ["Long-term initiatives", "2 minutes"] },
          { feature: "Scheduled Tasks", values: ["Recurring reports", "Varies"] },
        ],
        footer:
          "Start with Layer 1 (Saved Prompts) and graduate to higher levels as you identify recurring patterns.",
      },
    },
    // ===========================================================================
    // SECTION 6: Workflows That Professionals Automate
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Workflows That Professionals Automate",
        paragraphs: [
          "Professionals automate a wide range of recurring tasks. A weekly report generator lets you upload data and use a saved prompt to create an executive summary highlighting key insights, concerns, and recommended actions. A meeting prep system has your GPT research attendees, review past conversations, generate an agenda, and create discussion questions—all before you walk into the room.",
          "",
          "Email triage becomes automated: paste your emails and ask ChatGPT to prioritize by urgency, draft responses to the top three, and summarize the rest. Social media content creation scales when you can ask ChatGPT to turn a blog post into LinkedIn posts, tweets, and email newsletter versions. Client onboarding transforms when a Custom GPT generates welcome emails, project timelines, expectations documents, and first meeting agendas automatically. Each of these workflows takes initial setup time but then runs repeatedly with minimal effort.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Highlight Card - Time Multiplication
    // ===========================================================================
    {
      id: "section-7",
      type: "highlightCard",
      content: {
        heading: "The Time Multiplication Effect",
        insights: [
          "A workflow that saves you 30 minutes weekly equals 25 hours per year",
          "Build 4 such workflows and you've saved an entire work week",
          "Small time savings compound into major efficiency gains",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Visual Break - Integrating AI
    // ===========================================================================
    {
      id: "section-8",
      type: "textWithImage",
      content: {
        title: "Advanced: Integrating AI into Your Stack",
        paragraphs: [
          "ChatGPT works alongside other tools. You can: create content in ChatGPT, export to Google Docs, share via Slack. Each tool does what it does best.",
          "",
          "For advanced users, ChatGPT connects through APIs to automate even more—but that's beyond our non-technical scope. Know that the ecosystem exists.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-15-inline-1.webp",
        imageAlt: "Team productivity and workflow automation",
      },
    },
    // ===========================================================================
    // SECTION 9: Your Automation Action Plan
    // ===========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Your Automation Action Plan",
        paragraphs: [
          "Building an automation system requires a structured approach. Start by identifying repetitive tasks: for one week, note everything you do more than twice. Don't filter at this stage—just capture the patterns. Then select high-impact targets from your list, focusing on tasks that consume meaningful time rather than quick one-offs.",
          "",
          "Create your first system using saved prompts or a custom GPT. Don't try to automate everything at once—start with one workflow that will give you visible time savings. Test and refine your system for two weeks, improving what doesn't work smoothly. Automation is never perfect on the first attempt. Finally, expand gradually by adding one new automated workflow per month. This measured approach builds sustainable habits rather than overwhelming you with change.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: Highlight Card - Professional Advantage
    // ===========================================================================
    {
      id: "section-10",
      type: "highlightCard",
      content: {
        heading: "The Professional Advantage",
        insights: [
          "Most people use ChatGPT occasionally for one-off tasks",
          "You'll use it systematically, building AI-powered workflows",
          "These workflows compound in value over time",
        ],
      },
    },
    // ===========================================================================
    // SECTION 11: Chapter Complete Message
    // ===========================================================================
    {
      id: "section-11",
      type: "text",
      content: {
        title: "Chapter 3 Complete: Advanced Features Mastered",
        paragraphs: [
          "You've learned Custom GPTs, Projects organization, Data Analysis, Web Browsing, and Automation thinking.",
          "",
          "These are the capabilities that separate casual users from AI-powered professionals. You now have tools that transform ChatGPT from a helpful chatbot into a comprehensive work system.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 12: Quick Prompt
    // ===========================================================================
    {
      id: "section-12",
      type: "quickPrompt",
      content: {
        heading: "Identify Your First Automation",
        description: "Think of one task you do weekly. Create a prompt or GPT that streamlines it.",
        promptText:
          "Think of one task you do weekly. Create a prompt or GPT that streamlines it. Even saving 15 minutes weekly compounds into 12+ hours yearly.",
      },
    },
    // ===========================================================================
    // SECTION 13: Tool Reference
    // ===========================================================================
    {
      id: "section-13",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "For building your automation system",
        task: "Use Custom GPTs for complex recurring tasks, Projects for organization, and save your best prompts in a document",
        feature: "Custom GPTs + Projects",
        tip: "Start simple: create one saved prompt this week, then graduate to Custom GPTs when you see patterns",
      },
    },
    // ===========================================================================
    // SECTION 14: Actionable Task (Inline)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Build Your First Automation",
        purpose:
          "Identifying and automating one recurring task creates a template for ongoing productivity gains. Even saving 15 minutes weekly compounds to 12+ hours yearly.",
        instructions: [
          "Identify your most time-consuming weekly task that involves repetitive writing or analysis",
          "Design a saved prompt or Custom GPT that streamlines this task",
          "Test the automation on this week's instance of the task",
          "Track: How much time did this save compared to your usual approach?",
        ],
        deliverable:
          "A documented automation (saved prompt or Custom GPT) with time-savings estimate",
        estimatedTime: "15 minutes",
        starterPrompt:
          "Create a reusable prompt template for [task]. Include: Context placeholders for [common variables], Step-by-step instructions for [process], Output format of [specific structure]. Test it with this week's task.",
        successCriteria: [
          "Created either a saved prompt or started a Custom GPT design",
          "Tested it on a real instance of the task this week",
          "Can articulate how much time was saved",
        ],
      },
    },
    // ===========================================================================
    // SECTION 15: Knowledge Check
    // ===========================================================================
    {
      id: "section-quiz",
      type: "checkpoint",
      content: {
        question: "What is the first layer of automation you should start with?",
        options: ["Scheduled tasks", "Custom GPTs", "Saved prompts", "API integrations"],
        correctAnswer: 2,
        hint: "Start simple - what's the easiest way to reuse a prompt that works?",
      },
    },
    // ===========================================================================
    // SECTION 16: Completion
    // ===========================================================================
    {
      id: "section-16",
      type: "completion",
      content: {
        title: "Chapter 3: Advanced Features Complete",
        description:
          "You've mastered the most powerful capabilities in ChatGPT. Custom GPTs, Projects, Data Analysis, Web Browsing, Automation—these tools transform how you work.",
        xpReward: 150,
        buttonText: "Complete Chapter 3",
      },
    },
  ],
};
