import Link from "next/link";
import { AppScreenshotPlaceholder } from "@/components/AppScreenshotPlaceholder";
import { Section } from "@/components/ui/Section";
import { Tabs } from "@/components/Tabs";
import { Card } from "@/components/ui/Card";
import { FeatureGrid } from "@/components/FeatureGrid";
import { FeatureMatrixTable } from "@/components/FeatureMatrixTable";
import { JsonLd } from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features – uLiquid Market Maker",
  description:
    "Market making, fill-based volume bot, price follow (master/slave), price support, DEX price feed add-on and AI advisory.",
  alternates: {
    canonical: "/product",
  },
  openGraph: {
    title: "Features – uLiquid Market Maker",
    description:
      "Market making, fill-based volume bot, price follow (master/slave), price support, DEX price feed add-on and AI advisory.",
    url: "https://uliquid.vip/product",
    type: "website",
    siteName: "uLiquid Market Maker",
    images: ["/logo.png"],
  },
};

const pageDescription =
  "Market making, fill-based volume bot, price follow (master/slave), price support, DEX price feed add-on and AI advisory.";

const tabItems = [
  {
    title: "Dashboard",
    content: (
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <AppScreenshotPlaceholder title="Dashboard – Health & KPIs" />
        <ul className="space-y-3 text-sm text-muted">
          <li>Status overview for all pairs and venues.</li>
          <li>KPI tiles for spread, inventory, and uptime.</li>
          <li>Alert feed for fills, disconnects, and risk triggers.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Strategy",
    content: (
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <AppScreenshotPlaceholder title="Strategy Editor" />
        <ul className="space-y-3 text-sm text-muted">
          <li>Set base spread, layers, and refresh intervals.</li>
          <li>Adjust depth distribution and quote placement.</li>
          <li>Guardrails for volatility and minimum distance.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Risk",
    content: (
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <AppScreenshotPlaceholder title="Risk Controls" />
        <ul className="space-y-3 text-sm text-muted">
          <li>Exposure caps per asset and per venue.</li>
          <li>Drawdown thresholds with auto-pausing controls.</li>
          <li>Kill switch for instant shutdown across pairs.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Reports",
    content: (
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <AppScreenshotPlaceholder title="Listing Reports" />
        <ul className="space-y-3 text-sm text-muted">
          <li>Stability reports tailored for listing teams.</li>
          <li>Exports and summaries for internal review.</li>
          <li>Shareable metrics for ongoing exchange check-ins.</li>
        </ul>
      </div>
    ),
  },
];

export default function ProductPage() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "uLiquid Market Maker",
          applicationCategory: "FinancialTradingSoftware",
          operatingSystem: "Linux (Managed VPS)",
          url: "https://uliquid.vip/product",
          description: pageDescription,
          offers: {
            "@type": "Offer",
            url: "https://license-server.uliquid.vip/",
          },
        }}
      />
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">uLiquid Market Maker Features</h1>
          <p className="mt-4 text-lg text-muted">
            uLiquid Market Maker is a modular trading system designed for professional market-making
            operations. It combines automated execution, strict risk control, and production-grade
            infrastructure — without sacrificing custody or transparency.
          </p>
        </div>
        <div className="mt-10">
          <Tabs items={tabItems} />
        </div>
      </Section>

      <Section>
        <FeatureGrid
          title="Core Modules"
          subtitle="Operator-focused tooling for managed liquidity programs."
          items={[
            {
              title: "Market Making",
              description:
                "Automated bid/ask liquidity with full control over ladder shape, spread, randomness, and inventory bias.",
              id: "market-making",
            },
            {
              title: "Volume Bot (Fill-Based)",
              description: "Execute target daily volume using real trades only, with configurable trade sizes and pacing.",
              id: "volume-bot",
            },
            {
              title: "Price Follow (Master / Slave)",
              description: "Separate price discovery from execution. Follow external markets without placing orders on the master exchange.",
              id: "price-follow",
            },
            {
              title: "Price Support (budgeted)",
              description: "Maintain a price floor using a dedicated budget. Includes auto-stop and notifications when funds are depleted.",
              id: "price-support",
            },
            {
              title: "Manual Trading (role-gated)",
              description: "Place manual limit or market orders directly from the UI. Protected by role permissions and re-authentication.",
              id: "manual-trading",
            },
            {
              title: "Production Operations",
              description: "Dockerized deployment, health checks, runner heartbeat monitoring, and automated database backups.",
              id: "production-ops",
            },
          ]}
        />
        <div className="mt-10">
          <FeatureMatrixTable />
        </div>
      </Section>

      <Section id="price-intelligence">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold text-text">Price Intelligence (CEX + DEX)</h2>
            <p className="mt-4 text-muted">
              Combine centralized exchange prices with on-chain DEX price feeds. Use DEX data as a master
              reference, or as a safety validation layer.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              <li>Read-only DEX price feed (no DEX trading)</li>
              <li>Ideal for low-cap and illiquid pairs</li>
              <li>Detect CEX anomalies with cross-source validation</li>
            </ul>
          </div>
          <Card className="border-accent-blue/40 bg-surface/60">
            <h3 className="text-lg font-semibold text-text">What it is / What it is not</h3>
            <p className="mt-3 text-sm text-muted">DEX Price Feed is read-only. No on-chain trading.</p>
          </Card>
        </div>
      </Section>

      <Section id="ai-advisory">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold text-text">AI Advisory (Human-in-the-loop)</h2>
            <p className="mt-4 text-muted">
              uLiquid AI reviews market structure, order books, and execution stats to recommend better
              parameters.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              <li>Read-only recommendations</li>
              <li>No autonomous trading</li>
              <li>Use suggestions as presets</li>
            </ul>
          </div>
          <Card className="border-accent-blue/40 bg-surface/60">
            <h3 className="text-lg font-semibold text-text">What it is / What it is not</h3>
            <p className="mt-3 text-sm text-muted">AI provides recommendations only. No autonomous trading.</p>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-text">Product Tour</h2>
            <p className="mt-4 text-muted">
              Configure a pair, set budgets, and go live with full monitoring in minutes. uLiquid keeps all
              strategy, risk, and reporting controls in one place so your team stays aligned.
            </p>
            <div className="mt-6 grid gap-4">
              {["Connect exchange API keys", "Define pair rules and budgets", "Monitor fills and export reports"].map(
                (item) => (
                  <Card key={item} className="border-border/60 bg-surface/60">
                    <p className="text-sm text-muted">{item}</p>
                  </Card>
                )
              )}
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted">
              <Link href="/use-cases/master-slave-price-follow" className="text-accent-cyan font-semibold">
                Master/Slave use case →
              </Link>
              <Link href="/guides/fill-based-volume-counting" className="text-accent-cyan font-semibold">
                Fill-based volume guide →
              </Link>
            </div>
          </div>
          <AppScreenshotPlaceholder title="Pairs & Configuration" aspect="4:3" />
        </div>
      </Section>
    </div>
  );
}
