"use client";

import { Mail, Phone } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1024px] px-6 text-center md:px-8">
        <Reveal>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="text-2xl font-semibold tracking-tight text-fg md:text-4xl">
            Let&apos;s work together
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mx-auto mt-6 max-w-lg text-[clamp(15px,1.5vw,18px)] leading-[1.7] text-fg-3">
            I&apos;m open to remote roles, freelance projects, and contract work
            with international teams. If you need a developer who can build and
            maintain web applications, let&apos;s talk.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-col items-stretch gap-5 sm:flex-row sm:items-center sm:justify-center sm:gap-8">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-3 text-fg transition-colors hover:text-accent min-w-0"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-card transition-colors group-hover:border-accent/30 group-hover:bg-accent-lo">
                <Mail size={18} className="text-accent" />
              </span>
              <span className="text-sm font-medium truncate">{site.email}</span>
            </a>
            <a
              href={`https://wa.me/${site.phone.replace(/\s+/g, "").replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-fg transition-colors hover:text-accent"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg-card transition-colors group-hover:border-accent/30 group-hover:bg-accent-lo">
                <Phone size={18} className="text-accent" />
              </span>
              <span className="text-sm font-medium">
                {site.phone}
                <span className="ml-1.5 text-xs text-fg-4">WhatsApp / Viber</span>
              </span>
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-8 flex justify-center gap-7">
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-fg-4 hover:text-fg-2"
            >
              GitHub
            </a>
            {site.links.linkedin !== "#" ? (
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-fg-4 hover:text-fg-2"
              >
                LinkedIn
              </a>
            ) : (
              <span className="text-sm text-fg-4/50" title="LinkedIn URL not configured yet">
                LinkedIn
              </span>
            )}
            {site.links.resume !== "#" ? (
              <a
                href={site.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-fg-4 hover:text-fg-2"
              >
                Resume
              </a>
            ) : (
              <span className="text-sm text-fg-4/50" title="Resume link not configured yet">
                Resume
              </span>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
