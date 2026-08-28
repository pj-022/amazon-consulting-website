"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { fadeUp, transition } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: Variants;
  amount?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = fadeUp,
  amount = 0.2,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variant}
      transition={{ ...transition, delay }}
    >
      {children}
    </motion.div>
  );
}
