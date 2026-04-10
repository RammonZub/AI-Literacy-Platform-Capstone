/**
 * Lesson 7.10: Google Sheets — Data Without the Headache
 *
 * CHAPTER: 3 - Gemini + Google Workspace
 * LESSON: 3 of 5 - AI-Powered Spreadsheet Mastery
 *
 * DURATION: 15 minutes (practical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Make spreadsheets accessible and powerful with AI assistance
 *
 * KEY RESPONSIBILITIES:
 * - Teach natural language formula creation
 * - Show data analysis and insight generation
 * - Demonstrate chart creation from descriptions
 * - Help overcome "spreadsheet anxiety"
 *
 * TARGET AUDIENCE: 40-55+ non-technical professionals
 */

import type { Lesson } from "@/types/content";

export const lesson_7_10: Lesson = {
  id: "lesson-7-10",
  chapterId: "ch7-3-workspace",
  moduleId: "07-tools-gemini",
  title: "Google Sheets — Data Without the Headache",
  description:
    "Turn spreadsheet anxiety into data confidence with AI-powered formulas, analysis, and charts",
  order: 3,
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
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-10-cover.webp",
        imageAlt: "Data analysis and charts on a computer screen",
        title: "Google Sheets — Data Without the Headache",
        subtitle: "Spreadsheets made simple with AI",
      },
    },
    // ===========================================================================
    // SECTION 1: The Spreadsheet Struggle
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Spreadsheet Struggle Is Real",
        paragraphs: [
          "Many professionals feel a wave of anxiety when asked to work with spreadsheets. The formulas look like a foreign language. The functions are confusing. Creating meaningful charts seems impossible.",
          "",
          "You're not alone—and Gemini is here to help. Instead of memorizing VLOOKUP syntax or struggling with pivot tables, you simply describe what you want in plain English.",
          "",
          '"Calculate the average sales for each region" or "Show me a chart of quarterly revenue" — that\'s all you need to say. Gemini handles the technical details.',
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Natural Language Formulas
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Formulas in Plain English",
        paragraphs: [
          "Gemini can write spreadsheet formulas from your natural language descriptions. No more memorizing syntax or searching through help documentation for the right function name. You simply describe what you want to calculate, and Gemini translates your request into the correct formula.",
          "",
          'For example, you can say "Add up all values in column B where column A says \'Complete\'" and Gemini will write the SUMIF formula for you. Need something more complex? Try "Find the average of the top 10 values in column C" and watch Gemini create the correct function combination. You can ask for percentage calculations between columns, count specific values, or perform any other spreadsheet operation—all by describing the outcome you want in plain English.',
          "",
          "The beauty of this approach is that you focus on what you need rather than how to express it in formula syntax. Gemini handles the technical details while you stay focused on your actual work.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Scenario - Creating Sheets
    // ===========================================================================
    {
      id: "section-3",
      type: "scenarioCard",
      content: {
        title: "Real-World Spreadsheet Scenario",
        situation:
          "Your manager asks you to create a project tracker. You need columns for task name, assigned to, due date, status, and priority. You also need sample data to show how it works.",
        challenge:
          "You're not sure how to structure it efficiently or which formulas to use for status tracking.",
        context:
          "This is a common request that would normally take 30-45 minutes to set up properly.",
        outcome:
          "You describe it to Gemini: 'Create a project tracker with columns for task name, assigned to, due date, status, and priority. Include sample data for 5 tasks.' Gemini generates the complete structure with headers, formatting, sample data, and even suggests a formula for tracking completion percentage.",
      },
    },
    // ===========================================================================
    // SECTION 4: Data Insights
    // ===========================================================================
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "Find Insights Hidden in Your Data",
        paragraphs: [
          "Gemini can analyze your data and surface patterns you might miss. Select a range of data and ask questions like:",
          "",
          '**"What trends do you see in this sales data?"**',
          "",
          '**"Which products are performing above average?"**',
          "",
          '**"Are there any unusual patterns or outliers?"**',
          "",
          "Gemini provides analysis in plain language, helping you make data-driven decisions without becoming a data scientist.",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-10-inline-1.webp",
        imageAlt: "Data analysis dashboard with charts",
      },
    },
    // ===========================================================================
    // SECTION 5: Chart Creation - HighlightCard
    // ===========================================================================
    {
      id: "section-5",
      type: "highlightCard",
      content: {
        heading: "Charts from Descriptions",
        insights: [
          '"Create a bar chart showing sales by month"',
          '"Make a pie chart of expenses by category"',
          '"Show the trend line for Q1-Q4 revenue"',
          '"Build a comparison chart of team performance"',
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Cleaning Data
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Clean Messy Data Automatically",
        paragraphs: [
          "Messy data is a fact of professional life. Whether it's duplicate entries, inconsistent formatting, or missing values, data cleanup used to be a tedious manual process. Gemini changes that equation by helping you clean and organize data through simple natural language requests.",
          "",
          "You can ask Gemini to find and remove duplicate entries from a list, standardize phone numbers to a consistent format like (xxx) xxx-xxxx, split full names into separate first and last name columns, or fill in missing dates in a timeline. These tasks that once took hours of careful manual work can now be accomplished in minutes.",
          "",
          "The key insight is that data cleaning becomes conversational. You describe the problem you see, and Gemini suggests solutions. You can iterate quickly, trying different approaches until your data is clean and ready for analysis.",
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
        task: 'Open Google Sheets and look for the Gemini sparkle icon in the toolbar, or use the "Help me organize" feature in a new sheet.',
        feature: "Help me organize & Formula assistance",
        tip: "Start with natural language descriptions—Gemini will suggest the right formula or create the structure for you.",
      },
    },
    // ===========================================================================
    // SECTION 8: Quick Prompt
    // ===========================================================================
    {
      id: "section-8",
      type: "quickPrompt",
      content: {
        heading: "Try It Now: Your First AI Formula",
        description:
          "Open Google Sheets and try creating a formula or analysis using natural language.",
        promptText:
          "In Google Sheets, select a cell and try asking Gemini: 'I need a formula that [describe what you want to calculate: sum values where / count items that / find the average of].'",
      },
    },
    // ===========================================================================
    // SECTION 9: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Conquer a Spreadsheet Task",
        purpose:
          "Overcome spreadsheet anxiety by completing a real task using natural language to create formulas and analysis.",
        instructions: [
          "Open Google Sheets and either use existing data or create a sample dataset",
          "Identify a calculation you need (sum, average, count, or conditional)",
          "Use Gemini to create the formula by describing what you want in plain English",
          "Ask Gemini to analyze your data and find one insight or pattern",
          "Optional: Create a chart from your data using a natural language request",
        ],
        deliverable: "One working formula created with natural language, plus one data insight",
        estimatedTime: "10-12 minutes",
        starterPrompt:
          "In Google Sheets, select a cell and try asking Gemini: 'I need a formula that [describe what you want to calculate: sum values where / count items that / find the average of].'",
        successCriteria: [
          "You have created at least one formula using natural language",
          "The formula works correctly and produces expected results",
          "You have received at least one data insight from Gemini",
          "You feel more confident about approaching spreadsheet tasks",
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
        title: "Spreadsheet Confidence Achieved",
        description:
          "You now know how to use Gemini in Google Sheets to create formulas from plain English, analyze data, and build charts. Spreadsheets are no longer something to fear.",
        xpReward: 100,
        buttonText: "Complete Sheets Mastery",
      },
    },
  ],
};
