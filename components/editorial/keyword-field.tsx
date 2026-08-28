"use client";

import { motion, useReducedMotion } from "framer-motion";
import { transition } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function KeywordField({
  keywords,
  className,
  light = false,
}: {
  keywords: readonly string[];
  className?: string;
  light?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={cn("relative flex flex-wrap gap-3 sm:gap-4", className)}>
      {keywords.map((word, index) => (
        <motion.span
          key={word}
          className={cn(
            "rounded-sm border px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] sm:text-sm",
            light
              ? "border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground/70"
              : "border-border bg-background text-muted-foreground"
          )}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ ...transition, delay: index * 0.06 }}
          style={
            reduceMotion
              ? undefined
              : {
                  transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)`,
                }
          }
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
