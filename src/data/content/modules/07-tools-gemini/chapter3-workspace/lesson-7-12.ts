/**
 * Lesson 7.12: Cross-Workspace Workflows
 *
 * CHAPTER: 3 - Gemini + Google Workspace
 * LESSON: 5 of 5 - Integrated AI-Powered Productivity
 *
 * DURATION: 15 minutes (practical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Combine Gmail, Docs, Sheets, and Slides into seamless workflows
 *
 * KEY RESPONSIBILITIES:
 * - Teach cross-application workflows
 * - Show real-world productivity patterns
 * - Help learners build personal workflow libraries
 * - Demonstrate the power of integrated AI
 *
 * TARGET AUDIENCE: 40-55+ non-technical professionals
 */

import type { Lesson } from "@/types/content";

export const lesson_7_12: Lesson = {
  id: "lesson-7-12",
  chapterId: "ch7-3-workspace",
  moduleId: "07-tools-gemini",
  title: "Cross-Workspace Workflows",
  description:
    "Connect Gmail, Docs, Sheets, and Slides into powerful workflows that multiply your productivity",
  order: 5,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-12-cover.webp",
        imageAlt: "Team collaboration with multiple tools and documents",
        title: "Cross-Workspace Workflows",
        subtitle: "The power of AI across all your tools",
      },
    },
    // ===========================================================================
    // SECTION 1: The Integration Advantage
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why Workflows Beat One-Off Tasks",
        paragraphs: [
          "Using AI in a single app is helpful. Using AI across multiple apps in a coordinated workflow is transformative.",
          "",
          "Consider this: A client emails you with a complex request. You use Gmail AI to summarize their needs, Docs AI to draft a proposal, Sheets AI to build a pricing calculator, and Slides AI to create a presentation—all in one smooth flow.",
          "",
          "This isn't about working harder. It's about letting AI handle the repetitive, time-consuming parts so you can focus on strategy, relationships, and decisions.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Workflow 1 - Meeting Prep
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Workflow 1: Meeting Preparation",
        paragraphs: [
          "Preparing for an important meeting becomes dramatically faster when you chain AI assistance across multiple Google Workspace apps. Start in Gmail by asking Gemini to summarize all email threads related to this client or topic. This gives you instant context on previous conversations, outstanding questions, and the current state of the relationship without manually hunting through your inbox.",
          "",
          "Move to Docs to create an agenda based on that summary and your meeting goals. Gemini can transform the key points from your email research into a structured agenda with time allocations and discussion topics. Next, pull relevant data into Sheets to create a quick reference sheet. This might include metrics, timelines, or comparison data that you'll want at your fingertips during the conversation.",
          "",
          "With your preparation complete, generate a concise 5-slide overview in Slides that captures the essential context and your key objectives. This visual aid helps keep the meeting focused and demonstrates your preparation. Finally, return to Gmail to draft a pre-meeting email sharing the agenda with attendees. This complete workflow might have taken hours previously; with AI assistance at each step, you can accomplish it in under 30 minutes while actually being more prepared than before.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Scenario - Project Tracking
    // ===========================================================================
    {
      id: "section-3",
      type: "scenarioCard",
      content: {
        title: "Real-World Workflow Scenario",
        situation:
          "It's Friday afternoon and you need to prepare your weekly project status report. You have emails from team members, data in spreadsheets, and need to create both a written report and a presentation for Monday's leadership meeting.",
        challenge: "Normally this takes most of your Friday, leaving you working late.",
        context: "This weekly reporting cycle is repetitive but critical for visibility.",
        outcome:
          "Using a cross-workflow approach: Gmail summarizes team updates (5 min), Sheets analyzes progress data (10 min), Docs generates the status report (10 min), and Slides creates executive summary slides (10 min). You're done in under an hour with time to spare for your weekend.",
      },
    },
    // ===========================================================================
    // SECTION 4: Workflow 3 - Quarterly Reporting
    // ===========================================================================
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "Workflow 3: Quarterly Business Review",
        paragraphs: [
          "The quarterly review is a perfect example of cross-workflow power:",
          "",
          "**Data Collection (Sheets):** Aggregate data from multiple sources using AI-assisted formulas and analysis.",
          "",
          "**Analysis (Docs):** Write the narrative using Gemini to help explain trends and highlight key insights.",
          "",
          "**Presentation (Slides):** Convert the report into a compelling slide deck for the presentation.",
          "",
          "**Distribution (Gmail):** Draft personalized emails to different stakeholder groups with relevant attachments.",
          "",
          "Each app plays its role, and Gemini accelerates every step.",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-12-inline-1.webp",
        imageAlt: "Project management and tracking workflow",
      },
    },
    // ===========================================================================
    // SECTION 5: Key Insights - HighlightCard
    // ===========================================================================
    {
      id: "section-5",
      type: "highlightCard",
      content: {
        heading: "Cross-Workflow Principles",
        insights: [
          "Start with the end goal, then work backward through apps",
          "Let each tool do what it does best—data in Sheets, narrative in Docs, visuals in Slides",
          "Use AI to bridge between apps—summarize here, generate there",
          "Build templates once, reuse forever",
          "The whole is greater than the sum of AI-powered parts",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Building Your Library
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Build Your Personal Workflow Library",
        paragraphs: [
          "As you discover workflows that work for you, document them for reuse. The time you invest in creating a personal workflow library pays dividends every time you avoid reinventing the wheel.",
          "",
          "Start by identifying patterns in your work. What types of tasks do you do repeatedly? Weekly reports, client presentations, project status updates—these recurring activities are perfect candidates for documented workflows. For each pattern, document the steps: which apps you use, what prompts work best, and what sequence produces the best results.",
          "",
          "Create templates in Docs, Sheets, and Slides that support your workflows. Then refine them over time as you discover improvements. Each iteration makes the workflow smoother and more efficient. And don't keep your discoveries to yourself—share great workflows with colleagues. The best workflows benefit the whole team, and you'll learn from their improvements too.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Tool Reference - Gemini
    // ===========================================================================
    {
      id: "section-7",
      type: "toolReference",
      content: {
        tool: "gemini",
        action: "For this lesson",
        task: "Think about a task you do regularly that involves multiple Google Workspace apps. Plan out how AI could help at each step.",
        feature: "Cross-workspace integration",
        tip: "The real power comes from chaining AI assistance across apps—summarize in Gmail, expand in Docs, visualize in Slides.",
      },
    },
    // ===========================================================================
    // SECTION 8: Quick Prompt
    // ===========================================================================
    {
      id: "section-8",
      type: "quickPrompt",
      content: {
        heading: "Design Your First Workflow",
        description: "Think of a recurring task you do and map out a cross-workflow approach.",
        promptText:
          "On paper or in a Doc, outline: 'I need to [recurring task]. The steps are: 1) [app] - [action], 2) [app] - [action], 3) [app] - [action].'",
      },
    },
    // ===========================================================================
    // SECTION 9: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Design Your Personal Workflow",
        purpose:
          "Create a documented cross-workspace workflow for a recurring task that will save you hours every month.",
        instructions: [
          "Identify a recurring task you do that involves at least 2 Google Workspace apps",
          "Map out each step: which app, what action, what AI assistance",
          "Create a template document or sheet that supports this workflow",
          "Test the workflow end-to-end with real data",
          "Save your workflow documentation for future reference",
        ],
        deliverable: "One documented, tested cross-workspace workflow with templates",
        estimatedTime: "12-15 minutes",
        starterPrompt:
          "On paper or in a Doc, outline: 'I need to [recurring task]. The steps are: 1) [app] - [action], 2) [app] - [action], 3) [app] - [action].'",
        successCriteria: [
          "You have identified a recurring task that spans multiple apps",
          "You have documented each step with app, action, and AI prompt",
          "You have created at least one template to support the workflow",
          "You have tested the workflow and it works",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: Completion
    // ===========================================================================
    {
      id: "section-10",
      type: "completion",
      content: {
        title: "Workspace Integration Mastered",
        description:
          "You now understand how to create powerful cross-workspace workflows using Gemini across Gmail, Docs, Sheets, and Slides. These integrated approaches will multiply your productivity far beyond using any single app alone.",
        xpReward: 100,
        buttonText: "Complete Workspace Integration",
      },
    },
  ],
};
