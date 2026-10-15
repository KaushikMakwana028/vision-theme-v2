import { notFound } from "next/navigation";
import { servicesData, getServiceBySlug } from "@/data/services";
import { getProjectsByService } from "@/data/caseStudies";
import { industriesData } from "@/data/industries";
import ServiceDetailPage from "@/pages/serviceDetailPage";
import { buildMetadata, truncate } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";

export const instant = false;
export const ensureStatic = "navigation";

// Generate static params for all services at build time
export async function generateStaticParams() {
  return servicesData.map((svc) => ({
    slug: svc.slug,
  }));
}

// Generate dynamic SEO metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const rawTitle = `${service.title} Services`;
  const title = service.seoTitle || truncate(rawTitle, 40);

  return buildMetadata({
    title,
    description: service.shortDescription || service.description,
    path: `/services/${slug}`,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const caseStudies = getProjectsByService(slug);
  const projectSlugs = new Set(caseStudies.map((p) => p.slug || p.id));
  let relatedIndustries = industriesData.filter((ind) =>
    (ind.caseStudySlugs || []).some((s) => projectSlugs.has(s))
  );
  if (relatedIndustries.length === 0) {
    relatedIndustries = industriesData.slice(0, 3);
  } else {
    relatedIndustries = relatedIndustries.slice(0, 3);
  }

  const caseStudyItems = caseStudies.slice(0, 3).map((cs) => ({
    title: cs.title,
    description: cs.shortPitch || cs.subtitle || cs.description,
    href: `/work/${cs.slug || cs.id}`,
    tag: cs.category || "Case Study",
    meta: cs.client,
    actionLabel: `View ${cs.title} Case Study`,
    ariaLabel: `View ${cs.title} case study`,
  }));

  const industryItems = relatedIndustries.map((ind) => ({
    title: ind.title,
    description: ind.shortDescription || ind.description,
    href: `/industries/${ind.slug || ind.id}`,
    tag: ind.category || "Industry",
    actionLabel: `Explore ${ind.title} Solutions`,
    ariaLabel: `Explore ${ind.title} industry solutions`,
  }));

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${slug}` },
        ]}
      />
      <ServiceDetailPage service={service} />
      <RelatedLinks
        title={`Related Case Studies & Industries for ${service.title}`}
        subtitle={`Discover real-world systems we have engineered and industries accelerated by our ${service.title} capabilities.`}
        eyebrow="Proven Solutions"
        sections={[
          {
            title: "Featured Case Studies",
            items: caseStudyItems,
          },
          {
            title: "Applicable Industries",
            items: industryItems,
          },
        ]}
      />
    </>
  );
}
