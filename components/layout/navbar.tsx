"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EditorialButton } from "@/components/editorial/editorial-button";
import { Container } from "@/components/sections/container";
import { company, navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-500",
        scrolled
          ? "border-border/80 bg-background/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
      initial={reduceMotion ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container className="flex h-16 items-center justify-between lg:h-[4.5rem]">
        <nav className="hidden items-center gap-0 lg:flex">
          {navItems.map((item, i) => {
            const active = pathname === item.href;
            return (
              <span key={item.href} className="flex items-center">
                <Link
                  href={item.href}
                  className={cn(
                    "px-1 text-sm transition-colors hover:text-accent",
                    active ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
                {i < navItems.length - 1 ? (
                  <span className="mx-2 text-muted-foreground/40">,</span>
                ) : null}
              </span>
            );
          })}
        </nav>

        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-center lg:static lg:translate-x-0"
        >
          <span className="block font-serif text-lg tracking-tight">{company.name}</span>
          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:block">
            Vendor Central Advisory
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <EditorialButton href="/contact" variant="primary" className="hidden px-5 py-2.5 text-xs sm:inline-flex">
            Book a consultation
          </EditorialButton>
          <Link
            href="/contact"
            className="inline-flex border border-foreground bg-foreground px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-background transition-colors hover:bg-accent hover:border-accent sm:hidden"
          >
            Contact
          </Link>
        </div>
      </Container>
    </motion.header>
  );
}
