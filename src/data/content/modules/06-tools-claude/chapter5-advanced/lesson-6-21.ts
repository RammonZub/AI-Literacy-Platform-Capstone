/**
 * Lesson 6.21: Extended Thinking & Deep Reasoning
 *
 * CHAPTER: 5 - Advanced Features Deep Dive
 * LESSON: 1 of 4 - Mastering Claude's Extended Thinking
 *
 * DURATION: 14 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Master Extended Thinking for complex analysis and decision-making
 *
 * KEY RESPONSIBILITIES:
 * - Explain Extended Thinking and when to use it
 * - Demonstrate reasoning step-by-step
 * - Show complex problem-solving workflows
 */

import type { Lesson } from "@/types/content";

export const lesson_6_21: Lesson = {
  id: "lesson-6-21",
  chapterId: "ch6-5-advanced",
  moduleId: "06-tools-claude",
  lessonCategory: "tutorial",
  title: "Extended Thinking & Deep Reasoning",
  description:
    "Unlock Claude's most powerful reasoning capability for complex analysis and decisions",
  order: 21,
  estimatedMinutes: 14,
  xpReward: 100,
  format: "article",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-21-cover.webp",
        imageAlt: "Extended thinking and deep reasoning visualization",
        title: "Extended Thinking & Deep Reasoning",
        subtitle:
          "Unlock Claude's most powerful reasoning capability for complex analysis and decisions",
      },
    },
    // ===========================================================================
    // SECTION 1: Cover Introduction
    // ===========================================================================
    {
      id: "section-cover",
      type: "textWithImage",
      content: {
        title: "Extended Thinking & Deep Reasoning",
        paragraphs: [
          "Some problems deserve more than quick answers. Extended Thinking gives Claude time to reason through complex problems step-by-step, showing you the thinking process along the way.",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-21-inline-1.webp",
        imageAlt: "Deep thinking and complex reasoning visualization",
      },
    },
    // ===========================================================================
    // SECTION 2: What is Extended Thinking?
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "What is Extended Thinking?",
        paragraphs: [
          "Extended Thinking is Claude's special mode for complex reasoning. When activated, Claude takes more time to work through problems systematically, showing you its reasoning process.",
          "",
          "Think of it like the difference between a quick answer in a meeting versus taking time to write a thorough analysis. Both have their place—Extended Thinking is for when you need the thorough analysis.",
          "",
          "Unlike standard responses, Extended Thinking shows Claude's step-by-step reasoning. You see how Claude breaks down problems, considers alternatives, and reaches conclusions.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: When to Use Extended Thinking
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "When to Activate Extended Thinking",
        paragraphs: [
          "Extended Thinking isn't needed for every task. Using it strategically means understanding when the extra processing time will yield significantly better results versus when a standard response is sufficient.",
          "",
          "Strategic decisions are prime candidates for Extended Thinking. When you're facing major choices with significant consequences—career decisions, business pivots, major investments—the extra reasoning time helps Claude consider more angles and provide more nuanced guidance. The stakes justify the wait.",
          "",
          "Complex analysis involving multiple factors with competing considerations benefits enormously from Extended Thinking. When a problem has many variables that interact in complicated ways, Claude's extended reasoning can trace through those interactions more carefully than a standard response would allow.",
          "",
          "Detailed planning tasks like project plans, implementation roadmaps, and rollout strategies require thinking through sequences and dependencies. Extended Thinking helps Claude produce more comprehensive and coherent plans that account for edge cases and potential obstacles.",
          "",
          "Difficult trade-offs where there's no clear right answer deserve Extended Thinking. When you're choosing between options that each have genuine merits and drawbacks, Claude's extended reasoning can help illuminate the considerations more fully and provide a more balanced analysis.",
          "",
          "Creative problem-solving often requires Extended Thinking to break through on tough challenges. The extra processing time allows Claude to explore more creative connections and unconventional approaches that might not emerge in a standard response.",
          "",
          "Important communications like high-stakes emails, proposals, and presentations benefit from the additional care Extended Thinking provides. When the quality of your words really matters, Claude's extended reasoning helps ensure those words are precisely right.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: The Trade-off
    // ===========================================================================
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "The Extended Thinking Trade-off",
        insights: [
          "More time = deeper reasoning and better analysis",
          "Response takes longer (sometimes 30-60+ seconds)",
          "Best for important decisions, not quick questions",
          "Shows reasoning process—transparency you can verify",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: How to Activate
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "How to Activate Extended Thinking",
        paragraphs: [
          "Look for the Extended Thinking toggle in Claude's interface. When enabled, Claude will spend more time reasoning before responding.",
          "",
          "**Best practice**: Start your prompt by explaining this is an important decision or complex problem. Claude will use Extended Thinking time effectively.",
          "",
          "**Example prompt**: 'I need to make a strategic decision about [situation]. This is important, so please use extended thinking to work through this carefully.'",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Seeing the Reasoning
    // ===========================================================================
    {
      id: "section-6",
      type: "textWithImage",
      content: {
        title: "Following Claude's Reasoning",
        paragraphs: [
          "With Extended Thinking, you see Claude's thought process. This transparency lets you:",
          "",
          "- **Verify the logic**: Check if reasoning makes sense",
          "- **Catch assumptions**: See what Claude assumes vs. knows",
          "- **Learn patterns**: Understand how to think about similar problems",
          "- **Build trust**: Confidence through visible reasoning",
          "",
          "If the reasoning seems off, you can point out specific concerns for Claude to reconsider.",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-21-inline-2.webp",
        imageAlt: "Analytical reasoning and decision making process",
      },
    },
    // ===========================================================================
    // SECTION 6b: Comparison Table
    // ===========================================================================
    {
      id: "section-6b",
      type: "comparisonTable",
      content: {
        title: "Standard vs Extended Thinking",
        intro: "Understanding when to use each mode helps you get the best results.",
        columns: [{ name: "Feature" }, { name: "Standard Mode" }, { name: "Extended Thinking" }],
        rows: [
          { feature: "Response Time", values: ["Seconds", "30-60+ seconds"] },
          { feature: "Reasoning Depth", values: ["Direct answer", "Step-by-step analysis"] },
          { feature: "Transparency", values: ["Result only", "Visible reasoning chain"] },
          {
            feature: "Best For",
            values: ["Quick questions, simple tasks", "Complex decisions, multi-factor analysis"],
          },
          {
            feature: "Verification",
            values: ["Trust the output", "Can verify each reasoning step"],
          },
          { feature: "Use Case", values: ['"What is X?"', '"Help me decide between X and Y"'] },
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Complex Problem Example
    // ===========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Extended Thinking in Action",
        paragraphs: [
          "**Scenario**: You're considering whether to take a new job offer that pays more but requires relocation.",
          "",
          "**Without Extended Thinking**: Claude might give you a list of pros and cons quickly.",
          "",
          "**With Extended Thinking**: Claude will methodically work through: your stated priorities, financial implications, career trajectory considerations, family impact, timing factors, alternatives, and ultimately a recommendation with clear reasoning.",
          "",
          "The difference isn't just more content—it's the visible reasoning chain that helps you evaluate the advice.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Tool Reference
    // ===========================================================================
    {
      id: "section-tool-reference",
      type: "toolReference",
      content: {
        tool: "claude",
        action: "Try Extended Thinking",
        task: "Access Extended Thinking from the toggle in Claude's interface when you need deeper reasoning for complex problems.",
        feature: "Extended Thinking mode",
        tip: "Use for strategic decisions and complex analysis - read through the reasoning to verify logic",
      },
    },
    // ===========================================================================
    // SECTION 9: Quick Prompt
    // ===========================================================================
    {
      id: "section-9",
      type: "quickPrompt",
      content: {
        heading: "Try Extended Thinking",
        description:
          "Activate Extended Thinking and ask Claude to work through a complex decision you're facing.",
        promptText:
          "With Extended Thinking on, ask: 'Help me think through [a complex decision you're facing]. Work through this step-by-step, showing your reasoning.'",
      },
    },
    // ===========================================================================
    // SECTION 10: Your Turn - Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Use Extended Thinking for a Real Decision",
        purpose:
          "Experience the power of Extended Thinking by applying it to a genuine complex decision.",
        instructions: [
          "Identify a complex decision or problem you're currently facing",
          "Enable Extended Thinking in Claude",
          "Present the problem with full context and ask Claude to reason through it step-by-step",
          "Review Claude's reasoning chain - note where you agree or disagree",
        ],
        deliverable:
          "Notes from an Extended Thinking session including Claude's reasoning steps and your assessment",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "With Extended Thinking enabled: I need help thinking through [complex decision]. Here's the context: [details]. Please work through this systematically, showing your reasoning at each step.",
        successCriteria: [
          "You used Extended Thinking for a real decision",
          "Claude's response included visible step-by-step reasoning",
          "You evaluated the reasoning chain critically",
          "You understand when Extended Thinking adds value",
        ],
      },
    },
    // ===========================================================================
    // SECTION 11: End-of-Lesson Checkpoint
    // ===========================================================================
    {
      id: "section-quiz",
      type: "checkpoint",
      content: {
        question: "When should you use Extended Thinking?",
        options: [
          "For every single question you ask Claude",
          "For complex analysis, multi-step reasoning, and important decisions that benefit from thorough thinking",
          "Only for simple questions",
          "Never - it is not useful",
        ],
        correctAnswer: 1,
        hint: 'Review "When to Use Extended Thinking" section if needed.',
      },
    },
    // ===========================================================================
    // SECTION 12: Completion
    // ===========================================================================
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Extended Thinking Unlocked",
        description:
          "You now understand when and how to use Extended Thinking for complex analysis. This feature transforms Claude from a quick-answer assistant into a thorough reasoning partner for your most important decisions.",
        xpReward: 100,
        buttonText: "Complete Extended Thinking",
      },
    },
  ],
};
