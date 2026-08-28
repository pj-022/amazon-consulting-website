import { cn } from "@/lib/utils";
import { brandThemes, type BrandThemeKey } from "@/lib/site-data";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  theme,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: BrandThemeKey;
  className?: string;
}) {
  const palette = theme ? brandThemes[theme] : null;

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "brand-pill mb-5",
            palette
              ? `${palette.bg} ${palette.border} ${palette.text}`
              : "border-accent/30 bg-accent/10 text-accent"
          )}
        >
          {eyebrow}
        </span>
      ) : null}
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
