"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { LinkRoll } from "@/components/editorial/link-roll";
import { Container } from "@/components/sections/container";
import { services } from "@/lib/site-data";
import { transition } from "@/lib/motion";

export function ServicesEditorial() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-warm border-b border-border py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <p className="editorial-label">What we do</p>
            <h2 className="display-md mt-6 text-foreground">
              Campaigns. Budgets. Audits.
              <br />
              <em className="italic text-accent">And everything it takes</em> to
              make them seamless.
            </h2>
            <div className="mt-8">
              <LinkRoll href="/services">Our services</LinkRoll>
            </div>
          </motion.div>

          <div className="divide-y divide-border border-y border-border">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ ...transition, delay: index * 0.08 }}
              >
                <Link
                  href={`/services#${service.id}`}
                  className="group grid gap-4 py-8 transition-colors hover:bg-muted/40 sm:grid-cols-[4rem_1fr_auto] sm:items-start sm:gap-8 sm:px-4"
                >
                  <span className="num-display pt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-medium tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {service.summary}
                    </p>
                  </div>
                  <span className="hidden text-2xl text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent sm:block">
                    →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
