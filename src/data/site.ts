/* ─────────────────────────────────────────────────────────────
   Site content — single source of truth for all portfolio data.
   Edit this file to update your portfolio content.
   ───────────────────────────────────────────────────────────── */

export const site = {
  name: "John Carlo Bartolome",
  title: "Web/Software Developer | AI-Assisted Development",
  tagline:
    "BS Information Technology graduate with hands-on experience in web development, database-driven applications, and system maintenance. I work with PHP, MySQL, and CakePHP, and use AI tools to support coding, debugging, and problem-solving. Seeking remote opportunities with international teams and clients.",
  email: "johncarlobartolome02@gmail.com",
  phone: "+63 977 0369 172",
  links: {
    github: "https://github.com/jhncrlo",
    linkedin: "#",
    resume: "#",
  },
} as const;

export interface Project {
  title: string;
  category: string;
  description: string;
  role: string;
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
      "Web-based payroll and HRIS platform for Philippine businesses. Handles BIR TRAIN-law tax computation, SSS/PhilHealth/Pag-IBIG remittances, biometric attendance, leave and overtime management, and employee self-service.",
    role: "Handled the complete lifecycle — requirements gathering, database design, interface development, testing, deployment, and ongoing maintenance.",
    tech: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    href: "https://insightpayroll.com.ph",
    featured: true,
    image: "/projects/insight-payroll.jpg",
  },
  {
    title: "City of Batac",
    category: "Local Government Website",
    description:
      "Official website of the City Government of Batac, Ilocos Norte. Includes city profile, government directory, calendar of activities, and downloadable government forms.",
    role: "Developed and maintained the website, managed content updates, and handled technical issues.",
    tech: ["WordPress", "PHP", "MySQL"],
    href: "https://batac.gov.ph",
    featured: true,
    image: "/projects/batac-gov.jpg",
  },
  {
    title: "JPG Accounting",
    category: "Accounting Firm Website",
    description:
      "Company website for a tax and accounting firm. Features service pages, team profiles, inquiry forms, and online appointment booking.",
    role: "Built the website using WordPress and Elementor, configured forms, and set up the hosting environment.",
    tech: ["WordPress", "Elementor"],
    href: "https://jpgac.com",
    featured: true,
    image: "/projects/jpgac.jpg",
  },
  {
    title: "BIR Converter",
    category: "BIR Compliance Utility",
    description:
      "Converts Excel spreadsheets into BIR-compliant DAT files for RELIEF and Alphalist Data Entry esubmission. Users upload a file, the tool validates and converts it, and they download the result — replacing manual data entry.",
    role: "Built the application end-to-end — file upload handling, Excel parsing, data validation, DAT file generation, and the user interface.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://www.birconverter.com",
    featured: true,
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
  role: "Handled the complete lifecycle from requirements gathering and database design through interface development, testing, production deployment, and ongoing maintenance. Worked on CRUD operations, user management, payroll computation logic, and database-driven reporting.",
  tech: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
  hosting:
    "Deployed and hosted on Hostinger. Production system with active users.",
} as const;

export interface Experience {
  title: string;
  period: string;
  bullets: string[];
  tags: string[];
}

export const experience: Experience[] = [
  {
    title: "Web/Software Developer — IManila",
    period: "August 2025 – September 2026",
    bullets: [
      "Developed, maintained, and improved company websites and web-based systems using PHP, MySQL, and CakePHP/MVC.",
      "Maintained and troubleshot a database-driven HRIS — resolved CRUD operation issues, user management bugs, and database-related problems.",
      "Used Claude AI and ChatGPT to support coding, debugging, and investigating technical problems.",
      "Independently handled varied web development, IT support, and system-maintenance tasks.",
    ],
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
    bullets: [
      "Managed and updated eBay product listings — created optimized titles, descriptions, and product images.",
      "Maintained accurate records and organized product information for jewelry and photobook inventory.",
    ],
    tags: [
      "eBay",
      "Adobe Photoshop",
      "Product management",
    ],
  },
  {
    title: "IT Intern — Provincial Governor's Office",
    period: "486 hours — Tarlac Provincial Hospital",
    bullets: [
      "Supported administrative operations through data entry, document management, and digital records maintenance using Microsoft Excel.",
    ],
    tags: [
      "Microsoft Excel",
      "Data entry",
      "Document management",
    ],
  },
];

export const skills: Record<string, string[]> = {
  "Web Development": ["PHP", "HTML", "CSS", "JavaScript"],
  "Frameworks & Architecture": ["CakePHP", "MVC", "Laravel"],
  Database: ["MySQL", "phpMyAdmin"],
  "Programming Fundamentals": ["Java", "Python"],
  "AI-Assisted Development": ["Claude AI", "ChatGPT"],
  "Software Maintenance": ["Debugging", "Troubleshooting", "Database-driven applications"],
  "Additional Tools": ["Microsoft Excel", "Adobe Photoshop", "Canva"],
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
      "Building and maintaining websites and web-based systems using PHP, MySQL, CakePHP, and MVC architecture — from database design to user interface.",
  },
  {
    icon: "database",
    title: "Database & CRUD Applications",
    description:
      "Developing database-driven applications with user management, data processing, form validation, and reporting using MySQL and PHP.",
  },
  {
    icon: "bot",
    title: "AI-Assisted Development",
    description:
      "Using Claude AI and ChatGPT to support coding, debugging, and system improvements — reviewing and testing output rather than blindly accepting it.",
  },
  {
    icon: "wrench",
    title: "Maintenance & Troubleshooting",
    description:
      "Diagnosing and resolving issues in existing web applications — CRUD bugs, database problems, deployment issues, and system maintenance.",
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
    value: "Web development, database-driven applications, AI-assisted development",
  },
  {
    label: "Availability",
    value:
      "Open to remote work with international teams and clients",
  },
] as const;
