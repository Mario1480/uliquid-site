import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

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
          url: "https://uliquid.cloud/blog",
          description,
        }}
      />

      <PageHero
        eyebrow="Blog"
        title="Operator-focused writing from the uLiquid team"
        description={description}
        backgroundVariant="neutral"
        actions={
          <>
            <Button href="/crypto-market-maker">Crypto Market Maker Software</Button>
            <Button href="/market-maker" variant="secondary">
              Explore Market Maker
            </Button>
          </>
        }
      />

      <Section tone="muted">
        <SectionIntro
          eyebrow="Latest Articles"
          title="Deep dives, comparisons, and practical guides"
          description="Start with the core explainers, then branch into use cases and operational tradeoffs."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.href}>
              <h2 className="text-lg font-semibold text-text">{post.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{post.description}</p>
              <Link
                href={post.href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-cyan hover:text-text"
              >
                Read <span aria-hidden="true">→</span>
              </Link>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
