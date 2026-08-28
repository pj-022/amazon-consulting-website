import Link from "next/link";
import { cn } from "@/lib/utils";

export function LinkRoll({
  href,
  children,
  className,
  light = false,
}: {
  href: string;
  children: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "link-roll text-sm uppercase tracking-[0.18em]",
        light ? "text-primary-foreground" : "text-foreground",
        className
      )}
    >
      <span className="link-roll-text flex-col">
        <span>{children}</span>
        <span className={light ? "text-accent" : "text-accent"} aria-hidden>
          {children}
        </span>
      </span>
    </Link>
  );
}
