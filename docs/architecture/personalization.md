# Personalization Algorithm

The personalization system is a deterministic cold-start recommendation engine. It produces a ranked module learning path from onboarding responses alone, without requiring prior behavioral data. The algorithm is defined in `src/lib/personalization/algorithm.ts` and produces identical output for identical input across all 7,372,800 possible response combinations (Thesis §4.2).

## Inputs

The onboarding assessment consists of 11 single-choice questions defined in `src/lib/personalization/questions.ts`. The questions are organized into five dimensions as described in Thesis §3.7.2 and Appendix A.5:

1. **Professional Context** (Q1–Q2) — Role and industry.
2. **Current AI Experience** (Q3–Q5) — Skill level, tools used, and usage frequency.
3. **Motivation and Pain Points** (Q6–Q7) — Primary goals and obstacles.
4. **Confidence and Readiness** (Q8–Q9) — Self-assessed comfort and willingness to adopt AI.
5. **Time and Goals** (Q10–Q11) — Available daily time and desired learning outcomes.

Each response is represented as a stable string value. These values serve as keys into the `RESPONSE_WEIGHTS` scoring table.

## Algorithm Stages

The algorithm processes responses through four sequential stages, consistent with Thesis §3.7.3 and Appendix B.2:

**Stage 1 — Response-to-Module Weight Mapping.** Each of the 11 responses is mapped to one or more of the 10 curriculum modules through the `RESPONSE_WEIGHTS` table. Weights range from 1 (weak signal) to 5 (strong signal). For example, a marketing communications professional receives a weight of 5 for Content Creation and 4 for Prompt Engineering.

**Stage 2 — Score Accumulation.** The algorithm sums all triggered weights for each module across all 11 responses. Modules accumulating high weights from multiple questions rank higher than modules triggered by only one or two responses.

**Stage 3 — Override Rules.** Four context-sensitive rules adjust accumulated scores for specific learner profiles:
- Beginners or learners with no prior tools receive a boost to AI Foundations (+10) and Productivity Basics (+5).
- Intermediate or regular users receive a bonus to Prompt Engineering (+6) and a reduction to AI Foundations (−4).
- Independent professionals and business owners receive additional weight for Content Creation and Productivity Basics.
- Learners reporting time pressure or workload stress receive a boost to Productivity Basics and ChatGPT.

**Stage 4 — Path Length Determination.** The Q10 response (daily time availability) determines the recommended path length:
- Minimal time (~5 minutes/day): 3 modules.
- Standard time (10–15 minutes/day): 5 modules.
- Generous time (20+ minutes/day): 7 modules.

The top-ranked modules from Stage 3 are selected up to this limit and presented as the recommended learning path.

## Output

The algorithm returns a `PersonalizationResult` containing:
- `customerProfile` — employee or independent.
- `persona` — threatened_performer, business_leverager, or curious_explorer.
- `aiExperience` — none, basic, or intermediate.
- `recommendedPath` — ordered array of module identifiers.
- `pathLength` — 3, 5, or 7.

A full `PersonalizationAudit` object is also produced, recording every score contribution, override adjustment, and final ranking. This audit trail enables complete traceability from input responses to output recommendation.

## Storage

The completed onboarding session is written to the `onboarding_sessions` table. A normalized personalization payload is also stored in `users.metadata.personalization` so the learner dashboard can render the recommended path without recomputing the algorithm on each page load.
