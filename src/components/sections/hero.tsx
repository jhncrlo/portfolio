"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { site } from "@/data/site";
import { Constellation } from "@/components/constellation";
import { FloatingCode } from "@/components/floating-code";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const ent = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.08 + i * 0.14,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function Hero() {
  return (
    <header className="relative overflow-hidden pt-32 pb-12 md:pt-44 md:pb-20" id="top">
      {/* dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, color-mix(in srgb, var(--color-fg) 2.5%, transparent) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <Constellation />
      {/* glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[860px] h-[620px]"
        style={{
          background:
            "radial-gradient(ellipse, color-mix(in srgb, var(--color-accent) 6%, transparent), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-12 lg:flex lg:items-center lg:justify-between lg:gap-16">
        <div className="text-center lg:text-left lg:shrink-0 lg:w-[55%]">
          {/* status */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={ent}
            className="mb-8 flex items-center justify-center lg:justify-start gap-2.5 text-sm text-fg-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-bg" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={ent}
            className="text-[clamp(40px,8vw,72px)] font-extrabold tracking-[-0.04em] text-fg leading-none"
            style={{ textWrap: "balance" }}
          >
            {site.name}
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={ent}
            className="mt-6 text-[clamp(16px,2.5vw,20px)] font-medium tracking-tight text-accent"
          >
            {site.title}
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={ent}
            className="mt-6 max-w-[520px] mx-auto lg:mx-0 text-[clamp(15px,2vw,18px)] leading-[1.7] text-fg-3"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={ent}
            className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("work");
              }}
              className="btn-primary inline-block rounded-lg bg-accent px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-h active:scale-[0.97]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
              className="inline-block rounded-lg border border-border px-7 py-3 text-sm font-medium text-fg-2 transition-colors hover:bg-accent-lo hover:border-fg-4"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={ent}
          className="hidden lg:flex lg:w-[40%] lg:justify-center lg:items-center"
        >
          <FloatingCode />
        </motion.div>
      </div>

      <motion.div
        custom={5}
        initial="hidden"
        animate="visible"
        variants={ent}
        className="relative z-10 mt-10 flex justify-center"
      >
        <a
          href="#work"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("work");
          }}
          className="text-fg-4 animate-bounce"
          aria-label="Scroll down"
        >
          <Circle size={8} fill="currentColor" />
        </a>
      </motion.div>
    </header>
  );
}
