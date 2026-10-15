import { notFound } from "next/navigation";
import { caseStudiesData, getCaseStudyBySlug } from "@/data/caseStudies";
import { getServiceBySlug } from "@/data/services";
import WorkDetailPage from "@/pages/workDetailPage";
import { buildMetadata, truncate } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";

export const instant = false;
export const ensureStatic = "navigation";

// Generate static params for all case studies at build time
export async function generateStaticParams() {
  return caseStudiesData.map((cs) => ({
    slug: cs.slug || cs.id,
  }));
}

// Generate dynamic SEO metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);

  if (!project) {
    notFound();
  }

  const rawTitle = `${project.title} Case Study`;
  const title = project.seoTitle || truncate(rawTitle, 40);

  return buildMetadata({
    title,
    description: project.shortDescription || project.description,
    path: `/work/${slug}`,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);

  if (!project) {
    notFound();
  }

  const parentService = project.serviceSlug ? getServiceBySlug(project.serviceSlug) : null;

  const sameCategory = caseStudiesData.filter(
    (item) => item.category === project.category && item.slug !== project.slug && item.id !== project.id
  );
  const otherProjects = (
    sameCategory.length >= 2
      ? sameCategory
      : [...sameCategory, ...caseStudiesData.filter((item) => item.slug !== project.slug && item.id !== project.id && !sameCategory.includes(item))]
  ).slice(0, 2);

  const serviceItems = parentService
    ? [
        {
          title: parentService.title,
          description: parentService.shortDescription || parentService.description,
          href: `/services/${parentService.slug}`,
          tag: parentService.category || "Core Service",
          meta: parentService.badge,
          actionLabel: `Explore ${parentService.title} Services`,
          ariaLabel: `Explore ${parentService.title} services`,
        },
      ]
    : [];

  const projectItems = otherProjects.map((item) => ({
    title: item.title,
    description: item.shortPitch || item.subtitle || item.description,
    href: `/work/${item.slug || item.id}`,
    tag: item.category || "Case Study",
    meta: item.client,
    actionLabel: `Read ${item.title} Case Study`,
    ariaLabel: `Read ${item.title} case study`,
  }));

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/work" },
          { name: project.title, path: `/work/${slug}` },
        ]}
      />
      <WorkDetailPage project={project} />
      <RelatedLinks
        title="Related Service & Case Studies"
        subtitle={`Learn more about the engineering capabilities behind ${project.title} and explore related client implementations.`}
        eyebrow="Related Work"
        sections={[
          ...(serviceItems.length > 0
            ? [
                {
                  title: "Core Service Capabilities",
                  items: serviceItems,
                },
              ]
            : []),
          {
            title: `More ${project.category || "Related"} Case Studies`,
            items: projectItems,
          },
        ]}
      />
    </>
  );
}
