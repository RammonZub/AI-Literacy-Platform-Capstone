/**
 * Lesson 9.17: Personalized Gifts & Home Decor
 *
 * CHAPTER: 5 - Personal Creative Projects
 * LESSON: 1 of 2 - Personalized Gifts & Home Decor
 *
 * DURATION: 15 minutes (practical personal projects)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach how to create meaningful personalized gifts and home decor
 * using Midjourney for personal, heartfelt projects.
 *
 * KEY RESPONSIBILITIES:
 * - Explain custom portrait creation techniques
 * - Show gift and decor project workflows
 * - Provide prompt templates for personal projects
 */

import type { Lesson } from "@/types/content";

export const lesson_9_17: Lesson = {
  id: "lesson-9-17",
  chapterId: "ch9-5-personal",
  moduleId: "08-tools-midjourney",
  title: "Personalized Gifts & Home Decor",
  description:
    "Create meaningful personalized gifts and custom home decor that friends and family will treasure forever",
  order: 17,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-17-cover.webp",
        imageAlt: "Cozy home with personalized decor and gifts",
        title: "Personalized Gifts & Home Decor",
        subtitle:
          "Create meaningful personalized gifts and custom home decor that friends and family will treasure forever",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Custom Portraits for Loved Ones",
        paragraphs: [
          "AI portraits make incredibly personal gifts. The key is choosing a style that matches the recipient's personality—whimsical for children, elegant for parents, bold for artistic friends.",
          "You're not creating a photograph. You're capturing essence and emotion through artistic interpretation.",
        ],
      },
    },
    {
      id: "section-2",
      type: "textWithBullets",
      content: {
        title: "Portrait Styles by Occasion",
        paragraphs: ["Match your portrait style to the occasion and recipient:"],
        bullets: [
          "**Family portraits**: Warm, cozy illustration style, soft lighting, earth tones",
          "**Pet portraits**: Playful cartoon, watercolor pet, or regal oil painting style",
          "**Couple gifts**: Romantic impressionist, dreamy aesthetic, soft focus",
          "**Children's rooms**: Whimsical storybook, bright colors, magical elements",
          "**Memorial pieces**: Gentle ethereal style, soft focus, peaceful atmosphere",
        ],
      },
    },
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "Portrait Prompt Formula",
        insights: [
          "[Subject description] + [Art style] + [Mood/atmosphere] + [Color palette] + --ar [ratio]",
          "Example: 'Mother and child embracing, watercolor illustration, warm and loving, soft pastels --ar 3:4'",
          "Avoid photorealism for gifts—artistic styles feel more special",
        ],
      },
    },
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "Home Decor That Matches Your Space",
        paragraphs: [
          "Create wall art that perfectly complements your home's color scheme and style. Browse Pinterest or design blogs for inspiration, then adapt the aesthetic through prompting.",
          "For gallery walls, generate multiple pieces in the same style but different subjects—creates cohesive variety.",
        ],
        imageUrl: "/images/courses/modules/08-tools-midjourney/lesson-9-17-inline-1.webp",
        imageAlt: "Gallery wall with coordinated art pieces",
      },
    },
    {
      id: "section-5",
      type: "textWithBullets",
      content: {
        title: "Home Decor Project Types",
        paragraphs: ["Transform your living space with custom AI art:"],
        bullets: [
          "**Canvas prints**: Large statement pieces, abstract or landscape, --ar 2:3 or 3:4",
          "**Gallery walls**: 3-5 coordinated pieces in same style, varying subjects",
          "**Seasonal decor**: Holiday themes, seasonal colors, temporary displays",
          "**Color-matched art**: Describe your room's palette in the prompt for perfect coordination",
          "**Themed rooms**: Nursery art, home office motivation, kitchen botanicals",
        ],
      },
    },
    {
      id: "section-6",
      type: "quickPrompt",
      content: {
        heading: "Practice: Color-Matched Wall Art",
        description: "Create art that perfectly matches your room's color scheme.",
        promptText:
          "[Subject or abstract concept], [art style], color palette featuring [your room colors: e.g., sage green, cream, terracotta], [mood: e.g., calming and organic], minimalist composition --ar 2:3 --v 6.1",
      },
    },
    {
      id: "section-7",
      type: "textWithBullets",
      content: {
        title: "Special Occasion Projects",
        paragraphs: ["Mark life's milestones with personalized AI art:"],
        bullets: [
          "**Wedding gifts**: Couple portrait in romantic style, venue illustration",
          "**Baby announcements**: Whimsical illustration with baby's name, nursery art",
          "**Birthday celebrations**: Age milestone poster, hobby-themed portrait",
          "**Holiday cards**: Custom seasonal scene, family illustrated card",
          "**Anniversary commemorations**: Couple's journey through illustrated scenes",
        ],
      },
    },
    {
      id: "section-8",
      type: "highlightCard",
      content: {
        heading: "From Digital to Physical",
        insights: [
          "Upscale your favorites: Use Midjourney's upscale options or external tools",
          "Print services: Canvas prints, metal prints, framed posters, photo books",
          "Resolution matters: Generate at highest quality, use --quality 2 for important pieces",
          "Test small first: Order small prints before committing to large canvases",
        ],
      },
    },
    {
      id: "section-9",
      type: "textWithBullets",
      content: {
        title: "Memory Books & Legacy Projects",
        paragraphs: ["Create lasting tributes to precious memories:"],
        bullets: [
          "**Photo book illustrations**: Style-consistent art for each chapter or season",
          "**Memory books**: Illustrated stories capturing family history",
          "**Legacy portraits**: Ancestral scenes, family tree illustrations",
          "**Memorial art**: Gentle, peaceful pieces honoring loved ones",
        ],
      },
    },
    {
      id: "section-10",
      type: "quickPrompt",
      content: {
        heading: "Practice: Gift Portrait Creation",
        description: "Create a portrait for someone special in your life.",
        promptText:
          "Portrait of [person/pet description: e.g., grandmother with kind eyes and silver hair], [art style: e.g., soft oil painting], warm and loving atmosphere, [colors: e.g., earth tones and cream], gift-worthy composition --ar 3:4 --v 6.1",
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "midjourney",
        action: "Use Midjourney in Discord",
        task: "Create a personalized gift portrait",
        feature: "Artistic style prompting with aspect ratios",
        tip: "Use artistic styles like watercolor or oil painting instead of photorealism for gifts that feel more special and heartfelt",
      },
    },
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create a Personalized Gift Portrait",
        purpose:
          "Design a portrait for someone special in your life using artistic style rather than photorealism.",
        instructions: [
          "Think of someone you'd like to create a gift for (family member, friend, pet)",
          "Choose an art style that matches their personality (watercolor, oil painting, illustration)",
          "Write a prompt describing the subject with specific, meaningful details",
          "Include mood and atmosphere that captures their essence",
          "Generate, upscale, and save for potential printing",
        ],
        deliverable: "A personalized portrait suitable for gifting",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "/imagine prompt: portrait of a kind grandmother with gentle smile and silver hair, wearing a cozy cream sweater, soft watercolor illustration style, warm and loving atmosphere, earth tones and cream colors, gift-worthy composition --ar 3:4 --s 200 --v 6",
        successCriteria: [
          "Your portrait uses an artistic style (not photorealism)",
          "The subject description includes meaningful, specific details",
          "The mood and atmosphere match the person's character",
          "The image would look good printed as a gift",
        ],
      },
    },
    {
      id: "section-11",
      type: "completion",
      content: {
        title: "Gift & Decor Skills Unlocked",
        description:
          "You now know how to create meaningful personalized gifts and custom home decor with Midjourney. From family portraits to perfectly coordinated wall art, your creations will be treasured for years to come.",
        xpReward: 100,
        buttonText: "Complete Gift & Decor Skills",
      },
    },
  ],
};
