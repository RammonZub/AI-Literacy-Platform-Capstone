# Data Model and Evidence

The thesis evaluation metrics are derived from first-party application data stored in Supabase (PostgreSQL). The platform maintains both row-level state records and event-level activity logs, providing two complementary views of learner behavior for analysis.

## Database Tables

| Table | Description |
| ---- | ---- |
| `users` | Account-level learner state: experience points, streak counts, access status, subscription status, and a `metadata` JSONB column that stores the personalization payload. |
| `onboarding_sessions` | Complete onboarding records including the 11 assessment responses, the algorithm output (persona, customer profile, recommended path), and session timestamps. |
| `lesson_progress` | Per-lesson status records with `started_at` and `completed_at` timestamps, module and lesson identifiers, and XP earned. |
| `telemetry_events` | Timestamped behavioral events including onboarding completion, lesson starts and completions, checkpoint attempts, XP awards, streak updates, recommendation views and ratings, and SUS score submissions. |
| `certificates` | Module completion certificates with user and module identifiers, issue timestamps, and certificate metadata. |

The full schema is defined in `supabase/migrations/20260410000000_schema.sql`.

## Row-Level State vs. Event Timeline

`lesson_progress` serves as the stable state of the learner. It answers whether a lesson was started, completed, or remains in progress. This table is the primary source for Hypothesis H1 (lesson completion rate) and contributes to H2 (7-day return).

`telemetry_events` provides the behavioral timeline. It records the sequence and timing of actions, and captures interactions that do not belong in a status row — such as checkpoint attempts, recommendation ratings, and SUS score submissions. This table is the primary source for Hypothesis H6 (first-session activation) and provides supplementary evidence across all six hypotheses.

Using both tables together provides a clear current state for each learner and a detailed event history for temporal analysis.

## Hypothesis-to-Data Mapping

| Hypothesis | Primary Data Source |
| ---- | ---- |
| H1 — Lesson completion | `lesson_progress` (started_at vs. completed_at) |
| H2 — 7-day return | `lesson_progress` (completion timestamps across calendar days) |
| H3 — Usability (SUS) | Post-session SUS survey (stored in pilot study dataset) |
| H4 — Unassisted task completion | Researcher observation records from pilot sessions |
| H5 — Recommendation relevance | `telemetry_events` (recommendation_rated event) and post-session feedback |
| H6 — First-session activation | `telemetry_events` combined with `onboarding_sessions` and `lesson_progress` |

## Access Boundary

All learner-owned data is scoped to the authenticated user through Supabase Auth and Row Level Security (RLS) policies. Each learner can only access records associated with their own user ID. Study-level analysis across participants was performed through direct database queries on the Supabase SQL editor during the pilot study observation window.
