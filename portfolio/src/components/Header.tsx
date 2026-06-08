import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  activeSection?: string;
  isDark?: boolean;
  onThemeChange?: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection = '', isDark = false, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? `${isDark ? 'bg-slate-900/95' : 'bg-white/95'} backdrop-blur-md border-b ${
              isDark ? 'border-slate-700' : 'border-slate-200'
            }`
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              SK
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.span
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.label
                      ? `bg-blue-500/20 ${isDark ? 'text-blue-400' : 'text-blue-600'}`
                      : `${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              onClick={onThemeChange}
              className={`p-2 rounded-full ${
                isDark
                  ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <motion.a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <X size={24} className={isDark ? 'text-white' : 'text-black'} />
            ) : (
              <Menu size={24} className={isDark ? 'text-white' : 'text-black'} />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-white'}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.span
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === item.label
                      ? `bg-blue-500/20 ${isDark ? 'text-blue-400' : 'text-blue-600'}`
                      : `${isDark ? 'text-gray-300' : 'text-gray-700'}`
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
            <motion.a
              href="#contact"
              className="block px-3 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-md font-medium"
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
