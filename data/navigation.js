export const navigationData = {
  headerNav: [
    {
      id: "ai",
      title: "AI & Innovation",
      href: "/services/ai-automation",
      leadIcon: "i-ai",
      type: "dropdown",
      items: [
        { label: "AI & Automation Agents", href: "/services/ai-automation" },
        { label: "Enterprise RAG & Search Engines", href: "/services/rag-knowledge-bases" },
        { label: "Custom Software & CRM", href: "/services/custom-software-crm" },
        { label: "Case Studies", href: "/work" }
      ],
      bottomAction: {
        label: "Explore AI Solutions",
        href: "/services/ai-automation"
      }
    },
    {
      id: "services",
      title: "Services",
      href: "/services",
      type: "mega",
      columns: [
        {
          title: "Web & Mobile Development",
          links: [
            { label: "Website Development", href: "/services/website-development" },
            { label: "Ecommerce Solutions", href: "/services/ecommerce-solutions" },
            { label: "Mobile Application Development", href: "/services/mobile-app-development" }
          ]
        },
        {
          title: "AI & Enterprise Software",
          links: [
            { label: "AI & Automation Agents", href: "/services/ai-automation" },
            { label: "Enterprise RAG & Search Engines", href: "/services/rag-knowledge-bases" },
            { label: "Custom Software & CRM", href: "/services/custom-software-crm" }
          ]
        },
        {
          title: "Growth & Cloud Infrastructure",
          links: [
            { label: "Meta & Google Ads", href: "/services/meta-google-ads" },
            { label: "SEO & Site Optimizations", href: "/services/seo-site-optimizations" },
            { label: "Cloud & DevOps Engineering", href: "/services/cloud-devops-engineering" }
          ]
        }
      ],
      bottomAction: {
        label: "Explore All 9 Services",
        href: "/services"
      }
    },
    {
      id: "industries",
      title: "Industries",
      type: "link",
      href: "/industries"
    },
    {
      id: "products",
      title: "Product",
      href: "/products",
      type: "dropdown",
      items: [
        { label: "BillsBook — Multi-Business Billing & POS", href: "/products/billsbook" },
        { label: "FilterBook — RO Service & AMC CRM", href: "/products/filterbook" },
        { label: "TripsBook — Fleet & Cab Management App", href: "/products/tripsbook" },
        { label: "SiteDesk — Real Estate Plotting ERP", href: "/products/sitedesk" }
      ],
      bottomAction: {
        label: "Explore All 4 Products →",
        href: "/products"
      }
    },
    {
      id: "work",
      title: "Work",
      type: "link",
      href: "/work"
    },
    {
      id: "blogs",
      title: "Blog",
      type: "link",
      href: "/blog"
    },
    {
      id: "contact",
      title: "Contact",
      type: "link",
      href: "/contact"
    }
  ],
  footerLinks: {
    services: [
      { label: "Website Development", href: "/services/website-development" },
      { label: "Ecommerce Solutions", href: "/services/ecommerce-solutions" },
      { label: "Mobile Application Development", href: "/services/mobile-app-development" },
      { label: "AI & Automation Agents", href: "/services/ai-automation" },
      { label: "Enterprise RAG & Search Engines", href: "/services/rag-knowledge-bases" },
      { label: "Custom Software & CRM", href: "/services/custom-software-crm" },
      { label: "Meta & Google Ads", href: "/services/meta-google-ads" },
      { label: "SEO & Site Optimizations", href: "/services/seo-site-optimizations" },
      { label: "Cloud & DevOps Engineering", href: "/services/cloud-devops-engineering" }
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "All Services", href: "/services" },
      { label: "All Industries", href: "/industries" },
      { label: "Products", href: "/products" },
      { label: "Case Studies", href: "/work" },
      { label: "Engineering Blog", href: "/blog" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "Delivery Guarantees", href: "/#guarantees" }
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Security & Compliance", href: "#security" }
    ]
  }
};
