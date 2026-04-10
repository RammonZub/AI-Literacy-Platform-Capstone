/**
 * Data Analysis & Research Prompts
 *
 * PURPOSE: Prompts for market research, data interpretation, competitive analysis, and trend identification.
 *
 * DOMAIN: Data Analysis & Research
 * CATEGORIES:
 * - Market Research (7 prompts)
 * - Data Analysis (8 prompts)
 * - Competitive Analysis (7 prompts)
 * - Surveys (7 prompts)
 * - Trend Analysis (6 prompts)
 *
 * @see src/types/resources.ts - Prompt type definition
 */

import type { Prompt } from "@/types/resources";

/**
 * Data Analysis & Research prompts collection
 *
 * Each prompt is tested across ChatGPT, Claude, and Gemini.
 * Best tool indicates which gives the most consistent results.
 */
export const dataResearchPrompts: Prompt[] = [
  // ============================================================================
  // MARKET RESEARCH (7 prompts)
  // ============================================================================

  {
    id: "market-sizing-estimation",
    title: "Market Sizing Estimation",
    description:
      "Estimate market size using bottom-up and top-down approaches for accurate TAM/SAM/SOM calculations.",
    promptText: `Help me estimate the market size for:

Product/Service: [PRODUCT OR SERVICE]
Target Geography: [GEOGRAPHY]
Target Customer Segment: [CUSTOMER SEGMENT]

Please provide:
1. TAM (Total Addressable Market)
   - Top-down approach: Start with total market revenue
   - Bottom-up approach: Calculate from potential customers × price

2. SAM (Serviceable Addressable Market)
   - Geographic or segment restrictions
   - Channels we can realistically reach

3. SOM (Serviceable Obtainable Market)
   - Realistic short-term capture (1-3 years)
   - Based on resources, competition, and go-to-market

4. Key assumptions and data sources
5. Sensitivity analysis (best/worst/likely cases)
6. Growth rate projections (3-5 years)`,
    placeholders: ["PRODUCT OR SERVICE", "GEOGRAPHY", "CUSTOMER SEGMENT"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "data-research",
    categoryId: "market-research",
    exampleOutput:
      "A complete market sizing breakdown with TAM/SAM/SOM calculations, supporting assumptions, data sources, and growth projections.",
    customizationNotes: [
      "Include any existing customer data or pilot results",
      "Mention specific geographic regions if operating locally",
      "Add pricing strategy if differentiated from competitors",
    ],
    tags: ["market-sizing", "tam", "sam", "som", "market-analysis"],
    order: 1,
  },

  {
    id: "customer-segmentation",
    title: "Customer Segmentation Framework",
    description:
      "Identify and analyze distinct customer segments based on demographics, customer attitudes, and behavior.",
    promptText: `Help me create a customer segmentation framework for:

Business/Product: [BUSINESS DESCRIPTION]
Current Customer Base: [CURRENT CUSTOMER DESCRIPTION]
Market Context: [MARKET CONTEXT]

Please analyze and provide:
1. Demographic Segments
   - Age, income, location, education, occupation
   - Firmographics for B2B (company size, industry, role)

2. Customer Attitude Segments
   - Values, attitudes, interests, lifestyle patterns
   - Pain points and motivations
   - Decision-making criteria

3. Behavioral Segments
   - Usage patterns, purchase frequency
   - Brand loyalty, price sensitivity
   - Channel preferences

4. Segment Prioritization Matrix
   - Segment size (number of potential customers)
   - Segment value (revenue potential)
   - Accessibility (ease of reaching)
   - Fit with our offering

5. Recommended primary segments (1-3) with:
   - Persona profiles
   - Value propositions
   - Go-to-market approach`,
    placeholders: ["BUSINESS DESCRIPTION", "CURRENT CUSTOMER DESCRIPTION", "MARKET CONTEXT"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "data-research",
    categoryId: "market-research",
    exampleOutput:
      "A detailed segmentation framework with 4-6 distinct segments, prioritization matrix, and recommended target segments with persona profiles.",
    customizationNotes: [
      "Include any existing customer data or survey results",
      "Mention your current best customers for pattern identification",
      "Add competitor segment focus if known",
    ],
    tags: ["segmentation", "customer-personas", "target-market", "positioning"],
    order: 2,
  },

  {
    id: "market-opportunity-scorecard",
    title: "Market Opportunity Scorecard",
    description:
      "Evaluate market opportunities across multiple dimensions to prioritize investments.",
    promptText: `Evaluate this market opportunity using a comprehensive scorecard:

Opportunity: [OPPORTUNITY DESCRIPTION]
Industry: [INDUSTRY]
Stage: [IDEATION/EARLY/GROWTH/MATURE]

Please score (1-10) and provide rationale for:
1. Market Attractiveness
   - Market size and growth rate
   - Profit potential and margins
   - Competitive intensity
   - Barrier to entry

2. Strategic Fit
   - Alignment with core competencies
   - Leverage existing assets/capabilities
   - Synergy with current offerings

3. Execution Feasibility
   - Resource requirements
   - Time to market
   - Technical/operational complexity
   - Regulatory hurdles

4. Risk Profile
   - Market risk (demand uncertainty)
   - Competitive risk (new entrants)
   - Technology risk (obsolescence)
   - Financial risk (investment required)

5. Overall Recommendation
   - Total score and category (Go/No-Go/Maybe)
   - Key risks and how to mitigate
   - Success factors and KPIs to track`,
    placeholders: ["OPPORTUNITY DESCRIPTION", "INDUSTRY", "IDEATION/EARLY/GROWTH/MATURE"],
    bestTool: "chatgpt",
    difficulty: "intermediate",
    domainId: "data-research",
    categoryId: "market-research",
    exampleOutput:
      "A scored evaluation across all dimensions with detailed rationale, overall recommendation, and key risk mitigation strategies.",
    customizationNotes: [
      "Include specific investment amounts if known",
      "Mention any proprietary advantages or assets",
      "Add timeline constraints if applicable",
    ],
    tags: ["opportunity-analysis", "market-evaluation", "scorecard", "prioritization"],
    order: 3,
  },

  {
    id: "buyer-journey-mapping",
    title: "Buyer Journey Mapping",
    description: "Map the complete customer journey from awareness to purchase and beyond.",
    promptText: `Create a detailed buyer journey map for:

Product/Service: [PRODUCT/SERVICE]
Target Customer: [CUSTOMER SEGMENT]
Purchase Complexity: [LOW/MEDIUM/HIGH]
Price Point: [PRICE RANGE]

Please map each stage:

1. Awareness Stage
   - Triggers that initiate the journey
   - Questions customers ask
   - Information sources they use
   - Content that resonates

2. Consideration Stage
   - Evaluation criteria and comparison factors
   - Research methods and tools
   - Objections and concerns
   - Influencers and decision-makers

3. Decision Stage
   - Final decision factors
   - Purchase barriers and friction points
   - Role of urgency and timing
   - Closing factors that tip the decision

4. Post-Purchase Stage
   - Onboarding and initial use
   - Success metrics and satisfaction measures
   - Advocacy and referral triggers
   - Retention and renewal factors

For each stage, provide:
- Key customer touchpoints
- Content and messaging recommendations
- Opportunities to accelerate or improve
- Metrics to track`,
    placeholders: ["PRODUCT/SERVICE", "CUSTOMER SEGMENT", "LOW/MEDIUM/HIGH", "PRICE RANGE"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "data-research",
    categoryId: "market-research",
    exampleOutput:
      "A comprehensive journey map with detailed stage analysis, touchpoint identification, and actionable improvement recommendations.",
    customizationNotes: [
      "Include any existing customer journey data or analytics",
      "Mention your current conversion funnel if available",
      "Add specific product features that matter at each stage",
    ],
    tags: ["buyer-journey", "customer-lifecycle", "funnel", "conversion"],
    order: 4,
  },

  {
    id: "market-entry-strategy",
    title: "Market Entry Strategy",
    description: "Develop a comprehensive go-to-market strategy for entering a new market.",
    promptText: `Develop a market entry strategy for:

Product/Service: [PRODUCT/SERVICE]
New Market: [MARKET DESCRIPTION - geography or segment]
Current Business: [CURRENT BUSINESS CONTEXT]
Resources Available: [RESOURCES/BUDGET]

Please provide:

1. Market Entry Assessment
   - Market attractiveness score
   - Entry barriers and requirements
   - Competitive landscape
   - Regulatory considerations

2. Entry Mode Selection
   - Direct vs. partnership vs. acquisition
   - Pros/cons of each option for our situation
   - Recommended approach with rationale

3. Go-to-Market Plan
   - Target customer segments (prioritized)
   - Value proposition and positioning
   - Pricing strategy
   - Channel strategy
   - Marketing and sales approach

4. Timeline and Milestones
   - Phase 1: Preparation (research, partnerships, compliance)
   - Phase 2: Soft launch (pilot, learn, iterate)
   - Phase 3: Scale (full market entry)

5. Risk Analysis
   - Key risks and probability
   - Mitigation strategies
   - Contingency plans

6. Investment Requirements
   - One-time setup costs
   - Ongoing operational costs
   - Expected break-even point`,
    placeholders: [
      "PRODUCT/SERVICE",
      "MARKET DESCRIPTION - geography or segment",
      "CURRENT BUSINESS CONTEXT",
      "RESOURCES/BUDGET",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "data-research",
    categoryId: "market-research",
    exampleOutput:
      "A strategic market entry plan with mode recommendation, phased timeline, risk mitigation, and investment requirements.",
    customizationNotes: [
      "Include any existing partnerships or relationships in the target market",
      "Mention competitors and their entry strategies if known",
      "Add any regulatory or compliance requirements specific to your industry",
    ],
    tags: ["market-entry", "go-to-market", "expansion", "international"],
    order: 5,
  },

  {
    id: "ideal-customer-profile",
    title: "Ideal Customer Profile (ICP) Builder",
    description:
      "Define your ideal customer with detailed demographic, firmographic, and behavioral criteria.",
    promptText: `Help me create a detailed Ideal Customer Profile (ICP) for:

Product/Service: [PRODUCT/SERVICE]
Best Current Customers: [DESCRIBE YOUR BEST CUSTOMERS]
Typical Deal Size: [DEAL SIZE]
Sales Cycle: [SALES CYCLE LENGTH]

Please build an ICP with:

1. Firmographics (for B2B) or Demographics (for B2C)
   - Company size, industry, location, growth stage OR
   - Age, income, location, family status, occupation
   - Technographics (tech stack, tools used)

2. Psychographics
   - Values and priorities
   - Pain points and challenges
   - Goals and aspirations
   - Attitudes toward our category

3. Behavioral Indicators
   - Buying behavior and patterns
   - Research methods and information sources
   - Decision-making process
   - Budget and timing patterns

4. Trigger Events
   - What events create need/awareness
   - Seasonal or cyclical patterns
   - Life/business changes that trigger interest

5. Red Flags (exclusion criteria)
   - Characteristics that predict poor fit
   - Warning signs during qualification
   - When to say "not a fit"

6. Qualification Questions
   - 5-10 questions to identify ICP fit
   - Scoring criteria for each answer`,
    placeholders: [
      "PRODUCT/SERVICE",
      "DESCRIBE YOUR BEST CUSTOMERS",
      "DEAL SIZE",
      "SALES CYCLE LENGTH",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "data-research",
    categoryId: "market-research",
    exampleOutput:
      "A detailed ICP document with clear criteria, trigger events, red flags, and qualification questions.",
    customizationNotes: [
      "Include data from your most successful deals",
      "Mention characteristics of your worst customers (what to avoid)",
      "Add any proprietary data or patterns youve observed",
    ],
    tags: ["icp", "ideal-customer", "targeting", "qualification"],
    order: 6,
  },

  {
    id: "market-trend-identification",
    title: "Market Trend Identification",
    description: "Identify and analyze emerging trends in your market for strategic positioning.",
    promptText: `Help me identify and analyze key market trends for:

Industry: [INDUSTRY]
Time Horizon: [1-3 YEARS/3-5 YEARS/5-10 YEARS]
Current Context: [ANY CONTEXT ABOUT MARKET CONDITIONS]

Please identify and analyze:

1. Technology Trends
   - Emerging technologies and their impact
   - Adoption timelines
   - Disruption potential

2. Customer Behavior Trends
   - Changing preferences and expectations
   - New purchasing patterns
   - Generational shifts

3. Competitive Trends
   - New business models emerging
   - Consolidation or fragmentation patterns
   - Incumbent vs. startup dynamics

4. Regulatory/Policy Trends
   - Pending regulations or policy changes
   - Compliance requirements
   - Government initiatives

5. Macroeconomic Trends
   - Economic factors affecting the market
   - Supply chain dynamics
   - Labor market changes

For each trend:
- Current state and trajectory
- Confidence level (High/Medium/Low)
- Timeline for impact
- Implications (opportunities and threats)
- Recommended actions

6. Synthesis
- Top 3 trends requiring action
- Trends to monitor
- Trends to ignore (and why)`,
    placeholders: [
      "INDUSTRY",
      "1-3 YEARS/3-5 YEARS/5-10 YEARS",
      "ANY CONTEXT ABOUT MARKET CONDITIONS",
    ],
    bestTool: "chatgpt",
    difficulty: "intermediate",
    domainId: "data-research",
    categoryId: "market-research",
    exampleOutput:
      "A comprehensive trend analysis with 10-15 trends identified, each with impact assessment and actionable recommendations.",
    customizationNotes: [
      "Include any proprietary data or observations",
      "Mention specific competitors or companies to watch",
      "Add geographic considerations if relevant",
    ],
    tags: ["trends", "market-analysis", "forecasting", "strategic-planning"],
    order: 7,
  },

  // ============================================================================
  // DATA ANALYSIS (8 prompts)
  // ============================================================================

  {
    id: "data-insight-extraction",
    title: "Data Insight Extraction",
    description: "Extract meaningful insights and patterns from raw data or metrics.",
    promptText: `Help me extract insights from the following data:

Context: [WHAT THE DATA REPRESENTS]
Time Period: [TIME PERIOD]
Data:
[PASTE YOUR DATA OR METRICS]

Please analyze and provide:

1. Data Overview
   - Summary statistics (mean, median, min, max)
   - Key patterns or trends visible
   - Notable outliers or anomalies

2. Key Findings
   - Top 3-5 most significant insights
   - What these insights mean for the business
   - Confidence level in each finding

3. Patterns and Trends
   - Increasing/decreasing patterns
   - Seasonal or cyclical patterns
   - Correlations between variables
   - Segmentation differences

4. Actionable Recommendations
   - What to do based on these insights
   - What to investigate further
   - What to start/stop/continue

5. Data Quality Notes
   - Any limitations or concerns
   - Missing data or gaps
   - Additional data that would strengthen analysis`,
    placeholders: ["WHAT THE DATA REPRESENTS", "TIME PERIOD", "PASTE YOUR DATA OR METRICS"],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "data-research",
    categoryId: "data-analysis",
    exampleOutput:
      "A structured analysis with summary statistics, key insights, pattern identification, and actionable recommendations.",
    customizationNotes: [
      "Include column headers if analyzing tabular data",
      "Mention any specific questions you want answered",
      "Add context about how data was collected if relevant",
    ],
    tags: ["data-analysis", "insights", "patterns", "metrics"],
    order: 8,
  },

  {
    id: "metric-definition-guide",
    title: "Metric Definition Guide",
    description:
      "Define clear, standardized metrics with formulas, data sources, and interpretation guidance.",
    promptText: `Help me create clear, standardized metric definitions.

Business Context: [BUSINESS TYPE]
Domain: [DOMAIN - e.g., marketing, sales, product]

Metrics to Define:
[LIST METRICS OR DESCRIBE WHAT YOU WANT TO MEASURE]

For each metric, please provide:

1. Metric Definition
   - Clear, concise definition
   - What it measures and why it matters
   - Business question it answers

2. Formula
   - Exact calculation formula
   - Component definitions
   - Example calculation

3. Data Requirements
   - Data sources needed
   - Collection method
   - Frequency of measurement

4. Interpretation Guide
   - What "good" looks like
   - Benchmark ranges (if available)
   - Red flags or warning signs
   - Contextual factors that affect interpretation

5. Limitations
   - What the metric doesn't capture
   - Common misunderstandings
   - Complementary metrics to use

6. Dashboard Visuals
   - Best chart type for visualization
   - Time period to display
   - Comparison benchmarks to show`,
    placeholders: [
      "BUSINESS TYPE",
      "DOMAIN - e.g., marketing, sales, product",
      "LIST METRICS OR DESCRIBE WHAT YOU WANT TO MEASURE",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "data-research",
    categoryId: "data-analysis",
    exampleOutput:
      "Detailed metric definitions with formulas, data requirements, interpretation guides, and visualization recommendations.",
    customizationNotes: [
      "Include industry benchmarks if known",
      "Mention any existing metrics you want to align with",
      "Add specific tools or systems you use for data collection",
    ],
    tags: ["metrics", "kpi", "definitions", "measurement"],
    order: 9,
  },

  {
    id: "cohort-analysis-framework",
    title: "Cohort Analysis Framework",
    description:
      "Analyze how different groups behave over time to uncover patterns and improve retention.",
    promptText: `Help me design and interpret a cohort analysis.

Business Type: [BUSINESS TYPE]
User/Buyer Type: [WHO ARE YOUR CUSTOMERS]
Key Behavior: [WHAT BEHAVIOR TO ANALYZE - e.g., purchases, engagement, retention]

Please provide:

1. Cohort Design
   - How to define cohorts (sign-up date, acquisition channel, customer type, etc.)
   - Recommended cohort size and time windows
   - Primary vs. secondary cohort dimensions

2. Analysis Framework
   - Metrics to track per cohort
   - Time periods to measure
   - Comparison benchmarks

3. Analysis Templates
   - Retention curve analysis
   - Revenue/generation analysis
   - Engagement patterns

4. Interpretation Guide
   - What good vs. bad cohort curves look like
   - Early warning signs to watch
   - Success patterns to replicate

5. Action Planning
   - How to use cohort insights for improvement
   - Segmentation opportunities
   - Experimentation ideas based on findings

6. Visualization Recommendations
   - Heat map setup
   - Curve overlay approach
   - Key insights to highlight`,
    placeholders: [
      "BUSINESS TYPE",
      "WHO ARE YOUR CUSTOMERS",
      "WHAT BEHAVIOR TO ANALYZE - e.g., purchases, engagement, retention",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "data-research",
    categoryId: "data-analysis",
    exampleOutput:
      "A complete cohort analysis framework with design recommendations, interpretation guides, and actionable templates.",
    customizationNotes: [
      "Include any existing cohort data if available",
      "Mention your current retention or engagement challenges",
      "Add business model specifics (subscription, transactional, etc.)",
    ],
    tags: ["cohort-analysis", "retention", "customer-behavior", "longitudinal"],
    order: 10,
  },

  {
    id: "ab-test-calculator",
    title: "A/B Test Calculator",
    description: "Design statistically valid A/B tests and interpret results accurately.",
    promptText: `Help me design and analyze an A/B test.

Test Context: [WHAT YOU'RE TESTING]
Current Performance: [BASELINE METRICS]
Expected Impact: [WHAT CHANGE YOU EXPECT]

Please provide:

1. Test Design
   - Hypothesis statement (if X then Y because Z)
   - Primary metric to measure
   - Secondary metrics to track
   - Control vs. variant definitions

2. Sample Size Calculator
   - Minimum detectable effect (MDE)
   - Required sample size per variant
   - Test duration estimate
   - Power analysis (confidence level, statistical significance)

3. Test Setup Checklist
   - Randomization method
   - Segmentation considerations
   - External factors to control
   - Pre-test checklist

4. Analysis Framework
   - How to calculate statistical significance
   - Confidence intervals to report
   - When to call a winner
   - What to do if it's inconclusive

5. Result Interpretation
   - Template for reporting results
   - How to calculate lift and confidence
   - Business impact calculation
   - Segmentation analysis to run

6. Next Steps
   - If winner: rollout strategy
   - If loser: what to learn
   - If inconclusive: next test to run`,
    placeholders: ["WHAT YOU'RE TESTING", "BASELINE METRICS", "WHAT CHANGE YOU EXPECT"],
    bestTool: "chatgpt",
    difficulty: "intermediate",
    domainId: "data-research",
    categoryId: "data-analysis",
    exampleOutput:
      "A complete A/B test framework with sample size calculations, setup checklist, and result interpretation templates.",
    customizationNotes: [
      "Include your traffic or user volume for accurate sample sizes",
      "Mention any technical constraints on testing",
      "Add seasonality or timing considerations",
    ],
    tags: ["ab-testing", "experiments", "statistics", "optimization"],
    order: 11,
  },

  {
    id: "sql-query-builder",
    title: "SQL Query Builder for Analysis",
    description: "Generate SQL queries to answer business questions from your database.",
    promptText: `Help me write SQL queries to analyze my data.

Database Type: [POSTGRES/MYSQL/SNOWFLAKE/BIGQUERY/ETC]
Question to Answer: [BUSINESS QUESTION]
Table Structure (if known):
[TABLES AND RELATIONSHIPS]

Please provide:

1. Query Strategy
   - Approach to answering the question
   - Tables and joins needed
   - Data transformations required

2. SQL Query
   - Complete, ready-to-run SQL query
   - Comments explaining each section
   - Parameter placeholders for filtering

3. Query Variations
   - Alternative approaches with trade-offs
   - Performance optimizations
   - Edge case handling

4. Analysis Plan
   - How to interpret results
   - Follow-up questions the data might raise
   - Visualizations that would help

5. Data Quality Checks
   - What to validate before trusting results
   - Common data issues to look for
   - How to handle nulls or missing data`,
    placeholders: [
      "POSTGRES/MYSQL/SNOWFLAKE/BIGQUERY/ETC",
      "BUSINESS QUESTION",
      "TABLES AND RELATIONSHIPS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "data-research",
    categoryId: "data-analysis",
    exampleOutput:
      "Production-ready SQL queries with explanations, alternative approaches, and analysis guidance.",
    customizationNotes: [
      "Include sample data or table schemas if available",
      "Mention your SQL proficiency level for appropriate complexity",
      "Add any specific database features or limitations",
    ],
    tags: ["sql", "database", "query", "data-analysis"],
    order: 12,
  },

  {
    id: "funnel-analysis-template",
    title: "Funnel Analysis Template",
    description:
      "Analyze conversion funnels to identify drop-off points and optimization opportunities.",
    promptText: `Help me analyze a conversion funnel.

Business Type: [BUSINESS TYPE]
Funnel Description: [DESCRIBE THE FUNNEL STEPS]
Current Funnel Data:
[CONVERSION DATA FOR EACH STEP IF AVAILABLE]

Please provide:

1. Funnel Documentation
   - Clear definition of each funnel step
   - Entry criteria and requirements
   - Exit criteria (what counts as conversion)

2. Analysis Framework
   - Conversion rate calculations
   - Drop-off analysis by step
   - Comparison to benchmarks (if available)

3. Drop-off Diagnosis
   - For each major drop-off point:
     * Likely causes and hypotheses
     * Data to collect to validate
     * Experiments to run

4. Segmentation Analysis
   - Key dimensions to segment by (source, device, persona, etc.)
   - High-performing segments to study
   - Underperforming segments to address

5. Opportunity Prioritization
   - Impact vs. effort matrix for fixes
   - Quick wins vs. strategic improvements
   - Test sequence recommendations

6. Monitoring Setup
   - Metrics to track continuously
   - Alert thresholds
   - Reporting cadence`,
    placeholders: [
      "BUSINESS TYPE",
      "DESCRIBE THE FUNNEL STEPS",
      "CONVERSION DATA FOR EACH STEP IF AVAILABLE",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "data-research",
    categoryId: "data-analysis",
    exampleOutput:
      "A complete funnel analysis with drop-off diagnosis, segmentation recommendations, and prioritized improvement opportunities.",
    customizationNotes: [
      "Include any existing funnel analytics or tool data",
      "Mention your top performing segments for comparison",
      "Add technical constraints on what can be changed",
    ],
    tags: ["funnel", "conversion", "drop-off", "optimization"],
    order: 13,
  },

  {
    id: "anomaly-detection",
    title: "Anomaly Detection in Data",
    description: "Identify and investigate anomalies in your data metrics.",
    promptText: `Help me detect and investigate anomalies in my data.

Metric/Context: [WHAT YOU'RE MEASURING]
Time Period: [TIME PERIOD]
Observed Anomaly: [DESCRIBE THE UNUSUAL PATTERN]
Baseline Expectation: [WHAT YOU NORMALLY EXPECT]

Please help with:

1. Anomaly Classification
   - Type of anomaly (spike, drop, trend shift, pattern break)
   - Severity assessment (minor/major/critical)
   - Likely scope (isolated vs. systemic)

2. Investigation Framework
   - Data integrity checks to run first
   - Common causes to investigate
   - Diagnostic queries or analyses

3. Root Cause Analysis
   - Hypothesis generation
   - How to test each hypothesis
   - Data to collect for validation

4. Decision Framework
   - When to investigate further vs. monitor
   - When to take immediate action
   - Escalation criteria

5. Prevention Planning
   - Monitoring to prevent future surprises
   - Alert rules to set up
   - Documentation needs

6. Communication Template
   - How to report the anomaly
   - Stakeholder notification approach
   - Follow-up cadence`,
    placeholders: [
      "WHAT YOU'RE MEASURING",
      "TIME PERIOD",
      "DESCRIBE THE UNUSUAL PATTERN",
      "WHAT YOU NORMALLY EXPECT",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "data-research",
    categoryId: "data-analysis",
    exampleOutput:
      "A structured investigation framework with hypothesis generation, diagnostic steps, and communication templates.",
    customizationNotes: [
      "Include recent changes that might be related",
      "Mention any known data quality issues",
      "Add seasonality or periodic patterns if relevant",
    ],
    tags: ["anomaly", "outliers", "root-cause", "investigation"],
    order: 14,
  },

  {
    id: "dashboard-specification",
    title: "Dashboard Specification",
    description: "Design effective dashboards with the right metrics, visualizations, and layout.",
    promptText: `Help me design a dashboard for:

Dashboard Purpose: [WHAT DECISIONS IT INFORMS]
Target Audience: [WHO WILL USE IT]
Data Available: [WHAT DATA YOU HAVE ACCESS TO]
Update Frequency: [REAL-TIME/DAILY/WEEKLY/MONTHLY]

Please design:

1. Dashboard Strategy
   - Primary questions the dashboard answers
   - Key decisions it informs
   - Success metrics for the dashboard itself

2. Metric Selection
   - Core metrics (must-have)
   - Secondary metrics (nice-to-have)
   - Metrics explicitly excluded (and why)

3. Visualization Design
   - For each metric:
     * Best chart type and rationale
     * Time period to display
     - Comparisons to show (YoY, WoW, benchmark)
     * Threshold or target indicators

4. Layout Strategy
   - Above-the-fold priorities
   - Visual hierarchy
   - Grouping and flow

5. Interaction Design
   - Drill-down capabilities
   - Filters and parameters
   - Export and sharing features

6. Implementation Spec
   - Tool recommendations (if not already chosen)
   - Data refresh strategy
   - Performance considerations
   - Maintenance plan`,
    placeholders: [
      "WHAT DECISIONS IT INFORMS",
      "WHO WILL USE IT",
      "WHAT DATA YOU HAVE ACCESS TO",
      "REAL-TIME/DAILY/WEEKLY/MONTHLY",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "data-research",
    categoryId: "data-analysis",
    exampleOutput:
      "A complete dashboard specification with metric selection, visualization designs, and implementation guidance.",
    customizationNotes: [
      "Mention existing dashboards to integrate with or replace",
      "Include technical constraints or tool preferences",
      "Add examples of dashboards you like",
    ],
    tags: ["dashboard", "visualization", "metrics", "reporting"],
    order: 15,
  },

  // ============================================================================
  // COMPETITIVE ANALYSIS (7 prompts)
  // ============================================================================

  {
    id: "swot-analysis-generator",
    title: "SWOT Analysis Generator",
    description: "Conduct a comprehensive SWOT analysis for strategic planning.",
    promptText: `Generate a SWOT analysis for:

Company/Product: [YOUR COMPANY OR PRODUCT]
Industry: [INDUSTRY]
Context: [ANY SPECIFIC CONTEXT - e.g., entering new market, launch, etc.]

Please provide a structured SWOT analysis:

STRENGTHS (Internal)
- Competitive advantages and unique capabilities
- Assets and resources (team, technology, brand, IP)
- Market position and customer relationships
- Operational excellence
- Financial strength
[Provide 6-8 specific strengths with evidence]

WEAKNESSES (Internal)
- Resource constraints or gaps
- Operational or structural issues
- Market position vulnerabilities
- Skills or capability gaps
- Financial or cash flow concerns
[Provide 5-7 specific weaknesses with mitigation ideas]

OPPORTUNITIES (External)
- Market trends and shifts
- Untapped customer segments
- Technology enablers
- Partnership or acquisition possibilities
- Competitive weaknesses to exploit
[Provide 6-8 specific opportunities with approach]

THREATS (External)
- Competitive dynamics
- Market changes or disruptions
- Regulatory or policy risks
- Technology threats
- Economic or supply chain risks
[Provide 5-7 specific threats with mitigation]

STRATEGIC IMPLICATIONS
- Top 3 strategic priorities based on SWOT
- Moves to maximize strengths and opportunities
- Defenses against weaknesses and threats
- Risks to monitor`,
    placeholders: [
      "YOUR COMPANY OR PRODUCT",
      "INDUSTRY",
      "ANY SPECIFIC CONTEXT - e.g., entering new market, launch, etc.",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "data-research",
    categoryId: "competitive-analysis",
    exampleOutput:
      "A comprehensive SWOT analysis with specific points in each quadrant and strategic implications.",
    customizationNotes: [
      "Be honest about weaknesses - this creates better strategy",
      "Include specific competitor names if relevant",
      "Add time-sensitive factors if applicable",
    ],
    tags: ["swot", "strategic-planning", "competitive-analysis", "strategy"],
    order: 16,
  },

  {
    id: "competitive-intelligence-template",
    title: "Competitive Intelligence Template",
    description: "Systematically track and analyze competitor activities.",
    promptText: `Create a competitive intelligence framework for:

My Company: [YOUR COMPANY]
Industry: [INDUSTRY]
Key Competitors: [MAIN COMPETITORS]

Design a framework for:

1. Competitor Identification
   - Direct competitors
   - Indirect competitors
   - Emerging competitors
   - Substitute solutions

2. Intelligence Categories
   For each competitor, track:
   - Product/Service offering
   - Pricing and packaging
   - Marketing and positioning
   - Sales and distribution
   - Customer base and testimonials
   - Financials and funding
   - Key personnel and hires
   - Strategic moves and partnerships

3. Information Sources
   - Where to find each type of intelligence
   - Public sources (website, social, reviews, job postings)
   - Customer feedback channels
   - Industry reports and news
   - Competitive intelligence tools

4. Collection Cadence
   - What to monitor daily vs. weekly vs. monthly
   - What to track continuously
   - What requires periodic deep-dives

5. Analysis Framework
   - How to interpret competitor moves
   - Patterns to watch for
   - Threat assessment criteria

6. Action Planning
   - How to use intelligence for decision-making
   - Response strategies for common scenarios
   - When to ignore competitor noise`,
    placeholders: ["YOUR COMPANY", "INDUSTRY", "MAIN COMPETITORS"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "data-research",
    categoryId: "competitive-analysis",
    exampleOutput:
      "A systematic competitive intelligence framework with tracking categories, sources, and analysis methods.",
    customizationNotes: [
      "Include any existing competitor research",
      "Mention tools you already use or have access to",
      "Add geographic or segment-specific considerations",
    ],
    tags: ["competitive-intelligence", "competitors", "monitoring", "research"],
    order: 17,
  },

  {
    id: "feature-comparison-matrix",
    title: "Feature Comparison Matrix",
    description: "Compare your product against competitors across key features and capabilities.",
    promptText: `Create a feature comparison matrix:

My Product: [YOUR PRODUCT]
Competitors to Compare: [COMPETITOR LIST]
Category/Use Case: [WHAT THE PRODUCT DOES]

Please create:

1. Feature Selection
   - Core features (must-have capabilities)
   - Differentiating features (unique or advanced)
   - Emerging features (new or innovative)
   - Non-features (what's intentionally excluded)

2. Comparison Matrix
   For each feature:
   - Capability level (None/Basic/Advanced/Best-in-class)
   - Your product vs. each competitor
   - Notes on implementation quality or unique aspects

3. Analysis
   - Where you're clearly ahead (lead)
   - Where you're competitive (par)
   - Where you're behind (lag)
   - Gaps that matter to customers

4. Positioning Insights
   - Unique value propositions
   - "Only we..." statements
   - Head-to-head win scenarios
   - When competitors win

5. Strategic Recommendations
   - Features to build/extend
   - Features to de-emphasize
   - Marketing angles based on strengths
   - Competitive response strategies`,
    placeholders: ["YOUR PRODUCT", "COMPETITOR LIST", "WHAT THE PRODUCT DOES"],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "data-research",
    categoryId: "competitive-analysis",
    exampleOutput:
      "A detailed feature comparison matrix with strategic positioning insights and recommendations.",
    customizationNotes: [
      "Include actual customer feedback on features if available",
      "Mention features customers most frequently ask about",
      "Add any unique capabilities that are hard to compare",
    ],
    tags: ["feature-comparison", "competitive-analysis", "positioning", "product"],
    order: 18,
  },

  {
    id: "pricing-analysis-competitive",
    title: "Competitive Pricing Analysis",
    description: "Analyze competitor pricing strategies and position your pricing effectively.",
    promptText: `Analyze competitive pricing for:

My Product/Service: [YOUR PRODUCT]
Current Pricing: [YOUR PRICING]
Competitors: [MAIN COMPETITORS AND THEIR PRICING]
Pricing Model: [SUBSCRIPTION/TRANSACTIONAL/FREEMIUM/ETC]

Please provide:

1. Pricing Landscape
   - Full competitive pricing matrix
   - Pricing tiers and packaging comparison
   - Discounting practices
   - Hidden costs or fees

2. Value-to-Price Analysis
   - How pricing compares to value delivered
   - Feature-based pricing efficiency
   - Outlier analysis (who's premium vs. budget)

3. Pricing Strategy Identification
   - Each competitor's pricing strategy:
     * Cost-plus, value-based, competitive, penetration, skimming
     * Price anchoring and psychological pricing
     * Bundling and packaging strategies

4. Your Positioning
   - Where you fall in the pricing spectrum
   - Pricing gaps and opportunities
   - Price sensitivity considerations
   - Head-to-head win scenarios

5. Recommendations
   - Pricing strategy alignment
   - Pricing structure optimization
   - Competitive response scenarios
   - Test opportunities to explore`,
    placeholders: [
      "YOUR PRODUCT",
      "YOUR PRICING",
      "MAIN COMPETITORS AND THEIR PRICING",
      "SUBSCRIPTION/TRANSACTIONAL/FREEMIUM/ETC",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "data-research",
    categoryId: "competitive-analysis",
    exampleOutput:
      "A comprehensive pricing analysis with competitive mapping and strategic recommendations.",
    customizationNotes: [
      "Include win/loss data related to pricing if available",
      "Mention your cost structure if relevant to pricing decisions",
      "Add geographic or segment pricing variations if known",
    ],
    tags: ["pricing", "competitive-analysis", "positioning", "strategy"],
    order: 19,
  },

  {
    id: "messaging-positioning-audit",
    title: "Messaging & Positioning Audit",
    description:
      "Audit your messaging against competitors to identify differentiation opportunities.",
    promptText: `Conduct a messaging and positioning audit:

My Company/Product: [YOUR COMPANY]
My Current Messaging: [YOUR TAGLINE, POSITIONING, KEY MESSAGES]
Competitors: [MAIN COMPETITORS]

Please analyze:

1. Competitive Messaging Landscape
   - Each competitor's key messages
   - Positioning statements (implicit or explicit)
   - Value propositions claimed
   - Brand personality and tone

2. Message Gap Analysis
   - Overcrowded themes (everyone says this)
   - Open territory (no one owns this)
   - Contrarian positioning opportunities
   - Underserved customer concerns

3. Differentiation Assessment
   - How distinct is your messaging? (1-10)
   - How credible is your positioning?
   - How memorable is your approach?
   - Consistency across channels

4. Positioning Options
   - 3-5 alternative positioning angles
   - For each:
     * Core positioning statement
     * Key messages
     * Proof points
     * Differentiation vs. competitors

5. Recommendations
   - Positioning to own
   - Messages to emphasize
   - Messages to retire
   - Competitive claims to counter`,
    placeholders: ["YOUR COMPANY", "YOUR TAGLINE, POSITIONING, KEY MESSAGES", "MAIN COMPETITORS"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "data-research",
    categoryId: "competitive-analysis",
    exampleOutput:
      "A messaging audit with competitive landscape, gap analysis, and recommended positioning options.",
    customizationNotes: [
      "Include actual competitor website copy or ads if available",
      "Mention customer feedback on your messaging",
      "Add any brand constraints or guidelines",
    ],
    tags: ["messaging", "positioning", "branding", "differentiation"],
    order: 20,
  },

  {
    id: "win-loss-analysis",
    title: "Win/Loss Analysis Framework",
    description: "Analyze why you win or lose against competitors to improve sales effectiveness.",
    promptText: `Design a win/loss analysis framework for:

Product/Service: [YOUR PRODUCT]
Sales Cycle: [B2B/B2C, LENGTH, COMPLEXITY]
Main Competitors: [WHO YOU COMPETE AGAINST]
Current Win Rate: [IF KNOWN]

Create a framework for:

1. Data Collection
   - What to ask in win/loss interviews
   - When to conduct interviews (timing)
   - Who to interview (decision-maker, champion, rejecter)
   - How to get candid feedback

2. Analysis Categories
   For each deal, analyze:
   - Decision criteria and weighting
   - How we compared on each criteria
   - Key influencers in the decision
   - Timeline and urgency factors
   - Pricing and budget fit
   - Relationship and trust factors
   - Product fit and capabilities
   - Implementation concerns

3. Competitive Intelligence
   - Which competitors we face most
   - Win rate vs. each competitor
   - Where competitors beat us
   - Where we beat competitors
   - Competitive claims that resonate

4. Pattern Recognition
   - Common win themes (why we win)
   - Common loss themes (why we lose)
   - Early warning signs of likely loss
   - Ideal customer profile refinement

5. Action Planning
   - Product improvements based on feedback
   - Sales process changes
   - Marketing messaging adjustments
   - Competitive response strategies`,
    placeholders: [
      "YOUR PRODUCT",
      "B2B/B2C, LENGTH, COMPLEXITY",
      "WHO YOU COMPETE AGAINST",
      "IF KNOWN",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "data-research",
    categoryId: "competitive-analysis",
    exampleOutput:
      "A comprehensive win/loss analysis framework with interview guides and pattern identification methods.",
    customizationNotes: [
      "Include any existing win/loss data or themes",
      "Mention your sales process and stages",
      "Add tools you use for CRM or deal tracking",
    ],
    tags: ["win-loss", "sales", "competitive", "feedback"],
    order: 21,
  },

  {
    id: "market-map-landscape",
    title: "Market Map & Landscape",
    description:
      "Map the competitive landscape to identify positioning opportunities and white space.",
    promptText: `Create a market map and competitive landscape:

Market/Category: [MARKET OR CATEGORY]
My Company: [YOUR COMPANY]
Products in Market: [LIST KEY PRODUCTS OR COMPANIES]

Please design:

1. Market Definition
   - Category boundaries (what's in vs. out)
   - Subcategories or segments
   - Total market participants

2. Segmentation Framework
   - Key dimensions that differentiate products:
     * [Dimension 1 - e.g., price point, use case, customer size]
     * [Dimension 2 - e.g., functionality, deployment, expertise]
   - How products cluster on these dimensions

3. Positioning Map
   - 2D or 3D map showing where each player sits
   - Clusters and groupings
   - Crowded areas (red ocean)
   - Open areas (blue ocean)

4. Competitive Groups
   - Direct competitors (same space)
   - Adjacent competitors (related space)
   - Indirect competitors (alternative solutions)
   - For each: key differentiators and typical customers

5. White Space Analysis
   - Under-served customer segments
   - Unclaimed positioning territory
   - Emerging segments not yet addressed
   - Mergers and boundaries between segments

6. Positioning Implications
   - Where you sit today
   - Where you could position (strategic options)
   - Positioning moves to avoid
   - First-mover opportunities`,
    placeholders: ["MARKET OR CATEGORY", "YOUR COMPANY", "LIST KEY PRODUCTS OR COMPANIES"],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "data-research",
    categoryId: "competitive-analysis",
    exampleOutput:
      "A visual market map with competitive groupings, white space analysis, and positioning recommendations.",
    customizationNotes: [
      "Suggest the dimensions you think matter most in your market",
      "Include your current perception of your positioning",
      "Mention any adjacent markets or categories",
    ],
    tags: ["market-map", "landscape", "positioning", "white-space"],
    order: 22,
  },

  // ============================================================================
  // SURVEYS (7 prompts)
  // ============================================================================

  {
    id: "survey-design-framework",
    title: "Survey Design Framework",
    description:
      "Design effective surveys with clear objectives, well-crafted questions, and proper structure.",
    promptText: `Design a survey for:

Research Objective: [WHAT YOU WANT TO LEARN]
Target Audience: [WHO WILL TAKE THE SURVEY]
Sample Size Goal: [HOW MANY RESPONSES]
Distribution Method: [EMAIL/WEB/IN-PERSON/ETC]

Please design:

1. Survey Blueprint
   - Primary research questions (what you want to answer)
   - Secondary research questions
   - Hypotheses to test (if any)
   - Decisions the survey will inform

2. Question Strategy
   - Question types to use (multiple choice, rating, open-ended, etc.)
   - Questions to avoid (leading, double-barreled, etc.)
   - Order and flow considerations
   - Length vs. depth trade-offs

3. Survey Structure
   - Introduction and purpose statement
   - Screening questions (if needed)
   - Main sections with question flow
   - Demographic/segmentation questions
   - Closing and next steps

4. Draft Questions
   - 10-20 carefully crafted questions
   - Response options for closed-ended questions
   - Skip logic or branching instructions
   - Estimated time to complete

5. Bias Prevention
   - Types of bias to watch for
   - Question wording refinements
   - Order effects to manage

6. Distribution Plan
   - Incentive strategy (if applicable)
   - Reminder sequence
   - Response rate targets`,
    placeholders: [
      "WHAT YOU WANT TO LEARN",
      "WHO WILL TAKE THE SURVEY",
      "HOW MANY RESPONSES",
      "EMAIL/WEB/IN-PERSON/ETC",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "data-research",
    categoryId: "surveys",
    exampleOutput:
      "A complete survey design with clear objectives, well-crafted questions, and bias prevention strategies.",
    customizationNotes: [
      "Include any existing survey questions to improve",
      "Mention constraints on survey length",
      "Add context about respondent relationship to you",
    ],
    tags: ["survey-design", "research", "questions", "methodology"],
    order: 23,
  },

  {
    id: "net-promoter-score-survey",
    title: "Net Promoter Score (NPS) Survey",
    description: "Design and implement an NPS survey with follow-up questions and action planning.",
    promptText: `Design a Net Promoter Score survey program:

Business Type: [B2B/B2C/PRODUCT/SERVICE]
Customer Context: [WHO ARE YOUR CUSTOMERS]
Current NPS: [IF KNOWN]
Touchpoint: [WHERE IN CUSTOMER JOURNEY]

Design the program:

1. NPS Question
   - Core NPS question wording
   - Scale and presentation
   - Context/timing of when to ask

2. Follow-up Questions
   - For Promoters (9-10):
     * Why they scored high
     * What they value most
     * Referral/willingness to recommend specifics
   - For Passives (7-8):
     * What would make it a 10
     * Friction points or gaps
   - For Detractors (0-6):
     * What went wrong
     * Specific pain points
     * What would fix their experience

3. Operational Design
   - Distribution method and timing
   - Frequency (transactional vs. relationship)
   - Response rate targets
   - Reminder strategy

4. Analysis Framework
   - NPS calculation methodology
   - Segmentation analysis
   - Trend analysis
   - Benchmark comparisons

5. Closing the Loop
   - How to follow up with Detractors
   - How to leverage Promoters
   - How to engage Passives
   - Internal communication of results

6. Action Planning
   - Common improvement themes to address
   - Quick wins vs. systemic improvements
   - Experiment ideas based on feedback`,
    placeholders: [
      "B2B/B2C/PRODUCT/SERVICE",
      "WHO ARE YOUR CUSTOMERS",
      "IF KNOWN",
      "WHERE IN CUSTOMER JOURNEY",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "data-research",
    categoryId: "surveys",
    exampleOutput:
      "A complete NPS survey program with questions, analysis framework, and follow-up processes.",
    customizationNotes: [
      "Include any existing NPS data for comparison",
      "Mention your current customer feedback channels",
      "Add any product or service specifics",
    ],
    tags: ["nps", "customer-satisfaction", "survey", "loyalty"],
    order: 24,
  },

  {
    id: "customer-interview-guide",
    title: "Customer Interview Guide",
    description: "Conduct effective customer interviews to uncover deep insights and unmet needs.",
    promptText: `Create a customer interview guide:

Research Objective: [WHAT YOU WANT TO LEARN]
Interview Type: [DISCOVERY/VALIDATION/USABILITY/RETROSPECTIVE]
Customer Type: [WHO YOU'RE INTERVIEWING]
Interview Duration: [LENGTH]

Design the interview:

1. Interview Strategy
   - Primary questions to answer
   - Hypotheses to explore
   - Topics to cover (and avoid)

2. Interview Structure
   - Opening and rapport building
   - Warm-up questions
   - Core inquiry sections
   - Deep-dive areas
   - Closing and next steps

3. Question Bank (20-30 questions)
   - Open-ended exploration questions
     * "Tell me about..." questions
     * "Walk me through..." questions
   - Behavior and context questions
     * "When you..." questions
     * "How do you..." questions
   - Pain point and frustration questions
     * "What's challenging about..." questions
     * "What if..." scenarios
   - Validation questions
     * Reaction to specific ideas
     * Priority ranking exercises

4. Interview Best Practices
   - How to listen vs. lead
   - How to probe deeper
   - How to handle silence
   - How to avoid bias

5. Note-Taking Framework
   - What to capture in real-time
   - Post-interview synthesis approach
   - Pattern identification across interviews

6. Analysis Plan
   - How to synthesize findings
   - How to identify themes
   - How to translate to action`,
    placeholders: [
      "WHAT YOU WANT TO LEARN",
      "DISCOVERY/VALIDATION/USABILITY/RETROSPECTIVE",
      "WHO YOU'RE INTERVIEWING",
      "LENGTH",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "data-research",
    categoryId: "surveys",
    exampleOutput:
      "A comprehensive interview guide with 30+ questions and best practices for effective customer interviews.",
    customizationNotes: [
      "Include any specific topics or hypotheses to explore",
      "Mention any existing customer knowledge",
      "Add context about what you're building or changing",
    ],
    tags: ["customer-interview", "user-research", "discovery", "qualitative"],
    order: 25,
  },

  {
    id: "survey-data-analysis",
    title: "Survey Data Analysis",
    description:
      "Analyze survey responses to extract insights, patterns, and actionable recommendations.",
    promptText: `Help me analyze survey data.

Survey Context: [WHAT THE SURVEY WAS ABOUT]
Number of Respondents: [SAMPLE SIZE]
Questions Asked: [NUMBER AND TYPE OF QUESTIONS]

Survey Data/Results:
[PASTE YOUR DATA OR SUMMARY]

Please analyze:

1. Response Overview
   - Response rate and representativeness
   - Demographic/segment profile
   - Data quality assessment

2. Key Findings
   - Top 5-10 most significant insights
   - Surprising or unexpected findings
   - Confirmed hypotheses and rejected assumptions

3. Segment Analysis
   - Differences by key segments
   - High-priority vs. low-priority segments
   - Correlation between segments and answers

4. Question Analysis
   - For each key question:
     * Distribution of responses
     * Notable patterns or outliers
     - Statistical significance (if applicable)
     * Open-ended themes (if applicable)

5. Thematic Analysis
   - Recurring themes across questions
   - Pain points and frustrations
   - Opportunities and desires
   - Suggested improvements

6. Recommendations
   - Top 5 action items based on data
   - Quick wins vs. strategic initiatives
   - Areas requiring deeper research
   - What to stop/start/continue`,
    placeholders: [
      "WHAT THE SURVEY WAS ABOUT",
      "SAMPLE SIZE",
      "NUMBER AND TYPE OF QUESTIONS",
      "PASTE YOUR DATA OR SUMMARY",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "data-research",
    categoryId: "surveys",
    exampleOutput:
      "A comprehensive survey analysis with key findings, segment analysis, and actionable recommendations.",
    customizationNotes: [
      "Include any cross-tabulation requirements",
      "Mention any specific hypotheses to test",
      "Add context about business decisions this informs",
    ],
    tags: ["survey-analysis", "data-analysis", "insights", "recommendations"],
    order: 26,
  },

  {
    id: "question-wording-improver",
    title: "Question Wording Improver",
    description:
      "Improve survey questions to reduce bias and increase clarity and response quality.",
    promptText: `Help me improve these survey questions.

Original Questions:
[PASTE YOUR QUESTIONS HERE]

Survey Context: [WHAT THE SURVEY IS ABOUT]
Target Audience: [WHO WILL ANSWER]

For each question, please:

1. Identify Issues
   - Bias (leading, loaded, social desirability)
   - Ambiguity or unclear wording
   - Double-barreled questions (asking two things)
   - Jargon or technical language
   - Assumptions embedded in the question
   - Response option issues

2. Improved Version
   - Rewritten question (neutral, clear, specific)
   - Improved response options (if applicable)
   - Explanation of changes

3. Alternative Wording Options
   - Option 1: More conversational
   - Option 2: More formal
   - Option 3: Shorter/punchier

4. Testing Notes
   - How to cognitive test this question
   - What to watch for in pilot responses

5. Best Practice Check
   - Does it ask one thing at a time?
   - Is it neutral and unbiased?
   - Is it clear and unambiguous?
   - Can respondents answer accurately?
   - Are response options exhaustive and mutually exclusive?`,
    placeholders: ["PASTE YOUR QUESTIONS HERE", "WHAT THE SURVEY IS ABOUT", "WHO WILL ANSWER"],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "data-research",
    categoryId: "surveys",
    exampleOutput:
      "Improved versions of survey questions with issue identification, alternatives, and best practice validation.",
    customizationNotes: [
      "Mention any constraints on question length",
      "Add context about why questions were written this way",
      "Include tone requirements (casual vs. formal)",
    ],
    tags: ["survey-design", "questions", "wording", "bias-reduction"],
    order: 27,
  },

  {
    id: "response-rate-optimizer",
    title: "Survey Response Rate Optimizer",
    description:
      "Maximize survey response rates through better design, distribution, and follow-up strategies.",
    promptText: `Help me optimize my survey response rates.

Survey Type: [CUSTOMER/EMPLOYEE/MARKET/ETC]
Target Audience: [WHO YOU'RE SURVEYING]
Current Response Rate: [IF KNOWN]
Distribution Method: [HOW YOU'RE SENDING IT]

Provide optimization strategies for:

1. Survey Design
   - Optimal length (time to complete)
   - Question ordering strategies
   - Visual design improvements
   - Mobile optimization
   - Progress indicators

2. Invitation Strategy
   - Subject line/header options
   - Invitation message templates
   - Timing and day of week
   - Personalization approaches
   - Preview/teaser content

3. Incentive Strategy
   - Types of incentives (monetary, non-monetary, intrinsic)
   - Incentive timing ( upfront vs. conditional)
   - Incentive amount recommendations
   - Alternative incentive approaches

4. Reminder Sequence
   - Number and timing of reminders
   - Reminder message variations
   - When to stop reminding

5. Friction Reduction
   - Pre-filling known information
   - One-click access where possible
   - Save-and-return functionality
   - Minimum viable questions

6. Channel Optimization
   - Best channels for your audience
   - Multi-channel approaches
   - In-the-moment capture opportunities

7. Response Rate Targets
   - Benchmark for your survey type
   - Realistic targets to set
   - What rate indicates success`,
    placeholders: [
      "CUSTOMER/EMPLOYEE/MARKET/ETC",
      "WHO YOU'RE SURVEYING",
      "IF KNOWN",
      "HOW YOU'RE SENDING IT",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "data-research",
    categoryId: "surveys",
    exampleOutput:
      "Comprehensive response rate optimization strategies with specific tactics and benchmark targets.",
    customizationNotes: [
      "Mention any technical constraints on survey tools",
      "Include historical response rate data if available",
      "Add any incentive budget constraints",
    ],
    tags: ["response-rate", "optimization", "survey", "engagement"],
    order: 28,
  },

  {
    id: "usability-test-script",
    title: "Usability Test Script",
    description: "Create a script for conducting usability tests on products or interfaces.",
    promptText: `Create a usability test script:

Product/Feature: [WHAT YOU'RE TESTING]
Test Type: [MODERATED/UNMODERATED, REMOTE/IN-PERSON]
Session Duration: [LENGTH]
Participant Type: [WHO IS TESTING]

Design the test session:

1. Test Objectives
   - What you're trying to learn
   - Research questions to answer
   - Tasks or scenarios to test

2. Session Structure (timed)
   - Introduction and consent (5 min)
   - Warm-up and context (5 min)
   - Tasks/scenarios (X min)
   - Debrief and questions (10 min)
   - Closing (5 min)

3. Task Scenarios
   - 5-8 realistic tasks participants will attempt
   - For each:
     * Scenario context
     * Task instructions
     * Success criteria
     * What to observe

4. Observer Guide
   - What to watch for during tasks
   - Note-taking framework
   - Verbal vs. non-verbal cues
   - When to intervene (and when not to)

5. Debrief Questions
   - Overall impressions
   - Ease of use ratings
   - Confusion points
   - Suggested improvements
   - Comparison to current solutions

6. Data Capture
   - Metrics to record
   - Success rates
   - Time on task
   - Error types and frequency
   - Satisfaction ratings

7. Analysis Framework
   - How to synthesize findings
   - Severity ratings for issues
   - Prioritization of fixes`,
    placeholders: [
      "WHAT YOU'RE TESTING",
      "MODERATED/UNMODERATED, REMOTE/IN-PERSON",
      "LENGTH",
      "WHO IS TESTING",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "data-research",
    categoryId: "surveys",
    exampleOutput:
      "A complete usability test script with task scenarios, observer guide, and analysis framework.",
    customizationNotes: [
      "Include specific features or flows to test",
      "Mention any technical setup requirements",
      "Add any constraints on what can be tested",
    ],
    tags: ["usability", "user-testing", "ux-research", "moderated-testing"],
    order: 29,
  },

  // ============================================================================
  // TREND ANALYSIS (6 prompts)
  // ============================================================================

  {
    id: "trend-forecasting-model",
    title: "Trend Forecasting Model",
    description: "Forecast future trends based on historical data and leading indicators.",
    promptText: `Help me forecast trends for:

Metric/Domain: [WHAT YOU'RE FORECASTING]
Historical Data: [PASTE HISTORICAL DATA OR DESCRIBE]
Forecast Horizon: [TIME PERIOD TO FORECAST]
Business Context: [ANY CONTEXT AFFECTING THE TREND]

Please provide:

1. Trend Analysis
   - Historical patterns (growth, decline, cyclical, seasonal)
   - Recent trajectory and momentum
   - Inflection points and what caused them
   - Current trend phase (emerging, growing, mature, declining)

2. Leading Indicators
   - What signals typically precede changes
   - Early indicators to monitor
   - Where to find this data

3. Forecasting Approach
   - Method recommendations:
     * Simple extrapolation
     * Moving average
     * Seasonal adjustment
     * Regression-based
     * Scenario-based
   - Best approach for your situation

4. Forecast Scenarios
   - Base case (most likely)
   - Best case (optimistic)
   - Worst case (pessimistic)
   - For each:
     * Projected values
     * Assumptions and drivers
     * Probability assessment

5. Monitoring Plan
   - Leading indicators to track
   - Checkpoints to validate forecast
   - When to revise forecast
   - Warning signs to watch

6. Confidence Assessment
   - How confident in this forecast?
   - What would increase confidence?
   - What variables are most uncertain?`,
    placeholders: [
      "WHAT YOU'RE FORECASTING",
      "PASTE HISTORICAL DATA OR DESCRIBE",
      "TIME PERIOD TO FORECAST",
      "ANY CONTEXT AFFECTING THE TREND",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "data-research",
    categoryId: "trend-analysis",
    exampleOutput:
      "A comprehensive trend forecasting model with scenario analysis and monitoring recommendations.",
    customizationNotes: [
      "Include any external factors that might affect the trend",
      "Mention any cyclical or seasonal patterns",
      "Add any constraints or business rules",
    ],
    tags: ["forecasting", "trends", "prediction", "scenarios"],
    order: 30,
  },

  {
    id: "pattern-recognition-analysis",
    title: "Pattern Recognition Analysis",
    description: "Identify and interpret patterns in data for insights and predictions.",
    promptText: `Help me identify patterns in my data.

Data Context: [WHAT THE DATA REPRESENTS]
Time Period: [TIME PERIOD]
Data Description: [DESCRIBE THE DATA]

Data:
[PASTE YOUR DATA OR DESCRIBE PATTERNS YOU'VE NOTICED]

Please analyze for patterns:

1. Temporal Patterns
   - Trends (increasing, decreasing, stable)
   - Seasonality (regular, predictable patterns)
   - Cycles (irregular, recurring patterns)
   - Changes over time

2. Correlation Patterns
   - Relationships between variables
   - Leading vs. lagging indicators
   - Causal vs. correlational

3. Segment Patterns
   - Differences across groups/segments
   - Cluster identification
   - Outlier analysis

4. Anomaly Patterns
   - Deviations from expected patterns
   - One-time events vs. emerging patterns
   - Early warning signals

5. Pattern Interpretation
   - What these patterns mean
   - Underlying causes or drivers
   - Business implications

6. Predictive Insights
   - What patterns suggest about the future
   - Leading indicators to monitor
   - When patterns might break or change

7. Action Opportunities
   - How to leverage patterns
   - What to capitalize on
   - What to monitor closely`,
    placeholders: [
      "WHAT THE DATA REPRESENTS",
      "TIME PERIOD",
      "DESCRIBE THE DATA",
      "PASTE YOUR DATA OR DESCRIBE PATTERNS YOU'VE NOTICED",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "data-research",
    categoryId: "trend-analysis",
    exampleOutput:
      "A comprehensive pattern analysis with temporal, correlation, and segment patterns plus actionable insights.",
    customizationNotes: [
      "Include any hypotheses about patterns you suspect",
      "Mention any specific questions you want answered",
      "Add context about how data was collected",
    ],
    tags: ["patterns", "correlation", "trends", "analysis"],
    order: 31,
  },

  {
    id: "emerging-trend-scanner",
    title: "Emerging Trend Scanner",
    description: "Scan for and evaluate emerging trends before they go mainstream.",
    promptText: `Design a framework to scan for emerging trends in:

Industry/Domain: [YOUR INDUSTRY OR AREA OF INTEREST]
Time Horizon: [WHAT "EMERGING" MEANS - 6 months, 1 year, 3 years]
Current Awareness: [WHAT TRENDS YOU'RE ALREADY SEEING]

Create a scanning framework:

1. Signal Sources
   - Where to look for early signals:
     * Publications and media
     * Conferences and events
     * Social media and forums
     * Startup and investment activity
     * Patent filings
     * Academic research
     * Customer behavior changes
   - Specific sources to monitor

2. Signal Types
   - Weak signals (early, ambiguous)
   - Strong signals (clear, established)
   - Countersignals (trend reversals)

3. Evaluation Framework
   For each potential trend:
   - Novelty (how new/different)
   - Impact (potential magnitude)
   - Scalability (can it grow)
   - Momentum (acceleration indicators)
   - Adoption readiness (barriers to overcome)
   - Confidence level

4. Triage Process
   - How to quickly assess many signals
   - Which trends to investigate deeper
   - Which to monitor passively
   - Which to dismiss

5. Trend Documentation
   - Template for capturing trend details
   - Tracking over time
   - Pattern recognition across signals

6. Action Planning
   - When to act on emerging trends
   - Experiment design for testing
   - Risk of inaction vs. action`,
    placeholders: [
      "YOUR INDUSTRY OR AREA OF INTEREST",
      'WHAT "EMERGING" MEANS - 6 months, 1 year, 3 years',
      "WHAT TRENDS YOU'RE ALREADY SEEING",
    ],
    bestTool: "chatgpt",
    difficulty: "intermediate",
    domainId: "data-research",
    categoryId: "trend-analysis",
    exampleOutput:
      "A comprehensive trend scanning framework with sources, evaluation criteria, and action planning guidance.",
    customizationNotes: [
      "Include any specific trends you want evaluated",
      "Mention resources or tools you have access to",
      "Add your industry's unique characteristics",
    ],
    tags: ["trends", "scanning", "weak-signals", "foresight"],
    order: 32,
  },

  {
    id: "seasonal-pattern-analysis",
    title: "Seasonal Pattern Analysis",
    description:
      "Identify and leverage seasonal patterns in your data for better planning and forecasting.",
    promptText: `Help me analyze seasonal patterns in my data.

Data Type: [WHAT THE DATA REPRESENTS]
Time Period Available: [HOW MUCH HISTORICAL DATA]
Business Context: [HOW SEASONALITY MIGHT APPLY]

Data Description:
[DESCRIBE YOUR DATA OR PASTE IT]

Please provide:

1. Seasonality Assessment
   - Does seasonality exist? (statistical test)
   - Type of seasonality:
     * Calendar-based (quarters, holidays, months)
     * Weather-based
     * Behavioral/cultural
     * Business cycle
   - Strength of seasonal effect

2. Pattern Identification
   - Peak seasons (when and how much)
   - Low seasons (when and how much)
   - Shoulder periods (transition times)
   - Seasonal amplitude (variation range)

3. Seasonal Decomposition
   - Trend component
   - Seasonal component
   - Residual/random component

4. Forecasting Implications
   - How to incorporate seasonality into forecasts
   - Seasonal adjustment factors
   - Year-over-year comparison approach

5. Planning Calendar
   - When to build capacity (before peaks)
   - When to run promotions (during highs)
   - When to do maintenance (during lows)
   - Budget allocation by season

6. Exception Detection
   - When performance deviates from seasonal expectations
   - Beyond-seasonality factors to consider
   - Alert thresholds by season`,
    placeholders: [
      "WHAT THE DATA REPRESENTS",
      "HOW MUCH HISTORICAL DATA",
      "HOW SEASONALITY MIGHT APPLY",
      "DESCRIBE YOUR DATA OR PASTE IT",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "data-research",
    categoryId: "trend-analysis",
    exampleOutput:
      "A comprehensive seasonal analysis with pattern identification, forecasting adjustments, and planning calendar.",
    customizationNotes: [
      "Include your business's specific seasonal factors",
      "Mention any known events or drivers",
      "Add geographic considerations if relevant",
    ],
    tags: ["seasonality", "patterns", "forecasting", "planning"],
    order: 33,
  },

  {
    id: "trend-validation-framework",
    title: "Trend Validation Framework",
    description: "Validate whether a perceived trend is real, significant, and actionable.",
    promptText: `Help me validate a trend I'm observing.

Trend Description: [DESCRIBE THE TREND YOU SEE]
Data Available: [WHAT DATA YOU HAVE]
Time Period: [HOW LONG YOU'VE OBSERVED IT]
Business Context: [WHY THIS TREND MATTERS]

Design a validation framework:

1. Initial Assessment
   - Trend definition (what exactly is changing)
   - Pattern visibility (how clear is the pattern)
   - Intuitive plausibility (does it make sense?)

2. Data Validation
   - Statistical significance testing:
     * Sample size adequacy
     * Confidence intervals
     * Hypothesis test results
   - Data quality checks:
     * Measurement consistency
     * Data collection issues
     * Outlier impact

3. Alternative Explanations
   - Could this be random noise?
   - Could this be a one-time event?
   - Could this be seasonal/cyclical?
   - Could this be measurement artifact?

4. Confirmation Signals
   - Do other data sources confirm?
   - Is there a logical cause?
   - Are leading indicators aligned?
   - Is there external validation?

5. Sustainability Assessment
   - Is this trend likely to continue?
   - What could reverse it?
   - What would strengthen it?

6. Actionability Assessment
   - Confidence level: [ ]% that trend is real
   - Impact potential if real
   - Cost of acting vs. not acting
   - Reversibility of actions

7. Recommendation
   - Validated / Needs more data / Likely noise
   - Suggested actions
   - Monitoring approach`,
    placeholders: [
      "DESCRIBE THE TREND YOU SEE",
      "WHAT DATA YOU HAVE",
      "HOW LONG YOU'VE OBSERVED IT",
      "WHY THIS TREND MATTERS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "data-research",
    categoryId: "trend-analysis",
    exampleOutput:
      "A systematic validation framework with statistical checks, alternative explanations, and actionable recommendations.",
    customizationNotes: [
      "Include any statistical test results if available",
      "Mention any domain knowledge about the trend",
      "Add any stakeholder perspectives or concerns",
    ],
    tags: ["validation", "trends", "significance", "decision-making"],
    order: 34,
  },

  {
    id: "cross-industry-trend-mapping",
    title: "Cross-Industry Trend Mapping",
    description:
      "Map trends across industries to identify patterns and anticipate spillover effects.",
    promptText: `Map trends across industries for strategic insight.

Focus Industry: [YOUR INDUSTRY]
Related Industries: [INDUSTRIES TO INCLUDE]
Time Horizon: [WHAT "EMERGING" MEANS]

Provide analysis:

1. Trend Landscape
   - Current trends in your industry
   - Trends in related/adjacent industries
   - Broader societal/technological trends

2. Cross-Industry Patterns
   - Trends appearing in multiple industries
   - Early adopter industries (where trends appear first)
   - Lagging industries (where trends haven't hit yet)

3. Trend Diffusion Paths
   - How trends spread between industries
   - Typical time lags
   - Adoption barriers and accelerators
   - What accelerates cross-industry transfer

4. Early Warning Signals
   - Trends in adjacent industries to monitor
   - Precursor indicators
   - "Canary in the coal mine" signals

5. Spillover Opportunities
   - Innovations from other industries to adapt
   - Business models that could transfer
   - Competitive threats from adjacent industries

6. Strategic Implications
   - Trends likely to hit your industry next
   - Timeline expectations
   - Preparation recommendations
   - First-mover opportunities

7. Monitoring Framework
   - Which industries to watch
   - What signals to track
   - Review cadence`,
    placeholders: ["YOUR INDUSTRY", "INDUSTRIES TO INCLUDE", 'WHAT "EMERGING" MEANS'],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "data-research",
    categoryId: "trend-analysis",
    exampleOutput:
      "A strategic cross-industry trend map with diffusion patterns, early warning signals, and actionable recommendations.",
    customizationNotes: [
      "Include specific trends you want analyzed",
      "Mention your geographic market if relevant",
      "Add any industry-specific considerations",
    ],
    tags: ["cross-industry", "trends", "innovation", "strategic-planning"],
    order: 35,
  },
];
