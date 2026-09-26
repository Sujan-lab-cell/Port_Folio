import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Sparkles, Zap } from "lucide-react";
import { useLanguage } from "@/src/i18n";

interface AIRobotAssistantProps {
  onAskQuestion?: (prompt: string) => void;
}

interface ChatMessage {
  id: string;
  question: string;
  answer: string | null;
  error?: string | null;
  isLoading?: boolean;
}

export function AIRobotAssistant({ onAskQuestion }: AIRobotAssistantProps) {
  const [hovered, setHovered] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { lang } = useLanguage();

  // Internal RAG chat conversation history state
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
            className="mb-4 relative z-20 w-full max-w-sm rounded-xl border border-cyan-500/30 bg-slate-950/95 p-3.5 shadow-[0_0_25px_rgba(34,211,238,0.25)] backdrop-blur-xl pointer-events-auto"
          >
            {/* Tooltip pointer arrow */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-950" />

            <div className="flex items-start gap-2.5">
              <div className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-cyan-500/20 text-cyan-400">
                <Bot size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-cyan-300">{titleText}</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  {messages.length > 0 && (
                    <button
                      onClick={() => setMessages([])}
                      disabled={isLoading}
                      className="text-[10px] font-mono text-cyan-400 hover:text-white cursor-pointer disabled:opacity-40"
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
                    className="mt-2 max-h-36 sm:max-h-44 overflow-y-auto pr-1 space-y-2 font-sans text-[11px] scrollbar-thin cursor-auto pointer-events-auto select-text"
                  >
                    {messages.map((item) => (
                      <div key={item.id} className="rounded-lg bg-slate-900/80 p-2 border border-white/5 space-y-1">
                        <div className="flex items-start gap-1 font-mono font-bold text-cyan-300 text-[11px]">
                          <span className="text-slate-400 shrink-0">Q:</span>
                          <span className="whitespace-pre-wrap text-cyan-200">{item.question}</span>
                        </div>
                        <div className="flex items-start gap-1 text-slate-200 leading-relaxed text-[11px]">
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
            <div className="mt-3 flex flex-wrap gap-1.5 border-t border-white/10 pt-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleAskRobot(prompt)}
                  disabled={isLoading}
                  className="rounded-md border border-cyan-500/20 bg-cyan-950/40 px-2 py-1 text-[11px] font-medium text-cyan-200 transition hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-white disabled:opacity-40 cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Custom Question Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!customInput.trim() || isLoading) return;
                handleAskRobot(customInput.trim());
                setCustomInput("");
              }}
              className="mt-2 flex items-center gap-1.5"
            >
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder={placeholderText}
                disabled={isLoading}
                className="min-w-0 flex-1 rounded-lg border border-cyan-500/30 bg-slate-900/90 px-2 py-1 text-[11px] font-mono text-white placeholder-slate-400 outline-none focus:border-cyan-400 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!customInput.trim() || isLoading}
                className="rounded-lg bg-cyan-500 px-2.5 py-1 text-[11px] font-mono font-bold text-slate-950 transition hover:bg-cyan-400 disabled:opacity-40 cursor-pointer shrink-0"
              >
                {askButtonText}
              </button>
            </form>
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
