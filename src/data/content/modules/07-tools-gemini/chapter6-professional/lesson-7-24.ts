/**
 * Lesson 7.24: Decision Support and Collaboration
 *
 * CHAPTER: 6 - Advanced Professional Applications
 * LESSON: 4 of 4 - Decision Support and Collaboration
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Use Gemini as a thinking partner and enhance team collaboration
 *
 * KEY RESPONSIBILITIES:
 * - Conduct pros/cons analysis for decisions
 * - Perform scenario planning and "what if" analysis
 * - Use Gemini as a thinking partner for complex problems
 * - Enhance collaboration with colleagues
 * - Build an AI-powered professional practice
 */

import type { Lesson } from "@/types/content";

export const lesson_7_24: Lesson = {
  id: "lesson-7-24",
  chapterId: "ch7-6-professional",
  moduleId: "07-tools-gemini",
  title: "Decision Support and Collaboration",
  description:
    "Make better decisions and collaborate more effectively with AI as your thinking partner",
  order: 4,
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
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-24-cover.webp",
        imageAlt: "Team collaboration and decision making",
        title: "Decision Support and Collaboration",
        subtitle: "Make better decisions with AI as your thinking partner",
      },
    },
    // ===========================================================================
    // SECTION 1: The Decision Challenge
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why Decisions Are Hard",
        paragraphs: [
          "Every professional faces difficult decisions. The stakes are often high, information is incomplete, and there are multiple stakeholders with different perspectives.",
          "",
          "Gemini doesn't make decisions for you—that would be irresponsible. Instead, it helps you think more systematically, consider options you might overlook, and articulate tradeoffs clearly.",
          "",
          "Think of Gemini as a thoughtful colleague who asks good questions, plays devil's advocate when needed, and helps you see the full picture before you decide.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Pros and Cons Analysis
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Structured Pros and Cons",
        paragraphs: [
          "A systematic approach to weighing options transforms gut feelings into informed decisions. Start by listing all options explicitly: 'I'm deciding between [option A] and [option B]. What are the pros and cons of each?' This prompts Gemini to generate comprehensive lists that often include factors you hadn't considered.",
          "",
          "Hidden factors frequently determine outcomes, yet we often overlook them when thinking alone. Ask Gemini 'What considerations might I be missing?' to surface blind spots in your analysis. This question invites exploration of second-order effects, stakeholder perspectives, and long-term implications that might not be immediately obvious.",
          "",
          "Not all factors carry equal weight in every situation. Ask 'Which pros are most important given my situation?' to prioritize the considerations that actually matter for your specific context. Stress-test your options by asking 'What could go wrong with each option?' This pessimistic analysis helps you prepare for potential pitfalls rather than being blindsided later. Finally, synthesize everything by asking 'Based on this analysis, what questions should I ask myself?' This reflective prompt helps you move from analysis to decision with clarity about what matters most.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Scenario Planning
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "What If Analysis",
        insights: [
          "Explore best-case scenarios: 'If everything goes well, what does success look like?'",
          "Plan for worst cases: 'What could go wrong, and how would I respond?'",
          "Consider likely outcomes: 'What's the most probable scenario?'",
          "Identify decision triggers: 'What would make me change course?'",
          "Create contingency plans: 'If X happens, I'll do Y'",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Gemini as Thinking Partner
    // ===========================================================================
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "Using Gemini as a Thinking Partner",
        paragraphs: [
          "The most valuable use of AI isn't getting answers—it's having better questions asked of you.",
          "",
          "Try these thinking partner prompts: 'Challenge my assumption that...' or 'What would a skeptic say about my plan?' or 'Help me think through this from my boss's perspective.'",
          "",
          "The goal isn't for Gemini to tell you what to decide. It's to help you think more completely, more systematically, and more creatively about important choices.",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-24-inline-1.webp",
        imageAlt: "Strategic thinking and decision support",
      },
    },
    // ===========================================================================
    // SECTION 5: Decision Analysis Approaches Comparison
    // ===========================================================================
    {
      id: "section-5",
      type: "comparisonTable",
      content: {
        title: "Decision Analysis Approaches",
        intro: "Different decision situations benefit from different analytical approaches:",
        columns: [
          { name: "Approach", description: "Method type" },
          { name: "Best For", description: "When to use" },
          { name: "Gemini Prompt", description: "Example question" },
        ],
        rows: [
          {
            feature: "Pros/Cons List",
            values: ["Simple comparisons", "Binary choices", "What are the pros and cons?"],
          },
          {
            feature: "Scenario Planning",
            values: ["Uncertain outcomes", "Strategic decisions", "What if X happens?"],
          },
          {
            feature: "Devil's Advocate",
            values: ["Testing assumptions", "High-stakes choices", "Challenge my assumption"],
          },
          {
            feature: "Stakeholder View",
            values: ["Multiple parties", "Organizational impact", "From X's perspective"],
          },
          {
            feature: "Risk Assessment",
            values: ["Complex projects", "Resource allocation", "What could go wrong?"],
          },
        ],
        footer: "Combine multiple approaches for comprehensive decision analysis.",
      },
    },
    // ===========================================================================
    // SECTION 6: Collaboration Enhancement
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Enhancing Team Collaboration",
        paragraphs: [
          "Gemini can improve how teams work together:",
          "",
          "**Before meetings**: Generate discussion frameworks and anticipate different viewpoints",
          "",
          "**During meetings**: Quickly research questions that arise (with appropriate privacy awareness)",
          "",
          "**After meetings**: Synthesize notes, identify action items, and draft follow-up communications",
          "",
          "**For brainstorming**: Generate starting ideas that the team can build on and improve",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Building Your AI Practice
    // ===========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Building Your AI-Powered Professional Practice",
        paragraphs: [
          "As you complete this chapter, establishing sustainable AI habits ensures the skills you've developed become lasting parts of your professional practice. Start each day by asking Gemini to help prioritize your tasks based on your goals. This morning routine sets direction and ensures your energy flows toward what matters most.",
          "",
          "Before big decisions, use Gemini as a thinking partner to explore options. The AI can surface considerations you might miss, challenge your assumptions, and help you think through scenarios more completely than you might alone. After key meetings, quickly synthesize notes and next steps with Gemini's assistance. This prevents important details from slipping through the cracks while the conversation is fresh.",
          "",
          "When learning something new, use Gemini to accelerate your understanding. The AI can explain complex topics, provide examples, and answer clarifying questions at whatever pace works for you. For communication tasks, draft, refine, and iterate on important messages with Gemini's help. This is especially valuable for high-stakes communications where getting the tone and content right matters. These habits compound over time, making AI assistance a natural and productive part of how you work.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Tool Reference
    // ===========================================================================
    {
      id: "section-8",
      type: "toolReference",
      content: {
        tool: "gemini",
        action: "For decision support",
        task: "Use Gemini as a thinking partner to explore options, analyze scenarios, and prepare for important decisions",
        feature: "Analysis + Scenario Planning",
        tip: "The best results come from asking Gemini to challenge your assumptions, not just validate them",
      },
    },
    // ===========================================================================
    // SECTION 9: Quick Prompt - Decision Support
    // ===========================================================================
    {
      id: "section-9",
      type: "quickPrompt",
      content: {
        heading: "Try It Now: Decision Analysis",
        description: "Practice using Gemini as a thinking partner for a decision you're facing.",
        promptText:
          "I'm trying to decide whether to [describe a real decision you're facing, like 'take on a new project' or 'change a workflow']. Help me think through this by: 1) Listing pros and cons, 2) Identifying what information I'm missing, 3) Suggesting 3 questions I should ask myself before deciding.",
      },
    },
    // ===========================================================================
    // SECTION 10: Actionable Task (inline at end)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Use Gemini as a Decision Thinking Partner",
        purpose:
          "Practice using Gemini to think through a real decision you're facing with structured analysis.",
        instructions: [
          "Identify a real decision you're currently facing (work or professional development)",
          "Ask Gemini for a pros/cons analysis of your options",
          "Request: 'What considerations might I be missing?'",
          "Ask: 'What would a skeptic say about my preferred option?'",
          "End with: 'Based on this analysis, what 3 questions should I ask myself before deciding?'",
        ],
        deliverable:
          "One complete decision analysis with pros/cons, hidden considerations, and self-reflection questions",
        estimatedTime: "10-12 minutes",
        starterPrompt:
          "I'm trying to decide whether to [describe a real decision you're facing, like 'take on a new project' or 'change a workflow']. Help me think through this by: 1) Listing pros and cons, 2) Identifying what information I'm missing, 3) Suggesting 3 questions I should ask myself before deciding.",
        successCriteria: [
          "You analyzed a real decision you're facing",
          "You received pros/cons from Gemini",
          "You identified at least one consideration you had missed",
          "You have 3 reflection questions to guide your decision",
          "You feel more prepared to make the decision",
        ],
      },
    },
    // ===========================================================================
    // SECTION 11: Completion
    // ===========================================================================
    {
      id: "section-11",
      type: "completion",
      content: {
        title: "Chapter 6 Complete: Advanced Professional Applications",
        description:
          "You've mastered communication at scale, research workflows, content creation, and decision support. You now have a complete toolkit for using Gemini in high-value professional situations. Remember: AI enhances your judgment—it never replaces it. The best results come from combining AI capabilities with your expertise, relationships, and context.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
