"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Container } from "@/components/sections/container";
import { company, navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const activeColors = [
  "bg-[#FFF0E8] text-[#C2410C]",
  "bg-[#E8F4FF] text-[#0369A1]",
  "bg-[#F3EEFF] text-[#6D28D9]",
  "bg-[#E8FFF5] text-[#047857]",
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/75 backdrop-blur-xl">
      <div className="h-1 w-full bg-gradient-to-r from-[#FF6B35] via-[#8B5CF6] to-[#0EA5E9]" />
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-[4.25rem]">
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6B35] via-[#F43F5E] to-[#8B5CF6] text-xs font-bold text-white shadow-md shadow-[#FF6B35]/30 transition-transform group-hover:scale-105">
              VE
            </span>
            <div className="leading-none">
              <span className="block text-sm font-bold tracking-tight text-foreground">
                {company.name}
              </span>
              <span className="hidden text-[11px] font-medium text-muted-foreground sm:block">
                Vendor Central Advisory
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item, index) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-semibold transition-all",
                    active
                      ? activeColors[index % activeColors.length]
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={cn(buttonVariants(), "btn-gradient h-9 border-0 px-5 font-semibold")}
            >
              Book a consultation
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white text-foreground lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </Container>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-[min(100vw-2rem,24rem)] p-6">
          <div className="mt-8 flex flex-col gap-1">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-3 text-base font-semibold",
                  activeColors[index % activeColors.length]
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants(), "btn-gradient mt-4 h-11 border-0 font-semibold")}
            >
              Book a consultation
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
