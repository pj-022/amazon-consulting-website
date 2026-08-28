"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LinkRoll } from "@/components/editorial/link-roll";
import { Container } from "@/components/sections/container";
import { company } from "@/lib/site-data";
import { transition, staggerContainer, fadeUp } from "@/lib/motion";

const item = fadeUp;

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <section className="grain section-warm relative min-h-[90vh] overflow-hidden border-b border-border">
        <Container className="flex min-h-[90vh] flex-col justify-end pb-20 pt-32 lg:pb-28">
          <p className="editorial-label">Amazon Vendor Central Advisory</p>
          <h1 className="display-xl mt-8 max-w-5xl text-foreground">
            Advertising advisory for brands that treat Amazon as a{" "}
            <em className="text-accent not-italic">core channel</em>
          </h1>
          <p className="body-editorial mt-10 max-w-xl">
            {company.tagline}. We help 1P teams improve ROAS, cut waste, and
            build programs leadership can trust.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <LinkRoll href="/contact">Book a consultation</LinkRoll>
            <LinkRoll href="/case-studies">View client outcomes</LinkRoll>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="grain section-warm relative min-h-[90vh] overflow-hidden border-b border-border">
      <Container className="relative flex min-h-[90vh] flex-col justify-end pb-20 pt-32 lg:pb-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10"
        >
          <motion.p className="editorial-label" variants={item} transition={transition}>
            Amazon Vendor Central Advisory
          </motion.p>
          <motion.h1
            className="display-xl mt-8 max-w-5xl text-foreground"
            variants={item}
            transition={transition}
          >
            Advertising advisory for brands that treat Amazon as a{" "}
            <em className="font-serif italic text-accent">core channel</em>
          </motion.h1>
          <motion.p
            className="body-editorial mt-10 max-w-xl"
            variants={item}
            transition={transition}
          >
            VendorEdge helps 1P brands improve ROAS, reduce wasted spend, and
            build advertising systems leadership can trust — across Sponsored
            Products, Brands, and Display.
          </motion.p>
          <motion.div
            className="mt-12 flex flex-wrap items-center gap-8"
            variants={item}
            transition={transition}
          >
            <LinkRoll href="/contact">Book a consultation</LinkRoll>
            <LinkRoll href="/case-studies">View client outcomes</LinkRoll>
          </motion.div>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute right-0 top-1/3 hidden h-64 w-64 rounded-full bg-accent/8 blur-3xl lg:block"
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -left-20 bottom-1/4 hidden h-48 w-48 rounded-full bg-foreground/5 blur-3xl lg:block"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </Container>
    </section>
  );
}
