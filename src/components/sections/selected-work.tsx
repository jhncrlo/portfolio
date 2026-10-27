"use client";

import { ArrowRight } from "lucide-react";
import { projects } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

function MiniPreview({
  image,
  title,
  href,
}: {
  image: string;
  title: string;
  href: string | null;
}) {
  const domain = href
    ? href.replace(/^https?:\/\//, "").replace(/\/.*$/, "")
    : title;

  return (
    <div className="overflow-hidden rounded-lg border border-border/50 bg-bg-card">
      <div className="flex items-center gap-1.5 border-b border-border/50 px-2.5 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
        <span className="ml-1.5 text-[10px] text-fg-4 truncate">{domain}</span>
      </div>
      <div className="overflow-hidden">
        <img
          src={image}
          alt={`${title} screenshot`}
          className="w-full aspect-video object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
    </div>
  );
}

function ProjectCard({
  project: p,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const inner = (
    <>
      <MiniPreview image={p.image} title={p.title} href={p.href} />
      <div className="mt-5">
        <span className="text-xs font-medium uppercase tracking-widest text-accent">
          {p.category}
        </span>
        <h3 className="mt-2 text-lg font-semibold text-fg md:text-xl">
          {p.title}
        </h3>
        <p className="mt-2 text-sm leading-[1.7] text-fg-3 line-clamp-2">
          {p.description}
        </p>
      </div>
    </>
  );

  const cls =
    "group block rounded-xl border border-border p-5 transition-all duration-200 hover:bg-bg-card-h hover:border-border-h hover:-translate-y-0.5";

  return (
    <Reveal delay={index * 0.08}>
      {p.href ? (
        <a
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
        >
          {inner}
        </a>
      ) : (
        <div className={cls}>{inner}</div>
      )}
    </Reveal>
  );
}

export function SelectedWork() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="work" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1024px] px-6 md:px-8">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <SectionLabel>Selected Work</SectionLabel>
              <h2 className="text-2xl font-semibold tracking-tight text-fg md:text-4xl">
                Projects I&apos;ve built and shipped
              </h2>
            </div>
            <a
              href="/projects"
              className="hidden md:inline-flex items-center gap-2 text-sm text-fg-3 transition-colors hover:text-accent whitespace-nowrap"
            >
              All projects
              <ArrowRight size={14} />
            </a>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {featured.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
        <Reveal>
          <div className="mt-8 flex justify-center md:hidden">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-fg-3 transition-colors hover:text-accent"
            >
              View all projects
              <ArrowRight size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
