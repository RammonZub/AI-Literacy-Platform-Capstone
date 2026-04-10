/**
 * Lesson 6.8: Problem-Solving and Brainstorming
 *
 * CHAPTER: 2 - Professional Applications
 * LESSON: 3 of 5 - Creative Problem-Solving
 *
 * DURATION: 12 minutes (practical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach problem-solving and brainstorming workflows
 *
 * KEY RESPONSIBILITIES:
 * - Show Claude's creative thinking capabilities
 * - Provide structured problem-solving patterns
 * - Demonstrate brainstorming techniques
 */

import type { Lesson } from "@/types/content";

export const lesson_6_8: Lesson = {
  id: "lesson-6-8",
  chapterId: "ch6-2-applications",
  moduleId: "06-tools-claude",
  title: "Problem-Solving and Brainstorming",
  description: "Collaborative problem-solving and creative brainstorming with Claude",
  order: 8,
  estimatedMinutes: 12,
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
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-8-cover.webp",
        imageAlt: "Creative problem-solving and brainstorming",
        title: "Problem-Solving and Brainstorming",
        subtitle: "Collaborative problem-solving and creative brainstorming with Claude",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Claude as Thinking Partner",
        paragraphs: [
          "One of Claude's most valuable capabilities is helping you think through problems—not by solving them for you, but by being a thought partner who asks good questions, suggests alternatives, and helps you see angles you might miss.",
          "",
          "This is where conversational AI shines: the back-and-forth of collaborative problem-solving.",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Problem-Solving Patterns",
        paragraphs: [
          "Claude excels as a problem-solving partner when you use the right patterns to engage its capabilities. The key is framing your request in ways that invite Claude to think alongside you rather than just provide answers.",
          "",
          "The 'unsticking' pattern works when you're blocked on a problem. Tell Claude: 'I'm stuck on [problem]. Here's what I've tried. Can you help me think about what I'm missing?' This framing acknowledges your efforts while inviting fresh perspectives. Claude can often identify assumptions you're making or approaches you haven't considered.",
          "",
          "The alternative approaches pattern helps expand your thinking. Share your plan and ask: 'What are other ways to approach this that I haven't considered?' This invitation often yields surprising suggestions that might not have occurred to you, especially when you've been focused on one approach for too long.",
          "",
          "Risk identification is valuable before making important decisions. Ask Claude: 'Help me think through what could go wrong and how to prepare.' This preemptive analysis can save you from costly mistakes by surfacing risks you might have overlooked in your optimism about a course of action.",
          "",
          "Trade-off analysis helps when comparing options. A prompt like 'Help me understand the pros and cons of [option A] vs [option B] for [specific context]' produces more nuanced analysis than simply asking which option is better. Claude can identify dimensions of comparison you hadn't considered.",
          "",
          "Finally, framework application lets you leverage Claude's knowledge of problem-solving methodologies. Ask 'How might I apply [framework like First Principles, 5 Whys] to this problem?' and Claude will guide you through using that specific approach systematically.",
        ],
      },
    },
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "The Brainstorming Workflow",
        insights: [
          "Claude doesn't run out of ideas and can suggest directions you wouldn't think of",
          "Describe the goal and constraints, then ask for diverse approaches",
          "Explore interesting directions together, then refine and prioritize",
        ],
      },
    },
    {
      id: "section-4",
      type: "scenarioCard",
      content: {
        title: "Real-World Scenario",
        situation:
          "Aisha is a startup founder whose customer acquisition cost has doubled in 3 months. She's tried adjusting ad targeting and creatives, but nothing has worked.",
        challenge:
          "She needs to find the root cause quickly or she'll run out of runway in 6 weeks.",
        outcome:
          "Aisha described her situation to Claude and asked for alternative approaches. Claude suggested 8 different angles—from landing page issues to seasonal trends to competitor changes. One suggestion (checking for ad fatigue in specific demographics) led Aisha to discover her competitor had launched a major campaign targeting her best segment.",
      },
    },
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Structured Problem-Solving",
        paragraphs: [
          "**For complex problems**: 'I need to solve [problem]. Let's break this down systematically. Can you help me identify the key components and how they relate?'",
          "",
          "**For decisions**: 'I'm deciding between [options]. Help me create a decision framework: what criteria matter, how to weigh them, and what information I still need.'",
          "",
          "**For planning**: 'Here's my goal. Help me think through the steps to get there, what could go wrong, and how to prepare.'",
          "",
          "**For innovation**: 'I want to improve [process/product/situation]. What are unconventional approaches I might not be considering?'",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-8-inline-1.webp",
        imageAlt: "Strategic planning and decision making",
      },
    },
    {
      id: "section-6",
      type: "quickPrompt",
      content: {
        heading: "Practice: Alternative Approaches",
        description:
          "Think of a problem or decision you're facing and explore different approaches.",
        promptText:
          "Here's my situation: [describe]. Help me think through 3-4 different approaches to this, including some I might not have considered. For each, explain the thinking.",
      },
    },
    {
      id: "section-7",
      type: "toolReference",
      content: {
        tool: "claude",
        action: "For brainstorming exercises",
        task: "Open Claude and explore alternative approaches to a real problem you are facing",
        feature: "New conversation",
        tip: "Ask Claude to play devil's advocate to stress-test your ideas before committing",
      },
    },
    // ===========================================================================
    // SECTION 8: Your Turn - Actionable Task at END
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Brainstorm Real Solutions",
        purpose:
          "Apply Claude's brainstorming capabilities to a real problem you're facing, discovering approaches you might not have considered.",
        instructions: [
          "Think of a real problem you're currently stuck on",
          "Describe it to Claude with full context, then ask: 'What are 5 approaches I haven't thought of?'",
          "Pick the most surprising suggestion and explore it further",
          "You don't have to use the solution - just stretch your thinking",
        ],
        deliverable:
          "A list of 5 unconventional approaches to a real problem, with one explored in depth",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "Here's a problem I'm stuck on: [describe fully]. What are 5 approaches I might not have considered? Include some unconventional options.",
        successCriteria: [
          "You've described a real problem with full context",
          "You received 5 different approaches from Claude",
          "You explored at least one surprising suggestion in depth",
          "Your thinking about the problem has expanded",
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
        question: "How should you approach Claude for problem-solving?",
        options: [
          "Expect Claude to solve all problems for you",
          "Describe problems fully, invite alternative perspectives, and explore collaboratively",
          "Only ask Claude simple yes/no questions",
          "Never ask Claude about problems, only facts",
        ],
        correctAnswer: 1,
        hint: 'Review "Problem-Solving Patterns" and "The Brainstorming Workflow" sections if needed.',
      },
    },
    {
      id: "section-10",
      type: "completion",
      content: {
        title: "Problem-Solving Skills Ready",
        description:
          "You now have practical patterns for using Claude as a thinking partner. The key: describe problems fully, invite alternative perspectives, and explore ideas collaboratively rather than expecting Claude to solve things for you.",
        xpReward: 100,
        buttonText: "Complete Problem-Solving Skills",
      },
    },
  ],
};
