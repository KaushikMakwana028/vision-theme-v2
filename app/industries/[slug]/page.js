import { notFound } from "next/navigation";
import { industriesData, getIndustryBySlug } from "@/data/industries";
import IndustryDetailPage from "@/pages/industryDetailPage";
import { buildMetadata, truncate } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

export const instant = false;
export const ensureStatic = "navigation";

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
    notFound();
  }

  const rawTitle = `${industry.title} Software Solutions`;
  const title = industry.seoTitle || truncate(rawTitle, 40);

  return buildMetadata({
    title,
    description: industry.shortDescription || industry.description,
    path: `/industries/${slug}`,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.title, path: `/industries/${slug}` },
        ]}
      />
      <IndustryDetailPage industry={industry} />
    </>
  );
}
