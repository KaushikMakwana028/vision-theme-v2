import { notFound } from "next/navigation";
import { industriesData, getIndustryBySlug } from "@/data/industries";
import IndustryDetailPage from "@/pages/industryDetailPage";

export const instant = false;

// Generate static params for all industries at build time
export async function generateStaticParams() {
  return industriesData.map((ind) => ({
    slug: ind.slug,
  }));
}

// Generate dynamic SEO metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: "Industry Not Found - Vision Technolabs",
    };
  }

  return {
    title: `${industry.title} Solutions - Vision Technolabs`,
    description: industry.shortDescription || industry.description,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return <IndustryDetailPage industry={industry} />;
}
