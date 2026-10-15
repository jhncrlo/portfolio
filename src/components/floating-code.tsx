"use client";

function Face({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`absolute w-[280px] h-[200px] rounded-[10px] border border-accent/[0.18] bg-bg-card/85 backdrop-blur-sm flex flex-col overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.06)] ${className}`}
      style={{ backfaceVisibility: "visible" }}
    >
      <div className="flex gap-[5px] px-2.5 py-2 border-b border-accent/10">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 opacity-50" />
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-50" />
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-50" />
      </div>
      <pre className="px-3 py-2.5 font-mono text-[10px] leading-[1.7] text-fg-3 whitespace-pre opacity-70">
        {children}
      </pre>
    </div>
  );
}

export function FloatingCode() {
  return (
    <div
      className="w-[280px] h-[200px] pointer-events-none z-[5] mx-auto"
      style={{ perspective: 900 }}
      aria-hidden="true"
    >
      <div
        className="w-full h-full relative animate-cube-spin"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <Face className="[transform:translateZ(65px)]">
          <span className="text-accent">class</span> Developer {"{\n"}
          {"  "}
          <span className="text-accent">constructor</span>() {"{\n"}
          {"    "}
          <span className="text-accent">this</span>.name ={" "}
          <span className="text-emerald">&apos;JCB&apos;</span>
          {";\n"}
          {"    "}
          <span className="text-accent">this</span>.role ={" "}
          <span className="text-emerald">&apos;Full-Stack&apos;</span>
          {";\n"}
          {"  }\n}"}
        </Face>

        {/* Back */}
        <Face className="[transform:rotateY(180deg)_translateZ(65px)]">
          <span className="text-fg-4">{"// deploy.sh"}</span>
          {"\n"}
          <span className="text-accent">npm</span> run build{"\n"}
          <span className="text-accent">ssh</span> deploy@prod{"\n"}
          <span className="text-emerald">&quot;System live ✓&quot;</span>
        </Face>

        {/* Right */}
        <Face className="[transform:rotateY(90deg)_translateZ(130px)] !w-[130px]">
          <span className="text-fg-4">{"/* db */"}</span>
          {"\n"}
          <span className="text-accent">CREATE</span>
          {"\n  "}
          <span className="text-accent">TABLE</span>
          {"\n  employees\n  (...);\n"}
          <span className="text-emerald">-- OK</span>
        </Face>

        {/* Left */}
        <Face className="[transform:rotateY(-90deg)_translateZ(130px)] !w-[130px]">
          <span className="text-fg-4">{"// test"}</span>
          {"\n"}
          <span className="text-accent">assert</span>
          {"\n  .equal(\n  "}
          <span className="text-emerald">true</span>
          {"\n);"}
        </Face>
      </div>

      <style>{`
        @keyframes cubeSpin {
          from { transform: rotateY(0deg) rotateX(-5deg); }
          to { transform: rotateY(360deg) rotateX(-5deg); }
        }
        @keyframes cubeFloat {
          0%, 100% { margin-top: 0; }
          50% { margin-top: -18px; }
        }
        .animate-cube-spin {
          animation: cubeFloat 16s ease-in-out infinite, cubeSpin 24s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-cube-spin { animation: none; }
        }
      `}</style>
    </div>
  );
}
