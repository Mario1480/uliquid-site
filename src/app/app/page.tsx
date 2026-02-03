import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "License Manager – uLiquid Market Maker",
  description:
    "Manage your uLiquid Market Maker license, VPS details, and subscription in the Customer Portal.",
  alternates: {
    canonical: "/app",
  },
};

export default function AppLoginPage() {
  return (
    <div>
      <Section className="pt-24">
        <div className="mx-auto max-w-xl">
          <Card className="text-center">
            <h1 className="text-3xl font-semibold text-text">Customer Portal / License Manager</h1>
            <p className="mt-3 text-sm text-muted">
              Manage your license, VPS details, and subscription in the uLiquid License Manager.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Button href="https://license-server.uliquid.vip/">Go to License Manager</Button>
              <Button href="/company#contact" variant="secondary">
                Contact Sales
              </Button>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
