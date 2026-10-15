"use client";

import { ExternalLink } from "lucide-react";
import { caseStudy as cs } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

export function CaseStudy() {
  return (
    <section
      id="case-study"
      className="border-t border-border py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1024px] px-6 md:px-8">
        <Reveal>
          <SectionLabel>Case Study</SectionLabel>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-fg md:text-4xl">
              {cs.title}
            </h2>
            <a
              href={cs.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-fg-2 transition-colors hover:bg-accent-lo hover:border-fg-4"
            >
              Visit Site <ExternalLink size={14} />
            </a>
          </div>
        </Reveal>

        {/* Problem / Solution */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.06}>
            <div className="rounded-xl border border-border bg-bg-card p-6">
              <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-fg-3">
                The Problem
              </h3>
              <p className="leading-[1.7] text-fg-2">{cs.problem}</p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-xl border border-border bg-bg-card p-6">
              <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-fg-3">
                The Solution
              </h3>
              <p className="leading-[1.7] text-fg-2">{cs.solution}</p>
            </div>
          </Reveal>
        </div>

        {/* Features */}
        <Reveal delay={0.06}>
          <h3 className="mb-6 mt-10 text-xs font-medium uppercase tracking-widest text-fg-3">
            Key Features
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-border p-6">
              <h4 className="mb-4 font-medium text-fg">Employee Portal</h4>
              <div className="flex flex-wrap gap-2">
                {cs.empFeatures.map((f) => (
                  <span
                    key={f}
                    className="rounded-lg border border-border bg-bg-card px-3 py-1.5 text-sm text-fg-3"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-border p-6">
              <h4 className="mb-4 font-medium text-fg">Admin Dashboard</h4>
              <div className="flex flex-wrap gap-2">
                {cs.adminFeatures.map((f) => (
                  <span
                    key={f}
                    className="rounded-lg border border-border bg-bg-card px-3 py-1.5 text-sm text-fg-3"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Role + Tech */}
        <div className="mt-10 grid gap-8 md:grid-cols-[2fr_1fr]">
          <Reveal delay={0.06}>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-fg-3">
              My Role
            </h3>
            <p className="leading-[1.7] text-fg-2">{cs.role}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-fg-3">
              Technology
            </h3>
            <div className="flex flex-wrap gap-2">
              {cs.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-border bg-bg-card px-3.5 py-2 text-sm text-fg-2 transition-colors hover:bg-accent-lo hover:border-accent/25"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-fg-4">{cs.hosting}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
