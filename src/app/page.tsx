import { AppScreenshotPlaceholder } from "@/components/AppScreenshotPlaceholder";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { MetricStrip } from "@/components/MetricStrip";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { SurfacePanel } from "@/components/SurfacePanel";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import {
  brandName,
  createFaqJsonLd,
  createPageMetadata,
  marketMakerDescription,
  marketMakerSoftwareJsonLd,
  organizationJsonLd,
} from "@/lib/seo";
import {
  marketMakerBenefits,
  marketMakerBuiltFor,
  marketMakerHowItWorks,
  marketMakerResources,
  marketMakerTrustChips,
} from "@/lib/content/marketMaker";

export const metadata = createPageMetadata({
  title: "Professional Crypto Market Making",
  description: marketMakerDescription,
  canonical: "/",
  siteName: brandName,
  openGraphTitle: `${brandName} - Professional Crypto Market Making`,
});

const homeFaqs = [
  {
    question: "Who is uLiquid Market Maker for?",
    answer:
      "uLiquid Market Maker is built for token projects, listing teams, liquidity operators, and agencies that need managed execution infrastructure.",
  },
  {
    question: "What is included with the product?",
    answer:
      "A dedicated VPS, market-making and volume execution tooling, risk controls, reporting, and access through the License Manager.",
  },
  {
    question: "Does uLiquid trade on DEXs?",
    answer:
      "No. DEX integrations are used as read-only price feeds to improve price intelligence and validation.",
  },
  {
    question: "Does the AI trade automatically?",
    answer:
      "No. AI is advisory only. Operators stay in control and all trading remains deterministic.",
  },
];

export default function Home() {
  return (
    <div>
      <JsonLd data={organizationJsonLd} />
      <JsonLd data={marketMakerSoftwareJsonLd} />
      <JsonLd data={createFaqJsonLd(homeFaqs)} />

      <PageHero
        eyebrow="uLiquid Market Maker"
        title="Professional crypto market making for listing teams and operators"
        description="uLiquid Market Maker is a managed market-making system with dedicated VPS delivery, controlled execution, CEX and DEX price intelligence, runtime risk limits, and advisory AI."
        backgroundVariant="market"
        actions={
          <>
            <Button href="/market-maker">Explore Market Maker</Button>
            <Button href="/market-maker/pricing" variant="secondary">
              View Pricing
            </Button>
            <Button href="https://license-server.uliquid.vip/" variant="ghost">
              Buy License
            </Button>
          </>
        }
        aside={
          <div className="grid gap-4">
            <AppScreenshotPlaceholder
              title="Market Maker Dashboard"
              src="/screens/risk-controls.png"
              alt="uLiquid Market Maker dashboard showing risk controls, exchange operations, and liquidity automation settings"
              priority
            />
            <SurfacePanel tone="muted">
              <div className="flex flex-wrap gap-2">
                {marketMakerTrustChips.slice(0, 6).map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-full border border-border/80 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-muted"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </SurfacePanel>
          </div>
        }
      />

      <Section className="pt-0">
        <MetricStrip
          items={[
            {
              label: "Delivery",
              value: "Dedicated VPS included",
              detail: "Provisioned and maintained by uLiquid after purchase so teams can focus on execution.",
            },
            {
              label: "Execution",
              value: "Controlled market making",
              detail: "Spread control, volume execution, and runtime guardrails built for predictable operations.",
            },
            {
              label: "Intelligence",
              value: "CEX + DEX validation",
              detail: "Use centralized and on-chain pricing together as a safer reference layer for illiquid markets.",
            },
          ]}
        />
      </Section>

      <Section id="products" tone="muted">
        <SectionIntro
          eyebrow="Focus"
          title="Everything is centered on Market Maker"
          description="The public site now focuses on uLiquid Market Maker as the primary product for professional liquidity operations."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {marketMakerBuiltFor.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionIntro
          eyebrow="Benefits"
          title="Built for controlled, repeatable liquidity operations"
          description="Keep the public story focused on execution quality, risk controls, and exchange readiness."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {marketMakerBenefits.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionIntro
          eyebrow="Workflow"
          title="From purchase to live operations"
          description="A straightforward launch path for teams that want managed infrastructure instead of assembling their own stack."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {marketMakerHowItWorks.map((step, index) => (
            <Card key={step.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-cyan">Step {index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold text-text">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{step.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionIntro
          eyebrow="Resources"
          title="Use cases, guides, and supporting material"
          description="Everything below supports the Market Maker positioning and operator workflow."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {marketMakerResources.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">
                Market Maker-specific supporting content for evaluation, onboarding, and exchange preparation.
              </p>
              <Button href={item.href} variant="ghost" className="mt-4">
                Open resource
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionIntro
          eyebrow="FAQ"
          title="Common questions"
          description="Short answers for teams evaluating the Market Maker product."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {homeFaqs.map((item) => (
            <Card key={item.question}>
              <h3 className="text-lg font-semibold text-text">{item.question}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.answer}</p>
            </Card>
          ))}
        </div>
      </Section>

      <CTASection
        title="Launch market making without managing infrastructure."
        subtitle="Explore the product, review pricing, and purchase through the License Manager when you are ready."
        primaryLabel="Buy License"
        primaryHref="https://license-server.uliquid.vip/"
        secondaryLabel="Go to License Manager"
        secondaryHref="https://license-server.uliquid.vip/"
        tertiaryLabel="View Pricing"
        tertiaryHref="/market-maker/pricing"
      />
    </div>
  );
}
