/**
 * Lesson 6.27: Building Your Claude-Powered System
 *
 * CHAPTER: 6 - Integrations & Team Features
 * LESSON: 3 of 6 - Personal Productivity System
 *
 * DURATION: 14 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Design and implement a personal Claude-powered productivity system
 *
 * KEY RESPONSIBILITIES:
 * - Guide personal productivity setup
 * - Show integration architecture patterns
 * - Establish daily/weekly routines with Claude
 */

import type { Lesson } from "@/types/content";

export const lesson_6_27: Lesson = {
  id: "lesson-6-27",
  chapterId: "ch6-6-integrations",
  moduleId: "06-tools-claude",
  lessonCategory: "tutorial",
  title: "Building Your Claude-Powered System",
  description:
    "Design a personalized productivity system that makes Claude a seamless part of your daily workflow",
  order: 27,
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
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-27-cover.webp",
        imageAlt: "Claude-powered personal productivity system",
        title: "Building Your Claude-Powered System",
        subtitle:
          "Design a personalized productivity system that makes Claude a seamless part of your daily workflow",
      },
    },
    // ===========================================================================
    // SECTION 1: Cover Introduction
    // ===========================================================================
    {
      id: "section-cover",
      type: "textWithImage",
      content: {
        title: "Building Your Claude-Powered System",
        paragraphs: [
          "The real power of Claude comes from systematic integration into your work. Build a personal system that makes Claude a natural extension of your capabilities.",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-27-inline-1.webp",
        imageAlt: "Personal productivity system design",
      },
    },
    // ===========================================================================
    // SECTION 2: The Claude Productivity Mindset
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "The Claude Productivity Mindset",
        paragraphs: [
          "Think of Claude not as a tool you use, but as a capability you have. The goal is seamless integration where AI assistance is always available without friction.",
          "",
          "**The shift**: From 'I should ask Claude about this' to naturally including Claude in your thinking process.",
          "",
          "**The system**: Routines, templates, and workflows that make Claude a consistent part of how you work.",
          "",
          "**The result**: Compounding productivity gains as your system matures.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Your Integration Architecture
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Your Integration Architecture",
        paragraphs: [
          "Designing your Claude integration thoughtfully means thinking across multiple layers. A well-architected Claude system isn't just about using Claude more—it's about creating a coherent structure that makes AI assistance naturally available wherever you need it.",
          "",
          "Access points form the foundation of your architecture. These are the places where you interact with Claude: the web interface for deep work sessions, the browser extension for research and quick questions, and mobile apps for on-the-go assistance. Each access point serves different needs, and understanding when to use which keeps your workflow smooth.",
          "",
          "Projects provide organized spaces for different work contexts. You might have projects for specific clients, major initiatives, or personal development areas. The key is organizing projects so that each one has a clear purpose and Claude has the right context for helping you within that domain.",
          "",
          "Templates capture your most effective prompts for recurring tasks. When you discover a prompt structure that consistently produces great results, formalize it as a reusable template. Over time, you build a library of proven prompts that accelerate your most common workflows.",
          "",
          "Automations handle background processes that run without your attention. These are the set-and-forget workflows that process emails, summarize content, or trigger actions based on events. Good automations multiply your impact by keeping things running while you focus on higher-value work.",
          "",
          "Knowledge bases provide the reference documents that give Claude context about your work. Style guides, company information, project requirements—these documents transform Claude from a generic assistant into one that understands your specific situation.",
          "",
          "Output systems define where Claude's work gets stored or published. Whether that's documents saved to cloud storage, content published to internal systems, or information fed into other tools, clear output systems ensure Claude's contributions become lasting assets.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Daily Routines
    // ===========================================================================
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "Sample Daily Routine with Claude",
        insights: [
          "Morning: Plan the day with Claude prioritizing tasks",
          "Throughout day: Draft, analyze, problem-solve as needed",
          "End of day: Summarize accomplishments and plan tomorrow",
          "Weekly: Review patterns, refine templates, update knowledge bases",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Weekly Routines
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Weekly System Maintenance",
        paragraphs: [
          "Dedicate time weekly to improve your Claude system:",
          "",
          "**Monday planning**: Ask Claude to help prioritize the week based on goals and deadlines.",
          "",
          "**Template refinement**: Identify prompts that worked well, formalize them as templates.",
          "",
          "**Knowledge base updates**: Add new reference documents to relevant Projects.",
          "",
          "**Automation review**: Check that your automations are running smoothly.",
          "",
          "**Friday reflection**: Summarize the week's wins and learnings with Claude's help.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Personal Setup Template
    // ===========================================================================
    {
      id: "section-6",
      type: "textWithImage",
      content: {
        title: "Personal Setup Template",
        paragraphs: [
          "Start with this foundation and customize:",
          "",
          "**Project: Personal Assistant** - General tasks, daily planning, ad-hoc requests",
          "",
          "**Project: Work Context** - Your role, company info, common tasks, key contacts",
          "",
          "**Project: Learning** - Skills you're developing, courses, research topics",
          "",
          "**Project: Writing** - Templates for emails, reports, presentations",
          "",
          "Add Projects as needed for clients, specific initiatives, or personal projects.",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-27-inline-2.webp",
        imageAlt: "Personal productivity workspace organization",
      },
    },
    // ===========================================================================
    // SECTION 7: Measuring AI Productivity
    // ===========================================================================
    {
      id: "section-7",
      type: "highlightCard",
      content: {
        heading: "Track Your Productivity Gains",
        insights: [
          "Time saved: Estimate hours saved per week on tasks Claude helps with",
          "Quality improvement: Rate output quality before and after Claude assistance",
          "Task completion: Count tasks completed faster or that wouldn't have been done",
          "Learning acceleration: Track skill development in areas where Claude helps",
          "Output volume: More deliverables completed in the same time",
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
        action: "For productivity system building",
        task: "Use Claude Projects to organize your work into contextual spaces with custom instructions and knowledge bases",
        feature: "Projects for Productivity",
        tip: "Create separate Projects for work, personal, and learning, and review them weekly",
      },
    },
    // ===========================================================================
    // SECTION 9: Quick Prompt
    // ===========================================================================
    {
      id: "section-9",
      type: "quickPrompt",
      content: {
        heading: "Design Your System",
        description: "Work with Claude to design your personal productivity system.",
        promptText:
          "Ask Claude: 'Help me design a personal productivity system using Claude. My role is [your role], my main challenges are [2-3 challenges], and I want to improve [specific area].'",
      },
    },
    // ===========================================================================
    // SECTION 10: Your Turn - Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Build Your Personal System",
        purpose: "Design and begin implementing your personalized Claude productivity system.",
        instructions: [
          "Create the core Projects you'll use daily (Work, Personal, Learning)",
          "Upload initial knowledge files to each project",
          "Set up custom instructions for each project",
          "Start your daily routine: begin tomorrow with Claude planning",
        ],
        deliverable:
          "A personal productivity system with 3 core Projects configured and your first daily routine completed",
        estimatedTime: "15-20 minutes",
        successCriteria: [
          "3 core Projects created with clear purposes",
          "Each project has custom instructions",
          "Initial knowledge files uploaded",
          "You've started the daily routine habit",
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
        question: "What is the recommended approach to building a Claude productivity system?",
        options: [
          "Try to use Claude for everything immediately",
          "Start with the basics, refine over time, and let your system evolve",
          "Only use Claude for one specific task",
          "Never create a system",
        ],
        correctAnswer: 1,
        hint: 'Review "Building Your Claude System" section if needed.',
      },
    },
    // ===========================================================================
    // SECTION 12: Completion
    // ===========================================================================
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Your Claude System Blueprint Ready",
        description:
          "You now have a framework for building your personal Claude-powered productivity system. Start with the basics, refine over time, and watch your productivity compound as your system matures.",
        xpReward: 100,
        buttonText: "Complete System Design",
      },
    },
  ],
};
