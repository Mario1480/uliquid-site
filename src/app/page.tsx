import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/ui/Section";
import { brandDescription, brandName, createPageMetadata, deskDescription, marketMakerDescription, siteUrl } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Professional crypto tools for liquidity operations and vault-based trading",
  description: brandDescription,
  canonical: "/",
  siteName: brandName,
  openGraphTitle: `${brandName} - Crypto tooling for operators and vault users`,
});

export default function Home() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: brandName,
          url: siteUrl,
          description: brandDescription,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "uLiquid products",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "uLiquid Market Maker",
              url: `${siteUrl}/market-maker`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "uLiquid Desk",
              url: `${siteUrl}/desk`,
            },
          ],
        }}
      />

      <Section className="pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Badge className="mb-4">uLiquid</Badge>
            <h1 className="text-4xl font-semibold text-text sm:text-5xl">
              Professional crypto tools for liquidity operations and vault-based trading
            </h1>
            <p className="mt-6 text-lg text-muted">
              uLiquid builds specialized products for crypto operators and users, including Market Maker for
              liquidity operations and Desk for user-friendly Hyperliquid vault access.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/market-maker">Explore Market Maker</Button>
              <Button href="/desk#request-access" variant="secondary">
                Request Access
              </Button>
            </div>
          </div>
          <Card className="grid gap-4 border-accent-blue/30 bg-gradient-to-br from-accent-cyan/10 via-surface/90 to-accent-blue/10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-cyan">Brand Overview</p>
            <p className="text-lg text-text">
              Two distinct product paths under one brand: operator-grade market making and a simpler
              vault-first Desk experience for Hyperliquid users.
            </p>
            <div className="grid gap-3 text-sm text-muted">
              <p>Built for token teams, listings, and liquidity operators</p>
              <p>Built for vault users, strategy followers, and automation-oriented traders</p>
              <p>Unified trust layer across security, infrastructure, and product discipline</p>
            </div>
          </Card>
        </div>
      </Section>

      <Section id="products">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-text">Products</h2>
          <p className="mt-3 text-muted">
            Choose the product path that matches your workflow and audience.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-3">
              <Badge>uLiquid Market Maker</Badge>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-cyan">Operator</span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-text">Managed market-making infrastructure</h3>
            <p className="mt-4 text-sm text-muted">{marketMakerDescription}</p>
            <div className="mt-6 grid gap-2 text-sm text-muted">
              <p>For token projects, listing teams, liquidity operators, and agencies</p>
              <p>Execution, spread control, risk controls, reporting, and managed VPS delivery</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/market-maker">Explore Market Maker</Button>
              <Button href="/market-maker/pricing" variant="secondary">
                View Pricing
              </Button>
            </div>
          </Card>

          <Card className="flex h-full flex-col border-emerald-400/25 bg-gradient-to-br from-emerald-400/10 via-surface/90 to-accent-blue/10">
            <div className="flex items-center justify-between gap-3">
              <Badge className="border-emerald-400/40 text-emerald-300">uLiquid Desk</Badge>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Vault-first</span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-text">The vault layer for Hyperliquid</h3>
            <p className="mt-4 text-sm text-muted">{deskDescription}</p>
            <div className="mt-6 grid gap-2 text-sm text-muted">
              <p>For broader trading users, vault users, strategy followers, and automation-oriented traders</p>
              <p>Vault access, strategy discovery, automation, usability, and clearer control surfaces</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/desk">Explore Desk</Button>
              <Button href="/desk#request-access" variant="secondary">
                Request Access
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-text">Which product is right for you?</h2>
          <p className="mt-3 text-muted">The two products live under one brand, but they serve different needs.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="text-2xl font-semibold text-text">Choose Market Maker if...</h3>
            <div className="mt-4 grid gap-3 text-sm text-muted">
              <p>You need operator-grade liquidity tooling for listings, token pairs, and ongoing exchange readiness.</p>
              <p>You care about execution, spread control, runtime risk limits, reporting, and managed infrastructure.</p>
              <p>Your conversion path is license purchase, provisioning, and professional operations.</p>
            </div>
          </Card>
          <Card className="border-emerald-400/25">
            <h3 className="text-2xl font-semibold text-text">Choose Desk if...</h3>
            <div className="mt-4 grid gap-3 text-sm text-muted">
              <p>You want user-friendly access to Hyperliquid vaults, strategies, and automation.</p>
              <p>You want a simpler product experience centered on allocation, performance, and visibility.</p>
              <p>Your conversion path is product exploration and request-access onboarding.</p>
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-text">Trust, security, and infrastructure</h2>
          <p className="mt-3 text-muted">Both product paths sit on the same brand-level credibility layer.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Security first",
              description: "Encrypted keys, role-based access control, re-authentication, and hardened session flows.",
            },
            {
              title: "Managed systems",
              description: "uLiquid ships product experiences on top of disciplined infrastructure and production-minded operations.",
            },
            {
              title: "Clear product framing",
              description: "Each product has its own audience, message, and CTA path instead of forcing one blended story.",
            },
          ].map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-3 text-sm text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <CTASection
        title="Route into the right product path."
        subtitle="Choose Market Maker for professional liquidity operations or Desk for user-friendly Hyperliquid vault access."
        primaryLabel="Explore Market Maker"
        primaryHref="/market-maker"
        secondaryLabel="Request Access"
        secondaryHref="/desk#request-access"
      />
    </div>
  );
}
