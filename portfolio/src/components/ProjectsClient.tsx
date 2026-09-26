"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  ExternalLink,
  FolderGit2,
  Search,
  Sparkles,
  Terminal,
  Activity,
  Cpu,
  BrainCircuit,
  Eye,
  BarChart3,
  X,
  Layers,
  FlaskConical,
  FileText,
  Database,
  Building2,
  ShieldAlert,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/src/data/portfolio";
import { SectionHeading } from "@/src/components/SectionHeading";
import { useLanguage } from "@/src/i18n";

export function ProjectsClient() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const { ui, portfolioData } = useLanguage();

  const categories = [
    "All",
    "AI",
    "Machine Learning",
    "Computer Vision",
    "NLP",
    "Deep Learning",
    "Data Analytics",
    "Ranking",
    "LLM",
    "Medical AI",
    "Java",
    "DBMS",
    "Research",
  ];

  const filteredProjects = useMemo(() => {
    return portfolioData.projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" ||
        project.category.some((c) => c.toLowerCase() === activeCategory.toLowerCase());
      const needle = query.trim().toLowerCase();
      const matchesSearch =
        !needle ||
        [project.title, project.short, ...project.category, ...project.tech, ...(project.metrics || [])]
          .join(" ")
          .toLowerCase()
          .includes(needle);

      return matchesCategory && matchesSearch;
    });
  }, [query, activeCategory, portfolioData]);

  const isFilteringActive = query.trim().length > 0 || activeCategory !== "All";

  // Project references
  const polypProject = portfolioData.projects.find((p) => p.slug === "colorectal-polyp-temporal-validation");
  const geoSentinel = portfolioData.projects.find((p) => p.slug === "geosentinel");
  const flyrankProject = portfolioData.projects.find((p) => p.slug === "flyrank-search-performance-prediction");
  const smartQ = portfolioData.projects.find((p) => p.slug === "smartq-generator");
  const faceGen = portfolioData.projects.find((p) => p.slug === "ai-face-generation");
  const invoiceParser = portfolioData.projects.find((p) => p.slug === "invoice-data-to-json-parser");
  const textAnomaly = portfolioData.projects.find((p) => p.slug === "text-anomaly-detection");
  const eCommerce = portfolioData.projects.find((p) => p.slug === "ecommerce-dashboard");
  const carDetection = portfolioData.projects.find((p) => p.slug === "car-pedestrian-detection");
  const banking = portfolioData.projects.find((p) => p.slug === "banking-management-system");

  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Top Header */}
        <SectionHeading
          eyebrow={ui.projectsPage.eyebrow}
          title={ui.projectsPage.title}
          text={ui.projectsPage.subtitle}
        />

        {/* Integrated Search Bar & Category Filters */}
        <div className="space-y-4 rounded-2xl border border-slate-900/10 bg-white/70 p-4 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-950/60 md:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-600 dark:text-cyan-400" size={18} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={ui.projectsPage.searchPlaceholder}
                className="w-full rounded-xl border border-slate-900/10 bg-white/80 py-3 pl-11 pr-10 text-sm font-mono text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:placeholder-slate-500"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 cursor-pointer"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Results count pill */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0">
              <Sparkles size={14} className="text-cyan-500" />
              <span>Showing {filteredProjects.length} Projects</span>
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-900/5 dark:border-white/5">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mr-2">
              Filter By:
            </span>
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20"
                      : "border border-slate-900/10 bg-slate-900/5 text-slate-700 hover:border-cyan-500/40 hover:text-cyan-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-cyan-500/40 dark:hover:text-cyan-300"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Case Study Showcase */}
        {!isFilteringActive ? (
          /* Editorial Asymmetric Layout when viewing all */
          <div className="space-y-10">
            {/* 1. Final Year Project / Current Research Spotlight: Colorectal Polyp Temporal Validation */}
            {polypProject && <ColorectalPolypHero project={polypProject} />}

            {/* 2. Industry ML Project Spotlight: FlyRank Search Performance Prediction */}
            {flyrankProject && <FlyRankIndustryHero project={flyrankProject} />}

            {/* 3. Featured Project: GeoSentinel */}
            {geoSentinel && <GeoSentinelHero project={geoSentinel} />}

            {/* Tier Spotlight Grid (SmartQ & AI Face Generation) */}
            <div className="grid gap-8 lg:grid-cols-2">
              {smartQ && <SecondaryFeaturedCard project={smartQ} icon={<BrainCircuit size={20} className="text-sky-400" />} badge="MULTILINGUAL NLP PIPELINE" />}
              {faceGen && <SecondaryFeaturedCard project={faceGen} icon={<Cpu size={20} className="text-fuchsia-400" />} badge="GENERATIVE ADVERSARIAL MODEL" />}
            </div>

            {/* Tier Spotlight Grid (Invoice Parser & Text Anomaly Detection) */}
            <div className="grid gap-8 lg:grid-cols-2">
              {invoiceParser && <CompactCaseStudyCard project={invoiceParser} icon={<FileText size={20} className="text-emerald-400" />} badge="HYBRID AI INVOICE PARSER" />}
              {textAnomaly && <CompactCaseStudyCard project={textAnomaly} icon={<ShieldAlert size={20} className="text-purple-400" />} badge="LANGCHAIN & LANGGRAPH LLM AGENT" />}
            </div>

            {/* Tier Spotlight Grid (E-Commerce Dashboard & Car Detection) */}
            <div className="grid gap-8 lg:grid-cols-2">
              {eCommerce && <CompactCaseStudyCard project={eCommerce} icon={<BarChart3 size={20} className="text-amber-400" />} badge="BUSINESS INTELLIGENCE & ANALYTICS" />}
              {carDetection && <CompactCaseStudyCard project={carDetection} icon={<Eye size={20} className="text-blue-400" />} badge="URBAN COMPUTER VISION" />}
            </div>

            {/* Tier Spotlight Grid (Banking System) */}
            <div className="grid gap-8 lg:grid-cols-2">
              {banking && <CompactCaseStudyCard project={banking} icon={<Database size={20} className="text-indigo-400" />} badge="JAVA & RELATIONAL DBMS" />}
            </div>
          </div>
        ) : (
          /* Filtered Results View */
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2">
                {filteredProjects.map((project) => (
                  <FilteredProjectCard key={project.slug} project={project} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-2xl border border-slate-900/10 bg-white/70 p-12 text-center backdrop-blur dark:border-white/10 dark:bg-slate-950/60"
              >
                <Layers className="mx-auto text-slate-400" size={40} />
                <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">{ui.projectsPage.noProjectsFound}</h3>
                <button
                  onClick={() => {
                    setQuery("");
                    setActiveCategory("All");
                  }}
                  className="mt-4 rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 cursor-pointer"
                >
                  {ui.buttons.clearFilters}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}

{/* Industry ML Project Hero Component — FlyRank */}
function FlyRankIndustryHero({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-3xl border border-blue-500/40 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/70 p-8 text-white shadow-2xl backdrop-blur transition-all duration-300 hover:border-blue-400/70 hover:shadow-blue-500/10 lg:p-10"
    >
      <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-500" />

      {/* Header Bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-blue-500/20 pb-4">
        <div className="flex items-center gap-2.5">
          <Building2 size={16} className="text-cyan-400" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">
            [ INDUSTRY ML PROJECT • INTERNSHIP ]
          </span>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 font-mono text-xs font-semibold text-cyan-300">
          <Sparkles size={13} className="text-cyan-400" />
          <span>REAL-WORLD SEO PERFORMANCE DATA</span>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-md border border-cyan-500/40 bg-cyan-500/20 px-3 py-1 font-mono text-xs font-bold text-cyan-300">
              Industry ML Project
            </span>
            {project.category.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-blue-500/30 bg-blue-500/10 px-3 py-1 font-mono text-xs font-semibold text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl font-mono">
              {project.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
              {project.short}
            </p>
          </div>

          {/* Key Metrics Callouts */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/40 p-4 backdrop-blur">
              <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-cyan-400">
                Precision@50 Benchmark
              </span>
              <span className="text-2xl font-extrabold font-mono text-cyan-300">
                0.444 <span className="text-xs font-normal text-slate-400">(vs 0.392 baseline)</span>
              </span>
            </div>
            <div className="rounded-2xl border border-blue-500/30 bg-blue-950/40 p-4 backdrop-blur">
              <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-blue-400">
                Dataset Scale
              </span>
              <span className="text-2xl font-extrabold font-mono text-blue-300">
                ~78.8M Records
              </span>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <span className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
              Stack & Tooling:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs font-medium text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 border border-cyan-500/40 px-5 py-3 text-xs font-mono font-bold text-cyan-300 transition hover:bg-cyan-500/20 hover:border-cyan-400"
              >
                <FolderGit2 size={16} />
                <span>GitHub Repo</span>
                <ExternalLink size={12} />
              </a>
            )}
            {"paperUrl" in project && project.paperUrl && (
              <a
                href={project.paperUrl as string}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-5 py-3 text-xs font-mono font-bold text-cyan-300 transition hover:bg-cyan-500/20"
              >
                <span>View Research Paper</span>
                <ArrowRight size={14} />
              </a>
            )}
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-xs font-mono font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 hover:scale-105"
            >
              <span>Read Case Study</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Right Column: Key Highlights Box */}
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-2xl border border-blue-500/30 bg-slate-950/90 p-5 font-mono text-xs shadow-2xl">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3 text-slate-400">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-cyan-400" />
                <span className="text-cyan-300 font-semibold">flyrank_seo_pipeline.py</span>
              </div>
              <span className="text-[10px] text-slate-500">Industry ML Workflow</span>
            </div>

            <div className="space-y-3 leading-relaxed text-slate-300">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500">Search Data Volume:</span>
                <span className="text-cyan-300">~78.8 Million Records</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500">Validation Scheme:</span>
                <span className="text-emerald-400">5-Fold Client-Grouped CV</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500">Top Model:</span>
                <span className="text-cyan-300">Random Forest (Precision@50 0.444)</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500">Decision Support:</span>
                <span className="font-bold text-cyan-300">Human-in-the-Loop Workflow</span>
              </div>

              <div className="mt-4 pt-2 border-t border-blue-500/20">
                <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block mb-2">
                  Technical Architecture Highlights:
                </span>
                <div className="space-y-1 text-[11px] text-slate-400">
                  <p>1. Multi-client search signal feature extraction</p>
                  <p>2. Target leakage detection & domain split</p>
                  <p>3. Model benchmarking (RF, XGB, LightGBM, CatBoost)</p>
                  <p>4. Actionable SEO content review prioritization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

{/* Final Year Project / Current Research Hero Component */}
function ColorectalPolypHero({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-3xl border border-rose-500/40 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/80 p-8 text-white shadow-2xl backdrop-blur transition-all duration-300 hover:border-rose-400/70 hover:shadow-rose-500/10 lg:p-10"
    >
      <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl pointer-events-none group-hover:bg-rose-500/20 transition-all duration-500" />

      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-rose-500/20 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-rose-500" />
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-rose-400">
            [ Final Year Project • In Progress ]
          </span>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3.5 py-1 font-mono text-xs font-semibold text-rose-300">
          <FlaskConical size={13} className="text-rose-400" />
          <span>ACTIVE RESEARCH & PAPER PREPARATION</span>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap gap-2">
            {project.category.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-rose-500/30 bg-rose-500/10 px-3 py-1 font-mono text-xs font-semibold text-rose-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl font-mono">
              {project.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
              {project.short}
            </p>
          </div>

          <div className="rounded-2xl border border-amber-500/30 bg-amber-950/30 p-4 backdrop-blur">
            <div className="flex items-center gap-3 text-amber-300 font-mono text-xs font-semibold">
              <Activity size={18} className="shrink-0 text-amber-400 animate-pulse" />
              <span>Currently working on this project and preparing a research paper.</span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
              Core Methodologies & Domain Tools:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs font-medium text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 border border-rose-500/40 px-5 py-3 text-xs font-mono font-bold text-rose-300 transition hover:bg-rose-500/20 hover:border-rose-400"
              >
                <FolderGit2 size={16} />
                <span>GitHub Repository</span>
                <ExternalLink size={12} />
              </a>
            )}
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-xl bg-rose-500 px-6 py-3 text-xs font-mono font-bold text-slate-950 shadow-lg shadow-rose-500/20 transition hover:bg-rose-400 hover:scale-105"
            >
              <span>Read Case Study</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-2xl border border-rose-500/30 bg-slate-950/90 p-5 font-mono text-xs shadow-2xl">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3 text-slate-400">
              <div className="flex items-center gap-2">
                <FlaskConical size={14} className="text-rose-400" />
                <span className="text-rose-300 font-semibold">temporal_validation_benchmark.py</span>
              </div>
              <span className="text-[10px] text-slate-500">Video AI Research</span>
            </div>

            <div className="space-y-3 leading-relaxed text-slate-300">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500">Domain Target:</span>
                <span className="text-rose-300">Colorectal Polyp Detection</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500">Input Data:</span>
                <span className="text-indigo-300">Endoscopic Video Sequences</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500">Primary Objective:</span>
                <span className="text-rose-300">Temporal Consistency Validation</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500">Current Phase:</span>
                <span className="font-bold text-amber-300">Active Work & Paper Prep</span>
              </div>

              <div className="mt-4 pt-2 border-t border-rose-500/20">
                <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider block mb-2">
                  Research Pipeline Stages:
                </span>
                <div className="space-y-1 text-[11px] text-slate-400">
                  <p>1. Video Frame Extraction & Preprocessing</p>
                  <p>2. Inter-Frame Polyp Tracking & Detection</p>
                  <p>3. Temporal Continuity Metrics Formulation</p>
                  <p>4. Empirical Evaluation & Paper Synthesis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

{/* GeoSentinel Hero Component */}
function GeoSentinelHero({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 text-white shadow-2xl backdrop-blur transition-all duration-300 hover:border-cyan-500/60 hover:shadow-cyan-500/10 lg:p-10"
    >
      <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-500" />

      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-cyan-500/20 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-400">
            [ SYSTEM STATUS: REAL-TIME MONITORED ]
          </span>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 font-mono text-xs font-semibold text-cyan-300">
          <Eye size={13} className="text-cyan-400" />
          <span>FEATURED AI SYSTEM SPOTLIGHT</span>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap gap-2">
            {project.category.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-semibold text-cyan-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl font-mono">
              {project.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
              {project.short}
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/40 p-5 backdrop-blur">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="block font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  Segmentation Precision Score
                </span>
                <span className="text-4xl font-extrabold font-mono text-cyan-300 md:text-5xl tracking-tight">
                  mAP@0.50: 0.731
                </span>
              </div>
              <div className="shrink-0 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 font-mono text-xs font-semibold text-emerald-300">
                ✓ Real-Time Visual Alerts & Risk Classification
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <span className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
              Architecture & Technologies:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs font-medium text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 border border-cyan-500/40 px-5 py-3 text-xs font-mono font-bold text-cyan-300 transition hover:bg-cyan-500/20 hover:border-cyan-400"
              >
                <FolderGit2 size={16} />
                <span>GitHub Repository</span>
                <ExternalLink size={12} />
              </a>
            )}
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-xs font-mono font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 hover:scale-105"
            >
              <span>Read Case Study</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-2xl border border-cyan-500/30 bg-slate-950/90 p-5 font-mono text-xs shadow-2xl">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3 text-slate-400">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-cyan-400" />
                <span className="text-cyan-300 font-semibold">geosentinel_inference.py</span>
              </div>
              <span className="text-[10px] text-slate-500">YOLOv8-Seg Engine</span>
            </div>

            <div className="space-y-3 leading-relaxed text-slate-300">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500">Model Framework:</span>
                <span className="text-cyan-300">PyTorch / Ultralytics</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500">Inference Mode:</span>
                <span className="text-emerald-400">Real-time Streamlit</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500">Terrain Risk Mask:</span>
                <span className="text-cyan-300">Polygon Segmentation</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-500">mAP@0.50 Metric:</span>
                <span className="font-bold text-emerald-300">0.731 (High Precision)</span>
              </div>

              <div className="mt-4 pt-2 border-t border-cyan-500/20">
                <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block mb-2">
                  Processing Pipeline:
                </span>
                <div className="space-y-1 text-[11px] text-slate-400">
                  <p>1. Image Stream Input → Preprocessing</p>
                  <p>2. YOLOv8 Segmentation Mask Extraction</p>
                  <p>3. Risk Matrix Scoring & Polygon Overlay</p>
                  <p>4. Visual Hazard Dashboard Alerting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

{/* Secondary Featured Case Study Card Component */}
function SecondaryFeaturedCard({ project, icon, badge }: { project: Project; icon: React.ReactNode; badge: string }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col justify-between rounded-3xl border border-slate-900/10 bg-white/80 p-7 shadow-xl backdrop-blur transition-all duration-300 hover:border-cyan-500/40 dark:border-white/10 dark:bg-slate-950/70 dark:hover:border-cyan-500/40"
    >
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-2 border-b border-slate-900/5 dark:border-white/5 pb-3">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold text-cyan-600 dark:text-cyan-400">
            {icon}
            <span className="uppercase tracking-wider">{badge}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.category.slice(0, 2).map((tag) => (
              <span key={tag} className="rounded-md bg-cyan-500/10 px-2 py-0.5 font-mono text-[11px] font-medium text-cyan-600 dark:text-cyan-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold font-mono tracking-tight text-slate-950 dark:text-white">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {project.short}
          </p>
        </div>

        {project.metrics && project.metrics.length > 0 && (
          <div className="rounded-xl border border-slate-900/10 bg-slate-900/[0.02] p-4 dark:border-white/10 dark:bg-white/[0.04]">
            <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Performance & Outcomes:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.metrics.map((metric) => (
                <span key={metric} className="rounded-lg bg-cyan-500/10 px-3 py-1 font-mono text-xs font-bold text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                  {metric}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="rounded-md border border-slate-900/10 bg-slate-900/5 px-2.5 py-0.5 font-mono text-[11px] text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-slate-900/10 dark:border-white/10 flex items-center justify-between gap-3">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-slate-700 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300 transition"
          >
            <FolderGit2 size={15} />
            <span>GitHub</span>
          </a>
        ) : <div />}

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline transition"
        >
          <span>Read Case Study</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.article>
  );
}

{/* Compact Case Study Card Component */}
function CompactCaseStudyCard({ project, icon, badge }: { project: Project; icon: React.ReactNode; badge: string }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col justify-between rounded-3xl border border-slate-900/10 bg-white/80 p-7 shadow-xl backdrop-blur transition-all duration-300 hover:border-cyan-500/40 dark:border-white/10 dark:bg-slate-950/70 dark:hover:border-cyan-500/40"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-900/5 dark:border-white/5 pb-3">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold text-slate-500 dark:text-slate-400">
            {icon}
            <span className="uppercase tracking-wider">{badge}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {"projectType" in project && project.projectType && (
              <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 font-mono text-[11px] font-semibold text-cyan-600 dark:text-cyan-300">
                {project.projectType as string}
              </span>
            )}
            {project.category.map((tag) => (
              <span key={tag} className="rounded-md bg-slate-900/5 px-2 py-0.5 font-mono text-[11px] font-medium text-slate-600 dark:bg-white/5 dark:text-slate-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold font-mono text-slate-950 dark:text-white">
            {project.title}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
            {project.short}
          </p>
        </div>

        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.metrics.map((m) => (
              <span key={m} className="rounded-md border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 font-mono text-xs font-semibold text-cyan-600 dark:text-cyan-300">
                {m}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="rounded-md border border-slate-900/10 bg-slate-900/5 px-2 py-0.5 font-mono text-[11px] text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-900/10 dark:border-white/10 flex items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-slate-700 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300 transition"
            >
              <FolderGit2 size={14} />
              <span>GitHub</span>
            </a>
          )}
          {"paperUrl" in project && project.paperUrl && (
            <a
              href={project.paperUrl as string}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline transition"
            >
              <ExternalLink size={13} />
              <span>Paper</span>
            </a>
          )}
          {project.demo && project.demo !== "#contact" && !("paperUrl" in project && project.paperUrl === project.demo) && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline transition"
            >
              <ExternalLink size={13} />
              <span>Live API</span>
            </a>
          )}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline transition"
        >
          <span>Read Case Study</span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </motion.article>
  );
}

{/* Card for Filtered Search State */}
function FilteredProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
      className="flex flex-col justify-between rounded-3xl border border-slate-900/10 bg-white/80 p-7 shadow-xl backdrop-blur transition-all duration-300 dark:border-white/10 dark:bg-slate-950/70"
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-1.5">
          {"projectType" in project && project.projectType && (
            <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-cyan-600 dark:text-cyan-300">
              {project.projectType as string}
            </span>
          )}
          {"statusBadge" in project && project.statusBadge && (
            <span className="rounded-md border border-rose-500/30 bg-rose-500/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-rose-600 dark:text-rose-300">
              {project.statusBadge as string}
            </span>
          )}
          {project.category.map((tag) => (
            <span key={tag} className="rounded-md bg-cyan-500/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-cyan-600 dark:text-cyan-300">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold font-mono text-slate-950 dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {project.short}
        </p>

        {"statusMention" in project && project.statusMention && (
          <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 font-mono text-xs text-amber-700 dark:text-amber-300">
            🔬 {project.statusMention as string}
          </div>
        )}

        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.metrics.map((m) => (
              <span key={m} className="rounded-lg bg-cyan-500/10 px-3 py-1 font-mono text-xs font-bold text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                {m}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-md border border-slate-900/10 bg-slate-900/5 px-2.5 py-0.5 font-mono text-[11px] text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-slate-900/10 dark:border-white/10 flex items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-slate-700 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300 transition"
            >
              <FolderGit2 size={15} />
              <span>GitHub Repo</span>
            </a>
          )}
          {"paperUrl" in project && project.paperUrl && (
            <a
              href={project.paperUrl as string}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline transition"
            >
              <ExternalLink size={13} />
              <span>Research Paper</span>
            </a>
          )}
          {project.demo && project.demo !== "#contact" && !("paperUrl" in project && project.paperUrl === project.demo) && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline transition"
            >
              <ExternalLink size={13} />
              <span>Live API</span>
            </a>
          )}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-500 px-4 py-2 font-mono text-xs font-bold text-slate-950 shadow-md shadow-cyan-500/20 hover:bg-cyan-400 transition"
        >
          <span>Read Case Study</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.article>
  );
}
