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
  title: "uLiquid Market Maker – Professional Crypto Market Making on Your VPS",
  description:
    "Self-hosted crypto market-making software with volume bots, price follow, price support, and advanced risk controls. Built for professional operators.",
  openGraph: {
    title: "uLiquid Market Maker – Professional Crypto Market Making on Your VPS",
    description:
      "Self-hosted crypto market-making software with volume bots, price follow, price support, and advanced risk controls. Built for professional operators.",
    type: "website",
    siteName: "uLiquid Market Maker",
  },
};

const trustChips = [
  "Self-hosted on your VPS",
  "Market Making & Volume Bot",
  "Price Follow (Master / Slave)",
  "Price Support with budget control",
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
];

const faqs = [
  {
    question: "Where does uLiquid Market Maker run?",
    answer: "On your own VPS using Docker. You keep full custody and infrastructure control.",
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
];

export default function Home() {
  return (
    <div>
      <Section className="pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Badge className="mb-4">uLiquid Market Maker</Badge>
            <h1 className="text-4xl font-semibold text-text sm:text-5xl">
              Professional Crypto Market Making — On Your Own Infrastructure
            </h1>
            <p className="mt-6 text-lg text-muted">
              uLiquid Market Maker is a self-hosted market-making system with volume execution, price follow,
              and price support — built for operators who require control, security, and reliability.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/app">Get Started</Button>
              <Button href="/product" variant="secondary">
                View Features
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
        <div className="grid gap-6 md:grid-cols-3">
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
              title: "Connect exchange",
              description: "API keys with minimal permissions.",
            },
            {
              title: "Choose pair + budget",
              description: "Parameters and guardrails tuned to your listing goals.",
            },
            {
              title: "Go live & monitor",
              description: "Alerts, logs, and reports keep you listing-ready.",
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
        <FeatureGrid title="Key features" subtitle="Control, safety, and reporting in one platform." items={features} />
      </Section>

      <Section>
        <div className="mb-10 flex items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold text-text">Pricing preview</h2>
            <p className="mt-3 text-muted">Simple plans that fit early-stage listings.</p>
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
        title="Get listing-ready liquidity — in days, not weeks."
        subtitle="Launch a stable orderbook with guardrails and reports your exchange contacts expect."
        primaryLabel="Start Trial"
        primaryHref="/app"
        secondaryLabel="Talk to Sales"
        secondaryHref="/company#contact"
      />
    </div>
  );
}
