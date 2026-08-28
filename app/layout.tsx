import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Amazon Advertising Consulting | Vendor Central Experts - VendorEdge",
  description:
    "Strategic Amazon advertising consulting for Vendor Central. Campaign optimization, budget planning, and performance audits for Sponsored Products, Brands & Display.",
  keywords: [
    "Amazon Advertising",
    "Vendor Central",
    "Amazon Consulting",
    "Sponsored Products",
    "Sponsored Brands",
    "Sponsored Display",
    "ROAS Optimization",
  ],
  authors: [{ name: "VendorEdge Consulting" }],
  metadataBase: new URL("https://vendoredge.com"),
  openGraph: {
    title: "Amazon Advertising Consulting | Vendor Central Experts",
    description:
      "Strategic Amazon advertising consulting for Vendor Central. Drive ROI through data-driven campaign optimization.",
    type: "website",
    locale: "en_US",
    siteName: "VendorEdge Consulting",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon Advertising Consulting | Vendor Central Experts",
    description:
      "Strategic Amazon advertising consulting for Vendor Central. Drive ROI through data-driven campaign optimization.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${newsreader.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "VendorEdge Consulting",
              description:
                "Strategic Amazon advertising consulting for Vendor Central",
              url: "https://vendoredge.com",
              email: "hello@vendoredge.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
              serviceType: [
                "Amazon Advertising Consulting",
                "Vendor Central Strategy",
                "Campaign Optimization",
                "Performance Audits",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
