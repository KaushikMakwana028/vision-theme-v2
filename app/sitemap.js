import { siteConfig } from "@/lib/site";
import { servicesData } from "@/data/services";
import { industriesData } from "@/data/industries";
import { caseStudiesData } from "@/data/caseStudies";
import { productsData } from "@/data/products";
import { blogsData } from "@/data/blogs";
import { locationsData } from "@/data/locations";

export default function sitemap() {
  const baseUrl = siteConfig.url;
  const buildDate = new Date().toISOString();

  // Core Static Pages (10 pages)
  const staticRoutes = [
    { url: `${baseUrl}`, lastModified: buildDate },
    { url: `${baseUrl}/services`, lastModified: buildDate },
    { url: `${baseUrl}/industries`, lastModified: buildDate },
    { url: `${baseUrl}/work`, lastModified: buildDate },
    { url: `${baseUrl}/products`, lastModified: buildDate },
    { url: `${baseUrl}/blog`, lastModified: buildDate },
    { url: `${baseUrl}/contact`, lastModified: buildDate },
    { url: `${baseUrl}/about`, lastModified: buildDate },
    { url: `${baseUrl}/privacy-policy`, lastModified: buildDate },
    { url: `${baseUrl}/terms`, lastModified: buildDate },
    { url: `${baseUrl}/it-company`, lastModified: buildDate },
  ];

  // Location Hub Pages
  const locationRoutes = locationsData.map((loc) => ({
    url: `${baseUrl}/it-company/${loc.slug}`,
    lastModified: buildDate,
  }));

  // Dynamic Service Detail Pages (12 services)
  const serviceRoutes = servicesData.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: buildDate,
  }));

  // Dynamic Industry Detail Pages (9 industries)
  const industryRoutes = industriesData.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: buildDate,
  }));

  // Dynamic Case Studies / Portfolio Pages (20 projects)
  const workRoutes = caseStudiesData.map((cs) => ({
    url: `${baseUrl}/work/${cs.slug || cs.id}`,
    lastModified: buildDate,
  }));

  // Dynamic Products Detail Pages (5 products)
  const productRoutes = productsData.map((p) => ({
    url: `${baseUrl}/products/${p.slug || p.id}`,
    lastModified: buildDate,
  }));

  // Dynamic Blog Posts (8 articles with real isoDate)
  const blogRoutes = blogsData.map((b) => ({
    url: `${baseUrl}/blog/${b.slug || b.id}`,
    lastModified: b.isoDate || buildDate,
  }));

  return [
    ...staticRoutes,
    ...locationRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...workRoutes,
    ...productRoutes,
    ...blogRoutes,
  ];
}
