import { AppScreenshotPlaceholder } from "@/components/AppScreenshotPlaceholder";
import { CTASection } from "@/components/CTASection";
import { DeskResourceSection } from "@/components/DeskResourceSection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { JsonLd } from "@/components/JsonLd";
import { MetricStrip } from "@/components/MetricStrip";
import { PageHero } from "@/components/PageHero";
import { RequestAccessForm } from "@/components/RequestAccessForm";
import { SectionIntro } from "@/components/SectionIntro";
import { SurfacePanel } from "@/components/SurfacePanel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
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

      <PageHero
        eyebrow="uLiquid Desk"
        title={deskFormula}
        description="A user-friendly platform for Hyperliquid vaults, bots, AI-assisted workflows, strategy discovery, automation, performance visibility, and supported connected CEX trading workflows."
        backgroundVariant="desk"
        actions={
          <>
            <Button href="/desk#request-access">Request Access</Button>
            <Button href="/desk/how-it-works" variant="secondary">
              Learn How It Works
            </Button>
          </>
        }
        aside={
          <div className="grid gap-4">
            <AppScreenshotPlaceholder title="Desk Strategy Editor" src="/screens/strategy-editor.png" />
            <SurfacePanel tone="muted" className="grid gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-cyan">Desk thesis</p>
              <p className="text-lg font-semibold text-text">
                Advanced trading infrastructure becomes more useful when it feels productized instead of operator-heavy.
              </p>
              <div className="grid gap-3 text-sm leading-7 text-muted">
                <p>Vault-first product framing with a broader bot and strategy layer.</p>
                <p>AI-supported workflows and connected execution paths where supported.</p>
                <p>Automation, performance visibility, and allocation context built into the workflow.</p>
              </div>
            </SurfacePanel>
          </div>
        }
      />

      <Section className="pt-0">
        <MetricStrip
          items={[
            {
              label: "Entry Point",
              value: "Vault-first discovery",
              detail: "Start with Hyperliquid vault access, then branch into bots, AI, and automation from one product surface.",
            },
            {
              label: "Control Layer",
              value: "Guided workflows",
              detail: "Keep signals, decisions, monitoring, and connected trading context visible in one interface.",
            },
            {
              label: "Supported Reach",
              value: "Hyperliquid + connected CEX paths",
              detail: "Extend into supported exchange workflows such as Bitget and MEXC where available.",
            },
          ]}
        />
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-semibold text-text">What Desk is</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              uLiquid Desk gives users a simpler way to access Hyperliquid vaults, bots, strategies,
              AI-assisted workflows, automation, and supported connected trading paths without presenting
              them with operator-focused infrastructure.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-text">Why Desk exists</h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-muted">
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
          subtitle="Desk is designed to make Hyperliquid-first and supported connected trading workflows easier to access, understand, and manage."
          items={deskPillars}
        />
      </Section>

      <DeskResourceSection
        title="Build your Desk path"
        subtitle="Desk now has a fuller support surface across overview, features, vaults, bots, AI workflows, FAQ, and how-it-works pages."
      />

      <Section tone="muted">
        <SectionIntro
          eyebrow="Workflow"
          title="How it works"
          description="A simpler product flow from Hyperliquid discovery and decision support to connected execution and ongoing monitoring."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {deskHowItWorks.map((step, index) => (
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
          eyebrow="Audience"
          title="Who it is for"
          description="A broader, more accessible trading product story than Market Maker."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {deskAudience.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Badge>Launch Access</Badge>
            <h2 className="mt-5 text-3xl font-semibold text-text sm:text-4xl">Request Access</h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Desk is launching with a request-access flow. Tell us how you want to use vaults, bots,
              strategies, AI-assisted workflows, automation, or connected CEX trading paths such as Bitget
              and MEXC where supported.
            </p>
          </div>
          <RequestAccessForm />
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
