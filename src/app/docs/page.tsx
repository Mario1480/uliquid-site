import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation & Guides – uLiquid Market Maker",
  description:
    "Technical documentation for uLiquid Market Maker: setup guides, exchange integration, bots, price follow, price support, security, and production operations.",
};

const docsCards = [
  {
    title: "Quickstart: Docker & VPS Setup",
    description: "Deploy the stack on your VPS and wire up your domain.",
  },
  {
    title: "Connecting Exchange API Keys",
    description: "Add API keys with trading permissions only, no withdrawals.",
  },
  {
    title: "Creating a Market-Making Bot",
    description: "Choose pair, budgets, and distributions for market making.",
  },
  {
    title: "Volume Bot (Fill-Based Counter)",
    description: "Configure daily notional and real-fill tracking.",
  },
  {
    title: "Price Follow (Master / Slave)",
    description: "Use a feed-only master and execute elsewhere.",
  },
  {
    title: "Price Support & Budget Handling",
    description: "Set a floor price with alerts and auto-stop.",
  },
  {
    title: "Security & Access Control",
    description: "Roles, re-auth, and optional email 2FA.",
  },
  {
    title: "Production Operations & Backups",
    description: "Health checks, heartbeat alerts, and backups.",
  },
  {
    title: "License & Feature Gating",
    description: "Manage feature gates and tier limits.",
  },
  {
    title: "DEX Price Feed Add-on",
    description: "Read-only on-chain price references for validation and low-cap pairs.",
  },
  {
    title: "AI Advisory",
    description: "What the AI analyzes and what it does NOT do.",
  },
];

const miniGuides = [
  {
    title: "Quickstart: Docker & VPS Setup",
    description: "Use Docker Compose, set environment variables, and point your domain.",
  },
  {
    title: "Connecting Exchange API Keys",
    description: "Use trade-only permissions and verify connectivity before launch.",
  },
  {
    title: "Creating a Market-Making Bot",
    description: "Define the pair, budgets, and distributions for ladder depth.",
  },
  {
    title: "Volume Bot (Fill-Based Counter)",
    description: "Set daily notional targets and real-fill pacing limits.",
  },
  {
    title: "Price Follow (Master / Slave)",
    description: "Separate price discovery from execution using a feed-only master.",
  },
  {
    title: "Price Support & Budget Handling",
    description: "Allocate a support budget and configure depletion alerts.",
  },
  {
    title: "Security & Access Control",
    description: "Assign roles and require re-auth for sensitive actions.",
  },
  {
    title: "Production Operations & Backups",
    description: "Monitor runner heartbeat and verify backup schedules.",
  },
  {
    title: "License & Feature Gating",
    description: "Enable modules with license flags and track limits.",
  },
  {
    title: "DEX Price Feed Add-on",
    description: "Understand read-only on-chain pricing and validation workflows.",
  },
  {
    title: "AI Advisory",
    description: "Recommendations only, no auto-execution.",
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

      <Section>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-text">Mini Guides</h2>
          <p className="mt-3 text-muted">Quick references for operators getting started.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {miniGuides.map((guide) => (
            <details key={guide.title} className="rounded-2xl border border-border/60 bg-surface/60 p-5">
              <summary className="cursor-pointer text-sm font-semibold text-text">{guide.title}</summary>
              <p className="mt-3 text-sm text-muted">{guide.description}</p>
            </details>
          ))}
        </div>
      </Section>
    </div>
  );
}
