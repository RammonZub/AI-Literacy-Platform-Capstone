/**
 * Lesson 5.23: Gmail Integration Mastery
 *
 * CHAPTER: 5 - Integrations & Capstone
 * LESSON: 23 of 30 - Gmail Integration
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Master ChatGPT integration with Gmail for professional email workflows
 *
 * KEY CONCEPTS:
 * - Writing emails with ChatGPT in Gmail context
 * - Email thread summarization techniques
 * - Response automation strategies
 * - Professional communication best practices
 */

import type { Lesson } from "@/types/content";

export const lesson_5_23: Lesson = {
  id: "lesson-5-23",
  chapterId: "ch5-5-integrations",
  moduleId: "05-tools-chatgpt",
  title: "Gmail Integration Mastery",
  description: "Transform your email workflow with ChatGPT-powered Gmail integration",
  order: 23,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // SECTION: Hero Image
    // ===========================================================================
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-23-cover.webp",
        imageAlt: "Gmail and email productivity",
        title: "Gmail Integration Mastery",
        subtitle: "Transform your email workflow with ChatGPT",
      },
    },
    // ===========================================================================
    // SECTION: Introduction
    // ===========================================================================
    {
      id: "section-intro",
      type: "text",
      content: {
        title: "The Email Time Problem",
        paragraphs: [
          "The average professional spends 28% of their workday on email. With the right integration strategy, you can reclaim hours every week while improving quality.",
          "",
          "**The integration mindset** asks: How can ChatGPT enhance my entire email workflow, not just individual messages?",
          "",
          "This lesson shows you how to build a seamless system where ChatGPT becomes your email co-pilot.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Integration Approaches
    // ===========================================================================
    {
      id: "section-approaches",
      type: "text",
      content: {
        title: "Three Integration Approaches",
        paragraphs: [
          "Choose the approach that fits your workflow and technical comfort level. Approach 1 is the Copy-Paste Workflow, which is the simplest option. You draft in ChatGPT, then paste into Gmail. To add context to ChatGPT, you copy relevant email content from your inbox. This requires no setup and works immediately, though it's more manual.",
          "",
          "Approach 2 uses Gmail Add-ons or Browser Extensions like ChatGPT Writer or Harpa AI. These tools integrate directly into Gmail's compose window, giving you AI assistance without switching tabs. This is faster than copy-paste but requires installing and configuring an extension.",
          "",
          "Approach 3 is a Custom GPT with Email Context. You create a GPT that knows your communication style, common scenarios, and preferred formats. This provides the most personalized experience but requires initial setup time. Choose based on how often you write emails and how much customization you need.",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Highlight Card - Thread Summarization
    // ===========================================================================
    {
      id: "section-highlight-thread",
      type: "highlightCard",
      content: {
        heading: "Thread Summarization",
        insights: [
          "Long email chains become clear summaries in seconds",
          "Copy the thread, paste into ChatGPT: 'Summarize this conversation, key decisions, and outstanding questions'",
          "Perfect for catching up after vacation or preparing for meetings",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Thread Summarization Prompts
    // ===========================================================================
    {
      id: "section-thread-prompts",
      type: "text",
      content: {
        title: "Thread Summarization Prompts",
        paragraphs: [
          'Use these prompts when dealing with long email conversations. For a quick catch-up, try: "Summarize this email thread in 3 bullet points: key topic, decisions made, and next steps." This gives you the essentials without reading everything. For meeting prep, use: "Extract all action items, deadlines, and responsible parties from this conversation." This turns a thread into a task list.',
          "",
          'When navigating conflict, ask: "What are the different perspectives in this thread? Where is the disagreement?" This helps you understand positions before responding. For executive communication, request: "Create a 2-paragraph summary suitable for forwarding to senior leadership." This distills a lengthy discussion into something leadership will actually read. Each prompt serves a specific purpose—choose the one that matches what you need from the thread.',
        ],
      },
    },
    // ===========================================================================
    // SECTION: Visual Break - Response Automation
    // ===========================================================================
    {
      id: "section-response-visual",
      type: "textWithImage",
      content: {
        title: "Response Automation Strategies",
        paragraphs: [
          "Not automation that sends without you—but automation that drafts responses you can review and send quickly.",
          "",
          "The key is building response templates for common scenarios. ChatGPT generates the draft, you add personalization, and send in seconds.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-23-inline-1.webp",
        imageAlt: "Email automation and productivity",
      },
    },
    // ===========================================================================
    // SECTION: Response Categories
    // ===========================================================================
    {
      id: "section-response-categories",
      type: "text",
      content: {
        title: "High-Value Response Categories",
        paragraphs: [
          'Create response templates for these common scenarios to accelerate your email workflow. For client status requests, use: "Draft a response confirming project is on track. Mention [specific milestone] completed, [next milestone] scheduled for [date]. Tone: Reassuring but concise." This template handles the most common client communication with minimal customization.',
          "",
          'For meeting scheduling: "Respond to this meeting request. I\'m available [times]. Ask for [specific info] if needed. Tone: Professional and helpful." For delay notifications: "Draft a delay notification for [stakeholder]. Reason: [context]. New timeline: [date]. Offer: [mitigation]. Tone: Apologetic but solution-focused." For information requests: "Respond to this query. Provide [key info]. Offer to discuss further if needed. Tone: Helpful and thorough." Each template handles a specific situation while leaving room for the details that make each response personal.',
        ],
      },
    },
    // ===========================================================================
    // SECTION: Highlight Card - Professional Guidelines
    // ===========================================================================
    {
      id: "section-highlight-guidelines",
      type: "highlightCard",
      content: {
        heading: "Professional Email Guidelines",
        insights: [
          "Always review AI-generated emails before sending—never send blind",
          "Add personal touches that show genuine attention (names, specific details)",
          "For sensitive topics, use ChatGPT as a starting point, then rewrite key sections yourself",
        ],
      },
    },
    // ===========================================================================
    // SECTION: Review Checklist
    // ===========================================================================
    {
      id: "section-review-checklist",
      type: "text",
      content: {
        title: "The Review Checklist",
        paragraphs: [
          "Before sending any AI-assisted email, check:",
          "",
          "**Accuracy**: Are names, dates, and details correct?",
          "",
          "**Tone**: Does it sound like you? Is it appropriate for the recipient?",
          "",
          "**Clarity**: Would the recipient understand the message on first read?",
          "",
          "**Completeness**: Did you address everything in the original email?",
          "",
          "**Length**: Is it appropriately concise or detailed for the context?",
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
        action: "For this lesson",
        task: "Open ChatGPT to practice email workflows and thread summarization",
        feature: "Custom GPTs",
        tip: "Create an Email Assistant GPT that knows your communication style",
      },
    },
    // ===========================================================================
    // SECTION: Quick Prompt
    // ===========================================================================
    {
      id: "section-quick-prompt",
      type: "quickPrompt",
      content: {
        heading: "Create Your Email Response GPT",
        description:
          "Draft instructions for a custom GPT that handles your most common email scenarios.",
        promptText:
          "You are my email assistant. When I paste an email, you'll draft a response following these guidelines: [tone preferences], [typical response length], [signature style]. Always ask clarifying questions if context is unclear.",
      },
    },
    // ===========================================================================
    // SECTION: Actionable Task (Inline)
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Gmail Integration Workflow",
        purpose:
          "Building a complete email workflow with ChatGPT transforms your most time-consuming communication channel. You'll create reusable templates for common scenarios.",
        instructions: [
          "Identify your 3 most common email types (status updates, requests, responses)",
          "Create a prompt template for each type using the lesson's framework",
          "Test one template on a real email you need to write",
          "Add the working templates to your prompt library",
        ],
        deliverable: "3 email prompt templates tested and added to your prompt library",
        estimatedTime: "10 minutes",
        starterPrompt:
          "Email Template for [type]: Context: [situation]. Goal: [what to accomplish]. Tone: [appropriate tone]. Format: [structure]. Key points to include: [1, 2, 3]. Things to avoid: [what not to say].",
        successCriteria: [
          "Created 3 distinct email templates for common scenarios",
          "At least one template was tested on a real email",
          "Templates saved in your prompt library for future use",
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
        title: "Gmail Integration Mastered",
        description:
          "You now understand how to integrate ChatGPT into your Gmail workflow—from thread summarization to response automation. The key is building systems, not just drafting individual emails.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
