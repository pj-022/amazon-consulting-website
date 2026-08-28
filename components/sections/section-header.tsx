import { cn } from "@/lib/utils";
import { brandThemes, type BrandThemeKey } from "@/lib/site-data";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: BrandThemeKey;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function AccentCard({
  theme,
  className,
  children,
}: {
  theme: BrandThemeKey;
  className?: string;
  children: React.ReactNode;
}) {
  const palette = brandThemes[theme];
  return (
    <div
      className={cn(
        "surface-card border-l-4 pl-6",
        palette.border,
        className
      )}
    >
      {children}
    </div>
  );
}
