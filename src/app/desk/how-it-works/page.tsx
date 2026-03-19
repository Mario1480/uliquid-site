import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/ui/Section";
import { createPageMetadata, deskName } from "@/lib/seo";
import { deskHowItWorks } from "@/lib/content/desk";

export const metadata = createPageMetadata({
  title: "How It Works",
  description: "How uLiquid Desk helps users discover vaults, allocate capital, and monitor strategy performance on Hyperliquid.",
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
            A simpler path into Hyperliquid vaults, from discovery and strategy context to allocation and monitoring.
          </p>
        </div>
      </Section>

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
        subtitle="Explore the vault layer and request access once the workflow fits what you want to do on Hyperliquid."
        primaryLabel="Request Access"
        primaryHref="/desk#request-access"
        secondaryLabel="Explore Vaults"
        secondaryHref="/desk/vaults"
      />
    </div>
  );
}
