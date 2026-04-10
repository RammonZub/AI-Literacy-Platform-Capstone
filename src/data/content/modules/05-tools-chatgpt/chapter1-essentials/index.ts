/**
 * Chapter 1: ChatGPT Essentials
 *
 * PURPOSE: Build foundational skills for effective ChatGPT use
 *
 * CHAPTERS:
 * - Chapter 1: ChatGPT Essentials (Lessons 5.1-5.15)
 *
 * ESTIMATED TIME: 75 minutes (12 minutes intro + 63 minutes lessons)
 *
 * XP REWARD: 100 XP per lesson × 15 lessons = 1500 XP
 */

import type { Lesson } from "@/types/content";
import { lesson_5_1 } from "./lesson-5-1";
import { lesson_5_2 } from "./lesson-5-2";
import { lesson_5_3 } from "./lesson-5-3";
import { lesson_5_4 } from "./lesson-5-4";
import { lesson_5_5 } from "./lesson-5-5";

export const chapter1Essentials = {
  id: "ch5-1-essentials",
  moduleId: "05-tools-chatgpt",
  title: "ChatGPT Essentials",
  description: "Master the core features that make ChatGPT powerful",
  category: "AI Tools",
  color: {
    from: "#10A37F",
    to: "#1A7F34",
  },
  imageUrl: "/images/lessons/brain-neural-network.jpg",
  order: 1,
  estimatedMinutes: 75,
  chapters: [
    {
      id: "ch5-1-essentials",
      moduleId: "05-tools-chatgpt",
      title: "ChatGPT Essentials",
      description: "Build foundational skills for effective ChatGPT use",
      order: 1,
      lessons: [lesson_5_1, lesson_5_2, lesson_5_3, lesson_5_4, lesson_5_5],
    },
  ],
};
