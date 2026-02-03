import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://uliquid.vip";
  const lastModified = new Date();

  const routes = [
    "/",
    "/product",
    "/pricing",
    "/security",
    "/docs",
    "/faq",
    "/use-cases/low-cap-liquidity",
    "/use-cases/exchange-listing-support",
    "/use-cases/master-slave-price-follow",
    "/guides/what-is-market-making",
    "/guides/cex-vs-dex-price-feeds",
    "/guides/fill-based-volume-counting",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
  }));
}
