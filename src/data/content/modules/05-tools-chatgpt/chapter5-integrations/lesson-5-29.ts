/**
 * Lesson 5.29: Building Your AI Workflow System
 *
 * CHAPTER: 5 - Integrations & Capstone
 * LESSON: 29 of 30 - AI Workflow System Design
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Create a comprehensive personal AI productivity system
 *
 * KEY CONCEPTS:
 * - Personal productivity stack design
 * - Integration architecture
 * - Daily/weekly AI routines
 * - Measuring AI productivity impact
 */

import type { Lesson } from "@/types/content";

export const lesson_5_29: Lesson = {
  id: "lesson-5-29",
  chapterId: "ch5-5-integrations",
  moduleId: "05-tools-chatgpt",
  title: "Building Your AI Workflow System",
  description: "Design a complete personal AI system that compounds your productivity",
  order: 29,
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
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-29-cover.webp",
        imageAlt: "Productivity systems and workflow design",
        title: "Building Your AI Workflow System",
        subtitle: "Design a complete personal AI system",
      },
    },
    // ===========================================================================
    // SECTION: Introduction
    // ===========================================================================
    {
      id: "section-intro",
      type: "text",
      content: {
        title: "From Skills to Systems",
        paragraphs: [
          "You've learned individual skills: prompting, applications, integrations. Now we bring it all together into a cohesive system—a personal AI workflow architecture that makes productivity gains permanent and compounding.",
          "",
          "The difference between AI users and AI power users isn't skill—it's system. Power users have built repeatable workflows that make AI assistance automatic.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Personal AI Stack
    // ===========================================================================
    {
      id: "section-ai-stack",
      type: "text",
      content: {
        title: "Your Personal AI Stack",
        paragraphs: [
          "A complete AI productivity system has four interconnected layers that work together to compound your effectiveness. Understanding how these layers interact helps you build a system that's greater than the sum of its parts.",
          "Layer 1 is your Core AI—ChatGPT itself. This is your primary AI interface for content creation, analysis, and problem-solving. Within this layer, custom GPTs handle recurring specialized tasks that you perform regularly. The core layer is where thinking and creating happen.",
          "Layer 2 is Integration through tools like Zapier or Make. These automations move data between AI and your other tools, creating triggered workflows that reduce manual steps. When AI output automatically flows to where it's needed, you eliminate friction and maintain momentum.",
          "Layer 3 is Knowledge—your documents, templates, and accumulated wisdom. This includes your prompt library for reusable patterns, templates and frameworks you've developed, and project context that ChatGPT can reference. This layer ensures you never start from zero, building on past work instead of recreating it.",
          "Layer 4 is Review—human checkpoints that maintain quality. These gates ensure AI output meets your standards before reaching stakeholders. Feedback loops at this layer improve future AI interactions, making your system smarter over time. Together, these four layers create a productivity engine that compounds in value.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Highlight Card - Integration Map
    // ===========================================================================
    {
      id: "section-highlight-integration",
      type: "highlightCard",
      content: {
        heading: "Design Your Integration Map",
        insights: [
          "List your key tools: email, calendar, documents, communication, project management",
          "Identify where AI adds value: drafting, summarizing, analyzing, generating",
          "Map which tools connect to AI through automation vs. manual workflow",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Common Integration Patterns
    // ===========================================================================
    {
      id: "section-integration-patterns",
      type: "text",
      content: {
        title: "Common Integration Patterns",
        paragraphs: [
          "Not all tasks deserve the same level of automation. Match integration complexity to the value and volume of each task type for optimal results.",
          "Low-value, high-volume tasks are ideal candidates for full automation. Email categorization, meeting summaries, routine status updates—these tasks don't require nuanced judgment but consume significant time. When AI handles them automatically, you reclaim hours without sacrificing quality. The occasional mistake is easily corrected and rarely consequential.",
          "Medium-value, medium-volume tasks work best with assisted workflows. Draft emails, report analysis, and content ideation benefit from AI assistance while keeping you in the driver's seat. AI provides a starting point; you refine and approve. This balance captures efficiency gains while maintaining your judgment on matters that matter.",
          "High-value, low-volume tasks call for interactive collaboration. Strategic planning, complex writing, and critical decisions deserve real-time dialogue with AI. The back-and-forth conversation generates insights that neither you nor AI would reach alone. These tasks justify the time investment because the stakes are high and the output matters significantly.",
          "The guiding rule is straightforward: automate where mistakes are recoverable, and keep humans in the loop for high-stakes output. This principle helps you decide which tasks get which treatment, ensuring your AI system amplifies your capabilities without introducing unacceptable risk.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Visual Break - Daily Routines
    // ===========================================================================
    {
      id: "section-routines-visual",
      type: "textWithImage",
      content: {
        title: "Daily AI Routines",
        paragraphs: [
          "Build AI into your daily rhythm so it becomes automatic, not an afterthought. Consistency compounds into productivity.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-29-inline-1.webp",
        imageAlt: "Daily routines and productivity habits",
      },
    },
    // ===========================================================================
    // SECTION: Sample Daily Routine
    // ===========================================================================
    {
      id: "section-daily-routine",
      type: "text",
      content: {
        title: "Sample Daily Routine",
        paragraphs: [
          "A structured approach to daily AI usage transforms sporadic AI use into a consistent productivity system. This sample routine shows how AI fits naturally into your existing workflow.",
          "Your morning routine takes about ten minutes and sets up your entire day. Start with AI-assisted daily planning: share your priorities and ask ChatGPT to help you sequence them optimally based on energy levels, dependencies, and deadlines. Then do a quick email triage by asking AI to summarize urgent items from overnight emails. These two practices ensure you start the day focused and informed.",
          "Throughout the day, AI assists as needed rather than on a rigid schedule. Draft emails, documents, and responses using your prompt library—the templates you've refined over time. Conduct research and analysis for active projects without switching contexts. Prepare for meetings by generating agendas, gathering context, and identifying questions worth asking. The key is having AI ready without forcing it into every task.",
          "Your end-of-day routine takes just five minutes but compounds in value over time. Ask AI to summarize what you accomplished and what needs follow-up, creating a natural transition point. Then generate tomorrow's priority list based on open items, ensuring nothing falls through the cracks. This closing ritual keeps your system current and sets up tomorrow for success.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Weekly AI Routines
    // ===========================================================================
    {
      id: "section-weekly-routines",
      type: "text",
      content: {
        title: "Weekly AI Routines",
        paragraphs: [
          "Weekly touchpoints compound your productivity by creating rhythm and reflection in your AI practice. These three weekly sessions total about 40 minutes but deliver outsized returns.",
          "Weekly planning takes about fifteen minutes at the start of your week. Share your projects and meetings with AI, asking for optimal time allocation suggestions. Have AI identify potential conflicts or overload points before they become crises. This proactive planning prevents the reactive scrambling that drains energy and focus.",
          "Progress review takes another fifteen minutes at week's end. Ask AI to summarize your accomplishments for weekly reports or personal tracking. More valuably, ask what patterns it sees in what worked versus what didn't. AI can often identify connections and trends that aren't obvious in the moment, giving you insights for continuous improvement.",
          "System maintenance takes about ten minutes and keeps your AI tools sharp. Review and update your prompt library based on what you learned this week. Check automation logs for any issues that need attention. Refine custom GPTs based on recent usage patterns. This maintenance prevents degradation and ensures your system gets better over time rather than falling stale.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Highlight Card - Measuring Impact
    // ===========================================================================
    {
      id: "section-highlight-impact",
      type: "highlightCard",
      content: {
        heading: "Measuring AI Productivity",
        insights: [
          "Time saved: Track hours per week saved by AI-assisted workflows",
          "Quality improvement: Compare AI-assisted vs. manual output quality",
          "Consistency: Measure how often you meet commitments with AI support",
        ],
      },
    },
    // ===========================================================================
    // SECTION: ROI Framework
    // ===========================================================================
    {
      id: "section-roi-framework",
      type: "text",
      content: {
        title: "ROI Framework",
        paragraphs: [
          "**Quantitative Metrics**:",
          "- Hours saved per week on routine tasks",
          "- Time from request to delivery for common outputs",
          "- Number of automations running successfully",
          "",
          "**Qualitative Metrics**:",
          "- Quality of AI-assisted work (feedback from stakeholders)",
          "- Confidence level when tackling complex tasks",
          "- Ability to take on more strategic work",
          "",
          "**The 4-Week Test**: After implementing your system, compare your output, stress level, and work quality to before. The difference should be measurable.",
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
        task: "Use ChatGPT to design your personal AI system and create your prompt library",
        feature: "Custom GPTs",
        tip: 'Create a "Daily Assistant" GPT that knows your routines and preferences',
      },
    },
    // ===========================================================================
    // SECTION: Quick Prompt
    // ===========================================================================
    {
      id: "section-quick-prompt",
      type: "quickPrompt",
      content: {
        heading: "Design Your System",
        description:
          "Sketch your personal AI system. What are your 3 core AI use cases, 2 automations, and 1 weekly review practice?",
        promptText:
          "My AI System: Core use cases: [1] [2] [3]. Automations: [1] [2]. Weekly review: [description].",
      },
    },
    // ===========================================================================
    // SECTION: Actionable Task (Inline)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Build Your AI System Blueprint",
        purpose:
          "Creating a complete AI system blueprint transforms isolated skills into a compounding productivity engine. This document becomes your implementation roadmap.",
        instructions: [
          "Document your 3 core AI use cases with specific prompts for each",
          "Design 2 automations that would save you time weekly",
          "Define your weekly review practice: what to check, refine, improve",
          "Set a 30-day implementation schedule with weekly milestones",
        ],
        deliverable: "A complete AI System Blueprint document ready for implementation",
        estimatedTime: "15 minutes",
        starterPrompt:
          "**My AI System Blueprint**: Core Use Cases: 1) [Use case + prompt], 2) [Use case + prompt], 3) [Use case + prompt]. Automations: 1) [Trigger -> Action], 2) [Trigger -> Action]. Weekly Review: [Check prompts, Refine outputs, Update templates]. Week 1 Goal: [milestone].",
        successCriteria: [
          "3 use cases with actual prompts documented",
          "2 automations designed (even if not yet built)",
          "30-day schedule with weekly milestones defined",
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
        title: "AI Workflow System Designed",
        description:
          "You've designed your personal AI workflow system—a framework that makes productivity gains permanent and compounding. Tomorrow's capstone brings everything together.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
