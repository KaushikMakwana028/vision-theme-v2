import { siteConfig, absoluteUrl } from "@/lib/site";
import { caseStudiesData } from "@/data/caseStudies";
import { productsData } from "@/data/products";

function escapeXml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const urlEntries = [];

  // 1. Home page images
  urlEntries.push({
    loc: `${siteConfig.url}/`,
    images: [
      {
        loc: absoluteUrl("/logo/vision-logo.webp"),
        title: "Vision Technolabs Logo",
        caption: "Vision Technolabs - Premier IT & Software Development Company in Ahmedabad, Gujarat",
      },
    ],
  });

  // 2. About page images (Company Gallery)
  const companyGalleryImages = [
    {
      loc: absoluteUrl("/images/company/gallery/company-headquarters-it-services-ahmedabad-01.webp"),
      title: "Vision Technolabs Headquarters Ahmedabad",
      caption: "Vision Technolabs headquarters at Vitthal Plaza, Naroda, Ahmedabad, delivering enterprise software across Gujarat.",
    },
    {
      loc: absoluteUrl("/images/company/gallery/company-engineering-team-software-ahmedabad-02.webp"),
      title: "Vision Technolabs Full-Stack Engineering Teams",
      caption: "Full-stack engineering team at Vision Technolabs designing modern web and cloud platforms in Ahmedabad.",
    },
    {
      loc: absoluteUrl("/images/company/gallery/company-client-collaboration-web-app-ahmedabad-03.webp"),
      title: "Vision Technolabs Client Technical Strategy",
      caption: "Vision Technolabs technical consulting and client strategy sessions in Ahmedabad, Gujarat.",
    },
    {
      loc: absoluteUrl("/images/company/gallery/company-cloud-architecture-software-ahmedabad-04.webp"),
      title: "Vision Technolabs Enterprise Cloud & AI Solutions",
      caption: "Enterprise cloud infrastructure and microservices architecture developed by Vision Technolabs in Ahmedabad.",
    },
  ];

  urlEntries.push({
    loc: `${siteConfig.url}/about`,
    images: companyGalleryImages,
  });

  // 3. Case Studies (Covers + Website Project Galleries)
  for (const cs of caseStudiesData) {
    const images = [];

    // Cover image
    if (cs.image) {
      images.push({
        loc: absoluteUrl(cs.image),
        title: cs.title,
        caption: cs.imageAlt || `${cs.title} case study developed by Vision Technolabs in Ahmedabad`,
      });
    }

    // Website Gallery images (Website projects only)
    if (cs.gallery && Array.isArray(cs.gallery)) {
      for (const g of cs.gallery) {
        if (g.src) {
          images.push({
            loc: absoluteUrl(g.src),
            title: g.caption || cs.title,
            caption: g.alt || g.caption || cs.title,
          });
        }
      }
    }

    if (images.length > 0) {
      urlEntries.push({
        loc: `${siteConfig.url}/work/${cs.slug || cs.id}`,
        images,
      });
    }
  }

  // 4. Products (Product Covers)
  for (const prod of productsData) {
    if (prod.image) {
      urlEntries.push({
        loc: `${siteConfig.url}/products/${prod.slug || prod.id}`,
        images: [
          {
            loc: absoluteUrl(prod.image),
            title: prod.title,
            caption: prod.imageAlt || `${prod.title} SaaS software platform by Vision Technolabs in Ahmedabad`,
          },
        ],
      });
    }
  }

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
${entry.images
  .map(
    (img) => `    <image:image>
      <image:loc>${escapeXml(img.loc)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
    </image:image>`,
  )
  .join("\n")}
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
