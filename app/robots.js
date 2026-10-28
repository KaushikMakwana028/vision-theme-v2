import { siteConfig } from "@/lib/site";

export default function robots() {
  // Vercel: only the "production" environment is indexable (previews stay blocked).
  // Other hosts (VPS, cPanel, etc.): fall back to NODE_ENV.
  // ALLOW_INDEXING=true/1 forces indexing, ALLOW_INDEXING=false/0 forces blocking.
  const flag = process.env.ALLOW_INDEXING;
  const isProduction =
    flag === "true" || flag === "1"
      ? true
      : flag === "false" || flag === "0"
      ? false
      : process.env.VERCEL_ENV
      ? process.env.VERCEL_ENV === "production"
      : process.env.NODE_ENV === "production";

  return {
    rules: isProduction
      ? [
          {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/_next/static/chunks/"],
          },
        ]
      : [
          {
            userAgent: "*",
            disallow: ["/"],
          },
        ],
    sitemap: [
      `${siteConfig.url}/sitemap.xml`,
      `${siteConfig.url}/image-sitemap.xml`,
    ],
    host: siteConfig.url,
  };
}