/**
 * Lesson 6.6: Writing and Content Creation
 *
 * CHAPTER: 2 - Professional Applications
 * LESSON: 1 of 5 - Writing Workflows
 *
 * DURATION: 12 minutes (practical)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach practical writing workflows with Claude
 *
 * KEY RESPONSIBILITIES:
 * - Show professional writing use cases
 * - Provide actionable prompting patterns
 * - Demonstrate Claude's writing strengths
 */

import type { Lesson } from "@/types/content";

export const lesson_6_6: Lesson = {
  id: "lesson-6-6",
  chapterId: "ch6-2-applications",
  moduleId: "06-tools-claude",
  title: "Writing and Content Creation",
  description: "Professional writing workflows with Claude as your collaborative partner",
  order: 6,
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
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-6-cover.webp",
        imageAlt: "Writing and content creation workspace",
        title: "Writing and Content Creation",
        subtitle: "Professional writing workflows with Claude as your collaborative partner",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Claude as Writing Partner",
        paragraphs: [
          "Claude excels at writing assistance—not by replacing your voice, but by helping you find it, refine it, and adapt it for different audiences.",
          "",
          "Where Claude particularly shines: overcoming blank-page paralysis, adjusting tone for different audiences, simplifying complex ideas, providing feedback on drafts, and suggesting improvements you might miss.",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Writing Use Cases",
        paragraphs: [
          "Claude excels at a wide range of professional writing tasks, making it a versatile partner for knowledge workers across industries. Understanding where Claude adds the most value helps you integrate it effectively into your writing workflows.",
          "",
          "Emails and messages are perhaps the most common use case. Claude can help with client communications that need to be professional yet personable, team updates that must convey information clearly, difficult conversations that require diplomatic language, and follow-ups that maintain relationships. The key is providing context about who you're writing to and what you want to achieve.",
          "",
          "Documentation is another area where Claude shines. Whether you need technical documentation, process guides, or internal knowledge base articles, Claude can help structure information clearly and write in appropriate styles for different audiences. This is particularly valuable when you need to transform informal knowledge into polished documentation.",
          "",
          "Presentations benefit from Claude's ability to help with slide content, speaker notes, and overall structure and flow planning. Claude can help you think through how to organize a narrative, what points to emphasize, and how to make complex information accessible to your audience.",
          "",
          "Marketing copy, including landing page text, email campaigns, and social media content, represents another powerful use case. Claude understands different marketing formats and can help you craft compelling messages while maintaining brand consistency.",
          "",
          "Finally, reports of all kinds—from executive summaries to analysis write-ups to stakeholder communications—can be dramatically improved with Claude's assistance. Claude can help you organize findings, present data clearly, and write for specific audiences.",
        ],
      },
    },
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "The Draft-Refine Pattern",
        insights: [
          "Ask Claude to draft -> You review",
          "Ask for specific refinements",
          "Finalize",
          "Preserves your voice while leveraging Claude's speed and versatility",
        ],
      },
    },
    {
      id: "section-4",
      type: "scenarioCard",
      content: {
        title: "Real-World Scenario",
        situation:
          "Maya is a product manager who needs to write a quarterly update email to 200 stakeholders. The email needs to balance technical accuracy with accessibility for non-technical readers.",
        challenge:
          "She has 30 minutes before the email must go out, and she's staring at a blank screen unsure how to structure the message.",
        outcome:
          "Maya pasted her rough bullet points into Claude and asked for a professional email draft. Claude generated a structured email in 30 seconds. Maya spent 10 minutes refining tone and adding personal touches, then sent with confidence.",
      },
    },
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Practical Prompt Patterns",
        paragraphs: [
          "**For tone adjustment**: 'Rewrite this to be more formal/casual/persuasive for [audience]'",
          "",
          "**For simplification**: 'Explain this like I'm [role level]. Help me communicate it clearly.'",
          "",
          "**For expansion**: 'This section needs more detail about [topic]. Can you expand while keeping the same tone?'",
          "",
          "**For critique**: 'What are the weaknesses in this draft? Where might readers be confused?'",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-6-inline-1.webp",
        imageAlt: "Writing prompts and creative content development",
      },
    },
    {
      id: "section-6",
      type: "quickPrompt",
      content: {
        heading: "Practice: Tone Adaptation",
        description:
          "Take a piece of writing you've done recently and adapt it for a new audience.",
        promptText:
          "Take a piece of writing you've done recently. Ask Claude: 'Here's something I wrote for [original audience]. Help me adapt it for [new audience]. Keep the core message but change how it's communicated.'",
      },
    },
    {
      id: "section-7",
      type: "toolReference",
      content: {
        tool: "claude",
        action: "For writing exercises",
        task: "Open Claude and practice tone adaptation with your own writing samples",
        feature: "New conversation",
        tip: "Use Claude's Artifacts feature for longer documents you want to iterate on",
      },
    },
    // ===========================================================================
    // SECTION 8: Your Turn - Actionable Task at END
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Adapt Your Writing",
        purpose:
          "Practice tone adaptation with a real document from your work, learning how Claude can help you communicate with different audiences.",
        instructions: [
          "Find a real document you've written (email, report, proposal)",
          "Ask Claude to adapt it for a completely different audience",
          "Compare the two versions - note what changed in tone, detail, and structure",
          "Use Claude's version as inspiration, then make it your own",
        ],
        deliverable:
          "An original document and its audience-adapted version with notes on key differences",
        estimatedTime: "10 minutes",
        starterPrompt:
          "Here's something I wrote for [original audience]: [paste content]. Help me adapt it for [new audience]. Keep the core message but change how it's communicated.",
        successCriteria: [
          "You've adapted a real document for a different audience",
          "You can identify specific changes in tone, detail, and structure",
          "The adapted version maintains the core message",
          "You understand how Claude can help with audience targeting",
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
        question: 'What is the "Draft-Refine Pattern" for writing with Claude?',
        options: [
          "Ask Claude to write everything and submit it unchanged",
          "Ask Claude to draft, you review, ask for refinements, then finalize",
          "Write everything yourself and ask Claude to check spelling",
          "Only use Claude for titles",
        ],
        correctAnswer: 1,
        hint: 'Review "The Draft-Refine Pattern" and "Practical Prompt Patterns" sections if needed.',
      },
    },
    {
      id: "section-10",
      type: "completion",
      content: {
        title: "Writing Workflow Established",
        description:
          "You now have practical patterns for writing with Claude. The key: use Claude as a collaborative partner that speeds up your process while preserving your voice and judgment.",
        xpReward: 100,
        buttonText: "Complete Writing Skills",
      },
    },
  ],
};
