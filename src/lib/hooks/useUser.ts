/**
 * User Hook
 *
 * Manages user authentication state and profile data.
 * Provides user object, profile, loading state, and sign out function.
 */

"use client";

import type { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Database } from "@/types/database.types";

type UsersRow = Database["public"]["Tables"]["users"]["Row"];

function mapUserProfile(user: User, row: UsersRow | null): Profile | null {
  if (!row) return null;
  const metadata = (row.metadata as Record<string, unknown> | null) ?? null;
  const metadataAvatar =
    metadata && typeof metadata.avatar_url === "string" ? metadata.avatar_url : null;
  return {
    id: row.id,
    email: row.email,
    full_name: row.full_name,
    avatar_url:
      metadataAvatar ??
      (typeof user.user_metadata?.avatar_url === "string" ? user.user_metadata.avatar_url : null),
    total_xp: row.total_xp,
    current_level: row.current_level,
    current_streak: row.current_streak,
    longest_streak: row.longest_streak,
    last_activity_date: row.last_activity_date,
    created_at: row.created_at,
    has_access: row.has_access,
    subscription_status: row.subscription_status,
  };
}

export interface Profile {
  id: string;
  email: string | null;
  full_name: string | null;
  avatar_url: string | null;
  total_xp: number | null;
  current_level: number | null;
  current_streak: number | null;
  longest_streak: number | null;
  last_activity_date: string | null;
  created_at: string | null;
  updated_at?: string | null;
  has_access?: boolean;
  subscription_status?: string | null;
}

export interface UseUserReturn {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  error: string | null;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
  updateProfileOptimistic: (updates: Partial<Profile>) => void;
}

// Global state to prevent duplicate fetches across components
const globalUserState = {
  user: null as User | null,
  profile: null as Profile | null,
  isSigningOut: false,
  listeners: new Set<(user: User | null, profile: Profile | null) => void>(),
};
const AUTH_INIT_TIMEOUT_MS = 5000;

export function useUser(): UseUserReturn {
  const [localUser, setLocalUser] = useState<User | null>(globalUserState.user);
  const [localProfile, setLocalProfile] = useState<Profile | null>(globalUserState.profile);
  const [loading, setLoading] = useState(!globalUserState.user);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const initializedRef = useRef(false);

  // Sign up to global state changes
  useEffect(() => {
    const listener = (user: User | null, profile: Profile | null) => {
      setLocalUser(user);
      setLocalProfile(profile);
      setLoading(false);
    };

    globalUserState.listeners.add(listener);

    // Set initial state from global (if already populated)
    if (globalUserState.user) {
      setLocalUser(globalUserState.user);
      setLocalProfile(globalUserState.profile);
      setLoading(false);
    }

    return () => {
      globalUserState.listeners.delete(listener);
    };
  }, []); // Empty deps - only run once on mount

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    const supabase = createClient();
    let isMounted = true;
    let initSettled = false;

    const settleInit = () => {
      if (!isMounted || initSettled) return;
      initSettled = true;
      setLoading(false);
    };

    const fetchProfile = async (user: User) => {
      try {
        const { data, error: profileError } = await supabase
          .from("users")
          .select("*")
          .eq("id", user.id)
          .single();

        if (profileError) {
          if (profileError.code === "PGRST116") {
            const { data: newProfile, error: insertError } = await supabase
              .from("users")
              .insert({
                id: user.id,
                email: user.email,
                full_name: user.user_metadata?.full_name || user.email,
                total_xp: 0,
                current_level: 1,
                current_streak: 0,
                longest_streak: 0,
              })
              .select()
              .single();

            if (insertError) throw insertError;
            return mapUserProfile(user, newProfile);
          }
          throw profileError;
        }
        return mapUserProfile(user, data);
      } catch (err: unknown) {
        console.error("Error fetching user:", err);
        setError(err instanceof Error ? err.message : "Failed to fetch user");
        return null;
      }
    };

    const fetchAuthFromServer = async (): Promise<{
      user: User;
      profile: Profile | null;
    } | null> => {
      if (globalUserState.isSigningOut) return null;

      try {
        const response = await fetch("/api/auth/me", {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) return null;

        const payload = await response.json();
        if (!payload?.user) return null;

        return {
          user: payload.user as User,
          profile: (payload.profile as Profile | null) ?? null,
        };
      } catch {
        return null;
      }
    };

    const initTimeoutId = window.setTimeout(() => {
      console.warn("[useUser] Auth initialization timeout reached, forcing loading=false");
      settleInit();
    }, AUTH_INIT_TIMEOUT_MS);

    // Initialize auth state
    (async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!isMounted) return;

        if (session?.user) {
          const profile = await fetchProfile(session.user);
          globalUserState.user = session.user;
          globalUserState.profile = profile;
          globalUserState.listeners.forEach((l) => l(session.user, profile));
        } else {
          // Fallback: resolve auth/profile server-side when browser session storage is stale
          const serverAuth = await fetchAuthFromServer();
          if (serverAuth?.user) {
            globalUserState.user = serverAuth.user;
            globalUserState.profile = serverAuth.profile;
            globalUserState.listeners.forEach((l) => l(serverAuth.user, serverAuth.profile));
          }
        }
      } catch (err: unknown) {
        if (isMounted) {
          console.error("[useUser] getSession failed:", err);
          setError(err instanceof Error ? err.message : "Failed to initialize user session");
        }
      } finally {
        window.clearTimeout(initTimeoutId);
        settleInit();
      }
    })();

    // Listen for auth changes (but don't refetch profile on TOKEN_REFRESHED)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      try {
        // Skip TOKEN_REFRESHED events to prevent unnecessary fetches
        if (event === "TOKEN_REFRESHED") return;

        if (event === "SIGNED_OUT") {
          globalUserState.user = null;
          globalUserState.profile = null;
          globalUserState.listeners.forEach((l) => l(null, null));
          setLoading(false);
          return;
        }

        // Handle INITIAL_SESSION and other sign-in events
        if (session?.user) {
          const profile = await fetchProfile(session.user);
          globalUserState.user = session.user;
          globalUserState.profile = profile;
          globalUserState.listeners.forEach((l) => l(session.user, profile));
        } else {
          const serverAuth = await fetchAuthFromServer();
          if (serverAuth?.user) {
            globalUserState.user = serverAuth.user;
            globalUserState.profile = serverAuth.profile;
            globalUserState.listeners.forEach((l) => l(serverAuth.user, serverAuth.profile));
          } else {
            globalUserState.user = null;
            globalUserState.profile = null;
            globalUserState.listeners.forEach((l) => l(null, null));
          }
        }
      } catch (err: unknown) {
        console.error("[useUser] onAuthStateChange failed:", err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    });

    return () => {
      isMounted = false;
      window.clearTimeout(initTimeoutId);
      subscription.unsubscribe();
    };
  }, []);

  const signOut = useCallback(async () => {
    globalUserState.isSigningOut = true;

    try {
      await fetch("/api/auth/signout", {
        method: "POST",
        credentials: "same-origin",
        cache: "no-store",
      }).catch(() => null);

      const supabase = createClient();
      await supabase.auth.signOut({ scope: "global" });
      globalUserState.user = null;
      globalUserState.profile = null;
      globalUserState.listeners.forEach((l) => l(null, null));

      // Full navigation so middleware/layout see cleared cookies (client router alone can leave stale session)
      if (typeof window !== "undefined") {
        window.location.assign("/login");
      } else {
        router.replace("/login");
        router.refresh();
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to sign out");
      if (typeof window !== "undefined") {
        window.location.assign("/login");
      }
    } finally {
      setTimeout(() => {
        globalUserState.isSigningOut = false;
      }, 1000);
    }
  }, [router]);

  const refreshProfile = useCallback(async () => {
    if (globalUserState.user) {
      const supabase = createClient();
      const { data } = await supabase
        .from("users")
        .select("*")
        .eq("id", globalUserState.user.id)
        .single();
      const mapped = mapUserProfile(globalUserState.user, data);
      globalUserState.profile = mapped;
      globalUserState.listeners.forEach((l) => l(globalUserState.user, mapped));
      setLocalProfile(mapped);
    }
  }, []);

  const updateProfileOptimistic = useCallback((updates: Partial<Profile>) => {
    if (!globalUserState.profile) return;

    const updatedProfile: Profile = {
      ...globalUserState.profile,
      ...updates,
    };

    globalUserState.profile = updatedProfile;
    globalUserState.listeners.forEach((l) => l(globalUserState.user, updatedProfile));
    setLocalProfile(updatedProfile);
  }, []);

  return {
    user: localUser,
    profile: localProfile,
    loading,
    error,
    signOut,
    refreshProfile,
    updateProfileOptimistic,
  };
}
