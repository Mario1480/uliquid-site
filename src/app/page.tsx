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
  createFaqJsonLd,
  createPageMetadata,
  deskDescription,
  deskSoftwareJsonLd,
  marketMakerSoftwareJsonLd,
  marketMakerDescription,
  organizationJsonLd,
  siteUrl,
} from "@/lib/seo";
import { deskCapabilities, deskFormula } from "@/lib/content/desk";

export const metadata = createPageMetadata({
  title: "Hyperliquid Vaults, Bots & AI Trading Desk",
  description:
    "uLiquid Desk helps Hyperliquid users access vaults, run bots, use AI-assisted workflows, and manage connected trading paths.",
  canonical: "/",
  siteName: brandName,
  openGraphTitle: `${brandName} - Hyperliquid vaults, bots and AI workflows`,
});

const homeFaqs = [
  {
    question: "What is uLiquid Desk?",
    answer:
      "uLiquid Desk is a Hyperliquid-first trading workspace for vault access, bot automation, strategy discovery, AI-assisted workflows, performance visibility, and supported connected execution paths.",
  },
  {
    question: "Who should start with Desk?",
    answer:
      "Desk is the default path for vault users, strategy followers, bot users, automation-oriented traders, and users who want a clearer product experience around Hyperliquid workflows.",
  },
  {
    question: "When is uLiquid Market Maker the better fit?",
    answer:
      "Market Maker is the specialized route for token projects, listing teams, liquidity operators, and agencies that need managed infrastructure, spread control, risk limits, and reporting.",
  },
  {
    question: "Does uLiquid support connected exchange workflows?",
    answer:
      "uLiquid Desk is Hyperliquid-first and can support connected CEX trading paths such as Bitget and MEXC where available. Market Maker supports a broader operator-focused exchange stack.",
  },
];

export default function Home() {
  return (
    <div>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={deskSoftwareJsonLd} />
      <JsonLd data={marketMakerSoftwareJsonLd} />
      <JsonLd data={createFaqJsonLd(homeFaqs)} />
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
        title="Hyperliquid vaults, bots and AI trading workflows"
        description="Start with uLiquid Desk to access Hyperliquid vaults, run bot automation, use AI-assisted workflow context, and manage supported connected execution. Market Maker remains the operator-grade path for teams that need dedicated liquidity infrastructure."
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
            <AppScreenshotPlaceholder
              title="Desk Overview"
              src="/screens/overview-dashboard.jpg"
              alt="uLiquid Desk overview dashboard showing Hyperliquid vaults, strategy performance, and trading workflow controls"
              priority
            />
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
          title="Choose the right uLiquid trading product"
          description="Desk is the user-facing path for Hyperliquid vaults, bots, AI workflows, and supported connected trading. Market Maker is the specialized infrastructure path for liquidity teams and operators."
        />
        <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {[
            {
              title: "Vault access",
              description: "A simpler route into Hyperliquid vaults, strategy context, and allocation workflows.",
            },
            {
              title: "Bots",
              description: "Productized bot automation without operator-style configuration overhead.",
            },
            {
              title: "AI workflows",
              description: "AI-assisted trading context that helps users evaluate strategy decisions.",
            },
            {
              title: "Automation",
              description: "Trading automation with clearer controls, monitoring, and performance visibility.",
            },
            {
              title: "Connected execution",
              description: "Supported CEX trading paths such as Bitget and MEXC where available.",
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
              <p>Use Desk for vault access, bot automation, AI-assisted strategy context, connected CEX trading paths, performance visibility, and clearer control surfaces.</p>
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
              <p>Use Market Maker for execution, spread control, runtime risk limits, reporting, and managed VPS delivery.</p>
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
          description="Desk combines Hyperliquid vault access with bot automation, AI-assisted workflows, strategy discovery, connected execution, and performance visibility in one user-facing product."
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
          description="Desk is the default product path for most trading users. Market Maker is the operator-grade route for teams with specialized liquidity requirements."
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

      <Section tone="muted">
        <SectionIntro
          eyebrow="FAQ"
          title="Common questions about uLiquid"
          description="Short answers for users comparing the Desk and Market Maker paths."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {homeFaqs.map((item) => (
            <Card key={item.question}>
              <h3 className="text-lg font-semibold text-text">{item.question}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.answer}</p>
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
