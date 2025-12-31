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
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      {/* Floating Glassmorphism Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full shadow-2xl"
      >
        <div className="flex items-center px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 mr-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden sm:inline">
              Kelly Work OS
            </span>
          </Link>

          {/* Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-white font-semibold px-4 py-2 rounded-full hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Menu
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
              className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white/15 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl overflow-hidden w-72"
            >
              <div className="py-4 px-2 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`
                        group flex items-start gap-3 px-4 py-3 rounded-2xl transition-all duration-300
                        ${link.cta
                          ? 'bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-2xl hover:scale-105'
                          : link.featured
                          ? 'bg-white/10 hover:bg-white/20'
                          : 'hover:bg-white/10'
                        }
                      `}
                    >
                      <div className={`mt-1 flex-shrink-0 ${link.cta ? 'text-white' : 'text-white/80 group-hover:text-white'} transition-colors`}>
                        <link.icon className="w-5 h-5" />
                      </div>
                      <div className={`flex-1 ${link.cta ? 'text-white' : 'text-white/90'}`}>
                        <div className={`font-bold text-sm leading-tight ${link.cta ? 'text-white' : 'text-white group-hover:text-white'}`}>
                          {link.label}
                        </div>
                        <div className={`text-xs leading-tight mt-1 ${link.cta ? 'text-white/90' : 'text-white/60 group-hover:text-white/80'}`}>
                          {link.desc}
                        </div>
                      </div>
                      {link.featured && !link.cta && (
                        <span className="flex-shrink-0 ml-2 bg-gradient-to-r from-violet-400 to-purple-400 text-purple-900 text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                          New
                        </span>
                      )}
                      {link.cta && (
                        <ArrowRight className="w-4 h-4 text-white flex-shrink-0 group-hover:translate-x-1 transition-transform" />
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
