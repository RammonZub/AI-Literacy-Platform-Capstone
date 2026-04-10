/**
 * Lesson 9.3: Understanding Model Versions & Interfaces
 *
 * CHAPTER: 1 - Getting Started
 * LESSON: 3 of 5 - Understanding Your Options
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Explain Midjourney's different models and access methods
 *
 * KEY RESPONSIBILITIES:
 * - Explain the different Midjourney model versions
 * - Show how to specify models in prompts
 * - Compare Discord interface vs Web interface
 * - Help learners choose the right model for their needs
 */

import type { Lesson } from "@/types/content";

export const lesson_9_3: Lesson = {
  id: "lesson-9-3",
  chapterId: "ch9-1-essentials",
  moduleId: "08-tools-midjourney",
  title: "Understanding Model Versions & Interfaces",
  description: "Learn about Midjourney's different AI models and how to access them",
  order: 3,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "theory",
  sections: [
    // ===========================================================================
    // HERO IMAGE
    // ===========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-3-cover.webp",
        imageAlt: "Neural network AI technology visualization representing different AI models",
        title: "Understanding Model Versions & Interfaces",
        subtitle:
          "Midjourney is a family of AI models—understanding when to use which one is the difference between good results and perfect ones",
      },
    },
    // ===========================================================================
    // SECTION 1: Why Multiple Models Exist
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why Midjourney Has Different Versions",
        paragraphs: [
          "AI models are like different artists with different styles. Each Midjourney version was trained differently, resulting in unique aesthetic strengths.",
          "",
          "Version 6 excels at photorealism and natural lighting. Niji specializes in anime and illustration. Version 5.2 offers a reliable fallback for specific styles.",
          "",
          "Choosing the right model for your vision is part of the craft. Let's explore each one.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Version 6 (V6)
    // ===========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Version 6: The Current Standard",
        paragraphs: [
          "Version 6, commonly referred to as V6, represents Midjourney's most advanced model and serves as the current default for most users. This version marked a significant leap forward in AI image generation capabilities when it was released, and it continues to be the go-to choice for the majority of image generation tasks.",
          "",
          "V6 excels at creating photorealistic images with natural lighting that can be indistinguishable from actual photographs. The model demonstrates remarkable accuracy with human anatomy, including those notoriously difficult elements like hands and faces that earlier AI models struggled with. When you need detailed, complex scenes with multiple elements working together harmoniously, V6 delivers consistently impressive results.",
          "",
          "The model's strengths extend to its exceptional prompt understanding. V6 interprets your descriptions more accurately than previous versions, following complex instructions and subtle nuances in your requests. Textures appear realistic and convincing, and while text rendering within images is still not perfect, V6 handles words and letters significantly better than its predecessors.",
          "",
          "In terms of aesthetic style, V6 tends toward naturalistic, photographic looks unless you explicitly direct it toward something more artistic or stylized. This makes it ideal for most situations, which is why it should be your default choice for the majority of your image generation work.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Version 5.2
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Version 5.2: The Reliable Alternative",
        paragraphs: [
          "Version 5.2 served as Midjourney's default model before V6 arrived, and while it has been superseded for most use cases, it still holds value as a reliable alternative with its own distinct character. Understanding when to reach for this older model can give you more creative flexibility.",
          "",
          "V5.2 shines when you're seeking stylized images with a more artistic interpretation of your prompts. While V6 pushes toward photorealism, V5.2 embraces a more painterly aesthetic that can feel more creative and expressive. The lighting in V5.2 images tends to be more dramatic, with higher contrast and more artistic choices that can make images feel like they were created by a human artist rather than captured by a camera.",
          "",
          "The model's strengths become apparent when V6's photorealistic approach feels too clinical or literal for your vision. If you're creating concept art, editorial illustrations, or any work where a more interpreted, artistic style is preferred, V5.2 often delivers results that feel more emotionally resonant and creatively inspired.",
          "",
          "Consider reaching for V5.2 when you want a more stylized look, when V6 isn't quite capturing the aesthetic you're after, or when you specifically want that slightly more dramatic, painterly quality that made this version popular during its time as the default.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Niji 6
    // ===========================================================================
    {
      id: "section-4",
      type: "highlightCard",
      content: {
        heading: "Niji 6: The Anime & Illustration Specialist",
        insights: [
          "Created in partnership with Spellbrush, specifically for anime and illustration styles",
          "Excels at anime characters, manga styles, and cartoon aesthetics",
          "Better at dynamic poses and expressive characters",
          "Use --niji 6 in your prompt to activate",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: How to Specify Model Versions
    // ===========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "How to Specify Model Versions",
        paragraphs: [
          "You control which model Midjourney uses by adding a parameter to your prompt:",
          "",
          "**For Version 6**: Add `--v 6` to the end of your prompt",
          "",
          "**For Version 5.2**: Add `--v 5.2` to the end of your prompt",
          "",
          "**For Niji 6**: Add `--niji 6` to the end of your prompt",
          "",
          "If you don't specify, Midjourney uses its current default (typically V6).",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Quick Prompt Examples
    // ===========================================================================
    {
      id: "section-6",
      type: "quickPrompt",
      content: {
        heading: "Try Different Models",
        description: "Use these prompts to see how different models interpret the same subject:",
        promptText: "A warrior standing on a mountain peak at sunset --v 6",
      },
    },
    {
      id: "section-6b",
      type: "quickPrompt",
      content: {
        heading: "Same Prompt with Niji 6",
        description: "Notice how the anime model interprets the same concept:",
        promptText: "A warrior standing on a mountain peak at sunset --niji 6",
      },
    },
    // ===========================================================================
    // SECTION 7: Discord Interface vs Web Interface
    // ===========================================================================
    {
      id: "section-7",
      type: "textWithImage",
      content: {
        title: "Two Ways to Use Midjourney",
        paragraphs: [
          "Midjourney offers two interfaces for creating images, and you'll likely use both:",
        ],
        imageUrl: "/images/courses/modules/08-tools-midjourney/lesson-9-3-inline-1.webp",
        imageAlt: "Computer screens showing different interfaces",
      },
    },
    // ===========================================================================
    // SECTION 8: Discord Interface
    // ===========================================================================
    {
      id: "section-8",
      type: "text",
      content: {
        title: "The Discord Interface",
        paragraphs: [
          "Discord is where Midjourney started, and it remains the primary way most users generate images. Understanding how this interface works and its relative strengths and weaknesses will help you decide when to use it versus the web alternative.",
          "",
          "The mechanics are straightforward: you type /imagine followed by your prompt in any generation channel, and Midjourney's bot processes your request. This simplicity is part of why Discord became the original home for Midjourney, as it allowed the team to focus on the AI rather than building a custom interface from scratch.",
          "",
          "The Discord approach offers several compelling advantages. It's free to try, which means you can experiment before committing to a subscription. The community aspect is invaluable for learning, as you can see what others are creating in real-time, drawing inspiration from their prompts and results. This public gallery of creativity can teach you techniques and approaches you might never discover on your own.",
          "",
          "However, there are trade-offs to consider. Your generated images appear in public channels where anyone can see them, which may not be ideal for sensitive or proprietary work. Organization can become challenging as your collection grows, since Discord wasn't designed as an image management system. The constant stream of other users' generations can also feel chaotic or overwhelming, especially in busy channels.",
          "",
          "Discord is best suited for getting started, community learning, and quick experiments where you want to iterate rapidly and learn from others around you.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: Web Interface
    // ===========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "The Web Interface (midjourney.com)",
        paragraphs: [
          "The web interface at midjourney.com provides a cleaner, more organized experience designed specifically for managing your AI image creation workflow. While it requires a paid subscription to generate images, it offers significant advantages for serious users.",
          "",
          "Accessing the web interface is simple: navigate to midjourney.com and sign in using your Discord account credentials. This linkage means your images and history sync seamlessly between both interfaces, so you can switch between them based on your current needs without losing any work.",
          "",
          "The web interface excels in several key areas that become increasingly important as your usage grows. Your gallery is private by default, addressing the confidentiality concerns that come with Discord's public channels. Organization tools allow you to sort, filter, and categorize your images in ways that Discord simply cannot match. The interface itself is cleaner and more focused, removing the distractions of chat messages and other users' generations.",
          "",
          "For users managing large collections of images, the web interface is dramatically superior. Finding a specific image from weeks or months ago is straightforward, whereas locating older work in Discord's endless scroll can be nearly impossible. The professional, distraction-free environment also makes it better suited for client work or extended creative sessions.",
          "",
          "The main limitation is that generating images through the web interface requires an active paid subscription. Free trial users must use Discord. The web interface is best for regular users, professional work, and anyone building a substantial library of generated images.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: Side-by-Side Comparison
    // ===========================================================================
    {
      id: "section-10",
      type: "highlightCard",
      content: {
        heading: "Which Interface Should You Use?",
        insights: [
          "Use Discord first—it's where you'll learn and get comfortable",
          "Switch to Web when you have a subscription and need better organization",
          "Many pros use Discord for experimentation and Web for final work",
          "Both interfaces use the same underlying models and produce identical results",
        ],
      },
    },
    // ===========================================================================
    // TOOL REFERENCE
    // ===========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "midjourney",
        action: "Use Midjourney in Discord",
        task: "Compare different AI model versions to see their unique styles",
        feature: "--v 6 and --niji 6 parameters",
        tip: "V6 is best for photorealism, Niji 6 excels at anime and illustration styles",
      },
    },
    // ===========================================================================
    // SECTION 11: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Compare Model Versions",
        purpose:
          "Seeing the difference between models firsthand will help you choose the right one for future projects.",
        instructions: [
          "In a Midjourney channel, use the /imagine command",
          "Generate this prompt with --v 6: 'a majestic eagle soaring over snow-capped mountains'",
          "Now generate the same prompt with --niji 6 to see the anime style",
          "Compare the two results side by side",
        ],
        deliverable: "Two generated images showing the same subject in different model styles",
        estimatedTime: "5-10 minutes",
        starterPrompt:
          "/imagine prompt: a majestic eagle soaring over snow-capped mountains, dramatic clouds, golden hour light --v 6",
        successCriteria: [
          "You generated at least one image with V6 (default model)",
          "You generated at least one image with Niji 6 (anime model)",
          "You observed and noted the stylistic differences between the models",
        ],
      },
    },
    // ===========================================================================
    // SECTION 12: Completion
    // ===========================================================================
    {
      id: "section-12",
      type: "completion",
      content: {
        title: "Models & Interfaces Mastered",
        description:
          "You now understand Midjourney's different models and when to use each one. You also know about both Discord and Web interfaces. In the next lesson—the moment you've been waiting for—you'll create your first image!",
        xpReward: 100,
        buttonText: "Create My First Image",
      },
    },
  ],
};
