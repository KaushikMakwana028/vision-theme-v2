import { siteConfig } from "@/lib/site";

export default function robots() {
  const isProduction =
    process.env.VERCEL_ENV === "production" ||
    process.env.ALLOW_INDEXING === "true" ||
    process.env.ALLOW_INDEXING === "1";

  return {
    rules: isProduction
      ? [
          {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/"],
          },
        ]
      : [
          {
            userAgent: "*",
            disallow: ["/"],
          },
        ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
