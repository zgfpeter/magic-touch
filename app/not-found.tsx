import Link from "next/link";
import { LuHouse, LuSearch } from "react-icons/lu";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
        404
      </h1>
      <h2 className="text-xl md:text-2xl font-bold text-slate-300 mb-4">
        Page Not Found
      </h2>
      <p className="text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">
        We couldn&apos;t find the page you were looking for. It might have been
        moved, deleted, or perhaps the URL is incorrect.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-handy-orange hover:from-orange-600 hover:to-orange-500 text-white rounded-full font-semibold text-sm shadow-md transition-all active:scale-95 focus-visible:outline-none"
      >
        <LuHouse size={18} aria-hidden="true" />
        <span>Back to Home</span>
      </Link>
    </div>
  );
}
