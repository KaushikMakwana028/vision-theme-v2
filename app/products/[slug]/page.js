import { notFound } from "next/navigation";
import { productsData, getProductBySlug } from "@/data/products";
import ProductDetailPage from "@/pages/productDetailPage";

export const instant = false;

// Generate static params for all products at build time
export async function generateStaticParams() {
  return productsData.map((prod) => ({
    slug: prod.slug,
  }));
}

// Generate dynamic SEO metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found - Vision Technolabs",
    };
  }

  return {
    title: `${product.shortTitle} — ${product.badge} - Vision Technolabs`,
    description: product.shortDescription || product.description,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}
