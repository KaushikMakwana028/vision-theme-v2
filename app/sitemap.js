import { siteConfig } from "@/lib/site";
import { servicesData } from "@/data/services";
import { industriesData } from "@/data/industries";
import { caseStudiesData } from "@/data/caseStudies";
import { productsData } from "@/data/products";
import { blogsData } from "@/data/blogs";

export default function sitemap() {
  const baseUrl = siteConfig.url;

  // Core Static Pages (10 pages)
  const staticRoutes = [
    { url: `${baseUrl}` },
    { url: `${baseUrl}/services` },
    { url: `${baseUrl}/industries` },
    { url: `${baseUrl}/work` },
    { url: `${baseUrl}/products` },
    { url: `${baseUrl}/blog` },
    { url: `${baseUrl}/contact` },
    { url: `${baseUrl}/about` },
    { url: `${baseUrl}/privacy-policy` },
    { url: `${baseUrl}/terms` },
  ];

  // Dynamic Service Detail Pages (12 services)
  const serviceRoutes = servicesData.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
  }));

  // Dynamic Industry Detail Pages (9 industries)
  const industryRoutes = industriesData.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
  }));

  // Dynamic Case Studies / Portfolio Pages (20 projects)
  const workRoutes = caseStudiesData.map((cs) => ({
    url: `${baseUrl}/work/${cs.slug || cs.id}`,
  }));

  // Dynamic Products Detail Pages (5 products)
  const productRoutes = productsData.map((p) => ({
    url: `${baseUrl}/products/${p.slug || p.id}`,
  }));

  // Dynamic Blog Posts (8 articles with real isoDate)
  const blogRoutes = blogsData.map((b) => ({
    url: `${baseUrl}/blog/${b.slug || b.id}`,
    ...(b.isoDate ? { lastModified: b.isoDate } : {}),
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...workRoutes,
    ...productRoutes,
    ...blogRoutes,
  ];
}
