/**
 * Lesson 7.8: Gmail Mastery
 *
 * CHAPTER: 3 - Gemini + Google Workspace
 * LESSON: 1 of 5 - AI-Powered Email Efficiency
 *
 * DURATION: 15 minutes (practical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Transform email productivity with Gemini's Gmail integration
 *
 * KEY RESPONSIBILITIES:
 * - Teach Gmail's built-in AI features (summarize, draft, reply)
 * - Provide practical prompting patterns for email
 * - Show time-saving workflows for inbox management
 *
 * TARGET AUDIENCE: 40-55+ non-technical professionals
 */

import type { Lesson } from "@/types/content";

export const lesson_7_8: Lesson = {
  id: "lesson-7-8",
  chapterId: "ch7-3-workspace",
  moduleId: "07-tools-gemini",
  title: "Gmail Mastery",
  description: "Transform your inbox with AI-powered summarization, drafting, and smart replies",
  order: 1,
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
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-8-cover.webp",
        imageAlt: "Email and communication on a computer screen",
        title: "Gmail Mastery",
        subtitle: "AI-powered email efficiency in minutes",
      },
    },
    // ===========================================================================
    // SECTION 1: The Email Challenge
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Email Challenge We All Face",
        paragraphs: [
          "If you're like most professionals, you spend hours each day managing email. Reading long threads, crafting careful responses, searching for that one message from three months ago.",
          "",
          "Gmail's built-in AI changes this equation. Instead of reading every word of a 47-message thread, you can get an instant summary. Instead of staring at a blank compose window, you can have AI draft a response that you simply refine.",
          "",
          "These aren't futuristic features—they're available right now in your Gmail, and they're designed for people just like you.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Key Features Overview
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Gmail's AI Superpowers",
        paragraphs: [
          "Gemini brings four powerful capabilities directly into Gmail, each designed to save time on a different aspect of email management. The Summarize feature extracts key points from long email threads instantly, so you can understand what happened without reading every message. This is particularly valuable when returning from vacation or joining a project mid-stream.",
          "",
          "The Draft feature transforms brief descriptions into complete, professional emails. You provide the context and intent, and Gemini generates a polished first draft that you can review and customize. Smart Reply takes this further by offering AI-suggested responses for quick replies, perfect for acknowledging messages or confirming appointments with a single tap.",
          "",
          "Finally, the Find capability lets you search across your entire email history using natural language. Instead of remembering specific keywords, you can ask questions like 'What did Sarah say about the Q3 budget?' and Gemini will locate the relevant conversations. Together, these four features fundamentally change how you interact with your inbox.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Scenario - Summarize Feature
    // ===========================================================================
    {
      id: "section-3",
      type: "scenarioCard",
      content: {
        title: "Real-World Scenario",
        situation:
          "You return from a week-long vacation to find a 30-message thread about a project decision. Your colleague asks for your input by end of day.",
        challenge:
          "You need to understand what was decided and why, but reading every message would take 30 minutes you don't have.",
        context: "This happens to professionals constantly—catching up after time away.",
        outcome:
          "With Gmail's Summarize feature, you click one button and see: 'The team decided to delay the product launch to Q3. Key reasons: supply chain issues, competitor announcement, and budget constraints. Sarah is finalizing the revised timeline.' You're caught up in 10 seconds.",
      },
    },
    // ===========================================================================
    // SECTION 4: Draft Feature
    // ===========================================================================
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "Draft: From Thought to Email",
        paragraphs: [
          "Starting an email is often the hardest part. Gmail's Draft feature lets you describe what you want to say, and AI creates a first draft.",
          "",
          'You simply provide context: "Write a polite follow-up to the vendor about the delayed shipment. Express concern but remain professional. Ask for an updated timeline."',
          "",
          "Gmail generates a complete, ready-to-edit draft. You review, make any adjustments, and send. What used to take 10 minutes now takes 2.",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-8-inline-1.webp",
        imageAlt: "Professional writing an email",
      },
    },
    // ===========================================================================
    // SECTION 5: Tone Adjustment - HighlightCard
    // ===========================================================================
    {
      id: "section-5",
      type: "highlightCard",
      content: {
        heading: "Tone Control: Match Your Audience",
        insights: [
          "Formal — Board members, executives, external partners",
          "Friendly — Colleagues you know well, team updates",
          "Concise — Quick confirmations, simple requests",
          "Professional — Default for most business communication",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Best Practices
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Best Practices for AI-Assisted Email",
        paragraphs: [
          "Getting the most from AI-assisted email requires developing good habits that maintain your professional standards. The most important rule is to always review before sending. AI drafts are starting points, not final products. Read through the generated content carefully to ensure it accurately reflects what you want to communicate.",
          "",
          "Adding personal touches makes a significant difference in how your messages are received. Include specific details that show genuine engagement with the recipient and the topic. A generic AI draft becomes much more effective when you add context that only you can provide, such as references to previous conversations or shared experiences.",
          "",
          "Verification is essential for maintaining credibility. Double-check any dates, names, and numbers that Gemini includes in its drafts. AI can occasionally make mistakes with specific facts, and catching these before sending prevents embarrassing errors. Additionally, take time to edit the email so it sounds like you rather than a robot. Your colleagues and clients recognize your voice, and maintaining that consistency builds trust. Finally, use AI assistance for routine communications but think carefully about confidential topics. Some subjects warrant more discretion than an AI tool can provide.",
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
        task: "Open Gmail in your browser and look for the Gemini sparkle icon in the compose window and at the top of email threads.",
        feature: "Help me write & Summarize",
        tip: "The AI features work best when you provide specific context about your audience and desired tone.",
      },
    },
    // ===========================================================================
    // SECTION 8: Quick Prompt
    // ===========================================================================
    {
      id: "section-8",
      type: "quickPrompt",
      content: {
        heading: "Try It Now: Your First AI Draft",
        description:
          "Open Gmail and use the Draft feature to compose a real email you need to send.",
        promptText:
          "In Gmail, click Compose, then look for 'Help me write' (sparkle icon). Try: 'Write a professional email to [colleague name] asking for an update on [project]. Be friendly but direct.'",
      },
    },
    // ===========================================================================
    // SECTION 9: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Transform Your Inbox Workflow",
        purpose:
          "Apply Gmail's AI features to real emails in your inbox right now. Experience the time savings firsthand.",
        instructions: [
          "Open Gmail and find a long email thread (5+ messages) that you haven't fully read",
          "Use the Summarize feature to get the key points in seconds",
          "Find an email that needs a response and use 'Help me write' to draft it",
          "Review the draft, add your personal touches, and send it",
          "Note how much time these two tasks saved you",
        ],
        deliverable: "One summarized thread and one AI-drafted email response sent",
        estimatedTime: "8-12 minutes",
        starterPrompt:
          "In Gmail, click Compose, then look for 'Help me write' (sparkle icon). Try: 'Write a professional email to [colleague name] asking for an update on [project]. Be friendly but direct.'",
        successCriteria: [
          "You have used Summarize on at least one long thread",
          "You have drafted and sent at least one email using AI assistance",
          "You can articulate the time saved compared to your usual approach",
          "You added personal touches to the AI draft before sending",
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
        title: "Gmail Mastery Achieved",
        description:
          "You now know how to use Gemini's AI features in Gmail to summarize threads, draft emails, and work more efficiently. These skills will save you hours every week.",
        xpReward: 100,
        buttonText: "Complete Gmail Mastery",
      },
    },
  ],
};
