import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Low-Cap Liquidity – Use Case | uLiquid",
  description:
    "How uLiquid Market Maker stabilizes low-cap liquidity with managed VPS, DEX price feeds, and advisory AI.",
};

export default function LowCapLiquidityPage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Low-Cap Liquidity</h1>
          <p className="mt-4 text-lg text-muted">
            Stabilize thin order books with controlled spreads, DEX price reference, and operator-led execution.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-semibold text-text">Problem</h2>
            <p className="mt-3 text-sm text-muted">
              Low-cap tokens suffer from erratic pricing, wide spreads, and inconsistent market depth that can
              disrupt listings.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-text">Solution</h2>
            <p className="mt-3 text-sm text-muted">
              Use market making ladders with risk limits, plus DEX price feeds as a read-only reference to
              validate CEX pricing.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">Key capabilities</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-text">DEX Price Feed (read-only)</h3>
            <p className="mt-3 text-sm text-muted">
              Use on-chain reference prices for sanity checks. No on-chain trading.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text">AI Advisory</h3>
            <p className="mt-3 text-sm text-muted">
              Recommendations only. AI never executes trades.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">Operational workflow</h2>
        <p className="mt-3 text-sm text-muted">
          Start with pricing guardrails, connect trade-only API keys, and tune spreads based on volume and
          volatility. Monitor fills and inventory with alerts.
        </p>
      </Section>

      <Section>
        <div className="flex flex-wrap items-center gap-4">
          <Button href="/pricing">View pricing</Button>
          <Button href="https://license-server.uliquid.vip/" variant="secondary">
            Go to License Manager
          </Button>
          <Link href="/product#price-intelligence" className="text-sm font-semibold text-accent-cyan">
            Learn about price intelligence →
          </Link>
        </div>
      </Section>
    </div>
  );
}
