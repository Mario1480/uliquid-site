import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://uliquid.vip";
  const lastModified = new Date();

  const routes = ["/", "/product", "/pricing", "/security", "/docs"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
  }));
}
