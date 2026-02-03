import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "FAQ – uLiquid Market Maker",
  description:
    "Answers to common questions about uLiquid Market Maker, managed VPS, DEX price feeds, AI advisory, licensing, and security.",
};

const faqs = [
  {
    question: "Is the VPS included?",
    answer:
      "Yes. A dedicated VPS is provisioned and maintained by uLiquid after license purchase.",
  },
  {
    question: "Do you need withdrawal permissions on exchanges?",
    answer: "No. Trade-only API keys are sufficient.",
  },
  {
    question: "Does uLiquid trade on DEXs?",
    answer: "No. DEX integrations are used as read-only price feeds.",
  },
  {
    question: "Does the AI control my bots?",
    answer: "No. AI provides recommendations only and never executes trades.",
  },
  {
    question: "How does licensing work?",
    answer:
      "Features and limits are enabled via the License Manager using feature flags tied to your plan.",
  },
  {
    question: "Which exchanges are supported?",
    answer: "Current CEX integrations: Bitmart, Coinstore, and Pionex.",
  },
  {
    question: "How long does setup take?",
    answer:
      "After purchase, your VPS is provisioned automatically and credentials are sent by email.",
  },
  {
    question: "What security controls are included?",
    answer:
      "Workspace RBAC, re-authentication for sensitive actions, optional email 2FA, and encrypted keys.",
  },
  {
    question: "What happens if the runner stops?",
    answer:
      "Heartbeat monitoring detects outages and triggers alerts so operators can respond quickly.",
  },
  {
    question: "Do you provide backups?",
    answer:
      "Yes. Automated backups support recovery of configuration and state.",
  },
  {
    question: "Can I manage my subscription and VPS details?",
    answer:
      "Yes. Use the Customer Portal / License Manager at license-server.uliquid.vip.",
  },
  {
    question: "Can I run multiple instances?",
    answer:
      "Yes. Instances are provisioned per license in the License Manager.",
  },
];

export default function FaqPage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">FAQ</h1>
          <p className="mt-4 text-lg text-muted">
            Clear answers about licensing, security, and how the managed VPS model works.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((item) => (
            <Card key={item.question}>
              <h2 className="text-lg font-semibold text-text">{item.question}</h2>
              <p className="mt-3 text-sm text-muted">{item.answer}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap gap-3 text-sm text-muted">
          <Link href="/pricing" className="text-accent-cyan font-semibold">
            View pricing →
          </Link>
          <Link href="/product" className="text-accent-cyan font-semibold">
            See product features →
          </Link>
          <a
            href="https://license-server.uliquid.vip/"
            className="text-accent-cyan font-semibold"
          >
            Go to License Manager →
          </a>
        </div>
      </Section>
    </div>
  );
}
