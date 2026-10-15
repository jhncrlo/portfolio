import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Carlo Bartolome | Full-Stack Developer & IT Specialist",
  description:
    "I design, build, test, and deploy practical web systems — from the interface to production. Full-Stack Developer and IT Specialist based in the Philippines.",
  keywords: [
    "John Carlo Bartolome",
    "Full Stack Developer Philippines",
    "Web Developer Philippines",
    "Laravel Developer Philippines",
    "PHP Developer Philippines",
    "IT Specialist Philippines",
    "Freelance Web Developer Philippines",
    "Web Developer Tarlac",
    "HRIS Developer Philippines",
    "Payroll System Developer Philippines",
  ],
  authors: [{ name: "John Carlo Bartolome" }],
  openGraph: {
    title: "John Carlo Bartolome | Full-Stack Developer & IT Specialist",
    description:
      "I design, build, test, and deploy practical web systems — from the interface to production.",
    type: "website",
    locale: "en_PH",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "John Carlo Bartolome",
              jobTitle: "Full-Stack Developer & IT Specialist",
              url: "https://johncarlo.dev",
              knowsAbout: [
                "Full-Stack Development",
                "Laravel",
                "PHP",
                "MySQL",
                "JavaScript",
                "WordPress",
                "QA Testing",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
