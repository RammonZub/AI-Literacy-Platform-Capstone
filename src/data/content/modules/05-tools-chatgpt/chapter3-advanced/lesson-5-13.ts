/**
 * Lesson 5.13: Advanced Data Analysis - Upload & Visualize
 *
 * CHAPTER: 3 - Advanced Features
 * LESSON: 13 of 15 - Data Analytics
 *
 * DURATION: 15 minutes
 * XP REWARD: 125 XP
 */

import type { Lesson } from "@/types/content";

export const lesson_5_13: Lesson = {
  id: "lesson-5-13",
  chapterId: "ch5-3-advanced",
  moduleId: "05-tools-chatgpt",
  lessonCategory: "tutorial",
  title: "Advanced Data Analysis - Upload & Visualize",
  description: "Turn spreadsheets and data into insights without complex formulas",
  order: 13,
  estimatedMinutes: 15,
  xpReward: 125,
  format: "article",
  sections: [
    // ===========================================================================
    // HERO IMAGE SECTION
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-13-cover.webp",
        imageAlt: "Data analysis dashboards and charts",
        title: "Advanced Data Analysis - Upload & Visualize",
        subtitle: "Turn spreadsheets and data into insights without complex formulas",
      },
    },
    // ===========================================================================
    // SECTION 1: Introduction
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Data Analysis Without the Complexity",
        paragraphs: [
          "Most professionals aren't data analysts. When a spreadsheet lands in your inbox with 'Can you pull insights from this?', it's intimidating.",
          "",
          "ChatGPT's Advanced Data Analysis (formerly Code Interpreter) changes that. You don't need formulas, pivot tables, or statistical knowledge. You upload, you ask questions, you get insights.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: What Advanced Data Analysis Does
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "What Advanced Data Analysis Does",
        paragraphs: [
          "Advanced Data Analysis transforms how you work with data. You can analyze spreadsheets by uploading Excel or CSV files and asking questions in plain English—no SQL or Python required. You can create visualizations automatically, generating charts, graphs, and visual representations without configuring axes or formatting in Excel.",
          "",
          "The feature can clean data, finding errors, duplicates, and inconsistencies that would take hours to spot manually. It performs calculations like sum, average, percentage change, and growth rate without you writing a single formula. It generates reports, turning raw data into narrative summaries that explain what the numbers mean. And it can compare datasets, letting you upload multiple files and identify patterns across them. All of this happens through conversation—you describe what you want, and ChatGPT does the technical work.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Highlight Card - Key Insight
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "No-Code Data Analysis",
        insights: [
          "Instead of learning complex Excel formulas or programming, you ask questions in plain English",
          "ChatGPT analyzes the data and explains the answer clearly",
          "No formulas, pivot tables, or statistical knowledge required",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: How to Upload and Analyze
    // ===========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "How to Upload and Analyze",
        paragraphs: [
          "In ChatGPT, click the attachment/paperclip icon. Select your file (CSV, Excel, PDF with tables). ChatGPT will preview the data structure.",
          "",
          "Then ask questions naturally: 'What trends do you see?', 'Which month performed best?', 'Create a chart showing sales by region.'",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Comparison Table - Traditional vs AI Analysis
    // ===========================================================================
    {
      id: "section-5",
      type: "comparisonTable",
      content: {
        title: "Traditional Analysis vs. AI-Powered Analysis",
        intro: "See how ChatGPT transforms data analysis workflows.",
        columns: [{ name: "Traditional (Excel)" }, { name: "ChatGPT Analysis", recommended: true }],
        rows: [
          {
            feature: "Required Skills",
            values: ["Formulas, pivot tables", "Plain English questions"],
          },
          { feature: "Creating Charts", values: ["Manual configuration", "Automatic generation"] },
          { feature: "Learning Curve", values: ["Weeks to months", "Minutes"] },
          {
            feature: "Explaining Findings",
            values: ["You write the summary", "AI writes for you"],
          },
          {
            feature: "Iterating on Analysis",
            values: ["Rebuild formulas", "Just ask differently"],
          },
        ],
        footer:
          "Use ChatGPT for quick insights. Use Excel when you need precise control over calculations.",
      },
    },
    // ===========================================================================
    // SECTION 6: Professional Use Cases
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Professional Use Cases",
        paragraphs: [
          "Professionals use data analysis with ChatGPT for a wide range of common tasks. Monthly sales reports become simple: upload your sales data, ask for top performers, declining products, and regional comparison, and get instant insights without pivot tables. Survey analysis transforms from hours of coding responses to minutes of AI-powered theme extraction from open-ended questions.",
          "",
          "Budget reviews get easier when you can upload quarterly spending and ask the AI to identify unusual expenses or cost-saving opportunities. Website analytics exports from tools like Google Analytics become meaningful when ChatGPT can explain traffic sources and user behavior in plain language. Even team performance data becomes more accessible when you can identify patterns without complex calculations or statistical knowledge. Each of these tasks would traditionally require Excel expertise or data science skills—now they require only the ability to ask questions.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Highlight Card - Data Responsibility
    // ===========================================================================
    {
      id: "section-7",
      type: "highlightCard",
      content: {
        heading: "Responsible Data Reminder",
        insights: [
          "Only upload datasets you're authorized to analyze",
          "Public business data is fine—personal employee records or confidential data should stay offline",
          "Regulated information (healthcare, financial) requires extra caution",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Visual Break - Data Visualization
    // ===========================================================================
    {
      id: "section-8",
      type: "textWithImage",
      content: {
        title: "Data Visualization Power",
        paragraphs: [
          "ChatGPT doesn't just analyze—it visualizes. Request charts, graphs, or plots and it generates them directly. You can download these visualizations for reports or presentations.",
          "",
          "Combine this with DALL-E image generation, and you create complete data stories—analysis + visuals—in minutes.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-13-inline-1.webp",
        imageAlt: "Business analytics and data visualization charts",
      },
    },
    // ===========================================================================
    // SECTION 9: Quick Prompt
    // ===========================================================================
    {
      id: "section-9",
      type: "quickPrompt",
      content: {
        heading: "Try Data Analysis",
        description: "If you have a spreadsheet, upload it to ChatGPT and ask for insights.",
        promptText:
          "If you have a spreadsheet (sales data, budget, survey results, website analytics), upload it to ChatGPT. Ask: 'What are the 3 most important insights from this data?'",
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
        task: "Click the attachment/paperclip icon to upload your spreadsheet, then ask questions about the data",
        feature: "Advanced Data Analysis",
        tip: "Works with CSV, Excel (.xlsx), and PDF files containing tables",
      },
    },
    // ===========================================================================
    // SECTION 11: Actionable Task (Inline)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Analyze Real Data",
        purpose:
          "Uploading and analyzing real data demonstrates the power of no-code AI analysis. You'll discover insights without complex formulas or pivot tables.",
        instructions: [
          "Find a spreadsheet you've been meaning to analyze (sales, budget, survey, metrics)",
          "Upload it to ChatGPT using the attachment icon",
          "Ask for the top 3 insights and any anomalies or patterns",
          "Request a visualization (chart type of your choice) and download it",
        ],
        deliverable: "3 key insights from your data plus a downloaded chart/visualization",
        estimatedTime: "10 minutes",
        starterPrompt:
          "After uploading your file, ask: 'Analyze this data and tell me: 1) What are the 3 most important insights? 2) What patterns or trends do you see? 3) Are there any anomalies or outliers? Then create a [bar/line/pie] chart showing [specific comparison].",
        successCriteria: [
          "Successfully uploaded a real data file",
          "Received at least 3 meaningful insights",
          "Generated and downloaded a visualization",
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
        question: "What types of files can ChatGPT's Advanced Data Analysis work with?",
        options: [
          "Only text files",
          "CSV, Excel, and PDFs with tables",
          "Only images",
          "Word documents only",
        ],
        correctAnswer: 1,
        hint: "Think about common data file formats you use in spreadsheets.",
      },
    },
    // ===========================================================================
    // SECTION 13: Completion
    // ===========================================================================
    {
      id: "section-13",
      type: "completion",
      content: {
        title: "Data Analysis Complete",
        description:
          "You've turned raw data into insights without formulas. This capability alone saves hours for anyone who works with numbers.",
        xpReward: 125,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
