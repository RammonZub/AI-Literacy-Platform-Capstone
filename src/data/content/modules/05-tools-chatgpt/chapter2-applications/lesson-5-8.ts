/**
 * Lesson 5.8: Multi-Step Prompting for Complex Tasks
 *
 * CHAPTER: 2 - ChatGPT Applications
 * LESSON: 8 of 10 - Multi-Step Prompting for Complex Tasks
 *
 * DURATION: 15 minutes (advanced prompting techniques)
 * XP REWARD: 140 XP
 */

import type { Lesson } from "@/types/content";

export const lesson_5_8: Lesson = {
  id: "lesson-5-8",
  chapterId: "ch5-2-applications",
  moduleId: "05-tools-chatgpt",
  title: "Multi-Step Prompting for Complex Tasks",
  description: "Break complex work into steps that ChatGPT can handle systematically",
  order: 8,
  estimatedMinutes: 15,
  xpReward: 140,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // HERO IMAGE - Start of lesson
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-8-cover.webp",
        imageAlt: "Writing and complex task planning",
        title: "Multi-Step Prompting for Complex Tasks",
        subtitle: "Break complex work into steps that ChatGPT can handle systematically",
      },
    },
    // ===========================================================================
    // TOOL REFERENCE - Where to practice
    // ===========================================================================
    {
      id: "section-tool",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "For this lesson",
        task: "Open ChatGPT to practice multi-step prompting workflows",
        feature: "Same conversation",
        tip: "Keep your multi-step workflow in one conversation so each step builds on the previous",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Power of Breaking Things Down",
        paragraphs: [
          "Simple prompts work for simple tasks. But professional work is rarely simple.",
          "",
          'When you ask ChatGPT to "analyze our Q3 marketing performance and recommend improvements for Q4," you\'re asking for data analysis, strategic thinking, pattern recognition, and actionable recommendations—all in one response.',
          "",
          "The result? Often superficial.",
          "",
          "The solution: **Multi-step prompting**. Break complex tasks into sequential steps that build on each other.",
        ],
      },
    },
    // ===========================================================================
    // HIGHLIGHT CARD - Key insight
    // ===========================================================================
    {
      id: "section-highlight",
      type: "highlightCard",
      content: {
        heading: "Chain-of-Thought Prompting",
        insights: [
          "When you ask ChatGPT to show its work step-by-step, you get better reasoning",
          "Better reasoning leads to better outputs",
          "One of the most effective techniques for complex tasks",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "The Multi-Step Formula",
        paragraphs: [
          'For complex tasks, use this sequence: start with analysis by asking "First, analyze [situation]. What are the key factors? What patterns do you see?" This gives ChatGPT time to understand the landscape before jumping to recommendations. You\'re essentially warming up its thinking.',
          "",
          'Next, move to strategy: "Based on that analysis, what approach would you recommend? Why?" Now ChatGPT is reasoning from a foundation of understanding rather than guessing. Then execute: "Now create [specific output] using that strategy." The output will be grounded in the analysis and strategy that came before. Finally, refine: "Review what you produced. What would make it stronger?" This self-critique step often catches issues you might have missed.',
          "",
          "Each step builds on the previous one. You're guiding the thinking process, not just requesting the output. This approach takes more prompts but produces dramatically better results for important work.",
        ],
      },
    },
    // ===========================================================================
    // SCENARIO CARD - Real-world example
    // ===========================================================================
    {
      id: "section-scenario",
      type: "scenarioCard",
      content: {
        title: "Real-World Scenario",
        situation:
          "Sarah, a freelance web designer, is bidding on a website redesign project for a local law firm. Their current site is from 2018, has no mobile optimization, and loads slowly. They want to attract younger clients.",
        challenge:
          "Sarah needs to create a compelling proposal that demonstrates she understands their specific situation, rather than sending a generic template that could apply to any client.",
        context: "This is a competitive bid—two other agencies are also submitting proposals.",
        outcome:
          "Using multi-step prompting, Sarah first had ChatGPT analyze the law firm's situation, then developed value propositions based on that analysis, and finally wrote a targeted executive summary. The client said her proposal 'felt like it was written specifically for us'—which it was.",
      },
    },
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Real Example: Client Proposal Workflow",
        paragraphs: [
          "Watch Sarah's multi-step approach. Her first prompt set the stage: \"I'm bidding on a website redesign project for a local law firm. They currently have a site from 2018, no mobile optimization, slow loading. They want to attract younger clients. Analyze their situation: What are their likely pain points? What should a modern law firm site emphasize?\" ChatGPT responded with analysis of pain points (outdated design, mobile users, trust signals, accessibility) and priorities (professional yet approachable, fast, clear calls-to-action).",
          "",
          'Her second prompt built on that foundation: "Based on that analysis, what should be our 3 main value propositions? Why would each matter to this specific client?" ChatGPT identified three key propositions: mobile-first design to capture young demographic, speed and credibility to modernize their brand, and clear client intake to convert visitors.',
          "",
          'Her third prompt delivered the output: "Now write the executive summary section of the proposal. Open with their pain points, transition to our value props, end with our timeline. Tone: Confident but not arrogant. About 300 words." The result was a targeted executive summary that addressed the client\'s specific situation and demonstrated Sarah\'s understanding. The client later said her proposal "felt like it was written specifically for us"—which it was, through this systematic process.',
        ],
      },
    },
    // ===========================================================================
    // TEXT WITH IMAGE - Visual break
    // ===========================================================================
    {
      id: "section-image",
      type: "textWithImage",
      content: {
        title: "Building Step by Step",
        paragraphs: [
          "Complex projects become manageable when broken into phases. Analysis, strategy, execution, refinement - each step builds on the last, creating better outcomes than rushing to the finish line.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-8-inline-1.webp",
        imageAlt: "Creative writing and content creation",
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "When Multi-Step Beats One-And-Done",
        paragraphs: [
          "Multi-step prompting is worth the extra effort when:",
          "",
          "**The task has multiple phases**: Planning, execution, review",
          "**Quality matters more than speed**: Proposals, strategies, important communications",
          "**You need to understand the reasoning**: Not just get the output",
          "**The situation is complex**: Multiple factors, trade-offs, nuanced decisions",
          "",
          'For simple tasks ("summarize this email"), one prompt is fine. For important work, break it down.',
        ],
      },
    },
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Pro Technique: Ask ChatGPT to Create the Plan",
        paragraphs: [
          'You don\'t always have to design the multi-step process yourself. ChatGPT can help structure complex work. Start by asking upfront: "I need to [complex task]. Break this into logical steps for me." For example, "I need to create a client onboarding system for my design agency. Break this into the steps I should follow."',
          "",
          "ChatGPT might suggest a five-step process: define the client's goals and expectations, create a welcome package and timeline, set up communication channels and schedule, design the first project kickoff, and create a feedback loop for process improvement. These suggestions often reveal steps you hadn't considered.",
          "",
          'Then you execute step by step: "Great. Let\'s start with step 1. Help me define goals and expectations for a [specific type of client]." This technique works because you get the benefit of structured thinking without having to design the structure yourself. ChatGPT becomes both your planning partner and your execution partner.',
        ],
      },
    },
    // ===========================================================================
    // QUICK PROMPT - Practice template
    // ===========================================================================
    {
      id: "section-quickprompt",
      type: "quickPrompt",
      content: {
        heading: "Practice: Break Down Your Complex Task",
        description:
          "Think of a complex task you do at work. Instead of writing one prompt, break it into 3-4 steps that build on each other.",
        promptText:
          "Step 1 (Analysis): 'Analyze [situation]. What are the key factors and patterns?' Step 2 (Strategy): 'Based on that analysis, what approach do you recommend?' Step 3 (Execution): 'Now create [specific output] using that strategy.'",
      },
    },
    // ===========================================================================
    // ACTIONABLE TASK - At END with full format
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Build a Multi-Step Workflow",
        purpose:
          "Breaking complex tasks into sequential AI steps produces dramatically better results than one-shot prompts. This workflow becomes your template for complex projects.",
        instructions: [
          "Identify a complex project you're working on (proposal, report, strategy, analysis)",
          "Design 3-4 sequential prompts: Analysis -> Strategy -> Execution",
          "Run each prompt in sequence, using output from previous steps",
          "Compare the final result to what a single prompt would have produced",
        ],
        deliverable:
          "A completed complex output (or substantial portion) with your multi-step prompt sequence documented",
        estimatedTime: "15 minutes",
        starterPrompt:
          "Step 1 (Analysis): 'Analyze [situation]. What are the key factors and patterns?' Step 2 (Strategy): 'Based on that analysis, what approach do you recommend?' Step 3 (Execution): 'Now create [specific output] using that strategy.'",
        successCriteria: [
          "Created at least 3 sequential prompts that build on each other",
          "Each prompt uses context from the previous response",
          "Final output demonstrates deeper analysis than a one-shot approach",
        ],
      },
    },
    // ===========================================================================
    // CHECKPOINT - End-of-lesson
    // ===========================================================================
    {
      id: "section-quiz",
      type: "checkpoint",
      content: {
        question: "What is the correct sequence for multi-step prompting of complex tasks?",
        options: [
          "Execution -> Analysis -> Strategy -> Refinement",
          "Strategy -> Execution -> Analysis",
          "Analysis -> Strategy -> Execution -> Refinement",
          "Refinement -> Strategy -> Analysis -> Execution",
        ],
        correctAnswer: 2,
        hint: 'Review "The Multi-Step Formula" and "When Multi-Step Beats One-And-Done" sections if needed.',
      },
    },
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Multi-Step Prompting Mastery",
        description:
          "You now have a systematic approach to complex tasks. Instead of hoping ChatGPT gets it right in one try, you guide the process from analysis to execution.",
        xpReward: 140,
        buttonText: "Complete Multi-Step Practice",
      },
    },
  ],
};
