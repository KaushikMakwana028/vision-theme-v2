import ProductPage from "@/views/productPage";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Proprietary SaaS & Mobile Products",
  description:
    "Explore proprietary software platforms engineered by Vision Technolabs: BillsBook (Invoicing & POS), FilterBook (RO Service CRM), TripsBook (Fleet Management), and SiteDesk (Real Estate ERP).",
  path: "/products",
});

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ]}
      />
      <ProductPage />
    </>
  );
}
