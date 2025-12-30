'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="get-started" ref={ref} className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Start Your Business Journey
            <br />
            <span className="text-blue-200">With Kelly Work OS</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join growing businesses that trust Kelly Work OS to run their operations efficiently.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-blue-600 bg-white rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105">
              Get Started Now
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>

            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-white/20 backdrop-blur-sm border-2 border-white rounded-xl hover:bg-white/30 transition-all duration-300 shadow-xl hover:scale-105">
              Request a Demo
            </button>

            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-white/20 backdrop-blur-sm border-2 border-white rounded-xl hover:bg-white/30 transition-all duration-300 shadow-xl hover:scale-105">
              Talk to Us
            </button>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              {
                Icon: Mail,
                title: 'Email Us',
                content: 'kellyworkos00@gmail.com',
                action: 'mailto:kellyworkos00@gmail.com',
              },
              {
                Icon: MessageCircle,
                title: 'Live Chat',
                content: 'Chat with our team',
                action: '#',
              },
              {
                Icon: Phone,
                title: 'Call Us',
                content: '+254 798 293 831',
                action: 'tel:+254798293831',
              },
            ].map((option, index) => (
              <motion.a
                key={option.title}
                href={option.action}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 group"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <option.Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-1">{option.title}</h3>
                <p className="text-blue-100 text-sm">{option.content}</p>
              </motion.a>
            ))}
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-blue-200"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Setup in under 10 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Expert support included</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
