import { AppScreenshotPlaceholder } from "@/components/AppScreenshotPlaceholder";
import { Section } from "@/components/ui/Section";
import { Tabs } from "@/components/Tabs";
import { Card } from "@/components/ui/Card";

const tabItems = [
  {
    title: "Dashboard",
    content: (
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <AppScreenshotPlaceholder title="Dashboard – Health & KPIs" />
        <ul className="space-y-3 text-sm text-muted">
          <li>Status overview for all pairs and venues.</li>
          <li>KPI tiles for spread, inventory, and uptime.</li>
          <li>Alert feed for fills, disconnects, and risk triggers.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Strategy",
    content: (
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <AppScreenshotPlaceholder title="Strategy Editor" />
        <ul className="space-y-3 text-sm text-muted">
          <li>Set base spread, layers, and refresh intervals.</li>
          <li>Adjust depth distribution and quote placement.</li>
          <li>Guardrails for volatility and minimum distance.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Risk",
    content: (
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <AppScreenshotPlaceholder title="Risk Controls" />
        <ul className="space-y-3 text-sm text-muted">
          <li>Exposure caps per asset and per venue.</li>
          <li>Drawdown thresholds with auto-pausing controls.</li>
          <li>Kill switch for instant shutdown across pairs.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Reports",
    content: (
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <AppScreenshotPlaceholder title="Listing Reports" />
        <ul className="space-y-3 text-sm text-muted">
          <li>Stability reports tailored for listing teams.</li>
          <li>Exports and summaries for internal review.</li>
          <li>Shareable metrics for ongoing exchange check-ins.</li>
        </ul>
      </div>
    ),
  },
];

export default function ProductPage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Product</h1>
          <p className="mt-4 text-lg text-muted">
            Every workflow your listing team needs — from setup to reporting — in a single SaaS platform.
          </p>
        </div>
        <div className="mt-10">
          <Tabs items={tabItems} />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-text">Product Tour</h2>
            <p className="mt-4 text-muted">
              Configure a pair, set budgets, and go live with full monitoring in minutes. uLiquid keeps all
              strategy, risk, and reporting controls in one place so your team stays aligned.
            </p>
            <div className="mt-6 grid gap-4">
              {["Connect exchange API keys", "Define pair rules and budgets", "Monitor fills and export reports"].map(
                (item) => (
                  <Card key={item} className="border-border/60 bg-surface/60">
                    <p className="text-sm text-muted">{item}</p>
                  </Card>
                )
              )}
            </div>
          </div>
          <AppScreenshotPlaceholder title="Pairs & Configuration" aspect="4:3" />
        </div>
      </Section>
    </div>
  );
}
