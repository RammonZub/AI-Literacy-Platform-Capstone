/**
 * Lesson 6.23: Claude for Code
 *
 * CHAPTER: 5 - Advanced Features Deep Dive
 * LESSON: 3 of 4 - Code Generation and Development
 *
 * DURATION: 14 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Leverage Claude for code-related tasks regardless of technical background
 *
 * KEY RESPONSIBILITIES:
 * - Explain code generation capabilities
 * - Show debugging assistance workflows
 * - Demonstrate development project workflows
 */

import type { Lesson } from "@/types/content";

export const lesson_6_23: Lesson = {
  id: "lesson-6-23",
  chapterId: "ch6-5-advanced",
  moduleId: "06-tools-claude",
  lessonCategory: "tutorial",
  title: "Claude for Code",
  description: "Harness Claude's coding capabilities for development workflows and technical tasks",
  order: 23,
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
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-23-cover.webp",
        imageAlt: "Claude for code generation and development",
        title: "Claude for Code",
        subtitle:
          "Harness Claude's coding capabilities for development workflows and technical tasks",
      },
    },
    // ===========================================================================
    // SECTION 1: Cover Introduction
    // ===========================================================================
    {
      id: "section-cover",
      type: "textWithImage",
      content: {
        title: "Claude for Code",
        paragraphs: [
          "Claude is exceptionally skilled at code-related tasks. Whether you're a developer or just need occasional technical help, Claude's coding capabilities can accelerate your work.",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-23-inline-1.webp",
        imageAlt: "Code development and programming workspace",
      },
    },
    // ===========================================================================
    // SECTION 2: Code Generation Capabilities
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Code Generation Capabilities",
        paragraphs: [
          "Claude can generate working code across many programming languages and frameworks:",
          "",
          "**For non-developers**: Get spreadsheet formulas, Excel macros, simple automation scripts, or SQL queries without learning to code.",
          "",
          "**For developers**: Generate boilerplate, implement algorithms, create API integrations, or build complete functions.",
          "",
          "**The key insight**: Describe what you want the code to DO, not how to write it. Claude handles the implementation.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: What Claude Can Generate
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Types of Code Claude Excels At",
        paragraphs: [
          "Claude's code generation capabilities span a range of practical categories that serve both technical and non-technical users. Understanding these categories helps you identify opportunities to leverage Claude's coding abilities in your work.",
          "",
          "Formulas represent perhaps the most accessible category. Claude can generate Excel and Google Sheets formulas for complex calculations, from conditional logic to statistical functions to lookups. If you can describe what you want to calculate, Claude can write the formula.",
          "",
          "Scripts for automation are another powerful category. Whether you need to rename files in bulk, process text, or automate repetitive tasks, Claude can write scripts in languages like Python, JavaScript, or Bash that handle these workflows. You don't need to be a programmer to benefit from programmable automation.",
          "",
          "Web code including HTML, CSS, and JavaScript lets you create simple websites or components. Claude can generate complete working code that you can copy directly into your projects. This is valuable for prototyping, creating simple landing pages, or building custom components.",
          "",
          "Data processing scripts in Python can handle data cleaning, transformation, and analysis tasks. If you work with datasets, Claude can help you write code to manipulate that data in ways that would be tedious or impossible manually.",
          "",
          "SQL queries help you extract and analyze data from databases. Claude understands SQL syntax and can help you construct queries to get exactly the data you need, even if you're not fluent in database languages.",
          "",
          "Configuration files for tools, apps, or systems are another category where Claude excels. Whether you need a JSON config, YAML settings, or environment configurations, Claude can generate properly formatted files that work with your systems.",
          "",
          "Documentation including code comments and technical documentation rounds out Claude's code capabilities. Claude can explain what code does, document functions, and create technical guides that help others understand your codebase.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Debugging Assistance
    // ===========================================================================
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "Debugging with Claude",
        insights: [
          "Paste error messages for explanations and solutions",
          "Share code that's not working—Claude spots issues",
          "Get step-by-step debugging guidance",
          "Learn WHY things failed, not just how to fix them",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Code Review
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Code Review and Improvement",
        paragraphs: [
          "Claude can review existing code and suggest improvements:",
          "",
          "**Identify issues**: Spot bugs, security vulnerabilities, or inefficiencies",
          "**Explain code**: Understand what unfamiliar code does",
          "**Optimize**: Improve performance or readability",
          "**Modernize**: Update old code patterns to current best practices",
          "",
          "For non-developers: 'Explain what this formula does in plain English' is incredibly valuable when inheriting spreadsheets from others.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Development Workflows
    // ===========================================================================
    {
      id: "section-6",
      type: "textWithImage",
      content: {
        title: "Development Project Workflows",
        paragraphs: [
          "For larger development projects, Claude supports the entire workflow:",
          "",
          "**Planning**: 'Help me design the architecture for a simple contact management app'",
          "**Implementation**: 'Generate the database schema for storing contacts'",
          "**Testing**: 'Write test cases for the contact creation function'",
          "**Documentation**: 'Create user documentation for this application'",
          "**Debugging**: 'This code is throwing an error—help me fix it'",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-23-inline-2.webp",
        imageAlt: "Software development and coding process",
      },
    },
    // ===========================================================================
    // SECTION 6b: Comparison Table
    // ===========================================================================
    {
      id: "section-6b",
      type: "comparisonTable",
      content: {
        title: "Code Tasks: Non-Developers vs Developers",
        intro: "Claude serves different needs based on your technical background.",
        columns: [{ name: "Task Type" }, { name: "Non-Developer Use" }, { name: "Developer Use" }],
        rows: [
          {
            feature: "Formulas",
            values: ["Excel/Sheets calculations", "Complex spreadsheet logic"],
          },
          { feature: "Scripts", values: ["Simple automation tasks", "Production-ready utilities"] },
          { feature: "SQL", values: ["Basic data queries", "Complex joins, optimization"] },
          { feature: "Debugging", values: ["Understanding errors", "Root cause analysis"] },
          {
            feature: "Code Review",
            values: ["Learning what code does", "Security, performance, patterns"],
          },
          {
            feature: "Documentation",
            values: ["Explaining in plain English", "Technical docs, API references"],
          },
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Practical Example
    // ===========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Real Example: Spreadsheet Formula Help",
        paragraphs: [
          "**Problem**: You need a spreadsheet formula that calculates commission with tiered rates.",
          "",
          "**Your prompt**: 'I need an Excel formula for commission. If sales are under $10,000, rate is 5%. $10,000-$50,000 is 7%. Over $50,000 is 10%. The sales amount is in cell A2.'",
          "",
          "**Claude's response**: A working formula with explanation of how it works, plus alternative approaches.",
          "",
          "**Iterate if needed**: 'Can you also add a condition that caps the maximum commission at $5,000?'",
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
        action: "For code generation",
        task: "Open Claude and ask it to generate code, formulas, or scripts for your specific needs",
        feature: "Code Generation",
        tip: "Describe what you want the code to do, not how - Claude handles the implementation",
      },
    },
    // ===========================================================================
    // SECTION 9: Quick Prompt
    // ===========================================================================
    {
      id: "section-9",
      type: "quickPrompt",
      content: {
        heading: "Try Code Generation",
        description: "Ask Claude to generate something useful for your work.",
        promptText:
          "Ask Claude: 'Create a formula/script for [a task you do manually that could be automated]. Explain how it works.'",
      },
    },
    // ===========================================================================
    // SECTION 10: Your Turn - Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Generate Practical Code",
        purpose:
          "Experience Claude's code generation capabilities by creating something useful for your work.",
        instructions: [
          "Identify a manual task you do that could be automated with a formula or script",
          "Ask Claude to create the code/formula with explanation",
          "Test it (if possible) or review it for understanding",
          "Iterate if needed: add error handling, modify for edge cases, etc.",
        ],
        deliverable:
          "A generated formula or script with explanation, plus notes on testing or how you'd use it",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "I need a [formula/script/function] that [describes what it should do]. The context is [your situation]. Please explain how it works so I can understand it.",
        successCriteria: [
          "You generated code for a real need",
          "Claude explained how the code works",
          "You understand what the code does",
          "The code addresses your specific use case",
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
        question: "Do you need to be a developer to use Claude for code?",
        options: [
          "Yes, only professional developers can use it",
          "No, Claude can help non-technical users with formulas, scripts, and simple automation",
          "Claude cannot help with any coding tasks",
          "You need a computer science degree",
        ],
        correctAnswer: 1,
        hint: 'Review "Code for Everyone" section if needed.',
      },
    },
    // ===========================================================================
    // SECTION 12: Completion
    // ===========================================================================
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Claude Code Capabilities Unlocked",
        description:
          "You now understand Claude's code generation capabilities and can use them regardless of your technical background. From simple formulas to complex development workflows, Claude is your coding assistant.",
        xpReward: 100,
        buttonText: "Complete Claude for Code",
      },
    },
  ],
};
