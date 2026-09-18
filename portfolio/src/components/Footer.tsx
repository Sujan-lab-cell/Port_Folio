import Link from "next/link";
import { portfolioData } from "@/src/data/portfolio";
import { Code2, BriefcaseBusiness, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-900/10 px-4 py-12 text-slate-600 dark:border-white/10 dark:text-slate-400 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            {portfolioData.name} — {portfolioData.title.split("|")[0].trim()}
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Built with Next.js, TypeScript, Tailwind CSS, Framer Motion & Lucide Icons. © {new Date().getFullYear()} Sujan K S.
          </p>
        </div>

        <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs transition hover:text-cyan-500 dark:hover:text-cyan-300"
            aria-label="GitHub"
          >
            <Code2 size={18} /> GitHub
          </a>
          <a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs transition hover:text-cyan-500 dark:hover:text-cyan-300"
            aria-label="LinkedIn"
          >
            <BriefcaseBusiness size={18} /> LinkedIn
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            className="flex items-center gap-1.5 text-xs transition hover:text-cyan-500 dark:hover:text-cyan-300"
            aria-label="Email"
          >
            <Mail size={18} /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}
