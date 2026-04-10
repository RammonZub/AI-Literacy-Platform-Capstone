/**
 * Lesson 7.18: The Real-Time Advantage and Smart Research
 *
 * CHAPTER: 5 - Real-Time Intelligence
 * LESSON: 1 of 3 - Understanding Gemini's Real-Time Capabilities
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Introduce Gemini's real-time Google Search integration and teach
 * effective research strategies that leverage current information.
 *
 * KEY RESPONSIBILITIES:
 * - Explain how Gemini connects to live Google Search
 * - Demonstrate the difference between training data and real-time info
 * - Teach smart research prompt strategies
 * - Show fact-checking with linked sources
 *
 * TARGET AUDIENCE: 40-55+ non-technical professionals
 */

import type { Lesson } from "@/types/content";

export const lesson_7_18: Lesson = {
  id: "lesson-7-18",
  chapterId: "ch7-5-realtime",
  moduleId: "07-tools-gemini",
  title: "The Real-Time Advantage and Smart Research",
  description:
    "Discover how Gemini's Google Search integration gives you access to current information for smarter decisions",
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
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-18-cover.webp",
        imageAlt: "Research and information gathering with digital tools",
        title: "The Real-Time Advantage",
        subtitle: "Access current information with Gemini's live search integration",
      },
    },
    // ===========================================================================
    // SECTION 1: Why Real-Time Matters
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why Real-Time Information Changes Everything",
        paragraphs: [
          "Most AI assistants are stuck in the past. They only know what was in their training data, which could be months or even years old.",
          "",
          "Gemini is different. It can connect to Google Search in real-time, giving you access to current news, prices, events, and developments.",
          "",
          "This matters for your work because decisions based on outdated information are often wrong decisions. Whether you're researching competitors, checking market trends, or verifying facts, having current data makes all the difference.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: How Gemini's Search Integration Works
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "How Gemini Connects to Live Information",
        paragraphs: [
          "Gemini has a unique advantage: direct access to Google's search infrastructure. This integration works seamlessly in the background. When you ask a question that benefits from current information, Gemini automatically detects this need and searches Google in real-time. You don't need to specify that you want fresh results; the system recognizes when live data would improve your answer.",
          "",
          "Source transparency sets Gemini apart from many AI tools. When it retrieves information from the web, it shows you where that information came from through linked sources. This allows you to verify claims, explore original sources in depth, and assess the credibility of the information you receive. You're never left wondering where a fact originated.",
          "",
          "Unlike other AI tools with fixed knowledge cutoffs, Gemini isn't limited to training data dates. You can ask about events that happened yesterday, stock prices from this morning, or news that broke an hour ago. This real-time verification capability means you can check facts against current sources rather than relying on potentially outdated databases. Additionally, you gain access to multiple perspectives, seeing how different sources report the same information, which helps you form a more complete understanding of complex topics.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Training Data vs. Real-Time Comparison
    // ===========================================================================
    {
      id: "section-3",
      type: "comparisonTable",
      content: {
        title: "Training Data vs. Real-Time Search",
        intro:
          "Understanding when Gemini uses each type of information helps you get better results.",
        columns: [
          { name: "Training Data", description: "Built-in knowledge" },
          { name: "Real-Time Search", description: "Live information", recommended: true },
        ],
        rows: [
          {
            feature: "What it contains",
            values: ["General knowledge, concepts, reasoning", "Current facts, news, prices"],
          },
          { feature: "When updated", values: ["During model development", "Live, as you ask"] },
          {
            feature: "Best for",
            values: ["Explanations, how-to guides", "Latest news, market data"],
          },
          { feature: "Source visibility", values: ["Built into model", "Linked sources shown"] },
          { feature: "Accuracy for current events", values: ["May be outdated", "Up-to-date"] },
        ],
        footer: "Gemini automatically chooses the best source based on your question type.",
      },
    },
    // ===========================================================================
    // SECTION 4: Key Insight
    // ===========================================================================
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "Understanding the Difference",
        insights: [
          "Training data = what Gemini learned during development (general knowledge, concepts, how to reason)",
          "Real-time search = current facts, today's news, live prices, recent developments",
          "Gemini automatically chooses which to use based on your question",
          "When accuracy depends on current information, Gemini searches live",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Smart Research Strategies
    // ===========================================================================
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Five Strategies for Smart Research with Gemini",
        paragraphs: [
          "Research isn't just about asking questions—it's about asking the right questions in the right way. Here are five strategies that transform Gemini into your personal research assistant.",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-18-inline-1.webp",
        imageAlt: "Strategic thinking and research planning",
      },
    },
    // ===========================================================================
    // SECTION 6: Research Strategy Details
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Research Strategies That Work",
        paragraphs: [
          "Effective research with Gemini follows proven patterns that consistently produce better results. Start broad, then narrow your focus. Begin with general questions to establish context, then ask follow-up questions that drill into specifics. This layered approach helps Gemini understand the full picture before diving into details.",
          "",
          "Always request sources when accuracy matters. Asking 'What are your sources for this?' reveals where information originated and allows you to assess credibility. For important topics, compare perspectives by asking 'What do different sources say about this?' This surfaces varying viewpoints and helps you avoid echo chambers where only one narrative appears.",
          "",
          "Verification is essential for critical decisions. Prompt Gemini with 'Can you double-check this against current sources?' when you need confidence in important claims. This triggers a fresh search and often surfaces updated or contradictory information you should know about. Finally, don't underestimate the power of good summaries. Asking 'Summarize the latest developments in X' gives you quick overviews that help you decide whether to dive deeper. These strategies transform Gemini from a simple question-answering tool into a sophisticated research assistant.",
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
        title: "Real-World Example: Researching a Potential Vendor",
        paragraphs: [
          "Let's say you're considering a new software vendor. Instead of spending hours searching manually, try this approach with Gemini:",
          "",
          '**Step 1**: "What are the latest reviews for [Company Name] software in 2024?"',
          "",
          '**Step 2**: "What are common complaints or issues users report?"',
          "",
          '**Step 3**: "How does their pricing compare to competitors?"',
          "",
          '**Step 4**: "Have there been any recent security incidents or data breaches?"',
          "",
          "Each question builds on the previous one, giving you a comprehensive picture in minutes rather than hours.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Fact-Checking with Sources
    // ===========================================================================
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Fact-Checking Made Simple",
        paragraphs: [
          "Real-time information is powerful, but verification remains essential for responsible use. Gemini makes fact-checking straightforward when you know the right approaches. Start by asking for sources directly. A simple 'What sources back up this information?' prompts Gemini to show its work and reveal where claims originated.",
          "",
          "Cross-referencing adds another layer of confidence. Ask 'Can you find other sources that confirm this?' to see if multiple independent sources agree. When information freshness matters, check dates explicitly by asking 'When was this information last updated?' This is particularly important for rapidly evolving situations where yesterday's news may already be outdated.",
          "",
          "For maximum credibility, look for primary sources. Asking 'What's the original source of this data?' helps you trace claims back to their origin rather than relying on secondary interpretations. Finally, cultivate healthy skepticism of single sources. When claims matter, ask for multiple perspectives to ensure you're not getting a one-sided view. These verification habits take only moments but dramatically improve the reliability of information you act upon.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: Tool Reference
    // ===========================================================================
    {
      id: "section-9",
      type: "toolReference",
      content: {
        tool: "gemini",
        action: "For this lesson's exercises",
        task: "Open Gemini and practice real-time research using the prompts below",
        feature: "Google Search Integration",
        tip: "Gemini automatically searches when your question needs current information",
      },
    },
    // ===========================================================================
    // SECTION 10: Quick Prompt
    // ===========================================================================
    {
      id: "section-10",
      type: "quickPrompt",
      content: {
        heading: "Try It Now: Research a Topic",
        description:
          "Open Gemini and practice real-time research on a topic relevant to your work.",
        promptText:
          "What are the latest developments in [your industry] this month? Include sources and a summary of key trends.",
      },
    },
    // ===========================================================================
    // SECTION 11: Key Takeaways
    // ===========================================================================
    {
      id: "section-11",
      type: "highlightCard",
      content: {
        heading: "Key Takeaways",
        insights: [
          "Gemini connects to Google Search for real-time information",
          "Always ask for sources when accuracy matters",
          "Start broad, then narrow down with follow-up questions",
          "Verify important facts across multiple sources",
          "Use structured research approaches for comprehensive results",
        ],
      },
    },
    // ===========================================================================
    // SECTION 12: Actionable Task (inline at end)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Conduct Real-Time Research with Source Verification",
        purpose:
          "Practice Gemini's real-time research capabilities by investigating a topic relevant to your work and verifying the sources.",
        instructions: [
          "Think of a topic in your industry where current information matters (competitor, market trend, new technology)",
          "Ask Gemini for the latest developments with sources: 'What are the latest developments in [topic] this month? Include your sources.'",
          "Ask at least 2 follow-up questions to dive deeper",
          "Request source verification: 'Can you verify this with another source?'",
          "Summarize what you learned and note how you might use this information",
        ],
        deliverable:
          "One complete research session with at least 3 exchanges, sources cited, and actionable insights",
        estimatedTime: "10-12 minutes",
        starterPrompt:
          "What are the latest developments in [your industry] this month? Include sources and a summary of key trends.",
        successCriteria: [
          "You asked about a topic where current information matters",
          "You received information with linked sources",
          "You asked at least 2 follow-up questions",
          "You verified at least one fact with an additional source",
          "You can articulate how this research could inform a decision",
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
        title: "Real-Time Research Mastered",
        description:
          "You've learned how Gemini's real-time search integration gives you access to current information. In the next lesson, you'll discover how to use this for news, trends, and industry intelligence.",
        xpReward: 100,
        buttonText: "Continue to Industry Intelligence",
      },
    },
  ],
};
