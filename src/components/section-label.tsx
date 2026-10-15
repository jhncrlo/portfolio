import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 flex items-center gap-2.5 text-xs font-medium uppercase tracking-widest text-accent">
      <span className="inline-block h-3.5 w-0.5 rounded-sm bg-accent" />
      {children}
    </p>
  );
}
