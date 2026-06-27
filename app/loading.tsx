export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center w-full">
      {/* By using an inline style tag, we inject standard CSS keyframes 
        that run natively in the browser before React even boots up.
      */}
      <style>{`
        .blueprint-path {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
        }

        .path-roof { animation: drawRoof 3s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        .path-walls { animation: drawWalls 3s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        .path-door { animation: drawDoor 3s cubic-bezier(0.4, 0, 0.2, 1) infinite; }

        @keyframes drawRoof {
          0% { stroke-dashoffset: 100; opacity: 0; }
          5% { opacity: 1; }
          30%, 80% { stroke-dashoffset: 0; opacity: 1; }
          95%, 100% { stroke-dashoffset: 100; opacity: 0; }
        }
        @keyframes drawWalls {
          0%, 10% { stroke-dashoffset: 100; opacity: 0; }
          15% { opacity: 1; }
          40%, 80% { stroke-dashoffset: 0; opacity: 1; }
          95%, 100% { stroke-dashoffset: 100; opacity: 0; }
        }
        @keyframes drawDoor {
          0%, 20% { stroke-dashoffset: 100; opacity: 0; }
          25% { opacity: 1; }
          50%, 80% { stroke-dashoffset: 0; opacity: 1; }
          95%, 100% { stroke-dashoffset: 100; opacity: 0; }
        }
      `}</style>

      <div className="relative w-24 h-24 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-full h-full drop-shadow-[0_0_8px_rgba(234,88,12,0.4)]"
          stroke="#ea580c"
          fill="none"
          strokeWidth="0.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* 1. The Roof */}
          <path className="blueprint-path path-roof" d="M3 10L12 3l9 7" />
          {/* 2. The Outer Walls */}
          <path className="blueprint-path path-walls" d="M5 10v11h14V10" />
          {/* 3. The Front Door */}
          <path className="blueprint-path path-door" d="M9 21v-6h6v6" />
        </svg>
      </div>

      {/* Animated Text using standard Tailwind pulse */}
      <div className="flex items-center text-sm font-bold tracking-[0.2em] uppercase text-slate-500">
        <span className="animate-pulse">Building</span>
        <span className="text-[#ea580c] ml-1 text-lg leading-none animate-pulse">
          ...
        </span>
      </div>
    </div>
  );
}
