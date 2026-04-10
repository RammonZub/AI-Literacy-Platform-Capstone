/**
 * Lesson 5.20: Code Interpreter Deep Dive
 *
 * CHAPTER: 4 - Advanced Features Deep Dive
 * LESSON: 20 of 22 - Code Interpreter Deep Dive
 *
 * DURATION: 15 minutes (technical capabilities)
 * XP REWARD: 130 XP
 *
 * PURPOSE: Teach users how to leverage ChatGPT's code execution
 * capabilities for data processing and technical calculations.
 *
 * KEY RESPONSIBILITIES:
 * - Explain Code Interpreter functionality
 * - Show Python code execution use cases
 * - Cover data processing workflows
 * - Demonstrate technical calculations
 */

import type { Lesson } from "@/types/content";

export const lesson_5_20: Lesson = {
  id: "lesson-5-20",
  chapterId: "ch5-4-advanced",
  moduleId: "05-tools-chatgpt",
  title: "Code Interpreter Deep Dive",
  description: "Run Python code for data processing and calculations",
  order: 20,
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
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-20-cover.webp",
        imageAlt: "Code and programming on screen",
        title: "Code Interpreter Deep Dive",
        subtitle: "Run Python code for data processing and calculations",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "What is Code Interpreter?",
        paragraphs: [
          "Code Interpreter (also called Advanced Data Analysis) allows ChatGPT to write and run Python code in a secure sandbox environment.",
          "",
          "**What this means for you:**",
          "- ChatGPT can perform calculations you describe in plain English",
          "- It can process and transform data files",
          "- It creates downloadable outputs (charts, processed files, etc.)",
          "- You don't need to know Python - just describe what you want",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "What You Can Do Without Coding",
        paragraphs: [
          "Describe your goal, and ChatGPT writes and runs the code for you. For data processing, you can clean messy data by removing duplicates and fixing formats, merge multiple files together, or transform data formats from CSV to Excel or JSON to CSV. For calculations, you can perform complex mathematical operations, statistical analysis like averages, correlations, and regressions, or financial calculations like compound interest and ROI.",
          "",
          "For file operations, you can extract specific data from large files, resize or compress images, or even generate QR codes. For visualization, you can create custom charts and graphs and generate downloadable image files. The key insight is that you don't need to know Python—you just need to describe what you want in plain English. ChatGPT translates your description into working code, executes it, and shows you the results.",
        ],
      },
    },
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "How It Works",
        insights: [
          "You describe what you want in plain English",
          "ChatGPT writes Python code to accomplish it",
          "The code runs in a secure sandbox environment",
          "Results appear in the chat - no coding knowledge needed",
        ],
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Real-World Use Cases",
        paragraphs: [
          'Professionals across industries use Code Interpreter for practical data tasks. A marketing analyst might say: "Analyze this CSV of campaign data. Calculate ROI for each channel and create a bar chart ranking them." This produces a visual comparison without any Excel expertise required. A financial professional could request: "Take this spreadsheet of expenses. Group them by category, calculate monthly totals, and flag any items over $1000." The output is an organized report with exceptions highlighted.',
          "",
          'An operations manager might ask: "Merge these three inventory files, remove duplicates, and create a summary showing low-stock items." This combines data wrangling with actionable insights. A researcher could prompt: "Calculate the correlation between these two columns and tell me if it\'s statistically significant." The response includes both the calculation and an interpretation of what it means. Each of these tasks would traditionally require Excel skills, statistical knowledge, or programming ability—Code Interpreter makes them accessible through plain language requests.',
        ],
      },
    },
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Working with Code Output",
        paragraphs: [
          "When ChatGPT runs code, you'll see:",
          "",
          "- **The code it wrote** (you can ignore this if you're not technical)",
          "- **The results** (tables, numbers, text)",
          "- **Downloadable files** (charts, processed data, etc.)",
          "",
          "**Pro tip**: If something doesn't look right, just say 'That's not quite what I wanted. Can you adjust it to...?' and describe the fix.",
        ],
      },
    },
    // CONTEXTUAL IMAGE
    {
      id: "section-context-image",
      type: "textWithImage",
      content: {
        title: "Code That Serves You",
        paragraphs: [
          "The beauty of Code Interpreter is that you get the power of programming without needing to program. Describe outcomes, not algorithms.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-20-inline-1.webp",
        imageAlt: "Productive work with technology",
      },
    },
    {
      id: "section-6",
      type: "highlightCard",
      content: {
        heading: "Limitations to Know",
        insights: [
          "No internet access - code can't fetch live data from the web",
          "Session-based - uploaded files are deleted after the conversation ends",
          "No persistent storage - you can't save code to run later",
          "Timeout limits - very long computations may time out",
        ],
      },
    },
    {
      id: "section-quick-prompt",
      type: "quickPrompt",
      content: {
        heading: "Practice: Data Processing Task",
        description:
          "Upload a data file and ask ChatGPT to process it. Describe what transformation or analysis you need.",
        promptText:
          "I'm uploading a file containing [data type]. Please [specific transformation or analysis]. The output should be [desired format].",
      },
    },
    // TOOL REFERENCE
    {
      id: "section-tool-reference",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "For this exercise",
        task: "Open ChatGPT, upload a data file, and describe the transformation or analysis you want.",
        feature: "Code Interpreter / Advanced Data Analysis",
        tip: "Be specific about the output format you want (CSV, Excel, chart type, etc.).",
      },
    },
    // INLINE ACTIONABLE TASK - At the END
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Code Interpreter Challenge",
        purpose:
          "Using Code Interpreter for a real data task demonstrates the power of AI-assisted programming without needing to code yourself.",
        instructions: [
          "Upload a data file that needs processing or transformation",
          "Describe what you want done (clean data, merge files, calculate metrics, transform format)",
          "Review the code ChatGPT writes (you don't need to understand it fully)",
          "Download the processed output file",
        ],
        deliverable: "A processed data file and a brief note on what transformation was performed",
        estimatedTime: "10 minutes",
        starterPrompt:
          "I'm uploading [file type] with [data description]. Please: 1) [cleaning/transformation task], 2) [calculation or analysis], 3) Export the result as [file format]. Explain what you did in simple terms.",
        successCriteria: [
          "Uploaded a real data file that needed processing",
          "Received a transformed or analyzed output",
          "Downloaded the result in usable format",
        ],
      },
    },
    {
      id: "section-8",
      type: "completion",
      content: {
        title: "Code Interpreter Unlocked",
        description:
          "You now understand how to leverage ChatGPT's code execution capabilities. Describe what you want in plain English, and let ChatGPT handle the technical implementation.",
        xpReward: 130,
        buttonText: "Complete Code Interpreter",
      },
    },
  ],
};
