import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import { portfolioData } from "@/src/data/portfolio";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = portfolioData.projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.short,
    openGraph: {
      title: `${project.title} | Sujan K S`,
      description: project.short,
    },
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = portfolioData.projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f8fbff] px-4 py-10 text-slate-950 dark:bg-[#05070d] dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-md border border-slate-900/10 px-4 py-2 text-sm font-semibold dark:border-white/10"
        >
          <ArrowLeft size={16} /> Back to projects
        </Link>

        <section className="mt-10 overflow-hidden rounded-lg border border-slate-900/10 bg-white/75 shadow-2xl shadow-cyan-950/5 dark:border-white/10 dark:bg-white/[0.06]">
          <div className={`h-2 bg-gradient-to-r ${project.accent}`} />
          <div className="p-6 md:p-10">
            <div className="flex flex-wrap gap-2">
              {project.category.map((tag) => (
                <span key={tag} className="rounded-md bg-cyan-400/10 px-2.5 py-1 text-sm font-medium text-cyan-700 dark:text-cyan-200">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">{project.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">{project.short}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {project.github && (
                <a href={project.github} className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-slate-950">
                  <Code2 size={16} /> GitHub
                </a>
              )}
              <a href={project.demo} className="inline-flex items-center gap-2 rounded-md border border-slate-900/10 px-4 py-2 text-sm font-semibold dark:border-white/10">
                Live Demo <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <DetailCard title="Architecture" items={project.architecture} />
          <DetailCard title="Results" items={project.results} />
          <DetailCard title="Challenges" items={project.challenges} />
        </div>

        <section className="mt-6 rounded-lg border border-slate-900/10 bg-white/75 p-6 dark:border-white/10 dark:bg-white/[0.06]">
          <h2 className="text-2xl font-semibold">Future Improvements</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.future.map((item) => (
              <span key={item} className="rounded-md border border-slate-900/10 px-3 py-2 text-sm dark:border-white/10">
                {item}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function DetailCard({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-slate-900/10 bg-white/75 p-5 dark:border-white/10 dark:bg-white/[0.06]">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <p key={item} className="text-sm leading-6 text-slate-600 dark:text-slate-300">
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}
