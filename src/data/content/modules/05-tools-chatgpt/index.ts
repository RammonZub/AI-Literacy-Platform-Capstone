/**
 * Module 5: ChatGPT Mastery
 *
 * PURPOSE: Complete toolkit for personal and professional productivity with ChatGPT
 *
 * CHAPTERS:
 * - Chapter 1: ChatGPT Essentials (Lessons 5.1-5.5)
 * - Chapter 2: Professional Applications (Lessons 5.6-5.10)
 * - Chapter 3: Advanced Features (Lessons 5.11-5.15)
 * - Chapter 4: Advanced Features Deep Dive (Lessons 5.16-5.22)
 * - Chapter 5: Integrations & Capstone (Lessons 5.23-5.30)
 *
 * ESTIMATED TIME: 10 hours (600 minutes)
 *
 * TOTAL LESSONS: 30 lessons
 * TOTAL XP: ~3500 XP
 */

import type { Module } from "@/types/content";
import { chapter1Essentials } from "./chapter1-essentials";
import { lesson_5_6 } from "./chapter2-applications/lesson-5-6";
import { lesson_5_7 } from "./chapter2-applications/lesson-5-7";
import { lesson_5_8 } from "./chapter2-applications/lesson-5-8";
import { lesson_5_9 } from "./chapter2-applications/lesson-5-9";
import { lesson_5_10 } from "./chapter2-applications/lesson-5-10";
import { lesson_5_11 } from "./chapter3-advanced/lesson-5-11";
import { lesson_5_12 } from "./chapter3-advanced/lesson-5-12";
import { lesson_5_13 } from "./chapter3-advanced/lesson-5-13";
import { lesson_5_14 } from "./chapter3-advanced/lesson-5-14";
import { lesson_5_15 } from "./chapter3-advanced/lesson-5-15";
import { lesson_5_16 } from "./chapter4-advanced/lesson-5-16";
import { lesson_5_17 } from "./chapter4-advanced/lesson-5-17";
import { lesson_5_18 } from "./chapter4-advanced/lesson-5-18";
import { lesson_5_19 } from "./chapter4-advanced/lesson-5-19";
import { lesson_5_20 } from "./chapter4-advanced/lesson-5-20";
import { lesson_5_21 } from "./chapter4-advanced/lesson-5-21";
import { lesson_5_22 } from "./chapter4-advanced/lesson-5-22";
import { chapter5Integrations } from "./chapter5-integrations";

export const tools_chatgpt: Module = {
  id: "05-tools-chatgpt",
  title: "ChatGPT Mastery",
  description: "Complete toolkit for personal and professional productivity with ChatGPT",
  category: "AI Tools",
  // ChatGPT green from brand, adapted for our theme
  color: {
    from: "#10A37F", // ChatGPT green
    to: "#1A7F34", // Darker shade for gradients
  },
  // Custom cover image for ChatGPT Mastery
  imageUrl: "/images/courses/modules/module-chatgpt.webp",
  order: 5,
  estimatedMinutes: 600, // 10 hours (30 lessons)
  chapters: [
    // Chapter 1 uses the chapter sub-index which has full Lesson objects
    chapter1Essentials.chapters[0],
    {
      id: "ch5-2-applications",
      moduleId: "05-tools-chatgpt",
      title: "Professional Applications",
      description: "Apply ChatGPT to real-world business scenarios",
      order: 2,
      lessons: [lesson_5_6, lesson_5_7, lesson_5_8, lesson_5_9, lesson_5_10],
    },
    {
      id: "ch5-3-advanced",
      moduleId: "05-tools-chatgpt",
      title: "Advanced Features",
      description: "Custom GPTs, Projects, and advanced automation",
      order: 3,
      lessons: [lesson_5_11, lesson_5_12, lesson_5_13, lesson_5_14, lesson_5_15],
    },
    {
      id: "ch5-4-advanced",
      moduleId: "05-tools-chatgpt",
      title: "Advanced Features Deep Dive",
      description: "Deep exploration of ChatGPT's advanced capabilities",
      order: 4,
      lessons: [
        lesson_5_16,
        lesson_5_17,
        lesson_5_18,
        lesson_5_19,
        lesson_5_20,
        lesson_5_21,
        lesson_5_22,
      ],
    },
    chapter5Integrations,
  ],
};
