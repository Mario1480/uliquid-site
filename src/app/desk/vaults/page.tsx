import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/CTASection";
import { DeskResourceSection } from "@/components/DeskResourceSection";
import { Section } from "@/components/ui/Section";
import { createPageMetadata, deskName } from "@/lib/seo";
import { deskVaultHighlights } from "@/lib/content/desk";

export const metadata = createPageMetadata({
  title: "Vaults",
  description:
    "uLiquid Desk helps users access Hyperliquid vaults through clearer strategy framing, allocation workflows, ongoing transparency, and connected bot, AI, and supported exchange execution context.",
  canonical: "/desk/vaults",
  siteName: deskName,
  openGraphTitle: `Vaults - ${deskName}`,
});

export default function DeskVaultsPage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Vaults on Desk</h1>
          <p className="mt-4 text-lg text-muted">
            Desk turns Hyperliquid vaults into a clearer product experience, with strategy context, bot and
            automation paths, AI-assisted decision support, and ongoing visibility built around the vault flow.
          </p>
        </div>
      </Section>

      <DeskResourceSection
        title="Desk resources"
        subtitle="Vaults are one part of the Desk ecosystem alongside features, bots, AI workflows, FAQ, and the main product overview."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {deskVaultHighlights.map((item) => (
            <Card key={item.title} className="border-emerald-400/20">
              <h2 className="text-xl font-semibold text-text">{item.title}</h2>
              <p className="mt-3 text-sm text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Card className="border-emerald-400/20">
          <h2 className="text-2xl font-semibold text-text">Beyond vault access</h2>
          <p className="mt-4 text-sm text-muted">
            Desk starts with Hyperliquid vaults as the clearest entry point, but it is not limited to vault
            discovery and allocation. From the vault layer, users can move into broader connected trading
            workflows, including bots, AI-assisted signals and decision support, and supported exchange
            execution paths.
          </p>
          <p className="mt-4 text-sm text-muted">
            Where available, that broader desk layer can extend into connected CEX environments such as
            Bitget and MEXC. The product story remains Hyperliquid-first, with connected execution added
            carefully where supported.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
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
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-text">What this looks like in practice</h2>
          <p className="mt-3 text-muted">
            Desk should feel concrete at every step, from first discovery to ongoing monitoring and control.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              title: "Compare vault paths before acting",
              description: "Review different vault workflows side by side so you can see which strategy path fits before you allocate.",
            },
            {
              title: "Understand the strategy before entry",
              description: "See how a vault is framed, what it is trying to do, and why it may fit before you enter.",
            },
            {
              title: "Move into bots and automation",
              description: "Start from a vault-first view, then continue into bot-driven or automated workflows through the same Desk layer.",
            },
            {
              title: "Track performance with more context",
              description: "Follow performance, allocations, AI-supported signals, and workflow context after entry instead of losing visibility once you commit.",
            },
            {
              title: "Stay in control without operator tooling",
              description: "Keep a clear view of what is happening without needing a heavy, operator-grade execution console.",
            },
          ].map((item) => (
            <Card key={item.title} className="border-emerald-400/20">
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-3 text-sm text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Card>
          <h2 className="text-2xl font-semibold text-text">Why vault-first matters</h2>
          <p className="mt-4 text-sm text-muted">
            Users should be able to understand what they are entering, how a strategy is framed, and what
            visibility they keep after they allocate. Desk is built around making that decision feel clearer
            and more controlled.
          </p>
        </Card>
      </Section>

      <CTASection
        title="Get closer to the vault workflow."
        subtitle="Start with the Desk overview, then request access when the vault and strategy path feels like the right next step."
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
