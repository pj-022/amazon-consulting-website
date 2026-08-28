import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/sections/container";
import { ColorBlobs } from "@/components/sections/color-blobs";
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
      <section className="relative overflow-hidden border-b border-border/60">
        <ColorBlobs />
        <Container className="relative py-20 lg:py-24">
          <span className="brand-pill border-[#7EC8FF] bg-[#E8F4FF] text-[#0369A1]">
            About
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            Senior advisory for brands that treat Amazon as a{" "}
            <span className="gradient-text-warm">core channel</span>
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {heroMetrics.map((metric) => {
              const theme = brandThemes[metric.theme];
              return (
                <div
                  key={metric.label}
                  className={cn("card-colorful border-2 p-6", theme.border, theme.bg)}
                >
                  <p className={cn("text-3xl font-bold tabular-nums", theme.text)}>
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground/70">
                    {metric.label}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeader
              eyebrow="Our approach"
              theme="coral"
              title="Consulting with personality — and proof"
              description="We believe authority comes from clarity, color, and recommendations leadership can act on immediately."
            />
            <div className="space-y-5">
              {principles.map((item) => {
                const theme = brandThemes[item.theme];
                return (
                  <div
                    key={item.title}
                    className={cn("card-colorful border-2 p-6", theme.border)}
                  >
                    <div className={cn("mb-3 h-1 w-10 rounded-full bg-gradient-to-r", theme.gradient)} />
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
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

      <section id="process" className="section-tint-mint border-y border-border/60 py-20 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Engagement model"
            theme="mint"
            title="How engagements typically run"
            description="A structured path from diagnostic to sustained performance improvement."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {processSteps.map((step) => {
              const theme = brandThemes[step.theme];
              return (
                <div
                  key={step.step}
                  className={cn("card-colorful border-2 p-6", theme.border)}
                >
                  <div
                    className={cn(
                      "mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-sm font-bold text-white",
                      theme.gradient
                    )}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
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
          <div className="cta-rainbow relative overflow-hidden rounded-3xl px-8 py-12 lg:px-12">
            <h2 className="relative max-w-2xl text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Ready to bring structure — and energy — to your advertising program?
            </h2>
            <p className="relative mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
              Start with a consultation. We'll review your current setup and outline
              practical next steps.
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "btn-gradient relative mt-8 h-12 border-0 font-semibold"
              )}
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
