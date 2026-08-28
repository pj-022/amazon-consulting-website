import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - VendorEdge Consulting",
  description: "Privacy policy for VendorEdge Amazon Advertising Consulting services.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
            <Card>
              <CardContent className="p-8 prose prose-lg max-w-none">
                <p className="text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                <p>
                  VendorEdge Consulting respects your privacy and is committed to
                  protecting your personal information. This Privacy Policy explains
                  how we collect, use, and safeguard your data.
                </p>
                <h2>Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, including name,
                  email address, company information, and any other details you
                  choose to share through our contact forms or communications.
                </p>
                <h2>How We Use Your Information</h2>
                <p>
                  We use the information we collect to respond to your inquiries,
                  provide consulting services, and communicate about our services.
                </p>
                <h2>Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us
                  at hello@vendoredge.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
