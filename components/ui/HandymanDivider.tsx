export default function HandymanDivider() {
  return (
    <div className="w-full bg-slate-950 py-12 md:py-16 relative overflow-hidden select-none pointer-events-none">
      <div className="max-w-5xl mx-auto px-6 w-full flex items-center justify-center opacity-80">
        {/* Left Architectural Extension Line & Tick */}
        <div className="h-6 w-[1px] bg-slate-700 relative">
          <div className="w-3 h-[2px] bg-slate-400 rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Left Main Dimension Line */}
        <div className="flex-1 h-[1px] bg-slate-800" />

        {/* Right Main Dimension Line */}
        <div className="flex-1 h-[1px] bg-slate-800" />

        {/* Right Architectural Extension Line & Tick */}
        <div className="h-6 w-[1px] bg-slate-700 relative">
          <div className="w-3 h-[2px] bg-slate-400 rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
}
