/* ─────────────────────────────────────────────────────────────
   Site content — single source of truth for all portfolio data.
   Edit this file to update your portfolio content.
   ───────────────────────────────────────────────────────────── */

export const site = {
  name: "John Carlo Bartolome",
  title: "Full-Stack Developer & IT Specialist",
  tagline:
    "I design, build, test, and deploy practical web systems — from the interface to production.",
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
  role: "Sole developer — handled the complete lifecycle from requirements gathering and database design through interface design, full-stack development, testing, production deployment, and ongoing maintenance.",
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
    title: "IT Specialist",
    period: "January 2026 – Present",
    summary:
      "Primary technology resource for the organization. Independently manage the complete software lifecycle — from requirements and design through development, testing, deployment, and maintenance of production systems.",
    tags: [
      "Full-stack development",
      "Database design",
      "UI/UX implementation",
      "QA & testing",
      "Deployment & hosting",
      "System maintenance",
    ],
  },
  {
    title: "E-commerce Virtual Assistant",
    period: "June 2022 – December 2024",
    summary:
      "Managed product listings, order processing, and customer data independently while completing my degree. Built strong habits around attention to detail, meeting deadlines, and working autonomously — skills that directly carry over to how I approach software development.",
    tags: [],
  },
];

export const skills: Record<string, string[]> = {
  Development: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "MySQL", "REST API"],
  Web: ["WordPress", "Elementor"],
  Tools: ["Git", "Claude Code", "ChatGPT", "FileZilla"],
  Quality: [
    "QA Testing",
    "Functional Testing",
    "UI Testing",
    "Responsive Testing",
    "Debugging",
    "Bug Identification",
  ],
};

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: "code-2",
    title: "Full-Stack Development",
    description:
      "Complete web applications from database to interface. I handle the full lifecycle — requirements, design, development, testing, deployment, and maintenance.",
  },
  {
    icon: "globe",
    title: "WordPress Development",
    description:
      "Custom WordPress sites built for real organizational needs. Direct theme and file-level work, not drag-and-drop page builders.",
  },
  {
    icon: "test-tube",
    title: "QA & Testing",
    description:
      "Functional, UI, and responsive testing to ensure software works reliably before it reaches users. Systematic debugging and bug identification.",
  },
  {
    icon: "server",
    title: "System Development",
    description:
      "Transforming manual business processes into digital systems. I take operational problems and build the software that solves them.",
  },
];

export const facts = [
  {
    label: "Education",
    value: "BS Information Technology",
    sub: "Tarlac State University, 2025",
  },
  { label: "Location", value: "Tarlac, Philippines" },
  {
    label: "Focus",
    value: "Full-stack development, system design, quality assurance",
  },
  {
    label: "Looking For",
    value:
      "A team where end-to-end ownership is valued and reliable software is the standard",
  },
] as const;
