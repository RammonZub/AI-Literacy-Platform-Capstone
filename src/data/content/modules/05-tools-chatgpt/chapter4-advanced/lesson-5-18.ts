/**
 * Lesson 5.18: DALL-E Image Generation
 *
 * CHAPTER: 4 - Advanced Features Deep Dive
 * LESSON: 18 of 22 - DALL-E Image Generation
 *
 * DURATION: 15 minutes (visual AI capabilities)
 * XP REWARD: 120 XP
 *
 * PURPOSE: Teach users how to create images with ChatGPT using DALL-E,
 * including prompt techniques for better image results.
 *
 * KEY RESPONSIBILITIES:
 * - Explain DALL-E image generation capabilities
 * - Teach prompt techniques for images
 * - Cover style and composition control
 * - Show business use cases
 */

import type { Lesson } from "@/types/content";

export const lesson_5_18: Lesson = {
  id: "lesson-5-18",
  chapterId: "ch5-4-advanced",
  moduleId: "05-tools-chatgpt",
  title: "DALL-E Image Generation",
  description: "Create stunning images with ChatGPT using AI",
  order: 18,
  estimatedMinutes: 15,
  xpReward: 120,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // HERO IMAGE - At the START
    {
      id: "section-hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/05-tools-chatgpt/lesson-5-18-cover.webp",
        imageAlt: "AI generated art and design",
        title: "DALL-E Image Generation",
        subtitle: "Create stunning images with ChatGPT using AI",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "What DALL-E Can Do",
        paragraphs: [
          "DALL-E is ChatGPT's built-in image generation tool. Simply describe what you want, and it creates original images from scratch.",
          "",
          "**Key capabilities:**",
          "- Generate images from text descriptions",
          "- Create in various art styles (photorealistic, illustration, 3D, etc.)",
          "- Edit and refine existing images",
          "- Create multiple variations of an image",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Image Prompt Structure",
        paragraphs: [
          'Good image prompts follow a structure that includes several key elements for better results. Start with the subject: what is the main focus? For example, "A professional woman giving a presentation." Then specify the style: what artistic approach should the image take? Add something like "in a minimalist illustration style" to guide the visual treatment.',
          "",
          'Include the setting or background: where is this happening? "In a modern office conference room" provides crucial context. Add the mood or atmosphere: what feeling should the image convey? "With warm, professional lighting" shapes the emotional tone. Finally, include technical details like orientation and quality: "wide angle, high quality, 16:9 aspect ratio" ensures the output matches your intended use case. This structure—Subject + Style + Setting + Mood + Technical specs—consistently produces better images than vague descriptions.',
        ],
      },
    },
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "Image Prompt Formula",
        insights: [
          "Subject + Style + Setting + Mood + Technical specs = Great image",
          "Be specific but not overly detailed - leave room for AI creativity",
          "Reference existing art styles (Studio Ghibli, Pixar, Bauhaus) for consistent looks",
        ],
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Style Options for Professional Use",
        paragraphs: [
          'Choosing the right style for your business context is crucial for professional results. For presentations, styles like "clean vector illustration," "minimalist flat design," and "professional infographic style" create visuals that support your message without distracting from it. These styles are polished and business-appropriate.',
          "",
          'For social media, you want attention-grabbing visuals: "vibrant, eye-catching design," "modern gradient illustration," or "lifestyle photography style" tend to perform well in feeds where you\'re competing for attention. For reports and documents, simpler is often better: "simple line art," "technical diagram style," or "clean, professional stock photo look" integrate well with text-heavy content. For creative projects, you have more freedom to experiment with "watercolor illustration," "3D rendered Pixar style," or "abstract geometric design" depending on your brand and audience.',
        ],
      },
    },
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Iterating on Images",
        paragraphs: [
          "Rarely is your first image perfect. Use these techniques to refine:",
          "",
          "**Ask for variations**: 'Give me 4 variations with different color schemes'",
          "",
          "**Modify specific elements**: 'Keep the composition but make the colors more corporate - blues and grays'",
          "",
          "**Change the style**: 'Redo this as a minimalist line art illustration'",
          "",
          "**Adjust the mood**: 'Make it more energetic and dynamic'",
        ],
      },
    },
    // CONTEXTUAL IMAGE
    {
      id: "section-context-image",
      type: "textWithImage",
      content: {
        title: "From Description to Image",
        paragraphs: [
          "The key is describing what you want in visual terms. Think like you're briefing a designer - be specific about style, mood, and composition.",
        ],
        imageUrl: "/images/courses/modules/05-tools-chatgpt/lesson-5-18-inline-1.webp",
        imageAlt: "Creative design and illustration process",
      },
    },
    {
      id: "section-quick-prompt",
      type: "quickPrompt",
      content: {
        heading: "Practice: Create a Professional Image",
        description:
          "Generate an image for a business presentation. Think about what visual would help communicate your message.",
        promptText:
          "Create an image of [subject] in [style] style, set in [setting], with [mood] atmosphere. Make it [orientation] and suitable for [use case].",
      },
    },
    {
      id: "section-quick-prompt-2",
      type: "quickPrompt",
      content: {
        heading: "Iterate on Your Image",
        description:
          "Now refine the image you created. Ask for adjustments to make it perfect for your needs.",
        promptText:
          "Modify the image: [specific change]. Keep [what works] but adjust [what needs improvement].",
      },
    },
    // TOOL REFERENCE
    {
      id: "section-tool-reference",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "For this exercise",
        task: "Open ChatGPT and ask it to generate an image using DALL-E by describing what you want to create.",
        feature: "DALL-E image generation",
        tip: "Be specific about style and mood - vague prompts produce unpredictable results.",
      },
    },
    // INLINE ACTIONABLE TASK - At the END
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create a Professional Image",
        purpose:
          "Generating a usable professional image demonstrates the practical value of DALL-E. You'll have a visual you can actually use in your work.",
        instructions: [
          "Identify a real need for an image (presentation, social media, report, marketing)",
          "Write a detailed image prompt using the Subject + Style + Setting + Mood formula",
          "Generate the image and iterate at least twice with specific refinements",
          "Download the final image ready for use in your project",
        ],
        deliverable: "A professional-quality image ready for use in your actual work project",
        estimatedTime: "10 minutes",
        starterPrompt:
          "Create an image of [specific subject] in [art style] style, set in [setting/location], with [mood/atmosphere]. The image should be [orientation: landscape/portrait] and suitable for [use case: presentation header, social media post, report cover].",
        successCriteria: [
          "Image serves a real professional purpose",
          "Prompt included all formula elements",
          "Iterated at least twice to refine the output",
        ],
      },
    },
    {
      id: "section-8",
      type: "completion",
      content: {
        title: "Image Generation Mastered",
        description:
          "You can now create custom images for any professional need. Remember to be specific about style, iterate to refine, and choose styles appropriate for your audience.",
        xpReward: 120,
        buttonText: "Complete Image Generation",
      },
    },
  ],
};
