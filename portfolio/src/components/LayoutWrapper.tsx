"use client";

import { useEffect } from "react";
import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";
import { LanguageProvider } from "@/src/i18n";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col bg-[#05070d] text-white selection:bg-cyan-300/40">
        {/* Global Background Ambient Effects */}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(129,140,248,0.13),transparent_30%),linear-gradient(180deg,transparent,rgba(2,6,23,0.8))]" />
        <div className="fixed inset-0 -z-10 bg-grid opacity-70" />

        <Navbar />

        <main className="flex-1 pt-16">{children}</main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

