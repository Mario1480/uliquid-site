import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/CTASection";
import { DeskResourceSection } from "@/components/DeskResourceSection";
import { Section } from "@/components/ui/Section";
import { createPageMetadata, deskName } from "@/lib/seo";
import { deskVaultHighlights } from "@/lib/content/desk";

export const metadata = createPageMetadata({
  title: "Vaults",
  description:
    "uLiquid Desk helps users access Hyperliquid vaults through clearer strategy framing, allocation workflows, ongoing transparency, and connected bot and AI workflow context.",
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
            Desk frames Hyperliquid vaults as a user-facing product experience connected to strategies, bots, AI workflows, and ongoing visibility.
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
        <Card>
          <h2 className="text-2xl font-semibold text-text">Why vault-first matters</h2>
          <p className="mt-4 text-sm text-muted">
            Users should be able to understand what they are allocating into, how a strategy is framed, and
            what visibility they keep after entering. Desk is built around that idea.
          </p>
        </Card>
      </Section>

      <CTASection
        title="Get closer to the vault workflow."
        subtitle="Explore the Desk overview first, then request access when the vault and strategy path feels right for you."
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
