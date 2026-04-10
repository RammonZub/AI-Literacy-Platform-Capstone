/**
 * Lesson 8.15: Compound Use Cases
 *
 * CHAPTER: 4 - Compound AI & Research
 * LESSON: 3 of 3 - Compound Use Cases
 *
 * DURATION: 15 minutes (intermediate practical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Apply Compound AI to practical professional scenarios
 *
 * KEY RESPONSIBILITIES:
 * - Demonstrate the Morning Briefing workflow
 * - Show pre-meeting preparation patterns
 * - Teach content verification techniques
 * - Cover decision support and travel research
 */

import type { Lesson } from "@/types/content";

export const lesson_8_15: Lesson = {
  id: "lesson-8-15",
  chapterId: "ch8-4-compound",
  moduleId: "09-workflow-automation",
  title: "Compound Use Cases",
  description: "Apply Compound AI to daily professional needs—from briefings to decisions",
  order: 15,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image
    // ===========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-15-cover.webp",
        imageAlt: "Professional workspace with planning and research tools",
        title: "Compound Use Cases",
        subtitle: "Your always-available research assistant for daily professional needs",
      },
    },
    // ===========================================================================
    // SECTION 1: The Morning Briefing
    // ===========================================================================
    {
      id: "section-1",
      type: "textWithBullets",
      content: {
        title: "The Morning Briefing",
        paragraphs: ["Start every day informed with a personalized briefing in under 30 seconds:"],
        bullets: [
          '"Give me today\'s top news in [industry] with 3 key takeaways"',
          '"What should I know about [topic] this morning?"',
          '"Summarize overnight developments in [market/field]"',
          '"What\'s the market outlook for today?"',
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Morning Briefing Template
    // ===========================================================================
    {
      id: "section-2",
      type: "quickPrompt",
      content: {
        heading: "Morning Briefing Template",
        description: "Create your personalized daily briefing with compound-beta:",
        promptText:
          "Give me a morning briefing for [date] covering:\n1. Top 3 news stories in [industry]\n2. Stock market overview (S&P 500, NASDAQ)\n3. Any major announcements from [competitors/companies I follow]\n4. One interesting trend or development to watch\nKeep each item to 2-3 sentences with sources.",
      },
    },
    // ===========================================================================
    // SECTION 3: Pre-Meeting Prep
    // ===========================================================================
    {
      id: "section-3",
      type: "textWithBullets",
      content: {
        title: "Pre-Meeting Prep",
        paragraphs: ["Never walk into a meeting unprepared again:"],
        bullets: [
          '"Research [person/company] and give me 5 talking points"',
          "\"What's [company]'s recent news and current challenges?\"",
          '"Summarize [person]\'s background and recent work"',
          '"What are the latest developments in [topic we\'ll discuss]?"',
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Pre-Meeting Research Template
    // ===========================================================================
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "Pre-Meeting Research Template",
        insights: [
          "Research the person: LinkedIn, recent articles, company bio",
          "Research the company: Latest news, financials, announcements",
          "Research the topic: Recent developments, expert opinions",
          "Prepare 3-5 thoughtful questions based on your research",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Content Verification
    // ===========================================================================
    {
      id: "section-5",
      type: "textWithBullets",
      content: {
        title: "Content Verification",
        paragraphs: ["Ensure accuracy before publishing or sharing:"],
        bullets: [
          '"Fact-check these claims and provide sources: [your claims]"',
          '"Verify the statistics in this article: [paste content]"',
          '"Is [news story] accurate? What do multiple sources say?"',
          '"What\'s the original source for [claim or statistic]?"',
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Decision Support
    // ===========================================================================
    {
      id: "section-6",
      type: "textWithBullets",
      content: {
        title: "Decision Support",
        paragraphs: ["Make data-informed decisions with current information:"],
        bullets: [
          '"What are the pros and cons of [option] based on current data?"',
          '"What are the latest reviews of [product/service]?"',
          '"What are others saying about [approach/solution]?"',
          '"Compare [option A] vs [option B] for [use case]"',
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Decision Support Template
    // ===========================================================================
    {
      id: "section-7",
      type: "quickPrompt",
      content: {
        heading: "Decision Support Template",
        description: "Get comprehensive decision support with compound-beta:",
        promptText:
          "Help me decide between [option A] and [option B] for [use case].\n\nFor each option, research and provide:\n1. Current reputation and reviews\n2. Recent updates or changes\n3. Key advantages and disadvantages\n4. Pricing/availability (if relevant)\n\nThen recommend which to choose and why, with sources.",
      },
    },
    // ===========================================================================
    // SECTION 8: Travel & Event Research
    // ===========================================================================
    {
      id: "section-8",
      type: "textWithBullets",
      content: {
        title: "Travel & Event Research",
        paragraphs: ["Real-time logistics information for planning:"],
        bullets: [
          '"What\'s the weather in [city] this week?"',
          '"Best restaurants near [venue/address]" - with recent reviews',
          '"Current events happening in [location] during [dates]"',
          '"What should I know about visiting [city] right now?"',
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: Building Your Compound Workflow
    // ===========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Building Your Compound Workflow",
        paragraphs: [
          "The most effective users build Compound AI into their daily routines:",
          "",
          "**Morning:** Run your briefing while coffee brews. Scan the output, note anything important.",
          "**Before meetings:** Spend 2 minutes researching attendees and topics.",
          "**Before publishing:** Fact-check key claims with compound-beta.",
          "**Before decisions:** Get current data rather than relying on outdated assumptions.",
          "",
          "The speed of ChatGPT's compound models means research becomes a reflex, not a chore.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: Tool Reference
    // ===========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Use ChatGPT Console",
        task: "Create personalized daily briefings and research workflows",
        feature: "Compound AI with real-time web access",
        tip: "Build briefing templates for morning, pre-meeting, and decision support to use daily",
      },
    },
    // ===========================================================================
    // SECTION 11: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create Your Morning Briefing",
        purpose: "Build a personalized morning briefing that you can run daily to start informed.",
        instructions: [
          "Customize the starter prompt with your industry and interests",
          "Run the prompt with compound-beta",
          "Review the output and refine the prompt if needed",
          "Save this prompt to run every morning",
          "Time how long it takes vs. your current news routine",
        ],
        deliverable: "A personalized morning briefing prompt ready for daily use",
        estimatedTime: "5-8 minutes",
        starterPrompt:
          "Give me a morning briefing for today covering: 1) Top 3 news stories in [YOUR INDUSTRY], 2) Any major announcements from [COMPETITORS I FOLLOW], 3) One trend or development to watch. Keep each item to 2-3 sentences with sources.",
        successCriteria: [
          "Created a customized briefing prompt",
          "Briefing covers topics relevant to your work",
          "Sources are included for verification",
          "Total execution time under 30 seconds",
        ],
      },
    },
    // ===========================================================================
    // SECTION 12: Completion
    // ===========================================================================
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Compound AI Mastery Complete",
        description:
          "You now have practical workflows for using Compound AI in your daily professional life. From morning briefings that take 30 seconds to meeting prep that makes you look brilliant, you can research faster and more thoroughly than ever before. Combined with ChatGPT's speed advantage, you have a research superpower at your fingertips.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
