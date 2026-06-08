import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Github, Linkedin, Mail, Twitter, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: portfolioData.social.github, label: 'GitHub' },
    { icon: Linkedin, href: portfolioData.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${portfolioData.email}`, label: 'Email' },
    { icon: Twitter, href: portfolioData.social.twitter, label: 'Twitter' },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
              SK
            </h3>
            <p className="text-slate-400 text-sm">
              AI/ML Engineer dedicated to building intelligent systems and creating impact through technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">&nbsp;</h4>
            <ul className="space-y-2">
              {footerLinks.slice(3).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Follow</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 text-slate-400 hover:bg-cyan-500 hover:text-white transition-all"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    title={link.label}
                  >
                    <IconComponent size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between"
        >
          <p className="text-slate-400 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Sujan K S. All rights reserved.
          </p>

          <p className="text-slate-400 text-sm mt-4 sm:mt-0">
            Built with <span className="text-cyan-400">Next.js</span> &{' '}
            <span className="text-cyan-400">Tailwind CSS</span>
          </p>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 p-2 rounded-lg bg-white/5 text-slate-400 hover:bg-cyan-500 hover:text-white transition-all"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            title="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
