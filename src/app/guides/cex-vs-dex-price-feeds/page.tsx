import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "CEX vs DEX Price Feeds | uLiquid Guides",
  description:
    "Understand how CEX and DEX prices differ and how read-only DEX feeds help validate low-cap markets.",
};

export default function CexVsDexPriceFeedsPage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">CEX vs DEX Price Feeds</h1>
          <p className="mt-4 text-lg text-muted">
            Combine centralized exchange prices with on-chain reference feeds to detect anomalies.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-semibold text-text">CEX price signals</h2>
            <p className="mt-3 text-sm text-muted">
              CEX prices reflect centralized order book activity but can be noisy for thin pairs.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-text">DEX price signals</h2>
            <p className="mt-3 text-sm text-muted">
              On-chain prices provide a reference layer for validation. Read-only, no DEX trading.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">Using both together</h2>
        <p className="mt-3 text-sm text-muted">
          DEX feeds can be used as a master reference or validation input to reduce pricing anomalies.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted">
          <Link href="/product#price-intelligence" className="text-accent-cyan font-semibold">
            Price intelligence →
          </Link>
          <Link href="/pricing" className="text-accent-cyan font-semibold">
            View pricing →
          </Link>
        </div>
      </Section>
    </div>
  );
}
