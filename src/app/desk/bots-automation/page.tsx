import { CTASection } from "@/components/CTASection";
import { DeskResourceSection } from "@/components/DeskResourceSection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Section } from "@/components/ui/Section";
import { createPageMetadata, deskName } from "@/lib/seo";
import { deskBotAutomationSections } from "@/lib/content/desk";

export const metadata = createPageMetadata({
  title: "Bots & Automation",
  description:
    "Explore how uLiquid Desk supports Hyperliquid bots, automation workflows, strategy-linked execution, user-friendly control surfaces, and connected CEX trading paths such as Bitget and MEXC where supported.",
  canonical: "/desk/bots-automation",
  siteName: deskName,
  openGraphTitle: `Bots & Automation - ${deskName}`,
});

export default function DeskBotsAutomationPage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Bots &amp; Automation on Desk</h1>
          <p className="mt-4 text-lg text-muted">
            Desk expands beyond vault access to support bot-driven workflows, strategy automation, and a
            cleaner control layer for Hyperliquid users, with connected CEX trading paths such as Bitget
            and MEXC where supported.
          </p>
        </div>
      </Section>

      <DeskResourceSection
        title="Desk resources"
        subtitle="Move between overview, features, vaults, bots, AI workflows, FAQ, and how-it-works pages without losing the product story."
      />

      <Section>
        <FeatureGrid
          title="How bots and automation fit"
          subtitle="Desk should make bot-driven workflows feel usable, understandable, and connected to the rest of the product path, including supported exchange execution where relevant."
          items={deskBotAutomationSections}
        />
      </Section>

      <CTASection
        title="Explore Desk before requesting access."
        subtitle="Start with the Desk overview, then request access when the bot and automation path fits what you want to do."
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
