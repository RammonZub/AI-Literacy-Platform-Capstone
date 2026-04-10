/**
 * Module 9: Workflow and Automation
 *
 * Teaches chained, multi-step professional workflows across tools. Lesson bodies
 * reference fast inference tooling where relevant; Module 9 follows the tool-mastery
 * modules (e.g. Midjourney in Module 8) in the catalog sequence.
 */

import type { Module } from "@/types/content";
import { chapter1Essentials } from "./chapter1-essentials";
import { chapter2Models } from "./chapter2-models";
import { chapter3Workflows } from "./chapter3-workflows";
import { chapter4Compound } from "./chapter4-compound";
import { chapter5Audio } from "./chapter5-audio";
import { chapter6Integrations } from "./chapter6-integrations";
import { chapter7Strategies } from "./chapter7-strategies";
import { chapter8BestPractices } from "./chapter8-best-practices";

export const workflow_automation: Module = {
  id: "09-workflow-automation",
  title: "Workflow and Automation",
  description:
    "Combine AI tools into coherent workflows—research, drafting, visuals, and delivery—for multi-step professional projects",
  category: "AI Tools",
  color: {
    from: "#FF6B35",
    to: "#D32F2F",
  },
  imageUrl: "/images/courses/modules/09-workflow-automation/lesson-8-0-cover.webp",
  order: 9,
  estimatedMinutes: 450,
  chapters: [
    chapter1Essentials.chapters[0],
    chapter2Models.chapters[0],
    chapter3Workflows.chapters[0],
    chapter4Compound.chapters[0],
    chapter5Audio.chapters[0],
    chapter6Integrations.chapters[0],
    chapter7Strategies.chapters[0],
    chapter8BestPractices.chapters[0],
  ],
};

// Export chapter modules for easier imports
export { chapter1Essentials };
export { chapter2Models };
export { chapter3Workflows };
export { chapter4Compound };
export { chapter5Audio };
export { chapter6Integrations };
export { chapter7Strategies };
export { chapter8BestPractices };

// Export individual lessons for direct access
// Chapter 1: Getting Started
export { lesson_8_0 } from "./chapter1-essentials/lesson-8-0";
export { lesson_8_1 } from "./chapter1-essentials/lesson-8-1";
export { lesson_8_2 } from "./chapter1-essentials/lesson-8-2";
export { lesson_8_3 } from "./chapter1-essentials/lesson-8-3";
// Chapter 2: Model Selection Mastery
export { lesson_8_4 } from "./chapter2-models/lesson-8-4";
export { lesson_8_5 } from "./chapter2-models/lesson-8-5";
export { lesson_8_6 } from "./chapter2-models/lesson-8-6";
export { lesson_8_7 } from "./chapter2-models/lesson-8-7";
// Chapter 3: Daily Productivity Workflows
export { lesson_8_8 } from "./chapter3-workflows/lesson-8-8";
export { lesson_8_9 } from "./chapter3-workflows/lesson-8-9";
export { lesson_8_10 } from "./chapter3-workflows/lesson-8-10";
export { lesson_8_11 } from "./chapter3-workflows/lesson-8-11";
export { lesson_8_12 } from "./chapter3-workflows/lesson-8-12";
// Chapter 4: Compound AI & Research
export { lesson_8_13 } from "./chapter4-compound/lesson-8-13";
export { lesson_8_14 } from "./chapter4-compound/lesson-8-14";
export { lesson_8_15 } from "./chapter4-compound/lesson-8-15";
// Chapter 5: Audio & Long Documents
export { lesson_8_16 } from "./chapter5-audio/lesson-8-16";
export { lesson_8_17 } from "./chapter5-audio/lesson-8-17";
export { lesson_8_18 } from "./chapter5-audio/lesson-8-18";
export { lesson_8_19 } from "./chapter5-audio/lesson-8-19";
// Chapter 6: Integrations & Connections
export { lesson_8_20 } from "./chapter6-integrations/lesson-8-20";
export { lesson_8_21 } from "./chapter6-integrations/lesson-8-21";
export { lesson_8_22 } from "./chapter6-integrations/lesson-8-22";
// Chapter 7: Advanced Strategies
export { lesson_8_23 } from "./chapter7-strategies/lesson-8-23";
export { lesson_8_24 } from "./chapter7-strategies/lesson-8-24";
export { lesson_8_25 } from "./chapter7-strategies/lesson-8-25";
// Chapter 8: Best Practices & Implementation
export { lesson_8_26 } from "./chapter8-best-practices/lesson-8-26";
export { lesson_8_27 } from "./chapter8-best-practices/lesson-8-27";
export { lesson_8_28 } from "./chapter8-best-practices/lesson-8-28";
export { lesson_8_29 } from "./chapter8-best-practices/lesson-8-29";
