/**
 * Day 14: The Multi-Tool Research Workflow
 *
 * TEACHING LESSON - Research Tool Chaining
 * How to chain AI tools together for deep research, synthesis patterns,
 * and when to use ChatGPT, Claude, Gemini, and Midjourney in research chains.
 *
 * Structure:
 * - Hero image
 * - Opening (why multi-tool research matters)
 * - Teaching: The Research Tool Chain
 * - Teaching: Synthesis Patterns
 * - Teaching: When to Use What
 * - Week recap (brief reference)
 * - Key insights card
 * - Actionable practice (multi-tool research challenge)
 * - Week 3 preview
 * - Closing motivation
 */

import type { Lesson } from "@/types/content";

export const lessonDay14: Lesson = {
  id: "day-14",
  chapterId: "chapter2-productivity-research",
  moduleId: "10-challenge-28-day-ai",
  title: "The Multi-Tool Research Workflow",
  description:
    "Learn how to chain AI tools together for deep research, master synthesis patterns, and develop a decision framework for choosing the right research tool for any task.",
  order: 14,
  format: "article",
  lessonCategory: "theory",
  estimatedMinutes: 15,

  imageSearchTerms: [
    "research workflow tools connected",
    "multi-tool synthesis knowledge",
    "AI research chain integration",
  ],

  sections: [
    // === HERO SECTION ===
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-14-cover.webp",
        imageAlt: "Multi-Tool Research Workflow",
        title: "Day 14: The Multi-Tool Research Workflow",
        subtitle:
          "Master the art of chaining AI tools together for research that goes deeper than any single tool can reach.",
      },
    },

    // === OPENING ===
    {
      id: "opening",
      type: "text",
      content: {
        paragraphs: [
          "**You've met the tools. Now meet the workflow.**",
          "",
          "Over the past week, you've practiced how each core tool earns its keep: **Gemini** (with Search grounding when your policy allows) for cited current information, **Claude** for long documents and careful reasoning, **ChatGPT** for fast iteration and generalist drafting, and **Midjourney** once a visual brief is stable. The leverage is not picking a favorite—it is sequencing them.",
          "",
          "Think of it like a kitchen. A great chef doesn't use just a knife or just a pan. They use the right tool for each step: knife for prep, pan for searing, oven for finishing. The magic happens in how these steps connect. The same principle applies to AI research. When you learn to chain tools together — passing outputs from one as inputs to another — you unlock capabilities that no single AI can provide.",
          "",
          "Today, you'll learn the multi-tool research workflow: a systematic approach to deep research that leverages each tool's unique strengths. By the end, you'll have a decision framework for any research task and synthesis patterns for combining AI outputs into coherent, actionable insights.",
        ],
      },
    },

    // === TEACHING: THE RESEARCH TOOL CHAIN ===
    {
      id: "research-tool-chain",
      type: "text",
      content: {
        title: "The Research Tool Chain",
        paragraphs: [
          "Every serious research project follows a natural progression: discover, analyze, synthesize, and present. Each phase has different requirements, and different AI tools shine at different phases. Understanding this chain transforms you from a casual AI user into a research orchestrator.",
          "",
          "**Discovery Phase — Cast the Net Wide.** This is where Gemini dominates. When you're starting fresh on a topic, you need breadth: what's being said, who's saying it, and what sources exist. Gemini's real-time search with citations gives you a foundation of verified information. Use it to gather 5-10 quality sources, identify key themes, and map the landscape. The output of this phase is a collection of sources and an initial understanding of the topic's shape.",
          "",
          "**Analysis Phase — Go Deep.** Now you need depth. This is where Claude and Gemini take over. If your research involves long documents — industry reports, academic papers, legal briefs, technical specifications — upload them to Claude. Its 150+ page capacity and nuanced comprehension extract insights that would take hours to find manually. If your research involves visuals — charts, infographics, product images, screenshots — Gemini's multimodal capabilities interpret what text-only tools cannot see. The output here is extracted insights, summarized key points, and visual interpretations.",
          "",
          "**Synthesis Phase — Connect the Dots.** This is where ChatGPT often excels. With your gathered sources and analyzed content, you need to find patterns, resolve contradictions, and build coherent arguments. ChatGPT's strength in creative reasoning helps you synthesize disparate information into unified insights. Feed it your grounded Gemini findings, Claude's summaries, and any visual notes (including direction from Midjourney explorations) — then ask it to find the through-line. The output is a synthesized understanding that's greater than the sum of its parts.",
          "",
          "**The key insight:** Don't ask one tool to do everything. Let each tool play to its strength, and pass outputs between them like a relay race. Your research quality compounds with each handoff.",
        ],
      },
    },

    // === TEACHING: SYNTHESIS PATTERNS ===
    {
      id: "synthesis-patterns",
      type: "text",
      content: {
        title: "Synthesis Patterns: Combining AI Outputs",
        paragraphs: [
          "Knowing which tool to use is half the battle. The other half is knowing how to combine their outputs. Here are three proven synthesis patterns you can apply immediately.",
          "",
          "**Pattern 1: The Verification Loop.** Start with Gemini for initial research. Take its claims and feed them back through Claude with your source documents to verify accuracy. Use Gemini to visually confirm any charts or images cited. This pattern catches hallucinations and ensures your research rests on solid ground. It's essential for high-stakes research where accuracy is non-negotiable — investment decisions, legal research, medical information, competitive analysis.",
          "",
          "**Pattern 2: The Perspective Matrix.** Run the same question through multiple AIs and compare responses. Ask Gemini for the current consensus view. Ask Claude for nuanced analysis of complexities and edge cases. Ask ChatGPT for creative alternatives and contrarian perspectives. Then synthesize these viewpoints into a comprehensive answer that acknowledges multiple angles. This pattern is powerful for strategic decisions, complex problems, and any situation where you want to avoid blind spots.",
          "",
          "**Pattern 3: The Document Assembly Line.** Break complex research into components handled by specialized tools. Grounded Gemini gathers market scan and citations. Claude analyzes your internal PDFs and long reports. ChatGPT assembles narrative; Midjourney translates an approved visual brief into imagery when the deliverable demands it. Each tool does what it does best, and the final output reflects that quality.",
          "",
          "**Pro tip:** When passing outputs between tools, include context about where the information came from. Instead of pasting raw text, preface with 'From Gemini research on [topic]...' or 'Claude's analysis of [document] suggests...' This helps each tool understand the source and reliability of its inputs.",
        ],
      },
    },

    // === TEACHING: WHEN TO USE WHAT ===
    {
      id: "when-to-use-what",
      type: "text",
      content: {
        title: "When to Use What: A Decision Framework",
        paragraphs: [
          "With four powerful tools at your disposal, how do you quickly decide which to use? Here's a practical decision framework based on your research goal.",
          "",
          "**Choose Gemini when:** You need current information (anything that changed in the last 6-12 months), citations are important for credibility, you're fact-checking claims, you're researching news, trends, or market conditions, or you need to understand what sources exist on a topic. Gemini is your first stop for any research that requires verification and source attribution.",
          "",
          "**Choose Midjourney when:** You owe campaign imagery or metaphors and the creative brief is already written in words—never the other way around.",
          "",
          "**Choose Claude when:** You're working with long documents (anything over 20-30 pages), you need nuanced analysis that captures subtle distinctions, you're analyzing contracts, reports, research papers, or technical documentation, you want thoughtful, measured responses that acknowledge complexity, or you need to extract specific information from dense text. Claude reads deep.",
          "",
          "**Choose ChatGPT when:** You're working with structured data (spreadsheets, CSVs, tables), you need creative solutions or brainstorming, you want to generate content from your research findings, you're doing data analysis or pattern recognition, or you need quick, versatile assistance across multiple task types. ChatGPT is your generalist and data specialist.",
          "",
          "**The ultimate question:** What's the primary nature of what I'm researching? Real-time web info (with policy-approved grounding)? Gemini. Pixel deliverables? Midjourney after the brief. Long documents? Claude. Data or creative synthesis? ChatGPT. Start there, then chain deliberately.",
        ],
      },
    },

    // === VISUAL BREAK ===
    {
      id: "context-image",
      type: "textWithImage",
      content: {
        title: "The Multi-Tool Mindset",
        paragraphs: [
          "The researchers who get the most from AI don't ask 'Which tool is best?' They ask 'Which tool is best for this step?' This shift in thinking — from tool selection to workflow orchestration — is what separates casual users from power users.",
        ],
        image: {
          src: "/images/courses/modules/10-challenge-28-day-ai/day-14-inline-1.webp",
          alt: "Connected research workflow tools",
          caption: "Each tool is a specialist. You are the orchestrator.",
        },
      },
    },

    // === WEEK 2 BRIEF RECAP ===
    {
      id: "week-recap",
      type: "textWithBullets",
      content: {
        title: "Week 2 Tools: Quick Reference",
        paragraphs: ["Here's a condensed reminder of what you've learned:"],
        bullets: [
          "**Gemini:** Grounded web scans (when allowed) plus Workspace-native workflows.",
          "**Claude:** Long document comprehension—reports, contracts, nuanced text analysis.",
          "**ChatGPT:** Fast iteration, structured reasoning, spreadsheets, and draft synthesis.",
          "**Midjourney:** Visual concepts once the written brief is stable.",
        ],
      },
    },

    // === KEY INSIGHTS ===
    {
      id: "key-insights",
      type: "highlightCard",
      content: {
        heading: "Multi-Tool Research Principles",
        insights: [
          "No single AI does everything well — orchestration beats optimization",
          "Match the tool to the phase: discover (grounded Gemini), analyze (Claude + multimodal Gemini), synthesize (ChatGPT), visuals (Midjourney if needed)",
          "Use verification loops for high-stakes research — cross-check between tools",
          "Pass context between tools: explain where information came from",
          "The decision framework: real-time? visual? document? data? — let the answer guide your first tool",
        ],
      },
    },

    // === ACTIONABLE PRACTICE ===
    {
      id: "actionable-practice",
      type: "text",
      content: {
        title: "Practice: The Multi-Tool Research Challenge",
        paragraphs: [
          "Now it's time to put the multi-tool workflow into practice. You'll research a topic using at least three different AI tools in sequence, applying the synthesis patterns you just learned.",
          "",
          "Choose a research topic relevant to your work or interests — perhaps a competitor analysis, a technology trend, a purchasing decision, or a strategic question. The goal isn't to become an expert on the topic, but to practice the workflow itself.",
        ],
      },
    },

    {
      id: "challenge",
      type: "actionableTask",
      content: {
        title: "Multi-Tool Research Challenge",
        purpose:
          "Apply the multi-tool research workflow to a real topic. Practice chaining tools together and synthesizing outputs into actionable insights.",
        instructions: [
          "**STEP 1: DISCOVER (Gemini)**",
          "Research your topic in Gemini. Gather 3-5 quality sources with citations. Identify key themes and questions.",
          "",
          "**STEP 2: ANALYZE (Claude or Gemini)**",
          "If your research involves documents: Upload to Claude and extract key insights.",
          "If your research involves visuals: Use Gemini to analyze relevant images or charts.",
          "",
          "**STEP 3: SYNTHESIZE (ChatGPT)**",
          "Combine your Gemini findings and Claude/Gemini analysis. Ask ChatGPT to synthesize into a coherent summary with key takeaways.",
          "",
          "**STEP 4: CREATE OUTPUT**",
          "Produce a 1-page research brief that cites sources and presents synthesized insights.",
          "",
          "**Minimum requirement:** Use at least 3 different tools in your workflow.",
        ],
        deliverable: "A 1-page research brief demonstrating multi-tool synthesis",
        estimatedTime: "25-35 minutes",
        starterPrompt:
          "I am researching [topic] for [purpose]. I've gathered information from multiple sources:\n\n[Gemini findings with citations]\n\n[Claude/Gemini analysis]\n\nPlease synthesize these into a coherent research brief with:\n1. Key findings (with source citations)\n2. Important nuances or contradictions\n3. Actionable recommendations\n4. Areas requiring further research",
        successCriteria: [
          "Used at least 3 different AI tools in sequence",
          "Research includes cited sources from Gemini",
          "Applied analysis with Claude (documents) or Gemini (visuals)",
          "Final brief synthesizes information from multiple sources",
          "Output acknowledges different perspectives or uncertainties",
        ],
      },
    },

    // === WEEK 3 PREVIEW ===
    {
      id: "week3-preview",
      type: "textWithBullets",
      content: {
        title: "Coming Up: Week 3 - Career Growth",
        paragraphs: ["Next week, we apply your AI skills to career advancement:"],
        bullets: [
          "**Day 15:** AI as Your Thinking Partner — Strategic thinking and decision-making with AI",
          "**Day 16:** Resume Enhancement with AI — Creating tailored, standout resumes",
          "**Day 17:** Interview Preparation — Practicing answers and researching companies",
          "**Day 18:** Week 3 Review + Mini-Challenge — Consolidate your career skills",
        ],
      },
    },

    // === CLOSING MOTIVATION ===
    {
      id: "closing",
      type: "highlightCard",
      content: {
        heading: "The Orchestrator Mindset",
        insights: [
          "You now think in workflows, not just tools",
          "You can chain AI assistants to achieve what no single AI can",
          "Your research will be deeper, more verified, and more comprehensive",
          "This skill compounds — every research task gets easier and better",
          "Week 3 focuses these powers on your career growth",
        ],
      },
    },
  ],
};

export default lessonDay14;
