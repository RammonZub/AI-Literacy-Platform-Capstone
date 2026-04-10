/**
 * Profile Client Component
 *
 * DESIGN: Clean, minimal profile matching reference images exactly
 */

"use client";

import type { User } from "@supabase/supabase-js";
import {
  Award,
  ChevronRight,
  Edit2,
  Flame,
  Lock,
  LogOut,
  Mail,
  Plus,
  Star,
  X,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState, useTransition } from "react";
import PlatformPageShell from "@/components/layout/PlatformPageShell";
import { FeedbackProfileSection } from "@/components/platform/feedback";
import Button from "@/components/ui/Button";
import { useUser } from "@/lib/hooks/useUser";
import { cn } from "@/lib/utils";
import { updateProfileAvatar, updateProfileName } from "./actions";

interface CourseCertificateProgress {
  moduleId: string;
  moduleTitle: string;
  totalLessons: number;
  completedLessons: number;
  percentComplete: number;
  remainingLessons: number;
  isUnlocked: boolean;
  certificateId: string | null;
  completedAt: string | null;
  xpEarned: number;
}

interface RecommendationFeedback {
  submitted_at: string;
  recommended_module_id: string;
  q_recommendation_fit: number;
  q_first_lesson: number;
  q_ease_of_use: number;
  q_microlearning_fit: number;
  q_overall_satisfaction: number;
}

interface ProfileClientProps {
  user: User;
  profile: {
    id: string;
    full_name: string | null;
    created_at: string | null;
    avatar_url?: string | null;
    email: string | null;
    current_level: number | null;
    current_streak: number | null;
    longest_streak: number | null;
    total_xp: number | null;
    last_activity_date: string | null;
    updated_at?: string | null;
    metadata?: Record<string, unknown> | null;
    certificates?: unknown;
  };
  stats: {
    xp: number;
    level: number;
    currentStreak: number;
    longestStreak: number;
    lessonsCompleted: number;
    modulesStarted: number;
    modulesCompleted: number;
  };
  courseCertificates: CourseCertificateProgress[];
  /** First module recommended by the personalization algorithm */
  recommendedModuleId?: string | null;
  /** Existing feedback from users.metadata, if already submitted */
  existingFeedback?: RecommendationFeedback | null;
}

export default function ProfileClient({
  user,
  profile,
  stats,
  courseCertificates,
  recommendedModuleId,
  existingFeedback,
}: ProfileClientProps) {
  const router = useRouter();
  const {
    refreshProfile,
    updateProfileOptimistic,
    profile: clientProfile,
    signOut,
  } = useUser();
  const displayProfile = clientProfile || profile;

  const metadataName = useMemo(() => {
    const metadata = user.user_metadata as Record<string, unknown> | undefined;
    const fullName = metadata?.full_name;
    const genericName = metadata?.name;

    if (typeof fullName === "string" && fullName.trim().length > 0) {
      return fullName.trim();
    }

    if (typeof genericName === "string" && genericName.trim().length > 0) {
      return genericName.trim();
    }

    return null;
  }, [user.user_metadata]);

  const resolveDisplayName = (name: string | null | undefined) => {
    if (typeof name === "string" && name.trim().length > 0) return name.trim();
    if (metadataName) return metadataName;
    return user.email || "User";
  };

  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
  const [isCertificationsModalOpen, setIsCertificationsModalOpen] =
    useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoadingPortal, setIsLoadingPortal] = useState(false);
  const [nameInput, setNameInput] = useState(() =>
    resolveDisplayName(profile.full_name),
  );
  const [, startTransition] = useTransition();

  const displayName = resolveDisplayName(displayProfile.full_name);

  const unlockedCertificates = useMemo(
    () =>
      courseCertificates.filter((certificate) => certificate.isUnlocked).length,
    [courseCertificates],
  );

  const getInitials = (name: string | null, email: string | null) => {
    const source = resolveDisplayName(name || email);
    const words = source
      .split(/[\s._@-]+/)
      .map((word) => word.trim())
      .filter(Boolean);

    if (words.length > 1) {
      return `${words[0][0]}${words[1][0]}`.toUpperCase();
    }

    return source.slice(0, 2).toUpperCase();
  };

  const handleSignOut = async () => {
    await signOut();
  };

  const handleSubscriptionClick = async () => {
    setIsLoadingPortal(true);

    try {
      const response = await fetch("/api/stripe/customer-portal", {
        method: "POST",
      });

      const data = await response.json();

      if (response.ok) {
        if (data.checkoutUrl) {
          router.push(data.checkoutUrl);
        } else if (data.url) {
          window.location.href = data.url;
        }
      } else {
        console.error("Portal error:", data.error);
      }
    } catch (error) {
      console.error("Failed to open portal:", error);
    } finally {
      setIsLoadingPortal(false);
    }
  };

  // Images 17-34
  const profileImages = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => {
        const fileNumber = index + 17;
        return {
          id: index + 1,
          label: `Profile ${index + 1}`,
          src: `/images/profile/image ${fileNumber}.png`,
        };
      }),
    [],
  );

  const handleAvatarSelect = async (src: string) => {
    setIsSaving(true);
    const timestamp = new Date().toISOString();
    updateProfileOptimistic({
      avatar_url: src,
      updated_at: timestamp,
    });
    setIsAvatarModalOpen(false);

    try {
      const result = await updateProfileAvatar(src);
      if (result.error) {
        await refreshProfile();
      } else {
        router.refresh();
      }
    } catch {
      await refreshProfile();
    } finally {
      setIsSaving(false);
    }
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      const formData = new FormData();
      formData.append("displayName", nameInput);
      const result = await updateProfileName(formData);
      if (result.error) return;
      setIsEditingName(false);
      await refreshProfile();
    });
  };

  return (
    <PlatformPageShell railClassName="px-6 py-8 space-y-8">
      {/* HEADER: Avatar + Name */}
      <div className="flex flex-col items-center gap-4 text-center">
        {/* Avatar */}
        <div className="relative group">
          <button
            onClick={() => setIsAvatarModalOpen(true)}
            className="relative w-24 h-24 rounded-full bg-muted flex items-center justify-center overflow-hidden ring-4 ring-background shadow-lg transition-transform active:scale-95"
          >
            {displayProfile.avatar_url ? (
              <Image
                src={displayProfile.avatar_url}
                alt="Profile"
                fill
                sizes="96px"
                className="object-cover"
              />
            ) : (
              <span className="text-3xl font-bold text-muted-foreground">
                {getInitials(displayProfile.full_name, user.email || null)}
              </span>
            )}

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Edit2 className="w-6 h-6 text-white" />
            </div>
          </button>

          {/* Edit Button Badge */}
          <button
            onClick={() => setIsAvatarModalOpen(true)}
            className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md border-2 border-background hover:scale-110 transition-transform"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Name */}
        <div className="min-w-[200px]">
          {isEditingName ? (
            <form
              onSubmit={handleNameSubmit}
              className="flex flex-col items-center gap-2"
            >
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                className="text-2xl font-bold bg-transparent border-b-2 border-primary focus:outline-none text-foreground text-center w-full"
                autoFocus
              />
              <button
                type="submit"
                className="text-xs font-medium text-primary hover:text-primary/80"
              >
                Save Changes
              </button>
            </form>
          ) : (
            <button
              onClick={() => {
                setNameInput(displayName);
                setIsEditingName(true);
              }}
              className="group flex items-center justify-center gap-2 mx-auto"
            >
              <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                {displayName}
              </h2>
              <Edit2 className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          )}
          <p className="text-sm text-muted-foreground mt-1">{user.email}</p>
        </div>
      </div>

      {/* STATS CARDS - New Blue Style */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-card rounded-2xl p-5 border border-border shadow-sm flex flex-col items-center text-center gap-2 hover:border-primary/30 transition-colors">
          <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mb-1">
            <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
          </div>
          <div className="text-3xl font-extrabold text-foreground">
            {stats.currentStreak}
          </div>
          <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
            Day Streak
          </div>
        </div>

        <div className="bg-card rounded-2xl p-5 border border-border shadow-sm flex flex-col items-center text-center gap-2 hover:border-primary/30 transition-colors">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-1">
            <Zap className="w-5 h-5 text-blue-500 fill-blue-500" />
          </div>
          <div className="text-3xl font-extrabold text-foreground">
            {stats.xp}
          </div>
          <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
            Total XP
          </div>
        </div>
      </div>

      {/* ACCOUNT SECTION */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest px-1">
          Settings
        </h3>

        <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden divide-y divide-border/50">
          {/* Subscription */}
          <button
            onClick={handleSubscriptionClick}
            disabled={isLoadingPortal}
            className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-all active:bg-muted disabled:opacity-50"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Star className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-foreground">
                  Subscription
                </div>
                <div className="text-xs text-muted-foreground">
                  Manage your plan
                </div>
              </div>
            </div>
            <ChevronRight
              className={`w-5 h-5 text-muted-foreground ${isLoadingPortal ? "animate-spin" : ""}`}
            />
          </button>

          {/* Email Notifications */}
          <button
            onClick={() => {}}
            className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-all active:bg-muted"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-foreground">
                  Email Notifications
                </div>
                <div className="text-xs text-muted-foreground">
                  Weekly digest, updates
                </div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>

          {/* Certifications */}
          <button
            onClick={() => setIsCertificationsModalOpen(true)}
            className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-all active:bg-muted"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-foreground">
                  Certifications
                </div>
                <div className="text-xs text-muted-foreground">
                  {unlockedCertificates}/{courseCertificates.length} unlocked
                </div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Feedback Section */}
      <FeedbackProfileSection
        className="mt-6"
        recommendedModuleId={recommendedModuleId}
        existingFeedback={existingFeedback}
      />

      {/* SIGN OUT BUTTON */}
      <div className="pt-4">
        <Button
          onClick={handleSignOut}
          variant="outline"
          className="w-full h-12 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 hover:border-red-300"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>

      {/* AVATAR MODAL */}
      {isAvatarModalOpen && (
        <>
          <button
            onClick={() => setIsAvatarModalOpen(false)}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm animate-in fade-in duration-200"
            aria-label="Close"
          />

          <div className="fixed bottom-0 left-0 right-0 z-50 bg-card rounded-t-3xl shadow-2xl animate-in slide-in-from-bottom duration-300">
            <div className="p-6 pb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Choose Avatar
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Select a new profile picture
                  </p>
                </div>
                <button
                  onClick={() => setIsAvatarModalOpen(false)}
                  className="w-9 h-9 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                >
                  <X
                    className="w-5 h-5 text-muted-foreground"
                    strokeWidth={2}
                  />
                </button>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 max-h-[55vh] overflow-y-auto pt-2 pb-4 px-1">
                {profileImages.map((image) => (
                  <button
                    key={image.id}
                    onClick={() => handleAvatarSelect(image.src)}
                    disabled={isSaving}
                    className="group relative aspect-square"
                  >
                    <div
                      className={cn(
                        "w-full h-full rounded-full overflow-hidden transition-all border-2",
                        displayProfile.avatar_url === image.src
                          ? "border-primary ring-2 ring-primary/20"
                          : "border-transparent group-hover:border-muted-foreground/30",
                      )}
                    >
                      <Image
                        src={image.src}
                        alt={image.label}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* CERTIFICATIONS MODAL */}
      {isCertificationsModalOpen && (
        <>
          <button
            onClick={() => setIsCertificationsModalOpen(false)}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm animate-in fade-in duration-200"
            aria-label="Close certifications"
          />

          <div className="fixed bottom-0 left-0 right-0 z-50 bg-card rounded-t-3xl shadow-2xl animate-in slide-in-from-bottom duration-300">
            <div className="p-6 pb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Course Certifications
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {unlockedCertificates}/{courseCertificates.length} unlocked
                  </p>
                </div>
                <button
                  onClick={() => setIsCertificationsModalOpen(false)}
                  className="w-9 h-9 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                >
                  <X
                    className="w-5 h-5 text-muted-foreground"
                    strokeWidth={2}
                  />
                </button>
              </div>

              <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
                {courseCertificates.map((certificate) => (
                  <div
                    key={certificate.moduleId}
                    className="relative rounded-xl border border-border bg-background overflow-hidden"
                  >
                    <div className="p-4 space-y-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                            Certificate
                          </p>
                          <h4 className="text-base font-bold text-foreground truncate">
                            {certificate.moduleTitle}
                          </h4>
                        </div>
                        <span
                          className={cn(
                            "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide",
                            certificate.isUnlocked
                              ? "border-green-200 bg-green-50 text-green-700"
                              : "border-gray-200 bg-gray-100 text-gray-600",
                          )}
                        >
                          {certificate.isUnlocked ? "Unlocked" : "Locked"}
                        </span>
                      </div>

                      <div>
                        <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-muted-foreground">
                          <span>
                            {certificate.completedLessons}/
                            {certificate.totalLessons} lessons
                          </span>
                          <span>{certificate.percentComplete}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full bg-primary transition-all duration-500"
                            style={{ width: `${certificate.percentComplete}%` }}
                          />
                        </div>
                      </div>

                      {certificate.isUnlocked && certificate.completedAt ? (
                        <p className="text-xs text-muted-foreground">
                          Completed{" "}
                          {new Date(certificate.completedAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            },
                          )}
                        </p>
                      ) : (
                        <p className="text-xs text-muted-foreground">
                          {certificate.remainingLessons} lessons left to unlock
                        </p>
                      )}
                    </div>

                    {!certificate.isUnlocked && (
                      <div className="absolute inset-0 bg-background/70 backdrop-blur-[1px] flex items-center justify-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm">
                          <Lock className="w-3.5 h-3.5" />
                          <span>{certificate.percentComplete}% complete</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </PlatformPageShell>
  );
}
