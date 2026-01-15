import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const docsCards = [
  {
    title: "Quickstart",
    description: "Launch your first liquidity workflow in a few steps.",
  },
  {
    title: "Connect Exchange",
    description: "Add API keys with the correct permissions and scope.",
  },
  {
    title: "Configure Pairs",
    description: "Set spread, budget, and guardrails for each listing pair.",
  },
  {
    title: "Alerts",
    description: "Configure notifications for fills and risk triggers.",
  },
  {
    title: "Reports",
    description: "Generate listing-ready summaries and exports.",
  },
  {
    title: "FAQ",
    description: "Answers to common operational questions.",
  },
];

export default function DocsPage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Docs</h1>
          <p className="mt-4 text-lg text-muted">
            Lightweight documentation to get listing teams up and running fast.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {docsCards.map((card) => (
            <Card key={card.title}>
              <h3 className="text-lg font-semibold text-text">{card.title}</h3>
              <p className="mt-3 text-sm text-muted">{card.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
