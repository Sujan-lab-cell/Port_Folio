"use client";

import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Code2,
  BriefcaseBusiness,
  Copy,
  Check,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/src/components/SectionHeading";
import { useLanguage } from "@/src/i18n";

export function ContactClient() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [nextUrl, setNextUrl] = useState("");
  const { ui, portfolioData } = useLanguage();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set("submitted", "true");
      setNextUrl(currentUrl.toString());

      if (window.location.search.includes("submitted=true")) {
        setSubmitted(true);
      }
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyMessageText = () => {
    const textToCopy = `To: ${portfolioData.email}\nSubject: Portfolio Contact — ${formData.name || "Inquiry"}\nFrom: ${formData.name || "Visitor"} (${formData.email || "No email"})\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  const mailtoUrl = `mailto:${portfolioData.email}?subject=${encodeURIComponent(
    `Portfolio Contact — ${formData.name || "New Message"}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* Top Heading */}
        <SectionHeading
          eyebrow={ui.contactPage.eyebrow}
          title={ui.contactPage.title}
          text={ui.contactPage.subtitle}
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
                <span>{ui.contactPage.availableBadge}</span>
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
                          {ui.contactPage.emailLabel}
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
                      className="grid h-8 w-8 place-items-center rounded-lg border border-slate-900/10 text-slate-600 hover:border-cyan-500/50 hover:text-cyan-600 dark:border-white/10 dark:text-slate-300 dark:hover:text-cyan-300 transition cursor-pointer"
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
                        {ui.contactPage.phoneLabel}
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
                        {ui.contactPage.locationLabel}
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

          {/* Right Column: Native Direct FormSubmit Form */}
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

              {/* Status Alert */}
              <AnimatePresence mode="wait">
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-start gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-300 font-mono text-xs leading-relaxed"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400" />
                    <span>{ui.contactPage.successMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Native HTML FormSubmit Form */}
              <form
                action={`https://formsubmit.co/${portfolioData.email}`}
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="_subject" value="Portfolio Contact — New Message" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_replyto" value={formData.email} />
                {nextUrl && <input type="hidden" name="_next" value={nextUrl} />}

                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
                    {ui.contactPage.formName} <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={ui.contactPage.formNamePlaceholder}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:bg-white/[0.08]"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
                    {ui.contactPage.formEmail} <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={ui.contactPage.formEmailPlaceholder}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:bg-white/[0.08]"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
                    {ui.contactPage.formMessage} <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={ui.contactPage.formMessagePlaceholder}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:bg-white/[0.08] resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-4 font-mono text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <Send size={18} />
                  <span>{ui.buttons.sendMessage}</span>
                </button>

                {/* Quick Direct Actions */}
                <div className="pt-3 flex flex-wrap gap-2.5 border-t border-white/10">
                  <a
                    href={mailtoUrl}
                    className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-xs font-mono font-semibold text-slate-300 transition hover:bg-white/10 hover:text-cyan-300 hover:border-cyan-500/40"
                  >
                    <Mail size={15} />
                    <span>Open Email App</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyMessageText}
                    className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-xs font-mono font-semibold text-slate-300 transition hover:bg-white/10 hover:text-cyan-300 hover:border-cyan-500/40 cursor-pointer"
                  >
                    {copiedMessage ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                    <span>{copiedMessage ? ui.buttons.copied : ui.buttons.copyEmail}</span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

