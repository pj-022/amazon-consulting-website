import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/sections/container";
import { ColorBlobs } from "@/components/sections/color-blobs";
import { DashboardPreview } from "@/components/sections/dashboard-preview";
import { SectionHeader } from "@/components/sections/section-header";
import {
  brandThemes,
  capabilities,
  capabilityThemes,
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
      <section className="relative overflow-hidden border-b border-border/60">
        <ColorBlobs />
        <Container className="relative py-20 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="brand-pill border-[#FFB899] bg-[#FFF0E8] text-[#C2410C]">
                Amazon Vendor Central Advisory
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Where is your advertising program{" "}
                <span className="gradient-text">leaving revenue</span> on the table?
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                VendorEdge helps 1P brands improve ROAS, cut wasted spend, and build
                advertising systems leadership can trust — across Sponsored Products,
                Brands, and Display.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ size: "lg" }), "btn-gradient h-12 border-0 px-7 font-semibold")}
                >
                  Book a consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/case-studies"
                  className={buttonVariants({
                    size: "lg",
                    variant: "outline",
                    className: "h-12 border-2 border-[#8B5CF6]/30 bg-white/70 px-7 font-semibold hover:bg-[#F3EEFF]",
                  })}
                >
                  View client outcomes
                </Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-2">
                {capabilities.slice(0, 4).map((item, i) => {
                  const theme = brandThemes[capabilityThemes[i]];
                  return (
                    <span
                      key={item}
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-xs font-semibold",
                        theme.bg,
                        theme.border,
                        theme.text
                      )}
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
            <DashboardPreview />
          </div>
        </Container>
      </section>

      <section className="border-b border-border/60 bg-white/50 backdrop-blur-sm">
        <Container className="py-12">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {heroMetrics.map((metric) => {
              const theme = brandThemes[metric.theme];
              return (
                <div
                  key={metric.label}
                  className={cn(
                    "card-colorful border-2 p-6",
                    theme.border,
                    theme.bg
                  )}
                >
                  <p className={cn("text-3xl font-bold tabular-nums sm:text-4xl", theme.text)}>
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-foreground/70">
                    {metric.label}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-tint-violet py-20 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Practice areas"
            theme="violet"
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
                    "card-colorful group border-2 p-8",
                    theme.border,
                    "hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)]"
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span
                        className={cn(
                          "inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider",
                          theme.bg,
                          theme.border,
                          theme.text
                        )}
                      >
                        {service.id.replace("-", " ")}
                      </span>
                      <h3 className="mt-4 text-2xl font-medium tracking-tight text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {service.summary}
                      </p>
                    </div>
                    <div
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md transition-transform group-hover:scale-110",
                        theme.gradient
                      )}
                    >
                      <service.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className={cn("mt-5 flex items-center gap-2 text-sm font-semibold", theme.text)}>
                    Explore service
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-tint-sky border-y border-border/60 py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader
              eyebrow="How we work"
              theme="sky"
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
                      "card-colorful grid gap-4 border-2 p-6 sm:grid-cols-[4rem_1fr]",
                      theme.border
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-sm font-bold text-white",
                        theme.gradient
                      )}
                    >
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
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

      <section className="section-tint-coral py-20 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Selected outcomes"
            theme="coral"
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
                    "card-colorful grid gap-8 border-2 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
                    theme.border
                  )}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <span
                      className={cn(
                        "brand-pill text-[10px]",
                        theme.bg,
                        theme.border,
                        theme.text
                      )}
                    >
                      {study.category}
                    </span>
                    <h3 className="mt-4 text-2xl font-medium tracking-tight text-foreground">
                      {study.headline}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {study.challenge}
                    </p>
                    <Link
                      href="/case-studies"
                      className={buttonVariants({
                        variant: "link",
                        className: cn("mt-4 h-auto px-0 font-semibold", theme.text),
                      })}
                    >
                      Read full case study →
                    </Link>
                  </div>
                  <div
                    className={`grid grid-cols-2 gap-3 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    {study.results.map((result, ri) => (
                      <div
                        key={result.label}
                        className={cn(
                          "rounded-xl border-2 p-4",
                          ri % 2 === 0 ? theme.bg : "bg-white/80",
                          theme.border
                        )}
                      >
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          {result.label}
                        </p>
                        <p className={cn("mt-2 text-xl font-bold tabular-nums", theme.text)}>
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

      <section className="section-tint-mint border-y border-border/60 py-20 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Client perspective"
            theme="mint"
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
                  className={cn("card-colorful border-2 p-8", theme.border)}
                >
                  <div className={cn("mb-4 h-1 w-12 rounded-full bg-gradient-to-r", theme.gradient)} />
                  <blockquote className="text-sm leading-relaxed text-muted-foreground">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border/60 pt-5">
                    <p className="text-sm font-bold text-foreground">{item.author}</p>
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
          <div className="cta-rainbow relative overflow-hidden rounded-3xl px-8 py-12 text-white sm:px-12 lg:px-16 lg:py-16">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#FF6B35]/30 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#0EA5E9]/25 blur-2xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <span className="brand-pill border-white/20 bg-white/10 text-white">
                  Start here
                </span>
                <h2 className="mt-5 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
                  Get a clear view of your advertising program in one conversation.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                  We’ll review your current structure, identify immediate opportunities,
                  and outline what a 90-day improvement plan could look like.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ size: "lg" }), "btn-gradient h-12 border-0 font-semibold")}
                >
                  Schedule consultation
                </Link>
                <Link
                  href="/services"
                  className={buttonVariants({
                    size: "lg",
                    variant: "outline",
                    className: "h-12 border-2 border-white/30 bg-white/10 text-white hover:bg-white/20",
                  })}
                >
                  Explore services
                </Link>
              </div>
            </div>
            <ul className="relative mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "No obligation intro call",
                "Vendor Central specialists",
                "Actionable recommendations",
                "Response within 24 hours",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/85">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FBBF24]" />
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
