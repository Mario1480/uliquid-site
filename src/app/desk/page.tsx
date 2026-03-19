import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/CTASection";
import { DeskResourceSection } from "@/components/DeskResourceSection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { JsonLd } from "@/components/JsonLd";
import { RequestAccessForm } from "@/components/RequestAccessForm";
import { Section } from "@/components/ui/Section";
import { createPageMetadata, deskDescription, deskName, siteUrl } from "@/lib/seo";
import { deskAudience, deskFormula, deskHowItWorks, deskPillars, deskWhyItExists } from "@/lib/content/desk";

export const metadata = createPageMetadata({
  title: deskFormula,
  description: deskDescription,
  canonical: "/desk",
  siteName: deskName,
  openGraphTitle: `${deskName} - ${deskFormula}`,
});

export default function DeskPage() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: deskName,
          applicationCategory: "FinancialProduct",
          url: `${siteUrl}/desk`,
          description: deskDescription,
        }}
      />

      <Section className="pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Badge className="mb-4 border-emerald-400/40 text-emerald-300">uLiquid Desk</Badge>
            <h1 className="text-4xl font-semibold text-text sm:text-5xl">{deskFormula}</h1>
            <p className="mt-6 text-lg text-muted">
              A user-friendly platform for Hyperliquid vaults, bots, AI-assisted workflows, strategy
              discovery, automation, and performance visibility.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#request-access"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-300 via-accent-cyan to-accent-blue px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md transition hover:shadow-glow"
              >
                Request Access
              </a>
              <a
                href="/desk/how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-border bg-surface/60 px-5 py-2.5 text-sm font-semibold text-text transition hover:border-accent-blue"
              >
                Learn How It Works
              </a>
            </div>
          </div>
          <Card className="border-emerald-400/30 bg-gradient-to-br from-emerald-400/10 via-background to-accent-blue/10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Desk Thesis</p>
            <p className="mt-5 text-lg text-text">
              Advanced trading infrastructure becomes more useful when vaults, bots, AI-assisted workflows,
              strategy discovery, and ongoing visibility feel productized instead of operator-heavy.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-muted">
              <p>Vault-first product framing with a broader bot and strategy layer</p>
              <p>AI-supported workflows and strategy access with cleaner control surfaces</p>
              <p>Automation, performance visibility, and allocation context built into the workflow</p>
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-semibold text-text">What Desk is</h2>
            <p className="mt-4 text-sm text-muted">
              uLiquid Desk gives users a simpler way to access Hyperliquid vaults, bots, strategies,
              AI-assisted workflows, and automation without presenting them with operator-focused
              infrastructure.
            </p>
          </Card>
          <Card className="border-emerald-400/30">
            <h2 className="text-2xl font-semibold text-text">Why Desk exists</h2>
            <div className="mt-4 space-y-3 text-sm text-muted">
              {deskWhyItExists.map((reason) => (
                <p key={reason}>{reason}</p>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <FeatureGrid
          title="Vaults, bots, AI workflows, strategies, automation, visibility"
          subtitle="Desk is designed to make advanced infrastructure easier to access, understand, and manage."
          items={deskPillars}
        />
      </Section>

      <DeskResourceSection
        title="Build your Desk path"
        subtitle="Desk now has a fuller support surface across overview, features, vaults, bots, AI workflows, FAQ, and how-it-works pages."
      />

      <Section>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-text">How it works</h2>
          <p className="mt-3 text-muted">A simpler product flow from discovery and decision support to ongoing monitoring.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {deskHowItWorks.map((step, index) => (
            <Card key={step.title} className="border-emerald-400/20">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Step {index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold text-text">{step.title}</h3>
              <p className="mt-3 text-sm text-muted">{step.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-text">Who it is for</h2>
          <p className="mt-3 text-muted">A broader, more accessible trading product story than Market Maker.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {deskAudience.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-3 text-sm text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold text-text">Request Access</h2>
            <p className="mt-4 text-muted">
              Desk is launching with a request-access flow. Tell us how you want to use vaults, bots,
              strategies, AI-assisted workflows, and automation on Hyperliquid.
            </p>
          </div>
          <RequestAccessForm />
        </div>
      </Section>

      <CTASection
        title="Explore the Desk path."
        subtitle="Start with Desk if you want a cleaner Hyperliquid experience across vaults, bots, AI-assisted workflows, strategies, automation, and visibility."
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
