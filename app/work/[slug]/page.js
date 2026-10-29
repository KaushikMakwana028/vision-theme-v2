import { notFound, redirect } from "next/navigation";
import { caseStudiesData, getCaseStudyBySlug } from "@/data/caseStudies";
import WorkDetailPage from "@/views/workDetailPage";
import { buildMetadata, truncate } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { caseStudySchema, breadcrumbSchema } from "@/lib/schema";

const productRedirects = {
  billbook: "/products/billsbook",
  billsbook: "/products/billsbook",
  filterbook: "/products/filterbook",
  tripsbook: "/products/tripsbook",
  sitedesk: "/products/sitedesk",
};

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
  if (productRedirects[slug]) {
    redirect(productRedirects[slug]);
  }
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
    image: project.image,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  if (productRedirects[slug]) {
    redirect(productRedirects[slug]);
  }
  const project = getCaseStudyBySlug(slug);

  if (!project) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/work" },
    { name: project.title, path: `/work/${slug}` },
  ];

  return (
    <>
      <JsonLd data={caseStudySchema(project)} />
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <WorkDetailPage project={project} />
    </>
  );
}
