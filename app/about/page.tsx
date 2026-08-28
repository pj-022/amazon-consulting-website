import { Marquee } from "@/components/editorial/marquee";
import { LinkRoll } from "@/components/editorial/link-roll";
import { NarrativeSection } from "@/components/editorial/narrative-section";
import { MetricsEditorial } from "@/components/home/metrics-editorial";
import { Container } from "@/components/sections/container";
import { narrativeSections, processSteps } from "@/lib/site-data";

const principles = [
  {
    title: "Vendor Central depth",
    description:
      "We specialize in 1P programs — not generic marketplace management. That focus shapes every recommendation.",
  },
  {
    title: "Strategy before tactics",
    description:
      "We define the operating model first: structure, budget governance, and KPIs. Execution follows from clarity.",
  },
  {
    title: "Transparent partnership",
    description:
      "You get direct access to senior advisors, plain-language reporting, and recommendations your team can implement.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="grain section-warm border-b border-border">
        <Container className="py-24 lg:py-32">
          <p className="editorial-label">About</p>
          <h1 className="display-lg mt-8 max-w-4xl uppercase text-foreground">
            Senior advisory for brands that treat Amazon as a{" "}
            <em className="italic normal-case text-accent">core channel</em>
          </h1>
          <p className="body-editorial mt-8 max-w-2xl">
            VendorEdge was built for Vendor Central teams who need more than
            campaign maintenance. We help marketing and e-commerce leaders make
            better advertising decisions with structure, measurement, and
            accountability.
          </p>
        </Container>
      </section>

      <NarrativeSection {...narrativeSections[0]} />

      <MetricsEditorial />

      <section className="section-cream py-24 lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="editorial-label">Our approach</p>
              <h2 className="display-md mt-6 text-foreground">
                Consulting with clarity and commercial focus
              </h2>
            </div>
            <div className="space-y-0 divide-y divide-border border-y border-border">
              {principles.map((item, index) => (
                <div key={item.title} className="py-8">
                  <p className="num-display">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-xl font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section
        id="process"
        className="section-ink grain border-y border-primary-foreground/10 py-24 lg:py-32"
      >
        <Container>
          <p className="editorial-label-light">Engagement model</p>
          <h2 className="display-md mt-6 max-w-3xl text-primary-foreground">
            How engagements typically run
          </h2>
          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="border-t border-primary-foreground/15 pt-6"
              >
                <p className="num-display">{step.step}</p>
                <h3 className="mt-4 text-lg text-primary-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/55">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Marquee
        items={[
          "Trust",
          "Referrals",
          "Partnership",
          "Consistency",
          "Senior advisors",
          "Long-term",
        ]}
      />

      <section className="section-warm py-24 lg:py-32">
        <Container className="text-center">
          <h2 className="display-md text-foreground">
            Ready to bring structure to your advertising program?
          </h2>
          <p className="body-editorial mx-auto mt-6 max-w-xl">
            Start with a consultation. We&apos;ll review your current setup and
            outline practical next steps.
          </p>
          <div className="mt-10">
            <LinkRoll href="/contact">Book a consultation</LinkRoll>
          </div>
        </Container>
      </section>
    </>
  );
}
