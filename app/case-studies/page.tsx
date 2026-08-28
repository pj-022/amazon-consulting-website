import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Container } from "@/components/sections/container";
import { PageHero } from "@/components/sections/page-hero";
import { brandThemes, caseStudies } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export default function CaseStudiesPage() {
  return (
    <>
      <section className="hero-glow border-b border-border">
        <Container className="py-20 lg:py-24">
          <PageHero
            eyebrow="Case studies"
            title="Outcomes from recent Vendor Central engagements"
            description="Each engagement reflects a distinct commercial challenge and the operating changes that drove measurable improvement."
          />
        </Container>
      </section>

      <section className="py-20 lg:py-24">
        <Container className="space-y-20">
          <Stagger className="space-y-20">
            {caseStudies.map((study, index) => {
              const theme = brandThemes[study.theme];
              return (
                <StaggerItem key={study.slug}>
                  <article
                    className="grid gap-10 border-t border-border pt-16 first:border-t-0 first:pt-0 lg:grid-cols-2 lg:gap-16"
                  >
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <p
                        className={cn(
                          "text-xs font-semibold uppercase tracking-wider",
                          theme.accent
                        )}
                      >
                        {study.category} · {study.client}
                      </p>
                      <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
                        {study.headline}
                      </h2>

                      <div className="mt-8 space-y-8">
                        <div>
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                            Challenge
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            {study.challenge}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                            Approach
                          </h3>
                          <ul className="mt-3 space-y-2">
                            {study.approach.map((item) => (
                              <li
                                key={item}
                                className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                              >
                                <span
                                  className={cn(
                                    "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                                    theme.dot
                                  )}
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <div
                        className={cn(
                          "surface-card-interactive border-l-4 p-8",
                          theme.border
                        )}
                      >
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                          Results
                        </h3>
                        <div className="mt-5 grid grid-cols-2 gap-4">
                          {study.results.map((result) => (
                            <div
                              key={result.label}
                              className="rounded-lg border border-border bg-muted/40 p-4 transition-colors duration-300 hover:bg-muted/60"
                            >
                              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                                {result.label}
                              </p>
                              <p className="mt-2 text-2xl font-semibold tabular-nums text-foreground">
                                {result.value}
                              </p>
                            </div>
                          ))}
                        </div>

                        <figure className="mt-8 border-t border-border pt-8">
                          <blockquote className="text-sm leading-relaxed text-muted-foreground">
                            “{study.quote}”
                          </blockquote>
                          <figcaption className="mt-4 text-sm">
                            <span className="font-semibold text-foreground">
                              {study.author}
                            </span>
                            <span className="text-muted-foreground">
                              {" "}
                              · {study.role}
                            </span>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      <section className="surface-muted border-t border-border py-20">
        <Container>
          <Reveal>
            <div className="surface-card-interactive grid gap-8 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:p-12">
              <div>
                <h2 className="text-3xl font-medium tracking-tight text-foreground">
                  Want similar outcomes for your program?
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  We'll assess your current advertising setup and recommend the
                  highest-impact starting point for your team.
                </p>
              </div>
              <Link
                href="/contact"
                className={buttonVariants({
                  size: "lg",
                  className: "btn-premium h-11 w-full sm:w-auto",
                })}
              >
                Schedule consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
