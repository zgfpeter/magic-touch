"use client";

import { LuOctagonAlert } from "react-icons/lu";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-300">
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <LuOctagonAlert className="text-red-500 w-12 h-12 mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">
            Critical System Error
          </h2>
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-handy-orange text-white rounded-full font-semibold mt-4"
          >
            Reload Application
          </button>
        </div>
      </body>
    </html>
  );
}
