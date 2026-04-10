/**
 * Lesson 5.19: Advanced Data Analysis
 *
 * CHAPTER: 4 - Advanced Features Deep Dive
 * LESSON: 19 of 22 - Advanced Data Analysis
 *
 * DURATION: 15 minutes (data capabilities)
 * XP REWARD: 130 XP
 *
 * PURPOSE: Teach users how to upload, analyze, and visualize data
 * using ChatGPT's data analysis capabilities.
 *
 * KEY RESPONSIBILITIES:
 * - Explain file upload and analysis features
 * - Show how to create charts and visualizations
 * - Cover data interpretation techniques
 * - Address privacy considerations with data
 */

import type { Lesson } from "@/types/content";

export const lesson_5_19: Lesson = {
  id: "lesson-5-19",
  chapterId: "ch5-4-advanced",
  moduleId: "05-tools-chatgpt",
  title: "Advanced Data Analysis",
  description: "Upload files and extract insights with AI-powered analysis",
  order: 19,
  estimatedMinutes: 15,
  xpReward: 130,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // HERO IMAGE - At the START
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-19-cover.webp",
        imageAlt: "Data analysis and charts",
        title: "Advanced Data Analysis",
        subtitle: "Upload files and extract insights with AI-powered analysis",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "What Data Analysis Can Do",
        paragraphs: [
          "ChatGPT can analyze your uploaded files and help you understand what the data means:",
          "",
          "- **Analyze spreadsheets**: Find patterns, trends, and outliers in CSV/Excel files",
          "- **Summarize documents**: Extract key points from PDFs and reports",
          "- **Create visualizations**: Generate charts and graphs from your data",
          "- **Answer questions**: Query your data in plain English",
          "- **Identify insights**: Discover patterns you might have missed",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Supported File Types",
        paragraphs: [
          "ChatGPT can analyze a wide range of file types, making it versatile for different data scenarios. For spreadsheets, you can upload .xlsx, .csv, and .xls files containing sales data, financial reports, or survey results. The AI will parse rows and columns, identify patterns, and surface insights that might take hours to find manually in Excel.",
          "",
          "Document analysis supports .pdf, .docx, and .txt formats, perfect for extracting key points from reports, contracts, or research papers. Image files (.png, .jpg, .jpeg) can be uploaded for analysis of charts, screenshots, or photos containing data. For structured data exports, .json and .xml files work seamlessly. The general file size limit is 512MB per file, which covers most business documents and datasets you'll encounter in daily work.",
        ],
      },
    },
    {
      id: "section-3",
      type: "text",
      content: {
        title: "How to Upload and Analyze",
        paragraphs: [
          'The process is straightforward and requires no technical expertise. Start by clicking the attachment icon (paperclip) in the chat interface. Select your file from your computer—this could be a spreadsheet, PDF, or any supported format. Once uploaded, describe what you want to know. A prompt like "Analyze this sales data and tell me which products are trending up" gives ChatGPT clear direction.',
          "",
          "ChatGPT will process your file and respond with relevant insights. The real power comes from follow-up questions. You can ask it to dig deeper into specific findings, create visualizations, or compare different aspects of the data. Think of it as having a data analyst on demand—one who never gets tired of your questions and can pivot instantly between different analytical approaches. The key is starting with a clear question, then exploring the data through conversation.",
        ],
      },
    },
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "Powerful Analysis Questions",
        insights: [
          "'What are the top 3 trends in this data?'",
          "'Create a chart showing [X] over time'",
          "'What anomalies or outliers exist?'",
          "'Summarize the key findings in 3 bullet points'",
        ],
      },
    },
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Creating Visualizations",
        paragraphs: [
          'ChatGPT can transform your raw data into professional visualizations without requiring any charting software expertise. For comparing categories, ask for a bar chart: "Create a bar chart comparing sales by region." To show trends over time, request a line chart: "Plot our revenue over the last 12 months." These simple requests produce publication-ready graphics that would normally require Excel or dedicated visualization tools.',
          "",
          'For showing proportions within a whole, pie charts work well: "Show the breakdown of customers by segment." When you need to explore relationships between variables, scatter plots reveal correlations: "Plot price vs. sales volume to see if there\'s a correlation." You can also request custom combinations: "Create a stacked bar chart showing quarterly sales by product category." The key is describing what you want to visualize and letting ChatGPT handle the technical implementation. Each chart becomes a starting point—you can request adjustments to colors, labels, or formatting through follow-up prompts.',
        ],
      },
    },
    // CONTEXTUAL IMAGE
    {
      id: "section-context-image",
      type: "textWithImage",
      content: {
        title: "From Raw Data to Insights",
        paragraphs: [
          "The power of AI analysis is turning raw numbers into meaningful insights that drive decisions.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-19-inline-1.webp",
        imageAlt: "Business analytics and data dashboard",
      },
    },
    {
      id: "section-6",
      type: "highlightCard",
      content: {
        heading: "Privacy with Sensitive Data",
        insights: [
          "Don't upload files with sensitive personal information (SSN, medical data)",
          "Remove confidential client data before analysis",
          "Consider anonymizing data before uploading",
          "Delete the conversation after analysis if it contains sensitive info",
        ],
      },
    },
    {
      id: "section-quick-prompt",
      type: "quickPrompt",
      content: {
        heading: "Practice: Analyze Sample Data",
        description:
          "Upload a spreadsheet or CSV file and ask ChatGPT to find insights. What patterns or trends emerge?",
        promptText:
          "I'm uploading a spreadsheet with [data type]. Please: 1) Summarize the data structure, 2) Identify the top 3 trends or patterns, 3) Highlight any anomalies, 4) Suggest what this data tells us about [business question].",
      },
    },
    // TOOL REFERENCE
    {
      id: "section-tool-reference",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "For this exercise",
        task: "Open ChatGPT, click the attachment icon, upload your data file, and ask for analysis.",
        feature: "File upload and data analysis",
        tip: "Start with a simple summary request before diving into complex analysis.",
      },
    },
    // INLINE ACTIONABLE TASK - At the END
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Complete Data Analysis Project",
        purpose:
          "Uploading and thoroughly analyzing real data demonstrates the full power of AI-assisted analytics. You'll produce insights without Excel expertise.",
        instructions: [
          "Upload a real spreadsheet (sales, survey, budget, metrics) to ChatGPT",
          "Ask for data structure summary, key trends, anomalies, and business implications",
          "Request at least 2 different visualizations (bar chart, line graph, etc.)",
          "Download the visualizations and compile an insights summary",
        ],
        deliverable:
          "2+ downloaded visualizations and a written summary of key insights from your data",
        estimatedTime: "15 minutes",
        starterPrompt:
          "Upload your file, then ask: 'Analyze this [type] data: 1) What's the structure and data quality? 2) What are the top 3 trends? 3) Are there anomalies or outliers? 4) What business insights can you derive? 5) Create a [chart type] showing [specific comparison].'",
        successCriteria: [
          "Successfully uploaded a real data file",
          "Generated at least 2 different visualizations",
          "Compiled a summary with actionable insights",
        ],
      },
    },
    {
      id: "section-8",
      type: "completion",
      content: {
        title: "Data Analysis Unlocked",
        description:
          "You can now upload and analyze data files with ChatGPT. This capability transforms raw data into actionable insights without needing Excel expertise or data science skills.",
        xpReward: 130,
        buttonText: "Complete Data Analysis",
      },
    },
  ],
};
