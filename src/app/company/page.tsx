import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export default function CompanyPage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Company</h1>
          <p className="mt-4 text-lg text-muted">
            uLiquid is built for small and mid-sized token projects and listing teams that need reliable
            liquidity without building a market-making desk.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div id="contact">
            <h2 className="text-3xl font-semibold text-text">Contact</h2>
            <p className="mt-3 text-muted">
              Tell us about your listing goals and preferred exchanges. We will respond quickly.
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
