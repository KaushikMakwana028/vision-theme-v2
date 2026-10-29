import { siteConfig, absoluteUrl } from "@/lib/site";
import { brandInfo } from "@/data/company";

export const ORGANIZATION_ID = `${siteConfig.url}/#organization`;
export const WEBSITE_ID = `${siteConfig.url}/#website`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/logo/vision-logo.png"),
    description: brandInfo.description,
    email: brandInfo.email,
    telephone: brandInfo.whatsapp || "+918128966157",
    sameAs: siteConfig.sameAs,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: brandInfo.whatsapp || "+918128966157",
        contactType: "customer service",
        email: brandInfo.email,
      },
    ],
    address: {
      "@type": "PostalAddress",
      ...(brandInfo.addressParts || {
        streetAddress: "112, Vitthal Plaza, Naroda - Dehgam Rd, Opp. GEB, Nava Naroda",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "382330",
        addressCountry: "IN",
      }),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: {
      "@id": ORGANIZATION_ID,
    },
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${siteConfig.url}/#professionalservice`,
    hasMap: brandInfo.googleMapsUrl,
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl("/opengraph-image"),
    telephone: brandInfo.whatsapp || "+918128966157",
    email: brandInfo.email,
    address: {
      "@type": "PostalAddress",
      ...(brandInfo.addressParts || {
        streetAddress: "112, Vitthal Plaza, Naroda - Dehgam Rd, Opp. GEB, Nava Naroda",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "382330",
        addressCountry: "IN",
      }),
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "19:30",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Naroda" },
      { "@type": "City", name: "Ahmedabad" },
      { "@type": "City", name: "Gandhinagar" },
      { "@type": "City", name: "Surat" },
      { "@type": "City", name: "Vadodara" },
      { "@type": "City", name: "Rajkot" },
      { "@type": "State", name: "Gujarat" },
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    sameAs: siteConfig.sameAs,
    parentOrganization: {
      "@id": ORGANIZATION_ID,
    },
  };
}

export function serviceSchema(service) {
  if (!service) return null;
  const url = absoluteUrl(`/services/${service.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}/#service`,
    name: service.title,
    description: service.shortDescription || service.description,
    url,
    provider: {
      "@id": ORGANIZATION_ID,
    },
    serviceType: service.category || service.title,
  };
}

export function articleSchema(blog) {
  if (!blog) return null;
  const url = absoluteUrl(`/blog/${blog.slug || blog.id}`);
  const imageUrl = blog.image
    ? blog.image.startsWith("http")
      ? blog.image
      : absoluteUrl(blog.image)
    : absoluteUrl(`/blog/${blog.slug || blog.id}/opengraph-image`);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}/#article`,
    headline: blog.title,
    description: blog.shortDescription || blog.description || blog.excerpt,
    url,
    datePublished: blog.isoDate,
    dateModified: blog.isoDate,
    image: imageUrl,
    author: blog.author?.name
      ? {
          "@type": "Person",
          name: blog.author.name,
          jobTitle: blog.author.role,
        }
      : {
          "@id": ORGANIZATION_ID,
        },
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    ...(blog.tags
      ? { keywords: Array.isArray(blog.tags) ? blog.tags.join(", ") : blog.tags }
      : {}),
  };
}

export function caseStudySchema(project) {
  if (!project) return null;
  const url = absoluteUrl(`/work/${project.slug || project.id}`);
  const imageUrl = project.image
    ? project.image.startsWith("http")
      ? project.image
      : absoluteUrl(project.image)
    : absoluteUrl(`/work/${project.slug || project.id}/opengraph-image`);

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}/#casestudy`,
    name: project.title,
    headline: project.title,
    description: project.shortDescription || project.description,
    url,
    image: imageUrl,
    provider: {
      "@id": ORGANIZATION_ID,
    },
    creator: {
      "@id": ORGANIZATION_ID,
    },
  };
}

export function softwareSchema(product) {
  if (!product) return null;
  const url = absoluteUrl(`/products/${product.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${url}/#software`,
    name: product.shortTitle || product.title,
    applicationCategory: "BusinessApplication",
    operatingSystem: product.seo?.os || "Web",
    description: product.seo?.description || product.shortDescription || product.description,
    url,
    ...(product.image ? { image: absoluteUrl(product.image) } : {}),
    ...(product.seo?.keywords ? { keywords: product.seo.keywords.join(", ") } : {}),
    ...(product.features?.length
      ? { featureList: product.features.map((f) => f.title) }
      : {}),
    ...(product.liveDemoUrl && product.liveDemoUrl.includes("play.google.com")
      ? { installUrl: product.liveDemoUrl }
      : {}),
    publisher: {
      "@id": ORGANIZATION_ID,
    },
    provider: {
      "@id": ORGANIZATION_ID,
    },
  };
}

export function breadcrumbSchema(items = []) {
  if (!Array.isArray(items) || items.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path || item.url || "/"),
    })),
  };
}

export function faqSchema(faqs = []) {
  if (!Array.isArray(faqs) || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q || faq.question || "",
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a || faq.answer || "",
      },
    })),
  };
}
