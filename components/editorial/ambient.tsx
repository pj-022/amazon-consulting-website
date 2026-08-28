"use client";

import { motion, useReducedMotion } from "framer-motion";

const words = ["ROAS", "1P", "SP", "SB", "SD", "VC"];

export function AmbientTypography() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {words.map((word, i) => (
        <motion.span
          key={word}
          className="font-display absolute select-none text-[clamp(3rem,8vw,7rem)] font-medium uppercase tracking-tighter text-foreground/[0.04]"
          style={{
            left: `${8 + i * 14}%`,
            top: `${12 + (i % 3) * 22}%`,
          }}
          animate={{
            y: [0, -12, 0],
            rotate: [i % 2 === 0 ? -2 : 2, i % 2 === 0 ? 1 : -1, i % 2 === 0 ? -2 : 2],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

export function ColorOrbs() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <>
        <div className="color-orb color-orb-terracotta absolute -right-20 top-20 h-72 w-72 opacity-40" />
        <div className="color-orb color-orb-navy absolute -left-16 bottom-32 h-56 w-56 opacity-30" />
      </>
    );
  }

  return (
    <>
      <motion.div
        className="color-orb color-orb-terracotta absolute -right-20 top-20 h-72 w-72"
        animate={{ scale: [1, 1.1, 1], x: [0, 12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="color-orb color-orb-navy absolute -left-16 bottom-32 h-56 w-56"
        animate={{ scale: [1, 1.15, 1], y: [0, -16, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="color-orb color-orb-sage absolute right-1/4 bottom-16 h-40 w-40 opacity-60"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}
