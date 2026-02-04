import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { JsonLd } from "@/components/JsonLd";

const title = "Market Maker SaaS vs Custom Bots | uLiquid Blog";
const description =
  "Compare market maker SaaS with custom trading bots: operations, risk enforcement, uptime, and what token projects should optimize for.";

export const metadata: Metadata = {
  title,
  description,
};

export default function BlogSaasVsCustomBots() {
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
          mainEntityOfPage: "https://uliquid.vip/blog/market-maker-saas-vs-custom-bots",
        }}
      />

      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Market Maker SaaS vs Custom Bots</h1>
          <p className="mt-4 text-lg text-muted">
            Token projects typically start with custom bots because it feels flexible. The problem is that most
            failures are operational, not algorithmic. This comparison focuses on what breaks in production.
          </p>
          <p className="mt-4 text-sm text-muted">
            For the product overview, see {" "}
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
            <h2 className="text-2xl font-semibold text-text">Custom bots (common tradeoffs)</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
              <li>Fast iteration early, but deployments become inconsistent over time.</li>
              <li>Risk rules often live in code paths that are easy to bypass.</li>
              <li>Monitoring and incident response is usually an afterthought.</li>
              <li>Key management and permissions can become messy across operators.</li>
            </ul>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-text">Market maker SaaS (what you buy)</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
              <li>Predictable infrastructure and repeatable deployments.</li>
              <li>Runtime enforcement of limits and guardrails.</li>
              <li>Alerting, heartbeat monitoring, and backups.</li>
              <li>License gating for features and operational limits.</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">The key question: control vs automation</h2>
        <p className="mt-3 text-sm text-muted">
          A good market maker SaaS keeps trading deterministic and operator-controlled while reducing operational
          overhead. Intelligence layers should not silently change execution.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-text">DEX price feed</h3>
            <p className="mt-3 text-sm text-muted">Read-only reference. No on-chain trading.</p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text">AI advisory</h3>
            <p className="mt-3 text-sm text-muted">Recommendations only. Never executes trades.</p>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">Where uLiquid fits</h2>
        <p className="mt-3 text-sm text-muted">
          uLiquid is a managed crypto market maker SaaS with a dedicated VPS included. It emphasizes deterministic
          execution plus guardrails, and offers optional add-ons for price intelligence and AI advisory.
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
