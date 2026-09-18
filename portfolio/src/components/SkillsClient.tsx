"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Eye,
  Mic,
  BarChart3,
  Boxes,
  Bot,
  Server,
  Database,
  Wrench,
  Cpu,
  Search,
  Sparkles,
  Layers,
  Terminal,
  CheckCircle2,
} from "lucide-react";
import { portfolioData } from "@/src/data/portfolio";
import { SectionHeading } from "@/src/components/SectionHeading";

const iconMap = {
  Code2,
  BrainCircuit,
  Eye,
  Mic,
  BarChart3,
  Boxes,
  Bot,
  Server,
  Database,
  Wrench,
  Cpu,
};

const categoryGlows = [
  "border-cyan-500/30 hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]",
  "border-emerald-500/30 hover:border-emerald-400/60 hover:shadow-[0_0_25px_rgba(52,211,153,0.15)]",
  "border-indigo-500/30 hover:border-indigo-400/60 hover:shadow-[0_0_25px_rgba(129,140,248,0.15)]",
  "border-purple-500/30 hover:border-purple-400/60 hover:shadow-[0_0_25px_rgba(192,132,252,0.15)]",
  "border-sky-500/30 hover:border-sky-400/60 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]",
  "border-amber-500/30 hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(251,191,36,0.15)]",
  "border-teal-500/30 hover:border-teal-400/60 hover:shadow-[0_0_25px_rgba(45,212,191,0.15)]",
  "border-blue-500/30 hover:border-blue-400/60 hover:shadow-[0_0_25px_rgba(96,165,250,0.15)]",
  "border-rose-500/30 hover:border-rose-400/60 hover:shadow-[0_0_25px_rgba(251,113,133,0.15)]",
  "border-cyan-500/30 hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]",
  "border-violet-500/30 hover:border-violet-400/60 hover:shadow-[0_0_25px_rgba(167,139,250,0.15)]",
];

export function SkillsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const totalSkillCount = useMemo(() => {
    return portfolioData.skills.reduce((acc, skill) => acc + skill.items.length, 0);
  }, []);

  const filteredSkills = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return portfolioData.skills.filter((skillGroup) => {
      const matchesCategory =
        activeCategory === "all" ||
        skillGroup.group.toLowerCase().includes(activeCategory.toLowerCase());

      const matchesSearch =
        !query ||
        skillGroup.group.toLowerCase().includes(query) ||
        skillGroup.description?.toLowerCase().includes(query) ||
        skillGroup.items.some((item) => item.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Header Section */}
        <SectionHeading
          eyebrow="Technical Stack"
          title="Technical Skills & Expertise"
          text="A comprehensive overview of programming languages, machine learning frameworks, computer vision toolkits, robotics, and core CS foundations."
        />

        {/* Quick Stats Overview Banner */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-cyan-500/20 bg-white/70 p-5 backdrop-blur dark:border-cyan-500/20 dark:bg-slate-950/60">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-300">
                Total Skills & Tools
              </span>
              <Sparkles size={18} className="text-cyan-500" />
            </div>
            <p className="mt-2 text-3xl font-bold font-mono text-slate-950 dark:text-white">
              {totalSkillCount}+
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Verified hands-on technologies
            </p>
          </div>

          <div className="rounded-xl border border-emerald-500/20 bg-white/70 p-5 backdrop-blur dark:border-emerald-500/20 dark:bg-slate-950/60">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-300">
                Technical Domains
              </span>
              <Layers size={18} className="text-emerald-500" />
            </div>
            <p className="mt-2 text-3xl font-bold font-mono text-slate-950 dark:text-white">
              {portfolioData.skills.length}
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Categorized stack areas
            </p>
          </div>

          <div className="rounded-xl border border-indigo-500/20 bg-white/70 p-5 backdrop-blur dark:border-indigo-500/20 dark:bg-slate-950/60">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-300">
                Core Focus
              </span>
              <BrainCircuit size={18} className="text-indigo-500" />
            </div>
            <p className="mt-2 text-xl font-bold text-slate-950 dark:text-white">
              AI / ML & Robotics
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              CV, ROS2, Deep Learning & NLP
            </p>
          </div>

          <div className="rounded-xl border border-purple-500/20 bg-white/70 p-5 backdrop-blur dark:border-purple-500/20 dark:bg-slate-950/60">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-300">
                Assessment Policy
              </span>
              <CheckCircle2 size={18} className="text-purple-500" />
            </div>
            <p className="mt-2 text-xl font-bold text-slate-950 dark:text-white">
              Verified Stack
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              No arbitrary percentage numbers
            </p>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="space-y-4">
          <div className="relative w-full">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Python, YOLO, PyTorch, ROS2, Docker, Scikit-learn)..."
              className="w-full rounded-xl border border-slate-900/10 bg-white/80 py-3.5 pl-11 pr-4 text-sm text-slate-950 placeholder-slate-400 outline-none transition focus:border-cyan-500 dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:placeholder-slate-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-cyan-500 hover:underline"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Filter Category Chips */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition cursor-pointer ${
                activeCategory === "all"
                  ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                  : "border border-slate-900/10 bg-white/60 text-slate-600 hover:border-cyan-500/50 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
              }`}
            >
              All Domains ({portfolioData.skills.length})
            </button>
            {portfolioData.skills.map((skill) => (
              <button
                key={skill.group}
                onClick={() => setActiveCategory(skill.group)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition cursor-pointer ${
                  activeCategory === skill.group
                    ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                    : "border border-slate-900/10 bg-white/60 text-slate-600 hover:border-cyan-500/50 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                }`}
              >
                {skill.group}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        {filteredSkills.length === 0 ? (
          <div className="rounded-xl border border-slate-900/10 bg-white/60 p-12 text-center backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
            <p className="text-lg font-medium text-slate-700 dark:text-slate-300">
              No skills match &quot;{searchQuery}&quot;
            </p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Try searching for &quot;Python&quot;, &quot;Vision&quot;, &quot;ROS2&quot;, or reset filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filteredSkills.map((skillGroup, idx) => {
                const IconComponent =
                  iconMap[skillGroup.icon as keyof typeof iconMap] || Code2;
                const glowClass = categoryGlows[idx % categoryGlows.length];

                return (
                  <motion.div
                    key={skillGroup.group}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: idx * 0.03 }}
                    whileHover={{ y: -4 }}
                    className={`flex flex-col justify-between rounded-xl border bg-white/75 p-6 backdrop-blur transition duration-300 dark:bg-white/[0.05] ${glowClass}`}
                  >
                    <div>
                      {/* Top Header Row */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-950 text-cyan-400 border border-cyan-500/20 shadow-inner dark:bg-slate-900 dark:text-cyan-300">
                            <IconComponent size={22} />
                          </span>
                          <div>
                            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                              {skillGroup.group}
                            </h3>
                            <span className="inline-block rounded-md bg-cyan-500/10 px-2 py-0.5 text-[11px] font-mono font-medium text-cyan-700 dark:text-cyan-300">
                              {skillGroup.items.length} Skills
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Domain Description */}
                      <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                        {skillGroup.description}
                      </p>

                      {/* Skill Items Pills */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {skillGroup.items.map((item) => {
                          const isMatch =
                            searchQuery &&
                            item.toLowerCase().includes(searchQuery.toLowerCase());

                          return (
                            <motion.span
                              key={item}
                              whileHover={{ scale: 1.05 }}
                              className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition ${
                                isMatch
                                  ? "border-cyan-500 bg-cyan-500/20 font-semibold text-cyan-900 dark:text-cyan-100"
                                  : "border-slate-900/10 bg-slate-900/[0.03] text-slate-700 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-cyan-400/40 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-300"
                              }`}
                            >
                              {item}
                            </motion.span>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Recruiter Summary Footer Card */}
        <div className="rounded-xl border border-cyan-500/20 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 p-6 text-white shadow-2xl md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Terminal size={18} className="text-cyan-400" />
                <h3 className="text-xl font-bold">Applied Stack Summary for Technical Evaluation</h3>
              </div>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
                Sujan K S combines deep learning fundamentals with hands-on computer vision (YOLOv8, OpenCV),
                multilingual speech & transformer pipelines (T5), robotics OS (ROS2), and clean backend software practices (FastAPI, Docker, SQL).
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="https://github.com/Sujan-lab-cell"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-xs font-mono font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
              >
                View GitHub Repositories
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
