export const workCategories = [
  "All",
  "Website Development",
  "Ecommerce Solutions",
  "Mobile App Development",
  "AI & Automation",
  "Custom Software & CRM",
  "Growth Marketing"
];

export const caseStudiesData = [
  {
    id: "finedge-lending",
    slug: "finedge-lending",
    serviceSlug: "website-development",
    category: "Website Development",
    title: "FinEdge Digital Lending Platform",
    client: "FinEdge Capital LLC",
    industry: "Fintech & Banking",
    duration: "12 Weeks",
    country: "United States",
    description: "A loan origination platform with instant KYC, sub-second TTFB, and automated credit scoring.",
    tags: ["Fintech", "Next.js", "US"],
    gradient: "linear-gradient(135deg,#4f46e5,#7c3aed)",
    image: "https://picsum.photos/seed/vt-fintech/800/520",
    metrics: [
      { value: "+62%", label: "Applications" },
      { value: "3x", label: "Faster Approvals" },
      { value: "99.99%", label: "Uptime SLA" },
      { value: "<250ms", label: "Global Latency" }
    ],
    challenge: "FinEdge was burdened with legacy Ruby monolith infrastructure suffering from 4.8s initial page loads, frequent drop-offs during identity verification, and manual underwriting bottlenecks that delayed borrower approvals by up to 72 hours.",
    solution: "Vision re-architected the borrower onboarding funnel using Next.js 15 with React Server Components, server actions, and edge-cached state machines. We integrated automated Plaid bank verification, Socure instant KYC, and an asynchronous credit decisioning engine hosted on AWS ECS Fargate.",
    deliverables: [
      "Sub-second borrower loan origination web application",
      "Automated KYC/AML verification pipeline with zero manual review for 88% of applicants",
      "Executive underwriting portal with real-time risk heatmaps",
      "Bank-grade SOC-2 compliant encrypted audit logs and AWS infrastructure"
    ],
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Redis", "AWS ECS", "Plaid API"],
    testimonial: {
      quote: "Vision completely revitalized our customer onboarding experience. Our approval speeds plummeted from 3 days to under 15 minutes, while application throughput jumped by 62%. They are true engineering partners.",
      author: "Marcus Vance",
      role: "Chief Technology Officer",
      company: "FinEdge Capital"
    }
  },
  {
    id: "novapay-b2b-portal",
    slug: "novapay-b2b-portal",
    serviceSlug: "website-development",
    category: "Website Development",
    title: "NovaPay Merchant Portal & Analytics",
    client: "NovaPay Financial Europe",
    industry: "SaaS & Cloud Platforms",
    duration: "14 Weeks",
    country: "United Kingdom",
    description: "High-concurrency global payment gateway dashboard built with Next.js, TypeScript, and edge caching.",
    tags: ["SaaS", "Web App", "UK"],
    gradient: "linear-gradient(135deg,#06b6d4,#4f46e5)",
    image: "https://picsum.photos/seed/vt-novapay/800/520",
    metrics: [
      { value: "99.99%", label: "Uptime" },
      { value: "<180ms", label: "Page Latency" },
      { value: "10M+", label: "Daily Events" },
      { value: "-45%", label: "DevOps Overhead" }
    ],
    challenge: "NovaPay required a secure multi-tenant portal for 4,000+ European merchants processing millions of transaction events per day. Their existing dashboard suffered from dashboard freezing during end-of-month reconciliations and lacked granular role-based permissions.",
    solution: "We designed a micro-frontend architecture using Next.js, TanStack Table, ClickHouse analytical stores, and Tailwind CSS. We implemented real-time webhook streaming via WebSockets and end-to-end multi-currency chargeback dispute management.",
    deliverables: [
      "Real-time merchant transaction and analytics console",
      "Multi-currency payout scheduler supporting SEPA, BACS, and SWIFT",
      "Sub-200ms query performance on 100M+ transaction ledger rows",
      "Role-based access control (RBAC) with hardware token 2FA"
    ],
    techStack: ["Next.js", "TypeScript", "ClickHouse", "Go Microservices", "PostgreSQL", "Docker", "Kubernetes", "Tailwind CSS"],
    testimonial: {
      quote: "The speed and responsiveness of our new merchant portal blew our enterprise clients away. Queries that took 20 seconds now render in 180ms. Vision delivered beyond our highest expectations.",
      author: "Elena Rostova",
      role: "VP of Product",
      company: "NovaPay Europe"
    }
  },
  {
    id: "luxe-d2c-storefront",
    slug: "luxe-d2c-storefront",
    serviceSlug: "ecommerce-solutions",
    category: "Ecommerce Solutions",
    title: "Aura Botanicals Shopify Plus Storefront",
    client: "Aura Botanicals Wellness Inc.",
    industry: "Ecommerce & Retail",
    duration: "10 Weeks",
    country: "United States",
    description: "Bespoke headless Shopify Hydrogen store with dynamic bundle builder and 1-click checkout.",
    tags: ["Ecommerce", "Shopify Plus", "US"],
    gradient: "linear-gradient(135deg,#16a34a,#4ade80)",
    image: "https://picsum.photos/seed/vt-shop/800/520",
    metrics: [
      { value: "+44%", label: "Checkout Rate" },
      { value: "1.4s", label: "Mobile Speed" },
      { value: "98/100", label: "Lighthouse Score" },
      { value: "2.8x", label: "Mobile Orders" }
    ],
    challenge: "Aura Botanicals was scaling paid social traffic aggressively, but their bloated legacy theme had a mobile Core Web Vitals score under 35. High bounce rates and a clunky 4-step checkout process were costing them hundreds of thousands in lost revenue.",
    solution: "Vision engineered a headless Shopify Hydrogen storefront powered by Oxygen edge hosting. We built a custom multi-step herbal bundle configurator, sub-second product filtering, and Shopify Functions checkout validation rules.",
    deliverables: [
      "Headless Shopify Hydrogen 2.0 storefront",
      "Interactive 3D bundle visualizer and subscription builder",
      "Instant edge-cached product search and variant switching",
      "Automated Klaviyo customer segmentation and review syndication"
    ],
    techStack: ["Shopify Plus", "Shopify Hydrogen", "Oxygen", "Remix", "GraphQL Storefront API", "Tailwind CSS", "Klaviyo"],
    testimonial: {
      quote: "Our conversion rate surged by 44% in the very first month post-launch. Vision solved our site speed issues permanently and crafted a brand aesthetic that elevated our entire business.",
      author: "Julian Thorne",
      role: "Founder & CEO",
      company: "Aura Botanicals"
    }
  },
  {
    id: "glow-skincare-commerce",
    slug: "glow-skincare-commerce",
    serviceSlug: "ecommerce-solutions",
    category: "Ecommerce Solutions",
    title: "Glow Cosmetics Multi-Market D2C",
    client: "Glow Beauty International",
    industry: "Ecommerce & Retail",
    duration: "8 Weeks",
    country: "United Arab Emirates",
    description: "Multi-currency international Shopify Plus store with localized payment rails and automated ERP sync.",
    tags: ["Beauty", "Shopify", "UAE"],
    gradient: "linear-gradient(135deg,#f59e0b,#fb923c)",
    image: "https://picsum.photos/seed/vt-glow/800/520",
    metrics: [
      { value: "3.2x", label: "AOV Increase" },
      { value: "45k+", label: "Monthly Orders" },
      { value: "100%", label: "Bilingual Arabic/EN" },
      { value: "<1.6s", label: "Load Time" }
    ],
    challenge: "Glow Cosmetics needed to expand across the GCC region with full Arabic RTL support, localized payment gateways (Tabby, Tamara, Apple Pay), and real-time inventory synchronization with their regional SAP ERP warehouses.",
    solution: "We deployed a bespoke Shopify Plus theme optimized for RTL Arabic typography, localized currency conversion without redirect flickering, and an automated event-driven webhook worker bridging Shopify with SAP.",
    deliverables: [
      "Seamless bilingual English/Arabic RTL store experience",
      "Buy-Now-Pay-Later (Tabby/Tamara) native checkout integration",
      "SAP ERP bidirectional inventory and order sync pipeline",
      "Omnichannel VIP loyalty points and tiered subscription portal"
    ],
    techStack: ["Shopify Plus", "Liquid", "Tailwind CSS", "Node.js Middleware", "SAP ERP API", "Tabby BNPL", "Algolia Search"],
    testimonial: {
      quote: "Launching a flawless Arabic-first ecommerce experience in 8 weeks felt impossible until we partnered with Vision. The technical depth and precision of their team are unmatched.",
      author: "Nour Al-Mansoor",
      role: "Head of Digital Commerce",
      company: "Glow Cosmetics"
    }
  },
  {
    id: "caresync-telehealth",
    slug: "caresync-telehealth",
    serviceSlug: "mobile-app-development",
    category: "Mobile App Development",
    title: "CareSync Telehealth Mobile App",
    client: "CareSync Health Ltd",
    industry: "Healthcare & MedTech",
    duration: "16 Weeks",
    country: "United Kingdom",
    description: "iOS and Android app for video consults, digital prescriptions, and offline-first medical records.",
    tags: ["Healthcare", "React Native", "UK"],
    gradient: "linear-gradient(135deg,#0891b2,#3b82f6)",
    image: "https://picsum.photos/seed/vt-health/800/520",
    metrics: [
      { value: "50k+", label: "Active Users" },
      { value: "4.9★", label: "App Rating" },
      { value: "100%", label: "HIPAA & GDPR" },
      { value: "<200ms", label: "WebRTC Jitter" }
    ],
    challenge: "Patients in rural areas experienced high dropouts during telehealth video calls over unstable cellular networks. CareSync required a secure, HIPAA/GDPR-compliant app that worked reliably even on low-bandwidth 3G connections.",
    solution: "Vision developed a native React Native application with adaptive WebRTC video scaling, end-to-end video encryption, offline-first SQLite state caching with automated sync, and instant digital prescription dispatch to local pharmacies.",
    deliverables: [
      "Cross-platform iOS and Android patient mobile application",
      "Low-bandwidth WebRTC HD video consultation suite",
      "Encrypted digital health records vault with biometric auth",
      "Doctor administrative scheduling and e-prescription portal"
    ],
    techStack: ["React Native", "WebRTC", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS S3 KMS", "Stripe Connect"],
    testimonial: {
      quote: "Vision built an app that our patients genuinely love using. The video stability on weak connections and the biometric security standards allowed us to pass NHS compliance without a single issue.",
      author: "Dr. Alistair Finch",
      role: "Medical Director",
      company: "CareSync Health"
    }
  },
  {
    id: "fitpulse-workout-app",
    slug: "fitpulse-workout-app",
    serviceSlug: "mobile-app-development",
    category: "Mobile App Development",
    title: "FitPulse Interactive Fitness Companion",
    client: "FitPulse Interactive Inc.",
    industry: "Health & Fitness",
    duration: "12 Weeks",
    country: "United States",
    description: "Cross-platform mobile app with Apple HealthKit sync, biometric auth, and offline workout tracking.",
    tags: ["Fitness", "Flutter", "US"],
    gradient: "linear-gradient(135deg,#8b5cf6,#ec4899)",
    image: "https://picsum.photos/seed/vt-fit/800/520",
    metrics: [
      { value: "120k+", label: "Downloads" },
      { value: "99.9%", label: "Crash-Free" },
      { value: "42min", label: "Avg Session" },
      { value: "4.8★", label: "App Store" }
    ],
    challenge: "FitPulse required an ultra-responsive workout companion capable of syncing heart rate data from Apple Watch, Garmin, and Google Fit in real-time, accompanied by offline-capable video workouts with zero audio stuttering.",
    solution: "We engineered a 60fps Flutter mobile application utilizing Hive local caching, background audio state orchestration, and bi-directional Bluetooth Low Energy (BLE) sensor connectivity for heart rate monitors.",
    deliverables: [
      "High-performance Flutter mobile application for iOS and Android",
      "Apple HealthKit and Google Health Connect bi-directional sync",
      "Offline video caching engine with smart background pre-fetching",
      "Social leaderboard and community challenge modules"
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Node.js", "MongoDB", "Apple HealthKit", "Google Fit API", "Stripe In-App"],
    testimonial: {
      quote: "Working with Vision was the best tech decision we made. Our crash-free user sessions jumped to 99.9%, and our App Store rating went from 3.8 to 4.8 stars in three months.",
      author: "Samantha Brooks",
      role: "Co-Founder & COO",
      company: "FitPulse Interactive"
    }
  },
  {
    id: "nexus-ai-support-agents",
    slug: "nexus-ai-support-agents",
    serviceSlug: "ai-automation",
    category: "AI & Automation",
    title: "Nexus Autonomous AI Support Agents",
    client: "Nexus Cloud Logistics",
    industry: "AI & Automation",
    duration: "6 Weeks",
    country: "United States",
    description: "Multi-agent LangGraph system resolving tier-1 customer inquiries with verified ERP citations.",
    tags: ["AI & RAG", "LangGraph", "US"],
    gradient: "linear-gradient(135deg,#4f46e5,#06b6d4)",
    image: "https://picsum.photos/seed/vt-agent/800/520",
    metrics: [
      { value: "72%", label: "Tickets Automated" },
      { value: "<1.5%", label: "Escalation Rate" },
      { value: "4.2s", label: "Response Time" },
      { value: "94%", label: "Satisfaction Score" }
    ],
    challenge: "Nexus was overwhelmed with 15,000 monthly customer inquiries regarding shipment delays, tariff calculations, and customs compliance, causing 48-hour email backlogs and rising customer churn.",
    solution: "Vision engineered a multi-agent autonomous support network using LangGraph, Python FastAPI, and Pinecone vector stores. The system verifies identity, checks real-time warehouse ERP status, and synthesizes answers with zero hallucination.",
    deliverables: [
      "Multi-agent autonomous customer support system",
      "Deterministic tool-calling integration with warehouse ERP",
      "Human-in-the-loop escalation dashboard with sentiment flags",
      "Automated ticket classification and analytics reporting"
    ],
    techStack: ["Python", "FastAPI", "LangGraph", "OpenAI GPT-4o", "Pinecone", "Redis", "Docker", "Zendesk API"],
    testimonial: {
      quote: "The multi-agent system built by Vision resolved 72% of our tier-1 tickets on day one without hallucinating a single response. Our support team can now focus on complex enterprise cases.",
      author: "David Sterling",
      role: "VP of Operations",
      company: "Nexus Cloud"
    }
  },
  {
    id: "intellidoc-rag-engine",
    slug: "intellidoc-rag-engine",
    serviceSlug: "ai-automation",
    category: "AI & Automation",
    title: "IntelliDoc Legal & Financial RAG Pipeline",
    client: "Consortium Capital Partners",
    industry: "Fintech & Banking",
    duration: "8 Weeks",
    country: "European Union",
    description: "Private RAG knowledge base searching 500,000+ contracts with SOC-2 compliance and sub-second retrieval.",
    tags: ["LLMs", "Vector DB", "EU"],
    gradient: "linear-gradient(135deg,#6366f1,#a855f7)",
    image: "https://picsum.photos/seed/vt-rag/800/520",
    metrics: [
      { value: "85%", label: "Time Saved" },
      { value: "Zero", label: "Data Leakage" },
      { value: "500k+", label: "Contracts Indexed" },
      { value: "99.2%", label: "Citation Accuracy" }
    ],
    challenge: "Financial analysts and legal partners spent 18+ hours per week manually reviewing cross-border credit agreements, loan indentures, and regulatory filings scattered across disparate document repositories.",
    solution: "We engineered an on-premise private RAG engine running open-source LLMs with hybrid vector and BM25 sparse search. The platform guarantees that zero customer financial data leaves the client's dedicated VPC.",
    deliverables: [
      "Private SOC-2 compliant vector indexing pipeline",
      "Hybrid search engine combining lexical BM25 and dense embeddings",
      "Interactive legal citation viewer highlighting source clauses",
      "Granular role-based document access controls"
    ],
    techStack: ["Next.js", "Python", "Llama 3", "Qdrant Vector DB", "PostgreSQL", "FastAPI", "Docker", "AWS GovCloud"],
    testimonial: {
      quote: "IntelliDoc cut our document diligence turnaround from days to seconds. Vision understood our stringent European data residency needs and delivered an impenetrable architecture.",
      author: "Sarah Lindqvist",
      role: "Managing Partner",
      company: "Consortium Capital"
    }
  },
  {
    id: "shipfast-logistics",
    slug: "shipfast-logistics",
    serviceSlug: "custom-software-crm",
    category: "Custom Software & CRM",
    title: "ShipFast Logistics CRM & Dispatch Hub",
    client: "ShipFast Freightways",
    industry: "Logistics & Supply Chain",
    duration: "14 Weeks",
    country: "India",
    description: "Custom enterprise CRM with automated fleet routing, live driver tracking, and billing integrations.",
    tags: ["Logistics", "CRM + ERP", "India"],
    gradient: "linear-gradient(135deg,#ec4899,#8b5cf6)",
    image: "https://picsum.photos/seed/vt-logistics/800/520",
    metrics: [
      { value: "-35%", label: "Delivery Cost" },
      { value: "87%", label: "Less Manual Work" },
      { value: "1,200+", label: "Vehicles Managed" },
      { value: "99.8%", label: "Routing Accuracy" }
    ],
    challenge: "Managing 1,200+ freight vehicles across 28 states with disconnected spreadsheets and WhatsApp groups led to route delays, unbilled mileage, fuel pilferage, and customer complaints.",
    solution: "Vision engineered a custom enterprise logistics hub featuring dynamic Dijkstra route optimization, real-time GPS telemetry ingestion, driver mobile dispatch apps, and automated GST billing.",
    deliverables: [
      "Real-time fleet dispatch control tower with live map tracking",
      "Driver Android application with offline proof-of-delivery signatures",
      "Automated trip expense and fuel card reconciliation engine",
      "Customer delivery tracking portal with live SMS/WhatsApp milestones"
    ],
    techStack: ["Next.js", "Node.js", "PostGIS", "PostgreSQL", "Redis", "Kafka", "React Native", "Google Maps Platform"],
    testimonial: {
      quote: "Our fuel expenditures dropped by 35% in our first quarter of using the platform. Vision gave us the operational clarity and automation of a multi-billion dollar enterprise.",
      author: "Rajesh Singhania",
      role: "Managing Director",
      company: "ShipFast Freightways"
    }
  },
  {
    id: "metrobuild-erp-system",
    slug: "metrobuild-erp-system",
    serviceSlug: "custom-software-crm",
    category: "Custom Software & CRM",
    title: "MetroBuild Construction ERP Platform",
    client: "MetroBuild Infrastructure Group",
    industry: "Real Estate & PropTech",
    duration: "16 Weeks",
    country: "India",
    description: "Custom multi-department ERP managing vendor bids, warehouse inventory, and automated payroll.",
    tags: ["Enterprise", "PostgreSQL", "India"],
    gradient: "linear-gradient(135deg,#d946ef,#f472b6)",
    image: "https://picsum.photos/seed/vt-metro/800/520",
    metrics: [
      { value: "4.8x", label: "Ops Velocity" },
      { value: "$0", label: "Seat License Tax" },
      { value: "18 Sites", label: "Managed Live" },
      { value: "100%", label: "Inventory Audit" }
    ],
    challenge: "MetroBuild was spending over $120,000 annually in per-seat software licenses for legacy software that was too rigid for dynamic construction site purchase orders, subcontractor billing, and material testing.",
    solution: "We designed a bespoke web ERP with zero recurring seat licensing fees. The platform includes purchase order approvals on WhatsApp, inventory barcode tracking on mobile, and automated contractor payroll.",
    deliverables: [
      "Custom multi-site construction ERP with 100% IP ownership",
      "Material requisition workflow with multi-tier digital signoffs",
      "Subcontractor measurement book (MB) verification module",
      "Financial ledger reporting with automated tax deductions at source"
    ],
    techStack: ["Next.js", "TypeScript", "Python FastAPI", "PostgreSQL", "Redis", "AWS RDS", "Docker", "Tailwind CSS"],
    testimonial: {
      quote: "Vision freed us from suffocating per-seat software contracts and gave us an ERP tailored specifically to how our site engineers and procurement teams actually operate.",
      author: "Kavita Reddy",
      role: "Chief Operating Officer",
      company: "MetroBuild Infrastructure"
    }
  },
  {
    id: "peakscale-performance-ads",
    slug: "peakscale-performance-ads",
    serviceSlug: "meta-google-ads",
    category: "Growth Marketing",
    title: "PeakScale High-Intent Paid Acquisition",
    client: "PeakScale Financial SaaS",
    industry: "SaaS & Cloud Platforms",
    duration: "8 Weeks",
    country: "United Kingdom",
    description: "Full-funnel Google Search and Meta Ads campaign with server-side CAPI tracking and dedicated CRO landers.",
    tags: ["Google Ads", "Meta Ads", "UK"],
    gradient: "linear-gradient(135deg,#f59e0b,#ef4444)",
    image: "https://picsum.photos/seed/vt-ads/800/520",
    metrics: [
      { value: "5.2x", label: "Verified ROAS" },
      { value: "-42%", label: "Acquisition Cost" },
      { value: "3.4k", label: "Monthly SQLs" },
      { value: "1.2s", label: "Lander Speed" }
    ],
    challenge: "PeakScale was burning $40,000/month on Google Ads with soaring customer acquisition costs (CAC) due to poor conversion tracking post-iOS 14.5 and generic landing pages with 8-second load times.",
    solution: "Vision engineered high-speed Next.js landing pages, implemented server-side Conversions API (CAPI) on AWS CloudFront, and restructured paid search campaigns targeting high-intent commercial keywords.",
    deliverables: [
      "Server-side Meta and Google Ads Conversions API pipeline",
      "High-speed dedicated landing pages with sub-second page loads",
      "Full-funnel remarketing audience architecture",
      "Real-time Looker Studio executive CAC and ROAS dashboard"
    ],
    techStack: ["Next.js", "Meta CAPI", "Google Ads API", "AWS CloudFront", "Segment CDP", "Looker Studio", "PostHog"],
    testimonial: {
      quote: "Our customer acquisition costs dropped by 42% while demo bookings doubled. The technical rigor Vision brought to tracking and page speed transformed our paid acquisition economics.",
      author: "Oliver Sterling",
      role: "Head of Growth",
      company: "PeakScale SaaS"
    }
  },
  {
    id: "urbanzen-cro-campaign",
    slug: "urbanzen-cro-campaign",
    serviceSlug: "meta-google-ads",
    category: "Growth Marketing",
    title: "UrbanZen D2C Conversion Scaling",
    client: "UrbanZen Apparel",
    industry: "Ecommerce & Retail",
    duration: "6 Weeks",
    country: "United States",
    description: "Performance ad creative matrix combined with high-speed Next.js landing pages to scale direct customer sales.",
    tags: ["Paid Social", "CRO", "US"],
    gradient: "linear-gradient(135deg,#3b82f6,#06b6d4)",
    image: "https://picsum.photos/seed/vt-urban/800/520",
    metrics: [
      { value: "+68%", label: "Conversion Lift" },
      { value: "$1.2M+", label: "New Revenue" },
      { value: "3.8x", label: "Blended MER" },
      { value: "-28%", label: "Cart Abandonment" }
    ],
    challenge: "UrbanZen had hit a growth ceiling at $150k monthly revenue. Their paid social ad spend was failing to scale profitably due to high mobile cart abandonment and unoptimized PDP page layouts.",
    solution: "We conducted comprehensive Heatmap and session replay audits, redesigned the product detail pages with sticky mobile Add-to-Cart bars and social proof tickers, and launched dynamic creative testing campaigns.",
    deliverables: [
      "Comprehensive UX & Conversion Rate Optimization audit",
      "High-converting mobile PDP and collection page templates",
      "Automated SMS and email checkout recovery flows",
      "Dynamic creative performance testing matrix"
    ],
    techStack: ["Shopify Plus", "Next.js", "Klaviyo", "PostHog", "Meta Ads", "Google Analytics 4", "Hotjar"],
    testimonial: {
      quote: "Vision unlocked over $1.2M in incremental revenue in just 6 weeks. Their team merges world-class code with sharp growth marketing acumen.",
      author: "Chloe Davenport",
      role: "Chief Executive Officer",
      company: "UrbanZen Apparel"
    }
  }
];

export function getCaseStudyBySlug(slug) {
  if (!slug) return null;
  return caseStudiesData.find((item) => item.slug === slug || item.id === slug) || null;
}

export function getProjectsByService(serviceSlug) {
  const matches = caseStudiesData.filter((item) => item.serviceSlug === serviceSlug);
  if (matches.length > 0) return matches;
  return caseStudiesData.slice(0, 3);
}
