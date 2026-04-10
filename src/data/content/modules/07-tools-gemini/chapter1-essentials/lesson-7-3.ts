/**
 * Lesson 7.3: Your First Five Minutes with Gemini
 *
 * CHAPTER: 1 - Getting Started — Your AI Partner at Work
 * LESSON: 3 of 5 - Hands-On Setup and First Interaction
 *
 * DURATION: 15 minutes (practical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Get learners using Gemini immediately with hands-on guidance
 *
 * KEY RESPONSIBILITIES:
 * - Walk through desktop and mobile setup
 * - Tour the interface and key features
 * - Guide first successful interactions
 * - Establish troubleshooting basics
 */

import type { Lesson } from "@/types/content";

export const lesson_7_3: Lesson = {
  id: "lesson-7-3",
  chapterId: "ch7-1-essentials",
  moduleId: "07-tools-gemini",
  title: "Your First Five Minutes with Gemini",
  description: "Get Gemini running and have your first successful AI conversations",
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
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-3-cover.webp",
        imageAlt: "Mobile phone and computer setup",
        title: "Your First Five Minutes with Gemini",
        subtitle: "From setup to first conversation in minutes",
      },
    },
    // ===========================================================================
    // SECTION 1: Introduction
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        paragraphs: [
          "Theory is good. Practice is better. Let's get you set up with Gemini and having real conversations in the next five minutes.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Tool Reference - Gemini
    // ===========================================================================
    {
      id: "section-2",
      type: "toolReference",
      content: {
        tool: "gemini",
        action: "For this lesson",
        task: "Open Gemini in your browser or download the mobile app to get started",
        feature: "Free tier available",
        tip: "Bookmark gemini.google.com for quick access",
      },
    },
    // ===========================================================================
    // SECTION 3: Desktop Setup
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Desktop Setup (gemini.google.com)",
        paragraphs: [
          "Getting started on your computer takes about 60 seconds. Open your preferred web browser and navigate to gemini.google.com. You'll be prompted to sign in with your Google account, which is typically your Gmail address and password.",
          "",
          "After signing in, you'll need to accept the terms of service and review the privacy information. This is standard practice for AI tools and ensures you understand how your interactions are handled. Once you've accepted these terms, you're immediately dropped into the Gemini interface, ready to start your first conversation. No downloads, no installation, no complicated configuration required.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Mobile App Setup
    // ===========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Mobile App Setup (iOS/Android)",
        paragraphs: [
          "For AI assistance on the go, the Gemini mobile app brings the same capabilities to your smartphone. On iPhone, open the App Store, search for 'Google Gemini', and tap install. On Android devices, open the Play Store and follow the same process. The app is free and downloads in seconds.",
          "",
          "Once installed, open the app and sign in with the same Google account you use on desktop. The app will request permission to access your microphone for voice input and your camera for visual features. Granting these permissions unlocks the full range of Gemini's mobile capabilities, including voice conversations and the ability to analyze images through your camera. These permissions can be adjusted later in your phone's settings if you prefer to limit access.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Interface Tour
    // ===========================================================================
    {
      id: "section-5",
      type: "highlightCard",
      content: {
        heading: "Interface Tour: What You'll See",
        insights: [
          "Chat box at bottom: Type your message here",
          "History panel: Past conversations saved automatically",
          "Settings: Manage your preferences and data",
          "Mode selector: Switch between Fast, Thinking, and Pro",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Visual Break
    // ===========================================================================
    {
      id: "section-6",
      type: "textWithImage",
      content: {
        title: "A Familiar, Friendly Interface",
        paragraphs: [
          "Gemini's interface is designed to feel familiar. If you've ever sent a text message or used a chat app, you already know how to use the basic interface. Type your message, press send, get a response. It's that simple.",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-3-inline-1.webp",
        imageAlt: "Clean modern workspace with computer",
      },
    },
    // ===========================================================================
    // SECTION 7: Your First Conversation
    // ===========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Your First Three Conversations",
        paragraphs: [
          "Try these three prompts to experience different types of AI help:",
          "",
          "**1. A Question** (testing knowledge and real-time info):",
          '"What are the latest developments in [your industry]?"',
          "",
          "**2. A Task** (testing productivity help):",
          '"Help me draft a brief email to my team about an upcoming deadline."',
          "",
          "**3. A Creative Request** (testing idea generation):",
          '"Give me 5 creative ideas for a team-building activity that works for remote employees."',
          "",
          "Notice how Gemini responds, how you can follow up, and how natural the conversation feels.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: The Conversation Model
    // ===========================================================================
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Understanding Conversational AI",
        paragraphs: [
          "Gemini remembers your conversation context, which makes working with it feel surprisingly natural. Follow-up questions work seamlessly—you can ask something, then say 'Tell me more' or 'Give me an example' and Gemini builds on what it just said.",
          "",
          "You don't need to repeat yourself because Gemini remembers what you discussed earlier in the conversation. This means you can chat like you would with a helpful colleague, building on ideas and exploring topics in depth. When you're ready to switch topics entirely, just start a new chat for a clean slate.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: Voice Input
    // ===========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Try Voice Input",
        paragraphs: [
          "On mobile, tap the microphone icon and speak naturally:",
          '- "What\'s on my calendar today?" (integrates with Google Calendar)',
          '- "Remind me to call the client when I get to the office"',
          '- "Summarize this article for me" (and share or show the screen)',
          "",
          "Voice is perfect for hands-free moments—commuting, walking, cooking. You'll be surprised how natural it feels.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: Simple Troubleshooting
    // ===========================================================================
    {
      id: "section-10",
      type: "highlightCard",
      content: {
        heading: "When Something Doesn't Work",
        insights: [
          "Refresh the page: Solves most temporary glitches",
          "Rephrase your prompt: Different wording often helps",
          "Start a new chat: Clears any confused context",
          "Check your connection: AI needs internet to work",
          "Try again later: Occasional high-traffic slowdowns happen",
        ],
      },
    },
    // ===========================================================================
    // SECTION 11: Quick Prompt
    // ===========================================================================
    {
      id: "section-11",
      type: "quickPrompt",
      content: {
        heading: "Your First Real Prompt",
        description:
          "Right now, open Gemini and try your first meaningful prompt. Choose one of these or create your own:",
        promptText:
          "I'm a [your job title]. What are three ways you could help me save time at work this week?",
      },
    },
    // ===========================================================================
    // SECTION 12: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Complete Your First Gemini Conversation",
        purpose:
          "This hands-on exercise ensures you have Gemini working and can successfully complete a multi-step conversation with follow-up questions.",
        instructions: [
          "Open Gemini at gemini.google.com or launch the mobile app",
          "Start with this prompt: 'I'm a [your job title]. What are three ways you could help me save time at work this week?'",
          "Choose ONE suggestion from Gemini's response and ask a follow-up question to learn more",
          "Try one more follow-up to refine or expand on the information",
          "Save this conversation (it will be in your history) for future reference",
        ],
        deliverable:
          "A completed Gemini conversation with at least 3 exchanges (your initial prompt + 2 follow-ups)",
        estimatedTime: "7-10 minutes",
        starterPrompt:
          "I'm a [your job title]. What are three ways you could help me save time at work this week?",
        successCriteria: [
          "Gemini is working on your device (desktop or mobile)",
          "You have completed at least 3 back-and-forth exchanges",
          "You received at least one actionable suggestion relevant to your work",
          "Your conversation is saved in Gemini history",
        ],
      },
    },
    // ===========================================================================
    // SECTION 13: Completion
    // ===========================================================================
    {
      id: "section-13",
      type: "completion",
      content: {
        title: "You're Using Gemini!",
        description:
          "Congratulations! You've set up Gemini and had your first conversations. You now have an AI assistant ready to help. Next up: understanding Gemini's different modes for different tasks.",
        xpReward: 100,
        buttonText: "Complete Setup",
      },
    },
  ],
};
