/**
 * Lesson 5.12: Projects Feature - Organize Your Work
 *
 * CHAPTER: 3 - Advanced Features
 * LESSON: 12 of 15 - Organization Systems
 *
 * DURATION: 12 minutes
 * XP REWARD: 100 XP
 */

import type { Lesson } from "@/types/content";

export const lesson_5_12: Lesson = {
  id: "lesson-5-12",
  chapterId: "ch5-3-advanced",
  moduleId: "05-tools-chatgpt",
  lessonCategory: "tutorial",
  title: "Projects Feature - Organize Your Work",
  description: "Never lose important conversations again with intelligent organization",
  order: 12,
  estimatedMinutes: 12,
  xpReward: 100,
  format: "article",
  sections: [
    // ===========================================================================
    // HERO IMAGE SECTION
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-12-cover.webp",
        imageAlt: "Organized project folders and workspace",
        title: "Projects Feature - Organize Your Work",
        subtitle: "Never lose important conversations again with intelligent organization",
      },
    },
    // ===========================================================================
    // SECTION 1: The Problem
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Chat History Problem",
        paragraphs: [
          "Your chat history grows quickly. After a few weeks of regular use, you've had hundreds of conversations across topics—client work, personal projects, research, brainstorming.",
          "",
          "Finding that one brilliant prompt from three weeks ago? Nearly impossible without organization.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Highlight Card - Key Concept
    // ===========================================================================
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "Projects: Your Filing Cabinet",
        insights: [
          "Projects group related conversations together",
          "Instead of scrolling through 200 chats, open the 'Client ABC' project",
          "See only conversations about that specific client or topic",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: How Projects Transform Workflow
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "How Projects Transform Workflow",
        paragraphs: [
          "Projects transform your workflow in several ways. Instant context means you can open a project and see all related history without explaining background repeatedly. ChatGPT already knows what you've discussed before within that project. A cleaner chat list means your main view shows only active conversations instead of hundreds of old threads, dramatically reducing visual clutter.",
          "",
          "Projects are collaboration-ready—you can share entire projects with team members (a Plus feature), giving them instant context on ongoing work. They're searchable, so you can find information within specific projects instead of searching globally through everything. And they provide continuity, letting you pick up exactly where you left off on long-term work without reconstructing context from memory. These benefits compound over time as your project library grows.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: How to Create Projects
    // ===========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Creating Your First Project",
        paragraphs: [
          "In ChatGPT's sidebar, you'll see 'Projects'. Click it, then 'Create Project'. Name it something specific: 'Q1 Marketing Campaign' or 'Client: Johnson Consulting'.",
          "",
          "Any conversation can be added to a project. You can create new chats directly within a project too.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Comparison Table - Without vs With Projects
    // ===========================================================================
    {
      id: "section-5",
      type: "comparisonTable",
      content: {
        title: "Chat History: Before and After Projects",
        intro: "See how Projects transforms your ChatGPT experience.",
        columns: [{ name: "Without Projects" }, { name: "With Projects", recommended: true }],
        rows: [
          { feature: "Finding Old Chats", values: ["Scroll endlessly", "Click project folder"] },
          { feature: "Context Continuity", values: ["Re-explain each time", "History preserved"] },
          { feature: "Chat List View", values: ["200+ conversations", "Only active chats"] },
          { feature: "Team Sharing", values: [false, true] },
          { feature: "Search Scope", values: ["All chats mixed", "Within specific project"] },
        ],
        footer: "Projects take 30 seconds to create and save hours of searching.",
      },
    },
    // ===========================================================================
    // SECTION 6: Smart Organization Strategies
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Smart Project Organization Strategies",
        paragraphs: [
          "There are several effective ways to organize your projects. Organizing by client means one project per client, making it easy to reference during meetings or when responding to their emails. Organizing by initiative works well for major efforts like 'Website Redesign,' 'Conference Planning,' or 'Book Writing' that span multiple conversations over time.",
          "",
          "Organizing by role separates your different work modes: 'Leadership Communications' for executive-facing content, 'Research Tasks' for deep-dive analysis, 'Creative Writing' for content creation. Organizing by timeframe helps with periodic deliverables: 'Q2 Planning,' 'Annual Report,' 'Monthly Newsletter.' You can also organize by output type: 'Email Templates,' 'Report Writing,' 'Presentation Materials.' The best system is whichever one matches how you already think about your work.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Highlight Card - Best Practice
    // ===========================================================================
    {
      id: "section-7",
      type: "highlightCard",
      content: {
        heading: "Professional Best Practice",
        insights: [
          "Create projects BEFORE you need them",
          "When starting client work, immediately create a project",
          "Every related chat goes there from day one—no cleanup needed later",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Visual Break
    // ===========================================================================
    {
      id: "section-8",
      type: "textWithImage",
      content: {
        title: "Organization Pays Off",
        paragraphs: [
          "When you organize conversations into projects, you build a searchable knowledge base. Future-you will thank present-you when you can instantly find that brilliant idea from months ago.",
          "",
          "Start the habit now—it only takes seconds to create a project.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-12-inline-1.webp",
        imageAlt: "Organized folders and productivity workspace",
      },
    },
    // ===========================================================================
    // SECTION 9: Quick Prompt
    // ===========================================================================
    {
      id: "section-9",
      type: "quickPrompt",
      content: {
        heading: "Create Your First Project",
        description:
          "In ChatGPT, click 'Projects' then 'Create Project'. Name it after a real client or project you're working on.",
        promptText:
          "In ChatGPT, click 'Projects' → 'Create Project'. Name it after a real client or project you're working on. Create a new chat within that project.",
      },
    },
    // ===========================================================================
    // SECTION 10: Tool Reference
    // ===========================================================================
    {
      id: "section-10",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "For this exercise",
        task: "Open ChatGPT, navigate to Projects in the sidebar, and create your first project folder",
        feature: "Projects",
        tip: 'Name projects specifically (e.g., "Client: Acme Corp" not just "Client Work")',
      },
    },
    // ===========================================================================
    // SECTION 11: Actionable Task (Inline)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Set Up Your Project System",
        purpose:
          "Setting up projects now creates an organized AI workspace that saves hours of searching later. The habit of organizing conversations compounds in value over time.",
        instructions: [
          "Create 3 projects in ChatGPT: one for a client, one for an initiative, one for a recurring task",
          "Move relevant existing chats into each project",
          "Start one new conversation within each project to establish the habit",
          "Commit to the rule: every new chat goes into the right project",
        ],
        deliverable: "3 organized projects in ChatGPT with at least one chat each",
        estimatedTime: "5 minutes",
        starterPrompt:
          "No prompt needed - this is an organizational task. Open ChatGPT, click 'Projects', create 3 projects: 1) [Client name], 2) [Initiative name], 3) [Recurring task type]. Move relevant chats into each.",
        successCriteria: [
          "Created 3 meaningfully named projects (not 'Project 1', 'Project 2')",
          "Moved at least one existing chat into each project",
          "Started at least one new conversation within a project",
        ],
      },
    },
    // ===========================================================================
    // SECTION 12: Knowledge Check
    // ===========================================================================
    {
      id: "section-quiz",
      type: "checkpoint",
      content: {
        question: "What is the primary benefit of using Projects in ChatGPT?",
        options: [
          "It makes ChatGPT respond faster",
          "It groups related conversations together for easy access",
          "It gives you more storage space",
          "It improves ChatGPT's accuracy",
        ],
        correctAnswer: 1,
        hint: "Think about finding old conversations about a specific topic.",
      },
    },
    // ===========================================================================
    // SECTION 13: Completion
    // ===========================================================================
    {
      id: "section-13",
      type: "completion",
      content: {
        title: "First Project Created",
        description:
          "You've established an organizational system that will save you hours of searching. Each project you create builds your AI workspace.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
