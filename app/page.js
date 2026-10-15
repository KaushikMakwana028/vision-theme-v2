import HomePage from "@/pages/homePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: {
    absolute: "Vision Technolabs | Web, Mobile App & AI Development Company",
  },
  description:
    "Web, mobile app and AI development company engineering high-performance websites, scalable cloud platforms, and autonomous AI agents for global businesses.",
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
