/**
 * Lesson 5.24: Google Workspace Integration
 *
 * CHAPTER: 5 - Integrations & Capstone
 * LESSON: 24 of 30 - Google Workspace Integration
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Master ChatGPT integration with Google Docs, Sheets, Slides, and Calendar
 *
 * KEY CONCEPTS:
 * - ChatGPT with Google Docs workflows
 * - Sheets data analysis with AI assistance
 * - Slides presentation creation
 * - Calendar and scheduling optimization
 */

import type { Lesson } from "@/types/content";

export const lesson_5_24: Lesson = {
  id: "lesson-5-24",
  chapterId: "ch5-5-integrations",
  moduleId: "05-tools-chatgpt",
  title: "Google Workspace Integration",
  description: "Unlock ChatGPT productivity across Docs, Sheets, Slides, and Calendar",
  order: 24,
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
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-24-cover.webp",
        imageAlt: "Google Workspace and productivity tools",
        title: "Google Workspace Integration",
        subtitle: "Unlock ChatGPT productivity across Docs, Sheets, Slides, and Calendar",
      },
    },
    // ===========================================================================
    // SECTION: Introduction
    // ===========================================================================
    {
      id: "section-intro",
      type: "text",
      content: {
        title: "The Power of Integration",
        paragraphs: [
          "Google Workspace powers over 3 billion users worldwide. When you combine it with ChatGPT, you create a productivity system that handles documents, data, presentations, and scheduling with unprecedented efficiency.",
          "",
          "This lesson shows you how to build cross-tool workflows that amplify your productivity.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Google Docs Workflows
    // ===========================================================================
    {
      id: "section-docs-workflows",
      type: "text",
      content: {
        title: "Google Docs + ChatGPT",
        paragraphs: [
          "Google Docs becomes dramatically more powerful when paired with ChatGPT:",
          "",
          "**For drafting**: Start in ChatGPT to generate outlines and first drafts, then move to Docs for formatting and collaboration.",
          "",
          "**For editing**: Copy Doc content to ChatGPT for revision suggestions, structure improvements, and tone adjustments.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Docs Prompts
    // ===========================================================================
    {
      id: "section-docs-prompts",
      type: "text",
      content: {
        title: "Google Docs Workflows",
        paragraphs: [
          "High-value document workflows combine ChatGPT's drafting power with Google Docs' collaboration features. For outline generation, prompt: \"Create a detailed outline for a [document type] about [topic]. Include main sections, subsections, and key points to cover in each.\" This gives you a structure before you start writing.",
          "",
          'For first drafts: "Based on this outline, write the first draft of [section]. Target length: [X words]. Tone: [professional/casual/formal]." This transforms an outline into prose you can refine. For revision: "Review this document for clarity issues, repetitive content, and weak arguments. Provide specific suggestions for improvement." For format transformation: "Convert this document section from paragraphs to bullet points while preserving all key information." Each workflow solves a specific document challenge.',
        ],
      },
    },
    // ===========================================================================
    // SECTION: Highlight Card - Sheets
    // ===========================================================================
    {
      id: "section-highlight-sheets",
      type: "highlightCard",
      content: {
        heading: "Sheets + ChatGPT = Data Insights",
        insights: [
          "Upload spreadsheets directly to ChatGPT for instant analysis",
          "Ask questions about your data in plain English—no formulas required",
          "Generate formulas by describing what you want in natural language",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Sheets Workflows
    // ===========================================================================
    {
      id: "section-sheets-workflows",
      type: "text",
      content: {
        title: "Sheets Analysis Workflows",
        paragraphs: [
          "Transform how you work with spreadsheet data using ChatGPT's analytical capabilities. For data summarization, upload a sheet and ask: \"What are the 3 most important insights from this data? What trends do you see?\" You'll get interpretation without wrestling with pivot tables.",
          "",
          'For formula generation: "Write a Google Sheets formula that [describes calculation]. Explain how it works." This is especially valuable for complex formulas you\'d normally spend hours researching. For data cleaning: "This column has inconsistent formatting. Generate a formula to standardize it to [format]." For visualization: "Based on this data, what chart types would best communicate [specific insight]?" ChatGPT can recommend the right visualization approach and explain why it works for your data.',
        ],
      },
    },
    // ===========================================================================
    // SECTION: Visual Break - Slides
    // ===========================================================================
    {
      id: "section-slides-visual",
      type: "textWithImage",
      content: {
        title: "Slides Presentation Power",
        paragraphs: [
          "Creating presentations becomes significantly faster with ChatGPT assistance. The key is using ChatGPT for content generation while using Slides for visual design.",
          "",
          "Generate slide content in ChatGPT, then transfer to Slides for formatting with your brand templates.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-24-inline-1.webp",
        imageAlt: "Presentation and slides design",
      },
    },
    // ===========================================================================
    // SECTION: Presentation Workflows
    // ===========================================================================
    {
      id: "section-presentation-workflows",
      type: "text",
      content: {
        title: "Presentation Workflows",
        paragraphs: [
          'From idea to finished presentation, ChatGPT accelerates each phase. For structure planning: "Create a 12-slide presentation outline for [topic]. Audience: [who]. Goal: [outcome]. Include key messages for each slide." This gives you a complete roadmap before you open Slides.',
          "",
          'For individual slide content: "For slide 3 about [topic], write: a headline, 3-4 bullet points, and speaker notes explaining the key message." For comprehensive speaker support: "Write detailed speaker notes for this presentation. Include transitions between slides and key points to emphasize." For preparation: "Based on this presentation, generate 10 likely audience questions with suggested answers." This workflow transforms presentation creation from hours of staring at blank slides to a structured, efficient process.',
        ],
      },
    },
    // ===========================================================================
    // SECTION: Highlight Card - Calendar
    // ===========================================================================
    {
      id: "section-highlight-calendar",
      type: "highlightCard",
      content: {
        heading: "Calendar & Scheduling Optimization",
        insights: [
          "ChatGPT can't directly access your calendar, but it excels at scheduling logic",
          "Use it to plan meeting agendas, optimize schedules, and prepare for upcoming events",
          "Paste calendar excerpts for schedule analysis and recommendations",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Calendar Workflows
    // ===========================================================================
    {
      id: "section-calendar-workflows",
      type: "text",
      content: {
        title: "Calendar Productivity Workflows",
        paragraphs: [
          'Maximize your time management with ChatGPT as your scheduling assistant. For agenda creation: "I have a 30-minute meeting with [person] about [topic]. Create an agenda that covers [goals] and leaves time for questions." This ensures productive meetings rather than aimless discussions.',
          "",
          'For schedule optimization: "Here\'s my calendar for next week. Identify scheduling conflicts and suggest reorganization for better focus time." ChatGPT can spot patterns and conflicts you might miss. For meeting prep: "I have these 4 meetings tomorrow. For each, create a 3-bullet preparation checklist so I\'m ready." For weekly planning: "Based on these calendar commitments, suggest optimal times for deep work, email processing, and breaks." This transforms your calendar from a list of obligations into a strategic productivity tool.',
        ],
      },
    },
    // ===========================================================================
    // SECTION: Cross-App Workflow
    // ===========================================================================
    {
      id: "section-cross-app",
      type: "text",
      content: {
        title: "The Cross-App Workflow",
        paragraphs: [
          "The real power emerges when you combine multiple Google tools:",
          "",
          "**Project Kickoff**: Research in ChatGPT -> Outline in Docs -> Data in Sheets -> Present in Slides -> Schedule review in Calendar.",
          "",
          "**Weekly Report**: Pull data from Sheets -> Summarize in ChatGPT -> Format in Docs -> Share with team.",
          "",
          "**Client Presentation**: Prepare agenda in ChatGPT -> Create slides -> Build supporting spreadsheet -> Schedule meeting.",
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
        task: "Open ChatGPT to practice Google Workspace workflows",
        feature: "File Upload",
        tip: "Upload spreadsheets directly for instant data analysis",
      },
    },
    // ===========================================================================
    // SECTION: Quick Prompt
    // ===========================================================================
    {
      id: "section-quick-prompt",
      type: "quickPrompt",
      content: {
        heading: "Create Your Workspace Workflow",
        description:
          "Identify your most document-heavy task and design a ChatGPT + Google Workspace workflow for it.",
        promptText:
          "I need to create a [document type] that includes [content requirements]. My workflow: 1) Generate outline in ChatGPT, 2) Create first draft, 3) Move to [Google tool] for formatting, 4) [final step].",
      },
    },
    // ===========================================================================
    // SECTION: Actionable Task (Inline)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Design a Cross-Tool Workflow",
        purpose:
          "Mapping a complete workflow across ChatGPT and Google Workspace creates a repeatable system for document-heavy tasks. This becomes your template for similar projects.",
        instructions: [
          "Identify a document-heavy project you're working on (report, presentation, analysis)",
          "Map each phase to the appropriate tool (ChatGPT for drafting, Docs for formatting, Slides for presenting)",
          "Execute at least 2 phases of the workflow with ChatGPT assistance",
          "Document the workflow steps for future repetition",
        ],
        deliverable: "A documented cross-tool workflow with at least 2 phases completed",
        estimatedTime: "15 minutes",
        starterPrompt:
          "Workflow for [project]: Step 1) ChatGPT - [specific task and prompt]. Step 2) Google Docs - [formatting and collaboration]. Step 3) [Next tool] - [purpose]. Notes: [what to remember for next time].",
        successCriteria: [
          "Mapped a complete workflow across at least 2 tools",
          "Executed at least 2 phases using ChatGPT",
          "Documented the workflow for future use",
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
        title: "Workspace Integration Mastered",
        description:
          "You've learned to integrate ChatGPT across Google Workspace—from document drafting to data analysis, presentation creation, and schedule optimization. These workflows compound into hours saved weekly.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
