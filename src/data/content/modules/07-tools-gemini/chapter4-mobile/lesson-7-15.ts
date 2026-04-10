/**
 * Lesson 7.15: Screen Awareness and Camera Intelligence
 *
 * CHAPTER: 4 - Mobile-First Mastery
 * LESSON: 3 of 5 - AI That Sees What You See
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Introduce Gemini's visual capabilities including screen awareness
 * and camera intelligence for practical mobile productivity
 *
 * KEY RESPONSIBILITIES:
 * - Explain Screen Awareness: AI sees what you see
 * - Show summarizing articles without reading
 * - Demonstrate document scanning: extracting text from photos
 * - Introduce Visual Search: "What is this?"
 * - Cover whiteboard capture to notes
 */

import type { Lesson } from "@/types/content";

export const lesson_7_15: Lesson = {
  id: "lesson-7-15",
  chapterId: "ch7-4-mobile",
  moduleId: "07-tools-gemini",
  title: "Screen Awareness and Camera Intelligence",
  description: "Use Gemini to understand what's on your screen or in front of your camera",
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
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-15-cover.webp",
        imageAlt: "Smartphone camera capturing visual information",
        title: "Screen Awareness and Camera Intelligence",
        subtitle: "AI that sees what you see",
      },
    },
    // ===========================================================================
    // SECTION 1: Screen Awareness
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Screen Awareness: AI Sees What You See",
        paragraphs: [
          "Imagine pointing at something on your screen and asking a question about it. That's Screen Awareness.",
          "",
          "**Here's how it works:**",
          "",
          "1. You're looking at an article, email, or document on your phone",
          "2. Activate Gemini (voice, tap, or gesture)",
          "3. Ask a question about what's on screen",
          "4. Gemini reads and understands the content, then answers",
          "",
          "**Real example:** You open a long news article about industry trends. Instead of reading the whole thing, you say: 'What are the three main points of this article?' Gemini reads it and gives you the summary.",
          "",
          "This works with emails, documents, web pages, even text messages. Any content on your screen becomes something Gemini can understand and discuss.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Document Scanning
    // ===========================================================================
    {
      id: "section-2",
      type: "textWithImage",
      content: {
        title: "Document Scanning: From Paper to Digital",
        paragraphs: [
          "Business cards, meeting handouts, printed reports, receipts, contracts. The physical world is full of information trapped on paper.",
          "",
          "Gemini's camera can extract and understand that information:",
          "",
          "**Business cards**: Point your camera at a card, ask Gemini to save the contact information or draft a follow-up email.",
          "",
          "**Meeting handouts**: Scan a printed agenda or notes, then ask Gemini to summarize or create action items.",
          "",
          "**Receipts and expenses**: Capture receipt details and ask Gemini to format them for your expense report.",
          "",
          "No typing. No manual data entry. Just point, capture, and ask.",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-15-inline-1.webp",
        imageAlt: "Smartphone scanning a document",
      },
    },
    // ===========================================================================
    // SECTION 3: Scenario - Whiteboard Capture
    // ===========================================================================
    {
      id: "section-3",
      type: "scenarioCard",
      content: {
        title: "Real-World Visual AI Scenario",
        situation:
          "You've just finished a productive brainstorming session. The whiteboard is covered in ideas, diagrams, and action items. Everyone is packing up and you need to capture it all before the next meeting uses the room.",
        challenge:
          "Taking a photo helps, but you still need to type everything into your notes later. That's 30 minutes of work you don't have.",
        context: "Whiteboard capture is one of the most immediately useful mobile AI features.",
        outcome:
          "You snap a photo and say: 'Extract and organize everything on this whiteboard.' Gemini gives you organized notes with clear sections for ideas, decisions, and action items. You copy it straight into your team's shared document. Total time: 2 minutes.",
      },
    },
    // ===========================================================================
    // SECTION 4: Visual Search - HighlightCard
    // ===========================================================================
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "Visual Search: 'What Is This?'",
        insights: [
          "Point at any object and ask 'What is this?' for instant identification",
          "Identify plants, products, landmarks, or equipment",
          "Get context about unfamiliar items you encounter",
          "Works with text, objects, signs, and even complex images",
          "Perfect for curiosity and practical problem-solving",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Practical Applications
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Everyday Uses for Visual AI",
        paragraphs: [
          "Gemini's visual features open up practical applications that fit naturally into professional workflows. At conference events, you can scan presenter slides and ask for key takeaways instead of frantically taking notes. This lets you stay engaged with the presentation while still capturing the essential points for later reference.",
          "",
          "Networking becomes more efficient when you capture business cards and ask Gemini to draft personalized follow-up emails. The AI can extract contact information and even suggest relevant content based on your conversation notes. For research purposes, photograph relevant pages from books or reports, then ask for summarization or extraction of specific data points. This bridges the gap between physical and digital information.",
          "",
          "When traveling for business, the camera can translate signs, menus, or documents in foreign languages instantly. This capability reduces friction in unfamiliar environments and helps you navigate confidently. Even everyday tasks like shopping become more informed when you can point your camera at products and ask for comparisons or additional information about items in stores. These use cases demonstrate how visual AI transforms your phone from a simple camera into an intelligent visual assistant.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Tool Reference - Gemini
    // ===========================================================================
    {
      id: "section-6",
      type: "toolReference",
      content: {
        tool: "gemini",
        action: "For this lesson",
        task: "Open the Gemini mobile app and try the camera feature. Point it at a document, business card, or text on your screen and ask a question about what you see.",
        feature: "Camera & Screen Awareness",
        tip: "Good lighting helps with document scanning. For screens, make sure brightness is high enough to read clearly.",
      },
    },
    // ===========================================================================
    // SECTION 7: Quick Prompt
    // ===========================================================================
    {
      id: "section-7",
      type: "quickPrompt",
      content: {
        heading: "Try It Now: Screen or Camera Question",
        description:
          "Open any article on your phone, activate Gemini, and ask a question about what you see. Or point your camera at something and ask Gemini to explain it.",
        promptText:
          "Point at something (screen or camera) and ask: 'What are the key points here?' or 'Can you summarize this for me?'",
      },
    },
    // ===========================================================================
    // SECTION 8: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Try Screen Awareness or Camera Intelligence",
        purpose:
          "Experience Gemini's visual capabilities by using either screen awareness or camera intelligence on real content.",
        instructions: [
          "Choose ONE of these options:",
          "OPTION A (Screen): Open a long article on your phone, activate Gemini, and ask for a summary",
          "OPTION B (Camera): Point your camera at a document, receipt, or business card and ask Gemini to extract information",
          "Ask at least one follow-up question about what Gemini found",
          "Note how this could save you time in your daily work",
        ],
        deliverable: "One visual AI task completed with follow-up question and time-saving insight",
        estimatedTime: "7-10 minutes",
        starterPrompt:
          "Point at something (screen or camera) and ask: 'What are the key points here?' or 'Can you summarize this for me?'",
        successCriteria: [
          "You used either Screen Awareness or Camera Intelligence",
          "Gemini successfully understood or extracted information",
          "You asked at least one follow-up question",
          "You identified how this feature could save you time",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: Completion
    // ===========================================================================
    {
      id: "section-9",
      type: "completion",
      content: {
        title: "Your Phone Has AI Vision",
        description:
          "You've learned to use Gemini's visual capabilities. Your phone can now read documents, understand screens, capture whiteboards, and answer questions about what it sees. Information in the physical world is now accessible to your AI assistant.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
