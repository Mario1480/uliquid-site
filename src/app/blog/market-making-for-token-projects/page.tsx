import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { JsonLd } from "@/components/JsonLd";

const title = "Market Making for Token Projects | uLiquid Blog";
const description =
  "A practical playbook for token projects: defining liquidity goals, controlling risk, and operating a market maker with managed infrastructure.";

export const metadata: Metadata = {
  title,
  description,
};

export default function BlogMarketMakingForTokenProjects() {
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
          mainEntityOfPage: "https://uliquid.vip/blog/market-making-for-token-projects",
        }}
      />

      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Market Making for Token Projects</h1>
          <p className="mt-4 text-lg text-muted">
            Token teams often treat market making as a feature. In practice, it is an operation: budgets,
            guardrails, and a response plan. This guide focuses on what makes liquidity “listing-ready.”
          </p>
          <p className="mt-4 text-sm text-muted">
            If you’re evaluating tooling, start with {" "}
            <Link href="/crypto-market-maker" className="text-accent-cyan font-semibold">
              Crypto Market Maker Software
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">1) Define goals (not vanity metrics)</h2>
        <p className="mt-3 text-sm text-muted">
          Clarify what “good liquidity” means for your listing: target spread ranges, minimum depth at key
          distances, and acceptable volatility response. Avoid optimizing for reported volume alone.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">2) Choose a reference price model</h2>
        <p className="mt-3 text-sm text-muted">
          For thin pairs, a single CEX price can be misleading. Using cross-source validation (CEX + read-only DEX
          feeds) helps detect anomalies and reduces unwanted drift.
        </p>
        <p className="mt-3 text-sm text-muted">
          Learn more: {" "}
          <Link href="/guides/cex-vs-dex-price-feeds" className="text-accent-cyan font-semibold">
            CEX vs DEX price feeds
          </Link>
          .
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">3) Build the ladder (depth matters)</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-text">Multiple levels</h3>
            <p className="mt-3 text-sm text-muted">
              A multi-level ladder creates consistent depth and reduces the impact of single fills.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text">Distributions and jitter</h3>
            <p className="mt-3 text-sm text-muted">
              Controlled randomness reduces pattern predictability without losing deterministic rules.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">4) Enforce risk limits at runtime</h2>
        <p className="mt-3 text-sm text-muted">
          Limits are what prevent a bad day from becoming catastrophic: min balance guard, max deviation, max open
          orders, and daily loss limits. Make sure these are enforced by the runtime, not just “configured.”
        </p>
        <p className="mt-3 text-sm text-muted">
          See details: {" "}
          <Link href="/security" className="text-accent-cyan font-semibold">
            Security & access control
          </Link>
          .
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">5) Use volume bots carefully</h2>
        <p className="mt-3 text-sm text-muted">
          If you need volume execution, prefer fill-based counting: real fills only, with pacing controls. Avoid
          cancel-based inflation.
        </p>
        <p className="mt-3 text-sm text-muted">
          Read guide: {" "}
          <Link href="/guides/fill-based-volume-counting" className="text-accent-cyan font-semibold">
            Fill-based volume counting
          </Link>
          .
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">6) Operate like production software</h2>
        <p className="mt-3 text-sm text-muted">
          Liquidity is production. You need monitoring, alerts, backups, and a predictable deployment environment.
          Managed VPS delivery reduces drift and shortens setup time.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">Where uLiquid fits</h2>
        <p className="mt-3 text-sm text-muted">
          uLiquid provides managed VPS deployment with deterministic trading modules plus optional intelligence.
          DEX price feed is read-only. AI is advisory only.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted">
          <Link href="/crypto-market-maker" className="text-accent-cyan font-semibold">
            Crypto Market Maker Software →
          </Link>
          <Link href="/pricing" className="text-accent-cyan font-semibold">
            Pricing →
          </Link>
        </div>
      </Section>
    </div>
  );
}
