export const productCategories = [
  "All",
  "Business & Billing SaaS",
  "Field Operations & Mobility"
];

export const productsData = [
  {
    id: "billsbook",
    slug: "billsbook",
    seo: {
          "title": "BillsBook: GST Billing Software & POS for Retail Shops",
          "description": "BillsBook is GST billing, POS and inventory software for retail shops and wholesalers: barcode billing, WhatsApp invoices, multi-branch stock. Built in Ahmedabad.",
          "primaryKeyword": "billing software for retail shop",
          "keywords": [
                "billing software",
                "GST billing software",
                "invoice software India",
                "POS billing software",
                "retail billing software",
                "barcode billing software",
                "inventory management software",
                "WhatsApp invoice software",
                "wholesale billing software",
                "multi-branch billing software",
                "billing software Ahmedabad",
                "online billing website"
          ],
          "introHeading": "Billing software for shops, wholesalers and multi-branch stores",
          "intro": "Looking for billing software for your shop, wholesale business or multi-branch store? BillsBook is a cloud billing, POS and inventory system built by Vision Technolabs in Ahmedabad. Create GST and non-GST invoices at the counter in under 30 seconds, scan barcodes, track stock across branches and send branded PDF invoices to customers on WhatsApp.",
          "audience": [
                "Retail shops and general stores",
                "Wholesalers and distributors",
                "Multi-branch businesses",
                "GST-registered and non-GST businesses"
          ],
          "os": "Web"
    },
    number: "01",
    title: "BillsBook — Multi-Business Invoicing, POS & Inventory SaaS",
    shortTitle: "BillsBook",
    badge: "Billing & POS SaaS",
    tag: "Invoicing & Inventory ERP",
    category: "Business & Billing SaaS",
    rating: "4.9★",
    reviewsCount: "180+ Active Retailers",
    icon: "i-chart",
    gradient: "linear-gradient(135deg,#2563eb,#1d4ed8)",
    tagline: "Sub-30-second counter billing, automated barcode inventory, and instant WhatsApp vector PDF delivery.",
    shortDescription: "High-performance counter-billing and multi-tenant inventory SaaS designed for retail shops, wholesalers, and multi-branch businesses with sub-30-second checkout and live stock synchronization.",
    description: "BillsBook is a lightweight, lightning-fast counter-billing and multi-tenant inventory platform engineered by Vision Technolabs. It empowers retail shopkeepers, distributors, and multi-branch merchants to look up items in milliseconds, calculate GST taxes automatically, dispatch branded vector PDF invoices directly to customer WhatsApp numbers, and reconcile stock in real time across Cash, UPI, Card, and Bank Transfer payments.",
    heroSubtitle: "Sub-30-second counter billing, automated barcode inventory, 4 branded PDF templates, and instant WhatsApp delivery engineered for modern retail businesses.",
    pricing: "Turnkey SaaS · Full Source Code Buyout Available",
    liveDemoUrl: "https://billbook.visiontechnolabs.com/",
    image: "/images/billbook/billbook-invoicing-inventory-saas-vision-technolabs.webp",
    imageAlt: "BillsBook multi-business cloud invoicing, POS and inventory management SaaS by Vision Technolabs in Ahmedabad.",
    metrics: [
      { value: "<30s", label: "Counter Billing Speed" },
      { value: "<1%", label: "Stock Discrepancy" },
      { value: "-78%", label: "Paper & Print Overhead" },
      { value: "Instant", label: "WhatsApp Delivery" }
    ],
    features: [
      {
        title: "Smart Counter POS Invoicing Desk",
        description: "Ultra-fast counter checkout interface enabling cashiers to search items via name or barcode, apply item-level discounts, compute GST/non-GST taxes, and finalize sales in under 30 seconds.",
        points: ["Barcode scanner & Select2 instant lookup", "Split & multi-mode tender: Cash, UPI, Card, Credit", "Zero lag during peak rush hours"]
      },
      {
        title: "Automated Stock & Inventory Engine",
        description: "Bidirectional inventory synchronization that decrements stock in real time upon invoice generation and safely replenishes stock upon invoice edit or cancellation.",
        points: ["Color-coded low-stock threshold warnings", "Safety stock reorder point automation", "Multi-branch inventory tracking"]
      },
      {
        title: "4 Branded PDF Invoice Templates & WhatsApp Delivery",
        description: "Renders crisp, print-ready vector PDF invoices using Dompdf across Modern, Classic, Minimalist, and 80mm/58mm Thermal POS formats with instant WhatsApp delivery.",
        points: ["Modern, Classic, Minimalist & Thermal layouts", "Automated one-click WhatsApp PDF sharing", "Custom company logo and terms embedding"]
      },
      {
        title: "Customer Ledger & Financial Analytics",
        description: "Executive dashboards displaying daily sales trends, payment mode breakdowns, gross profit margins, and detailed customer credit balance aging.",
        points: ["ApexCharts visual revenue trends", "Customer purchase history & outstanding ledger", "Automated GSTR-1 tax export in Excel"]
      }
    ],
    deploymentOptions: [
      {
        title: "Managed Cloud SaaS",
        description: "Fully hosted on high-availability cloud infrastructure with automated database backups, SSL certificates, and 99.9% uptime SLA.",
        badge: "Most Popular"
      },
      {
        title: "White-Label Reseller Edition",
        description: "Deploy under your own agency brand, custom domain, and corporate color scheme to offer retail billing software directly to your clients.",
        badge: "Agency Ready"
      },
      {
        title: "100% Source Code Buyout",
        description: "Complete PHP CodeIgniter MVC codebase, MySQL database schemas, and documentation with zero recurring licensing fees.",
        badge: "Full IP Ownership"
      }
    ],
    techStack: ["PHP 8.x", "CodeIgniter 3.1 MVC", "MySQL / MariaDB", "Bootstrap 5", "JavaScript ES6+", "Dompdf", "WhatsApp Cloud API", "ApexCharts", "Apache / Linux"],
    workflow: [
      { step: "01", title: "Item & Stock Onboarding", desc: "Bulk import your product catalog, HSN codes, GST tax rates, and opening stock levels via CSV." },
      { step: "02", title: "Counter POS Setup", desc: "Connect barcode scanners and thermal printers, and customize your branded vector PDF invoice template." },
      { step: "03", title: "Instant Invoicing & WhatsApp", desc: "Generate invoices in under 30 seconds with automatic WhatsApp PDF delivery to customer phones." },
      { step: "04", title: "Real-Time Ledger & Analytics", desc: "Monitor live gross margins, cash/UPI splits, low-stock alerts, and export GST compliance summaries." }
    ],
    advantages: [
      { title: "Eliminates Paper Register Errors", desc: "Replaces messy paper bills and Excel sheets with validated line items and automated tax computations." },
      { title: "78% Lower Printing & Paper Costs", desc: "Digital WhatsApp delivery reduces thermal paper roll consumption while providing customers with searchable digital bills." },
      { title: "Zero Inventory Shrinkage", desc: "Live stock decrementing and threshold alerts prevent unrecorded product disappearance and over-selling." },
      { title: "Offline & Thermal Printer Ready", desc: "Optimized for continuous counter operation with instant keyboard shortcuts and standard ESC/POS thermal printers." }
    ],
    faqs: [
      { question: "Can BillsBook connect to physical barcode scanners and thermal printers?", answer: "Yes. BillsBook supports standard USB and Bluetooth barcode scanners for instant item lookup, as well as 80mm and 58mm ESC/POS thermal receipt printers." },
      { question: "How does the WhatsApp invoice delivery work?", answer: "BillsBook generates a clean vector PDF invoice using Dompdf and automatically triggers a WhatsApp message containing invoice details and a secure download link directly to the customer's phone." },
      { question: "Does BillsBook support GST and non-GST businesses?", answer: "Yes. You can configure CGST, SGST, IGST tax slabs with HSN/SAC codes, or run in composite/non-GST mode for small retail operations." }
    ]
  },
  {
    id: "filterbook",
    slug: "filterbook",
    seo: {
          "title": "FilterBook: RO Water Purifier Service CRM & AMC App",
          "description": "FilterBook is a CRM and mobile app for RO water purifier businesses: filter service reminders, AMC renewals, technician dispatch and a QR complaint portal.",
          "primaryKeyword": "water purifier service management software",
          "keywords": [
                "RO service software",
                "water purifier CRM",
                "water purifier service management app",
                "AMC management software",
                "RO AMC software",
                "water filter service app",
                "RO dealer software",
                "technician dispatch app",
                "water purifier billing software",
                "QR complaint system",
                "water purifier business software India"
          ],
          "introHeading": "Service software for RO and water purifier businesses",
          "intro": "Running a water purifier or RO service business? FilterBook schedules filter and membrane services automatically, tracks AMC contracts, assigns technicians and lets customers raise a complaint by scanning a QR code on the purifier. It also sends GST invoices and renewal reminders on WhatsApp. Built by Vision Technolabs, Ahmedabad.",
          "audience": [
                "RO and water purifier dealers",
                "AMC and service providers",
                "Franchise and dealer networks",
                "Field service technicians"
          ],
          "os": "Android, iOS"
    },
    number: "02",
    title: "FilterBook — RO Purifier CRM & Service Management Platform",
    shortTitle: "FilterBook",
    badge: "Field Service CRM",
    tag: "RO Water Purifier SaaS",
    category: "Field Operations & Mobility",
    rating: "4.9★",
    reviewsCount: "120+ Service Providers",
    icon: "i-refresh",
    gradient: "linear-gradient(135deg,#0284c7,#1d4ed8)",
    tagline: "Automated maintenance schedules, QR complaint resolution, AMC renewal tracking, and WhatsApp billing.",
    shortDescription: "Connected 4-in-1 service ecosystem built for RO water purifier businesses: React Native mobile app, vendor web admin panel, super admin console, and zero-login customer QR portals.",
    description: "FilterBook is an end-to-end CRM and field service management platform built specifically for water purifier sales, installation, and AMC service providers. When an order is registered, FilterBook automatically computes recurring filter change dates, renders itemized A4 invoices via TCPDF, delivers them via Meta WhatsApp Cloud API, and lets customers lodge complaints in under 60 seconds via purifier QR stickers.",
    heroSubtitle: "Complete mobile app, web admin console, and QR customer portal suite: automated AMC renewals, technician dispatch, and instant WhatsApp billing.",
    pricing: "Turnkey Platform · Mobile App + Web Admin",
    liveDemoUrl: "https://play.google.com/store/apps/details?id=com.visiontechnolabs.filterbook",
    image: "/app_images/Filterbook/filterbook-ro-service-crm-app-vision-technolabs.webp",
    imageAlt: "FilterBook RO purifier technician CRM and service management mobile application by Vision Technolabs in Ahmedabad.",
    metrics: [
      { value: "4-in-1", label: "App, Web, Admin & QR" },
      { value: "100%", label: "Auto Service Schedules" },
      { value: "<1 min", label: "QR Complaint Logging" },
      { value: "Instant", label: "WhatsApp PDF Invoices" }
    ],
    features: [
      {
        title: "Automated Recurring Maintenance Engine",
        description: "Calculates upcoming sediment, pre-carbon, RO membrane, and post-carbon filter replacement dates automatically from the installation date with cron push reminders.",
        points: ["30, 90, 180 & 365-day service scheduling", "Automated customer SMS/WhatsApp reminders", "Technician assignment and status tracking"]
      },
      {
        title: "Zero-Login QR Complaint Portal",
        description: "Custom QR code stickers placed on purifiers allow customers to scan, upload fault photos, and submit service complaints in under 60 seconds without installing an app.",
        points: ["Instant push notification to shop owner", "Unique QR identifier linked to customer record", "Live ticket status tracking for buyers"]
      },
      {
        title: "AMC Contract Lifecycle Management",
        description: "Comprehensive Annual Maintenance Contract management with contract validity monitoring, covered parts checklists, duplicate prevention, and renewal alerts.",
        points: ["Comprehensive vs Service-only contract options", "Audit trail of every service visit performed", "Automated renewal alerts before contract expiry"]
      },
      {
        title: "TCPDF WhatsApp Invoicing & Digital Catalogue",
        description: "Generates itemized A4 PDF invoices with upcoming service schedules embedded, delivered instantly to customer WhatsApp numbers alongside a digital product catalogue.",
        points: ["Meta WhatsApp Cloud API integration", "Shareable digital product catalogue with QR", "Payment receipt and GST invoice records"]
      }
    ],
    deploymentOptions: [
      {
        title: "Vendor SaaS Subscription",
        description: "Ready-to-use mobile app (Android & iOS) and web vendor console with cloud hosting, push notifications, and automatic WhatsApp messaging.",
        badge: "Plug & Play"
      },
      {
        title: "Multi-Tenant Franchise / Dealer Edition",
        description: "Super admin governance allowing master distributors or manufacturers to manage hundreds of independent RO service franchise locations.",
        badge: "Enterprise"
      },
      {
        title: "Source Code & Custom Brand Deployment",
        description: "Full intellectual property buyout including React Native Expo source code, CodeIgniter backend, MySQL database, and store deployment.",
        badge: "Full IP"
      }
    ],
    techStack: ["React Native (Expo)", "PHP 8.x", "CodeIgniter 3 MVC", "MySQL / MariaDB", "Meta WhatsApp Cloud API", "TCPDF", "Firebase Cloud Messaging", "Bootstrap 5.3"],
    workflow: [
      { step: "01", title: "Customer & Machine Registration", desc: "Log purifier sales, model details, membrane types, and warranty or AMC dates." },
      { step: "02", title: "Auto-Generate Service Cycles", desc: "FilterBook computes 3-month, 6-month, and annual filter service milestones automatically." },
      { step: "03", title: "QR Sticker Deployment", desc: "Affix a unique QR code to the purifier for zero-login customer complaint lodging." },
      { step: "04", title: "WhatsApp Billing & AMC Renewals", desc: "Send branded PDF bills to WhatsApp and receive automated renewal alerts before contracts expire." }
    ],
    advantages: [
      { title: "Recovers Lost AMC Revenue", desc: "Stops customers from forgetting renewals or switching to competitors when contracts expire." },
      { title: "Zero Paperwork for Field Technicians", desc: "Technicians view daily assigned service calls and update job statuses directly from their smartphones." },
      { title: "Sub-Minute Complaint Logging", desc: "Customers avoid phone hold times by scanning their purifier QR code to register immediate service tickets." },
      { title: "Builds High Customer Trust", desc: "Automated WhatsApp invoices and scheduled service visits establish a professional, brand-name experience." }
    ],
    faqs: [
      { question: "Do customers need to download an app to register a service complaint?", answer: "No! Customers simply scan the QR sticker on their water purifier with any smartphone camera, opening a fast web page where they can submit complaints and photos in under a minute." },
      { question: "Is FilterBook available on both Android and iOS?", answer: "Yes. The FilterBook technician and vendor app is built with React Native (Expo) and runs smoothly on both Android and iOS devices." },
      { question: "Can we track Annual Maintenance Contracts (AMCs) with different service terms?", answer: "Yes. FilterBook supports both Comprehensive AMCs (including filter and motor replacements) and Service-Only AMCs, complete with automatic visit quotas and expiry alerts." }
    ]
  },
  {
    id: "tripsbook",
    slug: "tripsbook",
    seo: {
          "title": "TripsBook: Fleet, Driver Trip & Fuel Management App",
          "description": "TripsBook is a fleet management app for cab operators and rental agencies: GPS trip logging, fuel expense tracking, duty slips and monthly log sheet PDFs.",
          "primaryKeyword": "fleet management app",
          "keywords": [
                "fleet management software",
                "cab operator software",
                "driver trip management app",
                "fuel management app",
                "duty slip app",
                "vehicle log sheet software",
                "taxi fleet management app India",
                "car rental management software",
                "GPS trip tracking app",
                "fuel expense tracker for fleet"
          ],
          "introHeading": "Fleet and driver trip management for cab and rental businesses",
          "intro": "Need a fleet management app for your cabs, corporate vehicles or rental business? TripsBook lets drivers log trips with GPS, record fuel and toll expenses with receipt photos, and generate A4 duty slips and monthly vehicle log sheets as PDFs. It supports petrol, diesel, CNG, LPG and electric vehicles. Built by Vision Technolabs, Ahmedabad.",
          "audience": [
                "Commercial cab operators",
                "Corporate fleets",
                "Car rental agencies",
                "Drivers and dispatchers"
          ],
          "os": "Android, iOS"
    },
    number: "03",
    title: "TripsBook — Fleet, Driver Trip & Fuel Management Mobile App",
    shortTitle: "TripsBook",
    badge: "Fleet & Mobility App",
    tag: "Driver Trip & Fuel ERP",
    category: "Field Operations & Mobility",
    rating: "4.9★",
    reviewsCount: "95+ Fleet Operators",
    icon: "i-truck",
    gradient: "linear-gradient(135deg,#0f172a,#2563eb)",
    tagline: "Dual Fix Cab & On-Call trip modes, 10-second GPS telemetry, multi-fuel expense audits, and instant A4 PDF duty slips.",
    shortDescription: "Mobile-first fleet and driver operations platform for commercial cab operators, corporate fleets, and rental agencies: live GPS trip logging, fuel expense tracking, and on-device PDF duty slips.",
    description: "TripsBook is a modern mobile application engineered by Vision Technolabs using React Native 0.81 and Expo SDK 54. It replaces handwritten paper duty slips and loose fuel receipts with a streamlined digital workflow: drivers log Fix Cab and On Call duties, dispatchers track active trips with 10-second GPS pings, multi-fuel receipts are audited against odometer logs, and print-ready A4 Duty Slips are generated straight from the phone.",
    heroSubtitle: "Cross-platform mobile app and fleet dashboard: automatic reverse-geocoded pickup detection, live GPS tracking, fuel expense management, and instant PDF duty slips.",
    pricing: "Turnkey Mobile App · White-Label Ready",
    liveDemoUrl: "https://play.google.com/store/apps/details?id=com.visiontechnolabs.tripsbook",
    image: "/app_images/Tripsbook/tripsbook-fleet-trip-management-app-vision-technolabs.webp",
    imageAlt: "TripsBook fleet logistics, driver trip logging, and fuel tracking mobile application by Vision Technolabs in Ahmedabad.",
    metrics: [
      { value: "2 Modes", label: "Fix Cab & On Call Trips" },
      { value: "10 sec", label: "Live GPS Telemetry" },
      { value: "5 Fuels", label: "Multi-Fuel Audit" },
      { value: "Instant", label: "A4 PDF Duty Slips" }
    ],
    features: [
      {
        title: "Dual Fix Cab & On-Call Trip Logging",
        description: "Supports fixed corporate daily commute routes (Fix Cab) as well as charter and on-demand duties (On Call) with automatic night-halt and toll calculations.",
        points: ["Point-to-point Fix Cab routes", "Charter & outstation On-Call duties", "Automatic overnight duration and allowance computation"]
      },
      {
        title: "GPS Telemetry & Auto Pickup Detection",
        description: "Utilizes expo-location and Google Maps Reverse Geocoding API to detect driver pickup and drop locations automatically with 10-second foreground coordinate pings.",
        points: ["Sub-meter GPS pickup reverse-geocoding", "10-second live location dispatch telemetry", "Strict odometer validation preventing entry errors"]
      },
      {
        title: "On-Device A4 Duty Slip & Log Sheet PDFs",
        description: "Generates branded A4 Duty Slips and Monthly Vehicle Log Sheets instantly on the device via expo-print with digital driver signatures and sharing via WhatsApp.",
        points: ["Print-ready vector A4 Duty Slip PDFs", "Monthly vehicle log sheets with total km and hours", "One-tap PDF sharing via WhatsApp or email"]
      },
      {
        title: "5-Type Fuel & Expense Auditor",
        description: "Track and verify fuel expenses across Petrol, Diesel, CNG, Electric, and LPG with attached receipt photos linked directly to odometer readings for mileage audit.",
        points: ["Odometer-linked mileage calculation (Km/L, Km/Kg, Km/kWh)", "Receipt photo capture with camera integration", "Toll, parking, and driver DA expense categorization"]
      }
    ],
    deploymentOptions: [
      {
        title: "Turnkey Mobile App (Android & iOS)",
        description: "Deploy TripsBook on Google Play Store and Apple App Store with your company branding, custom splash screen, and fleet admin credentials.",
        badge: "Ready to Launch"
      },
      {
        title: "Fleet Operator Cloud License",
        description: "Cloud dispatch web panel paired with mobile apps, supporting real-time fleet map monitoring, driver settlements, and billing exports.",
        badge: "Fleet Ops"
      },
      {
        title: "Full Source Code Buyout",
        description: "100% intellectual property ownership: React Native (Expo) frontend codebase, Node/PHP REST API backend, and database scripts.",
        badge: "Source Code"
      }
    ],
    techStack: ["React Native 0.81", "Expo SDK 54 & React 19", "React Navigation 7", "expo-location", "expo-print & expo-sharing", "Google Maps Geocoding API", "RESTful Backend"],
    workflow: [
      { step: "01", title: "Driver & Fleet Setup", desc: "Onboard commercial vehicles, fuel types, and register drivers with fleet admin codes." },
      { step: "02", title: "Trip Initiation & GPS Lock", desc: "Driver starts Fix Cab or On Call trip; GPS reverse-geocodes pickup location and initial odometer." },
      { step: "03", title: "Live Tracking & Fuel Receipts", desc: "Active GPS coordinates stream to dispatch; drivers log fuel and toll expenses with photo receipts." },
      { step: "04", title: "Instant A4 Duty Slip Generation", desc: "Upon trip completion, total km and duration are calculated and shared as a print-ready A4 PDF." }
    ],
    advantages: [
      { title: "Zero Billing Disputes with Corporate Clients", desc: "Clear GPS timestamps, start/end odometer entries, and automated distance calculations prevent disputes." },
      { title: "Eliminates Lost Fuel Receipts", desc: "Drivers take photos of fuel bills at the pump, immediately linking liters/kg and costs to vehicle odometers." },
      { title: "Saves Days on Monthly Log Sheets", desc: "Replaces painful manual spreadsheet tallying with instant monthly vehicle log sheet PDF exports." },
      { title: "Real-Time Fleet Dispatch Visibility", desc: "Dispatchers know exactly which vehicles are active, their current location, and driver status." }
    ],
    faqs: [
      { question: "Can drivers generate duty slips without internet access?", answer: "Yes. TripsBook stores trip and odometer records locally on the device using SQLite/AsyncStorage and generates print-ready A4 PDF duty slips even when offline, syncing data once connection is restored." },
      { question: "Does TripsBook support electric (EV) and CNG vehicles?", answer: "Yes. TripsBook features full auditing across Petrol, Diesel, CNG, Electric (kWh), and LPG vehicles, computing mileage metrics tailored to each fuel type." },
      { question: "How does TripsBook handle corporate client billing?", answer: "TripsBook compiles all trips into Monthly Vehicle Log Sheets with total kilometers, driving hours, toll charges, and driver allowances, formatted for instant corporate invoicing." }
    ]
  },
  {
    id: "sitedesk",
    slug: "sitedesk",
    seo: {
          "title": "SiteDesk: Real Estate Plot Sales & EMI Tracking App",
          "description": "SiteDesk is a real estate CRM and ERP for plot developers: live plot inventory, EMI ledger and reminders, dastavej tracking and site expense logging.",
          "primaryKeyword": "real estate CRM software",
          "keywords": [
                "real estate CRM software",
                "plot booking software",
                "real estate ERP",
                "EMI tracking software",
                "land developer software",
                "plot inventory management",
                "real estate management app India",
                "site management app",
                "real estate sales CRM",
                "dastavej tracker"
          ],
          "introHeading": "Plot sales, EMI tracking and site management for real estate developers",
          "intro": "Selling plots and tracking monthly installments in spreadsheets? SiteDesk gives layout developers and sales teams live plot availability, a cash and EMI ledger, three-stage payment reminders, a sale-deed (dastavej) tracker and field expense logging in one mobile app. Built by Vision Technolabs, Ahmedabad.",
          "audience": [
                "Real estate and layout developers",
                "Plot sales teams and agents",
                "Site managers",
                "Accounts and back-office staff"
          ],
          "os": "Android"
    },
    number: "04",
    title: "SiteDesk — Real Estate Plot Sales, EMI Tracking & Site Management ERP",
    shortTitle: "SiteDesk",
    badge: "Real Estate ERP",
    tag: "Plot Sales & EMI Platform",
    category: "Business & Billing SaaS",
    rating: "4.9★",
    reviewsCount: "110+ Land Developers",
    icon: "i-home",
    gradient: "linear-gradient(135deg,#0d9488,#0f172a)",
    tagline: "Assigned site plot availability maps, buyer cash/EMI installment ledgers, dastavej registry tracking, and selfie attendance.",
    shortDescription: "Mobile-first operations platform for real estate layout developers and plot sales teams: live plot availability filtering, flexible installment ledgers, automated push reminders, and site expense logging.",
    description: "SiteDesk is an all-in-one mobile operations ERP built specifically for real estate developers who sell plotting schemes across multiple layout sites. Field sales teams see their assigned sites with real-time available and sold plots, onboard buyers with Aadhaar documentation, configure cash or monthly EMI plans, log installments with duplicate protection, record dastavej registry numbers, log site expenses, and mark selfie attendance.",
    heroSubtitle: "Mobile ERP app and 40-endpoint REST API: multi-site plot inventory, 3-stage automated EMI alert engine, dastavej registry vault, and field CRM.",
    pricing: "Turnkey Mobile App + Cloud REST Backend",
    liveDemoUrl: "https://play.google.com/store/apps/details?id=com.visiontechnolabs.sitedesk",
    image: "/app_images/Sitedesk/sitedesk-real-estate-crm-app-vision-technolabs.webp",
    imageAlt: "SiteDesk real estate plot sales, customer EMI tracking, and site management ERP by Vision Technolabs in Ahmedabad.",
    metrics: [
      { value: "40", label: "REST API Endpoints" },
      { value: "25+", label: "Relational DB Tables" },
      { value: "3-Stage", label: "Auto EMI Push Alerts" },
      { value: "100%", label: "Site-Scoped Access" }
    ],
    features: [
      {
        title: "Assigned-Site & Live Plot Inventory Engine",
        description: "Real-time filtering of layout plots by status (Available, Booked, Sold) with interactive layout maps, scoping access strictly to each staff member's assigned sites.",
        points: ["Interactive layout map with color-coded plot statuses", "Strict staff site-scoping permissions", "Instant plot reservation preventing double-selling"]
      },
      {
        title: "Buyer Cash & Multi-Month EMI Ledger",
        description: "Flexible payment plan configuration supporting upfront Cash, Part-Cash, and monthly EMI installments with duplicate payment protection and digital receipts.",
        points: ["Custom down payment & installment tenure (12 to 60 months)", "Automated interest and balance recalculation", "Printable installment receipts with buyer transaction history"]
      },
      {
        title: "3-Stage Automated EMI Reminder Engine",
        description: "Server cron engine that dispatches automated push notifications and WhatsApp reminders 3 days before payment due date, on the due date, and when overdue.",
        points: ["3 days prior warning notification", "Due-date reminder with payment link", "Overdue alerts with outstanding interest calculation"]
      },
      {
        title: "Dastavej Registry Tracker & Document Vault",
        description: "Secure multi-format vault (up to 4 MB) for storing sale-deed (dastavej) registry numbers, sub-registrar dates, buyer Aadhaar cards, and layout blue-prints.",
        points: ["Sale-deed (dastavej) registration tracking", "Encrypted storage for buyer KYC and registry files", "Field site expense logging with receipt verification"]
      }
    ],
    deploymentOptions: [
      {
        title: "Developer Organization License",
        description: "Turnkey mobile app for Android and iOS paired with cloud REST backend, configured for your real estate development firm.",
        badge: "Developer Choice"
      },
      {
        title: "Multi-Company Real Estate Portal",
        description: "Super admin architecture enabling land development groups and property brokerages to manage multiple independent real estate firms.",
        badge: "Enterprise"
      },
      {
        title: "Full Source Code & Database Ownership",
        description: "Complete Expo React Native frontend and 40-endpoint CodeIgniter 3 REST backend (~4,600 lines) with 25+ MySQL relational tables.",
        badge: "100% IP Buyout"
      }
    ],
    techStack: ["React Native (Expo)", "PHP & CodeIgniter 3", "MySQL / MariaDB", "JWT Token Blacklist Security", "Expo Push Notifications", "SMS OTP Gateway", "Multipart Document Vault"],
    workflow: [
      { step: "01", title: "Layout & Plot Master Setup", desc: "Upload site layouts, plot numbers, dimensions in sq. yards/feet, and base pricing." },
      { step: "02", title: "Assign Sites to Sales Agents", desc: "Sales staff log in via mobile OTP and access strictly their assigned project sites." },
      { step: "03", title: "Register Buyer & Configure Plan", desc: "Book plots, record down payments, and generate monthly Cash/EMI installment schedules." },
      { step: "04", title: "Automate Reminders & Dastavej", desc: "Cron jobs trigger automated EMI alerts; log sale-deed registry documents upon final settlement." }
    ],
    advantages: [
      { title: "Zero Double-Booking of Plots", desc: "Live plot inventory synchronization ensures that once a plot is reserved, it cannot be booked by another agent." },
      { title: "Drastic Reduction in Overdue EMIs", desc: "Automated 3-stage push notifications and WhatsApp reminders keep buyers punctual with monthly installments." },
      { title: "Dastavej Paperwork Always at Hand", desc: "Sale deed numbers and registration dates are linked directly to plot records, eliminating misplaced registry files." },
      { title: "Verified Field Staff Attendance & Expenses", desc: "Selfie attendance with GPS location and receipt-backed expense logging keep management in total control." }
    ],
    faqs: [
      { question: "Can sales agents see other sites or unauthorized buyer financials?", answer: "No. SiteDesk implements strict role-based and site-scoped access control. Sales staff can only view plots, buyers, and inquiries for the specific development sites assigned to them by management." },
      { question: "How does SiteDesk handle buyers who want to pay in monthly installments?", answer: "When creating a booking, you select the EMI payment plan, enter the down payment, and specify the number of months. SiteDesk generates a monthly installment ledger, tracks payments, and sends automatic reminder notifications." },
      { question: "Can we attach photos and PDF copies of sale deeds (dastavej)?", answer: "Yes. SiteDesk includes a secure document vault that supports JPG, PNG, and PDF files up to 4 MB for storing buyer KYC, payment receipts, and registered dastavej documents." }
    ]
  }
];

export function getProductBySlug(slug) {
  if (!slug) return null;
  const normalized = String(slug).toLowerCase().trim();
  const directMatch = productsData.find(
    (prod) => prod.slug === normalized || prod.id === normalized
  );
  if (directMatch) return directMatch;

  // Aliases and legacy mappings to ensure zero 404s
  const slugAliases = {
    "billbook": "billsbook",
    "bill-book": "billsbook",
    "filter-book": "filterbook",
    "tripbook": "tripsbook",
    "trips-book": "tripsbook",
    "site-desk": "sitedesk",
    "sidedesk": "sitedesk",
    "lumez-ai": "billsbook",
    "reach-o": "filterbook",
    "mspl-store-locator": "billsbook",
    "cookie-shield": "sitedesk",
    "make-model-year-search": "tripsbook",
    "hotel-management-system": "billsbook",
    "solar-epc-platform": "filterbook",
    "on-demand-taxi-suite": "tripsbook",
    "telemedicine-suite": "filterbook"
  };

  if (slugAliases[normalized]) {
    return (
      productsData.find((p) => p.slug === slugAliases[normalized]) ||
      productsData[0]
    );
  }

  return null;
}
