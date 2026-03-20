import Link from "next/link";
import { AppScreenshotPlaceholder } from "@/components/AppScreenshotPlaceholder";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FeatureGrid } from "@/components/FeatureGrid";
import { JsonLd } from "@/components/JsonLd";
import { MetricStrip } from "@/components/MetricStrip";
import { PageHero } from "@/components/PageHero";
import { PricingCards } from "@/components/PricingCards";
import { SectionIntro } from "@/components/SectionIntro";
import { SurfacePanel } from "@/components/SurfacePanel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
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

      <PageHero
        eyebrow="uLiquid Market Maker"
        title="Professional Crypto Market Making"
        description="uLiquid Market Maker is a managed market-making system with volume execution, CEX and DEX price intelligence, and advisory AI built for operators who require control, security, and reliability."
        backgroundVariant="market"
        actions={
          <>
            <Button href="https://license-server.uliquid.vip/">Buy License</Button>
            <Button href="https://license-server.uliquid.vip/" variant="secondary">
              Go to License Manager
            </Button>
          </>
        }
        aside={
          <div className="grid gap-4">
            <AppScreenshotPlaceholder title="Market Maker Dashboard" src="/screens/risk-controls.png" />
            <SurfacePanel tone="muted">
              <div className="flex flex-wrap gap-2">
                {marketMakerTrustChips.slice(0, 6).map((chip) => (
                  <Badge key={chip}>{chip}</Badge>
                ))}
              </div>
            </SurfacePanel>
          </div>
        }
      />

      <Section className="pt-0">
        <MetricStrip
          items={[
            {
              label: "Delivery",
              value: "Dedicated VPS included",
              detail: "Provisioned and managed for you after license purchase so the team can focus on operations.",
            },
            {
              label: "Intelligence",
              value: "CEX + DEX validation",
              detail: "Use centralized and on-chain pricing together as a safer reference layer for low-cap markets.",
            },
            {
              label: "Control",
              value: "Human-in-the-loop AI",
              detail: "Advisory AI recommends settings while trading remains deterministic and operator-controlled.",
            },
          ]}
        />
      </Section>

      <Section>
        <SectionIntro
          eyebrow="Audience"
          title="Built for"
          description="Liquidity operations for listing teams and project operators who want predictable execution."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {marketMakerBuiltFor.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-cyan" />
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

      <Section tone="muted">
        <SectionIntro eyebrow="Workflow" title="How it works" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {marketMakerHowItWorks.map((step, index) => (
            <Card key={step.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-cyan">Step {index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold text-text">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{step.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionIntro
          eyebrow="Coverage"
          title="Supported Exchanges"
          description="Current CEX integrations with more added on demand."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {supportedExchanges.map((exchange) => (
            <Card key={exchange} className="text-sm font-medium text-muted">
              {exchange}
            </Card>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted">Additional exchanges can be added based on demand.</p>
      </Section>

      <Section id="core-modules">
        <FeatureGrid title="Key features" subtitle="Control, safety, and reporting in one platform." items={marketMakerFeatures} />
        <div className="mt-6 rounded-[26px] border border-border bg-bg-alt/50 p-5 text-sm leading-7 text-muted">
          <h3 className="text-base font-semibold text-text">What it is / What it is not</h3>
          <p className="mt-3">DEX Price Feed is read-only. No on-chain trading.</p>
          <p className="mt-2">AI provides recommendations only. No autonomous trading.</p>
        </div>
      </Section>

      <Section id="price-intelligence" tone="muted">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold text-text">Price Intelligence (CEX + DEX)</h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Combine centralized exchange prices with on-chain DEX price feeds. Use DEX data as a master
              reference, or as a safety validation layer.
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
              <li>Read-only DEX price feed with no DEX trading</li>
              <li>Ideal for low-cap and illiquid pairs</li>
              <li>Detect CEX anomalies with cross-source validation</li>
            </ul>
          </div>
          <Card className="border-border-strong/40">
            <h3 className="text-lg font-semibold text-text">What it is / What it is not</h3>
            <p className="mt-4 text-sm leading-7 text-muted">DEX Price Feed is read-only. No on-chain trading.</p>
          </Card>
        </div>
      </Section>

      <Section id="ai-advisory">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold text-text">AI Advisory (Human-in-the-loop)</h2>
            <p className="mt-4 text-base leading-8 text-muted">
              uLiquid AI reviews market structure, order books, and execution stats to recommend better
              parameters.
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
              <li>Read-only recommendations</li>
              <li>No autonomous trading</li>
              <li>Use suggestions as presets</li>
            </ul>
          </div>
          <Card className="border-border-strong/40">
            <h3 className="text-lg font-semibold text-text">What it is / What it is not</h3>
            <p className="mt-4 text-sm leading-7 text-muted">AI provides recommendations only. No autonomous trading.</p>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="mb-10 flex items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold text-text">Pricing preview</h2>
            <p className="mt-3 text-muted">Managed VPS included with every subscription.</p>
          </div>
          <Link href="/market-maker/pricing" className="text-sm font-semibold text-accent-cyan hover:text-text">
            View full pricing →
          </Link>
        </div>
        <PricingCards variant="teaser" />
      </Section>

      <Section>
        <SectionIntro eyebrow="FAQ" title="Answers for teams getting ready to list." />
        <FAQAccordion items={marketMakerFaqs} />
      </Section>

      <Section tone="muted">
        <SectionIntro eyebrow="Resources" title="Operator guidance, use cases, and deep dives." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {marketMakerResources.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <Link
                href={item.href}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-cyan hover:text-text"
              >
                Learn more <span aria-hidden="true">→</span>
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
