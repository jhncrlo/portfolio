"use client";

import { facts } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1024px] px-6 md:px-8">
        <Reveal>
          <SectionLabel>About</SectionLabel>
          <h2 className="text-2xl font-semibold tracking-tight text-fg md:text-4xl">
            A bit about me
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-12 md:grid-cols-[3fr_2fr] md:gap-16">
          <Reveal delay={0.06}>
            <div className="flex flex-col gap-5">
              <p className="text-[clamp(15px,1.5vw,18px)] leading-[1.7] text-fg-2">
                I&apos;m a web/software developer based in Tarlac, Philippines. I
                graduated with a BS in Information Technology from Tarlac State
                University in 2025. Most recently, I worked as a Web/Software
                Developer at IManila, where I built and maintained websites and
                web-based systems using PHP, MySQL, and CakePHP.
              </p>
              <p className="text-[clamp(15px,1.5vw,18px)] leading-[1.7] text-fg-2">
                My experience covers developing database-driven applications,
                maintaining an HRIS platform, resolving CRUD and database issues,
                and using AI tools like Claude AI and ChatGPT to support development
                and debugging. I&apos;ve also built a payroll system, worked on a
                government website, and developed business tools.
              </p>
              <p className="text-[clamp(15px,1.5vw,18px)] leading-[1.7] text-fg-2">
                Before my developer role, I worked for two and a half years as an
                e-commerce virtual assistant while finishing my degree — which
                taught me to work independently, manage detail-heavy tasks, and
                meet deadlines without someone looking over my shoulder.
              </p>
              <p className="text-[clamp(15px,1.5vw,18px)] leading-[1.7] text-fg-2">
                I&apos;m currently seeking remote opportunities with international
                teams and clients.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="flex flex-col gap-7">
              {facts.map((f) => (
                <div key={f.label}>
                  <h3 className="mb-2 text-xs font-medium uppercase tracking-widest text-fg-4">
                    {f.label}
                  </h3>
                  <p className="text-fg">{f.value}</p>
                  {"sub" in f && f.sub && (
                    <p className="mt-0.5 text-sm text-fg-4">{f.sub}</p>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
