"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const hovering = useRef(false);
  const raf = useRef<number>(0);

  useEffect(() => {
    const isTouch =
      window.matchMedia("(pointer:coarse)").matches ||
      window.innerWidth < 768;
    if (
      isTouch ||
      window.matchMedia("(prefers-reduced-motion:reduce)").matches
    )
      return;

    document.body.classList.add("custom-cursor");

    if (dotRef.current) dotRef.current.style.display = "block";
    if (ringRef.current) ringRef.current.style.display = "block";

    const sel =
      "a,button,[role='button'],input,textarea,select,.card,.svc-card,.skill-tag,.btn-primary,.btn-ghost";

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(sel)) {
        hovering.current = true;
        dotRef.current?.classList.add("cursor-hovering");
        ringRef.current?.classList.add("cursor-hovering");
      }
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(sel)) {
        hovering.current = false;
        dotRef.current?.classList.remove("cursor-hovering");
        ringRef.current?.classList.remove("cursor-hovering");
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      dotPos.current.x = mouse.current.x;
      dotPos.current.y = mouse.current.y;
      ringPos.current.x = lerp(ringPos.current.x, mouse.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, mouse.current.y, 0.12);

      if (dotRef.current)
        dotRef.current.style.transform = `translate(${dotPos.current.x - 4}px,${dotPos.current.y - 4}px)`;
      const rOff = hovering.current ? 30 : 20;
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${ringPos.current.x - rOff}px,${ringPos.current.y - rOff}px)`;

      raf.current = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("custom-cursor");
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-accent will-change-transform max-md:!hidden"
        aria-hidden="true"
        style={{ display: "none" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 rounded-full border-[1.5px] border-accent/35 will-change-transform max-md:!hidden transition-[width,height,border-color] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        aria-hidden="true"
        style={{ display: "none" }}
      />
      <style>{`
        div.cursor-hovering[aria-hidden="true"]:first-of-type { transform: scale(0) !important; opacity: 0; }
        div.cursor-hovering[aria-hidden="true"]:last-of-type { width: 60px; height: 60px; border-color: rgba(59,130,246,.5); }
        @media (pointer: coarse) { body.custom-cursor, body.custom-cursor * { cursor: auto !important; } }
      `}</style>
    </>
  );
}
