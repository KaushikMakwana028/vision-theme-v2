import { redirect } from "next/navigation";

export const instant = false;

export default async function Page({ params }) {
  const { slug } = await params;
  redirect(`/products/${slug}`);
}
