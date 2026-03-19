import { FeatureGrid } from "@/components/FeatureGrid";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/ui/Section";
import { createPageMetadata, deskDescription, deskName } from "@/lib/seo";
import { deskFeatureSections } from "@/lib/content/desk";

export const metadata = createPageMetadata({
  title: "Features",
  description: deskDescription,
  canonical: "/desk/features",
  siteName: deskName,
  openGraphTitle: `Features - ${deskName}`,
});

export default function DeskFeaturesPage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Desk Features</h1>
          <p className="mt-4 text-lg text-muted">
            Productized access to Hyperliquid vaults, strategy discovery, automation, and ongoing visibility.
          </p>
        </div>
      </Section>

      <Section>
        <FeatureGrid
          title="Core product layers"
          subtitle="Desk is designed to be cleaner and more accessible than operator tooling while still giving users control."
          items={deskFeatureSections}
        />
      </Section>

      <CTASection
        title="Start with the Desk experience."
        subtitle="Learn how the product flow works, then request access when the Desk path matches your goals."
        primaryLabel="Request Access"
        primaryHref="/desk#request-access"
        secondaryLabel="Learn How It Works"
        secondaryHref="/desk/how-it-works"
      />
    </div>
  );
}
