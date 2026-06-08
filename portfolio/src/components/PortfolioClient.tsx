"use client";

import dynamic from "next/dynamic";

const PortfolioExperience = dynamic(
  () => import("@/src/components/PortfolioExperience").then((mod) => mod.PortfolioExperience),
  {
    ssr: false,
    loading: () => (
      <main className="grid min-h-screen place-items-center bg-[#05070d] px-6 text-center text-white">
        <div>
          <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-2 border-cyan-300/30 border-t-cyan-300" />
          <p className="text-sm font-medium text-cyan-100">Loading Sujan K S portfolio</p>
        </div>
      </main>
    ),
  },
);

export function PortfolioClient() {
  return <PortfolioExperience />;
}
