/**
 * Lesson 8.19: Complete Audio-to-Action Pipeline
 *
 * CHAPTER: 5 - Audio & Long Documents
 * LESSON: 4 of 4 - Integration & Automation
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Combine Whisper, Llama, and automation for end-to-end audio processing
 *
 * KEY RESPONSIBILITIES:
 * - Demonstrate the full meeting pipeline
 * - Cover recording best practices
 * - Show automated workflow options
 * - Provide cost analysis
 * - Emphasize quality assurance practices
 */

import type { Lesson } from "@/types/content";

export const lesson_8_19: Lesson = {
  id: "lesson-8-19",
  chapterId: "ch8-5-audio",
  moduleId: "09-workflow-automation",
  title: "Complete Audio-to-Action Pipeline",
  description: "Build an end-to-end workflow from recording to action items in under 2 minutes",
  order: 19,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "exercise",
  sections: [
    // ===========================================================================
    // HERO IMAGE SECTION
    // ===========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-19-cover.webp",
        imageAlt: "Audio recording and automation workflow",
        title: "Complete Audio-to-Action Pipeline",
        subtitle: "Combine everything into a powerful workflow from recording to action items",
      },
    },
    // ===========================================================================
    // SECTION 1: The Full Meeting Pipeline
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Full Meeting Pipeline",
        paragraphs: [
          "Here's the complete workflow that transforms raw audio into actionable insights:",
          "",
          "**Record** your meeting using any device (phone, laptop, dedicated recorder)",
          "",
          "**Whisper** transcribes the audio in seconds (16 seconds for 1 hour of audio)",
          "",
          "**Llama** analyzes the transcript to extract structure, summaries, and insights",
          "",
          "**Action Items** are automatically identified, assigned, and formatted",
          "",
          "Total time from recording to organized notes? Under 2 minutes for most meetings.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Pipeline Steps Visual
    // ===========================================================================
    {
      id: "section-2",
      type: "textWithBullets",
      content: {
        title: "The 4-Step Pipeline",
        paragraphs: ["Each step is optimized for speed and accuracy:"],
        bullets: [
          "**1. Record (Real-time)**: Capture clean audio with minimal background noise",
          "**2. Transcribe (~16 sec/hour)**: Whisper converts speech to text with high accuracy",
          "**3. Analyze (~2-5 sec)**: Llama extracts meaning, identifies speakers, finds action items",
          "**4. Deliver (Instant)**: Formatted summary and task list ready to share",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Recording Best Practices
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "Recording Best Practices",
        insights: [
          "Place recording device centrally to capture all speakers clearly",
          "Minimize background noise (close windows, mute notifications)",
          "Encourage participants to speak one at a time",
          "Start recording before the meeting begins to capture context",
          "Save in common formats (MP3, M4A, WAV) for easy upload",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Audio Quality Matters
    // ===========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Audio Quality Translates to Accuracy",
        paragraphs: [
          "Whisper is remarkably tolerant of audio quality, but better input means better output:",
          "",
          "**Excellent audio** (studio quality): 95%+ accuracy on technical terminology",
          "",
          "**Good audio** (quiet room, decent mic): 90-95% accuracy, occasional corrections needed",
          "",
          "**Acceptable audio** (conference room, some noise): 85-90% accuracy, review recommended",
          "",
          "**Poor audio** (noisy environment, distance): 70-85% accuracy, significant editing required",
          "",
          "Invest in audio quality upfront to minimize editing time downstream.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Automated Workflows
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Automated Workflows with Zapier",
        paragraphs: [
          "For recurring meetings, automation saves time:",
          "",
          "1. **Trigger**: New recording saved to cloud folder (Dropbox, Google Drive)",
          "2. **Action 1**: Send audio to ChatGPT Whisper API",
          "3. **Action 2**: Send transcript to Llama with your analysis prompt",
          "4. **Action 3**: Create task in project management tool (Asana, Notion, Linear)",
          "5. **Action 4**: Email summary to participants",
          "",
          "Set it up once, and every meeting is automatically processed. No manual intervention required.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Automation Visual
    // ===========================================================================
    {
      id: "section-6",
      type: "textWithImage",
      content: {
        title: "Automation in Practice",
        paragraphs: [
          "With proper automation, your team meeting ends, and by the time you return to your desk, the summary and action items are already in your project management system.",
        ],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-19-inline-1.webp",
        imageAlt: "Business automation and workflow dashboard",
      },
    },
    // ===========================================================================
    // SECTION 7: Cost Analysis
    // ===========================================================================
    {
      id: "section-7",
      type: "textWithBullets",
      content: {
        title: "Cost Analysis: AI vs Traditional",
        paragraphs: ["The economics are overwhelmingly in favor of AI transcription:"],
        bullets: [
          "**Traditional transcription**: $1-3 per minute, 24-48 hour turnaround",
          "**AI on ChatGPT**: $0.04 per hour, under 1 minute turnaround",
          "**Example 1-hour meeting**: Traditional = $60-180, AI = $0.04",
          "**Annual savings** (10 meetings/week): $31,200-93,600 vs $20.80",
          "**Time savings**: Hours of waiting eliminated, instant availability",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Quality Assurance
    // ===========================================================================
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Quality Assurance: Always Review",
        paragraphs: [
          "AI is powerful, but not infallible. Build review into your workflow:",
          "",
          "**Accuracy check**: Skim the transcript for obvious errors, especially names and technical terms",
          "",
          "**Context verification**: Confirm that action items match what you remember from the meeting",
          "",
          "**Attribution**: Verify that tasks are assigned to the correct people",
          "",
          "**Completeness**: Check that important decisions weren't missed",
          "",
          "Think of AI as a highly efficient first draft. Your expertise ensures the final quality.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: Quick Prompt for Meeting Summaries
    // ===========================================================================
    {
      id: "section-9",
      type: "quickPrompt",
      content: {
        heading: "Meeting Summary Prompt",
        description: "Use this prompt template for comprehensive meeting analysis:",
        promptText:
          "Analyze this meeting transcript and provide:\n\n## Meeting Summary\n[A 2-3 paragraph overview of what was discussed]\n\n## Key Decisions\n- [Decision 1]\n- [Decision 2]\n\n## Action Items\n| Task | Owner | Due Date |\n|------|-------|----------|\n| [task] | [name] | [date] |\n\n## Open Questions\n- [Question that needs follow-up]\n\n## Next Steps\n- [What happens next]\n\nHere's the transcript:\n\n[PASTE TRANSCRIPT HERE]",
      },
    },
    // ===========================================================================
    // SECTION 10: Chapter Wrap-Up
    // ===========================================================================
    {
      id: "section-10",
      type: "highlightCard",
      content: {
        heading: "What You've Learned in Chapter 5",
        insights: [
          "Whisper: Transcribe audio at 228x real-time speed for $0.04/hour",
          "Orpheus: Convert text to natural speech for commute learning and accessibility",
          "Kimi K2: Analyze 256K tokens (~200 pages) in a single conversation",
          "Complete Pipeline: Record to action items in under 2 minutes",
          "Automation: Set up once, process every meeting automatically",
        ],
      },
    },
    // ===========================================================================
    // SECTION 11: Tool Reference
    // ===========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Use ChatGPT with Zapier/Make",
        task: "Build automated audio-to-action pipeline",
        feature: "Whisper + Llama combination for transcription and analysis",
        tip: "Start with manual workflow first, then automate with Zapier once you have reliable prompts.",
      },
    },
    // ===========================================================================
    // SECTION 12: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Design Your Meeting Pipeline",
        purpose:
          "Create a complete workflow for processing meetings from recording to action items.",
        instructions: [
          "Document your current meeting note-taking process",
          "Design the pipeline: Record -> Transcribe -> Summarize -> Action Items",
          "Create your meeting summary prompt template",
          "Test the template with notes from your last meeting",
          "Plan where automation (Zapier/Make) could help",
        ],
        deliverable: "A documented meeting processing pipeline with templates and automation plan",
        estimatedTime: "10-12 minutes",
        starterPrompt:
          "Analyze this meeting and provide:\n\n## Meeting Summary\n[2-3 paragraph overview]\n\n## Key Decisions\n- [Decision 1]\n- [Decision 2]\n\n## Action Items\n| Task | Owner | Due Date |\n|------|-------|----------|\n| [task] | [name] | [date] |\n\n## Open Questions\n- [Question needing follow-up]\n\n## Next Steps\n- [What happens next]\n\nHere's the transcript/notes:\n\n[PASTE HERE]",
        successCriteria: [
          "Documented current vs. proposed meeting process",
          "Created a reusable meeting summary template",
          "Tested template with real meeting content",
          "Identified at least one automation opportunity",
        ],
      },
    },
    // ===========================================================================
    // SECTION 13: Completion
    // ===========================================================================
    {
      id: "section-12",
      type: "completion",
      content: {
        title: "Audio & Long Documents Mastered",
        description:
          "You've completed the Audio & Long Documents chapter. You can now transcribe audio at unprecedented speed, convert text to speech, analyze documents up to 200 pages, and build automated pipelines from recording to action items. These skills dramatically expand what's practical with AI assistance.",
        xpReward: 100,
        buttonText: "Complete Chapter 5",
      },
    },
  ],
};
