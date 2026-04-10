/**
 * Lesson 7.25: Understanding Data Privacy and Safe Practices
 *
 * CHAPTER: 7 - Privacy, Security, and Responsible AI
 * LESSON: 1 of 2 - Protecting Your Information While Using AI
 *
 * DURATION: 15 minutes (essential professional knowledge)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Equip learners with critical knowledge about data privacy
 * when using Gemini and AI tools in professional settings
 *
 * KEY RESPONSIBILITIES:
 * - Explain how Gemini processes and stores conversations
 * - Identify sensitive information types to never share
 * - Provide practical guidelines for creating sanitized prompts
 * - Introduce enterprise privacy controls for business users
 */

import type { Lesson } from "@/types/content";

export const lesson_7_25: Lesson = {
  id: "lesson-7-25",
  chapterId: "ch7-7-privacy",
  moduleId: "07-tools-gemini",
  title: "Understanding Data Privacy and Safe Practices",
  description:
    "Learn what to share, what to protect, and how to use Gemini safely in professional settings",
  order: 25,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "theory",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-25-cover.webp",
        imageAlt: "Privacy and data protection concept with lock",
        title: "Understanding Data Privacy",
        subtitle: "Protect yourself, your clients, and your organization while using AI",
      },
    },
    // ===========================================================================
    // SECTION 1: How Gemini Handles Your Conversations
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "How Gemini Handles Your Conversations",
        paragraphs: [
          "When you chat with Gemini, your conversations are processed by Google's servers. Understanding this helps you make informed decisions about what to share.",
          "",
          "**What happens to your chats**: By default, Google may use your conversations to improve Gemini's quality. This is similar to how search queries help improve search results.",
          "",
          "**Conversation history**: Your chats are saved to your Google Account, visible in your Gemini activity. You can review, delete, or turn off this history.",
          "",
          "**Google's data handling**: Google follows its privacy policies, but remember: any information you type could potentially be seen by Google staff who review samples for quality improvement.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: What to NEVER Share with AI
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "What You Should NEVER Share with AI",
        paragraphs: [
          "Some information should never be typed into any AI system. Consider this your essential 'Do Not Enter' list for protecting yourself, your organization, and the people whose information you handle. Passwords and credentials top the list. Never share login details, API keys, or security codes with AI tools. These provide direct access to protected systems and accounts.",
          "",
          "Financial account numbers require strict protection. Credit cards, bank accounts, and Social Security numbers could enable fraud or identity theft if exposed. Personal health information falls under similar protection requirements. Medical records, diagnoses, and prescription details are protected by law in many jurisdictions and should never be shared with AI systems.",
          "",
          "Professional contexts add additional categories. Legal case details, including confidential client information and pending litigation specifics, are protected by attorney-client privilege. Trade secrets such as proprietary formulas, unpublished patents, and competitive strategies could damage your organization if disclosed. Employee and personnel data, including salary information and performance reviews, requires confidentiality. Finally, any client confidential information covered by NDAs or professional privilege should never enter an AI conversation. When in doubt, leave it out.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Highlight Card - Understanding PII
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "What is PII (Personally Identifiable Information)?",
        insights: [
          "Full names combined with other identifying details",
          "Home addresses and phone numbers",
          "Email addresses in business contexts",
          "Date of birth, ID numbers, passport numbers",
          "IP addresses and location data",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Contextual Image - Security
    // ===========================================================================
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "Protecting Sensitive Information",
        paragraphs: [
          "The rule is simple: if you wouldn't write it on a postcard, don't type it into an AI chat. This includes information about others, not just yourself.",
          "When in doubt, leave it out. Gemini can still help you with sanitized versions of your questions.",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-25-inline-1.webp",
        imageAlt: "Digital security and encryption concept",
      },
    },
    // ===========================================================================
    // SECTION 5: Creating Sanitized Prompts
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Creating Sanitized Prompts",
        paragraphs: [
          "You can get excellent help from Gemini without revealing sensitive details. The trick is learning to 'sanitize' your prompts—removing or replacing confidential elements.",
          "",
          "**Instead of real names**: Use 'Client A', 'the supplier', 'my colleague'",
          "**Instead of real numbers**: Use 'X amount', 'a six-figure budget', 'approximately 15% margin'",
          "**Instead of specific dates**: Use 'next quarter', 'within 30 days', 'by year-end'",
          "**Instead of company names**: Use 'a retail company', 'a healthcare provider', 'my organization'",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Before and After Example
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Sanitization in Action",
        paragraphs: [
          "Seeing the difference between a risky prompt and a safe one makes sanitization concrete. Consider this risky example: 'Help me write an email to John Smith at Acme Corp about the $450,000 contract delay due to the lawsuit from Jane Doe.' This prompt contains specific names, exact financial figures, and references to legal matters that could be sensitive or confidential.",
          "",
          "Now consider a sanitized version: 'Help me write a professional email to a client about a project timeline adjustment due to a pending legal matter. The budget is around $500K and I need to be diplomatic about delays.' This prompt preserves all the information Gemini needs to help effectively while removing every identifying detail.",
          "",
          "Why does this work? Gemini receives all the context it requires: the professional tone needed, the approximate budget context for framing the message, and the diplomatic approach required for the situation. Yet no names, no specific companies, and no identifying details that could create privacy or confidentiality issues. The AI's response will be equally helpful for either prompt, but only the sanitized version protects sensitive information. Make this transformation automatic in your thinking, and you can use AI confidently for even sensitive professional tasks.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Enterprise Controls
    // ===========================================================================
    {
      id: "section-7",
      type: "textWithImage",
      content: {
        title: "Enterprise Controls for Business Users",
        paragraphs: [
          "If your organization uses Google Workspace with Gemini for Google Workspace, you may have additional privacy protections:",
          "",
          "**Data residency controls**: Your organization can specify where data is processed",
          "**No training on your data**: Workspace data is not used to train AI models by default",
          "**Admin controls**: IT administrators can set policies about Gemini usage",
          "**Audit logs**: Enterprise plans include activity tracking for compliance",
          "",
          "Check with your IT department about your organization's specific policies.",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-25-inline-2.webp",
        imageAlt: "Enterprise security and network protection",
      },
    },
    // ===========================================================================
    // SECTION 8: Highlight Card - Gemini Settings
    // ===========================================================================
    {
      id: "section-8",
      type: "highlightCard",
      content: {
        heading: "Your Privacy Settings in Gemini",
        insights: [
          "Activity controls: Visit myactivity.google.com to see and delete Gemini conversations",
          "Turn off history: You can disable Gemini activity tracking in your Google Account settings",
          "Delete specific chats: Remove individual conversations you don't want stored",
          "Temporary chats: Consider using incognito/private browsing for sensitive one-off questions",
          "Review regularly: Make it a monthly habit to review and clean up your AI chat history",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: Quick Prompt Practice
    // ===========================================================================
    {
      id: "section-9",
      type: "quickPrompt",
      content: {
        heading: "Practice: Sanitize This Prompt",
        description:
          "Practice rewriting a sensitive prompt into a safe version. Try rewriting this before checking the answer:",
        promptText:
          "Risky: 'Help me draft a memo about firing Mike Johnson for poor performance'\n\nSafe version: 'Help me draft a professional performance-related separation memo for an underperforming team member. I need to be respectful, clear about reasons, and outline next steps.'",
      },
    },
    // ===========================================================================
    // SECTION 10: Tool Reference - Gemini
    // ===========================================================================
    {
      id: "section-10",
      type: "toolReference",
      content: {
        tool: "gemini",
        action: "For this lesson",
        task: "Practice creating sanitized prompts that protect sensitive information while still getting helpful AI responses",
        feature: "New conversation",
        tip: "Try rewriting one of your recent work prompts in a sanitized form",
      },
    },
    // ===========================================================================
    // SECTION 11: Quiz (Knowledge Check)
    // ===========================================================================
    {
      id: "section-quiz",
      type: "quiz",
      content: {
        context: "Quick check on data privacy practices with AI tools.",
        quiz: {
          question: "What information should you NEVER share with any AI system?",
          options: [
            "General questions about work tasks",
            "Passwords, credentials, financial account numbers, and confidential client data",
            "Requests for writing assistance",
            "Questions about your industry",
          ],
          correctAnswer: 1,
        },
      },
    },
    // ===========================================================================
    // SECTION 12: Actionable Task (Inline)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create Your Do-Not-Share List",
        purpose:
          "Identify the types of sensitive information you encounter in your work that should never be shared with AI",
        instructions: [
          "Open a note or document where you track your AI practices",
          "List 5-10 types of sensitive information you handle regularly (client names, financial data, etc.)",
          "For each type, write a 'sanitized alternative' you could use instead",
          "Keep this list handy when using Gemini",
        ],
        deliverable: "A personal do-not-share checklist with sanitized alternatives",
        estimatedTime: "5 minutes",
        successCriteria: [
          "List includes at least 5 categories of sensitive information",
          "Each category has a practical sanitized alternative",
          "List is saved somewhere accessible for future reference",
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
        title: "Privacy Mindset Established",
        description:
          "You now understand how Gemini handles your data and what information should never be shared with AI. You can create sanitized prompts that get results without compromising privacy. In the next lesson, you'll learn about fact-checking AI responses and recognizing potential bias.",
        xpReward: 100,
        buttonText: "Complete Privacy Lesson",
      },
    },
  ],
};
