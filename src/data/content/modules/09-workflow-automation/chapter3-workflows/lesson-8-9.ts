/**
 * Lesson 8.9: Meeting Minutes Workflow
 *
 * CHAPTER: 3 - Daily Productivity Workflows
 * LESSON: 2 of 5 - Capture, Extract, Action in Record Time
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Transform meeting notes and transcripts into actionable summaries
 *
 * KEY RESPONSIBILITIES:
 * - Introduce the Meeting Summary Template
 * - Show how to work with transcripts
 * - Teach structured output extraction
 * - Cover action item extraction
 */

import type { Lesson } from "@/types/content";

export const lesson_8_9: Lesson = {
  id: "lesson-8-9",
  chapterId: "ch8-3-workflows",
  moduleId: "09-workflow-automation",
  title: "Meeting Minutes Workflow",
  description: "Transform meeting chaos into clear action items and summaries",
  order: 9,
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
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-9-cover.webp",
        imageAlt: "Team meeting with collaborative notes",
        title: "Meeting Minutes Workflow",
        subtitle: "Transform meeting chaos into clear action items and summaries in seconds",
      },
    },
    // ===========================================================================
    // SECTION 1: The Meeting Summary Template
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Meeting Summary Template",
        paragraphs: [
          "Every meeting summary needs four elements. ChatGPT can extract all of them from your notes or transcript:",
          "",
          "**1. Key Decisions** - What was decided? What's now set in stone?",
          "",
          "**2. Action Items** - Who needs to do what by when?",
          "",
          "**3. Follow-up Questions** - What's still unclear or needs more discussion?",
          "",
          "**4. Next Steps** - What happens next? When do we meet again?",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Basic Meeting Summary Prompt
    // ===========================================================================
    {
      id: "section-2",
      type: "quickPrompt",
      content: {
        heading: "Basic Meeting Summary",
        description: "Turn rough notes into a structured summary in seconds.",
        promptText: `Create a meeting summary from these notes:

[PASTE YOUR MEETING NOTES HERE]

Format as:
## Meeting: [Topic]
**Date:** [date]
**Attendees:** [list]

### Key Decisions
- [Decision 1]
- [Decision 2]

### Action Items
- [ ] [Task] - @[Owner] - Due: [Date]
- [ ] [Task] - @[Owner] - Due: [Date]

### Follow-up Questions
- [Question 1]
- [Question 2]

### Next Steps
- [What happens next]`,
      },
    },
    // ===========================================================================
    // SECTION 3: Working with Transcripts
    // ===========================================================================
    {
      id: "section-3",
      type: "textWithImage",
      content: {
        title: "Working with Transcripts",
        paragraphs: [
          "Zoom, Teams, and other platforms can generate transcripts. ChatGPT excels at turning these into useful summaries.",
          "",
          "**Why transcripts work well with ChatGPT:**",
          "- Contains everything said, not just what you remembered to write",
          "- Includes who said what for proper attribution",
          "- Reveals the actual flow of discussion",
          "",
          "**Pro tip:** Export transcripts immediately after meetings while the context is fresh, then process with ChatGPT during your next work block.",
        ],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-9-inline-1.webp",
        imageAlt: "Video conference call with participants",
      },
    },
    // ===========================================================================
    // SECTION 4: Transcript Summary Prompt
    // ===========================================================================
    {
      id: "section-4",
      type: "quickPrompt",
      content: {
        heading: "Transcript to Summary",
        description: "Convert a raw transcript into a polished meeting summary.",
        promptText: `I'm pasting a meeting transcript. Please create a concise meeting summary that includes:
1. Main topics discussed
2. Key decisions made
3. Action items with owners and deadlines
4. Unresolved questions or concerns
5. Next steps and follow-up timing

Here's the transcript:

[PASTE TRANSCRIPT HERE]

Keep it scannable and action-focused. Omit small talk and tangents.`,
      },
    },
    // ===========================================================================
    // SECTION 5: Structured Outputs
    // ===========================================================================
    {
      id: "section-5",
      type: "highlightCard",
      content: {
        heading: "Why Structure Matters",
        insights: [
          "Structured summaries are scannable in 30 seconds",
          "Action items with owners actually get done",
          "Clear decisions prevent 'I thought we agreed...' moments",
          "Follow-up questions surface unresolved issues early",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Action Item Extraction
    // ===========================================================================
    {
      id: "section-6",
      type: "quickPrompt",
      content: {
        heading: "Extract Action Items Only",
        description: "Sometimes you just need the to-do list from a meeting.",
        promptText: `Extract ONLY the action items from this meeting:

[PASTE MEETING NOTES OR TRANSCRIPT]

Format each as:
- [ ] [Specific task] - Owner: [Name] - Due: [Date if mentioned, otherwise 'ASAP']

If no owner is mentioned, flag as "UNASSIGNED"
If no deadline is mentioned, flag as "NEEDS DEADLINE"

Be specific about what needs to be done, not vague.`,
      },
    },
    // ===========================================================================
    // SECTION 7: Meeting Prep Workflow
    // ===========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Meeting Prep Workflow",
        paragraphs: [
          "ChatGPT isn't just for after meetings. Use it to prepare before meetings too. Agenda creation becomes effortless when you can input your meeting goals and get a structured, time-allocated agenda in seconds. This ensures every meeting has clear purpose and flow, preventing the all-too-common problem of meetings that wander without direction.",
          "Pre-read summaries help you respect everyone's time by condensing long documents into digestible briefs for participants. Instead of asking colleagues to read a twenty-page report before a meeting, you can provide a one-page summary that captures the essential information. This dramatically increases the likelihood that people actually come prepared.",
          "Question preparation is another powerful pre-meeting use case. You can ask ChatGPT to anticipate likely questions based on your meeting topic and prepare thoughtful answers in advance. This is especially valuable for high-stakes meetings where you want to appear knowledgeable and well-prepared. Research briefings round out the preparation toolkit, letting you get up to speed on unfamiliar topics quickly so you can participate meaningfully in discussions.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Agenda Creation Prompt
    // ===========================================================================
    {
      id: "section-8",
      type: "quickPrompt",
      content: {
        heading: "Meeting Agenda Template",
        description: "Create a structured agenda from your meeting goals.",
        promptText: `Create a meeting agenda:
- Meeting type: [decision-making / brainstorm / status update / 1:1]
- Duration: [30 min / 60 min / 90 min]
- Goal: [what we need to accomplish]
- Participants: [who's attending and their roles]
- Background: [relevant context]

Format with time allocations for each section. Include desired outcomes.`,
      },
    },
    // ===========================================================================
    // SECTION 9: Tool Reference
    // ===========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Use ChatGPT Console",
        task: "Transform meeting notes into structured summaries",
        feature: "Fast text processing and extraction",
        tip: "Paste raw notes or transcripts and ask for structured output with key decisions and action items",
      },
    },
    // ===========================================================================
    // SECTION 10: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Summarize Your Last Meeting",
        purpose:
          "Transform your notes from a recent meeting into a structured summary with action items.",
        instructions: [
          "Find notes from a meeting you attended this week",
          "Paste them into ChatGPT with the starter prompt",
          "Review the generated summary for accuracy",
          "Add or correct any missing action items or owners",
          "Save the result to share with your team",
        ],
        deliverable: "A structured meeting summary with key decisions and action items",
        estimatedTime: "5-8 minutes",
        starterPrompt:
          "Create a meeting summary from these notes. Include: Key Decisions, Action Items with owners and deadlines, Open Questions, and Next Steps.\n\n[PASTE YOUR NOTES HERE]",
        successCriteria: [
          "Converted raw notes into structured format",
          "Identified at least 2 action items with owners",
          "Summary captures key decisions accurately",
          "Ready to share with meeting participants",
        ],
      },
    },
    // ===========================================================================
    // SECTION 11: Completion
    // ===========================================================================
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Meeting Documentation Mastered",
        description:
          "You've learned to transform meeting chaos into structured clarity. From raw transcripts to action items, ChatGPT helps you capture what matters. Your next meeting will end with clear documentation in seconds, not hours.",
        xpReward: 100,
        buttonText: "Complete & Continue",
      },
    },
  ],
};
