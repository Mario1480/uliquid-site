import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { JsonLd } from "@/components/JsonLd";

const title = "What Is a Crypto Market Maker? | uLiquid Blog";
const description =
  "A practical explanation of crypto market makers: spreads, liquidity ladders, risk controls, and why token projects use them.";

export const metadata: Metadata = {
  title,
  description,
};

export default function BlogWhatIsCryptoMarketMaker() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: title,
          description,
          author: { "@type": "Organization", name: "uLiquid" },
          publisher: { "@type": "Organization", name: "uLiquid" },
          mainEntityOfPage: "https://uliquid.vip/blog/what-is-a-crypto-market-maker",
        }}
      />

      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">What Is a Crypto Market Maker?</h1>
          <p className="mt-4 text-lg text-muted">
            A crypto market maker is a system (and operation) that continuously provides bids and asks to keep an
            order book tradable. For token projects, the goal is not “maximum volume” but predictable market
            quality: tighter spreads, stable depth, and fewer gaps during volatility.
          </p>
          <p className="mt-4 text-sm text-muted">
            Looking for a product-focused overview? Start here: {" "}
            <Link href="/crypto-market-maker" className="text-accent-cyan font-semibold">
              Crypto Market Maker Software
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">Market making in one sentence</h2>
        <p className="mt-3 text-sm text-muted">
          A market maker posts buy and sell orders around a reference price with controlled spread and size,
          adjusting as price moves and inventory changes.
        </p>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-semibold text-text">What token projects care about</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
              <li>Exchange listing readiness: stable spreads and consistent depth.</li>
              <li>Operational reliability: alerts, uptime, and controlled changes.</li>
              <li>Risk controls: budgets, limits, and kill switches.</li>
              <li>Clear permissions: trade-only API keys (no withdrawals).</li>
            </ul>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-text">What exchanges care about</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
              <li>Continuous quoting without spammy cancel patterns.</li>
              <li>Healthy order book structure (not just top-of-book).</li>
              <li>Predictable behavior during volatility.</li>
              <li>Transparent operations and fast incident response.</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">Core mechanics (the operator view)</h2>
        <p className="mt-3 text-sm text-muted">
          Good market making is configuration and discipline. The “strategy” is often straightforward; the
          difference comes from enforcing rules under real exchange conditions.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-text">Spread and ladder shape</h3>
            <p className="mt-3 text-sm text-muted">
              You define a base spread and multiple levels (a ladder) with distributions and step sizes. This
              shapes depth and reduces abrupt gaps.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text">Inventory and skew</h3>
            <p className="mt-3 text-sm text-muted">
              Inventory targets and skew help keep balances healthy. Without it, the bot can drift into one side
              and lose quoting ability.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text">Risk limits</h3>
            <p className="mt-3 text-sm text-muted">
              Limits like max deviation, max open orders, and daily loss guards are what keep the operation
              survivable.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-text">Monitoring and response</h3>
            <p className="mt-3 text-sm text-muted">
              Alerts and heartbeat monitoring matter because exchanges and networks fail. Operators need fast
              signals, not post-mortems.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">CEX vs DEX pricing</h2>
        <p className="mt-3 text-sm text-muted">
          For low-cap tokens, centralized exchange prices can be noisy. A read-only DEX price feed can provide a
          reference point or validation layer. This is about price intelligence, not on-chain trading.
        </p>
        <p className="mt-3 text-sm text-muted">
          Read more: {" "}
          <Link href="/guides/cex-vs-dex-price-feeds" className="text-accent-cyan font-semibold">
            CEX vs DEX Price Feeds
          </Link>
          .
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">Where uLiquid fits</h2>
        <p className="mt-3 text-sm text-muted">
          uLiquid Market Maker is a managed crypto market maker SaaS: dedicated VPS included, deterministic
          execution, and optional intelligence layers. DEX integrations are price feeds only. AI is advisory only.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted">
          <Link href="/crypto-market-maker" className="text-accent-cyan font-semibold">
            Crypto Market Maker Software →
          </Link>
          <Link href="/pricing" className="text-accent-cyan font-semibold">
            Pricing →
          </Link>
        </div>
      </Section>
    </div>
  );
}
