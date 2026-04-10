/**
 * Lesson 2.4: Research & information synthesis with Gemini (grounding)
 *
 * XP CALCULATION:
 * - Base: 75 XP
 * - Length: 25 min -> x1.0
 * - Difficulty: x1.2 (Intermediate)
 * - Quizzes: +20 XP
 * - Checkpoint: +5 XP
 * - Total: 115 XP
 *
 * Duration: 25 minutes
 * XP REWARD: 115 points
 */

import type { Lesson } from "@/types/content";

export const lesson_2_4: Lesson = {
  id: "lesson-2-4",
  chapterId: "ch2-2-workflows",
  moduleId: "02-skills-productivity",
  title: "Research Faster With Better Sources",
  description:
    "Use Gemini with org-approved grounding to research faster with traceable sources and checks",
  order: 4,
  estimatedMinutes: 15,
  xpReward: 115,
  format: "article",
  lessonCategory: "tutorial",
  coverImage: "/images/courses/lessons/modules/daily-workflow-rhythm-and-productivity.webp",
  coverTitle: "Research Faster With Better Sources",

  sections: [
    // ==========================================================================
    // HERO IMAGE
    // ==========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/02-skills-productivity/lesson-2-4-cover.webp",
        imageAlt: "Research and information synthesis with AI",
        title: "Research Faster With Better Sources",
        subtitle:
          "Use Gemini with traceable sources when your workspace policy allows Google Search grounding",
      },
    },

    // ==========================================================================
    // SECTION 1: THE RESEARCH PROBLEM
    // ==========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Research Problem",
        paragraphs: [
          "Google searches return links. You click. You read. You synthesize manually. Ten minutes of clicking for one answer.",
          "AI research returns answers. With sources. With citations. With synthesis. Thirty seconds of reading.",
          "Speed without accuracy is worthless. AI hallucinations are real. That's why Module 7 (Gemini) pairs especially well with Workspace policies that allow grounded web answers you can click back to.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: SARAH'S STORY
    // ==========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "What Sarah Used to Do",
        paragraphs: [
          'Sarah needed to research "AI in healthcare 2024" for a client presentation. Her traditional approach was exhausting. She opened 15 browser tabs, skimmed abstracts, and copy-pasted relevant sections into a document. Then she tried to synthesize everything manually, reading through her notes to find patterns and key insights.',
          "Halfway through, she realized she had missed key sources. So she went back to the search results, opened 10 more tabs, and repeated the process. Two hours later, she had a messy document and low confidence in her analysis. There had to be a better way.",
          "This scenario plays out daily for professionals who need to research complex topics. The old method—Google, click, read, synthesize—doesn't scale when you need comprehensive, accurate information quickly. A grounded Gemini workflow—still verified by you—can compress that loop when your organization allows it.",
        ],
      },
    },

    // ==========================================================================
    // TOOL REFERENCE: Gemini
    // ==========================================================================
    {
      id: "tool-ref-1",
      type: "toolReference",
      content: {
        tool: "gemini",
        action: "For this lesson",
        task: "Open Gemini (gemini.google.com) and enable Google Search grounding if your account shows it",
        feature: "Grounded answers with source links (when available)",
        tip: "Follow your employer’s AI policy—some tenants restrict web grounding or logging",
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Key Insight
    // ==========================================================================
    {
      id: "highlight-1",
      type: "highlightCard",
      content: {
        heading: "Why Gemini fits this syllabus",
        insights: [
          "Module 7 positions Gemini for Google Workspace users; grounding links help you verify fast",
          "Treat citations as starting points—still read the source for tone and limitations",
          "When grounding is off or blocked, switch to manual search plus Claude/ChatGPT synthesis",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 1: Grounded research basics
    // ==========================================================================
    {
      id: "section-3",
      type: "quiz",
      content: {
        quiz: {
          question:
            "In this curriculum, why might you reach for Gemini (with grounding) instead of a generic chat-only session for market stats?",
          options: [
            "Gemini always writes better poetry",
            "Grounding can tie answers to retrievable web sources your org allows",
            "Gemini never makes mistakes",
            "ChatGPT cannot draft emails",
          ],
          correctAnswer: 1,
        },
        context:
          "This curriculum highlights Gemini for Workspace-integrated professionals. Grounding is useful because it gives you clicking paths to verify—not because automation replaces judgement.",
      },
    },

    // ==========================================================================
    // SECTION 3: Grounding and verification
    // ==========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Grounding, Then Human Verification",
        paragraphs: [
          "When Google Search grounding is available and permitted, Gemini can summarize what publishers and regulators are saying right now, with links you can audit. That is different from trusting a single memorized answer.",
          "Use the links the way a journalist would: open them, skim for methodology, and watch for paywalled or SEO-slanted pages.",
          "You still synthesize: ask follow-ups that isolate disagreement (“Where do these two sources diverge on dates?”). The habit matters more than any one feature name.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 4: SIX RESEARCH QUERY TYPES
    // ==========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Six Research Query Types",
        paragraphs: [
          "Different research goals call for different questioning strategies. Understanding these six query types helps you get exactly what you need from a grounded Gemini session.",
          'Factual queries seek specific, verifiable information. "What is the current US corporate tax rate?" should point to official sources. Comparative queries weigh options. "Compare React vs Vue for enterprise apps. What are pros and cons?" should surface trade-offs with evidence.',
          'Exploratory queries help you understand complex topics. "Explain quantum computing for a business audience with examples" breaks down technical concepts into accessible language. Latest queries focus on current events. "What are the recent developments in battery technology?" prioritizes the newest information available.',
          'Comprehensive queries request broad overviews. "Overview of remote work trends including history, current state, and future predictions" generates a structured analysis covering multiple dimensions. Academic queries emphasize scholarly sources. "What does research say about intermittent fasting? Cite studies from 2023-2024." ensures you get peer-reviewed evidence rather than popular media coverage.',
        ],
      },
    },

    // ==========================================================================
    // QUICK PROMPT: Research Query Template
    // ==========================================================================
    {
      id: "quick-prompt-1",
      type: "quickPrompt",
      content: {
        heading: "Try This Research Query",
        description: "Use this template to structure your research queries for better results",
        promptText:
          "Research [topic] for [purpose]. Include:\n- Current state and recent developments\n- Key players or stakeholders\n- Main challenges and opportunities\n- Future trends and predictions\n\nCite sources from the last 12 months where possible.",
        placeholders: ["topic", "purpose"],
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: Visual break
    // ==========================================================================
    {
      id: "text-image-1",
      type: "textWithImage",
      content: {
        title: "The Research Workflow",
        paragraphs: [
          "Effective research follows a clear pattern: start broad to understand the landscape, then narrow down to specific questions that matter most to your goal.",
          "Gemini (grounded) excels at exploratory scans and targeted fact-finding when policies allow. The key is knowing which query type matches your need.",
        ],
        imageUrl: "/images/courses/modules/02-skills-productivity/lesson-2-4-inline-1.webp",
        imageAlt: "Research workflow visualization",
        imageCaption: "From broad exploration to targeted insights",
      },
    },

    // ==========================================================================
    // QUIZ 2: Check understanding of query types
    // ==========================================================================
    {
      id: "section-6",
      type: "quiz",
      content: {
        quiz: {
          question: "You need current information about a breaking news story. Which query type?",
          options: ["Factual", "Latest", "Academic", "Comprehensive"],
          correctAnswer: 1,
        },
        context:
          'The "Latest" query type signals you need fresh publisher coverage. Use grounding, then corroborate anything that could move markets or legal outcomes.',
      },
    },

    // ==========================================================================
    // SECTION 5: Extended research pass
    // ==========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Extended Research Pass",
        paragraphs: [
          "When your Gemini workspace offers a multi-step or expanded research workflow, use it for topics that deserve breadth: competitive scans, regulatory summaries, or technology landscapes.",
          "Regardless of brand feature names, the pattern is the same: widen the source net, cluster themes, then narrow to decisions.",
          "Budget time for verification. Extended passes reduce hours of tab-hopping, but they do not remove your obligation to read primary sources on anything high-stakes.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Deep Research Best Practices
    // ==========================================================================
    {
      id: "highlight-2",
      type: "highlightCard",
      content: {
        heading: "When to widen the source net",
        insights: [
          "Competitive analysis requiring multiple data points and comprehensive market view",
          "Academic research where you need literature review synthesis",
          "Major business decisions that need thorough understanding of all perspectives",
          "Industry trend analysis where connections across sources reveal patterns",
        ],
      },
    },

    // ==========================================================================
    // QUICK PROMPT: Deep Research Template
    // ==========================================================================
    {
      id: "quick-prompt-2",
      type: "quickPrompt",
      content: {
        heading: "Extended research prompt template",
        description: "Use when you need breadth before you decide",
        promptText:
          "Conduct a comprehensive analysis of [topic].\n\nPlease cover:\n1. Historical context and evolution\n2. Current state of [topic] including key players\n3. Main debates or controversies\n4. Recent developments (last 6-12 months)\n5. Future outlook and predictions\n\nInclude diverse perspectives and cite authoritative sources.",
        placeholders: ["topic"],
      },
    },

    // ==========================================================================
    // CHECKPOINT: Test comprehensive understanding
    // ==========================================================================
    {
      id: "section-8",
      type: "checkpoint",
      content: {
        question:
          "You need to research a competitor before a client meeting. Which approach matches this curriculum?",
        options: [
          "Do a Google search and read articles manually",
          "Start with a grounded overview in Gemini, compare positioning with explicit prompts, click sources for anything you will repeat verbally, then hand long synthesis to Claude if needed",
          "Ask any chat to invent financials with no sources",
          "Look up the competitor on Wikipedia only",
        ],
        correctAnswer: 1,
        hint: "The default stack pairs Gemini (Workspace/grounding) with Claude/ChatGPT for drafting and nuance.",
      },
    },

    // ==========================================================================
    // SECTION 6: RESEARCH BEST PRACTICES
    // ==========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Research Best Practices",
        paragraphs: [
          "Follow these practices for effective AI-powered research. First, start broad, then go deep. Begin with overview questions to understand the landscape—what are the main themes, who are the key players, what's the general consensus? Then ask specific follow-ups to dive into the details that matter most for your goal.",
          "Always verify by clicking through to sources. Read the original articles. AI can misinterpret context or miss nuance that becomes obvious when you see the full text. Verification is your responsibility as a researcher. The citations make this easy—one click takes you to the source.",
          "Follow the thread where it leads. Each answer suggests new questions. Something mentioned in passing might become the most important insight. Stay inside the same grounded thread when your policy allows, or export notes to Claude for deeper restructuring.",
        ],
      },
    },

    // ==========================================================================
    // ACTIONABLE TASK (Inline)
    // ==========================================================================
    {
      id: "actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Research Challenge",
        purpose:
          "Apply Gemini (with grounding if available) to a real topic and compare the loop to manual search.",
        instructions: [
          "Pick a topic you are curious about (work or personal)",
          "Open Gemini and enable Google Search grounding if your UI offers it",
          "Run an overview prompt, then a comparative or “latest developments” follow-up",
          "Verify 2-3 sources by clicking through to the original articles",
          "Note how this compares to your usual research process",
        ],
        deliverable:
          "A brief summary of your topic, key findings, source credibility assessment, and time saved compared to traditional research",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "Research [topic] for [purpose]. Include current state, key players, recent developments, and future trends. Cite sources from the last 12 months.",
        successCriteria: [
          "Ran at least two related prompts in a grounded Gemini session (or documented why grounding was unavailable)",
          "Verified at least 2-3 sources by clicking through",
          "Can articulate the main findings in 2-3 sentences",
          "Compared the experience to traditional research methods",
        ],
      },
    },
  ],
};
