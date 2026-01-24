import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login – uLiquid Market Maker",
  description: "Secure login for uLiquid Market Maker. Access your workspace, bots, and trading operations.",
};

export default function AppLoginPage() {
  return (
    <div>
      <Section className="pt-24">
        <div className="mx-auto max-w-xl">
          <Card className="text-center">
            <h1 className="text-3xl font-semibold text-text">Login to uLiquid</h1>
            <p className="mt-3 text-sm text-muted">
              License required. Contact us if you need onboarding support.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Button>Continue with Email</Button>
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
