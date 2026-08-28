import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - VendorEdge Consulting",
  description: "Terms of service for VendorEdge Amazon Advertising Consulting services.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-8">Terms of Service</h1>
            <Card>
              <CardContent className="p-8 prose prose-lg max-w-none">
                <p className="text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                <p>
                  Welcome to VendorEdge Consulting. By using our services, you agree
                  to these Terms of Service.
                </p>
                <h2>Services</h2>
                <p>
                  VendorEdge provides strategic consulting and advisory services for
                  Amazon Vendor Central advertising programs. We do not directly
                  manage advertising accounts without explicit engagement agreements.
                </p>
                <h2>Client Responsibilities</h2>
                <p>
                  Clients are responsible for implementing recommendations,
                  maintaining access to their Amazon Vendor Central accounts, and
                  providing accurate information for analysis.
                </p>
                <h2>Contact</h2>
                <p>
                  For questions about these Terms, please contact us at
                  hello@vendoredge.com
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
