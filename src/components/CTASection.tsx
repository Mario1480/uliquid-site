import Link from "next/link";
import { SectionIntro } from "@/components/SectionIntro";
import { SurfacePanel } from "@/components/SurfacePanel";
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
      <div className="mx-auto w-full max-w-7xl">
        <SurfacePanel tone="accent" className="px-6 py-10 text-center sm:px-10 sm:py-12">
          <SectionIntro title={title} description={subtitle} align="center" className="mb-0" />
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button href={primaryHref}>{primaryLabel}</Button>
          <Button href={secondaryHref} variant="secondary">
            {secondaryLabel}
          </Button>
        </div>
        {tertiaryLabel && tertiaryHref ? (
          <div className="mt-4">
            <Link href={tertiaryHref} className="text-sm font-semibold text-accent-cyan hover:text-text">
              {tertiaryLabel}
            </Link>
          </div>
        ) : null}
        </SurfacePanel>
      </div>
    </section>
  );
}
