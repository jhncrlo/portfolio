"use client";

import { skills } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

export function Skills() {
  const entries = Object.entries(skills);
  return (
    <section id="skills" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1024px] px-6 md:px-8">
        <Reveal>
          <SectionLabel>Skills</SectionLabel>
          <h2 className="text-2xl font-semibold tracking-tight text-fg md:text-4xl">
            Technologies &amp; tools
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {entries.map(([group, items], i) => (
            <Reveal key={group} delay={i * 0.06}>
              <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-fg-4">
                {group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border border-border bg-bg-card px-3.5 py-2 text-sm text-fg-2 transition-colors hover:bg-accent-lo hover:border-accent/25"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
