/**
 * Lesson 7.13: Getting Started with Gemini Mobile
 *
 * CHAPTER: 4 - Mobile-First Mastery
 * LESSON: 1 of 5 - AI That Travels With You
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Introduce Gemini's mobile capabilities and help users set up
 * AI assistance that works anywhere, anytime
 *
 * KEY RESPONSIBILITIES:
 * - Explain the mobile difference: AI that travels with you
 * - Guide app installation and setup
 * - Introduce widgets and shortcuts for instant access
 * - Demonstrate hands-free "Hey Google" integration
 * - Show sync between mobile and desktop
 */

import type { Lesson } from "@/types/content";

export const lesson_7_13: Lesson = {
  id: "lesson-7-13",
  chapterId: "ch7-4-mobile",
  moduleId: "07-tools-gemini",
  title: "Getting Started with Gemini Mobile",
  description: "Set up AI assistance that travels with you everywhere you go",
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
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-13-cover.webp",
        imageAlt: "Smartphone displaying AI assistant interface",
        title: "Getting Started with Gemini Mobile",
        subtitle: "AI that travels with you everywhere",
      },
    },
    // ===========================================================================
    // SECTION 1: The Mobile Difference
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Mobile Difference: AI That Travels With You",
        paragraphs: [
          "Desktop AI is powerful. Mobile AI is liberating.",
          "",
          "When you're rushing to a meeting, standing in line at the coffee shop, or walking between appointments, your desktop isn't available. But your phone is always with you.",
          "",
          "Gemini Mobile transforms those in-between moments into productive ones:",
          "",
          "**Stuck in traffic?** Ask Gemini to check your calendar, summarize your first meeting, and draft talking points.",
          "",
          "**Waiting for a client?** Quickly research their company or review your last conversation.",
          "",
          "**Forgot a detail?** Ask Gemini to find that email or document you need right now.",
          "",
          "The mobile difference isn't about having AI everywhere. It's about having AI in the moments when you actually need it most.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Installation and Setup
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Getting Set Up (5 Minutes)",
        paragraphs: [
          "Setting up Gemini on your phone takes about five minutes and unlocks AI assistance that travels with you everywhere. Begin by downloading the app from your device's app store. On iOS, open the App Store and search for 'Google Gemini.' On Android, open the Play Store and do the same. The app is free and installs quickly.",
          "",
          "Once installed, sign in with your Google account, the same one you use for Gmail, Docs, and other Google services. This ensures your conversations sync across devices and you have access to your full history. The app will request permission to access your microphone and camera. Granting microphone access enables voice input for hands-free interaction, while camera access unlocks visual features like document scanning and image analysis.",
          "",
          "Take a moment to choose your preferences, selecting your default Gemini mode. Fast mode is recommended for mobile use since it provides quick responses ideal for on-the-go questions. Finally, decide whether to enable notifications. These can provide helpful reminders and alerts without becoming overwhelming if configured thoughtfully. With these steps complete, you're ready to use Gemini anywhere, anytime.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Scenario - Quick Access Setup
    // ===========================================================================
    {
      id: "section-3",
      type: "scenarioCard",
      content: {
        title: "Real-World Mobile Scenario",
        situation:
          "You're heading into an important client meeting. While walking from the parking lot, you realize you haven't reviewed the client's recent news or your last conversation with them.",
        challenge:
          "You have 3 minutes before the meeting starts and no laptop. You need to quickly get up to speed.",
        context: "This last-minute preparation happens constantly in professional life.",
        outcome:
          "With Gemini Mobile on your home screen, you tap once and ask: 'What was the outcome of my last meeting with [Client Name]?' Then: 'What are the latest news about [Client Company]?' By the time you reach the door, you're informed and confident.",
      },
    },
    // ===========================================================================
    // SECTION 4: Hey Google Integration
    // ===========================================================================
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "Widgets and Hands-Free Access",
        paragraphs: [
          "The key to using Gemini Mobile regularly is making it easy to access. You want AI help to be one tap away.",
          "",
          "**On iPhone:** Long-press the Gemini app icon and choose 'Add Widget.' Place it on your home screen for one-tap access.",
          "",
          "**On Android:** Long-press your home screen, select 'Widgets,' find Gemini, and drag it to your preferred location.",
          "",
          "**Pro tip:** Put the Gemini widget right next to your calendar and email apps. This creates a natural workflow: check calendar, ask Gemini to prep, check email.",
          "",
          "**Hands-Free:** Say 'Hey Google' followed by your request. Perfect for driving, walking, or when your hands are full.",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-13-inline-1.webp",
        imageAlt: "Person using smartphone on the go",
      },
    },
    // ===========================================================================
    // SECTION 5: Sync Between Devices - HighlightCard
    // ===========================================================================
    {
      id: "section-5",
      type: "highlightCard",
      content: {
        heading: "Seamless Sync: Mobile Meets Desktop",
        insights: [
          "Start on mobile, continue on desktop—conversations sync automatically",
          "Research on desktop, reference on mobile during meetings",
          "Your history travels with you—all conversations saved and searchable",
          "Consistent experience across all your devices",
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
        task: "Download the Gemini mobile app from your app store, sign in with your Google account, and add the widget to your home screen.",
        feature: "Mobile App & Widget",
        tip: "Put the widget next to your most-used apps for easy access during your daily routine.",
      },
    },
    // ===========================================================================
    // SECTION 7: Quick Prompt
    // ===========================================================================
    {
      id: "section-7",
      type: "quickPrompt",
      content: {
        heading: "Try It Now: Your First Mobile Request",
        description:
          "Install the Gemini app and try this hands-free request. Just say it naturally, like you're talking to a helpful colleague.",
        promptText:
          "Hey Google, ask Gemini: 'What are three things I should prepare for my next meeting today?'",
      },
    },
    // ===========================================================================
    // SECTION 8: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Complete Mobile Setup and First Voice Request",
        purpose:
          "Ensure Gemini is properly set up on your phone and experience the convenience of hands-free AI assistance.",
        instructions: [
          "Install the Gemini mobile app (if not already done) from App Store or Play Store",
          "Add the Gemini widget to your home screen for one-tap access",
          "Enable 'Hey Google' voice activation in settings",
          "Try your first hands-free request: 'Hey Google, ask Gemini what I should prepare for my next meeting'",
          "Test the sync by checking if the conversation appears on your desktop",
        ],
        deliverable:
          "Gemini mobile app installed, widget added, and first hands-free request completed",
        estimatedTime: "8-10 minutes",
        starterPrompt:
          "Hey Google, ask Gemini: 'What are three things I should prepare for my next meeting today?'",
        successCriteria: [
          "Gemini app is installed and signed in on your phone",
          "Widget or shortcut is on your home screen",
          "Hey Google is enabled and working",
          "You have completed at least one hands-free request",
          "Conversation syncs to your desktop",
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
        title: "You're Ready to Go Mobile",
        description:
          "You've set up Gemini on your phone and know how to access it quickly. Now you have AI assistance that travels with you, available in those in-between moments when inspiration strikes or problems need solving.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
