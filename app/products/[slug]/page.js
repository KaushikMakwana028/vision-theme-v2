import { notFound } from "next/navigation";
import { productsData, getProductBySlug } from "@/data/products";
import ProductDetailPage from "@/pages/productDetailPage";
import { buildMetadata, truncate } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { softwareSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const instant = false;
export const ensureStatic = "navigation";

// Generate static params for all products at build time
export async function generateStaticParams() {
  const slugs = ["billsbook", "billbook", "filterbook", "tripsbook", "sitedesk"];
  return slugs.map((slug) => ({ slug }));
}

// Generate dynamic SEO metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const rawTitle = `${product.shortTitle}: ${product.badge}`;
  const title = product.seoTitle || truncate(rawTitle, 40);

  return buildMetadata({
    title,
    description: product.shortDescription || product.description,
    path: `/products/${slug}`,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: product.shortTitle || product.title, path: `/products/${slug}` },
  ];

  return (
    <>
      <JsonLd data={softwareSchema(product)} />
      {product.faqs?.length > 0 && <JsonLd data={faqSchema(product.faqs)} />}
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <Breadcrumbs items={breadcrumbItems} />
      <ProductDetailPage product={product} />
    </>
  );
}
