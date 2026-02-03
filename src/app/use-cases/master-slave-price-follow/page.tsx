import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Master/Slave Price Follow – Use Case | uLiquid",
  description:
    "Follow external markets with master/slave price feeds while executing on your target exchange.",
  alternates: {
    canonical: "/use-cases/master-slave-price-follow",
  },
};

export default function MasterSlavePriceFollowPage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Master / Slave Price Follow</h1>
          <p className="mt-4 text-lg text-muted">
            Separate price discovery from execution to improve stability and reduce exchange constraints.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-semibold text-text">Problem</h2>
            <p className="mt-3 text-sm text-muted">
              Some venues restrict quoting or lack reliable price discovery for thin pairs.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-text">Solution</h2>
            <p className="mt-3 text-sm text-muted">
              Use a master venue (or DEX feed) for price reference and execute orders on the target exchange.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">How it works</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-text">Master reference</h3>
            <p className="mt-3 text-sm text-muted">
              Read-only price feed for discovery. No trading required on the master.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text">Slave execution</h3>
            <p className="mt-3 text-sm text-muted">
              Execute on the target exchange with spread and risk controls enforced.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">Advisory layer</h2>
        <p className="mt-3 text-sm text-muted">
          AI advisory suggests better spread and depth presets. It never executes trades.
        </p>
      </Section>

      <Section>
        <div className="flex flex-wrap items-center gap-4">
          <Button href="/pricing">View pricing</Button>
          <Button href="https://license-server.uliquid.vip/" variant="secondary">
            Go to License Manager
          </Button>
          <Link href="/product#price-follow" className="text-sm font-semibold text-accent-cyan">
            Price follow details →
          </Link>
        </div>
      </Section>
    </div>
  );
}
