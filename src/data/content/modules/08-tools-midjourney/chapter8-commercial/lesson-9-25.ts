/**
 * Lesson 9.25: Understanding Commercial Rights
 *
 * CHAPTER: 8 - Commercial Usage, Rights, and Next Steps
 * LESSON: 1 of 3 - Legal and Rights Framework
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Establish clear understanding of what you can and cannot do with AI-generated images
 *
 * KEY RESPONSIBILITIES:
 * - Explain current legal landscape for AI imagery
 * - Clarify ownership and usage rights
 * - Provide practical guidance for commercial use
 * - Address common legal questions
 */

import type { Lesson } from "@/types/content";

export const lesson_9_25: Lesson = {
  id: "lesson-9-25",
  chapterId: "ch9-8-commercial",
  moduleId: "08-tools-midjourney",
  title: "Understanding Commercial Rights",
  description: "Navigate the legal landscape of AI-generated imagery with confidence and clarity",
  order: 25,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "theory",
  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-25-cover.webp",
        imageAlt: "Business documents and legal framework concept",
        title: "Understanding Commercial Rights",
        subtitle: "Navigate the legal landscape of AI-generated imagery with confidence",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "What You Actually Own",
        paragraphs: [
          "Here's the fundamental truth: when you generate an image with Midjourney, you own certain rights to use that image—but you don't own copyright in the traditional sense.",
          "**With a paid Midjourney subscription**, you own the assets you create. You can use them commercially, sell them, print them, and incorporate them into products. Midjourney assigns these rights to you in their Terms of Service.",
          "**Free trial users** do not own commercial rights to their images. You must have an active paid subscription at the time of generation to claim ownership.",
        ],
      },
    },
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "The Copyright Reality",
        insights: [
          "US Copyright Office: Purely AI-generated images cannot be copyrighted",
          "Human creative input (editing, composition, curation) CAN be copyrighted",
          "Your arrangement, modifications, and creative choices have protection",
          "The raw AI output alone lacks traditional copyright protection",
          "This is evolving—stay informed about policy changes",
        ],
      },
    },
    {
      id: "section-3",
      type: "text",
      content: {
        title: "What This Means Practically",
        paragraphs: [
          "Translating legal concepts into real-world implications helps you understand what's actually possible with your AI-generated images. You CAN use images in commercial projects, sell prints, create products, and incorporate them into marketing materials without asking permission. You CAN also edit, modify, and combine AI images with your own original work to create new compositions that may carry additional protections.",
          "However, you CAN'T prevent others from generating similar images because your 'idea' isn't protected in any way. Someone else can use the same prompt and generate comparable results entirely legally. You also CAN'T claim exclusive ownership of a style, subject, or composition, no matter how unique you believe your prompt was. There's also a significant gray area around selling AI images as 'art' without disclosure, which is technically allowed in most contexts but remains ethically debated in creative communities.",
        ],
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Platform-Specific Terms",
        paragraphs: [
          "Different platforms have different rules about AI-generated content. Check before uploading:",
          "**Print-on-demand (POD)**: Most platforms (Redbubble, Society6) allow AI art, but some require disclosure. Read their current terms.",
          "**Stock photo sites**: Many traditional stock sites don't accept AI-generated content. Specialized AI stock platforms are emerging.",
          "**Social media**: Generally permissive, but be aware some platforms may flag or limit AI content reach.",
          "**Client work**: Always disclose AI use if asked. Some clients have policies against or restrictions on AI-generated content.",
        ],
      },
    },
    {
      id: "section-5",
      type: "highlightCard",
      content: {
        heading: "Commercial Use Checklist",
        insights: [
          "Do you have an active paid Midjourney subscription?",
          "Did you generate this image while subscribed (not during a free trial)?",
          "Have you documented your creation process and prompt?",
          "If selling prints/products, does the platform allow AI content?",
          "If for client work, have you disclosed AI involvement if required?",
          "Have you added sufficient human creative input for copyright claims?",
        ],
      },
    },
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Trademark Considerations",
        paragraphs: [
          "AI can inadvertently generate trademarked content. This creates legal risk.",
          "**Avoid prompts that reference**: Brand names, famous characters, trademarked logos, recognizable products, celebrity likenesses.",
          "**Be cautious with**: Styles strongly associated with specific artists (though this is legally untested), iconic locations with trademarked elements.",
          "**When in doubt**: Use generic descriptions. Instead of 'Mickey Mouse style,' use 'classic cartoon style with round shapes and bold outlines.'",
        ],
      },
    },
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Protecting Your AI-Generated Assets",
        paragraphs: [
          "While you can't copyright raw AI output, you can protect your investment through careful documentation and strategic creative choices. Document your prompt, parameters, and creation date to establish when you created the work and what inputs you used. Save your Discord generation links as proof of creation that connects your saved images to their original generation context.",
          "Track your editing process carefully to show human creative input that might qualify for copyright protection beyond the raw AI output. Register collections of curated and edited works because compilations can be copyrighted even when individual elements cannot. Keep records of your subscription status at the time of generation to prove you had commercial rights when the image was created. For high-value commercial use involving significant revenue or legal risk, consult an IP lawyer who can provide guidance specific to your situation.",
        ],
      },
    },
    {
      id: "section-8",
      type: "highlightCard",
      content: {
        heading: "When to Consult a Professional",
        insights: [
          "Legal advice is worth the cost when:",
          "Using AI images in registered trademarks or logos",
          "Large-scale commercial products with significant revenue",
          "Client contracts with indemnification clauses",
          "Any situation where IP disputes could be costly",
          "The law is still settling—professional guidance protects you",
        ],
      },
    },
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Staying Updated",
        paragraphs: [
          "AI law is evolving rapidly. What's true today may change.",
          "**Follow**: US Copyright Office announcements, Midjourney's Terms of Service updates, AI legal news from reputable sources.",
          "**Bookmark**: The Electronic Frontier Foundation (EFF) and similar organizations track AI legal developments.",
          "**Revisit**: This lesson's guidance annually, or before major commercial projects.",
          "Being informed protects you. Being proactive with documentation protects you more.",
        ],
      },
    },
    {
      id: "section-10",
      type: "quickPrompt",
      content: {
        heading: "Document Your Rights",
        description: "Before using an image commercially, document the key information:",
        promptText:
          "Commercial use checklist: Subscription active: [YES/NO] | Generation date: [DATE] | Project purpose: [DESCRIPTION] | Platform requirements checked: [YES/NO] | Human creative input added: [DESCRIPTION]",
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "midjourney",
        action: "Use Midjourney in Discord",
        task: "Document commercial rights for your generated images",
        feature: "Terms of Service and commercial usage rights",
        tip: "Always maintain an active paid subscription for commercial use",
      },
    },
    // ===========================================================================
    // QUIZ: Conceptual lesson - legal/rights
    // ===========================================================================
    {
      id: "section-quiz",
      type: "quiz",
      content: {
        context: "Quick check on your understanding of commercial rights for AI-generated images.",
        quiz: {
          question:
            "What is required to own commercial rights to images generated with Midjourney?",
          options: [
            "Nothing - all generated images are free to use commercially",
            "An active paid Midjourney subscription at the time of generation",
            "A special commercial license purchased separately",
            "Registration with the US Copyright Office",
          ],
          correctAnswer: 1,
        },
      },
    },
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Lesson Complete",
        description:
          "You now understand the legal framework for using Midjourney images commercially. While AI copyright is still evolving, you have the knowledge to make informed decisions, document your work properly, and know when to seek professional legal advice.",
        xpReward: 100,
        buttonText: "Continue to Print & Tools",
      },
    },
  ],
};
