"use client";

import { Code2, Database, Bot, Wrench } from "lucide-react";
import { services } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

const iconMap: Record<string, React.ElementType> = {
  "code-2": Code2,
  database: Database,
  bot: Bot,
  wrench: Wrench,
};

export function Services() {
  return (
    <section id="services" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1024px] px-6 md:px-8">
        <Reveal>
          <SectionLabel>What I Do</SectionLabel>
          <h2 className="text-2xl font-semibold tracking-tight text-fg md:text-4xl">
            How I can help
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => {
            const IconComp = iconMap[s.icon];
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="h-full rounded-xl border border-border p-6 transition-colors hover:border-border-h hover:bg-bg-card/50">
                  <div className="mb-4 text-accent">
                    {IconComp && <IconComp size={22} />}
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-fg">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-[1.7] text-fg-3">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
