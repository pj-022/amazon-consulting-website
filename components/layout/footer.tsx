import Link from "next/link";
import { Container } from "@/components/sections/container";
import { LinkRoll } from "@/components/editorial/link-roll";
import { company, navItems } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="section-ink border-t border-on-ink/10">
      <Container className="py-20 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="display-md max-w-lg text-on-ink">
              We want to make important work, have a vision, and see it through.
            </h2>
            <div className="mt-10">
              <LinkRoll href="/contact" light>
                Let&apos;s talk
              </LinkRoll>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="editorial-label-light">Navigate</p>
              <ul className="mt-4 space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-on-ink/65 transition-colors hover:text-on-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="editorial-label-light">Enquiries</p>
              <a
                href={`mailto:${company.email}`}
                className="mt-4 block text-sm text-on-ink/85 transition-colors hover:text-accent"
              >
                {company.email}
              </a>
              <p className="mt-6 text-xs text-on-ink/45">
                {company.hours}
              </p>
            </div>
          </div>
        </div>

        <div className="rule-h-light mt-16" />

        <div className="mt-8 flex flex-col gap-4 text-xs text-on-ink/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-on-ink/75">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-on-ink/75">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
