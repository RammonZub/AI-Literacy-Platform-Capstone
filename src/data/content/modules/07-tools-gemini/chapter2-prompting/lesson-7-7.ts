/**
 * Lesson 7.7: Advanced Prompting Techniques
 *
 * CHAPTER: 2 - The 5-Step Prompting Framework
 * LESSON: 2 of 2 - Level up your prompting with powerful techniques
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach advanced prompting techniques for complex tasks, building on the
 * 5-Step Framework foundation.
 *
 * KEY RESPONSIBILITIES:
 * - Introduce prompt chaining for complex workflows
 * - Explain meta-prompting for better prompts
 * - Show how to create reusable prompt templates
 * - Demonstrate persona assignment for expert-level responses
 */

import type { Lesson } from "@/types/content";

export const lesson_7_7: Lesson = {
  id: "lesson-7-7",
  chapterId: "ch7-2-prompting",
  moduleId: "07-tools-gemini",
  title: "Advanced Prompting Techniques",
  description: "Level up your prompting with techniques for complex tasks and expert-level results",
  order: 7,
  estimatedMinutes: 15,
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
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-7-cover.webp",
        imageAlt: "Communication and advanced strategy",
        title: "Advanced Prompting Techniques",
        subtitle: "Power tools for complex tasks",
      },
    },
    // ===========================================================================
    // SECTION 1: When to Level Up
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        paragraphs: [
          "You've mastered the 5-Step Framework. Now it's time for the techniques that handle complex tasks with ease. These aren't required for everyday use, but when you need them, they're game-changers.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: When Basic Prompting Isn't Enough
    // ===========================================================================
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "When Basic Prompting Isn't Enough",
        insights: [
          "A complex research project with multiple phases",
          "Recurring tasks you do every week",
          "Requests that need specific expertise",
          "Projects where consistency across multiple outputs matters",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Technique 1 - Prompt Chaining
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Technique 1: Prompt Chaining",
        paragraphs: [
          "Some tasks are too big for one prompt. Instead of asking for everything at once, break it into a sequence of smaller, connected prompts. This works because each step builds on the previous one, creating better results through focused attention.",
          "",
          "Consider a typical writing workflow: first research a topic, then create an outline, then draft sections, and finally edit and refine. Each step benefits from the work done before it. Try this approach: First prompt: 'Research [topic] and list the 5 most important subtopics.' Second prompt: 'Using that research, create a detailed outline.' Third prompt: 'Write the first section based on the outline.'",
          "",
          "The key is to reference previous responses by saying 'Based on what you just wrote...' or 'Using the outline you created...' This keeps the chain connected and coherent.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Technique 2 - Meta-Prompting
    // ===========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Technique 2: Meta-Prompting",
        paragraphs: [
          "Sometimes the best way to get a great prompt is to ask Gemini to help you write it. This is called meta-prompting—using AI to improve your AI interactions.",
          "",
          "**How it works:**",
          "",
          "Instead of struggling to craft the perfect prompt yourself, say:",
          "",
          '"Help me write a prompt that will get Gemini to [describe your goal]. The output should be [specific requirements]."',
          "",
          "**When to use it:**",
          "- You know what you want but not how to ask for it",
          "- The task is complex with many requirements",
          "- You've tried a prompt and the results weren't quite right",
          "- You're creating a prompt template you'll use repeatedly",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Technique 3 - Saved Prompts & Templates
    // ===========================================================================
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Technique 3: Saved Prompts & Templates",
        paragraphs: [
          "Stop reinventing the wheel. Once you craft a prompt that works well, save it as a template with placeholders for the parts that change.",
          "",
          "**Template example:**",
          '"Draft a follow-up email to [CLIENT_NAME] after our meeting on [DATE]. Reference our discussion about [TOPIC] and include next steps: [NEXT_STEPS]. Keep the tone professional but warm."',
          "",
          "**Benefits of templates:**",
          "- Consistency across similar tasks",
          "- Save time on recurring work",
          "- Build a personal library of proven prompts",
          "- Easy to share with team members",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-7-inline-1.webp",
        imageAlt: "Writing and documentation templates",
      },
    },
    // ===========================================================================
    // SECTION 6: Technique 4 - Persona Assignment
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Technique 4: Persona Assignment",
        paragraphs: [
          "You can ask Gemini to respond as if it were a specific type of expert or audience. This shapes not just what it says, but how it says it. Personas tap into training patterns for how different experts communicate, giving you responses tailored to specific perspectives.",
          "",
          'Try prompts like: "Act as a marketing strategist with 20 years of experience. Review this campaign idea and provide feedback." Or: "You are a legal reviewer. Identify any potential compliance issues in this document." For simplifying complex topics, try: "Explain this concept like I\'m 5 years old." When you need tough love on a draft, ask Gemini to "Act as a skeptical editor. Rip this draft apart and tell me what needs improvement."',
          "",
          "The persona you choose influences vocabulary, tone, depth of analysis, and the types of concerns the response addresses. Experiment with different personas to find what works best for your needs.",
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
        heading: "Try It Now: Experiment with Personas",
        description:
          "Choose a topic you want to understand better. Ask Gemini to explain it from two different personas:",
        promptText:
          "First, ask: 'Act as a university professor and explain [TOPIC] in depth.' Then ask: 'Now explain the same topic like I'm a complete beginner.' Notice how the language, examples, and depth change based on the persona.",
      },
    },
    // ===========================================================================
    // SECTION 8: Tool Reference
    // ===========================================================================
    {
      id: "section-8",
      type: "toolReference",
      content: {
        tool: "gemini",
        action: "For practicing advanced techniques",
        task: "Use Gemini to practice prompt chaining, meta-prompting, and persona assignment",
        tip: "Use Thinking Mode when working with complex multi-step prompts",
      },
    },
    // ===========================================================================
    // SECTION 9: Which Technique When
    // ===========================================================================
    {
      id: "section-9",
      type: "highlightCard",
      content: {
        heading: "Which Technique Should You Use?",
        insights: [
          "Prompt Chaining: Complex projects with multiple phases (research papers, detailed reports)",
          "Meta-Prompting: When you're stuck on how to ask for something, or results aren't matching needs",
          "Saved Templates: Recurring tasks you do weekly or monthly (meeting summaries, status updates)",
          "Persona Assignment: When you need specific expertise or a particular communication style",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create Your First Prompt Template",
        purpose:
          "Templates save enormous time on recurring tasks. Create one template you'll actually use repeatedly in your work.",
        instructions: [
          "Identify a task you do at least weekly that involves writing or analysis",
          "Open Gemini and use meta-prompting: 'Help me create a prompt template for [describe your recurring task]. Include placeholders for the parts that change each time.'",
          "Test your template with real information",
          "Save your template in a notes app or document for future use",
          "Optional: Try using a persona in your template (e.g., 'Act as a professional project manager...')",
        ],
        deliverable:
          "One saved, tested prompt template with clear placeholders for variable information",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "Help me create a prompt template for [describe your recurring task]. The template should have placeholders like [TOPIC], [DATE], [AUDIENCE] for the parts that change each time.",
        successCriteria: [
          "You have created a template for a task you actually do regularly",
          "The template has clear placeholders (e.g., [TOPIC], [DATE])",
          "You have tested the template in Gemini with real data",
          "The template is saved somewhere you can easily find it",
        ],
      },
    },
    // ===========================================================================
    // SECTION 11: Completion
    // ===========================================================================
    {
      id: "section-11",
      type: "completion",
      content: {
        title: "Advanced Techniques Unlocked",
        description:
          "You've now got a complete prompting toolkit: the 5-Step Framework for everyday tasks, plus four advanced techniques for complex situations. Start simple, then add these techniques when you need them. Your Chapter 2 deliverable: Create your first 5 'Master Prompts' using the framework.",
        xpReward: 100,
        buttonText: "Complete Chapter 2",
      },
    },
  ],
};
