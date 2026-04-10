/**
 * Lesson 5.22: Voice & Multimodal Features
 *
 * CHAPTER: 4 - Advanced Features Deep Dive
 * LESSON: 22 of 22 - Voice & Multimodal Features
 *
 * DURATION: 15 minutes (multimodal capabilities)
 * XP REWARD: 140 XP
 *
 * PURPOSE: Teach users about ChatGPT's voice conversations,
 * image analysis, and multimodal workflows.
 *
 * KEY RESPONSIBILITIES:
 * - Explain voice conversation capabilities
 * - Cover image analysis features
 * - Show multimodal workflow integration
 * - Demonstrate practical use cases
 */

import type { Lesson } from "@/types/content";

export const lesson_5_22: Lesson = {
  id: "lesson-5-22",
  chapterId: "ch5-4-advanced",
  moduleId: "05-tools-chatgpt",
  title: "Voice & Multimodal Features",
  description: "Use voice conversations, image analysis, and multimodal workflows",
  order: 22,
  estimatedMinutes: 15,
  xpReward: 140,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // HERO IMAGE - At the START
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-22-cover.webp",
        imageAlt: "Voice technology and multimodal AI",
        title: "Voice & Multimodal Features",
        subtitle: "Use voice conversations, image analysis, and multimodal workflows",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Voice Conversations with ChatGPT",
        paragraphs: [
          "The mobile app supports voice conversations - talk to ChatGPT like you're on a phone call:",
          "",
          "**How to use Voice Mode:**",
          "1. Open the ChatGPT mobile app",
          "2. Tap the headphones icon",
          "3. Start talking - ChatGPT listens and responds",
          "4. Continue the conversation naturally",
          "",
          "**When voice shines:**",
          "- Brainstorming while driving or walking",
          "- Getting quick answers without typing",
          "- Long conversations that would be tedious to type",
          "- Accessibility needs",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Image Analysis Capabilities",
        paragraphs: [
          "Upload images and ask ChatGPT to analyze them for a wide range of practical purposes. Document scanning lets you upload photos of receipts, invoices, or documents and ask ChatGPT to extract information or summarize the contents. Screenshot analysis lets you share screenshots of error messages and get help understanding what's wrong and how to fix it.",
          "",
          "Visual content review enables you to get feedback on design mockups or analyze charts and graphs without manually interpreting the data. Whiteboard digitization transforms photographed meeting notes or brainstorming sessions into organized text you can edit and share. Photo interpretation helps you identify objects, text, or details in images and get descriptions or explanations of what you're looking at. Each of these capabilities turns visual information into actionable text-based insights.",
        ],
      },
    },
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "Multimodal Power",
        insights: [
          "Text + Images + Voice = Complete AI assistant",
          "Upload a screenshot and ask about it in the same conversation",
          "Voice mode for hands-free brainstorming",
          "Combine all modes for complex problem-solving",
        ],
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Multimodal Workflow Examples",
        paragraphs: [
          "Combining capabilities creates powerful workflows that solve real problems efficiently. The Screenshot Debug Workflow has you take a screenshot of an error or problem, upload it to ChatGPT with context about what you were doing, and receive an analysis and solution. This is often faster than describing the problem in text.",
          "",
          "The Meeting Notes Workflow starts with photographing a whiteboard after a meeting, then asking ChatGPT to organize the contents into action items, and finally getting a summary email draft you can send to attendees. The Mobile Brainstorm Workflow uses voice conversation while commuting to brainstorm ideas hands-free, then delivers an organized summary when you arrive at your destination. The Visual Research Workflow lets you upload an image of something you're curious about, ask ChatGPT to identify and explain it, and continue the conversation to learn more. Each workflow combines multiple modes for maximum efficiency.",
        ],
      },
    },
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Advanced Voice Mode (Plus Feature)",
        paragraphs: [
          "Plus subscribers get access to Advanced Voice Mode with more natural conversations:",
          "",
          "- **More natural speech patterns** - less robotic responses",
          "- **Interruption handling** - you can interject mid-response",
          "- **Emotion and tone** - responses convey appropriate emotion",
          "- **Longer conversations** - extended session support",
          "",
          "This makes voice feel more like talking to a knowledgeable colleague.",
        ],
      },
    },
    // CONTEXTUAL IMAGE
    {
      id: "section-context-image",
      type: "textWithImage",
      content: {
        title: "AI That Senses and Speaks",
        paragraphs: [
          "Multimodal AI breaks down the barriers between you and information. See something, snap it, understand it. Think something, say it, get help with it.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-22-inline-1.webp",
        imageAlt: "Mobile technology and voice conversations",
      },
    },
    {
      id: "section-6",
      type: "highlightCard",
      content: {
        heading: "Privacy with Images",
        insights: [
          "Don't upload photos containing sensitive personal information",
          "Avoid images with credit cards, addresses, or ID numbers",
          "Be cautious with photos of confidential documents",
          "Review images before uploading to conversations",
        ],
      },
    },
    {
      id: "section-quick-prompt",
      type: "quickPrompt",
      content: {
        heading: "Practice: Image Analysis",
        description:
          "Upload an image to ChatGPT and ask it to analyze. Try a screenshot, photo of notes, or any image you're curious about.",
        promptText:
          "I'm uploading an image. Please: 1) Describe what you see, 2) Extract any text if present, 3) Answer: [your specific question about the image].",
      },
    },
    {
      id: "section-quick-prompt-2",
      type: "quickPrompt",
      content: {
        heading: "Try Voice Mode",
        description:
          "On your mobile app, try voice mode. Ask ChatGPT to help you brainstorm or answer questions hands-free.",
        promptText:
          "Open the mobile app, tap the headphones icon, and say: 'Help me brainstorm ideas for [your topic]. Ask me clarifying questions to help me think through this.'",
      },
    },
    // TOOL REFERENCE
    {
      id: "section-tool-reference",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "For this exercise",
        task: "Open ChatGPT on your mobile device, try voice mode, or upload an image for analysis on desktop.",
        feature: "Voice mode and image analysis",
        tip: "Voice mode is perfect for brainstorming while walking or driving - turn commute time into productive time.",
      },
    },
    // INLINE ACTIONABLE TASK - At the END
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Multimodal Workflow Challenge",
        purpose:
          "Combining multiple ChatGPT capabilities in one workflow demonstrates the full power of multimodal AI. You'll solve a complex task efficiently.",
        instructions: [
          "Identify a task that combines at least 2 capabilities: image + text, voice + document, data + image",
          "Complete the task using the appropriate multimodal approach",
          "Example: Photograph whiteboard notes, have ChatGPT organize them, then create an action plan",
          "Document the workflow for future use",
        ],
        deliverable:
          "Completed multimodal task output plus a workflow summary for repeating the process",
        estimatedTime: "15 minutes",
        starterPrompt:
          "Multimodal workflow: 1) Upload image of [whiteboard/screenshot/document], 2) Ask ChatGPT to extract and organize the information, 3) Request [summary/action plan/formatted output], 4) Iterate as needed.",
        successCriteria: [
          "Used at least 2 different ChatGPT capabilities in one workflow",
          "Produced a useful output for real work",
          "Documented the workflow to repeat in future",
        ],
      },
    },
    {
      id: "section-9",
      type: "completion",
      content: {
        title: "Module 5 Complete: ChatGPT Mastery",
        description:
          "You've completed the ChatGPT Mastery module. You now understand model selection, memory and customization, image generation, data analysis, code interpreter, web research, and multimodal features. You're equipped to use ChatGPT as a powerful professional tool.",
        xpReward: 140,
        buttonText: "Complete Module 5",
      },
    },
  ],
};
