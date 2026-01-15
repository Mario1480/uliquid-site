import Link from "next/link";
import { AppScreenshotPlaceholder } from "@/components/AppScreenshotPlaceholder";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { FeatureGrid } from "@/components/FeatureGrid";
import { PricingCards } from "@/components/PricingCards";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTASection } from "@/components/CTASection";

const trustChips = [
  "Risk limits & kill switch",
  "Exchange-ready connectors",
  "Reporting for listing teams",
  "SaaS — no servers needed",
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
    title: "Spread & Quote Controls",
    description: "Base spread, layers, refresh, and min/max distance tuning.",
  },
  {
    title: "Inventory Targets",
    description: "Targets per asset, bands, and rebalance triggers.",
  },
  {
    title: "Risk & Safety",
    description: "Max exposure, drawdown limits, and kill switch controls.",
  },
  {
    title: "Monitoring & Alerts",
    description: "Fills, latency, disconnects; webhook/telegram/email placeholders.",
  },
  {
    title: "Reports for Listings",
    description: "Stability reports with CSV/PDF export placeholders.",
  },
  {
    title: "Multi-user & Roles",
    description: "Team access, audit log, and multiple projects per workspace.",
  },
];

const faqs = [
  {
    question: "How fast is setup?",
    answer: "Most teams connect an exchange and go live in a day or two, depending on API approval.",
  },
  {
    question: "What API permissions are required?",
    answer: "Trading-only permissions with no withdrawal rights. Budget caps and kill switch remain in your control.",
  },
  {
    question: "Do you enforce budget and risk guardrails?",
    answer: "Yes. You set exposure limits, drawdown thresholds, and orderbook constraints before launch.",
  },
  {
    question: "Which exchanges are supported?",
    answer: "We maintain a growing connector library. See the Exchanges page for placeholders and requests.",
  },
  {
    question: "Can I export reports?",
    answer: "Yes. Listing-ready exports are available in CSV/PDF placeholders for your internal review.",
  },
  {
    question: "Can multiple team members access one workspace?",
    answer: "Absolutely. Roles, permissions, and shared dashboards are included in growth plans.",
  },
];

export default function Home() {
  return (
    <div>
      <Section className="pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Badge className="mb-4">Affordable Liquidity SaaS</Badge>
            <h1 className="text-4xl font-semibold text-text sm:text-5xl">
              Liquidity that gets your token listed — without a market-making desk.
            </h1>
            <p className="mt-6 text-lg text-muted">
              uLiquid is an affordable SaaS for stable orderbooks on CEX: controlled spreads, risk
              limits, monitoring, and listing-ready reports.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/app">Start Free Trial</Button>
              <Button href="/pricing" variant="secondary">
                See Pricing
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
