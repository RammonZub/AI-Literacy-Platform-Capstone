/**
 * Weekly Calendar Component
 *
 * PURPOSE: Display a 7-day week view with the current day highlighted
 *
 * CONTEXT: Shows the days of the week with the current day highlighted
 * using iOS blue color for visual prominence.
 *
 * KEY RESPONSIBILITIES:
 * - Display welcome message encouraging streak start
 * - Display 7 days of the current week
 * - Highlight today's date with blue background
 * - Minimalist design with thin borders
 *
 * IMPLEMENTATION NOTES:
 * - Welcome message: "Start your streak by completing a lesson!"
 * - Uses single-letter day abbreviations (M, T, W, T, F, S, S)
 * - Today gets primary blue background
 * - Other days use transparent/white background
 * - Clean flat design without heavy block shadows
 */

"use client";

import { Flame } from "lucide-react";
import React from "react";

/**
 * Week day interface
 */
interface WeekDay {
  /** Single letter day abbreviation */
  day: string;
  /** Day of month number */
  date: number;
  /** Whether this is today */
  isToday: boolean;
}

/**
 * Get current week days
 *
 * @returns Array of 7 days starting from Sunday
 */
function getCurrentWeek(): WeekDay[] {
  const today = new Date();
  const currentDay = today.getDay();
  const week: WeekDay[] = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - currentDay + i);
    week.push({
      day: date.toLocaleDateString("en", { weekday: "short" }).charAt(0),
      date: date.getDate(),
      isToday: date.toDateString() === today.toDateString(),
    });
  }

  return week;
}

/**
 * WeeklyCalendar Component
 *
 * @returns 7-day week view with today highlighted
 */
interface WeeklyCalendarProps {
  streak?: number;
  /** ISO date string of last activity (YYYY-MM-DD) */
  lastActivityDate?: string | null;
}

export default function WeeklyCalendar({ streak = 0, lastActivityDate }: WeeklyCalendarProps) {
  const weekDays = getCurrentWeek();

  // Check if user completed a lesson today
  const today = new Date().toISOString().split("T")[0];
  const completedToday = lastActivityDate === today;

  // Determine the appropriate streak message
  const streakMessage = (() => {
    if (completedToday) {
      // User already completed a lesson today
      return streak <= 1
        ? "Great job today! 🔥 Complete another lesson tomorrow."
        : `Awesome! ${streak}-day streak alive! Come back tomorrow.`;
    }

    // User hasn't completed a lesson today yet
    if (streak <= 0) {
      return "Start your streak by completing a lesson today!";
    }

    return streak === 1
      ? "You're on a 1-day streak. Keep it alive today!"
      : `You're on a ${streak}-day streak. Keep it going today!`;
  })();

  return (
    <div className="max-w-md mx-auto">
      {/* Welcome Message - Start Your Streak */}
      <div
        className="
          flex
          items-center
          justify-center
          gap-2
          mb-4
          px-4
          py-3
          bg-white
          rounded-lg
          border
          border-border
          shadow-sm
        "
      >
        <Flame className="w-4 h-4 text-orange-500" strokeWidth={2.5} fill="currentColor" />
        <p className="text-sm font-medium text-foreground">{streakMessage}</p>
      </div>

      {/* Week Days Calendar */}
      <div className="flex justify-between items-center gap-1">
        {weekDays.map((day, index) => (
          <div
            key={index}
            className={`
              flex flex-col items-center justify-center py-2 px-1 rounded-lg cursor-pointer transition-all duration-200 border
              ${
                day.isToday
                  ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                  : "bg-white border-transparent hover:border-border hover:bg-gray-50 text-foreground"
              }
            `}
            style={{
              width: "44px",
            }}
          >
            {/* Day Letter */}
            <span
              className={`text-[10px] font-medium mb-0.5 uppercase tracking-wide ${day.isToday ? "text-blue-100" : "text-muted-foreground"}`}
            >
              {day.day}
            </span>
            {/* Date Number */}
            <span
              className={`text-lg font-semibold ${day.isToday ? "text-white" : "text-foreground"}`}
            >
              {day.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
