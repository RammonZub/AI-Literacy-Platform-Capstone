/**
 * Lesson 7.16: On-Device AI and Mobile Privacy
 *
 * CHAPTER: 4 - Mobile-First Mastery
 * LESSON: 4 of 5 - Private AI Processing
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Explain on-device AI (Gemini Nano), privacy considerations,
 * and how to build privacy-aware mobile habits
 *
 * KEY RESPONSIBILITIES:
 * - Explain what on-device AI (Gemini Nano) is
 * - Show tasks that work without internet
 * - Cover privacy-sensitive tasks using on-device processing
 * - Guide managing app permissions
 * - Help build privacy-aware mobile habits
 */

import type { Lesson } from "@/types/content";

export const lesson_7_16: Lesson = {
  id: "lesson-7-16",
  chapterId: "ch7-4-mobile",
  moduleId: "07-tools-gemini",
  title: "On-Device AI and Mobile Privacy",
  description: "Understand how Gemini protects your privacy with on-device AI processing",
  order: 4,
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
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-16-cover.webp",
        imageAlt: "Digital security and privacy concept",
        title: "On-Device AI and Mobile Privacy",
        subtitle: "Your data stays on your device",
      },
    },
    // ===========================================================================
    // SECTION 1: What is On-Device AI?
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "What is On-Device AI (Gemini Nano)?",
        paragraphs: [
          "Most AI processing happens in the cloud. You send a request to Google's servers, they process it, and send back the response. This is powerful but requires an internet connection.",
          "",
          "**Gemini Nano** is different. It's a smaller version of Gemini that runs directly on your phone's processor. No internet required.",
          "",
          "Think of it like this: full Gemini is like having access to a supercomputer. Gemini Nano is like having a capable AI assistant built into your phone's brain.",
          "",
          "It's not as powerful as cloud Gemini, but it handles many common tasks without ever leaving your device.",
          "",
          "**Why this matters:** When AI runs on your phone, your data stays on your phone. Nothing is sent to external servers unless you choose to sync.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Tasks Without Internet
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Tasks That Work Without Internet",
        paragraphs: [
          "On-device AI handles surprisingly useful tasks, even when you're completely offline. Smart replies provide contextual response suggestions for messages, learning from your communication patterns to offer relevant options. Voice typing delivers accurate dictation without sending your audio to cloud servers, making it ideal for sensitive content or areas with poor connectivity.",
          "",
          "Summarization works on on-screen content, giving you quick overviews of articles or documents without requiring an internet connection. Proofreading features offer grammar and style suggestions directly on your device, helping you polish text even in airplane mode. Basic translation between common languages also runs locally, useful for travel or communicating with international colleagues when you don't have reliable network access.",
          "",
          "These capabilities mean Gemini remains helpful in situations where cloud-based AI would fail entirely. Whether you're on a flight, in a remote location, or simply in an area with poor cellular coverage, on-device processing ensures you still have AI assistance for common tasks. The privacy benefits are equally significant, as your data never leaves your device during these operations.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Scenario - Privacy-Sensitive Tasks
    // ===========================================================================
    {
      id: "section-3",
      type: "scenarioCard",
      content: {
        title: "Real-World Privacy Scenario",
        situation:
          "You're drafting a sensitive email about a personnel issue on your phone during your commute. The content is confidential and shouldn't leave your organization.",
        challenge:
          "You want AI help with wording and tone, but you're concerned about confidential information being processed in the cloud.",
        context:
          "Privacy concerns are legitimate—some information simply shouldn't leave your device.",
        outcome:
          "You check that Gemini Nano is enabled on your phone. When you ask for help with the email, you see the on-device indicator. The AI helps you refine the language without the content ever leaving your phone. Your confidential information stays confidential.",
      },
    },
    // ===========================================================================
    // SECTION 4: Managing Permissions
    // ===========================================================================
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "Managing App Permissions",
        insights: [
          "Review microphone access: Only allow when you use voice features",
          "Camera permissions: Understand when Gemini can see what you see",
          "Location access: Decide if Gemini needs to know where you are",
          "Screen content: Check if screen awareness is enabled or disabled",
          "Regular review: Check permissions monthly in your phone settings",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Privacy Habits
    // ===========================================================================
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Building Privacy-Aware Mobile Habits",
        paragraphs: [
          "Using AI responsibly on mobile means developing good habits:",
          "",
          "**Think before you share**: Before asking Gemini to process something sensitive, consider if it needs cloud processing or can be handled on-device.",
          "",
          "**Use temporary chats for sensitive topics**: Gemini offers temporary chat modes that don't save conversation history.",
          "",
          "**Review your activity**: Regularly check what's in your Gemini history and delete anything you don't need saved.",
          "",
          "**Separate work and personal**: Consider using different Google accounts for work and personal AI use.",
          "",
          "**When in doubt, ask**: 'Gemini, is this request being processed on my device or in the cloud?'",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-16-inline-1.webp",
        imageAlt: "Privacy and security shield concept",
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
        task: "Open Gemini mobile app settings and review your privacy controls. Check Activity controls, conversation history settings, and app permissions.",
        feature: "Privacy Settings & On-Device AI",
        tip: "Look for the on-device indicator when making requests—it shows when your data stays local.",
      },
    },
    // ===========================================================================
    // SECTION 7: Quick Prompt
    // ===========================================================================
    {
      id: "section-7",
      type: "quickPrompt",
      content: {
        heading: "Try It Now: Check Your Privacy Settings",
        description:
          "Take a moment to review your Gemini app permissions. Go to Settings > Privacy and review what data is being saved and what permissions are granted.",
        promptText:
          "In Gemini settings, check: Activity controls, Saved conversations, and App permissions. Adjust based on your comfort level.",
      },
    },
    // ===========================================================================
    // SECTION 8: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Audit Your Mobile Privacy Settings",
        purpose:
          "Take control of your privacy by reviewing and adjusting your Gemini mobile app settings.",
        instructions: [
          "Open the Gemini app and go to Settings > Privacy",
          "Review Activity controls - what is being saved?",
          "Check Saved conversations - delete any you don't need",
          "Go to your phone's Settings > Gemini and review App permissions (camera, microphone, location)",
          "Adjust at least ONE setting to better match your comfort level",
        ],
        deliverable: "Privacy settings reviewed and at least one adjustment made",
        estimatedTime: "5-8 minutes",
        starterPrompt:
          "In Gemini settings, check: Activity controls, Saved conversations, and App permissions. Adjust based on your comfort level.",
        successCriteria: [
          "You have reviewed Activity controls",
          "You have checked Saved conversations",
          "You have reviewed App permissions (camera, microphone, location)",
          "You have made at least one adjustment",
          "You understand the difference between on-device and cloud processing",
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
        title: "You're Privacy-Aware",
        description:
          "You now understand how Gemini handles your data, what on-device AI can do, and how to manage your privacy settings. This knowledge helps you use AI confidently while keeping sensitive information protected.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
