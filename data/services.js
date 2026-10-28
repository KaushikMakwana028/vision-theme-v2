export const serviceCategories = [
  "All",
  "Web & Mobile",
  "Ecommerce",
  "AI & Data",
  "Enterprise",
  "Marketing & Growth"
];

export const servicesData = [
  // 1. Website development
  {
    id: "website-development",
    number: "01",
    title: "Website development",
    slug: "website-development",
    category: "Web & Mobile",
    badge: "High-Performance Platforms",
    icon: "i-code",
    shortDescription: "Fast, scalable web apps and corporate platforms built with React, Next.js, Laravel, and headless architecture.",
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
        desc: "Post-launch warranty, automated uptime monitoring, security patching, and direct engineer access inside your dedicated Slack channel."
      }
    ],
    faqs: [
      {
        question: "How long does a custom web development engagement take?",
        answer: "Standard corporate websites and portals are typically delivered in 4 to 8 weeks. Complex multi-tenant web applications and SaaS platforms require 10 to 16 weeks depending on custom feature requirements and third-party API dependencies."
      },
      {
        question: "Do you build custom responsive designs or use pre-made templates?",
        answer: "Every platform we deliver is 100% custom-designed in Figma from scratch to align with your brand identity and conversion goals. We never use off-the-shelf templates or generic page builders."
      },
      {
        question: "Which web frameworks and technologies do you specialize in?",
        answer: "Our core engineering stack comprises Next.js 15, React 19, TypeScript, Tailwind CSS, Node.js, Python FastAPI, and Laravel, deployed on high-availability cloud infrastructure like Vercel, AWS, and Cloudflare."
      },
      {
        question: "Will our internal team be able to easily update content without touching code?",
        answer: "Yes. We integrate user-friendly headless CMS solutions like Sanity, Strapi, or headless WordPress, giving non-technical marketing staff complete visual control over pages, blogs, media, and marketing copy."
      },
      {
        question: "How do you guarantee top Core Web Vitals and SEO rankings for our website?",
        answer: "We build with server-side rendering (SSR), incremental static regeneration (ISR), automated critical CSS inlining, edge asset compression, and schema structured data injection to ensure sub-200ms page load times and 95+ Google Lighthouse scores."
      }
    ]
  },

  // 2. Ecommerce Solutions
  {
    id: "ecommerce-solutions",
    number: "02",
    title: "Ecommerce Solutions",
    slug: "ecommerce-solutions",
    category: "Ecommerce",
    badge: "Omnichannel & Storefronts",
    icon: "i-cart",
    shortDescription: "High-converting online stores, Shopify Plus architectures, omnichannel POS integrations, and custom checkout flows.",
    description: "We architect high-volume e-commerce storefronts, custom Shopify Plus platforms, headless commerce solutions, and integrated counter POS billing systems. Engineered for high-speed checkout, flash-sale traffic surges, automated GST invoicing, and real-time multi-location inventory synchronization.",
    heroSubtitle: "High-converting storefronts, bespoke Shopify Plus apps, and headless architectures engineered for high-volume transactions and seamless global commerce.",
    tags: ["Shopify Plus", "WooCommerce", "Headless", "Custom POS"],
    href: "/services/ecommerce-solutions",
    metrics: [
      { value: "48%", label: "Conversion Lift", sub: "Optimized Checkout Funnels" },
      { value: "99.99%", label: "Flash Sale Uptime", sub: "Load-Tested Infrastructure" },
      { value: "<60s", label: "Mobile Checkout", sub: "Passwordless OTP & 1-Click Pay" },
      { value: "100%", label: "Inventory Sync", sub: "Online & Physical POS Counters" }
    ],
    capabilities: [
      {
        title: "Shopify & Shopify Plus Development",
        description: "Enterprise Shopify Plus themes, bespoke Liquid templates, and custom Shopify Functions for dynamic tiered discounting and checkout extensions.",
        icon: "i-cart"
      },
      {
        title: "Headless Commerce Architecture",
        description: "Decoupled Next.js frontends connecting to Shopify, Medusa, or custom backends via GraphQL for sub-second page transitions and unlimited UX flexibility.",
        icon: "i-code"
      },
      {
        title: "Custom Shopify App Development",
        description: "Private and public Shopify apps built with Node.js and Remix to automate custom business logic, warehouse packing slips, and specialized loyalty rules.",
        icon: "i-badge"
      },
      {
        title: "Store Migration & Data Integrity",
        description: "Zero-data-loss migrations from Magento, WooCommerce, or proprietary legacy carts into modern platforms with complete customer, order, and SEO redirect history.",
        icon: "i-db"
      },
      {
        title: "ERP & Multi-Channel Integrations",
        description: "Seamless bidirectional syncing between your storefront and ERPs, SAP, NetSuite, Zoho, Shiprocket, and local accounting software.",
        icon: "i-web"
      },
      {
        title: "Checkout & Conversion Rate Optimization",
        description: "Reducing cart abandonment with frictionless one-page checkouts, localized payment gateways (Razorpay, Stripe, Cashfree), and express UPI buttons.",
        icon: "i-speed"
      }
    ],
    techStack: ["Shopify Plus", "Liquid", "Next.js", "React", "GraphQL", "Node.js", "WooCommerce", "Tailwind CSS", "Razorpay API"],
    workflow: [
      { step: "01", title: "Commerce Audit & Journey Mapping", desc: "Analyzing cart drop-offs, inventory bottlenecks, SKU catalog complexity, and checkout friction points." },
      { step: "02", title: "High-Conversion UX & Store Design", desc: "Designing responsive, mobile-first product detail pages, filter drawers, and micro-animations in Figma." },
      { step: "03", title: "Theme Coding & Custom App Setup", desc: "Clean development utilizing modern CLI tools, modular components, and automated Git staging deployments." },
      { step: "04", title: "Load Testing & Launch Switchover", desc: "Simulating high-concurrency checkout spikes, verifying payment webhooks, and executing zero-downtime DNS cutover." }
    ],
    advantages: [
      { title: "Engineered for Conversion", desc: "Every layout, product card, and checkout step is crafted to minimize purchase friction and maximize average order value (AOV)." },
      { title: "Flash-Sale Stability", desc: "Our architectures handle sudden spikes of tens of thousands of concurrent shoppers during product launches and festival promotions without breaking." },
      { title: "Seamless ERP & 3PL Syncing", desc: "Automate inventory deductions, fulfillment tracking numbers, and GST tax invoicing across warehouses in real time." },
      { title: "Multi-Currency & International", desc: "Multi-currency price rounding, geo-IP redirection, and localized payment method presentation for international growth." }
    ],
    faqs: [
      { question: "Can you migrate our existing store to Shopify Plus or headless commerce without losing SEO rankings or order history?", answer: "Yes. Our engineers execute strict 1:1 301 URL redirect mappings, meta tag preservation, and automated ETL data pipelines to migrate historical customer records, orders, product variants, and reviews with zero data loss or ranking drop." },
      { question: "Do you integrate domestic and global payment gateways like Razorpay, Stripe, and UPI?", answer: "Yes, we integrate all primary international and Indian payment processors, including Razorpay, Cashfree, Stripe, PayU, and custom dynamic UPI QR payment verification with automated webhooks." },
      { question: "Can you build a unified system for both our online website and offline retail stores?", answer: "Yes, we regularly architect omnichannel commerce systems where walk-in POS counters and web stores share real-time centralized inventory, customer loyalty profiles, and consolidated financial sales analytics." },
      { question: "How do you optimize checkout speed and reduce cart abandonment during high-traffic flash sales?", answer: "We deploy headless Next.js edge storefronts, headless checkout extensions, one-click OTP login, address autofill, and scalable Redis inventory queues that withstand 10x sudden flash-sale traffic spikes." },
      { question: "Do you build custom Shopify apps and private merchant admin extensions?", answer: "Yes. We build custom private and public Shopify Apps using Remix, Node.js, and Shopify Functions for custom bundling, complex volume discounts, B2B wholesale pricing tiers, and custom ERP connectors." }
    ]
  },

  // 3. Mobile application development
  {
    id: "mobile-app-development",
    number: "03",
    title: "Mobile application development",
    slug: "mobile-app-development",
    category: "Web & Mobile",
    badge: "iOS & Android Apps",
    icon: "i-mobile",
    shortDescription: "Cross-platform iOS and Android apps with React Native, Flutter, and native-quality 60fps ergonomics.",
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
      { question: "Should we build our mobile app with React Native / Flutter or pure Native (Swift & Kotlin)?", answer: "For 95% of businesses, React Native or Flutter is the most strategic choice, delivering identical 60fps native performance and shared business logic while slashing development timelines and maintenance costs in half." },
      { question: "Do you manage the entire submission, review, and approval process for Google Play and the Apple App Store?", answer: "Yes. We handle the entire release lifecycle including developer account provisioning, app signing keys, privacy manifests, screenshot assets, and store compliance review coordination until approved." },
      { question: "Can the mobile application function offline and automatically synchronize data when connection returns?", answer: "Yes. We engineer offline-first architectures using local SQLite/WatermelonDB storage with conflict-free background synchronization as soon as internet connectivity is re-established." },
      { question: "How do you handle push notifications, location telemetry, and biometric authentication?", answer: "We implement native hardware integrations including Apple FaceID / TouchID, Android Biometrics, Google Maps reverse geocoding, foreground/background GPS tracking, and Firebase Cloud Messaging for segmented push alerts." },
      { question: "How do you manage mobile app updates, OS upgrades, and third-party SDK maintenance after launch?", answer: "We configure Over-The-Air (OTA) update pipelines via Expo / EAS for instant deployment of critical fixes without waiting for app store review delays, and provide scheduled maintenance retainers for new iOS and Android OS major versions." }
    ]
  },

  // 4. AI & Automation Agents
  {
    id: "ai-automation",
    number: "04",
    title: "AI & Automation Agents",
    slug: "ai-automation",
    category: "AI & Data",
    badge: "Agentic Systems & Automation",
    icon: "i-ai",
    shortDescription: "Autonomous AI agents, intelligent multi-agent pipelines, and workflow automation that give your team hundreds of hours back.",
    description: "We build production-grade Agentic AI systems, custom workflow automation agents, and multi-agent pipelines. Our agents reason, call external APIs, self-correct, and automate complex operational workflows with enterprise security and verifiable accuracy.",
    heroSubtitle: "Production-ready Agentic AI systems, autonomous multi-agent pipelines, and intelligent workflow automation engineered to turn operational bottlenecks into high-ROI business advantages.",
    tags: ["Autonomous Agents", "LangGraph", "Workflow Automation", "Python", "LLMs"],
    href: "/services/ai-automation",
    metrics: [
      { value: "70%", label: "Manual Effort Eliminated", sub: "In Core Operational Workflows" },
      { value: "<1.8%", label: "Hallucination Rate", sub: "Grounded System Guardrails" },
      { value: "2-5 Days", label: "POC Turnaround", sub: "From Idea to Working Agent" },
      { value: "10M+", label: "Tasks Automated", sub: "Zero Downtime Execution" }
    ],
    capabilities: [
      {
        title: "Custom AI Agent Development",
        description: "Autonomous agents that evaluate goals, plan multi-step execution paths, execute tools, verify outputs, and handle edge cases without continuous human intervention.",
        icon: "i-ai"
      },
      {
        title: "Multi-Agent Orchestration",
        description: "Specialized agent squads (researcher, coder, reviewer, executor) built with LangGraph and CrewAI that collaborate seamlessly to solve complex operational challenges.",
        icon: "i-users"
      },
      {
        title: "Intelligent Workflow Automation",
        description: "Automating document ingestion, customer ticket triage, quote generation, and cross-application database reconciliation with automated fallback triggers.",
        icon: "i-speed"
      },
      {
        title: "Sales, Support & Triage Agents",
        description: "Customer-facing agents that qualify inbound sales leads, book calendar meetings, resolve 60%+ of tier-1 support inquiries, and escalate complex issues.",
        icon: "i-chat"
      },
      {
        title: "Deterministic Guardrails & Governance",
        description: "Strict safety boundaries, prompt injection protection, output schema validation via Pydantic, and comprehensive audit telemetry logging.",
        icon: "i-shield"
      },
      {
        title: "Model Fine-Tuning & Custom LoRA",
        description: "Fine-tuning open-weights models (Llama 3, Mistral) on your proprietary domain datasets for higher accuracy, lower inference costs, and air-gapped hosting.",
        icon: "i-code"
      }
    ],
    techStack: ["Python", "LangGraph", "LangChain", "OpenAI", "Anthropic Claude", "Ollama", "FastAPI", "PostgreSQL", "Docker"],
    workflow: [
      { step: "01", title: "Use-Case Audit & Data Readiness", desc: "We evaluate your manual workflows, determine AI feasibility, and identify high-impact processes that yield immediate ROI." },
      { step: "02", title: "Rapid Working Prototype (2-5 Days)", desc: "We build and demo a working proof-of-concept connected to a test slice of your actual data." },
      { step: "03", title: "Production Pipeline & Guardrails", desc: "Implementing deterministic JSON validation, fallback handlers, token cost controls, and role-based access." },
      { step: "04", title: "Deployment, Observability & SLAs", desc: "Full production rollout with LangSmith / Phoenix tracing, automated drift alerts, and continuous latency tuning." }
    ],
    advantages: [
      { title: "Outcome-Accountable AI", desc: "We don't build generic chatbot toys. We engineer deterministic agent systems tied directly to saved labor hours and reduced operational error." },
      { title: "Enterprise Data Privacy", desc: "Your data is never used to train public models. We deploy within your private AWS/GCP cloud or on-premise air-gapped servers." },
      { title: "Model-Agnostic Flexibility", desc: "Seamlessly switch between Claude 3.5, GPT-4o, or self-hosted Llama 3 as model performance and pricing evolve." },
      { title: "Human-In-The-Loop Safety", desc: "Configure threshold-based approval gates for high-stakes actions like issuing refunds, sending contracts, or modifying production databases." }
    ],
    faqs: [
      { question: "How are autonomous AI agents different from standard chatbots?", answer: "Traditional chatbots simply predict the next word in a chat conversation. Autonomous AI agents can reason, plan multi-step actions, query databases, call external APIs, evaluate results, and self-correct until a task is completely solved." },
      { question: "Is our proprietary company data secure when using your AI agents?", answer: "Yes, we implement enterprise-grade security protocols: zero-data-retention API contracts, tenant-isolated vector databases, Row-Level Security, and optional private air-gapped deployments on your AWS or Azure VPC." },
      { question: "Can your AI agents query our internal databases, ERPs, and trigger actions in external APIs?", answer: "Yes. Our agents use structured tool calling, LangGraph workflows, and deterministic JSON schemas to execute CRUD operations in your SQL databases, ERPs, CRMs, and customer messaging desks safely." },
      { question: "How do you prevent AI hallucinations and guarantee reliable, deterministic outputs?", answer: "We enforce schema-constrained JSON outputs, strict system validation layers, automated unit-eval test suites, and human-in-the-loop fallback gates for high-stakes business operations." },
      { question: "How quickly can we test a working Proof-of-Concept (POC) of an AI agent for our business?", answer: "We deliver functional 2-to-5 day proof-of-concepts (POCs) that let your team interact with a working agent on sample company data before committing to full-scale rollout." }
    ]
  },

  // 5. Enterprise RAG & Search Engines
  {
    id: "rag-knowledge-bases",
    number: "05",
    title: "Enterprise RAG & Search Engines",
    slug: "rag-knowledge-bases",
    category: "AI & Data",
    badge: "Knowledge Retrieval",
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
      { value: "0%", label: "Public Training Leakage", sub: "Private Vault Isolation" }
    ],
    capabilities: [
      { title: "Multi-Modal Document Parsing", description: "Extracting tables, diagrams, headers, and unstructured text from PDFs, DOCX, scans, and spreadsheets.", icon: "i-badge" },
      { title: "Hybrid Semantic & BM25 Search", description: "Combining dense vector embeddings with sparse keyword matching to find exact part numbers and conceptual meanings.", icon: "i-speed" },
      { title: "Contextual Reranking (Cohere / Cross-Encoder)", description: "Re-ranking retrieved chunks with cross-encoder models so the LLM receives only the most accurate context window.", icon: "i-layers" },
      { title: "Direct Source Citations & Highlight Previews", description: "Every answer links directly to the source page, paragraph, and line number in the original document.", icon: "i-check" },
      { title: "Access Control & Permission Filtering", description: "Enforcing role-based access controls (RBAC) so users only retrieve information their clearance level permits.", icon: "i-lock" },
      { title: "Automated Vector Sync Pipelines", description: "Real-time connectors to Google Drive, SharePoint, Notion, Jira, and SQL databases that update vector indexes on change.", icon: "i-cloud" }
    ],
    techStack: ["Python", "Qdrant", "Pinecone", "pgvector", "LangChain", "Cohere", "FastAPI"],
    workflow: [
      { step: "01", title: "Document & Chunking Audit", desc: "Analyzing file formats, table complexities, and designing domain-tailored semantic chunking strategies." },
      { step: "02", title: "Embedding Pipeline & Indexing", desc: "Extracting embeddings with state-of-the-art models and populating high-dimensional vector databases." },
      { step: "03", title: "Precision Benchmarking", desc: "Evaluating retrieval recall, Mean Reciprocal Rank (MRR), and eliminating hallucinations with synthetic test sets." },
      { step: "04", title: "Production Deployment", desc: "Deploying high-speed RESTful search APIs and interactive user chat interfaces with telemetry tracing." }
    ],
    advantages: [
      { title: "Truth-Grounded Responses", desc: "If the requested fact is not in your documents, the system safely admits it rather than hallucinating false information." },
      { title: "Auditable Footprint", desc: "Crucial for compliance, legal, medical, and financial use cases where answers must be verified against original source text." },
      { title: "High-Speed Hybrid Search", desc: "Instantly locate specific alphanumeric SKUs, customer IDs, and legal clauses in under 250 milliseconds." },
      { title: "Isolated Private Cloud", desc: "Your vector database and embedding pipelines operate within your own private virtual cloud." }
    ],
    faqs: [
      { question: "How do you eliminate AI hallucinations in enterprise search?", answer: "We enforce strict RAG architecture: context bounding, cross-encoder reranking, temperature minimization, and mandatory source citations matching real document chunks." },
      { question: "Can the search system index tables and complex diagrams inside PDFs?", answer: "Yes, our document ingestion pipeline uses multi-modal vision parsers to accurately extract table grids, financial balances, and flowcharts into clean Markdown tables." },
      { question: "How does the search engine enforce user role permissions across sensitive company documents?", answer: "We build metadata-filtered vector search with tenant and role-based access control (RBAC), guaranteeing employees only retrieve answers from documents their clearance permits." },
      { question: "Can we deploy the RAG search engine on our private cloud or on-premise servers?", answer: "Yes. We support local and private cloud deployments using self-hosted vector databases (Qdrant, pgvector) and open-weights embedding models (BGE, Cohere, or Llama 3) with zero external API calls." },
      { question: "How fast are hybrid keyword-vector search responses across millions of enterprise documents?", answer: "By combining dense vector embeddings with sparse BM25 indexing in hybrid search pipelines, we achieve sub-250ms query latency across hundreds of thousands of complex documents." }
    ]
  },

  // 6. Custom Software & CRM
  {
    id: "custom-software-crm",
    number: "06",
    title: "Custom Software & CRM",
    slug: "custom-software-crm",
    category: "Enterprise",
    badge: "Enterprise Architecture",
    icon: "i-users",
    shortDescription: "Tailor-made CRMs, ERPs, and internal tools that fit the way your business really works.",
    description: "We engineer purpose-built enterprise software, bespoke CRM/ERP systems, and scalable multi-tenant SaaS platforms. Tailored around your exact operational workflows, eliminating costly per-seat license fees and bridging fragmented internal tools.",
    heroSubtitle: "Engineered-to-fit enterprise platforms, custom sales CRMs, and internal workflow engines. Say goodbye to restrictive off-the-shelf software and costly per-seat SaaS tax.",
    tags: ["CRM", "ERP", "PostgreSQL", "Automation"],
    href: "/services/custom-software-crm",
    metrics: [
      { value: "100%", label: "Workflow Alignment", sub: "Tailored to Your Operations" },
      { value: "4.8x", label: "Faster Operations", sub: "Automated Repetitive Steps" },
      { value: "$0", label: "Per-Seat License Tax", sub: "Full IP & Code Ownership" },
      { value: "99.99%", label: "System Availability", sub: "Enterprise SLA Guarantees" }
    ],
    capabilities: [
      {
        title: "Bespoke CRM & ERP Systems",
        description: "Custom pipelines matching your unique lead qualification, quote calculation, manufacturing dispatch, and client onboarding stages.",
        icon: "i-users"
      },
      {
        title: "Multi-Tenant SaaS Engineering",
        description: "Enterprise SaaS architectures with tenant data isolation, subscription billing (Stripe Billing / Razorpay Subscriptions), and team management.",
        icon: "i-cloud"
      },
      {
        title: "Legacy System Modernization",
        description: "Refactoring obsolete desktop apps, Visual Basic scripts, and fragile Excel macros into cloud-native web portals without disrupting ongoing business.",
        icon: "i-code"
      },
      {
        title: "Custom API Gateways & Middleware",
        description: "Connecting incompatible internal software, third-party logistics, accounting software, and external supplier feeds under unified API endpoints.",
        icon: "i-web"
      },
      {
        title: "Granular Role-Based Access (RBAC)",
        description: "Fine-grained permission matrices ensuring employees, managers, and external contractors only see the data they need to perform their duties.",
        icon: "i-lock"
      },
      {
        title: "Real-Time BI & Executive Reporting",
        description: "Interactive analytics dashboards with automated scheduled PDF/Excel reports, margin tracking, and KPI heatmaps.",
        icon: "i-speed"
      }
    ],
    techStack: ["React", "Next.js", "Node.js", "Laravel", "Python", "PostgreSQL", "Redis", "Docker", "AWS"],
    workflow: [
      { step: "01", title: "Operational Deep Dive & Entity Modeling", desc: "Mapping your database entities, staff user roles, edge cases, and spreadsheet bottlenecks into a unified architecture diagram." },
      { step: "02", title: "Architecture & Security Planning", desc: "Database schema normalization, API contract drafting, and security boundary isolation before coding." },
      { step: "03", title: "Iterative Sprints & Staging Demos", desc: "Bi-weekly sprint demonstrations where your team tests features in a live staging environment." },
      { step: "04", title: "Data Migration, Training & Go-Live", desc: "Automated migration of legacy data, staff video walkthroughs, and seamless production cutover." }
    ],
    advantages: [
      { title: "Zero Per-User Licensing Fees", desc: "Stop paying $50 to $200 per user every month to Salesforce or HubSpot as your team grows. You own the software forever." },
      { title: "Built Around Your Exact Flow", desc: "No unnecessary bloated menus, confusing fields, or having to adapt your business to rigid off-the-shelf software." },
      { title: "Unlimited Scalability", desc: "Add unlimited team members, custom fields, automated integrations, and custom reports whenever your business demands it." },
      { title: "Rock-Solid Data Security", desc: "Complete data residency control. Host on your own servers or dedicated cloud VPC with encrypted backups and audit logs." }
    ],
    faqs: [
      { question: "Why build a custom CRM instead of subscribing to Salesforce or HubSpot?", answer: "While off-the-shelf CRMs are easy to start with, enterprise subscription costs rapidly balloon into tens of thousands of dollars annually, while still requiring expensive customization. Custom software is 100% owned by you, matches your exact workflows, and incurs zero per-seat licensing penalties." },
      { question: "Can you migrate all our existing customer records from spreadsheets and legacy tools?", answer: "Yes, our engineering team builds automated data sanitation and migration scripts to cleanse, de-duplicate, and import your historical customer data, interaction notes, and invoices." },
      { question: "Do you integrate WhatsApp Cloud API for automated notifications, reminders, and PDF bills?", answer: "Yes. We integrate official Meta WhatsApp Cloud APIs to dispatch automated vector PDF invoices, payment links, technician alerts, and scheduled reminder pings directly to customer phone numbers." },
      { question: "Who owns the intellectual property and code repository?", answer: "You own 100% of the intellectual property, source code, database schemas, and documentation upon project milestone signoff with zero vendor lock-in." },
      { question: "Can the custom CRM scale to support multiple branch locations, field agents, and strict role permissions?", answer: "Yes. We engineer multi-tenant, multi-branch architectures with granular role-based access control (RBAC), allowing management, accountants, branch managers, and field staff to access only their assigned scopes." }
    ]
  },

  // 7. Meta & Google Ads
  {
    id: "meta-google-ads",
    number: "07",
    title: "Meta & Google Ads",
    slug: "meta-google-ads",
    category: "Marketing & Growth",
    badge: "Paid Acquisition & ROI",
    icon: "i-star",
    shortDescription: "Performance marketing campaigns that drive qualified traffic, leads, and measurable ROI across Google & Meta.",
    description: "We orchestrate data-backed performance advertising across Google Ads and Meta platforms (Instagram & Facebook). Combining high-converting custom landing pages, server-side Conversion API (CAPI) tracking, and relentless creative testing to lower your cost-per-acquisition.",
    heroSubtitle: "High-intent paid search, dynamic Meta advertising campaigns, and conversion rate optimization (CRO) backed by first-party attribution and relentless testing.",
    tags: ["Meta Ads", "Google Ads", "Conversion API", "CRO", "Attribution"],
    href: "/services/meta-google-ads",
    metrics: [
      { value: "4.6x", label: "Average ROAS", sub: "Across Active Client Accounts" },
      { value: "-38%", label: "Reduction in CPA", sub: "Through Landing Page CRO" },
      { value: "1.2M+", label: "Qualified Leads", sub: "Generated for B2B & D2C" },
      { value: "100%", label: "Server-Side Tracking", sub: "CAPI & First-Party Events" }
    ],
    capabilities: [
      {
        title: "High-Intent Google Search & Shopping",
        description: "Capturing in-market buyers searching for your exact solutions with disciplined negative keyword filtering, single-theme ad groups, and automated bid strategies.",
        icon: "i-speed"
      },
      {
        title: "Meta Ads (Instagram & Facebook)",
        description: "Full-funnel campaign architecture: prospecting cold audiences with hooks, retargeting engaged viewers, and dynamic catalog ads for cart abandoners.",
        icon: "i-cart"
      },
      {
        title: "Server-Side Tracking & Meta CAPI",
        description: "Bypassing iOS ad blockers with server-to-server Conversion API (CAPI) and Google Tag Manager Server-Side containers for 100% event attribution.",
        icon: "i-code"
      },
      {
        title: "High-Converting Landing Pages & CRO",
        description: "Custom, ultra-fast landing pages engineered specifically for each ad angle to ensure consistent messaging and maximum conversion lift.",
        icon: "i-web"
      },
      {
        title: "Multi-Touch Attribution Modeling",
        description: "Understanding the true customer journey across first-click, linear, and data-driven attribution models to eliminate ad budget waste.",
        icon: "i-db"
      },
      {
        title: "Retargeting & Lifecycle Sequences",
        description: "Automated omni-channel remarketing combining paid ads, SMS, and email automation to maximize customer lifetime value (LTV).",
        icon: "i-users"
      }
    ],
    techStack: ["Google Ads", "Meta Ads Manager", "Google Tag Manager", "Meta CAPI", "GA4", "Looker Studio"],
    workflow: [
      { step: "01", title: "Account & Tracking Infrastructure Audit", desc: "Auditing pixel health, conversion events, historical ad spend waste, and tracking gaps." },
      { step: "02", title: "Creative Angles & Landing Page Build", desc: "Developing compelling ad copy, visual assets, and high-speed dedicated landing pages." },
      { step: "03", title: "Structured Campaign Launch & Testing", desc: "Deploying campaigns with disciplined budget allocation, audience segmentation, and A/B creative testing." },
      { step: "04", title: "Scaling & Continuous Optimization", desc: "Scaling profitable ad sets while cutting underperforming targets, refining negative keywords, and maximizing ROAS." }
    ],
    advantages: [
      { title: "Technical Engineering Meets Marketing", desc: "Unlike generic agencies, our software engineers build server-side tracking pipelines that capture 25%+ more conversion data than browser pixels." },
      { title: "Accurate First-Party Tracking", desc: "Protect your ad performance from browser privacy crackdowns with server-to-server cloud tracking." },
      { title: "Direct Conversion Optimization", desc: "We optimize the entire funnel — from ad impression to landing page speed and checkout form completion." },
      { title: "Transparent Real-Time Dashboards", desc: "Direct access to real-time Looker Studio reporting dashboards showing exact spend, CAC, ROAS, and profit." }
    ],
    faqs: [
      { question: "What minimum ad budget do you recommend for Meta and Google campaigns?", answer: "We recommend a minimum monthly media spend of $1,500 to $3,000 to ensure sufficient conversion data for algorithmic bid optimization and rapid creative testing." },
      { question: "Why is server-side Meta CAPI tracking essential?", answer: "Browser ad blockers and Apple iOS privacy policies block up to 35% of standard browser pixel signals. Server-Side CAPI sends conversion events directly from your server to Meta, restoring attribution accuracy and lowering acquisition costs." },
      { question: "How do you test and iterate creative ad variations to lower customer acquisition cost (CAC)?", answer: "We employ systematic dynamic creative testing across hooks, value propositions, thumbnail variations, and custom landing page funnels to rapidly discover and scale the lowest CAC variants." },
      { question: "Do you provide real-time ROAS dashboards and transparent conversion attribution modeling?", answer: "Yes. You receive live Looker Studio dashboards consolidating Google Ads, Meta Ads, and blended Shopify/Stripe revenue for true first-party ROAS visibility without vanity metrics." },
      { question: "How do you structure retargeting funnels to convert high-intent website visitors into paying buyers?", answer: "We build multi-tiered remarketing funnels segmented by cart abandonment, product engagement recency, and customer lifecycle status, paired with custom landing page offers." }
    ]
  },

  // 8. SEO and site optimizations
  {
    id: "seo-site-optimizations",
    number: "08",
    title: "SEO and site optimizations",
    slug: "seo-site-optimizations",
    category: "Marketing & Growth",
    badge: "Search & Performance",
    icon: "i-speed",
    shortDescription: "Technical SEO, Core Web Vitals acceleration, site speed audits, schema markup, and organic search domination.",
    description: "We optimize digital platforms for maximum organic visibility, Google search dominance, and sub-second page performance. Our engineers combine technical on-page SEO, rich schema markup, Core Web Vitals acceleration, and strategic content hierarchies that drive sustainable organic traffic.",
    heroSubtitle: "Engineered search engine optimization and website performance acceleration. Dominate organic Google rankings with technical precision, rich structured data, and sub-second page speed.",
    tags: ["Technical SEO", "Core Web Vitals", "Schema Markup", "Site Speed", "Organic Growth"],
    href: "/services/seo-site-optimizations",
    metrics: [
      { value: "99+", label: "Lighthouse Performance", sub: "Desktop & Mobile Audits" },
      { value: "+180%", label: "Organic Search Growth", sub: "Average 6-Month Lift" },
      { value: "<200ms", label: "Server Response (TTFB)", sub: "Edge Caching & SSR" },
      { value: "0", label: "Core Web Vitals Errors", sub: "LCP, FID & CLS Compliant" }
    ],
    capabilities: [
      {
        title: "Technical SEO Architecture & Audits",
        description: "Diagnosing and fixing crawl errors, indexation issues, canonical conflicts, XML sitemaps, and robots.txt directives for effortless search engine discovery.",
        icon: "i-web"
      },
      {
        title: "Core Web Vitals & Speed Optimization",
        description: "Eliminating Cumulative Layout Shifts (CLS), optimizing Largest Contentful Paint (LCP), and minimizing JavaScript execution times for lightning-fast loads.",
        icon: "i-speed"
      },
      {
        title: "Schema.org & Rich Snippets Integration",
        description: "Structured data implementation for Organizations, Products, FAQs, Local Businesses, and Breadcrumbs to earn high-converting rich snippets on Google SERPs.",
        icon: "i-badge"
      },
      {
        title: "On-Page Semantic Content Optimization",
        description: "Structuring H1-H6 heading hierarchies, internal linking networks, keyword intent mapping, and metadata that outrank legacy competitors.",
        icon: "i-code"
      },
      {
        title: "Mobile Ergonomics & Responsive UX",
        description: "Ensuring 100% mobile-first usability with thumb-friendly touch targets, responsive font scales, and clean mobile viewport styling.",
        icon: "i-mobile"
      },
      {
        title: "Local SEO & Multi-Location Optimization",
        description: "Optimizing Google Business Profiles, localized schema markup, citation building, and regional keyword clustering for geographic dominance.",
        icon: "i-pin"
      }
    ],
    techStack: ["Google Search Console", "Ahrefs", "Semrush", "Screaming Frog", "Next.js SEO", "Schema.org", "Lighthouse"],
    workflow: [
      { step: "01", title: "Comprehensive Technical SEO Audit", desc: "Deep crawl of your entire domain to uncover indexing barriers, broken links, slow assets, and duplicate content." },
      { step: "02", title: "Speed & Core Web Vitals Engineering", desc: "Compressing assets, inlining critical CSS, configuring CDN edge caching, and eliminating render-blocking scripts." },
      { step: "03", title: "Structured Data & Semantic Markup", desc: "Injecting valid JSON-LD schemas, breadcrumb trails, and open-graph metadata across all key templates." },
      { step: "04", title: "Monitoring & Continuous Ranking Gains", desc: "Tracking Google Search Console rankings, click-through rates, and algorithmic performance with monthly reporting." }
    ],
    advantages: [
      { title: "Sustainable, Compounding Traffic", desc: "Unlike paid ads that stop when budget runs out, technical SEO rankings compound over time, delivering free high-intent buyers month after month." },
      { title: "Developer-Led Implementation", desc: "We don't just hand you a PDF of suggestions. Our senior full-stack developers directly write the code, fix the assets, and deploy the fixes." },
      { title: "Sub-Second User Experience", desc: "Faster load times improve both Google search rankings and on-site buyer conversion rates simultaneously." },
      { title: "Zero Algorithmic Penalties", desc: "Strict white-hat technical compliance adhering to Google Search Essentials and Webmaster Guidelines." }
    ],
    faqs: [
      { question: "How long does it take to see organic ranking improvements from SEO?", answer: "Technical fixes, Core Web Vitals speed improvements, and schema markup often yield indexing gains in 2 to 4 weeks. Meaningful keyword ranking climbs and organic traffic surges typically compound over 3 to 6 months." },
      { question: "Do you implement the technical SEO fixes directly in our codebase?", answer: "Yes, our engineers implement the code changes directly in your repository (Next.js, WordPress, Shopify, Laravel) so you don't need a separate developer to act on recommendations." },
      { question: "What is Core Web Vitals and why does it affect rankings?", answer: "Core Web Vitals is Google's official user experience metric measuring Largest Contentful Paint (speed), Interaction to Next Paint (responsiveness), and Cumulative Layout Shift (visual stability). Passing all three is a confirmed Google ranking factor." },
      { question: "What technical optimizations do you perform to ensure search engines properly crawl and index dynamic routes?", answer: "We implement dynamic XML sitemaps, server-side rendering for headless apps, canonical tag governance, robots.txt directives, and clean JSON-LD structured data for rich search results." },
      { question: "Do you provide monthly organic traffic audits, keyword rank tracking, and competitor gap reports?", answer: "Yes. Every client receives dedicated monthly reporting via Google Search Console and Semrush/Ahrefs tracking keyword positions, click share, impression growth, and newly discovered keyword opportunities." }
    ]
  },

  // 9. Cloud & DevOps Engineering
  {
    id: "cloud-devops-engineering",
    number: "09",
    title: "Cloud & DevOps Engineering",
    slug: "cloud-devops-engineering",
    category: "Enterprise",
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
      { value: "<30s", label: "Rollback Speed", sub: "Instant Disaster Recovery" }
    ],
    capabilities: [
      { title: "Infrastructure as Code (Terraform / Pulumi)", description: "Version-controlled, repeatable cloud provisioning across AWS, GCP, and Azure that prevents configuration drift.", icon: "i-code" },
      { title: "Kubernetes & Container Orchestration", description: "Designing, hardening, and operating production EKS/GKE clusters with automated horizontal pod autoscaling.", icon: "i-db" },
      { title: "Automated CI/CD Pipelines", description: "GitHub Actions and GitLab CI workflows that automate unit tests, Docker container builds, and zero-downtime deployments.", icon: "i-arrow" },
      { title: "Cloud Cost Optimization & FinOps", description: "Eliminating idle resources, implementing Spot instances, rightsizing databases, and saving 30% to 50% on monthly AWS/GCP bills.", icon: "i-speed" },
      { title: "24/7 Monitoring & Observability", description: "Configuring Prometheus, Grafana, Datadog, and CloudWatch alerts to catch anomalies before your users ever notice.", icon: "i-badge" },
      { title: "Disaster Recovery & Automated Backups", description: "Automated point-in-time database snapshots, cross-region replication, and battle-tested disaster recovery runbooks.", icon: "i-shield" }
    ],
    techStack: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus", "Nginx"],
    workflow: [
      { step: "01", title: "Infrastructure Audit", desc: "Reviewing existing security groups, single points of failure, manual deployment bottlenecks, and cloud costs." },
      { step: "02", title: "Terraform & IaC Architecture", desc: "Codifying your infrastructure into clean, reusable Terraform modules with segregated staging and production environments." },
      { step: "03", title: "CI/CD Pipeline Setup", desc: "Configuring automated test runners, Docker image registries, and canary deployment rollouts." },
      { step: "04", title: "Zero-Downtime Migration", desc: "Executing live database replication, DNS cutover, and post-migration performance benchmarking." }
    ],
    advantages: [
      { title: "Instant Rollbacks", desc: "If a bad commit ever reaches production, our pipelines rollback to the last healthy release in under 30 seconds." },
      { title: "Auto-Scaling on Demand", desc: "Handle viral traffic surges effortlessly as servers spin up in seconds and scale down when traffic subsides." },
      { title: "Zero Deployment Downtime", desc: "Blue-green and rolling deployment strategies ensure your customers never experience maintenance downtime screens." },
      { title: "Security Baseline Adherence", desc: "Enforcing SOC-2 compliance baselines, least-privilege IAM policies, and encrypted storage volumes." }
    ],
    faqs: [
      { question: "Can you help us cut down our high monthly AWS or Google Cloud bill?", answer: "Yes, our FinOps audits typically uncover 30% to 50% in immediate savings through rightsizing over-provisioned instances, deleting orphan snapshots, and implementing reserved/savings plans." },
      { question: "How do you guarantee zero downtime during cloud migrations?", answer: "We implement continuous database replication and parallel traffic routing (canary cutover), allowing verification of the new environment before switching primary DNS." },
      { question: "Do you implement automated CI/CD deployment pipelines with zero-downtime rollbacks?", answer: "Yes. We configure GitHub Actions and GitLab CI pipelines that automate linting, unit testing, Docker image building, and blue-green or canary deployments that rollback in under 30 seconds if health checks fail." },
      { question: "How do you ensure enterprise compliance, DDoS mitigation, and SSL/firewall security?", answer: "We enforce AWS WAF / Cloudflare DDoS protection, automatic SSL certificate rotation, strict IAM least-privilege policies, encrypted storage volumes, and SOC-2/OWASP security baseline compliance." },
      { question: "Do you provide 24/7 infrastructure monitoring, auto-scaling, and disaster recovery planning?", answer: "Yes. We configure Prometheus, Grafana, Datadog, and PagerDuty monitoring with automated horizontal pod autoscaling (HPA) and automated cross-region database snapshot backups." }
    ]
  }
];

export const bentoServices = [
  {
    id: "ai-bento",
    type: "big",
    tag: "01 · Featured",
    title: "AI Agents & Automation",
    description: "Production-ready AI agents, workflow automation, and enterprise RAG search that deliver real business outcomes.",
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
    description: "High-converting storefronts, Shopify Plus apps, and omnichannel POS platforms that scale with you.",
    iconClass: "b-shop",
    gradient: "linear-gradient(135deg,#16a34a,#4ade80)",
    icon: "i-cart",
    sceneType: "shop",
    chips: ["Shopify Plus", "WooCommerce", "Headless"]
  },
  {
    id: "mobile-bento",
    tag: "03 · Apps",
    title: "Mobile application development",
    description: "Native-quality 60fps iOS & Android apps built with React Native and Flutter from a single codebase.",
    iconClass: "b-app",
    gradient: "linear-gradient(135deg,#0891b2,#22d3ee)",
    icon: "i-mobile",
    sceneType: "phone",
    chips: ["iOS", "Android", "React Native", "Flutter"]
  },
  {
    id: "crm-bento",
    tag: "04 · Operations",
    title: "Custom Software & CRM",
    description: "Tailor-made CRMs, ERPs, and workflow engines built around your exact operational flows with zero per-seat fees.",
    iconClass: "b-crm",
    gradient: "linear-gradient(135deg,#d946ef,#f472b6)",
    icon: "i-db",
    sceneType: "crm",
    chips: ["Automation", "Custom ERP", "Analytics"]
  },
  {
    id: "web-bento",
    tag: "05 · Platforms",
    title: "Website development",
    description: "Fast, SEO-ready websites and web portals engineered to dominate search and convert visitors.",
    iconClass: "b-web",
    gradient: "linear-gradient(135deg,#f59e0b,#fb923c)",
    icon: "i-code",
    sceneType: "web",
    chips: ["Next.js", "React", "Laravel", "Tailwind"]
  }
];

export function getServiceBySlug(slug) {
  if (!slug) return null;
  const direct = servicesData.find((s) => s.slug === slug || s.id === slug);
  if (direct) return direct;

  const aliasMap = {
    "ai-automation-agents": "ai-automation",
    "enterprise-rag-search": "rag-knowledge-bases",
    "cro-conversion-optimization": "seo-site-optimizations",
    "custom-web-apps": "website-development",
    "shopify-plus-development": "ecommerce-solutions",
    "flutter-app-development": "mobile-app-development"
  };

  const targetSlug = aliasMap[slug];
  if (targetSlug) {
    return servicesData.find((s) => s.slug === targetSlug || s.id === targetSlug) || null;
  }
  return null;
}
