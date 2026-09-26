"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  Terminal,
  RotateCcw,
  FileText,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { IntroScreen } from "@/src/components/IntroScreen";
import { AIRobotHeroCanvas } from "@/src/components/AIRobotHeroCanvas";
import { useLanguage } from "@/src/i18n";

export function HomeClient() {
  const [mounted, setMounted] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const { lang, ui, portfolioData } = useLanguage();

  const [terminalInput, setTerminalInput] = useState("help");

  useEffect(() => {
    setMounted(true);
    const hasSeen = sessionStorage.getItem("hasSeenIntro");
    if (!hasSeen) {
      setShowIntro(true);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    if (showIntro) {
      timeoutId = setTimeout(() => {
        document.body.style.overflow = "hidden";
      }, 0);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      clearTimeout(timeoutId);
      document.body.style.overflow = "";
    };
  }, [mounted, showIntro]);

  const handleEnterPortfolio = () => {
    setShowIntro(false);
    sessionStorage.setItem("hasSeenIntro", "true");
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

  const terminalOutput = useMemo(() => {
    const command = terminalInput.trim().toLowerCase();
    if (command === "about") return portfolioData.about.careerObjective;
    if (command === "projects") return portfolioData.projects.map((project) => project.title).join(" | ");
    if (command === "skills") return portfolioData.skills.map((skill) => skill.group).join(" | ");
    if (command === "resume") return `Resume: ${portfolioData.about.education.degree}, CGPA ${portfolioData.about.education.cgpa}.`;
    if (command === "contact") return `${portfolioData.email} | ${portfolioData.social.linkedin}`;
    return lang === "ja"
      ? "使用可能なコマンド: help, about, projects, skills, resume, contact"
      : "Available commands: help, about, projects, skills, resume, contact";
  }, [terminalInput, portfolioData, lang]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && <IntroScreen key="intro" onEnter={handleEnterPortfolio} />}
      </AnimatePresence>

      <div className="space-y-24 py-6">
        {/* Asymmetric Experimental AI Studio Hero Section */}
        <section className="relative mx-auto min-h-[90vh] max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden">
          {/* Massive Oversized Background Typography Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
            <span className="text-7xl sm:text-9xl md:text-[11rem] lg:text-[13rem] font-black tracking-tighter uppercase text-slate-950/10 dark:text-white/[0.04] leading-none block">
              {portfolioData.name}
            </span>
          </div>

          {/* Top Floating Badge Bar */}
          <div className="relative z-20 mb-4 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-400/10 px-4 py-2 text-xs sm:text-sm font-medium text-cyan-700 dark:text-cyan-200 backdrop-blur-md">
              <Sparkles size={16} className="text-cyan-400 animate-pulse" /> {ui.home.availableForWork}
            </div>

            <button
              onClick={handleReplayIntro}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-900/10 bg-slate-900/5 px-3.5 py-1.5 text-xs font-mono font-medium text-slate-700 transition hover:border-cyan-500/50 hover:bg-cyan-500/10 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-cyan-300 cursor-pointer"
              title="Replay Futuristic AI Intro"
            >
              <RotateCcw size={13} className="text-cyan-500" />
              <span>{ui.buttons.replay3dIntro}</span>
            </button>
          </div>

          {/* Asymmetric 2-Column Hero Grid with Overlapping 3D AI Robot Canvas */}
          <div className="relative z-10 grid w-full items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left Hero Text & CTA Block */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.05]">
                {portfolioData.name}
              </h1>

              <div className="mt-4 flex items-center gap-3">
                <span className="h-0.5 w-10 bg-cyan-400" />
                <p className="text-xl sm:text-2xl font-mono font-semibold text-cyan-600 dark:text-cyan-300">
                  {portfolioData.title}
                </p>
              </div>

              <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                {portfolioData.tagline}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-3.5">
                <a
                  href="/Sujan_KS_Resume.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-cyan-500/10 transition hover:scale-105 dark:from-white dark:to-slate-100 dark:text-slate-950"
                >
                  <Download size={18} /> {ui.buttons.downloadResume}
                </a>
                <a
                  href="/images/SUJAN_KS_Inter (3).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-6 py-3.5 text-sm font-semibold text-cyan-700 dark:text-cyan-300 backdrop-blur transition hover:border-cyan-400 hover:bg-cyan-500/20 hover:scale-105 cursor-pointer"
                >
                  <FileText size={18} /> {ui.buttons.japaneseResume} <ExternalLink size={16} />
                </a>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-900/15 bg-white/50 px-6 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur transition hover:border-cyan-500/60 hover:bg-cyan-400/10 dark:border-white/15 dark:bg-white/5 dark:text-white"
                >
                  {ui.buttons.viewProjects} <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-900/15 bg-white/50 px-6 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur transition hover:border-cyan-500/60 hover:bg-cyan-400/10 dark:border-white/15 dark:bg-white/5 dark:text-white"
                >
                  <Mail size={18} /> {ui.buttons.contact}
                </Link>
              </div>
            </motion.div>

            {/* Right Overlapping 3D Cyber AI Robot Centerpiece */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <AIRobotHeroCanvas />
            </motion.div>
          </div>
        </section>

        {/* Featured Projects Teaser */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-500 dark:text-cyan-300">
                  {ui.home.featuredWorkEyebrow}
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-4xl">
                  {ui.home.featuredWorkTitle}
                </h2>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300"
              >
                {ui.buttons.exploreAllProjects} <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {portfolioData.projects.slice(0, 3).map((project) => (
                <motion.article
                  key={project.slug}
                  whileHover={{ y: -6 }}
                  className="flex flex-col justify-between overflow-hidden rounded-xl border border-slate-900/10 bg-white/75 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]"
                >
                  <div className={`h-2 bg-gradient-to-r ${project.accent}`} />
                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      {project.category.map((tag) => (
                        <span key={tag} className="rounded-md bg-cyan-400/10 px-2 py-0.5 text-xs font-medium text-cyan-700 dark:text-cyan-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{project.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.short}</p>
                  </div>
                  <div className="p-6 pt-0">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-500 dark:text-cyan-400"
                    >
                      {ui.buttons.readCaseStudy} <ArrowRight size={15} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Developer Terminal Section */}
        <section id="ai-assistant-section" className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-xl border border-slate-900/10 bg-slate-950 p-6 font-mono text-sm text-cyan-50 shadow-xl dark:border-white/10">
              <div className="mb-4 flex items-center gap-2">
                <Terminal size={18} />
                <span className="text-slate-400">{ui.home.terminalMode}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-emerald-400">{ui.home.terminalPrompt}</span>
                <input
                  value={terminalInput}
                  onChange={(event) => setTerminalInput(event.target.value)}
                  className="min-w-0 flex-1 bg-transparent text-white outline-none"
                  aria-label="Terminal command"
                />
              </div>
              <p className="mt-4 leading-6 text-slate-300">{terminalOutput}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
