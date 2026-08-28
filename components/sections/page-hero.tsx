"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeUp, transition } from "@/lib/motion";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
        {children}
      </>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.p className="eyebrow" variants={fadeUp} transition={transition}>
        {eyebrow}
      </motion.p>
      <motion.h1
        className="mt-5 max-w-3xl text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl"
        variants={fadeUp}
        transition={transition}
      >
        {title}
      </motion.h1>
      <motion.p
        className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        variants={fadeUp}
        transition={transition}
      >
        {description}
      </motion.p>
      {children ? (
        <motion.div variants={fadeUp} transition={transition}>
          {children}
        </motion.div>
      ) : null}
    </motion.div>
  );
}
