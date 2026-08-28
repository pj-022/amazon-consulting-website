import Link from "next/link";
import { Container } from "@/components/sections/container";
import { company, navItems, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1e1b4b] text-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FF6B35] via-[#8B5CF6] to-[#0EA5E9]" />
      <div className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-[#8B5CF6]/20 blur-3xl" />
      <div className="absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-[#FF6B35]/15 blur-3xl" />

      <Container className="relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#8B5CF6] text-xs font-bold">
                VE
              </span>
              <span className="text-lg font-bold">{company.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Strategic advisory for Amazon Vendor Central advertising programs.
              Campaign architecture, budget planning, audits, and executive
              reporting for 1P brands.
            </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-5 inline-block text-sm font-semibold text-[#FBBF24] hover:underline"
            >
              {company.email}
            </a>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FBBF24]">
              Company
            </p>
            <ul className="mt-4 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7EC8FF]">
              Services
            </p>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6EE7B7]">
              Coverage
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>Sponsored Products</li>
              <li>Sponsored Brands</li>
              <li>Sponsored Display</li>
              <li>US Vendor Central (1P)</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
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
