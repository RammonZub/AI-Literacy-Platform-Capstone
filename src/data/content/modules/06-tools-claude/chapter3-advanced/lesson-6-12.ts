/**
 * Lesson 6.12: Advanced Prompting Techniques
 *
 * CHAPTER: 3 - Advanced Features
 * LESSON: 2 of 5 - Sophisticated Prompting
 *
 * DURATION: 15 minutes (advanced practical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach advanced prompting patterns for exceptional results
 *
 * KEY RESPONSIBILITIES:
 * - Show sophisticated prompting techniques
 * - Provide patterns for complex scenarios
 * - Demonstrate prompt refinement skills
 */

import type { Lesson } from "@/types/content";

export const lesson_6_12: Lesson = {
  id: "lesson-6-12",
  chapterId: "ch6-3-advanced",
  moduleId: "06-tools-claude",
  title: "Advanced Prompting Techniques",
  description: "Sophisticated prompting patterns for exceptional Claude results",
  order: 12,
  estimatedMinutes: 15,
  xpReward: 100,
  lessonCategory: "tutorial",
  format: "article",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-12-cover.webp",
        imageAlt: "Brain thinking and creative thought process",
        title: "Advanced Prompting Techniques",
        subtitle: "Elevate your prompts from good to exceptional",
      },
    },
    // ===========================================================================
    // SECTION 1: Beyond Basic Prompts
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Beyond Basic Prompts",
        paragraphs: [
          "You've learned context-rich prompting. Advanced techniques build on that foundation to get more nuanced, controlled, and powerful results.",
          "Advanced prompting is about: structuring requests thoughtfully, using prompting patterns strategically, and knowing when to use which technique.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Tool Reference
    // ===========================================================================
    {
      id: "section-tool-reference",
      type: "toolReference",
      content: {
        tool: "claude",
        action: "For this lesson",
        task: "Open Claude and experiment with the advanced prompting patterns below",
        tip: "Try combining multiple techniques for even better results",
      },
    },
    // ===========================================================================
    // SECTION 3: Advanced Prompting Patterns
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Advanced Prompting Patterns",
        paragraphs: [
          "Advanced prompting techniques separate good results from exceptional ones. These patterns build on the context-rich prompting you've already learned, adding structure and specificity that dramatically improve Claude's outputs.",
          "",
          "Role prompting establishes Claude's perspective and expertise level. When you begin with 'Act as [role] with [expertise level]. Your task is...' you give Claude a specific frame for its responses. A prompt asking Claude to act as a senior marketing strategist produces different results than one asking for a junior copywriter's perspective.",
          "",
          "Chain of thought prompting encourages systematic reasoning. Adding 'Think step by step. First, [step 1]. Then, [step 2]...' to your prompt guides Claude to show its work rather than jumping to conclusions. This is particularly valuable for complex analysis or multi-step problems.",
          "",
          "Example-based prompting provides concrete models. When you share 'Here's an example of what I want: [example]. Now create something similar for [new case],' Claude can match the style, structure, and tone of your example while adapting the content to your new situation.",
          "",
          "Constraint setting defines boundaries clearly. Stating 'Here are constraints: [list]. Work within them to...' ensures Claude respects your limitations—whether those are word counts, topics to avoid, or specific requirements you must meet.",
          "",
          "Output format specification prevents misalignment. When you say 'Respond in [specific format] with [required elements],' you get output that fits directly into your workflow without reformatting.",
          "",
          "Finally, iteration invitation sets expectations for the conversation. Telling Claude 'After you respond, I'll ask for refinements. Don't try to be perfect—just give me your best first version' creates space for the collaborative refinement that produces exceptional results.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: The Multi-Turn Pattern
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "The Multi-Turn Pattern",
        insights: [
          "Initial request with context",
          "Claude's response",
          "Your refinement",
          "Claude's iteration",
          "Exceptional results from back-and-forth",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Comparison Table
    // ===========================================================================
    {
      id: "section-comparison",
      type: "comparisonTable",
      content: {
        title: "Basic vs. Advanced Prompting",
        intro: "See the difference that advanced techniques make:",
        columns: [{ name: "Basic Prompt" }, { name: "Advanced Prompt", recommended: true }],
        rows: [
          { feature: "Structure", values: ["Single sentence", "Multi-part with context"] },
          { feature: "Role", values: ["None", "Specific expert role defined"] },
          { feature: "Format", values: ["Unspecified", "Clear output requirements"] },
          { feature: "Constraints", values: ["Implicit", "Explicit boundaries given"] },
          { feature: "Iteration", values: ["One-shot", "Built-in refinement path"] },
        ],
        footer:
          "Advanced prompts take 30 seconds longer to write but save minutes in back-and-forth.",
      },
    },
    // ===========================================================================
    // SECTION 6: Practical Advanced Patterns
    // ===========================================================================
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "Practical Advanced Patterns",
        paragraphs: [
          "**For complex analysis**: 'I need you to analyze [topic]. Start by summarizing your understanding, then explore it from these angles: [list angles].'",
          "**For creative work**: 'Create [content type] for [purpose]. Use [style/tone]. Here are examples I like: [examples].'",
          "**For decisions**: 'Help me decide between [options]. Frame this as [framework]. Consider these factors: [list].'",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-12-inline-1.webp",
        imageAlt: "Design and creative thinking process",
      },
    },
    // ===========================================================================
    // SECTION 7: Quick Prompt
    // ===========================================================================
    {
      id: "section-5",
      type: "quickPrompt",
      content: {
        heading: "Practice: Advanced Prompt",
        description: "Choose a complex task and try an advanced prompting pattern.",
        promptText:
          "I need you to act as [expert role] to help me with [task]. Here's the context: [details]. Here are constraints: [list]. Before you start, ask me at least 2 clarifying questions.",
      },
    },
    // ===========================================================================
    // SECTION 8: Actionable Task (Inline)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Build a Prompt Library",
        purpose:
          "Create your first reusable advanced prompt using multiple prompting techniques from this lesson.",
        instructions: [
          "Identify a task you do weekly that could benefit from better prompting",
          "Write a prompt using at least 3 advanced techniques (role, constraints, format, chain-of-thought)",
          "Test it, refine it based on results, and save the final version",
          "You've just created a reusable prompt for future work",
        ],
        deliverable:
          "A refined, reusable prompt using at least 3 advanced techniques, saved for future use",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "I need you to act as [role] with expertise in [domain]. Help me [task]. Constraints: [list]. Format your response as [format]. Think step by step.",
        successCriteria: [
          "You identified a weekly task that benefits from better prompting",
          "Your prompt uses at least 3 advanced techniques",
          "You tested and refined the prompt based on results",
          "You saved the prompt somewhere accessible for future use",
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
        question: 'Which is an example of "chain of thought" prompting?',
        options: [
          '"Give me the answer"',
          '"Think step by step. First, analyze X. Then, evaluate Y. Finally, recommend Z."',
          '"Just solve it"',
          '"Be creative"',
        ],
        correctAnswer: 1,
        hint: 'Review "Advanced Prompting Patterns" and "The Multi-Turn Pattern" sections if needed.',
      },
    },
    // ===========================================================================
    // SECTION 10: Completion
    // ===========================================================================
    {
      id: "section-7",
      type: "completion",
      content: {
        title: "Advanced Prompting Skills Ready",
        description:
          "You now have sophisticated prompting patterns that transform Claude's capabilities from useful to exceptional. The key: move beyond single prompts into structured, thoughtful conversations.",
        xpReward: 100,
        buttonText: "Complete Advanced Prompting",
      },
    },
  ],
};
