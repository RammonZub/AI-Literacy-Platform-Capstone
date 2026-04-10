/**
 * Chapter 4: Projects & Knowledge Bases
 *
 * PURPOSE: Master Claude's most powerful organizational feature
 *
 * CHAPTERS:
 * - Chapter 4: Projects & Knowledge Bases (Lessons 6.16-6.20)
 *
 * ESTIMATED TIME: 60 minutes (5 lessons × 12 min each)
 *
 * XP REWARD: 100 XP per lesson × 5 lessons = 500 XP
 *
 * KEY DIFFERENTIATOR: This chapter covers Claude's Projects feature,
 * which is a major differentiator from ChatGPT due to:
 * - Persistent knowledge bases across conversations
 * - Project-specific custom instructions
 * - Document upload and reference capabilities
 * - Organization for ongoing work
 */

import { lesson_6_16 } from "./lesson-6-16";
import { lesson_6_17 } from "./lesson-6-17";
import { lesson_6_18 } from "./lesson-6-18";
import { lesson_6_19 } from "./lesson-6-19";
import { lesson_6_20 } from "./lesson-6-20";

export const chapter4Projects = {
  id: "ch6-4-projects",
  moduleId: "06-tools-claude",
  title: "Projects & Knowledge Bases",
  description: "Master Claude's most powerful organizational feature for ongoing work",
  category: "AI Tools",
  color: {
    from: "#D97706", // Claude Orange
    to: "#B45309", // Darker Orange
  },
  imageUrl: "/images/lessons/digital-structure.jpg",
  order: 4,
  estimatedMinutes: 60,
  chapters: [
    {
      id: "ch6-4-projects",
      moduleId: "06-tools-claude",
      title: "Projects & Knowledge Bases",
      description:
        "Organize conversations, build knowledge bases, and maintain context across sessions",
      order: 4,
      lessons: [lesson_6_16, lesson_6_17, lesson_6_18, lesson_6_19, lesson_6_20],
    },
  ],
};

// Export individual lessons for direct access
export { lesson_6_16 } from "./lesson-6-16";
export { lesson_6_17 } from "./lesson-6-17";
export { lesson_6_18 } from "./lesson-6-18";
export { lesson_6_19 } from "./lesson-6-19";
export { lesson_6_20 } from "./lesson-6-20";
