import { AppScreenshotPlaceholder } from "@/components/AppScreenshotPlaceholder";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { MetricStrip } from "@/components/MetricStrip";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { SurfacePanel } from "@/components/SurfacePanel";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import {
  brandName,
  createPageMetadata,
  deskDescription,
  marketMakerDescription,
  siteUrl,
} from "@/lib/seo";
import { deskCapabilities, deskFormula } from "@/lib/content/desk";

export const metadata = createPageMetadata({
  title: "Vaults, bots and AI-powered trading workflows for Hyperliquid",
  description:
    "uLiquid Desk is the primary path into Hyperliquid vaults, bots, AI-powered workflows, automated trading access, and connected CEX trading paths such as Bitget and MEXC where supported, with Market Maker available for specialized operator teams.",
  canonical: "/",
  siteName: brandName,
  openGraphTitle: `${brandName} - Desk-first trading workflows for Hyperliquid`,
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
          description:
            "uLiquid builds Desk-first vault, bot, AI workflow, trading automation, and connected trading desk products for Hyperliquid users, with Market Maker for specialized operator teams.",
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
              name: "uLiquid Desk",
              url: `${siteUrl}/desk`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "uLiquid Market Maker",
              url: `${siteUrl}/market-maker`,
            },
          ],
        }}
      />

      <PageHero
        eyebrow="uLiquid Platform"
        title="Vaults, bots and AI-powered trading workflows for Hyperliquid"
        description="Start with uLiquid Desk for a simpler path into vaults, strategy workflows, bot automation, and supported connected execution. When teams need dedicated liquidity infrastructure, Market Maker remains the operator-grade path."
        backgroundVariant="brand"
        actions={
          <>
            <Button href="/desk">Explore Desk</Button>
            <Button href="/desk#request-access" variant="secondary">
              Request Access
            </Button>
            <Button href="/market-maker" variant="ghost">
              Explore Market Maker
            </Button>
          </>
        }
        aside={
          <div className="grid gap-4">
            <AppScreenshotPlaceholder title="Desk Overview" src="/screens/overview-dashboard.png" />
            <SurfacePanel tone="muted" className="grid gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-cyan">
                Desk-first growth path
              </p>
              <p className="text-lg font-semibold text-text">{deskFormula}</p>
              <div className="grid gap-3 text-sm leading-7 text-muted">
                <p>Vault access and strategy discovery without operator-heavy tooling.</p>
                <p>AI-supported workflows, automation, and visibility in a cleaner product shell.</p>
                <p>Connected trading paths where supported, with Market Maker as the dedicated ops layer.</p>
              </div>
            </SurfacePanel>
          </div>
        }
      />

      <Section className="pt-0">
        <MetricStrip
          items={[
            {
              label: "Primary Path",
              value: "Desk-first onboarding",
              detail: "Lead most users into a productized trading workflow before introducing operator tooling.",
            },
            {
              label: "Execution Layer",
              value: "Hyperliquid-first",
              detail: "Vaults, bots, and AI-assisted strategy workflows stay anchored around Hyperliquid usage.",
            },
            {
              label: "Operator Route",
              value: "Market Maker available",
              detail: "Dedicated liquidity infrastructure stays visible for listing teams and professional operators.",
            },
          ]}
        />
      </Section>

      <Section id="products" tone="muted">
        <SectionIntro
          eyebrow="Product Map"
          title="Start with Desk, keep Market Maker in view"
          description="The public site now leads with the user-facing Desk path while preserving a clear route into specialized operator tooling."
        />
        <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {[
            {
              title: "Vault access",
              description: "A simpler route into Hyperliquid vaults and strategy products.",
            },
            {
              title: "Bots",
              description: "Productized bot workflows instead of operator-style control panels.",
            },
            {
              title: "AI workflows",
              description: "Guided, AI-powered product flows that help users navigate strategy decisions.",
            },
            {
              title: "Automation",
              description: "Trading automation and ongoing visibility framed around usability and control.",
            },
            {
              title: "Connected execution",
              description: "Desk-style execution across supported exchanges such as Bitget and MEXC where available.",
            },
          ].map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <SurfacePanel tone="accent" className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent-cyan shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                uLiquid Desk
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-cyan">
                Primary path
              </span>
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-text">{deskFormula}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">{deskDescription}</p>
            <div className="mt-6 grid gap-3 text-sm leading-7 text-muted">
              <p>For vault users, strategy followers, bot users, automation-oriented traders, and AI-assisted workflow users.</p>
              <p>Vault access, bots, AI-supported workflows, strategy automation, connected CEX trading paths, performance visibility, and clearer control surfaces.</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/desk">Explore Desk</Button>
              <Button href="/desk#request-access" variant="secondary">
                Request Access
              </Button>
            </div>
          </SurfacePanel>

          <Card className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent-cyan shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                uLiquid Market Maker
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Specialized path
              </span>
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-text">Managed market-making infrastructure</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{marketMakerDescription}</p>
            <div className="mt-6 grid gap-3 text-sm leading-7 text-muted">
              <p>For token projects, listing teams, liquidity operators, and agencies.</p>
              <p>Execution, spread control, runtime risk limits, reporting, and managed VPS delivery.</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/market-maker">Explore Market Maker</Button>
              <Button href="/market-maker/pricing" variant="secondary">
                View Pricing
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionIntro
          eyebrow="Desk Surface"
          title="What Desk includes"
          description="Desk is broader than a vault viewer. It combines Hyperliquid vault access with bots, AI-assisted workflows, automation, connected execution, and visibility in one user-facing product."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {deskCapabilities.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionIntro
          eyebrow="Path Selection"
          title="Which product is right for you?"
          description="Desk is the default growth path for most users. Market Maker remains the operator-grade route for teams with specialized liquidity requirements."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="text-2xl font-semibold text-text">Start with Desk if...</h3>
            <div className="mt-4 grid gap-3 text-sm leading-7 text-muted">
              <p>You want easier access to Hyperliquid vaults, strategies, bots, AI-assisted workflows, and trading automation.</p>
              <p>You are a vault user, strategy follower, bot user, automation-oriented trader, or someone who wants AI-supported decision help.</p>
              <p>You want a user-facing product experience centered on allocation, performance visibility, connected execution context, and control.</p>
              <p>You want a Hyperliquid-first desk that can also support connected CEX trading paths such as Bitget and MEXC where available.</p>
              <p>Your conversion path is exploration, request access, and product onboarding.</p>
            </div>
          </Card>
          <Card>
            <h3 className="text-2xl font-semibold text-text">Choose Market Maker if...</h3>
            <div className="mt-4 grid gap-3 text-sm leading-7 text-muted">
              <p>You need operator-grade liquidity tooling for listings, token pairs, and ongoing exchange readiness.</p>
              <p>You care about execution, spread control, runtime risk limits, reporting, and managed infrastructure.</p>
              <p>Your conversion path is license purchase, provisioning, and professional operations.</p>
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionIntro
          eyebrow="Shared Foundation"
          title="Trust, security, and infrastructure"
          description="Both product paths sit on the same brand-level credibility layer."
        />
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
              <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <CTASection
        title="Explore the Desk path."
        subtitle="Start with Desk if you want a cleaner Hyperliquid experience across vaults, bots, AI-assisted workflows, strategies, automation, visibility, and connected CEX trading paths where supported."
        primaryLabel="Explore Desk"
        primaryHref="/desk"
        secondaryLabel="Request Access"
        secondaryHref="/desk#request-access"
        tertiaryLabel="Learn How It Works"
        tertiaryHref="/desk/how-it-works"
      />
    </div>
  );
}
