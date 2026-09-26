"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Award,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Layers,
  Zap,
  Building2,
  Calendar,
  Sparkles,
  X,
  Maximize2,
  FolderGit2,
  Users,
  Medal,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/src/components/SectionHeading";
import { useLanguage } from "@/src/i18n";

const CATEGORY_TABS = [
  { key: "all", label: "All", icon: Sparkles },
  { key: "awards", label: "Awards", categoryName: "Awards & Recognition", icon: Trophy },
  { key: "competitions", label: "Competitions", categoryName: "Hackathons & Competitions", icon: Zap },
  { key: "courses", label: "Courses", categoryName: "Courses & Learning", icon: GraduationCap },
  { key: "workshops", label: "Workshops", categoryName: "Workshops", icon: Layers },
  { key: "professional", label: "Professional", categoryName: "Internships & Professional", icon: Briefcase },
  { key: "projects", label: "Projects", categoryName: "Project Credentials", icon: FolderGit2 },
  { key: "activities", label: "Activities", categoryName: "Leadership & Activities", icon: Users },
];

export function AchievementsClient() {
  const [activeTab, setActiveTab] = useState("all");
  const { ui, portfolioData } = useLanguage();
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof portfolioData.achievements)[number] | null>(null);

  // Close lightbox modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCertificate(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredItems = portfolioData.achievements.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  const getBadgeStyle = (typeBadge: string) => {
    switch (typeBadge) {
      case "Completion":
      case "Project Completion":
        return "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300";
      case "Participation":
        return "border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300";
      case "Winner Award":
      case "Award":
      case "State Level Award":
      case "Runners Up":
        return "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 font-semibold";
      case "Internship":
      case "Internship Certificate":
        return "border-indigo-500/30 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300";
      case "LOR":
      case "Letter of Recommendation":
        return "border-purple-500/30 bg-purple-500/10 text-purple-700 dark:text-purple-300";
      default:
        return "border-slate-500/30 bg-slate-500/10 text-slate-700 dark:text-slate-300";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "awards":
        return <Trophy size={18} className="text-amber-500" />;
      case "competitions":
        return <Zap size={18} className="text-rose-500" />;
      case "courses":
        return <GraduationCap size={18} className="text-cyan-500" />;
      case "workshops":
        return <Layers size={18} className="text-teal-500" />;
      case "professional":
        return <Briefcase size={18} className="text-indigo-500" />;
      case "projects":
        return <FolderGit2 size={18} className="text-emerald-500" />;
      case "activities":
        return <Users size={18} className="text-sky-500" />;
      case "sports":
        return <Medal size={18} className="text-orange-500" />;
      default:
        return <Award size={18} className="text-cyan-500" />;
    }
  };

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <SectionHeading
          eyebrow={ui.achievementsPage.eyebrow}
          title={ui.achievementsPage.title}
          text={ui.achievementsPage.subtitle}
        />

        {/* Filter Tabs / Chips */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {CATEGORY_TABS.map((tab) => {
            const Icon = tab.icon;
            const count =
              tab.key === "all"
                ? portfolioData.achievements.length
                : portfolioData.achievements.filter((item) => item.category === tab.key).length;
            const isActive = activeTab === tab.key;
            const labelMap: Record<string, string> = {
              all: ui.achievementsPage.filterAll,
              awards: ui.achievementsPage.filterAwards,
              competitions: ui.achievementsPage.filterCompetitions,
              courses: ui.achievementsPage.filterCourses,
              workshops: ui.achievementsPage.filterWorkshops,
              professional: ui.achievementsPage.filterProfessional,
              projects: ui.achievementsPage.filterProjects,
              activities: ui.achievementsPage.filterActivities,
            };

            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "border-cyan-500 bg-cyan-500/15 text-cyan-600 dark:bg-cyan-400/20 dark:text-cyan-300 font-semibold shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                    : "border-slate-900/10 bg-white/50 text-slate-600 hover:border-cyan-500/40 hover:bg-cyan-500/5 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-cyan-400/30"
                }`}
              >
                <Icon size={15} />
                <span>{labelMap[tab.key] || tab.label}</span>
                <span
                  className={`ml-1 rounded-full px-1.5 py-0.5 text-[10px] font-mono font-bold ${
                    isActive
                      ? "bg-cyan-500/30 text-cyan-700 dark:text-cyan-200"
                      : "bg-slate-900/10 dark:bg-white/10 text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid Display */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id || item.title}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-900/10 bg-white/75 backdrop-blur transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] dark:border-white/10 dark:bg-white/[0.06] dark:hover:border-cyan-400/40"
              >
                <div>
                  {/* Certificate Thumbnail Preview / Header Image */}
                  {item.image ? (
                    <div
                      onClick={() => setSelectedCertificate(item)}
                      className="relative h-48 w-full overflow-hidden bg-slate-950/80 cursor-pointer border-b border-slate-900/10 dark:border-white/10 group-hover:opacity-95"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      
                      {/* Zoom Overlay Indicator */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-[2px]">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/50 bg-slate-950/80 px-3 py-1.5 text-xs font-mono text-cyan-300 shadow-lg">
                          <Maximize2 size={13} /> Click to View Certificate
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-24 w-full bg-gradient-to-r from-slate-900/10 via-slate-950/20 to-slate-900/10 dark:from-white/[0.02] dark:to-white/[0.04] p-4 flex items-center justify-between border-b border-slate-900/10 dark:border-white/10">
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                        <Clock size={14} />
                        <span>Certificate Image Pending</span>
                      </div>
                      <span className="rounded bg-slate-900/10 dark:bg-white/10 px-2 py-0.5 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                        {item.date}
                      </span>
                    </div>
                  )}

                  {/* Card Content Body */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="grid h-8 w-8 place-items-center rounded-lg border border-slate-900/10 bg-slate-900/5 dark:border-white/10 dark:bg-slate-950/60">
                          {getCategoryIcon(item.category)}
                        </div>
                        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          {item.categoryLabel}
                        </span>
                      </div>

                      <span
                        className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-mono font-semibold ${getBadgeStyle(
                          item.typeBadge || item.credentialType
                        )}`}
                      >
                        {item.typeBadge || item.credentialType}
                      </span>
                    </div>

                    <h2 className="mt-4 text-lg font-bold text-slate-950 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug">
                      {item.title}
                    </h2>

                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs font-medium text-cyan-600 dark:text-cyan-400">
                      <div className="flex items-center gap-1">
                        <Building2 size={13} />
                        <span>{item.issuer}</span>
                      </div>
                      {item.date && (
                        <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-mono">
                          <Calendar size={13} />
                          <span>{item.date}</span>
                        </div>
                      )}
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
                      {item.note}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 pt-0 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    {item.credentialType}
                  </span>

                  {item.image ? (
                    <button
                      onClick={() => setSelectedCertificate(item)}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/20 cursor-pointer"
                    >
                      <span>View Certificate</span>
                      <Maximize2 size={13} />
                    </button>
                  ) : item.credlyUrl ? (
                    <a
                      href={item.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/20 cursor-pointer"
                    >
                      <span>Verify Credly</span>
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-400 italic">
                      Image Pending
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Category State */}
        {filteredItems.length === 0 && (
          <div className="mt-12 rounded-2xl border border-dashed border-slate-900/20 bg-slate-950/5 p-12 text-center dark:border-white/20 dark:bg-white/5">
            <p className="text-base font-semibold text-slate-700 dark:text-slate-300">
              No credentials found under this category filter.
            </p>
            <button
              onClick={() => setActiveTab("all")}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-cyan-500/20 px-4 py-2 text-xs font-semibold text-cyan-600 dark:text-cyan-300 hover:bg-cyan-500/30 transition cursor-pointer"
            >
              Show All Credentials
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCertificate && selectedCertificate.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-cyan-500/40 bg-slate-950 p-6 shadow-2xl"
            >
              {/* Modal Top Bar */}
              <div className="mb-4 flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-mono font-semibold uppercase text-cyan-400">
                    {selectedCertificate.categoryLabel} • {selectedCertificate.credentialType}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {selectedCertificate.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-medium">
                    Issued by <span className="text-cyan-300">{selectedCertificate.issuer}</span> {selectedCertificate.date ? `• ${selectedCertificate.date}` : ""}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400 hover:text-white transition cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Certificate Image Lightbox Display */}
              <div className="relative h-[60vh] max-h-[580px] w-full overflow-hidden rounded-xl bg-black flex items-center justify-center">
                <Image
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* Modal Footer Description */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-300">
                <p className="max-w-2xl leading-relaxed">{selectedCertificate.note}</p>
                
                {selectedCertificate.credlyUrl && (
                  <a
                    href={selectedCertificate.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 shrink-0 rounded-lg border border-cyan-400/50 bg-cyan-500/20 px-3.5 py-2 font-semibold text-cyan-200 hover:bg-cyan-500/30 transition"
                  >
                    <span>Verify Credly Badge</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
