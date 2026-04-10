/**
 * Lesson 7.21: Communication Mastery at Scale
 *
 * CHAPTER: 6 - Advanced Professional Applications
 * LESSON: 1 of 4 - Communication Mastery at Scale
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Master complex communications using Gemini's capabilities
 *
 * KEY RESPONSIBILITIES:
 * - Draft complex professional communications
 * - Navigate difficult conversations with AI assistance
 * - Prepare thoroughly for meetings
 * - Convert meeting notes to actionable items
 * - Build communication templates for efficiency
 */

import type { Lesson } from "@/types/content";

export const lesson_7_21: Lesson = {
  id: "lesson-7-21",
  chapterId: "ch7-6-professional",
  moduleId: "07-tools-gemini",
  title: "Communication Mastery at Scale",
  description: "Handle complex professional communications with confidence and clarity",
  order: 1,
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
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-21-cover.webp",
        imageAlt: "Professional communication and collaboration",
        title: "Communication Mastery at Scale",
        subtitle: "Craft the right message for any professional situation with AI assistance",
      },
    },
    // ===========================================================================
    // SECTION 1: Why This Matters
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Communication Challenge",
        paragraphs: [
          "Every professional knows the stakes of important communications. A poorly worded email can damage relationships. An unclear announcement confuses teams. A sensitive conversation handled poorly creates lasting tension.",
          "",
          "Gemini doesn't replace your judgment—it amplifies it. You bring the context and relationships; Gemini helps you find the right words.",
          "",
          "The goal isn't to sound like AI. It's to sound like your best professional self, consistently.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Complex Communication Types
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Types of Complex Communications",
        paragraphs: [
          "Gemini excels at helping with high-stakes communication scenarios that many professionals find challenging. Sensitive feedback requires delivering constructive criticism in ways that maintain relationships while still addressing performance issues. Gemini can help you find language that is honest and direct without being harsh or demotivating.",
          "",
          "Delivering difficult news is another area where AI assistance proves valuable. Whether you're communicating unfavorable information about project changes, budget cuts, or organizational restructuring, Gemini helps you craft messages that are transparent and professional while remaining compassionate. The goal is delivering necessary information without causing unnecessary distress.",
          "",
          "Conflict resolution often requires diplomatic language that addresses disagreements without escalating tension. Gemini can suggest phrasings that acknowledge different perspectives while working toward common ground. For persuasion tasks, whether making compelling cases for proposals or advocating for changes, Gemini helps you structure arguments logically and anticipate counterarguments. Finally, apologies require a delicate balance of taking responsibility appropriately while maintaining professionalism. Gemini can help you find the right words to acknowledge mistakes, express genuine remorse, and outline corrective actions.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: The 5-Step Communication Framework
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "The 5-Step Communication Framework",
        paragraphs: [
          "Apply the 5-Step Prompting Framework specifically to communications:",
          "",
          "**Step 1 - Task**: Be specific about the type (draft, revise, tone-adjust)",
          "",
          "**Step 2 - Context**: Who's the recipient? What's your relationship? What happened?",
          "",
          "**Step 3 - Tone**: Formal, casual, empathetic, firm, somewhere in between?",
          "",
          "**Step 4 - Examples**: Share a similar message that worked well",
          "",
          "**Step 5 - Iterate**: Review, adjust, and refine until it sounds like you",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Communication Types Comparison
    // ===========================================================================
    {
      id: "section-4",
      type: "comparisonTable",
      content: {
        title: "Communication Types and Approaches",
        intro:
          "Different situations require different communication strategies. Here's how to approach each:",
        columns: [
          { name: "Situation", description: "Type of communication" },
          { name: "Tone", description: "Recommended approach" },
          { name: "Key Focus", description: "What to emphasize" },
        ],
        rows: [
          {
            feature: "Sensitive feedback",
            values: ["Private, scheduled", "Direct but empathetic", "Growth opportunity"],
          },
          {
            feature: "Delivering bad news",
            values: [
              "Timely, in-person preferred",
              "Honest but compassionate",
              "Solutions where possible",
            ],
          },
          {
            feature: "Conflict resolution",
            values: ["Neutral ground, calm", "Objective, non-blaming", "Finding common ground"],
          },
          {
            feature: "Persuasion",
            values: ["Know your audience", "Confident, evidence-based", "Benefits to them"],
          },
          {
            feature: "Apologies",
            values: ["Prompt, sincere", "Accountable, no excuses", "Concrete next steps"],
          },
        ],
        footer: "Always adapt your approach based on your specific relationship and context.",
      },
    },
    // ===========================================================================
    // SECTION 5: Highlight Card - Key Insight
    // ===========================================================================
    {
      id: "section-5",
      type: "highlightCard",
      content: {
        heading: "The Golden Rule of AI Communication",
        insights: [
          "Never send AI-generated content without reading it first",
          "Always verify the tone matches your relationship with the recipient",
          "Edit to add your personal voice and specific details",
          "AI helps you start—your judgment makes it right",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Meeting Preparation
    // ===========================================================================
    {
      id: "section-6",
      type: "textWithImage",
      content: {
        title: "Meeting Preparation Excellence",
        paragraphs: [
          "Well-prepared meetings save time and build your professional reputation. Gemini helps you research participants, create agendas, and anticipate questions.",
          "",
          "Before important meetings, use Gemini to research attendees, their companies, recent news, and shared connections. This preparation shows respect and creates better conversations.",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-21-inline-1.webp",
        imageAlt: "Professional meeting preparation and strategy",
      },
    },
    // ===========================================================================
    // SECTION 7: Meeting Notes to Action Items
    // ===========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "From Meeting Notes to Action",
        paragraphs: [
          "Transforming scattered meeting notes into organized action items is one of the most immediately useful applications of Gemini. Start by pasting your rough notes directly into the conversation. Remember to sanitize any sensitive names or confidential details first, replacing them with generic placeholders that preserve the context without exposing private information.",
          "",
          "Next, request specific output formats that match your needs. A prompt like 'Extract action items, owners, and deadlines' produces a structured list of follow-up tasks with clear accountability. This transforms chaotic notes into an actionable task list that everyone can reference. For stakeholder communication, ask Gemini to 'Create a 3-bullet summary for stakeholders' that distills the essential outcomes without overwhelming detail.",
          "",
          "Finally, generate follow-up communications by asking Gemini to 'Draft a thank you note with next steps.' This creates a polished email that acknowledges participants' time while reinforcing commitments made during the meeting. The combination of these steps turns what might be an hour of post-meeting organization into a few minutes of focused prompting, ensuring nothing falls through the cracks while freeing your time for other priorities.",
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
        action: "For communication tasks",
        task: "Use Gemini to draft, refine, and iterate on important professional communications",
        feature: "Draft Generation",
        tip: "Always specify the recipient relationship and desired tone for better results",
      },
    },
    // ===========================================================================
    // SECTION 9: Quick Prompt - Difficult Conversation
    // ===========================================================================
    {
      id: "section-9",
      type: "quickPrompt",
      content: {
        heading: "Try It Now: Draft a Sensitive Message",
        description: "Practice crafting a difficult professional message with AI assistance.",
        promptText:
          "I need to write a professional email to a colleague who has been consistently missing deadlines on our joint project. I want to address this constructively without damaging our relationship. The goal is to understand the root cause and find a solution together. Draft an email that is direct but empathetic, about 150 words.",
      },
    },
    // ===========================================================================
    // SECTION 10: Actionable Task (inline at end)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Draft and Refine a Sensitive Communication",
        purpose:
          "Practice the 5-Step Communication Framework by drafting a real difficult message you need to send.",
        instructions: [
          "Think of a sensitive communication you need to make (feedback, difficult news, conflict resolution)",
          "Apply the 5-Step Framework: Task, Context, Tone, Examples, Iterate",
          "Draft the message with Gemini's help, specifying the recipient relationship and situation",
          "Review and refine the draft - add your personal voice and specific details",
          "Have Gemini suggest 2 alternative approaches, then choose the best elements",
        ],
        deliverable: "One polished sensitive communication draft with at least 2 iterations",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "I need to write a professional email to a colleague who has been consistently missing deadlines on our joint project. I want to address this constructively without damaging our relationship. The goal is to understand the root cause and find a solution together. Draft an email that is direct but empathetic, about 150 words.",
        successCriteria: [
          "You have applied the 5-Step Communication Framework",
          "You have at least 2 versions of your message",
          "You have added personal touches and specific details",
          "The final version sounds like you, not AI",
          "You feel more confident about sending this message",
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
        title: "Communication Mastery Achieved",
        description:
          "You now have frameworks for handling complex communications with confidence. Remember: AI helps you find the words, but your judgment makes them right. Always review, personalize, and verify before sending.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
