import { FAQAccordion } from "@/components/FAQAccordion";
import { PricingCards } from "@/components/PricingCards";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { FeatureMatrixTable } from "@/components/FeatureMatrixTable";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & License Tiers – uLiquid Market Maker",
  description:
    "Transparent pricing for uLiquid Market Maker licenses. Managed VPS included with feature-based licensing and optional add-ons.",
};

const pricingFaqs = [
  {
    question: "Do I need my own VPS?",
    answer: "No. A dedicated VPS is included with your subscription.",
  },
  {
    question: "How are features unlocked?",
    answer: "Via the integrated license server using feature flags.",
  },
  {
    question: "Can I run multiple instances?",
    answer: "Yes. Instances are provisioned per license in the License Manager.",
  },
];

const addOns = [
  {
    title: "DEX Price Feed",
    description: "On-chain price reference for low-cap tokens (read-only).",
    label: "Add-on",
  },
  {
    title: "AI Advisory",
    description: "Read-only recommendations for safer and more efficient configs.",
    label: "Add-on",
  },
  {
    title: "Additional Bots",
    description: "Increase bot capacity under your license limits.",
    label: "Add-on",
  },
  {
    title: "Additional CEX connections",
    description: "Expand exchange coverage as needed.",
    label: "Add-on",
  },
];

export default function PricingPage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Pricing</h1>
          <p className="mt-4 text-lg text-muted">
            uLiquid Market Maker includes a managed VPS. Pricing applies to the software license, updates,
            and feature access — not infrastructure.
          </p>
          <p className="mt-3 text-sm text-muted">
            Manage your license, VPS details, and subscription in the Customer Portal / License Manager.
          </p>
        </div>
        <div className="mt-10">
          <PricingCards />
        </div>
        <div className="mt-10 grid gap-4 rounded-2xl border border-border/60 bg-surface/60 p-6 text-sm text-muted">
          <p className="font-semibold text-text">Pricing Notes</p>
          <p>VPS cost is included.</p>
          <p>No self-hosting required.</p>
          <p>License limits enforced by the Market Maker runtime.</p>
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
            <Card key={item.title} className="text-sm text-muted">
              <div className="flex items-center justify-between">
                <p className="text-base font-semibold text-text">{item.title}</p>
                <span className="text-xs font-semibold uppercase tracking-wide text-accent-cyan">
                  {item.label}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted">
          AI does not trade. DEX integrations are used for price feeds only.
        </p>
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
