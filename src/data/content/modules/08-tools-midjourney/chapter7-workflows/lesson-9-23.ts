/**
 * Lesson 9.23: Upscaling, Zoom & Pan Features
 *
 * CHAPTER: 7 - Refinement and Professional Workflows
 * LESSON: 1 of 2 - Image Refinement Tools
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Master Midjourney's image refinement features for professional-quality outputs
 *
 * KEY RESPONSIBILITIES:
 * - Teach upscaling options (Subtle vs Creative, 2x vs 4x)
 * - Explain Zoom Out and Pan features
 * - Guide users through resolution decisions
 * - Demonstrate complete refinement workflow
 */

import type { Lesson } from "@/types/content";

export const lesson_9_23: Lesson = {
  id: "lesson-9-23",
  chapterId: "ch9-7-workflows",
  moduleId: "08-tools-midjourney",
  title: "Upscaling, Zoom & Pan Features",
  description: "Master the tools that transform good images into production-ready masterpieces",
  order: 23,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-23-cover.webp",
        imageAlt: "Abstract colorful patterns representing image refinement",
        title: "Upscaling, Zoom & Pan Features",
        subtitle: "Transform good images into production-ready masterpieces",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Two Paths of Upscaling",
        paragraphs: [
          "When you generate an image, Midjourney creates it at a base resolution. Upscaling increases that resolution—but the method you choose matters.",
          "**Subtle Upscale** preserves your original image while increasing resolution. Use this when your image is already perfect and you just need more pixels.",
          "**Creative Upscale** adds detail and enhances the image while upscaling. Use this when you want Midjourney to 'finish' areas that look incomplete or add more visual interest.",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Subtle vs Creative: When to Use Each",
        paragraphs: [
          "Choose your upscale type based on your goals and the current state of your image. Subtle Upscale works best for final images destined for print, client presentations, or any situation where your composition is already perfect and you simply need more pixels without altering the visual content. This approach preserves exactly what you created while making it suitable for larger outputs.",
          "Creative Upscale serves different purposes entirely. Use it when images feel unfinished, need more detail in certain areas, or when you welcome unexpected enhancements that might improve the result. A good rule of thumb is to start with Subtle unless something feels 'off' about the image. Be aware that Creative Upscale can change your image significantly, so always save your original before experimenting with this more adventurous option.",
        ],
      },
    },
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "Resolution Decision Matrix",
        insights: [
          "Web/Social Media (Instagram, websites): 2x upscale is usually sufficient",
          "Print materials (business cards, flyers): 4x upscale recommended for sharp output",
          "Large format (posters, banners): 4x minimum, consider external upscalers for very large prints",
          "Always check your final output size requirements before upscaling",
        ],
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Zoom Out: Expanding Your Canvas",
        paragraphs: [
          "Zoom Out is one of Midjourney's most powerful features. It takes your existing image and generates new content around it, effectively expanding the scene.",
          "**2x Zoom Out** doubles the canvas, placing your original in the center with new content on all sides. **1.5x Zoom Out** is more conservative, useful when you want less expansion.",
          "The magic: Midjourney maintains the style, lighting, and mood of your original while intelligently extending the scene. A portrait becomes a room. A landscape becomes a vast panorama.",
        ],
      },
    },
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Zoom Out Best Practices",
        paragraphs: [
          "Get the best results from Zoom Out by following proven practices that ensure quality expansions. Start with a strong composition because Zoom Out extends what exists rather than fixing fundamental problems. Your original image should already be well-composed since the expansion will amplify both strengths and weaknesses.",
          "Use Custom Zoom when you want to modify the prompt while expanding, giving you control over what appears in the newly generated areas. The Custom Zoom syntax involves adding `--zoom 2` to your parameters and modifying your prompt to guide the new content generation. Remember that Zoom Out only works on upscaled images, so always upscale first before attempting to expand your canvas. You can Zoom Out multiple times for dramatic expansion, building vast scenes from modest beginnings.",
        ],
      },
    },
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Pan: Directional Extension",
        paragraphs: [
          "While Zoom Out expands in all directions, Pan lets you extend specifically left, right, up, or down. This is essential when you need more space in one direction without changing the rest.",
          "**Use cases**: Creating wide banners (pan left/right), extending skies (pan up), adding foreground (pan down), or building ultra-wide panoramic scenes through multiple pans.",
          "Pan also only works on upscaled images. Click the arrow buttons beneath your upscaled image to pan in that direction.",
        ],
      },
    },
    {
      id: "section-7",
      type: "highlightCard",
      content: {
        heading: "The Refinement Workflow",
        insights: [
          "1. Generate your base image and select your favorite variation",
          "2. Upscale (Subtle first, Creative if needed)",
          "3. Decide: Do you need more canvas? Use Zoom Out or Pan",
          "4. Custom Zoom if you want to guide the new content",
          "5. Final upscale at your target resolution (2x or 4x)",
          "6. Download and verify quality at intended output size",
        ],
      },
    },
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Custom Zoom with Prompt Modification",
        paragraphs: [
          "Custom Zoom is where real control lives. You can modify your prompt while zooming to guide what appears in the expanded areas.",
          "**Example**: Your original was 'a cat on a windowsill.' For Custom Zoom, you might add '--zoom 2' and change the prompt to 'a cat on a windowsill, cozy room with bookshelves and plants, warm afternoon light' to ensure the new content matches your vision.",
          "This technique lets you 'direct' the expansion rather than leaving it entirely to Midjourney's interpretation.",
        ],
      },
    },
    {
      id: "section-9",
      type: "quickPrompt",
      content: {
        heading: "Practice: Refinement Decision",
        description: "For your next image project, plan your refinement approach:",
        promptText:
          "My refinement plan: Output purpose: [web/print/large format] | Upscale type: [Subtle/Creative] | Resolution: [2x/4x] | Canvas expansion: [Zoom Out/Pan/None needed]",
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "midjourney",
        action: "Use Midjourney in Discord",
        task: "Upscale an image and use Zoom Out to expand the canvas",
        feature: "Upscale (Subtle/Creative), Zoom Out 2x",
        tip: "Always upscale first before using Zoom Out or Pan features",
      },
    },
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Practice Zoom Out",
        purpose:
          "Experience the power of Zoom Out to expand an image beyond its original boundaries.",
        instructions: [
          "Generate a simple, centered subject (like a portrait or single object)",
          "Upscale your favorite variation",
          "Use Zoom Out 2x to expand the scene around your subject",
          "Observe how Midjourney extends the environment while maintaining style",
        ],
        deliverable:
          "An image showing the Zoom Out effect, with expanded canvas around the original subject",
        estimatedTime: "10 minutes",
        starterPrompt:
          "/imagine prompt: a curious owl perched on a branch, detailed feathers, alert expression, forest background --ar 1:1 --v 6",
        successCriteria: [
          "You generated and upscaled a base image",
          "You applied Zoom Out 2x to expand the canvas",
          "The expanded content matches the original style and lighting",
          "You understand when Zoom Out is useful for projects",
        ],
      },
    },
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Lesson Complete",
        description:
          "You now understand how to transform raw generations into polished, production-ready images using upscaling, Zoom Out, and Pan. These refinement tools separate casual users from serious visual creators.",
        xpReward: 100,
        buttonText: "Continue to Workflows",
      },
    },
  ],
};
