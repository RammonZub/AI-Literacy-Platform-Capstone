/**
 * Lesson 6.16: Introduction to Claude Projects
 *
 * CHAPTER: 4 - Projects & Knowledge Bases
 * LESSON: 1 of 5 - Understanding Claude's Organization System
 *
 * DURATION: 12 minutes (foundational)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Introduce Claude's Projects feature as a key differentiator from ChatGPT
 *
 * KEY RESPONSIBILITIES:
 * - Explain what Projects are and why they matter
 * - Contrast Projects with regular chats
 * - Show when and why to create a project
 * - Demonstrate project organization strategies
 */

import type { Lesson } from "@/types/content";

export const lesson_6_16: Lesson = {
  id: "lesson-6-16",
  chapterId: "ch6-4-projects",
  moduleId: "06-tools-claude",
  title: "Introduction to Claude Projects",
  description: "Discover Claude's most powerful organizational feature for ongoing work",
  order: 16,
  estimatedMinutes: 12,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-16-cover.webp",
        imageAlt: "Project organization and folder management",
        title: "Introduction to Claude Projects",
        subtitle: "Claude's superpower for organizing ongoing work and building persistent context",
      },
    },
    // ===========================================================================
    // SECTION 1: What Are Projects?
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "What Are Claude Projects?",
        paragraphs: [
          "A Project in Claude is like a dedicated folder for related work. It's a workspace where:",
          "",
          "**All conversations are grouped together** - No more hunting through chat history to find that one important discussion.",
          "",
          "**Uploaded documents become persistent knowledge** - Claude remembers your reference materials across every chat in the project.",
          "",
          "**Custom instructions apply automatically** - Set your preferences once, and every conversation follows them.",
          "",
          "Think of it as giving Claude a dedicated workspace with all the context it needs to help you effectively—without repeating yourself every time.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Projects vs Regular Chats
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Projects vs. Regular Chats: The Key Differences",
        paragraphs: [
          "Understanding when to use each approach is crucial for building efficient workflows with Claude. The distinction comes down to persistence, organization, and context accumulation.",
          "",
          "Regular chats are best suited for one-off questions, quick tasks, casual exploration, or situations where you don't need context to persist across sessions. They're perfect when you have a specific question that doesn't relate to ongoing work, or when you're just experimenting with Claude's capabilities.",
          "",
          "Projects, on the other hand, are essential for ongoing work, client relationships, research initiatives, long-term goals, or any task requiring accumulated context. When you're working on something that spans multiple conversations, Projects ensure Claude remembers what you've discussed and what documents you've shared.",
          "",
          "The key differences become clear in practice. Regular chats forget once closed, while Projects remember your documents and preferences across all conversations within that workspace. Regular chats are organized chronologically in your history, while Projects group related conversations logically around the work you're doing. Perhaps most importantly, regular chats require re-stating your preferences each time, while Projects apply custom instructions automatically to every interaction.",
          "",
          "Think of it this way: regular chats are like casual conversations with a helpful stranger, while Projects are like ongoing discussions with a colleague who knows your work, remembers your preferences, and has access to your reference materials.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: When to Create a Project
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "When to Create a Project",
        insights: [
          "Client work: Separate contexts for each customer",
          "Research initiatives: Accumulate knowledge over time",
          "Content series: Maintain consistent voice and style",
          "Learning journeys: Track progress and notes",
          "Ongoing collaborations: Keep shared context organized",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Claude vs ChatGPT - The Project Difference
    // ===========================================================================
    {
      id: "section-4",
      type: "scenarioCard",
      content: {
        title: "Real-World Scenario",
        situation:
          "Marcus is a freelance consultant managing 5 different clients. Each client has their own brand guidelines, project requirements, and communication preferences.",
        challenge:
          "Every time he switches between clients in his AI conversations, he has to re-explain the context, re-upload documents, and remind the AI about the client's specific needs.",
        outcome:
          "With Claude Projects, Marcus creates one project per client. Each project has the client's documents and custom instructions. Now when he starts a conversation in the 'Client: TechStart' project, Claude already knows everything about that client.",
      },
    },
    // ===========================================================================
    // SECTION 5: How Claude Projects Differ from ChatGPT
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "How Claude Projects Differ from ChatGPT",
        paragraphs: [
          "This is where Claude truly stands out. While ChatGPT has conversation organization, Claude's Projects offer something fundamentally different:",
          "",
          "**Persistent Knowledge Bases**: Upload PDFs, documents, and reference files that Claude can access in every conversation within that project. ChatGPT doesn't maintain this kind of persistent document context.",
          "",
          "**Project-Specific Instructions**: Set custom instructions for each project that apply to every chat. Your writing style, preferences, and guidelines become part of the project's DNA.",
          "",
          "**Context That Accumulates**: Every conversation in a project can reference the same uploaded materials. You're building institutional knowledge, not starting fresh each time.",
          "",
          "This makes Claude particularly powerful for professionals juggling multiple ongoing initiatives.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Organization Strategies
    // ===========================================================================
    {
      id: "section-6",
      type: "highlightCard",
      content: {
        heading: "Project Organization Strategies",
        insights: [
          "By Client: Each client gets their own project with relevant documents",
          "By Initiative: Major projects or product launches have dedicated workspaces",
          "By Content Type: Separate projects for writing, analysis, research, or learning",
          "By Time Period: Quarterly planning, annual reviews, or campaign cycles",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Quick Prompt
    // ===========================================================================
    {
      id: "section-7",
      type: "quickPrompt",
      content: {
        heading: "Reflect: What Projects Would Help You?",
        description:
          "Think about your work and identify areas that would benefit from dedicated project spaces.",
        promptText:
          "Ask yourself: 'What ongoing work in my life involves repeated AI conversations, reference documents, or consistent preferences that would benefit from its own organized space?' List 3 potential projects.",
      },
    },
    // ===========================================================================
    // SECTION 8: Tool Reference - Claude
    // ===========================================================================
    {
      id: "section-tool-reference",
      type: "toolReference",
      content: {
        tool: "claude",
        action: "To explore Projects",
        task: 'Open Claude and click "Projects" in the left sidebar to see your project workspace. You\'ll create your first project in the next lesson.',
        feature: "Projects",
        tip: "Projects are available on all Claude plans, but team sharing requires Claude for Work",
      },
    },
    // ===========================================================================
    // SECTION 9: Your Turn - Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Plan Your Project Structure",
        purpose:
          "Design your personal Claude Projects structure before creating them, ensuring organization from the start.",
        instructions: [
          "List 3-5 ongoing areas of work that involve repeated AI interactions",
          "For each, determine: What reference documents would be useful? What custom instructions apply?",
          "Name each project following consistent conventions (e.g., 'Client: Name', 'Project: Initiative')",
          "Prioritize which project to create first based on immediate usefulness",
        ],
        deliverable:
          "A prioritized list of 3-5 planned Claude Projects with names, knowledge file ideas, and custom instruction summaries",
        estimatedTime: "10 minutes",
        successCriteria: [
          "You have 3-5 potential projects identified",
          "Each project has a clear, consistent name",
          "You know what knowledge files and instructions each would need",
          "You've prioritized which to create first",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: End-of-Lesson Checkpoint
    // ===========================================================================
    {
      id: "section-quiz",
      type: "checkpoint",
      content: {
        question: "What makes Claude Projects different from regular chats?",
        options: [
          "Projects are just renamed conversations",
          "Projects provide persistent context, custom instructions, and knowledge files across all related chats",
          "Projects are only for developers",
          "Projects have no real differences from regular chats",
        ],
        correctAnswer: 1,
        hint: 'Review "What Are Projects?" section if needed.',
      },
    },
    // ===========================================================================
    // SECTION 11: Completion
    // ===========================================================================
    {
      id: "section-11",
      type: "completion",
      content: {
        title: "Projects Foundation Established",
        description:
          "You now understand what Claude Projects are, how they differ from regular chats, and why they're a key differentiator for Claude. In the next lesson, you'll create your first project and experience the power of persistent context.",
        xpReward: 100,
        buttonText: "Complete Introduction",
      },
    },
  ],
};
