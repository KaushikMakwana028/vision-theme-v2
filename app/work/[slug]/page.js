import { notFound } from "next/navigation";
import { caseStudiesData, getCaseStudyBySlug } from "@/data/caseStudies";
import WorkDetailPage from "@/pages/workDetailPage";

export const instant = false;

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
    return {
      title: "Case Study Not Found - Vision Technolabs",
    };
  }

  return {
    title: `${project.title} — Case Study - Vision Technolabs`,
    description: project.description,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const project = getCaseStudyBySlug(slug);

  if (!project) {
    notFound();
  }

  return <WorkDetailPage project={project} />;
}
