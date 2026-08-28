"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const keywordColors = [
  "border-accent/30 bg-accent/8 text-accent",
  "border-navy/25 bg-navy/8 text-navy",
  "border-sage/30 bg-sage/10 text-sage",
  "border-terracotta/25 bg-blush/50 text-foreground/80",
  "border-foreground/15 bg-background text-muted-foreground",
  "border-accent/20 bg-accent/5 text-accent",
];

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
              : keywordColors[index % keywordColors.length]
          )}
          initial={reduceMotion ? false : { opacity: 0, y: 16, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.04, rotate: 0 }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
