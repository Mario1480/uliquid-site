import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { JsonLd } from "@/components/JsonLd";

const title = "Blog | uLiquid Market Maker";
const description =
  "Operator-focused articles on crypto market making, token project liquidity, DEX price feeds, and advisory AI.";

export const metadata: Metadata = {
  title,
  description,
};

const posts = [
  {
    title: "What Is a Crypto Market Maker?",
    description: "Spreads, ladders, risk controls, and what token projects should optimize for.",
    href: "/blog/what-is-a-crypto-market-maker",
  },
  {
    title: "Market Making for Token Projects",
    description: "A practical playbook: goals, risk guardrails, and operating like production.",
    href: "/blog/market-making-for-token-projects",
  },
  {
    title: "Market Maker SaaS vs Custom Bots",
    description: "Operational tradeoffs: reliability, enforcement, monitoring, and control boundaries.",
    href: "/blog/market-maker-saas-vs-custom-bots",
  },
  {
    title: "AI Market Making in Crypto (Advisory vs Auto-Trading)",
    description: "What advisory systems can do and why autonomous trading claims are risky.",
    href: "/blog/ai-market-making-crypto",
  },
  {
    title: "DEX vs CEX Market Making (and Price Feeds)",
    description: "How DEX price feeds can improve validation without on-chain trading.",
    href: "/blog/dex-vs-cex-market-making",
  },
];

export default function BlogIndexPage() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "uLiquid Blog",
          url: "https://uliquid.vip/blog",
          description,
        }}
      />

      <Section className="pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold text-text">Blog</h1>
          <p className="mt-4 text-lg text-muted">{description}</p>
          <p className="mt-4 text-sm text-muted">
            Start here: {" "}
            <Link href="/crypto-market-maker" className="text-accent-cyan font-semibold">
              Crypto Market Maker Software
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.href}>
              <h2 className="text-lg font-semibold text-text">{post.title}</h2>
              <p className="mt-3 text-sm text-muted">{post.description}</p>
              <Link href={post.href} className="mt-4 inline-flex text-sm font-semibold text-accent-cyan">
                Read →
              </Link>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
