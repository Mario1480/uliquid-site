import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { brandName, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Company",
  description:
    "Learn about uLiquid and contact the team about Market Maker, Desk, liquidity operations, and vault-based trading workflows.",
  canonical: "/company",
  siteName: brandName,
});

export default function CompanyPage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Company</h1>
          <p className="mt-4 text-lg text-muted">
            uLiquid builds specialized crypto products for professional liquidity operations and
            user-friendly vault-based trading workflows.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div id="contact">
            <h2 className="text-3xl font-semibold text-text">Contact</h2>
            <p className="mt-3 text-muted">
              Tell us whether you are exploring Market Maker or Desk, what you want to achieve, and where
              you need help. We will respond quickly.
            </p>
          </div>
          <ContactForm />
        </div>
      </Section>

      <Section>
        <Card className="border-border/60">
          <h2 className="text-2xl font-semibold text-text">Careers</h2>
          <p className="mt-3 text-sm text-muted">
            We are always interested in operators who care about market structure, product design, and
            exchange readiness. Placeholder until roles are listed.
          </p>
        </Card>
      </Section>
    </div>
  );
}
