/**
 * Day 13: Data Analysis Basics
 *
 * CHAPTER: 2 - Productivity & Research
 * LESSON: Day 13 of 28-Day AI Challenge
 *
 * PURPOSE: Teach users how to use AI for data analysis without being a data scientist.
 * Show practical techniques for finding patterns, trends, and insights in everyday data.
 *
 * DURATION: 12 minutes
 * TYPE: TUTORIAL
 *
 * KEY CONCEPTS:
 * - AI can analyze spreadsheets and data files
 * - Finding trends and anomalies with AI assistance
 * - Getting visualization suggestions
 * - Practical data analysis workflows
 */

import type { Lesson, LessonSection } from "@/types/content";

export const lessonDay13: Lesson = {
  id: "day-13",
  chapterId: "chapter2-productivity-research",
  moduleId: "10-challenge-28-day-ai",
  title: "Data Analysis Basics",
  description:
    "You don't need to be a data scientist. Use AI to find patterns, trends, and actionable insights in your spreadsheets and data.",
  order: 13,
  format: "article",
  lessonCategory: "tutorial",
  estimatedMinutes: 12,
  imageSearchTerms: [
    "data analysis spreadsheet charts",
    "business analytics dashboard",
    "trend analysis visualization",
  ],
  sections: [
    // ==========================================================================
    // SECTION 1: Hero Image
    // ==========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-13-cover.webp",
        imageAlt: "Data analysis visualization with charts and graphs",
        title: "Data Analysis Basics",
        subtitle: "Find insights in your data without being a data scientist",
      },
    },

    // ==========================================================================
    // SECTION 2: Opening - You don't need to be a data scientist
    // ==========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "You Don't Need to Be a Data Scientist",
        paragraphs: [
          "Most professionals have data. Spreadsheets of sales figures. Export files from tools. Survey results. Budget tracking.",
          "The problem isn't having data. It's knowing what to do with it.",
          "Traditional data analysis requires specialized skills: Excel formulas, pivot tables, statistical knowledge, visualization tools. That's a steep learning curve.",
          "AI changes this. You can now ask questions about your data in plain English and get meaningful answers in seconds.",
          "No coding. No complex formulas. Just describe what you want to understand, and AI does the heavy lifting.",
        ],
      },
    },

    // ==========================================================================
    // VISUAL BREAK
    // ==========================================================================
    {
      id: "context-image",
      type: "textWithImage",
      content: {
        title: "Your Data Has Stories to Tell",
        paragraphs: [
          "Every spreadsheet contains hidden patterns and insights. AI helps you uncover them without needing statistical expertise.",
        ],
        image: {
          src: "/images/courses/modules/10-challenge-28-day-ai/day-13-inline-1.webp",
          alt: "Data analysis and pattern recognition",
          caption: "AI turns raw data into meaningful insights",
        },
      },
    },

    // ==========================================================================
    // SECTION 3: AI Data Analysis Capabilities
    // ==========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "What AI Can Do With Your Data",
        paragraphs: [
          "AI tools like ChatGPT and Claude can analyze your data and surface insights that would take hours to find manually. The key insight is that you don't need to know statistical methods or Excel formulas—you just need to know how to ask the right questions.",
          "**Dataset summarization** happens instantly. Upload your data and get key statistics, averages, ranges, and distributions without writing a single formula. AI tells you what's normal, what's unusual, and what the overall picture looks like. This gives you the baseline understanding you need before diving deeper.",
          "**Trend identification** reveals patterns you might miss. AI spots patterns over time—seasonal variations, growth trajectories, correlations between variables. These patterns often hold the most valuable insights, but they're easy to miss when you're looking at raw numbers or basic charts.",
          "**Anomaly detection** surfaces the unusual. Outliers, unexpected patterns, and data quality issues jump out when AI scans your dataset. These anomalies often point to problems worth fixing or opportunities worth exploring—things that would require manual hunting in traditional analysis.",
          '**Natural language queries** transform how you interact with data. Instead of figuring out the right formula or pivot table configuration, you simply ask questions: "Which region performed best?" or "What\'s causing the dip in March?" AI interprets your question and finds the answer in your data.',
          "Beyond analysis, AI can **suggest visualizations** that best represent your findings and **generate written reports** that explain what the data shows. This bridges the gap between having insights and communicating them to others—a critical step that traditional tools leave entirely to you.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 4: Preparing Data for AI Analysis
    // ==========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Preparing Your Data",
        paragraphs: [
          "Before uploading data to AI, a little preparation goes a long way. Clean data yields better insights.",
          "**Remove sensitive information**: Names, emails, phone numbers, addresses. Replace with generic identifiers if needed.",
          "**Check column headers**: Make sure they're clear and descriptive. 'Q1 Sales' is better than 'Column C'.",
          "**Remove empty rows/columns**: Clean data is easier for AI to understand.",
          "**Export to common formats**: CSV or Excel files work best. Most AI tools accept these directly.",
          "You don't need perfect data. AI can handle some messiness. But cleaner data means more accurate insights.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 5: Tool Reference - ChatGPT for Data
    // ==========================================================================
    {
      id: "section-4",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "For data analysis",
        task: "Upload a CSV or paste data directly into ChatGPT.",
        feature: "Advanced Data Analysis (may require Plus)",
        tip: "For complex analysis, ChatGPT Plus with data analysis works best. For quick insights, any tool works.",
      },
    },

    // ==========================================================================
    // SECTION 6: How to Upload CSV/Excel Files
    // ==========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Getting Your Data Into AI",
        paragraphs: [
          "There are two main ways to share data with AI tools:",
          "**Option 1: Upload a file**. In ChatGPT, click the paperclip icon to attach a CSV or Excel file. Claude accepts files the same way.",
          "**Option 2: Paste data directly**. For smaller datasets, copy your data from Excel or Google Sheets and paste it right into the chat. This works well for quick analysis.",
          "**Option 3: Describe your data structure**. If you can't share the actual data, describe what columns you have and what kind of data they contain. AI can still provide guidance.",
          "Once your data is in, you can start asking questions immediately.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 7: Quick Prompt - Data Analysis Request Template
    // ==========================================================================
    {
      id: "section-6",
      type: "quickPrompt",
      content: {
        heading: "The Data Analysis Prompt",
        description:
          "Use this template to get comprehensive insights from any dataset. Copy and customize for your needs.",
        promptText: `Please analyze this data. I need:
1. A summary of what this data shows (key statistics)
2. The 3 most important trends or patterns
3. Any anomalies or surprises worth investigating
4. Based on this data, what should I do next?`,
        placeholders: [],
      },
    },

    // ==========================================================================
    // SECTION 8: Scenario Card - Real Scenario: Sales Data Insights
    // ==========================================================================
    {
      id: "section-7",
      type: "scenarioCard",
      content: {
        title: "Real Scenario: Sales Data Insights",
        situation:
          "Marcus manages regional sales for a software company. He exports a CSV with 18 months of sales data: dates, product types, regions, deal sizes, and sales rep names. He uploads it to ChatGPT with the analysis prompt.",
        challenge:
          "His quarterly review is in 3 days. He needs insights that will impress leadership and guide strategy for next quarter.",
        outcome:
          "ChatGPT identified that enterprise deals in the West region grew 40% while mid-market deals declined. It spotted that deals closed by reps who joined in the last 6 months were 25% smaller on average. It suggested focusing enterprise efforts in the West and improving new-hire training. Marcus used these insights to build a compelling presentation.",
      },
    },

    // ==========================================================================
    // SECTION 9: Quiz - Data Analysis Capabilities
    // ==========================================================================
    {
      id: "section-8",
      type: "quiz",
      content: {
        quiz: {
          question: "What should you do BEFORE uploading data to an AI tool?",
          options: [
            "Add more formulas and calculations",
            "Remove sensitive information like names and emails",
            "Make the data as complex as possible",
            "Convert everything to images",
          ],
          correctAnswer: 1,
          explanation:
            "Always remove sensitive information before sharing data with AI tools. This protects privacy and ensures compliance with data handling policies.",
        },
      },
    },

    // ==========================================================================
    // SECTION 10: Finding Trends and Anomalies
    // ==========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Finding Trends and Anomalies",
        paragraphs: [
          "Two of the most valuable things AI can do with your data are finding trends and spotting anomalies.",
          "**Trends** tell you where things are heading. Is revenue growing? Which products are gaining traction? Are certain time periods consistently stronger?",
          "To find trends, ask questions like: 'What patterns do you see over time?' or 'Which categories are growing versus declining?'",
          "**Anomalies** are data points that stand out. Unusually high or low values. Missing data. Patterns that break the norm.",
          "These often point to problems or opportunities worth investigating. A sudden spike might be great news or a data error. AI helps you notice these in the first place.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 11: Quick Prompt - Trend Analysis Template
    // ==========================================================================
    {
      id: "section-10",
      type: "quickPrompt",
      content: {
        heading: "Trend Analysis Prompt",
        description: "Use this when you want to understand how things are changing over time.",
        promptText: `Look at this data and tell me:
1. What are the top 3 trends you see over time?
2. Which categories/metrics are improving vs declining?
3. Are there any seasonal patterns or recurring cycles?
4. What would you predict for the next period based on these trends?`,
        placeholders: [],
      },
    },

    // ==========================================================================
    // SECTION 12: Getting AI to Suggest Visualizations
    // ==========================================================================
    {
      id: "section-11",
      type: "text",
      content: {
        title: "Getting Visualization Suggestions",
        paragraphs: [
          "You don't need to be a data visualization expert. AI can tell you the best way to present your findings.",
          "After analyzing your data, ask: 'What's the best way to visualize this?' or 'What charts would best show these trends?'",
          "AI will recommend specific chart types based on your data: line charts for trends over time, bar charts for comparisons, pie charts for proportions, scatter plots for correlations.",
          "You can even ask for step-by-step instructions to create the visualization in Excel, Google Sheets, or other tools.",
          "This bridges the gap between 'I found an insight' and 'I can show this insight to others.'",
        ],
      },
    },

    // ==========================================================================
    // SECTION 13: Highlight Card - Data Analysis Best Practices
    // ==========================================================================
    {
      id: "section-12",
      type: "highlightCard",
      content: {
        heading: "Data Analysis Best Practices",
        insights: [
          "Start with a question. Know what you're trying to learn before you dive in.",
          "Verify surprising findings. If AI finds something unexpected, double-check it manually.",
          "Context matters. The more you explain about your data and goals, the better the analysis.",
          "Don't share sensitive data. Remove PII (personally identifiable information) before uploading.",
          "Use follow-up questions. The first analysis is rarely the last word. Dig deeper into interesting findings.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 14: Actionable Task - Analyze Your Own Data
    // ==========================================================================
    {
      id: "section-13",
      type: "actionableTask",
      content: {
        title: "Your Challenge: Find Insights in Your Data",
        purpose: "Apply AI data analysis to real data and uncover actionable insights.",
        instructions: [
          "Find a dataset: export from a tool you use (sales, expenses, survey, project tracking)",
          "Remove any sensitive information (names, emails, identifying details)",
          "Upload to ChatGPT or paste into Claude with the analysis prompt",
          "Ask for: summary stats, trends, anomalies, and recommendations",
          "Note at least one actionable insight you didn't know before",
        ],
        deliverable: "Data analysis summary with 3 insights and 1 action you'll take",
        estimatedTime: "12-18 minutes",
        starterPrompt: `Please analyze this data. I need:
1. A summary of what this data shows (key statistics)
2. The 3 most important trends or patterns
3. Any anomalies or surprises worth investigating
4. Based on this data, what should I do next?`,
        successCriteria: [
          "Successfully uploaded or pasted a real dataset",
          "Received summary statistics about your data",
          "Identified at least one trend or pattern",
          "Found one actionable insight to act on",
        ],
      },
    },
  ] as LessonSection[],
};

export default lessonDay13;
