import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PricingCards } from "@/components/PricingCards";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { FeatureMatrixTable } from "@/components/FeatureMatrixTable";
import { JsonLd } from "@/components/JsonLd";
import { createPageMetadata, marketMakerName, siteUrl } from "@/lib/seo";
import { marketMakerAddOns, marketMakerPricingFaqs } from "@/lib/content/marketMaker";

export const metadata = createPageMetadata({
  title: "Pricing - Managed VPS Plans",
  description:
    "Monthly Market Maker plans include a dedicated VPS. Basic, Growth, and Scale tiers with exchange and bot limits plus optional add-ons.",
  canonical: "/market-maker/pricing",
  siteName: marketMakerName,
  openGraphTitle: `Pricing - ${marketMakerName}`,
});

export default function PricingPage() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: "uLiquid Market Maker Pricing",
          url: `${siteUrl}/market-maker/pricing`,
          itemListElement: [
            {
              "@type": "Offer",
              name: "Basic",
              price: "300",
              priceCurrency: "USD",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "300",
                priceCurrency: "USD",
                unitText: "month",
              },
              description: "Dedicated VPS, 1 CEX integration, 1 bot, core market making, fill-based volume bot.",
              url: "https://license-server.uliquid.vip/",
            },
            {
              "@type": "Offer",
              name: "Growth",
              price: "500",
              priceCurrency: "USD",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "500",
                priceCurrency: "USD",
                unitText: "month",
              },
              description:
                "Dedicated VPS, up to 5 CEX integrations, up to 5 bots, price follow, and all basic features.",
              url: "https://license-server.uliquid.vip/",
            },
            {
              "@type": "Offer",
              name: "Scale",
              price: "700",
              priceCurrency: "USD",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "700",
                priceCurrency: "USD",
                unitText: "month",
              },
              description:
                "Dedicated VPS, up to 10 CEX integrations, up to 10 bots, price follow, price support, and priority provisioning.",
              url: "https://license-server.uliquid.vip/",
            },
          ],
        }}
      />

      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Pricing Plans (VPS Included)</h1>
          <p className="mt-4 text-lg text-muted">
            uLiquid Market Maker includes a managed VPS. Pricing applies to the software license, updates,
            and feature access, not infrastructure.
          </p>
          <p className="mt-3 text-sm text-muted">
            Manage your license, VPS details, and subscription in the Customer Portal / License Manager.
          </p>
          <p className="mt-3 text-sm text-muted">
            New here? Start with{" "}
            <Link href="/crypto-market-maker" className="font-semibold text-accent-cyan">
              Crypto Market Maker Software
            </Link>
            .
          </p>
        </div>
        <div className="mt-10">
          <PricingCards />
        </div>
        <div className="mt-10 grid gap-4 rounded-2xl border border-border/60 bg-surface/60 p-6 text-sm text-muted">
          <p className="font-semibold text-text">Pricing Notes</p>
          <p>VPS cost is included.</p>
          <p>No self-hosting required.</p>
          <p>License limits are enforced by the Market Maker runtime.</p>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-text">Feature Matrix</h2>
          <p className="mt-3 text-muted">Compare included modules and gated add-ons.</p>
          <div className="mt-6">
            <FeatureMatrixTable />
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-text">Add-ons</h2>
          <p className="mt-3 text-muted">Extend coverage as you scale.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {marketMakerAddOns.map((item) => (
            <Card key={item.title} className="text-sm text-muted">
              <div className="flex items-center justify-between">
                <p className="text-base font-semibold text-text">{item.title}</p>
                <span className="text-xs font-semibold uppercase tracking-wide text-accent-cyan">
                  {item.label}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted">{item.description}</p>
              {item.href ? (
                <Link href={item.href} className="mt-3 inline-flex text-sm font-semibold text-accent-cyan">
                  Learn more {"->"}
                </Link>
              ) : null}
            </Card>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted">
          AI does not trade. DEX integrations are used for price feeds only.
        </p>
      </Section>

      <Section>
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-text">Pricing FAQ</h2>
          <p className="mt-3 text-sm text-muted">
            Need more detail?{" "}
            <Link href="/faq" className="font-semibold text-accent-cyan">
              Visit the full FAQ {"->"}
            </Link>
          </p>
        </div>
        <FAQAccordion items={marketMakerPricingFaqs} />
      </Section>
    </div>
  );
}
