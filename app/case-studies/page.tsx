import { Marquee } from "@/components/editorial/marquee";
import { LinkRoll } from "@/components/editorial/link-roll";
import { Container } from "@/components/sections/container";
import { caseStudies } from "@/lib/site-data";

export default function CaseStudiesPage() {
  return (
    <>
      <section className="grain section-warm border-b border-border">
        <Container className="py-24 lg:py-32">
          <p className="editorial-label">Case studies</p>
          <h1 className="display-lg mt-8 max-w-4xl uppercase text-foreground">
            Outcomes from recent{" "}
            <em className="italic normal-case text-accent">Vendor Central</em>{" "}
            engagements
          </h1>
          <p className="body-editorial mt-8 max-w-2xl">
            Each engagement reflects a distinct commercial challenge and the
            operating changes that drove measurable improvement.
          </p>
        </Container>
      </section>

      <section className="section-cream">
        <Container className="divide-y divide-border">
          {caseStudies.map((study, index) => (
            <article
              key={study.slug}
              className="grid gap-12 py-16 lg:grid-cols-2 lg:gap-20 lg:py-24"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {study.category} · {study.client}
                </p>
                <h2 className="display-md mt-6 text-foreground">
                  {study.headline}
                </h2>

                <div className="mt-12 space-y-10">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Challenge
                    </p>
                    <p className="body-editorial mt-4">{study.challenge}</p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Approach
                    </p>
                    <ul className="mt-4 space-y-3">
                      {study.approach.map((item) => (
                        <li
                          key={item}
                          className="flex gap-4 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-px w-6 shrink-0 bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="border border-border bg-background p-8 lg:p-10">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Results
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-px bg-border">
                    {study.results.map((result) => (
                      <div key={result.label} className="bg-cream p-5">
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                          {result.label}
                        </p>
                        <p className="mt-2 font-serif text-2xl tracking-tight text-foreground">
                          {result.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <figure className="mt-10 border-t border-border pt-10">
                    <blockquote className="font-serif text-lg italic leading-relaxed text-foreground/80">
                      &ldquo;{study.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-6 text-sm">
                      <span className="font-medium text-foreground">
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
          ))}
        </Container>
      </section>

      <Marquee
        items={caseStudies.map((s) => s.category)}
        speed="slow"
      />

      <section className="section-ink grain py-24 lg:py-32">
        <Container className="text-center">
          <h2 className="display-md text-primary-foreground">
            Want similar outcomes for your program?
          </h2>
          <p className="body-editorial-light mx-auto mt-6 max-w-xl">
            We&apos;ll assess your current advertising setup and recommend the
            highest-impact starting point for your team.
          </p>
          <div className="mt-10">
            <LinkRoll href="/contact" light>
              Schedule consultation
            </LinkRoll>
          </div>
        </Container>
      </section>
    </>
  );
}
