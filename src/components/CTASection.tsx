import Link from "next/link";
import { Button } from "@/components/ui/Button";

type CTASectionProps = {
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  tertiaryLabel?: string;
  tertiaryHref?: string;
};

export function CTASection({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  tertiaryLabel,
  tertiaryHref,
}: CTASectionProps) {
  return (
    <section className="px-6 pb-20 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-border bg-gradient-to-r from-accent-cyan/10 via-accent-blue/10 to-accent-purple/10 p-10 text-center shadow-lg">
        <h2 className="text-3xl font-semibold text-text sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">
          {subtitle}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button href={primaryHref}>{primaryLabel}</Button>
          <Button href={secondaryHref} variant="secondary">
            {secondaryLabel}
          </Button>
        </div>
        {tertiaryLabel && tertiaryHref ? (
          <div className="mt-4">
            <Link href={tertiaryHref} className="text-sm font-semibold text-accent-cyan">
              {tertiaryLabel}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
