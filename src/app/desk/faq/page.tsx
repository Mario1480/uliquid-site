import { CTASection } from "@/components/CTASection";
import { DeskResourceSection } from "@/components/DeskResourceSection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/ui/Section";
import { createFaqJsonLd, createPageMetadata, deskName } from "@/lib/seo";
import { deskFaqs } from "@/lib/content/desk";

export const metadata = createPageMetadata({
  title: "FAQ",
  description: "Common questions about uLiquid Desk, Hyperliquid vaults, bots, AI-assisted workflows, strategies, automation, and supported connected CEX trading paths such as Bitget and MEXC where available.",
  canonical: "/desk/faq",
  siteName: deskName,
  openGraphTitle: `FAQ - ${deskName}`,
});

export default function DeskFaqPage() {
  return (
    <div>
      <JsonLd data={createFaqJsonLd(deskFaqs)} />
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Desk FAQ</h1>
          <p className="mt-4 text-lg text-muted">
            Answers about product framing, vaults, bots, AI-assisted workflows, automation, connected trading paths, visibility, and how access works.
          </p>
        </div>
      </Section>

      <DeskResourceSection
        title="Desk resources"
        subtitle="The FAQ is one part of the Desk path. Explore overview, features, vaults, bots, AI workflows, and how-it-works pages for the full product picture."
      />

      <Section>
        <FAQAccordion items={deskFaqs} />
      </Section>

      <CTASection
        title="Ready to try the Desk path?"
        subtitle="Explore Desk first, then request access when the broader Hyperliquid product path across vaults, bots, AI workflows, automation, and supported connected CEX trading fits your goals."
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
