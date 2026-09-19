"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  Compass,
  Download,
  GraduationCap,
  MapPin,
  Sparkles,
  Code2,
  Milestone,
  Lightbulb,
  Heart,
  Globe,
  ArrowRight,
  Briefcase,
  ExternalLink,
} from "lucide-react";
import { SectionHeading } from "@/src/components/SectionHeading";

export function AboutClient() {
  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-16">
        {/* Header Section */}
        <SectionHeading
          eyebrow="Personal Profile"
          title="Sujan KS"
          text="AI & Machine Learning Developer based in Karnataka, India — passionate about building practical intelligent systems across vision, NLP, generative models, and robotics."
        />

        {/* Top Profile Summary Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-slate-900/90 via-slate-950 to-slate-900/90 p-8 text-white shadow-2xl backdrop-blur"
        >
          <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3.5 py-1 text-xs font-mono font-medium text-cyan-300 border border-cyan-500/30">
                  <MapPin size={13} className="text-cyan-400" /> Karnataka, India
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-mono font-medium text-emerald-300 border border-emerald-500/30">
                  <GraduationCap size={13} className="text-emerald-400" /> CGPA 8.56
                </span>
              </div>
              <h2 className="text-2xl font-bold font-mono tracking-tight text-white md:text-3xl">
                Building practical AI, visual intelligence & robotics systems.
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-300">
                B.Tech in Artificial Intelligence & Machine Learning at N.M.A.M. Institute of Technology, Nitte (2023–2027).
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href="/Sujan_KS_Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 hover:scale-105 cursor-pointer"
              >
                <Download size={18} /> Download Resume
              </a>
              <a
                href="/Sujan_KS_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-6 py-3.5 text-sm font-semibold text-cyan-300 shadow-lg shadow-cyan-500/10 transition hover:bg-cyan-500/20 hover:border-cyan-400 hover:scale-105 cursor-pointer"
              >
                <span>View Resume</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Section 1: About Me & Section 2: Education (Asymmetric Split Layout) */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* About Me (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-slate-900/10 bg-white/70 p-7 backdrop-blur dark:border-white/10 dark:bg-white/[0.05]"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
                <Sparkles size={20} />
                <h3 className="text-xs font-mono uppercase tracking-widest font-semibold">1. About Me</h3>
              </div>
              <h4 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                Intelligent Systems Developer
              </h4>
              <p className="text-base leading-relaxed text-slate-700 dark:text-slate-200">
                Sujan is an AI and Machine Learning developer who enjoys building intelligent systems across Computer Vision, Deep Learning, NLP, Generative AI, Speech AI, and Robotics.
              </p>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                With hands-on experience in real-world AI applications, Sujan has a growing focus on robotics, automation, ROS2, RAG/LLM architectures, and multilingual AI models designed to solve impactful problems.
              </p>
            </div>
          </motion.div>

          {/* Education Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/[0.03] to-slate-950/[0.03] p-7 backdrop-blur dark:border-white/10 dark:bg-white/[0.04]"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
                <GraduationCap size={20} />
                <h3 className="text-xs font-mono uppercase tracking-widest font-semibold">2. Education</h3>
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-300">
                  2023 – 2027
                </span>
                <h4 className="mt-1 text-xl font-bold text-slate-950 dark:text-white">
                  B.Tech in Artificial Intelligence & Machine Learning
                </h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  N.M.A.M. Institute of Technology, Nitte
                </p>
              </div>
              <div className="pt-2 border-t border-slate-900/10 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">Cumulative GPA</span>
                <span className="rounded-md bg-emerald-500/10 px-3 py-1 font-mono text-base font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  8.56 CGPA
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 3: Work Experience (Vertical Timeline Layout) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-900/10 bg-white/70 p-7 backdrop-blur dark:border-white/10 dark:bg-white/[0.05]"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
              <Briefcase size={20} />
              <h3 className="text-xs font-mono uppercase tracking-widest font-semibold">3. Work Experience</h3>
            </div>
            <Link
              href="/experience"
              className="group inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-600 hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300 transition"
            >
              <span>View Full Experience</span>
              <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="relative border-l-2 border-cyan-500/30 pl-6 sm:pl-8 space-y-10 ml-2 sm:ml-4">
            {/* FlyRank AI */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-4 w-4 rounded-full border-2 border-cyan-400 bg-slate-950 transition duration-300 group-hover:scale-125 group-hover:bg-cyan-400" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <h4 className="text-lg font-bold text-slate-950 dark:text-white flex items-center gap-2">
                    FlyRank AI <span className="text-xs font-normal text-slate-500 dark:text-slate-400">— Machine Learning Intern</span>
                  </h4>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href="https://sujan-lab-cell.github.io/flyrank-ml-internship/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-[11px] font-mono font-semibold text-cyan-600 dark:text-cyan-300 hover:bg-cyan-500/20 transition"
                  >
                    <span>View Research Paper</span>
                    <ArrowRight size={11} />
                  </a>
                  <a
                    href="https://github.com/Sujan-lab-cell/flyrank-ml-internship.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-slate-900/10 bg-slate-900/5 dark:border-white/10 dark:bg-white/5 px-2.5 py-0.5 text-[11px] font-mono font-semibold text-slate-700 dark:text-slate-300 hover:border-cyan-500/30 hover:text-cyan-600 dark:hover:text-cyan-300 transition"
                  >
                    <Code2 size={11} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://github.com/Sujan-lab-cell/FlyRank_ai_info.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-slate-900/10 bg-slate-900/5 dark:border-white/10 dark:bg-white/5 px-2.5 py-0.5 text-[11px] font-mono font-semibold text-slate-700 dark:text-slate-300 hover:border-cyan-500/30 hover:text-cyan-600 dark:hover:text-cyan-300 transition"
                  >
                    <Code2 size={11} />
                    <span>AI Info Repo</span>
                  </a>
                  <span className="inline-block rounded-md bg-cyan-500/10 px-3 py-1 font-mono text-xs font-medium text-cyan-600 dark:text-cyan-300 border border-cyan-500/20 w-fit">
                    July 2026 – August 2026
                  </span>
                </div>
              </div>
              <ul className="mt-3 space-y-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span> Worked on a machine learning system for Google Search performance and webpage prioritization.
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span> Performed data analysis, feature engineering, data validation, and target-leakage detection on large-scale search data.
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span> Compared ML models including Random Forest, XGBoost, LightGBM, CatBoost, and Logistic Regression.
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span> Used 5-fold client-grouped validation to improve evaluation reliability.
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span> Achieved Precision@50 of 0.444 compared with a 0.392 baseline (+5.2 percentage points).
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-500">•</span> Built a human-in-the-loop content prioritization workflow for SEO review.
                </li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "LightGBM", "CatBoost", "DuckDB", "Matplotlib", "Git", "GitHub"].map((t) => (
                  <span key={t} className="rounded-md border border-slate-900/10 bg-slate-900/5 px-2.5 py-0.5 text-[11px] font-mono text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* ISIRI Technologies Pvt. Ltd. (AyusLab) */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-4 w-4 rounded-full border-2 border-emerald-400 bg-slate-950 transition duration-300 group-hover:scale-125 group-hover:bg-emerald-400" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <h4 className="text-lg font-bold text-slate-950 dark:text-white flex items-center gap-2">
                    AI/ML Intern <span className="text-xs font-normal text-slate-500 dark:text-slate-400">— ISIRI Technologies Pvt. Ltd. (AyusLab)</span>
                  </h4>
                  <p className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-300 mt-0.5">
                    Mangaluru, Karnataka
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href="https://github.com/Sujan-lab-cell/INVOICE_TO_JSON_AI_PARSER.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-mono font-semibold text-emerald-600 dark:text-emerald-300 hover:bg-emerald-500/20 transition"
                  >
                    <Code2 size={11} />
                    <span>GitHub Repo</span>
                  </a>
                  <span className="inline-block rounded-md bg-emerald-500/10 px-3 py-1 font-mono text-xs font-medium text-emerald-600 dark:text-emerald-300 border border-emerald-500/20 w-fit">
                    May 2026 – Jul 2026
                  </span>
                </div>
              </div>
              <ul className="mt-3 space-y-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                <li className="flex gap-2">
                  <span className="text-emerald-500">•</span> Developed a <strong className="font-semibold text-slate-800 dark:text-slate-100">hybrid AI-based invoice parsing system</strong> to extract structured data from <strong className="font-semibold text-slate-800 dark:text-slate-100">PDF, image, Excel, and CSV invoices</strong>.
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500">•</span> Implemented <strong className="font-semibold text-slate-800 dark:text-slate-100">OCR, NLP preprocessing, regex/rule-based extraction, validation, and LLM-based fallback</strong> to improve extraction reliability.
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500">•</span> Extracted key invoice fields including <strong className="font-semibold text-slate-800 dark:text-slate-100">supplier/buyer details, invoice information, line items, pricing, GST/tax, and totals</strong>, and converted them into <strong className="font-semibold text-slate-800 dark:text-slate-100">structured JSON</strong>.
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500">•</span> Built <strong className="font-semibold text-slate-800 dark:text-slate-100">FastAPI REST APIs</strong> with <strong className="font-semibold text-slate-800 dark:text-slate-100">Pydantic validation</strong> and deployed the backend using <strong className="font-semibold text-slate-800 dark:text-slate-100">Docker on Render</strong>.
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-500">•</span> Integrated validation and quality checks to identify missing or inconsistent critical invoice information before generating the final output.
                </li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "OCR",
                  "NLP Preprocessing",
                  "Regex",
                  "Rule-based Extraction",
                  "Validation",
                  "LLM Fallback",
                  "FastAPI",
                  "Pydantic",
                  "Docker",
                  "Render",
                  "Structured JSON",
                ].map((t) => (
                  <span key={t} className="rounded-md border border-slate-900/10 bg-slate-900/5 px-2.5 py-0.5 text-[11px] font-mono text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* EdiGlobe */}
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-4 w-4 rounded-full border-2 border-purple-400 bg-slate-950 transition duration-300 group-hover:scale-125 group-hover:bg-purple-400" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <h4 className="text-lg font-bold text-slate-950 dark:text-white flex items-center gap-2">
                    EdiGlobe <span className="text-xs font-normal text-slate-500 dark:text-slate-400">— Machine Learning Intern</span>
                  </h4>
                  <p className="text-xs font-mono font-medium text-purple-600 dark:text-purple-300 mt-0.5">
                    Project: Heart Disease Detection using Machine Learning
                  </p>
                </div>
                <span className="inline-block rounded-md bg-purple-500/10 px-3 py-1 font-mono text-xs font-medium text-purple-600 dark:text-purple-300 border border-purple-500/20 w-fit">
                  July 2025 – August 2025
                </span>
              </div>
              <ul className="mt-3 space-y-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                <li className="flex gap-2">
                  <span className="text-purple-500">•</span> Worked on a machine learning project for heart disease risk prediction using structured/tabular health-related data.
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-500">•</span> Performed basic data preprocessing, exploratory data analysis, feature preparation, and model training.
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-500">•</span> Experimented with classification models and evaluated their predictions using standard classification metrics.
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-500">•</span> Worked with Python and common machine learning/data analysis libraries.
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-500">•</span> Gained practical experience in the end-to-end machine learning workflow, from data preprocessing to model evaluation.
                </li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Python", "Machine Learning", "Classification Models", "EDA", "Scikit-learn", "Pandas"].map((t) => (
                  <span key={t} className="rounded-md border border-slate-900/10 bg-slate-900/5 px-2.5 py-0.5 text-[11px] font-mono text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 4: What I Build & Section 5: Currently Exploring */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* What I Build */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-900/10 bg-white/70 p-7 backdrop-blur dark:border-white/10 dark:bg-white/[0.05]"
          >
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-4">
              <Code2 size={20} />
              <h3 className="text-xs font-mono uppercase tracking-widest font-semibold">4. What I Build</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
              Practical AI systems across computer vision, NLP, speech processing, and generative adversarial models.
            </p>

            <div className="space-y-4">
              <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4 dark:border-cyan-500/20 dark:bg-cyan-500/[0.04]">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-slate-950 dark:text-white text-sm">GeoSentinel</h4>
                  <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-300">Computer Vision</span>
                </div>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                  Landslide detection and terrain hazard monitoring using YOLOv8 instance segmentation.
                </p>
              </div>

              <div className="rounded-xl border border-sky-500/20 bg-sky-500/5 p-4 dark:border-sky-500/20 dark:bg-sky-500/[0.04]">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-slate-950 dark:text-white text-sm">SmartQ Generator</h4>
                  <span className="text-[11px] font-mono text-sky-600 dark:text-sky-300">Multilingual NLP</span>
                </div>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                  Automated question generation pipeline powered by T5 transformer, STT, and text-to-speech.
                </p>
              </div>

              <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-4 dark:border-purple-500/20 dark:bg-purple-500/[0.04]">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-slate-950 dark:text-white text-sm">AI Human Face Generation</h4>
                  <span className="text-[11px] font-mono text-purple-600 dark:text-purple-300">Generative AI</span>
                </div>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                  Synthetic human face generation model built with WGAN-GP and TensorFlow.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-2 border-t border-slate-900/5 dark:border-white/5">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-600 hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300 transition"
              >
                <span>View All Projects</span>
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Currently Exploring */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-slate-900/10 bg-white/70 p-7 backdrop-blur dark:border-white/10 dark:bg-white/[0.05]"
          >
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-4">
              <Compass size={20} />
              <h3 className="text-xs font-mono uppercase tracking-widest font-semibold">5. Currently Exploring</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
              Active areas of research, technical depth expansion, and personal growth topics.
            </p>

            <div className="flex flex-wrap gap-2.5">
              {[
                "Robotics & ROS2",
                "Reinforcement Learning",
                "RAG & LLM Systems",
                "Transformers Architecture",
                "Generative AI",
                "Multilingual AI",
                "Data Structures & Algorithms",
                "Applied Mathematics",
                "Japanese Language Learning",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-3.5 py-2 text-xs font-medium text-slate-800 dark:text-cyan-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Section 6: My Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-900/10 bg-white/70 p-7 backdrop-blur dark:border-white/10 dark:bg-white/[0.05]"
        >
          <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-6">
            <Milestone size={20} />
            <h3 className="text-xs font-mono uppercase tracking-widest font-semibold">6. My Journey</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="relative pl-5 border-l-2 border-cyan-500/40">
              <div className="absolute -left-[7px] top-0 h-3 w-3 rounded-full bg-cyan-500" />
              <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-300">2023</span>
              <h4 className="mt-1 text-sm font-bold text-slate-950 dark:text-white">Started B.Tech in AI & ML</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                Commenced B.Tech in AIML at NMAMIT Nitte. Built strong foundations in programming, mathematics, and CS.
              </p>
            </div>

            <div className="relative pl-5 border-l-2 border-emerald-500/40">
              <div className="absolute -left-[7px] top-0 h-3 w-3 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-300">2025</span>
              <h4 className="mt-1 text-sm font-bold text-slate-950 dark:text-white">ML Internship & AI Projects</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                EdiGlobe ML internship, built GeoSentinel computer vision & SmartQ Generator NLP systems.
              </p>
            </div>

            <div className="relative pl-5 border-l-2 border-indigo-500/40">
              <div className="absolute -left-[7px] top-0 h-3 w-3 rounded-full bg-indigo-500" />
              <span className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-300">2026</span>
              <h4 className="mt-1 text-sm font-bold text-slate-950 dark:text-white">FlyRank + AyushLab Internships</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                Hands-on AI/ML internships at FlyRank (SEO risk ML) and AyushLab / ISIRI Technologies (Invoice Parser).
              </p>
            </div>

            <div className="relative pl-5 border-l-2 border-purple-500/40">
              <div className="absolute -left-[7px] top-0 h-3 w-3 rounded-full bg-purple-500" />
              <span className="text-xs font-mono font-semibold text-purple-600 dark:text-purple-300">Present</span>
              <h4 className="mt-1 text-sm font-bold text-slate-950 dark:text-white">Robotics & Advanced AI</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                Exploration of ROS2 robotics, reinforcement learning, RAG/LLM pipelines, and Japanese language learning.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section 7: Beyond Code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-900/10 bg-white/70 p-7 backdrop-blur dark:border-white/10 dark:bg-white/[0.05]"
        >
          <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-6">
            <Heart size={20} />
            <h3 className="text-xs font-mono uppercase tracking-widest font-semibold">7. Beyond Code</h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5 dark:border-amber-500/20 dark:bg-amber-500/[0.04]">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 mb-2">
                <Award size={18} />
                <h4 className="font-semibold text-slate-950 dark:text-white text-sm">Rajya Puraskar & Scouting</h4>
              </div>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                Awarded the Rajya Puraskar (State Governor Award) in Bharat Scouts & Guides, demonstrating leadership, service, and outdoor survival skills.
              </p>
            </div>

            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5 dark:border-emerald-500/20 dark:bg-emerald-500/[0.04]">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-2">
                <Lightbulb size={18} />
                <h4 className="font-semibold text-slate-950 dark:text-white text-sm">Tech Awareness Sessions</h4>
              </div>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                Conducting technology awareness sessions and digital literacy initiatives for government school students.
              </p>
            </div>

            <div className="rounded-xl border border-sky-500/20 bg-sky-500/5 p-5 dark:border-sky-500/20 dark:bg-sky-500/[0.04]">
              <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 mb-2">
                <Code2 size={18} />
                <h4 className="font-semibold text-slate-950 dark:text-white text-sm">Problem Solving & DSA</h4>
              </div>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                Active problem solving focusing on Data Structures & Algorithms, computer science fundamentals, and optimization logic.
              </p>
            </div>

            <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-5 dark:border-purple-500/20 dark:bg-purple-500/[0.04]">
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-2">
                <Globe size={18} />
                <h4 className="font-semibold text-slate-950 dark:text-white text-sm">Japanese Language Learning</h4>
              </div>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                Actively learning the Japanese language, vocabulary, and communication to expand global cultural and technical horizons.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
