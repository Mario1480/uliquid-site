import Link from "next/link";
import type { Metadata } from "next";
import { AppScreenshotPlaceholder } from "@/components/AppScreenshotPlaceholder";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { FeatureGrid } from "@/components/FeatureGrid";
import { PricingCards } from "@/components/PricingCards";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "uLiquid Market Maker – Professional Crypto Market Making on a Dedicated VPS",
  description:
    "Managed crypto market-making software with volume bots, price follow, price support, and advanced risk controls. Built for professional operators.",
  openGraph: {
    title: "uLiquid Market Maker – Professional Crypto Market Making on a Dedicated VPS",
    description:
      "Managed crypto market-making software with volume bots, price follow, price support, and advanced risk controls. Built for professional operators.",
    type: "website",
    siteName: "uLiquid Market Maker",
  },
};

const trustChips = [
  "Dedicated VPS included",
  "Market Making & Volume Bot",
  "Price Follow (Master / Slave)",
  "Price Support with budget control",
  "CEX + DEX price intelligence",
  "AI recommendations (no auto-trading)",
  "Risk limits & kill switch",
  "RBAC, Re-Auth & Email 2FA",
  "Telegram alerts & runner heartbeat",
  "License-gated add-ons (SaaS-ready)",
];

const builtFor = [
  {
    title: "CEX Listing Teams",
    bullets: ["Liquidity readiness", "Stable quotes", "Exportable reports"],
  },
  {
    title: "Project Teams",
    bullets: ["Affordable plans", "Fast setup", "No MM expertise required"],
  },
  {
    title: "Agencies / Ops",
    bullets: ["Manage multiple projects", "Roles & templates", "Unified monitoring"],
  },
];

const benefits = [
  { title: "Tighter spreads", description: "Maintain tighter, steadier quotes for listing readiness." },
  { title: "Reliable quotes", description: "Keep orderbooks active even during volatility." },
  { title: "Controlled risk", description: "Define budgets, exposure limits, and safety rails." },
  { title: "Transparent reports", description: "Share listing-grade stability metrics with exchanges." },
  { title: "Fast setup", description: "Connect and launch without building a desk." },
];

const features = [
  {
    title: "Market Making Engine",
    description:
      "Multi-level order ladders with configurable spread, step size, distributions, jitter, and inventory-based skew.",
  },
  {
    title: "Fill-Based Volume Bot",
    description: "Volume execution that counts only real fills. No fake volume, no cancel-based manipulation.",
  },
  {
    title: "Price Follow (Master / Slave)",
    description:
      "Use one exchange purely as a price feed and execute trades on another — even without running a bot on the master exchange.",
  },
  {
    title: "Price Support",
    description:
      "Protect a minimum price level using a separate support budget. Automatically stops when the budget is depleted.",
  },
  {
    title: "Risk & Safety Controls",
    description: "Min balance guard, max deviation, max open orders, and daily loss limits — enforced at runtime.",
  },
  {
    title: "Security & Access Control",
    description:
      "Workspace-based roles, re-authentication for sensitive actions, encrypted exchange keys, and optional email 2FA.",
  },
  {
    title: "DEX Price Feed (Add-on)",
    description:
      "Use on-chain pricing as a master reference or validation layer for low-cap tokens. Read-only feed — no DEX trading required.",
  },
  {
    title: "AI Advisory (Read-only)",
    description:
      "AI analyzes market structure and execution data to recommend better settings. It never places trades — operators stay in control.",
  },
];

const faqs = [
  {
    question: "Where does uLiquid Market Maker run?",
    answer: "On a dedicated VPS provisioned and maintained by uLiquid after license purchase.",
  },
  {
    question: "Do I need withdrawal permissions on exchanges?",
    answer: "No. Trade-only API permissions are sufficient.",
  },
  {
    question: "How are features enabled or limited?",
    answer: "Via the integrated license server using feature flags and limits.",
  },
  {
    question: "How do alerts work?",
    answer: "Via Telegram notifications for runtime errors, risk stops, and price support events.",
  },
  {
    question: "Where do I manage my license and VPS details?",
    answer: "In the Customer Portal / License Manager at license-server.uliquid.vip.",
  },
  {
    question: "Does uLiquid trade on DEXs?",
    answer: "No. DEX integrations are used as price feeds only.",
  },
  {
    question: "Does the AI control my bots?",
    answer: "No. AI provides recommendations only. All trading stays deterministic and under operator control.",
  },
];

export default function Home() {
  return (
    <div>
      <Section className="pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Badge className="mb-4">uLiquid Market Maker</Badge>
            <h1 className="text-4xl font-semibold text-text sm:text-5xl">
              Professional Crypto Market Making — Managed VPS Included
            </h1>
            <p className="mt-6 text-lg text-muted">
              uLiquid Market Maker is a managed market-making system with volume execution, price follow,
              and price support — built for operators who require control, security, and reliability.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="https://license-server.uliquid.vip/">Buy License</Button>
              <Button href="https://license-server.uliquid.vip/" variant="secondary">
                Go to License Manager
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {trustChips.map((chip) => (
                <Badge key={chip}>{chip}</Badge>
              ))}
            </div>
          </div>
          <AppScreenshotPlaceholder title="Overview Dashboard" />
        </div>
      </Section>

      <Section>
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-text">Built for</h2>
          <p className="mt-3 text-muted">
            Liquidity operations for listing teams and project operators who want predictable execution.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {builtFor.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <FeatureGrid title="Benefits" subtitle="A steady orderbook without heavy ops." items={benefits} />
      </Section>

      <Section>
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-text">How it works</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Purchase a license",
              description: "Buy via the uLiquid License Manager.",
            },
            {
              title: "VPS provisioned automatically",
              description: "Dedicated VPS is configured with Market Maker installed.",
            },
            {
              title: "Receive access details",
              description: "Credentials are sent by email and visible in the License Manager.",
            },
            {
              title: "Manage bots",
              description: "Configure and monitor bots from the Market Maker dashboard.",
            },
          ].map((step, index) => (
            <Card key={step.title}>
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-cyan">Step {index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold text-text">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-text">Supported Exchanges</h2>
          <p className="mt-3 text-muted">Current CEX integrations with more added on demand.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["Bitmart", "Coinstore", "Pionex"].map((exchange) => (
            <Card key={exchange} className="text-sm text-muted">
              {exchange}
            </Card>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted">Additional exchanges can be added based on demand.</p>
      </Section>

      <Section>
        <FeatureGrid title="Key features" subtitle="Control, safety, and reporting in one platform." items={features} />
        <p className="mt-6 text-sm text-muted">
          DEX feeds are used for price reference only. AI provides recommendations only — trading remains
          deterministic and user-controlled.
        </p>
      </Section>

      <Section>
        <div className="mb-10 flex items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold text-text">Pricing preview</h2>
            <p className="mt-3 text-muted">Managed VPS included with every subscription.</p>
          </div>
          <Link href="/pricing" className="text-sm font-semibold text-accent-cyan">
            View full pricing →
          </Link>
        </div>
        <PricingCards variant="teaser" />
      </Section>

      <Section>
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-text">FAQ</h2>
          <p className="mt-3 text-muted">Answers for teams getting ready to list.</p>
        </div>
        <FAQAccordion items={faqs} />
      </Section>

      <CTASection
        title="Launch market making without managing infrastructure."
        subtitle="Purchase a license, get a dedicated VPS, and manage bots through the License Manager."
        primaryLabel="Buy License"
        primaryHref="https://license-server.uliquid.vip/"
        secondaryLabel="Manage Subscription"
        secondaryHref="https://license-server.uliquid.vip/"
      />
    </div>
  );
}
