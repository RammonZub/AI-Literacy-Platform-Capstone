/**
 * Lesson 5.21: Web Browsing & Research
 *
 * CHAPTER: 4 - Advanced Features Deep Dive
 * LESSON: 21 of 22 - Web Browsing & Research
 *
 * DURATION: 15 minutes (research capabilities)
 * XP REWARD: 130 XP
 *
 * PURPOSE: Teach users how to leverage ChatGPT's web browsing
 * for real-time information retrieval and research workflows.
 *
 * KEY RESPONSIBILITIES:
 * - Explain web browsing capabilities
 * - Cover source verification techniques
 * - Show research workflows
 * - Address critical evaluation of web-sourced information
 */

import type { Lesson } from "@/types/content";

export const lesson_5_21: Lesson = {
  id: "lesson-5-21",
  chapterId: "ch5-4-advanced",
  moduleId: "05-tools-chatgpt",
  title: "Web Browsing & Research",
  description: "Retrieve real-time information and conduct research",
  order: 21,
  estimatedMinutes: 15,
  xpReward: 130,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // HERO IMAGE - At the START
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-21-cover.webp",
        imageAlt: "Web search and research online",
        title: "Web Browsing & Research",
        subtitle: "Retrieve real-time information and conduct research",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "When to Use Web Browsing",
        paragraphs: [
          "ChatGPT's training has a knowledge cutoff - it doesn't know about recent events. Web browsing fills this gap:",
          "",
          "**Use web browsing for:**",
          "- Current news and events",
          "- Latest product releases and updates",
          "- Real-time prices, rates, and statistics",
          "- Recent research or publications",
          "- Anything that changed after the training cutoff",
          "",
          "**Use built-in knowledge for:**",
          "- Established concepts and principles",
          "- Historical information",
          "- General knowledge and explanations",
          "- Coding and writing assistance",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "How Web Browsing Works",
        paragraphs: [
          "When you ask a question requiring current information, ChatGPT follows a systematic process. First, it identifies that your question needs current information beyond its training data. Then it searches the web using Bing to find relevant sources. Next, it reads the relevant pages to gather information, extracting key points from each source.",
          "",
          'It synthesizes the findings into a coherent response that addresses your question directly. Finally, it cites sources so you can verify the information yourself. You\'ll see indicators like "Searching..." or "Browsing..." when this process is happening. The entire workflow happens in seconds—you ask a question, ChatGPT does the research work, and you get a synthesized answer with citations instead of a list of links you\'d have to read yourself.',
        ],
      },
    },
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "Triggering Web Search",
        insights: [
          "Ask about recent events: 'What happened with [topic] this week?'",
          "Request current data: 'What is the current [price/rate/statistic]?'",
          "Use explicit requests: 'Search the web for [topic]'",
          "ChatGPT automatically browses when it knows information may be outdated",
        ],
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Source Verification Best Practices",
        paragraphs: [
          "Always verify important information from AI through systematic fact-checking. Start by checking the sources ChatGPT provides: click through to the original article and verify the publication date to ensure the information is current. Don't just accept the summary—see the original context.",
          "",
          "Cross-reference with multiple sources whenever possible. Don't rely on a single citation, even if it seems authoritative. Look for consensus across sources—if multiple reputable sources agree, you can be more confident. Consider source credibility carefully: Is it a reputable publication? Is the author a recognized expert? Is there potential bias that might color the presentation? When in doubt, search directly using Google for sensitive information and verify before making important decisions based on what you found.",
        ],
      },
    },
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Effective Research Workflows",
        paragraphs: [
          "**The Comparative Research Workflow:**",
          "'Search for the latest information on [topic]. Summarize the key findings from at least 3 different sources and highlight any disagreements between them.'",
          "",
          "**The Deep Dive Workflow:**",
          "'Research [topic] thoroughly. I need to understand: (1) the current state, (2) recent developments, (3) expert opinions, and (4) future predictions. Cite your sources.'",
          "",
          "**The Fact-Check Workflow:**",
          "'I heard that [claim]. Search the web to verify if this is accurate and provide sources.'",
        ],
      },
    },
    // CONTEXTUAL IMAGE
    {
      id: "section-context-image",
      type: "textWithImage",
      content: {
        title: "From Search to Synthesis",
        paragraphs: [
          "The power of AI research is not just finding information, but synthesizing it into actionable insights you can use.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-21-inline-1.webp",
        imageAlt: "Research and information gathering",
      },
    },
    {
      id: "section-6",
      type: "highlightCard",
      content: {
        heading: "Critical Thinking Reminder",
        insights: [
          "AI can hallucinate even with web access",
          "Always verify claims before using them in important work",
          "Check dates - information can quickly become outdated",
          "Correlation in search results doesn't mean accuracy",
        ],
      },
    },
    {
      id: "section-quick-prompt",
      type: "quickPrompt",
      content: {
        heading: "Practice: Research a Current Topic",
        description:
          "Ask ChatGPT to research something current that you need to know about. Request sources and a summary of findings.",
        promptText:
          "Research the current state of [topic]. Please: 1) Search for the latest information, 2) Summarize key findings, 3) Cite your sources, 4) Note any conflicting information you find.",
      },
    },
    // TOOL REFERENCE
    {
      id: "section-tool-reference",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "For this exercise",
        task: "Open ChatGPT and ask about a current topic, requesting web search and source citations.",
        feature: "Web browsing and search",
        tip: "Ask ChatGPT to cite sources so you can verify the information independently.",
      },
    },
    // INLINE ACTIONABLE TASK - At the END
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Complete Research Project",
        purpose:
          "Conducting a full research workflow with web browsing demonstrates how AI accelerates information gathering while maintaining source verification discipline.",
        instructions: [
          "Identify a topic that needs current information (something changed recently in your field)",
          "Ask ChatGPT to research with web browsing, summarizing findings and citing sources",
          "Click through to verify at least 2 sources directly",
          "Compile a research summary with verified citations",
        ],
        deliverable: "A research summary document with verified source links and key findings",
        estimatedTime: "10 minutes",
        starterPrompt:
          "Search the web for current information on [topic]. I need to understand: 1) What's the current state as of [timeframe]? 2) What are the latest developments? 3) What do experts say? Please cite sources for each point so I can verify.",
        successCriteria: [
          "Used ChatGPT web browsing for current research",
          "Verified at least 2 sources by clicking through",
          "Compiled a summary with citations ready for use",
        ],
      },
    },
    {
      id: "section-8",
      type: "completion",
      content: {
        title: "Research Capabilities Unlocked",
        description:
          "You can now leverage ChatGPT for real-time research. Remember to always verify sources, cross-reference important claims, and think critically about the information you find.",
        xpReward: 130,
        buttonText: "Complete Research Skills",
      },
    },
  ],
};
