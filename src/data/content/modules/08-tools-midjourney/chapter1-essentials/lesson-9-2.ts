/**
 * Lesson 9.2: Setting Up Discord (For Non-Gamers)
 *
 * CHAPTER: 1 - Getting Started
 * LESSON: 2 of 5 - Setting Up Your Tools
 *
 * DURATION: 15 minutes
 * XP REWARD: 100 XP
 *
 * PURPOSE: Guide non-technical users through Discord setup for Midjourney access
 *
 * KEY RESPONSIBILITIES:
 * - Explain what Discord is in simple terms
 * - Provide step-by-step account creation
 * - Show how to join and navigate the Midjourney server
 * - Cover Discord etiquette and best practices
 */

import type { Lesson } from "@/types/content";

export const lesson_9_2: Lesson = {
  id: "lesson-9-2",
  chapterId: "ch9-1-essentials",
  moduleId: "08-tools-midjourney",
  title: "Setting Up Discord (For Non-Gamers)",
  description:
    "Get set up on Discord and join the Midjourney community—even if you've never used it before",
  order: 2,
  estimatedMinutes: 15,
  xpReward: 100,
  format: "article",
  lessonCategory: "tutorial",
  sections: [
    // ===========================================================================
    // HERO IMAGE
    // ===========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/08-tools-midjourney/lesson-9-2-cover.webp",
        imageAlt: "Computer setup with Discord chat interface ready for Midjourney",
        title: "Setting Up Discord (For Non-Gamers)",
        subtitle:
          "Get set up on Discord and join the Midjourney community—even if you've never used it before",
      },
    },
    // ===========================================================================
    // SECTION 1: What is Discord?
    // ===========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "What is Discord?",
        paragraphs: [
          "Think of Discord as a combination of Slack, WhatsApp, and old-school chat rooms. It's organized into 'servers' (communities) and 'channels' (topic-specific chat rooms).",
          "",
          "The Midjourney server is where you'll type commands to generate images. It's also where you'll see what others are creating—a constant source of inspiration.",
          "",
          "Why Discord? When Midjourney launched, Discord provided an easy way to handle millions of users generating images simultaneously. The interface stuck because it works.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 2: Creating Your Discord Account
    // ===========================================================================
    {
      id: "section-2",
      type: "textWithBullets",
      content: {
        title: "Step-by-Step: Creating Your Discord Account",
        paragraphs: ["Let's get you set up. Follow these steps exactly:"],
        bullets: [
          "**Step 1**: Go to discord.com in your web browser",
          "",
          "**Step 2**: Click 'Download for [your operating system]' (Windows/Mac) or use the web version",
          "",
          "**Step 3**: Click 'Register' and enter your email, username, and password",
          "",
          "**Step 4**: Verify your email by clicking the link Discord sends you",
          "",
          "**Step 5**: Complete the captcha and you're in!",
        ],
      },
    },
    // ===========================================================================
    // SECTION 3: Understanding the Discord Interface
    // ===========================================================================
    {
      id: "section-3",
      type: "highlightCard",
      content: {
        heading: "Discord Interface Basics",
        insights: [
          "SERVERS (left sidebar): These are your communities. Midjourney will appear here once you join",
          "CHANNELS (second sidebar): Topic-specific rooms within each server. Think of them as different chat rooms",
          "MAIN CHAT (center): This is where conversations and image generation happens",
          "MEMBER LIST (right sidebar): Shows who's online in the current channel",
        ],
      },
    },
    // ===========================================================================
    // SECTION 4: Joining the Midjourney Server
    // ===========================================================================
    {
      id: "section-4",
      type: "textWithBullets",
      content: {
        title: "Joining the Midjourney Server",
        paragraphs: ["Now let's connect you to Midjourney:"],
        bullets: [
          "**Step 1**: Go to midjourney.com and click 'Join the Beta' or 'Sign In'",
          "",
          "**Step 2**: Authorize Midjourney to access your Discord account",
          "",
          "**Step 3**: You'll be automatically added to the Midjourney server",
          "",
          "**Alternative**: Use the + icon in Discord's left sidebar, select 'Join a Server', and enter the Midjourney invite link",
        ],
      },
    },
    // ===========================================================================
    // SECTION 5: Navigating Midjourney Channels
    // ===========================================================================
    {
      id: "section-5",
      type: "textWithImage",
      content: {
        title: "Navigating the Midjourney Server",
        paragraphs: [
          "The Midjourney server can feel overwhelming at first. Here's what you need to know:",
          "",
          "You'll see dozens of channels, but you only need a few to get started.",
        ],
        imageUrl: "/images/courses/modules/08-tools-midjourney/lesson-9-2-inline-1.webp",
        imageAlt: "Person navigating computer interface",
      },
    },
    // ===========================================================================
    // SECTION 6: Key Channels to Know
    // ===========================================================================
    {
      id: "section-6",
      type: "text",
      content: {
        title: "Key Channels Explained",
        paragraphs: [
          "The Midjourney server organizes its channels to serve users at different experience levels and with different interests. Understanding which channels to use will dramatically improve your experience and help you find the right community for your journey.",
          "",
          "For beginners, the #newbies channels (numbered 1 through 20) are your starting point. These channels are specifically designed for new users to generate images and learn alongside others at the same skill level. You'll find a supportive environment where questions are welcome and everyone is learning together. This is where you should spend your first few sessions until you feel comfortable with the basics.",
          "",
          "As you progress, you'll want to explore other channels. The #general channel serves as an all-purpose space for image generation and discussion, open to users of all levels. The #show-and-tell channel is particularly valuable for inspiration—you'll see incredible work from other users and can observe what prompts and techniques they're using. For those interested in improving their skills, #prompt-craft hosts discussions about writing better prompts and advanced techniques. Finally, #announcements is essential reading for staying current with updates, new features, and changes from the Midjourney team.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 7: Finding Your Images
    // ===========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Finding Your Generated Images",
        paragraphs: [
          "Here's a pro tip that saves hours of frustration:",
          "",
          "When you generate an image in a busy channel, it can get buried under thousands of other generations. To quickly find your images:",
          "",
          "Type your username in the channel's search bar. Discord will filter to show only messages containing your name—including all your generated images.",
          "",
          "Alternatively, use the '@' mention before your username for even more precise filtering.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 8: Discord Etiquette
    // ===========================================================================
    {
      id: "section-8",
      type: "highlightCard",
      content: {
        heading: "Discord Etiquette for Midjourney",
        insights: [
          "Be patient—millions of users are generating images simultaneously",
          "Don't spam multiple prompts at once; wait for results before generating more",
          "Use appropriate channels (beginners in newbie channels, etc.)",
          "Be respectful in feedback and discussions",
          "Don't claim others' prompts as your own—credit when sharing",
        ],
      },
    },
    // ===========================================================================
    // SECTION 9: Mobile vs Desktop
    // ===========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Mobile vs Desktop Experience",
        paragraphs: [
          "Both the mobile and desktop versions of Discord work with Midjourney, but they offer distinctly different experiences that are worth understanding before you settle into a workflow.",
          "",
          "The desktop app is strongly recommended for creating images. The larger screen gives you a better view of your results, typing complex prompts is significantly easier with a physical keyboard, and navigating between channels feels more natural. When you're working on detailed prompts or comparing multiple generations side by side, the desktop experience is simply superior.",
          "",
          "The mobile app excels at browsing and casual use. It's perfect for checking your generations while away from your computer, getting inspiration from other users' work during your commute, or quickly generating simple images on the go. However, typing anything beyond basic prompts on a phone keyboard can become frustrating quickly.",
          "",
          "The web browser version offers a middle ground, providing the desktop interface without requiring any download. This is ideal if you're using a computer where you can't install applications, or if you simply prefer not to add another app to your system. The experience is nearly identical to the desktop app, just accessed through your browser.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 10: Troubleshooting Common Issues
    // ===========================================================================
    {
      id: "section-10",
      type: "text",
      content: {
        title: "Troubleshooting Common Issues",
        paragraphs: [
          "When things don't work as expected, a few common issues account for most problems. Understanding these scenarios and their solutions will save you frustration as you get started with Midjourney.",
          "",
          "If you see an error message saying 'Cannot send messages to this user,' the issue is usually in your Discord privacy settings. Navigate to your Discord settings and enable the option to allow direct messages from server members. This permission is necessary for the Midjourney bot to communicate with you directly about your generations and subscription status.",
          "",
          "When the bot doesn't respond to your commands at all, you may need to accept Midjourney's Terms of Service first. Open a direct message with the Midjourney Bot and type /subscribe to initiate the setup process. This step is required before you can generate any images, even with a free trial.",
          "",
          "Losing track of your generated images in busy channels is a common experience. The solution is to use Discord's search function with your username, which filters the channel to show only messages containing your name. Alternatively, check your Direct Messages with the Midjourney Bot, where you'll find a record of all your generations. Finally, if you encounter 'server full' messages when trying to use a newbie channel, simply try a different numbered channel. These channels often have capacity limits to prevent overwhelming the system.",
        ],
      },
    },
    // ===========================================================================
    // SECTION 11: Try It Now
    // ===========================================================================
    {
      id: "section-11",
      type: "quickPrompt",
      content: {
        heading: "Test Your Discord Setup",
        description:
          "Go to the Midjourney Discord server and find your way to a newbie channel. Type this command to practice using the interface:",
        promptText: "/imagine prompt: a simple red circle on a white background --v 6",
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
        task: "Join the Midjourney server and navigate to newbie channels",
        feature: "/imagine command popup",
        tip: "Use the search bar with your username to quickly find your generated images in busy channels",
      },
    },
    // ===========================================================================
    // SECTION 12: Actionable Task
    // ===========================================================================
    {
      id: "section-actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Test Your Discord Setup",
        purpose:
          "Before moving on, confirm your Discord and Midjourney access is working correctly so you're ready to create images.",
        instructions: [
          "Open Discord and navigate to the Midjourney server",
          "Find a newbie channel (like #newbies or #newbie-1)",
          "Type a simple test command in the chat to verify you can interact",
          "Locate the search bar and search for your username to see how filtering works",
        ],
        deliverable: "Confirmation that you can access Midjourney channels and send messages",
        estimatedTime: "5-10 minutes",
        starterPrompt: "/imagine prompt: a simple red circle on a white background --v 6",
        successCriteria: [
          "You successfully joined the Midjourney Discord server",
          "You can see and access at least one newbie channel",
          "You tested the /imagine command popup appears when you type it",
          "You know how to search for your own messages",
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
        title: "Discord Setup Complete",
        description:
          "You now have Discord installed, an account created, and access to the Midjourney server. In the next lesson, we'll explore Midjourney's different models and interfaces so you can choose the right tools for your creations.",
        xpReward: 100,
        buttonText: "Continue to Models & Interfaces",
      },
    },
  ],
};
