export type Project = {
  slug:string; name:string;category:string;stage:string;accent:string;serial:string;eyebrow:string;year:string;
  summary:string;challenge:string;approach:string;features:string[];stack:string[];
  repo:string;live?:string;mockup:string;note:string;
};
export const projects: Project[] = [
  {
    "slug": "watsstore",
    "name": "WatsStore",
    "category": "COMMERCE / SAAS",
    "stage": "Live website",
    "accent": "#78edb9",
    "serial": "01",
    "eyebrow": "WhatsApp-first storefront platform",
    "year": "2026",
    "summary": "A storefront builder for merchants in Egypt, connecting product discovery and catalog browsing to structured WhatsApp checkout conversations.",
    "challenge": "Many merchants want an approachable storefront without forcing their customers into a complex checkout flow.",
    "approach": "Design the shopping experience around Arabic-first catalogs, mobile product discovery, and a WhatsApp handoff that carries the order details.",
    "features": [
      "Merchant-focused storefront and catalog",
      "WhatsApp-oriented checkout journey",
      "Arabic-first, right-to-left user experience",
      "Responsive Next.js frontend backed by ASP.NET Core APIs"
    ],
    "stack": [
      "Next.js",
      "React",
      "TypeScript",
      "ASP.NET Core",
      "Database",
      "WhatsApp"
    ],
    "repo": "https://github.com/AbdallahSay/watsstore-saas",
    "live": "https://frontend-bay-ten-58.vercel.app/",
    "mockup": "INTERACTIVE COMMERCE EXPERIENCE",
    "note": "A real public site is linked. Visuals shown in this portfolio are art-directed illustrations, not production screenshots."
  },
  {
    "slug": "nabra-studio",
    "name": "Nabra Studio",
    "category": "AI / CREATIVE TOOLS",
    "stage": "GitHub project",
    "accent": "#b9a0ff",
    "serial": "02",
    "eyebrow": "Creative audio meets AI",
    "year": "2026",
    "summary": "A creative sound workspace exploring audio transcription, voice production, ad-script generation, and feedback workflows.",
    "challenge": "Voice creators and marketing teams often move between multiple disconnected tools before content is ready for review.",
    "approach": "Bring transcription, creative copy and review tools into a unified, easy-to-navigate studio concept.",
    "features": [
      "Audio transcription workflow",
      "Egyptian voice studio interface",
      "Ad-script generation tools",
      "Team review and shared feedback flow"
    ],
    "stack": [
      "React",
      "TypeScript",
      "Vite",
      "Google GenAI",
      "Node.js"
    ],
    "repo": "https://github.com/AbdallahSay/Nabra",
    "mockup": "AI VOICE & CONTENT LAB",
    "note": "Project capabilities are based on reviewed source and are not claims about public production availability."
  },
  {
    "slug": "factorypulse",
    "name": "FactoryPulse",
    "category": "INDUSTRIAL / SAAS",
    "stage": "In development",
    "accent": "#c9f677",
    "serial": "03",
    "eyebrow": "Operational clarity for factories",
    "year": "2026",
    "summary": "A factory-monitoring SaaS foundation that treats Excel, OneDrive and other sources as adapters, not as the product itself.",
    "challenge": "Operational data can be fragmented across workbooks and departments, slowing daily reporting and customer statement workflows.",
    "approach": "Use a layered service architecture to normalize inputs and surface production indicators, statements and safer notification flows.",
    "features": [
      "Configurable Excel data import",
      "Customer statement previews and batch views",
      "Operational dashboards and KPI workflows",
      "Stable customer identities and sending safety gates"
    ],
    "stack": [
      "ASP.NET Core",
      "C#",
      "Entity Framework Core",
      "Excel / OneDrive",
      "Clean Architecture"
    ],
    "repo": "https://github.com/AbdallahSay/FactoryPulse",
    "mockup": "FACTORY OPERATIONS PLATFORM",
    "note": "The repository describes a development-stage foundation; live enterprise capabilities are not implied."
  },
  {
    "slug": "digital-menu",
    "name": "Digital Menu SaaS",
    "category": "HOSPITALITY / SAAS",
    "stage": "In development",
    "accent": "#ffd0aa",
    "serial": "04",
    "eyebrow": "QR-powered restaurant menus",
    "year": "2026",
    "summary": "A multi-restaurant SaaS for view-only digital menus, with stable QR entry points and restaurant-managed menu content.",
    "challenge": "Restaurants need to change products and prices while avoiding the overhead of constantly reprinting menus.",
    "approach": "Focus the first product milestone on discoverable, mobile-first menus with tenant separation, admin workflows and reliable public routes.",
    "features": [
      "Restaurant and owner management foundation",
      "QR entry to public restaurant menus",
      "Arabic-first RTL design with optional English",
      "Publishable menu categories, items and imagery"
    ],
    "stack": [
      "Angular",
      "TypeScript",
      ".NET 10",
      "SQL Server",
      "QR"
    ],
    "repo": "https://github.com/AbdallahSay/digital-menu-saas",
    "mockup": "A MENU THAT MOVES WITH YOU",
    "note": "Ordering and payments are explicitly outside the initial view-only MVP."
  },
  {
    "slug": "bab-al-hara",
    "name": "Bab Al Hara",
    "category": "RESTAURANT / OPERATIONS",
    "stage": "In development",
    "accent": "#ffb079",
    "serial": "05",
    "eyebrow": "Restaurant ordering and kitchen flow",
    "year": "2026",
    "summary": "A bilingual restaurant platform connecting a guest shopping journey to a protected real-time kitchen queue.",
    "challenge": "A restaurant ordering flow has to connect the customer experience to the people preparing each order.",
    "approach": "Build a first vertical slice from catalog and cart through checkout and authenticated kitchen handling.",
    "features": [
      "Arabic and English customer menus",
      "Persistent cart and guest cash checkout",
      "SQL Server order persistence",
      "Authenticated live kitchen queue"
    ],
    "stack": [
      "Angular",
      "ASP.NET Core",
      ".NET 10",
      "SQL Server",
      "EF Core"
    ],
    "repo": "https://github.com/AbdallahSay/bab-al-hara-restaurant-platform",
    "mockup": "CUSTOMER TO KITCHEN",
    "note": "The GitHub README describes a completed initial vertical slice, not a fully launched platform."
  },
  {
    "slug": "quote-generator",
    "name": "Factory Quote Generator",
    "category": "DOCUMENTS / AUTOMATION",
    "stage": "GitHub project",
    "accent": "#97bdff",
    "serial": "06",
    "eyebrow": "Industrial sales documents",
    "year": "2026",
    "summary": "A document-generation workflow built around editable quotation templates, PDF delivery and the traceability of sales operations.",
    "challenge": "Sales teams need to produce consistent quotations quickly without losing the layout of the original document templates.",
    "approach": "Connect a lightweight front-end to backend OpenXML document processing, PDF generation and audit-friendly records.",
    "features": [
      "Template-driven Word documents",
      "PDF quotation generation",
      "Admin management and audit workflows",
      "Automated build/deployment through GitHub Actions"
    ],
    "stack": [
      "ASP.NET Core",
      "C#",
      "OpenXML",
      "PDF",
      "SQL Server",
      "GitHub Actions"
    ],
    "repo": "https://github.com/AbdallahSay/factory-quote-generator",
    "mockup": "DOCUMENT GENERATION SYSTEM",
    "note": "Exact production behavior should be checked in the live environment before sharing sensitive examples."
  },
  {
    "slug": "paperform",
    "name": "Paperform",
    "category": "DOCUMENT / EDITOR",
    "stage": "GitHub project",
    "accent": "#d5a8ff",
    "serial": "07",
    "eyebrow": "Bilingual document workspace",
    "year": "2026",
    "summary": "A private, in-browser editor for importing PDFs, working across pages, editing text and exporting document formats.",
    "challenge": "People working across Arabic and English documents need practical editing controls without pushing their files through a remote backend.",
    "approach": "Use browser-based document tools with local persistence and explicit RTL/LTR controls.",
    "features": [
      "PDF import and page operations",
      "Rich-text editing with bilingual alignment",
      "Browser-local autosave and templates",
      "PDF, Word and PowerPoint export"
    ],
    "stack": [
      "React",
      "Vite",
      "TypeScript",
      "Tiptap",
      "PDF.js",
      "IndexedDB"
    ],
    "repo": "https://github.com/AbdallahSay/pdf-template-editor",
    "mockup": "EDIT THE DOCUMENT. OWN THE FILE.",
    "note": "The project README identifies this as a frontend-only application with local document storage."
  },
  {
    "slug": "pharmacy-api",
    "name": "Pharmacy Management API",
    "category": "BACKEND / SYSTEMS",
    "stage": "GitHub project",
    "accent": "#99dfe7",
    "serial": "08",
    "eyebrow": "Inventory and sales services",
    "year": "2026",
    "summary": "A secure pharmacy-management API for medicine inventory, expiry handling, sales records and operational reports.",
    "challenge": "Inventory and medicine expiry tracking need clear business rules and dependable access control.",
    "approach": "Structure the backend with separated domain, application and infrastructure layers and secure role-based access.",
    "features": [
      "JWT authentication and roles",
      "Medicine catalog and expiry tracking",
      "Sales invoices and inventory movements",
      "Reporting and low-stock alerts"
    ],
    "stack": [
      "ASP.NET Core 9",
      "EF Core",
      "SQL Server",
      "JWT",
      "Clean Architecture"
    ],
    "repo": "https://github.com/AbdallahSay/pharmacy-management-system",
    "mockup": "SECURE OPERATIONS API",
    "note": "This work demonstrates backend engineering; no public storefront or UI is claimed."
  },
  {
    "slug": "teacheros",
    "name": "TeacherOS",
    "category": "EDUCATION / SAAS",
    "stage": "Foundation stage",
    "accent": "#ffda95",
    "serial": "09",
    "eyebrow": "Architecture for education software",
    "year": "2026",
    "summary": "A multi-tenant SaaS backend foundation for educators and centers, focused on architecture and tenancy before feature expansion.",
    "challenge": "Education SaaS products need a clear architecture and tenant boundaries before adding complex product modules.",
    "approach": "Prioritize Clean Architecture, explicit dependency rules, robust service contracts and the groundwork for identity and persistence.",
    "features": [
      "Modular monolith architecture",
      "Domain / application / infrastructure boundaries",
      "SQL Server and EF Core persistence foundation",
      "Architecture tests and operational health checks"
    ],
    "stack": [
      ".NET 10",
      "C#",
      "EF Core",
      "SQL Server",
      "xUnit"
    ],
    "repo": "https://github.com/AbdallahSay/TeacherOs",
    "mockup": "THE FOUNDATION COMES FIRST",
    "note": "Student, attendance, subscription and messaging features are not implemented in this foundation stage."
  }
] as Project[];
export const findProject = (slug:string) => projects.find(project => project.slug===slug);
