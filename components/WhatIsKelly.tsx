'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { XCircle, AlertTriangle, CheckCircle, BarChart3, FileText, Package, DollarSign, Users, UserCog, TrendingUp, Folder } from 'lucide-react';

export default function WhatIsKelly() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="what-is-kelly" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What is Kelly Work OS?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A complete business operating system that brings all your departments together in one connected platform.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">The Problem</h3>
                <p className="text-gray-600">
                  Most businesses juggle multiple disconnected tools — spreadsheets for inventory, 
                  separate apps for invoicing, manual tracking for payments, and scattered team communication.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">The Impact</h3>
                <p className="text-gray-600">
                  Data gets duplicated, errors multiply, departments work in silos, and valuable time 
                  is wasted manually syncing information across different systems.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">The Solution</h3>
                <p className="text-gray-600">
                  Kelly Work OS brings everything into one connected system where all departments 
                  work together seamlessly. One action updates everything automatically in real-time.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Visual Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4">
                  <span className="text-2xl text-white font-bold">K</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900">Kelly Work OS</h4>
                <p className="text-sm text-gray-600">One Connected System</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { Icon: BarChart3, label: 'Dashboard', color: 'bg-purple-100', iconColor: 'text-purple-600' },
                  { Icon: FileText, label: 'Invoices', color: 'bg-blue-100', iconColor: 'text-blue-600' },
                  { Icon: Package, label: 'Inventory', color: 'bg-green-100', iconColor: 'text-green-600' },
                  { Icon: DollarSign, label: 'Finance', color: 'bg-yellow-100', iconColor: 'text-yellow-600' },
                  { Icon: Users, label: 'Clients', color: 'bg-pink-100', iconColor: 'text-pink-600' },
                  { Icon: UserCog, label: 'Team', color: 'bg-indigo-100', iconColor: 'text-indigo-600' },
                  { Icon: TrendingUp, label: 'Analytics', color: 'bg-orange-100', iconColor: 'text-orange-600' },
                  { Icon: Folder, label: 'Projects', color: 'bg-teal-100', iconColor: 'text-teal-600' },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className={`${item.color} rounded-xl p-4 text-center hover:scale-105 hover:shadow-lg transition-all cursor-pointer group`}
                  >
                    <item.Icon className={`w-8 h-8 mx-auto mb-2 ${item.iconColor} group-hover:scale-110 transition-transform`} /
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="text-sm font-semibold text-gray-800">{item.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-gray-700">All modules sync in real-time</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
