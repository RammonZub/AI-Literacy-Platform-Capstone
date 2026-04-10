/**
 * Lesson 8.17: Text-to-Speech with Orpheus
 *
 * CHAPTER: 5 - Audio & Long Documents
 * LESSON: 2 of 4 - Text-to-Speech Fundamentals
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Master Orpheus TTS for converting text into natural-sounding speech
 *
 * KEY RESPONSIBILITIES:
 * - Introduce Orpheus TTS capabilities and pricing
 * - Demonstrate commute learning workflow
 * - Show presentation voiceover creation
 * - Cover content accessibility applications
 * - Explain proofreading by listening technique
 */

import type { Lesson } from "@/types/content";

export const lesson_8_17: Lesson = {
  id: "lesson-8-17",
  chapterId: "ch8-5-audio",
  moduleId: "09-workflow-automation",
  title: "Text-to-Speech with Orpheus",
  description: "Convert written content into natural-sounding audio with Orpheus TTS",
  order: 17,
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
        imageSrc: "/images/courses/modules/09-workflow-automation/lesson-8-17-cover.webp",
        imageAlt: "Headphones and audio content listening",
        title: "Text-to-Speech with Orpheus",
        subtitle:
          "Transform any text into natural, human-like speech for flexible content consumption",
      },
    },
    // ===========================================================================
    // SECTION 1: What Is Orpheus TTS?
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "What Is Orpheus TTS?",
        paragraphs: [
          "Orpheus is ChatGPT's text-to-speech model that converts written text into natural-sounding audio. Unlike robotic TTS of the past, Orpheus produces speech with proper intonation, rhythm, and emphasis.",
          "",
          "The pricing is straightforward: approximately **$22 per million characters** of text processed. For context, a typical article (2,000 words) costs about $0.06 to convert to audio.",
          "",
          "Combined with ChatGPT's speed, you get near-instant audio generation, making it practical for real-time applications.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Commute Learning Workflow
    // ===========================================================================
    {
      id: "section-2",
      type: "textWithBullets",
      content: {
        title: "Commute Learning Workflow",
        paragraphs: ["Turn your commute into productive learning time:"],
        bullets: [
          "**Step 1 - Collect**: Save articles, reports, and documents you want to read during the day",
          "**Step 2 - Convert**: Use Orpheus to generate audio versions before you leave",
          "**Step 3 - Listen**: Consume content hands-free while driving, walking, or taking transit",
          "**Step 4 - Process**: Arrive at work having already absorbed key information",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: The Listening Advantage
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "Why Audio Learning Works",
        insights: [
          "Average American commute: 27 minutes each way, 54 minutes daily",
          "That's 4.5 hours per week of potential learning time",
          "Audio allows consumption while doing other activities",
          "Many people retain information better through listening than reading",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Presentation Voiceovers
    // ===========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Presentation Voiceovers",
        paragraphs: [
          "Need narration for slides, videos, or presentations? Orpheus eliminates the need for expensive voice talent or recording equipment.",
          "",
          "The workflow is efficient:",
          "1. Write your script as you normally would for slides",
          "2. Run it through Orpheus for natural speech output",
          "3. Sync the audio with your visual content",
          "4. Update narration by simply editing text and regenerating",
          "",
          "This makes it practical to create multiple language versions or update content without re-recording.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Audio Visual
    // ===========================================================================
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Professional Audio Made Simple",
        paragraphs: [
          "Orpheus produces consistent, professional-quality narration. No retakes, no microphone setup, no background noise. Just clean audio ready for your presentations.",
        ],
        imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-17-inline-1.webp",
        imageAlt: "Recording studio and audio production",
      },
    },
    // ===========================================================================
    // SECTION 6: Content Accessibility
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Content Accessibility",
        paragraphs: [
          "Text-to-speech technology is transformative for accessibility, opening up written content to audiences who would otherwise struggle to consume it. For blind and low-vision users, TTS provides independence, allowing them to access articles, documents, and books without relying on others to read aloud. This autonomy is invaluable for both professional productivity and personal enrichment.",
          "Users with reading difficulties, particularly those with dyslexia, often find audio significantly easier to process than text. While reading might be slow and mentally taxing, listening allows them to absorb information at a natural pace without the cognitive load of decoding written words. Language learners also benefit tremendously from hearing proper pronunciation and natural rhythm, which helps develop their listening comprehension and speaking skills simultaneously.",
          "Beyond specific accessibility needs, TTS enables multitasking for anyone who wants to consume content while their eyes and hands are occupied. Whether driving, exercising, cooking, or doing manual work, audio allows productive use of time that would otherwise be lost. This also serves aging populations who may find it increasingly difficult to read small text or who experience eye strain from extended reading sessions.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Proofreading by Listening
    // ===========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Proofreading by Listening",
        paragraphs: [
          "Here's a professional secret: your ears catch errors your eyes miss.",
          "",
          "When you read your own writing, your brain fills in gaps and corrects mistakes automatically. But when you hear it spoken aloud, problems become obvious:",
          "- Awkward phrasing that looked fine on screen",
          "- Missing words that your brain supplied while reading",
          "- Run-on sentences that need breaking up",
          "- Tone inconsistencies across sections",
          "",
          "Convert your draft to audio, listen during a walk, and return with fresh insights for editing.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Quick Prompt Example
    // ===========================================================================
    {
      id: "section-8",
      type: "quickPrompt",
      content: {
        heading: "Prepare Content for Audio",
        description:
          "Before converting to speech, optimize your text for listening with this prompt:",
        promptText:
          "I'm going to convert this text to speech. Please optimize it for audio consumption:\n\n1. Replace abbreviations with full words (e.g., 'e.g.' to 'for example')\n2. Expand acronyms on first use\n3. Convert numbered lists to narrative flow\n4. Add pauses where needed with comma placement\n5. Simplify complex sentences for easier listening\n\nHere's my text:\n\n[PASTE YOUR TEXT HERE]",
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
        task: "Convert text to natural speech",
        feature: "Orpheus TTS - Natural text-to-speech with proper intonation",
        tip: "Optimize text for audio first by expanding abbreviations and converting lists to narrative flow.",
      },
    },
    // ===========================================================================
    // SECTION 10: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Prepare Content for Audio",
        purpose: "Optimize a document for text-to-speech conversion for commute learning.",
        instructions: [
          "Find an article, report, or document you've been meaning to read",
          "Use ChatGPT to optimize it for audio consumption with the starter prompt",
          "Review the optimized version for natural flow",
          "Note what changes were made (abbreviations, lists to narrative, etc.)",
          "Plan to use Orpheus TTS when available for your next commute",
        ],
        deliverable: "An audio-optimized version of a document ready for TTS conversion",
        estimatedTime: "7-10 minutes",
        starterPrompt:
          "Optimize this text for text-to-speech conversion:\n\n1. Replace abbreviations with full words (e.g., 'e.g.' to 'for example')\n2. Expand acronyms on first use\n3. Convert numbered lists to narrative flow\n4. Add natural pauses with comma placement\n5. Simplify complex sentences\n\nHere's the text:\n\n[PASTE YOUR DOCUMENT HERE]",
        successCriteria: [
          "Converted a real document for audio consumption",
          "At least 5 specific audio optimizations were made",
          "Text flows naturally when read aloud",
          "Document is ready for TTS conversion",
        ],
      },
    },
    // ===========================================================================
    // SECTION 11: Completion
    // ===========================================================================
    {
      id: "section-10",
      type: "completion",
      content: {
        title: "Text-to-Speech Mastery",
        description:
          "You can now transform any written content into natural audio. From commute learning to presentation voiceovers, Orpheus gives you flexibility in how you consume and create content. Next, you'll learn to process documents that were previously too long for AI to handle effectively.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
