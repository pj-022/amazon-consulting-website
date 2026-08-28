"use client";

import { cn } from "@/lib/utils";

const palette = [
  "text-foreground/80",
  "text-accent",
  "text-navy",
  "text-sage",
  "text-foreground/60",
  "text-accent/80",
  "text-navy/80",
  "text-sage/90",
];

export function Marquee({
  items,
  className,
  reverse = false,
  speed = "normal",
  light = false,
  colorful = false,
}: {
  items: readonly string[];
  className?: string;
  reverse?: boolean;
  speed?: "slow" | "normal" | "fast";
  light?: boolean;
  colorful?: boolean;
}) {
  const doubled = [...items, ...items];
  const duration =
    speed === "slow" ? "55s" : speed === "fast" ? "28s" : "40s";

  return (
    <div
      className={cn(
        "overflow-hidden border-y",
        light ? "border-primary-foreground/10 bg-ink" : "border-border bg-cream/30",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max items-center gap-12 py-5",
          reverse ? "marquee-track-reverse" : "marquee-track"
        )}
        style={{ animationDuration: duration }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={cn(
              "whitespace-nowrap font-display text-2xl font-medium tracking-tight sm:text-3xl",
              colorful
                ? palette[i % palette.length]
                : light
                  ? "text-primary-foreground/55"
                  : "text-foreground/75"
            )}
          >
            {item}
            <span className="mx-6 text-accent/40">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
