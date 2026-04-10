/**
 * Lesson 6.10: Professional Workflow Integration
 *
 * CHAPTER: 2 - Professional Applications
 * LESSON: 5 of 5 - End-to-End Workflows
 *
 * DURATION: 15 minutes (practical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Demonstrate complete professional workflows
 *
 * KEY RESPONSIBILITIES:
 * - Show realistic professional scenarios
 * - Provide complete workflow examples
 * - Reinforce all chapter concepts
 */

import type { Lesson } from "@/types/content";

export const lesson_6_10: Lesson = {
  id: "lesson-6-10",
  chapterId: "ch6-2-applications",
  moduleId: "06-tools-claude",
  title: "Professional Workflow Integration",
  description: "Complete, realistic workflows that integrate Claude into professional work",
  order: 10,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image at START
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-10-cover.webp",
        imageAlt: "Professional planning and strategy",
        title: "Professional Workflow Integration",
        subtitle: "Complete, realistic workflows that integrate Claude into professional work",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "From Individual Tasks to Integrated Workflows",
        paragraphs: [
          "So far, you've learned individual capabilities—writing, analysis, problem-solving, learning. The real power comes from integrating these into complete workflows that mirror how you actually work.",
          "",
          "Professional workflows with Claude aren't about replacing your expertise—they're about amplifying it at every step.",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Complete Workflow: Client Proposal",
        paragraphs: [
          "Let's walk through a complete professional workflow: creating a client proposal from start to finish. This example demonstrates how Claude can help at every stage of a complex, multi-step task.",
          "",
          "Phase 1 is understanding. Start by asking Claude: 'Help me understand what [client type] typically cares about in proposals. What should I learn about their specific situation?' This phase establishes the context you need before diving into content creation.",
          "",
          "Phase 2 is research synthesis. Once you've gathered relevant information about the client and their needs, paste that material and ask: 'What are the key themes and what matters most to this client?' Claude can help you identify the most important points to emphasize.",
          "",
          "Phase 3 is outlining. Ask Claude: 'Help me structure a proposal that addresses their priorities. Include sections I might not think of.' Claude can suggest a structure that covers all the bases, including elements you might have overlooked.",
          "",
          "Phase 4 is drafting the actual content. Work section by section with prompts like: 'Draft the [approach] section. Tone should be [specific]. Emphasize [value propositions].' Breaking the drafting into focused sections produces better results than asking for the entire proposal at once.",
          "",
          "Phase 5 is refinement. Share your draft and ask: 'What's weak, unclear, or missing? Help me improve it.' Claude can provide critical feedback that strengthens your work before the client sees it.",
          "",
          "Phase 6 is preparing for questions. Ask: 'What questions or objections might the client have? Help me prepare responses.' This anticipatory work can make the difference between a proposal that gets accepted and one that stalls in deliberation.",
        ],
      },
    },
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "Workflow Integration Principles",
        insights: [
          "Effective integration means using Claude at multiple points in your workflow",
          "Early: exploration and understanding. Middle: drafting and iteration. Late: refinement and quality checking",
          "Each touch point amplifies your work",
        ],
      },
    },
    {
      id: "section-4",
      type: "scenarioCard",
      content: {
        title: "Real-World Scenario",
        situation:
          "Elena is a consultant who needs to deliver a 40-page market analysis report for a healthcare client. She has 3 days, scattered notes from 15 interviews, and access to industry data.",
        challenge:
          "The report needs to be professional, data-driven, and tell a compelling story about market opportunities.",
        outcome:
          "Elena used Claude at every stage: synthesizing interview notes into themes (Day 1 morning), outlining the report structure (Day 1 afternoon), drafting each section (Day 2), and refining for clarity and impact (Day 3 morning). She delivered early and the client called it 'the clearest analysis we've ever received.'",
      },
    },
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Your Integrated Workflow",
        paragraphs: [
          "Think of a recurring professional workflow you have. It might be:",
          "",
          "- Creating reports or presentations",
          "- Planning projects or initiatives",
          "- Communicating with stakeholders",
          "- Analyzing and presenting data",
          "",
          "Map out how Claude could help at each stage: understanding, drafting, refining, checking quality. Then try it end-to-end on your next real project.",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-10-inline-1.webp",
        imageAlt: "Integrated professional workflow and productivity",
      },
    },
    {
      id: "section-6",
      type: "quickPrompt",
      content: {
        heading: "Practice: End-to-End Workflow",
        description:
          "Choose a real work project coming up and run a complete workflow with Claude.",
        promptText:
          "I'm working on [project type]. Here's what I know so far: [context]. Let's start by you helping me understand what questions I should be asking and what approach makes sense. Then we'll work through it together.",
      },
    },
    {
      id: "section-7",
      type: "toolReference",
      content: {
        tool: "claude",
        action: "For workflow integration",
        task: "Open Claude and run a complete end-to-end workflow for your next professional project",
        feature: "New conversation",
        tip: "Keep a single conversation for the entire project—Claude remembers context and builds on previous discussions",
      },
    },
    // ===========================================================================
    // SECTION 8: Your Turn - Actionable Task at END
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Map Your Workflow",
        purpose: "Design a complete Claude-integrated workflow for a recurring professional task.",
        instructions: [
          "Identify a recurring workflow in your job (reports, client work, planning)",
          "Map out where Claude could help at each stage: understanding, drafting, refining",
          "Actually run ONE complete workflow with Claude this week",
          "Track time saved and quality improvements for your own reference",
        ],
        deliverable:
          "A workflow map showing Claude integration points and notes from running one complete workflow",
        estimatedTime: "15 minutes",
        starterPrompt:
          "I'm working on [project type]. Here's what I know so far: [context]. Let's start by you helping me understand what questions I should be asking and what approach makes sense. Then we'll work through it together.",
        successCriteria: [
          "You've mapped a recurring workflow with Claude integration points",
          "You identified where Claude helps at understanding, drafting, and refining stages",
          "You completed one full workflow with Claude's assistance",
          "You tracked and noted time/quality improvements",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: End-of-Lesson Checkpoint
    // ===========================================================================
    {
      id: "section-quiz",
      type: "checkpoint",
      content: {
        question: "What does effective workflow integration with Claude look like?",
        options: [
          "Using Claude only for final edits",
          "Using Claude at multiple points: early exploration, middle drafting, late refinement",
          "Only using Claude for research",
          "Replacing all human judgment with Claude decisions",
        ],
        correctAnswer: 1,
        hint: 'Review "Workflow Integration Principles" section if needed.',
      },
    },
    {
      id: "section-10",
      type: "completion",
      content: {
        title: "Chapter 2 Complete: Professional Applications",
        description:
          "You've learned how to integrate Claude into real professional work across writing, analysis, problem-solving, learning, and complete workflows. You now have practical patterns for making Claude a genuine productivity amplifier in your day-to-day work.",
        xpReward: 100,
        buttonText: "Complete Professional Applications",
      },
    },
  ],
};
