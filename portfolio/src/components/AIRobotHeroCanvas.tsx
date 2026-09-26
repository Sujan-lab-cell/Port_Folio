"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Bot, Sparkles } from "lucide-react";
import { portfolioData } from "@/src/data/portfolio";
import { useLanguage } from "@/src/i18n";

interface AIRobotHeroCanvasProps {
  onAskQuestion?: (prompt: string) => void;
}

interface ChatMessage {
  id: string;
  question: string;
  answer: string | null;
  error?: string | null;
  isLoading?: boolean;
}

export function AIRobotHeroCanvas({ onAskQuestion }: AIRobotHeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const { lang } = useLanguage();

  // Robot speech bubble RAG chat conversation history state
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [customInput, setCustomInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // i18n Labels
  const titleText = lang === "ja" ? "AIポートフォリオアシスタント" : "AI Portfolio Assistant";
  const placeholderText = lang === "ja" ? "スジャンについて何でも聞いてください..." : "Ask anything about Sujan...";
  const askButtonText = lang === "ja" ? "質問" : "Ask";
  const loadingText = lang === "ja" ? "回答を生成しています..." : "Generating grounded response...";
  const greetingText = lang === "ja"
    ? "「こんにちは！スジャンのAIアシスタントです。何でも質問してください！」"
    : "“Hi! I’m Sujan’s AI Assistant — Ask me anything about his work!”";

  const quickPrompts = lang === "ja"
    ? [
        "スジャンについて教えて",
        "どんなプロジェクトを開発しましたか？",
        "スキルを教えて",
        "AIプロジェクトを見る",
        "コンピュータビジョンのプロジェクトを見る",
        "履歴書を見る",
      ]
    : [
        "Tell me about Sujan",
        "What projects has he built?",
        "What are his skills?",
        "Show AI projects",
        "Show Computer Vision projects",
        "Show resume",
      ];

  // Auto-scroll chat area internally to latest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleAskRobot = async (userPrompt: string) => {
    if (!userPrompt.trim() || isLoading) return;
    const questionText = userPrompt.trim();
    const msgId = Date.now().toString() + Math.random().toString(36).substring(2, 5);

    if (onAskQuestion) {
      onAskQuestion(questionText);
    }

    setIsLoading(true);

    setMessages((prev) => [
      ...prev,
      {
        id: msgId,
        question: questionText,
        answer: null,
        isLoading: true,
      },
    ]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: questionText, language: lang }),
      });

      if (!res.ok) {
        throw new Error(`Server error ${res.status}`);
      }

      const data = await res.json();
      if (data.answer) {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === msgId ? { ...msg, answer: data.answer, isLoading: false } : msg
          )
        );
      } else if (data.error) {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === msgId ? { ...msg, error: data.error, isLoading: false } : msg
          )
        );
      }
    } catch (err: any) {
      console.error("Robot API chat error:", err);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === msgId
            ? { ...msg, error: err.message || "Failed to fetch response.", isLoading: false }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Canvas interactive cyber particle & hologram orbital animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Mouse tracker
    let targetX = width / 2;
    let targetY = height / 2;
    let currX = width / 2;
    let currY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      setMousePos({ x: (targetX - width / 2) / (width / 2), y: (targetY - height / 2) / (height / 2) });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Particles for holographic core
    const particles = Array.from({ length: 45 }, () => ({
      angle: Math.random() * Math.PI * 2,
      radius: 80 + Math.random() * 110,
      speed: 0.005 + Math.random() * 0.015,
      size: 1 + Math.random() * 2.5,
      color: Math.random() > 0.4 ? "#22d3ee" : "#818cf8",
      yOffset: (Math.random() - 0.5) * 60,
    }));

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth lerp mouse
      currX += (targetX - currX) * 0.06;
      currY += (targetY - currY) * 0.06;
      time += 0.02;

      const centerX = width / 2;
      const centerY = height / 2 - 20;

      // Draw Orbiting Hologram Particle Field
      particles.forEach((p) => {
        p.angle += p.speed;
        const px = centerX + Math.cos(p.angle) * p.radius + (currX - centerX) * 0.05;
        const py = centerY + Math.sin(p.angle) * (p.radius * 0.4) + p.yOffset + (currY - centerY) * 0.05;

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw Holographic Rotating Rings
      ctx.save();
      ctx.translate(centerX, centerY);

      // Outer ring
      ctx.beginPath();
      ctx.ellipse(0, 30, 160, 55, time * 0.5, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(34, 211, 238, 0.25)";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([8, 12]);
      ctx.stroke();

      // Inner ring
      ctx.beginPath();
      ctx.ellipse(0, -10, 120, 40, -time * 0.7, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(129, 140, 248, 0.35)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 8]);
      ctx.stroke();

      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="relative w-full h-[580px] sm:h-[650px] flex items-center justify-center select-none">
      {/* Background Interactive Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Cyber Glow Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-gradient-to-r from-cyan-500/20 via-teal-400/20 to-indigo-600/20 blur-3xl pointer-events-none" />

      {/* Centerpiece 3D SVG Vector AI Robot Character Assembly */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotateX: mousePos.y * 12,
          rotateY: mousePos.x * 16,
        }}
        transition={{
          y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
          rotateX: { duration: 0.2, ease: "easeOut" },
          rotateY: { duration: 0.2, ease: "easeOut" },
        }}
        style={{ transformStyle: "preserve-3d" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative z-10 flex flex-col items-center justify-center cursor-pointer group"
      >
        {/* Floating Holographic AI Visor Speech Tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-28 sm:-top-32 z-30 w-80 sm:w-96 rounded-2xl border border-cyan-500/40 bg-slate-950/95 p-4 shadow-[0_0_35px_rgba(34,211,238,0.35)] backdrop-blur-xl pointer-events-auto"
        >
          <div className="flex items-start gap-3">
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-400/30">
              <Bot size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">
                    {titleText}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                {messages.length > 0 && (
                  <button
                    onClick={() => setMessages([])}
                    disabled={isLoading}
                    className="text-[10px] font-mono font-semibold text-cyan-400 hover:text-white cursor-pointer disabled:opacity-40"
                  >
                    {lang === "ja" ? "クリア" : "Clear"}
                  </button>
                )}
              </div>

              {messages.length === 0 ? (
                <p className="mt-1 text-xs text-slate-200 leading-snug">
                  {greetingText}
                </p>
              ) : (
                <div
                  ref={scrollRef}
                  onWheel={(e) => e.stopPropagation()}
                  onTouchMove={(e) => e.stopPropagation()}
                  className="mt-2 max-h-40 sm:max-h-52 overflow-y-auto pr-1.5 space-y-2 font-sans text-[11px] sm:text-xs scrollbar-thin cursor-auto pointer-events-auto select-text"
                >
                  {messages.map((item) => (
                    <div key={item.id} className="rounded-lg bg-slate-900/80 p-2 border border-white/5 space-y-1">
                      <div className="flex items-start gap-1 font-mono font-bold text-cyan-300 text-[11px]">
                        <span className="text-slate-400 shrink-0">Q:</span>
                        <span className="whitespace-pre-wrap text-cyan-200">{item.question}</span>
                      </div>
                      <div className="flex items-start gap-1 text-slate-200 leading-relaxed text-[11px] sm:text-xs">
                        <span className="font-mono font-bold text-slate-400 shrink-0">A:</span>
                        <div className="flex-1 min-w-0">
                          {item.isLoading ? (
                            <div className="flex items-center gap-1.5 text-cyan-400 font-mono animate-pulse py-0.5">
                              <Sparkles size={13} className="animate-spin text-cyan-400 shrink-0" />
                              <span>{loadingText}</span>
                            </div>
                          ) : item.error ? (
                            <span className="text-rose-400 font-mono">{item.error}</span>
                          ) : (
                            <span className="whitespace-pre-wrap">{item.answer}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Quick Prompts */}
          <div className="mt-3 flex flex-wrap gap-1.5 border-t border-white/10 pt-2.5">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleAskRobot(prompt)}
                disabled={isLoading}
                className="rounded-lg border border-cyan-500/30 bg-cyan-950/60 px-2 py-1 text-[10px] sm:text-[11px] font-mono font-medium text-cyan-200 transition hover:border-cyan-400 hover:bg-cyan-500/30 hover:text-white disabled:opacity-40 cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Custom Question Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!customInput.trim() || isLoading) return;
              handleAskRobot(customInput.trim());
              setCustomInput("");
            }}
            className="mt-2.5 flex items-center gap-1.5"
          >
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder={placeholderText}
              disabled={isLoading}
              className="min-w-0 flex-1 rounded-lg border border-cyan-500/30 bg-slate-900/90 px-2.5 py-1.5 text-[11px] font-mono text-white placeholder-slate-400 outline-none transition focus:border-cyan-400 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!customInput.trim() || isLoading}
              className="rounded-lg bg-cyan-500 px-3 py-1.5 text-[11px] font-mono font-bold text-slate-950 transition hover:bg-cyan-400 disabled:opacity-40 disabled:hover:bg-cyan-500 cursor-pointer shrink-0"
            >
              {askButtonText}
            </button>
          </form>
        </motion.div>

        {/* 3D Cyber Vector Robot Head & Core */}
        <div className="relative h-72 w-72 sm:h-80 sm:w-80 flex items-center justify-center">
          {/* SVG Vector Robot Helmet & Optical Visor */}
          <svg
            viewBox="0 0 200 240"
            className="w-full h-full drop-shadow-[0_0_35px_rgba(34,211,238,0.4)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Helmet Armor */}
            <path
              d="M100 20 C55 20 30 50 30 95 C30 145 55 180 100 200 C145 180 170 145 170 95 C170 50 145 20 100 20 Z"
              fill="url(#helmetGrad)"
              stroke="#0ea5e9"
              strokeWidth="2"
              strokeOpacity="0.6"
            />
            {/* Temples & Ear Plate Details */}
            <rect x="22" y="85" width="12" height="35" rx="4" fill="#0f172a" stroke="#22d3ee" strokeWidth="1.5" />
            <rect x="166" y="85" width="12" height="35" rx="4" fill="#0f172a" stroke="#22d3ee" strokeWidth="1.5" />

            {/* Optical Cyan Cyber Visor */}
            <path
              d="M48 80 Q100 70 152 80 L146 110 Q100 120 54 110 Z"
              fill="url(#visorGrad)"
              stroke="#38bdf8"
              strokeWidth="2"
            />
            {/* Visor Optical Radar Line */}
            <motion.path
              d="M52 95 Q100 88 148 95"
              stroke="#67e8f9"
              strokeWidth="3"
              strokeLinecap="round"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />

            {/* Mouth / Vent Plate */}
            <path d="M75 145 L125 145 L115 165 L85 165 Z" fill="#020617" stroke="#334155" strokeWidth="1.5" />
            <line x1="85" y1="152" x2="115" y2="152" stroke="#0ea5e9" strokeWidth="1.5" />
            <line x1="88" y1="158" x2="112" y2="158" stroke="#0ea5e9" strokeWidth="1.5" />

            {/* Neck Mechanism */}
            <rect x="80" y="195" width="40" height="25" rx="4" fill="#090d16" stroke="#1e293b" strokeWidth="2" />
            <line x1="90" y1="200" x2="90" y2="215" stroke="#38bdf8" strokeWidth="2" />
            <line x1="100" y1="200" x2="100" y2="215" stroke="#22d3ee" strokeWidth="2" />
            <line x1="110" y1="200" x2="110" y2="215" stroke="#38bdf8" strokeWidth="2" />

            {/* Core Reactor Chest Ring (Bottom) */}
            <circle cx="100" cy="225" r="14" fill="#030712" stroke="#0ea5e9" strokeWidth="2" />
            <circle cx="100" cy="225" r="7" fill="#22d3ee" className="animate-pulse" />

            {/* Gradients */}
            <defs>
              <linearGradient id="helmetGrad" x1="100" y1="20" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="50%" stopColor="#020617" />
                <stop offset="100%" stopColor="#030712" />
              </linearGradient>
              <linearGradient id="visorGrad" x1="48" y1="80" x2="152" y2="110" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="50%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Floating Holographic Energy Orb in Hand Side */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-8 top-12 flex items-center justify-center h-20 w-20 rounded-full border border-cyan-400/50 bg-cyan-500/10 backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,0.5)]"
          >
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-300 to-indigo-400 blur-sm animate-ping" />
            <Sparkles size={20} className="absolute text-cyan-200" />
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Holographic Telemetry Cards (Scattered asymmetrically around Robot) */}
      {portfolioData.stats.map((stat, idx) => {
        const positions = [
          "top-4 -left-4 sm:top-10 sm:-left-12",
          "top-12 -right-4 sm:top-16 sm:-right-12",
          "bottom-12 -left-4 sm:bottom-16 sm:-left-10",
          "bottom-4 -right-4 sm:bottom-8 sm:-right-8",
        ];
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, idx % 2 === 0 ? -8 : 8, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.2 + idx * 0.1 },
              y: { duration: 4 + idx, repeat: Infinity, ease: "easeInOut" },
            }}
            className={`absolute z-20 ${positions[idx]} rounded-2xl border border-white/10 bg-slate-950/80 p-3.5 shadow-2xl backdrop-blur-xl transition hover:border-cyan-400/60 hover:bg-slate-900/90 cursor-default`}
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <span className="text-xl font-bold font-mono text-white">{stat.value}</span>
            </div>
            <p className="mt-1 text-xs font-semibold text-cyan-300">{stat.label}</p>
            <p className="text-[10px] text-slate-400">{stat.detail}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
