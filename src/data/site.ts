/* ─────────────────────────────────────────────────────────────
   Site content — single source of truth for all portfolio data.
   Edit this file to update your portfolio content.
   ───────────────────────────────────────────────────────────── */

export const site = {
  name: "John Carlo Bartolome",
  title: "Web/Software Developer",
  tagline:
    "IT professional with hands-on experience in web development, system maintenance, and technical troubleshooting — from the interface to production.",
  email: "johncarlobartolome02@gmail.com",
  phone: "+63 977 0369 172",
  links: {
    github: "#",
    linkedin: "#",
    resume: "#",
  },
} as const;

export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  href: string | null;
  featured: boolean;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Insight Payroll",
    category: "Cloud Payroll & HRIS",
    description:
      "Our own SaaS product. Philippine payroll with BIR TRAIN-law tax, SSS, PhilHealth and Pag-IBIG remittances, biometric attendance, and an employee self-service portal.",
    tech: ["Laravel", "Alpine.js", "Tailwind CSS", "MySQL"],
    href: "https://insightpayroll.com.ph",
    featured: true,
    image: "/projects/insight-payroll.jpg",
  },
  {
    title: "City of Batac",
    category: "Local Government Website",
    description:
      "Official website of the City Government of Batac, Ilocos Norte: city profile, government directory, calendar of activities, and downloadable government forms.",
    tech: ["WordPress", "PHP", "MySQL"],
    href: "https://batac.gov.ph",
    featured: true,
    image: "/projects/batac-gov.jpg",
  },
  {
    title: "JPG Accounting",
    category: "Accounting Firm Website",
    description:
      "Company website for a tax and accounting firm, with service pages, team profiles, inquiry forms, and online appointment booking.",
    tech: ["WordPress", "Elementor"],
    href: "https://jpgac.com",
    featured: true,
    image: "/projects/jpgac.jpg",
  },
  {
    title: "BIR Converter",
    category: "BIR Compliance Tool",
    description:
      "Converts Excel spreadsheets to BIR-compliant DAT files for RELIEF and Alphalist Data Entry esubmission. Upload, convert, and download — no manual data entry needed.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://www.birconverter.com",
    featured: false,
    image: "/projects/bir-converter.jpg",
  },
];

export const caseStudy = {
  title: "Insight Payroll",
  url: "https://insightpayroll.com.ph/",
  problem:
    "Payroll processing was handled manually — attendance tracking, leave management, overtime computation, and payroll calculation ran through disconnected spreadsheets and paper forms. This caused delays, errors, and unnecessary overhead for both HR and employees.",
  solution:
    "Insight Payroll centralizes employee management, attendance tracking, and payroll computation into a single platform. Employees file requests directly in the system. Administrators manage approvals and compute payroll from the same data — eliminating the gap between records and computation.",
  empFeatures: [
    "Clock in / clock out",
    "Attendance records",
    "Digital payslips",
    "Leave filing",
    "Overtime filing",
    "Correction requests",
    "Employee information",
  ],
  adminFeatures: [
    "Employee records",
    "Leave & overtime approvals",
    "Attendance-based payroll",
    "Workflow management",
    "Data administration",
  ],
  role: "Handled the complete lifecycle from requirements gathering and database design through interface design, development, testing, production deployment, and ongoing maintenance.",
  tech: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
  hosting:
    "Deployed and hosted on Hostinger. Production system with active users.",
} as const;

export interface Experience {
  title: string;
  period: string;
  summary: string;
  tags: string[];
}

export const experience: Experience[] = [
  {
    title: "Web/Software Developer — IManila",
    period: "August 2025 – September 2026",
    summary:
      "Developed, maintained, and improved company websites and web-based systems using PHP, MySQL, and CakePHP/MVC. Maintained and troubleshot a database-driven HRIS, resolved CRUD operation issues, and independently handled varied web development, IT support, and system-maintenance tasks.",
    tags: [
      "PHP",
      "MySQL",
      "CakePHP",
      "MVC",
      "HRIS",
      "Claude AI",
    ],
  },
  {
    title: "E-commerce Virtual Assistant — Trendysavers",
    period: "June 2022 – December 2024",
    summary:
      "Managed and updated eBay product listings, created optimized titles, descriptions, and product images using Adobe Photoshop. Organized product information and maintained accurate records for jewelry and photobook products.",
    tags: [
      "eBay",
      "Adobe Photoshop",
      "Product management",
    ],
  },
  {
    title: "IT Intern — Provincial Governor's Office",
    period: "486 hours — Tarlac Provincial Hospital",
    summary:
      "Supported computer-based administrative operations, data entry, and document management using Microsoft Excel. Helped personnel manage digital records and maintained organized documentation.",
    tags: [
      "Microsoft Excel",
      "Data entry",
      "Document management",
    ],
  },
];

export const skills: Record<string, string[]> = {
  "Web Development": ["HTML", "CSS", "PHP", "JavaScript", "CakePHP", "MVC"],
  Database: ["MySQL", "phpMyAdmin"],
  Programming: ["Java", "Python"],
  "AI Tools": ["Claude AI", "ChatGPT"],
  "Software QA": ["Issue identification", "Testing concepts", "Debugging"],
  Design: ["Adobe Photoshop", "Canva"],
  Productivity: ["Microsoft Excel", "Data management"],
};

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: "code-2",
    title: "Web Development",
    description:
      "Building and maintaining websites and web-based systems using PHP, MySQL, CakePHP, and MVC architecture — from database to interface.",
  },
  {
    icon: "test-tube",
    title: "Software QA",
    description:
      "Issue identification, testing, debugging, and resolving CRUD operation issues and database-related problems across web applications.",
  },
  {
    icon: "bot",
    title: "AI-Assisted Development",
    description:
      "Using Claude AI and ChatGPT to support coding, debugging, and system improvements — accelerating development with practical AI tools.",
  },
  {
    icon: "monitor",
    title: "Technical Support",
    description:
      "System maintenance, troubleshooting, and IT support. Independently handling varied web development and system-maintenance tasks.",
  },
];

export const facts = [
  {
    label: "Education",
    value: "BS Information Technology",
    sub: "Tarlac State University, Graduated July 2025",
  },
  { label: "Location", value: "Tarlac City, Philippines" },
  {
    label: "Focus",
    value: "Web development, software QA, AI-assisted development",
  },
  {
    label: "Looking For",
    value:
      "Remote opportunities in software QA, web development, technical support, and AI-assisted development",
  },
] as const;
