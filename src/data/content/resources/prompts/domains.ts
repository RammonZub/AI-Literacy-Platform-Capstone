/**
 * Prompt Domains Definition
 *
 * PURPOSE: Defines all 15 prompt domains with their categories.
 *
 * ARCHITECTURE:
 * - Each domain has an id, title, description, icon, and categories
 * - Categories are sub-groupings within domains for better organization
 * - Order determines display order in the UI
 *
 * @see src/types/resources.ts - PromptDomain and PromptCategory types
 */

import type { PromptDomain } from "@/types/resources";

/**
 * All 15 prompt domains with their categories
 *
 * DOMAIN STRUCTURE:
 * 1. Productivity & Organization - Daily work efficiency
 * 2. Email & Communication - Professional correspondence
 * 3. Document & Report Writing - Business documents
 * 4. Marketing & Content Creation - Content marketing
 * 5. Data Analysis & Research - Research and analysis
 * 6. Strategy & Decision Making - Strategic planning
 * 7. HR & People Management - Human resources
 * 8. Finance & Accounting - Financial tasks
 * 9. Sales & Client Management - Sales workflows
 * 10. Health & Personal Wellness - Personal life
 * 11. Education & Learning - Learning and teaching
 * 12. Creative & Personal - Personal projects
 * 13. Legal & Compliance - Legal documents
 * 14. Freelancer & Consultant Toolkit - Independent work
 * 15. AI Meta-Prompts - Prompt engineering
 */
export const promptDomains: PromptDomain[] = [
  {
    id: "productivity",
    title: "Productivity & Organization",
    description: "Daily planning, task management, goal setting, and workflow optimization",
    icon: "📊",
    color: { from: "#3B82F6", to: "#1D4ED8" },
    order: 1,
    categories: [
      { id: "daily-planning", title: "Daily Planning", domainId: "productivity", order: 1 },
      { id: "task-management", title: "Task Management", domainId: "productivity", order: 2 },
      { id: "goal-setting", title: "Goal Setting", domainId: "productivity", order: 3 },
      { id: "time-management", title: "Time Management", domainId: "productivity", order: 4 },
      {
        id: "meeting-productivity",
        title: "Meeting Productivity",
        domainId: "productivity",
        order: 5,
      },
      { id: "habit-tracking", title: "Habit Tracking", domainId: "productivity", order: 6 },
    ],
  },
  {
    id: "email-communication",
    title: "Email & Communication",
    description: "Professional emails, messages, and correspondence templates",
    icon: "✉️",
    color: { from: "#10B981", to: "#059669" },
    order: 2,
    categories: [
      { id: "cold-outreach", title: "Cold Outreach", domainId: "email-communication", order: 1 },
      { id: "follow-ups", title: "Follow-ups", domainId: "email-communication", order: 2 },
      {
        id: "professional-requests",
        title: "Professional Requests",
        domainId: "email-communication",
        order: 3,
      },
      {
        id: "difficult-conversations",
        title: "Difficult Conversations",
        domainId: "email-communication",
        order: 4,
      },
      {
        id: "team-communication",
        title: "Team Communication",
        domainId: "email-communication",
        order: 5,
      },
      {
        id: "customer-comms",
        title: "Customer Communication",
        domainId: "email-communication",
        order: 6,
      },
    ],
  },
  {
    id: "document-writing",
    title: "Document & Report Writing",
    description: "Reports, proposals, documentation, and business writing",
    icon: "📝",
    color: { from: "#8B5CF6", to: "#6D28D9" },
    order: 3,
    categories: [
      { id: "reports", title: "Reports", domainId: "document-writing", order: 1 },
      { id: "proposals", title: "Proposals", domainId: "document-writing", order: 2 },
      { id: "documentation", title: "Documentation", domainId: "document-writing", order: 3 },
      {
        id: "executive-summaries",
        title: "Executive Summaries",
        domainId: "document-writing",
        order: 4,
      },
      { id: "meeting-notes", title: "Meeting Notes", domainId: "document-writing", order: 5 },
      {
        id: "technical-writing",
        title: "Technical Writing",
        domainId: "document-writing",
        order: 6,
      },
    ],
  },
  {
    id: "marketing-content",
    title: "Marketing & Content Creation",
    description: "Social media, ads, blog posts, and content marketing",
    icon: "📢",
    color: { from: "#F59E0B", to: "#D97706" },
    order: 4,
    categories: [
      { id: "social-media", title: "Social Media", domainId: "marketing-content", order: 1 },
      { id: "blog-content", title: "Blog Content", domainId: "marketing-content", order: 2 },
      { id: "ad-copy", title: "Ad Copy", domainId: "marketing-content", order: 3 },
      { id: "email-marketing", title: "Email Marketing", domainId: "marketing-content", order: 4 },
      { id: "landing-pages", title: "Landing Pages", domainId: "marketing-content", order: 5 },
      { id: "seo-content", title: "SEO Content", domainId: "marketing-content", order: 6 },
    ],
  },
  {
    id: "data-research",
    title: "Data Analysis & Research",
    description: "Market research, data interpretation, and analysis frameworks",
    icon: "🔬",
    color: { from: "#06B6D4", to: "#0891B2" },
    order: 5,
    categories: [
      { id: "market-research", title: "Market Research", domainId: "data-research", order: 1 },
      { id: "data-analysis", title: "Data Analysis", domainId: "data-research", order: 2 },
      {
        id: "competitive-analysis",
        title: "Competitive Analysis",
        domainId: "data-research",
        order: 3,
      },
      { id: "surveys", title: "Surveys", domainId: "data-research", order: 4 },
      { id: "trend-analysis", title: "Trend Analysis", domainId: "data-research", order: 5 },
    ],
  },
  {
    id: "strategy-decision",
    title: "Strategy & Decision Making",
    description: "Strategic planning, frameworks, and decision support",
    icon: "🎯",
    color: { from: "#EC4899", to: "#DB2777" },
    order: 6,
    categories: [
      {
        id: "strategic-planning",
        title: "Strategic Planning",
        domainId: "strategy-decision",
        order: 1,
      },
      {
        id: "decision-frameworks",
        title: "Decision Frameworks",
        domainId: "strategy-decision",
        order: 2,
      },
      { id: "risk-assessment", title: "Risk Assessment", domainId: "strategy-decision", order: 3 },
      {
        id: "scenario-planning",
        title: "Scenario Planning",
        domainId: "strategy-decision",
        order: 4,
      },
      { id: "okrs-kpis", title: "OKRs & KPIs", domainId: "strategy-decision", order: 5 },
    ],
  },
  {
    id: "hr-people",
    title: "HR & People Management",
    description: "Hiring, performance management, and team development",
    icon: "👥",
    color: { from: "#14B8A6", to: "#0D9488" },
    order: 7,
    categories: [
      { id: "hiring", title: "Hiring & Recruiting", domainId: "hr-people", order: 1 },
      { id: "interviews", title: "Interviews", domainId: "hr-people", order: 2 },
      { id: "performance", title: "Performance Management", domainId: "hr-people", order: 3 },
      { id: "onboarding", title: "Onboarding", domainId: "hr-people", order: 4 },
      { id: "team-feedback", title: "Team Feedback", domainId: "hr-people", order: 5 },
      { id: "training", title: "Training Materials", domainId: "hr-people", order: 6 },
    ],
  },
  {
    id: "finance-accounting",
    title: "Finance & Accounting",
    description: "Budgeting, financial analysis, and accounting tasks",
    icon: "💰",
    color: { from: "#84CC16", to: "#65A30D" },
    order: 8,
    categories: [
      { id: "budgeting", title: "Budgeting", domainId: "finance-accounting", order: 1 },
      {
        id: "financial-analysis",
        title: "Financial Analysis",
        domainId: "finance-accounting",
        order: 2,
      },
      { id: "invoicing", title: "Invoicing", domainId: "finance-accounting", order: 3 },
      {
        id: "expense-tracking",
        title: "Expense Tracking",
        domainId: "finance-accounting",
        order: 4,
      },
      {
        id: "investment-research",
        title: "Investment Research",
        domainId: "finance-accounting",
        order: 5,
      },
    ],
  },
  {
    id: "sales-client",
    title: "Sales & Client Management",
    description: "Sales processes, client communication, and relationship management",
    icon: "🤝",
    color: { from: "#F97316", to: "#EA580C" },
    order: 9,
    categories: [
      { id: "lead-qualification", title: "Lead Qualification", domainId: "sales-client", order: 1 },
      { id: "sales-emails", title: "Sales Emails", domainId: "sales-client", order: 2 },
      { id: "proposals-quotes", title: "Proposals & Quotes", domainId: "sales-client", order: 3 },
      { id: "objection-handling", title: "Objection Handling", domainId: "sales-client", order: 4 },
      { id: "client-meetings", title: "Client Meetings", domainId: "sales-client", order: 5 },
      { id: "nurture-sequences", title: "Nurture Sequences", domainId: "sales-client", order: 6 },
    ],
  },
  {
    id: "health-wellness",
    title: "Health & Personal Wellness",
    description: "Meal planning, fitness, stress management, and personal wellbeing",
    icon: "💪",
    color: { from: "#22C55E", to: "#16A34A" },
    order: 10,
    categories: [
      { id: "meal-planning", title: "Meal Planning", domainId: "health-wellness", order: 1 },
      { id: "fitness", title: "Fitness", domainId: "health-wellness", order: 2 },
      {
        id: "stress-management",
        title: "Stress Management",
        domainId: "health-wellness",
        order: 3,
      },
      { id: "sleep", title: "Sleep Optimization", domainId: "health-wellness", order: 4 },
      { id: "journaling", title: "Journaling", domainId: "health-wellness", order: 5 },
    ],
  },
  {
    id: "education-learning",
    title: "Education & Learning",
    description: "Study guides, lesson plans, and educational content",
    icon: "📚",
    color: { from: "#6366F1", to: "#4F46E5" },
    order: 11,
    categories: [
      { id: "study-guides", title: "Study Guides", domainId: "education-learning", order: 1 },
      { id: "lesson-plans", title: "Lesson Plans", domainId: "education-learning", order: 2 },
      { id: "quizzes", title: "Quizzes & Assessments", domainId: "education-learning", order: 3 },
      {
        id: "explanations",
        title: "Complex Explanations",
        domainId: "education-learning",
        order: 4,
      },
      { id: "research-papers", title: "Research Papers", domainId: "education-learning", order: 5 },
    ],
  },
  {
    id: "creative-personal",
    title: "Creative & Personal",
    description: "Travel planning, gifts, events, and personal projects",
    icon: "🎨",
    color: { from: "#A855F7", to: "#9333EA" },
    order: 12,
    categories: [
      { id: "travel", title: "Travel Planning", domainId: "creative-personal", order: 1 },
      { id: "gifts", title: "Gift Ideas", domainId: "creative-personal", order: 2 },
      { id: "events", title: "Event Planning", domainId: "creative-personal", order: 3 },
      { id: "speeches", title: "Speeches & Toasts", domainId: "creative-personal", order: 4 },
      { id: "home-projects", title: "Home Projects", domainId: "creative-personal", order: 5 },
    ],
  },
  {
    id: "legal-compliance",
    title: "Legal & Compliance",
    description: "Contract review, policy drafting, and compliance documentation",
    icon: "⚖️",
    color: { from: "#64748B", to: "#475569" },
    order: 13,
    categories: [
      { id: "contracts", title: "Contracts", domainId: "legal-compliance", order: 1 },
      { id: "policies", title: "Policies", domainId: "legal-compliance", order: 2 },
      { id: "compliance", title: "Compliance", domainId: "legal-compliance", order: 3 },
      { id: "terms-privacy", title: "Terms & Privacy", domainId: "legal-compliance", order: 4 },
    ],
  },
  {
    id: "freelancer-consultant",
    title: "Freelancer & Consultant Toolkit",
    description: "Proposals, client management, and independent work essentials",
    icon: "💼",
    color: { from: "#0EA5E9", to: "#0284C7" },
    order: 14,
    categories: [
      {
        id: "proposals-sow",
        title: "Proposals & SOWs",
        domainId: "freelancer-consultant",
        order: 1,
      },
      { id: "pricing", title: "Pricing & Rates", domainId: "freelancer-consultant", order: 2 },
      { id: "portfolio", title: "Portfolio Content", domainId: "freelancer-consultant", order: 3 },
      {
        id: "client-comms",
        title: "Client Communication",
        domainId: "freelancer-consultant",
        order: 4,
      },
      {
        id: "invoicing-contracts",
        title: "Invoicing & Contracts",
        domainId: "freelancer-consultant",
        order: 5,
      },
    ],
  },
  {
    id: "ai-meta-prompts",
    title: "AI Meta-Prompts",
    description: "Prompt engineering, improvement, and advanced AI techniques",
    icon: "🤖",
    color: { from: "#6366F1", to: "#7C3AED" },
    order: 15,
    categories: [
      {
        id: "prompt-improvement",
        title: "Prompt Improvement",
        domainId: "ai-meta-prompts",
        order: 1,
      },
      { id: "chain-of-thought", title: "Chain of Thought", domainId: "ai-meta-prompts", order: 2 },
      { id: "role-based", title: "Role-Based Prompting", domainId: "ai-meta-prompts", order: 3 },
      { id: "output-control", title: "Output Control", domainId: "ai-meta-prompts", order: 4 },
      {
        id: "task-decomposition",
        title: "Task Decomposition",
        domainId: "ai-meta-prompts",
        order: 5,
      },
    ],
  },
];

/**
 * Get domain by ID
 */
export const getPromptDomainById = (id: string): PromptDomain | undefined => {
  return promptDomains.find((d) => d.id === id);
};

/**
 * Get all domains sorted by order
 */
export const getAllPromptDomains = (): PromptDomain[] => {
  return [...promptDomains].sort((a, b) => a.order - b.order);
};

/**
 * Get domain count
 */
export const getPromptDomainCount = (): number => {
  return promptDomains.length;
};

/**
 * Get total category count across all domains
 */
export const getTotalPromptCategoryCount = (): number => {
  return promptDomains.reduce((acc, domain) => acc + domain.categories.length, 0);
};

/**
 * Get category by ID
 */
export const getPromptCategory = (domainId: string, categoryId: string) => {
  const domain = getPromptDomainById(domainId);
  if (!domain) return undefined;
  return domain.categories.find((c) => c.id === categoryId);
};
