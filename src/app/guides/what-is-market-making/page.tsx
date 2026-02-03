import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "What Is Market Making? | uLiquid Guides",
  description:
    "A practical overview of crypto market making, spreads, liquidity ladders, and operator controls.",
  alternates: {
    canonical: "/guides/what-is-market-making",
  },
};

export default function WhatIsMarketMakingPage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">What Is Market Making?</h1>
          <p className="mt-4 text-lg text-muted">
            Market making provides continuous liquidity by placing buy and sell orders at controlled spreads.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-semibold text-text">Core concepts</h2>
            <p className="mt-3 text-sm text-muted">
              Spreads, depth ladders, and inventory skew are tuned to maintain stability and reduce volatility.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-text">Operator controls</h2>
            <p className="mt-3 text-sm text-muted">
              Risk limits, guardrails, and kill switches keep exposure in check.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">How uLiquid helps</h2>
        <p className="mt-3 text-sm text-muted">
          uLiquid Market Maker provides managed VPS deployment, configurable ladders, and telemetry for steady
          execution.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted">
          <Link href="/product#core-modules" className="text-accent-cyan font-semibold">
            Explore core modules →
          </Link>
          <Link href="/pricing" className="text-accent-cyan font-semibold">
            View pricing →
          </Link>
        </div>
      </Section>
    </div>
  );
}
