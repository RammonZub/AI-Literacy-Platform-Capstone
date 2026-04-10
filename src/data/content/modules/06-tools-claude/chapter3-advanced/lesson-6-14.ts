/**
 * Lesson 6.14: Multi-Turn Conversations and Context
 *
 * CHAPTER: 3 - Advanced Features
 * LESSON: 4 of 5 - Conversation Management
 *
 * DURATION: 12 minutes (advanced practical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach effective multi-turn conversation management
 *
 * KEY RESPONSIBILITIES:
 * - Show how to maintain productive conversations
 * - Provide context management patterns
 * - Demonstrate conversation resetting and refocusing
 */

import type { Lesson } from "@/types/content";

export const lesson_6_14: Lesson = {
  id: "lesson-6-14",
  chapterId: "ch6-3-advanced",
  moduleId: "06-tools-claude",
  title: "Multi-Turn Conversations and Context",
  description: "Manage complex, multi-turn conversations effectively with Claude",
  order: 14,
  estimatedMinutes: 12,
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
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-14-cover.webp",
        imageAlt: "Team collaboration and group discussion",
        title: "Multi-Turn Conversations and Context",
        subtitle: "Keep long conversations productive and focused",
      },
    },
    // ===========================================================================
    // SECTION 1: Conversations That Scale
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Conversations That Scale",
        paragraphs: [
          "Simple questions work in one turn. Complex work requires conversations that evolve, refine, and sometimes restart-without becoming confused or unproductive.",
          "Claude's strength is conversational context, but long conversations can become unwieldy without good management.",
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
        task: "Open Claude and practice the conversation management patterns below",
        tip: "Use Projects to organize related conversations together",
      },
    },
    // ===========================================================================
    // SECTION 3: Conversation Management Patterns
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Conversation Management Patterns",
        paragraphs: [
          "Long conversations with Claude require active management to remain productive. Without intentional techniques, even powerful AI conversations can drift off track, lose context, or become unfocused. Here are the patterns that keep multi-turn conversations effective.",
          "",
          "Start with explicit goals. State upfront what you're trying to accomplish in this conversation. When Claude knows your objective, it can organize its responses around helping you achieve it. Without a clear goal stated, conversations tend to wander.",
          "",
          "Use context refreshes periodically. Summarize where you are: 'Here's where we are: [summary]. Let's continue by...' This technique accomplishes two things: it confirms you and Claude are aligned on the current state, and it recenters the conversation if you've drifted into tangents.",
          "",
          "Signal pivots explicitly when you need to change direction. Say: 'I want to shift direction to [new topic]. Here's context for that...' Without this explicit signal, Claude might try to connect your new direction to previous topics when you actually want a fresh start.",
          "",
          "Reset when conversations get off track. Don't be afraid to say: 'This conversation has gotten off track. I'm restarting with: [clear restatement of goal].' A clean restart is often more efficient than trying to steer a wandering conversation back on course.",
          "",
          "Branch for details without losing the main thread. You can say: 'Can we explore [specific detail] and then come back to the main thread?' This lets you dive deep on specific points while maintaining a clear path back to your primary focus.",
          "",
          "Finally, use summary checkpoints regularly. Ask Claude: 'Before we continue, summarize what we've established so far.' These checkpoints ensure nothing important gets lost and give you a chance to correct any misunderstandings before they compound.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Context Window Awareness
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "Context Window Awareness",
        insights: [
          "Claude has a large context window, but even large windows have limits",
          "For very long conversations, important details can get 'pushed out' of active memory",
          "Periodically restating key context ensures nothing critical gets lost",
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
        title: "Conversation Health Indicators",
        intro: "Spot the signs of productive vs. drifting conversations:",
        columns: [
          { name: "Drifting Conversation" },
          { name: "Focused Conversation", recommended: true },
        ],
        rows: [
          { feature: "Goal clarity", values: ["Unclear or forgotten", "Stated and restated"] },
          { feature: "Responses", values: ["Off-topic or generic", "Targeted and relevant"] },
          { feature: "Progress", values: ["Circling back", "Moving forward"] },
          { feature: "Context", values: ["Getting lost", "Periodically refreshed"] },
          { feature: "Action items", values: ["Unclear next steps", "Clear what to do next"] },
        ],
        footer:
          "Use the 'refocus' pattern when you notice drifting: summarize where you are and restate the goal.",
      },
    },
    // ===========================================================================
    // SECTION 6: Practical Conversation Patterns
    // ===========================================================================
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "Practical Conversation Patterns",
        paragraphs: [
          "**For complex projects**: Start with 'We're working on [project]. I'll give you context in pieces. After each, summarize what you understand before we continue.'",
          "**For drifting conversations**: 'We've covered a lot, but I want to refocus on [original goal]. What's the most important thing to address next?'",
          "**For starting fresh**: 'Start a new conversation. I'll include key context from previous: [brief summary].'",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-14-inline-1.webp",
        imageAlt: "Team meeting and collaborative workflow",
      },
    },
    // ===========================================================================
    // SECTION 7: Quick Prompt
    // ===========================================================================
    {
      id: "section-5",
      type: "quickPrompt",
      content: {
        heading: "Practice: Conversation Management",
        description: "Start a complex task with Claude and practice conversation refocusing.",
        promptText:
          "Start a complex task with Claude. After 4-5 turns, ask: 'Summarize what you understand about my goal so far, then suggest the best next step.' Notice how this recenters context and refocuses the conversation.",
      },
    },
    // ===========================================================================
    // SECTION 8: Actionable Task (Inline)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Practice Conversation Refocusing",
        purpose: "Master the skill of keeping long Claude conversations productive and focused.",
        instructions: [
          "Start a complex multi-step task with Claude",
          "After 4-5 exchanges, ask Claude to summarize what it understands about your goal",
          "Notice if anything was lost or misunderstood - correct if needed",
          "Practice the 'refocus' pattern: 'Let's refocus on [goal]. What's most important to address next?'",
        ],
        deliverable:
          "Notes on your conversation management practice, including what Claude summarized correctly and what needed correction",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "I'm working on [complex project]. Let me give you context in pieces. First: [context piece 1]. Summarize what you understand, then I'll add more.",
        successCriteria: [
          "You started a complex conversation with Claude",
          "You practiced the summarization checkpoint technique",
          "You identified any context that was lost or misunderstood",
          "You successfully refocused the conversation when needed",
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
        question: "What should you do when a Claude conversation starts to drift off-topic?",
        options: [
          "Start a completely new conversation",
          'Use the "refocus" pattern: summarize where you are and restate the goal',
          "Stop using Claude",
          "Just continue and hope it gets back on track",
        ],
        correctAnswer: 1,
        hint: 'Review "Conversation Management Patterns" section if needed.',
      },
    },
    // ===========================================================================
    // SECTION 10: Completion
    // ===========================================================================
    {
      id: "section-8",
      type: "completion",
      content: {
        title: "Conversation Management Skills Ready",
        description:
          "You now have patterns for keeping multi-turn conversations productive and focused. The key: be explicit about goals, refocus when conversations drift, and rest important context periodically.",
        xpReward: 100,
        buttonText: "Complete Conversation Skills",
      },
    },
  ],
};
