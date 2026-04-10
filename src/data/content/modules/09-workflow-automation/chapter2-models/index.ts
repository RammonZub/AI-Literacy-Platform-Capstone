/**
 * Chapter 2: Routing & Capability
 *
 * PURPOSE: Module 9—fast vs deep passes, explicit routing across
 * ChatGPT, Claude, Gemini, and Midjourney, and empirical comparison habits.
 */

import { lesson_8_4 } from "./lesson-8-4";
import { lesson_8_5 } from "./lesson-8-5";
import { lesson_8_6 } from "./lesson-8-6";
import { lesson_8_7 } from "./lesson-8-7";

export const chapter2Models = {
  id: "ch8-2-models",
  moduleId: "09-workflow-automation",
  title: "Routing & Capability",
  description: "Fast vs deep passes, core tool routing, and side-by-side testing",
  category: "AI Tools",
  color: {
    from: "#FF6B35",
    to: "#D32F2F",
  },
  imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-4-cover.webp",
  order: 2,
  estimatedMinutes: 60,
  chapters: [
    {
      id: "ch8-2-models",
      moduleId: "09-workflow-automation",
      title: "Routing & Capability",
      description: "Fast vs deep passes, core tool routing, and side-by-side testing",
      order: 2,
      lessons: [lesson_8_4, lesson_8_5, lesson_8_6, lesson_8_7],
    },
  ],
};

export { lesson_8_4, lesson_8_5, lesson_8_6, lesson_8_7 };
