/**
 * Lesson 9.11: Chaos, Seeds & Negative Prompting
 *
 * CHAPTER: 3 - Controlling Your Results
 * LESSON: 11 of 16 - Chaos, Seeds & Negative Prompting
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * LEARNING OBJECTIVES:
 * - Understand chaos parameter for variation control
 * - Learn how seeds work for reproducibility
 * - Master negative prompting with --no
 */

import type { Lesson } from "@/types/content";

export const lesson_9_11: Lesson = {
  id: "lesson-9-11",
  chapterId: "ch9-3-parameters",
  moduleId: "08-tools-midjourney",
  title: "Chaos, Seeds & Negative Prompting",
  description: "Control variation, reproducibility, and exclusions in your Midjourney images",
  order: 11,
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
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-11-cover.webp",
        imageAlt: "Abstract chaos and order concept",
        title: "Chaos, Seeds & Negative Prompting",
        subtitle: "Control variation, reproducibility, and exclusions in your Midjourney images",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Chaos Parameter (--c)",
        paragraphs: [
          "When you generate an image, Midjourney creates four variations in a grid. Chaos controls how different these four images are from each other.",
          "",
          "**Low chaos**: All four images are similar variations of the same concept.",
          "",
          "**High chaos**: The four images explore very different interpretations of your prompt.",
        ],
      },
    },
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "Chaos Settings (--c 0-100)",
        insights: [
          "--c 0 (default) — Focused, similar variations",
          "--c 50 — Moderate variety between images",
          "--c 100 — Maximum variety, very different results",
        ],
      },
    },
    {
      id: "section-3",
      type: "text",
      content: {
        title: "When to Use High Chaos",
        paragraphs: [
          "High chaos settings become valuable in specific creative scenarios where exploration and variety serve your goals better than consistency. Understanding when to embrace chaos helps you use this parameter strategically rather than randomly.",
          "",
          "The most common use case for high chaos is early-stage exploration when you're genuinely uncertain about the direction you want to take. Rather than committing to a specific vision and iterating toward it, high chaos lets you survey the landscape of possibilities. Midjourney will show you radically different interpretations of your prompt, some of which might spark ideas you hadn't considered. This exploratory approach is particularly valuable when starting a new project or when you feel creatively stuck.",
          "",
          "High chaos also serves as an inspiration engine. When you want to be surprised, when you're looking for creative directions you wouldn't have found on your own, high chaos delivers unexpected results that can jumpstart your imagination. The AI's varied interpretations often reveal compositional possibilities, style combinations, or conceptual angles that might never have occurred to you through deliberate planning.",
          "",
          "Creative brainstorming sessions benefit enormously from high chaos. Instead of generating one consistent set of variations, you get four distinct starting points, effectively multiplying your creative options with each generation. This efficiency makes high chaos ideal for rapid concept development. Abstract concepts also pair well with high chaos because there's rarely a single correct interpretation. When the subject itself is open to multiple valid readings, chaos helps explore that interpretive space rather than arbitrarily narrowing it.",
        ],
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "When to Use Low Chaos",
        paragraphs: [
          "Low chaos settings serve the opposite purpose from high chaos: they maintain consistency and focus within your generations. When you have a clear vision and want variations that stay true to that concept, low chaos keeps all four images in the same visual family rather than exploring distant possibilities.",
          "",
          "The most straightforward use case is refining a specific concept. When you know what you want and simply need variations to choose from or combine, low chaos ensures all options explore the same basic idea. Each image will be recognizably related to the others, differing in details and interpretation while maintaining the core concept. This focused variation is ideal when you're close to your goal and need fine-tuning rather than exploration.",
          "",
          "Visual consistency matters tremendously in many professional contexts. When you're creating a series of images that need to feel cohesive, whether for a presentation, a brand identity, or a themed collection, low chaos maintains the stylistic relationships between generations. The images will share compositional approaches, color treatments, and overall feeling, creating a unified visual language rather than a scattered assortment.",
          "",
          "Presentations and client work often demand this consistency. When presenting options to stakeholders, you want them to see variations on a theme, not completely different artistic directions that make comparison difficult. Similarly, brand work requires maintaining visual identity across images, which low chaos naturally supports by keeping variations within a consistent aesthetic framework.",
        ],
      },
    },
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Understanding Seeds",
        paragraphs: [
          "Every time you generate an image, Midjourney assigns it a random 'seed' number. This seed is like a recipe code that determines all the random choices made during generation.",
          "",
          "**The magic**: If you use the same seed with the same prompt, you get the same image (or extremely similar).",
        ],
        imageUrl: "/images/courses/modules/08-tools-midjourney/lesson-9-11-inline-1.webp",
        imageAlt: "Number patterns and code",
      },
    },
    {
      id: "section-6",
      type: "highlightCard",
      content: {
        heading: "The --seed Parameter",
        insights: [
          "--seed 12345 (any number 0-4294967295)",
          "Same seed + same prompt = same image",
          "Useful for creating series with slight variations",
        ],
      },
    },
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Practical Seed Uses",
        paragraphs: [
          "Seeds unlock powerful workflows for creating consistent series and reproducing favorite results. Understanding how to find, use, and leverage seeds gives you a level of control over your creative output that would otherwise be impossible with generative AI.",
          "",
          "Finding a seed is straightforward once you know the trick. React to any generated image with the envelope emoji, and Midjourney's bot will send you a direct message containing the seed number used for that generation. Keep a record of seeds from images you love, as these become your recipe for recreating or iterating on successful results.",
          "",
          "Creating a consistent series becomes possible when you lock in a seed while varying other elements of your prompt. Use the same seed number but change one word, adjust a detail, or modify the style, and you'll get variations that maintain the same fundamental composition and characteristics while exploring different directions. This technique is invaluable for creating character reference sheets, environment variations, or any project requiring visual consistency across multiple images.",
          "",
          "Precise iteration is where seeds truly shine. When you have an image that's almost perfect but needs small adjustments, keeping the same seed while making minor prompt changes produces controlled iterations rather than entirely new interpretations. This surgical approach to refinement is impossible without seeds, as each generation would otherwise start from a completely random state. By controlling the seed, you control the baseline from which variations emerge.",
        ],
      },
    },
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Negative Prompting (--no)",
        paragraphs: [
          "Sometimes you want to tell Midjourney what NOT to include. The --no parameter lets you exclude specific elements from your images.",
          "",
          "It's like saying 'give me a beach scene, but without any people' or 'create a logo, but no text'.",
        ],
      },
    },
    {
      id: "section-9",
      type: "highlightCard",
      content: {
        heading: "Negative Prompt Syntax",
        insights: [
          "Add --no [element] to your prompt",
          "Example: a peaceful garden --no people",
          "Example: product photography --no text, logos",
        ],
      },
    },
    {
      id: "section-10",
      type: "text",
      content: {
        title: "Common Negative Prompt Uses",
        paragraphs: [
          "Negative prompting becomes most powerful when you understand the common scenarios where specific exclusions dramatically improve your results. These patterns emerge from the way Midjourney's training data creates associations between subjects and elements that frequently appear together.",
          "",
          "One of the most frequently used negative prompts is --no people, essential for creating pristine landscapes, architectural photography, and empty scenes. Without this exclusion, Midjourney often populates scenes with figures because its training images of interesting locations frequently include people. When you want a deserted beach, an empty street, or a building without occupants, negative prompting removes these default additions.",
          "",
          "Text generation remains one of Midjourney's weaker areas, and the AI sometimes adds random letters, signs, or labels that distract from otherwise strong images. Using --no text helps eliminate these unwanted textual elements, particularly useful for product photography, abstract art, or any image where words would feel out of place. Similarly, --no watermark, signature removes the pseudo-artistic watermarks and signatures that Midjourney sometimes adds based on its training on watermarked stock photography.",
          "",
          "Style-related negative prompts help steer results toward photorealism. When you want realistic images but Midjourney keeps producing stylized or cartoonish results, --no cartoon, anime shifts the output toward photographic rendering. This is particularly useful for product visualizations and corporate imagery where artistic interpretation undermines credibility.",
          "",
          "Sometimes specific elements keep appearing due to strong associations in the training data. If trees keep appearing in your cityscapes, --no trees removes them. If background figures have anatomical issues with hands or faces that distract from your main subject, --no hands, faces or positioning problematic elements in the background can help. The key insight is that negative prompting works best for optional, associated elements rather than core features of your subject.",
        ],
      },
    },
    {
      id: "section-11",
      type: "text",
      content: {
        title: "When Negative Prompting Doesn't Work",
        paragraphs: [
          "Negative prompting isn't perfect. Sometimes elements still appear, especially if they're strongly associated with your subject.",
          "",
          "**Example**: 'A dog --no fur' won't work well because dogs are inherently furry. The AI struggles with contradictions.",
          "",
          "**Solution**: Rephrase your prompt to focus on what you DO want, rather than what you don't want. Negative prompting works best for removing optional elements, not core features.",
        ],
      },
    },
    {
      id: "section-12",
      type: "quickPrompt",
      content: {
        heading: "Try Chaos and Negative Prompting",
        description:
          "Generate with high chaos to explore variations, and use --no to exclude unwanted elements:",
        promptText: "a minimalist desk setup --c 75 --no clutter, cables --ar 16:9",
        placeholders: ["75", "clutter, cables"],
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "midjourney",
        action: "Use Midjourney in Discord",
        task: "Control variation, reproducibility, and exclusions",
        feature: "--c (chaos), --seed, and --no (negative prompt)",
        tip: "Use --c 50+ for exploration, --seed for reproducibility, and --no to exclude unwanted elements",
      },
    },
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Master Chaos and Negative Prompting",
        purpose:
          "Practice using chaos for variety and negative prompting to exclude unwanted elements.",
        instructions: [
          "Generate a scene with high chaos (--c 80) to see varied interpretations",
          "Take a subject that often includes unwanted elements (like 'a clean desk')",
          "Use negative prompting to exclude common clutter (--no clutter, cables, papers)",
          "Compare results with and without the negative prompt",
        ],
        deliverable: "Images demonstrating chaos variation and successful negative prompting",
        estimatedTime: "10 minutes",
        starterPrompt:
          "/imagine prompt: a minimalist modern desk setup, clean aesthetic, single laptop, plant --c 75 --no clutter, cables, papers, coffee cups --ar 16:9 --v 6",
        successCriteria: [
          "You generated an image with high chaos (--c 50+) and noted the variety",
          "You successfully used --no to exclude unwanted elements",
          "Your negative prompt actually reduced the unwanted elements",
          "You saved a note about when chaos and negative prompting are useful",
        ],
      },
    },
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Advanced Parameters Mastered",
        description:
          "You now have control over variation (chaos), reproducibility (seeds), and exclusions (negative prompting). These three parameters give you precision control over your creative output.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
