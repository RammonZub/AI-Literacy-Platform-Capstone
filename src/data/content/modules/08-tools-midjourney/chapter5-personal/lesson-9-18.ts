/**
 * Lesson 9.18: Hobby Enhancement & Legacy Projects
 *
 * CHAPTER: 5 - Personal Creative Projects
 * LESSON: 2 of 2 - Hobby Enhancement & Legacy Projects
 *
 * DURATION: 15 minutes (creative personal expression)
 * XP REWARD: 100 XP
 *
 * PURPOSE: Teach how to enhance hobbies and create legacy projects
 * using Midjourney for creative personal fulfillment.
 *
 * KEY RESPONSIBILITIES:
 * - Show hobby enhancement workflows
 * - Explain legacy project creation
 * - Provide prompt templates for creative expression
 */

import type { Lesson } from "@/types/content";

export const lesson_9_18: Lesson = {
  id: "lesson-9-18",
  chapterId: "ch9-5-personal",
  moduleId: "08-tools-midjourney",
  title: "Hobby Enhancement & Legacy Projects",
  description:
    "Elevate your hobbies with AI-generated visuals and create lasting legacy projects that preserve memories for future generations",
  order: 18,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-18-cover.webp",
        imageAlt: "Creative hobby workspace with diverse projects",
        title: "Hobby Enhancement & Legacy Projects",
        subtitle:
          "Elevate your hobbies with AI-generated visuals and create lasting legacy projects that preserve memories for future generations",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Gaming & Fantasy Hobbies",
        paragraphs: [
          "Tabletop RPGs and fantasy hobbies come alive with custom character portraits, scene illustrations, and campaign visuals. Your D&D characters deserve faces, your worlds deserve landscapes.",
          "Players connect more deeply with characters they can see. GMs create more immersive experiences with visual aids.",
        ],
      },
    },
    {
      id: "section-2",
      type: "text",
      content: {
        title: "Gaming Visual Projects",
        paragraphs: [
          "Elevate your gaming experience with custom imagery that brings your campaigns to life. Character portraits give each player detailed fantasy or sci-fi art that makes their character feel real and invested in the story. Scene illustrations capture key campaign moments rendered dramatically, creating memorable snapshots of epic battles, tense negotiations, or triumphant discoveries.",
          "NPC portraits transform memorable non-player characters from descriptions into visual personalities that players will remember long after the session ends. Map decorations add visual elements to both hand-drawn and digital maps, making your world feel more lived-in and atmospheric. Item illustrations give legendary weapons, magical artifacts, and treasures the visual weight they deserve, making rewards feel truly special when revealed.",
        ],
      },
    },
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "Character Portrait Formula",
        insights: [
          "[Race/species] + [Class/role] + [Key features] + [Equipment] + [Setting] + [Art style]",
          "Example: 'Elven ranger with silver hair, leather armor, longbow, forest background, fantasy oil painting style'",
          "Use --cref to maintain character consistency across multiple images",
        ],
      },
    },
    {
      id: "section-4",
      type: "textWithImage",
      content: {
        title: "Garden & Nature Planning",
        paragraphs: [
          "Visualize your dream garden before planting a single seed. Describe your space, style preferences, and climate considerations—Midjourney generates design inspiration you can show to landscapers or use yourself.",
          "Create seasonal mood boards for garden planning throughout the year.",
        ],
        imageUrl: "/images/courses/modules/08-tools-midjourney/lesson-9-18-inline-1.webp",
        imageAlt: "Beautiful garden landscape with diverse plants",
      },
    },
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Hobby Enhancement Ideas",
        paragraphs: [
          "Transform your favorite activities with visual inspiration that deepens your engagement and creates lasting records. Cooking journals gain beauty with illustrations of recipes, ingredient studies, and dish presentations that make your culinary journey into an art object. Travel memories become more vivid when you create illustrated scenes from your adventures, turning travel journal entries into visual stories you'll revisit for years.",
          "Music and album art projects let you design custom visuals for playlists, band projects, or simply as musical inspiration that captures the feeling of songs you love. Sports visualization helps you imagine athletic scenes, team spirit art, and victory moments that celebrate your connection to the games you follow. Collecting displays benefit from themed backgrounds that showcase your treasures in context, whether that's vintage toys displayed against period-appropriate settings or minerals arranged with geological landscapes.",
        ],
      },
    },
    {
      id: "section-6",
      type: "quickPrompt",
      content: {
        heading: "Practice: Hobby Scene Creation",
        description: "Create an illustration for your favorite hobby.",
        promptText:
          "[Hobby activity: e.g., pottery making in a sunlit studio], [Atmosphere: e.g., peaceful and creative], [Art style: e.g., warm watercolor illustration], [Details: e.g., clay on hands, works in progress on shelves] --ar 16:9 --v 6.1",
      },
    },
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Legacy Projects: Preserving Stories",
        paragraphs: [
          "Some projects are bigger than hobbies—they're about preserving family history, honoring ancestors, and creating heirlooms. Midjourney helps visualize stories that exist only in memory or oral tradition.",
          "These aren't just images. They're bridges between generations.",
        ],
      },
    },
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Legacy Project Types",
        paragraphs: [
          "Create lasting tributes to your family's story through projects that preserve heritage for future generations. Ancestral scenes illustrate stories from your family's country of origin, giving visual form to oral histories that might otherwise fade with time. Historical recreations visualize events from family history based on the stories elders have shared, creating images of moments that existed before photography was common.",
          "Family tree art transforms genealogical records into illustrated family trees with period-appropriate portraits, making ancestry visually engaging rather than just names and dates. Memory books gain richness when you add visual accompaniments to family photos and stories, filling gaps where images don't exist with period-appropriate illustrations. Commemorative pieces honor special family members with meaningful art that celebrates their lives and keeps their memory vivid for younger generations who may never have met them.",
        ],
      },
    },
    {
      id: "section-9",
      type: "highlightCard",
      content: {
        heading: "Legacy Prompt Tips",
        insights: [
          "Research the era: Use period-appropriate clothing, settings, and styles",
          "Include cultural details: Architecture, landscapes, and customs of the region",
          "Be sensitive: Legacy projects carry emotional weight—iterate thoughtfully",
          "Document the story: Add context when sharing so meaning is preserved",
        ],
      },
    },
    {
      id: "section-10",
      type: "text",
      content: {
        title: "Fan Art & Personal Expression",
        paragraphs: [
          "Express your fandom through original AI art that celebrates the stories and worlds you love. Fan fiction illustrations bring scenes from your original stories to visual life within existing fictional universes, helping you share your creative vision with fellow fans. Original characters let you place your unique creations into beloved fictional worlds, designing heroes, villains, and companions that feel authentic to those settings.",
          "Crossover art enables imaginative combinations of different properties that would never officially meet, letting you explore what happens when your favorite universes collide. Style experiments reimagine familiar characters in different art styles, seeing how heroes might look as Renaissance portraits, anime characters, or Art Deco posters. Personal canon visualization lets you capture your head-canons and interpretations, making your unique perspective on beloved stories into shareable art.",
        ],
      },
    },
    {
      id: "section-11",
      type: "quickPrompt",
      content: {
        heading: "Practice: Legacy Scene Creation",
        description: "Illustrate a story from your family history or cultural heritage.",
        promptText:
          "[Historical period and location: e.g., 1920s Irish countryside], [Scene description: e.g., family farmhouse with stone walls], [Cultural details: e.g., thatched roof, green fields, traditional dress], [Art style: e.g., impressionist oil painting], nostalgic and warm atmosphere --ar 3:2 --v 6.1",
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "midjourney",
        action: "Use Midjourney in Discord",
        task: "Create a hobby or legacy illustration",
        feature: "Period-appropriate styling and cultural details",
        tip: "Research the era first and include specific cultural elements like clothing, architecture, and landscapes for authentic legacy projects",
      },
    },
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Create a Hobby or Legacy Illustration",
        purpose:
          "Create an image that enhances your favorite hobby or preserves a meaningful story.",
        instructions: [
          "Choose: enhance a hobby OR illustrate a family/cultural story",
          "For hobbies: describe the activity, atmosphere, and style that captures its essence",
          "For legacy: include period-appropriate details and cultural elements",
          "Use an art style that matches the emotional tone",
          "Generate and save your meaningful creation",
        ],
        deliverable: "An illustration for your hobby or a legacy scene from your heritage",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "/imagine prompt: pottery making in a sunlit studio, hands shaping clay on wheel, works in progress on wooden shelves, peaceful creative atmosphere, warm watercolor illustration, artisan craftsmanship --ar 16:9 --s 200 --v 6",
        successCriteria: [
          "Your image reflects a real hobby you enjoy OR a family story",
          "The art style matches the emotional tone of the subject",
          "Period or cultural details are accurate (for legacy projects)",
          "The image would be meaningful to you or your family",
        ],
      },
    },
    {
      id: "section-12",
      type: "completion",
      content: {
        title: "Hobby & Legacy Skills Mastered",
        description:
          "You now have the tools to enhance your hobbies with stunning visuals and create meaningful legacy projects that preserve your family's stories for generations. These are the projects that matter most.",
        xpReward: 100,
        buttonText: "Complete Hobby & Legacy Skills",
      },
    },
  ],
};
