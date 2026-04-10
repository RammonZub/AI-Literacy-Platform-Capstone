/**
 * Lesson 7.19: News, Trends, and Industry Intelligence
 *
 * CHAPTER: 5 - Real-Time Intelligence
 * LESSON: 2 of 3 - Monitoring Your Industry in Real-Time
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach professionals how to use Gemini for monitoring news,
 * tracking industry trends, competitor analysis, and building curated
 * intelligence briefings.
 *
 * KEY RESPONSIBILITIES:
 * - Show how to create personalized daily briefings
 * - Demonstrate industry and competitor monitoring
 * - Teach trend analysis for business decisions
 * - Introduce YouTube video summarization
 *
 * TARGET AUDIENCE: 40-55+ non-technical professionals
 */

import type { Lesson } from "@/types/content";

export const lesson_7_19: Lesson = {
  id: "lesson-7-19",
  chapterId: "ch7-5-realtime",
  moduleId: "07-tools-gemini",
  title: "News, Trends, and Industry Intelligence",
  description: "Build your personal intelligence system for tracking news, trends, and competitors",
  order: 2,
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
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-19-cover.webp",
        imageAlt: "News and media monitoring with digital dashboard",
        title: "News, Trends, and Industry Intelligence",
        subtitle: "Stay informed without the overwhelm using Gemini as your intelligence analyst",
      },
    },
    // ===========================================================================
    // SECTION 1: The Information Challenge
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Information Overload Challenge",
        paragraphs: [
          "Every day, thousands of articles, reports, and updates are published in your industry. Keeping up feels impossible.",
          "",
          "The problem isn't access to information—it's filtering what matters from what doesn't. You don't need more news; you need the right news, summarized and contextualized.",
          "",
          "Gemini can become your personal intelligence analyst, monitoring what matters to you and filtering out the noise.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Creating Your Daily Briefing
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Building Your Personal Daily Briefing",
        paragraphs: [
          "Instead of scrolling through multiple news sites and hoping you don't miss important developments, let Gemini create a customized briefing tailored to your specific needs. The key is providing clear parameters that define exactly what information matters to you. Start with topic focus by specifying the industries, companies, or subjects you care about most. The more specific you are, the more relevant your briefing becomes.",
          "",
          "Time frame is equally important. Ask for news from the last 24 hours for daily updates, the past week for a broader perspective, or the last month when catching up after time away. This ensures you get appropriately fresh information without being overwhelmed by outdated stories. Your format preference shapes how you consume the briefing. Request bullet points for quick scanning, summary paragraphs for more context, or detailed analysis when you need deeper understanding.",
          "",
          "Consider specifying source preferences if certain publications or source types carry more weight in your industry. You might request coverage from established news outlets, industry publications, or a mix of both. Finally, ask Gemini to highlight action items by identifying what requires your attention. This transforms a passive information feed into an actionable intelligence report that helps you prioritize your response to emerging developments.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Daily Briefing Prompt Example
    // ===========================================================================
    {
      id: "section-3",
      type: "textWithImage",
      content: {
        title: "Your Daily Briefing Prompt",
        paragraphs: [
          "Create a reusable prompt that delivers exactly what you need each morning. Here's a template you can customize for your role:",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-19-inline-1.webp",
        imageAlt: "Daily news briefing and information processing",
      },
    },
    // ===========================================================================
    // SECTION 4: Prompt Template
    // ===========================================================================
    {
      id: "section-4",
      type: "quickPrompt",
      content: {
        heading: "Customizable Daily Briefing Prompt",
        description:
          "Copy this prompt and customize the bracketed sections for your industry and interests.",
        promptText:
          "Create a morning briefing for me covering the latest news in [YOUR INDUSTRY]. Include:\n\n1. Top 3 stories from the last 24 hours with one-sentence summaries\n2. Any major moves by these competitors: [COMPETITOR NAMES]\n3. Regulatory or policy changes I should know about\n4. Emerging trends or opportunities in [SPECIFIC AREA]\n\nFormat as bullet points. Mark items that might require action with [ACTION].",
      },
    },
    // ===========================================================================
    // SECTION 5: Competitor Monitoring
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Competitor and Market Intelligence",
        paragraphs: [
          "Keeping track of competitors manually is time-consuming. Gemini can monitor competitors systematically:",
          "",
          '**Product launches**: "What new products has [Competitor] announced recently?"',
          "",
          '**Pricing changes**: "Has [Competitor] changed their pricing in the last quarter?"',
          "",
          '**Leadership changes**: "Who are the key executives at [Competitor] and have there been recent changes?"',
          "",
          '**Customer sentiment**: "What are customers saying about [Competitor] in recent reviews?"',
          "",
          '**Market positioning**: "How is [Competitor] positioning themselves against alternatives?"',
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Trend Analysis
    // ===========================================================================
    {
      id: "section-6",
      type: "highlightCard",
      content: {
        heading: "Spotting Trends Before They're Obvious",
        insights: [
          "Ask 'What emerging trends are experts discussing in [industry]?'",
          "Look for patterns: 'What topics are increasing in coverage this quarter?'",
          "Connect dots: 'How might [Trend A] affect [Your Business Area]?'",
          "Validate with sources: 'Which analysts or publications are discussing this?'",
          "Track over time: Save key trends and ask for updates weekly",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: YouTube Intelligence
    // ===========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "YouTube Video Intelligence",
        paragraphs: [
          "Industry experts, conference talks, and tutorials on YouTube contain valuable insights, but who has time to watch hour-long videos? Gemini transforms video content into accessible knowledge through several powerful capabilities. When you paste a YouTube link and ask for a summary of key points, Gemini analyzes the video's transcript and extracts the essential information in a fraction of the viewing time.",
          "",
          "You can dig deeper by asking 'What are the main takeaways from this video?' which prompts Gemini to identify and articulate the core messages. For targeted research, ask 'Does this video mention [specific topic]?' to quickly determine whether a long video contains information relevant to your specific question. This saves you from watching entire videos only to discover they don't address what you need.",
          "",
          "When researching complex topics, you can ask Gemini to compare perspectives by summarizing multiple videos on the same subject. This reveals where experts agree, where they differ, and what questions remain contested. However, it's important to note the limitations: Gemini may not always successfully access video content, and the quality depends on the accuracy of YouTube's automatic transcription. Videos without captions or with poor audio quality may produce less reliable summaries. Despite these limitations, YouTube intelligence remains a powerful tool for extracting knowledge from the vast library of professional video content available online.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Building Curated Reading Lists
    // ===========================================================================
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Creating Curated Reading Lists",
        paragraphs: [
          "Instead of bookmarking endless articles, use Gemini to create focused reading lists:",
          "",
          '**Weekly deep dives**: "Create a reading list of the 5 most important articles about [topic] this week, with brief summaries."',
          "",
          '**Learning paths**: "I want to understand [new topic]. Create a progressive reading list starting with basics."',
          "",
          '**Perspective rounds**: "Find articles representing different viewpoints on [controversial topic]."',
          "",
          '**Source diversity**: "Find coverage of [story] from at least 3 different types of sources (news, industry, analyst)."',
          "",
          "Save these prompts and reuse them weekly to maintain your knowledge edge.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: Intelligence Best Practices
    // ===========================================================================
    {
      id: "section-9",
      type: "highlightCard",
      content: {
        heading: "Intelligence Best Practices",
        insights: [
          "Set a regular time for briefings (morning works well)",
          "Save your favorite prompts for reuse",
          "Verify critical information before acting",
          "Diversify your sources to avoid echo chambers",
          "Adjust your briefings as your focus changes",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: Tool Reference
    // ===========================================================================
    {
      id: "section-10",
      type: "toolReference",
      content: {
        tool: "gemini",
        action: "For daily intelligence gathering",
        task: "Use Gemini to create your personalized daily briefing and competitor monitoring system",
        feature: "Real-Time Search",
        tip: "Save your favorite briefing prompts in a note for easy daily reuse",
      },
    },
    // ===========================================================================
    // SECTION 11: Actionable Task (inline at end)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Build Your Personal Daily Briefing Prompt",
        purpose:
          "Create a reusable daily briefing prompt customized to your industry and interests that you can use every morning.",
        instructions: [
          "List your top 3 industry topics or areas of focus",
          "List 2-3 competitors or companies you want to track",
          "Identify 1-2 types of regulatory or trend information important to you",
          "Using the template from this lesson, customize your personal daily briefing prompt",
          "Test your prompt with Gemini and refine based on the results",
        ],
        deliverable:
          "One saved, tested daily briefing prompt customized for your professional needs",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "Create a morning briefing for me covering the latest news in [YOUR INDUSTRY]. Include:\n\n1. Top 3 stories from the last 24 hours with one-sentence summaries\n2. Any major moves by these competitors: [COMPETITOR NAMES]\n3. Regulatory or policy changes I should know about\n4. Emerging trends or opportunities in [SPECIFIC AREA]\n\nFormat as bullet points. Mark items that might require action with [ACTION].",
        successCriteria: [
          "Your prompt includes at least 3 industry topics",
          "Your prompt includes competitor tracking",
          "Your prompt specifies format and timeframe",
          "You have tested the prompt and refined it",
          "The prompt is saved for future daily use",
        ],
      },
    },
    // ===========================================================================
    // SECTION 12: Completion
    // ===========================================================================
    {
      id: "section-12",
      type: "completion",
      content: {
        title: "Industry Intelligence System Built",
        description:
          "You now have the tools to build a personal intelligence system using Gemini. Next, you'll learn how to use Gemini for maps, travel planning, and location-based intelligence.",
        xpReward: 100,
        buttonText: "Continue to Location Intelligence",
      },
    },
  ],
};
