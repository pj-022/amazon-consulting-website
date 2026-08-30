"use client";

import { brandThemes, heroMetrics } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export function MetricsStrip() {
  return (
    <Stagger className="grid grid-cols-2 gap-5 lg:grid-cols-4">
      {heroMetrics.map((metric) => {
        const theme = brandThemes[metric.theme];
        return (
          <StaggerItem key={metric.label}>
            <div
              className={cn(
                "metric-card surface-card-interactive border-l-4 p-6",
                theme.border,
                theme.surface,
                theme.surfaceBorder
              )}
            >
              <span
                className={cn(
                  "mb-3 inline-block h-1.5 w-8 rounded-full",
                  theme.dot
                )}
              />
              <p
                className={cn(
                  "text-3xl font-semibold tabular-nums sm:text-4xl",
                  theme.value
                )}
              >
                <AnimatedCounter value={metric.value} startOnMount />
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {metric.label}
              </p>
            </div>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
