'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Zap, Layout, Layers, DollarSign, ArrowRight } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#what-is-kelly', label: 'What is Kelly OS', icon: Layout, desc: 'Complete business system' },
    { href: '#kelly-ai', label: 'Kelly AI', icon: Sparkles, desc: 'Intelligent assistant', featured: true },
    { href: '#how-it-works', label: 'How It Works', icon: Zap, desc: 'Simple setup & onboarding' },
    { href: '#modules', label: 'Features', icon: Layers, desc: 'Explore all modules' },
    { href: '#pricing', label: 'Pricing', icon: DollarSign, desc: 'Flexible plans' },
    { href: '#get-started', label: 'Get Started', icon: ArrowRight, cta: true, desc: 'Start your journey' },
  ];

  return (
    <nav className="fixed top-3 md:top-6 left-1/2 -translate-x-1/2 z-50 w-full px-3 md:px-0">
      {/* Floating Glassmorphism Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-blue-500/30 to-blue-600/20 backdrop-blur-2xl border border-blue-400/40 rounded-full shadow-2xl w-full md:w-auto max-w-full md:max-w-none"
      >
        <div className="flex items-center justify-between px-3 md:px-4 py-2 md:py-3 w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 mr-3 md:mr-6 flex-shrink-0">
            <div className="w-8 md:w-10 h-8 md:h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
              <span className="text-white font-bold text-lg md:text-xl">K</span>
            </div>
            <span className="text-sm md:text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden sm:inline whitespace-nowrap">
              Kelly Work OS
            </span>
          </Link>

          {/* Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1 md:gap-2 text-white font-semibold px-3 md:px-4 py-2 md:py-2 rounded-full hover:bg-blue-400/20 transition-all ml-auto flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm md:text-base">Menu</span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </div>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.9 }}
              transition={{ duration: 0.25, type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 md:mt-4 bg-gradient-to-b from-blue-500/30 to-blue-600/20 backdrop-blur-3xl border border-blue-400/50 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden w-[calc(100vw-24px)] md:w-80 max-h-[70vh] md:max-h-none overflow-y-auto mx-auto"
            >
              <div className="py-3 md:py-4 px-2 space-y-1 md:space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`
                        group flex flex-col items-center justify-center gap-1 md:gap-1.5 px-3 md:px-6 py-2.5 md:py-3.5 rounded-xl md:rounded-2xl transition-all duration-300
                        ${link.cta
                          ? 'bg-gradient-to-br from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-2xl hover:scale-105'
                          : link.featured
                          ? 'bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/40'
                          : 'hover:bg-blue-500/20'
                        }
                      `}
                    >
                      <div className={`flex items-center gap-2 ${link.cta ? 'text-white' : 'text-blue-50'}`}>
                        <link.icon className="w-4 md:w-5 h-4 md:h-5" />
                        <div className={`font-bold text-sm md:text-base ${link.cta ? 'text-white' : 'text-blue-50'}`}>
                          {link.label}
                        </div>
                      </div>
                      <div className={`text-xs font-medium ${link.cta ? 'text-blue-50' : 'text-blue-100'}`}>
                        {link.desc}
                      </div>
                      {link.featured && !link.cta && (
                        <span className="bg-gradient-to-r from-blue-300 to-blue-400 text-blue-900 text-xs font-bold px-2 py-0.5 rounded-full">
                          New
                        </span>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 -z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
