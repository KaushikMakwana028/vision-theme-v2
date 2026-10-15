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
    telephone: brandInfo.phone,
    sameAs: siteConfig.sameAs,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: brandInfo.phone,
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
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#professionalservice`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl("/opengraph-image"),
    telephone: brandInfo.phone,
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
    areaServed: ["India", "United States", "United Kingdom"],
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
    applicationCategory: product.category || "BusinessApplication",
    operatingSystem: "Web",
    description: product.shortDescription || product.description,
    url,
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
