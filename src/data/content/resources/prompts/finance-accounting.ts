/**
 * Finance & Accounting Prompts
 *
 * PURPOSE: Prompts for budgeting, financial analysis, invoicing, expense tracking, and investment research.
 *
 * DOMAIN: Finance & Accounting
 * CATEGORIES:
 * - Budgeting (7 prompts)
 * - Financial Analysis (8 prompts)
 * - Invoicing (6 prompts)
 * - Expense Tracking (7 prompts)
 * - Investment Research (7 prompts)
 *
 * @see src/types/resources.ts - Prompt type definition
 */

import type { Prompt } from "@/types/resources";

/**
 * Finance & Accounting prompts collection
 *
 * Each prompt is tested across ChatGPT, Claude, and Gemini.
 * Best tool indicates which gives the most consistent results.
 */
export const financeAccountingPrompts: Prompt[] = [
  // ============================================================================
  // BUDGETING
  // ============================================================================

  {
    id: "annual-budget-creator",
    title: "Annual Budget Creator",
    description: "Build comprehensive annual budgets with realistic projections and assumptions.",
    promptText: `Help me create an annual budget for the following context.

Organization type: [BUSINESS/DEPARTMENT/STARTUP/NONPROFIT/PERSONAL]
Industry: [INDUSTRY]
Fiscal year: [YEAR]
Budgeting approach: [ZERO-BASED/INCREMENTAL/ACTIVITY-BASED]

Previous year actuals:
[PASTE LAST YEAR DATA OR SUMMARY]

Key assumptions:
[ASSUMPTIONS ABOUT GROWTH, INFLATION, ETC.]

Known changes:
[NEW INITIATIVES, HEADCOUNT, STRATEGIC PRIORITIES]

Please create:
1. Revenue projections with drivers
2. Cost of goods/services (if applicable)
3. Operating expense breakdown by category
4. Capital expenditure plan
5. Headcount and personnel costs
6. Key assumptions documentation
7. Contingency/buffer allocation
8. Monthly or quarterly phasing

Include:
- Variance explanations from prior year
- Risk factors and sensitivities
- Key metrics to track
- Budget owner responsibilities`,
    placeholders: [
      "BUSINESS/DEPARTMENT/STARTUP/NONPROFIT/PERSONAL",
      "INDUSTRY",
      "YEAR",
      "ZERO-BASED/INCREMENTAL/ACTIVITY-BASED",
      "PASTE LAST YEAR DATA OR SUMMARY",
      "ASSUMPTIONS ABOUT GROWTH, INFLATION, ETC.",
      "NEW INITIATIVES, HEADCOUNT, STRATEGIC PRIORITIES",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "finance-accounting",
    categoryId: "budgeting",
    exampleOutput:
      "A comprehensive annual budget with detailed revenue projections, expense breakdowns, assumptions, and phasing.",
    customizationNotes: [
      "Include company-specific chart of accounts",
      "Add industry-specific cost drivers",
      "Consider seasonal variations in phasing",
    ],
    tags: ["budgeting", "annual-budget", "projections", "planning"],
    order: 1,
  },

  {
    id: "departmental-budget-template",
    title: "Departmental Budget Template",
    description: "Create department-specific budgets aligned to organizational goals.",
    promptText: `Create a departmental budget for the following area.

Department: [DEPARTMENT NAME]
Function: [WHAT THIS DEPARTMENT DOES]
Team size: [NUMBER OF EMPLOYEES]
Budget period: [QUARTER/YEAR]
Budget type: [OPEx/CAPEx/BOTH]

Strategic priorities for this period:
[PRIORITIES]

Key budget drivers:
[COST DRIVERS]

Please create:
1. Personnel costs (salaries, benefits, contractors)
2. Software and technology subscriptions
3. Marketing or program expenses (if applicable)
4. Travel and entertainment
5. Professional development
6. Office/operational expenses
7. Contingency allocation
8. One-time projects or initiatives

Include:
- Alignment to strategic priorities
- Month-by-month phasing
- Budget justification for major items
- Key metrics or KPIs funded
- ROI expectations where applicable`,
    placeholders: [
      "DEPARTMENT NAME",
      "WHAT THIS DEPARTMENT DOES",
      "NUMBER OF EMPLOYEES",
      "QUARTER/YEAR",
      "OPEx/CAPEx/BOTH",
      "PRIORITIES",
      "COST DRIVERS",
    ],
    bestTool: "any",
    difficulty: "intermediate",
    domainId: "finance-accounting",
    categoryId: "budgeting",
    exampleOutput:
      "A departmental budget with category breakdowns, strategic alignment, and clear justifications.",
    customizationNotes: [
      "Add company-specific expense categories",
      "Include department-specific cost centers",
      "Consider shared cost allocations",
    ],
    tags: ["budgeting", "departmental", "opex", "capex"],
    order: 2,
  },

  {
    id: "budget-variance-analysis",
    title: "Budget Variance Analysis",
    description: "Analyze budget vs. actuals to understand deviations and take corrective action.",
    promptText: `Help me analyze budget variances for the following.

Period: [MONTH/QUARTER/YEAR]
Category: [SPECIFIC LINE ITEM OR TOTAL BUDGET]

Budget: [BUDGETED AMOUNT]
Actual: [ACTUAL AMOUNT]
Variance: [DIFFERENCE]
Variance %: [PERCENTAGE]

Context: [EXPLANATION OF BUSINESS CONDITIONS]

Please provide:
1. Root cause analysis of the variance
2. Classification: timing, one-time, or structural issue
3. Corrective actions needed
4. Impact on full-year forecast
5. Communication recommendations (to whom and how)
6. Whether budget revision is warranted
7. Monitoring approach for similar items

Consider:
- External factors (market, inflation, etc.)
- Internal factors (process, efficiency, etc.)
- Timing issues (will it reverse?)
- Data accuracy issues
- Strategic vs. operational variance`,
    placeholders: [
      "MONTH/QUARTER/YEAR",
      "SPECIFIC LINE ITEM OR TOTAL BUDGET",
      "BUDGETED AMOUNT",
      "ACTUAL AMOUNT",
      "DIFFERENCE",
      "PERCENTAGE",
      "EXPLANATION OF BUSINESS CONDITIONS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "finance-accounting",
    categoryId: "budgeting",
    exampleOutput:
      "A thorough variance analysis with root causes, corrective actions, and recommendations.",
    customizationNotes: [
      "Include industry-specific variance drivers",
      "Add company-specific tolerance thresholds",
      "Consider seasonal or cyclical patterns",
    ],
    tags: ["budgeting", "variance", "analysis", "forecasting"],
    order: 3,
  },

  {
    id: "cash-flow-budget",
    title: "Cash Flow Budget",
    description: "Project cash inflows and outflows to ensure liquidity and solvency.",
    promptText: `Create a cash flow budget for the following business.

Business type: [BUSINESS MODEL]
Cash position start: [OPENING BALANCE]
Forecast period: [WEEKS/MONTHS/QUARTERS]

Revenue timing:
[INVOICE TERMS, PAYMENT CYCLES]

Expense timing:
[PAYMENT TERMS, PAYROLL SCHEDULE, etc.]

Known cash events:
[LARGE PAYMENTS IN/OUT, TAX DATES, etc.]

Please create:
1. Cash inflows by source and timing
2. Cash outflows by category and timing
3. Net cash flow period by period
4. Running cash balance
5. Critical low points or cash gaps
6. Financing needs or surplus deployment options
7. Key assumptions about payment timing
8. Sensitivity scenarios (early/late payments)

Include:
- Working capital considerations
- Seasonal cash patterns
- Buffer or minimum cash targets
- Early warning indicators`,
    placeholders: [
      "BUSINESS MODEL",
      "OPENING BALANCE",
      "WEEKS/MONTHS/QUARTERS",
      "INVOICE TERMS, PAYMENT CYCLES",
      "PAYMENT TERMS, PAYROLL SCHEDULE, etc.",
      "LARGE PAYMENTS IN/OUT, TAX DATES, etc.",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "finance-accounting",
    categoryId: "budgeting",
    exampleOutput:
      "A detailed cash flow forecast with timing, balances, gaps, and contingency scenarios.",
    customizationNotes: [
      "Include industry-specific payment terms",
      "Add business model specific cash patterns",
      "Consider seasonality and cycles",
    ],
    tags: ["budgeting", "cash-flow", "liquidity", "forecasting"],
    order: 4,
  },

  {
    id: "rolling-forecast",
    title: "Rolling Forecast Template",
    description: "Create dynamic rolling forecasts that adapt to changing business conditions.",
    promptText: `Help me create a rolling forecast for the following business.

Forecast horizon: [MONTHS/QUARTERS AHEAD]
Update frequency: [MONTHLY/QUARTERLY]
Business type: [INDUSTRY/MODEL]
Current period actuals: [RECENT PERFORMANCE]

Key business drivers:
[MAIN REVENUE AND COST DRIVERS]

Recent trends or changes:
[MARKET CONDITIONS, STRATEGIC SHIFTS]

Please create:
1. Forecast template by period
2. Key driver-based projections
3. Scenario assumptions (base/bull/bear)
4. Update process and checklist
5. Variance triggers requiring reforecast
6. How to incorporate latest actuals
7. Communication approach for stakeholders
8. Key metrics to track accuracy

The forecast should:
- Be driver-based not just incremental
- Update easily with new information
- Provide early warning of changes
- Support agile decision-making`,
    placeholders: [
      "MONTHS/QUARTERS AHEAD",
      "MONTHLY/QUARTERLY",
      "INDUSTRY/MODEL",
      "RECENT PERFORMANCE",
      "MAIN REVENUE AND COST DRIVERS",
      "MARKET CONDITIONS, STRATEGIC SHIFTS",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "finance-accounting",
    categoryId: "budgeting",
    exampleOutput:
      "A rolling forecast framework with driver-based projections and update processes.",
    customizationNotes: [
      "Include company-specific key drivers",
      "Add industry forecast horizons",
      "Consider strategic planning cycles",
    ],
    tags: ["budgeting", "rolling-forecast", "forecasting", "agile"],
    order: 5,
  },

  {
    id: "budget-prioritization-framework",
    title: "Budget Prioritization Framework",
    description: "Make tough budget allocation decisions with clear criteria and trade-offs.",
    promptText: `Help me prioritize budget allocations for the following scenario.

Total budget available: [AMOUNT]
Request total: [TOTAL REQUESTS]
Funding gap: [SHORTFALL]
Budget period: [TIMEFRAME]

Strategic priorities:
[KEY OBJECTIVES]

Budget requests:
[LIST REQUESTS WITH AMOUNTS AND JUSTIFICATIONS]

Please create:
1. Prioritization criteria framework
2. Scoring methodology for requests
3. Categories: must-have/should-have/nice-to-have
4. ROI or impact assessment approach
5. Trade-off analysis and recommendations
6. Communication approach for declined requests
7. Phasing options (fund some now, some later)
8. What to monitor if forced cuts happen

Include:
- Strategic alignment weighting
- Risk assessment for unfunded items
- Creative alternatives to full funding
- Decision documentation template`,
    placeholders: [
      "AMOUNT",
      "TOTAL REQUESTS",
      "SHORTFALL",
      "TIMEFRAME",
      "KEY OBJECTIVES",
      "LIST REQUESTS WITH AMOUNTS AND JUSTIFICATIONS",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "finance-accounting",
    categoryId: "budgeting",
    exampleOutput:
      "A prioritization framework with scoring, trade-off analysis, and communication strategies.",
    customizationNotes: [
      "Add company-specific strategic priorities",
      "Include industry-specific ROI metrics",
      "Consider stakeholder impact assessment",
    ],
    tags: ["budgeting", "prioritization", "allocation", "decisions"],
    order: 6,
  },

  {
    id: "personal-budget-creator",
    title: "Personal Budget Creator",
    description: "Build effective personal budgets for financial health and goal achievement.",
    promptText: `Help me create a personal budget.

Monthly income: [TAKE-HOME PAY]
Other income: [SIDE INCOME, etc.]

Current monthly expenses:
[LIST MAJOR EXPENSE CATEGORIES]

Financial goals:
[SHORT AND LONG-TERM GOALS]

Debt payments: [MONTHLY DEBT OBLIGATIONS]

Savings target: [PERCENTAGE OR AMOUNT]

Please create:
1. Needs-based budget (50/30/20 rule or similar)
2. Category breakdown with realistic amounts
3. Pay yourself first approach
4. Discretionary spending allocation
5. Debt repayment strategy if applicable
6. Savings automation plan
7. Expense reduction opportunities
8. Tracking and review approach
9. Flexibility for unexpected expenses

Include:
- Realistic vs. ideal spending
- Behavior-focused strategies
- Financial goal funding plan
- Built-in flexibility and fun`,
    placeholders: [
      "TAKE-HOME PAY",
      "SIDE INCOME, etc.",
      "LIST MAJOR EXPENSE CATEGORIES",
      "SHORT AND LONG-TERM GOALS",
      "MONTHLY DEBT OBLIGATIONS",
      "PERCENTAGE OR AMOUNT",
    ],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "finance-accounting",
    categoryId: "budgeting",
    exampleOutput:
      "A practical personal budget with clear categories, goals alignment, and sustainable habits.",
    customizationNotes: [
      "Add location-specific cost of living",
      "Include family or household specifics",
      "Consider income variability if applicable",
    ],
    tags: ["budgeting", "personal-finance", "savings", "money-management"],
    order: 7,
  },

  // ============================================================================
  // FINANCIAL ANALYSIS
  // ============================================================================

  {
    id: "financial-ratio-analysis",
    title: "Financial Ratio Analysis",
    description: "Calculate and interpret key financial ratios for business health assessment.",
    promptText: `Perform a financial ratio analysis for the following business.

Business type: [INDUSTRY]
Analysis period: [TIMEFRAME]

Balance sheet data:
[ASSETS, LIABILITIES, EQUITY]

Income statement data:
[REVENUE, EXPENSES, PROFIT]

Cash flow data (if available):
[OPERATING, INVESTING, FINANCING CASH FLOWS]

Please calculate and interpret:
1. Liquidity ratios (Current, Quick)
2. Profitability ratios (Gross margin, Operating margin, Net margin, ROE, ROA)
3. Efficiency ratios (Asset turnover, Inventory turnover, Receivables turnover)
4. Solvency/Leverage ratios (Debt-to-Equity, Debt-to-Assets, Interest Coverage)
5. Growth rates (Revenue, Earnings)

For each ratio provide:
- Calculation with my numbers
- What the ratio measures
- Industry comparison context
- Trends over time if data allows
- Red flags or areas of strength`,
    placeholders: [
      "INDUSTRY",
      "TIMEFRAME",
      "ASSETS, LIABILITIES, EQUITY",
      "REVENUE, EXPENSES, PROFIT",
      "OPERATING, INVESTING, FINANCING CASH FLOWS",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "finance-accounting",
    categoryId: "financial-analysis",
    exampleOutput:
      "A comprehensive ratio analysis with calculations, interpretations, industry context, and trend insights.",
    customizationNotes: [
      "Include industry-specific benchmarks",
      "Add peer comparison data if available",
      "Consider business model differences",
    ],
    tags: ["financial-analysis", "ratios", "metrics", "performance"],
    order: 8,
  },

  {
    id: "profitability-analysis",
    title: "Profitability Analysis",
    description: "Analyze profit drivers, margins, and opportunities for improvement.",
    promptText: `Analyze the profitability of the following business.

Business type: [BUSINESS MODEL]
Time period: [QUARTER/YEAR]
Revenue: [TOTAL REVENUE]
Cost of goods/services: [COGS]
Gross profit: [GROSS PROFIT]
Operating expenses: [OPEx]
Net profit: [NET PROFIT]

Revenue breakdown by product/service:
[REVENUE BY SEGMENT]

Cost breakdown by category:
[COST BREAKDOWN]

Please provide:
1. Gross margin analysis by product/service
2. Operating expense ratio analysis
3. Contribution margin analysis
4. Break-even calculation
5. Most/least profitable segments
6. Margin improvement opportunities
7. Pricing vs. volume trade-offs
8. Fixed vs. variable cost analysis

Include recommendations for:
- Margin improvement
- Product mix optimization
- Cost reduction opportunities
- Pricing strategy adjustments`,
    placeholders: [
      "BUSINESS MODEL",
      "QUARTER/YEAR",
      "TOTAL REVENUE",
      "COGS",
      "GROSS PROFIT",
      "OPEx",
      "NET PROFIT",
      "REVENUE BY SEGMENT",
      "COST BREAKDOWN",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "finance-accounting",
    categoryId: "financial-analysis",
    exampleOutput:
      "A detailed profitability analysis with margin insights, break-even analysis, and improvement recommendations.",
    customizationNotes: [
      "Add industry-specific margin benchmarks",
      "Include product/service specific factors",
      "Consider competitive pricing dynamics",
    ],
    tags: ["financial-analysis", "profitability", "margins", "optimization"],
    order: 9,
  },

  {
    id: "cash-flow-analysis",
    title: "Cash Flow Analysis",
    description: "Analyze cash flow patterns, quality, and sustainability.",
    promptText: `Analyze the cash flow position and trends for this business.

Business type: [INDUSTRY/MODEL]
Analysis period: [TIMEFRAME]

Operating cash flow: [OCF AMOUNT]
Investing cash flow: [ICF AMOUNT]
Financing cash flow: [FCF AMOUNT]
Net change in cash: [NET CHANGE]
Starting cash: [BEGINNING BALANCE]
Ending cash: [ENDING BALANCE]

Cash flow details:
[BREAKDOWN BY CATEGORY]

Please analyze:
1. Cash flow from operations quality and sustainability
2. Capital expenditure intensity and necessity
3. Financing activities and dependencies
4. Free cash flow generation
5. Working capital changes impact
6. Cash burn rate (if negative)
7. Cash runway or surplus utilization
8. Red flags or strengths in cash generation
9. Comparison to net income (cash vs. accrual)

Include:
- Liquidity assessment
- Cash flow improvement opportunities
- Working capital optimization
- Financing needs or alternatives`,
    placeholders: [
      "INDUSTRY/MODEL",
      "TIMEFRAME",
      "OCF AMOUNT",
      "ICF AMOUNT",
      "FCF AMOUNT",
      "NET CHANGE",
      "BEGINNING BALANCE",
      "ENDING BALANCE",
      "BREAKDOWN BY CATEGORY",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "finance-accounting",
    categoryId: "financial-analysis",
    exampleOutput:
      "A comprehensive cash flow analysis with quality assessment, sustainability evaluation, and optimization opportunities.",
    customizationNotes: [
      "Include industry-specific cash patterns",
      "Add business model considerations",
      "Consider seasonality and cycles",
    ],
    tags: ["financial-analysis", "cash-flow", "liquidity", "working-capital"],
    order: 10,
  },

  {
    id: "break-even-analysis",
    title: "Break-Even Analysis",
    description: "Calculate break-even points and analyze cost structures.",
    promptText: `Perform a break-even analysis for the following business/product.

Product/Service: [DESCRIPTION]
Selling price per unit: [PRICE]
Variable costs per unit: [VARIABLE COSTS]
Fixed costs (period): [FIXED COSTS]
Expected sales volume: [UNITS PER PERIOD]

Please calculate and analyze:
1. Break-even point in units
2. Break-even point in revenue dollars
3. Contribution margin per unit
4. Contribution margin ratio
5. Margin of safety at expected sales
6. Target profit analysis (units/$$ for specific profit)
7. Sensitivity to price changes
8. Sensitivity to cost changes
9. Scenario analysis (best/worst cases)

Include:
- Visual explanation of concepts
- How to reduce break-even point
- Risk assessment of current cost structure
- Unit economics diagnostics`,
    placeholders: ["DESCRIPTION", "PRICE", "VARIABLE COSTS", "FIXED COSTS", "UNITS PER PERIOD"],
    bestTool: "any",
    difficulty: "intermediate",
    domainId: "finance-accounting",
    categoryId: "financial-analysis",
    exampleOutput:
      "A clear break-even analysis with calculations, sensitivity scenarios, and strategic insights.",
    customizationNotes: [
      "Add complexity for multi-product businesses",
      "Include step-fixed cost considerations",
      "Consider economies of scale",
    ],
    tags: ["financial-analysis", "break-even", "unit-economics", "pricing"],
    order: 11,
  },

  {
    id: "vertical-common-size-analysis",
    title: "Vertical & Common-Size Analysis",
    description: "Normalize financial statements for comparison and trend analysis.",
    promptText: `Perform a vertical/common-size analysis for the following financials.

Financial statement type: [INCOME STATEMENT/BALANCE SHEET]
Time periods: [PERIODS TO COMPARE]

Income statement data:
[REVENUE AND EXPENSE LINE ITEMS]

Or balance sheet data:
[ASSET, LIABILITY, EQUITY LINE ITEMS]

Please create:
1. Common-size financial statements (% of revenue for IS, % of total assets for BS)
2. Comparison across periods
3. Line items that changed significantly
4. Structural analysis of the business
5. Cost structure trends
6. Efficiency or margin shifts
7. Areas needing further investigation

Include:
- What the analysis reveals
- Red flags or positive trends
- Comparison to industry norms (general)
- Questions for further analysis`,
    placeholders: [
      "INCOME STATEMENT/BALANCE SHEET",
      "PERIODS TO COMPARE",
      "REVENUE AND EXPENSE LINE ITEMS",
      "ASSET, LIABILITY, EQUITY LINE ITEMS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "finance-accounting",
    categoryId: "financial-analysis",
    exampleOutput:
      "A common-size analysis with period comparisons, structural insights, and investigation areas.",
    customizationNotes: [
      "Add industry structural comparisons",
      "Include segment reporting if available",
      "Consider business model changes",
    ],
    tags: ["financial-analysis", "common-size", "trends", "comparison"],
    order: 12,
  },

  {
    id: "dupont-analysis",
    title: "DuPont Analysis",
    description: "Decompose ROE into component drivers for deeper performance insights.",
    promptText: `Perform a DuPont Analysis to understand ROE drivers.

Business: [INDUSTRY/CONTEXT]
Analysis period: [YEAR/PERIOD]

Net income: [NET INCOME]
Revenue: [REVENUE]
Total assets: [ASSETS]
Total equity: [EQUITY]

Please calculate and analyze:
1. Return on Equity (ROE)
2. Three DuPont components:
   - Net profit margin = Net Income / Revenue
   - Asset turnover = Revenue / Total Assets
   - Financial leverage = Total Assets / Total Equity
3. How each component drives ROE
4. Comparison across periods if multiple years
5. What the analysis reveals about the business model
6. Trade-offs and risks in the current structure
7. Improvement opportunities by component

Interpret:
- Is ROE driven by margins, efficiency, or leverage?
- Sustainability of current ROE
- Risk factors in current structure`,
    placeholders: ["INDUSTRY/CONTEXT", "YEAR/PERIOD", "NET INCOME", "REVENUE", "ASSETS", "EQUITY"],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "finance-accounting",
    categoryId: "financial-analysis",
    exampleOutput: "A DuPont analysis with component breakdown, drivers, and strategic insights.",
    customizationNotes: [
      "Include industry comparison context",
      "Add multi-year trend analysis",
      "Consider business model specifics",
    ],
    tags: ["financial-analysis", "dupont", "roe", "performance-drivers"],
    order: 13,
  },

  {
    id: "financial-health-check",
    title: "Financial Health Check",
    description: "Comprehensive assessment of overall financial condition and sustainability.",
    promptText: `Perform a comprehensive financial health assessment.

Business type: [INDUSTRY/BUSINESS MODEL]
Stage: [STARTUP/GROWTH/MATURE/DECLINING]

Key financial data:
[REVENUE, EXPENSES, PROFITS, ASSETS, LIABILITIES, CASH FLOW]

Time trend:
[IMPROVING/STABLE/DECLINING]

Context:
[RECENT CHALLENGES OR OPPORTUNITIES]

Please assess:
1. Overall financial health score (1-10)
2. Strengths across financial dimensions
3. Weaknesses and red flags
4. Solvency and sustainability
5. Liquidity and cash position
6. Operational efficiency
7. Growth prospects and capacity
8. Risk factors and vulnerabilities
9. Top 5 priorities to address

Include:
- Traffic light system (green/yellow/red)
- Leading vs. lagging indicators
- Short-term vs. long-term concerns
- Monitoring checklist going forward`,
    placeholders: [
      "INDUSTRY/BUSINESS MODEL",
      "STARTUP/GROWTH/MATURE/DECLINING",
      "REVENUE, EXPENSES, PROFITS, ASSETS, LIABILITIES, CASH FLOW",
      "IMPROVING/STABLE/DECLINING",
      "RECENT CHALLENGES OR OPPORTUNITIES",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "finance-accounting",
    categoryId: "financial-analysis",
    exampleOutput:
      "A comprehensive financial health assessment with scoring, priorities, and action items.",
    customizationNotes: [
      "Include industry-specific health indicators",
      "Add stage-appropriate metrics",
      "Consider strategic context",
    ],
    tags: ["financial-analysis", "health-check", "assessment", "diagnostics"],
    order: 14,
  },

  {
    id: "scenario-and-sensitivity-analysis",
    title: "Scenario and Sensitivity Analysis",
    description: "Test financial resilience under different business conditions.",
    promptText: `Perform scenario and sensitivity analysis for this business.

Base case financials:
[REVENUE, COSTS, PROFIT]

Key business drivers:
[MAIN VARIABLES AFFECTING PERFORMANCE]

Please create scenarios for:
1. Base case (current expectations)
2. Best case (optimistic but realistic)
3. Worst case (challenging but survivable)
4. Stress test (severe downturn)

For each scenario analyze:
- Revenue assumptions
- Cost structure impact
- Profit/loss outcome
- Cash flow implications
- Breakeven shifts
- Action triggers/decisions

Sensitivity analysis:
- Which variables have most impact?
- At what point does the business become unviable?
- Early warning indicators
- Buffer or contingency needed`,
    placeholders: ["REVENUE, COSTS, PROFIT", "MAIN VARIABLES AFFECTING PERFORMANCE"],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "finance-accounting",
    categoryId: "financial-analysis",
    exampleOutput:
      "A detailed scenario analysis with sensitivity testing and contingency planning.",
    customizationNotes: [
      "Include industry-specific risk factors",
      "Add macroeconomic sensitivities",
      "Consider competitive dynamics",
    ],
    tags: ["financial-analysis", "scenarios", "sensitivity", "risk"],
    order: 15,
  },

  // ============================================================================
  // INVOICING
  // ============================================================================

  {
    id: "professional-invoice-template",
    title: "Professional Invoice Template",
    description: "Create clear, professional invoices that get paid faster.",
    promptText: `Create a professional invoice template.

Business type: [SERVICE/PRODUCT/BOTH]
Business name: [COMPANY NAME]
Payment terms: [NET 15/30/60/OTHER]
Typical line items: [WHAT YOU SELL]

Tax requirements: [TAX RULES OR NONE]

Please create an invoice template with:
1. Clean, professional header
2. Your business branding elements
3. Invoice number and date
4. Payment terms clearly stated
5. Due date calculation
6. Line items with:
   - Clear description
   - Quantity
   - Rate
   - Amount
7. Subtotal
8. Tax calculation (if applicable)
9. Total amount due
10. Payment methods and instructions
11. Contact information for questions
12. Late payment policy (if applicable)

Best practices:
- Clear, easy to understand
- Professional appearance
- All payment information prominent
- Terms and conditions brief but clear`,
    placeholders: [
      "SERVICE/PRODUCT/BOTH",
      "COMPANY NAME",
      "NET 15/30/60/OTHER",
      "WHAT YOU SELL",
      "TAX RULES OR NONE",
    ],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "finance-accounting",
    categoryId: "invoicing",
    exampleOutput:
      "A professional invoice template with clear layout, all required elements, and payment-friendly design.",
    customizationNotes: [
      "Add industry-specific invoice requirements",
      "Include your branding and logo placement",
      "Consider client-specific invoicing needs",
    ],
    tags: ["invoicing", "template", "accounts-receivable", "payment"],
    order: 16,
  },

  {
    id: "payment-reminder-templates",
    title: "Payment Reminder Templates",
    description: "Polite, effective payment reminders for overdue invoices.",
    promptText: `Create payment reminder email templates.

Business type: [YOUR BUSINESS]
Invoice amount: [TYPICAL RANGE]
Payment terms: [YOUR STANDARD TERMS]
Client relationship: [NEW/ESTABLISHED/AT RISK]

Please create templates for:
1. Pre-due reminder (3-5 days before due)
2. Due date reminder (on due date)
3. First overdue notice (1-7 days past due)
4. Second overdue notice (14-30 days past due)
5. Final notice before escalation
6. Payment plan request (if client struggling)

Each template should be:
- Professional and polite
- Clear about what's owed
- Helpful (attaching invoice, payment link)
- Relationship-preserving
- Escalating in firmness appropriately

Include:
- Subject line options
- Payment details/instructions
- Who to contact with questions`,
    placeholders: [
      "YOUR BUSINESS",
      "TYPICAL RANGE",
      "YOUR STANDARD TERMS",
      "NEW/ESTABLISHED/AT RISK",
    ],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "finance-accounting",
    categoryId: "invoicing",
    exampleOutput:
      "A series of payment reminder templates from gentle to firm, maintaining professionalism.",
    customizationNotes: [
      "Add your specific payment methods",
      "Include late fee policy if applicable",
      "Consider client communication preferences",
    ],
    tags: ["invoicing", "collections", "payment-reminders", "ar"],
    order: 17,
  },

  {
    id: "invoice-dispute-response",
    title: "Invoice Dispute Response",
    description: "Handle invoice disputes professionally and preserve relationships.",
    promptText: `Help me respond to an invoice dispute.

Original invoice amount: [AMOUNT]
Disputed amount: [DISPUTED PORTION]
Client's stated reason: [THEIR ISSUE]
Our position: [YOUR PERSPECTIVE]
Relationship value: [HIGH/MEDIUM/LOW - AT RISK?]

Previous work with this client: [CONTEXT]

Please create:
1. Acknowledgment response (open communication)
2. Explanation/clarification response (if misunderstanding)
3. Resolution options (if partial validity)
4. Firm but fair response (if dispute unfounded)
5. Compromise/response (relationship preservation focus)
6. Next steps and timeline

Each response should:
- Acknowledge their concern professionally
- Present your position clearly with evidence
- Offer resolution options when appropriate
- Preserve the relationship
- Be clear on next steps
- Know when to escalate to leadership`,
    placeholders: [
      "AMOUNT",
      "DISPUTED PORTION",
      "THEIR ISSUE",
      "YOUR PERSPECTIVE",
      "HIGH/MEDIUM/LOW - AT RISK?",
      "CONTEXT",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "finance-accounting",
    categoryId: "invoicing",
    exampleOutput:
      "Professional dispute response templates with different approaches based on situation validity.",
    customizationNotes: [
      "Include your contract terms reference",
      "Add evidence documentation approach",
      "Consider legal or escalation thresholds",
    ],
    tags: ["invoicing", "disputes", "conflict-resolution", "client-relations"],
    order: 18,
  },

  {
    id: "late-fee-policy-communication",
    title: "Late Fee Policy Communication",
    description: "Communicate late payment policies clearly and enforce them fairly.",
    promptText: `Create communication about late fee policies.

Current situation: [NEW POLICY OR ENFORCING EXISTING]
Payment terms: [YOUR STANDARD TERMS]
Late fee: [AMOUNT OR PERCENTAGE]
Grace period (if any): [DAYS]
Client relationship context: [ONGOING RELATIONSHIPS]

Please create:
1. Initial policy communication (to new clients)
2. Policy change notification (to existing clients)
3. First time fee waiver (relationship building)
4. Fee notification when applied
5. Fee removal request response
6. Consistent but flexible enforcement guidance

Each communication should:
- Be clear about terms
- Explain the policy rationale
- Remain relationship-focused
- Be consistent and fair
- Provide options to avoid fees

Include:
- Sample policy language for contracts
- How to handle special cases
- System for tracking and consistency`,
    placeholders: [
      "NEW POLICY OR ENFORCING EXISTING",
      "YOUR STANDARD TERMS",
      "AMOUNT OR PERCENTAGE",
      "DAYS",
      "ONGOING RELATIONSHIPS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "finance-accounting",
    categoryId: "invoicing",
    exampleOutput: "Clear late fee policy communications with relationship-preserving approaches.",
    customizationNotes: [
      "Include legal or jurisdiction considerations",
      "Add your business context factors",
      "Consider industry standard practices",
    ],
    tags: ["invoicing", "late-fees", "policy", "enforcement"],
    order: 19,
  },

  {
    id: "payment-plan-proposal",
    title: "Payment Plan Proposal",
    description: "Structure fair payment plans for clients who can't pay in full.",
    promptText: `Create a payment plan proposal for a client.

Total owed: [OUTSTANDING BALANCE]
Client's situation: [WHY THEY CAN'T PAY IN FULL]
Your business cash needs: [YOUR CONSTRAINTS]
Relationship value: [HIGH/MEDIUM/LOW]

Amount client can pay monthly: [THEIR CAPACITY]

Please create:
1. Payment plan proposal with:
   - Number of payments
   - Payment amount
   - Payment dates
   - Any interest or fees
2. Agreement terms and conditions
3. What happens if they miss payments
4. How to handle future work during repayment
5. Payment method setup
6. Communication approach

The plan should be:
- Fair to both parties
- Realistic given their capacity
- Time-bound (not indefinite)
- Clear on consequences
- Preserving the relationship if possible`,
    placeholders: [
      "OUTSTANDING BALANCE",
      "WHY THEY CAN'T PAY IN FULL",
      "YOUR CONSTRAINTS",
      "HIGH/MEDIUM/LOW",
      "THEIR CAPACITY",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "finance-accounting",
    categoryId: "invoicing",
    exampleOutput:
      "A fair payment plan proposal with clear terms, realistic structure, and relationship preservation.",
    customizationNotes: [
      "Include legal or tax considerations",
      "Add business-specific constraints",
      "Consider secured vs. unsecured arrangements",
    ],
    tags: ["invoicing", "payment-plan", "collections", "compromise"],
    order: 20,
  },

  {
    id: "invoicing-best-practices",
    title: "Invoicing Best Practices",
    description: "Optimize your invoicing process for faster payments and fewer issues.",
    promptText: `Provide best practices for efficient invoicing.

Business type: [SERVICE/PRODUCT/SUBSCRIPTION]
Typical invoice volume: [LOW/MEDIUM/HIGH]
Client base: [FEW REPEAT/MANY ONE-OFF/MIXED]
Current pain points: [CHALLENGES]

Industry: [YOUR INDUSTRY]

Please recommend best practices for:
1. Invoice timing and frequency
2. Invoice clarity and completeness
3. Payment terms optimization
4. Payment methods to offer
5. Invoice delivery methods
6. Follow-up and reminder cadence
7. Dispute prevention
8. Tracking and organization
9. Automation opportunities
10. Client communication and education

Include:
- Common mistakes to avoid
- Industry-specific considerations
- Tools or software recommendations
- Metrics to track (DSO, aging, etc.)`,
    placeholders: [
      "SERVICE/PRODUCT/SUBSCRIPTION",
      "LOW/MEDIUM/HIGH",
      "FEW REPEAT/MANY ONE-OFF/MIXED",
      "CHALLENGES",
      "YOUR INDUSTRY",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "finance-accounting",
    categoryId: "invoicing",
    exampleOutput:
      "Comprehensive invoicing best practices tailored to your business type and challenges.",
    customizationNotes: [
      "Add specific invoicing software considerations",
      "Include your current process assessment",
      "Consider client preferences and behaviors",
    ],
    tags: ["invoicing", "best-practices", "process", "optimization"],
    order: 21,
  },

  // ============================================================================
  // EXPENSE TRACKING
  // ============================================================================

  {
    id: "expense-categorization-framework",
    title: "Expense Categorization Framework",
    description: "Create clear expense categories for consistent tracking and reporting.",
    promptText: `Create an expense categorization framework.

Organization type: [BUSINESS/DEPARTMENT/PERSONAL]
Industry: [INDUSTRY]
Size: [REVENUE OR SCALE]
Tax requirements: [JURISDICTION OR COMPLIANCE NEEDS]

Current expense categories:
[EXISTING STRUCTURE OR NONE]

Pain points with current system:
[ISSUES IF ANY]

Please create:
1. Primary expense categories (5-10 major groups)
2. Subcategories within each (2-5 levels deep)
3. Clear definitions for each category
4. Examples of expenses in each
5. Gray areas and how to handle them
6. Capitalization vs. expense guidelines
7. Tax considerations by category
8. Reporting structure alignment

The framework should be:
- Mutually exclusive (clear where things go)
- Collectively exhaustive (covers everything)
- Scalable for growth
- Aligned to reporting needs
- Tax-compliant`,
    placeholders: [
      "BUSINESS/DEPARTMENT/PERSONAL",
      "INDUSTRY",
      "REVENUE OR SCALE",
      "JURISDICTION OR COMPLIANCE NEEDS",
      "EXISTING STRUCTURE OR NONE",
      "ISSUES IF ANY",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "finance-accounting",
    categoryId: "expense-tracking",
    exampleOutput: "A clear expense categorization framework with definitions and decision rules.",
    customizationNotes: [
      "Include industry-specific expense types",
      "Add company-specific cost centers",
      "Consider accounting software requirements",
    ],
    tags: ["expense-tracking", "categorization", "chart-of-accounts", "organization"],
    order: 22,
  },

  {
    id: "expense-report-template",
    title: "Expense Report Template",
    description: "Create clear expense report templates for reimbursement and tracking.",
    promptText: `Create an expense report template.

Organization type: [BUSINESS/NONPROFIT/OTHER]
Reimbursement policy: [EXISTING POLICY OR NEEDS CREATION]
Typical expenses: [COMMON CATEGORIES]
Approval workflow: [WHO APPROVES]

Please create an expense report template with:
1. Employee/submitter information
2. Report period dates
3. Expense line items with:
   - Date
   - Category
   - Description
   - Amount
   - Receipt/reference
   - Business purpose
   - Client/project code (if applicable)
4. Subtotals by category
5. Total amount
6. Allocation if billable to clients
7. Certification/signature section
8. Receipt checklist
9. Payment instructions
10. Approval section

Include:
- Clear instructions
- Common mistakes to avoid
- Required documentation checklist
- Processing timeline`,
    placeholders: [
      "BUSINESS/NONPROFIT/OTHER",
      "EXISTING POLICY OR NEEDS CREATION",
      "COMMON CATEGORIES",
      "WHO APPROVES",
    ],
    bestTool: "any",
    difficulty: "beginner",
    domainId: "finance-accounting",
    categoryId: "expense-tracking",
    exampleOutput: "A clear expense report template with all necessary fields and instructions.",
    customizationNotes: [
      "Add company-specific expense categories",
      "Include tax considerations or requirements",
      "Consider mobile-friendly or digital submission",
    ],
    tags: ["expense-tracking", "reimbursement", "template", "reports"],
    order: 23,
  },

  {
    id: "expense-policy-document",
    title: "Expense Policy Document",
    description: "Create clear expense policies that set expectations and prevent issues.",
    promptText: `Create an expense policy document.

Organization type: [BUSINESS/NONPROFIT/STARTUP]
Size: [SMALL/MEDIUM/LARGE]
Remote/hybrid: [IN-OFFICE/HYBRID/REMOTE]
Industry: [INDUSTRY]

Specific concerns to address: [PAIN POINTS OR ISSUES]

Please create a policy covering:
1. Purpose and scope
2. Eligible expenses (what's allowed)
3. Ineligible expenses (what's not allowed)
4. Spending limits by category/level
5. Approval requirements
6. Submission deadlines
7. Required documentation (receipts, etc.)
8. Reimbursement process and timing
9. Travel-specific rules (if applicable)
10. Client entertainment rules
11. Prohibited activities
12. Violations and consequences
13. Questions and contacts

Make it:
- Clear and unambiguous
- Easy to understand
- Reasonable and fair
- Enforceable
- Compliant with tax laws`,
    placeholders: [
      "BUSINESS/NONPROFIT/STARTUP",
      "SMALL/MEDIUM/LARGE",
      "IN-OFFICE/HYBRID/REMOTE",
      "INDUSTRY",
      "PAIN POINTS OR ISSUES",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "finance-accounting",
    categoryId: "expense-tracking",
    exampleOutput: "A comprehensive expense policy document that's clear, fair, and enforceable.",
    customizationNotes: [
      "Include legal or compliance requirements",
      "Add company culture considerations",
      "Consider remote work specific expenses",
    ],
    tags: ["expense-tracking", "policy", "compliance", "guidelines"],
    order: 24,
  },

  {
    id: "subscription-optimizer",
    title: "Subscription & Recurring Expense Audit",
    description: "Identify and eliminate unnecessary subscription and recurring expenses.",
    promptText: `Help me audit and optimize recurring subscriptions and expenses.

List of current subscriptions/recurring charges:
[PASTE YOUR SUBSCRIPTIONS WITH COSTS]

Total monthly recurring cost: [MONTHLY TOTAL]
Budget concern level: [LOW/MEDIUM/HIGH]

Please analyze:
1. Essential vs. nice-to-have categorization
2. Duplicate or overlapping services
3. Underutilized subscriptions
4. Free or lower-cost alternatives
5. Consolidation opportunities
6. Annual vs. monthly payment savings
7. Cancellation priority ranking
8. Negotiation opportunities

Create an action plan with:
- Keep as-is (essential, good value)
- Cancel immediately (not needed)
- Downgrade or modify (reduce cost)
- Evaluate alternative (research needed)
- Negotiate for better terms

Estimate potential savings.`,
    placeholders: ["PASTE YOUR SUBSCRIPTIONS WITH COSTS", "MONTHLY TOTAL", "LOW/MEDIUM/HIGH"],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "finance-accounting",
    categoryId: "expense-tracking",
    exampleOutput:
      "A subscription audit with categorization, alternatives, and an action plan with estimated savings.",
    customizationNotes: [
      "Include business vs. personal categories",
      "Add team or department usage context",
      "Consider contract end dates and penalties",
    ],
    tags: ["expense-tracking", "subscriptions", "optimization", "savings"],
    order: 25,
  },

  {
    id: "expense-reduction-opportunities",
    title: "Expense Reduction Opportunities",
    description: "Identify cost-cutting opportunities without sacrificing business capability.",
    promptText: `Identify expense reduction opportunities for this business.

Business type: [INDUSTRY/BUSINESS MODEL]
Annual expenses: [TOTAL EXPENDITURE]
Profit margins: [CURRENT MARGIN LEVEL]
Reduction target: [PERCENTAGE OR AMOUNT]

Major expense categories:
[LIST TOP CATEGORIES]

Current pain points: [SPECIFIC CONCERNS]

Please identify opportunities in:
1. Variable costs that could be reduced
2. Fixed costs that could be renegotiated
3. Process inefficiencies creating waste
4. Over-provision or over-capacity
5. Vendor consolidation opportunities
6. Alternative suppliers or solutions
7. Automation reducing manual labor
8. Elimination of low-value activities

For each opportunity include:
- Category affected
- Potential savings amount
- Implementation difficulty
- Business impact assessment
- Implementation timeline
- Risk considerations

Prioritize by:
- Ease vs. impact matrix
- Quick wins vs. structural changes`,
    placeholders: [
      "INDUSTRY/BUSINESS MODEL",
      "TOTAL EXPENDITURE",
      "CURRENT MARGIN LEVEL",
      "PERCENTAGE OR AMOUNT",
      "LIST TOP CATEGORIES",
      "SPECIFIC CONCERNS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "finance-accounting",
    categoryId: "expense-tracking",
    exampleOutput:
      "A prioritized list of expense reduction opportunities with impact, effort, and risk assessment.",
    customizationNotes: [
      "Add industry-specific cost drivers",
      "Include business cycle considerations",
      "Consider growth impact of cuts",
    ],
    tags: ["expense-tracking", "cost-reduction", "optimization", "efficiency"],
    order: 26,
  },

  {
    id: "receipt-and-documentation-organization",
    title: "Receipt & Documentation Organization",
    description: "Create systems for organized expense documentation and easy retrieval.",
    promptText: `Create a receipt and expense documentation system.

Volume of expenses: [LOW/MEDIUM/HIGH]
Business type: [SERVICE/PRODUCT/RETAIL/OTHER]
Tax compliance needs: [JURISDICTION OR REQUIREMENTS]
Current challenges: [PAIN POINTS]

Please recommend:
1. Receipt capture methods (digital, physical, both)
2. Organization system (categories, naming, folders)
3. Retention policy (how long to keep)
4. Backup and redundancy
5. Tools or apps for automation
6. Linking receipts to accounting software
7. Handling lost or missing receipts
8. Audit preparation approach
9. Team training and adoption
10. Quality control and review

Include:
- Digital vs. physical best practices
- Mobile-first solutions if applicable
- Integration with accounting tools
- Tax compliance considerations`,
    placeholders: [
      "LOW/MEDIUM/HIGH",
      "SERVICE/PRODUCT/RETAIL/OTHER",
      "JURISDICTION OR REQUIREMENTS",
      "PAIN POINTS",
    ],
    bestTool: "claude",
    difficulty: "beginner",
    domainId: "finance-accounting",
    categoryId: "expense-tracking",
    exampleOutput:
      "A comprehensive receipt and documentation system with tools and best practices.",
    customizationNotes: [
      "Add your existing accounting software",
      "Include team size and accessibility needs",
      "Consider remote work documentation",
    ],
    tags: ["expense-tracking", "receipts", "documentation", "organization"],
    order: 27,
  },

  {
    id: "reimbursement-workflow",
    title: "Reimbursement Workflow Design",
    description: "Design efficient expense reimbursement processes.",
    promptText: `Design an expense reimbursement workflow.

Organization size: [SMALL/MEDIUM/LARGE]
Number of employees submitting: [VOLUME]
Approval levels: [APPROVAL STRUCTURE]
Current process issues: [PAIN POINTS]

Accounting system: [SOFTWARE OR MANUAL]
Payment methods: [HOW YOU PAY]

Please create:
1. End-to-end process flow
2. Submission method and format
3. Review and verification steps
4. Approval routing and authority
5. Payment processing
6. Record keeping and accounting entry
7. Employee communication
8. Exception handling
9. Timeline SLAs for each step
10. Quality control and audit trail

Include:
- Technology/automation opportunities
- Policy compliance checkpoints
- Employee experience considerations
- Fraud prevention measures
- Performance metrics`,
    placeholders: [
      "SMALL/MEDIUM/LARGE",
      "VOLUME",
      "APPROVAL STRUCTURE",
      "PAIN POINTS",
      "SOFTWARE OR MANUAL",
      "HOW YOU PAY",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "finance-accounting",
    categoryId: "expense-tracking",
    exampleOutput:
      "An efficient reimbursement workflow with clear steps, responsibilities, and controls.",
    customizationNotes: [
      "Include your specific accounting software",
      "Add company approval hierarchy",
      "Consider remote or distributed teams",
    ],
    tags: ["expense-tracking", "reimbursement", "workflow", "process"],
    order: 28,
  },

  // ============================================================================
  // INVESTMENT RESEARCH
  // ============================================================================

  {
    id: "company-fundamental-analysis",
    title: "Company Fundamental Analysis",
    description: "Comprehensive analysis of a company's financial health and business quality.",
    promptText: `Perform a fundamental analysis of the following company.

Company: [COMPANY NAME]
Ticker: [SYMBOL]
Industry: [SECTOR]

Financial data available:
[REVENUE, EARNINGS, KEY METRICS]

Analysis purpose: [INVESTMENT DECISION/COMPARISON/RESEARCH]

Please analyze:
1. Business model and competitive position
2. Revenue growth and quality
3. Profit margins and trends
4. Return on capital (ROIC, ROE)
5. Balance sheet strength
6. Cash flow generation
7. Debt levels and solvency
8. Management effectiveness (capital allocation)
9. Competitive advantages (moats)
10. Risks and red flags
11. Valuation context (P/E, EV/EBITDA, etc.)
12. Catalysts and future prospects

Provide:
- Overall assessment (bull/bear/neutral)
- Key strengths
- Key concerns
- What to monitor going forward
- Questions for further research`,
    placeholders: [
      "COMPANY NAME",
      "SYMBOL",
      "SECTOR",
      "REVENUE, EARNINGS, KEY METRICS",
      "INVESTMENT DECISION/COMPARISON/RESEARCH",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "finance-accounting",
    categoryId: "investment-research",
    exampleOutput:
      "A thorough fundamental analysis with business quality assessment, financial health, and investment considerations.",
    customizationNotes: [
      "Include industry-specific metrics",
      "Add peer comparison context",
      "Consider company life stage",
    ],
    tags: ["investment-research", "fundamental-analysis", "stocks", "due-diligence"],
    order: 29,
  },

  {
    id: "investment-comparison-matrix",
    title: "Investment Comparison Matrix",
    description: "Compare multiple investments side-by-side for better decision making.",
    promptText: `Create a comparison matrix for investment options.

Investment type: [STOCKS/FUNDS/PROPERTIES/BUSINESSES]
Options to compare: [NUMBER OF OPTIONS]
Investment goal: [GROWTH/INCOME/BALANCED]
Time horizon: [SHORT/MEDIUM/LONG TERM]

Options to compare:
[LIST EACH WITH KEY DATA]

Please create a comparison across:
1. Historical returns (if applicable)
2. Risk profile and volatility
3. Liquidity
4. Minimum investment
5. Fees/expenses
6. Tax considerations
7. Diversification benefits
8. Management quality (if applicable)
9. Growth prospects
10. Income/yield (if applicable)
11. Your confidence level
12. Overall score/ranking

Include:
- Visual comparison table
- Weighted scoring if priorities known
- Pros/cons of each option
- Recommendation with rationale`,
    placeholders: [
      "STOCKS/FUNDS/PROPERTIES/BUSINESSES",
      "NUMBER OF OPTIONS",
      "GROWTH/INCOME/BALANCED",
      "SHORT/MEDIUM/LONG TERM",
      "LIST EACH WITH KEY DATA",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "finance-accounting",
    categoryId: "investment-research",
    exampleOutput: "A comprehensive investment comparison matrix with scoring and recommendations.",
    customizationNotes: [
      "Add your specific investment criteria",
      "Include risk tolerance considerations",
      "Consider portfolio context and diversification",
    ],
    tags: ["investment-research", "comparison", "decision-making", "portfolio"],
    order: 30,
  },

  {
    id: "risk-assessment-framework",
    title: "Investment Risk Assessment",
    description: "Systematically evaluate investment risks across multiple dimensions.",
    promptText: `Perform a risk assessment for the following investment.

Investment: [DESCRIPTION]
Type: [STOCK/BOND/FUND/PROPERTY/OTHER]
Amount considering: [INVESTMENT AMOUNT]
Portfolio context: [EXISTING HOLDINGS]

Please assess risk across dimensions:
1. Market risk (systematic factors)
2. Specific risk (company/asset-specific)
3. Liquidity risk (ability to sell)
4. Concentration risk (correlation to existing)
5. Time horizon risk (need for funds)
6. Leverage risk (debt involved)
7. Currency risk (if applicable)
8. Regulatory/political risk
9. Key person risk (if applicable)
10. Black swan possibilities

For each risk:
- Rate severity (Low/Medium/High)
- Explain the risk
- Mitigation strategies
- Warning signs to monitor

Provide:
- Overall risk profile
- Risk tolerance match
- Diversification assessment
- Position size recommendation`,
    placeholders: [
      "DESCRIPTION",
      "STOCK/BOND/FUND/PROPERTY/OTHER",
      "INVESTMENT AMOUNT",
      "EXISTING HOLDINGS",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "finance-accounting",
    categoryId: "investment-research",
    exampleOutput:
      "A comprehensive risk assessment across multiple dimensions with mitigation strategies.",
    customizationNotes: [
      "Include your risk tolerance level",
      "Add specific concerns or red flags",
      "Consider market cycle position",
    ],
    tags: ["investment-research", "risk", "due-diligence", "assessment"],
    order: 31,
  },

  {
    id: "competitive-analysis-investing",
    title: "Competitive Analysis for Investors",
    description: "Analyze competitive positioning and industry dynamics.",
    promptText: `Analyze the competitive position of this company.

Company: [NAME]
Industry: [SECTOR]

Competitors: [MAIN COMPETITORS]

Key questions: [SPECIFIC CONCERNS]

Please analyze:
1. Industry structure and dynamics
2. Market size and growth
3. Competitive positioning:
   - Market share
   - Growth relative to market
   - Pricing power
   - Product/service differentiation
4. Competitive advantages (moats):
   - Brand
   - Network effects
   - Switching costs
   - Cost advantages
   - Regulatory advantages
5. Threats to competitive position:
   - New entrants
   - Substitutes
   - Supplier power
   - Buyer power
6. Management's competitive strategy
7. How competition might evolve

Provide:
- Strength of competitive position (1-10)
- Sustainability assessment
- Key risks to monitor
- Questions for further research`,
    placeholders: ["NAME", "SECTOR", "MAIN COMPETITORS", "SPECIFIC CONCERNS"],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "finance-accounting",
    categoryId: "investment-research",
    exampleOutput: "A detailed competitive analysis with moat assessment and industry dynamics.",
    customizationNotes: [
      "Include specific competitive factors in your industry",
      "Add recent strategic developments",
      "Consider disruption risks",
    ],
    tags: ["investment-research", "competition", "moat", "industry-analysis"],
    order: 32,
  },

  {
    id: "real-estate-investment-analysis",
    title: "Real Estate Investment Analysis",
    description: "Evaluate real estate investments with comprehensive financial analysis.",
    promptText: `Analyze this real estate investment opportunity.

Property type: [RESIDENTIAL/COMMERCIAL/MULTI-FAMILY/OTHER]
Location: [MARKET]
Purchase price: [PRICE]
Down payment: [AMOUNT OR PERCENTAGE]

Property details:
[SQUARE FOOTAGE, UNITS, CONDITION]

Rental income: [MONTHLY RENT]
Expenses: [TAXES, INSURANCE, MAINTENANCE, HOA, etc.]
Financing: [INTEREST RATE, TERMS]

Please analyze:
1. Cash flow (monthly and annual)
2. Capitalization rate (Cap Rate)
3. Cash-on-cash return
4. Total return (cash flow + appreciation)
5. Key operating ratios (operating expense ratio, etc.)
6. Vacancy impact sensitivity
7. Repair/renovation reserve needs
8. Tax considerations (depreciation, etc.)
9. Market rent vs. current rent potential
10. Comparable sales analysis approach
11. Return scenarios (conservative/base/optimistic)
12. Key risks and mitigants

Provide:
- Overall investment quality assessment
- Go/no-go recommendation with rationale`,
    placeholders: [
      "RESIDENTIAL/COMMERCIAL/MULTI-FAMILY/OTHER",
      "MARKET",
      "PRICE",
      "AMOUNT OR PERCENTAGE",
      "SQUARE FOOTAGE, UNITS, CONDITION",
      "MONTHLY RENT",
      "TAXES, INSURANCE, MAINTENANCE, HOA, etc.",
      "INTEREST RATE, TERMS",
    ],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "finance-accounting",
    categoryId: "investment-research",
    exampleOutput:
      "A comprehensive real estate investment analysis with returns, scenarios, and risk assessment.",
    customizationNotes: [
      "Add location-specific market factors",
      "Include your investment goals",
      "Consider property management approach",
    ],
    tags: ["investment-research", "real-estate", "rental-property", "analysis"],
    order: 33,
  },

  {
    id: "valuation-comparison",
    title: "Valuation Comparison Analysis",
    description: "Compare valuations across peers to identify over/undervalued assets.",
    promptText: `Perform a valuation comparison analysis.

Company: [NAME]
Current stock price: [PRICE]
Industry: [SECTOR]

Peer companies:
[LIST PEERS WITH KEY METRICS]

Please compare across:
1. P/E ratio (forward and trailing)
2. EV/EBITDA
3. Price/Sales
4. Price/Book (if applicable)
5. PEG ratio (growth-adjusted P/E)
6. Dividend yield (if applicable)
7. Enterprise Value multiples
8. Discounted cash flow (DCF) context if applicable
9. Historical valuation ranges
10. Premium/discount to peers

For each metric:
- Current value
- Peer average/median
- Percentile rank vs. peers
- Whether premium/discount is justified

Provide:
- Overall valuation assessment
- Whether fairly valued, overvalued, or undervalued
- Key reasons for valuation differences
- What multiple the stock should trade at`,
    placeholders: ["NAME", "PRICE", "SECTOR", "LIST PEERS WITH KEY METRICS"],
    bestTool: "claude",
    difficulty: "advanced",
    domainId: "finance-accounting",
    categoryId: "investment-research",
    exampleOutput:
      "A comprehensive valuation comparison with peer assessment and fair value analysis.",
    customizationNotes: [
      "Include industry-specific valuation metrics",
      "Add growth rate considerations",
      "Consider quality differences",
    ],
    tags: ["investment-research", "valuation", "peers", "multiples"],
    order: 34,
  },

  {
    id: "investment-research-checklist",
    title: "Investment Research Checklist",
    description: "Comprehensive due diligence checklist before making investment decisions.",
    promptText: `Create an investment research checklist.

Investment type: [STOCK/BOND/FUND/STARTUP/PROPERTY]
Your experience level: [BEGINNER/INTERMEDIATE/ADVANCED]
Time to research: [HOURS AVAILABLE]

Key concerns: [RISK TOLERANCE OR CONSTRAINTS]

Please create a due diligence checklist with:
1. Business understanding questions
2. Financial health checks
3. Management and governance review
4. Competitive position assessment
5. Valuation sanity checks
6. Risk factor identification
7. Red flag warnings
8. What could go wrong scenarios
9. Information sources to consult
10. Who to follow/learn from
11. Questions to ask yourself before investing
12. Position sizing guidance

Organize by:
- Must-do (minimum research)
- Should-do (good research)
- Nice-to-do (thorough research)

Include:
- Time estimates for each item
- Deal-breakers vs. yellow flags
- How to know when you're ready to decide`,
    placeholders: [
      "STOCK/BOND/FUND/STARTUP/PROPERTY",
      "BEGINNER/INTERMEDIATE/ADVANCED",
      "HOURS AVAILABLE",
      "RISK TOLERANCE OR CONSTRAINTS",
    ],
    bestTool: "claude",
    difficulty: "intermediate",
    domainId: "finance-accounting",
    categoryId: "investment-research",
    exampleOutput:
      "A comprehensive investment research checklist organized by priority and time requirements.",
    customizationNotes: [
      "Add investment-type specific items",
      "Include your knowledge gaps",
      "Consider information sources available to you",
    ],
    tags: ["investment-research", "due-diligence", "checklist", "decision-making"],
    order: 35,
  },
];
