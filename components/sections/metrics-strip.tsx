"use client";

import { brandThemes, heroMetrics } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export function MetricsStrip() {
  return (
    <Stagger className="grid grid-cols-2 gap-6 lg:grid-cols-4">
      {heroMetrics.map((metric) => {
        const theme = brandThemes[metric.theme];
        return (
          <StaggerItem key={metric.label}>
            <div
              className={cn(
                "surface-card-interactive border-l-4 p-6",
                theme.border
              )}
            >
              <p className="text-3xl font-semibold tabular-nums text-foreground sm:text-4xl">
                <AnimatedCounter value={metric.value} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
            </div>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
