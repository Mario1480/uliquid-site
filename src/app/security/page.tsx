import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security – uLiquid Market Maker",
  description:
    "Encrypted exchange keys, workspace RBAC, re-auth for sensitive actions, optional email 2FA, alerts, and hardened session security.",
};

const securityItems = [
  {
    title: "Encrypted Exchange Keys",
    description: "API keys are encrypted at rest and can only be viewed or modified after re-authentication.",
  },
  {
    title: "Role-Based Access Control",
    description: "Granular permissions per workspace for Admins, Operators, and Viewers.",
  },
  {
    title: "Re-Authentication (OTP)",
    description: "Sensitive actions require a temporary verification code.",
  },
  {
    title: "Optional Email 2FA",
    description: "Additional account protection configurable per user.",
  },
  {
    title: "CSRF & Origin Protections",
    description: "Cookie-based authentication hardened with CSRF and origin checks.",
  },
  {
    title: "Managed VPS Architecture",
    description: "Dedicated infrastructure provisioned and maintained by uLiquid.",
  },
];

export default function SecurityPage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Security & Access Control</h1>
          <p className="mt-4 text-lg text-muted">
            Security is a core design principle of uLiquid Market Maker. The system is built to minimize risk
            while maintaining operational flexibility.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {securityItems.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-3 text-sm text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Card className="border-accent-blue/50">
          <h2 className="text-2xl font-semibold text-text">Security Contact</h2>
          <p className="mt-3 text-sm text-muted">
            Report vulnerabilities or security concerns to <span className="text-text">security@uliquid.vip</span>.
            We respond quickly and coordinate remediation.
          </p>
        </Card>
      </Section>
    </div>
  );
}
