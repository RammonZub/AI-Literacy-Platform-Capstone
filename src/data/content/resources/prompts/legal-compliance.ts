/**
 * Legal & Compliance Prompts
 *
 * PURPOSE: Prompts for contract review, policy drafting, and compliance documentation.
 *
 * DISCLAIMER: These prompts are for assistance and educational purposes only.
 * They do NOT constitute legal advice. Always consult with a qualified attorney
 * for legal matters. AI-generated content should be reviewed by legal professionals.
 *
 * DOMAIN: Legal & Compliance
 * CATEGORIES:
 * - Contracts (5 prompts)
 * - Policies (5 prompts)
 * - Compliance (5 prompts)
 * - Terms & Privacy (5 prompts)
 *
 * @see src/types/resources.ts - Prompt type definition
 */

import type { Prompt } from "@/types/resources";

/**
 * Legal & Compliance prompts collection
 *
 * Each prompt includes appropriate disclaimers about legal advice limitations.
 * These tools assist with drafting and understanding but cannot replace legal counsel.
 */
export const legalCompliancePrompts: Prompt[] = [
  // ============================================================================
  // CONTRACTS
  // ============================================================================

  {
    id: "contract-review-summary",
    title: "Contract Review Summary",
    description: "Get a plain-language summary of a contract's key terms and potential concerns.",
    promptText: `DISCLAIMER: I understand this is for informational purposes only and does not constitute legal advice.

Please review the following contract and provide:

1. **Plain Language Summary**: What each party is agreeing to do
2. **Key Obligations**: What I'm required to provide/pay/do
3. **Red Flags**: Any unusual, one-sided, or concerning terms
4. **Missing Elements**: Standard clauses that appear to be absent
5. **Questions to Ask Lawyer**: Specific items to discuss with legal counsel

Contract text:
[CONTRACT TEXT]

My role in this agreement: [MY ROLE]
My main concerns: [CONCERNS]`,
    placeholders: ["CONTRACT TEXT", "MY ROLE", "CONCERNS"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "legal-compliance",
    categoryId: "contracts",
    exampleOutput:
      "A structured summary highlighting key obligations, potential red flags, and specific questions to discuss with legal counsel.",
    customizationNotes: [
      "Remove sensitive personal information before sharing contracts",
      "Include your bargaining power (individual vs. corporation)",
      "Specify jurisdiction if relevant (US, UK, EU, etc.)",
    ],
    tags: ["contracts", "review", "summary", "legal"],
    order: 1,
  },

  {
    id: "contract-clause-explainer",
    title: "Contract Clause Explainer",
    description: "Understand specific contract clauses in plain language.",
    promptText: `DISCLAIMER: This explanation is for educational purposes only and is not legal advice.

Please explain the following contract clause(s) in plain language:

[CLAUSE TEXT]

For each clause, provide:
1. **Plain English Translation**: What it actually means in simple terms
2. **Practical Impact**: How this affects me in real-world scenarios
3. **Common Variations**: How this clause is typically written differently
4. **Negotiation Points**: If I wanted to change this, what could I ask for?
5. **Risk Level**: Low, Medium, or High concern for my position

Context: I am the [MY ROLE] in this agreement.`,
    placeholders: ["CLAUSE TEXT", "MY ROLE"],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "legal-compliance",
    categoryId: "contracts",
    exampleOutput:
      "Clear explanations of each clause with practical implications, alternatives for negotiation, and risk assessment.",
    customizationNotes: [
      "Include multiple related clauses for comparison",
      "Mention your industry for more relevant context",
      "Note if you have negotiating leverage",
    ],
    tags: ["contracts", "clauses", "explanation", "legal"],
    order: 2,
  },

  {
    id: "contract-red-flags",
    title: "Contract Red Flags Detector",
    description: "Identify potentially problematic terms before signing.",
    promptText: `DISCLAIMER: This analysis is preliminary and does not replace professional legal review.

Analyze this contract for potential red flags:

[CONTRACT TEXT]

Focus on:
1. **Unusual Liability**: Excessive liability caps, broad indemnifications
2. **Termination Issues**: Notice periods, automatic renewals, termination penalties
3. **Payment Problems**: Late fees, interest, unilateral price changes
4. **IP Concerns**: Overbroad IP ownership, perpetual licenses
5. **Restrictive Covenants**: Non-compete, non-solicitation durations and scope
6. **One-Sided Terms**: Unbalanced rights and obligations

Rate each finding: 🔴 High Risk / 🟡 Medium Risk / 🟢 Low Risk
Include specific clause references and suggested revisions.`,
    placeholders: ["CONTRACT TEXT"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "legal-compliance",
    categoryId: "contracts",
    exampleOutput:
      "A prioritized list of concerning terms with color-coded risk levels, clause references, and suggested alternatives.",
    customizationNotes: [
      "Specify your industry (red flags vary by sector)",
      "Note if this is B2B, B2C, or employment",
      "Mention your bargaining position",
    ],
    tags: ["contracts", "red-flags", "risk", "review"],
    order: 3,
  },

  {
    id: "msa-negotiation-checklist",
    title: "MSA Negotiation Checklist",
    description: "Prepare for Master Services Agreement negotiations with key points to address.",
    promptText: `DISCLAIMER: This checklist supports negotiation preparation but is not legal advice.

I'm preparing to negotiate an MSA for [SERVICE TYPE] services.

My position:
- I am the: [CLIENT/VENDOR]
- Company size: [SIZE]
- Contract value: [APPROXIMATE VALUE]
- Deal urgency: [HIGH/MEDIUM/LOW]

Create a negotiation checklist covering:
1. **Must-Have Terms**: Non-negotiable items for my position
2. **Nice-to-Have**: Terms to request but could concede
3. **Risk Areas**: What needs careful review
4. **Standard Market Terms**: What's typical in this type of agreement
5. **Preparation Questions**: What I should understand before negotiations

For each item, explain why it matters and suggested fallback positions.`,
    placeholders: ["SERVICE TYPE", "CLIENT/VENDOR", "SIZE", "APPROXIMATE VALUE", "HIGH/MEDIUM/LOW"],
    bestTool: "chatgpt",
    difficulty: "advanced",
    domainId: "legal-compliance",
    categoryId: "contracts",
    exampleOutput:
      "A comprehensive negotiation checklist with prioritized positions, fallback strategies, and preparation questions.",
    customizationNotes: [
      "Include specific concerns from past deals",
      "Note if this is a renewal or new relationship",
      "Mention any unique aspects of this engagement",
    ],
    tags: ["contracts", "msa", "negotiation", "checklist"],
    order: 4,
  },

  {
    id: "contract-comparison",
    title: "Contract Comparison Tool",
    description: "Compare two contracts or versions to identify key differences.",
    promptText: `DISCLAIMER: This comparison is for reference only and is not legal advice.

Compare these two contracts/versions and highlight differences:

Contract A (Current/Old):
[CONTRACT A TEXT]

Contract B (Proposed/New):
[CONTRACT B TEXT]

Please provide:
1. **Major Changes**: Significant additions, deletions, or modifications
2. **Subtle Shifts**: Minor wording changes that could impact meaning
3. **My Position**: Which version is more favorable to [MY ROLE]
4. **Surprising Omissions**: What was removed that I should notice
5. **Summary Table**: Side-by-side comparison of key clauses

Focus on practical implications, not just word-for-word differences.`,
    placeholders: ["CONTRACT A TEXT", "CONTRACT B TEXT", "MY ROLE"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "legal-compliance",
    categoryId: "contracts",
    exampleOutput:
      "A clear comparison showing meaningful differences, their implications, and which version benefits your position.",
    customizationNotes: [
      "Truncate to key sections if contracts are very long",
      "Specify what changed between versions (new round, renewal, etc.)",
      "Highlight particular clauses of concern",
    ],
    tags: ["contracts", "comparison", "diff", "review"],
    order: 5,
  },

  // ============================================================================
  // POLICIES
  // ============================================================================

  {
    id: "policy-drafting-assistant",
    title: "Policy Drafting Assistant",
    description: "Draft clear, effective internal company policies.",
    promptText: `DISCLAIMER: AI-generated policies require review by HR, legal, and compliance professionals.

Help me draft a [POLICY TYPE] policy for our company.

Company context:
- Industry: [INDUSTRY]
- Company size: [SIZE]
- Locations: [LOCATIONS]
- Remote/hybrid: [YES/NO]
- Union presence: [YES/NO]

Policy requirements:
- Purpose/goal: [PURPOSE]
- Key stakeholders: [WHO AFFECTED]
- Must address: [SPECIFIC REQUIREMENTS]
- Tone preference: [FORMAL/FRIENDLY/FIRM]

Draft a policy that includes:
1. Clear purpose and scope
2. Specific procedures and expectations
3. Roles and responsibilities
4. Consequences for non-compliance
5. Related policies and resources
6. Review/update schedule

Include notes on legal considerations to address with counsel.`,
    placeholders: [
      "POLICY TYPE",
      "INDUSTRY",
      "SIZE",
      "LOCATIONS",
      "YES/NO",
      "PURPOSE",
      "WHO AFFECTED",
      "SPECIFIC REQUIREMENTS",
      "FORMAL/FRIENDLY/FIRM",
    ],
    bestTool: "chatgpt",
    difficulty: "intermediate",
    domainId: "legal-compliance",
    categoryId: "policies",
    exampleOutput:
      "A comprehensive policy draft with clear sections, actionable procedures, and legal review notes.",
    customizationNotes: [
      "Reference any existing policies to align with",
      "Include specific incidents that prompted this policy",
      "Note regulatory requirements in your industry",
    ],
    tags: ["policies", "hr", "drafting", "internal"],
    order: 6,
  },

  {
    id: "policy-audit-checklist",
    title: "Policy Audit Checklist",
    description: "Review existing policies for completeness, consistency, and compliance.",
    promptText: `DISCLAIMER: This audit supports policy review but does not replace legal or HR compliance review.

I need to audit our [POLICY AREA] policies for:
- Industry: [INDUSTRY]
- Locations: [JURISDICTIONS]
- Company size: [SIZE]

Current policy text:
[CURRENT POLICY TEXT]

Create an audit checklist covering:
1. **Legal Compliance**: Required elements per applicable laws
2. **Clarity & Ambiguity**: Confusing or unclear language
3. **Completeness**: Missing standard sections or procedures
4. **Consistency**: Conflicts with other company policies
5. **Practicality**: Realistic implementation and enforcement
6. **Updates Needed**: Outdated references or practices

For each issue found, rate severity and suggest improvements.`,
    placeholders: ["POLICY AREA", "INDUSTRY", "JURISDICTIONS", "SIZE", "CURRENT POLICY TEXT"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "legal-compliance",
    categoryId: "policies",
    exampleOutput:
      "A detailed audit checklist with identified issues, severity ratings, and specific improvement recommendations.",
    customizationNotes: [
      "Include related policies for consistency check",
      "Note any recent complaints or issues",
      "Specify if remote work considerations needed",
    ],
    tags: ["policies", "audit", "compliance", "review"],
    order: 7,
  },

  {
    id: "remote-work-policy",
    title: "Remote Work Policy Generator",
    description: "Create comprehensive remote/hybrid work policies.",
    promptText: `DISCLAIMER: Employment policies must comply with local labor laws and tax regulations. Review with legal counsel.

Draft a remote work policy for:
- Work model: [FULLY REMOTE/HYBRID/FLEXIBLE]
- Company locations: [LOCATIONS]
- Employees in: [STATES/COUNTRIES]
- Industry: [INDUSTRY]

Policy should cover:
1. Eligibility and requirements
2. Work hours and availability expectations
3. Equipment and expense reimbursement
4. Data security and privacy requirements
5. Communication protocols
6. Performance measurement
7. In-person attendance (if hybrid)
8. Tax and employment law considerations flag

Include:
- Clear procedures for employees
- Manager responsibilities
- Compliance notes requiring legal review
- Optional: progressive return-to-office language`,
    placeholders: ["FULLY REMOTE/HYBRID/FLEXIBLE", "LOCATIONS", "STATES/COUNTRIES", "INDUSTRY"],
    bestTool: "chatgpt",
    difficulty: "intermediate",
    domainId: "legal-compliance",
    categoryId: "policies",
    exampleOutput:
      "A detailed remote work policy addressing equipment, security, expectations, and legal review requirements.",
    customizationNotes: [
      "Specify time zone considerations",
      "Note any international employees (tax/visa)",
      "Include industry-specific requirements",
    ],
    tags: ["policies", "remote-work", "hybrid", "hr"],
    order: 8,
  },

  {
    id: "social-media-policy",
    title: "Social Media Policy Draft",
    description: "Create clear social media use policies for employees.",
    promptText: `DISCLAIMER: Social media policies must balance employer interests with employee rights. Consult legal counsel.

Draft a social media policy addressing:

Company context:
- Industry: [INDUSTRY]
- Size: [SIZE]
- Public-facing roles: [YES/NO]
- Union presence: [YES/NO]
- Jurisdiction: [STATE/COUNTRY]

Policy should address:
1. Company account usage and authorization
2. Personal social media: what's covered/protected
3. Confidentiality and trade secrets
4. Brand representation and disclaimers
5. Prohibited content
6. Consequences for policy violations
7. NLRA considerations (for US companies)
8. Reporting procedures

Include:
- Clear examples of acceptable vs. problematic posts
- Legal compliance notes
- Separate guidelines for public-facing roles`,
    placeholders: ["INDUSTRY", "SIZE", "YES/NO", "STATE/COUNTRY"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "legal-compliance",
    categoryId: "policies",
    exampleOutput:
      "A balanced social media policy with clear guidelines, legal compliance notes, and practical examples.",
    customizationNotes: [
      "Note any past social media incidents",
      "Include specific platforms your company uses",
      "Consider industry-specific regulations (finance, healthcare)",
    ],
    tags: ["policies", "social-media", "hr", "brand"],
    order: 9,
  },

  {
    id: "incident-response-policy",
    title: "Incident Response Policy Generator",
    description: "Draft policies for responding to security, data, or operational incidents.",
    promptText: `DISCLAIMER: Incident response policies should align with your specific compliance requirements (SOC 2, HIPAA, GDPR, etc.). Legal review recommended.

Draft an incident response policy for:

Incident type: [SECURITY/DATA/OPERATIONAL/ALL]
Industry requirements: [COMPLIANCE STANDARDS]
Company size: [SIZE]
Technical capabilities: [IN-HOUSE/OUTSOURCED/MIXED]

Policy must include:
1. Incident definition and severity levels
2. Response team roles and responsibilities
3. Detection and reporting procedures
4. Response and containment steps
5. Communication protocols (internal/external)
6. Documentation requirements
7. Post-incident review and improvement
8. Regulatory notification timing

Include:
- Decision trees for severity classification
- Escalation matrices
- Legal/compliance notification triggers
- Template notification language (subject to legal review)`,
    placeholders: [
      "SECURITY/DATA/OPERATIONAL/ALL",
      "COMPLIANCE STANDARDS",
      "SIZE",
      "IN-HOUSE/OUTSOURCED/MIXED",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "legal-compliance",
    categoryId: "policies",
    exampleOutput:
      "A comprehensive incident response policy with severity levels, escalation procedures, and compliance triggers.",
    customizationNotes: [
      "Include past incidents and lessons learned",
      "Note available tools and monitoring capabilities",
      "Specify retained outside counsel or forensics firms",
    ],
    tags: ["policies", "incident-response", "security", "compliance"],
    order: 10,
  },

  // ============================================================================
  // COMPLIANCE
  // ============================================================================

  {
    id: "compliance-checklist-generator",
    title: "Compliance Checklist Generator",
    description: "Generate comprehensive compliance checklists for your industry and location.",
    promptText: `DISCLAIMER: Compliance requirements vary and change. This checklist supports but does not replace professional compliance advice.

Create a compliance checklist for:

Business type: [INDUSTRY/BUSINESS TYPE]
Location(s): [STATES/COUNTRIES]
Company size: [SIZE]
Data collected: [DATA TYPES]
Employees in: [LOCATIONS]

Generate checklists for:
1. **Corporate**: Entity maintenance, filings, governance
2. **Employment**: Labor law posters, classifications, payroll
3. **Tax**: Registration, collection, filing requirements
4. **Data Privacy**: Privacy policy, consent, data rights
5. **Industry-Specific**: [YOUR INDUSTRY] requirements
6. **Financial**: Accounting standards, reporting (if applicable)

For each item, include:
- Frequency (one-time, annual, quarterly, ongoing)
- Responsible party/role
- Risk level for non-compliance
- Resources or forms needed`,
    placeholders: ["INDUSTRY/BUSINESS TYPE", "STATES/COUNTRIES", "SIZE", "DATA TYPES", "LOCATIONS"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "legal-compliance",
    categoryId: "compliance",
    exampleOutput:
      "A comprehensive compliance checklist with frequency, responsible parties, and risk assessments for each requirement.",
    customizationNotes: [
      "List specific compliance frameworks you need (SOC 2, ISO, etc.)",
      "Note any past compliance issues or audits",
      "Include upcoming regulatory changes you're aware of",
    ],
    tags: ["compliance", "checklist", "regulatory", "audit"],
    order: 11,
  },

  {
    id: "gdpr-compatibility-check",
    title: "GDPR Compatibility Check",
    description: "Review privacy practices for GDPR compliance readiness.",
    promptText: `DISCLAIMER: GDPR compliance requires legal review. This tool identifies potential areas for improvement.

Review our privacy practices for GDPR compatibility:

Our data practices:
- Data collected: [DATA TYPES]
- Purpose: [PURPOSES]
- Legal basis claimed: [BASES]
- Data shared with: [THIRD PARTIES]
- Data transfers: [COUNTRIES]
- Security measures: [MEASURES]

Assess and provide:
1. **Lawful Basis**: Adequacy of legal bases for each data type
2. **Privacy Notice Required Elements**: What's missing
3. **Data Subject Rights**: Capabilities we need for requests
4. **Consent Requirements**: When valid consent is needed
5. **Data Transfers**: Adequacy assessments for international transfers
6. **DPIA Triggers**: When Data Protection Impact Assessment is required
7. **Documentation Gap**: Records we're not maintaining

Include specific recommendations with priority levels.`,
    placeholders: ["DATA TYPES", "PURPOSES", "BASES", "THIRD PARTIES", "COUNTRIES", "MEASURES"],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "legal-compliance",
    categoryId: "compliance",
    exampleOutput:
      "A GDPR readiness assessment with gaps identified, prioritized recommendations, and documentation requirements.",
    customizationNotes: [
      "Specify if you process EU data subjects",
      "Note any high-risk processing (profiling, large-scale)",
      "Include if you're a controller or processor",
    ],
    tags: ["compliance", "gdpr", "privacy", "data"],
    order: 12,
  },

  {
    id: "audit-preparation-planner",
    title: "Audit Preparation Planner",
    description: "Prepare for compliance, financial, or security audits with organized checklists.",
    promptText: `DISCLAIMER: Audit preparation is complex and varies by audit type. This supports organization but is not comprehensive.

Create an audit preparation plan for:

Audit type: [SOC 2/ISO 27001/FINANCIAL/OTHER]
Audit scope: [WHAT'S INCLUDED]
Audit date: [TIMELINE]
Current maturity: [EXISTING CONTROLS/AD-HOC/NONE]

Provide:
1. **6-Month Prep**: What to start now (policies, documentation, controls)
2. **3-Month Prep**: Testing, evidence collection, gap remediation
3. **1-Month Prep**: Final evidence, walkthrough prep, logistics
4. **Evidence Organization**: How to structure documentation
5. **Common Findings**: Typical issues in this audit type
6. **Auditor Expectations**: What they'll request and ask
7. **Day-of-Logistics**: Who attends, what to have ready

Include templates for:
- Control implementation tracker
- Evidence collection matrix
- Risk treatment log`,
    placeholders: [
      "SOC 2/ISO 27001/FINANCIAL/OTHER",
      "WHAT'S INCLUDED",
      "TIMELINE",
      "EXISTING CONTROLS/AD-HOC/NONE",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "legal-compliance",
    categoryId: "compliance",
    exampleOutput:
      "A comprehensive audit preparation timeline with task breakdowns, evidence templates, and common pitfall warnings.",
    customizationNotes: [
      "Note if this is your first audit or a renewal",
      "Include your current biggest gaps",
      "Specify if using a specific audit firm",
    ],
    tags: ["compliance", "audit", "soc2", "iso"],
    order: 13,
  },

  {
    id: "vendor-compliance-questionnaire",
    title: "Vendor Compliance Questionnaire",
    description: "Create thorough security and compliance questionnaires for vendor assessment.",
    promptText: `DISCLAIMER: Vendor due diligence questionnaires should be tailored to your risk profile and compliance requirements.

Create a vendor compliance questionnaire for:

Vendor type: [SAAS/HANDLES DATA/INFRASTRUCTURE/OTHER]
Risk level: [HIGH/MEDIUM/LOW]
Our compliance requirements: [STANDARDS WE NEED]

Questionnaire should include:
1. **Company Information**: Structure, location, financial health
2. **Security Program**: Policies, training, oversight
3. **Data Protection**: Encryption, access controls, retention
4. **Compliance Certifications**: SOC 2, ISO, GDPR, etc.
5. **Incident Response**: History, procedures, notification
6. **Sub-processors**: Who else handles data
7. **Business Continuity**: Backup, disaster recovery
8. **Rights to Audit**: Contract provisions needed

Include:
- Scoring rubric for responses
- Red flag answers that trigger deeper review
- Evidence requests for each section`,
    placeholders: [
      "SAAS/HANDLES DATA/INFRASTRUCTURE/OTHER",
      "HIGH/MEDIUM/LOW",
      "STANDARDS WE NEED",
    ],
    bestTool: "chatgpt",
    difficulty: "intermediate",
    domainId: "legal-compliance",
    categoryId: "compliance",
    exampleOutput:
      "A comprehensive vendor questionnaire with scoring rubrics, red flag indicators, and evidence requests.",
    customizationNotes: [
      "Include industry-specific requirements",
      "Note past vendor incidents or concerns",
      "Specify if vendor handles regulated data (HIPAA, PCI)",
    ],
    tags: ["compliance", "vendor", "security", "assessment"],
    order: 14,
  },

  {
    id: "record-retention-scheduler",
    title: "Record Retention Scheduler",
    description: "Create a legally compliant record retention schedule.",
    promptText: `DISCLAIMER: Record retention requirements vary by jurisdiction and industry. Consult legal counsel for definitive guidance.

Create a record retention schedule for:

Business type: [INDUSTRY]
Jurisdictions: [STATES/COUNTRIES]
Employee locations: [STATES/COUNTRIES]
Regulatory requirements: [COMPLIANCE NEEDS]

For each record category, provide:
1. **Retention Period**: How long to keep
2. **Retention Trigger**: When clock starts (hire, termination, fiscal year-end)
3. **Storage Requirements**: Security, format, accessibility
4. **Disposal Method**: Secure deletion procedures
5. **Legal Hold Process**: How to suspend destruction for litigation
6. **Exceptions**: Records requiring different treatment

Categories to cover:
- Personnel files
- Payroll and tax records
- Contracts and agreements
- Financial and banking records
- Communications (email, chat)
- Incident and investigation reports
- [INDUSTRY-SPECIFIC RECORDS]`,
    placeholders: ["INDUSTRY", "STATES/COUNTRIES", "COMPLIANCE NEEDS"],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "legal-compliance",
    categoryId: "compliance",
    exampleOutput:
      "A detailed retention schedule with legal citations, disposal procedures, and legal hold processes.",
    customizationNotes: [
      "Note any pending or threatened litigation",
      "Include specific data types your company handles",
      "Consider cloud platform data storage locations",
    ],
    tags: ["compliance", "retention", "records", "legal"],
    order: 15,
  },

  // ============================================================================
  // TERMS & PRIVACY
  // ============================================================================

  {
    id: "terms-of-service-drafter",
    title: "Terms of Service Drafter",
    description: "Draft comprehensive Terms of Service for web or mobile applications.",
    promptText: `DISCLAIMER: Terms of Service are legal contracts requiring attorney review. This is a starting draft only.

Draft Terms of Service for:

Application type: [WEB/MOBILE/BOTH]
Business model: [FREE/FREEMIUM/SUBSCRIPTION/TRANSACTIONAL]
User data collected: [DATA TYPES]
User-generated content: [YES/NO]
Jurisdiction: [PRIMARY LEGAL VENUE]
Age restrictions: [NONE/13+/18+/21+]

Draft must include:
1. Acceptance of terms and account creation
2. Service description and modifications
3. User responsibilities and prohibited activities
4. Intellectual property and license grants
5. User-generated content rights and license
6. Payment and billing terms (if applicable)
7. Termination rights and procedures
8. Disclaimers and limitation of liability
9. Indemnification provisions
10. Dispute resolution and governing law
11. General provisions (severability, waivers, etc.)

Include attorney review notes for:
- Liability limitations in your jurisdiction
- Required consumer protection disclosures
- Privacy policy integration points`,
    placeholders: [
      "WEB/MOBILE/BOTH",
      "FREE/FREEMIUM/SUBSCRIPTION/TRANSACTIONAL",
      "DATA TYPES",
      "YES/NO",
      "PRIMARY LEGAL VENUE",
      "NONE/13+/18+/21+",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "legal-compliance",
    categoryId: "terms-privacy",
    exampleOutput:
      "A comprehensive ToS draft with standard provisions and attorney review notes for jurisdiction-specific requirements.",
    customizationNotes: [
      "Include specific features requiring terms (in-app purchases, user forums)",
      "Note any international users",
      "Specify if this covers API access",
    ],
    tags: ["terms", "tos", "legal", "web"],
    order: 16,
  },

  {
    id: "privacy-policy-drafter",
    title: "Privacy Policy Drafter",
    description: "Create a compliant privacy policy for your application.",
    promptText: `DISCLAIMER: Privacy policies have legal requirements varying by jurisdiction (GDPR, CCPA, etc.). Attorney review required.

Draft a privacy policy for:

Application: [WEB/MOBILE/BOTH]
Company: [COMPANY NAME]
Jurisdictions: [STATES/COUNTRIES WHERE USERS LOCATED]
Data collected: [LIST ALL DATA]
Data purposes: [WHAT USED FOR]
Data sharing: [WHO SHARED WITH]
Third-party services: [ANALYTICS, ADS, HOSTING]
Cookies: [YES/NO + DESCRIPTION]
Children's data: [YES/NO]

Policy must include:
1. Information collected (types, sources, methods)
2. Purpose and legal basis for processing
3. How data is used and shared
4. Cookies and tracking technologies
5. Data retention and deletion
6. User rights and how to exercise them
7. Data security measures
8. International data transfers
9. California-specific rights (if CA users)
10. Children's privacy (if applicable)
11. Policy updates and notification
12. Contact information

Include GDPR CCPA compatibility notes.`,
    placeholders: [
      "WEB/MOBILE/BOTH",
      "COMPANY NAME",
      "STATES/COUNTRIES WHERE USERS LOCATED",
      "LIST ALL DATA",
      "WHAT USED FOR",
      "WHO SHARED WITH",
      "ANALYTICS, ADS, HOSTING",
      "YES/NO + DESCRIPTION",
      "YES/NO",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "legal-compliance",
    categoryId: "terms-privacy",
    exampleOutput:
      "A comprehensive privacy policy with GDPR/CCPA compatibility, clear user rights, and required legal elements.",
    customizationNotes: [
      "List every third-party service used",
      "Include all data collection points",
      "Note any sensitive data (health, financial, biometric)",
    ],
    tags: ["privacy", "gdpr", "ccpa", "policy"],
    order: 17,
  },

  {
    id: "cookie-consent-banner",
    title: "Cookie Consent Banner Generator",
    description: "Create compliant cookie consent banner text and implementation guidance.",
    promptText: `DISCLAIMER: Cookie consent requirements vary by jurisdiction (GDPR, ePrivacy, CCPA). Legal review recommended.

Create cookie consent banner copy for:

Website type: [SITE TYPE]
User jurisdictions: [EU/UK/US/OTHER]
Cookies used:
- Essential: [DESCRIPTION]
- Analytics: [DESCRIPTION]
- Marketing: [DESCRIPTION]
- Other: [DESCRIPTION]

Provide:
1. **Banner Text**: Initial consent message (clear, specific, ungrouped)
2. **Consent Options**: Accept all, reject all, granular choices
3. **Detail View**: What the "more info" or "settings" panel shows
4. **Language Variations**: Required wording for EU vs. US
5. **Rejection Handling**: Equal access if cookies declined
6. **Documentation**: Cookie record-keeping requirements

Include:
- Implementation guidance (cookie categories, timing)
- Renewal consent triggers
- Withdrawal mechanisms
- IAB TCF compatibility notes (if applicable)`,
    placeholders: ["SITE TYPE", "EU/UK/US/OTHER", "DESCRIPTION"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "legal-compliance",
    categoryId: "terms-privacy",
    exampleOutput:
      "Cookie consent banner copy with granular options, implementation guidance, and jurisdiction-specific requirements.",
    customizationNotes: [
      "List all third-party cookies by provider",
      "Note if using IAB framework",
      "Specify if this is for a mobile app",
    ],
    tags: ["cookies", "consent", "gdpr", "privacy"],
    order: 18,
  },

  {
    id: "data-subject-request-form",
    title: "Data Subject Request Form Generator",
    description: "Create forms for users to exercise GDPR data rights.",
    promptText: `DISCLAIMER: Data subject request procedures must comply with GDPR and other privacy regulations. Legal review recommended.

Create data subject request forms for:

Request types to support:
- Access requests
- Deletion requests
- Rectification requests
- Portability requests
- Objection to processing
- Restriction of processing

For each request type, provide:
1. **Form Fields**: Required information to collect
2. **Verification Process**: How to confirm identity
3. **Response Templates**: Acknowledgment and fulfillment responses
4. **Deadline Tracking**: Internal timelines for response
5. **Documentation**: Records to maintain for compliance
6. **Refusal Scenarios**: When requests can be denied
7. **Third-Party Handling**: How to handle data from others

Include:
- User-friendly language
- Privacy policy integration
- Confirmation email templates
- Internal processing checklists`,
    placeholders: [],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "legal-compliance",
    categoryId: "terms-privacy",
    exampleOutput:
      "Complete DSR forms and processing templates with verification procedures and response timelines.",
    customizationNotes: [
      "Specify if users are authenticated or anonymous",
      "Note third-party data sources",
      "Include specific data systems you use",
    ],
    tags: ["gdpr", "privacy", "forms", "data-rights"],
    order: 19,
  },

  {
    id: "data-processing-agreement",
    title: "Data Processing Agreement Generator",
    description: "Draft GDPR-compliant data processing agreements for vendors.",
    promptText: `DISCLAIMER: DPAs are legal contracts between controllers and processors. Attorney review is essential.

Draft a Data Processing Agreement for:

Relationship type:
- We are the: [CONTROLLER/PROCESSOR/BOTH]
- Vendor is: [PROCESSOR/CONTROLLER/SUB-PROCESSOR]
Data processed: [DATA TYPES]
Processing activities: [WHAT VENDOR DOES]
Data location: [WHERE STORED/PROCESSED]

DPA must include:
1. Parties and scope (subject matter, duration, nature, purpose)
2. Processor obligations (confidentiality, security, authorized staff)
3. Permitted subprocessors (consent requirements)
4. Data subject rights assistance
5. Data return/deletion upon termination
6. Audit rights (frequency, notice, scope)
7. Controller responsibility (lawful basis, instructions, breach notification)
8. Liability and indemnification
9. Termination provisions

Include:
- Standard Contractual Clauses (SCC) integration
- International data transfer provisions
- Technical and organizational measures
- Breach notification procedures and timelines`,
    placeholders: [
      "CONTROLLER/PROCESSOR/BOTH",
      "PROCESSOR/CONTROLLER/SUB-PROCESSOR",
      "DATA TYPES",
      "WHAT VENDOR DOES",
      "WHERE STORED/PROCESSED",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "legal-compliance",
    categoryId: "terms-privacy",
    exampleOutput:
      "A comprehensive DPA template with GDPR-required clauses, SCC integration, and breach notification procedures.",
    customizationNotes: [
      "Note if data transfers outside EU/EEA",
      "Specify subprocessor pre-approval needed",
      "Include specific security requirements",
    ],
    tags: ["gdpr", "dpa", "vendor", "privacy"],
    order: 20,
  },
];
