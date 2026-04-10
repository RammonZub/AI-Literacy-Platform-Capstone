/**
 * Lesson 6.7: Analysis and Research Assistance
 *
 * CHAPTER: 2 - Professional Applications
 * LESSON: 2 of 5 - Analytical Workflows
 *
 * DURATION: 12 minutes (practical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach analytical and research-support workflows
 *
 * KEY RESPONSIBILITIES:
 * - Show Claude's analytical capabilities
 * - Provide research-assistance patterns
 * - Demonstrate synthesis workflows
 */

import type { Lesson } from "@/types/content";

export const lesson_6_7: Lesson = {
  id: "lesson-6-7",
  chapterId: "ch6-2-applications",
  moduleId: "06-tools-claude",
  title: "Analysis and Research Assistance",
  description:
    "Use Claude to analyze information, synthesize research, and accelerate understanding",
  order: 7,
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
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-7-cover.webp",
        imageAlt: "Research analysis and data synthesis",
        title: "Analysis and Research Assistance",
        subtitle:
          "Use Claude to analyze information, synthesize research, and accelerate understanding",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Claude as Analysis Partner",
        paragraphs: [
          "Claude is exceptionally good at helping you make sense of information—not by replacing your research, but by accelerating how quickly you understand and synthesize it.",
          "",
          "Key strengths: explaining complex topics clearly, finding themes across multiple sources, identifying what matters most, suggesting what might be missing, and translating jargon into plain language.",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Analysis Use Cases",
        paragraphs: [
          "Claude serves as a powerful analysis partner across many professional contexts. The key is understanding the different ways Claude can help you make sense of information and identify patterns you might otherwise miss.",
          "",
          "Topic understanding is perhaps the most accessible use case. You can ask Claude to explain complex topics at whatever level makes sense for you: 'Explain [complex topic] to me like I'm a [role].' Claude will adjust its explanation to your background, using analogies and examples that match your experience level.",
          "",
          "Source synthesis becomes incredibly powerful when you're dealing with multiple documents or perspectives. You can provide summaries of several articles and ask: 'What are the common themes and disagreements?' Claude excels at identifying patterns across sources and surfacing contradictions or consensus that might not be obvious when reading each source individually.",
          "",
          "Data interpretation is another strength. When you share your data and ask 'Help me understand what stories it tells and what I might be missing,' Claude can suggest interpretations, identify potential blind spots, and help you think more systematically about what your data means.",
          "",
          "Gap identification helps ensure thoroughness in your research. Asking 'What aspects of [topic] should I research that I haven't considered yet?' often reveals angles you hadn't thought to explore. Claude's broad knowledge base makes it a valuable partner for ensuring comprehensive coverage.",
          "",
          "Finally, stakeholder translation helps you communicate technical or complex information to different audiences. Claude can help you explain specialized topics in terms that non-experts can understand, making your expertise more accessible and impactful.",
        ],
      },
    },
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "The Research Workflow",
        insights: [
          "You gather and paste source material",
          "Claude helps synthesize and identify themes",
          "You verify independently—Claude is a synthesis partner, not a research replacement",
        ],
      },
    },
    {
      id: "section-4",
      type: "scenarioCard",
      content: {
        title: "Real-World Scenario",
        situation:
          "Carlos is a business analyst preparing for a strategic planning meeting. He has collected 8 industry reports, competitor analyses, and internal performance data, but feels overwhelmed by the volume of information.",
        challenge:
          "He needs to identify the 5 most important insights and present them to executives in 24 hours.",
        outcome:
          "Carlos pasted summaries of all 8 reports into Claude and asked for key themes. Claude identified 7 patterns and disagreements across sources. Carlos verified the top 5, added supporting data, and created a compelling executive summary in 3 hours instead of 12.",
      },
    },
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Practical Analysis Patterns",
        paragraphs: [
          "**For complex topics**: 'I'm trying to understand [topic]. Start by asking me questions about what I already know, so you can tailor your explanation.'",
          "",
          "**For multiple sources**: Paste summaries or excerpts and ask: 'What are the key arguments across these sources? Where do they agree and disagree?'",
          "",
          "**For data**: 'Here's a description of my data/analysis situation. Help me think through what approaches, considerations, or pitfalls I should be aware of.'",
          "",
          "**For verification**: 'I need to verify [claim]. Help me create a checklist of what to confirm and where to look.'",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-7-inline-1.webp",
        imageAlt: "Data analysis and business intelligence",
      },
    },
    {
      id: "section-6",
      type: "quickPrompt",
      content: {
        heading: "Practice: Topic Exploration",
        description:
          "Think of a topic you've been meaning to understand better and explore it with Claude.",
        promptText:
          "I want to understand [topic] at a [beginner/intermediate/advanced] level. Start by asking me questions about what I already know, then help me build a mental model.",
      },
    },
    {
      id: "section-7",
      type: "toolReference",
      content: {
        tool: "claude",
        action: "For analysis exercises",
        task: "Open Claude and explore a topic using the conversational learning approach",
        feature: "New conversation",
        tip: "Paste long documents and ask Claude to summarize key points before deep analysis",
      },
    },
    // ===========================================================================
    // SECTION 8: Your Turn - Actionable Task at END
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Analyze Your Work",
        purpose:
          "Experience Claude's analysis capabilities by applying them to real content from your professional work.",
        instructions: [
          "Paste a document, data summary, or complex situation from your work",
          "Ask Claude: 'What patterns do you see? What might I be missing?'",
          "Don't accept the first answer - ask at least 2 follow-up questions",
          "Use Claude's insights to guide your own deeper investigation",
        ],
        deliverable:
          "Analysis notes including Claude's initial observations, your follow-up questions, and actionable insights",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "Here's [a document/data/situation] from my work. What patterns do you see? What might I be missing or not considering?",
        successCriteria: [
          "You've analyzed real content from your work with Claude",
          "You asked follow-up questions to deepen the analysis",
          "You identified at least one insight you hadn't considered before",
          "You understand how Claude can accelerate analysis work",
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
        question: "What is Claude role in the research workflow?",
        options: [
          "Claude does all the research for you",
          "Claude replaces the need for any other research sources",
          "Claude helps synthesize and identify themes, but you verify independently",
          "Claude is only useful for simple topics",
        ],
        correctAnswer: 2,
        hint: 'Review "The Research Workflow" and "Practical Analysis Patterns" sections if needed.',
      },
    },
    {
      id: "section-10",
      type: "completion",
      content: {
        title: "Analysis Skills Ready",
        description:
          "You now have practical workflows for using Claude to accelerate analysis and research. Remember: Claude synthesizes and explains, but you always verify critical information independently.",
        xpReward: 100,
        buttonText: "Complete Analysis Skills",
      },
    },
  ],
};
