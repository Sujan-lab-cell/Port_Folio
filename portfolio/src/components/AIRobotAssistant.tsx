"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Sparkles, MessageSquare, ArrowRight, Zap } from "lucide-react";

interface AIRobotAssistantProps {
  onAskQuestion?: (prompt: string) => void;
}

const QUICK_PROMPTS = [
  "Tell me about Sujan",
  "What projects has he built?",
  "What are his skills?",
];

export function AIRobotAssistant({ onAskQuestion }: AIRobotAssistantProps) {
  const [hovered, setHovered] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(true);

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Interactive Speech Bubble Tooltip */}
      <AnimatePresence>
        {activeTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="mb-4 relative z-20 w-full max-w-xs rounded-xl border border-cyan-500/30 bg-slate-950/90 p-3.5 shadow-[0_0_25px_rgba(34,211,238,0.25)] backdrop-blur-xl"
          >
            {/* Tooltip pointer arrow */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-950" />

            <div className="flex items-start gap-2.5">
              <div className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-cyan-500/20 text-cyan-400">
                <Bot size={16} />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-cyan-300">Sujan's AI Assistant</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <p className="mt-1 text-xs text-slate-200 leading-snug">
                  “Hi! I’m Sujan’s AI Assistant — Ask me anything about his work!”
                </p>
              </div>
            </div>

            {/* Quick Prompts */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => onAskQuestion && onAskQuestion(prompt)}
                  className="rounded-md border border-cyan-500/20 bg-cyan-950/40 px-2 py-1 text-[11px] font-medium text-cyan-200 hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-white transition cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Robot Container with Floating & Hover Parallax */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative group cursor-pointer"
      >
        {/* Ambient Halo & Energy Ring */}
        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-teal-400/20 blur-2xl opacity-75 group-hover:opacity-100 transition duration-500" />
        
        {/* Holographic Spinning Ring behind Robot Hand Orb */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-4 h-24 w-24 rounded-full border border-dashed border-cyan-400/40 pointer-events-none"
        />

        {/* 3D Robot Avatar Card */}
        <div className="relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-slate-950/80 p-2 shadow-2xl backdrop-blur-md transition-all duration-300 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_35px_rgba(34,211,238,0.3)]">
          <div className="relative h-64 w-64 sm:h-72 sm:w-72 overflow-hidden rounded-xl bg-gradient-to-b from-slate-900 via-slate-950 to-[#030712]">
            <Image
              src="/images/ai_robot_assistant.jpg"
              alt="Sujan's AI Robot Assistant"
              fill
              priority
              sizes="(max-width: 768px) 256px, 288px"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />

            {/* Glowing Scanline Animation Overlay */}
            <motion.div
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-0 h-12 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent pointer-events-none"
            />

            {/* Live Telemetry Badge overlay on image bottom */}
            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between rounded-lg border border-white/10 bg-slate-950/80 px-2.5 py-1.5 backdrop-blur-md text-[10px] font-mono text-cyan-300">
              <div className="flex items-center gap-1.5">
                <Zap size={11} className="text-amber-400" />
                <span>AI CORE: ACTIVE</span>
              </div>
              <span className="text-emerald-400">99.4% OPTIMAL</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
