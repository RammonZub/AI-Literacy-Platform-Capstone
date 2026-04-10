/**
 * Lesson 7.14: Gemini Live - Conversational AI on the Go
 *
 * CHAPTER: 4 - Mobile-First Mastery
 * LESSON: 2 of 5 - Natural Voice Conversations
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Introduce Gemini Live for natural, multi-turn voice conversations
 * that feel like talking to a knowledgeable colleague
 *
 * KEY RESPONSIBILITIES:
 * - Explain Gemini Live and how it differs from basic voice commands
 * - Demonstrate natural voice conversations (not robotic commands)
 * - Show multi-turn voice conversations
 * - Introduce eyes-free workflows for commute, walks
 * - Cover dictating emails and messages, voice brainstorming sessions
 */

import type { Lesson } from "@/types/content";

export const lesson_7_14: Lesson = {
  id: "lesson-7-14",
  chapterId: "ch7-4-mobile",
  moduleId: "07-tools-gemini",
  title: "Gemini Live - Conversational AI on the Go",
  description: "Have natural conversations with AI using your voice, hands-free",
  order: 2,
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
        imageSrc: "/images/courses/modules/07-tools-gemini/lesson-7-14-cover.webp",
        imageAlt: "Person having a voice conversation using technology",
        title: "Gemini Live - Conversational AI on the Go",
        subtitle: "Natural voice conversations with AI",
      },
    },
    // ===========================================================================
    // SECTION 1: What is Gemini Live?
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Beyond Voice Commands: Real Conversation",
        paragraphs: [
          "Traditional voice assistants understand commands. You say specific phrases, and they respond with preset answers. It works, but it feels mechanical.",
          "",
          "**Gemini Live is different.** It's designed for natural, flowing conversations where you:",
          "",
          "- Speak normally, not in command language",
          "- Ask follow-up questions without repeating context",
          "- Change topics mid-conversation",
          "- Pause, think, and continue where you left off",
          "",
          "Imagine explaining a work problem to a smart colleague. You wouldn't say 'Query: sales figures Q3.' You'd say 'Hey, I'm trying to understand why our Q3 numbers are different than expected.'",
          "",
          "That's how Gemini Live works. Talk naturally, get thoughtful responses.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Multi-Turn Voice Conversations
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Multi-Turn Conversations: Building on Context",
        paragraphs: [
          "The real power of Gemini Live lies in its memory. Unlike basic voice commands that treat each request independently, Gemini Live remembers what you've said and builds on it naturally. This transforms the experience from issuing discrete commands into having an actual conversation.",
          "",
          "Consider how this works in practice. You might start by saying 'I'm preparing for a performance review tomorrow.' Gemini acknowledges this context. When you follow up with 'What questions should I be ready to answer?' it knows you're asking about performance review questions specifically, not general interview questions. You can then continue with 'Can you help me practice my response to the first one?' and Gemini understands exactly which question you mean.",
          "",
          "This conversational depth means you can explore topics thoroughly without constantly restating context. You might conclude with 'That sounds good. Now let's work on my self-assessment highlights.' The entire conversation flows naturally, with each exchange building on previous ones. This is what makes Gemini Live feel like talking to a knowledgeable colleague rather than issuing commands to a machine.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Scenario - Eyes-Free Workflows
    // ===========================================================================
    {
      id: "section-3",
      type: "scenarioCard",
      content: {
        title: "Real-World Voice Scenario",
        situation:
          "You're driving to work and suddenly remember you need to prepare for a difficult conversation with your team about budget cuts. You have 20 minutes of commute time.",
        challenge:
          "You can't type or read while driving, but you need to think through your approach.",
        context: "Commute time is often wasted time—but with voice AI, it becomes productive.",
        outcome:
          "You start Gemini Live and have a conversation: 'I need to announce budget cuts to my team. Help me think through how to approach this.' Gemini asks clarifying questions, helps you structure your message, and even suggests responses to likely questions. You arrive prepared and confident.",
      },
    },
    // ===========================================================================
    // SECTION 4: Practical Applications
    // ===========================================================================
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "What You Can Do with Gemini Live",
        insights: [
          "Dictate emails and messages while walking or driving",
          "Brainstorm ideas out loud and get immediate feedback",
          "Practice presentations or difficult conversations",
          "Get quick answers without stopping what you're doing",
          "Turn commute time into productive thinking time",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Voice Brainstorming
    // ===========================================================================
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Voice Brainstorming: Thinking Out Loud",
        paragraphs: [
          "Some of your best thinking happens when you talk through problems out loud. Gemini Live becomes your thinking partner.",
          "",
          "**Try this workflow:**",
          "",
          "1. Start Gemini Live and explain what you're working on",
          "2. Share your initial thoughts and concerns",
          "3. Ask Gemini to challenge your assumptions",
          "4. Explore alternatives together",
          "5. End with clear next steps",
          "",
          "Many professionals find they solve problems faster by talking through them than by staring at a screen. Gemini Live makes this possible anywhere.",
        ],
        imageUrl: "/images/courses/modules/07-tools-gemini/lesson-7-14-inline-1.webp",
        imageAlt: "Person walking while using phone hands-free",
      },
    },
    // ===========================================================================
    // SECTION 6: Tool Reference - Gemini
    // ===========================================================================
    {
      id: "section-6",
      type: "toolReference",
      content: {
        tool: "gemini",
        action: "For this lesson",
        task: "Open the Gemini mobile app and tap the waveform icon to start Gemini Live. Try having a natural conversation about a problem you're working on.",
        feature: "Gemini Live (waveform icon)",
        tip: "Start Gemini Live before you start driving or walking—safety first!",
      },
    },
    // ===========================================================================
    // SECTION 7: Quick Prompt
    // ===========================================================================
    {
      id: "section-7",
      type: "quickPrompt",
      content: {
        heading: "Try It Now: Voice Brainstorming Session",
        description:
          "Open Gemini Live (tap the waveform icon in the Gemini app) and try this conversation starter. Let it flow naturally.",
        promptText:
          "I have [X problem] I'm trying to solve. Here's what I've tried so far: [brief description]. Can you help me think through this?",
      },
    },
    // ===========================================================================
    // SECTION 8: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Complete a Voice Brainstorming Session",
        purpose:
          "Experience the power of thinking out loud with Gemini Live by working through a real problem hands-free.",
        instructions: [
          "Open the Gemini app and tap the waveform icon to start Gemini Live",
          "Start a voice conversation about a work challenge you're facing",
          "Have at least 3 back-and-forth exchanges (your initial thought + 2 follow-ups)",
          "Let Gemini challenge your assumptions or suggest alternatives",
          "End with at least one clear next step or insight you'll act on",
        ],
        deliverable: "One complete voice brainstorming session with clear takeaways",
        estimatedTime: "8-12 minutes",
        starterPrompt:
          "I have [X problem] I'm trying to solve. Here's what I've tried so far: [brief description]. Can you help me think through this?",
        successCriteria: [
          "You have started a Gemini Live voice conversation",
          "You completed at least 3 back-and-forth exchanges",
          "You explored alternatives or got challenged on assumptions",
          "You ended with at least one actionable insight",
          "You experienced natural conversation flow, not robotic commands",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: Completion
    // ===========================================================================
    {
      id: "section-9",
      type: "completion",
      content: {
        title: "You're Ready for Voice Conversations",
        description:
          "You've discovered Gemini Live, the natural voice conversation feature that lets you work hands-free. Now your commute, walks, and in-between moments can become productive thinking time.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
