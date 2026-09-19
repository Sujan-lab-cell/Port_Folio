"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fbff] text-slate-950 selection:bg-cyan-300/40 dark:bg-[#05070d] dark:text-white">
      {/* Global Background Ambient Effects */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.20),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.14),transparent_30%),linear-gradient(180deg,transparent,rgba(15,23,42,0.05))] dark:bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(129,140,248,0.13),transparent_30%),linear-gradient(180deg,transparent,rgba(2,6,23,0.8))]" />
      <div className="fixed inset-0 -z-10 bg-grid opacity-40 dark:opacity-70" />

      <Navbar dark={dark} setDark={setDark} />

      <main className="flex-1 pt-16">{children}</main>

      <Footer />
    </div>
  );
}

