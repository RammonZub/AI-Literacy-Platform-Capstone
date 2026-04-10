/**
 * Stat Card Component
 *
 * Displays a statistic with label in a clean card format.
 */

import type React from "react";
import Card from "./Card";

interface StatCardProps {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export default function StatCard({ value, label, icon, trend, className = "" }: StatCardProps) {
  return (
    <Card variant="default" padding="lg" className={className}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="text-3xl font-bold text-foreground mb-1">{value}</div>
          <div className="text-xs text-muted-foreground">{label}</div>
          {trend && (
            <div
              className={`text-xs font-medium mt-2 ${trend.isPositive ? "text-success" : "text-error"}`}
            >
              {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%
            </div>
          )}
        </div>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </div>
    </Card>
  );
}
