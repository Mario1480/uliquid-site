import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://uliquid.vip";
  const lastModified = new Date();

  const routes = [
    "/",
    "/market-maker",
    "/pricing",
    "/features",
    "/support",
    "/help",
    "/crypto-market-maker",
    "/blog/what-is-a-crypto-market-maker",
    "/blog/market-making-for-token-projects",
    "/blog/market-maker-saas-vs-custom-bots",
    "/blog/ai-market-making-crypto",
    "/blog/dex-vs-cex-market-making",
    "/use-cases/token-projects",
    "/use-cases/exchange-listings",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
