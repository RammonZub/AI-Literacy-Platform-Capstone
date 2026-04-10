/**
 * Lesson 6.30: Capstone - Your Claude-Powered Transformation
 *
 * CHAPTER: 6 - Integrations & Team Features
 * LESSON: 6 of 6 - Final Course Capstone
 *
 * DURATION: 18 minutes
 * XP REWARD: 200 XP (Ultimate Capstone Bonus)
 *
 * PURPOSE: Complete transformation from Claude user to Claude-powered professional
 *
 * KEY CONCEPTS:
 * - Skills integration assessment
 * - Personal transformation plan
 * - Long-term mastery roadmap
 * - Community and continuous learning
 */

import type { Lesson } from "@/types/content";

export const lesson_6_30: Lesson = {
  id: "lesson-6-30",
  chapterId: "ch6-6-integrations",
  moduleId: "06-tools-claude",
  lessonCategory: "challenge",
  title: "Capstone: Your Claude-Powered Transformation",
  description:
    "Complete your transformation journey with a comprehensive mastery assessment and personalized roadmap for continuous growth",
  order: 30,
  estimatedMinutes: 18,
  xpReward: 200,
  format: "article",
  sections: [
    // ===========================================================================
    // SECTION 0: Hero Image
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/06-tools-claude/lesson-6-30-cover.webp",
        imageAlt: "Claude-powered transformation celebration",
        title: "Capstone: Your Claude-Powered Transformation",
        subtitle:
          "Complete your transformation journey with a comprehensive mastery assessment and personalized roadmap",
      },
    },
    // ===========================================================================
    // SECTION 1: Cover Introduction
    // ===========================================================================
    {
      id: "section-cover",
      type: "textWithImage",
      content: {
        title: "Your Claude-Powered Transformation",
        paragraphs: [
          "This is it—the culmination of your Claude Mastery journey. But really, this isn't an ending. It's the beginning of your life as a truly AI-augmented professional. Let's cement your transformation.",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-30-inline-1.webp",
        imageAlt: "Transformation and achievement celebration",
      },
    },
    // ===========================================================================
    // SECTION 2: Your Transformation Journey
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Your Transformation Journey",
        paragraphs: [
          "Look at how far you've come. You started as someone curious about AI, and now you're equipped with:",
          "",
          "**30 lessons of mastery** covering everything from basic prompts to advanced integrations",
          "",
          "**6 comprehensive chapters** spanning core skills, applications, advanced features, projects, and team collaboration",
          "",
          "**Practical skills** you can apply immediately in your work",
          "",
          "**A complete workflow system** tailored to your needs",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Knowledge Check - Essential Prompting
    // ===========================================================================
    {
      id: "section-knowledge-check-1",
      type: "knowledgeCheck",
      content: {
        question: "What makes a prompt effective?",
        options: [
          "Using as many words as possible",
          "Clear instructions, specific context, and defined output format",
          "Copying prompts exactly from others",
          "Asking Claude to figure out what you want",
        ],
        correctAnswer: 1,
        explanation:
          "Effective prompts include clear instructions, relevant context, and specify the format you want for the output.",
      },
    },
    // ===========================================================================
    // SECTION 4: Knowledge Check - Artifacts & Content
    // ===========================================================================
    {
      id: "section-knowledge-check-2",
      type: "knowledgeCheck",
      content: {
        question: "What are Claude Artifacts best used for?",
        options: [
          "One-time quick questions",
          "Creating substantial content like documents, code, and visualizations that you can iterate on and export",
          "Storing old conversations",
          "Replacing all other productivity tools",
        ],
        correctAnswer: 1,
        explanation:
          "Artifacts are ideal for creating substantial, iteratable content like documents, code, diagrams, and visualizations that you can refine and export.",
      },
    },
    // ===========================================================================
    // SECTION 5: Knowledge Check - Projects & Knowledge Bases
    // ===========================================================================
    {
      id: "section-knowledge-check-3",
      type: "knowledgeCheck",
      content: {
        question: "How do Projects improve your Claude experience?",
        options: [
          "They make Claude faster",
          "They provide persistent context, custom instructions, and organized knowledge bases for different work areas",
          "They are required to use Claude",
          "They automatically generate content for you",
        ],
        correctAnswer: 1,
        explanation:
          "Projects organize your work into contextual spaces with custom instructions and knowledge bases, giving Claude the context it needs to help you effectively.",
      },
    },
    // ===========================================================================
    // SECTION 6: Knowledge Check - Extended Thinking
    // ===========================================================================
    {
      id: "section-knowledge-check-4",
      type: "knowledgeCheck",
      content: {
        question: "When should you use Extended Thinking?",
        options: [
          "For every single prompt",
          "For complex problems requiring deep reasoning, analysis, or multi-step planning",
          "Only when Claude refuses to answer",
          "Extended Thinking is not a real feature",
        ],
        correctAnswer: 1,
        explanation:
          "Extended Thinking is designed for complex problems that benefit from deeper reasoning, analysis, and multi-step thinking.",
      },
    },
    // ===========================================================================
    // SECTION 7: Knowledge Check - Integrations
    // ===========================================================================
    {
      id: "section-knowledge-check-5",
      type: "knowledgeCheck",
      content: {
        question: "What is the recommended approach to building a Claude workflow system?",
        options: [
          "Try to automate everything at once",
          "Start with your top 3 time-consuming tasks and expand gradually",
          "Only use Claude for one specific task",
          "Wait until you have a perfect system before starting",
        ],
        correctAnswer: 1,
        explanation:
          "Starting with your top 3 time-consuming tasks and expanding gradually ensures sustainable adoption without overwhelming yourself.",
      },
    },
    // ===========================================================================
    // SECTION 8: Skills Mastery Assessment
    // ===========================================================================
    {
      id: "section-8",
      type: "highlightCard",
      content: {
        heading: "Skills Self-Assessment",
        insights: [
          "Essential Prompting: Crafting clear, effective prompts that get results",
          "Artifacts: Creating documents, code, and visual content with Claude",
          "Projects & Knowledge: Organizing context for better AI assistance",
          "Analysis & Research: Using Claude to understand and synthesize information",
          "Extended Thinking: Leveraging deep reasoning for complex problems",
          "Integrations: Connecting Claude to your tools and workflows",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: 90-Day Transformation Roadmap
    // ===========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Your 90-Day Transformation Roadmap",
        paragraphs: [
          "**Days 1-30: Foundation**",
          "- Master daily workflows and establish core habits",
          "- Set up your Projects and knowledge bases",
          "- Create your essential prompt library",
          "- Install and integrate the Chrome extension",
          "",
          "**Days 31-60: Expansion**",
          "- Add advanced features like Extended Thinking",
          "- Increase automation through Zapier/Make",
          "- Refine templates based on what works",
          "- Expand to new use cases naturally",
          "",
          "**Days 61-90: Leadership**",
          "- Share knowledge with colleagues",
          "- Optimize systems based on metrics",
          "- Mentor others in Claude usage",
          "- Establish long-term maintenance routines",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: The Claude Advantage
    // ===========================================================================
    {
      id: "section-10",
      type: "textWithImage",
      content: {
        title: "The Claude Advantage",
        paragraphs: [
          "You now understand what makes Claude unique and how to leverage those strengths:",
          "",
          "**Thoughtful Responses**: Claude's careful, nuanced approach shines in analysis and complex reasoning",
          "",
          "**Large Context Window**: Upload entire documents and have coherent conversations about them",
          "",
          "**Artifacts System**: Create polished, exportable content directly in conversations",
          "",
          "**Extended Thinking**: Access deeper reasoning for important decisions",
          "",
          "**Safety & Honesty**: Claude tells you when it doesn't know something",
        ],
        imageUrl: "/images/courses/modules/06-tools-claude/lesson-6-30-inline-2.webp",
        imageAlt: "Wisdom and mastery philosophy",
      },
    },
    // ===========================================================================
    // SECTION 11: Your Claude Philosophy
    // ===========================================================================
    {
      id: "section-11",
      type: "highlightCard",
      content: {
        heading: "Your Claude Philosophy",
        insights: [
          "AI augments your intelligence—it doesn't replace your judgment",
          "The best prompts come from understanding your own needs deeply",
          "Context is everything—invest time in Projects and knowledge bases",
          "Quality over quantity—one thoughtful prompt beats ten rushed ones",
          "Continuous learning—AI evolves, and so should your skills",
        ],
      },
    },
    // ===========================================================================
    // SECTION 12: Join the Claude Community
    // ===========================================================================
    {
      id: "section-12",
      type: "text",
      content: {
        title: "Continue Your Learning",
        paragraphs: [
          "Your learning continues beyond this course. The Claude ecosystem is constantly evolving, and connecting with other users helps you stay current, discover new techniques, and continue growing your skills over time.",
          "",
          "Anthropic's Blog is the primary source for official updates on new features and research. Following this blog ensures you know about new capabilities as they're released, often before they're widely known. These updates can unlock new workflows you hadn't considered.",
          "",
          "Community Forums provide spaces to share workflows and learn from other power users. The collective wisdom of experienced Claude users represents a wealth of practical knowledge that goes beyond what any single course can cover. Engaging with these communities accelerates your learning.",
          "",
          "Twitter/X offers real-time updates through @AnthropicAI for announcements and tips. Following the official account and engaging with the Claude community on social media keeps you connected to the latest developments and creative uses.",
          "",
          "Discord Communities host discussions with fellow Claude enthusiasts. These real-time conversations let you ask questions, share discoveries, and connect with people who are as excited about Claude as you are. The informal nature of Discord makes it easy to learn through casual conversation.",
          "",
          "Local Meetups connect you with AI-curious professionals in your area. Meeting people face-to-face who share your interest in AI tools can lead to valuable professional relationships and local knowledge sharing that online communities can't replicate.",
          "",
          "Teaching Others might be the most powerful way to continue learning. When you explain Claude concepts to colleagues, write about your workflows, or mentor newcomers, you deepen your own understanding while helping others. The best way to master something is to teach it.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 13: Tool Reference
    // ===========================================================================
    {
      id: "section-tool-reference",
      type: "toolReference",
      content: {
        tool: "claude",
        action: "For ongoing mastery",
        task: "Continue using your complete Claude toolkit: essential prompting, Artifacts, Projects, Extended Thinking, Chrome extension, integrations, and team features",
        feature: "Complete Claude Mastery",
        tip: "Review and update your system monthly, and stay current with new Claude features",
      },
    },
    // ===========================================================================
    // SECTION 14: Quick Prompt
    // ===========================================================================
    {
      id: "section-14",
      type: "quickPrompt",
      content: {
        heading: "Your Transformation Declaration",
        description: "Create your personal commitment to Claude mastery.",
        promptText:
          "Ask Claude: 'Help me write my Claude Mastery Declaration. In 3 months, I will have [describe your goals]. My daily habits will include [list your commitments]. I will measure success by [define your metrics]. Make it inspiring and specific to my role in [your profession].'",
      },
    },
    // ===========================================================================
    // SECTION 15: Your Turn - Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create Your Transformation Plan",
        purpose:
          "Develop your comprehensive 90-day transformation plan to cement your Claude mastery.",
        instructions: [
          "Complete the skills self-assessment honestly",
          "Write your personal Claude Mastery Declaration",
          "Break down your 90-day roadmap with specific weekly goals",
          "Identify 3-5 key habits you will maintain daily",
          "Schedule your first monthly review",
        ],
        deliverable:
          "A complete transformation plan with skills assessment, declaration, 90-day roadmap, and scheduled reviews",
        estimatedTime: "20 minutes",
        successCriteria: [
          "Skills assessment completed for all areas",
          "Personal declaration written and inspiring",
          "90-day roadmap has specific weekly goals",
          "Daily habits are defined and realistic",
          "First review is scheduled in your calendar",
        ],
      },
    },
    // ===========================================================================
    // SECTION 16: Final Reflection
    // ===========================================================================
    {
      id: "section-16",
      type: "text",
      content: {
        title: "A Final Reflection",
        paragraphs: [
          "Before you complete this course, take a moment to appreciate what you've accomplished.",
          "",
          "You didn't just learn to use an AI tool—you learned to think differently about how AI can amplify your capabilities. You built systems. You created workflows. You developed habits that will compound over time.",
          "",
          "The professionals who thrive in the AI age aren't necessarily the most technical. They're the ones who thoughtfully integrate AI into their work, maintain their unique human judgment, and continuously adapt as technology evolves.",
          "",
          "You are now one of those professionals.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 17: Course Completion
    // ===========================================================================
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Claude Mastery Complete!",
        description:
          "You've completed all 30 lessons of the Claude Mastery course. You've gone from curious beginner to confident power user. Your transformation is real—the skills you've built here will serve you for years to come. Remember: the best AI users aren't those who use AI the most, but those who use it most thoughtfully. Go forth and amplify your potential!",
        xpReward: 200,
        buttonText: "Complete Claude Mastery Course",
      },
    },
  ],
};
