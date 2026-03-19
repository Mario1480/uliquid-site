import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/CTASection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { JsonLd } from "@/components/JsonLd";
import { RequestAccessForm } from "@/components/RequestAccessForm";
import { Section } from "@/components/ui/Section";
import { createPageMetadata, deskDescription, deskName, siteUrl } from "@/lib/seo";
import { deskAudience, deskHowItWorks, deskPillars, deskWhyItExists } from "@/lib/content/desk";

export const metadata = createPageMetadata({
  title: "The Vault Layer for Hyperliquid",
  description: deskDescription,
  canonical: "/desk",
  siteName: deskName,
  openGraphTitle: `${deskName} - The Vault Layer for Hyperliquid`,
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
            <h1 className="text-4xl font-semibold text-text sm:text-5xl">The Vault Layer for Hyperliquid</h1>
            <p className="mt-6 text-lg text-muted">
              A user-friendly platform for accessing vault-based strategies, automation, and performance on
              Hyperliquid.
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
              Advanced trading infrastructure becomes more useful when access, strategy discovery, and
              ongoing visibility feel productized instead of operator-heavy.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-muted">
              <p>Vault-first product framing</p>
              <p>Strategy access with cleaner control surfaces</p>
              <p>Automation and performance visibility built into the workflow</p>
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-semibold text-text">What Desk is</h2>
            <p className="mt-4 text-sm text-muted">
              uLiquid Desk gives users a simpler way to access vaults, strategies, and automation on
              Hyperliquid without presenting them with operator-focused infrastructure.
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
          title="Vaults, strategies, automation, visibility"
          subtitle="Desk is designed to make advanced infrastructure easier to access and manage."
          items={deskPillars}
        />
      </Section>

      <Section>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-text">How it works</h2>
          <p className="mt-3 text-muted">A simpler product flow from discovery to ongoing monitoring.</p>
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
          <p className="mt-3 text-muted">A broader, more accessible product story than Market Maker.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
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
              Desk is launching with a request-access flow. Tell us how you want to use vaults,
              strategies, and automation on Hyperliquid.
            </p>
          </div>
          <RequestAccessForm />
        </div>
      </Section>

      <CTASection
        title="Explore the Desk path."
        subtitle="Start with Desk if you want a cleaner vault-first experience on Hyperliquid, then request access when you are ready."
        primaryLabel="Request Access"
        primaryHref="/desk#request-access"
        secondaryLabel="Explore Vaults"
        secondaryHref="/desk/vaults"
      />
    </div>
  );
}
