import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "John Carlo Bartolome | Web/Software Developer",
  description:
    "Web/Software Developer with hands-on experience in PHP, MySQL, CakePHP, and AI-assisted development. Available for remote work with international teams.",
  keywords: [
    "John Carlo Bartolome",
    "Web Developer Philippines",
    "PHP Developer",
    "Remote Web Developer",
    "MySQL Developer",
    "CakePHP Developer",
    "Junior Web Developer",
    "AI-Assisted Development",
    "Freelance Web Developer Philippines",
    "Remote PHP Developer",
  ],
  authors: [{ name: "John Carlo Bartolome" }],
  openGraph: {
    title: "John Carlo Bartolome | Web/Software Developer",
    description:
      "Web/Software Developer with hands-on experience in PHP, MySQL, CakePHP, and AI-assisted development. Available for remote work.",
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
              jobTitle: "Web/Software Developer",
              url: "https://portfolio-lac-nine-15.vercel.app",
              knowsAbout: [
                "PHP",
                "MySQL",
                "CakePHP",
                "Laravel",
                "HTML",
                "CSS",
                "JavaScript",
                "WordPress",
                "AI-Assisted Development",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
