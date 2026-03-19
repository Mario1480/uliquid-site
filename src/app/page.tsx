import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
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

      <Section className="pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Badge className="mb-4 border-emerald-400/40 text-emerald-300">uLiquid Desk</Badge>
            <h1 className="text-4xl font-semibold text-text sm:text-5xl">
              Vaults, bots and AI-powered trading workflows for Hyperliquid
            </h1>
            <p className="mt-6 text-lg text-muted">
              Start with uLiquid Desk for a simpler way to access vaults, bots, strategy workflows, and
              trading automation on Hyperliquid, then extend into connected trading workflows on supported
              venues such as Bitget and MEXC where available. Market Maker remains available for operator
              teams that need dedicated liquidity infrastructure.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/desk">Explore Desk</Button>
              <Button href="/desk#request-access" variant="secondary">
                Request Access
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted">
              Need the operator path?{" "}
              <Link href="/market-maker" className="font-semibold text-accent-cyan">
                Explore Market Maker
              </Link>
              .
            </p>
          </div>
          <Card className="grid gap-4 border-emerald-400/30 bg-gradient-to-br from-emerald-400/15 via-surface/90 to-accent-blue/10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Desk-first Growth Path</p>
            <p className="text-sm font-semibold text-emerald-200">{deskFormula}</p>
            <p className="text-lg text-text">
              Desk is the main discovery path for users who want Hyperliquid vaults, bots, AI-assisted
              workflows, strategy automation, and a cleaner route into trading tools, including supported
              connected CEX paths where available.
            </p>
            <div className="grid gap-3 text-sm text-muted">
              <p>Vault access and strategy discovery without operator-heavy tooling</p>
              <p>Bots, AI-supported workflows, and automation framed as a product experience</p>
              <p>Connected trading desk workflows with supported exchange access, including Bitget and MEXC where available</p>
              <p>Performance, allocation visibility, and control surfaces in one interface</p>
              <p>Market Maker still available as the dedicated path for listings and professional liquidity ops</p>
            </div>
          </Card>
        </div>
      </Section>

      <Section id="products">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-text">Start with Desk</h2>
          <p className="mt-3 text-muted">
            The homepage now leads with the user-facing Desk path, while keeping Market Maker visible for
            specialized operator teams.
          </p>
        </div>
        <div className="mb-6 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
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
            <Card key={item.title} className="border-emerald-400/20">
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-3 text-sm text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="flex h-full flex-col border-emerald-400/25 bg-gradient-to-br from-emerald-400/10 via-surface/90 to-accent-blue/10">
            <div className="flex items-center justify-between gap-3">
              <Badge className="border-emerald-400/40 text-emerald-300">uLiquid Desk</Badge>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Primary path</span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-text">{deskFormula}</h3>
            <p className="mt-4 text-sm text-muted">{deskDescription}</p>
            <div className="mt-6 grid gap-2 text-sm text-muted">
              <p>For vault users, strategy followers, bot users, automation-oriented traders, and AI-assisted workflow users</p>
              <p>Vault access, bots, AI-supported workflows, strategy automation, connected CEX trading paths, performance visibility, and clearer control surfaces</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/desk">Explore Desk</Button>
              <Button href="/desk#request-access" variant="secondary">
                Request Access
              </Button>
            </div>
          </Card>

          <Card className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-3">
              <Badge>uLiquid Market Maker</Badge>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-cyan">Specialized path</span>
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
        </div>
      </Section>

      <Section>
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-text">What Desk includes</h2>
          <p className="mt-3 text-muted">
            Desk is broader than a vault viewer. It combines Hyperliquid vault access with bots,
            AI-assisted workflows, strategies, automation, trading desk controls, supported connected
            exchange execution, and visibility in one user-facing product.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {deskCapabilities.map((item) => (
            <Card key={item.title} className="border-emerald-400/20">
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-3 text-sm text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-text">Which product is right for you?</h2>
          <p className="mt-3 text-muted">
            Desk is the default growth path for most users. Market Maker remains the operator-grade route for
            teams with specialized liquidity requirements.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-emerald-400/25">
            <h3 className="text-2xl font-semibold text-text">Start with Desk if...</h3>
            <div className="mt-4 grid gap-3 text-sm text-muted">
              <p>You want easier access to Hyperliquid vaults, strategies, bots, AI-assisted workflows, and trading automation.</p>
              <p>You are a vault user, strategy follower, bot user, automation-oriented trader, or someone who wants AI-supported decision help.</p>
              <p>You want a user-facing product experience centered on allocation, performance visibility, connected execution context, and control.</p>
              <p>You want a Hyperliquid-first desk that can also support connected CEX trading paths such as Bitget and MEXC where available.</p>
              <p>Your conversion path is exploration, request access, and product onboarding.</p>
            </div>
          </Card>
          <Card>
            <h3 className="text-2xl font-semibold text-text">Choose Market Maker if...</h3>
            <div className="mt-4 grid gap-3 text-sm text-muted">
              <p>You need operator-grade liquidity tooling for listings, token pairs, and ongoing exchange readiness.</p>
              <p>You care about execution, spread control, runtime risk limits, reporting, and managed infrastructure.</p>
              <p>Your conversion path is license purchase, provisioning, and professional operations.</p>
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
        title="Start with Desk, keep Market Maker in reach."
        subtitle="Explore Desk first if you want Hyperliquid vaults, bots, AI-powered workflows, trading automation, and connected CEX trading paths such as Bitget and MEXC where supported. Market Maker stays available for operator-grade liquidity programs."
        primaryLabel="Explore Desk"
        primaryHref="/desk"
        secondaryLabel="Request Access"
        secondaryHref="/desk#request-access"
        tertiaryLabel="Explore Market Maker"
        tertiaryHref="/market-maker"
      />
    </div>
  );
}
