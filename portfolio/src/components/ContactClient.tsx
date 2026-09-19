"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Code2,
  BriefcaseBusiness,
  Loader2,
  Copy,
  Check,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/src/data/portfolio";
import { SectionHeading } from "@/src/components/SectionHeading";

export function ContactClient() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const nameClean = formData.name.trim();
    const emailClean = formData.email.trim();
    const messageClean = formData.message.trim();

    // Client-side Validation
    if (!nameClean) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailClean || !emailRegex.test(emailClean)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!messageClean) {
      setStatus("error");
      setErrorMessage("Please enter your message.");
      return;
    }

    setStatus("loading");

    try {
      // Direct client-side FormSubmit AJAX submission (No server API route or API key required)
      const response = await fetch(`https://formsubmit.co/ajax/${portfolioData.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: nameClean,
          email: emailClean,
          message: messageClean,
          _subject: `Portfolio Contact — ${nameClean}`,
          _replyto: emailClean,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json();

      // Verify explicit FormSubmit success response
      if (response.ok && (data.success === "true" || data.success === true)) {
        setStatus("success");
        setSuccessMessage("Message sent successfully! Thank you for reaching out. Sujan will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(
          data.message || "Failed to deliver message via FormSubmit. Please try emailing directly at sujankswork@gmail.com"
        );
      }
    } catch (err) {
      console.error("FormSubmit Submission Error:", err);
      setStatus("error");
      setErrorMessage("Network error occurred. Please check your connection or email directly at sujankswork@gmail.com");
    }
  };

  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Top Heading */}
        <SectionHeading
          eyebrow="CONTACT"
          title="Let’s build something intelligent."
          text="Have a project, research idea, internship opportunity, or just want to connect? Send me a message."
        />

        {/* Desktop 2-Column Layout / Mobile Stack */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Column: Contact Details & Socials (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-slate-900/10 bg-white/75 p-7 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-950/70 md:p-8"
          >
            <div className="space-y-6">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span>OPEN FOR AI/ML & RESEARCH ROLES</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-mono tracking-tight text-slate-950 dark:text-white">
                  Direct Contact Information
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Feel free to reach out via email, phone, or connect across professional platforms.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4 pt-2">
                {/* Email Card */}
                <div className="group rounded-2xl border border-slate-900/10 bg-slate-900/[0.02] p-4 transition hover:border-cyan-500/40 dark:border-white/10 dark:bg-white/[0.04]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300">
                        <Mail size={18} />
                      </div>
                      <div>
                        <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Email Address
                        </span>
                        <a
                          href={`mailto:${portfolioData.email}`}
                          className="font-mono text-sm font-semibold text-slate-900 dark:text-cyan-300 hover:underline"
                        >
                          {portfolioData.email}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="grid h-8 w-8 place-items-center rounded-lg border border-slate-900/10 text-slate-600 hover:border-cyan-500/50 hover:text-cyan-600 dark:border-white/10 dark:text-slate-300 dark:hover:text-cyan-300 transition"
                      title="Copy email to clipboard"
                    >
                      {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="rounded-2xl border border-slate-900/10 bg-slate-900/[0.02] p-4 dark:border-white/10 dark:bg-white/[0.04]">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-300">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Phone / WhatsApp
                      </span>
                      <a
                        href={`tel:${portfolioData.phone}`}
                        className="font-mono text-sm font-semibold text-slate-900 dark:text-slate-200 hover:underline"
                      >
                        {portfolioData.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="rounded-2xl border border-slate-900/10 bg-slate-900/[0.02] p-4 dark:border-white/10 dark:bg-white/[0.04]">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-purple-500/10 text-purple-600 dark:bg-purple-400/10 dark:text-purple-300">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Location
                      </span>
                      <span className="font-mono text-sm font-semibold text-slate-900 dark:text-slate-200">
                        {portfolioData.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-900/10 dark:border-white/10">
                <span className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Secondary Channels:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={portfolioData.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-900/10 bg-slate-900/5 px-4 py-2.5 font-mono text-xs font-semibold text-slate-800 transition hover:border-cyan-500/40 hover:text-cyan-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-cyan-500/40 dark:hover:text-cyan-300"
                  >
                    <Code2 size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={portfolioData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-900/10 bg-slate-900/5 px-4 py-2.5 font-mono text-xs font-semibold text-slate-800 transition hover:border-cyan-500/40 hover:text-cyan-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-cyan-500/40 dark:hover:text-cyan-300"
                  >
                    <BriefcaseBusiness size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct FormSubmit Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-7 text-white shadow-2xl backdrop-blur md:p-8"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-cyan-500/20 pb-4">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-cyan-400">
                  <Sparkles size={16} className="text-cyan-400 animate-pulse" />
                  <span>SEND A DIRECT MESSAGE</span>
                </div>
                <span className="font-mono text-[11px] text-slate-400">Response within 24h</span>
              </div>

              {/* Status Alerts */}
              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-start gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-300 font-mono text-xs leading-relaxed"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400" />
                    <span>{successMessage}</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-start gap-3 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-rose-300 font-mono text-xs leading-relaxed"
                  >
                    <AlertCircle size={18} className="mt-0.5 shrink-0 text-rose-400" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Direct FormSubmit Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:bg-white/[0.08]"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Your Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:bg-white/[0.08]"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Your Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, research idea, or role..."
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:bg-white/[0.08] resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-4 font-mono text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin text-slate-950" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
