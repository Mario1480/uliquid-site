import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    "/",
    "/market-maker",
    "/market-maker/pricing",
    "/market-maker/security",
    "/market-maker/exchanges",
    "/market-maker/docs",
    "/company",
    "/faq",
    "/crypto-market-maker",
    "/blog",
    "/blog/what-is-a-crypto-market-maker",
    "/blog/market-making-for-token-projects",
    "/blog/market-maker-saas-vs-custom-bots",
    "/blog/ai-market-making-crypto",
    "/blog/dex-vs-cex-market-making",
    "/guides/what-is-market-making",
    "/guides/fill-based-volume-counting",
    "/guides/cex-vs-dex-price-feeds",
    "/use-cases/token-projects",
    "/use-cases/exchange-listings",
    "/use-cases/exchange-listing-support",
    "/use-cases/master-slave-price-follow",
    "/use-cases/low-cap-liquidity",
    "/privacy",
    "/terms",
    "/app",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
