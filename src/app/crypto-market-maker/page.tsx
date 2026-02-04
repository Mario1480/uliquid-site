import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/JsonLd";

const title = "Crypto Market Maker Software | uLiquid";
const description =
  "Managed VPS crypto market maker software for token projects. Market making, volume bot, price follow, price support, DEX price feeds, and AI advisory.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "uLiquid Market Maker",
  },
};

const faqItems = [
  {
    q: "Is uLiquid a crypto market maker SaaS?",
    a: "Yes. uLiquid is delivered as a managed service with a dedicated VPS included in the monthly subscription. You manage licensing, VPS details, and limits in the License Manager.",
  },
  {
    q: "Do you need withdrawal permissions on exchanges?",
    a: "No. uLiquid is designed to run with trade-only API permissions.",
  },
  {
    q: "Does uLiquid trade on DEXs?",
    a: "No. DEX integrations are used as read-only price feeds for reference and validation.",
  },
  {
    q: "Does the AI control my bots?",
    a: "No. AI is advisory only. It provides recommendations and never executes trades.",
  },
  {
    q: "How fast can we go live?",
    a: "After purchase, a dedicated VPS is provisioned automatically and access credentials are sent via email.",
  },
  {
    q: "Which exchanges are supported?",
    a: "Current CEX integrations include Bitmart, Coinstore, and Pionex. Additional exchanges can be added based on demand.",
  },
];

export default function CryptoMarketMakerPage() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "uLiquid Market Maker",
          applicationCategory: "FinancialTradingSoftware",
          operatingSystem: "Linux (Managed VPS)",
          url: "https://uliquid.vip/crypto-market-maker",
          description,
          offers: {
            "@type": "Offer",
            url: "https://license-server.uliquid.vip/",
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        }}
      />

      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Crypto Market Maker Software</h1>
          <p className="mt-4 text-lg text-muted">
            uLiquid Market Maker is a managed crypto market maker SaaS built for token projects that need stable
            order books, controlled execution, and operational clarity. Every plan includes a dedicated VPS,
            provisioned and maintained by uLiquid.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href="/pricing">View pricing</Button>
            <Button href="https://license-server.uliquid.vip/" variant="secondary">
              Go to License Manager
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted">
            Looking for details? Start with <Link href="/product" className="text-accent-cyan font-semibold">features</Link>,
            then review <Link href="/security" className="text-accent-cyan font-semibold">security controls</Link> and the
            <Link href="/faq" className="text-accent-cyan font-semibold"> full FAQ</Link>.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-semibold text-text">What it is</h2>
            <p className="mt-3 text-sm text-muted">
              A production-grade market making suite that runs on a managed VPS. You configure ladders, risk
              limits, alerts, and optional add-ons (DEX price feed and AI advisory) via license gating.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-text">What it is not</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
              <li>Not a DEX trading bot. DEX integrations are price feeds only.</li>
              <li>Not autonomous AI trading. AI is advisory only and never executes trades.</li>
              <li>Not a “black box” desk. Operators keep deterministic controls and runtime guardrails.</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-semibold text-text">Why token projects use a crypto market maker</h2>
        <p className="mt-4 text-muted">
          Token projects are judged on liquidity, spread stability, and operational responsiveness. A crypto market
          maker is not just an algorithm; it is infrastructure, processes, and risk controls. The goal is
          predictable market quality: stable quoting, fewer gaps, healthier depth, and execution that survives
          volatility.
        </p>
        <p className="mt-4 text-muted">
          Many teams start by running custom bots or manual quoting. That works until it doesn’t: exchange API
          behavior changes, volatility spikes, or key staff is offline. A managed market maker SaaS reduces the
          operational load by standardizing deployment and guardrails while keeping configuration in the hands of
          operators.
        </p>
        <p className="mt-4 text-muted">
          uLiquid focuses on operator constraints: trade-only keys, runtime risk limits, re-auth for sensitive
          actions, and strong observability. You get a dedicated VPS and a runtime built to enforce limits—not
          just a dashboard.
        </p>
      </Section>

      <Section id="capabilities">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-text">Core capabilities</h2>
          <p className="mt-3 text-muted">
            These are the building blocks token projects typically need for exchange liquidity.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold text-text">Market making engine</h3>
            <p className="mt-3 text-sm text-muted">
              Multi-level ladders with configurable spread, step sizes, distributions, jitter, and inventory skew.
              Control the shape of depth rather than guessing.
            </p>
            <Link href="/product#market-making" className="mt-4 inline-flex text-sm font-semibold text-accent-cyan">
              Learn more →
            </Link>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text">Fill-based volume bot</h3>
            <p className="mt-3 text-sm text-muted">
              Counts real fills only. Configure daily notional, sizing, pacing, and safety rails. No cancel-based
              inflation.
            </p>
            <Link href="/guides/fill-based-volume-counting" className="mt-4 inline-flex text-sm font-semibold text-accent-cyan">
              Read guide →
            </Link>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text">Price follow (master/slave)</h3>
            <p className="mt-3 text-sm text-muted">
              Separate price discovery from execution. Use a master venue or reference source, and execute on the
              target exchange.
            </p>
            <Link href="/use-cases/master-slave-price-follow" className="mt-4 inline-flex text-sm font-semibold text-accent-cyan">
              See use case →
            </Link>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text">Price support</h3>
            <p className="mt-3 text-sm text-muted">
              Maintain a floor price using a dedicated budget. Auto-stops when the budget is depleted and notifies
              operators.
            </p>
            <Link href="/product#price-support" className="mt-4 inline-flex text-sm font-semibold text-accent-cyan">
              Learn more →
            </Link>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text">DEX price feed (add-on)</h3>
            <p className="mt-3 text-sm text-muted">
              On-chain reference pricing as a master reference or validation layer for low-cap tokens.
              Read-only feed—no DEX trading.
            </p>
            <Link href="/product#price-intelligence" className="mt-4 inline-flex text-sm font-semibold text-accent-cyan">
              Price intelligence →
            </Link>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text">AI advisory (add-on)</h3>
            <p className="mt-3 text-sm text-muted">
              AI reviews structure and execution to recommend better parameters. Recommendations only; no
              autonomous trading.
            </p>
            <Link href="/product#ai-advisory" className="mt-4 inline-flex text-sm font-semibold text-accent-cyan">
              AI advisory →
            </Link>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-semibold text-text">Managed VPS model (how it works)</h2>
        <p className="mt-4 text-muted">
          uLiquid includes infrastructure. After purchase, a dedicated VPS is provisioned and configured. Access
          credentials are delivered via email, and VPS details are visible in the License Manager. This keeps the
          production environment predictable across customers and reduces drift.
        </p>
        <p className="mt-4 text-muted">
          For token teams, this matters because liquidity is time-sensitive. A managed VPS model removes the
          “setup tax” that typically delays go-live and makes ongoing operations fragile.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-text">Security assumptions</h3>
            <p className="mt-3 text-sm text-muted">
              Trade-only keys, encrypted at rest. Workspace roles, optional email 2FA, and re-auth for sensitive
              actions.
            </p>
            <Link href="/security" className="mt-4 inline-flex text-sm font-semibold text-accent-cyan">
              Security page →
            </Link>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text">Operational visibility</h3>
            <p className="mt-3 text-sm text-muted">
              Telegram alerts, runner heartbeat monitoring, and health checks support fast response when something
              breaks.
            </p>
            <Link href="/docs" className="mt-4 inline-flex text-sm font-semibold text-accent-cyan">
              Docs overview →
            </Link>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-semibold text-text">Choosing a market maker SaaS vs custom bots</h2>
        <p className="mt-4 text-muted">
          Token projects often compare “market maker SaaS” versus rolling their own. Custom bots can work for
          narrow strategies, but they tend to accumulate operational debt: brittle deployments, inconsistent risk
          enforcement, and limited observability.
        </p>
        <p className="mt-4 text-muted">
          A market maker SaaS should reduce this debt. The right question is not “can it place orders?”—it’s “can
          it reliably enforce constraints, recover from outages, and keep human operators in control?”
        </p>
        <p className="mt-4 text-muted">
          uLiquid’s philosophy is deterministic execution plus guardrails. DEX price feed and AI advisory add
          intelligence layers without shifting control away from operators.
        </p>
        <p className="mt-4 text-sm text-muted">
          Deeper comparison: <Link href="/blog/market-maker-saas-vs-custom-bots" className="text-accent-cyan font-semibold">Market maker SaaS vs custom bots</Link>.
        </p>
      </Section>

      <Section>
        <h2 className="text-3xl font-semibold text-text">FAQ</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {faqItems.map((item) => (
            <Card key={item.q}>
              <h3 className="text-lg font-semibold text-text">{item.q}</h3>
              <p className="mt-3 text-sm text-muted">{item.a}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap items-center gap-4">
          <Button href="/pricing">View pricing</Button>
          <Button href="https://license-server.uliquid.vip/" variant="secondary">
            Go to License Manager
          </Button>
          <Link href="/blog/market-making-for-token-projects" className="text-sm font-semibold text-accent-cyan">
            Read: Market making for token projects →
          </Link>
        </div>
      </Section>
    </div>
  );
}
