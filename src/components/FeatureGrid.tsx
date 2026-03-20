import Link from "next/link";
import { SectionIntro } from "@/components/SectionIntro";
import { Card } from "@/components/ui/Card";

type FeatureItem = {
  title: string;
  description: string;
  id?: string;
  href?: string;
  linkLabel?: string;
};

type FeatureGridProps = {
  title?: string;
  subtitle?: string;
  items: FeatureItem[];
};

export function FeatureGrid({ title, subtitle, items }: FeatureGridProps) {
  return (
    <div>
      {title ? <SectionIntro title={title} description={subtitle} /> : null}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title}>
            <h3 id={item.id} className="text-xl font-semibold text-text">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
            {item.href ? (
              <Link
                href={item.href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-cyan hover:text-text"
              >
                {item.linkLabel ?? "Learn more"}
                <span aria-hidden="true">→</span>
              </Link>
            ) : null}
          </Card>
        ))}
      </div>
    </div>
  );
}
