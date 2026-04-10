/**
 * Lesson 8.21: Google Workspace & Spreadsheets
 *
 * CHAPTER: 6 - Integrations & Connections
 * LESSON: 2 of 3 - Google Workspace & Spreadsheets
 *
 * DURATION: 15 minutes (practical application)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Integrate ChatGPT into Google Workspace for daily productivity
 *
 * KEY RESPONSIBILITIES:
 * - Show Gmail, Drive, Sheets, and Calendar integration possibilities
 * - Demonstrate spreadsheet magic with AI
 * - Explain MCP connectors for secure authentication
 */

import type { Lesson } from "@/types/content";

export const lesson_8_21: Lesson = {
  id: "lesson-8-21",
  chapterId: "ch8-6-integrations",
  moduleId: "09-workflow-automation",
  title: "Google Workspace & Spreadsheets",
  description: "Integrate ChatGPT into your daily productivity suite",
  order: 21,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // HERO IMAGE SECTION
    // ===========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-21-cover.webp",
        imageAlt: "Google Workspace productivity tools",
        title: "Google Workspace & Spreadsheets",
        subtitle: "Integrate ChatGPT directly into Gmail, Drive, Sheets, and Calendar",
      },
    },
    // ===========================================================================
    // SECTION 1: Why Google Workspace Integration Matters
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why Google Workspace Integration Matters",
        paragraphs: [
          "Most professionals live in Google Workspace. Your emails, documents, spreadsheets, and calendar are the central nervous system of your work life.",
          "",
          "When ChatGPT is integrated into this ecosystem, AI becomes a natural extension of your workflow—not a separate tool you have to remember to use.",
          "",
          "The result: faster email processing, automated document analysis, intelligent spreadsheets, and meeting preparation that happens automatically.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Google + ChatGPT = Speed at Scale
    // ===========================================================================
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "Google + ChatGPT = Speed at Scale",
        insights: [
          "Process 50 emails as fast as you'd process one",
          "Analyze entire document folders in seconds",
          "Transform spreadsheets with AI-powered formulas",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Gmail Integration Possibilities
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Gmail Integration Possibilities",
        paragraphs: [
          "Gmail is where most professionals spend significant time each day, and ChatGPT integration can dramatically reduce that time while improving the quality of your email management. The key insight is that AI excels at the pattern-matching and synthesis tasks that make email time-consuming.",
          "Thread summarization is perhaps the most immediately valuable capability. Instead of reading through a 47-message back-and-forth to understand what happened, you can ask ChatGPT to distill it into three bullet points capturing the key decisions and open questions. Similarly, response drafting transforms your rough bullet points into polished, professional emails that match your typical tone and style. The AI handles the composition while you maintain control over the substance.",
          "Beyond individual emails, ChatGPT can extract action items from conversations, automatically categorize incoming messages by urgency, and even draft polite follow-up messages for emails awaiting response. These capabilities compound over time: spending 30 seconds per email on AI-assisted processing instead of 5 minutes on manual handling translates to hours saved each week. The integration works best when you identify your most repetitive email patterns and build templates around them.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Google Drive Analysis
    // ===========================================================================
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "Google Drive Analysis",
        paragraphs: [
          "Your Google Drive contains a wealth of information—proposals, reports, meeting notes, research. ChatGPT can help you make sense of it all.",
          "",
          "**Document Summarization**: Point ChatGPT at any document and get instant summaries, key points, or action items.",
          "",
          "**Cross-Document Analysis**: 'What do all my Q3 proposals have in common?'",
          "",
          "**Content Search**: Find information across multiple documents without opening each one.",
        ],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-21-inline-1.webp",
        imageAlt: "Cloud document storage and analysis",
      },
    },
    // ===========================================================================
    // SECTION 5: Spreadsheet Magic with Google Apps Script
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Spreadsheet Magic with Google Apps Script",
        paragraphs: [
          "This is where things get powerful. With Google Apps Script (a built-in scripting language), you can add ChatGPT directly into your spreadsheets.",
          "",
          '**The Basic Idea**: Create a custom function like `=GROQ("Summarize: " & A1)` that processes cell content through ChatGPT.',
          "",
          "**Bulk Processing**: Apply AI to entire columns—summarize 100 customer feedback entries, categorize 500 support tickets, or generate personalized emails for 50 contacts.",
          "",
          "**Data Enrichment**: Add AI-generated insights alongside your existing data. A spreadsheet of companies can gain columns for 'Likely industry,' 'Suggested outreach approach,' or 'Risk assessment.'",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Practical Spreadsheet Examples
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Practical Spreadsheet Examples",
        paragraphs: [
          "When ChatGPT meets Google Sheets, entirely new workflows become possible. The spreadsheet transforms from a static data store into an intelligent processing engine that can understand, categorize, and generate content at scale. The pattern is consistent: raw data goes in one column, AI-processed insights emerge in adjacent columns.",
          "Customer feedback analysis demonstrates this power clearly. Column A contains raw feedback text, Column B auto-generates sentiment analysis (positive, negative, neutral), and Column C suggests appropriate response categories. This turns hours of manual review into seconds of automated processing. Similarly, content generation workflows can take product names in Column A and automatically generate descriptions in Column B and taglines in Column C, maintaining consistency across large product catalogs.",
          "Research and personalization workflows follow the same pattern. Paste research notes in Column A and receive structured summaries in Column B. Enter names and companies in Column A and get personalized opening lines in Column B. Even data cleaning becomes automated: messy data in Column A transforms into standardized, normalized entries in Column B. The key advantage is that you define the transformation once, then apply it to hundreds or thousands of rows automatically. ChatGPT's speed makes this practical even for large datasets.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Calendar Integration
    // ===========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Calendar Integration",
        paragraphs: [
          "Your calendar knows your schedule. ChatGPT can make you better prepared for every meeting.",
          "",
          "**Meeting Prep Automation**: Every morning, ChatGPT reviews your calendar, researches attendees, and prepares briefing notes for each meeting.",
          "",
          "**Post-Meeting Actions**: After meetings, automatically generate follow-up emails, action item lists, and summary documents.",
          "",
          "**Smart Scheduling**: 'What's the best time for a team brainstorm?' ChatGPT can analyze your calendar patterns and suggest optimal times.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: MCP Connectors: Secure Authentication
    // ===========================================================================
    {
      id: "section-8",
      type: "highlightCard",
      content: {
        heading: "MCP Connectors: Secure Authentication",
        insights: [
          "MCP (Model Context Protocol) enables secure Google Workspace connections",
          "OAuth authentication means your tokens aren't stored by ChatGPT",
          "Enterprise-grade security for sensitive business data",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: Understanding MCP Connectors
    // ===========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Understanding MCP Connectors",
        paragraphs: [
          "Google's Model Context Protocol (MCP) is a secure way to connect AI tools to your Google Workspace data.",
          "",
          "**How it works**: You authenticate with Google (the same login you use for Gmail), and that authentication allows specific, limited access to your data. ChatGPT never sees your password or stores your login credentials.",
          "",
          "**What this means for you**: You can connect ChatGPT to your Google Workspace with confidence. Your data stays under your control, and you can revoke access at any time.",
          "",
          "**Enterprise consideration**: If your organization has strict security policies, check with your IT team about approved AI integrations.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: Quick Prompt Example
    // ===========================================================================
    {
      id: "section-10",
      type: "quickPrompt",
      content: {
        heading: "Your Google Workspace AI Idea",
        description:
          "Which Google Workspace tool would benefit most from ChatGPT integration in your daily work?",
        promptText:
          "I spend the most time in [Gmail/Drive/Sheets/Calendar] doing [specific task]. I wish I could automate [what part].",
      },
    },
    // ===========================================================================
    // SECTION 11: Tool Reference
    // ===========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Connect via MCP or Apps Script",
        task: "Integrate with Google Workspace",
        feature: "Gmail, Drive, Sheets, Calendar integration via MCP connectors",
        tip: "Start with Sheets using Apps Script for custom AI functions. Use MCP for secure read/write access to Drive and Gmail.",
      },
    },
    // ===========================================================================
    // SECTION 12: Actionable Task
    // ===========================================================================
    {
      id: "section-10-actionable",
      type: "actionableTask",
      content: {
        title: "Your Turn: Plan Your Google Workspace Integration",
        purpose:
          "Identify which Google Workspace tool would benefit most from ChatGPT integration in your workflow.",
        instructions: [
          "Audit your time in Google Workspace apps this week",
          "Identify the highest-friction task in your most-used app",
          "Design a prompt that would solve this friction point",
          "Plan how you would trigger this (manual paste, Apps Script, or Zapier)",
          "Calculate potential time savings per week",
        ],
        deliverable:
          "A Google Workspace integration plan with specific prompts and time savings estimate",
        estimatedTime: "8-10 minutes",
        starterPrompt:
          "I want to integrate ChatGPT with [Gmail/Drive/Sheets/Calendar]. My repetitive task is [describe]. Create a prompt I could use to automate or accelerate this task.",
        successCriteria: [
          "Audited time spent across Google Workspace apps",
          "Identified the highest-impact integration opportunity",
          "Created a specific prompt for that integration",
          "Estimated realistic time savings per week",
        ],
      },
    },
    // ===========================================================================
    // SECTION 13: Completion
    // ===========================================================================
    {
      id: "section-11",
      type: "completion",
      content: {
        title: "Google Workspace Integration Ready",
        description:
          "You now understand how ChatGPT can integrate with Gmail, Drive, Sheets, and Calendar. The key insight: AI is most powerful when it works where you already work. Start with the tool where you spend the most time.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
