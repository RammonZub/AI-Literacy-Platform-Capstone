/**
 * Lesson 1.10: Data Security & AI Privacy (THEORY)
 *
 * PURPOSE: Teach learners how to use AI tools safely and protect sensitive data
 *
 * FORMAT: Article with sections, quizzes, and checkpoint
 *
 * KEY CONCEPTS:
 * - Everything you share with AI is potentially exposed
 * - Safety spectrum: safe to use, use caution, never share
 * - Privacy policies of major AI tools
 * - Safe AI habits for professional use
 *
 * Duration: 20 minutes
 * XP: Base 50 x 1.0 (10-20min) x 1.0 (Beginner) + 20 bonus = 70 XP
 */

import type { Lesson } from "@/types/content";

export const lesson_1_10: Lesson = {
  id: "foundations-10",
  chapterId: "ch3-the-toolkit",
  moduleId: "01-skills-foundations",
  title: "Use AI Safely At Work",
  description: "Simple privacy habits for using AI responsibly in professional settings.",
  order: 11,
  estimatedMinutes: 20,
  format: "article",
  lessonCategory: "theory",
  coverImage: "/images/courses/lessons/modules/brain-memory-and-thinking-neural-network.webp",
  coverTitle: "Use AI Safely At Work",
  xpReward: 70,
  sections: [
    // === HERO SECTION ===
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/01-skills-foundations/foundations-10-cover.webp",
        imageAlt: "Data security and privacy protection visualization",
        title: "Use AI Safely At Work",
        subtitle: "Simple privacy habits so you can use AI without sharing more than you mean to.",
      },
    },

    // === THE DATA REALITY ===
    {
      id: "section-2",
      type: "text",
      content: {
        title: "The Data Reality",
        paragraphs: [
          "When you use AI, you are sharing information with a tool and a company. That is worth thinking about.",
          "",
          "**The main question:** Is this the kind of information I would be comfortable sharing here?",
          "",
          "**The good news:** With a few simple habits, you can use AI confidently without treating every prompt like a risk.",
        ],
      },
    },

    // === THE SAFETY SPECTRUM ===
    {
      id: "section-3",
      type: "text",
      content: {
        title: "The Safety Spectrum",
        paragraphs: [
          "**Safe to Use:** Publicly available information, general knowledge questions, anonymized examples, hypothetical scenarios, personal non-sensitive tasks.",
          "",
          "**Use Caution:** Work details that could identify your company, information about projects or initiatives, data that's confidential but not critical.",
          "",
          "**Never Share:** Personal identifiable information (PII), trade secrets or proprietary algorithms, financial data beyond your role, health information (HIPAA), passwords, API keys, access tokens, anything marked confidential or restricted.",
        ],
      },
    },

    // === QUIZ 1 ===
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "Understanding what's safe to share with AI.",
        quiz: {
          question: "Which of the following is generally SAFE to share with an AI tool?",
          options: [
            "Your company's secret algorithm for a product",
            "Customer credit card numbers",
            "A hypothetical scenario about a project (no real names or data)",
            "Your API keys for production systems",
          ],
          correctAnswer: 2,
        },
      },
    },

    // === WHAT HAPPENS TO YOUR PROMPTS ===
    {
      id: "section-4",
      type: "text",
      content: {
        title: "What Happens to Your Prompts?",
        paragraphs: [
          "**1. To generate responses** - The tool has to read what you send in order to answer you.",
          "",
          "**2. To improve their models** - Some companies may use conversations to improve future versions. This is the part worth checking.",
          "",
          "**3. For business purposes** - Some data may also be used for analytics or service improvement.",
          "",
          "**Key question:** Can you control what is saved, reviewed, or used for training? That is the part to check first.",
        ],
      },
    },

    // === WHAT MAJOR TOOLS SAY ===
    {
      id: "section-5",
      type: "text",
      content: {
        title: "What Major Tools Say",
        paragraphs: [
          "**ChatGPT (OpenAI):** Check the plan you are on and the current privacy settings before sharing work data.",
          "",
          "**Claude (Anthropic):** Review the current privacy and retention settings for the plan you use.",
          "",
          "**Gemini (Google):** Review the privacy controls in your Google account and the tool settings.",
          "",
          "**NotebookLM:** A good example of why it is worth checking how a tool handles your sources and history.",
        ],
      },
    },

    // === CHECKPOINT 1 ===
    {
      id: "checkpoint-1",
      type: "checkpoint",
      content: {
        question: "You're working on a project with sensitive company data. What should you do?",
        options: [
          "Upload it directly to ChatGPT to analyze",
          "Anonymize the data first, or use an enterprise-approved AI tool",
          "Email it to yourself so you can work on it at home",
          "Share it with colleagues via Slack for their input",
        ],
        correctAnswer: 1,
        hint: "Think about how to protect sensitive information while still getting AI's benefits.",
      },
    },

    // === USING AI PROFESSIONALLY ===
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Using AI Professionally",
        paragraphs: [
          "**Before using AI with work data:** Check if your company has an AI policy, confirm what data classification you're handling, know whether approved tools exist.",
          "",
          "**Red flags:** Using unauthorized tools with work data, sharing confidential client information, uploading proprietary documents to public AI, inputting code that should stay private.",
          "",
          "**Safe alternatives:** Use enterprise versions when available, request approval for new tools, anonymize or generalize data before sharing.",
        ],
      },
    },

    // === SAFE AI HABITS ===
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Safe AI Habits",
        paragraphs: [
          "**DO:** Treat AI prompts like emails, assume anything you share could be stored somewhere, review and delete old conversations when needed, use business versions when available, and ask your IT or security team when you are unsure.",
          "",
          "**DON'T:** Input passwords, keys, or credentials, share other people's private information, upload confidential documents without approval, assume \"off the record\" exists, or use personal accounts for sensitive work tasks.",
        ],
      },
    },

    // === QUIZ 2 ===
    {
      id: "quiz-2",
      type: "quiz",
      content: {
        context: "You can get AI's help without sharing sensitive information.",
        quiz: {
          question:
            "Which of the following is the SAFEST way to ask AI for help with a product launch?",
          options: [
            '"My company Acme Corp is launching product X priced at $Y targeting..."',
            '"I\'m working on a product launch for a B2C technology product in the $50-100 price range. The target demographic is urban professionals aged 25-40. How would you position this?"',
            '"Here\'s our confidential launch plan with all the details..."',
            '"Can you help me with my company\'s secret project?"',
          ],
          correctAnswer: 1,
        },
      },
    },

    // === SHARE INSIGHTS NOT DATA ===
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Share Insights, Not Data",
        paragraphs: [
          "The pattern: Preserve the structure and context while removing specific identifying details.",
          "",
          '**Don\'t share:** "My company Acme Corp is launching a new product called X, priced at $Y, targeting customers with these specific demographics..."',
          "",
          '**Use:** "I\'m working on a product launch for a B2C technology product in the $50-100 price range. The target demographic is urban professionals aged 25-40. How would you position this?"',
        ],
      },
    },

    // === KEY INSIGHTS ===
    {
      id: "key-insight",
      type: "highlightCard",
      content: {
        heading: "Data Security - Key Takeaways",
        insights: [
          "Treat AI prompts like emails - don't put sensitive info in them",
          "Use the safety spectrum: Safe / Use Caution / Never Share",
          "Anonymize data: preserve context, remove identifying details",
          "Check company policy before using AI with work data",
        ],
      },
    },

    // === TOOL REFERENCE ===
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "general",
        action: "Audit your AI privacy",
        task: "Review the privacy policy of an AI tool you use or plan to use",
        feature: "Privacy settings and data controls",
        tip: "Check privacy settings before sharing sensitive information - every tool handles data differently",
      },
    },

    // === ACTIONABLE TASK ===
    {
      id: "actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Challenge: Security Audit",
        purpose:
          "Review an AI tool's privacy policy to understand what happens to your data. This builds the habit of checking before sharing.",
        instructions: [
          "Choose an AI tool you use or plan to use (ChatGPT, Claude, Gemini, etc.)",
          "Find and read the privacy policy or data handling section",
          "Answer these questions:",
          "- Is your data used for training?",
          "- Can you delete your data?",
          "- How long is data stored?",
        ],
        deliverable:
          "Tool reviewed, whether data is used for training (Yes/No), whether you can delete data (Yes/No), any concerns you identified",
        estimatedTime: "5-10 minutes",
        successCriteria: [
          "You reviewed a privacy policy for an AI tool",
          "You know whether your conversations are used for training",
          "You know how to delete your data if needed",
          "You can make an informed decision about what to share",
        ],
      },
    },
  ],
};
