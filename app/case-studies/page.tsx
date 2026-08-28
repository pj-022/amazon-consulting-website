import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/sections/container";
import { caseStudies } from "@/lib/site-data";

export default function CaseStudiesPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/30">
        <Container className="py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Case studies
            </p>
            <h1 className="mt-5 text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Outcomes from recent Vendor Central engagements
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Each engagement below reflects a distinct commercial challenge — declining
              efficiency, program launch, or seasonal event execution — and the operating
              changes that drove measurable improvement.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-24">
        <Container className="space-y-24">
          {caseStudies.map((study, index) => (
            <article
              key={study.slug}
              className="grid gap-10 border-t border-border pt-16 first:border-t-0 first:pt-0 lg:grid-cols-2 lg:gap-16"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {study.category} · {study.client}
                </p>
                <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                  {study.headline}
                </h2>

                <div className="mt-8 space-y-8">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Challenge
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Approach
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {study.approach.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="rounded-xl border border-border bg-card p-8">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Results
                  </h3>
                  <div className="mt-5 grid grid-cols-2 gap-4">
                    {study.results.map((result) => (
                      <div
                        key={result.label}
                        className="rounded-lg border border-border bg-background p-4"
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
                      <span className="text-muted-foreground"> · {study.role}</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="border-t border-border bg-muted/30 py-20">
        <Container>
          <div className="grid gap-8 rounded-2xl border border-border bg-card p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:p-12">
            <div>
              <h2 className="text-3xl font-medium tracking-tight text-foreground">
                Want similar outcomes for your program?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                We’ll assess your current advertising setup and recommend the highest-impact
                starting point for your team.
              </p>
            </div>
            <Link
              href="/contact"
              className={buttonVariants({ size: "lg", className: "h-11 w-full sm:w-auto" })}
            >
              Schedule consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
