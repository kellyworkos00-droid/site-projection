'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    'Complete business operating system',
    'All modules included',
    'Unlimited users per company',
    'Real-time synchronization',
    'Data backup & security',
    'Email support',
    'Regular updates',
    'Mobile-friendly interface',
  ];

  return (
    <section id="pricing" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            One price for your entire company. No per-user fees, no hidden costs, no surprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Main Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -ml-16 -mb-16" />

            <div className="relative">
              <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                Most Popular
              </div>

              <h3 className="text-3xl font-bold mb-2">Company Plan</h3>
              <p className="text-blue-100 mb-6">Perfect for growing businesses</p>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">Contact Us</span>
                </div>
                <p className="text-blue-100 mt-2">for custom pricing</p>
              </div>

              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-green-300 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#get-started"
                className="block w-full bg-white text-blue-600 text-center py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Get Started
              </a>
            </div>
          </motion.div>

          {/* Branch Add-on */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-lg"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Additional Branches</h3>
            <p className="text-gray-600 mb-6">Scale across multiple locations</p>

            <div className="mb-8">
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-gray-900">+</span>
              </div>
              <p className="text-gray-600 mt-2">Add-on pricing per branch</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">Independent branch operations</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">Dedicated branch management</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">Consolidated reporting</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">All features included</span>
              </li>
            </ul>

            <a
              href="#get-started"
              className="block w-full bg-gray-900 text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors"
            >
              Contact Sales
            </a>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Our Pricing is Different
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="text-3xl mb-2">💰</div>
                <h4 className="font-bold text-gray-900 mb-1">No Per-User Fees</h4>
                <p className="text-sm text-gray-600">Add unlimited team members without extra charges</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📦</div>
                <h4 className="font-bold text-gray-900 mb-1">All Features Included</h4>
                <p className="text-sm text-gray-600">No tiered plans or feature restrictions</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🔒</div>
                <h4 className="font-bold text-gray-900 mb-1">Transparent Costs</h4>
                <p className="text-sm text-gray-600">One price for your company, clear branch add-ons</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
