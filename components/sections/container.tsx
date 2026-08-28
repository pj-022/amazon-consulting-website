import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  narrow = false,
}: {
  className?: string;
  children: React.ReactNode;
  narrow?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8",
        narrow ? "max-w-3xl" : "max-w-[88rem]",
        className
      )}
    >
      {children}
    </div>
  );
}
