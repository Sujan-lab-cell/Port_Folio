"use client";

import { useState } from "react";
import {
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
} from "lucide-react";
import { portfolioData } from "@/src/data/portfolio";
import { SectionHeading } from "@/src/components/SectionHeading";

export function AboutClient() {
  const [contactSent, setContactSent] = useState(false);

  return (
    <div className="space-y-20 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="AI foundations, product instincts, and a builder mindset."
          text="A concise, recruiter-friendly snapshot of Sujan's education, focus areas, and trajectory."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-lg border border-slate-900/10 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]">
            <h2 className="mb-4 text-xl font-semibold text-slate-950 dark:text-white">Career Objective</h2>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">{portfolioData.about.careerObjective}</p>
            
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Info icon={MapPin} label="Location" value={portfolioData.location} />
              <Info
                icon={GraduationCap}
                label="Education"
                value={`${portfolioData.about.education.degree}, ${portfolioData.about.education.institution}`}
              />
              <Info
                icon={Award}
                label="Duration & CGPA"
                value={`${portfolioData.about.education.years} | CGPA ${portfolioData.about.education.cgpa}`}
              />
              <Info icon={BrainCircuit} label="Focus Areas" value={portfolioData.about.currentFocus.join(", ")} />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/Sujan_KS_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Trajectory & Milestones</h2>
            {portfolioData.about.journey.map((item) => (
              <div
                key={item.year}
                className="rounded-lg border border-slate-900/10 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.06]"
              >
                <div className="text-sm font-semibold text-cyan-600 dark:text-cyan-300">{item.year}</div>
                <h3 className="mt-1 text-lg font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Resume Summary Section */}
      <section className="mx-auto max-w-7xl">
        <div className="rounded-lg border border-slate-900/10 bg-white/75 p-6 backdrop-blur dark:border-white/10 dark:bg-white/[0.06] md:p-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Interactive Resume Highlights</h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                Key academic and project achievements structured for quick recruiter evaluation.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/Sujan_KS_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-slate-950"
              >
                <Download size={16} /> Download PDF
              </a>
              <a
                href="/Sujan_KS_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-900/10 px-4 py-2 text-sm font-semibold dark:border-white/10"
              >
                View Online <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Education: B.Tech AIML, N.M.A.M. Institute of Technology, CGPA 8.51",
              "Experience: Machine Learning Intern, breast cancer prediction, 0.85 accuracy",
              "Skills: Python, Deep Learning, Computer Vision, NLP, MLOps foundations",
              "Certifications: Intel AI for Future Workforce, IBM AI, Microsoft AINNOVATION, Simplilearn ML",
            ].map((line) => (
              <p key={line} className="flex gap-3 text-sm text-slate-700 dark:text-slate-200">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-500" size={18} />
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-7xl pt-6">
        <SectionHeading
          eyebrow="Contact"
          title="Start a conversation."
          text="A professional contact path for recruiters, collaborators, and AI teams."
        />
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-3">
            <Info icon={Mail} label="Email" value={portfolioData.email} />
            <Info icon={Code2} label="GitHub" value={portfolioData.social.github} />
            <Info icon={BriefcaseBusiness} label="LinkedIn" value={portfolioData.social.linkedin} />
            <Info icon={MapPin} label="Location" value={portfolioData.location} />
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setContactSent(true);
            }}
            className="rounded-lg border border-slate-900/10 bg-white/75 p-6 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" />
              <Field label="Email" type="email" />
            </div>
            <Field label="Subject" />
            <label className="mt-4 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Message
              <textarea
                required
                rows={5}
                className="mt-2 w-full rounded-md border border-slate-900/10 bg-white/80 p-3 text-slate-950 outline-none transition focus:border-cyan-500 dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
              />
            </label>
            {contactSent && (
              <p className="mt-4 rounded-md border border-emerald-500/30 bg-emerald-400/10 p-3 text-sm text-emerald-700 dark:text-emerald-200">
                Message captured. Thank you for reaching out!
              </p>
            )}
            <button className="mt-5 inline-flex items-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950">
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function Info({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-900/10 bg-white/75 p-4 dark:border-white/10 dark:bg-white/[0.06]">
      <div className="flex gap-3">
        <Icon className="mt-1 shrink-0 text-cyan-500" size={19} />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            {label}
          </p>
          <p className="mt-1 text-sm leading-6 text-slate-700 dark:text-slate-200">{value}</p>
        </div>
      </div>
    </div>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="mt-4 block text-sm font-medium text-slate-700 dark:text-slate-200">
      {label}
      <input
        required
        type={type}
        className="mt-2 w-full rounded-md border border-slate-900/10 bg-white/80 p-3 text-slate-950 outline-none transition focus:border-cyan-500 dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
      />
    </label>
  );
}
