import { Marquee } from "@/components/editorial/marquee";
import { NarrativeSection } from "@/components/editorial/narrative-section";
import { HomeHero } from "@/components/home/home-hero";
import { CtaSection, LanguagesSection } from "@/components/home/languages-cta";
import { MetricsEditorial } from "@/components/home/metrics-editorial";
import { ServicesEditorial } from "@/components/home/services-editorial";
import { WorkEditorial } from "@/components/home/work-editorial";
import {
  capabilities,
  clientCategories,
  narrativeSections,
  processSteps,
} from "@/lib/site-data";
import { Container } from "@/components/sections/container";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <Marquee items={capabilities} colorful />

      {narrativeSections.map((section, index) => (
        <NarrativeSection
          key={section.number}
          {...section}
          inverted={index === 1}
        />
      ))}

      <MetricsEditorial />

      <section className="section-ink py-16 lg:py-20">
        <Container>
          <p className="editorial-label-light text-center">
            Categories we&apos;ve advised
          </p>
        </Container>
        <div className="mt-8">
          <Marquee items={clientCategories} reverse light />
        </div>
      </section>

      <ServicesEditorial />

      <section className="section-cream border-y border-border py-24 lg:py-32">
        <Container>
          <p className="editorial-label">How we work</p>
          <h2 className="display-md mt-6 max-w-3xl text-foreground">
            A clear operating rhythm from audit to optimization
          </h2>
          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="border-t border-border pt-6">
                <p className="num-display">{step.step}</p>
                <h3 className="mt-4 text-lg font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <WorkEditorial />
      <LanguagesSection />
      <CtaSection />
    </>
  );
}
