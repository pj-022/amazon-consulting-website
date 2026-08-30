"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EditorialButton } from "@/components/editorial/editorial-button";
import { LinkRoll } from "@/components/editorial/link-roll";
import { Container } from "@/components/sections/container";
import { languages } from "@/lib/site-data";
import { transition } from "@/lib/motion";
import { cn } from "@/lib/utils";

const langColors = [
  "from-accent/20 to-transparent border-accent/30",
  "from-navy/25 to-transparent border-navy/30",
  "from-sage/20 to-transparent border-sage/30",
  "from-blush/40 to-transparent border-blush",
];

export function LanguagesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-ink grain relative overflow-hidden py-24 lg:py-32">
      <div className="narrative-accent-bar" aria-hidden />
      <Container className="relative">
        <motion.p
          className="editorial-label-light"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={transition}
        >
          We are multilingual
        </motion.p>
        <motion.h2
          className="display-lg mt-6 max-w-3xl text-on-ink"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.1 }}
        >
          We speak the languages your organization actually uses
        </motion.h2>
        <motion.p
          className="body-editorial-light mt-6 max-w-2xl"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.2 }}
        >
          C-Suite and spreadsheets. Campaign structure and commercial logic. Our
          language is intentional, precise, and built to move programs toward
          their goals.
        </motion.p>

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.word}
              className={cn(
                "border bg-gradient-to-br p-8 lg:p-10",
                langColors[index % langColors.length]
              )}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...transition, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <p className="font-display text-3xl font-semibold text-accent sm:text-4xl">
                {lang.word}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-on-ink/65">
                {lang.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CtaSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-warm relative overflow-hidden border-t border-border py-24 lg:py-32">
      <div className="color-orb color-orb-terracotta absolute -right-32 top-0 h-96 w-96 opacity-50" />
      <Container className="relative">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
        >
          <p className="editorial-label">Start here</p>
          <h2 className="display-lg mt-8 uppercase text-foreground">
            We&apos;re ready when{" "}
            <span className="text-gradient-warm">you are</span>
          </h2>
          <p className="body-editorial mx-auto mt-8 max-w-xl">
            Get a clear view of your advertising program in one conversation.
            We&apos;ll review your structure, identify opportunities, and outline
            what a 90-day improvement plan could look like.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            <EditorialButton href="/contact" variant="primary">
              Schedule consultation
            </EditorialButton>
            <LinkRoll href="/services">Explore services</LinkRoll>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
