import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Exchange Listings – Use Case | uLiquid",
  description:
    "Maintain listing-ready order books for exchange listings with managed VPS execution, risk controls, and operator tooling.",
};

export default function ExchangeListingsUseCasePage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Use Case: Exchange Listings</h1>
          <p className="mt-4 text-lg text-muted">
            Exchanges care about stability: spreads, depth, and consistent behavior through volatility.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-semibold text-text">Listing readiness</h2>
            <p className="mt-3 text-sm text-muted">
              Set spread and depth targets, enforce risk guardrails, and maintain steady quoting across key
              sessions.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-text">Operational response</h2>
            <p className="mt-3 text-sm text-muted">
              Alerts and runner heartbeat monitoring help you respond quickly when exchanges or networks fail.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">Optional intelligence layers</h2>
        <p className="mt-3 text-sm text-muted">
          Use read-only DEX price feeds for validation and AI advisory for safer presets. No DEX trading and no AI
          auto-execution.
        </p>
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
