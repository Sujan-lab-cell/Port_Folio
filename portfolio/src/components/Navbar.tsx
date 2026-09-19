"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Command, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const routes = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Achievements", path: "/achievements" },
  { name: "Blog", path: "/blog" },
  { name: "Profiles", path: "/profiles" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-900/10 bg-white/70 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/60">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Go to home">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-slate-950 text-sm font-bold text-white dark:bg-white dark:text-slate-950">
              SK
            </span>
            <span className="hidden text-sm font-semibold sm:block">Sujan K S</span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {routes.map((item) => {
              const isActive = pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/15 dark:text-cyan-300 font-semibold"
                      : "text-slate-600 hover:bg-slate-900/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCommandOpen(true)}
              className="hidden items-center gap-2 rounded-md border border-slate-900/10 px-3 py-2 text-sm text-slate-600 transition hover:border-cyan-500/50 hover:text-slate-950 dark:border-white/10 dark:text-slate-300 dark:hover:text-white sm:flex"
            >
              <Command size={16} /> Ctrl K
            </button>
            <button
              onClick={() => setMenuOpen((value) => !value)}
              className="grid h-10 w-10 place-items-center rounded-md border border-slate-900/10 lg:hidden dark:border-white/10"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-slate-900/10 bg-white/95 dark:border-white/10 dark:bg-slate-950/95 lg:hidden"
            >
              <div className="grid gap-1 px-4 py-3">
                {routes.map((item) => {
                  const isActive = pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));
                  return (
                    <Link
                      key={item.name}
                      href={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`rounded-md px-3 py-2 text-left text-sm font-medium ${
                        isActive
                          ? "bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/15 dark:text-cyan-300 font-semibold"
                          : "text-slate-700 hover:bg-slate-900/5 dark:text-slate-200 dark:hover:bg-white/10"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {commandOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-slate-950/70 p-4 backdrop-blur"
            onClick={() => setCommandOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 20 }}
              className="mx-auto mt-24 max-w-xl rounded-lg border border-slate-900/10 bg-white p-2 text-slate-950 shadow-2xl dark:border-white/10 dark:bg-slate-950 dark:text-white"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center gap-2 border-b border-slate-900/10 p-3 dark:border-white/10">
                <Command size={18} />
                <span className="text-sm font-medium">Quick Navigation</span>
              </div>
              <div className="p-2">
                {routes.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setCommandOpen(false)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-sm hover:bg-slate-900/5 dark:hover:bg-white/10"
                  >
                    <span>{item.name}</span>
                    <ArrowRight size={15} />
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
