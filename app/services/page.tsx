import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/sections/container";
import { ColorBlobs } from "@/components/sections/color-blobs";
import { SectionHeader } from "@/components/sections/section-header";
import { brandThemes, services } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <ColorBlobs />
        <Container className="relative py-20 lg:py-24">
          <span className="brand-pill border-[#C4B5FD] bg-[#F3EEFF] text-[#6D28D9]">
            Services
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            Advisory for every stage of your{" "}
            <span className="gradient-text">Vendor Central</span> program
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            From foundational architecture to ongoing optimization — each engagement
            is scoped around measurable commercial outcomes.
          </p>

          <nav className="mt-10 flex flex-wrap gap-2">
            {services.map((service) => {
              const theme = brandThemes[service.theme];
              return (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-semibold transition-transform hover:-translate-y-0.5",
                    theme.bg,
                    theme.border,
                    theme.text
                  )}
                >
                  {service.title}
                </a>
              );
            })}
          </nav>
        </Container>
      </section>

      <section className="py-20 lg:py-24">
        <Container className="space-y-20">
          {services.map((service, index) => {
            const theme = brandThemes[service.theme];
            return (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-28"
              >
                <div
                  className={cn(
                    "card-colorful overflow-hidden border-2",
                    theme.border
                  )}
                >
                  <div className={cn("bg-gradient-to-r p-8 text-white sm:p-10", theme.gradient)}>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <div className="mt-4 flex items-start justify-between gap-4">
                      <h2 className="max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
                        {service.title}
                      </h2>
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                        <service.icon className="h-7 w-7" />
                      </div>
                    </div>
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid gap-8 p-8 lg:grid-cols-[1fr_1.2fr] lg:p-10">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                      <div className={cn("rounded-xl border-2 p-5", theme.bg, theme.border)}>
                        <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                          Ideal for
                        </p>
                        <p className="mt-2 text-sm font-semibold text-foreground">
                          {service.idealFor}
                        </p>
                      </div>
                      <div className={cn("rounded-xl border-2 p-5", theme.bg, theme.border)}>
                        <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                          Timeline
                        </p>
                        <p className="mt-2 text-sm font-semibold text-foreground">
                          {service.timeline}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">
                        Deliverables
                      </h3>
                      <ul className="mt-5 space-y-3">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className={cn("mt-0.5 h-4 w-4 shrink-0", theme.text)} />
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

      <section className="section-tint-violet border-t border-border/60 py-20">
        <Container>
          <div className="card-colorful grid gap-8 border-2 border-[#C4B5FD] bg-[#F3EEFF]/50 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:p-12">
            <SectionHeader
              eyebrow="Next step"
              theme="violet"
              title="Not sure which engagement fits?"
              description="We'll help you scope the right starting point based on spend level, internal capabilities, and current performance."
            />
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "btn-gradient h-12 border-0 font-semibold")}
              >
                Talk to an advisor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/case-studies"
                className={buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className: "h-12 border-2 border-[#8B5CF6]/30 bg-white font-semibold",
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
