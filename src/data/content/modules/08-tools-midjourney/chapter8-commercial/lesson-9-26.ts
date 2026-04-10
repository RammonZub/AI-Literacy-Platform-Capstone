/**
 * Lesson 9.26: Print Preparation, Tools Integration & Your Library
 *
 * CHAPTER: 8 - Commercial Usage, Rights, and Next Steps
 * LESSON: 2 of 3 - Practical Application
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Prepare AI images for real-world output and integrate with common tools
 *
 * KEY RESPONSIBILITIES:
 * - Explain print preparation fundamentals
 * - Guide tool integration (Canva, Photoshop)
 * - Teach library organization strategies
 * - Provide quality control frameworks
 */

import type { Lesson } from "@/types/content";

export const lesson_9_26: Lesson = {
  id: "lesson-9-26",
  chapterId: "ch9-8-commercial",
  moduleId: "08-tools-midjourney",
  title: "Print Preparation, Tools Integration & Your Library",
  description: "Transform your AI creations into real-world products and organized assets",
  order: 26,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-26-cover.webp",
        imageAlt: "Print preparation and professional output concept",
        title: "Print Preparation, Tools Integration & Your Library",
        subtitle: "Transform AI creations into real-world products and organized assets",
      },
    },
    {
      id: "section-1",
      type: "text",
      content: {
        title: "Resolution and DPI Explained Simply",
        paragraphs: [
          "**DPI (Dots Per Inch)** measures print quality. Higher DPI = sharper prints. Here's what you need to know:",
          "**Web/Screen**: 72 DPI is fine (though most screens now are higher resolution).",
          "**Standard printing**: 150 DPI minimum for acceptable quality.",
          "**Professional printing**: 300 DPI is the standard for sharp, crisp output.",
          "**Large format (posters/banners)**: Can go lower (100-150 DPI) because people view from further away.",
          "Midjourney's 4x upscale typically produces images suitable for professional printing at smaller sizes.",
        ],
      },
    },
    {
      id: "section-2",
      type: "highlightCard",
      content: {
        heading: "Resolution Quick Reference",
        insights: [
          "Instagram post (1080×1080): 2x upscale sufficient",
          "A4 print at 300 DPI: Needs ~3500×2500 pixels minimum",
          "Poster (24×36 inches): 4x upscale + external upscaler often needed",
          "Business card: 2x upscale usually sufficient",
          "When in doubt, always use more resolution than you think you need",
        ],
      },
    },
    {
      id: "section-3",
      type: "text",
      content: {
        title: "File Formats for Different Uses",
        paragraphs: [
          "Choose the right format for your output to balance quality, compatibility, and file size appropriately. PNG format works best for images requiring transparency, digital use where quality matters, and archiving your best work, though it produces larger file sizes than compressed alternatives. JPG or JPEG format excels for photographs destined for web use where small file sizes matter more than perfect quality, but note it doesn't support transparency.",
          "WebP represents a modern format offering excellent compression with good quality retention, making it great for web applications, though you should verify compatibility with your target platforms. PDF serves best for print submissions because it preserves quality and can include multiple pages in a single document. TIFF remains the professional print standard when maximum quality trumps file size concerns, producing large files that maintain every detail.",
        ],
      },
    },
    {
      id: "section-4",
      type: "text",
      content: {
        title: "Color Considerations",
        paragraphs: [
          "Midjourney generates images in RGB (screen color). Print uses CMYK. This conversion can shift colors.",
          "**What might change**: Bright neons, intense cybers, some purples—these can look duller in print. Very saturated colors may not print as vibrantly.",
          "**How to prepare**: If color accuracy matters, convert to CMYK in Photoshop or similar tool and adjust. Most print services handle RGB-to-CMYK automatically, but results vary.",
          "**Pro tip**: Order a test print before committing to large runs. Colors on your monitor ≠ colors on paper.",
        ],
      },
    },
    {
      id: "section-5",
      type: "highlightCard",
      content: {
        heading: "Quality Control Checklist",
        insights: [
          "Before sending to print, check:",
          "No visible artifacts or weird distortions at 100% zoom",
          "Edges are clean (no jagged lines or unwanted halos)",
          "Colors are as expected (preview in CMYK if possible)",
          "Resolution matches or exceeds printer requirements",
          "Aspect ratio matches your intended output size",
        ],
      },
    },
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Working with Print Providers",
        paragraphs: [
          "Different print services have different requirements. Know what yours needs:",
          "**Local print shops**: Often provide guidance and can handle file preparation. Good for custom sizes.",
          "**Online services (Vistaprint, etc.)**: Have specific templates and requirements. Download their templates.",
          "**Print-on-demand (POD)**: Each platform has size requirements. Redbubble, Society6, Printful all differ.",
          "**Professional printers**: May request specific file formats and color profiles. Ask for their specs before preparing files.",
        ],
      },
    },
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Basic Canva Integration",
        paragraphs: [
          "Canva serves as an accessible tool for adding text and simple layouts to your AI images without requiring professional design software expertise. Start by uploading your upscaled Midjourney image to Canva's workspace. If you need transparency for overlaying your image on other backgrounds, use Canva's Background Remover feature available with a Pro subscription to isolate your subject.",
          "Add text overlays using your brand fonts to create social media posts, presentations, or marketing materials. Create reusable social media templates with consistent branding elements so future content maintains visual cohesion. Use Canva's Magic Resize feature to adapt a single design for different platforms, saving time when you need the same content formatted for Instagram, Twitter, and LinkedIn simultaneously. Export your finished designs as PNG for digital use where quality matters, or as PDF when preparing files for print services.",
        ],
      },
    },
    {
      id: "section-8",
      type: "text",
      content: {
        title: "Photoshop Basics for Touch-Ups",
        paragraphs: [
          "For more control, Photoshop (or free alternatives like GIMP) offers powerful editing:",
          "**Spot Healing Brush**: Remove small artifacts or unwanted elements.",
          "**Clone Stamp**: Copy texture from one area to another.",
          "**Content-Aware Fill**: Intelligently fill gaps or remove objects.",
          "**Adjustment Layers**: Fine-tune brightness, contrast, saturation without permanent changes.",
          "**Smart Objects**: Non-destructive scaling—always work non-destructively when possible.",
        ],
      },
    },
    {
      id: "section-9",
      type: "highlightCard",
      content: {
        heading: "Organizing Your Prompt Library",
        insights: [
          "By Category: 'Portraits,' 'Landscapes,' 'Abstract,' 'Products,' 'Architecture'",
          "By Style: 'Photorealistic,' 'Illustration,' 'Painterly,' '3D Render'",
          "By Project: 'ClientA_Brand,' 'Personal_Blog,' 'Experiment_May2024'",
          "Include prompt text, parameters used, and date for each saved image",
          "Tag successful prompts with notes about what made them work",
        ],
      },
    },
    {
      id: "section-10",
      type: "text",
      content: {
        title: "Creating Personal Style Guides",
        paragraphs: [
          "As you develop your visual voice, document it. A personal style guide captures what makes your work recognizably yours.",
          "**Include**: Your go-to color palettes, preferred aspect ratios, signature subjects, recurring moods, trusted sref codes, and example prompts that represent your style.",
          "**Why it matters**: Consistency builds recognition. When clients or followers see your work, they should recognize it as yours. A style guide ensures that consistency even as you explore and grow.",
        ],
      },
    },
    {
      id: "section-11",
      type: "text",
      content: {
        title: "Reusable Asset Management",
        paragraphs: [
          "Build systems for accessing your best resources so you can leverage past success in future projects. Save successful sref codes in a reference document with visual examples showing how each code affects different subjects, creating a quick-reference guide for achieving specific aesthetic results. Archive character references using cref URLs to maintain consistent character generation across multiple projects featuring the same characters.",
          "Build texture libraries containing background elements, overlays, and stylistic textures like paper grain or film noise that you can apply to future generations. Create seasonal and thematic collections organized for quick access when relevant projects arise, such as holiday imagery folders or industry-specific content. Sync your asset library across devices using cloud storage so you can access your references whether working from your desktop studio or mobile device on the go.",
        ],
      },
    },
    {
      id: "section-12",
      type: "quickPrompt",
      content: {
        heading: "Prepare for Output",
        description: "Plan the preparation for your next commercial image:",
        promptText:
          "Output plan: Final use: [web/print/product] | Required DPI: [72/150/300] | Format: [PNG/JPG/PDF] | Color mode: [RGB/CMYK] | Quality checks needed: [LIST]",
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "midjourney",
        action: "Use Midjourney in Discord",
        task: "Prepare an AI-generated image for print output",
        feature: "4x Upscale for print resolution (300 DPI)",
        tip: "Always check images at 100% zoom before sending to print",
      },
    },
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Prepare an Image for Print",
        purpose: "Practice preparing an AI-generated image for real-world print output.",
        instructions: [
          "Generate an image you'd potentially want to print",
          "Upscale to 4x for print quality",
          "Check the image at 100% zoom for any artifacts",
          "Determine the maximum print size at 300 DPI",
          "Save in the appropriate format (PNG for quality, PDF for print service)",
        ],
        deliverable: "A print-ready image with documented specifications",
        estimatedTime: "10-15 minutes",
        starterPrompt:
          "/imagine prompt: a serene mountain lake at sunrise, mirror reflections, dramatic clouds, wilderness landscape photography --ar 3:2 --q 2 --v 6",
        successCriteria: [
          "You upscaled the image to 4x for print resolution",
          "You checked for artifacts at 100% zoom",
          "You calculated the maximum print size at 300 DPI",
          "You saved in an appropriate format for print",
        ],
      },
    },
    {
      id: "section-completion",
      type: "completion",
      content: {
        title: "Lesson Complete",
        description:
          "You now have the practical skills to prepare your AI images for any output—print, web, or products. Combined with an organized library system, you're equipped to work efficiently and professionally. One lesson remains: your journey forward as a visual creator.",
        xpReward: 100,
        buttonText: "Continue to Final Lesson",
      },
    },
  ],
};
