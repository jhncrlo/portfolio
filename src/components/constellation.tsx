"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  r: number;
  depth: number;
}

export function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const raf = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;

    const ctx = canvas.getContext("2d")!;
    let w: number, ht: number;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      w = rect.width;
      ht = rect.height;
      canvas.width = w * dpr;
      canvas.height = ht * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = ht + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initNodes = () => {
      const count = Math.min(Math.floor((w * ht) / 18000), 55);
      nodesRef.current = [];
      for (let i = 0; i < count; i++) {
        const nx = Math.random() * w;
        const ny = Math.random() * ht;
        nodesRef.current.push({
          x: nx,
          y: ny,
          baseX: nx,
          baseY: ny,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.5 + 0.8,
          depth: Math.random() * 0.6 + 0.4,
        });
      }
    };

    resize();
    initNodes();

    const onResize = () => {
      resize();
      initNodes();
    };
    window.addEventListener("resize", onResize);

    const heroEl = canvas.parentElement!;
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => {
      mouse.current = { x: -9999, y: -9999 };
    };
    heroEl.addEventListener("mousemove", onMove, { passive: true });
    heroEl.addEventListener("mouseleave", onLeave, { passive: true });

    const connDist = 130;
    const mouseDist = 180;

    const getAccentRgb = () => {
      const style = getComputedStyle(document.documentElement);
      const accent = style.getPropertyValue("--color-accent").trim();
      const tmp = document.createElement("div");
      tmp.style.color = accent;
      document.body.appendChild(tmp);
      const rgb = getComputedStyle(tmp).color.match(/\d+/g)!.map(Number);
      tmp.remove();
      return rgb;
    };
    let [ar, ag, ab] = getAccentRgb();

    const draw = () => {
      ctx.clearRect(0, 0, w, ht);
      const nodes = nodesRef.current;
      const mx = mouse.current.x;
      const my = mouse.current.y;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.baseX += n.vx;
        n.baseY += n.vy;
        if (n.baseX < 0 || n.baseX > w) n.vx *= -1;
        if (n.baseY < 0 || n.baseY > ht) n.vy *= -1;
        n.baseX = Math.max(0, Math.min(w, n.baseX));
        n.baseY = Math.max(0, Math.min(ht, n.baseY));

        let px = 0,
          py = 0;
        if (mx > -9000) {
          const ddx = mx - n.baseX;
          const ddy = my - n.baseY;
          const dist = Math.sqrt(ddx * ddx + ddy * ddy);
          if (dist < mouseDist && dist > 0) {
            const force = (1 - dist / mouseDist) * 22 * n.depth;
            px = (ddx / dist) * force;
            py = (ddy / dist) * force;
          }
        }
        n.x += (n.baseX + px - n.x) * 0.08;
        n.y += (n.baseY + py - n.y) * 0.08;
      }

      // connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connDist) {
            const alpha = (1 - dist / connDist) * 0.1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${ar},${ag},${ab},${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        let glowAlpha = 0;
        if (mx > -9000) {
          const ddx = mx - n.x;
          const ddy = my - n.y;
          const dist = Math.sqrt(ddx * ddx + ddy * ddy);
          if (dist < mouseDist) glowAlpha = (1 - dist / mouseDist) * 0.35;
        }
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ar},${ag},${ab},${0.2 + glowAlpha})`;
        ctx.fill();
      }

      raf.current = requestAnimationFrame(draw);
    };

    raf.current = requestAnimationFrame(draw);

    const observer = new MutationObserver(() => {
      [ar, ag, ab] = getAccentRgb();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => {
      cancelAnimationFrame(raf.current);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      heroEl.removeEventListener("mousemove", onMove);
      heroEl.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
