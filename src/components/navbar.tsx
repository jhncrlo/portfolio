"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";

interface NavLink {
  label: string;
  href: string;
  desktopOnly?: boolean;
}

const links: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/projects" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

function scrollTo(id: string) {
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ref = useRef(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      const s = window.scrollY > 40;
      if (s !== ref.current) {
        ref.current = s;
        setScrolled(s);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, link: NavLink) => {
      if (isHome && link.href === "/") {
        e.preventDefault();
        scrollTo("top");
      } else if (isHome && link.href.startsWith("/#")) {
        e.preventDefault();
        scrollTo(link.href.slice(2));
      }
      setMobileOpen(false);
    },
    [isHome],
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 h-16 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-bg/[0.88] backdrop-blur-2xl shadow-[inset_0_-1px_0_var(--color-border)]"
            : ""
        }`}
        aria-label="Primary"
      >
        <div className="mx-auto flex h-full max-w-[1024px] items-center justify-between px-6 md:px-8">
          <a
            href="/"
            className="font-mono text-sm font-semibold tracking-tight text-fg-2"
          >
            jcb<span className="text-accent">.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-5 md:gap-7">
            <ul className="flex gap-5 md:gap-7 list-none p-0 m-0 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => handleClick(e, l)}
                    className="text-fg-3 transition-colors duration-150 hover:text-fg"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            {site.links.resume !== "#" ? (
              <a href={site.links.resume} target="_blank" rel="noopener noreferrer" className="text-sm text-accent">
                Resume
              </a>
            ) : (
              <span className="text-sm text-accent/50">Resume</span>
            )}
            <ThemeToggle />
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-fg-3 transition-colors hover:bg-bg-card hover:text-fg"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-bg/60 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 bg-bg/95 backdrop-blur-2xl border-b border-border md:hidden transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleClick(e, l)}
              className="block rounded-lg px-4 py-3 text-base font-medium text-fg-2 transition-colors hover:bg-bg-card hover:text-fg"
            >
              {l.label}
            </a>
          ))}
          {site.links.resume !== "#" ? (
            <a
              href={site.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-4 py-3 text-base font-medium text-accent transition-colors hover:bg-bg-card"
            >
              Resume
            </a>
          ) : (
            <span className="block rounded-lg px-4 py-3 text-base font-medium text-accent/50">
              Resume
            </span>
          )}
        </div>
      </div>
    </>
  );
}
