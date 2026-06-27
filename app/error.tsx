"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { LuTriangleAlert, LuRefreshCw } from "react-icons/lu";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service like Sentry
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="p-4 bg-red-950/30 rounded-full border border-red-900/50 mb-6">
        <LuTriangleAlert className="text-red-500 w-10 h-10" />
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        Something went wrong!
      </h2>
      <p className="text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">
        We encountered an unexpected error while trying to load this page. Our
        team has been notified.
      </p>

      <button
        onClick={() => reset()} // Attempts to recover by trying to re-render the segment
        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-full font-semibold text-sm transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-handy-orange"
      >
        <LuRefreshCw size={18} aria-hidden="true" />
        <span>Try Again</span>
      </button>
    </div>
  );
}
