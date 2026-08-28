import { Container } from "@/components/sections/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - VendorEdge Consulting",
  description: "Terms of service for VendorEdge Amazon Advertising Consulting services.",
};

export default function TermsPage() {
  return (
    <section className="py-20">
      <Container narrow>
        <h1 className="text-4xl font-medium tracking-tight text-foreground">
          Terms of Service
        </h1>
        <div className="prose-width mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            By using VendorEdge Consulting services, you agree to these Terms of Service.
          </p>
          <h2 className="text-lg font-medium text-foreground">Services</h2>
          <p>
            VendorEdge provides strategic consulting and advisory services for Amazon
            Vendor Central advertising programs. Direct account management requires a
            separate written engagement.
          </p>
          <h2 className="text-lg font-medium text-foreground">Client responsibilities</h2>
          <p>
            Clients are responsible for implementing recommendations, maintaining access
            to relevant systems, and providing accurate information for analysis.
          </p>
          <h2 className="text-lg font-medium text-foreground">Contact</h2>
          <p>
            For questions about these terms, contact{" "}
            <a href="mailto:hello@vendoredge.com" className="text-foreground underline">
              hello@vendoredge.com
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
