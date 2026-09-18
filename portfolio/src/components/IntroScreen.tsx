"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  ArrowRight,
  Sparkles,
  Terminal,
  Zap,
  ShieldCheck,
  Cpu,
  Layers,
  Code2,
  Globe,
  Radio,
} from "lucide-react";
import { portfolioData } from "@/src/data/portfolio";

interface IntroScreenProps {
  onEnter: () => void;
}

const ROLES = [
  "AI / ML ENGINEER",
  "COMPUTER VISION SPECIALIST",
  "MULTILINGUAL NLP DEVELOPER",
  "DEEP LEARNING ARCHITECT",
];

const HIGHLIGHT_BADGES = [
  { label: "YOLOv8 Vision", icon: Cpu },
  { label: "T5 Transformers", icon: Layers },
  { label: "WGAN-GP Face Synthesis", icon: BrainCircuit },
  { label: "PyTorch & MLOps", icon: Code2 },
];

export function IntroScreen({ onEnter }: IntroScreenProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Typewriter effect for agency-style rotating roles
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 30 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  // Keyboard shortcut (Press ENTER key to launch)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        onEnter();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onEnter]);

  // 3D Organic Particle & Neural Wave Mesh Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Mouse tracking for 3D rotation & force-field
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 3D Grid parameters
    const cols = Math.min(Math.floor(width / 35), 45);
    const rows = Math.min(Math.floor(height / 35), 30);
    const spacing = 45;
    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Lerp mouse
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const rotX = (mouse.y - height / 2) * 0.0006;
      const rotY = (mouse.x - width / 2) * 0.0006;

      time += 0.02;

      // Render faint 3D particle wave grid
      const gridPoints: Array<Array<{ x: number; y: number; z: number; px: number; py: number }>> = [];

      for (let r = 0; r < rows; r++) {
        gridPoints[r] = [];
        for (let c = 0; c < cols; c++) {
          const x0 = (c - cols / 2) * spacing;
          const z0 = (r - rows / 2) * spacing;

          // Wave elevation math
          const distFromCenter = Math.sqrt(x0 * x0 + z0 * z0);
          const wave1 = Math.sin(distFromCenter * 0.02 - time * 1.5) * 25;
          const wave2 = Math.cos((x0 + z0) * 0.015 + time) * 15;
          const y0 = wave1 + wave2;

          // 3D Rotation Y
          const x1 = x0 * Math.cos(rotY) + z0 * Math.sin(rotY);
          const z1 = -x0 * Math.sin(rotY) + z0 * Math.cos(rotY);

          // 3D Rotation X
          const y2 = y0 * Math.cos(rotX) - z1 * Math.sin(rotX);
          const z2 = y0 * Math.sin(rotX) + z1 * Math.cos(rotX);

          // Perspective projection
          const fov = 450;
          const scale = fov / (fov + z2 + 300);
          const px = x1 * scale + width / 2;
          const py = y2 * scale + height / 2;

          gridPoints[r][c] = { x: x1, y: y2, z: z2, px, py };
        }
      }

      // Draw wireframe connecting lines
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const pt = gridPoints[r][c];

          // Right neighbor line
          if (c < cols - 1) {
            const rightPt = gridPoints[r][c + 1];
            const alpha = Math.max(0, 0.12 - pt.z * 0.0003);
            ctx.beginPath();
            ctx.moveTo(pt.px, pt.py);
            ctx.lineTo(rightPt.px, rightPt.py);
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }

          // Bottom neighbor line
          if (r < rows - 1) {
            const bottomPt = gridPoints[r + 1][c];
            const alpha = Math.max(0, 0.12 - pt.z * 0.0003);
            ctx.beginPath();
            ctx.moveTo(pt.px, pt.py);
            ctx.lineTo(bottomPt.px, bottomPt.py);
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }

          // Node points
          if ((r + c) % 2 === 0) {
            const nodeRadius = Math.max(1, 2.2 - pt.z * 0.002);
            ctx.beginPath();
            ctx.arc(pt.px, pt.py, nodeRadius, 0, Math.PI * 2);
            ctx.fillStyle = (r + c) % 4 === 0 ? "#22d3ee" : "#818cf8";
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.08,
        filter: "blur(16px)",
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
      }}
      className="fixed inset-0 z-[100] flex flex-col justify-between overflow-hidden bg-[#02040a] text-white selection:bg-cyan-500/30 selection:text-cyan-200"
    >
      {/* 3D Organic Wave Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Cinematic Dark Ambient Gradients */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-indigo-600/15 blur-[160px] pointer-events-none" />

      {/* Minimal Agency Top Bar */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 sm:px-10 border-b border-white/10 bg-slate-950/40 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs tracking-[0.25em] text-cyan-400 font-bold uppercase">
            SUJAN.AI // 01
          </span>
          <span className="hidden sm:inline-block h-3 w-px bg-white/20" />
          <span className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
            <Radio size={12} className="text-emerald-400 animate-pulse" />
            LIVE EXPERIMENTAL LAB
          </span>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs text-slate-400">
          <div className="hidden md:flex items-center gap-2">
            <Globe size={13} className="text-cyan-400" />
            <span>MANGALORE 12.91° N</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 bg-white/5">
            <Zap size={13} className="text-amber-300" />
            <span>LATENCY: &lt; 4ms</span>
          </div>
        </div>
      </header>

      {/* Hero Visual Body */}
      <main className="relative z-10 my-auto flex flex-col items-center justify-center px-4 py-6 text-center">
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-500/40 bg-cyan-950/40 px-5 py-2 text-xs font-mono tracking-widest text-cyan-300 backdrop-blur-xl shadow-[0_0_25px_rgba(34,211,238,0.2)]"
        >
          <BrainCircuit size={16} className="text-cyan-400 animate-pulse" />
          <span className="uppercase">AI / ML RESEARCH & PRODUCT PORTFOLIO</span>
        </motion.div>

        {/* Oversized Agency Typography */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-7xl text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-cyan-300 drop-shadow-[0_0_45px_rgba(34,211,238,0.3)]"
        >
          {portfolioData.name}
        </motion.h1>

        {/* Dynamic Typewriter Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex h-10 items-center justify-center font-mono text-lg sm:text-2xl md:text-3xl font-bold tracking-wider text-cyan-400"
        >
          <Terminal size={22} className="mr-3 text-cyan-400 shrink-0" />
          <span>{displayText}</span>
          <span className="ml-1 inline-block h-7 w-1 bg-cyan-400 animate-pulse" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-lg font-normal"
        >
          {portfolioData.tagline}
        </motion.p>

        {/* Badges / Tech Telemetry */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-3 max-w-2xl"
        >
          {HIGHLIGHT_BADGES.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.label}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-slate-300 backdrop-blur transition hover:border-cyan-400 hover:text-cyan-200 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
              >
                <Icon size={14} className="text-cyan-400" />
                <span>{badge.label}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Agency Magnetic "ENTER PORTFOLIO" Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-12 flex flex-col items-center gap-3"
        >
          <button
            onClick={onEnter}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative inline-flex items-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-300 to-indigo-500 p-[2px] font-mono text-base font-bold tracking-widest uppercase text-white shadow-[0_0_50px_rgba(34,211,238,0.45)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_80px_rgba(34,211,238,0.75)] active:scale-95 cursor-pointer"
            aria-label="Enter Portfolio"
          >
            <span className="relative flex items-center gap-4 rounded-[14px] bg-slate-950 px-10 py-5 transition-all duration-300 group-hover:bg-opacity-80">
              <Sparkles size={20} className="text-cyan-400 group-hover:rotate-45 transition-transform duration-300" />
              <span className="text-lg font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-cyan-100">
                ENTER PORTFOLIO
              </span>
              <ArrowRight
                size={22}
                className={`text-cyan-300 transition-transform duration-300 ${
                  isHovered ? "translate-x-2 scale-125 text-white" : ""
                }`}
              />
            </span>
          </button>

          <p className="text-xs font-mono text-slate-400 tracking-wider">
            Press <kbd className="rounded border border-white/20 bg-white/10 px-2 py-0.5 text-cyan-300 font-bold">ENTER ↵</kbd> to launch
          </p>
        </motion.div>
      </main>

      {/* Minimal Agency Footer */}
      <footer className="relative z-10 flex items-center justify-between px-6 py-4 sm:px-10 border-t border-white/10 bg-slate-950/40 backdrop-blur-md text-xs font-mono text-slate-400">
        <div className="flex items-center gap-6">
          <span>SUJAN K S © {new Date().getFullYear()}</span>
          <span className="hidden sm:inline-block">•</span>
          <span className="hidden sm:inline-block">AI/ML ENGINEER PORTFOLIO</span>
        </div>

        <button
          onClick={onEnter}
          className="text-cyan-400 hover:text-cyan-300 hover:underline transition cursor-pointer font-bold"
        >
          SKIP INTRO &rarr;
        </button>
      </footer>
    </motion.div>
  );
}
