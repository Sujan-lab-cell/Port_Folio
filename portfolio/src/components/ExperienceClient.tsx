"use client";

import { BriefcaseBusiness, CheckCircle2, ExternalLink, FolderGit2 } from "lucide-react";
import { SectionHeading } from "@/src/components/SectionHeading";
import { useLanguage } from "@/src/i18n";

export function ExperienceClient() {
  const { ui, portfolioData } = useLanguage();

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <SectionHeading
          eyebrow={ui.experiencePage.eyebrow}
          title={ui.experiencePage.title}
          text={ui.experiencePage.subtitle}
        />

        <div className="space-y-6">
          {portfolioData.experiences.map((exp) => (
            <div
              key={exp.company}
              className="rounded-xl border border-slate-900/10 bg-white/75 p-6 backdrop-blur dark:border-white/10 dark:bg-white/[0.06] md:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-950 dark:text-white md:text-3xl">
                    {exp.role}
                  </h2>
                  <p className="mt-1 font-medium text-cyan-600 dark:text-cyan-300 text-sm sm:text-base">
                    {exp.company} | {exp.date}{"location" in exp && exp.location ? ` | ${exp.location}` : ""}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  {"paperUrl" in exp && exp.paperUrl && (
                    <a
                      href={exp.paperUrl as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-mono font-medium text-cyan-700 dark:text-cyan-300 hover:bg-cyan-500/20 transition"
                    >
                      <span>{ui.buttons.viewResearchPaper}</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                  {"github" in exp && exp.github && (
                    <a
                      href={exp.github as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-900/10 bg-slate-900/5 dark:border-white/10 dark:bg-white/5 px-3 py-1.5 text-xs font-mono font-medium text-slate-800 dark:text-slate-200 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-300 transition"
                    >
                      <FolderGit2 size={13} className="text-cyan-600 dark:text-cyan-400" />
                      <span>{ui.buttons.githubRepo}</span>
                      <ExternalLink size={11} />
                    </a>
                  )}
                  {"githubInfo" in exp && exp.githubInfo && (
                    <a
                      href={exp.githubInfo as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-900/10 bg-slate-900/5 dark:border-white/10 dark:bg-white/5 px-3 py-1.5 text-xs font-mono font-medium text-slate-800 dark:text-slate-200 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-300 transition"
                    >
                      <FolderGit2 size={13} className="text-cyan-600 dark:text-cyan-400" />
                      <span>{ui.buttons.aiInfoRepo}</span>
                      <ExternalLink size={11} />
                    </a>
                  )}
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300">
                    <BriefcaseBusiness size={24} />
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {exp.points.map((point) => (
                  <p key={point} className="flex gap-3 text-sm sm:text-base text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="mt-1 shrink-0 text-emerald-500" size={18} />
                    <span>{point}</span>
                  </p>
                ))}
              </div>

              <div className="mt-6 border-t border-slate-900/10 pt-4 dark:border-white/10">
                <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  {ui.experiencePage.techMethodologies}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech?.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-900/10 bg-slate-900/[0.02] px-3 py-1.5 text-xs font-mono font-medium text-slate-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
