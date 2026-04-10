/**
 * Lesson 9.12: Niji Mode & Alternative Models
 *
 * CHAPTER: 3 - Controlling Your Results
 * LESSON: 12 of 16 - Niji Mode & Alternative Models
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * LEARNING OBJECTIVES:
 * - Understand Niji mode for anime-style images
 * - Learn when to use different Midjourney models
 * - Master model selection decision-making
 */

import type { Lesson } from "@/types/content";

export const lesson_9_12: Lesson = {
  id: "lesson-9-12",
  chapterId: "ch9-3-parameters",
  moduleId: "08-tools-midjourney",
  title: "Niji Mode & Alternative Models",
  description:
    "Explore Niji for anime-style art and learn when to switch between Midjourney models",
  order: 12,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // HERO IMAGE
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-12-cover.webp",
        imageAlt: "Anime-style illustration artwork",
        title: "Niji Mode & Alternative Models",
        subtitle:
          "Explore Niji for anime-style art and learn when to switch between Midjourney models",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "What Is Niji?",
        paragraphs: [
          "Niji (Japanese for 'rainbow') is a specialized version of Midjourney trained extensively on anime, manga, and illustration styles. It excels at creating characters, scenes, and artwork in Japanese animation style.",
          "",
          "It was developed in collaboration with Spellbrush, a company specializing in anime AI.",
        ],
      },
    },
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "Activating Niji Mode",
        insights: [
          "Add --niji 6 to your prompt",
          "Example: a warrior princess --niji 6",
          "Or use /settings to set Niji as default",
        ],
      },
    },
    {
      id: "section-3",
      type: "text",
      content: {
        title: "What Niji Does Best",
        paragraphs: [
          "Niji mode excels in specific artistic domains where anime and illustration aesthetics are the goal. Understanding these strengths helps you know when Niji is the right tool for your creative vision and when standard Midjourney would serve you better.",
          "",
          "Character creation is where Niji truly shines. The model produces anime characters with expressive faces that capture emotion through stylized features, dynamic poses that convey movement and energy, and all the visual hallmarks of anime aesthetics including large expressive eyes, stylized hair, and the distinctive linework that defines the medium. Whether you're creating original characters, fan art concepts, or character designs for games and stories, Niji delivers results that feel authentically anime rather than like western cartoons attempting anime style.",
          "",
          "Manga and comic scenes render beautifully in Niji, from dramatic action sequences to quiet character moments. The model understands the visual language of Japanese comics, including panel composition, speed lines for motion, impact effects, and the dramatic contrasts that give manga its distinctive look. Black and white manga-style images work particularly well, capturing the ink-based aesthetic of printed manga.",
          "",
          "Beyond strict anime, Niji handles soft illustration styles with a painterly, stylized quality that works beautifully for book illustrations, concept art, and visual storytelling. Fantasy characters and RPG designs emerge with the polished, professional look of game concept art, complete with detailed costumes, distinctive silhouettes, and the visual appeal that makes characters memorable. The model also excels at cute aesthetics, producing chibi characters, kawaii designs, and adorable mascots with the exaggerated proportions and sweetness that define these styles. Action scenes benefit from Niji's understanding of anime-style motion, where poses stretch beyond realistic anatomy to convey speed, impact, and dramatic energy.",
        ],
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "When to Use Standard V6 Instead",
        paragraphs: [
          "While Niji excels at its specialized purpose, standard Midjourney V6 remains the better choice for many creative tasks. Understanding when to stick with the default model prevents frustration and helps you get the right tool for each job.",
          "",
          "Photorealism is the most obvious case for V6. When you need images that look like real photographs, with realistic people, true-to-life textures, and the visual characteristics of actual camera captures, V6 is your only choice. Niji's anime training fundamentally shapes its output toward stylization, making it impossible to achieve genuine photorealism regardless of your prompt. For product photography, portraits, or any image meant to look real, V6 is essential.",
          "",
          "Corporate and professional imagery similarly demands V6. Business presentations, marketing materials, product visualizations, and professional headshots require the credibility and polish that photorealistic or subtly stylized imagery provides. Niji's anime aesthetic would undermine the professional tone these contexts require, making subjects appear cartoonish rather than authoritative.",
          "",
          "Fine art styles outside the anime tradition work better in V6. Oil paintings, watercolors, impressionist works, and other traditional art media render more authentically in the standard model, which has been trained on a broader range of artistic traditions. While Niji can produce beautiful painterly effects, they tend toward the stylized illustration look rather than traditional fine art qualities.",
          "",
          "Architecture and interior visualization benefit from V6's ability to render buildings, spaces, and environments with realistic materials, lighting, and proportions. Niji tends to stylize architectural elements in ways that can make them look like concept art rather than buildable designs. Similarly, nature photography including landscapes, wildlife, and outdoor scenes achieves more convincing realism in V6, where Niji might render natural elements with an illustrated quality that undermines the documentary feel many nature images require.",
        ],
      },
    },
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Comparing Outputs",
        paragraphs: [
          "The same prompt produces very different results in Niji vs. V6. Niji adds anime stylization automatically, while V6 leans toward realism or the specific style you describe.",
        ],
        imageUrl: "/images/courses/modules/08-tools-midjourney/lesson-9-12-inline-1.webp",
        imageAlt: "Comparison of art styles",
      },
    },
    {
      id: "section-6",
      type: "highlightCard",
      content: {
        heading: "Important: Niji Is Not for Photorealism",
        insights: [
          "Niji always applies anime/illustration styling",
          "For realistic images, use standard V6",
          "You can't 'turn off' Niji's style",
        ],
      },
    },
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Other Model Options",
        paragraphs: [
          "Beyond Niji, Midjourney offers access to earlier versions:",
          "",
          "**--v 5.2**: Previous major version. Some users prefer it for specific styles or when V6 feels too detailed.",
          "",
          "**--v 5.1**: Earlier version with different aesthetic tendencies.",
          "",
          "Most users should stick with V6 (default) or Niji 6, but knowing older versions exist gives you more options.",
        ],
      },
    },
    {
      id: "section-8",
      type: "highlightCard",
      content: {
        heading: "Model Selection Quick Reference",
        insights: [
          "--v 6 (default) — Photorealism, general use",
          "--niji 6 — Anime, manga, illustration",
          "--v 5.2 — Alternative aesthetic (fallback)",
        ],
      },
    },
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Model Selection Decision Tree",
        paragraphs: [
          "Choosing the right model doesn't need to be complicated when you have a clear framework for decision-making. The key is to start with your creative goal and work backward to the model that best serves that purpose.",
          "",
          "If anime or manga style is your explicit goal, the choice is straightforward: use --niji 6. This model has been specifically trained on anime and illustration content, and it will deliver authentic results that feel true to the Japanese animation tradition rather than like western interpretations of anime style. Don't try to force photorealistic results from Niji, and don't expect authentic anime from V6.",
          "",
          "When photorealism is what you need, default to --v 6. This model excels at creating images that look like photographs, with realistic lighting, textures, and proportions. The same applies to professional business imagery: corporate presentations, marketing materials, and product visualizations all benefit from V6's grounded, realistic approach.",
          "",
          "Game characters and fantasy art present an interesting middle ground where both models can excel. In these cases, try the same prompt with both --niji 6 and --v 6 to see which interpretation better matches your vision. Niji tends toward stylized, polished character art, while V6 can produce more realistic or painterly fantasy styles.",
          "",
          "Finally, if V6 isn't giving you what you want, --v 5.2 offers an alternative aesthetic that some users prefer for specific styles. It's not better or worse, just different, and worth exploring when you feel stuck with V6's default output.",
        ],
      },
    },
    {
      id: "section-10",
      type: "quickPrompt",
      content: {
        heading: "Compare Models Side by Side",
        description: "Generate the same prompt with both models to see the difference:",
        promptText: "a brave knight standing before a castle --niji 6",
        placeholders: ["--niji 6", "--v 6"],
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "midjourney",
        action: "Use Midjourney in Discord",
        task: "Choose the right model for your artistic style",
        feature: "--niji 6 (anime) or --v 6 (default)",
        tip: "Use --niji 6 for anime/manga style, --v 6 for photorealism and professional work",
      },
    },
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Compare V6 vs Niji",
        purpose: "Understand when to use each model by creating the same scene in both.",
        instructions: [
          "Choose a character-focused prompt (like 'a brave knight in armor')",
          "Generate the prompt with --v 6 (standard model)",
          "Generate the same prompt with --niji 6 (anime model)",
          "Compare and note which model works better for different subjects",
        ],
        deliverable: "Two images of the same character concept in different model styles",
        estimatedTime: "10 minutes",
        starterPrompt:
          "/imagine prompt: a brave knight standing before an ancient castle, dramatic sky, heroic pose, fantasy art --niji 6 --ar 3:4",
        successCriteria: [
          "You generated the same prompt with both --v 6 and --niji 6",
          "You can clearly see the stylistic differences between models",
          "You noted which model you prefer for character art",
          "You understand when to choose each model for future projects",
        ],
      },
    },
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Chapter 3 Complete: Controlling Your Results",
        description:
          "You've mastered all the major parameters for controlling Midjourney output. You can now control aspect ratio, quality, stylization, chaos, seeds, negative prompting, and model selection. These skills give you precise control over every image you create.",
        xpReward: 100,
        buttonText: "Complete Chapter 3",
      },
    },
  ],
};
