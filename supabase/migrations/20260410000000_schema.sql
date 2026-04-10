-- AI Literacy Platform — Database Schema
-- Tables: users, lesson_progress, onboarding_sessions, certificates, telemetry_events

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- users (linked to auth.users)
CREATE TABLE IF NOT EXISTS public.users (
  id              UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email           TEXT,
  full_name       TEXT,
  total_xp        INTEGER      NOT NULL DEFAULT 0,
  current_level   INTEGER      NOT NULL DEFAULT 1,
  current_streak  INTEGER      NOT NULL DEFAULT 0,
  longest_streak  INTEGER      NOT NULL DEFAULT 0,
  last_activity_date DATE,
  has_access      BOOLEAN      NOT NULL DEFAULT false,
  subscription_status TEXT,
  created_at      TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  metadata        JSONB        NOT NULL DEFAULT '{}'::jsonb
);

-- lesson_progress
CREATE TABLE IF NOT EXISTS public.lesson_progress (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID         NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  lesson_id    TEXT         NOT NULL,
  module_id    TEXT         NOT NULL,
  status       TEXT         NOT NULL CHECK (status IN ('unlocked', 'in_progress', 'completed')),
  xp_earned    INTEGER      NOT NULL DEFAULT 0,
  started_at   TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  UNIQUE(user_id, lesson_id)
);

CREATE INDEX IF NOT EXISTS idx_lesson_progress_user ON public.lesson_progress(user_id);

-- onboarding_sessions
CREATE TABLE IF NOT EXISTS public.onboarding_sessions (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id          UUID         REFERENCES public.users(id) ON DELETE CASCADE,
  responses        JSONB        NOT NULL,
  customer_profile TEXT,
  persona          TEXT,
  ai_experience    TEXT,
  recommended_path JSONB,
  path_length      INTEGER,
  completed_at     TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  session_snapshot JSONB
);

CREATE INDEX IF NOT EXISTS idx_onboarding_sessions_user ON public.onboarding_sessions(user_id);

-- certificates
CREATE TABLE IF NOT EXISTS public.certificates (
  id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id   UUID        NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  module_id TEXT        NOT NULL,
  issued_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, module_id)
);

-- telemetry_events
CREATE TABLE IF NOT EXISTS public.telemetry_events (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID        REFERENCES public.users(id) ON DELETE CASCADE,
  event_type TEXT        NOT NULL,
  payload    JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_telemetry_events_user ON public.telemetry_events(user_id);
CREATE INDEX IF NOT EXISTS idx_telemetry_events_type ON public.telemetry_events(event_type);

-- Trigger: create a profile row when a new auth user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.users (id, email, full_name, total_xp, current_level,
                            current_streak, longest_streak, has_access, subscription_status)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data ->> 'full_name',
          0, 1, 0, 0, FALSE, NULL)
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own row"   ON public.users FOR SELECT TO authenticated USING (auth.uid() = id);
CREATE POLICY "Users can update own row" ON public.users FOR UPDATE TO authenticated USING (auth.uid() = id);

ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own progress" ON public.lesson_progress
  FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

ALTER TABLE public.onboarding_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own onboarding" ON public.onboarding_sessions
  FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own certificates" ON public.certificates
  FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

ALTER TABLE public.telemetry_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own events" ON public.telemetry_events
  FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
