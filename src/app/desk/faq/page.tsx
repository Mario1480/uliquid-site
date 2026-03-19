import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Section } from "@/components/ui/Section";
import { createPageMetadata, deskName } from "@/lib/seo";
import { deskFaqs } from "@/lib/content/desk";

export const metadata = createPageMetadata({
  title: "FAQ",
  description: "Common questions about uLiquid Desk, Hyperliquid vault access, strategy discovery, and the request-access launch flow.",
  canonical: "/desk/faq",
  siteName: deskName,
  openGraphTitle: `FAQ - ${deskName}`,
});

export default function DeskFaqPage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Desk FAQ</h1>
          <p className="mt-4 text-lg text-muted">
            Answers about product framing, who Desk is for, and how access works.
          </p>
        </div>
      </Section>

      <Section>
        <FAQAccordion items={deskFaqs} />
      </Section>

      <CTASection
        title="Ready to try the Desk path?"
        subtitle="Request access if you want a simpler, vault-first experience on Hyperliquid."
        primaryLabel="Request Access"
        primaryHref="/desk#request-access"
        secondaryLabel="Explore Features"
        secondaryHref="/desk/features"
      />
    </div>
  );
}
