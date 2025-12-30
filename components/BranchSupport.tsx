'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Lock, Eye, Target, BarChart3, Zap } from 'lucide-react';

export default function BranchSupport() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Multi-Branch Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scale your business across multiple locations while maintaining complete control and visibility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual Representation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              {/* Owner View */}
              <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    👑
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Owner Dashboard</div>
                    <div className="font-bold text-gray-900">Complete Overview</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Total Revenue</span>
                    <span className="font-bold text-green-600">$125,450</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">All Branches</span>
                    <span className="font-bold text-blue-600">3 Active</span>
                  </div>
                </div>
              </div>

              {/* Branch Views */}
              <div className="grid grid-cols-3 gap-4">
                {['Branch A', 'Branch B', 'Branch C'].map((branch, index) => (
                  <motion.div
                    key={branch}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="bg-white rounded-lg p-4 shadow-md"
                  >
                    <div className="text-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mx-auto mb-2">
                        {String.fromCharCode(65 + index)}
                      </div>
                      <div className="text-xs font-semibold text-gray-900 mb-1">{branch}</div>
                      <div className="text-xs text-gray-500">Independent</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-full px-4 py-2 text-sm font-semibold">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  Owner sees all, branches see their own
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {[
              {
                Icon: Building2,
                title: 'Multiple Branches',
                description: 'Add unlimited branches to your company account, each with its own operations and staff.',
              },
              {
                Icon: Lock,
                title: 'Independent Operations',
                description: 'Each branch runs independently with its own inventory, sales, and team management.',
              },
              {
                Icon: Eye,
                title: 'Unified Visibility',
                description: 'Owners see combined performance across all branches in one dashboard.',
              },
              {
                Icon: Target,
                title: 'Branch-Level Control',
                description: 'Branch managers see only their data and can manage their team and operations.',
              },
              {
                Icon: BarChart3,
                title: 'Consolidated Reports',
                description: 'Generate reports for individual branches or across the entire company.',
              },
              {
                Icon: Zap,
                title: 'Easy Scaling',
                description: 'Add new branches instantly as your business grows without complex setup.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                  <feature.Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
