import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function EditorialButton({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "editorial-btn group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.16em]",
        variant === "primary" && "editorial-btn-primary",
        variant === "outline" && "editorial-btn-outline",
        variant === "ghost" && "editorial-btn-ghost",
        className
      )}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
