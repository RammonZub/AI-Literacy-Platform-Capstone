# Pilot Study Data

Supporting data snapshot for the 12-participant pilot study conducted from 2026-03-10 to 2026-03-17.

## Files

| File | Records | Description |
|------|---------|-------------|
| `participants.json` | 12 | Participant profiles, onboarding results, and personalization outputs |
| `lesson_progress.json` | 43 | Individual lesson records (40 completed, 3 in-progress) |
| `telemetry_events.json` | 285 | Timestamped behavioral events across 11 event types |

## Event Types (telemetry_events.json)

| Event | Count | Description |
|-------|-------|-------------|
| `lesson_started` | 43 | Participant opened a lesson |
| `lesson_completed` | 40 | Participant finished a lesson |
| `checkpoint_attempted` | 40 | End-of-lesson checkpoint passed |
| `xp_awarded` | 40 | XP credited after lesson completion |
| `streak_updated` | 31 | Daily streak incremented |
| `view_progress` | 31 | Dashboard progress page viewed |
| `recommendation_viewed` | 22 | Personalized path recommendation seen |
| `onboarding_completed` | 12 | Onboarding questionnaire submitted |
| `recommendation_rated` | 12 | Relevance rating (1-10) submitted |
| `sus_submitted` | 12 | System Usability Scale score submitted |
| `pilot_support_requested` | 2 | Participant requested researcher support |
