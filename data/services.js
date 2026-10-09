export const servicesData = [
  {
    id: "website-development",
    number: "01",
    title: "Website Development",
    slug: "website-development",
    icon: "i-code",
    description: "Fast, scalable web apps and platforms built with React, Laravel, Django and CodeIgniter.",
    tags: ["React", "Laravel", "Next.js"],
    href: "#contact"
  },
  {
    id: "ecommerce-solutions",
    number: "02",
    title: "Ecommerce Solutions",
    slug: "ecommerce-solutions",
    icon: "i-cart",
    description: "High-converting storefronts, marketplaces and D2C platforms on Shopify, WooCommerce and headless stacks.",
    tags: ["Shopify", "WooCommerce", "Headless"],
    href: "#contact"
  },
  {
    id: "mobile-app-development",
    number: "03",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    icon: "i-mobile",
    description: "Cross-platform iOS and Android apps with React Native and a native-quality feel.",
    tags: ["iOS", "Android", "Flutter"],
    href: "#contact"
  },
  {
    id: "ai-automation",
    number: "04",
    title: "AI & Automation",
    slug: "ai-automation",
    icon: "i-ai",
    description: "AI agents, RAG chatbots and workflow automation that give your team hours back every week.",
    tags: ["RAG", "LLMs", "Agents"],
    href: "#contact"
  },
  {
    id: "custom-software-crm",
    number: "05",
    title: "Custom Software & CRM",
    slug: "custom-software-crm",
    icon: "i-db",
    description: "Tailor-made CRMs, ERPs and internal tools that fit the way your business really works.",
    tags: ["CRM", "ERP", "Automation"],
    href: "#contact"
  },
  {
    id: "meta-google-ads",
    number: "06",
    title: "Meta & Google Ads",
    slug: "meta-google-ads",
    icon: "i-arrow",
    description: "Performance marketing campaigns that drive qualified traffic, leads and measurable ROI.",
    tags: ["Meta Ads", "Google Ads", "SEO"],
    href: "#contact"
  }
];

export const bentoServices = [
  {
    id: "ai-bento",
    type: "big",
    tag: "01 · Featured",
    title: "AI Agents & Automation",
    description: "Production-ready AI agents and workflows, from RAG search to end-to-end automation that delivers real outcomes, not demos.",
    liveTag: "AI agent running",
    stats: [
      { count: 5, suffix: "+", label: "Years" },
      { count: 100, suffix: "+", label: "Projects" },
      { count: 20, suffix: "+", label: "Engineers" }
    ]
  },
  {
    id: "ecommerce-bento",
    tag: "02 · Commerce",
    title: "Ecommerce Solutions",
    description: "High-converting storefronts & marketplaces that scale with you.",
    iconClass: "b-shop",
    gradient: "linear-gradient(135deg,#16a34a,#4ade80)",
    icon: "i-cart",
    sceneType: "shop",
    chips: ["Shopify", "WordPress", "WooCommerce"]
  },
  {
    id: "mobile-bento",
    tag: "03 · Apps",
    title: "Mobile Applications",
    description: "Native-quality iOS & Android apps from a single codebase.",
    iconClass: "b-app",
    gradient: "linear-gradient(135deg,#0891b2,#22d3ee)",
    icon: "i-mobile",
    sceneType: "phone",
    chips: ["iOS", "Android", "React Native"]
  },
  {
    id: "crm-bento",
    tag: "04 · Operations",
    title: "Custom CRM Software",
    description: "Tailor-made CRMs built around your sales & support flows.",
    iconClass: "b-crm",
    gradient: "linear-gradient(135deg,#d946ef,#f472b6)",
    icon: "i-db",
    sceneType: "crm",
    chips: ["Automation", "Analytics"]
  },
  {
    id: "web-bento",
    tag: "05 · Platforms",
    title: "Website Development",
    description: "Fast, SEO-ready websites engineered to convert visitors.",
    iconClass: "b-web",
    gradient: "linear-gradient(135deg,#f59e0b,#fb923c)",
    icon: "i-code",
    sceneType: "web",
    chips: ["Next.js", "React", "Laravel"]
  }
];
