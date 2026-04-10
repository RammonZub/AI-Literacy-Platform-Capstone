/**
 * Chapter 5: Audio & Long Documents
 *
 * PURPOSE: Master voice transcription, text-to-speech, and long document analysis
 *
 * LESSONS:
 * - Lesson 8.16: Voice Transcription with Whisper
 * - Lesson 8.17: Text-to-Speech with Orpheus
 * - Lesson 8.18: Long Document Analysis
 * - Lesson 8.19: Complete Audio-to-Action Pipeline
 *
 * ESTIMATED TIME: 60 minutes (15 minutes per lesson)
 *
 * XP REWARD: 100 XP per lesson x 4 lessons = 400 XP
 *
 * KEY LEARNING OUTCOMES:
 * - Transcribe audio at 228x real-time speed with Whisper
 * - Convert text to natural speech with Orpheus
 * - Analyze documents up to 256K tokens with Kimi K2
 * - Build automated audio-to-action pipelines
 */

import type { Chapter } from "@/types/content";
import { lesson_8_16 } from "./lesson-8-16";
import { lesson_8_17 } from "./lesson-8-17";
import { lesson_8_18 } from "./lesson-8-18";
import { lesson_8_19 } from "./lesson-8-19";

export const chapter5Audio = {
  id: "ch8-5-audio",
  moduleId: "09-workflow-automation",
  title: "Audio & Long Documents",
  description: "Master voice transcription, TTS, and long document analysis",
  category: "AI Tools",
  color: {
    from: "#FF6B35", // ChatGPT Orange
    to: "#D32F2F", // Speed Red
  },
  imageUrl: "/images/lessons/abstract-data-flow.jpg",
  order: 5,
  estimatedMinutes: 60,
  chapters: [
    {
      id: "ch8-5-audio",
      moduleId: "09-workflow-automation",
      title: "Audio & Long Documents",
      description: "Master voice transcription, TTS, and long document analysis",
      order: 5,
      lessons: [lesson_8_16, lesson_8_17, lesson_8_18, lesson_8_19],
    },
  ],
};

// Re-export lessons for direct imports
export { lesson_8_16, lesson_8_17, lesson_8_18, lesson_8_19 };
