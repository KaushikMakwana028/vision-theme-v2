import { notFound } from "next/navigation";
import { productsData, getProductBySlug } from "@/data/products";
import ProductDetailPage from "@/views/productDetailPage";
import { buildMetadata, truncate } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { softwareSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export const instant = false;
export const ensureStatic = "navigation";

// One canonical URL per product (legacy aliases are redirected in next.config.mjs)
export async function generateStaticParams() {
  return productsData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const seo = product.seo || {};
  const title = seo.title || product.seoTitle || truncate(`${product.shortTitle}: ${product.badge}`, 60);

  return buildMetadata({
    title: { absolute: title },
    description: seo.description || product.shortDescription || product.description,
    path: `/products/${product.slug}`,
    image: product.image,
    keywords: seo.keywords,
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
    { name: product.shortTitle || product.title, path: `/products/${product.slug}` },
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
