/**
 * Document & Report Writing Prompts
 *
 * PURPOSE: Prompts for creating professional business documents, reports,
 * proposals, documentation, executive summaries, meeting notes, and technical writing.
 *
 * DOMAIN: Document & Report Writing
 * CATEGORIES:
 * - Reports (8 prompts)
 * - Proposals (8 prompts)
 * - Documentation (8 prompts)
 * - Executive Summaries (7 prompts)
 * - Meeting Notes (7 prompts)
 * - Technical Writing (7 prompts)
 *
 * @see src/types/resources.ts - Prompt type definition
 */

import type { Prompt } from "@/types/resources";

/**
 * Document & Report Writing prompts collection
 *
 * Each prompt is tested across ChatGPT, Claude, and Gemini.
 * Best tool indicates which gives the most consistent results.
 */
export const documentWritingPrompts: Prompt[] = [
  // ============================================================================
  // REPORTS
  // ============================================================================

  {
    id: "weekly-status-report",
    title: "Weekly Status Report",
    description:
      "Create a concise weekly status update highlighting accomplishments, blockers, and next steps.",
    promptText: `Generate a weekly status report based on the following information:

Role/Team: [YOUR ROLE OR TEAM]
Week of: [DATE RANGE]
Reporting to: [MANAGER OR STAKEHOLDER]

This week's accomplishments:
[ACCOMPLISHMENTS]

In-progress items:
[IN-PROGRESS WORK]

Blockers or challenges:
[BLOCKERS]

Next week's priorities:
[NEXT WEEK PRIORITIES]

Key metrics or updates:
[METRICS OR KPI UPDATES]

Please create a professional weekly status report that:
1. Uses a clear, scannable format (executives should grasp key points in under 2 minutes)
2. Highlights critical items that need attention
3. Includes a brief "traffic light" status section (Green/Yellow/Red)
4. Frames challenges with proposed solutions
5. Ends with specific asks or support needed (if any)`,
    placeholders: [
      "YOUR ROLE OR TEAM",
      "DATE RANGE",
      "MANAGER OR STAKEHOLDER",
      "ACCOMPLISHMENTS",
      "IN-PROGRESS WORK",
      "BLOCKERS",
      "NEXT WEEK PRIORITIES",
      "METRICS OR KPI UPDATES",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "document-writing",
    categoryId: "reports",
    exampleOutput:
      "A formatted status report with sections for accomplishments, in-progress work, blockers with mitigation strategies, next week's priorities, and a traffic-light status overview.",
    customizationNotes: [
      'Add a "wins worth celebrating" section for positive morale',
      "Include team member shoutouts if leading a team",
      "Adjust tone based on recipient (formal for executives, casual for peers)",
    ],
    tags: ["weekly", "status", "updates", "team-communication"],
    order: 1,
  },

  {
    id: "monthly-business-report",
    title: "Monthly Business Report",
    description:
      "Comprehensive monthly report summarizing performance, metrics, and strategic progress.",
    promptText: `Create a comprehensive monthly business report for [MONTH/YEAR].

Department/Team: [DEPARTMENT]
Prepared by: [YOUR NAME]
Audience: [STAKEHOLDERS]

Key Performance Indicators:
[KPI DATA - include actual vs. target]

Major accomplishments this month:
[MAJOR WINS AND MILESTONES]

Challenges and issues:
[CHALLENGES AND RESPONSES]

Budget/financial status:
[BUDGET UPDATE OR FINANCIAL SUMMARY]

Team updates:
[TEAM CHANGES, HIRING, ETC.]

Market or industry developments:
[RELEVANT EXTERNAL FACTORS]

Outlook for next month:
[NEXT MONTH PRIORITIES AND FORECASTS]

Please create a monthly report with:
1. Executive summary (3-5 bullet points)
2. KPI dashboard with trends and variance analysis
3. Deep dive on 1-2 significant items requiring attention
4. Strategic progress against quarterly goals
5. Risk flags or emerging concerns
6. Predictive outlook for next month`,
    placeholders: [
      "MONTH/YEAR",
      "DEPARTMENT",
      "YOUR NAME",
      "STAKEHOLDERS",
      "KPI DATA - include actual vs. target",
      "MAJOR WINS AND MILESTONES",
      "CHALLENGES AND RESPONSES",
      "BUDGET UPDATE OR FINANCIAL SUMMARY",
      "TEAM CHANGES, HIRING, ETC.",
      "RELEVANT EXTERNAL FACTORS",
      "NEXT MONTH PRIORITIES AND FORECASTS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "document-writing",
    categoryId: "reports",
    exampleOutput:
      "A polished monthly report with executive summary, KPI visualizations (in text format), detailed analysis sections, and strategic outlook.",
    customizationNotes: [
      "Include year-over-year comparisons for context",
      "Add visual formatting suggestions (charts, tables) if creating a slide deck",
      'Consider adding a "lessons learned" section for continuous improvement',
    ],
    tags: ["monthly", "kpi", "metrics", "business-review"],
    order: 2,
  },

  {
    id: "incident-report",
    title: "Incident Report",
    description: "Document operational incidents, root causes, and corrective actions.",
    promptText: `Generate a professional incident report for the following situation:

Incident details:
- Date/Time: [DATE AND TIME]
- Incident ID/Number: [INCIDENT ID]
- Severity Level: [SEVERITY - P1/P2/P3/P4]
- Incident Commander: [LEAD NAME]

What happened:
[DESCRIPTION OF THE INCIDENT]

Impact assessment:
- Users affected: [NUMBER OR SCOPE]
- Revenue impact: [FINANCIAL IMPACT IF ANY]
- Service disruption: [DURATION AND SCOPE]

Timeline of events:
[CHRONOLOGICAL SEQUENCE OF EVENTS]

Root cause analysis:
[ROOT CAUSE(S) IDENTIFIED]

Immediate resolution:
[WHAT WAS DONE TO RESOLVE]

Preventive measures:
[CORRECTIVE AND PREVENTIVE ACTIONS]

Create a structured incident report including:
1. Executive summary (one paragraph)
2. Incident classification and severity
3. Detailed impact assessment
4. Root cause analysis (use 5 Whys methodology)
5. Timeline with key timestamps
6. Resolution and recovery steps
7. Action items to prevent recurrence (with owners and due dates)
8. Lessons learned`,
    placeholders: [
      "DATE AND TIME",
      "INCIDENT ID",
      "SEVERITY - P1/P2/P3/P4",
      "LEAD NAME",
      "DESCRIPTION OF THE INCIDENT",
      "NUMBER OR SCOPE",
      "FINANCIAL IMPACT IF ANY",
      "DURATION AND SCOPE",
      "CHRONOLOGICAL SEQUENCE OF EVENTS",
      "ROOT CAUSE(S) IDENTIFIED",
      "WHAT WAS DONE TO RESOLVE",
      "CORRECTIVE AND PREVENTIVE ACTIONS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "document-writing",
    categoryId: "reports",
    exampleOutput:
      "A professional incident report with clear sections, root cause analysis, timeline, and actionable preventive measures with ownership assigned.",
    customizationNotes: [
      "Include communication log (who was notified and when)",
      "Add blameless language focus for psychological safety",
      'Consider adding a "positive outcome" section if improvements resulted',
    ],
    tags: ["incident", "root-cause", "postmortem", "operations"],
    order: 3,
  },

  {
    id: "project-status-report",
    title: "Project Status Report",
    description: "Track project health, milestones, risks, and stakeholder communications.",
    promptText: `Generate a project status report for [PROJECT NAME].

Project details:
- Project Manager: [YOUR NAME]
- Reporting period: [DATE RANGE]
- Project sponsor: [SPONSOR NAME]
- Original timeline: [START DATE] to [END DATE]

Current status: [GREEN/YELLOW/RED]

Milestone progress:
[COMPLETED MILESTONES AND UPCOMING DEADLINES]

Budget status:
[BUDGET CONSUMED vs. PLANNED]

Risks and issues:
[CURRENT RISKS WITH SEVERITY ASSESSMENT]

Key decisions made this period:
[DECISIONS AND THEIR RATIONALE]

Next period priorities:
[IMMEDIATE PRIORITIES AND DELIVERABLES]

Stakeholder engagement:
[COMMUNICATION UPDATES OR CONCERNS]

Create a comprehensive project status report with:
1. Project health dashboard (RAG status across scope, schedule, budget, quality)
2. Milestone progress with completion percentages
3. Budget tracker with forecast
4. Risk register with mitigation status
5. Decision log with rationale
6. Blockers requiring escalation
7. Upcoming milestones and next steps
8. Change requests (if any)`,
    placeholders: [
      "PROJECT NAME",
      "YOUR NAME",
      "DATE RANGE",
      "SPONSOR NAME",
      "START DATE",
      "END DATE",
      "GREEN/YELLOW/RED",
      "COMPLETED MILESTONES AND UPCOMING DEADLINES",
      "BUDGET CONSUMED vs. PLANNED",
      "CURRENT RISKS WITH SEVERITY ASSESSMENT",
      "DECISIONS AND THEIR RATIONALE",
      "IMMEDIATE PRIORITIES AND DELIVERABLES",
      "COMMUNICATION UPDATES OR CONCERNS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "document-writing",
    categoryId: "reports",
    exampleOutput:
      "A detailed project status report with RAG health indicators, milestone tracking, budget analysis, risk register, and clear next steps.",
    customizationNotes: [
      "Include earned value metrics if your organization uses EVM",
      "Add dependency map if other teams or vendors are involved",
      'Consider adding a "team sentiment" section for larger projects',
    ],
    tags: ["project-management", "status", "milestones", "tracking"],
    order: 4,
  },

  {
    id: "annual-report-summary",
    title: "Annual Report Summary",
    description: "Summarize yearly performance, achievements, and strategic positioning.",
    promptText: `Create an annual report summary for [YEAR].

Organization: [COMPANY/DEPARTMENT]
Prepared for: [AUDIENCE - BOARD/STAKEHOLDERS/PUBLIC]

Financial highlights:
[KEY FINANCIAL METRICS - REVENUE, PROFIT, GROWTH]

Operational achievements:
[MAJOR ACCOMPLISHMENTS AND MILESTONES]

Strategic initiatives progress:
[STRATEGY EXECUTION UPDATE]

Market position:
[MARKET SHARE, COMPETITIVE POSITION]

Challenges overcome:
[MAJOR CHALLENGES AND RESPONSES]

Team and culture:
[TEAM GROWTH, ENGAGEMENT, CULTURE HIGHLIGHTS]

Sustainability/ESG impact (if applicable):
[ENVIRONMENTAL AND SOCIAL IMPACT]

Outlook for next year:
[STRATEGIC PRIORITIES AND FORECASTS]

Generate an annual report summary featuring:
1. Letter-style executive summary
2. Year-at-a-glance highlights
3. Financial performance narrative (not just numbers)
4. Strategic achievements against stated goals
5. Market and competitive context
6. Organizational developments
7. Future outlook and strategic priorities
8. Acknowledgments and thank-yous

Tone should be professional yet engaging, balancing facts with storytelling.`,
    placeholders: [
      "YEAR",
      "COMPANY/DEPARTMENT",
      "AUDIENCE - BOARD/STAKEHOLDERS/PUBLIC",
      "KEY FINANCIAL METRICS - REVENUE, PROFIT, GROWTH",
      "MAJOR ACCOMPLISHMENTS AND MILESTONES",
      "STRATEGY EXECUTION UPDATE",
      "MARKET SHARE, COMPETITIVE POSITION",
      "MAJOR CHALLENGES AND RESPONSES",
      "TEAM GROWTH, ENGAGEMENT, CULTURE HIGHLIGHTS",
      "ENVIRONMENTAL AND SOCIAL IMPACT",
      "STRATEGIC PRIORITIES AND FORECASTS",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "document-writing",
    categoryId: "reports",
    exampleOutput:
      "A comprehensive annual summary with narrative sections weaving together financial, operational, and strategic highlights into a compelling year-in-review story.",
    customizationNotes: [
      "Include customer or stakeholder testimonials for credibility",
      "Add visual references (charts, photos) for the full report design",
      "Consider creating different versions for different audiences",
    ],
    tags: ["annual", "yearly", "strategic", "comprehensive"],
    order: 5,
  },

  {
    id: "case-study-report",
    title: "Case Study Report",
    description: "Document a success story with problem, solution, and measurable results.",
    promptText: `Create a compelling case study report based on the following information:

Case study title: [WORKING TITLE]

Client/Customer: [CLIENT NAME - OR ANONYMIZED]
Industry: [INDUSTRY]
Company size: [REVENUE/EMPLOYEES]

The Challenge:
- Initial situation: [PROBLEM CONTEXT]
- Pain points: [SPECIFIC PAIN POINTS]
- Consequences: [IMPACT OF THE PROBLEM]
- Client goals: [WHAT THEY WANTED TO ACHIEVE]

The Solution:
- Approach: [HOW THE PROBLEM WAS SOLVED]
- Implementation: [KEY STEPS IN THE SOLUTION]
- Timeline: [DURATION FROM START TO FINISH]
- Why this approach: [RATIONALE FOR THE CHOSEN SOLUTION]

The Results:
- Quantitative outcomes: [MEASURABLE RESULTS WITH NUMBERS]
- Qualitative outcomes: [QUALITATIVE IMPROVEMENTS]
- Client testimonials: [QUOTES FROM THE CLIENT]
- ROI: [RETURN ON INVESTMENT IF APPLICABLE]

Lessons learned:
[KEY TAKEAWAYS AND INSIGHTS]

Create a professional case study with:
1. Attention-grabbing headline and subtitle
2. Executive summary paragraph
3. Client profile and context
4. Challenge section (the "before" state)
5. Solution section (the "during" phase)
6. Results section (the "after" state with metrics)
7. Client testimonial highlight
8. Key takeaways or lessons learned
9. Call-to-action or conclusion

Format should tell a compelling narrative while remaining factual and credible.`,
    placeholders: [
      "WORKING TITLE",
      "CLIENT NAME - OR ANONYMIZED",
      "INDUSTRY",
      "REVENUE/EMPLOYEES",
      "PROBLEM CONTEXT",
      "SPECIFIC PAIN POINTS",
      "IMPACT OF THE PROBLEM",
      "WHAT THEY WANTED TO ACHIEVE",
      "HOW THE PROBLEM WAS SOLVED",
      "KEY STEPS IN THE SOLUTION",
      "DURATION FROM START TO FINISH",
      "RATIONALE FOR THE CHOSEN SOLUTION",
      "MEASURABLE RESULTS WITH NUMBERS",
      "QUALITATIVE IMPROVEMENTS",
      "QUOTES FROM THE CLIENT",
      "RETURN ON INVESTMENT IF APPLICABLE",
      "KEY TAKEAWAYS AND INSIGHTS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "document-writing",
    categoryId: "reports",
    exampleOutput:
      "A compelling case study with clear problem-solution-results structure, quantified outcomes, client quotes, and actionable takeaways.",
    customizationNotes: [
      'Consider adding a "before/after" comparison table for quick scanning',
      "Include visual descriptions (charts, graphs) if designing a document",
      "Adapt tone for your industry (B2B tech vs. healthcare vs. consulting)",
    ],
    tags: ["case-study", "success-story", "customer-story", "marketing"],
    order: 6,
  },

  {
    id: "compliance-audit-report",
    title: "Compliance Audit Report",
    description: "Document compliance audit findings, gaps, and remediation plans.",
    promptText: `Generate a compliance audit report for the following assessment:

Audit type: [COMPLIANCE FRAMEWORK - SOC2, ISO, GDPR, HIPAA, ETC.]
Auditor: [YOUR NAME/TEAM]
Audit period: [DATE RANGE]
Scope: [SYSTEMS, PROCESSES, OR DEPARTMENTS COVERED]

Compliance posture overview:
[OVERALL ASSESSMENT - COMPLIANT/PARTIALLY COMPLIANT/NON-COMPLIANT]

Controls assessed:
[LIST OF CONTROLS AND FRAMEWORK REQUIREMENTS]

Findings summary:
- Critical findings: [CRITICAL GAPS OR VIOLATIONS]
- High findings: [HIGH-PRIORITY ISSUES]
- Medium findings: [MODERATE ISSUES]
- Low findings: [MINOR OBSERVATIONS]

Evidence reviewed:
[EVIDENCE SOURCES AND METHODOLOGY]

Remediation plans:
[CORRECTIVE ACTIONS WITH OWNERS AND TIMELINES]

Recommendations:
[RECOMMENDATIONS FOR IMPROVEMENT]

Create a structured compliance audit report with:
1. Executive summary (suitable for senior leadership)
2. Audit scope and methodology
3. Overall compliance assessment with score/maturity level
4. Detailed findings organized by severity
5. Risk assessment for each finding
6. Root cause analysis for significant gaps
7. Remediation plans with timelines and owners
8. Recommendations for continuous improvement
9. Appendix with mapping to framework requirements

Tone should be objective, factual, and actionable. Avoid blame language.`,
    placeholders: [
      "COMPLIANCE FRAMEWORK - SOC2, ISO, GDPR, HIPAA, ETC.",
      "YOUR NAME/TEAM",
      "DATE RANGE",
      "SYSTEMS, PROCESSES, OR DEPARTMENTS COVERED",
      "OVERALL ASSESSMENT - COMPLIANT/PARTIALLY COMPLIANT/NON-COMPLIANT",
      "LIST OF CONTROLS AND FRAMEWORK REQUIREMENTS",
      "CRITICAL GAPS OR VIOLATIONS",
      "HIGH-PRIORITY ISSUES",
      "MODERATE ISSUES",
      "MINOR OBSERVATIONS",
      "EVIDENCE SOURCES AND METHODOLOGY",
      "CORRECTIVE ACTIONS WITH OWNERS AND TIMELINES",
      "RECOMMENDATIONS FOR IMPROVEMENT",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "document-writing",
    categoryId: "reports",
    exampleOutput:
      "A professional compliance report with clear findings, risk assessments, and actionable remediation plans mapped to the relevant framework.",
    customizationNotes: [
      "Include a compliance scorecard or maturity model visualization",
      "Add references to specific framework requirements (e.g., ISO 27001: A.12.1)",
      "Consider trend analysis if this is a recurring audit",
    ],
    tags: ["compliance", "audit", "risk", "framework"],
    order: 7,
  },

  {
    id: "research-findings-report",
    title: "Research Findings Report",
    description: "Summarize research findings with methodology, insights, and recommendations.",
    promptText: `Create a research findings report for the following study:

Research title: [STUDY TITLE]
Researcher/Team: [YOUR NAME/TEAM]
Date: [COMPLETION DATE]
Study type: [QUALITATIVE/QUANTITATIVE/MIXED-METHODS]

Research objective:
[PRIMARY RESEARCH QUESTION AND GOALS]

Methodology:
[RESEARCH METHODS AND SAMPLE SIZE]

Key findings:
[PRIMARY FINDINGS AND DISCOVERIES]

Supporting data:
[KEY DATA POINTS AND EVIDENCE]

Unexpected discoveries:
[SURPRISING OR INSIGHTFUL FINDINGS]

Limitations:
[STUDY LIMITATIONS AND CONSTRAINTS]

Recommendations:
[ACTIONABLE RECOMMENDATIONS BASED ON FINDINGS]

Next steps:
[SUGGESTED FOLLOW-UP RESEARCH OR ACTIONS]

Generate a comprehensive research report with:
1. Executive summary (one-page standalone summary)
2. Background and research objectives
3. Methodology section (transparent about approach)
4. Key findings with supporting evidence
5. Visual data representations (described in text)
6. Unexpected insights or anomalies
7. Limitations and constraints acknowledged
8. Actionable recommendations prioritized by impact
9. Suggestions for future research
10. Appendix with detailed data/quotes if applicable

Tone should be objective, evidence-based, and transparent about limitations.`,
    placeholders: [
      "STUDY TITLE",
      "YOUR NAME/TEAM",
      "COMPLETION DATE",
      "QUALITATIVE/QUANTITATIVE/MIXED-METHODS",
      "PRIMARY RESEARCH QUESTION AND GOALS",
      "RESEARCH METHODS AND SAMPLE SIZE",
      "PRIMARY FINDINGS AND DISCOVERIES",
      "KEY DATA POINTS AND EVIDENCE",
      "SURPRISING OR INSIGHTFUL FINDINGS",
      "STUDY LIMITATIONS AND CONSTRAINTS",
      "ACTIONABLE RECOMMENDATIONS BASED ON FINDINGS",
      "SUGGESTED FOLLOW-UP RESEARCH OR ACTIONS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "document-writing",
    categoryId: "reports",
    exampleOutput:
      "A structured research report with clear methodology, evidence-based findings, visual data descriptions, and actionable recommendations.",
    customizationNotes: [
      "Include participant quotes for qualitative research",
      "Add statistical significance notes for quantitative findings",
      "Consider creating an abstract for academic or publication purposes",
    ],
    tags: ["research", "findings", "data", "analysis"],
    order: 8,
  },

  // ============================================================================
  // PROPOSALS
  // ============================================================================

  {
    id: "project-proposal",
    title: "Project Proposal",
    description:
      "Persuade stakeholders to approve a project with clear objectives, scope, and ROI.",
    promptText: `Create a compelling project proposal for [PROJECT NAME].

Proposed by: [YOUR NAME/TEAM]
Date: [DATE]
Decision-maker: [APPROVER NAME]

The problem or opportunity:
[PROBLEM STATEMENT OR OPPORTUNITY DESCRIPTION]

Proposed solution:
[PROJECT DESCRIPTION AND APPROACH]

Project objectives:
[SMART OBJECTIVES THE PROJECT WILL ACHIEVE]

Scope of work:
[IN-SCOPE ITEMS AND DELIVERABLES]

Out of scope (explicitly excluded):
[OUT-OF-SCOPE ITEMS TO SET BOUNDARIES]

Timeline and phases:
[PROJECT TIMELINE WITH KEY MILESTONES]

Budget requirements:
[COST BREAKDOWN AND RESOURCES NEEDED]

ROI and benefits:
[EXPECTED RETURN ON INVESTMENT AND BENEFITS]

Risk assessment:
[POTENTIAL RISKS AND MITIGATION STRATEGIES]

Success criteria:
[MEASURABLE OUTCOMES THAT DEFINE SUCCESS]

Approval request:
[SPECIFIC ASK - BUDGET, HEADCOUNT, TIMELINE, ETC.]

Generate a persuasive project proposal with:
1. Executive summary (one page, decision-ready)
2. Problem statement with supporting data/evidence
3. Proposed solution with alternatives considered
4. Clear scope with in/out boundaries
5. Phased timeline with milestones
6. Budget breakdown with justification
7. ROI analysis with payback period
8. Risk register with mitigation plans
9. Success metrics and tracking approach
10. Clear call-to-action for approval

Tone should be confident yet realistic, acknowledging risks while demonstrating preparation.`,
    placeholders: [
      "PROJECT NAME",
      "YOUR NAME/TEAM",
      "DATE",
      "APPROVER NAME",
      "PROBLEM STATEMENT OR OPPORTUNITY DESCRIPTION",
      "PROJECT DESCRIPTION AND APPROACH",
      "SMART OBJECTIVES THE PROJECT WILL ACHIEVE",
      "IN-SCOPE ITEMS AND DELIVERABLES",
      "OUT-OF-SCOPE ITEMS TO SET BOUNDARIES",
      "PROJECT TIMELINE WITH KEY MILESTONES",
      "COST BREAKDOWN AND RESOURCES NEEDED",
      "EXPECTED RETURN ON INVESTMENT AND BENEFITS",
      "POTENTIAL RISKS AND MITIGATION STRATEGIES",
      "MEASURABLE OUTCOMES THAT DEFINE SUCCESS",
      "SPECIFIC ASK - BUDGET, HEADCOUNT, TIMELINE, ETC.",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "document-writing",
    categoryId: "proposals",
    exampleOutput:
      "A persuasive project proposal with clear problem statement, solution, scope, timeline, budget justification, ROI analysis, and explicit approval request.",
    customizationNotes: [
      'Include a "why now" section for timing justification',
      "Add stakeholder analysis if approval requires buy-in from multiple parties",
      "Consider adding a phased approach option for budget-constrained scenarios",
    ],
    tags: ["proposal", "project", "approval", "business-case"],
    order: 9,
  },

  {
    id: "business-case-proposal",
    title: "Business Case Proposal",
    description:
      "Build a comprehensive business case with financial justification and strategic alignment.",
    promptText: `Create a comprehensive business case for [INITIATIVE NAME].

Sponsor: [YOUR NAME/DEPARTMENT]
Date: [DATE]
Target audience: [DECISION-MAKERS]

Current situation (as-is):
[CURRENT STATE DESCRIPTION]

Desired future state (to-be):
[FUTURE STATE VISION]

Gap analysis:
[WHAT'S MISSING AND WHAT NEEDS TO CHANGE]

Strategic alignment:
[HOW THIS SUPPORTS COMPANY STRATEGY AND GOALS]

Investment required:
[CAPITAL AND OPERATING EXPENSE BREAKDOWN]

Financial analysis:
- One-time costs: [UPFRONT INVESTMENT]
- Ongoing costs: [ANNUAL OPERATING COSTS]
- Expected benefits: [REVENUE GROWTH OR COST SAVINGS]
- Payback period: [TIME TO BREAK-EVEN]
- NPV/IRR: [NET PRESENT VALUE OR IRR IF AVAILABLE]

Non-financial benefits:
[STRATEGIC, OPERATIONAL, OR CULTURAL BENEFITS]

Risk assessment:
[KEY RISKS WITH PROBABILITY AND IMPACT]

Implementation approach:
[HIGH-LEVEL IMPLEMENTATION PLAN]

Decision framework:
[OPTIONS CONSIDERED WITH PROS AND CONS]

Recommendation:
[CLEAR RECOMMENDATION WITH RATIONALE]

Generate a thorough business case with:
1. Executive summary (standalone decision document)
2. Strategic context and alignment
3. Problem/opportunity definition
4. Options analysis (including "do nothing")
5. Financial analysis with assumptions
6. Non-financial benefits and intangibles
7. Risk-adjusted ROI
8. Implementation roadmap
9. Success metrics and value realization plan
10. Clear recommendation with next steps

Tone should be objective and analytical, letting the numbers and strategy drive the conclusion.`,
    placeholders: [
      "INITIATIVE NAME",
      "YOUR NAME/DEPARTMENT",
      "DATE",
      "DECISION-MAKERS",
      "CURRENT STATE DESCRIPTION",
      "FUTURE STATE VISION",
      "WHAT IS MISSING AND WHAT NEEDS TO CHANGE",
      "HOW THIS SUPPORTS COMPANY STRATEGY AND GOALS",
      "CAPITAL AND OPERATING EXPENSE BREAKDOWN",
      "UPFRONT INVESTMENT",
      "ANNUAL OPERATING COSTS",
      "REVENUE GROWTH OR COST SAVINGS",
      "TIME TO BREAK-EVEN",
      "NET PRESENT VALUE OR IRR IF AVAILABLE",
      "STRATEGIC, OPERATIONAL, OR CULTURAL BENEFITS",
      "KEY RISKS WITH PROBABILITY AND IMPACT",
      "HIGH-LEVEL IMPLEMENTATION PLAN",
      "OPTIONS CONSIDERED WITH PROS AND CONS",
      "CLEAR RECOMMENDATION WITH RATIONALE",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "document-writing",
    categoryId: "proposals",
    exampleOutput:
      "A comprehensive business case with strategic analysis, financial modeling, options comparison, risk assessment, and a data-driven recommendation.",
    customizationNotes: [
      "Include sensitivity analysis for key assumptions",
      "Add scenario modeling (best/base/worst case) if uncertainty is high",
      "Consider creating a one-page summary slide for executive presentation",
    ],
    tags: ["business-case", "financial-justification", "strategy", "roi"],
    order: 10,
  },

  {
    id: "grant-proposal",
    title: "Grant Proposal",
    description:
      "Write a compelling grant proposal that aligns with funder priorities and demonstrates impact.",
    promptText: `Create a grant proposal for [FUNDING ORGANIZATION].

Project title: [PROJECT NAME]
Organization: [YOUR ORGANIZATION]
Applicant: [YOUR NAME]
Grant program: [SPECIFIC GRANT PROGRAM]
Funding requested: [AMOUNT]

Funder priorities and mission:
[FUNDER'S STATED PRIORITIES AND GOALS]

Project summary:
[BRIEF OVERVIEW OF THE PROJECT]

Problem statement:
[PROBLEM YOUR PROJECT WILL ADDRESS]

Project objectives:
[SMART OBJECTIVES THAT ALIGN WITH FUNDER PRIORITIES]

Methodology and approach:
[HOW YOU WILL ACHIEVE THE OBJECTIVES]

Target population or beneficiaries:
[WHO WILL BENEFIT AND HOW MANY]

Timeline and key milestones:
[PROJECT SCHEDULE]

Budget breakdown:
[DETAILED BUDGET WITH JUSTIFICATION]

Evaluation plan:
[HOW YOU WILL MEASURE SUCCESS AND IMPACT]

Organizational capacity:
[WHY YOUR ORGANIZATION IS QUALIFIED TO DELIVER]

Sustainability plan:
[HOW THE PROJECT WILL CONTINUE AFTER GRANT FUNDS END]

Generate a compelling grant proposal with:
1. Executive summary that captures attention
2. Clear alignment with funder priorities
3. Data-backed problem statement
4. Measurable objectives and outcomes
5. Detailed methodology with proven approach
6. Comprehensive budget with narrative justification
7. Evaluation framework with metrics
8. Evidence of organizational capacity
9. Sustainability and scaling plans
10. Powerful closing that reinforces impact

Tone should be passionate yet professional, data-driven, and donor-centric (focus on their impact).`,
    placeholders: [
      "FUNDING ORGANIZATION",
      "PROJECT NAME",
      "YOUR ORGANIZATION",
      "YOUR NAME",
      "SPECIFIC GRANT PROGRAM",
      "AMOUNT",
      "FUNDER STATED PRIORITIES AND GOALS",
      "BRIEF OVERVIEW OF THE PROJECT",
      "PROBLEM YOUR PROJECT WILL ADDRESS",
      "SMART OBJECTIVES THAT ALIGN WITH FUNDER PRIORITIES",
      "HOW YOU WILL ACHIEVE THE OBJECTIVES",
      "WHO WILL BENEFIT AND HOW MANY",
      "PROJECT SCHEDULE",
      "DETAILED BUDGET WITH JUSTIFICATION",
      "HOW YOU WILL MEASURE SUCCESS AND IMPACT",
      "WHY YOUR ORGANIZATION IS QUALIFIED TO DELIVER",
      "HOW THE PROJECT WILL CONTINUE AFTER GRANT FUNDS END",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "document-writing",
    categoryId: "proposals",
    exampleOutput:
      "A compelling grant proposal with strong funder alignment, clear objectives, detailed methodology, justified budget, and measurable impact plan.",
    customizationNotes: [
      "Research the funder previous grants to align with their preferences",
      "Include compelling stories or testimonials alongside data",
      "Add a partnerships section if collaborating with other organizations",
    ],
    tags: ["grant", "funding", "nonprofit", "impact"],
    order: 11,
  },

  {
    id: "partnership-proposal",
    title: "Partnership Proposal",
    description:
      "Propose a strategic partnership with mutual benefits and clear value proposition.",
    promptText: `Create a partnership proposal for [PARTNER COMPANY NAME].

From: [YOUR COMPANY]
To: [PARTNER COMPANY]
Date: [DATE]

Purpose of this proposal:
[WHY YOU'RE SEEKING THIS PARTNERSHIP]

About your company:
[BRIEF COMPANY BACKGROUND AND CREDENTIALS]

About the potential partner:
[WHAT YOU KNOW ABOUT THEM AND WHY THEY'RE A GOOD FIT]

Shared vision and values:
[COMMON GROUND AND ALIGNMENT]

Proposed partnership structure:
[HOW THE PARTNERSHIP WOULD WORK]

Value for [PARTNER COMPANY]:
[BENEFITS AND REASONS FOR THEM TO SAY YES]

Value for your company:
[BENEFITS YOU GAIN - BE TRANSPARENT]

Joint opportunities:
[MARKET OPPORTUNITIES YOU CAN PURSUE TOGETHER]

Resource commitments:
[WHAT EACH PARTY WOULD CONTRIBUTE]

Revenue/profit sharing (if applicable):
[HOW ECONOMIC VALUE WOULD BE SHARED]

Timeline and next steps:
[PROPOSED PATH FORWARD]

Generate a compelling partnership proposal with:
1. Executive summary
2. Strategic rationale for the partnership
3. Company backgrounds and complementary strengths
4. Specific partnership model and structure
5. Clear mutual benefits (win-win framing)
6. Market opportunity and competitive advantage
7. Resource commitments from both parties
8. Economic model (if revenue-sharing involved)
9. Governance and decision-making
10. Clear call-to-action and next steps

Tone should be collaborative, opportunity-focused, and respectful of their time and position.`,
    placeholders: [
      "PARTNER COMPANY NAME",
      "YOUR COMPANY",
      "DATE",
      "WHY YOU ARE SEEKING THIS PARTNERSHIP",
      "BRIEF COMPANY BACKGROUND AND CREDENTIALS",
      "WHAT YOU KNOW ABOUT THEM AND WHY THEY ARE A GOOD FIT",
      "COMMON GROUND AND ALIGNMENT",
      "HOW THE PARTNERSHIP WOULD WORK",
      "BENEFITS AND REASONS FOR THEM TO SAY YES",
      "BENEFITS YOU GAIN - BE TRANSPARENT",
      "MARKET OPPORTUNITIES YOU CAN PURSUE TOGETHER",
      "WHAT EACH PARTY WOULD CONTRIBUTE",
      "HOW ECONOMIC VALUE WOULD BE SHARED",
      "PROPOSED PATH FORWARD",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "document-writing",
    categoryId: "proposals",
    exampleOutput:
      "A strategic partnership proposal with clear mutual benefits, complementary strengths analysis, and a structured path forward.",
    customizationNotes: [
      "Include specific data about the partner from research to show you have done homework",
      'Add a "low-risk way to start" section to reduce commitment friction',
      "Consider a pilot proposal if a full partnership feels too aggressive",
    ],
    tags: ["partnership", "collaboration", "strategic-alliance"],
    order: 12,
  },

  {
    id: "rfp-response",
    title: "RFP Response Proposal",
    description: "Respond to a Request for Proposal with a compliant, winning submission.",
    promptText: `Generate an RFP response proposal for [CLIENT/ORGANIZATION NAME].

RFP number: [RFP IDENTIFICATION]
Due date: [DEADLINE]
Your company: [YOUR COMPANY]

RFP requirements summary:
[KEY REQUIREMENTS AND EVALUATION CRITERIA FROM THE RFP]

Your understanding of the need:
[DEMONSTRATE UNDERSTANDING OF THEIR PROBLEM AND CONTEXT]

Proposed solution:
[YOUR APPROACH TO ADDRESSING THEIR NEEDS]

Differentiators:
[WHAT SETS YOU APART FROM COMPETITORS]

Relevant experience:
[SIMILAR PROJECTS OR CLIENT REFERENCES]

Team qualifications:
[KEY TEAM MEMBERS WHO WOULD WORK ON THIS]

Implementation timeline:
[PROJECT SCHEDULE AND DELIVERY APPROACH]

Pricing:
[COST STRUCTURE AND PRICING MODEL]

Compliance checklist:
[RFP REQUIREMENTS YOU'RE MEETING]

Generate a compliant RFP response with:
1. Executive summary tailored to their priorities
2. Clear understanding of their needs and context
3. Solution approach directly addressing requirements
4. Proof of capability with relevant examples
5. Team qualifications and experience
6. Implementation methodology and timeline
7. Transparent pricing with value breakdown
8. Risk management approach
9. References and testimonials
10. Compliance matrix addressing all RFP requirements

Format should follow the RFP structure exactly, demonstrating attention to detail and compliance.`,
    placeholders: [
      "CLIENT/ORGANIZATION NAME",
      "RFP IDENTIFICATION",
      "DEADLINE",
      "YOUR COMPANY",
      "KEY REQUIREMENTS AND EVALUATION CRITERIA FROM THE RFP",
      "DEMONSTRATE UNDERSTANDING OF THEIR PROBLEM AND CONTEXT",
      "YOUR APPROACH TO ADDRESSING THEIR NEEDS",
      "WHAT SETS YOU APART FROM COMPETITORS",
      "SIMILAR PROJECTS OR CLIENT REFERENCES",
      "KEY TEAM MEMBERS WHO WOULD WORK ON THIS",
      "PROJECT SCHEDULE AND DELIVERY APPROACH",
      "COST STRUCTURE AND PRICING MODEL",
      "RFP REQUIREMENTS YOU ARE MEETING",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "document-writing",
    categoryId: "proposals",
    exampleOutput:
      "A professional RFP response that follows the required structure, addresses all requirements, demonstrates understanding, and highlights competitive advantages.",
    customizationNotes: [
      "Follow the RFP format exactly, even if it seems cumbersome",
      "Use their language and terminology from the RFP document",
      "Include a compliance checklist for easy evaluator verification",
    ],
    tags: ["rfp", "sales", "bid", "formal-proposal"],
    order: 13,
  },

  {
    id: "budget-proposal",
    title: "Budget Increase Proposal",
    description: "Justify a budget increase with clear needs, ROI, and alternative options.",
    promptText: `Create a budget increase proposal for [DEPARTMENT/PROJECT].

Current budget: [EXISTING BUDGET]
Requested increase: [ADDITIONAL AMOUNT REQUESTED]
New total budget: [TOTAL WITH INCREASE]
Period: [FISCAL PERIOD OR TIMEFRAME]

Budget owner: [YOUR NAME]
Approver: [DECISION-MAKER]

Why the increase is needed:
[REASONS FOR THE REQUEST - NEW INITIATIVES, COST OVERUNS, EXPANDED SCOPE, ETC.]

Budget allocation breakdown:
[HOW THE ADDITIONAL FUNDS WOULD BE SPENT]

ROI and impact:
[WHAT RETURN OR OUTCOMES THE INVESTMENT WILL DELIVER]

Consequences if not approved:
[IMPACT OF NOT RECEIVING THE ADDITIONAL BUDGET]

Alternatives considered:
[OTHER OPTIONS LIKE REDUCED SCOPE, DEFERRAL, ETC.]

Historical context:
[BUDGET PERFORMANCE AND JUSTIFICATION FOR TRUST]

Generate a budget increase proposal with:
1. Executive summary with bottom-line request
2. Clear justification for the increase
3. Detailed line-item breakdown
4. ROI analysis or outcome projections
5. Impact analysis (with and without increase)
6. Alternatives and trade-offs
7. Implementation timeline if approved
8. Monitoring and reporting approach
9. Risk factors and mitigation
10. Specific approval request

Tone should be data-driven, transparent, and respectful of budget constraints.`,
    placeholders: [
      "DEPARTMENT/PROJECT",
      "EXISTING BUDGET",
      "ADDITIONAL AMOUNT REQUESTED",
      "TOTAL WITH INCREASE",
      "FISCAL PERIOD OR TIMEFRAME",
      "YOUR NAME",
      "DECISION-MAKER",
      "REASONS FOR THE REQUEST - NEW INITIATIVES, COST OVERUNS, EXPANDED SCOPE, ETC.",
      "HOW THE ADDITIONAL FUNDS WOULD BE SPENT",
      "WHAT RETURN OR OUTCOMES THE INVESTMENT WILL DELIVER",
      "IMPACT OF NOT RECEIVING THE ADDITIONAL BUDGET",
      "OTHER OPTIONS LIKE REDUCED SCOPE, DEFERRAL, ETC.",
      "BUDGET PERFORMANCE AND JUSTIFICATION FOR TRUST",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "document-writing",
    categoryId: "proposals",
    exampleOutput:
      "A justified budget request with clear breakdown, ROI analysis, impact assessment, alternatives considered, and a specific approval ask.",
    customizationNotes: [
      "Include year-over-year comparisons for context",
      "Add industry benchmarks if available",
      "Consider a phased approach if the full amount is unlikely to be approved",
    ],
    tags: ["budget", "funding", "resource-request", "justification"],
    order: 14,
  },

  {
    id: "resource-request-proposal",
    title: "Resource Request Proposal",
    description: "Propose additional headcount, tools, or resources with business justification.",
    promptText: `Create a resource request proposal for [RESOURCE TYPE - HEADCOUNT/TOOLS/CONTRACTORS, ETC.].

Request type: [SPECIFY - HIRE, SOFTWARE LICENSE, EQUIPMENT, ETC.]
Quantity/Scope: [HOW MUCH OR HOW MANY]
Current state: [DESCRIBE CURRENT SITUATION]
Requested by: [YOUR NAME/TEAM]
Date: [DATE]

Business case for the request:
[WHY THIS RESOURCE IS NEEDED NOW]

Problem or limitation it addresses:
[CURRENT PAIN POINTS OR BOTTLENECKS]

Expected outcomes and benefits:
[WHAT SUCCESS LOOKS LIKE WITH THIS RESOURCE]

Cost breakdown:
[ONE-TIME AND ONGOING COSTS]

ROI analysis:
[FINANCIAL OR EFFICIENCY RETURN]

Implementation timeline:
[WHEN THE RESOURCE WOULD BE UP AND RUNNING]

Alternatives considered:
[OTHER OPTIONS YOU EVALUATED]

Risk of not approving:
[CONSEQUENCES OF MAINTAINING STATUS QUO]

Generate a resource request proposal with:
1. Clear request summary (what, when, how much)
2. Business case with data-driven justification
3. Current state and pain points
4. Expected outcomes and benefits
5. Cost analysis with breakdown
6. ROI or efficiency gains
7. Implementation timeline
8. Alternatives considered with rationale
9. Risk assessment (with and without)
10. Specific approval request

Tone should be practical and business-focused, not emotional or complaint-driven.`,
    placeholders: [
      "RESOURCE TYPE - HEADCOUNT/TOOLS/CONTRACTORS, ETC.",
      "SPECIFY - HIRE, SOFTWARE LICENSE, EQUIPMENT, ETC.",
      "HOW MUCH OR HOW MANY",
      "DESCRIBE CURRENT SITUATION",
      "YOUR NAME/TEAM",
      "DATE",
      "WHY THIS RESOURCE IS NEEDED NOW",
      "CURRENT PAIN POINTS OR BOTTLENECKS",
      "WHAT SUCCESS LOOKS LIKE WITH THIS RESOURCE",
      "ONE-TIME AND ONGOING COSTS",
      "FINANCIAL OR EFFICIENCY RETURN",
      "WHEN THE RESOURCE WOULD BE UP AND RUNNING",
      "OTHER OPTIONS YOU EVALUATED",
      "CONSEQUENCES OF MAINTAINING STATUS QUO",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "document-writing",
    categoryId: "proposals",
    exampleOutput:
      "A well-structured resource request with business justification, cost breakdown, ROI analysis, and clear outcomes.",
    customizationNotes: [
      "Include peer team benchmarks if available",
      "Add a pilot or trial option for tools/equipment",
      "Consider a temporary-to-permanent proposal for hiring",
    ],
    tags: ["resources", "headcount", "tools", "justification"],
    order: 15,
  },

  {
    id: "policy-change-proposal",
    title: "Policy Change Proposal",
    description:
      "Propose a policy update with rationale, impact analysis, and implementation plan.",
    promptText: `Create a policy change proposal for [POLICY NAME].

Current policy:
[EXISTING POLICY OR CURRENT PRACTICE]

Proposed change:
[NEW POLICY OR REVISION]

Proposed by: [YOUR NAME/DEPARTMENT]
Date: [DATE]
Effective date requested: [PROPOSED IMPLEMENTATION DATE]

Reason for the change:
[WHY THIS CHANGE IS NECESSARY]

Problem with current policy:
[ISSUES, GAPS, OR OUTDATED ASPECTS]

Benefits of the change:
[POSITIVE OUTCOMES FROM THE NEW POLICY]

Affected stakeholders:
[WHO WILL BE IMPACTED AND HOW]

Impact analysis:
- Operational impact: [OPERATIONAL CHANGES]
- Financial impact: [COST IMPLICATIONS]
- Cultural impact: [CULTURAL OR BEHAVIORAL EFFECTS]

Implementation plan:
[HOW THE CHANGE WOULD BE ROLLED OUT]

Communication plan:
[WHO NEEDS TO BE INFORMED AND HOW]

Risks and mitigation:
[POTENTIAL ISSUES AND HOW TO ADDRESS THEM]

Generate a policy change proposal with:
1. Executive summary of the change
2. Current vs. proposed policy comparison
3. Clear rationale and supporting data
4. Stakeholder impact analysis
5. Benefits and drawbacks assessment
6. Implementation roadmap with milestones
7. Communication and training plan
8. Risk assessment with mitigation
9. Measurement and review approach
10. Approval request with sign-off section

Tone should be objective, thoughtful, and change-management focused.`,
    placeholders: [
      "POLICY NAME",
      "EXISTING POLICY OR CURRENT PRACTICE",
      "NEW POLICY OR REVISION",
      "YOUR NAME/DEPARTMENT",
      "DATE",
      "PROPOSED IMPLEMENTATION DATE",
      "WHY THIS CHANGE IS NECESSARY",
      "ISSUES, GAPS, OR OUTDATED ASPECTS",
      "POSITIVE OUTCOMES FROM THE NEW POLICY",
      "WHO WILL BE IMPACTED AND HOW",
      "OPERATIONAL CHANGES",
      "COST IMPLICATIONS",
      "CULTURAL OR BEHAVIORAL EFFECTS",
      "HOW THE CHANGE WOULD BE ROLLED OUT",
      "WHO NEEDS TO BE INFORMED AND HOW",
      "POTENTIAL ISSUES AND HOW TO ADDRESS THEM",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "document-writing",
    categoryId: "proposals",
    exampleOutput:
      "A comprehensive policy proposal with clear before/after comparison, impact analysis, implementation plan, and change management considerations.",
    customizationNotes: [
      "Include legal/compliance review notes if applicable",
      "Add a FAQ section anticipating common questions",
      "Consider a phased rollout for significant changes",
    ],
    tags: ["policy", "change-management", "organizational-policy"],
    order: 16,
  },

  // ============================================================================
  // DOCUMENTATION
  // ============================================================================

  {
    id: "sop-document",
    title: "Standard Operating Procedure",
    description: "Create clear, step-by-step SOPs for consistent process execution.",
    promptText: `Create a Standard Operating Procedure (SOP) for [PROCESS NAME].

Process owner: [DEPARTMENT OR ROLE]
Document author: [YOUR NAME]
Last updated: [DATE]
Frequency: [HOW OFTEN THIS PROCESS IS PERFORMED]

Process purpose:
[WHY THIS PROCESS EXISTS AND WHAT IT ACHIEVES]

Scope and applicability:
[WHO AND WHAT THIS SOP APPLIES TO]

Prerequisites:
[WHAT MUST BE IN PLACE BEFORE STARTING]

Roles and responsibilities:
[WHO IS INVOLVED AND WHAT THEY DO]

Process steps:
[STEP-BY-STEP INSTRUCTIONS]

Required tools and resources:
[EQUIPMENT, SOFTWARE, OR RESOURCES NEEDED]

Quality checkpoints:
[HOW TO VERIFY EACH STEP IS DONE CORRECTLY]

Common errors and troubleshooting:
[TYPICAL MISTAKES AND HOW TO FIX THEM]

Related documents:
[LINKS TO RELATED PROCESSES OR RESOURCES]

Generate a comprehensive SOP with:
1. Header with document control information
2. Purpose and scope statement
3. Roles and responsibilities matrix
4. Prerequisites and required resources
5. Step-by-step procedure with clear numbering
6. Screenshots or visual descriptions (text-based)
7. Decision points and branching logic
8. Quality checks and acceptance criteria
9. Troubleshooting guide for common issues
10. Version history and approval section

Format should be clear enough for a new employee to follow without assistance.`,
    placeholders: [
      "PROCESS NAME",
      "DEPARTMENT OR ROLE",
      "YOUR NAME",
      "DATE",
      "HOW OFTEN THIS PROCESS IS PERFORMED",
      "WHY THIS PROCESS EXISTS AND WHAT IT ACHIEVES",
      "WHO AND WHAT THIS SOP APPLIES TO",
      "WHAT MUST BE IN PLACE BEFORE STARTING",
      "WHO IS INVOLVED AND WHAT THEY DO",
      "STEP-BY-STEP INSTRUCTIONS",
      "EQUIPMENT, SOFTWARE, OR RESOURCES NEEDED",
      "HOW TO VERIFY EACH STEP IS DONE CORRECTLY",
      "TYPICAL MISTAKES AND HOW TO FIX THEM",
      "LINKS TO RELATED PROCESSES OR RESOURCES",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "document-writing",
    categoryId: "documentation",
    exampleOutput:
      "A clear, numbered SOP document with roles defined, prerequisites listed, step-by-step instructions, quality checkpoints, and troubleshooting guidance.",
    customizationNotes: [
      "Add estimated time for completion",
      "Include safety warnings or critical cautions",
      "Consider adding a flowchart description for complex processes",
    ],
    tags: ["sop", "process", "procedures", "documentation"],
    order: 17,
  },

  {
    id: "process-document",
    title: "Process Documentation",
    description: "Document a business process with inputs, outputs, and stakeholder interactions.",
    promptText: `Create comprehensive process documentation for [PROCESS NAME].

Process owner: [OWNER ROLE OR NAME]
Document author: [YOUR NAME]
Date: [DATE]
Process type: [OPERATIONAL/MANAGEMENT/SUPPORT, ETC.]

Process overview:
[HIGH-LEVEL DESCRIPTION OF THE PROCESS]

Process objectives:
[WHAT THIS PROCESS ACHIEVES]

Process trigger:
[WHAT INITIATES OR STARTS THIS PROCESS]

Inputs and inputs sources:
[WHAT GOES INTO THE PROCESS AND WHERE IT COMES FROM]

Process steps and flow:
[SEQUENTIAL STEPS WITH DECISION POINTS]

Outputs and deliverables:
[WHAT THE PROCESS PRODUCES]

Stakeholders and interactions:
[WHO IS INVOLVED AND HOW THEY INTERACT]

Systems and tools used:
[TECHNOLOGY OR TOOLS INVOLVED]

Performance metrics:
[HOW PROCESS SUCCESS IS MEASURED]

Process governance:
[WHO OWNS, APPROVES, AND REVIEWS THE PROCESS]

Generate detailed process documentation with:
1. Process summary and purpose
2. Process map or flowchart description
3. Input/output specification
4. Step-by-step process flow
5. Swimlane view (who does what)
6. System dependencies and integrations
7. Performance metrics and SLAs
8. Exception handling and escalation
9. Governance and ownership
10. Related processes and dependencies

The documentation should be detailed enough for process improvement and training purposes.`,
    placeholders: [
      "PROCESS NAME",
      "OWNER ROLE OR NAME",
      "YOUR NAME",
      "DATE",
      "OPERATIONAL/MANAGEMENT/SUPPORT, ETC.",
      "HIGH-LEVEL DESCRIPTION OF THE PROCESS",
      "WHAT THIS PROCESS ACHIEVES",
      "WHAT INITIATES OR STARTS THIS PROCESS",
      "WHAT GOES INTO THE PROCESS AND WHERE IT COMES FROM",
      "SEQUENTIAL STEPS WITH DECISION POINTS",
      "WHAT THE PROCESS PRODUCES",
      "WHO IS INVOLVED AND HOW THEY INTERACT",
      "TECHNOLOGY OR TOOLS INVOLVED",
      "HOW PROCESS SUCCESS IS MEASURED",
      "WHO OWNS, APPROVES, AND REVIEWS THE PROCESS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "document-writing",
    categoryId: "documentation",
    exampleOutput:
      "Detailed process documentation with flow description, input/output specification, stakeholder interactions, and performance metrics.",
    customizationNotes: [
      "Add cycle time or throughput data if available",
      "Include process variations or exceptions",
      "Consider adding a RACI matrix for clarity",
    ],
    tags: ["process", "documentation", "workflow", "business-process"],
    order: 18,
  },

  {
    id: "knowledge-base-article",
    title: "Knowledge Base Article",
    description: "Write a self-service knowledge base article for common questions and issues.",
    promptText: `Create a knowledge base article for [TOPIC/TITLE].

Category: [KNOWLEDGE BASE CATEGORY]
Target audience: [WHO WILL USE THIS ARTICLE]
Author: [YOUR NAME]
Last updated: [DATE]

Problem or question:
[WHAT ISSUE OR QUESTION THIS ADDRESSES]

Symptoms or context:
[WHEN THIS ISSUE OCCURS OR CONTEXT FOR THE QUESTION]

Root cause (if troubleshooting):
[WHY THE ISSUE HAPPENS]

Solution or answer:
[STEP-BY-STEP SOLUTION OR CLEAR ANSWER]

Prevention tips:
[HOW TO AVOID THIS ISSUE IN THE FUTURE]

Related articles:
[LINKS TO RELATED KNOWLEDGE BASE CONTENT]

Additional resources:
[EXTERNAL LINKS OR FURTHER READING]

Generate a user-friendly knowledge base article with:
1. Clear, searchable title
2. Brief summary or abstract
3. Problem description in user's language
4. Prerequisites or conditions
5. Step-by-step solution with numbered steps
6. Screenshots or visual descriptions (text-based)
7. Tips and warnings where relevant
8. Troubleshooting section if applicable
9. Related articles cross-references
10. Metadata (tags, category, difficulty)

Tone should be helpful, jargon-free, and empowering for self-service resolution.`,
    placeholders: [
      "TOPIC/TITLE",
      "KNOWLEDGE BASE CATEGORY",
      "WHO WILL USE THIS ARTICLE",
      "YOUR NAME",
      "DATE",
      "WHAT ISSUE OR QUESTION THIS ADDRESSES",
      "WHEN THIS ISSUE OCCURS OR CONTEXT FOR THE QUESTION",
      "WHY THE ISSUE HAPPENS",
      "STEP-BY-STEP SOLUTION OR CLEAR ANSWER",
      "HOW TO AVOID THIS ISSUE IN THE FUTURE",
      "LINKS TO RELATED KNOWLEDGE BASE CONTENT",
      "EXTERNAL LINKS OR FURTHER READING",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "document-writing",
    categoryId: "documentation",
    exampleOutput:
      "A clear knowledge base article with problem description, step-by-step solution, prevention tips, and related article links.",
    customizationNotes: [
      "Include estimated time to resolution",
      'Add a "quick fix" section before detailed steps',
      "Use the user language and terminology, not technical jargon",
    ],
    tags: ["knowledge-base", "self-service", "help-article", "documentation"],
    order: 19,
  },

  {
    id: "faq-document",
    title: "FAQ Document",
    description: "Create comprehensive FAQs addressing common questions and concerns.",
    promptText: `Generate a comprehensive FAQ document for [SUBJECT/PRODUCT/SERVICE].

Document purpose: [WHAT THIS FAQ COVERS]
Target audience: [WHO WILL READ THIS]
Author: [YOUR NAME]
Last updated: [DATE]

Most common questions received:
[LIST OF FREQUENTLY ASKED QUESTIONS]

Subject matter context:
[RELEVANT BACKGROUND INFORMATION]

For each FAQ, provide:
- Clear question in user's language
- Concise answer (2-3 sentences typically)
- Additional details or context if needed
- Related links or references
- Escalation path if the FAQ doesn't solve the issue

Generate an FAQ document with:
1. Introduction explaining what's covered
2. Top 5-10 most frequently asked questions featured prominently
3. Categories or topic groupings for easier navigation
4. Clear, jargon-free answers
5. Visual cues for important information
6. Related question links
7. Contact or escalation information
8. Search-friendly question phrasing
9. Last updated date
10. Feedback mechanism for new questions

Format should be scannable with clear headings and easy-to-find answers.`,
    placeholders: [
      "SUBJECT/PRODUCT/SERVICE",
      "WHAT THIS FAQ COVERS",
      "WHO WILL READ THIS",
      "YOUR NAME",
      "DATE",
      "LIST OF FREQUENTLY ASKED QUESTIONS",
      "RELEVANT BACKGROUND INFORMATION",
    ],
    bestTool: "chatgpt",
    difficulty: "beginner",
    domainId: "document-writing",
    categoryId: "documentation",
    exampleOutput:
      "A well-organized FAQ document with categorized questions, clear concise answers, related links, and escalation information.",
    customizationNotes: [
      "Include questions from your support ticket analysis",
      'Add a "new" or "updated" badge for recent additions',
      "Consider adding a search bar description for web deployment",
    ],
    tags: ["faq", "questions", "self-service", "documentation"],
    order: 20,
  },

  {
    id: "user-guide-document",
    title: "User Guide",
    description: "Write comprehensive user documentation for products, software, or services.",
    promptText: `Create a user guide for [PRODUCT/SERVICE NAME].

Product/service: [DESCRIPTION]
Version: [VERSION NUMBER]
Target audience: [PRIMARY USER TYPE]
Author: [YOUR NAME]
Publication date: [DATE]

User personas and skill levels:
[WHO WILL USE THIS AND THEIR EXPERTISE LEVEL]

Getting started:
[ONBOARDING AND FIRST-TIME USE INFORMATION]

Core features and functions:
[MAIN CAPABILITIES AND HOW TO USE THEM]

Common tasks and workflows:
[TYPICAL USER ACTIVITIES STEP-BY-STEP]

Advanced features:
[SOPHISTICATED FUNCTIONS FOR POWER USERS]

Tips and best practices:
[RECOMMENDATIONS FOR OPTIMAL USE]

Troubleshooting:
[COMMON ISSUES AND SOLUTIONS]

Glossary:
[KEY TERMS AND DEFINITIONS]

Generate a comprehensive user guide with:
1. Welcome and introduction
2. System requirements or prerequisites
3. Getting started tutorial
4. Feature documentation organized by user goal
5. Step-by-step task guides with visuals (described)
6. Tips, tricks, and power user features
7. Troubleshooting common issues
8. FAQ section
9. Keyboard shortcuts or quick reference
10. Support and additional resources

Tone should be encouraging, clear, and organized around user goals rather than technical architecture.`,
    placeholders: [
      "PRODUCT/SERVICE NAME",
      "DESCRIPTION",
      "VERSION NUMBER",
      "PRIMARY USER TYPE",
      "YOUR NAME",
      "DATE",
      "WHO WILL USE THIS AND THEIR EXPERTISE LEVEL",
      "ONBOARDING AND FIRST-TIME USE INFORMATION",
      "MAIN CAPABILITIES AND HOW TO USE THEM",
      "TYPICAL USER ACTIVITIES STEP-BY-STEP",
      "SOPHISTICATED FUNCTIONS FOR POWER USERS",
      "RECOMMENDATIONS FOR OPTIMAL USE",
      "COMMON ISSUES AND SOLUTIONS",
      "KEY TERMS AND DEFINITIONS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "document-writing",
    categoryId: "documentation",
    exampleOutput:
      "A comprehensive user guide organized by user goals, with getting started section, feature documentation, task guides, and troubleshooting.",
    customizationNotes: [
      "Include use cases or scenarios for context",
      'Add a "whats new" section for version updates',
      "Consider different guides for different user skill levels",
    ],
    tags: ["user-guide", "manual", "documentation", "how-to"],
    order: 21,
  },

  {
    id: "onboarding-guide",
    title: "Onboarding Guide",
    description: "Create a comprehensive onboarding guide for new employees or users.",
    promptText: `Create an onboarding guide for [ROLE/USER TYPE].

Role/Position: [JOB TITLE OR USER TYPE]
Department/Team: [TEAM NAME]
Duration: [ONBOARDING PERIOD - 30/60/90 DAYS]
Author: [YOUR NAME]
Last updated: [DATE]

Role overview:
[WHAT THIS ROLE DOES AND ITS IMPORTANCE]

First week priorities:
[CRITICAL THINGS TO ACCOMPLISH IMMEDIATELY]

Day 1 checklist:
[ESSENTIAL FIRST-DAY ACTIVITIES]

Week 1 goals:
[OBJECTIVES FOR THE FIRST WEEK]

First month milestones:
[KEY ACHIEVEMENTS BY DAY 30]

Tools and systems access:
[WHAT THEY NEED TO BE SET UP WITH]

Key contacts and stakeholders:
[IMPORTANT PEOPLE TO KNOW]

Training and resources:
[LEARNING MATERIALS AND DOCUMENTS]

Common pitfalls to avoid:
[TYPICAL MISTAKES NEW PEOPLE MAKE]

Success criteria:
[WHAT SUCCESSFUL ONBOARDING LOOKS LIKE]

Generate a comprehensive onboarding guide with:
1. Welcome message setting expectations
2. Role context and team fit
3. Day 1, week 1, month 1 checklist
4. Account setup and access procedures
5. Key stakeholder introduction list
6. Training curriculum with timeline
7. Self-guided learning resources
8. Social integration activities
9. First project or assignment overview
10. Check-in schedule with manager/mentor

Tone should be welcoming, structured, and confidence-building for the new person.`,
    placeholders: [
      "JOB TITLE OR USER TYPE",
      "TEAM NAME",
      "ONBOARDING PERIOD - 30/60/90 DAYS",
      "YOUR NAME",
      "DATE",
      "WHAT THIS ROLE DOES AND ITS IMPORTANCE",
      "CRITICAL THINGS TO ACCOMPLISH IMMEDIATELY",
      "ESSENTIAL FIRST-DAY ACTIVITIES",
      "OBJECTIVES FOR THE FIRST WEEK",
      "KEY ACHIEVEMENTS BY DAY 30",
      "WHAT THEY NEED TO BE SET UP WITH",
      "IMPORTANT PEOPLE TO KNOW",
      "LEARNING MATERIALS AND DOCUMENTS",
      "TYPICAL MISTAKES NEW PEOPLE MAKE",
      "WHAT SUCCESSFUL ONBOARDING LOOKS LIKE",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "document-writing",
    categoryId: "documentation",
    exampleOutput:
      "A welcoming onboarding guide with day-by-day checklists, training resources, key contacts, and clear success milestones.",
    customizationNotes: [
      "Include a buddy or mentor system description",
      "Add team culture and norms information",
      "Consider a 30-60-90 day plan format for performance-focused onboarding",
    ],
    tags: ["onboarding", "training", "new-employee", "orientation"],
    order: 22,
  },

  {
    id: "playbook-document",
    title: "Playbook Document",
    description: "Document a repeatable playbook for common scenarios or situations.",
    promptText: `Create a playbook for [SCENARIO OR SITUATION].

Playbook name: [DESCRIPTIVE TITLE]
When to use this playbook: [TRIGGER CONDITIONS]
Owner: [TEAM OR ROLE RESPONSIBLE]
Last updated: [DATE]

Scenario description:
[WHAT SITUATION THIS PLAYBOOK ADDRESSES]

Success criteria:
[WHAT SUCCESSFUL OUTCOMES LOOK LIKE]

Preconditions:
[WHAT MUST BE TRUE BEFORE USING THIS PLAYBOOK]

Warning signs or triggers:
[INDICATORS THAT THIS PLAYBOOK IS NEEDED]

Step-by-step play:
[SEQUENTIAL ACTIONS TO TAKE]

Decision points:
[KEY DECISIONS AND HOW TO MAKE THEM]

Roles and responsibilities:
[WHO DOES WHAT IN THE PLAYBOOK]

Tools and resources needed:
[REQUIRED SYSTEMS OR RESOURCES]

Common pitfalls:
[MISTAKES TO AVOID]

Escalation path:
[WHOM TO CONTACT IF STUCK OR IF THINGS GO WRONG]

Post-playbook review:
[WHAT TO DO AFTER THE SCENARIO IS RESOLVED]

Generate a tactical playbook with:
1. Clear trigger conditions
2. Objective and success criteria
3. Prerequisites and preparation
4. Numbered play steps (like a sports playbook)
5. Decision trees or branching logic
6. Communication templates (who to notify)
7. Timeline expectations
8. Escalation procedures
9. Post-action review requirements
10. Continuous improvement feedback loop

Format should be actionable enough to use in real-time during the actual scenario.`,
    placeholders: [
      "SCENARIO OR SITUATION",
      "DESCRIPTIVE TITLE",
      "TRIGGER CONDITIONS",
      "TEAM OR ROLE RESPONSIBLE",
      "DATE",
      "WHAT SITUATION THIS PLAYBOOK ADDRESSES",
      "WHAT SUCCESSFUL OUTCOMES LOOK LIKE",
      "WHAT MUST BE TRUE BEFORE USING THIS PLAYBOOK",
      "INDICATORS THAT THIS PLAYBOOK IS NEEDED",
      "SEQUENTIAL ACTIONS TO TAKE",
      "KEY DECISIONS AND HOW TO MAKE THEM",
      "WHO DOES WHAT IN THE PLAYBOOK",
      "REQUIRED SYSTEMS OR RESOURCES",
      "MISTAKES TO AVOID",
      "WHOM TO CONTACT IF STUCK OR IF THINGS GO WRONG",
      "WHAT TO DO AFTER THE SCENARIO IS RESOLVED",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "document-writing",
    categoryId: "documentation",
    exampleOutput:
      "A tactical playbook with clear triggers, step-by-step actions, decision points, communication templates, and escalation paths.",
    customizationNotes: [
      "Include example scenarios or case studies",
      "Add time estimates for each step",
      "Consider creating different playbooks for different severity levels",
    ],
    tags: ["playbook", "runbook", "procedures", "response-plan"],
    order: 23,
  },

  {
    id: "handover-document",
    title: "Handover Documentation",
    description: "Create comprehensive handover notes for seamless transitions.",
    promptText: `Create a handover document for [ROLE/PROJECT/RESPONSIBILITY].

Handover from: [YOUR NAME]
Handover to: [NAME OF PERSON TAKING OVER]
Effective date: [DATE]
Type: [ROLE HANDOVER / PROJECT HANDOVER / DEPARTURE HANDOVER]

Overview:
[BRIEF DESCRIPTION OF WHAT'S BEING HANDED OVER]

Current status and priorities:
[WHAT'S ACTIVE AND URGENT]

Outstanding tasks and deadlines:
[PENDING WORK WITH DUE DATES]

Key stakeholders and relationships:
[IMPORTANT PEOPLE AND YOUR RELATIONSHIP WITH THEM]

Access and credentials:
[SYSTEMS, ACCOUNTS, OR PHYSICAL ASSETS]

Critical knowledge and context:
[INFORMATION THAT'S NOT DOCUMENTED ELSEWHERE]

In-progress items:
[WORK CURRENTLY IN FLIGHT]

Upcoming commitments:
[FUTURE OBLIGATIONS OR DELIVERABLES]

Risks and issues:
[POTENTIAL PROBLEMS THE REPLACEMENT SHOULD KNOW]

Support availability:
[YOUR AVAILABILITY FOR QUESTIONS POST-HANDOVER]

Generate a comprehensive handover document with:
1. Executive summary of what's being handed over
2. Current status (red, yellow, green items)
3. Outstanding commitments with deadlines
4. Key stakeholder map and relationship notes
5. Access credentials and systems
6. Institutional knowledge (unwritten rules, history)
7. In-progress work with status
8. Upcoming calendar and commitments
9. Risks, issues, and watch-outs
10. Availability for questions and support

Tone should be thorough, organized, and considerate of the person stepping in.`,
    placeholders: [
      "ROLE/PROJECT/RESPONSIBILITY",
      "YOUR NAME",
      "NAME OF PERSON TAKING OVER",
      "DATE",
      "ROLE HANDOVER / PROJECT HANDOVER / DEPARTURE HANDOVER",
      "BRIEF DESCRIPTION OF WHAT IS BEING HANDED OVER",
      "WHAT IS ACTIVE AND URGENT",
      "PENDING WORK WITH DUE DATES",
      "IMPORTANT PEOPLE AND YOUR RELATIONSHIP WITH THEM",
      "SYSTEMS, ACCOUNTS, OR PHYSICAL ASSETS",
      "INFORMATION THAT IS NOT DOCUMENTED ELSEWHERE",
      "WORK CURRENTLY IN FLIGHT",
      "FUTURE OBLIGATIONS OR DELIVERABLES",
      "POTENTIAL PROBLEMS THE REPLACEMENT SHOULD KNOW",
      "YOUR AVAILABILITY FOR QUESTIONS POST-HANDOVER",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "document-writing",
    categoryId: "documentation",
    exampleOutput:
      "A thorough handover document with status overview, outstanding tasks, stakeholder map, access information, and institutional knowledge.",
    customizationNotes: [
      "Include tribal knowledge or unwritten rules",
      "Add personal notes about working styles of key stakeholders",
      'Consider including "lessons learned" from your time in the role',
    ],
    tags: ["handover", "transition", "succession", "documentation"],
    order: 24,
  },

  // ============================================================================
  // EXECUTIVE SUMMARIES
  // ============================================================================

  {
    id: "executive-summary-one-pager",
    title: "Executive One-Pager",
    description: "Summarize complex information into a single executive-ready page.",
    promptText: `Create an executive one-pager for [SUBJECT/TOPIC].

Document type: [REPORT/PROPOSAL/PROJECT/STRATEGY]
Author: [YOUR NAME]
Date: [DATE]
Audience: [EXECUTIVES OR DECISION-MAKERS]

Key information to summarize:
[MAIN CONTENT, DATA, OR REPORT TO SUMMARIZE]

Purpose of this one-pager:
[WHAT DECISION OR ACTION IT SHOULD INFORM]

Most critical insights:
[THE 3-5 MOST IMPORTANT POINTS]

Recommendation or ask:
[WHAT YOU WANT EXECUTIVES TO DO OR DECIDE]

Supporting data:
[KEY METRICS OR EVIDENCE]

Risks or concerns:
[POTENTIAL ISSUES EXECUTIVES SHOULD KNOW]

Generate a concise executive one-pager with:
1. Compelling headline and summary (3-4 sentences)
2. Current situation or context (brief)
3. Key insights or findings (bullet points)
4. Critical data or metrics (only what executives need)
5. Clear recommendation or call to action
6. Risks or considerations
7. Resource requirements (if applicable)
8. Timeline or next steps
9. Contact for questions

Format must be scannable in under 2 minutes. Use visual hierarchy, bullets, and bold text for key points.`,
    placeholders: [
      "SUBJECT/TOPIC",
      "REPORT/PROPOSAL/PROJECT/STRATEGY",
      "YOUR NAME",
      "DATE",
      "EXECUTIVES OR DECISION-MAKERS",
      "MAIN CONTENT, DATA, OR REPORT TO SUMMARIZE",
      "WHAT DECISION OR ACTION IT SHOULD INFORM",
      "THE 3-5 MOST IMPORTANT POINTS",
      "WHAT YOU WANT EXECUTIVES TO DO OR DECIDE",
      "KEY METRICS OR EVIDENCE",
      "POTENTIAL ISSUES EXECUTIVES SHOULD KNOW",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "document-writing",
    categoryId: "executive-summaries",
    exampleOutput:
      "A scannable one-page summary with clear headline, key insights, supporting data, recommendation, and next steps.",
    customizationNotes: [
      "Lead with the conclusion or recommendation (inverted pyramid)",
      "Use executive-friendly language (business outcomes, not technical details)",
      'Include a "questions to ask" section if presenting in a meeting',
    ],
    tags: ["executive-summary", "one-pager", "leadership", "briefing"],
    order: 25,
  },

  {
    id: "board-update-summary",
    title: "Board Update Summary",
    description: "Prepare a concise board update with strategic highlights and key metrics.",
    promptText: `Create a board update summary for [COMPANY/DEPARTMENT].

Reporting period: [MONTH/QUARTER/YEAR]
Prepared by: [YOUR NAME AND ROLE]
Board meeting: [MEETING DATE]

Strategic highlights:
[MAJOR ACHIEVEMENTS OR MILESTONES]

Key performance indicators:
[CURRENT MONTH vs. TARGET vs. PRIOR PERIOD]

Financial summary:
[REVENUE, PROFIT, BURN RATE, OR OTHER METRICS]

Major risks or issues:
[SIGNIFICANT CONCERNS REQUIRING BOARD ATTENTION]

Strategic decisions needed:
[DECISIONS REQUESTED FROM THE BOARD]

Leadership and team updates:
[EXECUTIVE HIRES, CHANGES, OR TEAM NEWS]

Market and competitive developments:
[EXTERNAL FACTORS AFFECTING THE BUSINESS]

Outlook and priorities:
[WHAT'S COMING IN THE NEXT PERIOD]

Generate a board update summary with:
1. Executive summary (5-7 bullets on what matters most)
2. KPI dashboard with trends and variance analysis
3. Strategic progress against annual goals
4. Financial highlights with narrative context
5. Risk register with mitigation status
6. Specific decisions or approvals requested
7. Market and competitive context
8. Leadership or organizational updates
9. Forward-looking priorities and forecasts
10. Board discussion questions

Tone should be strategic, transparent, and board-level (not operational details).`,
    placeholders: [
      "COMPANY/DEPARTMENT",
      "MONTH/QUARTER/YEAR",
      "YOUR NAME AND ROLE",
      "MEETING DATE",
      "MAJOR ACHIEVEMENTS OR MILESTONES",
      "CURRENT MONTH vs. TARGET vs. PRIOR PERIOD",
      "REVENUE, PROFIT, BURN RATE, OR OTHER METRICS",
      "SIGNIFICANT CONCERNS REQUIRING BOARD ATTENTION",
      "DECISIONS REQUESTED FROM THE BOARD",
      "EXECUTIVE HIRES, CHANGES, OR TEAM NEWS",
      "EXTERNAL FACTORS AFFECTING THE BUSINESS",
      "WHAT IS COMING IN THE NEXT PERIOD",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "document-writing",
    categoryId: "executive-summaries",
    exampleOutput:
      "A strategic board update with KPI trends, strategic highlights, risk assessment, decisions requested, and forward-looking priorities.",
    customizationNotes: [
      "Include year-over-year comparisons for context",
      "Add visual format descriptions for slide deck creation",
      'Consider including a "red/yellow/green" health indicator',
    ],
    tags: ["board", "governance", "strategic-update", "leadership"],
    order: 26,
  },

  {
    id: "investor-update-summary",
    title: "Investor Update Summary",
    description: "Craft an engaging investor update with progress, metrics, and asks.",
    promptText: `Create an investor update summary for [COMPANY NAME].

Reporting period: [MONTH/QUARTER]
Prepared by: [FOUNDER/CEO NAME]
Date: [DATE]

🚀 Highlights (what makes you proud):
[MAJOR WINS AND MILESTONES]

📊 Key metrics:
[GROWTH METRICS, REVENUE, USERS, ENGAGEMENT, ETC.]

💼 Business progress:
[CUSTOMER WINS, PARTNERSHIPS, PRODUCT LAUNCHES]

🧗 Challenges faced (be transparent):
[SETBACKS, LEARNINGS, OR STRUGGLES]

📈 Financials:
[REVENUE, BURN, RUNWAY, UNIT ECONOMICS]

🎯 Focus for next period:
[IMMEDIATE PRIORITIES AND INITIATIVES]

🙏 Requests from investors:
[INTRODUCTIONS, ADVICE, OR OTHER ASK]

💡 Team updates:
[HIRING, ROLES, OR CULTURE HIGHLIGHTS]

Generate an engaging investor update with:
1. Brief, enthusiastic opening from founder
2. 3-5 key highlights (major wins)
3. Metrics table with period-over-period comparison
4. Business updates and customer stories
5. Honest challenges discussion (transparency builds trust)
6. Financial snapshot with runway context
7. Upcoming priorities and milestones
8. Specific, reasonable asks from investors
9. Team growth and culture notes
10. Thank you and appreciation

Tone should be authentic, transparent, and metrics-driven. Celebrate wins but acknowledge challenges honestly.`,
    placeholders: [
      "COMPANY NAME",
      "MONTH/QUARTER",
      "FOUNDER/CEO NAME",
      "DATE",
      "MAJOR WINS AND MILESTONES",
      "GROWTH METRICS, REVENUE, USERS, ENGAGEMENT, ETC.",
      "CUSTOMER WINS, PARTNERSHIPS, PRODUCT LAUNCHES",
      "SETBACKS, LEARNINGS, OR STRUGGLES",
      "REVENUE, BURN, RUNWAY, UNIT ECONOMICS",
      "IMMEDIATE PRIORITIES AND INITIATIVES",
      "INTRODUCTIONS, ADVICE, OR OTHER ASK",
      "HIRING, ROLES, OR CULTURE HIGHLIGHTS",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "document-writing",
    categoryId: "executive-summaries",
    exampleOutput:
      "An engaging investor update with highlights, metrics table, business progress, honest challenges, financial snapshot, and specific requests.",
    customizationNotes: [
      "Include a customer quote or testimonial for social proof",
      "Add a photo or visual element description for engagement",
      'Consider a "help needed" section for warm intros',
    ],
    tags: ["investors", "startup", "update", "fundraising"],
    order: 27,
  },

  {
    id: "strategy-summary",
    title: "Strategy Summary",
    description: "Condense a strategic plan into an accessible executive summary.",
    promptText: `Create a strategy summary for [STRATEGIC INITIATIVE/PLAN].

Strategy name: [STRATEGY TITLE]
Time horizon: [TIMEFRAME - 1 YEAR/3 YEARS/5 YEARS]
Owner: [LEADER OR DEPARTMENT]
Date: [DATE]

Current situation:
[WHERE WE ARE NOW]

Vision for the future:
[WHERE WE WANT TO BE]

Strategic pillars or themes:
[KEY AREAS OF FOCUS]

Strategic objectives:
[MAJOR GOALS AND INITIATIVES]

Resource requirements:
[INVESTMENT NEEDED TO EXECUTE]

Key risks and mitigations:
[POTENTIAL OBSTACLES AND PLANS TO ADDRESS THEM]

Success metrics:
[HOW WE WILL MEASURE PROGRESS]

Generate a concise strategy summary with:
1. Vision statement (inspiring future state)
2. Strategic context (why this strategy now)
3. Current situation assessment
4. 3-5 strategic pillars or themes
5. Key objectives under each pillar
6. Competitive advantage or differentiation
7. Resource requirements and trade-offs
8. Risk assessment with mitigation
9. Success metrics and milestones
10. Execution roadmap at a glance

Format should be strategic and vision-focused, not operational. Executives should grasp the direction in 5 minutes.`,
    placeholders: [
      "STRATEGIC INITIATIVE/PLAN",
      "STRATEGY TITLE",
      "TIMEFRAME - 1 YEAR/3 YEARS/5 YEARS",
      "LEADER OR DEPARTMENT",
      "DATE",
      "WHERE WE ARE NOW",
      "WHERE WE WANT TO BE",
      "KEY AREAS OF FOCUS",
      "MAJOR GOALS AND INITIATIVES",
      "INVESTMENT NEEDED TO EXECUTE",
      "POTENTIAL OBSTACLES AND PLANS TO ADDRESS THEM",
      "HOW WE WILL MEASURE PROGRESS",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "document-writing",
    categoryId: "executive-summaries",
    exampleOutput:
      "A clear strategy summary with vision, strategic pillars, key objectives, resource requirements, and success metrics.",
    customizationNotes: [
      'Include a "why now" section for timing justification',
      "Add strategic choices or trade-offs made (what you said no to)",
      "Consider a strategy map visualization description",
    ],
    tags: ["strategy", "strategic-planning", "vision", "leadership"],
    order: 28,
  },

  {
    id: "project-summary-for-leadership",
    title: "Project Leadership Summary",
    description: "Summarize project status, risks, and decisions for leadership oversight.",
    promptText: `Create a project leadership summary for [PROJECT NAME].

Project sponsor: [SPONSOR NAME]
Project manager: [YOUR NAME]
Report date: [DATE]
Original completion date: [PLANNED END DATE]
Current projected date: [REVISED END DATE IF DIFFERENT]

Executive summary:
[ONE PARAGRAPH OVERVIEW OF PROJECT STATUS]

Overall health: [GREEN/YELLOW/RED with one-sentence rationale]

Key accomplishments this period:
[MAJOR MILESTONES OR ACHIEVEMENTS]

Current status against plan:
- Schedule: [ON TRACK / AT RISK / DELAYED]
- Budget: [ON TRACK / AT RISK / OVER BUDGET]
- Scope: [AS PLANNED / CHANGES IN SCOPE]
- Quality: [MEETING STANDARDS / CONCERNS]

Risks and issues requiring escalation:
[RED OR YELLOW ITEMS NEEDING LEADERSHIP ATTENTION]

Decisions needed from leadership:
[SPECIFIC DECISIONS OR APPROVALS REQUIRED]

Upcoming milestones:
[KEY DELIVERABLES IN THE NEXT PERIOD]

Financial status:
[BUDGET CONSUMED vs. FORECAST]

Generate a project leadership summary with:
1. One-paragraph executive summary
2. RAG status (Red/Amber/Green) with rationale
3. Accomplishments and progress since last update
4. Status vs. plan across schedule, budget, scope, quality
5. Escalated risks and issues (only what leadership needs to know)
6. Specific decision requests or approvals needed
7. Upcoming milestones and dates
8. Financial summary with variance
9. Changed assumptions or scope changes
10. Support or resources requested

Tone should be concise, status-focused, and escalate-when-needed. No operational details unless they impact leadership decisions.`,
    placeholders: [
      "PROJECT NAME",
      "SPONSOR NAME",
      "YOUR NAME",
      "DATE",
      "PLANNED END DATE",
      "REVISED END DATE IF DIFFERENT",
      "ONE PARAGRAPH OVERVIEW OF PROJECT STATUS",
      "GREEN/YELLOW/RED with one-sentence rationale",
      "MAJOR MILESTONES OR ACHIEVEMENTS",
      "ON TRACK / AT RISK / DELAYED",
      "ON TRACK / AT RISK / OVER BUDGET",
      "AS PLANNED / CHANGES IN SCOPE",
      "MEETING STANDARDS / CONCERNS",
      "RED OR YELLOW ITEMS NEEDING LEADERSHIP ATTENTION",
      "SPECIFIC DECISIONS OR APPROVALS REQUIRED",
      "KEY DELIVERABLES IN THE NEXT PERIOD",
      "BUDGET CONSUMED vs. FORECAST",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "document-writing",
    categoryId: "executive-summaries",
    exampleOutput:
      "A concise project status summary for leadership with RAG indicators, escalated issues, decision requests, and upcoming milestones.",
    customizationNotes: [
      "Include a trend indicator (improving/stable/deteriorating)",
      'Add a "what leadership can do to help" section',
      "Consider a visual scorecard format for executive dashboards",
    ],
    tags: ["project-status", "leadership", "oversight", "executive"],
    order: 29,
  },

  {
    id: "decision-memo",
    title: "Decision Memo",
    description: "Document a decision recommendation with analysis and rationale.",
    promptText: `Create a decision memo for [DECISION TOPIC].

Decision required by: [DECISION-MAKER NAME]
From: [YOUR NAME/TEAM]
Date: [DATE]
Decision deadline: [DEADLINE DATE]

Decision statement:
[WHAT SPECIFIC DECISION IS BEING REQUESTED]

Background and context:
[RELEVANT HISTORY AND CONTEXT FOR THIS DECISION]

Problem or opportunity:
[WHAT SITUATION IS DRIVING THIS DECISION]

Options considered:
[OPTIONS ANALYZED WITH PROS AND CONS OF EACH]

Recommendation:
[RECOMMENDED OPTION WITH RATIONALE]

Analysis:
- Financial impact: [COST/BENEFIT ANALYSIS]
- Strategic alignment: [HOW IT SUPPORTS STRATEGY]
- Risk assessment: [KEY RISKS AND MITIGATION]
- Stakeholder impact: [WHO IS AFFECTED]

Implementation considerations:
[WHAT WOULD BE REQUIRED TO EXECUTE THIS DECISION]

Decision criteria:
[KEY FACTORS THE DECISION-MAKER SHOULD CONSIDER]

Generate a clear decision memo with:
1. Clear decision statement (what is being decided)
2. Concise background and context
3. Problem or opportunity framing
4. Options analysis (typically 3 options)
5. Clear recommendation with rationale
6. Supporting analysis across multiple dimensions
7. Risk and mitigation assessment
8. Implementation requirements if approved
9. Success metrics or outcomes
10. Specific approval request

Tone should be objective, analytical, and recommendation-focused while acknowledging trade-offs.`,
    placeholders: [
      "DECISION TOPIC",
      "DECISION-MAKER NAME",
      "YOUR NAME/TEAM",
      "DATE",
      "DEADLINE DATE",
      "WHAT SPECIFIC DECISION IS BEING REQUESTED",
      "RELEVANT HISTORY AND CONTEXT FOR THIS DECISION",
      "WHAT SITUATION IS DRIVING THIS DECISION",
      "OPTIONS ANALYZED WITH PROS AND CONS OF EACH",
      "RECOMMENDED OPTION WITH RATIONALE",
      "COST/BENEFIT ANALYSIS",
      "HOW IT SUPPORTS STRATEGY",
      "KEY RISKS AND MITIGATION",
      "WHO IS AFFECTED",
      "WHAT WOULD BE REQUIRED TO EXECUTE THIS DECISION",
      "KEY FACTORS THE DECISION-MAKER SHOULD CONSIDER",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "document-writing",
    categoryId: "executive-summaries",
    exampleOutput:
      "A clear decision memo with options analysis, recommendation with rationale, supporting analysis, and specific approval request.",
    customizationNotes: [
      "Include a table for options comparison",
      'Add a "what happens if we delay" option',
      "Consider including a recommenders bias statement",
    ],
    tags: ["decision", "memo", "recommendation", "approval"],
    order: 30,
  },

  {
    id: "crisis-communication-summary",
    title: "Crisis Communication Summary",
    description: "Summarize a crisis situation with key facts and communication guidance.",
    promptText: `Create a crisis communication summary for [SITUATION DESCRIPTION].

Incident/Crisis: [BRIEF TITLE OR DESCRIPTION]
Date and time: [WHEN IT OCCURRED]
Prepared by: [YOUR NAME/ROLE]
Time of report: [CURRENT DATE/TIME]

What happened:
[FACTUAL DESCRIPTION OF EVENTS]

Current status:
[LATEST SITUATION UPDATE]

Impact assessment:
- People affected: [NUMBER OR SCOPE]
- Operations affected: [BUSINESS IMPACT]
- Financial impact: [ESTIMATED COST IF KNOWN]
- Reputational impact: [POTENTIAL REPUTATION EFFECT]

What we're doing:
[ACTIONS BEING TAKEN TO ADDRESS THE SITUATION]

Key messages:
[CORE POINTS TO COMMUNICATE]

Stakeholder communication plan:
[WHO NEEDS TO BE INFORMED AND WHEN]

Risks and concerns:
[POTENTIAL COMPLICATIONS]

Media or public interest:
[EXPECTED ATTENTION OR INQUIRIES]

Generate a crisis communication summary with:
1. Situation overview (what, when, where, who)
2. Current status and latest developments
3. Impact assessment across all dimensions
4. Actions being taken with timeline
5. Approved key messages and Q&A preparation
6. Stakeholder communication matrix (who, when, how)
7. Spokesperson guidance
8. Monitoring and escalation plan
9. Legal or regulatory considerations
10. Next update timing

Tone should be factual, calm, and action-oriented. Avoid speculation or emotion.`,
    placeholders: [
      "SITUATION DESCRIPTION",
      "BRIEF TITLE OR DESCRIPTION",
      "WHEN IT OCCURRED",
      "YOUR NAME/ROLE",
      "CURRENT DATE/TIME",
      "FACTUAL DESCRIPTION OF EVENTS",
      "LATEST SITUATION UPDATE",
      "NUMBER OR SCOPE",
      "BUSINESS IMPACT",
      "ESTIMATED COST IF KNOWN",
      "POTENTIAL REPUTATION EFFECT",
      "ACTIONS BEING TAKEN TO ADDRESS THE SITUATION",
      "CORE POINTS TO COMMUNICATE",
      "WHO NEEDS TO BE INFORMED AND WHEN",
      "POTENTIAL COMPLICATIONS",
      "EXPECTED ATTENTION OR INQUIRIES",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "document-writing",
    categoryId: "executive-summaries",
    exampleOutput:
      "A factual crisis summary with impact assessment, action being taken, key messages, and stakeholder communication plan.",
    customizationNotes: [
      "Include holding statements for immediate use",
      "Add social media monitoring guidance if applicable",
      "Consider designated spokesperson preparation notes",
    ],
    tags: ["crisis", "communication", "issues-management", "pr"],
    order: 31,
  },

  // ============================================================================
  // MEETING NOTES
  // ============================================================================

  {
    id: "meeting-minutes",
    title: "Formal Meeting Minutes",
    description: "Document official meeting minutes with decisions, action items, and discussions.",
    promptText: `Generate formal meeting minutes for the following meeting:

Meeting type: [REGULAR/SPECIAL/BOARD/COMMITTEE, ETC.]
Meeting title: [MEETING NAME]
Date: [DATE]
Time: [START TIME] to [END TIME]
Location: [VENUE OR PLATFORM]

Attendees:
- [NAME, TITLE/ROLE]

Absent:
- [NAME, TITLE/ROLE]

Agenda items:
[AGENDA TOPICS COVERED]

Discussion summaries:
[KEY POINTS FROM EACH AGENDA ITEM]

Decisions made:
[DECISIONS REACHED DURING THE MEETING]

Action items:
[TASKS ASSIGNED WITH OWNERS AND DEADLINES]

Next meeting:
[DATE, TIME, LOCATION]

Generate formal meeting minutes with:
1. Header with meeting details (call to order)
2. Attendance list (present and absent)
3. Agenda with time allocations
4. Discussion summaries for each item (not transcripts)
5. Decisions recorded with rationale
6. Action items table (task, owner, due date)
7. Voting outcomes if applicable
8. Any motions or resolutions
9. Next meeting details
10. Adjournment time and signature line

Format should follow parliamentary or corporate meeting standards. Keep discussions concise and focus on outcomes.`,
    placeholders: [
      "REGULAR/SPECIAL/BOARD/COMMITTEE, ETC.",
      "MEETING NAME",
      "DATE",
      "START TIME",
      "END TIME",
      "VENUE OR PLATFORM",
      "NAME, TITLE/ROLE",
      "AGENDA TOPICS COVERED",
      "KEY POINTS FROM EACH AGENDA ITEM",
      "DECISIONS REACHED DURING THE MEETING",
      "TASKS ASSIGNED WITH OWNERS AND DEADLINES",
      "DATE, TIME, LOCATION",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "document-writing",
    categoryId: "meeting-notes",
    exampleOutput:
      "Formal meeting minutes with attendance, agenda items, discussion summaries, decisions recorded, action items table, and next meeting details.",
    customizationNotes: [
      "Include approval of previous minutes if applicable",
      'Add a "business arising" section for follow-up items',
      "Consider adding document attachments referenced in the meeting",
    ],
    tags: ["meeting-minutes", "formal", "corporate", "governance"],
    order: 32,
  },

  {
    id: "decision-log",
    title: "Decision Log",
    description: "Track decisions with context, rationale, and responsible parties.",
    promptText: `Create a decision log for [PROJECT/TEAM/CONTEXT].

Project or context: [WHAT THESE DECISIONS RELATE TO]
Maintained by: [YOUR NAME/ROLE]
Date range: [TIME PERIOD COVERED]

Decision to record:
[THE DECISION THAT WAS MADE]

Date decided: [WHEN THE DECISION WAS MADE]

Decision-maker: [WHO MADE THE DECISION]

Context and background:
[WHY THIS DECISION WAS NEEDED]

Options considered:
[ALTERNATIVES THAT WERE EVALUATED]

Final decision:
[WHAT WAS DECIDED]

Rationale:
[WHY THIS DECISION WAS MADE]

Impact and implications:
[WHAT THIS DECISION AFFECTS]

Implementation plan:
[HOW THE DECISION WILL BE EXECUTED]

Review date:
[WHEN THIS DECISION SHOULD BE REVISITED]

Generate a decision log entry with:
1. Decision ID or reference number
2. Date and decision-maker
3. Clear decision statement
4. Context and problem statement
5. Options considered with brief analysis
6. Final decision and rationale
7. Impact assessment (who/what is affected)
8. Implementation actions or owner
9. Success criteria or metrics
10. Review or sunset date

The log should serve as a reference for future "why did we decide this?" questions and prevent re-litigating settled decisions.`,
    placeholders: [
      "PROJECT/TEAM/CONTEXT",
      "YOUR NAME/ROLE",
      "TIME PERIOD COVERED",
      "THE DECISION THAT WAS MADE",
      "WHEN THE DECISION WAS MADE",
      "WHO MADE THE DECISION",
      "WHY THIS DECISION WAS NEEDED",
      "ALTERNATIVES THAT WERE EVALUATED",
      "WHAT WAS DECIDED",
      "WHY THIS DECISION WAS MADE",
      "WHAT THIS DECISION AFFECTS",
      "HOW THE DECISION WILL BE EXECUTED",
      "WHEN THIS DECISION SHOULD BE REVISITED",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "document-writing",
    categoryId: "meeting-notes",
    exampleOutput:
      "A structured decision log entry with decision statement, context, options considered, rationale, impact, and implementation plan.",
    customizationNotes: [
      'Include a "reversible vs. irreversible" classification',
      'Add a "confidence level" indicator for the decision',
      "Consider tagging decisions by category or impact area",
    ],
    tags: ["decisions", "decision-log", "tracking", "governance"],
    order: 33,
  },

  {
    id: "workshop-notes",
    title: "Workshop Notes",
    description: "Document workshop activities, outputs, and next steps.",
    promptText: `Create workshop notes for [WORKSHOP NAME/TYPE].

Workshop: [WORKSHOP TITLE]
Date: [DATE]
Facilitator: [YOUR NAME]
Location: [VENUE OR PLATFORM]
Duration: [LENGTH OF WORKSHOP]

Workshop purpose:
[WHAT THIS WORKSHOP WAS AIMING TO ACHIEVE]

Participants:
[WHO ATTENDED AND THEIR ROLES]

Agenda and activities:
[WORKSHOP SCHEDULE AND ACTIVITIES PERFORMED]

Key outputs:
[MAIN DELIVERABLES OR RESULTS FROM THE WORKSHOP]

Themes and patterns:
[COMMON THEMES THAT EMERGED]

Highlights and breakthroughs:
[IMPORTANT INSIGHTS OR DISCOVERIES]

Challenges and tensions:
[POINTS OF DISAGREEMENT OR DIFFICULTY]

Action items and next steps:
[WHAT NEEDS TO HAPPEN NEXT]

Follow-up required:
[WHAT NEEDS TO BE DONE POST-WORKSHOP]

Generate comprehensive workshop notes with:
1. Workshop overview and objectives
2. Participant list and roles
3. Agenda with timing
4. Activity descriptions and methods used
5. Key outputs from each activity (not transcripts)
6. Photos/descriptions of artifacts (sticky notes, whiteboards)
7. Themes, patterns, and insights
8. Action items with owners
9. Unresolved questions or tensions
10. Next steps and follow-up plan

Notes should capture outputs and insights, not just what happened. Make them useful for people who didn't attend.`,
    placeholders: [
      "WORKSHOP NAME/TYPE",
      "WORKSHOP TITLE",
      "DATE",
      "YOUR NAME",
      "VENUE OR PLATFORM",
      "LENGTH OF WORKSHOP",
      "WHAT THIS WORKSHOP WAS AIMING TO ACHIEVE",
      "WHO ATTENDED AND THEIR ROLES",
      "WORKSHOP SCHEDULE AND ACTIVITIES PERFORMED",
      "MAIN DELIVERABLES OR RESULTS FROM THE WORKSHOP",
      "COMMON THEMES THAT EMERGED",
      "IMPORTANT INSIGHTS OR DISCOVERIES",
      "POINTS OF DISAGREEMENT OR DIFFICULTY",
      "WHAT NEEDS TO HAPPEN NEXT",
      "WHAT NEEDS TO BE DONE POST-WORKSHOP",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "document-writing",
    categoryId: "meeting-notes",
    exampleOutput:
      "Detailed workshop notes with agenda, activities performed, key outputs, themes that emerged, and action items with owners.",
    customizationNotes: [
      "Include quotes or direct feedback from participants",
      "Add visual descriptions of workshop artifacts",
      "Consider including participant engagement notes",
    ],
    tags: ["workshop", "facilitation", "outputs", "retrospective"],
    order: 34,
  },

  {
    id: "retrospective-notes",
    title: "Retrospective Notes",
    description: "Document retrospective insights, action items, and team improvements.",
    promptText: `Create retrospective notes for [SPRINT/PERIOD/PROJECT].

Retrospective for: [SPRINT NUMBER OR PERIOD]
Date: [DATE]
Facilitator: [YOUR NAME]
Team: [TEAM NAME]

Duration of sprint/period:
[TIMEFRAME COVERED]

What went well (successes):
[POSITIVE OUTCOMES AND ACCOMPLISHMENTS]

What could be improved (challenges):
[ISSUES, BLOCKERS, OR PAIN POINTS]

Actionable improvements:
[CHANGES THE TEAM WILL MAKE]

Team sentiment:
[HOW THE TEAM IS FEELING]

Action items:
[COMMITMENTS WITH OWNERS]

Generate retrospective notes with:
1. Sprint/period context and goals
2. What went well (celebrate successes)
3. What didn't go well (challenges faced)
4. What surprised the team
5. Actionable improvements (specific changes)
6. Action items with owners and due dates
7. Team health or sentiment indicators
8. Trends observed (improving or declining)
9. Experiments to try next period
10. Appreciations or acknowledgments

Tone should be blameless, forward-looking, and improvement-focused. Focus on systems and processes, not individuals.`,
    placeholders: [
      "SPRINT NUMBER OR PERIOD",
      "DATE",
      "YOUR NAME",
      "TEAM NAME",
      "TIMEFRAME COVERED",
      "POSITIVE OUTCOMES AND ACCOMPLISHMENTS",
      "ISSUES, BLOCKERS, OR PAIN POINTS",
      "CHANGES THE TEAM WILL MAKE",
      "HOW THE TEAM IS FEELING",
      "COMMITMENTS WITH OWNERS",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "document-writing",
    categoryId: "meeting-notes",
    exampleOutput:
      "Structured retrospective notes with what went well, challenges, actionable improvements, action items with owners, and team sentiment.",
    customizationNotes: [
      "Include data/metrics for objective context",
      'Add a "team working agreement" update section',
      "Consider including start/stop/continue categories",
    ],
    tags: ["retrospective", "agile", "sprint", "continuous-improvement"],
    order: 35,
  },

  {
    id: "1-on-1-meeting-notes",
    title: "1-on-1 Meeting Notes",
    description: "Document one-on-one discussions with coaching, feedback, and development focus.",
    promptText: `Create 1-on-1 meeting notes for [EMPLOYEE NAME].

Manager: [YOUR NAME]
Employee: [EMPLOYEE NAME]
Date: [DATE]
Meeting frequency: [WEEKLY/BI-WEEKLY/MONTHLY]

Check-in (personal and professional):
[HOW THEY'RE DOING OVERALL]

Progress on goals:
[GOAL UPDATES AND ACHIEVEMENTS]

Current challenges and blockers:
[WHAT'S STANDING IN THEIR WAY]

Feedback and coaching:
[FEEDBACK GIVEN OR COACHING DISCUSSED]

Career development:
[GROWTH AND PROFESSIONAL DEVELOPMENT TOPICS]

Action items:
[COMMITMENTS FROM BOTH PARTIES]

Topics for next time:
[ITEMS TO FOLLOW UP ON]

Generate 1-on-1 meeting notes with:
1. Overall sentiment check
2. Progress on previously set action items
3. Goals and objectives status
4. Current challenges and support needed
5. Feedback delivery or coaching moments
6. Career growth and development discussion
7. Action items (for both manager and direct report)
8. Resources or support committed
9. Topics parked for next meeting
10. Next meeting date

Tone should be supportive, developmental, and confidential. These are coaching conversations, not status updates.`,
    placeholders: [
      "EMPLOYEE NAME",
      "YOUR NAME",
      "EMPLOYEE NAME",
      "DATE",
      "WEEKLY/BI-WEEKLY/MONTHLY",
      "HOW THEY ARE DOING OVERALL",
      "GOAL UPDATES AND ACHIEVEMENTS",
      "WHAT IS STANDING IN THEIR WAY",
      "FEEDBACK GIVEN OR COACHING DISCUSSED",
      "GROWTH AND PROFESSIONAL DEVELOPMENT TOPICS",
      "COMMITMENTS FROM BOTH PARTIES",
      "ITEMS TO FOLLOW UP ON",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "document-writing",
    categoryId: "meeting-notes",
    exampleOutput:
      "Structured 1-on-1 notes covering check-in, goals progress, challenges, coaching feedback, career development, and action items.",
    customizationNotes: [
      "Include personal wins or celebrations",
      'Add a "how I can support" section',
      "Consider including a skills development focus area",
    ],
    tags: ["1-on-1", "coaching", "feedback", "management"],
    order: 36,
  },

  {
    id: "client-meeting-notes",
    title: "Client Meeting Notes",
    description: "Document client meetings with requirements, decisions, and follow-ups.",
    promptText: `Create client meeting notes for [CLIENT NAME].

Client: [CLIENT COMPANY/NAME]
Meeting type: [DISCOVERY/CHECK-IN/REVIEW/SALES, ETC.]
Date: [DATE]
Attendees:
- Client: [CLIENT ATTENDEES]
- Our team: [YOUR TEAM MEMBERS]

Meeting purpose:
[WHAT THIS MEETING WAS ABOUT]

Client situation/context:
[RELEVANT BACKGROUND ON THE CLIENT]

Discussions and key points:
[MAIN TOPICS DISCUSSED]

Client requirements or requests:
[WHAT THE CLIENT NEEDS]

Decisions or agreements:
[COMMITMENTS MADE ON BOTH SIDES]

Concerns or objections raised:
[CLIENT HESITATIONS OR CONCERNS]

Next steps and action items:
[WHO IS DOING WHAT BY WHEN]

Follow-up required:
[WHAT NEEDS TO HAPPEN AFTER THIS MEETING]

Generate client meeting notes with:
1. Meeting header with all attendee details
2. Purpose and desired outcomes
3. Client context and situation update
4. Discussion summaries (organized by topic)
5. Requirements or requests captured
6. Decisions, agreements, or commitments
7. Objections, concerns, or risks noted
8. Action items with owners and due dates (both sides)
9. Documents or information to follow up with
10. Next meeting scheduled

Tone should be professional and capture commitments accurately. These notes may become references for scope or expectations.`,
    placeholders: [
      "CLIENT COMPANY/NAME",
      "DISCOVERY/CHECK-IN/REVIEW/SALES, ETC.",
      "DATE",
      "CLIENT ATTENDEES",
      "YOUR TEAM MEMBERS",
      "WHAT THIS MEETING WAS ABOUT",
      "RELEVANT BACKGROUND ON THE CLIENT",
      "MAIN TOPICS DISCUSSED",
      "WHAT THE CLIENT NEEDS",
      "COMMITMENTS MADE ON BOTH SIDES",
      "CLIENT HESITATIONS OR CONCERNS",
      "WHO IS DOING WHAT BY WHEN",
      "WHAT NEEDS TO HAPPEN AFTER THIS MEETING",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "document-writing",
    categoryId: "meeting-notes",
    exampleOutput:
      "Professional client meeting notes with discussion summaries, requirements captured, decisions made, and action items for both parties.",
    customizationNotes: [
      "Include client quotes or exact wording for requirements",
      "Add budget or timeline mentions",
      "Consider including a stakeholder map if new relationships",
    ],
    tags: ["client", "customer", "sales", "account-management"],
    order: 37,
  },

  {
    id: "brainstorming-session-notes",
    title: "Brainstorming Session Notes",
    description: "Capture brainstorming outputs, ideas, and evaluation criteria.",
    promptText: `Create brainstorming session notes for [SESSION TOPIC].

Session topic: [WHAT WAS BRAINSTORMED]
Date: [DATE]
Facilitator: [YOUR NAME]
Participants: [WHO PARTICIPATED]

Brainstorming goal:
[WHAT THE SESSION AIMED TO GENERATE]

Brainstorming method used:
[TECHNIQUE - FREEWHEELING, MIND MAP, SCAMPER, ETC.]

Ideas generated:
[LIST OF ALL IDEAS GENERATED]

Top themes or categories:
[HOW IDEAS GROUP TOGETHER]

Standout ideas:
[IDEAS THAT GENERATED EXCITEMENT]

Evaluation criteria:
[HOW IDEAS WILL BE JUDGED]

Next steps:
[WHAT HAPPENS WITH THESE IDEAS]

Generate brainstorming session notes with:
1. Session goal and framing question
2. Method or technique used
3. Complete idea list (no judgment during brainstorming)
4. Thematic grouping or categorization
5. Standout or "wow" ideas highlighted
6. Evaluation framework or criteria
7. Next steps (selection, prototyping, research)
8. Owners and timelines
9. Photos/descriptions of whiteboards or artifacts
10. Parking lot ideas (saved for later)

Notes should capture all ideas without filtering, then identify the most promising for next steps.`,
    placeholders: [
      "WHAT WAS BRAINSTORMED",
      "DATE",
      "YOUR NAME",
      "WHO PARTICIPATED",
      "WHAT THE SESSION AIMED TO GENERATE",
      "TECHNIQUE - FREEWHEELING, MIND MAP, SCAMPER, ETC.",
      "LIST OF ALL IDEAS GENERATED",
      "HOW IDEAS GROUP TOGETHER",
      "IDEAS THAT GENERATED EXCITEMENT",
      "HOW IDEAS WILL BE JUDGED",
      "WHAT HAPPENS WITH THESE IDEAS",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "document-writing",
    categoryId: "meeting-notes",
    exampleOutput:
      "Brainstorming notes with complete idea list, themes, standout ideas, evaluation criteria, and defined next steps.",
    customizationNotes: [
      "Include who suggested which ideas for attribution",
      "Add energy or excitement level indicators",
      'Consider including "wild card" or moonshot ideas separately',
    ],
    tags: ["brainstorming", "ideation", "innovation", "creativity"],
    order: 38,
  },

  // ============================================================================
  // TECHNICAL WRITING
  // ============================================================================

  {
    id: "api-documentation",
    title: "API Documentation",
    description: "Write clear API documentation with endpoints, parameters, and examples.",
    promptText: `Create API documentation for [API/SERVICE NAME].

API name: [API TITLE]
Version: [VERSION NUMBER]
Base URL: [BASE URL OR ENDPOINT]
Authentication: [AUTH METHOD]

API overview:
[WHAT THIS API DOES AND ITS USE CASES]

Endpoints to document:
[LIST OF ENDPOINTS AND THEIR PURPOSES]

For each endpoint, include:
- Endpoint name and description
- HTTP method (GET/POST/PUT/DELETE)
- Full URL path
- Request parameters (path, query, body)
- Request headers
- Request body schema (with examples)
- Response format (with examples)
- Error codes and responses
- Rate limits (if applicable)
- Code samples in common languages

Generate comprehensive API documentation with:
1. API overview and use cases
2. Authentication and authorization details
3. Request/response formats and standards
4. Endpoint reference (organized by resource)
5. Complete parameter descriptions with types
6. Request and response examples (realistic data)
7. Error codes and troubleshooting
8. Rate limits and quotas
9. Code examples in 2-3 languages
10. Getting started tutorial

Documentation should be complete enough for a developer to integrate without additional support.`,
    placeholders: [
      "API TITLE",
      "VERSION NUMBER",
      "BASE URL OR ENDPOINT",
      "AUTH METHOD",
      "WHAT THIS API DOES AND ITS USE CASES",
      "LIST OF ENDPOINTS AND THEIR PURPOSES",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "document-writing",
    categoryId: "technical-writing",
    exampleOutput:
      "Complete API documentation with overview, authentication details, endpoint reference, parameters, request/response examples, and code samples.",
    customizationNotes: [
      "Include cURL examples for quick testing",
      'Add a "try it now" interactive section description',
      "Consider including response time expectations",
    ],
    tags: ["api", "documentation", "developer", "rest"],
    order: 39,
  },

  {
    id: "technical-specification",
    title: "Technical Specification",
    description:
      "Document technical specifications with requirements, architecture, and implementation details.",
    promptText: `Create a technical specification for [SYSTEM/FEATURE NAME].

Project: [PROJECT OR PRODUCT NAME]
Author: [YOUR NAME]
Date: [DATE]
Status: [DRAFT/REVIEW/APPROVED]
Version: [SPEC VERSION]

Overview and purpose:
[WHAT THIS SPEC DEFINES AND WHY]

Requirements:
Functional requirements:
[WHAT THE SYSTEM MUST DO]

Non-functional requirements:
[PERFORMANCE, SECURITY, SCALABILITY REQUIREMENTS]

Architecture and design:
[HIGH-LEVEL SYSTEM ARCHITECTURE]

Components and modules:
[KEY SYSTEM COMPONENTS AND THEIR RESPONSIBILITIES]

Data model:
[ENTITIES, RELATIONSHIPS, AND FLOW]

APIs and interfaces:
[INTEGRATION POINTS AND INTERFACES]

Implementation approach:
[HOW THE SYSTEM WILL BE BUILT]

Testing strategy:
[HOW THE SYSTEM WILL BE VALIDATED]

Dependencies:
[EXTERNAL SYSTEMS, LIBRARIES, OR SERVICES]

Generate a comprehensive technical specification with:
1. Executive summary
2. Requirements (functional and non-functional)
3. Architecture overview with diagrams (described)
4. Component specifications
5. Data model and flow
6. API/interface definitions
7. Security and compliance considerations
8. Implementation phases or roadmap
9. Testing and validation approach
10. Risk assessment and mitigation

The spec should be detailed enough for engineers to implement without ambiguity.`,
    placeholders: [
      "SYSTEM/FEATURE NAME",
      "PROJECT OR PRODUCT NAME",
      "YOUR NAME",
      "DATE",
      "DRAFT/REVIEW/APPROVED",
      "SPEC VERSION",
      "WHAT THIS SPEC DEFINES AND WHY",
      "WHAT THE SYSTEM MUST DO",
      "PERFORMANCE, SECURITY, SCALABILITY REQUIREMENTS",
      "HIGH-LEVEL SYSTEM ARCHITECTURE",
      "KEY SYSTEM COMPONENTS AND THEIR RESPONSIBILITIES",
      "ENTITIES, RELATIONSHIPS, AND FLOW",
      "INTEGRATION POINTS AND INTERFACES",
      "HOW THE SYSTEM WILL BE BUILT",
      "HOW THE SYSTEM WILL BE VALIDATED",
      "EXTERNAL SYSTEMS, LIBRARIES, OR SERVICES",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "document-writing",
    categoryId: "technical-writing",
    exampleOutput:
      "A comprehensive technical specification with requirements, architecture, components, data model, APIs, implementation approach, and testing strategy.",
    customizationNotes: [
      "Include sequence diagrams for critical flows",
      "Add alternative approaches considered with rationale",
      "Consider including a glossary of technical terms",
    ],
    tags: ["technical-spec", "architecture", "requirements", "engineering"],
    order: 40,
  },

  {
    id: "system-documentation",
    title: "System Documentation",
    description: "Document system architecture, components, and operational knowledge.",
    promptText: `Create system documentation for [SYSTEM NAME].

System name: [SYSTEM TITLE]
Version: [CURRENT VERSION]
Maintained by: [TEAM OR DEPARTMENT]
Last updated: [DATE]

System purpose:
[WHAT THIS SYSTEM DOES AND ITS ROLE IN THE ARCHITECTURE]

System architecture:
[HIGH-LEVEL ARCHITECTURE AND COMPONENTS]

Technology stack:
[LANGUAGES, FRAMEWORKS, AND KEY TECHNOLOGIES]

Data flow:
[HOW DATA MOVES THROUGH THE SYSTEM]

Dependencies:
[EXTERNAL SYSTEMS, SERVICES, OR LIBRARIES]

Configuration:
[KEY CONFIGURATION SETTINGS AND ENVIRONMENT VARIABLES]

Deployment:
[HOW THE SYSTEM IS DEPLOYED AND WHERE]

Monitoring and observability:
[WHAT IS MONITORED AND HOW TO ACCESS METRICS]

Troubleshooting:
[COMMON ISSUES AND HOW TO RESOLVE]

Maintenance procedures:
[RUNBOOKS AND OPERATIONAL PROCEDURES]

Generate comprehensive system documentation with:
1. System overview and purpose
2. Architecture diagram (described in detail)
3. Technology stack with versions
4. Component descriptions and responsibilities
5. Data flow and integration points
6. Configuration and environment setup
7. Deployment procedures
8. Monitoring, logging, and alerting
9. Troubleshooting guide
10. Maintenance and runbooks

Documentation should enable on-call engineers to operate and troubleshoot the system effectively.`,
    placeholders: [
      "SYSTEM TITLE",
      "CURRENT VERSION",
      "TEAM OR DEPARTMENT",
      "DATE",
      "WHAT THIS SYSTEM DOES AND ITS ROLE IN THE ARCHITECTURE",
      "HIGH-LEVEL ARCHITECTURE AND COMPONENTS",
      "LANGUAGES, FRAMEWORKS, AND KEY TECHNOLOGIES",
      "HOW DATA MOVES THROUGH THE SYSTEM",
      "EXTERNAL SYSTEMS, SERVICES, OR LIBRARIES",
      "KEY CONFIGURATION SETTINGS AND ENVIRONMENT VARIABLES",
      "HOW THE SYSTEM IS DEPLOYED AND WHERE",
      "WHAT IS MONITORED AND HOW TO ACCESS METRICS",
      "COMMON ISSUES AND HOW TO RESOLVE",
      "RUNBOOKS AND OPERATIONAL PROCEDURES",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "document-writing",
    categoryId: "technical-writing",
    exampleOutput:
      "Complete system documentation with architecture overview, technology stack, components, data flow, deployment procedures, and troubleshooting guide.",
    customizationNotes: [
      "Include on-call rotation and escalation information",
      'Add a "recent incidents" section for context',
      "Consider including capacity and scaling information",
    ],
    tags: ["system-docs", "architecture", "operations", "devops"],
    order: 41,
  },

  {
    id: "release-notes",
    title: "Release Notes",
    description: "Write clear release notes highlighting new features, fixes, and migrations.",
    promptText: `Create release notes for [RELEASE VERSION].

Product/Service: [PRODUCT NAME]
Version: [VERSION NUMBER]
Release date: [DATE]
Release type: [MAJOR/MINOR/PATCH/HOTFIX]

Release highlights:
[THE MOST SIGNIFICANT CHANGES IN THIS RELEASE]

New features:
[NEW CAPABILITIES ADDED]

Enhancements:
[IMPROVEMENTS TO EXISTING FEATURES]

Bug fixes:
[ISSUES RESOLVED]

Breaking changes:
[CHANGES THAT REQUIRE USER ACTION]

Deprecations:
[FEATURES MARKED FOR REMOVAL]

Migration guide:
[STEPS FOR USERS TO UPGRADE]

Known issues:
[PROBLEMS USERS SHOULD BE AWARE OF]

Generate user-friendly release notes with:
1. Release summary (one paragraph overview)
2. What's new (features and enhancements)
3. What's fixed (bug fixes)
4. What's changed (breaking changes clearly highlighted)
5. Features scheduled for retirement or replacement
6. Migration or upgrade instructions
7. Known issues or limitations
8. How to get the update
9. Links to full documentation
10. How to provide feedback

Tone should be user-focused, highlighting value delivered. Group changes by user impact, not technical category.`,
    placeholders: [
      "PRODUCT NAME",
      "VERSION NUMBER",
      "DATE",
      "MAJOR/MINOR/PATCH/HOTFIX",
      "THE MOST SIGNIFICANT CHANGES IN THIS RELEASE",
      "NEW CAPABILITIES ADDED",
      "IMPROVEMENTS TO EXISTING FEATURES",
      "ISSUES RESOLVED",
      "CHANGES THAT REQUIRE USER ACTION",
      "FEATURES MARKED FOR REMOVAL",
      "STEPS FOR USERS TO UPGRADE",
      "PROBLEMS USERS SHOULD BE AWARE OF",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "document-writing",
    categoryId: "technical-writing",
    exampleOutput:
      "Clear release notes with highlights, new features, enhancements, bug fixes, breaking changes highlighted, and migration guidance.",
    customizationNotes: [
      "Include screenshots for visual features",
      "Add GIFs or short videos for complex workflows",
      "Consider segmenting notes by user persona",
    ],
    tags: ["release-notes", "changelog", "updates", "product"],
    order: 42,
  },

  {
    id: "code-comments-documentation",
    title: "Code Comment Documentation",
    description: "Generate comprehensive inline code comments and documentation.",
    promptText: `Generate code documentation for the following code:

Code context:
[WHAT THIS CODE DOES AND ITS PURPOSE]

Language: [PROGRAMMING LANGUAGE]
Framework/Library: [ANY RELEVANT FRAMEWORKS]

Code to document:
[PASTE YOUR CODE HERE]

For the code documentation, provide:
1. File-level header comment explaining purpose
2. Function/method documentation with:
   - Purpose and behavior
   - Parameters with types and descriptions
   - Return value with type and description
   - Exceptions or errors that may be thrown
   - Usage examples if complex
3. Inline comments for:
   - Non-obvious logic
   - Algorithm explanations
   - Important business rules
   - Open follow-up items or implementation notes
4. Class/module documentation (if applicable)

Generate comprehensive documentation that helps future developers (including yourself) understand:
- Why the code exists (business context)
- How it works (technical approach)
- What edge cases are handled
- What trade-offs were made
- How to modify or extend safely

Comments should explain "why" not "what". The code already shows what it does.`,
    placeholders: [
      "WHAT THIS CODE DOES AND ITS PURPOSE",
      "PROGRAMMING LANGUAGE",
      "ANY RELEVANT FRAMEWORKS",
      "PASTE YOUR CODE HERE",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "document-writing",
    categoryId: "technical-writing",
    exampleOutput:
      "Well-documented code with file headers, function documentation with parameters and returns, inline comments explaining non-obvious logic, and usage examples.",
    customizationNotes: [
      "Include performance characteristics for complex algorithms",
      "Add security considerations where relevant",
      "Consider linking to external documentation for complex topics",
    ],
    tags: ["code-comments", "documentation", "developer", "maintainability"],
    order: 43,
  },

  {
    id: "troubleshooting-guide",
    title: "Troubleshooting Guide",
    description: "Document common issues, symptoms, causes, and resolution steps.",
    promptText: `Create a troubleshooting guide for [SYSTEM/SERVICE/PRODUCT].

System: [WHAT THIS GUIDE COVERS]
Target audience: [WHO WILL USE THIS GUIDE]
Maintained by: [TEAM RESPONSIBLE]

Common issues:
[LIST OF FREQUENT PROBLEMS]

For each issue, provide:
1. Issue name or symptom
2. Error messages or indicators
3. Root causes
4. Diagnostic steps (how to confirm the issue)
5. Resolution steps (numbered procedures)
6. Prevention tips
7. Related issues or references
8. Escalation path (when to get help)

Generate a comprehensive troubleshooting guide with:
1. Quick diagnostic flow (what to check first)
2. Common issues organized by symptom or error
3. Step-by-step resolution procedures
4. Diagnostic commands or queries
5. Log file locations and what to look for
6. Error code reference
7. Known issues and workarounds
8. Escalation procedures
9. Contact information for support
10. Change log (issues added/removed)

Format should enable rapid issue resolution. Organize by symptom or error message for quick lookup.`,
    placeholders: [
      "WHAT THIS GUIDE COVERS",
      "WHO WILL USE THIS GUIDE",
      "TEAM RESPONSIBLE",
      "LIST OF FREQUENT PROBLEMS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "document-writing",
    categoryId: "technical-writing",
    exampleOutput:
      "A troubleshooting guide organized by symptoms and errors, with diagnostic steps, resolution procedures, and escalation paths.",
    customizationNotes: [
      "Include time estimates for each troubleshooting procedure",
      'Add "quick fix" vs. "thorough fix" options',
      "Consider including screenshots or log examples",
    ],
    tags: ["troubleshooting", "support", "technical-support", "runbook"],
    order: 44,
  },

  {
    id: "integration-guide",
    title: "Integration Guide",
    description: "Document how to integrate with a system, service, or API.",
    promptText: `Create an integration guide for [SYSTEM/SERVICE TO INTEGRATE WITH].

Integration target: [WHAT USERS WILL INTEGRATE WITH]
Target audience: [WHO WILL BUILD THE INTEGRATION]
Prerequisites: [WHAT INTEGRATORS NEED BEFORE STARTING]

Integration overview:
[WHY INTEGRATE AND WHAT IT ENABLES]

Authentication setup:
[HOW TO AUTHENTICATE WITH THE SYSTEM]

Getting started:
[FIRST STEPS FOR A BASIC INTEGRATION]

Common integration scenarios:
[TYPICAL USE CASES AND IMPLEMENTATIONS]

API reference:
[KEY ENDPOINTS AND METHODS]

Webhooks and events:
[REAL-TIME NOTIFICATIONS AND EVENTS]

Error handling:
[HOW TO HANDLE ERRORS GRACEFULLY]

Testing and validation:
[HOW TO TEST THE INTEGRATION]

Best practices:
[RECOMMENDATIONS FOR PRODUCTION INTEGRATIONS]

Generate a comprehensive integration guide with:
1. Overview and use cases
2. Prerequisites and account setup
3. Authentication walkthrough with examples
4. Quick start tutorial (hello world)
5. Common scenarios with code samples
6. Complete API reference for integration endpoints
7. Webhook setup and event handling
8. Error codes and handling strategies
9. Testing and sandbox environment
10. Production deployment checklist
11. Rate limits and quotas
12. Support and resources

The guide should enable developers to complete a working integration in a single session.`,
    placeholders: [
      "WHAT USERS WILL INTEGRATE WITH",
      "WHO WILL BUILD THE INTEGRATION",
      "WHAT INTEGRATORS NEED BEFORE STARTING",
      "WHY INTEGRATE AND WHAT IT ENABLES",
      "HOW TO AUTHENTICATE WITH THE SYSTEM",
      "FIRST STEPS FOR A BASIC INTEGRATION",
      "TYPICAL USE CASES AND IMPLEMENTATIONS",
      "KEY ENDPOINTS AND METHODS",
      "REAL-TIME NOTIFICATIONS AND EVENTS",
      "HOW TO HANDLE ERRORS GRACEFULLY",
      "HOW TO TEST THE INTEGRATION",
      "RECOMMENDATIONS FOR PRODUCTION INTEGRATIONS",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "document-writing",
    categoryId: "technical-writing",
    exampleOutput:
      "A complete integration guide with authentication walkthrough, quick start, common scenarios, API reference, webhooks, error handling, and production checklist.",
    customizationNotes: [
      "Include SDK examples if libraries are available",
      "Add integration patterns (sync vs async, polling vs webhooks)",
      "Consider including reference implementation links",
    ],
    tags: ["integration", "api", "developer-guide", "implementation"],
    order: 45,
  },
];
