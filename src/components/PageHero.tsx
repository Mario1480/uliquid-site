import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { SurfacePanel } from "@/components/SurfacePanel";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions: ReactNode;
  aside?: ReactNode;
  backgroundVariant?: "brand" | "desk" | "market" | "neutral";
};

const backgroundClasses = {
  brand:
    "before:bg-[radial-gradient(circle_at_20%_18%,hsl(var(--brand-secondary)/0.16),transparent_24%),radial-gradient(circle_at_80%_0%,hsl(var(--brand-primary)/0.18),transparent_30%)]",
  desk:
    "before:bg-[radial-gradient(circle_at_24%_14%,hsl(var(--brand-secondary)/0.18),transparent_26%),radial-gradient(circle_at_84%_8%,hsl(var(--brand-primary)/0.12),transparent_28%)]",
  market:
    "before:bg-[radial-gradient(circle_at_20%_16%,rgba(245,158,11,0.18),transparent_24%),radial-gradient(circle_at_82%_10%,hsl(var(--brand-primary)/0.14),transparent_30%)]",
  neutral:
    "before:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--text)/0.06),transparent_28%)]",
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  aside,
  backgroundVariant = "brand",
}: PageHeroProps) {
  return (
    <Section className="pt-16 sm:pt-20">
      <SurfacePanel
        tone="accent"
        className={cn(
          "before:pointer-events-none before:absolute before:inset-0 before:content-[''] before:opacity-100 after:pointer-events-none after:absolute after:inset-x-10 after:bottom-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent after:content-['']",
          backgroundClasses[backgroundVariant]
        )}
      >
        <div className={cn("grid gap-10 lg:items-center", aside ? "lg:grid-cols-[1.05fr_0.95fr]" : "")}>
          <div className="relative z-10 max-w-3xl">
            <p className="eyebrow-divider text-xs font-semibold uppercase tracking-[0.3em] text-accent-cyan">
              {eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-text sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
          </div>
          {aside ? <div className="relative z-10">{aside}</div> : null}
        </div>
      </SurfacePanel>
    </Section>
  );
}
