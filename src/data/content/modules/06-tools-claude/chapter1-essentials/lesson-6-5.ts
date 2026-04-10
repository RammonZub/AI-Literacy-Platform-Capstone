/**
 * Lesson 6.5: Your First Claude Workflow
 *
 * CHAPTER: 1 - Claude Essentials
 * LESSON: 5 of 5 - Putting It All Together
 *
 * DURATION: 15 minutes (practical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Guide learners through their first complete Claude workflow
 *
 * KEY RESPONSIBILITIES:
 * - Provide a complete, practical example
 * - Reinforce all chapter concepts
 * - Set up success for advanced lessons
 */

import type { Lesson } from "@/types/content";

export const lesson_6_5: Lesson = {
  id: "lesson-6-5",
  chapterId: "ch6-1-essentials",
  moduleId: "06-tools-claude",
  title: "Your First Claude Workflow",
  description: "Put together everything you've learned in a complete practical workflow",
  order: 5,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-5-cover.webp",
        imageAlt: "Organized workspace and project planning",
        title: "Your First Claude Workflow",
        subtitle: "Time to put everything together in a complete workflow",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Bringing It All Together",
        paragraphs: [
          "You've learned about Claude's approach, how to access it, how to have effective conversations, and how to work within its limitations. Now let's put all of that into practice.",
          "",
          "A 'workflow' with Claude isn't just a single prompt—it's a conversation that builds toward a useful outcome. Let's walk through a complete example.",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Workflow Example: Planning a Presentation",
        paragraphs: [
          "Let's say you need to create a presentation about a complex topic for your team. A complete Claude workflow for this task involves multiple stages of collaboration, each building on the previous one.",
          "",
          "Start by setting context. Tell Claude: 'I need to create a 30-minute presentation for my team about [topic]. They're [describe audience knowledge level]. The goal is [specific outcome].' This opening gives Claude the information it needs to provide relevant help rather than generic advice.",
          "",
          "Next, invite collaboration. Ask Claude: 'What do you think are the most important points to cover? What might I be missing?' This invitation turns Claude from a passive tool into an active thinking partner. Claude might suggest angles you hadn't considered or identify gaps in your planned approach.",
          "",
          "Then iterate on the results. After Claude suggests an outline, refine it based on your specific knowledge. You might say: 'Can you reorganize this to put [concept X] earlier? My team cares more about [Y].' This back-and-forth refinement is where Claude's conversational nature really shines.",
          "",
          "Once you have a solid structure, expand into content. Ask Claude: 'Now help me draft the content for slide 3. Make sure to include [specific requirement].' Work through the presentation section by section, maintaining consistency while developing each part.",
          "",
          "Finally, use Claude for review and preparation. Ask: 'What are potential questions or objections my team might have? Help me prepare responses.' This anticipatory step can dramatically improve your confidence when presenting.",
        ],
      },
    },
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "Workflow Principles",
        insights: [
          "Effective Claude workflows start with context and invite collaboration",
          "Iterate on feedback and end with verification/refinement",
          "Claude isn't a one-shot tool—it's a thought partner",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Real-World Scenario
    // ===========================================================================
    {
      id: "section-4",
      type: "scenarioCard",
      content: {
        title: "Complete Workflow in Action",
        situation:
          "Lisa needs to create a quarterly business review presentation for her executive team. She has data from multiple departments but isn't sure how to structure the narrative.",
        challenge:
          "The presentation is due in 2 days, and she needs to synthesize complex information into a clear, compelling story for executives who have limited time.",
        context: "This is her first executive presentation since joining the company 6 months ago.",
        outcome:
          "Lisa used Claude throughout her workflow: first to brainstorm structure options, then to help synthesize department data into themes, and finally to review her draft for clarity. She delivered a confident presentation that the CEO specifically praised for its clear narrative.",
      },
    },
    // ===========================================================================
    // SECTION 5: Contextual Image - Workflow in Action
    // ===========================================================================
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Iteration is Key",
        paragraphs: [
          "The most effective Claude workflows aren't one-shot requests—they're iterative conversations. Each exchange builds on the previous one, refining ideas and uncovering new possibilities.",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-5-inline-1.webp",
        imageAlt: "Collaborative work and iteration process",
      },
    },
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Practice Workflow",
        paragraphs: [
          "Your turn: Choose a real work task you have this week. It could be:",
          "",
          "- Writing something difficult (email, report, documentation)",
          "- Planning something (project, presentation, meeting)",
          "- Understanding something (complex topic, new technology)",
          "- Improving something (existing document, process, idea)",
          "",
          "Work through it with Claude using the workflow approach: set context, invite collaboration, iterate, refine.",
        ],
      },
    },
    {
      id: "section-7",
      type: "quickPrompt",
      content: {
        heading: "Your Complete Workflow",
        description: "Start a real task with Claude using the workflow approach.",
        promptText:
          "I need to [task]. Here's my role: [role]. Here's my audience: [who]. Here's my goal: [outcome]. Let's start by exploring what the best approach might be.",
      },
    },
    // ===========================================================================
    // SECTION 8: Tool Reference
    // ===========================================================================
    {
      id: "section-8",
      type: "toolReference",
      content: {
        tool: "claude",
        action: "For this exercise",
        task: "Complete a full workflow with Claude for a real task",
        feature: "Extended conversation",
        tip: "Keep the same conversation going—Claude remembers context from earlier exchanges",
      },
    },
    // ===========================================================================
    // SECTION 9: Actionable Task (at END)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Complete a Real Workflow",
        purpose:
          "Apply the complete Claude workflow to a real task from your work, experiencing the power of iterative collaboration.",
        instructions: [
          "Pick ONE task from your list that you'll complete this week",
          "Use the full workflow: set context, invite collaboration, iterate, refine",
          "Go through at least 3 back-and-forth exchanges with Claude",
          "After completion, reflect: How was this different from your usual approach?",
        ],
        deliverable:
          "A completed work task with at least 3 Claude exchanges and brief reflection notes",
        estimatedTime: "10-15 minutes",
        successCriteria: [
          "You completed a real task using Claude's help",
          "You used the full workflow: context, collaboration, iteration, refinement",
          "You had at least 3 back-and-forth exchanges",
          "You reflected on how this approach differed from your usual process",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: End-of-Lesson Checkpoint
    // ===========================================================================
    {
      id: "section-checkpoint",
      type: "checkpoint",
      content: {
        question: "What is the correct sequence for an effective Claude workflow?",
        options: [
          "Ask for output, copy it, move on",
          "Set context, invite collaboration, iterate, refine",
          "Use a single perfect prompt",
          "Only use Claude for final edits",
        ],
        correctAnswer: 1,
        hint: 'Review "Workflow Principles" and "Practice Workflow" sections if needed.',
      },
    },
    {
      id: "section-7",
      type: "completion",
      content: {
        title: "Chapter 1 Complete: Claude Essentials",
        description:
          "You've completed the essentials! You understand Claude's unique approach, how to access it, how to have effective conversations, its limitations and transparency, and how to build complete workflows. You're ready for professional applications.",
        xpReward: 100,
        buttonText: "Complete Claude Essentials",
      },
    },
  ],
};
