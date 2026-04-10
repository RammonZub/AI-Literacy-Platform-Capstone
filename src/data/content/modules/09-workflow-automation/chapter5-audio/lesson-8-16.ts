/**
 * Lesson 8.16: Voice Transcription with Whisper
 *
 * CHAPTER: 5 - Audio & Long Documents
 * LESSON: 1 of 4 - Voice Transcription Fundamentals
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Master Whisper Large V3 Turbo for voice transcription at 228x real-time speed
 *
 * KEY RESPONSIBILITIES:
 * - Introduce Whisper's capabilities and cost efficiency
 * - Demonstrate meeting transcription workflows
 * - Show voice notes to text conversion
 * - Cover content creation from audio
 * - Address privacy considerations
 */

import type { Lesson } from "@/types/content";

export const lesson_8_16: Lesson = {
  id: "lesson-8-16",
  chapterId: "ch8-5-audio",
  moduleId: "09-workflow-automation",
  title: "Voice Transcription with Whisper",
  description: "Convert audio to text at 228x real-time speed with Whisper Large V3 Turbo",
  order: 16,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // HERO IMAGE SECTION
    // ===========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-16-cover.webp",
        imageAlt: "Microphone for voice recording and audio transcription",
        title: "Voice Transcription with Whisper",
        subtitle: "Transform any audio into accurate text at 228x real-time speed",
      },
    },
    // ===========================================================================
    // SECTION 1: The Whisper Revolution
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Whisper Revolution",
        paragraphs: [
          "OpenAI's Whisper changed everything for audio transcription. Now ChatGPT makes it absurdly fast.",
          "",
          "Whisper Large V3 Turbo on ChatGPT delivers **228x real-time speed**. That means one hour of audio transcribes in about 16 seconds. The cost? Approximately **$0.04 per hour of audio**.",
          "",
          "Compare this to traditional transcription services that charge $1-3 per minute and take hours to deliver. The economics are transformative for anyone who works with spoken content.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Meeting Transcription Workflow
    // ===========================================================================
    {
      id: "section-2",
      type: "textWithBullets",
      content: {
        title: "Meeting Transcription Workflow",
        paragraphs: ["Here's the complete workflow for transcribing meetings:"],
        bullets: [
          "**Step 1 - Record**: Use your phone, laptop, or dedicated recorder to capture the meeting audio",
          "**Step 2 - Upload**: Send the audio file to ChatGPT's Whisper API endpoint",
          "**Step 3 - Transcribe**: Receive accurate text in seconds, not hours",
          "**Step 4 - Summarize**: Feed the transcript to Llama for instant meeting summaries",
          "**Step 5 - Action Items**: Extract tasks, decisions, and follow-ups automatically",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Speed Comparison Visual
    // ===========================================================================
    {
      id: "section-3",
      type: "textWithImage",
      content: {
        title: "The Speed Difference",
        paragraphs: [
          "Traditional transcription services take 24-48 hours for turnaround. Whisper on ChatGPT processes the same content in under a minute. This isn't incremental improvement, it's a paradigm shift.",
        ],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-16-inline-1.webp",
        imageAlt: "Business meeting and collaboration",
      },
    },
    // ===========================================================================
    // SECTION 4: Voice Notes to Text
    // ===========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Voice Notes to Text",
        paragraphs: [
          "Speaking is approximately **3x faster than typing** for most people. Yet we still default to typing because voice notes are hard to organize and search.",
          "",
          "With Whisper, you can:",
          "- Dictate ideas while walking, driving, or cooking",
          "- Upload voice memos for instant transcription",
          "- Search through spoken content as easily as text",
          "- Convert brain dumps into structured notes",
          "",
          "The workflow is simple: record your thoughts, upload to ChatGPT, receive clean text ready for editing or analysis.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Content Creation from Audio
    // ===========================================================================
    {
      id: "section-5",
      type: "highlightCard",
      content: {
        heading: "Content Creation Superpower",
        insights: [
          "Speaking speed averages 150 words per minute; typing averages 40",
          "Record a 10-minute voice note = ~1,500 words of raw content",
          "Transcribe in 3 seconds, then use Llama to structure and polish",
          "Perfect for bloggers, authors, and content creators who think better out loud",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Practical Example
    // ===========================================================================
    {
      id: "section-6",
      type: "quickPrompt",
      content: {
        heading: "Try It: Summarize a Transcript",
        description: "After transcribing audio, use this prompt to extract key information:",
        promptText:
          "I've transcribed a meeting/voice note. Please:\n\n1. Summarize the main points in 3-5 bullet points\n2. Extract any action items or decisions made\n3. Identify the key participants and their contributions\n4. Flag any topics that need follow-up\n\nHere's the transcript:\n\n[PASTE YOUR TRANSCRIPT HERE]",
      },
    },
    // ===========================================================================
    // SECTION 7: Privacy Considerations
    // ===========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Privacy Considerations",
        paragraphs: [
          "Before uploading audio to any transcription service, you need to carefully consider the privacy implications. Sensitive information deserves special handling: never upload recordings containing passwords, financial data, personal identifiers, or other confidential details without proper consent from all parties involved. The convenience of instant transcription doesn't override the responsibility to protect sensitive data.",
          "Participant consent is both an ethical and legal requirement in many jurisdictions. Before recording and transcribing conversations, especially in professional settings, ensure you have explicit permission from everyone involved. Some regions require all-party consent, meaning everyone in the meeting must agree to be recorded. Understanding these requirements protects both you and your organization from potential legal issues.",
          "Data retention policies vary between services, so take time to understand how long your audio files and transcripts are stored, who has access to them, and what security measures are in place. For highly confidential meetings involving trade secrets, legal matters, or sensitive business strategies, consider on-premise transcription solutions that keep data entirely within your control. Finally, always check your organization's policies on external AI services before uploading work-related audio content.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Tool Reference
    // ===========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Use ChatGPT Console",
        task: "Transcribe audio with Whisper",
        feature: "Whisper Large V3 Turbo - 228x real-time audio transcription",
        tip: "Upload clean audio files (MP3, M4A, WAV) for best accuracy. One hour of audio transcribes in ~16 seconds.",
      },
    },
    // ===========================================================================
    // SECTION 9: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Transcribe and Analyze",
        purpose:
          "Create a workflow to transcribe audio and extract action items using ChatGPT's speed.",
        instructions: [
          "Record a 2-3 minute voice note about your upcoming tasks or a meeting recap",
          "If you have access to ChatGPT's Whisper API, transcribe the audio",
          "Paste the transcript into ChatGPT with Llama for analysis",
          "Extract key points, action items, and deadlines",
          "Compare the time to manual note-taking",
        ],
        deliverable: "A structured summary with action items extracted from your voice note",
        estimatedTime: "8-10 minutes",
        starterPrompt:
          "I've transcribed a voice note. Please analyze it and provide:\n\n1. **Key Points**: Main topics discussed\n2. **Action Items**: Tasks I need to do (with deadlines if mentioned)\n3. **Priority**: Which items are most urgent\n4. **Questions**: Anything unclear that I should revisit\n\nHere's the transcript:\n\n[PASTE TRANSCRIPT HERE]",
        successCriteria: [
          "Recorded a voice note capturing real thoughts/tasks",
          "Used transcription (yours or the lesson's example structure)",
          "Extracted structured action items from the transcript",
          "Understand the workflow for future voice notes",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: Completion
    // ===========================================================================
    {
      id: "section-9",
      type: "completion",
      content: {
        title: "Voice Transcription Mastered",
        description:
          "You now understand how to convert any audio to text at unprecedented speed. Whisper's 228x real-time transcription changes the economics of working with spoken content. Next, you'll learn to go the other direction: converting text into natural speech.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
