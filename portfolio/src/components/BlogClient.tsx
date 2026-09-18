"use client";

import { Clock, Tag } from "lucide-react";
import { portfolioData } from "@/src/data/portfolio";
import { SectionHeading } from "@/src/components/SectionHeading";

export function BlogClient() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Blog"
          title="AI writing that explains decisions, not just demos."
          text="A professional blog layout with categories, tags, search-ready cards, and reading time."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioData.blog.map((post) => (
            <article
              key={post.title}
              className="flex flex-col justify-between rounded-lg border border-slate-900/10 bg-white/75 p-6 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <Clock size={13} /> {post.readTime}
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">{post.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-900/10 pt-4 dark:border-white/10">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-md bg-slate-900/5 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200"
                  >
                    <Tag size={12} /> {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
