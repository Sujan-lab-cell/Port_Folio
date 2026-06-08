import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = portfolioData.tagline;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isMounted, fullText]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {portfolioData.name}
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-slate-300 mb-6">
            {portfolioData.title} <span className="text-cyan-400">•</span> {portfolioData.subtitle}
          </h2>

          <p className="text-base md:text-lg text-slate-400 mb-8 h-12 md:h-16">
            {displayText}
            {displayText.length < fullText.length && <span className="animate-pulse">▌</span>}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12"
        >
          {[
            { label: 'Projects Built', value: portfolioData.stats.projectsBuilt },
            { label: 'Tech Skills', value: portfolioData.stats.technologiesLearned },
            { label: 'Certifications', value: portfolioData.stats.certifications },
            { label: 'Repositories', value: portfolioData.stats.githubRepositories },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-4 md:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">{stat.value}+</div>
              <div className="text-sm md:text-base text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="/Resume_SujanKS.pdf"
            download
            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Download Resume
          </motion.a>

          <motion.a
            href="#projects"
            className="flex items-center gap-2 px-8 py-3 border border-cyan-500/50 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          <motion.a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-400 transition-colors"
            whileHover={{ scale: 1.2, rotate: 12 }}
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-400 transition-colors"
            whileHover={{ scale: 1.2, rotate: 12 }}
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href={`mailto:${portfolioData.email}`}
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-400 transition-colors"
            whileHover={{ scale: 1.2, rotate: 12 }}
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-slate-400">Scroll to explore</span>
            <svg
              className="w-6 h-6 text-cyan-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
