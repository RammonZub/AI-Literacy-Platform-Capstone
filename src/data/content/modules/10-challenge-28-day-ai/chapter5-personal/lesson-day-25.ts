/**
 * Day 25: AI Agents Overview
 *
 * THEORY LESSON - Advanced Topic: Autonomous AI Agents
 *
 * This lesson explores the cutting edge of AI: autonomous agents that can
 * complete complex tasks on their own. Students learn what agents are,
 * current capabilities, and how to start using them safely.
 */

import type { Lesson } from "@/types/content";

export const lessonDay25: Lesson = {
  id: "day-25",
  chapterId: "chapter5-personal",
  moduleId: "10-challenge-28-day-ai",
  title: "AI Agents Overview",
  description:
    "Explore the cutting edge of AI: autonomous agents that can complete complex tasks on their own. Understand what agents are, what they can do, and how to start using them.",
  order: 25,
  format: "article",
  lessonCategory: "tutorial",
  estimatedMinutes: 15,

  imageSearchTerms: ["AI automation robots", "autonomous agents workflow", "futuristic AI system"],

  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-25-cover.webp",
        imageAlt: "AI Agents and Automation",
        title: "Day 25: AI Agents Overview",
        subtitle:
          "Explore the cutting edge of AI: autonomous agents that can complete complex tasks on their own. Understand what agents are, what they can do, and how to start using them.",
      },
    },
    {
      id: "opening",
      type: "text",
      content: {
        paragraphs: [
          "**The Next Frontier of AI**",
          "",
          "You've spent 24 days learning to use AI tools effectively. You prompt, iterate, and guide AI to help with tasks. But what if AI could do more on its own?",
          "",
          "Enter AI agents: systems that can take a goal, break it into steps, and complete those steps autonomously. They can search the web, use tools, write code, and make decisions without constant human input.",
          "",
          "This isn't science fiction. It's happening now. And understanding agents will be crucial as they reshape how we work with AI.",
        ],
      },
    },
    {
      id: "what-are-agents",
      type: "text",
      content: {
        title: "What Are AI Agents?",
        paragraphs: [
          "The difference between a chatbot and an AI agent is fundamental. A chatbot operates one turn at a time: you ask, it responds, and you must guide every step. It's a conversation partner that requires your constant direction. An agent, by contrast, receives a goal and figures out the steps itself. It can take actions, not just talk.",
          "",
          "The key capabilities that make agents different are autonomy, tool use, planning, and memory. Autonomy means agents can chain multiple actions together without human intervention between steps. You give a high-level goal, and the agent determines what needs to be done, in what order, and adapts when things don't go as expected.",
          "",
          "Tool use expands what agents can do beyond conversation. They can search the web, read and write files, call APIs, execute code, and interact with other software. This transforms them from text generators into systems that can actually accomplish tasks in the world. Planning enables agents to break complex goals into sub-tasks and adjust their approach based on results. And memory allows them to maintain context across long tasks, learning from what worked and what didn't rather than starting fresh with each interaction.",
        ],
      },
    },
    {
      id: "agent-workflow",
      type: "textWithImage",
      content: {
        paragraphs: [
          "**How Agents Work: A Visual Understanding**",
          "",
          "Think of an agent as having a loop: it receives a goal, plans steps, executes each step using available tools, evaluates results, and adjusts if needed. This cycle continues until the goal is achieved or it needs human input.",
          "",
          "For example, given 'Research the best laptops for video editing under $2000,' an agent might: search multiple review sites, read and summarize articles, compare specifications, check prices, and produce a recommendation—all without you guiding each step.",
        ],
        image: {
          src: "/images/courses/lessons/modules/ai-agent-workflow-diagram.webp",
          alt: "AI agent workflow diagram showing goal, planning, execution, and evaluation loop",
        },
      },
    },
    {
      id: "key-concepts",
      type: "text",
      content: {
        title: "Key Concepts: The Building Blocks of Agents",
        paragraphs: [
          "**Autonomy:** The ability to act independently. An autonomous agent doesn't need you to approve every action. You set boundaries, and it operates within them.",
          "",
          "**Tool Use:** Agents can interact with the world through tools. This includes web browsing, file operations, sending emails, running code, calling APIs, and more. The agent chooses which tool to use for each task.",
          "",
          "**Planning:** Before acting, agents create a plan. 'To accomplish X, I need to do A, then B, then C.' As results come in, they replan. This is called 'chain-of-thought reasoning' extended into action.",
          "",
          "**Memory:** Unlike a single chat session, agents maintain memory across tasks. They remember what worked, what didn't, and what they learned. This makes them more effective over time.",
        ],
      },
    },
    {
      id: "current-agent-tools",
      type: "text",
      content: {
        title: "Current Agent Tools You Can Try",
        paragraphs: [
          "Agent technology is evolving rapidly, and several tools are already available that demonstrate these capabilities. Claude's Computer Use feature represents perhaps the most striking example: Claude can now interact with computers directly, clicking, typing, and navigating applications. While still experimental, it shows the direction things are heading and offers a glimpse of truly autonomous AI assistance.",
          "",
          "ChatGPT with its various tools exhibits agent-like behavior by combining web browsing, Python code execution, file analysis, and image generation. When you ask it to research something, it might search the web, read multiple pages, run calculations, and produce a formatted report, all without you guiding each step. Cursor takes this further for coding tasks, functioning as an AI-powered code editor that can write, edit, and debug code across multiple files while understanding your entire codebase.",
          "",
          "For connecting AI to your existing workflows, Zapier AI Actions bridges AI with over 6,000 apps, enabling automated workflows where AI takes actions across your tools. Gemini (with Google Search grounding when your policy allows) can resemble an agent by retrieving sources, summarizing, and linking follow-ups—still under your review. These patterns preview a shift toward delegated workflows, not blind autonomy.",
        ],
      },
    },
    {
      id: "scenario",
      type: "scenarioCard",
      content: {
        title: "Real Scenario: Research Agent in Action",
        situation:
          "You need to research a new topic for work—say, 'sustainable packaging options for e-commerce.' Here's how an agent approach differs from traditional search:",
        challenge:
          "Traditional approach: You search Google, open 10 tabs, read articles, copy notes, synthesize manually. Time: 2-3 hours. Agent approach: You give the goal, the agent searches multiple sources, reads and extracts key information, compares options, and produces a structured report with sources. Time: 15-30 minutes.",
        outcome:
          "You get comprehensive research in a fraction of the time. The agent did the legwork; you made the decisions.",
      },
    },
    {
      id: "quiz",
      type: "quiz",
      content: {
        quiz: {
          question: "What is the key difference between a chatbot and an AI agent?",
          options: [
            "Agents are faster at responding",
            "Agents can take autonomous actions and chain multiple steps together without human guidance",
            "Agents only work with text",
            "Agents don't use language models",
          ],
          correctAnswer: 1,
        },
        context: "Think about what makes an agent 'agentic' versus just conversational.",
      },
    },
    {
      id: "what-agents-can-do",
      type: "text",
      content: {
        title: "What Agents Can Do Today (And What They Can't)",
        paragraphs: [
          "**What agents can do well:**",
          "- Research and synthesize information from multiple sources",
          "- Write, test, and debug code with multiple iterations",
          "- Automate repetitive workflows across applications",
          "- Analyze data and generate reports",
          "- Schedule and coordinate based on context",
          "",
          "**What agents struggle with:**",
          "- Complex judgment calls requiring human values or context",
          "- Physical world interactions (though this is changing)",
          "- Tasks requiring deep domain expertise they haven't been trained on",
          "- Novel situations outside their training distribution",
          "- Understanding implicit context you haven't explicitly provided",
          "",
          "**The key insight:** Agents are powerful but not omniscient. They excel at tasks with clear goals and available tools. They struggle with ambiguity and situations requiring human judgment.",
        ],
      },
    },
    {
      id: "practical-use-cases",
      type: "text",
      content: {
        title: "Practical Use Cases for Personal Productivity",
        paragraphs: [
          "Understanding agents conceptually is valuable, but seeing concrete applications makes the potential real. A Research Agent can find, read, and summarize multiple sources on any topic, transforming hours of manual work into minutes. This is particularly powerful for learning new domains, conducting competitive analysis, or performing due diligence before making decisions.",
          "",
          "For those who work with code, a Coding Agent like Cursor can implement features, debug issues, and refactor across your entire codebase. The key difference from a simple code completion tool is that it understands the full context of your project and can make coordinated changes across multiple files. It can write code, test it, see the errors, and iterate until it works.",
          "",
          "A Scheduling Agent goes beyond simple calendar management. Instead of just blocking time, it can find slots that work for everyone, protect your focus hours, and even prepare agendas for meetings. The context awareness means it understands not just when you're free, but when you're likely to be productive.",
          "",
          "Data Agents can find, clean, and analyze information from spreadsheets, databases, or APIs, then generate insights and visualizations. Writing Agents can draft, edit, and format documents with research included, citations provided, and style tailored to your preferences. Each of these represents a fundamentally different relationship with AI, one where you delegate outcomes rather than guide conversations.",
        ],
      },
    },
    {
      id: "getting-started",
      type: "text",
      content: {
        title: "Getting Started Safely",
        paragraphs: [
          "If you want to experiment with agent-like behavior, start here:",
          "",
          "**1. Try ChatGPT with web browsing:** Ask it to research something that requires multiple sources. Watch how it searches, reads, and synthesizes.",
          "",
          "**2. Use Claude Projects:** Create a project with multiple documents. Ask Claude to analyze them together, find patterns, and make recommendations.",
          "",
          "**3. Experiment with Gemini:** Give it complex research queries. Notice how it chains search and synthesis.",
          "",
          "**4. If you code, try Cursor:** See how it can make coordinated changes across multiple files based on a single request.",
          "",
          "**Safety tip:** Start with low-stakes tasks. Never give agents access to sensitive systems without understanding the risks. Always review their outputs before acting on them.",
        ],
      },
    },
    {
      id: "key-insights",
      type: "highlightCard",
      content: {
        heading: "AI Agents: Key Insights",
        insights: [
          "Agents are AI systems that can take autonomous actions, not just respond to prompts",
          "The key difference is autonomy: agents plan, execute, and adjust without constant human input",
          "Current tools (Claude, ChatGPT, Cursor) are already showing agent-like capabilities",
          "Agents excel at multi-step tasks with clear goals; they struggle with ambiguity and human judgment",
          "Start with low-stakes experiments and always review agent outputs before acting",
        ],
      },
    },
    {
      id: "main-task",
      type: "actionableTask",
      content: {
        title: "Your Challenge: Experience Agent-Like Behavior",
        purpose:
          "Try a workflow that demonstrates agent capabilities and understand firsthand how agents differ from simple chatbots.",
        instructions: [
          "1. Pick a research task requiring multiple steps (e.g., 'Compare the top 5 project management tools for small teams')",
          "2. Use Claude or ChatGPT with web search enabled",
          "3. Ask it to: search for options, read comparisons, check pricing, and recommend the best choice for your situation",
          "4. Notice how it chains multiple actions together (searching, reading, comparing, synthesizing)",
          "5. Compare this experience to what a simple chatbot without tools would do (just guess or use training data)",
          "6. Reflect on where this capability would save you time in your own work",
        ],
        deliverable:
          "Notes on your experience including: the research task you chose, how the AI chained multiple actions together, what impressed you or surprised you, and at least one specific way you could use agent-like capabilities in your regular work.",
        estimatedTime: "15-20 minutes",
        successCriteria: [
          "Chose a research task with real complexity",
          "Observed the AI taking multiple actions autonomously",
          "Noted the difference between agent behavior and simple chatbot responses",
          "Identified at least one practical application for your own work",
        ],
      },
    },
  ],
};

export default lessonDay25;
