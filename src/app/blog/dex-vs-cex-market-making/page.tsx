import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { JsonLd } from "@/components/JsonLd";

const title = "DEX vs CEX Market Making (and Price Feeds) | uLiquid Blog";
const description =
  "Understand DEX vs CEX market making, and how read-only DEX price feeds can improve validation for low-cap token markets.";

export const metadata: Metadata = {
  title,
  description,
};

export default function BlogDexVsCexMarketMaking() {
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
          mainEntityOfPage: "https://uliquid.vip/blog/dex-vs-cex-market-making",
        }}
      />

      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">DEX vs CEX Market Making</h1>
          <p className="mt-4 text-lg text-muted">
            DEX and CEX liquidity behave differently. For token projects, the practical question is often not
            “where to trade,” but “what price signals to trust.” This is where read-only DEX price feeds can help.
          </p>
          <p className="mt-4 text-sm text-muted">
            Product overview: {" "}
            <Link href="/crypto-market-maker" className="text-accent-cyan font-semibold">
              Crypto Market Maker Software
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-semibold text-text">CEX market making</h2>
            <p className="mt-3 text-sm text-muted">
              Order books, maker/taker fees, and exchange-specific constraints. Execution is typically deterministic
              and easier to control, but price discovery can be noisy for low-cap pairs.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-text">DEX market making</h2>
            <p className="mt-3 text-sm text-muted">
              AMMs and on-chain liquidity create different dynamics. On-chain prices can be useful as a reference,
              but trading on-chain introduces different risk and operational considerations.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">Read-only DEX price feeds (a practical middle ground)</h2>
        <p className="mt-3 text-sm text-muted">
          You can use DEX price data without trading on-chain. A read-only DEX price feed provides a master
          reference or validation layer to detect CEX anomalies.
        </p>
        <p className="mt-3 text-sm text-muted">
          uLiquid’s DEX integration is price feed only. No on-chain trading.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted">
          <Link href="/crypto-market-maker" className="text-accent-cyan font-semibold">
            Crypto Market Maker Software →
          </Link>
          <Link href="/product#price-intelligence" className="text-accent-cyan font-semibold">
            Price intelligence →
          </Link>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold text-text">Next steps</h2>
        <p className="mt-3 text-sm text-muted">
          If you’re a token project preparing for listings, review the managed VPS model and pricing tiers.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted">
          <Link href="/pricing" className="text-accent-cyan font-semibold">
            Pricing →
          </Link>
          <Link href="/use-cases/low-cap-liquidity" className="text-accent-cyan font-semibold">
            Low-cap liquidity use case →
          </Link>
        </div>
      </Section>
    </div>
  );
}
