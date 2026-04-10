/**
 * Lesson 8.8: Email Express Workflow
 *
 * CHAPTER: 3 - Daily Productivity Workflows
 * LESSON: 1 of 5 - Draft, Refine, Send in Under 2 Minutes
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach learners to compose professional emails rapidly using ChatGPT's speed
 *
 * KEY RESPONSIBILITIES:
 * - Introduce the Draft -> Refine -> Send pattern
 * - Provide ready-to-use email templates
 * - Show tone adjustment techniques
 * - Cover handling difficult emails
 */

import type { Lesson } from "@/types/content";

export const lesson_8_8: Lesson = {
  id: "lesson-8-8",
  chapterId: "ch8-3-workflows",
  moduleId: "09-workflow-automation",
  title: "Email Express Workflow",
  description: "Draft, refine, and send professional emails in under 2 minutes",
  order: 8,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image
    // ===========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-8-cover.webp",
        imageAlt: "Professional email workflow on laptop",
        title: "Email Express Workflow",
        subtitle:
          "Transform email from a time sink into a 2-minute task with ChatGPT's lightning-fast responses",
      },
    },
    // ===========================================================================
    // SECTION 1: The Pattern
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Pattern: Draft - Refine - Send",
        paragraphs: [
          "Professional emails used to take 10-15 minutes each. With ChatGPT, you can do it in under 2 minutes. Here's the workflow:",
          "",
          "**Step 1: Draft (30 seconds)** - Give ChatGPT the key points, get a complete draft instantly.",
          "",
          "**Step 2: Refine (60 seconds)** - Ask for tone adjustments, additions, or cuts.",
          "",
          "**Step 3: Send (30 seconds)** - Copy, paste, add recipient, done.",
          "",
          "The key is ChatGPT's speed. When refinement takes seconds instead of minutes, you iterate without friction.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Meeting Request Template
    // ===========================================================================
    {
      id: "section-2",
      type: "quickPrompt",
      content: {
        heading: "Meeting Request Template",
        description:
          "Need to schedule a meeting? Use this prompt to get a polished request in seconds.",
        promptText: `Write a professional meeting request email for:
- Topic: [meeting purpose]
- Duration: [30 min / 1 hour]
- Participants: [who needs to attend]
- Context: [why this meeting is needed]
- Preferred times: [your availability]

Keep it concise and action-oriented.`,
      },
    },
    // ===========================================================================
    // SECTION 3: Follow-Up Template
    // ===========================================================================
    {
      id: "section-3",
      type: "quickPrompt",
      content: {
        heading: "Follow-Up Email Template",
        description:
          "Following up without being annoying is an art. Let ChatGPT help you strike the right balance.",
        promptText: `Write a follow-up email that:
- References: [previous email/meeting/conversation]
- Purpose: [what you're following up about]
- Timeline: [when you need a response]
- Tone: [polite but firm / gentle reminder / casual]

The recipient is [busy executive / colleague / client]. Make it respectful but clear.`,
      },
    },
    // ===========================================================================
    // SECTION 4: Status Update Template
    // ===========================================================================
    {
      id: "section-4",
      type: "quickPrompt",
      content: {
        heading: "Status Update Template",
        description: "Keep stakeholders informed with clear, structured updates.",
        promptText: `Write a project status update email:
- Project: [name]
- Current status: [on track / at risk / delayed]
- Completed this week: [list key achievements]
- Next week's priorities: [list next steps]
- Blockers: [any issues or dependencies]
- Overall confidence: [high / medium / low]

Keep it scannable with bullet points. Audience is [executives / team / client].`,
      },
    },
    // ===========================================================================
    // SECTION 5: Thank You Template
    // ===========================================================================
    {
      id: "section-5",
      type: "quickPrompt",
      content: {
        heading: "Thank You Email Template",
        description: "Express gratitude professionally and specifically.",
        promptText: `Write a thank you email:
- Recipient: [name and role]
- What they did: [specific action or help]
- Impact: [how it helped you or the project]
- Tone: [formal / warm / casual]

Keep it genuine and specific, not generic.`,
      },
    },
    // ===========================================================================
    // SECTION 6: Tone Adjustment
    // ===========================================================================
    {
      id: "section-6",
      type: "textWithBullets",
      content: {
        title: "Tone Adjustment on the Fly",
        paragraphs: [
          "Got a draft that's close but not quite right? Ask ChatGPT to adjust the tone instantly:",
        ],
        bullets: [
          "**Too formal?** 'Make this warmer and more conversational'",
          "**Too casual?** 'Make this more professional and formal'",
          "**Too long?** 'Cut this by 50% while keeping the key points'",
          "**Too direct?** 'Soften the tone but keep the message clear'",
          "**Too soft?** 'Make this more direct and action-oriented'",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Difficult Emails
    // ===========================================================================
    {
      id: "section-7",
      type: "highlightCard",
      content: {
        heading: "Handling Difficult Emails",
        insights: [
          "Delivering bad news? Ask for empathy without sugarcoating",
          "Saying no? Request alternatives and maintain relationships",
          "Addressing conflict? Focus on facts, not emotions",
          "Requesting something sensitive? Frame as partnership, not demand",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Difficult Email Prompt
    // ===========================================================================
    {
      id: "section-8",
      type: "quickPrompt",
      content: {
        heading: "Difficult Email Template",
        description: "When you need to have a tough conversation via email.",
        promptText: `Help me write a difficult email:
- Situation: [what happened / context]
- The challenge: [what makes this hard to say]
- Desired outcome: [what I want to happen]
- Relationship: [boss / client / colleague / vendor]
- My concern: [what I'm worried about]

Write a draft that's honest but maintains the relationship.`,
      },
    },
    // ===========================================================================
    // SECTION 9: Saving Templates
    // ===========================================================================
    {
      id: "section-9",
      type: "textWithImage",
      content: {
        title: "Saving Your Templates",
        paragraphs: [
          "As you use ChatGPT for email, you'll develop prompts that work perfectly for your common situations.",
          "",
          "**Create a personal prompt library:**",
          "- Keep a document with your best email prompts",
          "- Note which prompts work for which situations",
          "- Refine based on results",
          "",
          "The time investment pays off: each saved template saves you 10+ minutes every time you use it.",
        ],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-8-inline-1.webp",
        imageAlt: "Organized digital workspace with notes",
      },
    },
    // ===========================================================================
    // SECTION 10: Tool Reference
    // ===========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Use ChatGPT Console",
        task: "Draft and refine professional emails",
        feature: "Lightning-fast text generation",
        tip: "Use the Draft-Refine-Send pattern: generate a draft in seconds, then ask for specific adjustments",
      },
    },
    // ===========================================================================
    // SECTION 11: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Draft a Real Email in Under 2 Minutes",
        purpose:
          "Apply the Draft-Refine-Send pattern to an email you actually need to send this week.",
        instructions: [
          "Identify an email you need to write (meeting request, follow-up, update, etc.)",
          "Use ChatGPT with the starter prompt structure to generate a draft",
          "Review and request one specific improvement (tone, length, clarity)",
          "Copy the final version into your email client",
          "Time yourself to see if you beat 2 minutes",
        ],
        deliverable: "A polished, ready-to-send email created in under 2 minutes",
        estimatedTime: "5-7 minutes",
        starterPrompt:
          "Write a [type] email to [recipient]. Context: [situation]. Goal: [what you want]. Tone: [professional/friendly/etc.]. Keep it under [X] words.",
        successCriteria: [
          "Generated a complete first draft in under 30 seconds",
          "Made at least one refinement iteration",
          "Final email is ready to send without significant edits",
          "Total time under 2 minutes",
        ],
      },
    },
    // ===========================================================================
    // SECTION 12: Completion
    // ===========================================================================
    {
      id: "section-completion-11",
      type: "completion",
      content: {
        title: "Email Mastery Unlocked",
        description:
          "You now have a complete toolkit for writing professional emails in under 2 minutes. From meeting requests to difficult conversations, ChatGPT helps you communicate clearly and efficiently. Practice these templates this week and watch your email time shrink.",
        xpReward: 100,
        buttonText: "Complete & Continue",
      },
    },
  ],
};
