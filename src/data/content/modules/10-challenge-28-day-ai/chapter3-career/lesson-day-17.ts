/**
 * Day 17: Interview Preparation with AI
 *
 * CAREER GROWTH LESSON - Using Claude and ChatGPT for interview prep
 * NO gamification
 */

import type { Lesson } from "@/types/content";

export const lessonDay17: Lesson = {
  id: "day-17",
  chapterId: "chapter3-career",
  moduleId: "10-challenge-28-day-ai",
  title: "Interview Preparation",
  description:
    "Prepare for interviews using Claude for analysis and ChatGPT for practice. Walk into any interview confident and prepared.",
  order: 17,
  format: "article",
  lessonCategory: "tutorial",
  estimatedMinutes: 20,

  imageSearchTerms: [
    "job interview preparation",
    "professional conversation practice",
    "confident candidate interview",
  ],

  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-17-cover.webp",
        imageAlt: "Interview Preparation hero image",
        title: "Day 17: Interview Preparation",
        subtitle:
          "Prepare for interviews using Claude for analysis and ChatGPT for practice. Walk into any interview confident and prepared.",
      },
    },
    {
      id: "opening",
      type: "text",
      content: {
        paragraphs: [
          "**Tools for this lesson:** Claude + ChatGPT",
          "**Where to access:** claude.ai and chat.openai.com (both free)",
          "",
          "Interviews make or break job offers. Yet most people prepare by just reading the company website. AI changes this completely.",
          "You'll use two AI tools together: Claude to analyze the job and develop strategic answers, and ChatGPT to practice your responses. By the end, you'll be ready for any interview question.",
        ],
      },
    },
    {
      id: "two-tool-approach",
      type: "text",
      content: {
        title: "The Two-Tool Approach",
        paragraphs: [
          "We'll use each tool for what it does best. Claude excels at deep analysis—dissecting job descriptions to surface hidden requirements, helping you develop strategic answers that position you as the ideal candidate, and providing nuanced feedback that considers context and subtleties. When you need to think through a complex behavioral question or craft a compelling narrative, Claude's thoughtful approach shines.",
          "ChatGPT, on the other hand, is your practice partner. It's ideal for quick iterations, role-playing as an interviewer, and generating rapid-fire follow-up questions. When you want to rehearse answers out loud, test different phrasings, or run through multiple scenarios in a single session, ChatGPT's speed and responsiveness make it the better choice. Together, these tools create a complete interview preparation system: Claude for strategy, ChatGPT for practice.",
        ],
      },
    },
    {
      id: "step1-analysis",
      type: "textWithImage",
      content: {
        title: "Step 1: Analyze the Job with Claude",
        paragraphs: [
          "First, understand what the interviewers are actually looking for.",
          "",
          "1. Open claude.ai and start a new chat",
          "2. Have the job description ready to paste",
          "3. Let Claude analyze what matters for this role",
        ],
        image: {
          src: "/images/courses/modules/10-challenge-28-day-ai/day-17-inline-1.webp",
          alt: "Professional analyzing job description with AI assistance",
          caption: "Use Claude to analyze job requirements",
        },
      },
    },
    {
      id: "quick-prompt-1",
      type: "quickPrompt",
      content: {
        heading: "Job Analysis Prompt (Claude)",
        description: "Paste the job description into Claude:",
        promptText:
          "Analyze this job posting and help me prepare for an interview:\n\n[PASTE JOB DESCRIPTION]\n\nPlease identify:\n1. The top 5 skills/experiences they're looking for\n2. Likely interview focus areas based on the requirements\n3. Potential challenges someone in this role would face\n4. Questions I should prepare for based on specific requirements\n5. Smart questions I should ask them about the role",
        placeholders: ["PASTE JOB DESCRIPTION"],
      },
    },
    {
      id: "step2-stories",
      type: "text",
      content: {
        title: "Step 2: Develop Your STAR Stories",
        paragraphs: [
          "Most interview questions use the STAR method: Situation, Task, Action, Result. Claude helps you develop compelling stories.",
          "",
          "**Common behavioral questions to prepare:**",
          '- "Tell me about a time you faced a challenge at work"',
          '- "Describe a project you\'re proud of"',
          '- "How do you handle conflict with a coworker?"',
          '- "Tell me about a time you failed"',
          '- "Describe a time you had to learn something quickly"',
        ],
      },
    },
    {
      id: "quick-prompt-2",
      type: "quickPrompt",
      content: {
        heading: "STAR Story Development (Claude)",
        description: "Develop your stories with Claude's help:",
        promptText:
          "Help me develop a STAR story for this interview question:\n\n**Question:** [paste the behavioral question]\n\n**My experience:** [briefly describe what actually happened]\n\nHelp me structure this as a compelling STAR response:\n- **Situation:** Set the context briefly\n- **Task:** What was I responsible for?\n- **Action:** What specific steps did I take?\n- **Result:** What was the outcome (ideally with metrics)?\n\nMake my answer concise (90-120 seconds when spoken) and memorable.",
        placeholders: ["paste the behavioral question", "briefly describe what actually happened"],
      },
    },
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "Check your understanding of the STAR method.",
        quiz: {
          question:
            "In an interview, you're asked 'Tell me about a time you led a team through a difficult project.' How should you structure your answer?",
          options: [
            "Start with what you learned, then explain the project",
            "Describe the Situation and Task, then explain your Action, and finally the Result",
            "List your skills and qualifications first",
            "Talk about the team without mentioning your specific role",
          ],
          correctAnswer: 1,
        },
      },
    },
    {
      id: "step3-practice",
      type: "text",
      content: {
        title: "Step 3: Practice with ChatGPT",
        paragraphs: [
          "Now switch to ChatGPT for interactive practice. This is where you rehearse out loud.",
          "",
          "1. Open chat.openai.com",
          "2. Start a new chat",
          "3. Set up ChatGPT as your interviewer",
          "4. Practice answering questions and get feedback",
        ],
      },
    },
    {
      id: "quick-prompt-3",
      type: "quickPrompt",
      content: {
        heading: "Mock Interview Setup (ChatGPT)",
        description: "Set up ChatGPT as your interviewer:",
        promptText:
          "I want to practice for a job interview. Please act as my interviewer.\n\n**Role I'm interviewing for:** [job title]\n**Company type:** [industry/company size]\n**Interview format:** [behavioral / technical / mixed]\n\nInstructions:\n1. Ask me one question at a time\n2. Wait for my response\n3. Give brief feedback on my answer (1-2 sentences)\n4. Ask a follow-up or move to the next question\n5. After 5-7 questions, give me overall feedback\n\nStart with: \"Tell me about yourself and why you're interested in this role.\"",
        placeholders: ["job title", "industry/company size", "behavioral / technical / mixed"],
      },
    },
    {
      id: "practice-tips",
      type: "text",
      content: {
        title: "Practice Tips",
        paragraphs: [
          "To get the most from mock interviews:",
          "",
          "**Speak out loud:** Don't type your answers—say them. This reveals awkward phrasing and timing issues.",
          "",
          "**Record yourself:** Use your phone to record practice sessions. Listen back for filler words (um, uh, like).",
          "",
          "**Practice the same question multiple times:** Your first attempt is rarely your best. Refine with each try.",
          "",
          '**Get specific feedback:** After practice, ask ChatGPT: "What was my weakest answer and how could I improve it?"',
        ],
      },
    },
    {
      id: "step4-tough-questions",
      type: "text",
      content: {
        title: "Step 4: Prepare for Tough Questions",
        paragraphs: [
          "Some questions trip up even great candidates. Prepare for these with Claude's nuanced help.",
        ],
      },
    },
    {
      id: "quick-prompt-4",
      type: "quickPrompt",
      content: {
        heading: "Tough Question Prep (Claude)",
        description: "Prepare for challenging questions:",
        promptText:
          "Help me prepare an answer for this difficult interview question:\n\n**Question:** [paste difficult question]\n\n**My concern:** [why this question is hard for me]\n\nProvide:\n1. What the interviewer is actually trying to learn\n2. A strategy for answering authentically\n3. 2-3 example responses at different lengths\n4. Red flags to avoid in my answer\n5. How to pivot if I don't have a strong example",
        placeholders: ["paste difficult question", "why this question is hard for me"],
      },
    },
    {
      id: "common-tough-questions",
      type: "text",
      content: {
        title: "Common Tough Questions",
        paragraphs: [
          'Some questions consistently trip up candidates because they feel like traps. "What\'s your greatest weakness?" tempts people into rehearsed weaknesses like "I work too hard" that interviewers see right through. "Why are you leaving your current job?" can lead to negative talk about employers that raises red flags. "Tell me about a time you disagreed with your manager" requires walking a fine line between showing initiative and seeming difficult.',
          'Other questions feel high-stakes because they\'re so open-ended. "Where do you see yourself in 5 years?" seems to demand clairvoyance. "Why should we hire you over other candidates?" feels presumptuous to answer without knowing who those candidates are. And "What\'s your salary expectation?" creates anxiety about naming a number that\'s either too high or too low.',
          "The key insight is that none of these questions have a single \"correct\" answer. Interviewers use them to assess self-awareness, honesty, communication skills, and cultural fit. Claude helps you prepare responses that are authentic to your experience while strategically positioning you as a strong candidate. The goal isn't memorizing scripts—it's understanding what each question is really asking and having thought through your answer in advance.",
        ],
      },
    },
    {
      id: "step5-questions-to-ask",
      type: "text",
      content: {
        title: "Step 5: Prepare Questions to Ask Them",
        paragraphs: [
          'At the end of every interview, they\'ll ask: "Do you have any questions for us?" Saying "no" is a red flag.',
          "",
          "Prepare thoughtful questions that show you've done your research and are seriously interested.",
        ],
      },
    },
    {
      id: "quick-prompt-5",
      type: "quickPrompt",
      content: {
        heading: "Questions to Ask (Claude)",
        description: "Generate smart questions based on the job:",
        promptText:
          "Based on this job description, help me prepare questions to ask the interviewer:\n\n[PASTE JOB DESCRIPTION]\n\nGenerate:\n1. 3 questions about the role's day-to-day\n2. 3 questions about the team and culture\n3. 3 questions about growth and development\n4. 2 questions that show I've researched the company\n5. 1 question about next steps that shows enthusiasm",
        placeholders: ["PASTE JOB DESCRIPTION"],
      },
    },
    {
      id: "pro-tip",
      type: "text",
      content: {
        title: "Pro Tip: The Pre-Interview Brief",
        paragraphs: [
          'Create a one-page "cheat sheet" before each interview with Claude\'s help:',
          "",
          "- Your 3 key strengths for THIS role",
          "- 3 STAR stories ready to deploy",
          "- Answers to likely tough questions",
          "- 5 questions to ask them",
          "- Key facts about the company",
          "",
          "Review this sheet 30 minutes before your interview. It calms nerves and keeps key points fresh.",
        ],
      },
    },
    {
      id: "key-insight",
      type: "highlightCard",
      content: {
        heading: "Interview Prep Checklist",
        insights: [
          "Claude: Deep analysis and strategic answer development",
          "ChatGPT: Quick practice and mock interview role-play",
          "Develop 5-7 STAR stories covering common themes",
          "Prepare thoughtful questions to ask the interviewer",
          "Practice out loud—typing isn't the same as speaking",
        ],
      },
    },
    {
      id: "tool-ref",
      type: "toolReference",
      content: {
        tool: "claude",
        action: "Use Claude for strategic analysis and ChatGPT for practice",
        task: "Prepare for a real or hypothetical job interview using the two-tool approach",
        feature: "Claude Projects for organizing interview prep materials",
        tip: 'Create a Claude Project called "Interview Prep" to store your job analysis, STAR stories, and practice notes',
      },
    },
    {
      id: "main-task",
      type: "actionableTask",
      content: {
        title: "Your Turn: Complete Interview Prep Session",
        purpose:
          "Apply the two-tool approach to prepare for a real or hypothetical interview. You'll walk away with interview-ready materials.",
        instructions: [
          "Choose a job to prepare for (real upcoming interview OR a dream job posting)",
          "Use Claude to analyze the job and identify top 5 skills they're seeking",
          "Develop 2 STAR stories with Claude's help using the prompt from this lesson",
          "Practice one mock interview session with ChatGPT (at least 5 questions)",
          'Create your one-page "cheat sheet" with key points',
        ],
        deliverable:
          "Your interview prep document containing: job analysis, 2 STAR stories, and 3 questions to ask the interviewer",
        estimatedTime: "20-30 minutes",
        starterPrompt:
          "Analyze this job posting and help me prepare for an interview:\n\n[PASTE JOB DESCRIPTION]\n\nPlease identify:\n1. The top 5 skills/experiences they're looking for\n2. Likely interview focus areas\n3. Questions I should prepare for\n4. Smart questions I should ask them",
        successCriteria: [
          "Completed job analysis identifying at least 5 key skills",
          "Developed 2 complete STAR stories with Situation, Task, Action, Result",
          "Practiced at least 5 questions in mock interview with ChatGPT",
          "Created a one-page cheat sheet ready for interview day",
        ],
      },
    },
  ],
};

export default lessonDay17;
