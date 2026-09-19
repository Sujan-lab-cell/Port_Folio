import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Tag,
  FolderGit2,
  ExternalLink,
  FlaskConical,
  CheckCircle2,
  Code2,
  BookOpen,
} from "lucide-react";
import { portfolioData, BlogPost } from "@/src/data/portfolio";

export async function generateStaticParams() {
  const posts = portfolioData.blog as BlogPost[];
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }> | { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const post = (portfolioData.blog as BlogPost[]).find(
    (p) => p.slug === resolvedParams.slug
  );
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Sujan K S Technical Writing`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = (portfolioData.blog as BlogPost[]).find(
    (p) => p.slug === resolvedParams.slug
  );

  if (!post) {
    notFound();
  }

  // Find related project if applicable
  const relatedProject = post.projectSlug
    ? portfolioData.projects.find((p) => p.slug === post.projectSlug)
    : null;

  return (
    <article className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Navigation Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-900/10 bg-white/60 px-4 py-2 text-xs font-semibold text-slate-700 backdrop-blur transition hover:border-cyan-500 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
        >
          <ArrowLeft size={14} /> Back to Technical Blog
        </Link>

        {/* Header Block */}
        <header className="mt-8 border-b border-slate-900/10 pb-8 dark:border-white/10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-md bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
              <Clock size={13} /> {post.readTime}
            </span>
          </div>

          {post.statusNotice && (
            <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs font-medium text-amber-300">
              <FlaskConical className="h-4 w-4 shrink-0 text-amber-400" />
              <span>{post.statusNotice}</span>
            </div>
          )}

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-md bg-slate-900/5 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200"
              >
                <Tag size={12} /> {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Short Introduction Section */}
        <div className="my-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-950/10 via-slate-900/20 to-indigo-950/10 p-6 backdrop-blur dark:border-cyan-400/20 dark:from-cyan-950/30 dark:to-indigo-950/30">
          <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-500 dark:text-cyan-300">
            Introduction & Technical Context
          </h3>
          <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-200">
            {post.introduction}
          </p>
        </div>

        {/* Main Sections */}
        <div className="space-y-10">
          {post.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl font-bold text-slate-950 dark:text-white sm:text-2xl">
                {section.heading}
              </h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 whitespace-pre-line">
                {section.content}
              </p>

              {/* Code Snippet */}
              {section.codeSnippet && (
                <div className="mt-4 overflow-hidden rounded-xl border border-slate-800 bg-slate-950 text-slate-100 shadow-xl">
                  {section.codeSnippet.caption && (
                    <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-4 py-2.5 text-xs text-slate-400">
                      <span className="flex items-center gap-2 font-mono">
                        <Code2 size={14} className="text-cyan-400" />
                        {section.codeSnippet.caption}
                      </span>
                      <span className="rounded bg-slate-800 px-2 py-0.5 font-mono text-[10px] uppercase text-cyan-300">
                        {section.codeSnippet.language}
                      </span>
                    </div>
                  )}
                  <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-cyan-200/90">
                    <code>{section.codeSnippet.code}</code>
                  </pre>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Key Takeaways */}
        {post.takeaways && post.takeaways.length > 0 && (
          <div className="my-12 rounded-2xl border border-emerald-500/20 bg-emerald-950/10 p-6 backdrop-blur dark:border-emerald-500/30 dark:bg-emerald-950/20">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              Key Engineering Takeaways
            </h3>
            <ul className="mt-4 space-y-2.5">
              {post.takeaways.map((takeaway, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 shrink-0" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Related Projects & External Links Footer */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-900/10 bg-white/75 p-6 backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Author
            </span>
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              Sujan K S — AI/ML Engineer
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {relatedProject && (
              <Link
                href={`/projects#${relatedProject.slug}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-2 text-xs font-semibold text-cyan-600 hover:bg-cyan-500 hover:text-white dark:border-cyan-400/30 dark:text-cyan-300 dark:hover:bg-cyan-400 dark:hover:text-slate-950 transition"
              >
                <BookOpen size={14} /> View Related Project ({relatedProject.title.split("—")[0].trim()})
              </Link>
            )}

            {post.githubUrl && (
              <a
                href={post.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-900/10 bg-slate-900/5 px-3.5 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-900 hover:text-white dark:border-white/10 dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white dark:hover:text-slate-950 transition"
              >
                <FolderGit2 size={14} /> GitHub Repository <ExternalLink size={12} />
              </a>
            )}

            {post.paperUrl && (
              <a
                href={post.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-2 text-xs font-semibold text-indigo-400 hover:bg-indigo-500 hover:text-white transition"
              >
                <ExternalLink size={14} /> View Technical Writeup / Report
              </a>
            )}
          </div>
        </div>

        {/* Back Button Footer */}
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-600 hover:underline dark:text-cyan-400"
          >
            <ArrowLeft size={14} /> Back to all blog articles
          </Link>
        </div>
      </div>
    </article>
  );
}
