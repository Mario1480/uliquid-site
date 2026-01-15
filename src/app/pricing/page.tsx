import { FAQAccordion } from "@/components/FAQAccordion";
import { PricingCards } from "@/components/PricingCards";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const pricingFaqs = [
  {
    question: "Is there a free trial?",
    answer: "Yes. Start with a guided trial and upgrade when you are ready to go live.",
  },
  {
    question: "Can I upgrade or downgrade later?",
    answer: "Plans can be adjusted at any time as your liquidity needs change.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. Your plan remains active through the current billing cycle.",
  },
  {
    question: "Do you offer invoicing?",
    answer: "Invoicing and custom billing are available for the Scale plan.",
  },
];

const addOns = ["Extra exchange", "Extra pairs", "Additional seats"];

export default function PricingPage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Pricing</h1>
          <p className="mt-4 text-lg text-muted">
            Transparent plans for growing token projects and listing teams.
          </p>
        </div>
        <div className="mt-10">
          <PricingCards />
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
