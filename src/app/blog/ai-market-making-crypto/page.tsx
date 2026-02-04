import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { JsonLd } from "@/components/JsonLd";

const title = "AI Market Making in Crypto (Advisory vs Auto-Trading) | uLiquid Blog";
const description =
  "A practical view of AI in crypto market making: what advisory systems can do, why auto-trading claims are risky, and how to stay operator-controlled.";

export const metadata: Metadata = {
  title,
  description,
};

export default function BlogAiMarketMakingCrypto() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: title,
          description,
          author: { "@type": "Organization", name: "uLiquid" },
          publisher: { "@type": "Organization", name: "uLiquid" },
          mainEntityOfPage: "https://uliquid.vip/blog/ai-market-making-crypto",
        }}
      />

      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">AI Market Making in Crypto</h1>
          <p className="mt-4 text-lg text-muted">
            “AI market making” is often used loosely. The important distinction is advisory vs autonomous trading.
            For token projects, trust comes from deterministic execution plus guardrails—not opaque automation.
          </p>
          <p className="mt-4 text-sm text-muted">
            Product overview: {" "}
            <Link href="/crypto-market-maker" className="text-accent-cyan font-semibold">
              Crypto Market Maker Software
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-semibold text-text">Advisory AI (useful and safe)</h2>
            <p className="mt-3 text-sm text-muted">
              Advisory systems analyze order books and execution stats to recommend better parameters: spreads,
              ladder distributions, and pacing. Operators review and apply suggestions intentionally.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-text">Autonomous AI trading (high risk)</h2>
            <p className="mt-3 text-sm text-muted">
              Auto-execution introduces hidden behavior changes, weak auditability, and unpredictable failure
              modes—especially during volatility.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">What uLiquid AI does (and does not do)</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-text">What it does</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
              <li>Analyzes market structure and execution outcomes.</li>
              <li>Recommends safer, more efficient configurations.</li>
              <li>Helps operators standardize presets across bots.</li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text">What it does NOT do</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
              <li>Never places trades.</li>
              <li>No autonomous strategy changes.</li>
              <li>No hidden execution logic.</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">Operator control is the feature</h2>
        <p className="mt-3 text-sm text-muted">
          Token projects need repeatable execution. Advisory AI is useful when it increases clarity without taking
          control away from the operator.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted">
          <Link href="/crypto-market-maker" className="text-accent-cyan font-semibold">
            Crypto Market Maker Software →
          </Link>
          <Link href="/product#ai-advisory" className="text-accent-cyan font-semibold">
            AI advisory module →
          </Link>
        </div>
      </Section>
    </div>
  );
}
