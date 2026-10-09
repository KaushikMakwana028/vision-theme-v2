export const serviceCategories = [
  "All",
  "AI & Innovation",
  "Web Engineering",
  "Ecommerce & D2C",
  "Mobile Engineering",
  "Enterprise Systems",
  "Growth & Performance"
];

export const servicesData = [
  // 1. Web Engineering
  {
    id: "website-development",
    number: "01",
    title: "Website Development",
    slug: "website-development",
    category: "Web Engineering",
    badge: "High-Performance Platforms",
    icon: "i-code",
    shortDescription: "Fast, scalable web apps and platforms built with React, Next.js, Laravel, and headless architecture.",
    description: "We engineer lightning-fast, accessible, and scalable digital platforms engineered with Next.js, React, Laravel, and headless CMS architectures. Every build is optimized for sub-second Core Web Vitals, enterprise security, and maximum conversion rates.",
    heroSubtitle: "High-performance web applications and corporate platforms engineered for speed, search dominance, and scalable user experiences. 100% custom-crafted, zero bloated templates.",
    tags: ["React", "Next.js", "Laravel", "TypeScript"],
    href: "/services/website-development",
    metrics: [
      { value: "99.8%", label: "Lighthouse Score", sub: "Speed, SEO & Accessibility" },
      { value: "<220ms", label: "Average TTFB", sub: "Global Edge Caching" },
      { value: "3.4x", label: "Conversion Uplift", sub: "Average Client Performance" },
      { value: "150+", label: "Platforms Live", sub: "Built & Scaled Worldwide" }
    ],
    capabilities: [
      {
        title: "Headless CMS & Static Sites",
        description: "Blazing-fast Next.js frontends powered by headless CMS platforms like Sanity, Contentful, and Strapi for frictionless content management.",
        icon: "i-web"
      },
      {
        title: "Custom Web Portals & SaaS",
        description: "Secure, role-based enterprise portals, customer self-service dashboards, and high-concurrency cloud applications.",
        icon: "i-db"
      },
      {
        title: "Full-Stack API Engineering",
        description: "Robust REST and GraphQL microservices engineered with Node.js, Python FastAPI, and Laravel with strict caching and rate-limiting.",
        icon: "i-code"
      },
      {
        title: "Progressive Web Apps (PWA)",
        description: "App-like mobile experiences that work offline, support push notifications, and load instantly from home screen shortcuts.",
        icon: "i-mobile"
      },
      {
        title: "Core Web Vitals & Speed Optimization",
        description: "Comprehensive audits, server-side rendering, asset minification, critical CSS inlining, and global CDN caching.",
        icon: "i-speed"
      },
      {
        title: "Enterprise Security & SEO Architecture",
        description: "Strict OWASP adherence, automated security headers, automated sitemap indexing, and structured rich snippet schema markup.",
        icon: "i-lock"
      }
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "Laravel", "PostgreSQL", "Vercel", "AWS"],
    workflow: [
      {
        step: "01",
        title: "Discovery & Technical Architecture",
        desc: "We analyze your user personas, performance KPIs, database requirements, and integration touchpoints to design an unshakeable system blueprint."
      },
      {
        step: "02",
        title: "Interactive Prototyping & UI/UX",
        desc: "Design system creation in Figma, component hierarchies, responsive micro-interactions, and accessibility passes before code begins."
      },
      {
        step: "03",
        title: "Agile Development & API Integration",
        desc: "Bi-weekly sprint deliverables with modular React components, clean Git branches, unit testing, and continuous deployment to staging."
      },
      {
        step: "04",
        title: "Performance QA & Zero-Downtime Launch",
        desc: "Full automated regression tests, Core Web Vitals profiling, SEO URL validation, and seamless DNS rollover with round-the-clock launch support."
      }
    ],
    advantages: [
      {
        title: "100% Custom Engineered",
        desc: "No bloated WordPress page builders or generic themes. Clean, modular code that your in-house team can easily extend."
      },
      {
        title: "Sub-Second Global Speeds",
        desc: "Distributed serverless edge computing ensures users experience instant page loads whether they are in New York or Tokyo."
      },
      {
        title: "Search Engine Domination",
        desc: "Semantic HTML5, lightning-quick server rendering, and automated schema injection that give you an immediate organic ranking advantage."
      },
      {
        title: "Guaranteed SLA & Maintenance",
        desc: "Proactive uptime monitoring, automated security patching, dependency upgrades, and direct Slack access to your lead engineer."
      }
    ],
    faqs: [
      {
        question: "How long does a custom website or web app take to develop?",
        answer: "A focused corporate website or high-converting marketing platform typically ships in 3 to 6 weeks. Complex enterprise web applications, custom customer portals, or SaaS platforms with deep third-party integrations generally require 8 to 14 weeks."
      },
      {
        question: "Why should we choose Next.js and custom code over WordPress or Webflow?",
        answer: "Custom Next.js architectures provide sub-second page loads, near-perfect 100/100 Lighthouse scores, complete design freedom, and zero monthly plugin subscription overhead."
      },
      {
        question: "Can our marketing team edit text and publish blog posts without a developer?",
        answer: "Yes. We integrate user-friendly headless CMS solutions like Sanity, Strapi, or Contentful so your marketing team gets an intuitive visual editor to publish content without writing code."
      },
      {
        question: "How do you protect our web platform against cyber attacks?",
        answer: "We enforce OWASP Top 10 security standards on every project. This includes HTTPS/TLS encryption, CSRF protection, input sanitization against SQL injection and XSS, and rate limiting."
      },
      {
        question: "Do you assist with migration from our existing site without losing SEO rankings?",
        answer: "Yes, we map 301 redirects for every legacy page, replicate title tags and meta descriptions, and maintain structured data schemas to ensure Google transitions your rankings seamlessly."
      },
      {
        question: "What happens after our website goes live?",
        answer: "Every project includes a 30-day post-launch warranty with priority bug resolution, plus ongoing monthly SLA maintenance retainers covering 24/7 uptime monitoring and security patches."
      }
    ]
  },
  {
    id: "custom-web-apps",
    number: "02",
    title: "Full-Stack Web App & SaaS",
    slug: "custom-web-apps",
    category: "Web Engineering",
    badge: "Cloud SaaS Applications",
    icon: "i-web",
    shortDescription: "Custom cloud-native web applications, SaaS dashboards, and multi-tenant portals engineered with Next.js and Python/Node.",
    description: "We engineer resilient, multi-tenant cloud SaaS web apps and customer portals with high-throughput backend APIs, real-time WebSockets, and enterprise authentication.",
    heroSubtitle: "Engineered-to-scale SaaS platforms, customer self-service portals, and complex cloud web applications built for high concurrency and zero latency.",
    tags: ["SaaS", "Next.js", "Python FastAPI", "PostgreSQL"],
    href: "/services/custom-web-apps",
    metrics: [
      { value: "99.99%", label: "Cloud Uptime", sub: "Enterprise High Availability" },
      { value: "<150ms", label: "API Response", sub: "Optimized Database Queries" },
      { value: "100k+", label: "Concurrent Users", sub: "Stress-Tested Capacity" },
      { value: "65+", label: "SaaS Apps Shipped", sub: "From MVP to Production" }
    ],
    capabilities: [
      {
        title: "Multi-Tenant Cloud Architecture",
        description: "Isolated database schemas, tenant routing, and subscription tier provisioning designed to scale horizontally.",
        icon: "i-db"
      },
      {
        title: "Real-Time WebSocket Streams",
        description: "Live data feeds, collaborative multi-user editing, and real-time alerts powered by Redis and Socket.io.",
        icon: "i-zap"
      },
      {
        title: "Billing & Subscription Engines",
        description: "Seamless Stripe Billing, automated invoicing, tax calculation, and self-service customer checkout portals.",
        icon: "i-card"
      },
      {
        title: "Enterprise SSO & Auth (OAuth / SAML)",
        description: "Single sign-on with Google, Microsoft Azure AD, Okta, and multi-factor biometric authentication.",
        icon: "i-lock"
      },
      {
        title: "High-Performance API Gateways",
        description: "RESTful and GraphQL gateways with token bucket rate limiting, automated Swagger docs, and edge caching.",
        icon: "i-code"
      },
      {
        title: "CI/CD & Cloud Infrastructure as Code",
        description: "Automated Docker, Kubernetes, and Terraform pipelines for instant zero-downtime rolling deployments.",
        icon: "i-cloud"
      }
    ],
    techStack: ["Next.js", "Python", "FastAPI", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    workflow: [
      { step: "01", title: "Domain & Entity Modeling", desc: "Data schema definition, multi-tenant tenancy strategy, and security boundaries." },
      { step: "02", title: "Architecture & Auth Blueprint", desc: "API interface contracts, OAuth workflows, and role-based permissions matrix." },
      { step: "03", title: "Sprint Coding & CI/CD", desc: "Bi-weekly sprint deliverables with automated Jest/PyTest suites and staging previews." },
      { step: "04", title: "Load Testing & Rollout", desc: "Simulated load spikes, penetration testing, and zero-downtime production deployment." }
    ],
    advantages: [
      { title: "Zero Technical Debt", desc: "Strict TypeScript typing, modular architecture, and automated test coverage." },
      { title: "Infinite Scalability", desc: "Stateless containerized architecture ready to scale across global cloud regions." },
      { title: "Enterprise Security Built-In", desc: "Encrypted data at rest and in transit, audited against SOC-2 and HIPAA baselines." },
      { title: "Full Code Ownership", desc: "Complete Git repository transfer, deployment scripts, and architectural docs." }
    ],
    faqs: [
      { question: "Can you help take our web app from MVP to enterprise scale?", answer: "Yes, our team specializes in building scalable foundations from day one so your app can smoothly support hundreds of thousands of users without requiring an expensive rewrite." },
      { question: "How do you handle data privacy in multi-tenant systems?", answer: "We implement strict row-level security (RLS) in PostgreSQL alongside tenant-scoped middleware to mathematically prevent data leakage across customer accounts." },
      { question: "What cloud platforms do you support?", answer: "We deploy on AWS, Google Cloud Platform (GCP), Microsoft Azure, Vercel, and hybrid cloud infrastructures." }
    ]
  },

  // 2. Ecommerce & D2C
  {
    id: "ecommerce-solutions",
    number: "03",
    title: "Ecommerce Solutions",
    slug: "ecommerce-solutions",
    category: "Ecommerce & D2C",
    badge: "High-Converting Commerce",
    icon: "i-cart",
    shortDescription: "High-converting storefronts, marketplaces, and D2C platforms on Shopify Plus, WooCommerce, and headless stacks.",
    description: "We build revenue-driving ecommerce storefronts, custom Shopify Plus setups, and headless commerce engines designed for peak traffic, frictionless checkout, and high average order values. Integrated with global ERPs, inventory hubs, and localized payment rails.",
    heroSubtitle: "High-converting storefronts, bespoke Shopify Plus apps, and headless architectures engineered for high-volume transactions and seamless global commerce.",
    tags: ["Shopify Plus", "WooCommerce", "Headless", "Hydrogen"],
    href: "/services/ecommerce-solutions",
    metrics: [
      { value: "+42%", label: "Checkout Conversion", sub: "Average Client Lift" },
      { value: "<1.6s", label: "Mobile Checkout", sub: "Frictionless Pay Flows" },
      { value: "3000+", label: "Orders / Minute", sub: "Flash Sale Concurrency" },
      { value: "40+", label: "Stores Launched", sub: "Across 18 Global Markets" }
    ],
    capabilities: [
      {
        title: "Shopify & Shopify Plus Development",
        description: "Bespoke custom themes, Shopify Functions, customized checkout extensions, and high-converting product detail pages.",
        icon: "i-cart"
      },
      {
        title: "Headless Commerce Architecture",
        description: "Decoupled Shopify Hydrogen and Next.js frontends connecting to Storefront APIs for blazing mobile speeds and unique UI.",
        icon: "i-web"
      },
      {
        title: "Custom Shopify App Development",
        description: "Tailored public and private Shopify apps solving unique inventory, custom product configurators, or fulfillment workflows.",
        icon: "i-code"
      },
      {
        title: "Store Migration & Data Integrity",
        description: "Zero-downtime store migrations from Magento, WooCommerce, or BigCommerce with 100% preservation of orders, customers, and SEO URLs.",
        icon: "i-arrow"
      },
      {
        title: "ERP & Multi-Channel Integrations",
        description: "Real-time bi-directional syncing with SAP, NetSuite, Klaviyo, Gorgias, ShipStation, and marketplace channels.",
        icon: "i-db"
      },
      {
        title: "Checkout & Conversion Rate Optimization",
        description: "1-click upsells, bundle builders, localized multi-currency pricing, and streamlined express checkouts (Apple Pay, Shop Pay).",
        icon: "i-badge"
      }
    ],
    techStack: ["Shopify Plus", "Shopify Hydrogen", "Liquid", "Next.js", "WooCommerce", "Stripe", "Klaviyo", "Sanity"],
    workflow: [
      { step: "01", title: "Commerce Audit & Journey Mapping", desc: "We analyze drop-off rates, checkout friction, mobile ergonomics, and inventory workflows." },
      { step: "02", title: "High-Conversion UX & Store Design", desc: "Design optimized for visual merchandising, sticky add-to-cart buttons, and social proof." },
      { step: "03", title: "Theme Coding & Custom App Setup", desc: "Modern Liquid or headless frontend development with Shopify Functions and ERP connectivity." },
      { step: "04", title: "Load Testing & Launch Switchover", desc: "Synthetic stress testing simulating peak Black Friday traffic and monitored go-live cutover." }
    ],
    advantages: [
      { title: "Engineered for Conversion", desc: "Every button, image gallery, and checkout field is optimized to lower friction and maximize AOV." },
      { title: "Flash-Sale Stability", desc: "Our stores easily handle thousands of simultaneous checkout sessions during aggressive sales." },
      { title: "Seamless ERP & 3PL Syncing", desc: "Automated inventory updates and dispatch tracking eliminate manual data entry." },
      { title: "Multi-Currency & International", desc: "Automatic geolocation, multi-currency display, translated store copy, and localized taxes." }
    ],
    faqs: [
      { question: "Why should we hire Vision instead of using a standard Shopify theme?", answer: "Pre-made marketplace themes come bloated with hundreds of unused features that slow down mobile page load times. We build clean, bespoke stores yielding faster speeds and higher checkout conversion rates." },
      { question: "Can you migrate our existing store from WooCommerce or Magento without downtime?", answer: "Yes, we extract, clean, and map your complete database including customer accounts, order history, products, and SEO redirects with zero downtime." },
      { question: "What is headless commerce and is it right for my brand?", answer: "Headless commerce separates your frontend customer-facing website from the backend commerce engine, ideal for brands seeking sub-second load times and custom UI." }
    ]
  },
  {
    id: "shopify-plus-development",
    number: "04",
    title: "Shopify Plus & App Engineering",
    slug: "shopify-plus-development",
    category: "Ecommerce & D2C",
    badge: "Enterprise Commerce",
    icon: "i-badge",
    shortDescription: "Custom Shopify Plus themes, private apps, Shopify Functions, and checkout extensibility for high-volume brands.",
    description: "Scale your high-growth retail brand with tailored Shopify Plus architectures, custom checkout customization, B2B wholesale pricing portals, and enterprise ERP integrations.",
    heroSubtitle: "Enterprise Shopify Plus solutions engineered for high-volume D2C and B2B brands. Bespoke checkout extensibility, custom apps, and automated workflows.",
    tags: ["Shopify Plus", "Checkout Extensibility", "Shopify Functions", "Liquid"],
    href: "/services/shopify-plus-development",
    metrics: [
      { value: "99.99%", label: "Checkout Uptime", sub: "Enterprise Level Resilience" },
      { value: "+38%", label: "Average AOV Lift", sub: "Via Smart Checkout Upsells" },
      { value: "5000+", label: "Orders / Minute", sub: "High Concurrency Support" },
      { value: "35+", label: "Plus Stores Shipped", sub: "Global Retail Brands" }
    ],
    capabilities: [
      { title: "Checkout Extensibility & Upsells", description: "Native Shopify checkout extensions for dynamic cross-sells, custom loyalty rewards, and delivery date selectors.", icon: "i-cart" },
      { title: "Shopify Functions & Custom Discounts", description: "Rust and WebAssembly backend functions for tiered volume pricing, custom shipping rules, and VIP validations.", icon: "i-code" },
      { title: "B2B Wholesale Portals", description: "Customer-specific catalog pricing, net payment terms, minimum order thresholds, and draft order workflows.", icon: "i-briefcase" },
      { title: "Custom Shopify App Development", description: "Tailored embedded Node.js/Remix apps integrating warehouse management, ERPs, and custom product customizers.", icon: "i-layers" },
      { title: "Omnichannel POS Integration", description: "Unified customer profiles, in-store inventory lookup, and buy-online-pickup-in-store (BOPIS) flows.", icon: "i-refresh" },
      { title: "Internationalization & Expansion Stores", description: "Multi-store architecture with centralized product feeds, localized domain routing, and automated tax calculation.", icon: "i-web" }
    ],
    techStack: ["Shopify Plus", "Liquid", "Shopify Functions", "Remix", "Node.js", "GraphQL", "Tailwind CSS"],
    workflow: [
      { step: "01", title: "Plus Architecture Audit", desc: "Analyzing current checkout drop-offs, app clutter, and custom integration requirements." },
      { step: "02", title: "Custom App & Function Design", desc: "Engineering custom backend discount functions and UI checkout extension mockups." },
      { step: "03", title: "Sprint Coding & ERP Sync", desc: "Clean development utilizing Shopify CLI, automated GitHub deployment, and NetSuite sync." },
      { step: "04", title: "Flash Sale Validation & Go-Live", desc: "Simulated load testing, high-volume checkout checks, and zero-downtime release." }
    ],
    advantages: [
      { title: "Zero App Bloat", desc: "We replace dozens of clunky third-party apps with native custom Shopify Functions." },
      { title: "Native Checkout Speed", desc: "Shopify Checkout Extensibility keeps your checkout ultra-fast, secure, and PCI-compliant." },
      { title: "Unified B2B + D2C", desc: "Manage retail and wholesale operations from a single centralized Shopify Plus dashboard." },
      { title: "24/7 Dedicated Plus Support", desc: "Direct access to our senior Shopify Plus engineering leads whenever you need assistance." }
    ],
    faqs: [
      { question: "What is Checkout Extensibility?", answer: "It is Shopify's modern, secure framework replacing legacy checkout.liquid, allowing app blocks and native upsells directly inside the checkout." },
      { question: "Can you build a custom private app for our warehouse?", answer: "Yes, we regularly engineer secure private Shopify apps connecting directly to internal ERPs, warehouse hubs, and localized delivery carriers." }
    ]
  },

  // 3. Mobile Engineering
  {
    id: "mobile-app-development",
    number: "05",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    category: "Mobile Engineering",
    badge: "iOS & Android Apps",
    icon: "i-mobile",
    shortDescription: "Cross-platform iOS and Android apps with React Native, Flutter, and native-quality ergonomics.",
    description: "We design and develop high-performance mobile applications for iOS and Android. Using React Native and Flutter, we deliver 60fps responsiveness, hardware-level integrations, offline data sync, and bank-grade encryption from a unified codebase.",
    heroSubtitle: "Intuitive, ultra-responsive mobile applications for iOS and Android. Built with React Native & Flutter to deliver native 60fps performance and effortless maintenance.",
    tags: ["iOS", "Android", "React Native", "Flutter"],
    href: "/services/mobile-app-development",
    metrics: [
      { value: "4.9★", label: "App Store Rating", sub: "Average Client Rating" },
      { value: "99.9%", label: "Crash-Free Sessions", sub: "Rigorous Device Testing" },
      { value: "60 FPS", label: "Silky Fluid UI", sub: "Smooth Gestures & Motion" },
      { value: "2.5M+", label: "Active Downloads", sub: "Across Powered Mobile Apps" }
    ],
    capabilities: [
      {
        title: "Cross-Platform React Native & Flutter",
        description: "Unified codebase powering both iOS and Android applications, reducing development timeline by 45% while retaining native feel.",
        icon: "i-mobile"
      },
      {
        title: "Native iOS & Android Engineering",
        description: "Specialized Swift and Kotlin modules for intensive hardware access, ARKit, Bluetooth LE, and complex background processing.",
        icon: "i-code"
      },
      {
        title: "Offline-First Data Synchronization",
        description: "Local databases (WatermelonDB, SQLite) ensuring continuous app functionality during network dropouts with conflict-free cloud sync.",
        icon: "i-db"
      },
      {
        title: "Mobile UI/UX & Micro-Interactions",
        description: "Platform-specific design guidelines (Human Interface & Material Design) enriched with subtle haptics and intuitive gesture mechanics.",
        icon: "i-badge"
      },
      {
        title: "App Store & Play Store Publishing",
        description: "Comprehensive submission handling, privacy compliance manifests, screenshot asset generation, and App Store Optimization (ASO).",
        icon: "i-arrow"
      },
      {
        title: "Push Notifications & In-App Engagement",
        description: "Segmented behavioral push notification sequences, deep linking, in-app messaging, and event tracking via OneSignal and Firebase.",
        icon: "i-web"
      }
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo", "Fastlane", "SQLite", "PostgreSQL"],
    workflow: [
      { step: "01", title: "Mobile Architecture & User Flows", desc: "We define user journeys, authentication flows, offline capabilities, state management, and API contracts." },
      { step: "02", title: "Figma UI/UX & Device Validation", desc: "Interactive prototypes tested directly on physical iPhone and Android hardware." },
      { step: "03", title: "Sprint Engineering & Native Bridges", desc: "Feature-driven agile sprints, automated linting, native module bridging, and weekly TestFlight builds." },
      { step: "04", title: "App Store Review & Launch Monitoring", desc: "Apple & Google store approval coordination, crash-rate observability, and over-the-air update setup." }
    ],
    advantages: [
      { title: "Single Codebase, Zero Compromise", desc: "Save 40%+ on upfront and long-term maintenance costs with React Native while users experience genuine native performance." },
      { title: "Offline-First Reliability", desc: "Your customers can complete actions in elevators or airplanes; transactions sync immediately when connectivity returns." },
      { title: "Bank-Grade Device Security", desc: "Biometric authentication (FaceID / Fingerprint), encrypted Keychain storage, certificate pinning, and jailbreak detection." },
      { title: "Over-The-Air (OTA) Instant Updates", desc: "Push critical UI fixes and feature enhancements directly to users instantly without waiting days for store review cycles." }
    ],
    faqs: [
      { question: "Should we build our mobile app with React Native or fully Native?", answer: "For 95% of businesses, React Native or Flutter is the most strategic choice, delivering identical 60fps native performance while slashing development timeline and cost in half." },
      { question: "Do you assist with publishing and getting approved on the Apple App Store and Google Play?", answer: "Yes, we handle the entire release lifecycle including provisioning profiles, privacy declarations, screenshot generation, and Apple/Google review coordination." },
      { question: "How do you manage mobile app updates after launch?", answer: "We configure Over-The-Air (OTA) update pipelines using Expo / CodePush allowing instant deployment of fixes directly to devices." }
    ]
  },
  {
    id: "flutter-app-development",
    number: "06",
    title: "Flutter Cross-Platform Apps",
    slug: "flutter-app-development",
    category: "Mobile Engineering",
    badge: "High-Performance Mobile",
    icon: "i-speed",
    shortDescription: "Custom Flutter applications with pixel-perfect widget rendering, 60fps animations, and multi-platform compilation.",
    description: "Engineer expressive, natively compiled applications for mobile, web, and desktop from a single Dart codebase with Flutter's high-speed Skia/Impeller graphics engine.",
    heroSubtitle: "Pixel-perfect, multi-platform applications engineered with Google Flutter. 60fps fluid motion, native device bridges, and rapid time-to-market.",
    tags: ["Flutter", "Dart", "iOS", "Android", "Firebase"],
    href: "/services/flutter-app-development",
    metrics: [
      { value: "60 FPS", label: "Impeller Render", sub: "Silky Smooth UI Motion" },
      { value: "1 Codebase", label: "Multi-Platform", sub: "iOS, Android, Web & Desktop" },
      { value: "-50%", label: "Dev Timeline", sub: "Faster Feature Delivery" },
      { value: "45+", label: "Flutter Apps Live", sub: "Deployed Globally" }
    ],
    capabilities: [
      { title: "Pixel-Perfect Custom UI Widgets", description: "Bespoke design systems that look and feel identical across all iPhone models and Android screen sizes.", icon: "i-badge" },
      { title: "Native Device API Bridges", description: "Direct platform channels to Bluetooth, GPS, camera sensors, biometric security, and NFC.", icon: "i-mobile" },
      { title: "Offline Data with Hive & Isar", description: "Ultra-fast local NoSQL database caching for instant sub-millisecond data retrieval.", icon: "i-db" },
      { title: "State Management & Architecture", description: "Clean BLOC / Riverpod architecture ensuring testable, scalable, and bug-resistant mobile codebases.", icon: "i-layers" },
      { title: "Real-Time Chat & Video Streams", description: "WebRTC and Firebase WebSockets integration for peer-to-peer messaging and live video calls.", icon: "i-chat" },
      { title: "Automated Fastlane CI/CD", description: "Continuous integration pipelines building and signing release APKs and IPAs automatically.", icon: "i-arrow" }
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Riverpod", "Hive", "Fastlane", "REST APIs"],
    workflow: [
      { step: "01", title: "App Architecture & UX Flow", desc: "User journey mapping, screen hierarchy, and platform channel planning." },
      { step: "02", title: "Figma to Widget System", desc: "Reusable widget libraries, typography hierarchies, and dark/light theme tokens." },
      { step: "03", title: "Sprint Coding & Device QA", desc: "Agile sprints tested continuously across real iOS and Android physical devices." },
      { step: "04", title: "Store Submission & Launch", desc: "App Store and Google Play approvals with automated crash reporting integration." }
    ],
    advantages: [
      { title: "Identical Design Fidelity", desc: "Flutter paints directly to the canvas, guaranteeing your UI matches your Figma designs on every device." },
      { title: "Hot Reload Velocity", desc: "Instant iteration speeds allow our developers to test and refine features in real time." },
      { title: "Ready for Web & Desktop", desc: "Easily compile your mobile app to Mac, Windows, or Web with minimal code adjustments." },
      { title: "Complete Code Documentation", desc: "Full inline Dart docs and architectural blueprints for effortless long-term team onboarding." }
    ],
    faqs: [
      { question: "Why choose Flutter over React Native?", answer: "Flutter uses its own rendering engine (Impeller/Skia) which provides identical visual rendering on both operating systems, making it exceptional for heavily branded and animated apps." },
      { question: "How does Flutter performance compare to native Swift/Kotlin?", answer: "Flutter compiles ahead-of-time (AOT) to native ARM machine code, running at virtually indistinguishable native 60fps speeds." }
    ]
  },

  // 4. AI & Innovation
  {
    id: "ai-automation",
    number: "07",
    title: "AI & Autonomous Agents",
    slug: "ai-automation",
    category: "AI & Innovation",
    badge: "Agentic Systems & RAG",
    icon: "i-ai",
    shortDescription: "AI agents, RAG chatbots, and workflow automation that give your team hundreds of hours back every month.",
    description: "We build production-grade Agentic AI systems, custom RAG (Retrieval-Augmented Generation) knowledge bases, and autonomous workflows. Our agents reason, call external APIs, self-correct, and automate complex operational workflows with enterprise security and sub-2% error rates.",
    heroSubtitle: "Production-ready Agentic AI systems, autonomous multi-agent pipelines, and proprietary RAG architectures engineered to turn messy business data into high-ROI operational intelligence.",
    tags: ["RAG", "LLMs", "LangGraph", "Agents"],
    href: "/services/ai-automation",
    metrics: [
      { value: "70%", label: "Manual Effort Eliminated", sub: "In Core Operational Workflows" },
      { value: "<1.8%", label: "Hallucination Rate", sub: "Grounded Enterprise RAG" },
      { value: "2–5 Days", label: "POC Turnaround", sub: "From Idea to Working Agent" },
      { value: "100%", label: "Data Privacy", sub: "Zero Training On Your Data" }
    ],
    capabilities: [
      {
        title: "Custom AI Agent Development",
        description: "Autonomous agents that understand natural language goals, break them into execution steps, call APIs, and report verified results.",
        icon: "i-ai"
      },
      {
        title: "Multi-Agent Orchestration",
        description: "Supervisor, researcher, executor, and reviewer agents collaborating via LangGraph with typed handoffs and shared state memory.",
        icon: "i-code"
      },
      {
        title: "RAG & Enterprise Knowledge Bases",
        description: "Private question-answering systems searching across internal PDFs, CRM records, wikis, and databases with verifiable source citations.",
        icon: "i-db"
      },
      {
        title: "Intelligent Workflow Automation",
        description: "Upgrading brittle legacy RPA with cognitive agents that easily handle changing web interfaces, unstructured invoices, and emails.",
        icon: "i-arrow"
      },
      {
        title: "Sales, Support & Triage Agents",
        description: "24/7 intelligent tier-1 support and lead qualification agents that diagnose problems, initiate refunds, or book discovery calls.",
        icon: "i-cart"
      },
      {
        title: "Fine-Tuning & Governance Guardrails",
        description: "Custom fine-tuned open-source models (Llama 3, Mistral) shielded with PII scrubbing, toxicity filters, and audit logs.",
        icon: "i-lock"
      }
    ],
    techStack: ["LangChain", "LangGraph", "OpenAI GPT-4o", "Claude 3.5 Sonnet", "Llama 3", "Pinecone", "Qdrant", "Python", "FastAPI"],
    workflow: [
      { step: "01", title: "Use-Case Audit & Data Readiness", desc: "We analyze your documentation quality, system APIs, and operational bottlenecks to define achievable ROI benchmarks." },
      { step: "02", title: "Rapid Working Prototype (2–5 Days)", desc: "We build a tangible proof-of-concept testing vector retrieval and tool calling on your real operational sample data." },
      { step: "03", title: "Production Pipeline & Guardrails", desc: "Implementing automated evaluation metrics, synthetic benchmark testing, fallback human escalation, and latency caching." },
      { step: "04", title: "Deployment, Observability & SLAs", desc: "Deployment to isolated cloud environments with LangSmith tracing, drift alerts, usage budgets, and automated model retraining." }
    ],
    advantages: [
      { title: "Outcome-Accountable AI", desc: "We don't sell speculative research experiments. We build production agents tied to hard business metrics and cost-per-task efficiency." },
      { title: "Enterprise Data Privacy", desc: "Your proprietary documents and customer interactions are never used to train public foundation models. Complete SOC-2 and GDPR compliance." },
      { title: "Model-Agnostic Flexibility", desc: "Easily swap underlying models (OpenAI, Anthropic, Gemini, or self-hosted Llama) as cost curves and intelligence benchmarks evolve." },
      { title: "Human-In-The-Loop Safety", desc: "Critical decisions require dual-key confirmation or team member approval before external actions execute." }
    ],
    faqs: [
      { question: "How is Agentic AI different from traditional automation or standard ChatGPT?", answer: "Traditional automation follows rigid, brittle if/then rules that crash whenever an unexpected screen or file format appears. Standard ChatGPT is a text generator with no real memory or tools. Agentic AI uses LLMs for cognitive reasoning to break down goals, call APIs, and self-correct." },
      { question: "Is our proprietary company data kept secure and private?", answer: "Yes, 100%. We enforce enterprise zero-data-retention agreements or deploy open-source models directly into your private VPC (AWS/Azure/GCP)." },
      { question: "How do you prevent AI hallucinations and incorrect answers?", answer: "We implement advanced RAG architectures with strict vector similarity thresholds, reciprocal rank fusion (RRF), semantic reranking, and citation verification." }
    ]
  },
  {
    id: "rag-knowledge-bases",
    number: "08",
    title: "Enterprise RAG & Search Engines",
    slug: "rag-knowledge-bases",
    category: "AI & Innovation",
    badge: "Private Intelligence",
    icon: "i-db",
    shortDescription: "Private RAG knowledge search systems searching across internal documents, CRM records, and databases with verifiable citations.",
    description: "Unlock institutional knowledge trapped in thousands of PDFs, Notion pages, and Slack threads with sub-second semantic search, hybrid keyword matching, and guaranteed citations.",
    heroSubtitle: "Enterprise-grade Retrieval-Augmented Generation (RAG) pipelines. Ground your AI in verified proprietary company documents with sub-2% hallucination rates.",
    tags: ["RAG", "Vector Search", "Pinecone", "Qdrant", "Python"],
    href: "/services/rag-knowledge-bases",
    metrics: [
      { value: "98.5%", label: "Retrieval Accuracy", sub: "Grounded Semantic Precision" },
      { value: "<250ms", label: "Query Search Latency", sub: "Hybrid HNSW Indexing" },
      { value: "1M+", label: "Documents Indexed", sub: "Instant Multi-Modal Search" },
      { value: "Zero", label: "Data Leakage", sub: "Encrypted Private VPC" }
    ],
    capabilities: [
      { title: "Multi-Modal Document Parsing", description: "Accurately extracting tables, diagrams, and scanned text from complex multi-page PDF documents.", icon: "i-web" },
      { title: "Hybrid Semantic & BM25 Search", description: "Combining dense vector embeddings with sparse keyword matching to avoid missing exact product SKUs.", icon: "i-search" },
      { title: "Contextual Reranking (Cohere / Cross-Encoder)", description: "Filtering the top retrieval chunks through a reranker to ensure only relevant paragraphs reach the LLM.", icon: "i-target" },
      { title: "Direct Source Citations & Highlight Previews", description: "Every answer links directly to the exact page, sentence, and paragraph in the source document.", icon: "i-badge" },
      { title: "Access Control & Permission Filtering", description: "Role-based document indexing ensuring employees only receive answers from documents they have clearance to view.", icon: "i-lock" },
      { title: "Automated Vector Sync Pipelines", description: "Real-time webhook connectors updating vector databases whenever files change in Google Drive, Notion, or SharePoint.", icon: "i-refresh" }
    ],
    techStack: ["Pinecone", "Qdrant", "pgvector", "LangChain", "OpenAI Embeddings", "Cohere Rerank", "FastAPI"],
    workflow: [
      { step: "01", title: "Document & Chunking Audit", desc: "Analyzing document structures and designing specialized chunking strategies." },
      { step: "02", title: "Embedding Pipeline & Indexing", desc: "Generating high-dimensional embeddings and configuring vector index partitions." },
      { step: "03", title: "Precision Benchmarking", desc: "Running synthetic evaluation suites against ground-truth QA datasets." },
      { step: "04", title: "Production Deployment", desc: "Connecting secure web/Slack UI harnesses with continuous tracing and drift tracking." }
    ],
    advantages: [
      { title: "Truth-Grounded Responses", desc: "If the information is not in your documents, the system refuses to guess and escalates." },
      { title: "Auditable Footprint", desc: "Inspect every retrieved paragraph and embedding similarity score for compliance." },
      { title: "High-Speed Hybrid Search", desc: "Combines fuzzy lexical matching with semantic intelligence for unmatched accuracy." },
      { title: "Isolated Private Cloud", desc: "Host vector databases entirely within your own AWS or Azure infrastructure." }
    ],
    faqs: [
      { question: "What document formats are supported?", answer: "PDFs, Word docs, Excel sheets, PowerPoint decks, CSVs, markdown wikis, scanned images with OCR, and raw SQL databases." },
      { question: "How does the system ensure employees don't see unauthorized files?", answer: "We implement metadata-filtered queries that enforce your existing enterprise permissions (Active Directory / OAuth) at the database layer." }
    ]
  },

  // 5. Enterprise Systems
  {
    id: "custom-software-crm",
    number: "09",
    title: "Custom Software & CRM",
    slug: "custom-software-crm",
    category: "Enterprise Systems",
    badge: "Enterprise Architecture",
    icon: "i-db",
    shortDescription: "Tailor-made CRMs, ERPs, and internal tools that fit the way your business really works.",
    description: "We engineer purpose-built enterprise software, bespoke CRM/ERP systems, and scalable multi-tenant SaaS platforms. Tailored around your exact operational workflows, eliminating costly per-seat license fees and bridging fragmented internal tools.",
    heroSubtitle: "Engineered-to-fit enterprise platforms, custom sales CRMs, and internal workflow engines. Say goodbye to restrictive off-the-shelf software and costly per-seat SaaS tax.",
    tags: ["CRM", "ERP", "PostgreSQL", "Automation"],
    href: "/services/custom-software-crm",
    metrics: [
      { value: "100%", label: "Workflow Alignment", sub: "Tailored to Your Operations" },
      { value: "4.8x", label: "Faster Operations", sub: "Automated Repetitive Steps" },
      { value: "$0", label: "Per-Seat License Tax", sub: "Full IP & Code Ownership" },
      { value: "99.99%", label: "System Availability", sub: "Enterprise Cloud Reliability" }
    ],
    capabilities: [
      {
        title: "Bespoke CRM & ERP Systems",
        description: "Tailored customer pipelines, quotation generators, multi-warehouse inventory tracking, and financial reconciliation tools.",
        icon: "i-db"
      },
      {
        title: "Multi-Tenant SaaS Engineering",
        description: "Subscription lifecycle billing, tenant-isolated data architectures, team workspaces, and scalable cloud provisioning.",
        icon: "i-web"
      },
      {
        title: "Legacy System Modernization",
        description: "Safely refactoring old monolithic or spreadsheet-heavy systems into modern, API-first cloud applications with zero data loss.",
        icon: "i-arrow"
      },
      {
        title: "Custom API Gateways & Middleware",
        description: "Connecting disparate third-party tools, legacy accounting software, payment providers, and field devices into one cohesive hub.",
        icon: "i-code"
      },
      {
        title: "Granular Role-Based Access (RBAC)",
        description: "Enterprise security with fine-grained permissions, multi-factor authentication, single sign-on (SSO/SAML), and tamper-evident audit logs.",
        icon: "i-lock"
      },
      {
        title: "Real-Time BI & Executive Reporting",
        description: "Custom visual dashboards, interactive data slicing, automated scheduled PDF exports, and real-time operational KPI trackers.",
        icon: "i-badge"
      }
    ],
    techStack: ["Node.js", "Python FastAPI", "Next.js", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "Stripe"],
    workflow: [
      { step: "01", title: "Operational Deep Dive & Entity Modeling", desc: "We shadow your team, audit legacy spreadsheets, and map relationships." },
      { step: "02", title: "Architecture & Security Planning", desc: "Designing multi-tenant isolation, caching layers, and backup protocols." },
      { step: "03", title: "Iterative Sprints & Staging Demos", desc: "Two-week agile delivery cycles with working feature demos." },
      { step: "04", title: "Data Migration, Training & Go-Live", desc: "Cleansing legacy databases, executing cutover scripts, and staff onboarding." }
    ],
    advantages: [
      { title: "Zero Per-User Licensing Fees", desc: "You own 100% of the intellectual property. Add unlimited employees without paying seat taxes." },
      { title: "Built Around Your Exact Flow", desc: "No forcing your sales reps or warehouse managers to adapt to rigid third-party software." },
      { title: "Unlimited Scalability", desc: "Containerized cloud infrastructure designed to scale horizontally with your growth." },
      { title: "Rock-Solid Data Security", desc: "Role-based controls, encrypted field-level storage, and automated database snapshots." }
    ],
    faqs: [
      { question: "Why should we build a custom CRM/ERP instead of buying Salesforce?", answer: "Off-the-shelf enterprise platforms charge massive monthly per-seat fees that skyrocket as you expand. Custom software gives you 100% IP ownership, zero seat tax, and an interface built around your actual workflows." },
      { question: "Who owns the code and intellectual property?", answer: "You do. Full IP and source code ownership transfer completely to your company upon delivery." },
      { question: "Can the software connect with our third-party accounting tools?", answer: "Yes, we build custom API connectors for QuickBooks, Xero, Stripe, and any other system with REST/webhooks." }
    ]
  },
  {
    id: "cloud-devops-engineering",
    number: "10",
    title: "Cloud & DevOps Engineering",
    slug: "cloud-devops-engineering",
    category: "Enterprise Systems",
    badge: "Cloud Infrastructure",
    icon: "i-cloud",
    shortDescription: "Automated CI/CD pipelines, Kubernetes cluster management, cloud cost optimization, and 99.99% high-availability engineering.",
    description: "Modernize your cloud infrastructure with infrastructure-as-code (Terraform), auto-scaling Kubernetes clusters, automated zero-downtime deployment pipelines, and round-the-clock monitoring.",
    heroSubtitle: "High-availability cloud architectures and automated DevOps engineering for AWS, Azure, and GCP. Eliminate server downtime and streamline deployment speed.",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    href: "/services/cloud-devops-engineering",
    metrics: [
      { value: "99.99%", label: "Cluster Uptime", sub: "Multi-Zone Redundancy" },
      { value: "-45%", label: "Cloud Bill Waste", sub: "Rightsizing & Auto-Scaling" },
      { value: "5 Mins", label: "Deploy Time", sub: "Automated GitHub CI/CD" },
      { value: "24/7", label: "SLA Monitoring", sub: "Proactive Incident Response" }
    ],
    capabilities: [
      { title: "Infrastructure as Code (Terraform / Pulumi)", description: "Reproducible, version-controlled cloud environments created and destroyed in minutes.", icon: "i-code" },
      { title: "Kubernetes & Container Orchestration", description: "Production EKS/GKE cluster setups with automatic pod auto-scaling and traffic balancing.", icon: "i-layers" },
      { title: "Automated CI/CD Pipelines", description: "GitHub Actions and GitLab CI workflows that run tests, build images, and roll out with zero downtime.", icon: "i-refresh" },
      { title: "Cloud Cost Optimization & FinOps", description: "Auditing idle resources, configuring spot instances, and slashing wasted cloud spend by 30-50%.", icon: "i-chart" },
      { title: "24/7 Monitoring & Observability", description: "Datadog, Prometheus, Grafana, and Sentry integrations with automated on-call paging.", icon: "i-headset" },
      { title: "Disaster Recovery & Automated Backups", description: "Cross-region backup replication and automated failover protocols verified through simulated drills.", icon: "i-shield" }
    ],
    techStack: ["AWS", "GCP", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "Prometheus", "Datadog"],
    workflow: [
      { step: "01", title: "Infrastructure Audit", desc: "Analyzing current architecture bottlenecks, security gaps, and cost inefficiencies." },
      { step: "02", title: "Terraform & IaC Architecture", desc: "Writing reproducible cloud blueprints with isolated VPCs and security groups." },
      { step: "03", title: "CI/CD Pipeline Setup", desc: "Configuring automated test runners, container registries, and staging environments." },
      { step: "04", title: "Zero-Downtime Migration", desc: "Executing seamless DNS rollover and enabling 24/7 proactive monitoring." }
    ],
    advantages: [
      { title: "Instant Rollbacks", desc: "Every release is containerized. If an issue occurs, revert to the previous release in seconds." },
      { title: "Auto-Scaling on Demand", desc: "Servers automatically expand during peak traffic surges and shrink during lulls." },
      { title: "Zero Deployment Downtime", desc: "Blue-green and canary releases ensure customers never see a maintenance screen." },
      { title: "Security Baseline Adherence", desc: "CIS benchmarks, encrypted disks, and automated vulnerability scanning." }
    ],
    faqs: [
      { question: "How much can we expect to save on our AWS/GCP bill?", answer: "Clients typically see a 30% to 50% reduction in cloud infrastructure expenses through container rightsizing and reserved instances." },
      { question: "Do you offer emergency incident support?", answer: "Yes, our DevOps SLA packages provide 24/7 on-call coverage with 15-minute response times for critical production alerts." }
    ]
  },

  // 6. Growth & Performance
  {
    id: "meta-google-ads",
    number: "11",
    title: "Meta & Google Ads",
    slug: "meta-google-ads",
    category: "Growth & Performance",
    badge: "Paid Acquisition & ROI",
    icon: "i-arrow",
    shortDescription: "Performance marketing campaigns that drive qualified traffic, leads, and measurable ROI.",
    description: "We orchestrate data-backed performance advertising across Google Ads and Meta platforms (Instagram & Facebook). Combining high-converting custom landing pages, server-side Conversion API (CAPI) tracking, and relentless creative testing to lower your cost-per-acquisition.",
    heroSubtitle: "High-intent paid search, dynamic Meta advertising campaigns, and conversion rate optimization (CRO) backed by first-party attribution and relentless testing.",
    tags: ["Meta Ads", "Google Ads", "Conversion API", "CRO"],
    href: "/services/meta-google-ads",
    metrics: [
      { value: "4.6x", label: "Average ROAS", sub: "Across Active Client Accounts" },
      { value: "-38%", label: "Reduction in CPA", sub: "Through Landing Page CRO" },
      { value: "1.2M+", label: "Qualified Leads", sub: "Generated for B2B & D2C" },
      { value: "$18M+", label: "Managed Ad Spend", sub: "Deployed Profitably Worldwide" }
    ],
    capabilities: [
      {
        title: "High-Intent Google Search & Shopping",
        description: "Capturing active buyers searching for your exact solutions with keyword negative filtering and smart bidding strategies.",
        icon: "i-code"
      },
      {
        title: "Meta Ads (Instagram & Facebook)",
        description: "Creative testing frameworks, lookalike models, and dynamic product catalog ads targeted to high-propensity buyers.",
        icon: "i-web"
      },
      {
        title: "Server-Side Tracking & Meta CAPI",
        description: "Bypassing iOS ad-blockers and cookie restrictions with robust first-party server-side tracking and Google Tag Manager.",
        icon: "i-db"
      },
      {
        title: "High-Converting Landing Pages & CRO",
        description: "Custom, lightning-fast landing pages crafted specifically for your ad messaging to maximize visitor-to-lead conversions.",
        icon: "i-speed"
      },
      {
        title: "Multi-Touch Attribution Modeling",
        description: "True visibility into which campaigns, ad sets, and creatives drive bottom-line revenue versus vanity clicks.",
        icon: "i-badge"
      },
      {
        title: "Retargeting & Lifecycle Sequences",
        description: "Strategic remarketing across search, social, and email channels that re-engage abandoned carts and warm prospects.",
        icon: "i-cart"
      }
    ],
    techStack: ["Google Ads", "Meta Ads Manager", "Google Tag Manager", "GA4", "Meta CAPI", "Hotjar", "Shopify Analytics"],
    workflow: [
      { step: "01", title: "Account & Tracking Infrastructure Audit", desc: "We analyze historical ad spend, diagnose pixel tracking gaps, and set up CAPI." },
      { step: "02", title: "Creative Angles & Landing Page Build", desc: "Formulating value propositions and deploying dedicated mobile landing pages." },
      { step: "03", title: "Structured Campaign Launch & Testing", desc: "Launching structured ad sets with systematic variable testing under tight budget controls." },
      { step: "04", title: "Scaling & Continuous Optimization", desc: "Scaling budgets on winning creatives and reporting on actual net revenue generated." }
    ],
    advantages: [
      { title: "Technical Engineering Meets Marketing", desc: "We pair marketing experts with engineers who fix tracking pixels, speed up landing pages, and optimize APIs." },
      { title: "Accurate First-Party Tracking", desc: "Server-side Conversions API gives you complete data accuracy even in an iOS 14+ ad-blocking environment." },
      { title: "Direct Conversion Optimization", desc: "Every ad directs to tailored, high-converting landing pages built to convert." },
      { title: "Transparent Real-Time Dashboards", desc: "Clear visibility into spent dollars, generated leads, customer acquisition cost, and revenue ROAS." }
    ],
    faqs: [
      { question: "How do you solve tracking issues caused by iOS privacy updates?", answer: "We deploy server-side tracking via Meta Conversions API (CAPI) and Google Tag Manager Server Container, bypassing browser-based ad blockers." },
      { question: "Do you design the ad creatives and write copy?", answer: "Yes, our team handles creative direction, copywriting, static banner design, motion graphics, and landing page engineering." },
      { question: "What minimum ad budget is recommended?", answer: "We recommend a minimum ad spend of $2,500 - $3,000/month to ensure algorithms gather sufficient conversion data during learning." }
    ]
  },
  {
    id: "cro-conversion-optimization",
    number: "12",
    title: "Conversion Rate Optimization (CRO)",
    slug: "cro-conversion-optimization",
    category: "Growth & Performance",
    badge: "Revenue Maximization",
    icon: "i-target",
    shortDescription: "Data-driven A/B testing, user session recording audits, mobile speed optimization, and checkout friction removal.",
    description: "Extract maximum revenue from your existing traffic. We diagnose conversion drop-offs using heatmaps, user session recordings, and run rigorous statistical A/B tests that permanently increase purchase rates.",
    heroSubtitle: "Scientific conversion rate optimization and funnel engineering. Turn existing website visitors into paying customers without increasing ad spend.",
    tags: ["CRO", "A/B Testing", "Heatmaps", "GA4", "Speed"],
    href: "/services/cro-conversion-optimization",
    metrics: [
      { value: "+34%", label: "Average Conversion Lift", sub: "Within 90-Day Cycles" },
      { value: "100+", label: "A/B Tests Run", sub: "Statistical Significance" },
      { value: "<1.5s", label: "Checkout Load Time", sub: "Frictionless UI Flows" },
      { value: "4.8x", label: "Client ROI", sub: "Revenue Generated vs Spend" }
    ],
    capabilities: [
      { title: "User Session Recording & Heatmap Audits", description: "Watching real user sessions on Hotjar/Clarity to identify where shoppers hesitate, rage-click, or abandon.", icon: "i-web" },
      { title: "Statistical A/B & Multivariate Testing", description: "Deploying high-confidence A/B tests to validate headlines, CTA placements, pricing displays, and layouts.", icon: "i-code" },
      { title: "Checkout & Cart Funnel Friction Removal", description: "Streamlining multi-step forms, adding trust seals, and implementing express one-click payment buttons.", icon: "i-cart" },
      { title: "Mobile Ergonomics & Thumb-Zone UX", description: "Redesigning critical interactions to match natural one-handed thumb ergonomics on modern smartphones.", icon: "i-mobile" },
      { title: "Core Web Vitals & Instant Load Optimization", description: "Eliminating layout shifts (CLS), reducing script payloads, and ensuring instant click responsiveness.", icon: "i-speed" },
      { title: "Social Proof & Urgency Architecture", description: "Strategic integration of verified customer reviews, countdown timers, and live purchase alerts.", icon: "i-star" }
    ],
    techStack: ["Hotjar", "Microsoft Clarity", "Google Optimize", "GA4", "Next.js", "Shopify"],
    workflow: [
      { step: "01", title: "Quantitative & Qualitative Audit", desc: "Analyzing Google Analytics drop-off funnels and 500+ real user screen recordings." },
      { step: "02", title: "Hypothesis Matrix & Prioritization", desc: "Scoring test ideas based on projected impact, confidence, and implementation ease (ICE framework)." },
      { step: "03", title: "A/B Test Coding & Deployment", desc: "Developing lightweight client-side experiments that run with zero layout shifts." },
      { step: "04", title: "Statistical Validation & Permanent Rollout", desc: "Hardcoding winning variations directly into production codebases once 95%+ confidence is reached." }
    ],
    advantages: [
      { title: "More Revenue Without More Ad Spend", desc: "Doubling your conversion rate cuts your customer acquisition cost directly in half." },
      { title: "Data-Backed, Not Personal Opinions", desc: "Every design decision is proven by real dollars and statistically significant buyer actions." },
      { title: "Zero Site Slowdown", desc: "Our test scripts are optimized to prevent page flicker and retain 100/100 Core Web Vitals." },
      { title: "Permanent Compounding Gains", desc: "Winning test variations stay in your codebase forever, generating revenue month after month." }
    ],
    faqs: [
      { question: "How much traffic do we need for CRO to work?", answer: "We recommend at least 15,000 to 20,000 monthly unique visitors so tests reach statistical significance within 2 to 4 weeks." },
      { question: "What conversion lift can we realistically expect?", answer: "Clients typically see an initial 15% to 35% improvement in primary goal conversions within the first 60 days of testing." }
    ]
  }
];

export const bentoServices = [
  {
    id: "ai-bento",
    type: "big",
    tag: "01 · Featured",
    title: "AI Agents & Automation",
    description: "Production-ready AI agents and autonomous workflows, from RAG search to end-to-end automation that delivers real outcomes, not demos.",
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

export function getServiceBySlug(slug) {
  return servicesData.find((s) => s.slug === slug);
}
