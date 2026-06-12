import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { brandName, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Company",
  description:
    "Learn about uLiquid and contact the team about Market Maker, liquidity operations, and exchange readiness.",
  canonical: "/company",
  siteName: brandName,
});

export default function CompanyPage() {
  return (
    <div>
      <PageHero
        eyebrow="Company"
        title="The team behind uLiquid Market Maker"
        description="uLiquid builds specialized crypto software for professional liquidity operations, exchange readiness, and controlled execution."
        backgroundVariant="neutral"
        actions={<Button href="#contact">Contact the team</Button>}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div id="contact">
            <h2 className="text-3xl font-semibold text-text">Contact</h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Tell us what you want to achieve with Market Maker, your exchange setup, and where you need
              help. We will respond quickly.
            </p>
          </div>
          <ContactForm />
        </div>
      </Section>

      <Section tone="muted">
        <Card className="border-border/60">
          <h2 className="text-2xl font-semibold text-text">Careers</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            We are always interested in operators who care about market structure, product design, and
            exchange readiness. Placeholder until roles are listed.
          </p>
        </Card>
      </Section>
    </div>
  );
}
