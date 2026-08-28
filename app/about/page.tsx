import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Container } from "@/components/sections/container";
import { MetricsStrip } from "@/components/sections/metrics-strip";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeader } from "@/components/sections/section-header";
import { brandThemes, processSteps } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const principles = [
  {
    theme: "coral" as const,
    title: "Vendor Central depth",
    description:
      "We specialize in 1P programs — not generic marketplace management. That focus shapes every recommendation.",
  },
  {
    theme: "sky" as const,
    title: "Strategy before tactics",
    description:
      "We define the operating model first: structure, budget governance, and KPIs. Execution follows from clarity.",
  },
  {
    theme: "violet" as const,
    title: "Transparent partnership",
    description:
      "You get direct access to senior advisors, plain-language reporting, and recommendations your team can implement.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="hero-glow border-b border-border">
        <Container className="py-20 lg:py-24">
          <PageHero
            eyebrow="About"
            title="Senior advisory for brands that treat Amazon as a core channel"
            description="VendorEdge was built for Vendor Central teams who need more than campaign maintenance. We help marketing and e-commerce leaders make better advertising decisions with structure, measurement, and accountability."
          />
        </Container>
      </section>

      <section className="metrics-band">
        <Container className="py-14">
          <MetricsStrip />
        </Container>
      </section>

      <section className="py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionHeader
                eyebrow="Our approach"
                title="Consulting with clarity and commercial focus"
                description="We believe authority comes from frameworks, evidence, and recommendations leadership can act on immediately."
              />
            </Reveal>
            <Stagger className="space-y-4">
              {principles.map((item) => {
                const theme = brandThemes[item.theme];
                return (
                  <StaggerItem key={item.title}>
                    <div
                      className={cn(
                        "surface-card-interactive border-l-4 p-6",
                        theme.border,
                        theme.surface,
                        theme.surfaceBorder
                      )}
                    >
                      <h3 className="text-lg font-medium text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </Container>
      </section>

      <section
        id="process"
        className="surface-muted border-y border-border py-20 lg:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Engagement model"
              title="How engagements typically run"
              description="A structured path from diagnostic to sustained performance improvement."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-5 lg:grid-cols-4">
            {processSteps.map((step) => {
              const theme = brandThemes[step.theme];
              return (
                <StaggerItem key={step.step}>
                  <div
                    className={cn(
                      "surface-card-interactive h-full border-l-4 p-6",
                      theme.border,
                      theme.surface,
                      theme.surfaceBorder
                    )}
                  >
                    <p
                      className={cn(
                        "text-sm font-semibold tabular-nums",
                        theme.accent
                      )}
                    >
                      {step.step}
                    </p>
                    <h3 className="mt-4 text-lg font-medium text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <div className="cta-panel">
              <h2 className="max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
                Ready to bring structure to your advertising program?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
                Start with a consultation. We'll review your current setup and
                outline practical next steps.
              </p>
              <Link
                href="/contact"
                className={buttonVariants({
                  size: "lg",
                  className:
                    "btn-premium mt-8 h-11 bg-accent text-accent-foreground hover:bg-accent/90",
                })}
              >
                Book a consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
