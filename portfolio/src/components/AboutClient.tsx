"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  Compass,
  Download,
  GraduationCap,
  MapPin,
  Sparkles,
  Code2,
  Milestone,
  Lightbulb,
  Heart,
  Globe,
  ArrowRight,
  Briefcase,
  ExternalLink,
  FileText,
} from "lucide-react";
import { SectionHeading } from "@/src/components/SectionHeading";
import { useLanguage } from "@/src/i18n";

export function AboutClient() {
  const { ui, portfolioData } = useLanguage();

  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-16">
        {/* Header Section */}
        <SectionHeading
          eyebrow={ui.aboutPage.eyebrow}
          title={portfolioData.name}
          text={ui.aboutPage.subtitle}
        />

        {/* Top Profile Summary Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-slate-900/90 via-slate-950 to-slate-900/90 p-8 text-white shadow-2xl backdrop-blur"
        >
          <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3.5 py-1 text-xs font-mono font-medium text-cyan-300 border border-cyan-500/30">
                  <MapPin size={13} className="text-cyan-400" /> {portfolioData.location}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-medium text-emerald-300 border border-emerald-500/30">
                  <GraduationCap size={13} className="text-emerald-400" /> CGPA {portfolioData.about.education.cgpa}
                </span>
              </div>
              <h2 className="text-2xl font-bold font-mono tracking-tight text-white md:text-3xl">
                {ui.aboutPage.headline}
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-300">
                {portfolioData.about.education.degree} ({portfolioData.about.education.years}) — {portfolioData.about.education.institution}.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href="/Sujan_KS_Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 hover:scale-105 cursor-pointer"
              >
                <Download size={18} /> {ui.buttons.downloadResume}
              </a>
              <a
                href="/Sujan_KS_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-6 py-3.5 text-sm font-semibold text-cyan-300 shadow-lg shadow-cyan-500/10 transition hover:bg-cyan-500/20 hover:border-cyan-400 hover:scale-105 cursor-pointer"
              >
                <span>{ui.buttons.viewResume}</span>
                <ExternalLink size={16} />
              </a>
              <a
                href="/images/SUJAN_KS_Inter (3).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-6 py-3.5 text-sm font-semibold text-emerald-300 shadow-lg shadow-emerald-500/10 transition hover:bg-emerald-500/20 hover:border-emerald-400 hover:scale-105 cursor-pointer"
              >
                <FileText size={18} />
                <span>{ui.buttons.japaneseResume}</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Section 1: About Me & Section 2: Education */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* About Me */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-slate-900/10 bg-white/70 p-7 backdrop-blur dark:border-white/10 dark:bg-white/[0.05]"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
                <Sparkles size={20} />
                <h3 className="text-xs font-mono uppercase tracking-widest font-semibold">{ui.aboutPage.aboutMeHeading}</h3>
              </div>
              <h4 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                {ui.aboutPage.aboutMeRole}
              </h4>
              <p className="text-base leading-relaxed text-slate-700 dark:text-slate-200">
                {ui.aboutPage.aboutMeBio1}
              </p>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {ui.aboutPage.aboutMeBio2}
              </p>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/[0.03] to-slate-950/[0.03] p-7 backdrop-blur dark:border-white/10 dark:bg-white/[0.04]"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
                <GraduationCap size={20} />
                <h3 className="text-xs font-mono uppercase tracking-widest font-semibold">{ui.aboutPage.educationHeading}</h3>
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-300">
                  {portfolioData.about.education.years}
                </span>
                <h4 className="mt-1 text-xl font-bold text-slate-950 dark:text-white">
                  {portfolioData.about.education.degree}
                </h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {portfolioData.about.education.institution}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-900/10 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">{ui.aboutPage.gpaLabel}</span>
                <span className="rounded-md bg-emerald-500/10 px-3 py-1 font-mono text-base font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  {portfolioData.about.education.cgpa} CGPA
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 3: Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-900/10 bg-white/70 p-7 backdrop-blur dark:border-white/10 dark:bg-white/[0.05]"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
              <Briefcase size={20} />
              <h3 className="text-xs font-mono uppercase tracking-widest font-semibold">{ui.aboutPage.experienceHeading}</h3>
            </div>
            <Link
              href="/experience"
              className="group inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-600 hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300 transition"
            >
              <span>{ui.nav.experience}</span>
              <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="relative border-l-2 border-cyan-500/30 pl-6 sm:pl-8 space-y-10 ml-2 sm:ml-4">
            {portfolioData.experiences.map((exp, index) => (
              <div key={exp.company} className="relative group">
                <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 h-4 w-4 rounded-full border-2 bg-slate-950 transition duration-300 group-hover:scale-125 ${
                  index === 0 ? "border-cyan-400 group-hover:bg-cyan-400" : index === 1 ? "border-emerald-400 group-hover:bg-emerald-400" : "border-purple-400 group-hover:bg-purple-400"
                }`} />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <h4 className="text-lg font-bold text-slate-950 dark:text-white flex items-center gap-2">
                      {exp.role} <span className="text-xs font-normal text-slate-500 dark:text-slate-400">— {exp.company}</span>
                    </h4>
                    {"location" in exp && exp.location && (
                      <p className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-300 mt-0.5">
                        {exp.location}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {"paperUrl" in exp && exp.paperUrl && (
                      <a
                        href={exp.paperUrl as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-[11px] font-mono font-semibold text-cyan-600 dark:text-cyan-300 hover:bg-cyan-500/20 transition"
                      >
                        <span>{ui.buttons.viewResearchPaper}</span>
                        <ArrowRight size={11} />
                      </a>
                    )}
                    {"github" in exp && exp.github && (
                      <a
                        href={exp.github as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-md border border-slate-900/10 bg-slate-900/5 dark:border-white/10 dark:bg-white/5 px-2.5 py-0.5 text-[11px] font-mono font-semibold text-slate-700 dark:text-slate-300 hover:border-cyan-500/30 hover:text-cyan-600 dark:hover:text-cyan-300 transition"
                      >
                        <Code2 size={11} />
                        <span>{ui.buttons.githubRepo}</span>
                      </a>
                    )}
                    <span className="inline-block rounded-md bg-cyan-500/10 px-3 py-1 font-mono text-xs font-medium text-cyan-600 dark:text-cyan-300 border border-cyan-500/20 w-fit">
                      {exp.date}
                    </span>
                  </div>
                </div>
                <ul className="mt-3 space-y-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {exp.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="text-cyan-500">•</span> {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="rounded-md border border-slate-900/10 bg-slate-900/5 px-2.5 py-0.5 text-[11px] font-mono text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section 4: Technical Focus & Section 5: Currently Exploring */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Technical Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-900/10 bg-white/70 p-7 backdrop-blur dark:border-white/10 dark:bg-white/[0.05]"
          >
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-4">
              <Code2 size={20} />
              <h3 className="text-xs font-mono uppercase tracking-widest font-semibold">{ui.aboutPage.techFocusHeading}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {portfolioData.about.currentFocus.map((focusItem) => (
                <span key={focusItem} className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-mono font-medium text-cyan-700 dark:text-cyan-300">
                  {focusItem}
                </span>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-slate-900/10 dark:border-white/10">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-600 hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300 transition"
              >
                <span>{ui.buttons.exploreAllProjects}</span>
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Currently Exploring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-slate-900/10 bg-white/70 p-7 backdrop-blur dark:border-white/10 dark:bg-white/[0.05]"
          >
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-4">
              <Compass size={20} />
              <h3 className="text-xs font-mono uppercase tracking-widest font-semibold">{ui.aboutPage.explorationHeading}</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {[
                "Robotics & ROS2",
                "Reinforcement Learning",
                "RAG & LLM Systems",
                "Transformers Architecture",
                "Generative AI",
                "Multilingual AI",
                "Data Structures & Algorithms",
                "Applied Mathematics",
                "Japanese Language Learning",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-3.5 py-2 text-xs font-medium text-slate-800 dark:text-cyan-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Section 6: My Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-900/10 bg-white/70 p-7 backdrop-blur dark:border-white/10 dark:bg-white/[0.05]"
        >
          <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-6">
            <Milestone size={20} />
            <h3 className="text-xs font-mono uppercase tracking-widest font-semibold">{ui.aboutPage.careerJourneyHeading}</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {portfolioData.about.journey.map((item, idx) => (
              <div key={item.year} className="relative pl-5 border-l-2 border-cyan-500/40">
                <div className="absolute -left-[7px] top-0 h-3 w-3 rounded-full bg-cyan-500" />
                <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-300">{item.year}</span>
                <h4 className="mt-1 text-sm font-bold text-slate-950 dark:text-white">{item.title}</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section 7: Beyond Code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-900/10 bg-white/70 p-7 backdrop-blur dark:border-white/10 dark:bg-white/[0.05]"
        >
          <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-6">
            <Heart size={20} />
            <h3 className="text-xs font-mono uppercase tracking-widest font-semibold">{ui.aboutPage.beyondCodeHeading}</h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5 dark:border-amber-500/20 dark:bg-amber-500/[0.04]">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 mb-2">
                <Award size={18} />
                <h4 className="font-semibold text-slate-950 dark:text-white text-sm">{ui.aboutPage.activities.scoutsTitle}</h4>
              </div>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {ui.aboutPage.activities.scoutsDesc}
              </p>
            </div>

            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5 dark:border-emerald-500/20 dark:bg-emerald-500/[0.04]">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-2">
                <Lightbulb size={18} />
                <h4 className="font-semibold text-slate-950 dark:text-white text-sm">{ui.aboutPage.activities.workshopsTitle}</h4>
              </div>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {ui.aboutPage.activities.workshopsDesc}
              </p>
            </div>

            <div className="rounded-xl border border-sky-500/20 bg-sky-500/5 p-5 dark:border-sky-500/20 dark:bg-sky-500/[0.04]">
              <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 mb-2">
                <Code2 size={18} />
                <h4 className="font-semibold text-slate-950 dark:text-white text-sm">{ui.aboutPage.activities.dsaTitle}</h4>
              </div>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {ui.aboutPage.activities.dsaDesc}
              </p>
            </div>

            <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-5 dark:border-purple-500/20 dark:bg-purple-500/[0.04]">
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-2">
                <Globe size={18} />
                <h4 className="font-semibold text-slate-950 dark:text-white text-sm">{ui.aboutPage.activities.japaneseTitle}</h4>
              </div>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {ui.aboutPage.activities.japaneseDesc}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
