import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const securityItems = [
  {
    title: "API Key Permissions",
    description: "Trading-only permissions with no withdrawal access. Keys are scoped per exchange connector.",
  },
  {
    title: "Encryption",
    description: "Designed to encrypt data in transit and at rest across platform services.",
  },
  {
    title: "Project Isolation",
    description: "Workspaces are segmented to keep strategies and reports separated per project.",
  },
  {
    title: "Audit Logs",
    description: "Track team activity, changes, and system events in a centralized log.",
  },
  {
    title: "Operational Safety",
    description: "Kill switch, rate limit handling, and alerting to protect active orderbooks.",
  },
];

export default function SecurityPage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Security</h1>
          <p className="mt-4 text-lg text-muted">
            uLiquid is built to keep your liquidity operations secure, isolated, and observable.
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
