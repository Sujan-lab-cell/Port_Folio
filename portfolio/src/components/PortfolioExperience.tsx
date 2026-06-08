"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Bot,
  Boxes,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Command,
  Cpu,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Moon,
  Search,
  Send,
  Sparkles,
  Sun,
  Terminal,
  Trophy,
  Wrench,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/src/data/portfolio";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Achievements",
  "Blog",
  "Coding Profiles",
  "Resume",
  "Contact",
];

const iconMap = { Code2, BrainCircuit, Boxes, Database, Wrench, Cpu };

const assistantAnswers: Record<string, string> = {
  "Tell me about Sujan":
    "Sujan K S is an AI/ML Engineer from Mangalore focused on computer vision, deep learning, NLP systems, and practical AI products.",
  "What projects has he built?":
    "His featured work includes GeoSentinel, SmartQ Generator, AI Face Generation, YOLOv8 car and pedestrian detection, and a Power BI e-commerce dashboard.",
  "What are his skills?":
    "Python, C, C++, TensorFlow, PyTorch, YOLOv8, Hugging Face, OpenCV, Scikit-learn, Streamlit, Roboflow, SQL, and core CS fundamentals.",
  "Show AI projects": "Jump to Projects to see GeoSentinel, SmartQ Generator, AI Face Generation, and YOLOv8 detection.",
  "Show Computer Vision projects": "The strongest CV projects are GeoSentinel and Car & Pedestrian Detection, both powered by YOLOv8 workflows.",
  "Show resume": "Use the Resume section or the Download Resume button to access Sujan's resume.",
};

function sectionId(label: string) {
  return label.toLowerCase().replaceAll(" ", "-");
}

function scrollToSection(label: string) {
  document.getElementById(sectionId(label))?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-500 dark:text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{text}</p>
    </div>
  );
}

export function PortfolioExperience() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [commandOpen, setCommandOpen] = useState(false);
  const [assistantPrompt, setAssistantPrompt] = useState("Tell me about Sujan");
  const [terminalInput, setTerminalInput] = useState("help");
  const [contactSent, setContactSent] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filteredProjects = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return portfolioData.projects;
    return portfolioData.projects.filter((project) =>
      [project.title, project.short, ...project.category, ...project.tech].join(" ").toLowerCase().includes(needle),
    );
  }, [query]);

  const terminalOutput = useMemo(() => {
    const command = terminalInput.trim().toLowerCase();
    if (command === "about") return portfolioData.about.careerObjective;
    if (command === "projects") return portfolioData.projects.map((project) => project.title).join(" | ");
    if (command === "skills") return portfolioData.skills.map((skill) => skill.group).join(" | ");
    if (command === "resume") return "Resume: B.Tech AIML, CGPA 8.51, ML intern, AI/CV/NLP project portfolio.";
    if (command === "contact") return `${portfolioData.email} | ${portfolioData.social.linkedin}`;
    return "Available commands: help, about, projects, skills, resume, contact";
  }, [terminalInput]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fbff] text-slate-950 selection:bg-cyan-300/40 dark:bg-[#05070d] dark:text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.20),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.14),transparent_30%),linear-gradient(180deg,transparent,rgba(15,23,42,0.05))] dark:bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(129,140,248,0.13),transparent_30%),linear-gradient(180deg,transparent,rgba(2,6,23,0.8))]" />
      <div className="fixed inset-0 -z-10 bg-grid opacity-40 dark:opacity-70" />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-900/10 bg-white/70 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/60">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button onClick={() => scrollToSection("Home")} className="flex items-center gap-3" aria-label="Go to home">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-slate-950 text-sm font-bold text-white dark:bg-white dark:text-slate-950">
              SK
            </span>
            <span className="hidden text-sm font-semibold sm:block">Sujan K S</span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.slice(0, 8).map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="rounded-md px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-900/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {item === "Coding Profiles" ? "Profiles" : item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCommandOpen(true)}
              className="hidden items-center gap-2 rounded-md border border-slate-900/10 px-3 py-2 text-sm text-slate-600 transition hover:border-cyan-500/50 hover:text-slate-950 dark:border-white/10 dark:text-slate-300 dark:hover:text-white sm:flex"
            >
              <Command size={16} /> Ctrl K
            </button>
            <button
              onClick={() => setDark((value) => !value)}
              className="grid h-10 w-10 place-items-center rounded-md border border-slate-900/10 text-slate-700 transition hover:border-cyan-500/50 dark:border-white/10 dark:text-slate-200"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMenuOpen((value) => !value)}
              className="grid h-10 w-10 place-items-center rounded-md border border-slate-900/10 lg:hidden dark:border-white/10"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-slate-900/10 bg-white/95 dark:border-white/10 dark:bg-slate-950/95 lg:hidden"
            >
              <div className="grid gap-1 px-4 py-3">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setMenuOpen(false);
                      scrollToSection(item);
                    }}
                    className="rounded-md px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-900/5 dark:text-slate-200 dark:hover:bg-white/10"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section id="home" className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-700 dark:text-cyan-200">
              <Sparkles size={16} /> Available for AI/ML internships and research-driven product work
            </div>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-7xl">
              {portfolioData.name}
            </h1>
            <p className="mt-5 max-w-3xl text-xl font-medium text-slate-700 dark:text-slate-200 md:text-2xl">
              {portfolioData.title}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{portfolioData.tagline}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/Sujan_KS_Resume.pdf" download className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-cyan-500/10 transition hover:bg-slate-800 dark:bg-white dark:text-slate-950">
                <Download size={18} /> Download Resume
              </a>
              <button onClick={() => scrollToSection("Contact")} className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-900/10 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-cyan-500/60 hover:bg-cyan-400/10 dark:border-white/15 dark:text-white">
                <Mail size={18} /> Contact
              </button>
              <button onClick={() => scrollToSection("Projects")} className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-900/10 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-cyan-500/60 hover:bg-cyan-400/10 dark:border-white/15 dark:text-white">
                <ArrowRight size={18} /> View Projects
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative">
            <div className="rounded-lg border border-slate-900/10 bg-white/75 p-4 shadow-2xl shadow-cyan-900/10 backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06]">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-2"><span className="h-3 w-3 rounded-full bg-rose-400" /><span className="h-3 w-3 rounded-full bg-amber-300" /><span className="h-3 w-3 rounded-full bg-emerald-400" /></div>
                <span className="text-xs text-slate-500 dark:text-slate-400">ai-engineer.profile</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {portfolioData.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    animate={{ y: [0, index % 2 ? -8 : 8, 0] }}
                    transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
                    className="rounded-lg border border-slate-900/10 bg-slate-950/[0.03] p-4 dark:border-white/10 dark:bg-slate-950/50"
                  >
                    <div className="text-3xl font-semibold text-slate-950 dark:text-white">{stat.value}</div>
                    <div className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-200">{stat.label}</div>
                    <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{stat.detail}</div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 rounded-lg border border-cyan-500/20 bg-cyan-400/10 p-4">
                <p className="text-sm leading-6 text-slate-700 dark:text-cyan-50">
                  <span className="font-semibold">Current signal:</span> Applied AI systems with measurable model metrics, clean demos, and recruiter-readable storytelling.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="About" title="AI foundations, product instincts, and a builder mindset." text="A concise, recruiter-friendly snapshot of Sujan's education, focus areas, and trajectory." />
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-lg border border-slate-900/10 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]">
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">{portfolioData.about.careerObjective}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Info icon={MapPin} label="Location" value={portfolioData.location} />
                <Info icon={GraduationCap} label="Education" value={`${portfolioData.about.education.degree}, ${portfolioData.about.education.institution}`} />
                <Info icon={Award} label="Duration" value={`${portfolioData.about.education.years} | CGPA ${portfolioData.about.education.cgpa}`} />
                <Info icon={BrainCircuit} label="Focus" value={portfolioData.about.currentFocus.join(", ")} />
              </div>
            </div>
            <div className="grid gap-3">
              {portfolioData.about.journey.map((item) => (
                <div key={item.year} className="rounded-lg border border-slate-900/10 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.06]">
                  <div className="text-sm font-semibold text-cyan-600 dark:text-cyan-300">{item.year}</div>
                  <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Skills" title="A practical toolkit for applied AI." text="Categorized skills with quick proficiency signals and hover-friendly technology cards." />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {portfolioData.skills.map((skill) => {
              const Icon = iconMap[skill.icon as keyof typeof iconMap];
              return (
                <motion.div key={skill.group} whileHover={{ y: -6 }} className="rounded-lg border border-slate-900/10 bg-white/75 p-5 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-slate-950 text-white dark:bg-white dark:text-slate-950"><Icon size={21} /></span>
                    <div><h3 className="font-semibold">{skill.group}</h3><p className="text-xs text-slate-500 dark:text-slate-400">{skill.level}% working proficiency</p></div>
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-slate-200 dark:bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" style={{ width: `${skill.level}%` }} /></div>
                  <div className="mt-4 flex flex-wrap gap-2">{skill.items.map((item) => <span key={item} className="rounded-md border border-slate-900/10 px-2.5 py-1 text-sm text-slate-700 dark:border-white/10 dark:text-slate-200">{item}</span>)}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Projects" title="Impact-first AI case studies." text="Searchable project cards with metrics, architecture, results, and dedicated detail pages." />
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search AI, Computer Vision, NLP..." className="w-full rounded-md border border-slate-900/10 bg-white/80 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-cyan-500 dark:border-white/10 dark:bg-white/[0.06]" />
            </div>
            <div className="flex flex-wrap gap-2">
              {["AI", "Computer Vision", "NLP", "Deep Learning"].map((tag) => (
                <button key={tag} onClick={() => setQuery(tag)} className="rounded-md border border-slate-900/10 px-3 py-2 text-sm hover:border-cyan-500/60 dark:border-white/10">{tag}</button>
              ))}
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {filteredProjects.map((project) => (
              <motion.article key={project.slug} whileHover={{ y: -6 }} className="overflow-hidden rounded-lg border border-slate-900/10 bg-white/75 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]">
                <div className={`h-2 bg-gradient-to-r ${project.accent}`} />
                <div className="p-6">
                  <div className="mb-4 flex flex-wrap gap-2">{project.category.map((tag) => <span key={tag} className="rounded-md bg-cyan-400/10 px-2 py-1 text-xs font-medium text-cyan-700 dark:text-cyan-200">{tag}</span>)}</div>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{project.short}</p>
                  <div className="mt-5 grid gap-2 sm:grid-cols-3">{project.metrics.map((metric) => <div key={metric} className="rounded-md border border-slate-900/10 p-3 text-sm font-medium dark:border-white/10">{metric}</div>)}</div>
                  <div className="mt-5 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-md border border-slate-900/10 px-2.5 py-1 text-sm dark:border-white/10">{tech}</span>)}</div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.github && <a href={project.github} className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-slate-950"><Code2 size={16} /> GitHub</a>}
                    <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 rounded-md border border-slate-900/10 px-4 py-2 text-sm font-semibold dark:border-white/10">Read Case Study <ArrowRight size={16} /></Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Experience" title="Internship work with measurable model outcomes." text="Focused machine-learning work across preprocessing, feature engineering, training, and team collaboration." />
          <div className="rounded-lg border border-slate-900/10 bg-white/75 p-6 dark:border-white/10 dark:bg-white/[0.06]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div><h3 className="text-2xl font-semibold">{portfolioData.experience.role}</h3><p className="mt-1 text-cyan-600 dark:text-cyan-300">{portfolioData.experience.company} | {portfolioData.experience.date}</p></div>
              <BriefcaseBusiness className="text-cyan-500" />
            </div>
            <div className="mt-6 grid gap-3">{portfolioData.experience.points.map((point) => <p key={point} className="flex gap-3 text-slate-700 dark:text-slate-200"><CheckCircle2 className="mt-0.5 shrink-0 text-emerald-500" size={18} />{point}</p>)}</div>
            <div className="mt-5 flex flex-wrap gap-2">{portfolioData.experience.tech.map((tech) => <span key={tech} className="rounded-md border border-slate-900/10 px-2.5 py-1 text-sm dark:border-white/10">{tech}</span>)}</div>
          </div>
        </div>
      </section>

      <section id="achievements" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Achievements" title="Signals of initiative and discipline." text="Premium certification cards for recruiters scanning credibility and momentum." />
          <div className="grid gap-4 md:grid-cols-3">{portfolioData.achievements.map((item) => <div key={item.title} className="rounded-lg border border-slate-900/10 bg-white/75 p-5 dark:border-white/10 dark:bg-white/[0.06]"><Trophy className="text-amber-500" /><h3 className="mt-4 text-lg font-semibold">{item.title}</h3><p className="mt-1 text-sm text-cyan-600 dark:text-cyan-300">{item.issuer}</p><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.note}</p></div>)}</div>
        </div>
      </section>

      <section id="blog" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Blog" title="AI writing that explains decisions, not just demos." text="A professional blog layout with categories, tags, search-ready cards, and reading time." />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{portfolioData.blog.map((post) => <article key={post.title} className="rounded-lg border border-slate-900/10 bg-white/75 p-5 dark:border-white/10 dark:bg-white/[0.06]"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">{post.category} | {post.readTime}</p><h3 className="mt-4 text-xl font-semibold">{post.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{post.excerpt}</p><div className="mt-4 flex flex-wrap gap-2">{post.tags.map((tag) => <span key={tag} className="rounded-md bg-slate-900/5 px-2 py-1 text-xs dark:bg-white/10">{tag}</span>)}</div></article>)}</div>
        </div>
      </section>

      <section id="coding-profiles" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Coding Profiles" title="Public proof of practice." text="API-ready profile cards for GitHub, LeetCode, Kaggle, and LinkedIn integrations." />
          <div className="grid gap-4 md:grid-cols-4">{portfolioData.profiles.map((profile) => <a key={profile.name} href={profile.href} className="rounded-lg border border-slate-900/10 bg-white/75 p-5 transition hover:-translate-y-1 hover:border-cyan-500/50 dark:border-white/10 dark:bg-white/[0.06]"><ExternalLink className="text-cyan-500" /><h3 className="mt-4 text-lg font-semibold">{profile.name}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{profile.value}</p></a>)}</div>
        </div>
      </section>

      <section id="resume" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div><SectionHeading eyebrow="Resume" title="Interactive resume viewer." text="A fast summary for recruiters with direct download and online viewing paths." /></div>
          <div className="rounded-lg border border-slate-900/10 bg-white/75 p-6 dark:border-white/10 dark:bg-white/[0.06]">
            {["Education: B.Tech AIML, N.M.A.M. Institute of Technology, CGPA 8.51", "Experience: Machine Learning Intern, breast cancer prediction, 0.85 accuracy", "Skills: Python, Deep Learning, Computer Vision, NLP, MLOps foundations", "Certifications: IBM AI Fundamentals, Machine Learning with Python"].map((line) => <p key={line} className="mb-3 flex gap-3 text-slate-700 dark:text-slate-200"><CheckCircle2 className="mt-0.5 shrink-0 text-emerald-500" size={18} />{line}</p>)}
            <div className="mt-6 flex flex-wrap gap-3"><a href="/Sujan_KS_Resume.pdf" download className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-slate-950"><Download size={16} /> Download Resume</a><a href="/Sujan_KS_Resume.pdf" className="inline-flex items-center gap-2 rounded-md border border-slate-900/10 px-4 py-2 text-sm font-semibold dark:border-white/10">View Online <ExternalLink size={16} /></a></div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-900/10 bg-white/75 p-6 dark:border-white/10 dark:bg-white/[0.06]">
            <div className="mb-4 flex items-center gap-2"><Bot className="text-cyan-500" /><h2 className="text-2xl font-semibold">AI Portfolio Assistant</h2></div>
            <div className="flex flex-wrap gap-2">{Object.keys(assistantAnswers).map((prompt) => <button key={prompt} onClick={() => setAssistantPrompt(prompt)} className="rounded-md border border-slate-900/10 px-3 py-2 text-sm hover:border-cyan-500/60 dark:border-white/10">{prompt}</button>)}</div>
            <div className="mt-5 rounded-lg bg-slate-950 p-4 text-sm leading-6 text-cyan-50">{assistantAnswers[assistantPrompt]}</div>
          </div>
          <div className="rounded-lg border border-slate-900/10 bg-slate-950 p-6 font-mono text-sm text-cyan-50 dark:border-white/10">
            <div className="mb-4 flex items-center gap-2"><Terminal size={18} /><span>terminal mode</span></div>
            <div className="flex gap-2"><span className="text-emerald-300">sujan@portfolio:~$</span><input value={terminalInput} onChange={(event) => setTerminalInput(event.target.value)} className="min-w-0 flex-1 bg-transparent text-white outline-none" aria-label="Terminal command" /></div>
            <p className="mt-4 leading-6 text-slate-300">{terminalOutput}</p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Contact" title="Start a conversation." text="A professional contact path for recruiters, collaborators, and AI teams." />
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-3">
              <Info icon={Mail} label="Email" value={portfolioData.email} />
              <Info icon={Code2} label="GitHub" value={portfolioData.social.github} />
              <Info icon={BriefcaseBusiness} label="LinkedIn" value={portfolioData.social.linkedin} />
              <Info icon={MapPin} label="Location" value={portfolioData.location} />
            </div>
            <form onSubmit={(event) => { event.preventDefault(); setContactSent(true); }} className="rounded-lg border border-slate-900/10 bg-white/75 p-6 dark:border-white/10 dark:bg-white/[0.06]">
              <div className="grid gap-4 sm:grid-cols-2"><Field label="Name" /><Field label="Email" type="email" /></div>
              <Field label="Subject" />
              <label className="mt-4 block text-sm font-medium">Message<textarea required rows={5} className="mt-2 w-full rounded-md border border-slate-900/10 bg-white/80 p-3 outline-none focus:border-cyan-500 dark:border-white/10 dark:bg-white/[0.06]" /></label>
              {contactSent && <p className="mt-4 rounded-md border border-emerald-500/30 bg-emerald-400/10 p-3 text-sm text-emerald-700 dark:text-emerald-200">Message captured. Connect EmailJS or a FastAPI endpoint for production delivery.</p>}
              <button className="mt-5 inline-flex items-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-slate-950"><Send size={16} /> Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-900/10 px-4 py-8 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
        Built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons. © {new Date().getFullYear()} Sujan K S.
      </footer>

      <AnimatePresence>
        {commandOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] bg-slate-950/70 p-4 backdrop-blur" onClick={() => setCommandOpen(false)}>
            <motion.div initial={{ scale: 0.96, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 20 }} className="mx-auto mt-24 max-w-xl rounded-lg border border-white/10 bg-white p-2 text-slate-950 shadow-2xl dark:bg-slate-950 dark:text-white" onClick={(event) => event.stopPropagation()}>
              <div className="flex items-center gap-2 border-b border-slate-900/10 p-3 dark:border-white/10"><Command size={18} /><span className="text-sm font-medium">Command Palette</span></div>
              <div className="p-2">{navItems.map((item) => <button key={item} onClick={() => { setCommandOpen(false); scrollToSection(item); }} className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-sm hover:bg-slate-900/5 dark:hover:bg-white/10"><span>{item}</span><ArrowRight size={15} /></button>)}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function Info({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-900/10 bg-white/75 p-4 dark:border-white/10 dark:bg-white/[0.06]">
      <div className="flex gap-3">
        <Icon className="mt-1 shrink-0 text-cyan-500" size={19} />
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{label}</p><p className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-200">{value}</p></div>
      </div>
    </div>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="mt-4 block text-sm font-medium">
      {label}
      <input required type={type} className="mt-2 w-full rounded-md border border-slate-900/10 bg-white/80 p-3 outline-none focus:border-cyan-500 dark:border-white/10 dark:bg-white/[0.06]" />
    </label>
  );
}
