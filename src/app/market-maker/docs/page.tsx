import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { createPageMetadata, marketMakerName } from "@/lib/seo";
import { marketMakerDocsCards, marketMakerMiniGuides } from "@/lib/content/marketMaker";

export const metadata = createPageMetadata({
  title: "Docs",
  description:
    "Guides for setup, bots, price follow, price support, DEX price feeds, AI advisory, security, and production operations.",
  canonical: "/market-maker/docs",
  siteName: marketMakerName,
  openGraphTitle: `Docs - ${marketMakerName}`,
});

export default function DocsPage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Documentation</h1>
          <p className="mt-4 text-lg text-muted">
            Lightweight documentation to get listing teams up and running fast.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {marketMakerDocsCards.map((card) => (
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
          {marketMakerMiniGuides.map((guide) => (
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
