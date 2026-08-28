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
        "link-roll group text-sm font-medium uppercase tracking-[0.18em]",
        light ? "text-primary-foreground" : "text-foreground",
        className
      )}
    >
      <span className="link-roll-inner">
        <span className="link-roll-line">{children}</span>
        <span className="link-roll-line link-roll-line-hover" aria-hidden>
          {children}
        </span>
      </span>
    </Link>
  );
}
