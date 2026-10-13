export const industryCategories = [
  "All",
  "Financial Services",
  "Healthcare & Life Sciences",
  "Retail & Commerce",
  "Enterprise Operations",
  "Emerging Tech"
];

export const industriesData = [
  {
    id: "fintech",
    slug: "fintech-banking",
    number: "01",
    title: "Fintech & Banking",
    badge: "SOC-2 & PCI-DSS Level 1",
    tag: "30+ projects delivered",
    category: "Financial Services",
    icon: "i-card",
    blobColor: "#4f46e5",
    icoGradient: "linear-gradient(135deg,#4f46e5,#818cf8)",
    href: "/industries/fintech-banking",
    caseStudySlugs: ["kreditmitraa", "billbook"],
    pillTags: ["Fraud Detection", "Compliance Automation", "KYC & AML", "Risk Scoring"],
    shortDescription: "Lending, payments, digital wallets & algorithmic trading platforms built for ultra-low latency and bank-grade regulatory compliance.",
    description: "We architect bank-grade fintech platforms, real-time settlement rails, digital banking applications, and automated fraud prevention engines engineered to handle billions in transaction volume.",
    heroSubtitle: "Zero-trust banking architectures, sub-second payment reconciliations, and automated regulatory reporting engineered for fintech disruptors and licensed financial institutions.",
    metrics: [
      { value: "$2.8B+", label: "Annual Volume" },
      { value: "99.99%", label: "Uptime SLA" },
      { value: "Sub-150ms", label: "Settlement Speed" },
      { value: "Zero", label: "Breach Record" }
    ],
    compliance: ["PCI-DSS Level 1", "SOC-2 Type II", "GDPR", "ISO 27001", "Open Banking / PSD2", "AML & KYC"],
    techStack: ["Next.js", "Node.js", "Python", "Kafka", "PostgreSQL", "Redis", "AWS FinTech", "Kubernetes"],
    capabilitiesList: [
      "Core Banking & Neo-Bank Mobile Apps",
      "Real-Time Payment Gateways & FX Orchestration",
      "Algorithmic Underwriting & Credit Scoring",
      "Digital Wallet & Stored-Value Ledgers",
      "Automated KYC, AML & Fraud Detection",
      "PCI-DSS Level 1 & SOC-2 Vault Architecture"
    ],
    solutions: [
      {
        title: "Digital Banking & Neo-Bank Apps",
        description: "Mobile-first checking, savings, card management, and high-yield wealth dashboards with biometric login and real-time push alerts.",
        features: ["Virtual & physical card provisioning", "Biometric face/touch authentication", "Real-time ledger synchronization"]
      },
      {
        title: "Payment Gateways & Orchestration",
        description: "Multi-currency checkout engines, dynamic routing to reduce transaction fees, and automated dispute and chargeback handling.",
        features: ["Multi-provider failover routing", "Stripe & Adyen webhooks engine", "3D Secure 2.0 frictionless authentication"]
      },
      {
        title: "Automated Lending & Credit Scoring",
        description: "Algorithmic underwriting workflows combining traditional credit bureau APIs with alternative cash-flow data points for instant approvals.",
        features: ["Instant decisioning engine", "Plaid & Yodlee account verification", "Automated amortized schedule generation"]
      },
      {
        title: "Cryptocurrency & Asset Ledgers",
        description: "Institutional-grade digital asset custody interfaces, non-custodial wallet connectors, and immutable double-entry ledger databases.",
        features: ["Double-entry accounting integrity", "Real-time cryptographic audit trails", "Institutional multi-signature approvals"]
      }
    ],
    workflow: [
      { step: "01", title: "Regulatory & Threat Scoping", desc: "Comprehensive compliance mapping covering PCI-DSS, SOC-2, and regional banking laws before architectural signoff." },
      { step: "02", title: "Zero-Trust System Design", desc: "End-to-end data encryption at rest and in transit, hardware security module (HSM) key isolation, and tokenization." },
      { step: "03", title: "Continuous Automated Sprints", desc: "Bi-weekly sprint deliveries with automated static code security scans, pen-testing harnesses, and staging sandboxes." },
      { step: "04", title: "Launch & 24/7 Security Operations", desc: "Zero-downtime deployment, automated circuit breakers, anomaly detection alerts, and 99.99% SLA monitoring." }
    ],
    advantages: [
      { title: "Bank-Grade Encryption & Tokenization", desc: "Every transaction, token, and customer PII field is protected by AES-256 and zero-knowledge token vaults." },
      { title: "High-Throughput Settlement Engines", desc: "Engineered on event-driven microservices capable of sustaining 25,000+ financial transactions per second." },
      { title: "Direct Plaid & Core Banking Connectors", desc: "Pre-built adapters for Jack Henry, FIS, Fiserv, Plaid, MX, and global clearinghouse networks." },
      { title: "Full Code & IP Ownership", desc: "Zero vendor lock-in or recurring per-transaction royalties. You own the code, the cloud environments, and the IP." }
    ],
    faqs: [
      { question: "How do you ensure PCI-DSS and SOC-2 compliance during development?", answer: "We enforce security as code: automated pipeline SAST/DAST scanning, strict principle-of-least-privilege IAM roles, external penetration testing, and zero storage of raw credit card PAN data through tokenized vaults." },
      { question: "Can you integrate with our legacy core banking system?", answer: "Yes. We have built modern REST and GraphQL facade layers on top of legacy core mainframes (such as FIS, Fiserv, and Jack Henry) to power modern, snappy mobile and web applications without disrupting legacy core databases." },
      { question: "What is your experience with multi-currency cross-border transactions?", answer: "We have architected FX conversion engines that support dynamic mid-market rate feeds, automated hedging triggers, and regional compliance filing for North American, European, and APAC corridors." }
    ]
  },
  {
    id: "healthcare",
    slug: "healthcare-medtech",
    number: "02",
    title: "Healthcare & MedTech",
    badge: "HIPAA & HITECH Certified",
    tag: "HIPAA-aware builds",
    category: "Healthcare & Life Sciences",
    icon: "i-heart",
    blobColor: "#ec4899",
    icoGradient: "linear-gradient(135deg,#ec4899,#f9a8d4)",
    href: "/industries/healthcare-medtech",
    caseStudySlugs: ["medicheck"],
    pillTags: ["Patient Triage", "HIPAA Compliance", "EHR/FHIR Integration", "Clinical Data"],
    shortDescription: "Telehealth, EHR integrations, medical device dashboards & patient-first mobile experiences engineered for strict compliance.",
    description: "We develop secure telemedicine portals, HL7/FHIR-compliant health data exchanges, patient companion apps, and clinical workflow platforms that empower medical providers and improve patient outcomes.",
    heroSubtitle: "HIPAA-compliant telemedicine platforms, HL7/FHIR interoperability engines, and clinical software systems trusted by healthcare providers, diagnostic labs, and digital health startups.",
    metrics: [
      { value: "100%", label: "HIPAA Compliance" },
      { value: "4.9★", label: "Patient App Rating" },
      { value: "450k+", label: "Virtual Consults" },
      { value: "Sub-300ms", label: "EHR Sync Latency" }
    ],
    compliance: ["HIPAA", "HITECH", "FHIR v4", "HL7", "FDA Part 11", "SOC-2 Type II"],
    techStack: ["React Native", "Next.js", "Python FastAPI", "PostgreSQL", "AWS HealthLake", "WebRTC", "Docker"],
    capabilitiesList: [
      "Custom Telehealth & Virtual Consultation",
      "EHR / EMR & HL7 FHIR Interoperability",
      "Remote Patient Monitoring (RPM) & Wearables",
      "Clinical Data Analytics & Diagnostic Decisioning",
      "Medical Access Program (MAP) & Pharmacy Systems",
      "HIPAA, HITECH & FDA 21 CFR Part 11 Architecture"
    ],
    solutions: [
      {
        title: "Telehealth & Virtual Care Portals",
        description: "HD video consultations, encrypted patient-doctor messaging, digital intake questionnaires, and e-prescription routing.",
        features: ["WebRTC peer-to-peer encrypted video", "In-call collaborative whiteboard & charts", "Automated prescription fulfillment sync"]
      },
      {
        title: "EHR & FHIR Interoperability",
        description: "Seamless bidirectional synchronization with Epic, Cerner, AthenaHealth, and Allscripts using modern HL7 Fast Healthcare Interoperability Resources.",
        features: ["SMART-on-FHIR app launch support", "Standardized patient identity matching", "Automated lab result ingestion"]
      },
      {
        title: "Remote Patient Monitoring (RPM)",
        description: "IoT connectivity for Bluetooth vitals monitors, continuous glucose sensors, and pulse oximeters with automated anomaly alert thresholds.",
        features: ["BLE medical device pairing", "Real-time clinical threshold alerts", "CMS reimbursement billing export"]
      },
      {
        title: "Clinical Trial & Patient Registries",
        description: "Secure electronic data capture (EDC) systems for decentralized clinical trials, cohort tracking, and FDA audit-ready logging.",
        features: ["21 CFR Part 11 compliant audit trails", "Digital e-Consent signature workflows", "De-identified data export pipelines"]
      }
    ],
    workflow: [
      { step: "01", title: "BAA & Privacy Architecture", desc: "Executing Business Associate Agreements (BAAs), risk assessments, and zero-PII logging architectural designs." },
      { step: "02", title: "FHIR Data Schema Design", desc: "Mapping medical entities into FHIR v4 resource models for seamless hospital interoperability." },
      { step: "03", title: "Compliant Agile Sprints", desc: "Sprint deliveries verified with automated HIPAA vulnerability scanners, encrypted sandbox databases, and audit logs." },
      { step: "04", title: "Hospital Integration & Cutover", desc: "Sandbox validation against Epic/Cerner test tenants, penetration testing, and zero-downtime production deployment." }
    ],
    advantages: [
      { title: "Ironclad BAA & Compliance Guarantees", desc: "We sign comprehensive BAAs and enforce end-to-end PHI encryption across all data pipelines and backups." },
      { title: "SMART on FHIR Native Engineering", desc: "Build once and deploy seamlessly across thousands of hospital systems without custom proprietary bridges." },
      { title: "Ultra-Low Latency Clinical Video", desc: "WebRTC peer-to-peer video streaming engineered for sub-200ms latency even in bandwidth-constrained rural clinics." },
      { title: "Human-Centered Accessible UX", desc: "ADA Section 508 and WCAG 2.1 AA certified interfaces accessible to elderly patients and individuals with disabilities." }
    ],
    faqs: [
      { question: "Will your team sign a Business Associate Agreement (BAA)?", answer: "Yes, absolutely. We execute formal BAAs with all healthcare clients prior to initiating architecture or touching any protected health information (PHI)." },
      { question: "How do you handle Epic and Cerner EHR integrations?", answer: "We leverage modern SMART-on-FHIR specifications and OAuth2 authorization flows, allowing clinical staff to launch our tools directly within their existing EHR workflows without double data entry." },
      { question: "Are your video consultation solutions HIPAA compliant?", answer: "Yes. All video and audio streams are end-to-end encrypted using WebRTC DTLS-SRTP protocols. Media servers do not store recordings without explicit clinical consent and encrypted key retention." }
    ]
  },
  {
    id: "ecommerce",
    slug: "ecommerce-retail",
    number: "03",
    title: "Ecommerce & Retail",
    badge: "High-Volume Checkout Scale",
    tag: "45+ stores launched",
    category: "Retail & Commerce",
    icon: "i-cart",
    blobColor: "#16a34a",
    icoGradient: "linear-gradient(135deg,#16a34a,#4ade80)",
    href: "/industries/ecommerce-retail",
    caseStudySlugs: ["recomm", "thakarmart", "ghanshyammurtibhandar"],
    pillTags: ["Headless Commerce", "Omnichannel POS", "Inventory Sync", "Checkout Optimization"],
    shortDescription: "High-converting storefronts, headless commerce architectures, omnichannel inventory & custom marketplace platforms.",
    description: "We build blazing-fast headless commerce platforms, custom Shopify Plus setups, omnichannel inventory systems, and AI-powered product recommendation engines engineered for maximum conversion.",
    heroSubtitle: "Sub-second headless storefronts, high-throughput flash sale architectures, and unified inventory systems built for enterprise retailers, D2C disruptors, and multi-vendor marketplaces.",
    metrics: [
      { value: "48%", label: "Conversion Lift" },
      { value: "0.7s", label: "Page Load Speed" },
      { value: "100k+", label: "Flash Sale RPM" },
      { value: "$120M+", label: "GMV Handled" }
    ],
    compliance: ["PCI-DSS", "GDPR", "CCPA", "WCAG 2.1 AA", "Core Web Vitals 95+"],
    techStack: ["Shopify Plus", "Next.js", "Algolia", "Sanity CMS", "Stripe", "Klaviyo", "Redis"],
    capabilitiesList: [
      "Headless Commerce Architecture (Next.js & Shopify Plus)",
      "Omnichannel POS & ERP Real-Time Inventory Sync",
      "Multi-Vendor Marketplace Platforms & Payouts",
      "AI Vector Search & Personalized Product Discovery",
      "High-Throughput Flash Sale Checkout Architecture",
      "Custom B2B Wholesale Portals & Tiered Pricing"
    ],
    solutions: [
      {
        title: "Headless Commerce Architecture",
        description: "Decoupled Next.js storefronts connected to Shopify Plus or Commerce Layer, delivering sub-second page switches and unlimited frontend flexibility.",
        features: ["Edge SSR caching with Cloudflare", "Dynamic instant cart updates", "Custom checkout upsell funnels"]
      },
      {
        title: "Omnichannel POS & ERP Sync",
        description: "Real-time synchronization connecting physical retail point-of-sale registers, warehouses, and online catalogs into a single source of truth.",
        features: ["Sub-5 second inventory balance updates", "Click-and-collect in-store fulfillment", "Automated split-shipment routing"]
      },
      {
        title: "Multi-Vendor Marketplaces",
        description: "Scalable marketplace platforms supporting seller onboarding, automated commission payouts, vendor dashboards, and unified checkout.",
        features: ["Stripe Connect automated payouts", "Individual vendor shipping matrices", "Centralized dispute arbitration"]
      },
      {
        title: "AI Personalization & Search",
        description: "Vector-powered visual search, predictive cross-sells, and dynamic dynamic pricing algorithms tailored to each shopper's behavioral profile.",
        features: ["Sub-30ms Algolia vector search", "Predictive cart abandonment triggers", "Dynamic bundle recommendations"]
      }
    ],
    workflow: [
      { step: "01", title: "Conversion Audit & Architecture", desc: "Analyzing checkout drop-offs, product discovery bottlenecks, and catalog data models before architecting." },
      { step: "02", title: "Design System & Prototyping", desc: "Mobile-first Figma UX engineered with micro-interactions, high-contrast CTAs, and frictionless 1-click checkouts." },
      { step: "03", title: "Headless Implementation Sprints", desc: "Building modular React components, webhook-driven cart sync, and automated stress testing for 50,000 concurrent visitors." },
      { step: "04", title: "Black Friday Ready Cutover", desc: "Zero-downtime DNS cutover, 99.99% uptime guarantees, real-time APM monitoring, and automated load rebalancing." }
    ],
    advantages: [
      { title: "Sub-Second Global Load Speeds", desc: "Edge-cached static assets and minimal JavaScript bundles ensure Google Core Web Vitals scores above 95 across all devices." },
      { title: "Flash Sale & Traffic Spike Immunity", desc: "Engineered on serverless auto-scaling pipelines capable of absorbing massive 50x traffic surges during promotion drops." },
      { title: "Optimized 1-Page Checkout Funnels", desc: "Support for Apple Pay, Google Pay, Shop Pay, Klarna, and localized international currencies out of the box." },
      { title: "Continuous A/B Experimentation", desc: "Integrated feature flags and multivariate testing harnesses to continuously iterate on average order value (AOV)." }
    ],
    faqs: [
      { question: "Should we migrate from traditional Shopify to Headless Shopify?", answer: "Headless Shopify is ideal if your store requires sub-second load times worldwide, custom interactive 3D/configurator experiences, or complex multi-brand architectures that traditional liquid templates cannot provide." },
      { question: "How do you protect our store against crashes during flash sales?", answer: "We decouple catalog viewing from checkout transactions using Redis caching, serverless edge functions, and virtual queue throttles that prevent database connection pooling exhaustion." },
      { question: "Can you migrate our legacy store data without losing SEO rankings?", answer: "Yes. We execute comprehensive 301 redirect mapping, preserve canonical URLs, carry over customer order histories, and audit structured product schema to guarantee zero search traffic drop." }
    ]
  },
  {
    id: "real-estate",
    slug: "real-estate-proptech",
    number: "04",
    title: "Real Estate & PropTech",
    badge: "IDX/MLS & Map-Based Search",
    tag: "Map-based discovery",
    category: "Retail & Commerce",
    icon: "i-home",
    blobColor: "#f59e0b",
    icoGradient: "linear-gradient(135deg,#f59e0b,#fbbf24)",
    href: "/industries/real-estate-proptech",
    caseStudySlugs: ["stayflow-crm", "sitedesk", "ananyahomeservice"],
    pillTags: ["RESO Web API", "Interactive Map Search", "Brokerage CRM", "Lease Portals"],
    shortDescription: "Listings portals, brokerage CRM, lease management & interactive map search engineered for property enterprises.",
    description: "We build intuitive property discovery portals, RESO Web API and IDX/MLS data feeds, 3D virtual tour integrations, automated lead routing, and tenant management portals.",
    heroSubtitle: "Interactive map search portals, automated MLS/RESO data ingestion pipelines, and property management platforms engineered for top real estate brokerages, REITs, and PropTech innovators.",
    metrics: [
      { value: "2.4M+", label: "Active Listings" },
      { value: "65%", label: "Lead Growth" },
      { value: "Sub-100ms", label: "Map Cluster Latency" },
      { value: "99.8%", label: "MLS Sync Accuracy" }
    ],
    compliance: ["RESO Web API", "RESO Data Dictionary", "Fair Housing Guidelines", "SOC-2 Type II"],
    techStack: ["Next.js", "Mapbox GL", "PostGIS", "Node.js", "Elasticsearch", "AWS S3", "GraphQL"],
    capabilitiesList: [
      "Interactive Map Search & Polygon Geo-Filtering",
      "RESO Web API & Automated MLS Data Ingestion",
      "Brokerage CRM & Multi-Agent Lead Dispatch",
      "Digital Tenant Leases & Online Rent Collection",
      "3D Virtual Walkthrough & Matterport Embedding",
      "Property Valuation & Neighborhood Analytics Engines"
    ],
    solutions: [
      {
        title: "Interactive Map Search & Geo-Filtering",
        description: "Vector tile mapping powered by Mapbox GL and PostGIS, supporting polygon boundary draws, school district filters, and sub-100ms cluster rendering.",
        features: ["Custom polygon boundary drawing", "Real-time cluster rendering of 500k+ pins", "Transit & school rating overlays"]
      },
      {
        title: "Automated RESO / IDX Feed Ingestion",
        description: "Scalable ETL data pipelines ingesting, deduplicating, and normalizing raw MLS feeds every 5 minutes with automated high-res image optimization.",
        features: ["Standardized RESO Web API client", "Automated image watermark & CDN sync", "Listing status change webhooks"]
      },
      {
        title: "Brokerage CRM & Agent Lead Routing",
        description: "Intelligent lead assignment workflows based on territory, agent availability, and buyer budget, integrated with automated SMS/email follow-ups.",
        features: ["Round-robin agent dispatching", "Integrated Twilio VoIP & SMS calling", "Saved search automated property alerts"]
      },
      {
        title: "Tenant & Lease Management Portals",
        description: "Digital lease agreement generation, online rent collection via ACH, automated maintenance ticket dispatching, and owner payout statements.",
        features: ["ACH & credit card recurring rent autopay", "Photo-enabled maintenance ticketing", "Automated DocuSign lease execution"]
      }
    ],
    workflow: [
      { step: "01", title: "MLS Feed & Geo Data Scoping", desc: "Connecting to regional MLS boards, defining RESO data schemas, and structuring PostGIS spatial databases." },
      { step: "02", title: "High-Performance UX Engineering", desc: "Designing responsive map-to-card synchronization, instant search filters, and virtual walkthrough viewing modes." },
      { step: "03", title: "Real-Time Pipeline Building", desc: "Constructing background workers that ingest delta updates from multiple MLS sources without database contention." },
      { step: "04", title: "Launch & Lead Capture Optimization", desc: "Deploying high-converting property detail pages with schema.org RealEstateListing markup and automated inquiry capture." }
    ],
    advantages: [
      { title: "PostGIS Spatial Database Mastery", desc: "Lightning-fast geospatial search queries capable of searching millions of properties across arbitrary user polygon shapes." },
      { title: "Standardized RESO Data Compliance", desc: "Full adherence to Real Estate Standards Organization (RESO) standards, preventing MLS board compliance fines." },
      { title: "High-Resolution Image CDN Pipelines", desc: "Automated image compression, progressive WebP delivery, and instant caching across global Cloudflare edge nodes." },
      { title: "Mobile-First On-the-Go UX", desc: "Smooth touch gestures, pinch-to-zoom map discovery, and offline capability for agents conducting on-site showings." }
    ],
    faqs: [
      { question: "How often are listings refreshed from the MLS?", answer: "Our automated RESO Web API ingest pipelines pull delta updates every 5 to 15 minutes, ensuring pending sales, price drops, and new listings display virtually in real time." },
      { question: "Can we support custom neighborhood polygon searches?", answer: "Yes. Users can draw custom boundaries directly onto the map using finger or mouse gestures, querying our PostGIS database with sub-100ms response times." },
      { question: "Do you integrate with Matterport and 3D walkthroughs?", answer: "Yes. We embed interactive Matterport 3D tours, interactive floorplans, and video walk-throughs directly into property detail layouts with zero layout shift." }
    ]
  },
  {
    id: "retail",
    slug: "logistics-supply-chain",
    number: "05",
    title: "Logistics & Supply Chain",
    badge: "Fleet Tracking & WMS",
    tag: "Omnichannel ready",
    category: "Enterprise Operations",
    icon: "i-truck",
    blobColor: "#0891b2",
    icoGradient: "linear-gradient(135deg,#0891b2,#22d3ee)",
    href: "/industries/logistics-supply-chain",
    caseStudySlugs: ["tripsbook", "automobile"],
    pillTags: ["Fleet Telematics", "Route Optimization", "WMS Warehousing", "EDI Integration"],
    shortDescription: "Fleet telematics, warehouse management (WMS), route optimization & end-to-end freight visibility platforms.",
    description: "We architect intelligent transportation management systems (TMS), warehouse inventory scanners, IoT sensor pipelines, dynamic route dispatchers, and automated electronic bill of lading (eBOL) software.",
    heroSubtitle: "Real-time fleet tracking portals, automated warehouse management systems (WMS), and route optimization algorithms engineered for 3PL providers, freight forwarders, and global distributors.",
    metrics: [
      { value: "32%", label: "Fuel Cost Savings" },
      { value: "99.4%", label: "On-Time Dispatch" },
      { value: "12M+", label: "Parcels Tracked" },
      { value: "Sub-5s", label: "IoT Telematics Sync" }
    ],
    compliance: ["FMCSA ELD Standards", "ISO 28000", "SOC-2 Type II", "EDI 204/210/214"],
    techStack: ["Next.js", "Go / Golang", "PostgreSQL", "Kafka", "Redis", "Google Maps Platform", "Docker"],
    capabilitiesList: [
      "Live Fleet Telematics & GPS Vehicle Tracking",
      "Algorithmic Multi-Stop Route Optimization",
      "Warehouse Management System (WMS) & Barcode Scanning",
      "Paperless Electronic Bill of Lading (eBOL & ePOD)",
      "Standardized EDI 204/210/214 Message Parsing",
      "Cold Chain & IoT Sensor Temperature Monitoring"
    ],
    solutions: [
      {
        title: "Fleet Telematics & Live Dispatch",
        description: "Real-time GPS vehicle tracking, driver hours-of-service compliance, geofenced perimeter alerts, and automated load dispatching.",
        features: ["Live vehicle position streaming", "Automated geofence entry/exit pings", "ELD hours of service tracking"]
      },
      {
        title: "Dynamic Route Optimization",
        description: "Multi-stop routing algorithms factoring in vehicle weight, traffic congestion, delivery time windows, and fuel efficiency.",
        features: ["Traveling Salesperson algorithmic optimization", "Turn-by-turn mobile navigation for drivers", "Live ETA recalculation"]
      },
      {
        title: "Warehouse Management System (WMS)",
        description: "Barcode/RFID scanning workflows, smart bin location assignment, pick-and-pack optimization, and real-time inventory counts.",
        features: ["Handheld barcode scanner Web APIs", "Wave picking & batch picking optimization", "Automated stock reorder threshold alerts"]
      },
      {
        title: "Digital Freight Brokerage & eBOL",
        description: "Instant carrier rate quoting, automated load tendering, electronic signatures, and paperless electronic proof of delivery (ePOD).",
        features: ["Standardized EDI 204/214 message parsing", "Digital signature capture on glass", "Automated invoice & carrier settlement"]
      }
    ],
    workflow: [
      { step: "01", title: "Supply Chain Bottleneck Analysis", desc: "Auditing warehouse layout, route inefficiencies, and EDI partner formats to engineer the optimal architecture." },
      { step: "02", title: "High-Throughput Ingestion Design", desc: "Building Kafka event streams capable of processing millions of GPS telemetry pings per hour with zero drop." },
      { step: "03", title: "Driver & Dispatcher Sprints", desc: "Developing intuitive mobile driver interfaces with offline mode paired with real-time web dispatch control panels." },
      { step: "04", title: "Field Pilot & Fleet Rollout", desc: "Conducting phased pilots on test routes, calibrating geofence radius tolerances, and deploying 24/7 SLA infrastructure." }
    ],
    advantages: [
      { title: "Offline-First Mobile Driver Apps", desc: "Drivers can capture signatures, scan barcodes, and confirm drops in remote zones with automated cloud sync once connected." },
      { title: "Standardized EDI Integration", desc: "Native parsers for EDI 204 (Load Tender), 214 (Shipment Status), and 210 (Invoice) to sync with Fortune 500 shippers." },
      { title: "Real-Time Telematics Streaming", desc: "High-efficiency WebSocket and MQTT event pipelines that keep dispatch screens updated with sub-second accuracy." },
      { title: "Algorithmic Route Cost Reduction", desc: "Custom heuristics that minimize empty backhauls, cut idle engine times, and maximize driver payload capacity." }
    ],
    faqs: [
      { question: "Can your system connect with our existing telematics hardware?", answer: "Yes. We ingest data from major ELD and telematics providers (including Samsara, Geotab, and Omnitracs) via standardized Webhooks and REST APIs." },
      { question: "How does offline mode function for drivers in low-coverage areas?", answer: "Our driver mobile apps utilize IndexedDB and SQLite local storage to cache routes, manifest records, and signature captures locally, automatically syncing upon network recovery." },
      { question: "Do you support EDI integrations with legacy shipping partners?", answer: "Yes. We have built-in translation microservices that convert legacy ANSI X12 EDI documents into modern JSON payloads for your core database." }
    ]
  },
  {
    id: "manufacturing",
    slug: "manufacturing-iot",
    number: "06",
    title: "Manufacturing & Industrial IoT",
    badge: "Industry 4.0 & OEE Analytics",
    tag: "Smart factory tools",
    category: "Enterprise Operations",
    icon: "i-factory",
    blobColor: "#64748b",
    icoGradient: "linear-gradient(135deg,#64748b,#94a3b8)",
    href: "/industries/manufacturing-iot",
    caseStudySlugs: ["nandani", "aexongraphics-crm", "srlpixel"],
    pillTags: ["Predictive Maintenance", "OEE Benchmarking", "Industrial IoT", "SCADA Bridges"],
    shortDescription: "Production line tracking, equipment predictive maintenance, smart-factory dashboards & Overall Equipment Effectiveness (OEE).",
    description: "We engineer Industry 4.0 industrial IoT platforms, SCADA integration bridges, computerized maintenance management systems (CMMS), and predictive machine health analytics.",
    heroSubtitle: "Industrial IoT telematics, Overall Equipment Effectiveness (OEE) dashboards, and automated production tracking engineered for precision manufacturers and plant operators.",
    metrics: [
      { value: "28%", label: "Downtime Reduction" },
      { value: "94.2%", label: "OEE Factory Benchmark" },
      { value: "50k+", label: "Sensors Monitored" },
      { value: "Sub-50ms", label: "PLC Ingest Latency" }
    ],
    compliance: ["ISA-95", "ISO 9001", "IEC 62443", "SOC-2 Type II"],
    techStack: ["React", "Python", "MQTT / OPC-UA", "TimescaleDB", "InfluxDB", "Docker", "AWS IoT Core"],
    capabilitiesList: [
      "Real-Time OEE & Shop-Floor Line Dashboards",
      "Predictive Equipment Maintenance & Anomaly Detection",
      "Industrial IoT Edge Gateways (Modbus & OPC-UA)",
      "Digital Assembly Instructions & Tablet Workstations",
      "Computer Vision Automated Quality Inspection",
      "Air-Gapped OT Network Security & ISA-95 Modeling"
    ],
    solutions: [
      {
        title: "Real-Time OEE & Line Tracking",
        description: "Live calculation of Availability, Performance, and Quality metrics for individual machines, production cells, and entire manufacturing facilities.",
        features: ["Live takt time vs cycle time visualization", "Automated scrap count attribution", "Shift handover operational reports"]
      },
      {
        title: "Predictive Equipment Maintenance",
        description: "Vibration, temperature, and current draw anomaly detection models that alert plant engineers weeks before catastrophic machine breakdown.",
        features: ["Machine learning time-series anomaly detection", "Automated maintenance work order generation", "Mean Time Between Failures (MTBF) tracking"]
      },
      {
        title: "SCADA & PLC Edge Gateways",
        description: "Robust edge connectors translating Modbus, Siemens S7, and OPC-UA protocol telemetry into cloud-ready MQTT streams.",
        features: ["On-premise edge gateway resilience", "OPC-UA standardized data model mapping", "Air-gapped security network isolation"]
      },
      {
        title: "Digital Work Instructions & QA",
        description: "Interactive tablet-based assembly checklists, barcode verification, and automated computer vision quality inspection checkpoints.",
        features: ["Visual step-by-step assembly guides", "Computer vision surface defect detection", "Traceable serial number batch logging"]
      }
    ],
    workflow: [
      { step: "01", title: "Plant Floor & PLC Auditing", desc: "Cataloging machine protocols (Modbus, OPC-UA, Ethernet/IP) and defining network perimeter security architecture." },
      { step: "02", title: "Edge Gateway & Time-Series Setup", desc: "Deploying hardened edge compute boxes with local buffer storage and setting up TimescaleDB pipelines." },
      { step: "03", title: "Dashboard & Operator Sprints", desc: "Building high-contrast industrial UI screens designed for touchscreen shop-floor operation and high-level manager consoles." },
      { step: "04", title: "Factory Calibration & SLA", desc: "Validating sensor telemetry against physical production outputs, training shift leads, and activating continuous SLA monitoring." }
    ],
    advantages: [
      { title: "Protocol Agnostic Machine Connectivity", desc: "Direct connectors for Siemens, Allen-Bradley, Fanuc, Beckhoff, and legacy dry-contact relay sensors." },
      { title: "Time-Series Database Performance", desc: "Engineered on TimescaleDB and InfluxDB for storing billions of high-frequency sensor metrics without query degradation." },
      { title: "Air-Gapped & OT Network Security", desc: "Rigorous compliance with IEC 62443 industrial cybersecurity standards, keeping plant operations safely partitioned." },
      { title: "Actionable Shop-Floor Touch UX", desc: "High-contrast UI designed for gloved touch interaction, high ambient noise environments, and rapid glanceability." }
    ],
    faqs: [
      { question: "Can we connect legacy machines that lack modern Ethernet ports?", answer: "Yes. We deploy non-invasive IoT current clamps, vibration sensors, and micro-PLC edge gateways that digitize machine run state without modifying internal machine warranties." },
      { question: "How does the platform handle shop-floor network outages?", answer: "Edge gateways run lightweight local buffer engines that store up to 72 hours of telemetry locally during network disconnection, backfilling the cloud database immediately upon reconnect." },
      { question: "Is this platform compliant with industrial cybersecurity standards?", answer: "Yes. Our architecture conforms to ISA/IEC 62443 guidelines, implementing one-way DMZ data diodes and TLS 1.3 mutual certificate authentication." }
    ]
  },
  {
    id: "saas",
    slug: "saas-cloud-platforms",
    number: "07",
    title: "SaaS & Cloud Platforms",
    badge: "Multi-Tenant Architecture",
    tag: "From idea to scale",
    category: "Emerging Tech",
    icon: "i-cloud",
    blobColor: "#d946ef",
    icoGradient: "linear-gradient(135deg,#d946ef,#f472b6)",
    href: "/industries/saas-cloud-platforms",
    caseStudySlugs: ["filterbook", "billbook", "stayflow-crm"],
    pillTags: ["Multi-Tenant RLS", "Enterprise SSO", "Usage-Based Billing", "Developer APIs"],
    shortDescription: "Multi-tenant software, B2B workspaces, usage-based billing & scalable subscription platforms engineered for fast growth.",
    description: "We build modern B2B SaaS products, tenant-isolated data architectures, automated Stripe billing engines, role-based team management, and developer-facing API portals.",
    heroSubtitle: "High-velocity multi-tenant architectures, self-serve subscription billing, and enterprise security features engineered for B2B SaaS founders and product teams.",
    metrics: [
      { value: "99.99%", label: "Platform SLA" },
      { value: "4.2x", label: "ARR Growth" },
      { value: "Sub-120ms", label: "API Response" },
      { value: "SOC-2", label: "Readiness Built-In" }
    ],
    compliance: ["SOC-2 Type II", "GDPR", "CCPA", "ISO 27001", "SAML 2.0 / SCIM"],
    techStack: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Stripe Billing", "WorkOS", "Redis", "AWS"],
    capabilitiesList: [
      "Multi-Tenant Architecture with PostgreSQL RLS",
      "Enterprise SSO (SAML 2.0 & OIDC) & SCIM Provisioning",
      "Usage-Based Metered Billing & Stripe Tax Integration",
      "Public Developer REST/GraphQL APIs & Webhook Engine",
      "Fine-Grained Role-Based Access Control (RBAC)",
      "SOC-2 Type II Audit Logging & Compliance Vaults"
    ],
    solutions: [
      {
        title: "Multi-Tenant Foundation & Workspaces",
        description: "Row-level security (RLS) data partitioning, custom domain mapping, team invites, and fine-grained role-based access control (RBAC).",
        features: ["PostgreSQL Row-Level Security isolation", "Custom white-label domain routing", "Granular role and permission matrices"]
      },
      {
        title: "Enterprise SSO & SCIM Provisioning",
        description: "Turnkey SAML 2.0 and OIDC integrations for Okta, Azure AD, and Google Workspace, with automated employee provisioning via SCIM.",
        features: ["Single Sign-On (SAML 2.0 & OIDC)", "Automated SCIM user de-provisioning", "Enterprise audit event logs"]
      },
      {
        title: "Usage-Based & Hybrid Subscription Billing",
        description: "Metered usage tracking, self-serve tier upgrades, automated invoicing, tax calculation, and self-service Stripe Customer Portals.",
        features: ["High-frequency metered event aggregation", "Stripe Billing & Tax integration", "Prorated seat-based upgrades"]
      },
      {
        title: "Public Developer API & Webhooks",
        description: "Comprehensive public REST/GraphQL APIs, API key rate-limiting, interactive OpenAPI documentation, and signed outgoing webhook deliveries.",
        features: ["HMAC-signed webhook dispatchers", "Token bucket rate limiting with Redis", "Interactive Swagger & OpenAPI docs"]
      }
    ],
    workflow: [
      { step: "01", title: "Product Blueprint & Data Modeling", desc: "Defining tenant isolation models, pricing tier boundaries, and key user journey retention loops." },
      { step: "02", title: "Core Platform Architecture", desc: "Setting up database schemas with Row-Level Security, authentication flows, and Stripe billing pipelines." },
      { step: "03", title: "Bi-Weekly Feature Sprints", desc: "Rapidly shipping customer-facing features, collaboration tools, and enterprise governance panels with automated testing." },
      { step: "04", title: "Self-Serve Scale & SOC-2 Audit", desc: "Deploying auto-scaling cloud infrastructure, configuring observability dashboards, and preparing SOC-2 evidence." }
    ],
    advantages: [
      { title: "Enterprise-Ready on Day One", desc: "Built with SAML SSO, audit logging, and RBAC out of the box so you never lose enterprise deals over compliance." },
      { title: "Bulletproof Tenant Data Isolation", desc: "PostgreSQL Row-Level Security ensures that tenant data can never leak across customer organization boundaries." },
      { title: "Flawless Metered Billing Engine", desc: "Accurately track and bill millions of daily API calls, storage gigabytes, or active seats without billing drift." },
      { title: "Next.js Edge Rendering Velocity", desc: "Sub-150ms page load speeds across global locations, boosting user retention and organic SEO rankings." }
    ],
    faqs: [
      { question: "How do you ensure data isolation between different customer accounts?", answer: "We enforce PostgreSQL Row-Level Security (RLS) at the database layer paired with tenant ID session scoping on every query, guaranteeing zero cross-tenant contamination." },
      { question: "Can you implement Enterprise SSO (Okta, Azure AD) for our product?", answer: "Yes. We configure SAML 2.0 and OIDC connectors via modern protocols like WorkOS or NextAuth, enabling your enterprise customers to enforce single sign-on seamlessly." },
      { question: "How do you handle complex usage-based metered billing?", answer: "We implement high-throughput Redis event counters that aggregate usage events asynchronously, reporting consolidated metrics to Stripe's metered billing API with zero checkout lag." }
    ]
  },
  {
    id: "travel",
    slug: "travel-hospitality",
    number: "08",
    title: "Travel & Hospitality",
    badge: "Booking Engines & GDS",
    tag: "Seamless booking flows",
    category: "Retail & Commerce",
    icon: "i-plane",
    blobColor: "#7c3aed",
    icoGradient: "linear-gradient(135deg,#7c3aed,#a78bfa)",
    href: "/industries/travel-hospitality",
    caseStudySlugs: ["suryadeepcarrent", "tripsbook"],
    pillTags: ["GDS / Amadeus", "Booking Engines", "Overbooking Locks", "PMS Sync"],
    shortDescription: "Booking engines, Global Distribution System (GDS) integrations, dynamic itinerary planners & guest loyalty platforms.",
    description: "We build intuitive online travel booking engines, hotel reservation portals, airline and GDS API connectors, dynamic package builders, and mobile guest companion apps.",
    heroSubtitle: "High-speed reservation engines, multi-provider GDS integrations, and dynamic packaging platforms engineered for OTAs, hotel groups, and tour operators.",
    metrics: [
      { value: "Sub-800ms", label: "Search Engine Response" },
      { value: "38%", label: "Direct Booking Lift" },
      { value: "1.2M+", label: "Bookings Processed" },
      { value: "4.8★", label: "Guest App Rating" }
    ],
    compliance: ["PCI-DSS", "GDPR", "IATA NDC Standards", "SOC-2 Type II"],
    techStack: ["Next.js", "Node.js", "Redis", "Elasticsearch", "Amadeus / Sabre API", "Stripe", "AWS"],
    capabilitiesList: [
      "Sub-Second Global Flight & Hotel Booking Engine",
      "Two-Way GDS Integration (Amadeus, Sabre & Travelport)",
      "Property Management System (PMS) Channel Manager Sync",
      "Dynamic Itinerary Builder & Packaging Engine",
      "Contactless Guest Mobile Companion & Digital Room Key",
      "Distributed Overbooking Prevention & Lock Engine"
    ],
    solutions: [
      {
        title: "High-Speed Booking Engine",
        description: "Sub-second room, flight, and experience reservation workflows with live rate updates, calendar availability grids, and instant payment confirmation.",
        features: ["Instant multi-room date grid selector", "Apple Pay & international payment routing", "Automated email & SMS booking confirmations"]
      },
      {
        title: "GDS & Channel Manager Integration",
        description: "Bidirectional synchronization connecting your platform with Amadeus, Sabre, Travelport, and channel managers like SiteMinder.",
        features: ["Standardized OTA XML / JSON feed parsing", "Two-way rate and inventory synchronization", "Overbooking prevention locking mechanisms"]
      },
      {
        title: "Dynamic Packaging & Itineraries",
        description: "Bundled flight + hotel + rental car packaging algorithms that calculate combined promotional pricing and generate interactive digital itineraries.",
        features: ["Interactive day-by-day travel map plans", "Real-time dynamic packaging discounts", "Collaborative itinerary sharing links"]
      },
      {
        title: "Guest Experience & Digital Key App",
        description: "Mobile apps featuring digital check-in, keyless room entry via Bluetooth, in-stay room service ordering, and loyalty tier rewards.",
        features: ["Mobile contactless check-in/check-out", "In-app room service and concierge chat", "Tiered rewards and loyalty points ledger"]
      }
    ],
    workflow: [
      { step: "01", title: "API Connectors & Architecture", desc: "Mapping rate structures, cancellation policies, and GDS/PMS connection parameters." },
      { step: "02", title: "Fast Search UX Design", desc: "Creating frictionless calendar selectors, interactive filters, and mobile-optimized booking funnels." },
      { step: "03", title: "High-Volume Caching Sprints", desc: "Implementing multi-tier Redis and Elasticsearch caches to shield external GDS APIs from excessive lookup costs." },
      { step: "04", title: "Launch & Channel Synchronization", desc: "Conducting end-to-end sandbox booking tests, stress testing checkout under surge, and activating 24/7 SLA monitoring." }
    ],
    advantages: [
      { title: "Aggressive Multi-Tier Search Caching", desc: "Save thousands in GDS lookup API fees while delivering sub-second hotel and flight search results to end users." },
      { title: "Overbooking Prevention Locks", desc: "Distributed Redis mutex locks ensure two users cannot book the same last remaining suite simultaneously." },
      { title: "Mobile-First Conversion UX", desc: "One-thumb booking flows, pre-filled passenger details, and frictionless Apple Pay / Google Pay integrations." },
      { title: "Multi-Language & Multi-Currency Engine", desc: "Automatic currency conversion and localized tax calculations tailored to international traveler origin." }
    ],
    faqs: [
      { question: "How do you minimize expensive GDS API search lookup fees?", answer: "We architect an intelligent Redis caching layer that caches room and seat availability queries with adaptive TTLs, reducing raw GDS API call volumes by up to 75%." },
      { question: "Can you connect with our existing Property Management System (PMS)?", answer: "Yes. We have connected with leading PMS platforms including Opera, Cloudbeds, and SiteMinder via standard REST and HTNG XML protocols." },
      { question: "Do your booking engines handle complex cancellation and refund policies?", answer: "Yes. Our booking state machine enforces non-refundable, partially refundable, and flexible cancellation rules with automated Stripe refund webhooks." }
    ]
  },
  {
    id: "edtech",
    slug: "edtech-elearning",
    number: "09",
    title: "EdTech & E-Learning",
    badge: "LMS & Interactive Learning",
    tag: "Interactive learning",
    category: "Emerging Tech",
    icon: "i-pen",
    blobColor: "#059669",
    icoGradient: "linear-gradient(135deg,#059669,#34d399)",
    href: "/industries/edtech-elearning",
    caseStudySlugs: ["fitcket", "loksangeet"],
    pillTags: ["Adaptive Learning", "Live Classroom", "AI Tutoring", "FERPA & COPPA"],
    shortDescription: "Learning Management Systems (LMS), live virtual classrooms, AI tutoring agents & gamified student evaluation portals.",
    description: "We develop comprehensive Learning Management Systems (LMS), video course delivery platforms, interactive quizzes, automated grading systems, and AI-powered personalized tutoring agents.",
    heroSubtitle: "Interactive learning management systems (LMS), video delivery platforms, and AI-powered tutoring workflows engineered for universities, bootcamps, and corporate training academies.",
    metrics: [
      { value: "98.5%", label: "Course Completion" },
      { value: "500k+", label: "Active Students" },
      { value: "Sub-1s", label: "Video Start Time" },
      { value: "FERPA", label: "Compliant Security" }
    ],
    compliance: ["FERPA", "COPPA", "SCORM / xAPI", "WCAG 2.1 AA", "GDPR"],
    techStack: ["Next.js", "Python", "PostgreSQL", "Mux Video", "Tailwind CSS", "Redis", "Docker"],
    capabilitiesList: [
      "Scalable Learning Management System (LMS) Portals",
      "Low-Latency WebRTC Virtual Classrooms & Whiteboards",
      "AI Adaptive Tutoring & Automated Essay Evaluation",
      "Browser Sandbox Code Execution & Automated Grading",
      "SCORM & xAPI Interactive Course Content Ingestion",
      "FERPA & COPPA Student Privacy Compliance"
    ],
    solutions: [
      {
        title: "Modern Learning Management System (LMS)",
        description: "Course syllabus builders, modular video lessons, downloadable resources, discussion boards, and verified completion certificates.",
        features: ["Structured multi-module curriculums", "Interactive progress and streak tracking", "Automated PDF certificate generation with verification links"]
      },
      {
        title: "Live Virtual Classrooms & Tutoring",
        description: "Interactive real-time video classrooms with digital whiteboard collaboration, breakout rooms, screen sharing, and live attendance tracking.",
        features: ["Low-latency WebRTC group video", "Shared collaborative code/math whiteboard", "Automated student participation analytics"]
      },
      {
        title: "AI-Powered Adaptive Tutoring",
        description: "Conversational AI agents trained on course materials that answer student questions 24/7, explain difficult concepts, and recommend targeted practice.",
        features: ["RAG knowledge base grounded in textbook materials", "Adaptive difficulty quiz generation", "Plagiarism and originality detection"]
      },
      {
        title: "Interactive Assessment & Grading",
        description: "Automated coding sandboxes, multiple-choice quizzes, timed exams with proctoring safeguards, and detailed teacher feedback consoles.",
        features: ["In-browser code execution sandbox", "Automated rubric-based grading", "Timed test window with focus-loss detection"]
      }
    ],
    workflow: [
      { step: "01", title: "Curriculum & Compliance Scoping", desc: "Structuring pedagogical workflows, FERPA/COPPA compliance requirements, and content ingestion formats." },
      { step: "02", title: "Accessible UX Design", desc: "Creating WCAG 2.1 AA certified student and teacher dashboards with intuitive navigation and high-contrast typography." },
      { step: "03", title: "Media & Streaming Sprints", desc: "Integrating Mux adaptive bitrate video streaming, offline course downloading, and interactive quiz engines." },
      { step: "04", title: "Scale & Semester Launch", desc: "Stress testing concurrent quiz submissions under heavy load and deploying 99.9% uptime SLA monitoring." }
    ],
    advantages: [
      { title: "Adaptive Bitrate Video Streaming", desc: "Smooth, buffer-free video playback on any connection speed using Mux and HLS streaming protocols." },
      { title: "Strict FERPA & COPPA Student Privacy", desc: "Zero tracking cookies, encrypted student grade records, and privacy safeguards for underage learners." },
      { title: "SCORM & xAPI Integration", desc: "Easily export and import standardized course content packages to integrate with legacy corporate learning suites." },
      { title: "Gamified Student Retention UX", desc: "Badges, daily streaks, level progressions, and leaderboard incentives proven to elevate course completion rates by 40%." }
    ],
    faqs: [
      { question: "Is the platform compliant with student data privacy laws (FERPA / COPPA)?", answer: "Yes. Our architecture enforces strict data isolation, zero commercial data mining, and role-based access controls meeting all FERPA and COPPA requirements." },
      { question: "Can we integrate with SCORM and xAPI existing course content?", answer: "Yes. We support SCORM 1.2, SCORM 2004, and modern Tin Can (xAPI) packages for seamless content compatibility." },
      { question: "How do you protect course video content from piracy and screen recording?", answer: "We implement dynamic forensic watermarking displaying the student's email on video frames, paired with encrypted HLS streaming keys that prevent direct downloads." }
    ]
  }
];

export function getIndustryBySlug(slug) {
  if (!slug) return null;
  const decoded = decodeURIComponent(String(slug)).toLowerCase().trim();
  const slugified = decoded.replace(/[\s_]+/g, "-");
  return (
    industriesData.find(
      (ind) =>
        ind.slug === decoded ||
        ind.slug === slugified ||
        ind.id === decoded ||
        ind.id === slugified
    ) || null
  );
}
