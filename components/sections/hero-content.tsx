"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { fadeUp, staggerContainer, transition } from "@/lib/motion";
import { capabilities } from "@/lib/site-data";

const item = fadeUp;

export function HeroContent() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <HeroContentStatic />;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.p className="eyebrow" variants={item} transition={transition}>
        Amazon Vendor Central Advisory
      </motion.p>
      <motion.h1
        className="mt-5 max-w-2xl text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
        variants={item}
        transition={transition}
      >
        Where is your advertising program{" "}
        <span className="accent-highlight">leaving revenue</span> on the table?
      </motion.h1>
      <motion.p
        className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
        variants={item}
        transition={transition}
      >
        VendorEdge helps 1P brands improve ROAS, reduce wasted spend, and build
        advertising systems leadership can trust — across Sponsored Products,
        Brands, and Display.
      </motion.p>
      <motion.div
        className="mt-8 flex flex-col gap-3 sm:flex-row"
        variants={item}
        transition={transition}
      >
        <Link
          href="/contact"
          className={buttonVariants({
            size: "lg",
            className: "btn-premium h-11 px-6",
          })}
        >
          Book a consultation
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-0.5" />
        </Link>
        <Link
          href="/case-studies"
          className={buttonVariants({
            size: "lg",
            variant: "outline",
            className: "h-11 px-6 transition-all hover:-translate-y-px hover:shadow-sm",
          })}
        >
          View client outcomes
        </Link>
      </motion.div>
      <motion.div className="mt-10 flex flex-wrap gap-2" variants={item} transition={transition}>
        {capabilities.slice(0, 4).map((cap, index) => (
          <motion.span
            key={cap}
            className="tag-pill"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.55 + index * 0.06 }}
          >
            {cap}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

function HeroContentStatic() {
  return (
    <>
      <p className="eyebrow">Amazon Vendor Central Advisory</p>
      <h1 className="mt-5 max-w-2xl text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
        Where is your advertising program{" "}
        <span className="accent-highlight">leaving revenue</span> on the table?
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
        VendorEdge helps 1P brands improve ROAS, reduce wasted spend, and build
        advertising systems leadership can trust — across Sponsored Products,
        Brands, and Display.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/contact"
          className={buttonVariants({ size: "lg", className: "btn-premium h-11 px-6" })}
        >
          Book a consultation
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <Link
          href="/case-studies"
          className={buttonVariants({
            size: "lg",
            variant: "outline",
            className: "h-11 px-6",
          })}
        >
          View client outcomes
        </Link>
      </div>
      <div className="mt-10 flex flex-wrap gap-2">
        {capabilities.slice(0, 4).map((cap) => (
          <span key={cap} className="tag-pill">
            {cap}
          </span>
        ))}
      </div>
    </>
  );
}
