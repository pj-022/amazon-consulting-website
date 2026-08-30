import { Marquee } from "@/components/editorial/marquee";
import { LinkRoll } from "@/components/editorial/link-roll";
import { Container } from "@/components/sections/container";
import { brandThemes, capabilities, services } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export default function ServicesPage() {
  return (
    <>
      <section className="grain section-warm border-b border-border">
        <Container className="py-24 lg:py-32">
          <p className="editorial-label">Services</p>
          <h1 className="display-lg mt-8 max-w-4xl uppercase text-foreground">
            Advisory for every stage of your{" "}
            <em className="italic normal-case text-accent">Vendor Central</em>{" "}
            program
          </h1>
          <p className="body-editorial mt-8 max-w-2xl">
            From foundational architecture to ongoing optimization — each
            engagement is scoped around measurable commercial outcomes.
          </p>
        </Container>
      </section>

      <Marquee items={capabilities} speed="slow" />

      <section className="section-cream py-24 lg:py-32">
        <Container className="space-y-0">
          {services.map((service, index) => {
            const theme = brandThemes[service.theme];
            return (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-28 border-b border-border py-16 first:pt-0 last:border-b-0 lg:py-24"
              >
                <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20">
                  <div className="lg:sticky lg:top-32 lg:self-start">
                    <p className="num-display">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="display-md mt-6 text-foreground">
                      {service.title}
                    </h2>
                    <div
                      className={cn(
                        "mt-8 inline-flex h-14 w-14 items-center justify-center border",
                        theme.surfaceBorder,
                        theme.surface
                      )}
                    >
                      <service.icon className={cn("h-6 w-6", theme.accent)} />
                    </div>
                    <div className="mt-8 space-y-4 border-t border-border pt-8">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          Ideal for
                        </p>
                        <p className="mt-2 text-sm text-foreground">
                          {service.idealFor}
                        </p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          Timeline
                        </p>
                        <p className="mt-2 text-sm text-foreground">
                          {service.timeline}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="body-editorial">{service.description}</p>
                    <div className="mt-12">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Deliverables
                      </p>
                      <ul className="mt-6 divide-y divide-border border-y border-border">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="py-4 text-sm leading-relaxed text-muted-foreground"
                          >
                            {item}
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

      <section className="section-ink grain py-24 lg:py-32">
        <Container className="text-center">
          <p className="editorial-label-light">Next step</p>
          <h2 className="display-md mt-6 text-on-ink">
            Not sure which engagement fits?
          </h2>
          <p className="body-editorial-light mx-auto mt-6 max-w-xl">
            We&apos;ll help you scope the right starting point based on spend
            level, internal capabilities, and current performance.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            <LinkRoll href="/contact" light>
              Talk to an advisor
            </LinkRoll>
            <LinkRoll href="/case-studies" light>
              See outcomes
            </LinkRoll>
          </div>
        </Container>
      </section>
    </>
  );
}
