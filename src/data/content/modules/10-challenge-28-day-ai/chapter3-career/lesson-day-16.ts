/**
 * Day 16: Resume Enhancement with AI
 *
 * CAREER GROWTH LESSON - Using ChatGPT for resume improvement
 * NO gamification
 */

import type { Lesson } from "@/types/content";

export const lessonDay16: Lesson = {
  id: "day-16",
  chapterId: "chapter3-career",
  moduleId: "10-challenge-28-day-ai",
  title: "Resume Enhancement with AI",
  description:
    "Use ChatGPT to analyze, improve, and tailor your resume for maximum impact in your job search.",
  order: 16,
  format: "article",
  lessonCategory: "tutorial",
  estimatedMinutes: 18,

  imageSearchTerms: [
    "professional resume document",
    "career improvement growth",
    "job application success",
  ],

  sections: [
    {
      id: "hero",
      type: "heroImage",
      content: {
        imageSrc: "/images/courses/modules/10-challenge-28-day-ai/day-16-cover.webp",
        imageAlt: "Resume Enhancement with AI hero image",
        title: "Day 16: Resume Enhancement with AI",
        subtitle:
          "Use ChatGPT to analyze, improve, and tailor your resume for maximum impact in your job search.",
      },
    },
    {
      id: "opening",
      type: "text",
      content: {
        paragraphs: [
          "**Tool for this lesson:** ChatGPT by OpenAI",
          "**Where to access:** chat.openai.com (free, works in any browser)",
          "",
          "Your resume is your first impression. In 6 seconds, recruiters decide whether to read more or move on. AI can help you make those seconds count.",
          "You'll use ChatGPT to analyze your current resume, strengthen your bullet points, and tailor it for specific job applications. By the end, you'll have a significantly improved resume ready to send.",
        ],
      },
    },
    {
      id: "why-chatgpt-resume",
      type: "text",
      content: {
        title: "Why ChatGPT for Resumes",
        paragraphs: [
          "ChatGPT excels at resume work because it identifies weak spots and offers specific, actionable improvements. Where you might stare at your own resume for hours without seeing issues, ChatGPT spots passive language, vague claims, and missing impact within seconds.",
          'The real power comes from ChatGPT\'s ability to transform duty-focused descriptions into achievement-focused statements. It takes "responsible for managing projects" and turns it into "led cross-functional teams of 8 to deliver $2M projects on schedule." This shift from responsibilities to results is the single most impactful resume improvement you can make.',
          "ChatGPT also helps you navigate Applicant Tracking Systems (ATS) by identifying which keywords from a job description should appear in your resume. It can quickly generate tailored versions for different applications and provides multiple options for each bullet point so you can choose the phrasing that best represents your experience.",
        ],
      },
    },
    {
      id: "setup",
      type: "text",
      content: {
        title: "Step 1: Prepare Your Materials",
        paragraphs: [
          "Before opening ChatGPT, gather:",
          "",
          "1. **Your current resume** (as a document you can copy text from)",
          "2. **A target job description** (optional but recommended—find one on LinkedIn or Indeed)",
          "",
          "Open ChatGPT:",
          "1. Go to chat.openai.com",
          "2. Sign in to your account",
          '3. Click "New Chat" to start fresh',
        ],
      },
    },
    {
      id: "resume-analysis",
      type: "textWithImage",
      content: {
        title: "Step 2: Get a Resume Analysis",
        paragraphs: [
          "Start by having ChatGPT analyze your resume. This gives you a baseline and identifies improvement areas.",
          "",
          "1. Copy your entire resume text",
          "2. Paste it into ChatGPT with this prompt",
          "3. Review the analysis",
        ],
        image: {
          src: "/images/courses/modules/10-challenge-28-day-ai/day-16-inline-1.webp",
          alt: "Professional resume document being analyzed on computer screen",
          caption: "ChatGPT helps analyze and improve your resume",
        },
      },
    },
    {
      id: "quick-prompt-1",
      type: "quickPrompt",
      content: {
        heading: "Resume Analysis Prompt",
        description: "Paste your resume into ChatGPT with this request:",
        promptText:
          "Please analyze my resume and provide feedback:\n\n[PASTE YOUR RESUME HERE]\n\nPlease evaluate:\n1. Overall strengths and weaknesses\n2. Sections that need improvement\n3. Weak bullet points that should be strengthened\n4. Missing elements for a [your role/industry] resume\n5. Any formatting or structure issues\n\nBe specific and constructive.",
        placeholders: ["PASTE YOUR RESUME HERE", "your role/industry"],
      },
    },
    {
      id: "bullet-improvement",
      type: "text",
      content: {
        title: "Step 3: Strengthen Your Bullet Points",
        paragraphs: [
          "The most impactful resume improvement is rewriting bullet points to focus on achievements, not duties.",
          "",
          '**Weak bullet point:** "Responsible for managing social media accounts"',
          '**Strong bullet point:** "Grew Instagram following by 45% in 6 months through targeted content strategy"',
          "",
          "The difference? Specifics, numbers, and outcomes.",
          "",
          "Find 2-3 weak bullet points from ChatGPT's analysis and improve them.",
        ],
      },
    },
    {
      id: "quick-prompt-2",
      type: "quickPrompt",
      content: {
        heading: "Bullet Point Improvement Prompt",
        description: "Use this for each weak bullet point:",
        promptText:
          "Rewrite this resume bullet point to be achievement-focused:\n\nOriginal: [paste weak bullet point]\n\nMy role: [job title]\nActual results I achieved: [any numbers, outcomes, or impact]\n\nProvide 3 improved versions:\n1. Conservative (professional tone)\n2. Impact-focused (emphasizing results)\n3. My best option (your recommendation)\n\nUse strong action verbs and include specific metrics where possible.",
        placeholders: ["paste weak bullet point", "job title", "any numbers, outcomes, or impact"],
      },
    },
    {
      id: "quiz-1",
      type: "quiz",
      content: {
        context: "Test your understanding of resume bullet points.",
        quiz: {
          question:
            "You're reviewing two resumes. One says 'Managed sales team' and the other says 'Led sales team of 8 people, increased revenue by 34% in 6 months through new training program.' Which is more effective and why?",
          options: [
            "The first one—it's concise and professional",
            "The second one—it shows specific outcomes and impact, not just responsibilities",
            "They're equally good",
            "Neither—resumes shouldn't use bullet points",
          ],
          correctAnswer: 1,
        },
      },
    },
    {
      id: "tailoring",
      type: "text",
      content: {
        title: "Step 4: Tailor for a Specific Job",
        paragraphs: [
          "The most effective resumes are tailored to each job. ChatGPT makes this fast:",
          "",
          "1. Find a job description for a role you're interested in",
          "2. Copy the job description",
          "3. Ask ChatGPT to identify key requirements and keywords",
          "4. Update your resume to align with those requirements",
        ],
      },
    },
    {
      id: "quick-prompt-3",
      type: "quickPrompt",
      content: {
        heading: "Job Tailoring Prompt",
        description: "Paste the job description with your resume:",
        promptText:
          "Help me tailor my resume for this job:\n\n**JOB DESCRIPTION:**\n[paste job description]\n\n**MY RESUME:**\n[paste your resume]\n\nPlease:\n1. Identify the top 10 keywords and skills from the job description\n2. Note where my resume already matches\n3. Suggest specific additions or changes to better align with this role\n4. Rewrite my summary statement to target this position",
        placeholders: ["paste job description", "paste your resume"],
      },
    },
    {
      id: "summary-statement",
      type: "text",
      content: {
        title: "Step 5: Craft a Strong Summary Statement",
        paragraphs: [
          "Your summary (or objective) appears at the top of your resume. It's your elevator pitch.",
          "",
          "A good summary includes:",
          "- Your professional identity (years of experience, field)",
          "- Your key strengths (top 2-3 skills)",
          "- What you bring to the role (value proposition)",
          "- A hint of your personality or work style",
        ],
      },
    },
    {
      id: "quick-prompt-4",
      type: "quickPrompt",
      content: {
        heading: "Summary Statement Generator",
        description: "Create a compelling summary:",
        promptText:
          "Write 3 professional summary options for my resume.\n\n**About me:**\n- Years of experience: [number]\n- Field/industry: [your field]\n- Key skills: [top 3-5 skills]\n- Notable achievement: [one impressive accomplishment]\n- Target role: [job title you're seeking]\n\nProvide:\n1. A concise version (2 sentences)\n2. A detailed version (3-4 sentences)\n3. Your recommended version with reasoning",
        placeholders: [
          "number",
          "your field",
          "top 3-5 skills",
          "one impressive accomplishment",
          "job title you're seeking",
        ],
      },
    },
    {
      id: "ats-tips",
      type: "text",
      content: {
        title: "ATS Optimization Tips",
        paragraphs: [
          "Many companies use Applicant Tracking Systems (ATS) to screen resumes before any human sees them. These systems scan for keywords and formatting, automatically rejecting resumes that don't match their criteria. Understanding how to work with ATS dramatically increases your chances of getting past this first filter.",
          'The most important rule is to use standard section headings that ATS expects: "Experience," "Education," and "Skills." Creative headings like "My Journey" or "What I\'ve Done" might showcase personality, but they confuse automated systems. Similarly, avoid tables, columns, and complex formatting that ATS struggles to parse correctly.',
          'Keywords matter enormously. If the job description mentions "project management," "stakeholder communication," and "Agile methodology," those exact phrases should appear in your resume. Match the job description\'s language precisely rather than using synonyms. Use standard fonts like Arial, Calibri, or Georgia, and always spell out acronyms at least once—write "Search Engine Optimization (SEO)" before using the abbreviation. Finally, check whether the application requires .docx or .pdf format and follow that requirement exactly.',
        ],
      },
    },
    {
      id: "pro-tip",
      type: "text",
      content: {
        title: "Pro Tip: The 3-Version Strategy",
        paragraphs: [
          "Instead of one resume, maintain three versions:",
          "",
          "**1. Master Resume:** Everything you've ever done (4-6 pages, for your eyes only)",
          "**2. Base Resume:** Your standard resume (1-2 pages, ready to tailor)",
          "**3. Tailored Version:** Customized for each application",
          "",
          "ChatGPT helps you quickly create tailored versions from your base resume. Keep your master updated with new achievements as they happen.",
        ],
      },
    },
    {
      id: "key-insight",
      type: "highlightCard",
      content: {
        heading: "Resume Enhancement Checklist",
        insights: [
          "Analyze your resume for overall strengths and weaknesses first",
          "Rewrite bullet points to focus on achievements with specific metrics",
          "Tailor keywords and summary for each job application",
          "Maintain a master resume with all achievements",
          "Always have a human review AI-suggested changes",
        ],
      },
    },
    {
      id: "main-task",
      type: "actionableChallenge",
      content: {
        title: "Your Turn: Transform Your Resume Bullet Points",
        purpose:
          "Convert weak, duty-focused bullet points into strong, achievement-focused statements that demonstrate real impact.",
        instructions: [
          "Open your current resume document",
          "Open chat.openai.com and start a new chat",
          "Copy your entire resume into ChatGPT with the analysis prompt from this lesson",
          "Review ChatGPT's feedback and identify 3-5 weak bullet points",
          "Use the bullet point improvement prompt for each weak point",
          "Replace the weak bullets in your resume with the improved versions",
          "Save your updated resume",
        ],
        deliverable:
          "An updated resume with at least 3 improved bullet points, each including specific metrics, outcomes, or impact.",
        estimatedTime: "15-20 minutes",
        starterPrompt:
          "Rewrite this resume bullet point to be achievement-focused:\n\n**Original:** Responsible for managing social media accounts\n\n**My role:** Marketing Coordinator\n**Actual results:** Grew Instagram from 1,000 to 4,500 followers in 6 months; increased engagement rate by 40%\n\nProvide 3 improved versions:\n1. Conservative (professional tone)\n2. Impact-focused (emphasizing results)\n3. My best option (your recommendation)",
        successCriteria: [
          "At least 3 bullet points have been rewritten",
          "Each improved bullet includes specific numbers or metrics",
          "Bullet points focus on achievements/outcomes, not duties",
          "The language is active and uses strong action verbs",
        ],
      },
    },
    {
      id: "checkpoint",
      type: "checkpoint",
      content: {
        question: "What's the most important improvement to make to resume bullet points?",
        options: [
          "Make them longer with more detail",
          "Add the word 'successfully' to every point",
          "Transform duty-focused descriptions into achievement-focused statements with specific outcomes",
          "Include as many industry buzzwords as possible",
        ],
        correctAnswer: 2,
        hint: "Think about what demonstrates real value to an employer...",
      },
    },
  ],
};

export default lessonDay16;
