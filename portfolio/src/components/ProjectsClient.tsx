"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Code2, Search } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "@/src/data/portfolio";
import { SectionHeading } from "@/src/components/SectionHeading";

export function ProjectsClient() {
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return portfolioData.projects;
    return portfolioData.projects.filter((project) =>
      [project.title, project.short, ...project.category, ...project.tech].join(" ").toLowerCase().includes(needle),
    );
  }, [query]);

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Impact-first AI case studies."
          text="Searchable project cards with metrics, architecture, results, and dedicated detail pages."
        />

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search AI, Computer Vision, NLP..."
              className="w-full rounded-md border border-slate-900/10 bg-white/80 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-cyan-500 dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {["All", "AI", "Computer Vision", "NLP", "Deep Learning"].map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag === "All" ? "" : tag)}
                className={`rounded-md border px-3.5 py-2 text-sm font-medium transition ${
                  (tag === "All" && !query) || query === tag
                    ? "border-cyan-500 bg-cyan-500/10 text-cyan-600 dark:text-cyan-300"
                    : "border-slate-900/10 hover:border-cyan-500/60 dark:border-white/10"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.slug}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-lg border border-slate-900/10 bg-white/75 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]"
            >
              <div className={`h-2 bg-gradient-to-r ${project.accent}`} />
              <div className="p-6 md:p-8">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.category.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-700 dark:text-cyan-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">{project.title}</h2>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{project.short}</p>

                <div className="mt-5 grid gap-2 sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="rounded-md border border-slate-900/10 bg-slate-900/[0.02] p-3 text-sm font-medium dark:border-white/10 dark:bg-white/[0.03]"
                    >
                      {metric}
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-900/10 px-2.5 py-1 text-xs text-slate-600 dark:border-white/10 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-slate-950"
                    >
                      <Code2 size={16} /> GitHub
                    </a>
                  )}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 rounded-md border border-slate-900/10 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-900/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
                  >
                    Read Case Study <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
