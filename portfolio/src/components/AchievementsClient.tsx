"use client";

import { Trophy, Award, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/src/data/portfolio";
import { SectionHeading } from "@/src/components/SectionHeading";

export function AchievementsClient() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Signals of initiative and discipline."
          text="Premium certification cards for recruiters scanning credibility and momentum."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {portfolioData.achievements.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-lg border border-slate-900/10 bg-white/75 p-6 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-amber-500/10 text-amber-500">
                    <Trophy size={20} />
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 size={14} /> Verified
                  </span>
                </div>
                <h2 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h2>
                <p className="mt-1 text-sm font-medium text-cyan-600 dark:text-cyan-300">{item.issuer}</p>
                <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.note}</p>
              </div>

              <div className="mt-6 border-t border-slate-900/10 pt-4 dark:border-white/10">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <Award size={14} /> Certification Badge
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
