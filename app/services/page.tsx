import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/sections/container";
import { SectionHeader } from "@/components/sections/section-header";
import { brandThemes, services } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export default function ServicesPage() {
  return (
    <>
      <section className="hero-glow border-b border-border">
        <Container className="py-20 lg:py-24">
          <p className="eyebrow">Services</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            Advisory for every stage of your Vendor Central program
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            From foundational architecture to ongoing optimization — each engagement
            is scoped around measurable commercial outcomes.
          </p>

          <nav className="mt-10 flex flex-wrap gap-2">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
              >
                {service.title}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      <section className="py-20 lg:py-24">
        <Container className="space-y-16">
          {services.map((service, index) => {
            const theme = brandThemes[service.theme];
            return (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-28"
              >
                <div className={cn("surface-card overflow-hidden border-l-4", theme.border)}>
                  <div className="border-b border-border bg-muted/30 px-8 py-8 sm:px-10">
                    <p className={cn("text-xs font-semibold uppercase tracking-wider", theme.accent)}>
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <div className="mt-3 flex items-start justify-between gap-4">
                      <h2 className="max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
                        {service.title}
                      </h2>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <service.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid gap-8 p-8 lg:grid-cols-[1fr_1.2fr] lg:p-10">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                      <div className="rounded-lg border border-border bg-muted/30 p-5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Ideal for
                        </p>
                        <p className="mt-2 text-sm font-medium text-foreground">
                          {service.idealFor}
                        </p>
                      </div>
                      <div className="rounded-lg border border-border bg-muted/30 p-5">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Timeline
                        </p>
                        <p className="mt-2 text-sm font-medium text-foreground">
                          {service.timeline}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        Deliverables
                      </h3>
                      <ul className="mt-5 space-y-3">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </Container>
      </section>

      <section className="surface-muted border-t border-border py-20">
        <Container>
          <div className="surface-card grid gap-8 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:p-12">
            <SectionHeader
              eyebrow="Next step"
              title="Not sure which engagement fits?"
              description="We'll help you scope the right starting point based on spend level, internal capabilities, and current performance."
            />
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className={buttonVariants({ size: "lg", className: "h-11" })}
              >
                Talk to an advisor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/case-studies"
                className={buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className: "h-11",
                })}
              >
                See outcomes
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
