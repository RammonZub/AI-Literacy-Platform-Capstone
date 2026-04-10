# Supabase — AI Literacy Platform

This folder contains the database schema used by the thesis artifact.

## Included Files

| File | Purpose |
|------|---------|
| `migrations/20260410000000_schema.sql` | Defines public tables, indexes, RLS policies, and the signup trigger |
| `seed.sql` | Empty (schema-only artifact) |
| `config.toml` | Supabase CLI project configuration |

## Public Tables

- **users** — user profiles linked to `auth.users`, including app metadata
- **lesson_progress** — per-lesson progress and XP records
- **onboarding_sessions** — onboarding responses, recommendation outputs, and session snapshots
- **certificates** — module completion certificates keyed by `id`
- **telemetry_events** — behavioral event records
