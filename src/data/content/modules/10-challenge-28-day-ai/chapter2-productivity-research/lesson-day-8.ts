/**
 * Day 8: Gemini Fundamentals
 *
 * TOOL MASTERY LESSON - Teaches specific tool usage
 *
 * Structure:
 * - Hero image with Gemini branding
 * - The research problem with traditional AI
 * - What Gemini is and how it differs
 * - Interface overview
 * - Tool reference for access
 * - When to use Gemini vs ChatGPT vs Claude
 * - First search exercise
 * - Quick prompt for research
 * - How to read/verify citations
 * - Quiz to test understanding
 * - Pro tips: Collections, Focus modes, Copilot
 * - Key takeaways in highlight card
 * - Research challenge with verified sources
 * - NO gamification
 */

import type { Lesson } from "@/types/content";

export const lessonDay8: Lesson = {
  id: "day-8",
  chapterId: "chapter2-productivity-research",
  moduleId: "10-challenge-28-day-ai",
  title: "Gemini Fundamentals",
  description:
    "Master AI-powered research with cited sources. Learn when Gemini beats ChatGPT for finding and verifying information.",
  order: 8,
  format: "article",
  lessonCategory: "tutorial",
  estimatedMinutes: 12,

  imageSearchTerms: [
    "gemini AI search engine",
    "research citations verification",
    "fact-checking sources",
  ],

  sections: [
    // === HERO SECTION ===
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-8-cover.webp",
        imageAlt: "Gemini AI research interface",
        title: "Day 8: Gemini Fundamentals",
        subtitle:
          "Master AI-powered research with cited sources. Learn when Gemini beats ChatGPT for finding and verifying information.",
      },
    },

    // === SECTION 1: THE RESEARCH PROBLEM ===
    {
      id: "research-problem",
      type: "text",
      content: {
        title: "The Research Problem",
        paragraphs: [
          "**Tool for this lesson:** Gemini AI",
          "",
          "Here's a familiar scenario: You ask ChatGPT a factual question. It gives you a confident, detailed answer. But when you try to verify that information... there are no sources. No links. No way to check where it came from.",
          "Traditional AI chatbots are great at synthesis, but they lack one critical thing: **citations**. They're designed to generate plausible responses, not to cite their sources.",
          "This creates a real problem when you need accurate, verifiable information. You end up cross-referencing everything manually anyway—so what's the point?",
        ],
      },
    },

    // === SECTION 2: WHAT GEMINI ADDS FOR RESEARCH ===
    {
      id: "what-is-gemini",
      type: "text",
      content: {
        title: "What Gemini Does Differently",
        paragraphs: [
          "Gemini (Module 7 in this syllabus) is strongest for professionals who already live in Google Workspace. When **Google Search grounding** is enabled and compliant with your policy, responses can include **links you can open**—which is the habit this lesson practices.",
          "Grounding is not guaranteed for every account or tenant. If your employer turns it off, treat this lesson as a manual search drill instead.",
          "No model replaces verification: click the link, read the paragraph in context, and watch for stale dashboards or SEO pages.",
          "You can still **chain follow-ups** the same way you would in any chat—narrow the question until the deliverable is decision-ready.",
        ],
      },
    },

    // === SECTION 3: INTERFACE OVERVIEW ===
    {
      id: "interface-overview",
      type: "textWithImage",
      content: {
        title: "The Gemini Interface",
        paragraphs: [
          "Gemini's interface is clean and intuitive. The main search bar dominates the page, and below each answer you'll find numbered citations that link to original sources.",
        ],
        image: {
          src: "/images/courses/modules/10-challenge-28-day-ai/day-8-inline-1.webp",
          alt: "Gemini AI interface showing search bar and cited sources",
          caption: "Gemini shows citations right in the response",
        },
      },
    },

    // === SECTION 4: TOOL REFERENCE ===
    {
      id: "tool-access",
      type: "toolReference",
      content: {
        tool: "gemini",
        action: "For this lesson",
        task: "Open Gemini and keep it ready to try each search technique.",
        tip: "Gemini works best when you ask specific research questions",
      },
    },

    // === SECTION 5: WHEN TO USE EACH TOOL ===
    {
      id: "tool-comparison",
      type: "textWithBullets",
      content: {
        title: "When to Use Gemini vs ChatGPT vs Claude",
        paragraphs: ["Each AI tool has its strengths. Here's when to reach for each:"],
        bullets: [
          "**Use Gemini when:** You need current information, want citations, are researching a new topic, or need to verify facts",
          "**Use ChatGPT when:** You want creative writing, brainstorming, coding help, or general knowledge synthesis without needing sources",
          "**Use Claude when:** You need nuanced analysis, are working with long documents, or want thoughtful reasoning through complex problems",
          "**Pro tip:** Many professionals use Gemini for research and ChatGPT/Claude for synthesis—getting the best of both worlds",
        ],
      },
    },

    // === SECTION 6: FIRST SEARCH EXERCISE ===
    {
      id: "first-search",
      type: "text",
      content: {
        title: "Your First Gemini Search",
        paragraphs: [
          "Let's try it right now. Here's what to do:",
          "",
          "1. Go to Gemini.ai in your browser",
          "2. Click in the search bar",
          "3. Type a specific research question (see the prompt below)",
          "4. Press Enter and watch how Gemini responds",
          "5. Look for the numbered citations—click on a few to see the original sources",
          "",
          "Notice how different this feels from a regular AI chat. You're not just getting an answer—you're getting a trail of evidence.",
        ],
      },
    },

    // === SECTION 7: QUICK PROMPT ===
    {
      id: "quick-prompt",
      type: "quickPrompt",
      content: {
        heading: "Try This Research Query",
        description:
          "Copy this prompt and paste it into Gemini. Notice how it structures the answer with sources:",
        promptText:
          "What are the latest developments in AI regulation in 2024? Include key laws, policies, and which countries are leading.",
        placeholders: [],
      },
    },

    // === SECTION 8: HOW TO VERIFY CITATIONS ===
    {
      id: "verify-citations",
      type: "text",
      content: {
        title: "How to Read and Verify Citations",
        paragraphs: [
          "Gemini makes verification easy, but you still need to know what to look for:",
          "",
          "**Check the source quality:** Is it a reputable news outlet, academic paper, or official government source? A random blog post carries less weight than Reuters or Nature.",
          "",
          '**Look at the date:** Information changes fast. A citation from 2021 about "current" AI capabilities is already outdated.',
          "",
          "**Cross-reference key claims:** If something seems surprising or important, open the source and verify it directly. Gemini is a starting point, not the final word.",
          "",
          "**Notice what's missing:** Sometimes Gemini will cite several sources that all say the same thing. Look for diversity in perspectives.",
        ],
      },
    },

    // === SECTION 9: QUIZ ===
    {
      id: "quiz",
      type: "quiz",
      content: {
        context: "Let's test your understanding of when to use each tool.",
        quiz: {
          question:
            "You need to research competitor pricing for a product launch next month. Which tool should you use first?",
          options: [
            "ChatGPT—it's better at synthesizing information",
            "Gemini—you need current data with verifiable sources",
            "Claude—it's better at reasoning through complex problems",
            "All three at the same time for maximum coverage",
          ],
          correctAnswer: 1,
        },
      },
    },

    // === SECTION 10: PRO TIPS ===
    {
      id: "pro-tips",
      type: "text",
      content: {
        title: "Pro Tips: Getting More from Gemini",
        paragraphs: [
          "Once you're comfortable with basic searches, several advanced features will transform Gemini from a useful tool into an indispensable research companion.",
          "**Collections** let you save related searches into organized folders. This is invaluable for ongoing research projects where you need to reference previous findings without re-running the same queries. Instead of scattered bookmarks, you have curated research threads you can return to anytime.",
          "**Focus modes** tailor your search results to specific source types. Academic mode prioritizes scholarly papers and peer-reviewed research. Writing mode surfaces content creation resources. Wolfram|Alpha integration handles computational queries with mathematical precision. Each mode reshapes the search landscape to match what you're trying to accomplish.",
          "**Copilot** is Gemini's interactive research assistant. When enabled, it asks clarifying questions before searching—refining your query based on what you actually need. This is especially powerful for complex research where you're not sure exactly what to ask. Copilot helps you discover the right questions.",
          "**Threads** preserve your research sessions. Every search creates a conversation you can return to, with all follow-up questions maintaining context. This builds deeper understanding over time, turning isolated searches into connected knowledge.",
        ],
      },
    },

    // === SECTION 11: KEY TAKEAWAYS ===
    {
      id: "key-takeaways",
      type: "highlightCard",
      content: {
        heading: "Key Takeaways",
        insights: [
          "Gemini provides AI-powered answers with real citations you can verify",
          "Use Gemini for current information, ChatGPT for creativity, Claude for deep analysis",
          "Always check source quality, date, and diversity when verifying citations",
          "Collections, Focus modes, and Copilot help you research more efficiently",
        ],
      },
    },

    // === SECTION 12: ACTIONABLE CHALLENGE ===
    {
      id: "challenge",
      type: "actionableTask",
      content: {
        title: "Your Challenge: Research with Verified Sources",
        purpose: "Practice research with Gemini to find, verify, and synthesize information.",
        instructions: [
          "1. Think of a topic you need to research (work project, personal interest, or something you've been curious about)",
          "2. Open Gemini and ask a specific research question",
          "3. Review the sources cited in the response",
          "4. Ask 2-3 follow-up questions to dig deeper",
          "5. Click through to at least 2 original sources to verify the information",
        ],
        deliverable: "A 3-bullet summary with original source links",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "What is [topic] and why does it matter in 2024? Include recent developments and key statistics.",
        successCriteria: [
          "Your initial question was specific and research-focused",
          "You reviewed the citations in Gemini's response",
          "You asked follow-up questions to clarify or expand",
          "You clicked through to verify at least 2 sources directly",
          "Your summary includes links to original sources, not just Gemini",
        ],
      },
    },
  ],
};

export default lessonDay8;
