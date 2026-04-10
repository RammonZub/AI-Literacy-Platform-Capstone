/**
 * Day 9: Research Workflow Mastery
 *
 * TUTORIAL LESSON - Practical Application
 * Build a complete research workflow using multiple AI tools.
 *
 * Structure:
 * - Hero image
 * - Opening: Research is a process
 * - The 4-phase research workflow
 * - Phase 1: Discovery with Gemini
 * - Phase 2: Cross-reference verification
 * - Phase 3: Claude/ChatGPT for synthesis
 * - Phase 4: Storing and organizing
 * - Quiz
 * - Comparison table
 * - Key insights
 * - Actionable task (research sprint)
 * - NO gamification
 */

import type { Lesson } from "@/types/content";

export const lessonDay9: Lesson = {
  id: "day-9",
  chapterId: "chapter2-productivity-research",
  moduleId: "10-challenge-28-day-ai",
  title: "Research Workflow Mastery",
  description:
    "Build a complete research workflow using multiple AI tools. Discovery, verification, synthesis, and organization.",
  order: 9,
  format: "article",
  lessonCategory: "tutorial",
  estimatedMinutes: 12,

  imageSearchTerms: [
    "research workflow process",
    "information synthesis",
    "organized research notes",
  ],

  sections: [
    // === HERO SECTION ===
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-9-cover.webp",
        imageAlt: "Research Workflow Mastery",
        title: "Day 9: Research Workflow Mastery",
        subtitle:
          "Professional researchers don't just search—they follow a process. Today you'll build that process.",
      },
    },

    // === OPENING ===
    {
      id: "opening",
      type: "text",
      content: {
        paragraphs: [
          "Here's the mistake most people make with AI research: they treat it like a single query.",
          "",
          '"Tell me about [topic]" produces surface-level information. It\'s the research equivalent of reading a headline.',
          "",
          "**Real research is a process.** It has phases: discovery, verification, synthesis, and organization. Each phase benefits from different AI tools and different prompting strategies.",
          "",
          "Today, you'll build a complete research workflow—one you can use for competitive analysis, product research, learning new topics, or any deep-dive investigation.",
        ],
      },
    },

    // === VISUAL BREAK ===
    {
      id: "context-image",
      type: "textWithImage",
      content: {
        title: "Research Like a Pro",
        paragraphs: [
          "Professional researchers don't just search—they follow a systematic process that uncovers deeper insights and verifies facts across multiple sources.",
        ],
        image: {
          src: "/images/courses/modules/10-challenge-28-day-ai/day-9-inline-1.webp",
          alt: "Research workflow and synthesis",
          caption: "Good research is about process, not just tools",
        },
      },
    },

    // === THE 4-PHASE WORKFLOW ===
    {
      id: "workflow-overview",
      type: "text",
      content: {
        title: "The 4-Phase Research Workflow",
        paragraphs: [
          "Every serious research project follows a predictable pattern. Whether you're investigating a competitor, learning a new technology, or making a major purchase decision, the same four phases apply. Master this workflow once, and you'll use it forever.",
          "**Phase 1 is Discovery**—this is where you cast a wide net. Your goal is to find sources, identify key concepts, and map the landscape. You're not trying to understand everything yet; you're trying to understand what's out there. Think of it as reconnaissance before the main mission.",
          "**Phase 2 is Verification**—now you cross-reference what you found. Check multiple sources for the same claim. Look for agreements and contradictions. This is where you separate reliable information from speculation, and where you identify gaps that need more investigation.",
          "**Phase 3 is Synthesis**—the moment you connect the dots. You've gathered and verified information; now you create summaries and extract insights. This is where raw data becomes actionable knowledge. Different AI tools excel at different phases, but synthesis is where Claude and ChatGPT shine.",
          "**Phase 4 is Organization**—often overlooked but critically important. Store your research so your future self can find it. Structure your notes with clear titles, tags, and summaries. The best researchers build knowledge bases that compound over time—every project builds on previous work rather than starting from scratch.",
        ],
      },
    },

    // === PHASE 1: DISCOVERY ===
    {
      id: "phase-1-discovery",
      type: "text",
      content: {
        title: "Phase 1: Discovery with Gemini",
        paragraphs: [
          "**Discovery** is about breadth, not depth. You want to understand the landscape before diving in.",
          "",
          "This is where **Gemini** excels. Unlike ChatGPT or Claude, Gemini searches the web in real-time and cites its sources. It's designed for research, not conversation.",
          "",
          "**The discovery prompt pattern:**",
          '> "I\'m researching [topic]. Give me a comprehensive overview including: key players, recent developments, common challenges, and emerging trends. Include citations."',
          "",
          "What makes a good discovery prompt:",
          "- **Scope**: Define what you're exploring",
          "- **Dimensions**: Key aspects to investigate (players, trends, challenges)",
          "- **Recency**: Specify if you need current information",
          "- **Citations**: Always ask for sources",
        ],
      },
    },

    // === DISCOVERY PROMPT TEMPLATE ===
    {
      id: "discovery-prompt",
      type: "quickPrompt",
      content: {
        heading: "Discovery Query Template",
        description: "Use this template in Gemini to start any research project:",
        promptText:
          "I'm researching [topic] for [purpose]. Please provide:\n\n1. **Overview**: A 2-3 sentence summary\n2. **Key Players**: Who are the main companies/people/organizations?\n3. **Recent Developments**: What's happened in the last 6-12 months?\n4. **Common Challenges**: What problems do people in this space face?\n5. **Emerging Trends**: What's changing or gaining momentum?\n\nPlease cite your sources.",
        placeholders: ["topic", "purpose"],
      },
    },

    // === TOOL REFERENCE: PERPLEXITY ===
    {
      id: "tool-gemini",
      type: "toolReference",
      content: {
        tool: "gemini",
        action: "For discovery research",
        task: "Open Gemini and use the discovery template above. Start broad, then go deeper on interesting findings.",
        feature: "Pro Search",
        tip: 'Use "Focus" to narrow results to academic papers, news, or specific domains',
      },
    },

    // === PHASE 2: VERIFICATION ===
    {
      id: "phase-2-verification",
      type: "text",
      content: {
        title: "Phase 2: Cross-Reference Multiple Sources",
        paragraphs: [
          "**Verification** is where most research fails. People find one source and stop.",
          "",
          "AI can hallucinate. Sources can be outdated. Authors can be biased. The solution: **triangulation**.",
          "",
          "Triangulation means finding the same information from at least 3 independent sources. If they agree, confidence increases. If they disagree, you've found something worth investigating.",
          "",
          "**The verification process:**",
          "1. Take a key claim from discovery",
          "2. Search for the same claim in different sources",
          "3. Note agreements and disagreements",
          "4. Flag anything that only appears in one source",
        ],
      },
    },

    // === SCENARIO CARD ===
    {
      id: "verification-scenario",
      type: "scenarioCard",
      content: {
        title: "Real Scenario: Verifying Competitive Claims",
        situation:
          "You're researching a competitor's product for a sales deck. Your discovery found a claim that their product 'reduces costs by 40%.' This would be a powerful counter-position if true—but you need to verify it.",
        challenge:
          "The claim appears on their marketing page but not in any third-party reviews or case studies. How do you verify whether this 40% figure is credible?",
        context:
          "This is a common situation—marketing claims often lack context or apply only to specific scenarios.",
        outcome:
          "You search for the same claim across: (1) their case studies, (2) customer reviews on G2/Capterra, (3) industry analyst reports. You find the 40% figure only applies to one specific use case, and the average is closer to 15-20%. This changes how you position against them.",
      },
    },

    // === PHASE 3: SYNTHESIS ===
    {
      id: "phase-3-synthesis",
      type: "text",
      content: {
        title: "Phase 3: Claude/ChatGPT for Synthesis",
        paragraphs: [
          "**Synthesis** is where raw information becomes useful knowledge. This is where Claude and ChatGPT shine.",
          "",
          "After discovery and verification, you have scattered notes, multiple sources, and key findings. Now you need to **connect the dots**.",
          "",
          "**The synthesis workflow:**",
          "1. Gather your verified findings in one place",
          "2. Feed them to Claude or ChatGPT",
          "3. Ask for structure, patterns, and insights",
          "4. Iterate until it's clear and actionable",
        ],
      },
    },

    // === SYNTHESIS PROMPT TEMPLATE ===
    {
      id: "synthesis-prompt",
      type: "quickPrompt",
      content: {
        heading: "Synthesis Prompt Template",
        description:
          "After gathering your research, use this prompt to create a structured summary:",
        promptText:
          "I've gathered research on [topic]. Here are my key findings:\n\n[Finding 1]\n[Finding 2]\n[Finding 3]\n\nPlease create:\n1. **Executive Summary** (3-4 sentences)\n2. **Key Insights** (3-5 bullet points)\n3. **Open Questions** (what's still unclear)\n4. **Recommended Next Steps** (what I should research further)\n\nOrganize for clarity and actionability.",
        placeholders: ["topic", "findings"],
      },
    },

    // === TOOL REFERENCE: CLAUDE ===
    {
      id: "tool-claude",
      type: "toolReference",
      content: {
        tool: "claude",
        action: "For synthesis and analysis",
        task: "Paste your research notes into Claude and use the synthesis template above. Claude excels at finding patterns and creating structure.",
        feature: "Artifacts",
        tip: "Use Artifacts to generate formatted documents you can export",
      },
    },

    // === PHASE 4: ORGANIZATION ===
    {
      id: "phase-4-organization",
      type: "text",
      content: {
        title: "Phase 4: Storing and Organizing Research",
        paragraphs: [
          "**Organization** is the difference between research you use once and research that compounds over time.",
          "",
          "The best researchers build a **personal knowledge base**—a system where research accumulates and connects. Every project builds on previous work.",
          "",
          "**Where to store research:**",
          "- **Notion/Obsidian**: For structured notes and wikis",
          "- **Google Drive**: For documents and collaborative research",
          "- **Raindrop.io**: For bookmarking sources with tags",
          "- **Readwise**: For highlighting and revisiting key passages",
          "",
          "**The organization principle:** Store research so your future self can find it. Use clear titles, add tags, and write summaries.",
        ],
      },
    },

    // === QUIZ ===
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context:
          "You're using the 4-phase research workflow to investigate a new market opportunity. You've completed discovery and found several promising leads. What should you do next?",
        quiz: {
          question:
            "You've completed Phase 1 (Discovery) and found several promising leads about a new market. What should you do next?",
          options: [
            "Start writing your final report based on what you found",
            "Move to Phase 2 (Verification) to cross-reference key claims across multiple sources",
            "Jump to Phase 4 (Organization) to save your findings before you forget them",
            "Ask ChatGPT to summarize everything you discovered",
          ],
          correctAnswer: 1,
        },
      },
    },

    // === COMPARISON TABLE ===
    {
      id: "comparison-table",
      type: "comparisonTable",
      content: {
        title: "Tool Strengths by Research Phase",
        intro: "Different tools excel at different phases. Match the tool to the task.",
        columns: [
          { name: "Gemini", description: "Discovery" },
          { name: "Claude", description: "Synthesis" },
          { name: "ChatGPT", description: "Quick Analysis" },
        ],
        rows: [
          { feature: "Finding sources", values: ["★★★", "★", "★★"] },
          { feature: "Long synthesis", values: ["★", "★★★", "★★"] },
          { feature: "Speed", values: ["★★", "★★", "★★★"] },
          { feature: "Real-time data", values: ["★★★", "★", "★"] },
          { feature: "Deep analysis", values: ["★", "★★★", "★★"] },
        ],
        footer:
          "Use Gemini for discovery, Claude for synthesis, and ChatGPT for quick iterations.",
      },
    },

    // === KEY INSIGHTS ===
    {
      id: "key-insight",
      type: "highlightCard",
      content: {
        heading: "Day 9 Key Takeaways",
        insights: [
          "Research is a process, not a single query—follow the 4 phases",
          "Discovery: Use Gemini for breadth, citations, and current information",
          "Verification: Triangulate claims across 3+ independent sources",
          "Synthesis: Use Claude/ChatGPT to find patterns and create structure",
          "Organization: Build a knowledge base so research compounds over time",
        ],
      },
    },

    // === MAIN CHALLENGE ===
    {
      id: "main-challenge",
      type: "actionableTask",
      content: {
        title: "Your Challenge: Complete a Research Sprint",
        purpose:
          "Apply the 4-phase research workflow to a real topic you genuinely need to research. This builds the complete workflow muscle memory.",
        instructions: [
          "1. Pick a topic you genuinely need to research (competitor, new technology, career path, purchase decision)",
          "2. DISCOVER: Use Gemini for initial broad research with the discovery template",
          "3. VERIFY: Cross-reference at least 2 key claims across multiple sources",
          "4. SYNTHESIZE: Use Claude to create a structured summary with insights",
          "5. ORGANIZE: Save your research with clear title, tags, and summary",
        ],
        deliverable: "A structured research summary with 5+ verified sources",
        estimatedTime: "15-20 minutes",
        starterPrompt:
          "I'm researching [topic] for [purpose]. Please provide:\n\n1. **Overview**: A 2-3 sentence summary\n2. **Key Players**: Who are the main companies/people/organizations?\n3. **Recent Developments**: What's happened in the last 6-12 months?\n4. **Common Challenges**: What problems do people in this space face?\n5. **Emerging Trends**: What's changing or gaining momentum?\n\nPlease cite your sources.",
        successCriteria: [
          "You completed all 4 phases of the research workflow",
          "Discovery used Gemini (or similar search-based tool) with sources",
          "At least 2 key claims were verified across multiple sources",
          "Final synthesis includes executive summary, key insights, and open questions",
          "Research is saved in an organized, findable format",
        ],
      },
    },
  ],
};

export default lessonDay9;
