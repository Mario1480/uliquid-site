import Link from "next/link";
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
      {title ? (
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-text">{title}</h2>
          {subtitle ? <p className="mt-3 text-muted">{subtitle}</p> : null}
        </div>
      ) : null}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title}>
            <h3 id={item.id} className="text-lg font-semibold text-text">
              {item.title}
            </h3>
            <p className="mt-3 text-sm text-muted">{item.description}</p>
            {item.href ? (
              <Link href={item.href} className="mt-4 inline-flex text-sm font-semibold text-accent-cyan">
                {item.linkLabel ?? "Learn more →"}
              </Link>
            ) : null}
          </Card>
        ))}
      </div>
    </div>
  );
}
