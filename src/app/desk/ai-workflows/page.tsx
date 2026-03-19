import { CTASection } from "@/components/CTASection";
import { DeskResourceSection } from "@/components/DeskResourceSection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Section } from "@/components/ui/Section";
import { createPageMetadata, deskName } from "@/lib/seo";
import { deskAiWorkflowSections } from "@/lib/content/desk";

export const metadata = createPageMetadata({
  title: "AI Workflows",
  description:
    "Learn how uLiquid Desk brings AI-assisted signals, decision support, and workflow context into Hyperliquid vault, bot, and strategy experiences.",
  canonical: "/desk/ai-workflows",
  siteName: deskName,
  openGraphTitle: `AI Workflows - ${deskName}`,
});

export default function DeskAiWorkflowsPage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">AI Workflows on Desk</h1>
          <p className="mt-4 text-lg text-muted">
            Desk is designed to bring AI-assisted signals and decision support into a cleaner Hyperliquid
            product flow across vaults, bots, strategies, and automation.
          </p>
        </div>
      </Section>

      <DeskResourceSection
        title="Desk resources"
        subtitle="Explore how AI workflows fit alongside vaults, bots, automation, features, and the main Desk overview."
      />

      <Section>
        <FeatureGrid
          title="How AI fits into Desk"
          subtitle="AI on Desk should strengthen workflow clarity and decision support rather than feel like a disconnected feature."
          items={deskAiWorkflowSections}
        />
      </Section>

      <CTASection
        title="Explore Desk before requesting access."
        subtitle="Start with the Desk overview, then request access when the AI-assisted workflow path matches your goals."
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
