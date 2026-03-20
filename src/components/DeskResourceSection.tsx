import Link from "next/link";
import { SectionIntro } from "@/components/SectionIntro";
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
      <SectionIntro eyebrow="Resource Map" title={title} description={subtitle} />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {deskSupportLinks.map((item) => (
          <Card key={item.href} className="border-border-strong/10">
            <h3 className="text-xl font-semibold text-text">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
            <Link
              href={item.href}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-cyan hover:text-text"
            >
              Explore
              <span aria-hidden="true">→</span>
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
