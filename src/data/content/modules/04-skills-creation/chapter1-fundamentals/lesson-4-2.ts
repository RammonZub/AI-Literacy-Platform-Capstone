/**
 * Lesson 4.2: Reports and Proposals
 *
 * PURPOSE: Learn to use AI for creating professional business documents
 *
 * CONTEXT: Second lesson of Module 4 (Creation). Builds on writing collaboration
 * skills by focusing on formal business documents like reports and proposals.
 *
 * KEY RESPONSIBILITIES:
 * - Teach report structuring with AI
 * - Show proposal creation techniques
 * - Explain executive summary writing
 * - Demonstrate data visualization assistance
 * - Emphasize accuracy and strategic judgment
 *
 * IMPLEMENTATION NOTES:
 * - 14-minute lesson (longer - more complex content)
 * - Uses before/after examples extensively
 * - Focus on business document best practices
 * - Strong emphasis on human verification of AI output
 * - XP Calculation: Base 125 x 1.0 (10-20min) x 1.2 (Intermediate) + 50 (2 quizzes x 10 + 1 checkpoint x 10 + advanced bonus 20) = 200 XP
 *
 *
 * DEPENDENCIES:
 * - Module 1 (Foundation): Basic AI familiarity
 * - Module 3 (Prompting): C-RT-F framework
 * - Lesson 4.1: AI as Writing Partner (prerequisite)
 *
 * @see lesson-4-1.ts - Prerequisite: basic AI writing collaboration
 * @see lesson-4-3.ts - Builds on this with marketing content
 * @created 2026-02-06
 */

import type { Lesson, LessonSection } from "@/types/content";

export const lesson_4_2: Lesson = {
  id: "lesson-4-2",
  chapterId: "ch1-fundamentals",
  moduleId: "04-skills-creation",
  lessonCategory: "tutorial",
  title: "Reports and Proposals",
  description:
    "Create professional business documents faster with AI assistance while maintaining accuracy and strategic insight.",
  order: 2,
  estimatedMinutes: 14,
  xpReward: 200,
  format: "article",
  coverImage: "/images/courses/lessons/modules/writing-and-creative-vocabulary.webp",
  coverTitle: "Reports and Proposals",
  sections: [
    // ==========================================================================
    // HERO SECTION
    // ==========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/04-skills-creation/lesson-4-2-cover.webp",
        imageAlt: "Reports and Proposals",
        title: "Reports and Proposals",
        subtitle: "Professional documents in half the time. AI structures, you strategize.",
      },
    },

    // ==========================================================================
    // SECTION 1: Introduction - The Document Time Drain
    // ==========================================================================
    {
      id: "s1-intro",
      type: "text",
      content: {
        title: "The Document Time Drain",
        paragraphs: [
          "Reports. Proposals. Briefings. They're essential for business, but they consume hours.",
          "Organizing scattered information. Structuring arguments logically. Formatting professionally. Writing clearly and concisely.",
          "What if you could skip to the strategic part?",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: Comparison - Manual vs AI
    // ==========================================================================
    {
      id: "s2-comparison",
      type: "text",
      content: {
        title: "Creating Reports: Then vs. Now",
        paragraphs: [
          "The difference in time and quality between manual and AI-assisted report creation is dramatic. Understanding this contrast helps you appreciate where AI delivers the most value.",
          "The traditional manual process consumes five to ten hours. You gather data from multiple sources, spending hours hunting through spreadsheets, emails, and databases. You figure out the structure on your own, often second-guessing your organization choices. You write every section from scratch, staring at blank pages. You format and reformat as requirements change or stakeholders request adjustments.",
          "The AI-assisted approach compresses this into one to two hours. You provide data and goals to AI upfront, giving it the raw materials it needs. AI suggests structure instantly based on your audience and purpose. AI drafts each section from your notes and data, giving you a foundation to build upon. You review, refine, and add your expertise—the strategic judgment and contextual knowledge that only you possess. The time savings are substantial, but the quality improvements matter even more.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: The AI Report Framework
    // ==========================================================================
    {
      id: "highlight-framework",
      type: "highlightCard",
      content: {
        heading: "The AI Report Framework",
        insights: [
          "1. Define Your Brief: Tell AI who this is for, what decision will they make, what data do you have",
          "2. Get Structure Suggestions: Ask AI to suggest an outline for your report",
          "3. Section by Section: Work through each section with AI drafting from your data",
          "4. Executive Summary Last: Once all sections are done, have AI create the executive summary",
        ],
      },
    },

    // ==========================================================================
    // SECTION 3: Report Creation Workflow
    // ==========================================================================
    {
      id: "s4-workflow",
      type: "textWithImage",
      content: {
        title: "Report Creation Workflow",
        paragraphs: [
          "Follow this five-step process for every report or proposal.",
          "Gather your data and notes first. Then let AI suggest the document organization. Work through sections systematically, adding your expertise at each step. Finally, generate the executive summary.",
        ],
        image: {
          src: "/images/courses/lessons/abstract-blue.jpg",
          alt: "Workflow diagram showing report creation process",
          caption: "Define -> Structure -> Draft -> Refine -> Summarize",
        },
      },
    },

    // ==========================================================================
    // QUIZ 1
    // ==========================================================================
    {
      id: "q1-workflow",
      type: "quiz",
      content: {
        quiz: {
          question: "When should you create the executive summary?",
          options: [
            "First, before writing anything else",
            "Last, after all sections are complete",
            "In the middle of the writing process",
            "Never, AI generates it automatically",
          ],
          correctAnswer: 1,
        },
        context: "The executive summary should pull key points from completed sections.",
      },
    },

    // ==========================================================================
    // SECTION 4: Real Example - Monthly Report
    // ==========================================================================
    {
      id: "s5-example-intro",
      type: "text",
      content: {
        title: "Real Example: Monthly Performance Report",
        paragraphs: [
          "You need to create a monthly marketing performance report for executives.",
          "The key is giving AI the right context about who will read this and what decisions they'll make.",
        ],
      },
    },

    // ==========================================================================
    // QUICK PROMPT: Report Prompt Template
    // ==========================================================================
    {
      id: "s6-report-prompt",
      type: "quickPrompt",
      content: {
        heading: "Your Brief to AI",
        description: "Use this structured prompt for performance reports:",
        promptText:
          "Document Type: Monthly marketing performance report\n\nAudience: CEO and CFO - they care about ROI, not metrics for metrics' sake\n\nDecision Context: They will decide on next quarter's budget allocation based on this report\n\nKey Data: [Revenue: $450K (target $400K), CAC: $120 (target $100), LTV:CAC ratio: 4.2:1 (target 3:1), Top channel: Email (38% of revenue)]\n\nStructure Needed: Executive summary, Key metrics, Channel performance, Budget recommendations\n\nTone: Professional, data-driven, actionable insights over raw data",
        placeholders: [
          "Revenue numbers",
          "Key metrics",
          "Top performing channel",
          "Target comparisons",
        ],
      },
    },

    // ==========================================================================
    // SECTION 5: Channel Performance Evolution
    // ==========================================================================
    {
      id: "s7-evolution",
      type: "text",
      content: {
        title: "Your Strategic Edits Made the Difference",
        paragraphs: [
          "AI accurately presented the data. But you added strategic insights that transformed raw numbers into actionable intelligence. These human contributions are what make the report valuable to decision-makers.",
          'You grouped metrics into "above target" and "needs work" categories, making the data immediately actionable rather than just informative. You added comparisons to targets and last month\'s performance, providing the context that executives need to understand trends. You highlighted budget recommendations based on actual performance, connecting data to decisions.',
          "You added context that AI couldn't know: the email success came from the new welcome sequence your team launched last month. You simplified by removing redundant metrics that obscured the key insights. And you added \"what's next\" for each channel, giving stakeholders a clear picture of upcoming priorities and planned improvements.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Proposal Components
    // ==========================================================================
    {
      id: "highlight-proposals",
      type: "highlightCard",
      content: {
        heading: "Winning Proposal Components",
        insights: [
          "Executive Summary: One-page overview of the problem, solution, and value proposition",
          "Problem Statement: Show you understand their pain points better than they do",
          "Proposed Solution: Clear description of what you'll deliver and how",
          "Timeline: Realistic project phases with milestones and deliverables",
          "Investment: Transparent pricing with optional tiers and ROI projections",
          "Social Proof: Relevant case studies and testimonials that build credibility",
        ],
      },
    },

    // ==========================================================================
    // CHECKPOINT
    // ==========================================================================
    {
      id: "c1-checkpoint",
      type: "checkpoint",
      content: {
        question:
          "Which proposal component requires the deepest understanding of the client's situation?",
        options: [
          "Timeline and milestones",
          "Problem statement",
          "Pricing and investment options",
          "Your company background",
        ],
        correctAnswer: 1,
        hint: "This component shows you truly understand their challenges.",
      },
    },

    // ==========================================================================
    // QUICK PROMPT: Proposal Prompt Template
    // ==========================================================================
    {
      id: "s10-proposal-prompt",
      type: "quickPrompt",
      content: {
        heading: "Project Proposal Brief",
        description: "Use this structure for project proposals:",
        promptText:
          "Client: [Type of company, size, target customers]\n\nProblem: [Their current situation and pain points - be specific]\n\nYour Solution: [What you'll provide, how it works, key features]\n\nTimeline: [Project phases with duration for each]\n\nInvestment: [Pricing, payment terms, ROI projection]\n\nTone: [Confident but not arrogant, professional but approachable]",
        placeholders: [
          "Client details",
          "Problem description",
          "Solution outline",
          "Timeline",
          "Pricing",
        ],
      },
    },

    // ==========================================================================
    // SECTION 6: Problem Statement - Weak vs Strong
    // ==========================================================================
    {
      id: "s11-problem-statement",
      type: "text",
      content: {
        title: "Problem Statement: Weak vs. Strong",
        paragraphs: [
          "A strong problem statement shows you understand the client's situation better than they do. It creates urgency through specificity and demonstrates that you've done your homework.",
          "A weak problem statement sounds like this: \"Your website needs improvement to stay competitive in today's market.\" This approach is vague, creating no urgency. It offers no quantified impact, so the client can't understand what's at stake. It could apply to anyone, demonstrating no specific knowledge of their situation.",
          'A strong problem statement transforms the conversation: "Your current website converts at 1.2%, less than half the industry average. At an average deal size of $50K, this means you\'re losing an estimated $180K monthly in potential revenue." This version uses specific metrics that ground the problem in reality. It quantifies the impact in dollars, making the stakes concrete and compelling. It demonstrates real insight into their business, showing you understand their situation deeply.',
        ],
      },
    },

    // ==========================================================================
    // SECTION 7: Executive Summary Secret
    // ==========================================================================
    {
      id: "s12-exec-summary",
      type: "text",
      content: {
        title: "The Executive Summary Secret",
        paragraphs: [
          "Executives read the executive summary. Sometimes, that's ALL they read.",
          "AI can generate your executive summary AFTER you've written all sections. It will pull the most important metrics, key insights from each section, and your top recommendations.",
          "But YOU need to review and refine. The executive summary should tell a story that makes executives want to read the details.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Executive Summary Must-Haves
    // ==========================================================================
    {
      id: "highlight-exec-summary",
      type: "highlightCard",
      content: {
        heading: "Executive Summary Must-Haves",
        insights: [
          "The Hook: One sentence capturing why this document matters now",
          "Key Numbers: 3-5 metrics that tell the story at a glance",
          "Main Insights: What did you learn? What surprised you?",
          "Recommendations: What should we do? Be specific and actionable",
          "Next Steps: Who does what by when? Clear ownership",
          "One Page Max: Respect their time. If they want details, they'll read on.",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 2
    // ==========================================================================
    {
      id: "q2-exec-summary",
      type: "quiz",
      content: {
        quiz: {
          question: "What's the most important rule for executive summaries?",
          options: [
            "Include every detail from the full document",
            "Keep it to one page maximum",
            "Write it first, before anything else",
            "Use formal business language throughout",
          ],
          correctAnswer: 1,
        },
        context: "Executive summaries must be concise. One page max forces focus on what matters.",
      },
    },

    // ==========================================================================
    // SECTION 8: Data Visualization
    // ==========================================================================
    {
      id: "s14-visualization",
      type: "textWithImage",
      content: {
        title: "AI for Data Visualization",
        paragraphs: [
          "AI can help you determine the best ways to present your data visually.",
          "Ask AI what chart types would work best for your data and why. Share your raw data or summary, request chart type recommendations, ask for explanations of WHY this chart works, and use your charting tool with AI's suggestions.",
        ],
        image: {
          src: "/images/courses/lessons/abstract-data-flow.jpg",
          alt: "Data visualization recommendations",
          caption: "AI suggests. You validate and implement.",
        },
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Common Mistakes
    // ==========================================================================
    {
      id: "highlight-mistakes",
      type: "highlightCard",
      content: {
        heading: "Business Document Mistakes to Avoid",
        insights: [
          'Trusting AI Numbers: AI can invent numbers. Always use your actual data, not AI\'s "examples"',
          'Generic Recommendations: "Improve marketing" is useless. Be specific: "Increase email budget by 20%"',
          "Wrong Audience Tone: CEO-level documents need different language than team updates",
          "Missing Context: Data without explanation is just noise. Explain WHY metrics matter",
          "Unrealistic Timelines: AI may suggest aggressive deadlines. Adjust based on real-world constraints",
          'No Next Steps: Great analysis is useless without clear actions. Always include "who does what"',
        ],
      },
    },

    // ==========================================================================
    // SECTION 9: Writing Recommendations
    // ==========================================================================
    {
      id: "s17-recommendations",
      type: "text",
      content: {
        title: "Writing Actionable Recommendations",
        paragraphs: [
          "The difference between a report that sits on a shelf and one that drives action is the quality of recommendations.",
          "Vague recommendations like 'we should improve our marketing efforts' are useless.",
          "Specific recommendations like 'Increase email marketing budget by 25% ($15K/month) to expand the successful welcome sequence. Expected ROI: 3.5x based on current performance' are actionable.",
          "Always include: Specific action with budget, Clear owner, Specific timeline, Measurable success criteria.",
        ],
      },
    },

    // ==========================================================================
    // SECTION 10: Time Savings
    // ==========================================================================
    {
      id: "s19-savings",
      type: "text",
      content: {
        title: "Document Creation Time Savings",
        paragraphs: [
          "The collaboration approach delivers dramatic time savings while maintaining or improving quality.",
          "First drafts are 70% faster with AI. Revisions take 50% less time. Formatting saves 80% of effort.",
          "That's time you can reinvest in strategic thinking and business development.",
        ],
      },
    },

    // ==========================================================================
    // TOOL REFERENCE
    // ==========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "claude",
        action: "Create professional business documents",
        task: "Structure reports and proposals from your data and goals",
        feature: "Long-context window for comprehensive document analysis",
        tip: "Provide all relevant data upfront and ask Claude to suggest the document structure first",
      },
    },

    // ==========================================================================
    // ACTIONABLE TASK
    // ==========================================================================
    {
      id: "main-challenge",
      type: "actionableTask",
      content: {
        title: "Create a Professional Document",
        purpose:
          "Apply the AI report framework to create a real business document with AI assistance.",
        instructions: [
          "Pick ONE document type: a performance report (monthly/quarterly), a project proposal, or a budget recommendation",
          "Use AI to suggest structure based on your audience and goal",
          "Draft sections from your notes/data with AI assistance",
          "Generate an executive summary from your completed sections",
        ],
        deliverable:
          "A complete professional document with AI-generated structure and human-added strategic insights",
        estimatedTime: "20-30 minutes",
        successCriteria: [
          "You used the AI report framework (brief, structure, sections, exec summary)",
          "AI drafted from YOUR actual data (not AI-generated examples)",
          "You added strategic insights AI couldn't know (context, priorities, judgment)",
          "Your executive summary tells a clear story in one page or less",
        ],
      },
    },
  ] as LessonSection[],
};
