import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/sections/container";
import { SectionHeader } from "@/components/sections/section-header";
import { brandThemes, heroMetrics, processSteps } from "@/lib/site-data";
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
          <p className="eyebrow">About</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            Senior advisory for brands that treat Amazon as a core channel
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            VendorEdge was built for Vendor Central teams who need more than campaign
            maintenance. We help marketing and e-commerce leaders make better advertising
            decisions with structure, measurement, and accountability.
          </p>
        </Container>
      </section>

      <section className="py-20 lg:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {heroMetrics.map((metric) => {
              const theme = brandThemes[metric.theme];
              return (
                <div
                  key={metric.label}
                  className={cn("surface-card border-l-4 p-6", theme.border)}
                >
                  <p className="text-3xl font-semibold tabular-nums text-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeader
              eyebrow="Our approach"
              title="Consulting with clarity and commercial focus"
              description="We believe authority comes from frameworks, evidence, and recommendations leadership can act on immediately."
            />
            <div className="space-y-4">
              {principles.map((item) => {
                const theme = brandThemes[item.theme];
                return (
                  <div
                    key={item.title}
                    className={cn("surface-card border-l-4 p-6", theme.border)}
                  >
                    <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section id="process" className="surface-muted border-y border-border py-20 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Engagement model"
            title="How engagements typically run"
            description="A structured path from diagnostic to sustained performance improvement."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {processSteps.map((step) => {
              const theme = brandThemes[step.theme];
              return (
                <div
                  key={step.step}
                  className={cn("surface-card border-l-4 p-6", theme.border)}
                >
                  <p className={cn("text-sm font-semibold tabular-nums", theme.accent)}>
                    {step.step}
                  </p>
                  <h3 className="mt-4 text-lg font-medium text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="rounded-2xl bg-primary px-8 py-12 text-primary-foreground lg:px-12">
            <h2 className="max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
              Ready to bring structure to your advertising program?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
              Start with a consultation. We'll review your current setup and outline
              practical next steps.
            </p>
            <Link
              href="/contact"
              className={buttonVariants({
                size: "lg",
                className: "mt-8 h-11 bg-accent text-accent-foreground hover:bg-accent/90",
              })}
            >
              Book a consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
