import { Container } from "@/components/sections/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - VendorEdge Consulting",
  description: "Privacy policy for VendorEdge Amazon Advertising Consulting services.",
};

export default function PrivacyPage() {
  return (
    <section className="py-20">
      <Container narrow>
        <h1 className="text-4xl font-medium tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <div className="prose-width mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            VendorEdge Consulting respects your privacy and is committed to protecting
            your personal information. This policy explains how we collect, use, and
            safeguard data submitted through our website.
          </p>
          <h2 className="text-lg font-medium text-foreground">Information we collect</h2>
          <p>
            We collect information you provide directly, including name, email address,
            company information, and details shared through our contact forms.
          </p>
          <h2 className="text-lg font-medium text-foreground">How we use information</h2>
          <p>
            We use submitted information to respond to inquiries, provide consulting
            services, and communicate about our offerings.
          </p>
          <h2 className="text-lg font-medium text-foreground">Contact</h2>
          <p>
            Questions about this policy can be sent to{" "}
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
