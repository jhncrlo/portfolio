"use client";

import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-[1024px] flex-col items-center justify-between gap-4 px-6 text-sm text-fg-4 md:flex-row md:px-8">
        <p>&copy; {new Date().getFullYear()} {site.name}</p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="transition-colors hover:text-fg-2"
        >
          Back to top &uarr;
        </button>
      </div>
    </footer>
  );
}
