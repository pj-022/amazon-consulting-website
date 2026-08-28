import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/sections/container";
import { DashboardPreview } from "@/components/sections/dashboard-preview";
import { SectionHeader } from "@/components/sections/section-header";
import {
  brandThemes,
  capabilities,
  caseStudies,
  heroMetrics,
  processSteps,
  services,
  testimonials,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <section className="hero-glow relative overflow-hidden border-b border-border">
        <Container className="relative py-20 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="eyebrow">Amazon Vendor Central Advisory</p>
              <h1 className="mt-5 max-w-2xl text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Where is your advertising program{" "}
                <span className="accent-highlight">leaving revenue</span> on the
                table?
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                VendorEdge helps 1P brands improve ROAS, reduce wasted spend, and
                build advertising systems leadership can trust — across Sponsored
                Products, Brands, and Display.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className={buttonVariants({ size: "lg", className: "h-11 px-6" })}
                >
                  Book a consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/case-studies"
                  className={buttonVariants({
                    size: "lg",
                    variant: "outline",
                    className: "h-11 px-6",
                  })}
                >
                  View client outcomes
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-2">
                {capabilities.slice(0, 4).map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <DashboardPreview />
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-card">
        <Container className="py-12">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {heroMetrics.map((metric) => {
              const theme = brandThemes[metric.theme];
              return (
                <div
                  key={metric.label}
                  className={cn("surface-card border-l-4 p-6", theme.border)}
                >
                  <p className="text-3xl font-semibold tabular-nums text-foreground sm:text-4xl">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Practice areas"
            title="Advisory built for Vendor Central complexity"
            description="We focus on the decisions that move revenue — structure, budget, measurement, and governance."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((service) => {
              const theme = brandThemes[service.theme];
              return (
                <Link
                  key={service.id}
                  href={`/services#${service.id}`}
                  className={cn(
                    "group surface-card border-l-4 p-8",
                    theme.border
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className={cn("text-xs font-semibold uppercase tracking-wider", theme.accent)}>
                        {service.id.replace("-", " ")}
                      </p>
                      <h3 className="mt-3 text-xl font-medium tracking-tight text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {service.summary}
                      </p>
                    </div>
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="surface-muted border-y border-border py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader
              eyebrow="How we work"
              title="A clear operating rhythm from audit to optimization"
              description="Most engagements start with a diagnostic, move into a 90-day roadmap, and continue with monthly strategic oversight."
            />
            <div className="space-y-4">
              {processSteps.map((step) => {
                const theme = brandThemes[step.theme];
                return (
                  <div
                    key={step.step}
                    className={cn(
                      "surface-card grid gap-4 border-l-4 p-6 sm:grid-cols-[3.5rem_1fr]",
                      theme.border
                    )}
                  >
                    <p className={cn("text-sm font-semibold tabular-nums", theme.accent)}>
                      {step.step}
                    </p>
                    <div>
                      <h3 className="text-lg font-medium text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Selected outcomes"
            title="Recent client work"
            description="Representative engagements across electronics, home, and health categories."
          />
          <div className="mt-12 space-y-6">
            {caseStudies.map((study, index) => {
              const theme = brandThemes[study.theme];
              return (
                <article
                  key={study.slug}
                  className={cn(
                    "surface-card grid gap-8 border-l-4 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
                    theme.border
                  )}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <p className={cn("text-xs font-semibold uppercase tracking-wider", theme.accent)}>
                      {study.category}
                    </p>
                    <h3 className="mt-3 text-2xl font-medium tracking-tight text-foreground">
                      {study.headline}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {study.challenge}
                    </p>
                    <Link
                      href="/case-studies"
                      className={buttonVariants({
                        variant: "link",
                        className: "mt-4 h-auto px-0 text-accent",
                      })}
                    >
                      Read full case study →
                    </Link>
                  </div>
                  <div
                    className={`grid grid-cols-2 gap-3 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    {study.results.map((result) => (
                      <div
                        key={result.label}
                        className="rounded-lg border border-border bg-muted/40 p-4"
                      >
                        <p className="text-xs uppercase tracking-wide text-muted-foreground">
                          {result.label}
                        </p>
                        <p className="mt-2 text-xl font-semibold tabular-nums text-foreground">
                          {result.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="surface-muted border-y border-border py-20 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Client perspective"
            title="What partners say after working with us"
            align="center"
            className="mx-auto"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => {
              const theme = brandThemes[item.theme];
              return (
                <figure
                  key={item.author}
                  className={cn("surface-card border-l-4 p-8", theme.border)}
                >
                  <blockquote className="text-sm leading-relaxed text-muted-foreground">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-5">
                    <p className="text-sm font-semibold text-foreground">
                      {item.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.role}, {item.company}
                    </p>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-24">
        <Container>
          <div className="rounded-2xl bg-primary px-8 py-12 text-primary-foreground sm:px-12 lg:px-16 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="eyebrow text-accent">Start here</p>
                <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
                  Get a clear view of your advertising program in one conversation.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
                  We’ll review your current structure, identify immediate opportunities,
                  and outline what a 90-day improvement plan could look like.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/contact"
                  className={buttonVariants({
                    size: "lg",
                    className: "h-11 bg-accent text-accent-foreground hover:bg-accent/90",
                  })}
                >
                  Schedule consultation
                </Link>
                <Link
                  href="/services"
                  className={buttonVariants({
                    size: "lg",
                    variant: "outline",
                    className:
                      "h-11 border-white/25 bg-transparent text-white hover:bg-white/10",
                  })}
                >
                  Explore services
                </Link>
              </div>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "No obligation intro call",
                "Vendor Central specialists",
                "Actionable recommendations",
                "Response within 24 hours",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-primary-foreground/80"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
