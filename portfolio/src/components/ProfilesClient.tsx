"use client";

import { ExternalLink, Code2, Trophy, BriefcaseBusiness } from "lucide-react";
import { portfolioData } from "@/src/data/portfolio";
import { SectionHeading } from "@/src/components/SectionHeading";

export function ProfilesClient() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Coding Profiles"
          title="Public proof of practice."
          text="API-ready profile cards for GitHub, LeetCode, Kaggle, and LinkedIn integrations."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {portfolioData.profiles.map((profile) => {
            return (
              <a
                key={profile.name}
                href={profile.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-lg border border-slate-900/10 bg-white/75 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.06]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300">
                      {profile.name.includes("GitHub") ? (
                        <Code2 size={20} />
                      ) : profile.name.includes("LinkedIn") ? (
                        <BriefcaseBusiness size={20} />
                      ) : (
                        <Trophy size={20} />
                      )}
                    </span>
                    <ExternalLink className="text-slate-400 transition group-hover:text-cyan-500" size={18} />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">{profile.name}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{profile.value}</p>
                </div>

                <div className="mt-6 border-t border-slate-900/10 pt-4 text-xs font-semibold text-cyan-600 dark:border-white/10 dark:text-cyan-300">
                  Visit Profile →
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
