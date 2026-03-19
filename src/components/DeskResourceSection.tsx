import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { deskSupportLinks } from "@/lib/content/desk";

type DeskResourceSectionProps = {
  title?: string;
  subtitle?: string;
};

export function DeskResourceSection({
  title = "Explore the Desk product path",
  subtitle = "Desk is easier to understand when overview, features, vaults, bots, AI workflows, and FAQ are all easy to discover.",
}: DeskResourceSectionProps) {
  return (
    <Section>
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-text">{title}</h2>
        <p className="mt-3 text-muted">{subtitle}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {deskSupportLinks.map((item) => (
          <Card key={item.href} className="border-emerald-400/20">
            <h3 className="text-lg font-semibold text-text">{item.title}</h3>
            <p className="mt-3 text-sm text-muted">{item.description}</p>
            <Link href={item.href} className="mt-4 inline-flex text-sm font-semibold text-accent-cyan">
              Explore {"->"}
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
