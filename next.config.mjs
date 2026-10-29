/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.visiontechnolabs.com",
          },
        ],
        destination: "https://visiontechnolabs.com/:path*",
        permanent: true,
      },
      {
        source: "/blogs",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blogs/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      { source: "/products/billbook", destination: "/products/billsbook", permanent: true },
      { source: "/products/bill-book", destination: "/products/billsbook", permanent: true },
      { source: "/products/filter-book", destination: "/products/filterbook", permanent: true },
      { source: "/products/tripbook", destination: "/products/tripsbook", permanent: true },
      { source: "/products/trips-book", destination: "/products/tripsbook", permanent: true },
      { source: "/products/site-desk", destination: "/products/sitedesk", permanent: true },
      { source: "/products/sidedesk", destination: "/products/sitedesk", permanent: true },
      {
        source: "/product",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/product/:slug",
        destination: "/products/:slug",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/app_images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/logo/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
