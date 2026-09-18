"use client";

import { BriefcaseBusiness, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/src/data/portfolio";
import { SectionHeading } from "@/src/components/SectionHeading";

export function ExperienceClient() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Internship work with measurable model outcomes."
          text="Focused machine-learning work across preprocessing, feature engineering, training, and team collaboration."
        />

        <div className="rounded-lg border border-slate-900/10 bg-white/75 p-6 backdrop-blur dark:border-white/10 dark:bg-white/[0.06] md:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white md:text-3xl">
                {portfolioData.experience.role}
              </h2>
              <p className="mt-1 font-medium text-cyan-600 dark:text-cyan-300">
                {portfolioData.experience.company} | {portfolioData.experience.date}
              </p>
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300">
              <BriefcaseBusiness size={24} />
            </div>
          </div>

          <div className="mt-8 grid gap-4">
            {portfolioData.experience.points.map((point) => (
              <p key={point} className="flex gap-3 text-base text-slate-700 dark:text-slate-200">
                <CheckCircle2 className="mt-1 shrink-0 text-emerald-500" size={20} />
                <span>{point}</span>
              </p>
            ))}
          </div>

          <div className="mt-8 border-t border-slate-900/10 pt-6 dark:border-white/10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Technologies & Methodologies
            </p>
            <div className="flex flex-wrap gap-2">
              {portfolioData.experience.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-slate-900/10 bg-slate-900/[0.02] px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
