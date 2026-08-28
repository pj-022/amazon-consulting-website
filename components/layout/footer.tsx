import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Mail, ExternalLink } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Campaign Strategy", href: "/services#strategy" },
    { label: "Budget Allocation", href: "/services#budget" },
    { label: "Performance Audits", href: "/services#audits" },
    { label: "Reporting & Analytics", href: "/services#reporting" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Services Overview", href: "/services" },
    { label: "Our Process", href: "/about#process" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary/98 to-primary/95 text-white mt-auto relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,153,0,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,153,0,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <span className="text-3xl font-bold text-white group-hover:text-accent transition-colors">
                VendorEdge
              </span>
            </Link>
            <p className="text-white/80 mb-8 max-w-md text-lg leading-relaxed">
              Expert Amazon Advertising consulting for Vendor Central. Drive ROI
              through strategic campaign optimization and data-driven insights.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:hello@vendoredge.com"
                className="p-3 bg-white/10 rounded-full hover:bg-accent transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/vendoredge"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-accent transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white/90">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-accent mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white/90">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-accent mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white/90">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-accent mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/20" />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} VendorEdge Consulting. All rights
            reserved.
          </p>
          <div className="flex space-x-8 text-sm">
            <Link
              href="/privacy"
              className="text-white/60 hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/60 hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
