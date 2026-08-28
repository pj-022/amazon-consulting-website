"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { LinkRoll } from "@/components/editorial/link-roll";
import { Container } from "@/components/sections/container";
import { caseStudies } from "@/lib/site-data";
import { transition } from "@/lib/motion";

export function WorkEditorial() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-cream py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="editorial-label">Selected work</p>
            <h2 className="display-md mt-4 max-w-2xl text-foreground">
              Outcomes from recent Vendor Central engagements
            </h2>
          </div>
          <LinkRoll href="/case-studies">See all case studies</LinkRoll>
        </div>

        <div className="mt-16 space-y-0 divide-y divide-border border-y border-border">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.slug}
              className="grid gap-8 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-16"
              initial={reduceMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ ...transition, delay: index * 0.05 }}
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {study.category} · {study.client}
                </p>
                <h3 className="mt-4 font-serif text-2xl tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                  {study.headline}
                </h3>
                <p className="body-editorial mt-6 max-w-2xl">{study.challenge}</p>
                <Link
                  href="/case-studies"
                  className="mt-6 inline-block text-sm uppercase tracking-[0.16em] text-foreground underline-offset-4 hover:text-accent hover:underline"
                >
                  Read case study
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-px bg-border">
                {study.results.map((result) => (
                  <div key={result.label} className="bg-background p-5 sm:p-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {result.label}
                    </p>
                    <p className="mt-2 font-serif text-2xl tracking-tight text-foreground">
                      {result.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
