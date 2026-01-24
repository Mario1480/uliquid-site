import { FAQAccordion } from "@/components/FAQAccordion";
import { PricingCards } from "@/components/PricingCards";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { FeatureMatrixTable } from "@/components/FeatureMatrixTable";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & License Tiers – uLiquid Market Maker",
  description:
    "Transparent pricing for uLiquid Market Maker licenses. Run on your own VPS with feature-based licensing and optional add-ons.",
};

const pricingFaqs = [
  {
    question: "Do I need my own VPS?",
    answer: "Yes. uLiquid Market Maker is fully self-hosted.",
  },
  {
    question: "How are features unlocked?",
    answer: "Via the integrated license server using feature flags.",
  },
  {
    question: "Can I run multiple instances?",
    answer: "Yes. One instance per customer or venue is recommended for isolation.",
  },
];

const addOns = [
  "Price Support Module",
  "Additional Exchange Connectors",
  "Extra Bots",
  "AI Recommendations (coming soon)",
];

export default function PricingPage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Pricing</h1>
          <p className="mt-4 text-lg text-muted">
            uLiquid Market Maker runs on your own VPS. Pricing applies to the software license, updates,
            and feature access — not infrastructure.
          </p>
        </div>
        <div className="mt-10">
          <PricingCards />
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-text">Feature Matrix</h2>
          <p className="mt-3 text-muted">Compare included modules and gated add-ons.</p>
          <div className="mt-6">
            <FeatureMatrixTable />
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-text">Add-ons</h2>
          <p className="mt-3 text-muted">Extend coverage as you scale.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {addOns.map((item) => (
            <Card key={item} className="text-sm text-muted">
              {item}
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-text">Pricing FAQ</h2>
        </div>
        <FAQAccordion items={pricingFaqs} />
      </Section>
    </div>
  );
}
