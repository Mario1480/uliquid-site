import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/CTASection";
import { Section } from "@/components/ui/Section";
import { createPageMetadata, deskName } from "@/lib/seo";
import { deskVaultHighlights } from "@/lib/content/desk";

export const metadata = createPageMetadata({
  title: "Vaults",
  description: "uLiquid Desk helps users access Hyperliquid vaults through clearer strategy framing, allocation workflows, and ongoing transparency.",
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
            Desk frames Hyperliquid vaults as a user-facing product experience instead of a technical workflow.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
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
        subtitle="Desk is built to make Hyperliquid vault participation easier to understand, monitor, and control."
        primaryLabel="Request Access"
        primaryHref="/desk#request-access"
        secondaryLabel="Learn How It Works"
        secondaryHref="/desk/how-it-works"
      />
    </div>
  );
}
