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
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata, marketMakerDescription, marketMakerName, siteUrl } from "@/lib/seo";
import {
  marketMakerBenefits,
  marketMakerBuiltFor,
  marketMakerFaqs,
  marketMakerFeatures,
  marketMakerHowItWorks,
  marketMakerResources,
  marketMakerTrustChips,
  supportedExchanges,
} from "@/lib/content/marketMaker";

export const metadata = createPageMetadata({
  title: "Professional Crypto Market Making",
  description: marketMakerDescription,
  canonical: "/market-maker",
  siteName: marketMakerName,
  openGraphTitle: `${marketMakerName} - Professional Crypto Market Making`,
});

export default function MarketMakerPage() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: marketMakerName,
          applicationCategory: "FinancialTradingSoftware",
          operatingSystem: "Linux (Managed VPS)",
          url: `${siteUrl}/market-maker`,
          description: marketMakerDescription,
          offers: {
            "@type": "Offer",
            url: "https://license-server.uliquid.vip/",
          },
        }}
      />

      <Section className="pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Badge className="mb-4">uLiquid Market Maker</Badge>
            <h1 className="text-4xl font-semibold text-text sm:text-5xl">
              Professional Crypto Market Making
            </h1>
            <p className="mt-6 text-lg text-muted">
              uLiquid Market Maker is a managed market-making system with volume execution, CEX and DEX
              price intelligence, and AI advisory, built for operators who require control, security, and
              reliability.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="https://license-server.uliquid.vip/">Buy License</Button>
              <Button href="https://license-server.uliquid.vip/" variant="secondary">
                Go to License Manager
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {marketMakerTrustChips.map((chip) => (
                <Badge key={chip}>{chip}</Badge>
              ))}
            </div>
          </div>
          <AppScreenshotPlaceholder title="Overview Dashboard" src="/screens/overview-dashboard.png" />
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
          {marketMakerBuiltFor.map((item) => (
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
        <FeatureGrid title="Benefits" subtitle="A steady orderbook without heavy ops." items={marketMakerBenefits} />
      </Section>

      <Section>
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-text">How it works</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {marketMakerHowItWorks.map((step, index) => (
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
          {supportedExchanges.map((exchange) => (
            <Card key={exchange} className="text-sm text-muted">
              {exchange}
            </Card>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted">Additional exchanges can be added based on demand.</p>
      </Section>

      <Section id="core-modules">
        <FeatureGrid title="Key features" subtitle="Control, safety, and reporting in one platform." items={marketMakerFeatures} />
        <div className="mt-6 rounded-2xl border border-border/60 bg-surface/60 p-5 text-sm text-muted">
          <h3 className="text-base font-semibold text-text">What it is / What it is not</h3>
          <p className="mt-3">DEX Price Feed is read-only. No on-chain trading.</p>
          <p className="mt-2">AI provides recommendations only. No autonomous trading.</p>
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
              <li>Read-only DEX price feed with no DEX trading</li>
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
        <div className="mb-10 flex items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold text-text">Pricing preview</h2>
            <p className="mt-3 text-muted">Managed VPS included with every subscription.</p>
          </div>
          <Link href="/market-maker/pricing" className="text-sm font-semibold text-accent-cyan">
            View full pricing {"->"}
          </Link>
        </div>
        <PricingCards variant="teaser" />
      </Section>

      <Section>
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-text">FAQ</h2>
          <p className="mt-3 text-muted">Answers for teams getting ready to list.</p>
        </div>
        <FAQAccordion items={marketMakerFaqs} />
      </Section>

      <Section>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-text">Resources</h2>
          <p className="mt-3 text-muted">Operator guidance, use cases, and deep dives.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {marketMakerResources.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <Link href={item.href} className="mt-3 inline-flex text-sm font-semibold text-accent-cyan">
                Learn more {"->"}
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <CTASection
        title="Launch market making without managing infrastructure."
        subtitle="Purchase a license, get a dedicated VPS, and manage bots through the License Manager."
        primaryLabel="Buy License"
        primaryHref="https://license-server.uliquid.vip/"
        secondaryLabel="Go to License Manager"
        secondaryHref="https://license-server.uliquid.vip/"
      />
    </div>
  );
}
