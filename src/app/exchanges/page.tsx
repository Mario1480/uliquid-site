import { RequestExchangeForm } from "@/components/RequestExchangeForm";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

const supportedExchanges = [
  "Exchange A",
  "Exchange B",
  "Exchange C",
  "Exchange D",
  "Exchange E",
  "Exchange F",
];

const roadmap = {
  Planned: ["Exchange G", "Exchange H"],
  "In progress": ["Exchange I"],
  Supported: ["Exchange A", "Exchange B"],
};

export default function ExchangesPage() {
  return (
    <div>
      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Exchanges</h1>
          <p className="mt-4 text-lg text-muted">
            Connector coverage is expanding. Submit a request and we will prioritize new venues.
          </p>
        </div>
      </Section>

      <Section>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-text">Supported exchanges</h2>
          <p className="mt-3 text-muted">Placeholder tiles until real connectors are listed.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {supportedExchanges.map((exchange) => (
            <Card key={exchange} className="text-sm text-muted">
              {exchange}
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-text">Connector roadmap</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(roadmap).map(([title, items]) => (
            <Card key={title}>
              <h3 className="text-lg font-semibold text-text">{title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-purple" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold text-text">Request an exchange</h2>
            <p className="mt-3 text-muted">
              Tell us which venue matters most. We will share status once it enters the roadmap.
            </p>
          </div>
          <RequestExchangeForm />
        </div>
      </Section>
    </div>
  );
}
