/**
 * Lesson 5.30: Capstone Project - Your AI-Powered Workflow
 *
 * CHAPTER: 5 - Integrations & Capstone
 * LESSON: 30 of 30 - Course Capstone
 *
 * DURATION: 20 minutes
 * XP REWARD: 200 XP (Capstone bonus)
 *
 * PURPOSE: Complete the course by building a personal AI system and celebrating your journey
 *
 * KEY CONCEPTS:
 * - Course journey summary and skills integration
 * - Personal AI system template
 * - 30-day implementation plan
 * - Celebration and certification
 */

import type { Lesson } from "@/types/content";

export const lesson_5_30: Lesson = {
  id: "lesson-5-30",
  chapterId: "ch5-5-integrations",
  moduleId: "05-tools-chatgpt",
  title: "Capstone: Your AI-Powered Workflow",
  description: "Bring together everything you've learned into a complete personal AI system",
  order: 30,
  estimatedMinutes: 20,
  xpReward: 200,
  format: "article",
  lessonCategory: "challenge",
  sections: [
    // ===========================================================================
    // SECTION: Hero Image
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-30-cover.webp",
        imageAlt: "Achievement and course completion celebration",
        title: "Capstone: Your AI-Powered Workflow",
        subtitle: "Bring together everything you've learned",
      },
    },
    // ===========================================================================
    // SECTION: Journey Summary
    // ===========================================================================
    {
      id: "section-journey",
      type: "text",
      content: {
        title: "Look How Far You've Come",
        paragraphs: [
          "You started with a question: What is ChatGPT and how can it help me?",
          "",
          "30 lessons later, you've built a comprehensive skillset for using ChatGPT professionally. Now it's time to bring it all together into your personal AI-powered workflow.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Skills Mastered
    // ===========================================================================
    {
      id: "section-skills",
      type: "text",
      content: {
        title: "Skills You've Mastered",
        paragraphs: [
          "Over 30 lessons, you've built a comprehensive skillset for professional AI use. These capabilities form the foundation of your AI-powered productivity system.",
          "You've learned to prompt with precision using the Context + Goal + Constraints framework. This structured approach transforms vague requests into targeted instructions that produce excellent results consistently. Your prompts now include the context AI needs, the goals you're pursuing, and the constraints that keep output on track.",
          "You iterate effectively, transforming weak prompts into powerful ones through systematic refinement. When AI output doesn't match your expectations, you know how to adjust context, add examples, specify constraints, and guide the model toward better results. This iterative skill often matters more than the initial prompt.",
          "You handle complex tasks by breaking down multi-step requests into manageable pieces. You work with documents by uploading, analyzing, and transforming content. You master communication by producing emails, reports, and presentations with AI assistance while maintaining your unique voice.",
          "You conduct research using web search, multi-source analysis, and fact verification. You create visuals by generating and editing images for professional use. You build custom GPTs as specialized assistants for your specific needs. You automate workflows by connecting ChatGPT to your other tools. Perhaps most importantly, you think systematically about designing AI workflows that compound productivity over time.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Highlight Card - Personal AI System
    // ===========================================================================
    {
      id: "section-highlight-system",
      type: "highlightCard",
      content: {
        heading: "Your Personal AI System",
        insights: [
          "This template brings together everything you've learned",
          "Customize it to your specific role, industry, and workflows",
          "Build it once, refine it forever",
        ],
      },
    },
    // ===========================================================================
    // SECTION: System Components
    // ===========================================================================
    {
      id: "section-components",
      type: "text",
      content: {
        title: "System Components to Build",
        paragraphs: [
          "Complete your capstone by creating these four essential elements. Each component reinforces the others, creating a productivity system that compounds over time.",
          "First, build your prompt library with five to ten refined prompts. Create prompts for your three most frequent tasks—the work you do repeatedly that would benefit from AI acceleration. Include context placeholders that you can quickly customize, tone specifications that match your voice, and format requirements that ensure output matches your needs. Store these in a document you can access instantly, removing friction from AI-assisted work.",
          "Second, design your custom GPTs for specialized needs. An email assistant, a report writer, a research helper—choose one or two GPTs that address your most common challenges. Include your style preferences and typical scenarios so the GPT understands your context. Test with real tasks and refine based on results until the GPT reliably produces useful output.",
          "Third, establish your automation workflow. Identify one or two tasks to automate completely—email triage, meeting summaries, social content generation work well. Build the automation in Zapier or Make.com, always including human review checkpoints for quality control. Automation should eliminate repetitive work without introducing uncontrolled risk.",
          "Fourth, define your daily and weekly AI routine. Mornings include planning and email triage with AI assistance. Throughout the day, you use assisted drafting and research. Weekly, you conduct system review and maintenance. This rhythm ensures AI becomes a natural part of your workflow rather than a separate activity.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Visual Break - Implementation Plan
    // ===========================================================================
    {
      id: "section-plan-visual",
      type: "textWithImage",
      content: {
        title: "Your 30-Day Implementation Plan",
        paragraphs: [
          "Don't try to build everything at once. Follow this phased approach for sustainable progress.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-30-inline-1.webp",
        imageAlt: "Implementation planning and progress",
      },
    },
    // ===========================================================================
    // SECTION: Week-by-Week Plan
    // ===========================================================================
    {
      id: "section-weekly-plan",
      type: "text",
      content: {
        title: "Week-by-Week Plan",
        paragraphs: [
          "Don't try to build everything at once. This four-week phased approach creates sustainable progress while preventing overwhelm. Each week builds on the previous, creating momentum toward your complete AI system.",
          "Week one establishes your foundation. Create your prompt library document as your first deliverable. Use ChatGPT daily for at least three tasks to build the habit and discover what works. Track what works and what doesn't in a simple log—these notes become invaluable for refinement. This week is about establishing patterns, not perfection.",
          "Week two focuses on customization. Build your first custom GPT, applying what you learned about effective prompting and context. Test it with real work tasks—the tasks you actually perform, not hypothetical examples. Refine based on results, adjusting instructions and examples until the GPT produces consistently useful output.",
          "Week three introduces automation. Set up your first Zapier or Make automation, connecting ChatGPT to one frequently-used tool. Start simple—a workflow that saves even five minutes daily compounds significantly over time. Monitor the automation closely at first, troubleshooting any issues before relying on it completely.",
          "Week four brings system integration. Establish your daily and weekly routines formally, making AI usage automatic rather than deliberate. Measure time saved and quality improved—collect real data that demonstrates value. Document what you'd do differently, creating a personal playbook for future system improvements.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Highlight Card - Capstone Options
    // ===========================================================================
    {
      id: "section-highlight-capstone",
      type: "highlightCard",
      content: {
        heading: "Choose Your Capstone Project",
        insights: [
          "Option A: The Client Onboarding System - GPT + emails + documents + calendar",
          "Option B: The Weekly Report Generator - Data analysis + summarization + formatting",
          "Option C: Your Custom Project - Apply 5+ techniques to a real work challenge",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Capstone Requirements
    // ===========================================================================
    {
      id: "section-capstone-requirements",
      type: "text",
      content: {
        title: "Capstone Requirements",
        paragraphs: [
          "Your capstone project should demonstrate comprehensive mastery of the course material. These requirements ensure your project provides genuine value while showcasing your AI skills.",
          "First, incorporate at least five techniques from the course. This might include precision prompting, iterative refinement, document upload and analysis, custom GPT creation, and automation building. The combination demonstrates that you can integrate multiple AI capabilities into a cohesive solution rather than applying isolated skills.",
          "Second, focus on real-world application. Use a task you actually perform at work—a real deliverable with real stakes. Document the before and after comparison, showing how your AI-powered approach compares to your previous method. This authenticity makes your capstone valuable beyond the course itself.",
          "Third, create a documented workflow that others could follow. Include the step-by-step process you developed, the prompts and tools used at each stage, and the time saved and quality improvement measured. This documentation transforms your project from a personal achievement into a shareable resource that could help colleagues adopt similar approaches.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Knowledge Check 1
    // ===========================================================================
    {
      id: "section-knowledge-check-1",
      type: "knowledgeCheck",
      content: {
        question: "Which integration approach connects ChatGPT to other apps without writing code?",
        options: [
          "Direct API programming",
          "Zapier automation",
          "Custom Python scripts",
          "Manual copy-paste workflows",
        ],
        correctAnswer: 1,
        explanation:
          "Zapier is a no-code automation platform that connects ChatGPT to 5000+ apps through visual trigger-action workflows. No programming knowledge required.",
        hint: "Think about tools that automate workflows without coding...",
      },
    },
    // ===========================================================================
    // SECTION: Knowledge Check 2
    // ===========================================================================
    {
      id: "section-knowledge-check-2",
      type: "knowledgeCheck",
      content: {
        question: "What is the key difference between Zapier and Make.com for automation?",
        options: [
          "Zapier is free, Make.com is paid",
          "Make.com handles complex branching logic better",
          "Zapier only works with Google apps",
          "Make.com doesn't support ChatGPT",
        ],
        correctAnswer: 1,
        explanation:
          "Make.com excels at complex multi-step workflows with conditional routing (if X, do A; if Y, do B). Zapier is better for simple linear automations. Both support ChatGPT and both have free tiers.",
        hint: "Consider which tool handles more complex decision trees...",
      },
    },
    // ===========================================================================
    // SECTION: Knowledge Check 3
    // ===========================================================================
    {
      id: "section-knowledge-check-3",
      type: "knowledgeCheck",
      content: {
        question: "What feature allows Custom GPTs to interact with external systems and APIs?",
        options: ["Knowledge Files", "Actions", "Conversation History", "System Prompts"],
        correctAnswer: 1,
        explanation:
          "Actions let Custom GPTs connect to external APIs and webhooks, enabling them to fetch live data, update systems, and trigger workflows. This transforms GPTs from knowledge tools into operational tools.",
        hint: "This feature gives GPTs 'hands' to work with outside world...",
      },
    },
    // ===========================================================================
    // SECTION: Knowledge Check 4
    // ===========================================================================
    {
      id: "section-knowledge-check-4",
      type: "knowledgeCheck",
      content: {
        question: "What is the recommended first step when deploying ChatGPT to a team?",
        options: [
          "Immediately roll out to everyone",
          "Start with champions who can demonstrate value",
          "Build all automations first",
          "Create strict usage policies only",
        ],
        correctAnswer: 1,
        explanation:
          "Starting with enthusiastic early adopters (champions) allows them to demonstrate value to others, creating organic momentum for adoption. This is more effective than top-down mandates.",
        hint: "Think about who would be most excited to try new tools...",
      },
    },
    // ===========================================================================
    // SECTION: Reflection
    // ===========================================================================
    {
      id: "section-reflection",
      type: "text",
      content: {
        title: "Reflect on Your Progress",
        paragraphs: [
          "Before you complete this course, take a moment to reflect:",
          "",
          "**What surprised you?** What capabilities did you discover that you didn't expect?",
          "",
          "**What will you use most?** Which techniques will become part of your daily workflow?",
          "",
          "**What would you tell someone starting this course?** What advice would help them succeed?",
          "",
          "These reflections solidify your learning and prepare you to help others on their AI journey.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Tool Reference - ChatGPT
    // ===========================================================================
    {
      id: "section-tool-reference",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "For your capstone",
        task: "Use ChatGPT to build and document your personal AI system",
        feature: "Custom GPTs + Projects",
        tip: 'Create a "Course Reflections" chat to capture your key learnings',
      },
    },
    // ===========================================================================
    // SECTION: Quick Prompt
    // ===========================================================================
    {
      id: "section-quick-prompt",
      type: "quickPrompt",
      content: {
        heading: "Document Your Capstone",
        description:
          "Write a brief summary of your personal AI system and the project you'll implement.",
        promptText:
          "My AI System: [Core components]. My Capstone Project: [What I'll build, techniques used, expected outcome]. My #1 takeaway from this course: [key insight].",
      },
    },
    // ===========================================================================
    // SECTION: Highlight Card - Congratulations
    // ===========================================================================
    {
      id: "section-highlight-congrats",
      type: "highlightCard",
      content: {
        heading: "Congratulations, AI Professional!",
        insights: [
          "You've completed 30 lessons across 5 chapters",
          "You've earned 3000+ XP in ChatGPT mastery",
          "You now have skills that set you apart in your professional work",
          "Most importantly: you have a system, not just isolated skills",
        ],
      },
    },
    // ===========================================================================
    // SECTION: You Did It
    // ===========================================================================
    {
      id: "section-you-did-it",
      type: "text",
      content: {
        title: "You Did It!",
        paragraphs: [
          "30 lessons ago, you started a journey to master ChatGPT for professional work.",
          "",
          "You didn't just learn how to use a tool. You learned how to think differently about AI—how to build systems, how to maintain quality, how to scale your productivity.",
          "",
          "The professionals who thrive in the AI age aren't necessarily the most technical. They're the ones who integrate AI into their workflow thoughtfully, maintain human judgment, and continuously refine their approach.",
          "",
          "You're now one of them.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Your Next Steps
    // ===========================================================================
    {
      id: "section-next-steps",
      type: "text",
      content: {
        title: "Your Next Steps",
        paragraphs: [
          "The course is complete, but your AI journey continues. These next steps ensure your new skills compound in value rather than fading without practice.",
          "This week, implement your capstone project and measure results. The momentum from course completion is the best time to put your system into action. Don't let the knowledge sit idle—apply it immediately while the concepts are fresh and your enthusiasm is high.",
          "This month, refine your AI system based on real usage. You'll discover what works in practice versus theory, which prompts need adjustment, and where your workflows can be streamlined. This refinement period transforms your initial system into something genuinely optimized for your specific needs.",
          "Ongoing, stay current as ChatGPT evolves. New features arrive regularly—image capabilities, improved reasoning, expanded context windows. Following these developments ensures your skills remain relevant and your system takes advantage of improvements. The AI landscape changes quickly; staying informed is part of maintaining your expertise.",
          "Share your knowledge with colleagues who are starting their AI journey. Teaching reinforces your own learning while building your reputation as an AI-savvy professional. Consider exploring other AI tools like Claude, Gemini, and Copilot as complements to your ChatGPT expertise. Each tool has unique strengths, and broad familiarity makes you more versatile.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Completion
    // ===========================================================================
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Course Complete: ChatGPT Professional",
        description:
          "You have completed the ChatGPT Mastery course. You've built foundational skills, explored professional applications, mastered advanced features, learned integrations, and designed your personal AI system. More than skills, you've developed an AI mindset that will serve you throughout your career. Congratulations!",
        xpReward: 200,
        buttonText: "Complete Course & Celebrate",
      },
    },
  ],
};
