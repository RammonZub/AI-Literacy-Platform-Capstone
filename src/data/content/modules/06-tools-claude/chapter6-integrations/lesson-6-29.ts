/**
 * Lesson 6.29: Building Your AI Workflow System
 *
 * CHAPTER: 6 - Integrations & Team Features
 * LESSON: 5 of 6 - Workflow Integration
 *
 * DURATION: 14 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Create a cohesive system that makes Claude a natural part of daily work
 *
 * KEY CONCEPTS:
 * - Workflow design principles
 * - Trigger-based habits
 * - Integration touchpoints
 * - Personal productivity patterns
 */

import type { Lesson } from "@/types/content";

export const lesson_6_29: Lesson = {
  id: "lesson-6-29",
  chapterId: "ch6-6-integrations",
  moduleId: "06-tools-claude",
  lessonCategory: "tutorial",
  title: "Building Your AI Workflow System",
  description:
    "Design a personalized Claude workflow system that fits naturally into how you already work",
  order: 29,
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
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-29-cover.webp",
        imageAlt: "AI workflow system design",
        title: "Building Your AI Workflow System",
        subtitle:
          "Design a personalized Claude workflow system that fits naturally into how you already work",
      },
    },
    // ===========================================================================
    // SECTION 1: Cover Introduction
    // ===========================================================================
    {
      id: "section-cover",
      type: "textWithImage",
      content: {
        title: "Your AI Workflow System",
        paragraphs: [
          "The most powerful AI tool isn't the one with the most features—it's the one that fits seamlessly into your existing work patterns. Let's build your personalized Claude workflow system.",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-29-inline-1.webp",
        imageAlt: "Productivity workflow system design",
      },
    },
    // ===========================================================================
    // SECTION 2: The Integration Principle
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "The Integration Principle",
        paragraphs: [
          "Most people fail with AI tools because they try to change their entire workflow at once. The secret to lasting adoption is **integration, not replacement**.",
          "",
          "Instead of asking 'How do I use Claude more?', ask:",
          "",
          "'Where do I already spend time on tasks Claude could accelerate?'",
          "",
          "This shift in thinking leads to sustainable habits that compound over time.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Your Workflow Audit
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Your Workflow Audit",
        paragraphs: [
          "Before building your Claude workflow system, you need to understand your current patterns. Mapping your typical workday reveals the integration points where Claude can have the most impact. This audit is the foundation for everything that follows.",
          "",
          "Your morning routine likely includes planning the day ahead, triaging emails, and setting priorities. These activities are prime candidates for Claude assistance. Planning conversations with Claude can help you think through priorities, while email triage can be accelerated with summarization and suggested responses.",
          "",
          "Meeting preparation involves research, agenda creation, and reading briefing materials. Claude excels at all of these—summarizing background documents, helping you prepare questions, and creating structured agendas that make meetings more productive.",
          "",
          "Content creation throughout the day—whether documents, presentations, or reports—represents one of Claude's strongest use cases. From initial outlining through drafting to final refinement, Claude can accelerate every stage of the content creation process.",
          "",
          "Communication tasks like writing emails, crafting messages, and preparing updates can consume significant time. Claude can draft these communications, help you find the right tone, and refine your messages for clarity and impact.",
          "",
          "Research activities including information gathering, analysis, and synthesis benefit enormously from Claude's capabilities. Whether you're exploring a new topic, analyzing data, or synthesizing multiple sources, Claude serves as a powerful research partner.",
          "",
          "End-of-day activities like summarizing accomplishments, preparing for tomorrow, and organizing files often get skipped when time is short. Claude can help you close each day efficiently, ensuring nothing falls through the cracks and setting up tomorrow for success.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: The Trigger-Action Framework
    // ===========================================================================
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "The Trigger-Action Framework",
        insights: [
          "Trigger: When I open my inbox - Action: Use Claude to summarize long emails",
          "Trigger: When I start a document - Action: Draft key points with Claude first",
          "Trigger: When I finish a meeting - Action: Generate action items with Claude",
          "Trigger: When I need to research - Action: Use Chrome extension for instant help",
          "Trigger: When I feel stuck - Action: Activate Extended Thinking",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Building Your System
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Building Your System",
        paragraphs: [
          "**Step 1: Identify Your Top 3 Workflows**",
          "Choose the three tasks you do most often where Claude could help. Not every task—just the top three that consume the most time.",
          "",
          "**Step 2: Create Workflow-Specific Projects**",
          "Set up Claude Projects for each major workflow area. Include relevant documents, templates, and context.",
          "",
          "**Step 3: Build Your Prompt Library**",
          "For each workflow, create 2-3 go-to prompts. Store them where you can access them quickly.",
          "",
          "**Step 4: Set Up Automation Touchpoints**",
          "Identify one automation per workflow that runs in the background—saving emails to a knowledge base, triggering daily summaries, etc.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: The Daily Rhythm
    // ===========================================================================
    {
      id: "section-6",
      type: "textWithImage",
      content: {
        title: "The Daily Rhythm",
        paragraphs: [
          "Here's how a well-designed Claude workflow feels in practice:",
          "",
          "**Morning (5-10 min)**: Open your 'Daily Planning' Project. Ask Claude to review your calendar and priorities. Get a focused plan for the day.",
          "",
          "**Throughout Day**: Use the Chrome extension for quick questions. Create Artifacts for anything you'll reference again. Let Extended Thinking handle complex decisions.",
          "",
          "**Evening (5 min)**: Ask Claude to summarize what you accomplished and prepare tomorrow's priorities.",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-29-inline-2.webp",
        imageAlt: "Daily workflow rhythm and productivity",
      },
    },
    // ===========================================================================
    // SECTION 7: Measuring Success
    // ===========================================================================
    {
      id: "section-7",
      type: "highlightCard",
      content: {
        heading: "Success Metrics",
        insights: [
          "Time saved: How many minutes per task compared to before?",
          "Quality improvement: Are outputs better than what you produced alone?",
          "Consistency: Are you using Claude daily without thinking about it?",
          "Expansion: Are you naturally finding new use cases?",
          "Confidence: Do you feel more capable with Claude than without?",
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
        action: "For workflow integration",
        task: "Use Claude Projects for context, Chrome extension for research, Artifacts for outputs, and automation platforms for background processing",
        feature: "Workflow Integration",
        tip: "Start with your top 3 time-consuming tasks and create trigger-action pairs for automatic habits",
      },
    },
    // ===========================================================================
    // SECTION 9: Quick Prompt
    // ===========================================================================
    {
      id: "section-9",
      type: "quickPrompt",
      content: {
        heading: "Design Your Workflow",
        description: "Create your personalized workflow system now.",
        promptText:
          "Ask Claude: 'Help me design my Claude workflow system. My top 3 time-consuming tasks are [list yours]. Create a trigger-action plan for each, suggest Project names and purposes, and recommend 3 starter prompts for my most common task.'",
      },
    },
    // ===========================================================================
    // SECTION 10: Your Turn - Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Design Your Trigger-Action System",
        purpose:
          "Create a practical trigger-action workflow system that makes Claude a natural part of your day.",
        instructions: [
          "Identify your top 3 time-consuming tasks from your workflow audit",
          "For each, define: trigger situation, Claude action, and expected outcome",
          "Create or assign a Project to each workflow",
          "Write 2-3 starter prompts for your most common task",
        ],
        deliverable:
          "A trigger-action workflow document with 3 workflows, assigned Projects, and starter prompts",
        estimatedTime: "15 minutes",
        successCriteria: [
          "3 workflows mapped with triggers and actions",
          "Each workflow has an assigned Project",
          "Starter prompts written for most common task",
          "System is ready to implement immediately",
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
        question: "What is the recommended starting point for your Claude workflow system?",
        options: [
          "Try to automate everything at once",
          "Start with your top 3 time-consuming tasks and expand from there",
          "Only use Claude for emails",
          "Wait until you have a perfect system",
        ],
        correctAnswer: 1,
        hint: 'Review "Workflow System Design" section if needed.',
      },
    },
    // ===========================================================================
    // SECTION 12: Completion
    // ===========================================================================
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Your Workflow System is Ready",
        description:
          "You now have the framework for a sustainable Claude workflow. The key is starting small with your top 3 workflows and expanding naturally. Your system will evolve as you discover what works best for your unique context.",
        xpReward: 100,
        buttonText: "Continue to Final Capstone",
      },
    },
  ],
};
