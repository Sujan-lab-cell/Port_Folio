"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, Boxes, Database, Wrench, Cpu } from "lucide-react";
import { portfolioData } from "@/src/data/portfolio";
import { SectionHeading } from "@/src/components/SectionHeading";

const iconMap = { Code2, BrainCircuit, Boxes, Database, Wrench, Cpu };

export function SkillsClient() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="A practical toolkit for applied AI."
          text="Categorized skills with quick proficiency signals and hover-friendly technology cards."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioData.skills.map((skill) => {
            const Icon = iconMap[skill.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={skill.group}
                whileHover={{ y: -6 }}
                className="rounded-lg border border-slate-900/10 bg-white/75 p-6 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h2 className="font-semibold text-slate-950 dark:text-white">{skill.group}</h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {skill.level}% working proficiency
                    </p>
                  </div>
                </div>

                <div className="mt-5 h-2 rounded-full bg-slate-200 dark:bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-slate-900/10 bg-slate-900/[0.02] px-3 py-1.5 text-sm text-slate-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
