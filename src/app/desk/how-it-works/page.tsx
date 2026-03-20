import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/CTASection";
import { DeskResourceSection } from "@/components/DeskResourceSection";
import { Section } from "@/components/ui/Section";
import { createPageMetadata, deskName } from "@/lib/seo";
import { deskHowItWorks } from "@/lib/content/desk";

export const metadata = createPageMetadata({
  title: "How It Works",
  description:
    "How uLiquid Desk helps users discover Hyperliquid vaults, bots, AI-assisted workflows, and strategies, then act with more context across connected trading paths and ongoing visibility.",
  canonical: "/desk/how-it-works",
  siteName: deskName,
  openGraphTitle: `How It Works - ${deskName}`,
});

export default function DeskHowItWorksPage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">How Desk Works</h1>
          <p className="mt-4 text-lg text-muted">
            A simpler path into Hyperliquid vaults, bots, AI workflows, and strategies, from discovery and
            context to action, connected execution, and monitoring.
          </p>
        </div>
      </Section>

      <DeskResourceSection
        title="Desk resources"
        subtitle="Jump between overview, features, vaults, bots, AI workflows, and FAQ while evaluating how the Desk path works."
      />

      <Section>
        <Card>
          <h2 className="text-2xl font-semibold text-text">How the product layers fit together</h2>
          <div className="mt-4 grid gap-3 text-sm leading-7 text-muted">
            <p>Desk starts with a Hyperliquid vault access layer that gives users a clearer entry point into strategies.</p>
            <p>It then extends into a bot and automation layer for users who want more active workflows.</p>
            <p>AI-assisted workflow support adds signals, context, and decision guidance on top of those product paths.</p>
            <p>Where supported, Desk can also act as a connected trading desk layer for execution paths beyond Hyperliquid, including venues such as Bitget and MEXC.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link href="/desk/vaults" className="font-semibold text-accent-cyan">
              Explore Vaults
            </Link>
            <Link href="/desk/bots-automation" className="font-semibold text-accent-cyan">
              Explore Bots &amp; Automation
            </Link>
            <Link href="/desk/ai-workflows" className="font-semibold text-accent-cyan">
              Explore AI Workflows
            </Link>
            <Link href="/desk/faq" className="font-semibold text-accent-cyan">
              Read Desk FAQ
            </Link>
          </div>
        </Card>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {deskHowItWorks.map((step, index) => (
            <Card key={step.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-cyan">Step {index + 1}</p>
              <h2 className="mt-3 text-lg font-semibold text-text">{step.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{step.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Card>
          <h2 className="text-2xl font-semibold text-text">Product direction</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Desk is meant to remove unnecessary operational overhead. The user journey should feel like a
            modern product flow instead of an execution console.
          </p>
        </Card>
      </Section>

      <CTASection
        title="See the Desk path in action."
        subtitle="Explore the Desk overview first, then request access once the workflow fits what you want to do across Hyperliquid and supported connected trading paths."
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
