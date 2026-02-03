import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Exchange Listing Support – Use Case | uLiquid",
  description:
    "Prepare listing-ready order books with controlled spreads, reporting, and managed VPS execution.",
  alternates: {
    canonical: "/use-cases/exchange-listing-support",
  },
};

export default function ExchangeListingSupportPage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Exchange Listing Support</h1>
          <p className="mt-4 text-lg text-muted">
            Deliver consistent liquidity and reporting for exchange listing requirements.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-semibold text-text">Problem</h2>
            <p className="mt-3 text-sm text-muted">
              Exchanges expect stable spreads and predictable order books, which is hard to maintain manually.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-text">Solution</h2>
            <p className="mt-3 text-sm text-muted">
              Deploy managed VPS market making with risk controls, alerts, and reporting suited for listing teams.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">Why it works</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-text">Risk controls</h3>
            <p className="mt-3 text-sm text-muted">
              Enforce min balance, max deviation, and kill switch guardrails at runtime.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text">Reporting</h3>
            <p className="mt-3 text-sm text-muted">
              Produce listing-ready stability summaries for exchange contacts.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">Advisory intelligence</h2>
        <p className="mt-3 text-sm text-muted">
          AI advisory recommends better settings without executing trades. DEX feeds provide read-only price
          reference for validation.
        </p>
      </Section>

      <Section>
        <div className="flex flex-wrap items-center gap-4">
          <Button href="/pricing">View pricing</Button>
          <Button href="https://license-server.uliquid.vip/" variant="secondary">
            Go to License Manager
          </Button>
          <Link href="/product#core-modules" className="text-sm font-semibold text-accent-cyan">
            Explore modules →
          </Link>
        </div>
      </Section>
    </div>
  );
}
