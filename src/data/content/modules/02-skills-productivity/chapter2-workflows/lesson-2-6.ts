/**
 * Lesson 2.6: Meeting & Communication Workflows (ARTICLE FORMAT)
 *
 * XP CALCULATION:
 * - Base: 75 XP
 * - Length: 26 min -> x1.0
 * - Difficulty: x1.2 (Intermediate)
 * - Quizzes: +20 XP
 * - Checkpoint: +5 XP
 * - Total: 115 XP
 *
 * Duration: 26 minutes
 * XP REWARD: 115 points
 */

import type { Lesson } from "@/types/content";

export const lesson_2_6: Lesson = {
  id: "lesson-2-6",
  chapterId: "ch2-2-workflows",
  moduleId: "02-skills-productivity",
  title: "Save Time On Meetings And Follow-Ups",
  description: "Learn how to prep, summarize, and follow up with less busywork",
  order: 6,
  estimatedMinutes: 15,
  xpReward: 115,
  format: "article",
  lessonCategory: "tutorial",
  coverImage:
    "/images/courses/lessons/modules/professional-workspace-with-tools-and-technology.webp",
  coverTitle: "Save Time On Meetings And Follow-Ups",

  sections: [
    // ==========================================================================
    // HERO IMAGE
    // ==========================================================================
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/02-skills-productivity/lesson-2-6-cover.webp",
        imageAlt: "Meeting and communication workflows with AI",
        title: "Save Time On Meetings And Follow-Ups",
        subtitle: "Learn how to prep, summarize, and follow up with less busywork",
      },
    },

    // ==========================================================================
    // SECTION 1: THE COMMUNICATION OVERLOAD
    // ==========================================================================
    {
      id: "section-1",
      type: "text",
      content: {
        title: "The Communication Overload",
        paragraphs: [
          "Meetings that could have been emails. Emails that could have been messages. Messages that could have been avoided.",
          "You spend 4-6 hours daily communicating. Most of it is noise. Signal gets lost. AI helps you cut through.",
          "10 Hours Reclaimed Weekly: 5 hours from meetings. 3 hours from email. 2 hours from follow-up. What will you do with that time?",
        ],
      },
    },

    // ==========================================================================
    // SECTION 2: JESSICA'S STORY
    // ==========================================================================
    {
      id: "section-2",
      type: "text",
      content: {
        title: "What Jessica Used to Do",
        paragraphs: [
          "Jessica had 87 unread emails, 5 back-to-back meetings, and 23 Slack messages—all before 9 AM. Her day was a constant context switch. She spent 2 hours in meetings, another hour responding to emails, and Slack notifications interrupted her every 5 minutes.",
          "By 5 PM, she was exhausted. But her real work—the strategic thinking, the creative problem-solving, the deep analysis—waited until evening. She was drowning in communication noise, barely doing actual work.",
          "This pattern is devastatingly common. Professionals spend 4-6 hours daily on communication, most of it noise. The signal gets lost. Important work gets pushed to nights and weekends. There has to be a better way.",
        ],
      },
    },

    // ==========================================================================
    // SCENARIO CARD: Meeting Workflow Example
    // ==========================================================================
    {
      id: "scenario-1",
      type: "scenarioCard",
      content: {
        title: "Real-World Scenario",
        situation:
          "David is a product manager who has 6-8 meetings daily. His team is distributed across three time zones, and he spends most evenings catching up on documentation and follow-up emails.",
        challenge:
          "He needs to prepare for a critical sprint planning meeting tomorrow, but he's already behind on action items from three previous meetings this week. He has 45 minutes before his next call.",
        context:
          "This is a typical day for David. The cycle of meetings and catch-up work is unsustainable.",
        outcome:
          "Using AI for meeting prep and follow-up, David generates a focused agenda in 2 minutes, captures all action items automatically during meetings, and sends structured follow-up emails in under 5 minutes. He now leaves work at 5 PM with everything documented.",
      },
    },

    // ==========================================================================
    // QUIZ 1: Check understanding of communication workflows
    // ==========================================================================
    {
      id: "section-3",
      type: "quiz",
      content: {
        quiz: {
          question: "What's the key to AI-powered meeting preparation?",
          options: [
            "Writing longer agendas",
            "Providing context: goal, participants, duration, background",
            "Inviting fewer people",
            "Using video instead of audio",
          ],
          correctAnswer: 1,
        },
        context:
          "AI needs context to generate effective meeting prep: the meeting goal, who's attending, how long it is, background information, and what decisions need to be made. This context enables AI to create agendas, pre-work, and discussion questions.",
      },
    },

    // ==========================================================================
    // SECTION 3: THE AI-POWERED MEETING WORKFLOW
    // ==========================================================================
    {
      id: "section-4",
      type: "text",
      content: {
        title: "The AI-Powered Meeting Workflow",
        paragraphs: [
          "AI helps at every stage of the meeting lifecycle: better preparation, better notes during the meeting, and automatic follow-up afterward. The complete workflow transforms meeting overhead from hours to minutes.",
          "Meeting preparation becomes instant. AI generates a structured agenda with time allocations, pre-work assignments for participants, discussion questions tailored to your goals, and expected outcomes clearly defined. What used to take 30 minutes of agenda crafting now takes 2 minutes.",
          "During the meeting, use tools like Otter.ai for real-time transcription. AI note-taking captures decisions and action items automatically, freeing you to focus on facilitation. Your job becomes facilitating, deciding, and aligning—not scribbling notes.",
          "Post-meeting action follows a clear sequence. First, transcribe the recording or notes into text. Second, let AI extract decisions, action items, and owners. Third, generate a structured follow-up email. Fourth, log items in your project management system with reminders set. The entire post-meeting process shrinks from 30 minutes to 5 minutes.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Meeting Workflow Key Points
    // ==========================================================================
    {
      id: "highlight-1",
      type: "highlightCard",
      content: {
        heading: "The Four-Stage Meeting Workflow",
        insights: [
          "PREP: AI generates agenda, pre-work, and discussion questions in 2 minutes",
          "RUN: Focus on facilitation while AI captures notes and action items",
          "DOCUMENT: AI extracts decisions, action items, and owners automatically",
          "FOLLOW-UP: Generate structured emails and log items to project systems",
        ],
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: Visual break
    // ==========================================================================
    {
      id: "text-image-1",
      type: "textWithImage",
      content: {
        title: "From Chaos to Clarity",
        paragraphs: [
          "The transformation happens when you stop being the scribe and start being the facilitator. AI handles the documentation burden so you can focus on the human elements: decisions, relationships, and alignment.",
          "Meetings become more productive not because you're working harder, but because you're working smarter with AI handling the administrative overhead.",
        ],
        imageUrl: "/images/courses/modules/02-skills-productivity/lesson-2-6-inline-1.webp",
        imageAlt: "Meeting workflow transformation",
        imageCaption: "From overwhelmed to organized",
      },
    },

    // ==========================================================================
    // SECTION 4: EMAIL WORKFLOW AUTOMATION
    // ==========================================================================
    {
      id: "section-5",
      type: "text",
      content: {
        title: "Email Workflow Automation",
        paragraphs: [
          "Transform your email processing with AI-powered automation that turns hours into minutes. The key insight is batch processing: handle similar emails together rather than one at a time. Provide context once, let AI draft all responses, then review and personalize. What consumed 2 hours becomes 30 minutes.",
          "Build a response template library covering common scenarios: declining gracefully, deferring responses, delegating appropriately, accepting with conditions, negotiating terms, and requesting clarification. Templates provide the structure; AI personalizes for each recipient based on context.",
          "Follow-up automation eliminates the mental burden of tracking responses. Set automatic reminders when there's no reply after a certain period. Have AI draft follow-up emails when they're due. Create multi-touch sequences—initial outreach, reminder, escalation—each personalized for the specific situation. You set the strategy; AI handles the execution.",
        ],
      },
    },

    // ==========================================================================
    // QUICK PROMPT: Meeting Agenda Template
    // ==========================================================================
    {
      id: "quick-prompt-1",
      type: "quickPrompt",
      content: {
        heading: "Meeting Prep Prompt Template",
        description: "Use this prompt to generate comprehensive meeting preparation in seconds",
        promptText:
          "Create a meeting agenda for:\n\nMeeting: [meeting title]\nGoal: [what you want to accomplish]\nParticipants: [who will attend]\nDuration: [length of meeting]\nBackground: [relevant context]\n\nPlease include:\n- Time-boxed agenda items\n- Pre-work for participants\n- Key discussion questions\n- Expected outcomes",
        placeholders: [
          "meeting title",
          "what you want to accomplish",
          "who will attend",
          "length of meeting",
          "relevant context",
        ],
      },
    },

    // ==========================================================================
    // QUIZ 2: Check understanding of channel strategy
    // ==========================================================================
    {
      id: "section-6",
      type: "quiz",
      content: {
        quiz: {
          question: "When should you use meetings instead of email or Slack?",
          options: [
            "For simple status updates",
            "When conversation beats documents for complex decisions or brainstorming",
            "When you need a paper trail",
            "When the topic is straightforward",
          ],
          correctAnswer: 1,
        },
        context:
          "Meetings are best for complex decisions, brainstorming, relationship building, and when real-time conversation is more effective than documents. Simple status updates or straightforward topics should be handled via email or Slack.",
      },
    },

    // ==========================================================================
    // SECTION 5: DIFFICULT CONVERSATIONS WITH AI
    // ==========================================================================
    {
      id: "section-7",
      type: "text",
      content: {
        title: "Difficult Conversations with AI",
        paragraphs: [
          "AI can help prepare for difficult conversations, but you should have them yourself. Use AI as your rehearsal partner and script consultant, not as a replacement for human connection.",
          "AI can generate a preparation script that includes your opening statement, an observation framework to keep the conversation constructive, response strategies for different scenarios the other person might present, and even a follow-up email draft. This preparation gives you confidence and structure.",
          "But remember: you bring the humanity and judgment. AI provides the structure and helps you think through possibilities. The actual conversation—reading emotional cues, adapting in real-time, building genuine connection—requires your human presence. AI prepares you; you show up.",
        ],
      },
    },

    // ==========================================================================
    // HIGHLIGHT CARD: Communication Best Practices
    // ==========================================================================
    {
      id: "highlight-2",
      type: "highlightCard",
      content: {
        heading: "AI Communication Guardrails",
        insights: [
          "Always review AI drafts before sending - check tone, accuracy, and appropriateness",
          "Add your personality to templates - personalize for authenticity",
          "Write important messages yourself - difficult conversations, relationship building, sensitive topics require your voice",
        ],
      },
    },

    // ==========================================================================
    // QUICK PROMPT: Follow-Up Email Template
    // ==========================================================================
    {
      id: "quick-prompt-2",
      type: "quickPrompt",
      content: {
        heading: "Meeting Follow-Up Template",
        description: "Generate structured follow-up emails from your meeting notes",
        promptText:
          "Create a follow-up email from this meeting:\n\nMeeting: [meeting title]\nDate: [date]\nAttendees: [list of participants]\n\nKey decisions:\n[paste decisions or leave blank for AI to extract]\n\nAction items:\n[paste action items or leave blank for AI to extract]\n\nFormat as:\n- Summary of key decisions\n- Action items with owners and deadlines\n- Next steps\n- Any open questions",
        placeholders: [
          "meeting title",
          "date",
          "list of participants",
          "paste decisions or leave blank for AI to extract",
          "paste action items or leave blank for AI to extract",
        ],
      },
    },

    // ==========================================================================
    // TEXT WITH IMAGE: Visual break
    // ==========================================================================
    {
      id: "text-image-2",
      type: "textWithImage",
      content: {
        title: "The Human Element",
        paragraphs: [
          "AI handles the mechanics of communication - the structure, the drafting, the organization. But the human element remains irreplaceable.",
          "Your judgment, empathy, and relationships are what make communication effective. AI amplifies your capabilities; it doesn't replace your humanity.",
        ],
        imageUrl: "/images/courses/modules/02-skills-productivity/lesson-2-6-inline-2.webp",
        imageAlt: "Human-AI communication partnership",
        imageCaption: "AI handles the mechanics; you bring the meaning",
      },
    },

    // ==========================================================================
    // CHECKPOINT: Test comprehensive understanding
    // ==========================================================================
    {
      id: "section-8",
      type: "checkpoint",
      content: {
        question:
          "Describe a complete AI-powered workflow for an upcoming meeting (from prep to follow-up).",
        options: [
          "Just show up and hope for the best",
          "AI-generated agenda with pre-work, live transcription during meeting, AI extraction of decisions/action items from transcript, AI-generated follow-up email, and logging action items in project management system",
          "Take manual notes and type them up afterwards",
          "Skip the meeting and send an email instead",
        ],
        correctAnswer: 1,
        hint: "Think about the full lifecycle: prep, run, document, follow-up",
      },
    },

    // ==========================================================================
    // SECTION 6: COMMUNICATION BEST PRACTICES
    // ==========================================================================
    {
      id: "section-9",
      type: "text",
      content: {
        title: "Communication Best Practices",
        paragraphs: [
          "Follow these practices for effective AI-powered communication. First, always review AI drafts before sending. AI drafts, you decide. Check the tone matches your relationship with the recipient, verify accuracy of any facts or figures, and ensure appropriateness for the context.",
          "Add your personality to templates. AI-generated content can feel generic. Personalize with your voice, your expressions, your style. Make it authentic to you. The recipient should feel like they're hearing from you, not a robot.",
          "Reserve the human touch for important communications. Difficult conversations, relationship building, sensitive topics—write these yourself. AI can help you brainstorm or edit, but the final words should be yours. Some messages deserve your undivided attention and authentic voice.",
        ],
      },
    },

    // ==========================================================================
    // TOOL REFERENCE
    // ==========================================================================
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "chatgpt",
        action: "Open ChatGPT and use the meeting prep or follow-up templates",
        task: "Implement one complete communication workflow with AI assistance",
        feature: "Generate agendas, extract action items, and draft follow-up emails instantly",
        tip: "Start with your next upcoming meeting to see immediate time savings",
      },
    },

    // ==========================================================================
    // ACTIONABLE TASK (Inline)
    // ==========================================================================
    {
      id: "actionable-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Communication Workflow Challenge",
        purpose:
          "Implement ONE complete AI-powered communication workflow and experience the time savings firsthand.",
        instructions: [
          "Choose ONE workflow to implement:",
          "OPTION A - Meeting: Use AI to prep an agenda, take notes during a meeting, then draft a follow-up email",
          "OPTION B - Email: Create 3 response templates and batch process 10 emails",
          "OPTION C - Announcement: Draft an important announcement with AI, then compare it to your usual approach",
          "Track your time and note what worked well",
        ],
        deliverable:
          "Which workflow you implemented, time saved, and the AI's best contribution to your process",
        estimatedTime: "15-20 minutes",
        starterPrompt:
          "Meeting Prep: Create an agenda for [meeting name]. Goal: [objective]. Participants: [names]. Duration: [time]. Background: [context]. Include time-boxed agenda items, pre-work, and discussion questions.",
        successCriteria: [
          "Implemented one complete workflow from start to finish",
          "Can articulate time saved compared to usual process",
          "Identified at least one AI contribution that improved the output",
          "Reviewed and personalized any AI-generated content before using",
        ],
      },
    },
  ],
};
