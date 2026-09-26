"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Clock, Tag, ArrowRight, Sparkles, BookOpen, X, FlaskConical } from "lucide-react";
import { BlogPost } from "@/src/data/portfolio";
import { SectionHeading } from "@/src/components/SectionHeading";
import { useLanguage } from "@/src/i18n";

export function BlogClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const { ui, portfolioData } = useLanguage();

  const posts = portfolioData.blog as BlogPost[];

  // Extract all categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => set.add(p.category));
    return ["All", ...Array.from(set)];
  }, [posts]);

  // Extract all tags
  const allTags = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set);
  }, [posts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      const matchesTag =
        !selectedTag || post.tags.includes(selectedTag);

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [posts, selectedCategory, selectedTag, searchQuery]);

  // Featured article (first featured post or first post if no query/category selected)
  const featuredPost = useMemo(() => {
    if (searchQuery || selectedCategory !== "All" || selectedTag) return null;
    return posts.find((p) => p.isFeatured) || posts[0];
  }, [posts, searchQuery, selectedCategory, selectedTag]);

  // Remaining posts when featured post is displayed
  const gridPosts = useMemo(() => {
    if (featuredPost && !searchQuery && selectedCategory === "All" && !selectedTag) {
      return filteredPosts.filter((p) => p.slug !== featuredPost.slug);
    }
    return filteredPosts;
  }, [filteredPosts, featuredPost, searchQuery, selectedCategory, selectedTag]);

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={ui.blogPage.eyebrow}
          title={ui.blogPage.title}
          text={ui.blogPage.subtitle}
        />

        {/* Search & Filters Controls */}
        <div className="mb-10 space-y-6">
          {/* Search Bar */}
          <div className="relative mx-auto max-w-2xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={ui.blogPage.searchPlaceholder}
              className="w-full rounded-xl border border-slate-900/10 bg-white/80 py-3.5 pl-12 pr-10 text-sm text-slate-900 placeholder-slate-500 shadow-sm backdrop-blur transition focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:placeholder-slate-400 dark:focus:border-cyan-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                  }}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all ${
                    active
                      ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/20 dark:bg-cyan-400 dark:text-slate-950"
                      : "border border-slate-900/10 bg-white/60 text-slate-600 hover:border-cyan-500/40 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:text-cyan-300"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Active Tag Filter indicator / Tag Cloud */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
            <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Filter by Tag:
            </span>
            {allTags.map((tag) => {
              const isSelected = selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(isSelected ? null : tag)}
                  className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition ${
                    isSelected
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950"
                      : "bg-slate-900/5 text-slate-600 hover:bg-cyan-500/10 hover:text-cyan-600 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-300"
                  }`}
                >
                  <Tag size={11} />
                  {tag}
                </button>
              );
            })}
            {selectedTag && (
              <button
                onClick={() => setSelectedTag(null)}
                className="ml-2 text-xs text-rose-500 hover:underline dark:text-rose-400"
              >
                Clear Tag Filter
              </button>
            )}
          </div>
        </div>

        {/* Subtle Featured Article Treatment */}
        {featuredPost && (
          <div className="mb-12">
            <div className="relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 via-slate-900/40 to-indigo-950/20 p-6 sm:p-8 backdrop-blur-xl shadow-lg shadow-cyan-500/5 dark:border-cyan-400/30 dark:from-cyan-950/40 dark:via-slate-950 dark:to-indigo-950/40">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400 dark:border-cyan-400/40 dark:text-cyan-300">
                    <Sparkles className="h-3.5 w-3.5" />
                    Featured Spotlight
                  </span>
                  <span className="rounded-md bg-slate-900/40 px-2.5 py-1 text-xs font-semibold uppercase tracking-widest text-slate-300 dark:bg-white/10 dark:text-slate-200">
                    {featuredPost.category}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-slate-400 dark:text-slate-400">
                  <Clock size={13} /> {featuredPost.readTime}
                </span>
              </div>

              {featuredPost.statusNotice && (
                <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-amber-300">
                  <FlaskConical className="h-3.5 w-3.5 text-amber-400" />
                  {featuredPost.statusNotice}
                </div>
              )}

              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="transition hover:text-cyan-300"
                >
                  {featuredPost.title}
                </Link>
              </h2>

              <p className="mt-3 text-base leading-relaxed text-slate-300">
                {featuredPost.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800/80 pt-4 dark:border-white/10">
                <div className="flex flex-wrap gap-2">
                  {featuredPost.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1 rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-slate-200"
                    >
                      <Tag size={12} /> {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 dark:bg-cyan-400 dark:hover:bg-cyan-300"
                >
                  Read Full Case Study <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Article Cards Grid */}
        {gridPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {gridPosts.map((post) => (
              <article
                key={post.slug}
                className="group relative flex flex-col justify-between rounded-xl border border-slate-900/10 bg-white/75 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-cyan-400/40 dark:hover:bg-white/[0.07]"
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

                  {post.statusNotice && (
                    <div className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[11px] font-medium text-amber-300">
                      <FlaskConical className="h-3 w-3 text-amber-400" />
                      Ongoing Research
                    </div>
                  )}

                  <h3 className="mt-3 text-lg font-bold leading-snug text-slate-950 group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-300">
                    <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {post.title}
                    </Link>
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-900/10 dark:border-white/10">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-md bg-slate-900/5 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-white/10 dark:text-slate-300"
                      >
                        <Tag size={10} /> {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold text-cyan-600 group-hover:text-cyan-500 dark:text-cyan-300">
                    <span>Read Article</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-slate-900/10 bg-white/50 p-12 text-center backdrop-blur dark:border-white/10 dark:bg-white/[0.03]">
            <BookOpen className="mx-auto h-10 w-10 text-slate-400 dark:text-slate-500" />
            <h3 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
              No matching technical articles found
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Try adjusting your search query or selecting a different category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedTag(null);
              }}
              className="mt-4 inline-flex items-center rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-cyan-600 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

