/**
 * Lesson 5.7: Getting ChatGPT to Work for You
 *
 * CHAPTER: 2 - ChatGPT Applications
 * LESSON: 7 of 10 - Getting ChatGPT to Work for You
 *
 * DURATION: 14 minutes (iteration and refinement)
 * XP REWARD: 120 XP
 */

import type { Lesson } from "@/types/content";

export const lesson_5_7: Lesson = {
  id: "lesson-5-7",
  chapterId: "ch5-2-applications",
  moduleId: "05-tools-chatgpt",
  title: "Getting ChatGPT to Work for You",
  description: "Why prompts fail and how to iterate until they work",
  order: 7,
  estimatedMinutes: 14,
  xpReward: 120,
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
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-7-cover.webp",
        imageAlt: "Research and iteration process",
        title: "Getting ChatGPT to Work for You",
        subtitle: "Why prompts fail and how to iterate until they work",
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
        task: "Open ChatGPT to practice the iteration techniques you'll learn",
        feature: "Same conversation",
        tip: "Keep your iteration in one conversation thread so ChatGPT remembers context",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Iteration Mindset",
        paragraphs: [
          "Here's what nobody tells you about prompting: **First attempts often fail.**",
          "",
          "Even experienced AI users don't nail it on the first try. The difference is they expect to iterate—and they know how to adjust based on what they got.",
          "",
          "Prompting is a conversation, not a command. You see the result, you refine, you try again.",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Why Prompts Fail (And How to Fix Them)",
        paragraphs: [
          'Understanding failure patterns helps you adjust faster. When your response is too generic, the fix is adding specific context about your situation. Instead of saying "I\'m a consultant," say "I\'m a marketing consultant for dental practices." That specificity transforms generic advice into targeted recommendations.',
          "",
          'When the response is too long or too short, specify length explicitly. "Keep it under 200 words" or "Give me a detailed 500-word explanation" gives ChatGPT clear parameters. When the tone is wrong—too formal or too casual—describe the desired tone directly. "Write like you\'re talking to a colleague over coffee" or "Write formal corporate communication" produces vastly different outputs.',
          "",
          'When something you needed is missing, add constraints in your next prompt: "That\'s good, but also mention X and avoid Y." And when the response is confusing or unclear, ask for step-by-step breakdown or ask ChatGPT to clarify: "Can you break this into simpler steps?" or "I\'m confused by point 3, can you explain differently?" Each of these fixes targets a specific failure mode with a targeted adjustment.',
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
        heading: "The 80% Rule",
        insights: [
          "Aim for 80% of what you want, then iterate",
          "Getting from 0% to 80% in one prompt is hard",
          "Getting from 80% to 95% with a follow-up is easy",
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
          "James, a freelance developer, needs to create a project proposal for a local restaurant chain that wants a loyalty app. He's never written a proposal for this type of client before.",
        challenge:
          "His first ChatGPT attempt produced a generic template that could apply to any mobile app project. It didn't address restaurants, delivery coordination, or his relevant experience.",
        context:
          "James has worked with 5 food service clients before, giving him unique insights into restaurant operations.",
        outcome:
          "Through three iterations, James transformed a generic proposal into a targeted document that emphasized his restaurant experience and addressed the client's specific delivery challenges. The client signed within a week.",
      },
    },
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Real Example: The Three-Prompt Journey",
        paragraphs: [
          "Watch James's iteration process. His first prompt was simply: \"Write a proposal for a mobile app project.\" The result was a generic template with no specifics about the client, their needs, or James's approach. Not useless, but not ready to send.",
          "",
          "James's adjustment added crucial context: \"That's too generic. Here's more context. The client is a local restaurant chain. They want a loyalty app. Their main pain is delivery coordination. I want to emphasize our experience with food service clients and include a timeline.\" The result was better—more specific to restaurants and mentions delivery issues. But it still felt like a template rather than a personalized proposal.",
          "",
          "His final adjustment transformed it: \"Good direction. Now rewrite this to sound less like a vendor proposal and more like a partner. Emphasize that we understand their delivery challenges because we've worked with 5 restaurants. Include a section on how the app will actually save them money—concrete numbers if possible. Keep the confident tone but lose the jargon.\" The result was a targeted proposal that addressed the client's specific business problem and demonstrated James's relevant experience. Three prompts took five minutes and produced something that would have taken an hour to write from scratch.",
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
        title: "The Journey of Refinement",
        paragraphs: [
          "Every great result starts with a rough draft. The key is knowing when to keep refining and when to start fresh. Like any skill, iteration gets easier with practice.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-7-inline-1.webp",
        imageAlt: "Research and learning process",
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "When to Start Fresh vs. Refine",
        paragraphs: [
          "Sometimes iteration doesn't help and you're better off starting a new conversation.",
          "",
          "**Keep iterating when**:",
          "- You're getting closer to what you want",
          "- The core approach is right, just needs adjustment",
          "- You're refining tone, length, or specifics",
          "",
          "**Start fresh when**:",
          "- ChatGPT is stuck in a pattern that doesn't work",
          "- You want to completely change direction",
          "- The conversation has gone off-track and is hard to redirect",
          "",
          "Pro tip: You can usually tell after 2-3 iterations whether you're making progress or going in circles.",
        ],
      },
    },
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Common Iteration Traps",
        paragraphs: [
          'Avoid these habits that make iteration harder. Trap one is adding more without clarity. Instead of saying "Make it better and more detailed and also add X and Y and Z," try "Add a section about X. Keep the rest the same length." Specific requests produce specific results.',
          "",
          'Trap two is being vague about what\'s wrong. "I don\'t like it. Try again" gives ChatGPT nothing to work with. Instead, say "The tone is too casual. Make it more professional." Now ChatGPT knows exactly what to adjust. Trap three is not referencing what worked. Don\'t start over completely each time. Instead, say "Keep the structure from your last response, but change the tone." This preserves what\'s working while fixing what isn\'t.',
          "",
          "Trap four is giving up after one try. The mindset \"This isn't perfect, I'll just do it myself\" defeats the purpose of using AI. Instead, think \"This is 80% there. Two more refinements and it's done.\" That patience transforms mediocre first drafts into polished final outputs. Iteration isn't failure—it's the process.",
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
        heading: "Practice: Iterate on a Real Task",
        description:
          "Choose something you'd actually use at work. Write your first prompt, then plan your second and third prompts based on likely issues.",
        promptText:
          "First prompt: [your initial request]. Refinement 1: 'The [specific element] is too [issue]. Make it more [desired state].' Refinement 2: 'Good direction. Now [next specific adjustment].'",
      },
    },
    // ===========================================================================
    // ACTIONABLE TASK - At END with full format
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: The Three-Prompt Challenge",
        purpose:
          "Practicing iteration builds the muscle memory to refine AI output effectively. You'll learn that the first response is rarely perfect, and that's expected.",
        instructions: [
          "Choose a real work task that's been stuck or difficult",
          "Write your first prompt and get the initial ChatGPT response",
          "Identify what's not quite right and write a specific refinement prompt",
          "Iterate once more - aim to get from 80% to 95% with each refinement",
        ],
        deliverable: "The final polished output plus your 3 prompts showing the iteration journey",
        estimatedTime: "10 minutes",
        starterPrompt:
          "First prompt: [your initial request]. Refinement 1: 'The [specific element] is too [issue]. Make it more [desired state].' Refinement 2: 'Good direction. Now [next specific adjustment].'",
        successCriteria: [
          "Completed 3 prompts in sequence (initial + 2 refinements)",
          "Each refinement was specific (not vague like 'make it better')",
          "Final output is significantly better than the first response",
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
        question: 'What is the "80% Rule" when working with ChatGPT?',
        options: [
          "ChatGPT only gets things right 80% of the time",
          "Aim for 80% of what you want in the first prompt, then iterate to improve",
          "You should only use 80% of ChatGPT responses",
          "Prompts should be 80 words or less",
        ],
        correctAnswer: 1,
        hint: 'Review "When to Start Fresh vs. Refine" section if you need a refresher.',
      },
    },
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Iteration Mastery",
        description:
          "You now understand that prompting is a conversation, not a one-time command. This mindset separates casual users from AI-proficient professionals.",
        xpReward: 120,
        buttonText: "Complete Iteration Practice",
      },
    },
  ],
};
