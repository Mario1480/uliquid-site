import { FeatureGrid } from "@/components/FeatureGrid";
import { CTASection } from "@/components/CTASection";
import { DeskResourceSection } from "@/components/DeskResourceSection";
import { Section } from "@/components/ui/Section";
import { createPageMetadata, deskName } from "@/lib/seo";
import { deskFeatureSections } from "@/lib/content/desk";

export const metadata = createPageMetadata({
  title: "Features",
  description:
    "Explore uLiquid Desk features across Hyperliquid vaults, bots, AI-assisted workflows, strategies, automation, performance visibility, user-friendly controls, and connected CEX trading paths such as Bitget and MEXC where supported.",
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
            Productized access to Hyperliquid vaults, bots, AI workflows, strategy discovery, automation, ongoing visibility, and connected CEX trading paths where supported.
          </p>
        </div>
      </Section>

      <DeskResourceSection
        title="Desk resources"
        subtitle="Use the full Desk support surface to move between overview, vaults, bots, AI workflows, FAQ, and how the product works."
      />

      <Section>
        <FeatureGrid
          title="Core product layers"
          subtitle="Desk is designed to be cleaner and more accessible than operator tooling while still giving users control across Hyperliquid-first and supported connected exchange workflows."
          items={deskFeatureSections}
        />
      </Section>

      <CTASection
        title="Start with the Desk experience."
        subtitle="Explore the Desk overview first, then request access when the feature set and workflow match your goals."
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
