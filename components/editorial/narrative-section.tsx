"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LinkRoll } from "@/components/editorial/link-roll";
import { KeywordField } from "@/components/editorial/keyword-field";
import { Container } from "@/components/sections/container";
import { transition } from "@/lib/motion";
import { cn } from "@/lib/utils";

type NarrativeSectionProps = {
  number: string;
  label: string;
  headline: string;
  subhead?: string;
  paragraphs: readonly string[];
  keywords: readonly string[];
  cta?: { label: string; href: string };
  inverted?: boolean;
  className?: string;
};

export function NarrativeSection({
  number,
  label,
  headline,
  subhead,
  paragraphs,
  keywords,
  cta,
  inverted = false,
  className,
}: NarrativeSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className={cn(
        "grain relative overflow-hidden py-24 lg:py-32",
        inverted ? "section-ink" : "section-cream",
        className
      )}
    >
      <Container className="relative">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={transition}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <p className={inverted ? "editorial-label-light" : "editorial-label"}>
              {label}
            </p>
            <p
              className={cn(
                "mt-8 font-mono text-6xl tabular-nums leading-none sm:text-8xl",
                inverted ? "text-primary-foreground/20" : "text-foreground/10"
              )}
            >
              {number}
            </p>
          </motion.div>

          <div>
            <motion.h2
              className={cn(
                "display-lg uppercase",
                inverted ? "text-primary-foreground" : "text-foreground"
              )}
              initial={reduceMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ ...transition, delay: 0.1 }}
            >
              {headline}
            </motion.h2>

            {subhead ? (
              <motion.p
                className={cn(
                  "mt-8 max-w-xl text-lg italic sm:text-xl",
                  inverted ? "text-primary-foreground/70" : "text-foreground/70"
                )}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: 0.2 }}
              >
                {subhead}
              </motion.p>
            ) : null}

            <div className="mt-10 space-y-6">
              {paragraphs.map((p, i) => (
                <motion.p
                  key={p}
                  className={inverted ? "body-editorial-light max-w-2xl" : "body-editorial max-w-2xl"}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...transition, delay: 0.25 + i * 0.08 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <KeywordField
              keywords={keywords}
              light={inverted}
              className="mt-12"
            />

            {cta ? (
              <motion.div
                className="mt-12"
                initial={reduceMotion ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ...transition, delay: 0.4 }}
              >
                <LinkRoll href={cta.href} light={inverted}>
                  {cta.label}
                </LinkRoll>
              </motion.div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
