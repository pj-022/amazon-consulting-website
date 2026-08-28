import Link from "next/link";
import { Container } from "@/components/sections/container";
import { company, navItems, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-xs font-bold">
                VE
              </span>
              <span className="text-lg font-semibold">{company.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Strategic advisory for Amazon Vendor Central advertising programs.
              Campaign architecture, budget planning, audits, and executive
              reporting for 1P brands.
            </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-5 inline-block text-sm font-medium text-accent hover:underline"
            >
              {company.email}
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/50">
              Company
            </p>
            <ul className="mt-4 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/50">
              Services
            </p>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/50">
              Coverage
            </p>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li>Sponsored Products</li>
              <li>Sponsored Brands</li>
              <li>Sponsored Display</li>
              <li>US Vendor Central (1P)</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
