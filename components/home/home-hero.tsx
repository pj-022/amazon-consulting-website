"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AmbientTypography, ColorOrbs } from "@/components/editorial/ambient";
import { EditorialButton } from "@/components/editorial/editorial-button";
import { LinkRoll } from "@/components/editorial/link-roll";
import { Container } from "@/components/sections/container";
import { company } from "@/lib/site-data";
import { transition, staggerContainer, fadeUp } from "@/lib/motion";

const item = fadeUp;

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  const content = (
    <>
      <p className="editorial-label">
        <span className="mr-3 inline-block h-px w-8 bg-accent align-middle" />
        Amazon Vendor Central Advisory
      </p>
      <h1 className="display-xl mt-10 max-w-5xl text-foreground">
        Advertising advisory for brands that treat Amazon as a{" "}
        <em className="font-serif italic text-gradient-warm">core channel</em>
      </h1>
      <p className="body-editorial mt-10 max-w-xl">
        {company.name} helps 1P brands improve ROAS, reduce wasted spend, and build
        advertising systems leadership can trust — across Sponsored Products,
        Brands, and Display.
      </p>
      <div className="mt-12 flex flex-wrap items-center gap-6 sm:gap-8">
        <EditorialButton href="/contact" variant="primary">
          Book a consultation
        </EditorialButton>
        <LinkRoll href="/case-studies">View client outcomes</LinkRoll>
      </div>
    </>
  );

  return (
    <section className="grain section-warm relative min-h-[92vh] overflow-hidden border-b border-border/60">
      <ColorOrbs />
      <AmbientTypography />
      <Container className="relative flex min-h-[92vh] flex-col justify-end pb-20 pt-32 lg:pb-28">
        {reduceMotion ? (
          <div className="relative z-10">{content}</div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10"
          >
            <motion.div variants={item} transition={transition}>
              <p className="editorial-label">
                <span className="mr-3 inline-block h-px w-8 bg-accent align-middle" />
                Amazon Vendor Central Advisory
              </p>
            </motion.div>
            <motion.h1
              className="display-xl mt-10 max-w-5xl text-foreground"
              variants={item}
              transition={transition}
            >
              Advertising advisory for brands that treat Amazon as a{" "}
              <em className="font-serif italic text-gradient-warm">core channel</em>
            </motion.h1>
            <motion.p
              className="body-editorial mt-10 max-w-xl"
              variants={item}
              transition={transition}
            >
              {company.name} helps 1P brands improve ROAS, reduce wasted spend, and
              build advertising systems leadership can trust — across Sponsored
              Products, Brands, and Display.
            </motion.p>
            <motion.div
              className="mt-12 flex flex-wrap items-center gap-6 sm:gap-8"
              variants={item}
              transition={transition}
            >
              <EditorialButton href="/contact" variant="primary">
                Book a consultation
              </EditorialButton>
              <LinkRoll href="/case-studies">View client outcomes</LinkRoll>
            </motion.div>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
