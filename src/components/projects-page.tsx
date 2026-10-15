"use client";

import { ArrowLeft, ExternalLink, Globe } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/footer";
import { CustomCursor } from "@/components/custom-cursor";
import type { Project } from "@/data/site";

function ProjectDetailCard({
  project: p,
  index,
  flipped,
}: {
  project: Project;
  index: number;
  flipped: boolean;
}) {
  return (
    <article
      className={`grid gap-8 md:gap-12 lg:grid-cols-2 lg:items-center ${flipped ? "lg:[direction:rtl]" : ""}`}
    >
      {/* Image */}
      <div className={flipped ? "lg:[direction:ltr]" : ""}>
        <div className="group overflow-hidden rounded-xl border border-border bg-bg-card">
          <img
            src={p.image}
            alt={`${p.title} — project screenshot`}
            className="w-full aspect-[16/10] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            loading={index < 2 ? "eager" : "lazy"}
          />
        </div>
      </div>

      {/* Details */}
      <div className={flipped ? "lg:[direction:ltr]" : ""}>
        <span className="text-xs font-medium uppercase tracking-widest text-accent">
          {p.category}
        </span>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-fg md:text-3xl">
          {p.title}
        </h2>
        <p className="mt-4 text-base leading-[1.8] text-fg-3">
          {p.description}
        </p>

        {/* Tech stack */}
        <div className="mt-6">
          <span className="text-xs font-medium uppercase tracking-widest text-fg-4">
            Built with
          </span>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border bg-bg-card px-3 py-1.5 text-xs font-medium text-fg-3"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        {p.href && (
          <div className="mt-6 flex gap-3">
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-h"
            >
              <Globe size={14} />
              Visit Site
            </a>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-fg-3 transition-colors hover:bg-accent-lo hover:border-fg-4"
            >
              <ExternalLink size={14} />
              Live Preview
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

export function ProjectsPage({ projects }: { projects: Project[] }) {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="mx-auto max-w-[1100px] px-6 md:px-8">
          {/* Header */}
          <div className="mb-16 md:mb-20">
            <a
              href="/"
              className="mb-6 inline-flex items-center gap-2 text-sm text-fg-4 transition-colors hover:text-accent"
            >
              <ArrowLeft size={14} />
              Back home
            </a>
            <h1 className="text-3xl font-bold tracking-tight text-fg md:text-5xl">
              All Projects
            </h1>
            <p className="mt-4 max-w-xl text-base leading-[1.7] text-fg-3 md:text-lg">
              A collection of systems and applications I&apos;ve designed, built,
              and shipped. Each project solved a real problem for real users.
            </p>
          </div>

          {/* Project list */}
          <div className="space-y-20 md:space-y-28">
            {projects.map((p, i) => (
              <ProjectDetailCard
                key={p.title}
                project={p}
                index={i}
                flipped={i % 2 === 1}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
