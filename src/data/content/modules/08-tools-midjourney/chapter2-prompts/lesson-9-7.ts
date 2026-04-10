/**
 * Lesson 9.7: Descriptive Language & Style Vocabulary
 *
 * CHAPTER: 2 - Prompt Engineering
 * LESSON: 2 of 3 - Building Your Vocabulary
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Expand learners' prompt vocabulary with descriptive language and styles
 *
 * KEY RESPONSIBILITIES:
 * - Show why specific descriptions beat generic terms
 * - Provide vocabulary for colors, textures, emotions
 * - Cover art mediums and photography styles
 * - Show before/after prompt comparisons
 */

import type { Lesson } from "@/types/content";

export const lesson_9_7: Lesson = {
  id: "lesson-9-7",
  chapterId: "ch9-2-prompts",
  moduleId: "08-tools-midjourney",
  title: "Descriptive Language & Style Vocabulary",
  description:
    "Expand your creative vocabulary with words that transform vague ideas into vivid images",
  order: 7,
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
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-7-cover.webp",
        imageAlt: "Creative vocabulary and descriptive language for prompt engineering",
        title: "Descriptive Language & Style Vocabulary",
        subtitle:
          "Expand your creative vocabulary with words that transform vague ideas into vivid images",
      },
    },
    // ===========================================================================
    // SECTION 1: Why Specificity Wins
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Why 'Golden Retriever Puppy' Beats 'Dog'",
        paragraphs: [
          "Generic words produce generic results. When you say 'dog', Midjourney could generate anything—a Chihuahua, a Great Dane, a cartoon dog, a realistic dog, a dog in space...",
          "",
          "Specific language narrows the possibilities toward your vision:",
          "",
          "- 'Dog' → Any canine in any style",
          "- 'Golden retriever' → Specific breed",
          "- 'Golden retriever puppy' → Specific breed AND age",
          "- 'Fluffy golden retriever puppy with a red bow' → Almost everything defined",
          "",
          "The more specific you are, the closer the result matches your mental image.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Before/After Comparisons
    // ===========================================================================
    {
      id: "section-2",
      type: "quickPrompt",
      content: {
        heading: "Before: Vague Prompt",
        description: "This prompt gives too much freedom to the AI:",
        promptText: "A person in a room --v 6",
      },
    },
    {
      id: "section-2b",
      type: "quickPrompt",
      content: {
        heading: "After: Specific Prompt",
        description: "This prompt paints a complete picture:",
        promptText:
          "A young woman with curly auburn hair, wearing a cream knit sweater, sitting cross-legged on a window seat in a sunlit Scandinavian-style living room, surrounded by books and plants, reading a hardcover novel, warm afternoon light, candid lifestyle photography --v 6",
      },
    },
    // ===========================================================================
    // SECTION 3: Adjectives That Matter - Colors
    // ===========================================================================
    {
      id: "section-3",
      type: "text",
      content: {
        title: "Colors Beyond Basic Names",
        paragraphs: [
          "Moving beyond basic color names like 'red', 'blue', and 'green' is one of the fastest ways to elevate your prompts from generic to evocative. Specific color words carry emotional weight and visual associations that basic terms lack, helping Midjourney understand not just what color you want, but the mood and atmosphere that color should convey.",
          "",
          "The red family offers rich possibilities beyond the basic term. Crimson suggests depth and intensity, ruby evokes precious gems and luxury, scarlet carries dramatic flair, cherry feels fresh and bright, burgundy implies sophistication and richness, vermilion brings artistic energy, rose softens the tone toward pink, and coral adds warmth and approachability. Each of these words paints a different picture in the AI's interpretation.",
          "",
          "Blue similarly branches into numerous distinct directions. Navy suggests professionalism and depth, cobalt brings artistic vibrancy, sapphire evokes jewelry and elegance, azure captures the bright sky, teal bridges blue and green with modern appeal, indigo brings mystical depth, cerulean offers a lighter artistic quality, and midnight suggests mystery and darkness. The green family spans from emerald's jewel tones through forest's natural depth to sage's muted sophistication and mint's fresh lightness.",
          "",
          "Beyond individual color families, understanding warm tones versus cool tones gives you powerful control over mood. Warm tones like amber, golden, honey, copper, rust, peach, and terracotta create inviting, energetic, or nostalgic atmospheres. Cool tones such as silver, pewter, slate, ice blue, lavender, and periwinkle suggest calm, sophistication, or distance. Even neutrals deserve specificity: ivory, cream, charcoal, slate, taupe, espresso, and champagne each create distinct visual effects that 'gray' or 'brown' could never achieve.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Adjectives That Matter - Textures
    // ===========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Textures That Add Depth",
        paragraphs: [
          "Texture words transform flat images into tactile experiences that viewers can almost feel. When you describe texture, you're giving Midjourney crucial information about surface quality, material properties, and the physical character of objects in your scene. This vocabulary is especially powerful because texture affects not just how things look, but the emotional response they evoke.",
          "",
          "Soft textures create inviting, comfortable atmospheres. Words like plush suggest luxury and comfort, velvety evokes smooth richness, fuzzy brings warmth and approachability, downy suggests lightness and gentleness, silky implies elegance and flow, fluffy adds playfulness and softness, and cushioned creates a sense of comfort and support. These words are particularly effective for fabrics, furniture, clouds, fur, and any element where softness is central to the image's appeal.",
          "",
          "Rough textures bring character, history, and authenticity. Weathered suggests age and exposure to elements, rustic evokes handmade or natural simplicity, distressed implies worn charm, gritty adds urban or industrial edge, textured adds visual interest through surface variation, and organic suggests natural, irregular patterns. These terms work beautifully for architecture, landscapes, vintage objects, and scenes where authenticity matters.",
          "",
          "Smooth and luminous textures create entirely different effects. Polished, glassy, sleek, glossy, satin, and lacquered surfaces suggest modernity, precision, and sometimes luxury or artificiality. Natural textures like grainy, wooden, stone, marble, leather, and woven ground images in reality and suggest craftsmanship. Finally, luminous textures including iridescent, pearlescent, metallic, shimmering, and glowing add magical or ethereal qualities that can transform ordinary subjects into extraordinary ones.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Adjectives That Matter - Emotions
    // ===========================================================================
    {
      id: "section-5",
      type: "highlightCard",
      content: {
        heading: "Emotional Words That Set the Mood",
        insights: [
          "Peaceful: serene, tranquil, calm, soothing, meditative, quiet",
          "Energetic: dynamic, vibrant, lively, spirited, bold, dramatic",
          "Mysterious: enigmatic, ethereal, dreamy, haunting, mystical",
          "Warm: cozy, inviting, nostalgic, romantic, intimate, gentle",
          "Cold: stark, stark, clinical, isolated, melancholic, distant",
        ],
      },
    },
    // ===========================================================================
    // SECTION 6: Art Mediums
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Art Medium Vocabulary",
        paragraphs: [
          "Specifying the artistic medium in your prompt is one of the most powerful ways to transform your results. The same subject described as an oil painting versus a digital illustration versus a pencil sketch will produce radically different images, each with its own distinct character and emotional impact. Understanding medium vocabulary gives you precise control over the artistic style of your generations.",
          "",
          "Traditional painting media each carry distinct visual characteristics. Oil painting suggests rich, blended colors with visible brushwork and classical artistic weight. Watercolor implies transparency, soft edges, and delicate color washes. Acrylic offers bold, vibrant colors with sharp definition. Gouache provides opaque, flat color areas with an illustrative quality. Tempera suggests historical or religious art traditions, while fresco evokes ancient wall paintings with their characteristic texture and softness.",
          "",
          "Drawing media create entirely different effects focused on line, tone, and direct mark-making. Pencil sketch suggests preliminary, exploratory work with graphite textures. Charcoal brings dramatic darks and expressive smudging. Ink drawing implies precision and bold contrast. Pastel offers soft, blendable color with a powdery appearance. Colored pencil creates delicate, built-up color with visible strokes. Each of these media communicates a different artistic intention and creates a different viewing experience.",
          "",
          "Digital art terminology opens up contemporary possibilities. Digital illustration suggests clean, polished work often seen in editorial or commercial contexts. Concept art implies production design for films or games, often atmospheric and suggestive. Matte painting creates photorealistic environmental extensions. Vector art delivers crisp, scalable graphics with flat colors. Pixel art evokes retro gaming aesthetics with its characteristic blocky appearance. Print media like woodblock prints, lithographs, screen prints, and etchings offer historical artistic traditions with their distinctive visual qualities. Mixed media and collage suggest layered, experimental approaches combining multiple techniques.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Photography Styles
    // ===========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Photography Style Vocabulary",
        paragraphs: [
          "Photography terminology is incredibly effective for creating realistic, professional-looking images because Midjourney has been trained extensively on photographs and understands the visual characteristics associated with different photographic approaches. Using specific photography terms tells the AI not just what to depict, but how a professional photographer would capture it.",
          "",
          "Framing terms describe how the subject is composed within the image. Portrait framing focuses tightly on a person, usually from the shoulders up, emphasizing facial expression and character. Landscape framing captures wide horizontal vistas, ideal for environments and scenes. Macro photography creates extreme close-ups that reveal tiny details invisible to normal vision. Close-up framing brings the viewer near the subject without macro's extreme magnification. Wide-angle captures expansive views with characteristic perspective distortion at the edges. Aerial or drone photography provides bird's-eye views that transform familiar subjects into abstract patterns.",
          "",
          "Genre terms communicate professional context and styling. Editorial suggests magazine-quality imagery with careful composition and lighting. Fashion implies stylized, dramatic presentation of clothing and models. Product photography indicates clean, professional presentation for commercial purposes. Architectural photography emphasizes lines, geometry, and spatial relationships in buildings. Street photography captures candid moments in public spaces with a documentary feel.",
          "",
          "Approach terms describe the relationship between photographer and subject. Candid captures unposed, natural moments. Staged or posed indicates deliberate arrangement. Documentary and photojournalistic approaches suggest storytelling through images with an objective, observational quality. Look-related terms like film photography, Polaroid, vintage, noir, high-key (bright, minimal shadows), and low-key (dramatic shadows) each create distinct visual moods. Quality indicators like professional photography, DSLR, 35mm, and medium format communicate technical excellence and help avoid amateur-looking results.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Design Styles
    // ===========================================================================
    {
      id: "section-8",
      type: "highlightCard",
      content: {
        heading: "Design Style Vocabulary",
        insights: [
          "Eras: Art Deco, Victorian, 1950s retro, 1980s, 1990s, mid-century modern",
          "Aesthetics: minimalist, maximalist, industrial, bohemian, Scandinavian",
          "Digital: cyberpunk, vaporwave, brutalist, flat design, skeuomorphic",
          "Cultural: Japanese, Moroccan, Scandinavian, Mediterranean, tropical",
          "Moods: cinematic, editorial, luxury, rustic, futuristic, vintage",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: Common Beginner Mistakes
    // ===========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Common Beginner Mistakes (And Fixes)",
        paragraphs: [
          "As you expand your vocabulary, it's equally important to understand which words to avoid. Many terms that feel natural to humans are essentially meaningless to AI, and using them can actually hurt your results rather than help them.",
          "",
          "The word 'beautiful' is perhaps the most common offender. While it communicates something meaningful to humans, it tells Midjourney nothing specific about what you want to see. Beauty is subjective and contextual. Instead of relying on this vague term, describe the specific attributes that make something beautiful in your vision: 'symmetrical features,' 'radiant smile,' 'elegant posture,' or 'graceful movement.' These concrete descriptions give Midjourney actionable information.",
          "",
          "Similarly, words like 'cool' or 'awesome' carry emotional weight for humans but are meaningless to the AI. What makes something cool? Is it the futuristic chrome details, the neon-lit atmosphere, the edgy street style, or something else entirely? Describe those specific qualities instead of relying on subjective judgments that the AI cannot interpret.",
          "",
          "The term 'realistic' often backfires by producing uncanny results that fall into the 'uncanny valley' where images look almost but not quite real. This happens because 'realistic' is still somewhat vague. Better alternatives include 'photorealistic,' 'photography,' or specifying a camera type like 'shot on Canon EOS' or '35mm film.' These terms point toward specific visual qualities that Midjourney understands.",
          "",
          "Never use the word 'good' in a prompt. It's the ultimate empty descriptor. What does 'good' mean in your context? Detailed? Professional? High resolution? Artfully composed? Replace this non-word with specific descriptions of the quality you're seeking.",
          "",
          "Finally, watch for contradictions in your prompts. Terms like 'bright darkness' or 'colorless rainbow' create logical impossibilities that confuse the AI. While Midjourney will still generate something, the results will be unpredictable and rarely what you intended. Choose clear, consistent directions for each aspect of your prompt.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: Putting It Together - Examples
    // ===========================================================================
    {
      id: "section-10",
      type: "quickPrompt",
      content: {
        heading: "Example: Portrait Photography Style",
        description: "Specific vocabulary creates a clear vision:",
        promptText:
          "Portrait of an elderly fisherman with weathered skin and a salt-and-pepper beard, wearing a faded yellow raincoat, standing on a weathered wooden dock at dawn, soft golden hour light, mist rolling over the water, editorial photography, National Geographic style, 85mm lens --v 6",
      },
    },
    {
      id: "section-10b",
      type: "quickPrompt",
      content: {
        heading: "Example: Digital Art Style",
        description: "Different vocabulary, different result:",
        promptText:
          "Mystical forest spirit with emerald skin and hair made of flowering vines, bioluminescent mushrooms growing on antler-like horns, standing in an ancient moss-covered grove, ethereal moonlight filtering through canopy, digital fantasy illustration, vibrant colors, intricate details, ArtStation trending --v 6",
      },
    },
    {
      id: "section-10c",
      type: "quickPrompt",
      content: {
        heading: "Example: Vintage Photography Style",
        description: "Era-specific vocabulary:",
        promptText:
          "1950s American diner interior, checkered floor, red vinyl booths, chrome accents, vintage Coca-Cola sign, warm incandescent lighting, film photography, Kodachrome color palette, nostalgic atmosphere --v 6",
      },
    },
    // ===========================================================================
    // SECTION 11: Building Your Vocabulary List
    // ===========================================================================
    {
      id: "section-11",
      type: "text",
      content: {
        title: "Building Your Personal Vocabulary",
        paragraphs: [
          "Start collecting words that work for your style:",
          "",
          "1. **Save prompts you love**: When you see an image you like, note the words used",
          "",
          "2. **Keep a word bank**: Create a document with categorized vocabulary (colors, styles, moods)",
          "",
          "3. **Study other artists**: Browse the #show-and-tell channel and deconstruct prompts",
          "",
          "4. **Experiment**: Try new words and see how they change results",
          "",
          "Your vocabulary will grow naturally as you create more images.",
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
        task: "Transform weak prompts into vivid, detailed descriptions",
        feature: "Descriptive vocabulary (colors, textures, emotions, styles)",
        tip: 'Specific words like "crimson" instead of "red" give you more control over results',
      },
    },
    // ===========================================================================
    // SECTION 12: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Transform a Weak Prompt",
        purpose:
          "Apply your new vocabulary to transform a basic prompt into a vivid, detailed description.",
        instructions: [
          "Start with this weak prompt: 'A person reading'",
          "Add specific subject details (age, appearance, clothing)",
          "Add environment details (location, furniture, atmosphere)",
          "Add style and medium (photography style, art style)",
          "Add lighting and quality terms",
          "Generate both the weak and strong versions to compare",
        ],
        deliverable: "Two generated images showing the difference between a weak and strong prompt",
        estimatedTime: "10 minutes",
        starterPrompt:
          "/imagine prompt: A young woman with curly auburn hair, wearing a cream knit sweater, sitting cross-legged on a window seat in a sunlit Scandinavian-style living room, surrounded by books and plants, reading a hardcover novel, warm afternoon light, candid lifestyle photography, shallow depth of field --v 6",
        successCriteria: [
          "You generated the basic 'A person reading' prompt first",
          "Your enhanced prompt uses at least 5 specific vocabulary words from this lesson",
          "Your enhanced prompt is at least 40 words long",
          "The difference between the two images is clearly visible",
        ],
      },
    },
    // ===========================================================================
    // SECTION 13: Completion
    // ===========================================================================
    {
      id: "section-13",
      type: "completion",
      content: {
        title: "Vocabulary Expanded",
        description:
          "You now have a rich vocabulary of colors, textures, emotions, art styles, and photography terms. In the final lesson of this chapter, you'll practice transforming weak prompts into powerful ones and build your personal prompt library.",
        xpReward: 100,
        buttonText: "Start Practice Lab",
      },
    },
  ],
};
