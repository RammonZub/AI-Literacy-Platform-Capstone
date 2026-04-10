/**
 * Lesson 8.14: Web Search & Research Tools
 *
 * CHAPTER: 4 - Compound AI & Research
 * LESSON: 2 of 3 - Web Search & Research Tools
 *
 * DURATION: 15 minutes (intermediate practical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Master real-time research with Compound AI's web capabilities
 *
 * KEY RESPONSIBILITIES:
 * - Teach current information retrieval patterns
 * - Show competitive intelligence gathering
 * - Demonstrate fact-checking workflows
 * - Cover trend analysis and website-specific queries
 */

import type { Lesson } from "@/types/content";

export const lesson_8_14: Lesson = {
  id: "lesson-8-14",
  chapterId: "ch8-4-compound",
  moduleId: "09-workflow-automation",
  title: "Web Search & Research Tools",
  description: "Master real-time research with Compound AI's web capabilities",
  order: 14,
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
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-14-cover.webp",
        imageAlt: "Magnifying glass over digital interface representing research",
        title: "Web Search & Research Tools",
        subtitle: "Get synthesized answers from multiple sources in seconds instead of hours",
      },
    },
    // ===========================================================================
    // SECTION 1: Current Information Retrieval
    // ===========================================================================
    {
      id: "section-1",
      type: "textWithBullets",
      content: {
        title: "Current Information Retrieval",
        paragraphs: [
          "Use compound models when you need information that changes frequently or happened recently:",
        ],
        bullets: [
          '"What\'s the latest news on [topic]?" - Get current headlines with summaries',
          '"What happened with [company/event] today?" - Real-time updates on developing stories',
          '"What is the current stock price of [company]?" - Live market data',
          '"What\'s the weather forecast for [city] this week?" - Current weather predictions',
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Competitive Intelligence
    // ===========================================================================
    {
      id: "section-2",
      type: "textWithBullets",
      content: {
        title: "Competitive Intelligence",
        paragraphs: ["Stay informed about your industry and competitors in seconds:"],
        bullets: [
          '"What is [competitor] doing in [market]?" - Track competitor moves',
          '"Compare [company A] vs [company B] offerings" - Side-by-side analysis',
          '"What are the latest product launches in [industry]?" - Industry monitoring',
          '"What are people saying about [company/product]?" - Sentiment analysis',
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Fact-Checking at Speed
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "Fact-Checking at Speed",
        insights: [
          "Ask compound-beta to verify claims with sources",
          "Request multiple source citations for verification",
          "Cross-reference information across different sites",
          "Get confidence levels on uncertain claims",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Trend Analysis
    // ===========================================================================
    {
      id: "section-4",
      type: "textWithBullets",
      content: {
        title: "Trend Analysis",
        paragraphs: ["Understand what's happening in your field right now:"],
        bullets: [
          '"What\'s trending in [field] right now?" - Current hot topics',
          '"What are the emerging technologies in [industry]?" - Future-focused insights',
          '"What\'s the market sentiment on [topic]?" - Gauge public opinion',
          '"What are experts predicting about [topic]?" - Forward-looking analysis',
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Website-Specific Queries
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Website-Specific Queries",
        paragraphs: [
          "For deep dives into authoritative sources, guide the model to specific websites:",
          "",
          '"What does [specific website] say about [topic]?" - This prompts the model to visit and extract information from that particular site.',
          "",
          "**Pro tip:** Combine breadth and depth by starting with a broad web search, then following up with website-specific queries for the most relevant sources you find.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Practice Competitive Research
    // ===========================================================================
    {
      id: "section-6",
      type: "quickPrompt",
      content: {
        heading: "Practice: Competitive Research",
        description: "Try this competitive intelligence query with compound-beta:",
        promptText:
          "Research [competitor or company name] and provide:\n1. Their latest 3 major announcements\n2. What analysts are saying about them\n3. How they compare to their main competitor\nInclude sources for each point.",
      },
    },
    // ===========================================================================
    // SECTION 7: Best Practices for Research Queries
    // ===========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Best Practices for Research Queries",
        paragraphs: [
          '**Be specific about what you want:** "Find the latest news" gives generic results. "Find the latest news about AI regulation in the EU, focusing on the AI Act implementation" gives targeted insights.',
          "",
          '**Request sources:** Always ask for sources so you can verify important claims. "Verify this claim and provide sources: [statement]"',
          "",
          "**Ask for synthesis:** Instead of just finding information, ask the model to compare, contrast, and summarize multiple sources.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Tool Reference
    // ===========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Use ChatGPT Console",
        task: "Conduct real-time web research",
        feature: "Compound AI with web search and site visits",
        tip: "Always request sources for verification and ask for synthesis to get the most value from research",
      },
    },
    // ===========================================================================
    // SECTION 9: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Conduct Competitive Research",
        purpose:
          "Use Compound AI to gather competitive intelligence on a company or product in your industry.",
        instructions: [
          "Identify a competitor or company you want to research",
          "Use compound-beta with the starter prompt structure",
          "Review the multiple sources cited in the response",
          "Extract 3 actionable insights from the research",
          "Save this prompt as a template for future competitive research",
        ],
        deliverable: "A competitive research brief with sources and actionable insights",
        estimatedTime: "7-10 minutes",
        starterPrompt:
          "Research [COMPANY NAME] and provide: 1) Their latest 3 major announcements, 2) What analysts are saying about them, 3) How they compare to their main competitor. Include sources for each point.",
        successCriteria: [
          "Received information not available in training data",
          "Multiple sources were cited in the response",
          "Extracted at least 3 relevant insights",
          "Prompt structure is saved for future research",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: Completion
    // ===========================================================================
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Research Tools Mastered",
        description:
          "You can now retrieve current information, gather competitive intelligence, fact-check claims at speed, analyze trends, and conduct website-specific queries. These skills transform hours of manual research into seconds of AI-assisted work. Next, we'll apply these tools to practical professional scenarios.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
