/**
 * Onboarding assessment — participant-facing copy and option `value` strings feed
 * `algorithm.ts` weight keys (`q1:employee`, etc.); keep labels stable when tuning scoring.
 */

export type Dimension =
  | "professional_context"
  | "ai_experience"
  | "motivation_pain"
  | "confidence_readiness"
  | "time_goals";

export interface OnboardingQuestion {
  id: string;
  dimension: Dimension;
  text: string;
  options: { value: string; label: string }[];
}

/** 11 questions, five dimensions — keep labels aligned with `algorithm.ts` weight tables */
export const ONBOARDING_QUESTIONS: OnboardingQuestion[] = [
  {
    id: "q1",
    dimension: "professional_context",
    text: "Which best describes your current work situation?",
    options: [
      {
        value: "employee",
        label: "I work full-time for a company or organization",
      },
      { value: "freelancer", label: "I'm a freelancer or consultant" },
      { value: "business_owner", label: "I run my own business" },
      { value: "between_roles", label: "I'm currently between roles" },
    ],
  },
  {
    id: "q2",
    dimension: "professional_context",
    text: "What area best describes your day-to-day work?",
    options: [
      { value: "marketing", label: "Marketing, communications, or content" },
      { value: "finance_ops", label: "Finance, operations, or administration" },
      { value: "management", label: "Management or leadership" },
      { value: "hr", label: "HR, people operations, or office management" },
      { value: "creative", label: "Creative or design" },
      { value: "other", label: "Other" },
    ],
  },
  {
    id: "q3",
    dimension: "ai_experience",
    text: "How would you describe your experience with AI?",
    options: [
      { value: "havent_tried", label: "I haven't really tried it" },
      { value: "chatgpt_few", label: "I've used ChatGPT a few times" },
      {
        value: "scratching_surface",
        label: "I know I'm only scratching the surface",
      },
      {
        value: "daily_changed_work",
        label: "I use it daily and it's completely changed how I work",
      },
    ],
  },
  {
    id: "q4",
    dimension: "ai_experience",
    text: "Which AI tools have you used, if any?",
    options: [
      { value: "only_chatgpt", label: "Only ChatGPT" },
      {
        value: "several_tools",
        label: "I've tried several tools (ChatGPT, Claude, Gemini, etc.)",
      },
      { value: "none", label: "I haven't used any" },
      {
        value: "mostly_image",
        label: "Mostly image tools (Midjourney, DALL-E, etc.)",
      },
    ],
  },
  {
    id: "q5",
    dimension: "ai_experience",
    text: "How do you feel about the quality of AI output?",
    options: [
      {
        value: "bad_unusable",
        label: "Most of what it gives me is bad or unusable",
      },
      {
        value: "okay_could_better",
        label: "It's okay but I know it could be better",
      },
      { value: "good_mostly", label: "I get good results most of the time" },
      { value: "unsure_judge", label: "I'm not sure how to judge it" },
    ],
  },
  {
    id: "q6",
    dimension: "motivation_pain",
    text: "What's your main reason for wanting to learn AI?",
    options: [
      {
        value: "worried_behind",
        label: "I'm worried about falling behind at work",
      },
      {
        value: "efficient_better_work",
        label: "I want to be more efficient and produce better work",
      },
      {
        value: "overwhelmed_save_time",
        label: "I'm overwhelmed and need to save time",
      },
      { value: "curious_stay_sharp", label: "I'm curious and want to stay sharp" },
      {
        value: "grow_business_freelance",
        label: "I want to grow my business or freelance practice",
      },
    ],
  },
  {
    id: "q7",
    dimension: "motivation_pain",
    text: "What frustrates you most about AI right now?",
    options: [
      { value: "dont_know_start", label: "I don't know where to start" },
      {
        value: "output_not_good_enough",
        label: "The output isn't good enough for professional use",
      },
      {
        value: "too_many_tools",
        label: "There are too many tools and I don't know which to use",
      },
      {
        value: "no_time_figure_out",
        label: "I don't have time to figure it out",
      },
      {
        value: "worried_accuracy",
        label: "I'm worried about accuracy and making mistakes",
      },
    ],
  },
  {
    id: "q8",
    dimension: "confidence_readiness",
    text: "How confident do you feel about using new technology?",
    options: [
      {
        value: "not_very_confident",
        label: "Not very confident — I prefer to stick with what I know",
      },
      {
        value: "somewhat_confident",
        label: "Somewhat confident — I can figure things out with guidance",
      },
      {
        value: "confident",
        label: "Confident — I pick up new tools fairly quickly",
      },
      {
        value: "very_confident",
        label: "Very confident — I enjoy learning new technology",
      },
    ],
  },
  {
    id: "q9",
    dimension: "confidence_readiness",
    text: "How ready are you to start learning AI skills?",
    options: [
      { value: "ready_now", label: "Ready — I want to start right now" },
      {
        value: "ready_need_guidance",
        label: "I'm ready but I need clear guidance on what to do first",
      },
      {
        value: "skeptical_willing",
        label: "I'm skeptical but willing to try if it's practical",
      },
    ],
  },
  {
    id: "q10",
    dimension: "time_goals",
    text: "How much time can you realistically spend learning each day?",
    options: [
      { value: "about_5_min", label: "About 5 minutes" },
      { value: "ten_to_15_min", label: "10 to 15 minutes" },
      { value: "twenty_to_30_min", label: "20 to 30 minutes" },
      { value: "more_than_30_min", label: "More than 30 minutes" },
    ],
  },
  {
    id: "q11",
    dimension: "time_goals",
    text: "What would make this worth your time?",
    options: [
      {
        value: "job_better_faster",
        label: "Doing my current job better and faster",
      },
      {
        value: "better_content",
        label: "Creating better content (emails, reports, presentations)",
      },
      {
        value: "understand_landscape",
        label: "Understanding the AI landscape so I can make better decisions",
      },
      {
        value: "automate_repetitive",
        label: "Automating repetitive parts of my workflow",
      },
    ],
  },
];
