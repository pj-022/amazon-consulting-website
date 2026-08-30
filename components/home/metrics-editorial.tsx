"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { Container } from "@/components/sections/container";
import { heroMetrics } from "@/lib/site-data";
import { transition } from "@/lib/motion";
import { cn } from "@/lib/utils";

const valueColors = ["text-accent", "text-navy", "text-sage", "text-foreground"];

export function MetricsEditorial() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-warm border-b border-border py-20 lg:py-28">
      <Container>
        <motion.p
          className="editorial-label"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={transition}
        >
          By the numbers
        </motion.p>
        <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {heroMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="group bg-card px-6 py-10 transition-colors hover:bg-muted/60 lg:px-8 lg:py-12"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ ...transition, delay: index * 0.1 }}
            >
              <p
                className={cn(
                  "font-display text-4xl font-semibold tracking-tight sm:text-5xl",
                  valueColors[index % valueColors.length]
                )}
              >
                <AnimatedCounter value={metric.value} startOnMount />
              </p>
              <p className="mt-3 max-w-[12rem] text-sm leading-relaxed text-muted-foreground">
                {metric.label}
              </p>
              <span
                className={cn(
                  "mt-6 block h-px w-8 transition-all duration-500 group-hover:w-16",
                  index % 4 === 0
                    ? "bg-accent"
                    : index % 4 === 1
                      ? "bg-navy"
                      : index % 4 === 2
                        ? "bg-sage"
                        : "bg-foreground/30"
                )}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
