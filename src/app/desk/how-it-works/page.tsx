import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/CTASection";
import { DeskResourceSection } from "@/components/DeskResourceSection";
import { Section } from "@/components/ui/Section";
import { createPageMetadata, deskName } from "@/lib/seo";
import { deskHowItWorks } from "@/lib/content/desk";

export const metadata = createPageMetadata({
  title: "How It Works",
  description:
    "How uLiquid Desk helps users discover Hyperliquid vaults, bots, AI-assisted workflows, and strategies, then act with more context and ongoing visibility.",
  canonical: "/desk/how-it-works",
  siteName: deskName,
  openGraphTitle: `How It Works - ${deskName}`,
});

export default function DeskHowItWorksPage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">How Desk Works</h1>
          <p className="mt-4 text-lg text-muted">
            A simpler path into Hyperliquid vaults, bots, AI workflows, and strategies, from discovery and context to action and monitoring.
          </p>
        </div>
      </Section>

      <DeskResourceSection
        title="Desk resources"
        subtitle="Jump between overview, features, vaults, bots, AI workflows, and FAQ while evaluating how the Desk path works."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {deskHowItWorks.map((step, index) => (
            <Card key={step.title} className="border-emerald-400/20">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Step {index + 1}</p>
              <h2 className="mt-3 text-lg font-semibold text-text">{step.title}</h2>
              <p className="mt-3 text-sm text-muted">{step.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Card>
          <h2 className="text-2xl font-semibold text-text">Product direction</h2>
          <p className="mt-4 text-sm text-muted">
            Desk is meant to remove unnecessary operational overhead. The user journey should feel like a
            modern product flow instead of an execution console.
          </p>
        </Card>
      </Section>

      <CTASection
        title="See the Desk path in action."
        subtitle="Explore the Desk overview first, then request access once the workflow fits what you want to do on Hyperliquid."
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
