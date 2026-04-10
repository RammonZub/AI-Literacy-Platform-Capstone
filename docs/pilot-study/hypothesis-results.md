# Hypothesis Results

**N = 12** | **Window:** 2026-03-10 → 2026-03-17 | **Platform:** AI Literacy Platform v1

---

| Hypothesis | Definition | Threshold | Result | Outcome |
|------------|-----------|-----------|--------|---------|
| **H1** — Lesson completion | Completed / started lessons | ≥ 70% | **93.0%** (40/43) | Supported |
| **H2** — 7-day return | Participants returning within 7 days | ≥ 50% | **66.7%** (8/12) | Supported |
| **H3** — Usability (SUS) | Mean SUS composite score | > 68 | **75.83** (SD 9.15) | Supported |
| **H4** — Unassisted tasks | Core tasks completed without support | ≥ 90% | **97.9%** (47/48) | Supported |
| **H5** — Recommendation relevance | Mean relevance rating (1–10) | ≥ 7.0 | **8.33** (100% rated ≥ 6) | Supported |
| **H6** — First-session activation | End-to-end activation completion | ≥ 80% | **100%** overall, 83.3% unassisted | Supported |

All six hypotheses exceeded their thresholds.

---

## Key Metrics

| Metric | Value |
|--------|-------|
| Total lessons completed | 40 / 43 started |
| Mean lesson duration | 13.8 minutes |
| Mean first-session duration | 35.1 minutes |
| Total XP earned | 4,000 (100 per lesson) |
| SUS median | 78.75 (mean pulled down by 2 domain-mismatch outliers) |
| SUS benchmark comparison | 75.83 vs 72.8 e-learning average (Bangor et al., 2009) |
| NPS proxy | +33 (6 promoters, 4 passives, 2 detractors) |
| Support interactions | 2 / 12 participants (< 1% of events) |

---

## Design Signals

**Signal 1 — Recommendation trust gap (TP05)**
One complete beginner needed confirmation before starting the recommended module. The algorithm was correct; the UI did not explain the rationale. Fix: add a brief explanation to the recommendation screen.

**Signal 2 — Mobile post-lesson navigation (TP06)**
One mobile participant could not navigate back to the dashboard after the lesson completion overlay. Fix: add a prominent "Back to Dashboard" button on the completion screen.

**Signal 3 — Domain-content mismatch (TP07, TP09)**
Two finance-domain participants completed activation without help but did not return. The algorithm identified these profiles correctly, but the lesson examples aligned less well with their day-to-day work.

---

## Limitations

1. **N = 12.** Pilot-scale observations only. No confidence intervals reported.
2. **Convenience sampling.** Participants from the researcher's personal network. Social desirability effects may inflate satisfaction ratings.
3. **7-day window.** H2 captures early re-engagement only. Long-term retention is outside scope.
4. **Domain-mismatch profiles.** TP07 and TP09 (finance/PE) differ from the primary target persona. Their inclusion lowers mean SUS and return rate.
5. **Support channel.** Both support interactions were via WhatsApp — a low-friction channel not available in a live product.
