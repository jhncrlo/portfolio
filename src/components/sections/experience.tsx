"use client";

import { experience } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

function ExpCard({ exp, delay }: { exp: (typeof experience)[number]; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div className="rounded-xl border border-border p-6 md:p-8">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-fg md:text-xl">
            {exp.title}
          </h3>
          <span className="shrink-0 text-sm text-fg-4">{exp.period}</span>
        </div>
        <ul className="flex flex-col gap-2">
          {exp.bullets.map((b, i) => (
            <li key={i} className="leading-[1.7] text-fg-3 pl-4 relative before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-fg-4/50">
              {b}
            </li>
          ))}
        </ul>
        {exp.tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {exp.tags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border bg-bg-card px-2.5 py-1 text-xs text-fg-4"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </Reveal>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1024px] px-6 md:px-8">
        <Reveal>
          <SectionLabel>Experience</SectionLabel>
          <h2 className="text-2xl font-semibold tracking-tight text-fg md:text-4xl">
            Where I&apos;ve worked
          </h2>
        </Reveal>
        <div className="mt-12 flex flex-col gap-5">
          {experience.map((exp, i) => (
            <ExpCard key={exp.title} exp={exp} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
