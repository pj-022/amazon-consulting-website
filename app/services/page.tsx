import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/sections/container";
import { SectionHeader } from "@/components/sections/section-header";
import { services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <Container className="py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Services
            </p>
            <h1 className="mt-5 text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Advisory for every stage of your Vendor Central advertising program
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              From foundational architecture to ongoing optimization, each engagement
              is scoped around measurable commercial outcomes — not hours billed.
            </p>
          </div>

          <nav className="mt-10 flex flex-wrap gap-2">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/20 hover:text-foreground"
              >
                {service.title}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      <section className="py-20 lg:py-24">
        <Container className="space-y-20">
          {services.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-28 border-t border-border pt-16 first:border-t-0 first:pt-0"
            >
              <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-border bg-card p-4">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">
                        Ideal for
                      </p>
                      <p className="mt-2 text-sm font-medium text-foreground">
                        {service.idealFor}
                      </p>
                    </div>
                    <div className="rounded-lg border border-border bg-card p-4">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">
                        Timeline
                      </p>
                      <p className="mt-2 text-sm font-medium text-foreground">
                        {service.timeline}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-8">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Deliverables
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="border-t border-border bg-muted/30 py-20">
        <Container>
          <div className="grid gap-8 rounded-2xl border border-border bg-card p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:p-12">
            <SectionHeader
              eyebrow="Next step"
              title="Not sure which engagement fits?"
              description="We’ll help you scope the right starting point based on spend level, internal capabilities, and current performance."
            />
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
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
