/**
 * Lesson 9.10: Quality & Stylization Settings
 *
 * CHAPTER: 3 - Controlling Your Results
 * LESSON: 10 of 16 - Quality & Stylization
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * LEARNING OBJECTIVES:
 * - Understand the --q (quality) parameter
 * - Master --s (stylization) for creativity control
 * - Learn when to adjust each setting
 */

import type { Lesson } from "@/types/content";

export const lesson_9_10: Lesson = {
  id: "lesson-9-10",
  chapterId: "ch9-3-parameters",
  moduleId: "08-tools-midjourney",
  title: "Quality & Stylization Settings",
  description: "Fine-tune detail level and creative interpretation with --q and --s parameters",
  order: 10,
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
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-10-cover.webp",
        imageAlt: "Camera settings and adjustment controls",
        title: "Quality & Stylization Settings",
        subtitle: "Fine-tune detail level and creative interpretation with --q and --s parameters",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Quality Parameter (--q)",
        paragraphs: [
          "Quality controls how much time and detail Midjourney puts into rendering your image.",
          "",
          "Think of it like render quality in video games or video exports. Higher quality = more detail, but longer processing time and more GPU minutes.",
        ],
      },
    },
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "Quality Settings (--q)",
        insights: [
          "--q 0.25 — Fast drafts, quick tests (uses less GPU time)",
          "--q 1 — Default quality (balanced)",
          "--q 2 — High quality final renders (uses more GPU time)",
        ],
      },
    },
    {
      id: "section-3",
      type: "text",
      content: {
        title: "When to Use Each Quality Level",
        paragraphs: [
          "Choosing the right quality level depends on your current stage in the creative process and how you plan to use the final image. Understanding when to use each setting helps you balance speed against quality appropriately, conserving your GPU allowance when high quality isn't necessary while ensuring maximum detail when it matters most.",
          "",
          "The fast setting at --q 0.25 is ideal for the early exploration phase of any project. When you're testing prompts to see if your concept works, exploring different ideas before committing to one direction, or iterating quickly through many variations, fast quality lets you generate more images within your GPU allowance. The results are noticeably less detailed, but they're sufficient for evaluating compositions, concepts, and overall direction. Think of this as your sketching mode.",
          "",
          "Default quality at --q 1 handles most everyday needs effectively. This balanced setting provides good detail without excessive GPU consumption, making it appropriate for the majority of your generations. When you're creating images for personal use, social media sharing, or general exploration, default quality offers the best trade-off between output quality and resource consumption.",
          "",
          "High quality at --q 2 should be reserved for final outputs where detail matters significantly. When you're creating images for professional presentations, print materials, client deliverables, or any situation where the image will be viewed closely or at large sizes, the extra detail from high quality becomes worthwhile. Be selective about using this setting, as it consumes more GPU time, but don't hesitate to use it when quality genuinely matters more than speed.",
        ],
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "The Stylization Parameter (--s)",
        paragraphs: [
          "Stylization controls how much Midjourney applies its own artistic interpretation to your prompt.",
          "",
          "**Low stylization**: Midjourney follows your prompt literally. Good for when you need specific results.",
          "",
          "**High stylization**: Midjourney adds more artistic flair. Good for when you want beautiful surprises.",
        ],
      },
    },
    {
      id: "section-5",
      type: "highlightCard",
      content: {
        heading: "Stylization Settings (--s)",
        insights: [
          "--s 0-100 — Low: 'Do exactly what I say'",
          "--s 100 (default) — Balanced creativity",
          "--s 500-1000 — High: 'Surprise me with something beautiful'",
        ],
      },
    },
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Low Stylization (0-100)",
        paragraphs: [
          "Low stylization settings, typically in the range of 0 to 100, instruct Midjourney to follow your prompt as literally as possible. When you choose these settings, you're telling the AI that precision and accuracy matter more than artistic interpretation or creative flourishes.",
          "",
          "This approach is ideal for product mockups where accuracy is paramount. If you're creating visualizations for a client presentation or an e-commerce listing, you want the product to appear exactly as described, not enhanced with artistic touches that might misrepresent what you're showcasing. The same principle applies to architectural visualizations with specific requirements, where every detail must match the intended design.",
          "",
          "Diagrams, charts, and instructional images also benefit from low stylization. These functional images serve a communication purpose where clarity trumps aesthetics. Adding artistic interpretation would only muddy the message you're trying to convey.",
          "",
          "Consider using low stylization whenever your prompt is highly detailed and specific. If you've spent time crafting a precise description of exactly what you want, you don't want Midjourney adding its own creative spin. Similarly, photorealistic work often suffers from high stylization, where artistic flourishes can push images into uncanny territory rather than enhancing their realism.",
          "",
          "The key insight is that low stylization gives you control. You're the director, and Midjourney follows your instructions closely without improvising or adding its own artistic vision.",
        ],
      },
    },
    {
      id: "section-7",
      type: "text",
      content: {
        title: "High Stylization (500-1000)",
        paragraphs: [
          "High stylization settings, typically between 500 and 1000, give Midjourney permission to add its own artistic magic to your prompts. At these levels, the AI takes creative liberties, applying its training in aesthetics and composition to enhance your basic instructions with unexpected beauty and artistic flair.",
          "",
          "This creative freedom makes high stylization perfect for concept art and mood boards. When you're exploring visual directions rather than executing a specific vision, you want the AI to surprise you with ideas you might not have considered. High stylization delivers those serendipitous discoveries that can spark entirely new creative directions.",
          "",
          "Abstract or artistic images thrive with high stylization because the goal is often expression and emotion rather than literal representation. The AI's artistic interpretations can add depth, mood, and visual interest that a strictly literal approach would miss entirely.",
          "",
          "Consider using high stylization when your prompt is simple and you want interpretation rather than precision. A brief description like 'a mystical forest' could go many directions. High stylization lets Midjourney explore those possibilities and present you with its most beautiful interpretations.",
          "",
          "Album covers, posters, and creative work often benefit from high stylization because these formats reward visual impact and artistic expression. You're not documenting reality; you're creating something that captures attention and evokes emotion. High stylization helps achieve those goals by pushing beyond the mundane into the memorable.",
          "",
          "The fundamental trade-off is control versus creativity. High stylization sacrifices precise control for the possibility of unexpected beauty.",
        ],
      },
    },
    {
      id: "section-8",
      type: "textWithImage",
      content: {
        title: "Finding Your Sweet Spot",
        paragraphs: [
          "Every user has different preferences. Some love high stylization for the artistic results. Others prefer low stylization for control.",
          "",
          "Experiment with the same prompt at different --s values to find what works for your style.",
        ],
        imageUrl: "/images/courses/modules/08-tools-midjourney/lesson-9-10-inline-1.webp",
        imageAlt: "Artist palette and creative tools",
      },
    },
    {
      id: "section-9",
      type: "highlightCard",
      content: {
        heading: "Quality vs Stylization",
        insights: [
          "--q affects DETAIL and rendering time",
          "--s affects CREATIVE INTERPRETATION",
          "They work independently of each other",
        ],
      },
    },
    {
      id: "section-10",
      type: "text",
      content: {
        title: "Decision Framework: Settings Combinations",
        paragraphs: [
          "Understanding how quality and stylization work together allows you to create settings combinations tailored to specific creative scenarios. Since these parameters work independently, you can mix and match them to achieve precisely the balance of speed, detail, control, and creativity that each project demands.",
          "",
          "For quick exploration and brainstorming sessions, combine --q 0.25 with --s 250. The fast quality lets you generate many images quickly to explore different directions, while moderate stylization adds enough creative interpretation to surface interesting possibilities you might not have considered. This combination maximizes discovery while minimizing GPU consumption, perfect for the early ideation phase when you're casting a wide net.",
          "",
          "Professional work typically demands different priorities. Use --q 2 with --s 50 when you need high detail and precise control over the output. The high quality ensures sharp, detailed results suitable for professional contexts, while low stylization keeps Midjourney focused on your specific instructions rather than adding artistic flourishes. This combination is ideal for product visualizations, architectural concepts, and any work where accuracy matters more than creative surprises.",
          "",
          "When seeking creative inspiration without time pressure, --q 1 with --s 750 offers an excellent balance. Default quality keeps generation times reasonable, while high stylization invites Midjourney to contribute its artistic vision to your concepts. This pairing excels at generating mood boards, concept art, and exploratory imagery where unexpected beauty is welcome.",
          "",
          "For final client deliverables, --q 2 with --s 100 provides maximum quality with moderate creative control. You get detailed, polished output while maintaining reasonable influence over the results. Product mockups often benefit from --q 2 paired with very low stylization around --s 25, ensuring the product appears exactly as described without artistic interpretation that might misrepresent what you're showcasing.",
        ],
      },
    },
    {
      id: "section-11",
      type: "quickPrompt",
      content: {
        heading: "Experiment with Stylization",
        description:
          "Try the same prompt with different stylization values to see the creative range:",
        promptText: "a mystical forest at twilight --s 750 --ar 16:9",
        placeholders: ["750", "50", "100", "1000"],
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "midjourney",
        action: "Use Midjourney in Discord",
        task: "Control image detail and artistic interpretation",
        feature: "--q (quality) and --s (stylization)",
        tip: "Use --q 2 --s 50 for professional work, --q 1 --s 750 for creative exploration",
      },
    },
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Experiment with Stylization",
        purpose:
          "Discover your preferred stylization level by testing the same prompt at different settings.",
        instructions: [
          "Use a simple, open-ended prompt that allows for creative interpretation",
          "Generate with --s 50 (low stylization - literal interpretation)",
          "Generate with --s 250 (medium stylization - balanced)",
          "Generate with --s 750 (high stylization - creative interpretation)",
          "Compare all three and note which style you prefer",
        ],
        deliverable: "Three images showing the same subject at different stylization levels",
        estimatedTime: "10 minutes",
        starterPrompt:
          "/imagine prompt: a mystical forest at twilight, ancient trees, fireflies, magical atmosphere --s 750 --ar 16:9 --v 6",
        successCriteria: [
          "You generated at least 3 images with different --s values (50, 250, 750)",
          "You can see clear differences in creative interpretation between them",
          "You identified your preferred stylization level",
          "You noted which level works best for what type of project",
        ],
      },
    },
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Quality & Stylization Mastered",
        description:
          "You now have fine control over rendering quality and creative interpretation. Use --q for detail level and --s for how much artistic freedom Midjourney takes with your prompts.",
        xpReward: 100,
        buttonText: "Complete Lesson",
      },
    },
  ],
};
