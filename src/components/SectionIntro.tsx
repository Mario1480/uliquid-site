import { cn } from "@/lib/cn";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionIntroProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "mb-10 max-w-3xl",
        isCentered ? "mx-auto text-center" : "",
        className
      )}
    >
      {eyebrow ? (
        <p className="eyebrow-divider text-xs font-semibold uppercase tracking-[0.28em] text-accent-cyan">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("mt-4 text-3xl font-semibold text-text sm:text-4xl", isCentered ? "mx-auto" : "")}>
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
