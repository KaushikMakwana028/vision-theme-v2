import { notFound } from "next/navigation";
import { servicesData, getServiceBySlug } from "@/data/services";
import ServiceDetailPage from "@/pages/serviceDetailPage";

export const instant = false;

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
    return {
      title: "Service Not Found - Vision Technolabs",
    };
  }

  return {
    title: `${service.title} Services - Vision Technolabs`,
    description: service.shortDescription || service.description,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
