/**
 * Lesson 7.2: What Makes Gemini Different (And Why It Fits Your Life)
 *
 * CHAPTER: 1 - Getting Started — Your AI Partner at Work
 * LESSON: 2 of 5 - Understanding Gemini's Unique Value
 *
 * DURATION: 15 minutes (overview)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Explain Gemini's unique advantages and why it's ideal for Google users
 *
 * KEY RESPONSIBILITIES:
 * - Highlight Gemini's Google ecosystem integration
 * - Explain real-time information access as key differentiator
 * - Introduce multimodal capabilities (text, voice, images)
 * - Set expectations for different Gemini tiers
 */

import type { Lesson } from "@/types/content";

export const lesson_7_2: Lesson = {
  id: "lesson-7-2",
  chapterId: "ch7-1-essentials",
  moduleId: "07-tools-gemini",
  title: "What Makes Gemini Different (And Why It Fits Your Life)",
  description:
    "Discover Gemini's unique advantages and why it's the AI that fits your Google lifestyle",
  order: 2,
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
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-2-cover.webp",
        imageAlt: "Colorful abstract technology representing Google colors",
        title: "What Makes Gemini Different",
        subtitle: "And why it fits your life perfectly",
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
          "Not all AI assistants are created equal. Gemini, built by Google, has unique advantages that make it particularly valuable for professionals who already live in the Google ecosystem—and for anyone who needs current, reliable information.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: The Google Ecosystem Advantage
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "The Google Ecosystem Advantage",
        paragraphs: [
          "If you use Gmail, Google Docs, Sheets, or Slides, Gemini is your natural AI partner. It's designed to work seamlessly with the tools you already use every day.",
          "",
          "**Built for Google Workspace**: Gemini can help you write emails in Gmail, create documents in Docs, analyze data in Sheets, and build presentations in Slides—all without leaving those applications.",
          "",
          "**One login**: Use your existing Google account. No new passwords to remember.",
          "",
          "**Synced across devices**: Start a conversation on your phone, continue on your computer.",
          "",
          "This isn't a separate tool you have to learn—it's an enhancement to tools you already know.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Real-Time Information - Key Differentiator
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "Gemini's Killer Feature: Real-Time Information",
        insights: [
          "Connects directly to Google Search for current information",
          "No knowledge cutoff—Gemini knows what happened today",
          "Provides sources so you can verify information",
          "Perfect for research, news, and time-sensitive topics",
          "Unlike other AIs, Gemini stays current automatically",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Visual Break - Real-Time Info
    // ===========================================================================
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "Current Information, When You Need It",
        paragraphs: [
          "Most AI assistants have a knowledge cutoff—they only know information up to a certain date. Gemini is different. By connecting to Google Search, Gemini can access current information about news, events, prices, and anything that's changed recently.",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-2-inline-1.webp",
        imageAlt: "Research and information search concept",
      },
    },
    // ===========================================================================
    // SECTION 5: Multimodal Capabilities
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "More Than Just Text",
        paragraphs: [
          "Gemini isn't limited to typed conversations. It's designed for how you actually work, with multiple ways to interact that go far beyond typing. Voice input lets you speak naturally instead of typing, which is perfect for mobile use when you're on the go or your hands are busy.",
          "",
          "Visual capabilities make Gemini even more powerful. You can show Gemini an image and ask questions about it, or upload PDFs, spreadsheets, and other files for instant analysis. On mobile, Gemini can see what's on your screen and help with whatever you're viewing. You can even point your camera at something and get information about it. These multimodal capabilities mean Gemini adapts to your workflow, not the other way around.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Mobile-First Design
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "AI That Travels With You",
        paragraphs: [
          "Gemini was designed with mobile in mind from the start. The mobile app lets you:",
          "- Use voice for hands-free interaction while commuting or walking",
          "- Get help with anything, anywhere, without opening a laptop",
          "- Use your camera for visual questions and document scanning",
          "- Sync conversations seamlessly between phone and computer",
          "",
          "For busy professionals who aren't always at a desk, this mobility is game-changing.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Gemini Tiers Explained
    // ===========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Understanding Gemini Tiers",
        paragraphs: [
          "Gemini offers different tiers designed to match different needs and use cases. The free tier provides powerful everyday AI assistance that includes real-time search capabilities, voice and image features, and the core Gemini experience. For most users getting started with AI, this free tier provides everything needed to become productive and experience the benefits of having an AI assistant.",
          "",
          "Gemini Advanced is the premium subscription tier that unlocks enhanced reasoning capabilities and access to Google's most powerful models. This tier is designed for users who regularly tackle complex problems requiring deeper analysis, more sophisticated reasoning, or advanced technical work. The enhanced models can handle more nuanced requests and provide more thorough responses for challenging tasks.",
          "",
          "For business users, the Google Workspace Add-on brings AI capabilities directly into the tools you use every day. Instead of working in a separate Gemini window, you get AI features built right into Gmail, Docs, Sheets, and Slides. This integration means you can draft emails with AI assistance, generate content in documents, analyze spreadsheets, and create presentations without ever leaving your familiar workspace environment.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Why Gemini Fits Your Life
    // ===========================================================================
    {
      id: "section-8",
      type: "highlightCard",
      content: {
        heading: "Why Gemini Fits Your Life",
        insights: [
          "Integrates with Google tools you already use daily",
          "Gives you current information, not outdated data",
          "Works on your phone as naturally as your computer",
          "Doesn't require learning an entirely new system",
          "Your Google account, your familiar apps—enhanced",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: Quick Prompt
    // ===========================================================================
    {
      id: "section-9",
      type: "quickPrompt",
      content: {
        heading: "Identify Your Google Tools",
        description:
          "Think about the Google tools you use most. This will help you see where Gemini can help immediately:",
        promptText:
          "The Google tools I use most are: Gmail / Docs / Sheets / Slides / Calendar / Drive / other: _______",
      },
    },
    // ===========================================================================
    // SECTION 10: Completion
    // ===========================================================================
    {
      id: "section-11",
      type: "completion",
      content: {
        title: "You Know What Makes Gemini Special",
        description:
          "You now understand Gemini's unique advantages: Google ecosystem integration, real-time information, multimodal capabilities, and mobile-first design. Ready to get your hands on it?",
        xpReward: 100,
        buttonText: "Continue to Setup",
      },
    },
  ],
};
