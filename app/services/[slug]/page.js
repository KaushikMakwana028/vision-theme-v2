import { notFound } from "next/navigation";
import { servicesData, getServiceBySlug } from "@/data/services";
import ServiceDetailPage from "@/pages/serviceDetailPage";
import { buildMetadata, truncate } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

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

  const rawTitle = service.title.toLowerCase().includes("ahmedabad")
    ? `${service.title} Services`
    : `${service.title} in Ahmedabad`;
  const title = service.seoTitle || truncate(rawTitle, 48);

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

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${slug}` },
  ];

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      {service.faqs?.length > 0 && <JsonLd data={faqSchema(service.faqs)} />}
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <ServiceDetailPage service={service} />
    </>
  );
}
