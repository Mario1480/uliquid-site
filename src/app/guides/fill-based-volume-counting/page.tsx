import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Fill-Based Volume Counting | uLiquid Guides",
  description:
    "Why real fills matter and how fill-based volume bots avoid artificial volume or cancel-based inflation.",
};

export default function FillBasedVolumeCountingPage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Fill-Based Volume Counting</h1>
          <p className="mt-4 text-lg text-muted">
            Real fills only. No artificial volume, no cancel-based manipulation.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-semibold text-text">Why it matters</h2>
            <p className="mt-3 text-sm text-muted">
              Exchanges evaluate real trading activity. Fill-based counting provides accurate, auditable volume.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-text">Operator controls</h2>
            <p className="mt-3 text-sm text-muted">
              Configure daily notional, trade sizing, and pacing with runtime risk limits.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">Related modules</h2>
        <p className="mt-3 text-sm text-muted">
          Use fill-based volume in tandem with price follow and price support for listing readiness.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted">
          <Link href="/product#volume-bot" className="text-accent-cyan font-semibold">
            Volume bot →
          </Link>
          <Link href="/pricing" className="text-accent-cyan font-semibold">
            View pricing →
          </Link>
        </div>
      </Section>
    </div>
  );
}
