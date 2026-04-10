/**
 * Chapter 6: Integrations & Connections
 *
 * Module 8 - Workflow and Automation
 *
 * PURPOSE: Connect ChatGPT to existing tools and workflows
 *
 * CHAPTER OVERVIEW:
 * This chapter focuses on practical integrations that extend ChatGPT's speed
 * into your existing productivity tools and workflows.
 *
 * LESSONS:
 * - 8.20: No-Code Integrations (15 min, 100 XP)
 * - 8.21: Google Workspace & Spreadsheets (15 min, 100 XP)
 * - 8.22: Simple API Concepts (15 min, 100 XP)
 *
 * TOTAL DURATION: 45 minutes
 * TOTAL XP: 300 XP
 *
 * KEY SKILLS DEVELOPED:
 * - No-code automation with Zapier, Make, and Vercel
 * - Google Workspace integration (Gmail, Drive, Sheets, Calendar)
 * - Basic API understanding for developer communication
 * - Choosing the right integration approach for different needs
 */

import type { Chapter } from "@/types/content";
import { lesson_8_20 } from "./lesson-8-20";
import { lesson_8_21 } from "./lesson-8-21";
import { lesson_8_22 } from "./lesson-8-22";

export const chapter6Integrations = {
  id: "ch8-6-integrations",
  moduleId: "09-workflow-automation",
  title: "Integrations & Connections",
  description: "Connect ChatGPT to your existing tools and workflows",
  category: "AI Tools",
  color: {
    from: "#FF6B35", // ChatGPT Orange
    to: "#D32F2F", // Speed Red
  },
  imageUrl: "/images/lessons/digital-structure.jpg",
  order: 6,
  estimatedMinutes: 45,
  chapters: [
    {
      id: "ch8-6-integrations",
      moduleId: "09-workflow-automation",
      title: "Integrations & Connections",
      description: "Connect ChatGPT to your existing tools and workflows",
      order: 6,
      lessons: [lesson_8_20, lesson_8_21, lesson_8_22],
    },
  ] as Chapter[],
};

// Export individual lessons for direct access
export { lesson_8_20, lesson_8_21, lesson_8_22 };
