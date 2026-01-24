import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

type PricingCardsProps = {
  variant?: "teaser" | "full";
};

const tiers = [
  {
    name: "Basic",
    price: "$300 / month",
    description: "Managed VPS included. Core market making for one bot.",
    features: [
      "Dedicated VPS (included)",
      "1 CEX integration",
      "1 Bot",
      "Core Market Making",
      "Fill-based Volume Bot",
      "Telegram notifications",
    ],
  },
  {
    name: "Growth",
    price: "$500 / month",
    description: "Managed VPS with multi-exchange coverage.",
    features: [
      "Dedicated VPS (included)",
      "Up to 5 CEX integrations",
      "Up to 5 Bots",
      "Price Follow (Master / Slave)",
      "All Basic features",
    ],
  },
  {
    name: "Scale",
    price: "$700 / month",
    description: "Higher limits with priority provisioning.",
    features: [
      "Dedicated VPS (included)",
      "Up to 10 CEX integrations",
      "Up to 10 Bots",
      "Price Follow (Master / Slave)",
      "Price Support module",
      "Priority provisioning",
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
              <Button href="https://license-server.uliquid.vip/" className="w-full">
                Buy License
              </Button>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
