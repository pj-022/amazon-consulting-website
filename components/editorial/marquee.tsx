"use client";

import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
  reverse = false,
  speed = "normal",
  light = false,
}: {
  items: readonly string[];
  className?: string;
  reverse?: boolean;
  speed?: "slow" | "normal" | "fast";
  light?: boolean;
}) {
  const doubled = [...items, ...items];
  const duration =
    speed === "slow" ? "55s" : speed === "fast" ? "28s" : "40s";

  return (
    <div
      className={cn(
        "overflow-hidden border-y",
        light ? "border-primary-foreground/10" : "border-border",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max gap-12 py-5",
          reverse ? "marquee-track-reverse" : "marquee-track"
        )}
        style={{ animationDuration: duration }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={cn(
              "whitespace-nowrap font-serif text-2xl tracking-tight sm:text-3xl",
              light ? "text-primary-foreground/55" : "text-foreground/80"
            )}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
