/**
 * Lesson 5.14: Web Browsing & Actions
 *
 * CHAPTER: 3 - Advanced Features
 * LESSON: 14 of 15 - Live Information Access
 *
 * DURATION: 14 minutes
 * XP REWARD: 115 XP
 */

import type { Lesson } from "@/types/content";

export const lesson_5_14: Lesson = {
  id: "lesson-5-14",
  chapterId: "ch5-3-advanced",
  moduleId: "05-tools-chatgpt",
  lessonCategory: "tutorial",
  title: "Web Browsing & Actions",
  description: "Access live information and perform tasks through ChatGPT",
  order: 14,
  estimatedMinutes: 14,
  xpReward: 115,
  format: "article",
  sections: [
    // ===========================================================================
    // HERO IMAGE SECTION
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-14-cover.webp",
        imageAlt: "Global web connectivity and digital network",
        title: "Web Browsing & Actions",
        subtitle: "Access live information and perform tasks through ChatGPT",
      },
    },
    // ===========================================================================
    // SECTION 1: Introduction
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Beyond Training Data: Live Information",
        paragraphs: [
          "ChatGPT's base knowledge comes from its training data—it knows the world up to its knowledge cutoff. But the world changes daily. New research, current events, updated documentation—all beyond its training.",
          "",
          "**Web Browsing** connects ChatGPT to the live internet. It can find, read, and synthesize current information from across the web.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: What Web Browsing Enables
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "What Web Browsing Enables",
        paragraphs: [
          'Web browsing opens up capabilities that were previously impossible with ChatGPT\'s training data alone. You can ask about current events with questions like "What were the top 3 news stories in healthcare this week?" and get real, up-to-date answers. You can conduct live research, asking ChatGPT to find recent studies on remote work productivity from the current year rather than relying on potentially outdated training knowledge.',
          "",
          "Price comparisons become reliable when ChatGPT can check current pricing for project management tools under $50 per month. Documentation lookups work for the latest versions—you can ask what changed in the newest release of any software tool. And multiple source synthesis becomes powerful when you ask ChatGPT to summarize five recent articles on AI in education, getting a synthesized view with citations rather than just a list of links you have to read yourself.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Highlight Card - Key Difference
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "Web Browsing vs. Regular Search",
        insights: [
          "Google gives you 10 blue links—you click, read, and synthesize yourself",
          "Web Browsing in ChatGPT does the clicking, reading, and synthesizing for you",
          "You get a summary with sources cited automatically",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: How ChatGPT Uses Web Browsing
    // ===========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "How ChatGPT Uses Web Browsing",
        paragraphs: [
          "When you ask a question requiring current information, ChatGPT automatically searches if needed. You'll see 'Searching web for...' then 'Found 5 relevant pages.'",
          "",
          "It reads those pages, extracts relevant information, and provides an answer with clickable source links. You can verify the information by clicking through.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Comparison Table - Web Browsing vs Regular ChatGPT
    // ===========================================================================
    {
      id: "section-5",
      type: "comparisonTable",
      content: {
        title: "When to Use Web Browsing",
        intro:
          "Understanding when to leverage web browsing helps you get accurate, current information.",
        columns: [{ name: "Regular ChatGPT" }, { name: "Web Browsing", recommended: true }],
        rows: [
          { feature: "Knowledge Cutoff", values: ["Training data only", "Live internet access"] },
          { feature: "Best For", values: ["Writing, brainstorming", "Current events, prices"] },
          { feature: "Source Citations", values: [false, true] },
          { feature: "Accuracy for News", values: ["May be outdated", "Current information"] },
          {
            feature: "Documentation Updates",
            values: ["May miss recent changes", "Always current"],
          },
        ],
        footer:
          "Use Web Browsing for anything that changes. Use regular ChatGPT for creative work and general knowledge.",
      },
    },
    // ===========================================================================
    // SECTION 6: Actions - Finding and Booking Services
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Actions: Finding and Booking Services",
        paragraphs: [
          "Actions extend ChatGPT from information source to task-completer. You can find services by asking it to locate highly-rated plumbers with emergency availability in your area, complete with reviews and contact information. You can compare options by asking it to research three different dental offices accepting new patients, comparing prices, hours, and patient reviews in a structured format.",
          "",
          "You can find appointment slots at specific businesses for your preferred day and time, getting their phone number and address for booking. You can schedule services by asking it to find providers near a location and compare pricing, availability, and customer ratings. You can even get contact information by asking it to research local contractors for a project type and extract phone numbers, email addresses, and operating hours directly from their websites. Each of these tasks would normally require multiple searches and manual information gathering—ChatGPT handles the synthesis automatically.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Highlight Card - Actions Revolution
    // ===========================================================================
    {
      id: "section-7",
      type: "highlightCard",
      content: {
        heading: "The Actions Revolution",
        insights: [
          "Actions transform ChatGPT from information source to task-completer",
          "Instead of finding flight options, ChatGPT can book them",
          "Instead of restaurant recommendations, it can make the reservation",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Visual Break - When to Use Web Browsing
    // ===========================================================================
    {
      id: "section-8",
      type: "textWithImage",
      content: {
        title: "When to Use Web Browsing",
        paragraphs: [
          "Use Web Browsing for: current events, recent research, live pricing, documentation updates, news summaries, fact-checking, comparison shopping.",
          "",
          "Skip Web Browsing for: general knowledge, writing tasks, brainstorming, creative work—these rely on ChatGPT's training knowledge, which is sufficient.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-14-inline-1.webp",
        imageAlt: "Web browsing and search interface",
      },
    },
    // ===========================================================================
    // SECTION 9: Highlight Card - Critical Evaluation
    // ===========================================================================
    {
      id: "section-9",
      type: "highlightCard",
      content: {
        heading: "Critical Evaluation Skill",
        insights: [
          "Web Browsing provides sources, but not all sources are equal",
          "Always check the quality of websites ChatGPT references",
          "Prefer reputable sources over obscure blogs",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: Quick Prompt
    // ===========================================================================
    {
      id: "section-10",
      type: "quickPrompt",
      content: {
        heading: "Try Web Browsing",
        description: "Ask ChatGPT to search for current news in your industry.",
        promptText:
          "Ask ChatGPT: 'What are the top 5 news stories today in [your industry or interest]?'",
      },
    },
    // ===========================================================================
    // SECTION 11: Tool Reference
    // ===========================================================================
    {
      id: "section-11",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "For this exercise",
        task: "Ask a question that requires current information and watch ChatGPT search the web automatically",
        feature: "Web Browsing",
        tip: "ChatGPT will automatically search when it detects you need current information",
      },
    },
    // ===========================================================================
    // SECTION 12: Actionable Task (Inline)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Live Research Session",
        purpose:
          "Web browsing enables research on current topics that ChatGPT's training doesn't cover. This skill keeps you informed without spending hours clicking through search results.",
        instructions: [
          "Identify a topic that needs current information (news, prices, recent changes in your field)",
          "Ask ChatGPT to search the web and summarize findings with source citations",
          "Click through to verify at least 2 of the cited sources",
          "Save the synthesized summary for your project or notes",
        ],
        deliverable: "A research summary with current information and verified source links",
        estimatedTime: "10 minutes",
        starterPrompt:
          "Search the web for current information on [topic]. I need: 1) The latest developments (within the last month), 2) Key statistics or data points, 3) Expert opinions or analysis. Please cite your sources so I can verify.",
        successCriteria: [
          "Used ChatGPT's web browsing for current information",
          "Received a summary with source citations",
          "Verified at least 2 sources by clicking through",
        ],
      },
    },
    // ===========================================================================
    // SECTION 13: Knowledge Check
    // ===========================================================================
    {
      id: "section-quiz",
      type: "checkpoint",
      content: {
        question:
          "What is the main advantage of ChatGPT's Web Browsing over a regular search engine?",
        options: [
          "It searches faster",
          "It synthesizes information from multiple sources and cites them",
          "It costs less",
          "It shows more results",
        ],
        correctAnswer: 1,
        hint: "Think about what you normally do after getting search results.",
      },
    },
    // ===========================================================================
    // SECTION 14: Completion
    // ===========================================================================
    {
      id: "section-14",
      type: "completion",
      content: {
        title: "Live Information Mastery",
        description:
          "You can now access the entire live internet through ChatGPT. Current events, recent research, real-time pricing—all accessible through conversation.",
        xpReward: 115,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
