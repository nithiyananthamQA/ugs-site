import type { MetadataRoute } from "next";
import { SITE } from "@/content/brand";

export const dynamic = "force-static";
import { PRODUCTS } from "@/content/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/products`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/clients`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.url}/contact`, changeFrequency: "yearly", priority: 0.7 },
  ];
  for (const p of PRODUCTS) {
    routes.push({
      url: `${SITE.url}/products/${p.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }
  return routes;
}
