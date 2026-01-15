import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

type PricingCardsProps = {
  variant?: "teaser" | "full";
};

const tiers = [
  {
    name: "Starter",
    price: "from $X/mo",
    description: "Launch liquidity for a single project.",
    features: [
      "1 project",
      "1-2 pairs",
      "Standard monitoring",
      "Basic reports",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "from $X/mo",
    description: "Scale across more pairs and teams.",
    features: [
      "More pairs/projects (placeholder)",
      "Advanced risk controls",
      "Webhook alerts",
      "Report exports",
      "Roles & access",
    ],
  },
  {
    name: "Scale",
    price: "from $X/mo",
    description: "Complex liquidity programs with SLA support.",
    features: [
      "Many projects/pairs (placeholder)",
      "SLA placeholder",
      "Priority support",
      "Custom reports",
      "Fast-track exchange requests",
    ],
  },
];

export function PricingCards({ variant = "full" }: PricingCardsProps) {
  const isTeaser = variant === "teaser";

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {tiers.map((tier, index) => (
        <Card
          key={tier.name}
          className={cn(
            "flex h-full flex-col",
            index === 1 ? "border-accent-blue/60 shadow-lg" : "border-border"
          )}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-text">{tier.name}</h3>
            {index === 1 ? (
              <span className="rounded-full border border-accent-blue/50 px-3 py-1 text-xs font-semibold text-accent-blue">
                Most popular
              </span>
            ) : null}
          </div>
          <p className="mt-3 text-2xl font-semibold text-text">{tier.price}</p>
          <p className="mt-2 text-sm text-muted">{tier.description}</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-blue" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          {isTeaser ? null : (
            <div className="mt-6">
              <Button href="/app" className="w-full">
                Start Free Trial
              </Button>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
