import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Token Projects – Use Case | uLiquid",
  description:
    "How token projects use uLiquid Market Maker for listing-ready liquidity with managed VPS, read-only DEX price feeds, and AI advisory.",
};

export default function TokenProjectsUseCasePage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Use Case: Token Projects</h1>
          <p className="mt-4 text-lg text-muted">
            Launch and maintain listing-ready liquidity with controlled spreads, runtime risk limits, and
            predictable operations.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-semibold text-text">What you optimize for</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
              <li>Stable spreads and continuous quoting</li>
              <li>Healthy depth (not just top-of-book)</li>
              <li>Operational reliability and fast incident response</li>
              <li>Risk controls that hold during volatility</li>
            </ul>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-text">How uLiquid helps</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
              <li>Dedicated managed VPS included</li>
              <li>Market making + fill-based volume execution</li>
              <li>Optional add-ons: DEX price feed (read-only) and AI advisory (read-only)</li>
              <li>Alerts, heartbeat monitoring, and backups</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">Trust boundaries</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-text">DEX Price Feed</h3>
            <p className="mt-3 text-sm text-muted">Read-only price reference. No on-chain trading.</p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text">AI Advisory</h3>
            <p className="mt-3 text-sm text-muted">Recommendations only. No autonomous trading.</p>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap items-center gap-4">
          <Button href="/pricing">View pricing</Button>
          <Button href="https://license-server.uliquid.vip/" variant="secondary">
            Go to License Manager
          </Button>
          <Link href="/crypto-market-maker" className="text-sm font-semibold text-accent-cyan">
            Crypto Market Maker Software →
          </Link>
        </div>
      </Section>
    </div>
  );
}
