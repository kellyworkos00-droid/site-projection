'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FileText, RotateCcw, CreditCard, Package, DollarSign, TrendingUp, Users, BarChart3, ArrowRight } from 'lucide-react';

export default function RealTimeConnection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeAction, setActiveAction] = useState<number | null>(null);

  const scenarios = [
    {
      action: 'Create an Invoice',
      Icon: FileText,
      updates: [
        { module: 'Inventory', Icon: Package, effect: 'Stock automatically deducted' },
        { module: 'Finance', Icon: DollarSign, effect: 'Revenue recorded' },
        { module: 'Analytics', Icon: TrendingUp, effect: 'Sales data updated' },
        { module: 'Client', Icon: Users, effect: 'Order history added' },
      ],
    },
    {
      action: 'Process a Return',
      Icon: RotateCcw,
      updates: [
        { module: 'Inventory', Icon: Package, effect: 'Stock restored' },
        { module: 'Finance', Icon: DollarSign, effect: 'Credit note issued' },
        { module: 'Analytics', Icon: TrendingUp, effect: 'Reports adjusted' },
        { module: 'Client', Icon: Users, effect: 'Statement updated' },
      ],
    },
    {
      action: 'Receive Payment',
      Icon: CreditCard,
      updates: [
        { module: 'Accounts', Icon: DollarSign, effect: 'Balance updated' },
        { module: 'Client', Icon: Users, effect: 'Statement cleared' },
        { module: 'Dashboard', Icon: BarChart3, effect: 'Revenue reflected' },
        { module: 'Analytics', Icon: TrendingUp, effect: 'Cash flow tracked' },
      ],
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything is Connected
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            One action updates everything automatically. No duplicate work, no data mismatch, no delays.
          </p>
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 rounded-full px-4 py-2 font-semibold">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Real-Time Synchronization
          </div>
        </motion.div>

        {/* Interactive Scenarios */}
        <div className="space-y-8">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Action */}
                  <div
                    className="flex-shrink-0 cursor-pointer"
                    onMouseEnter={() => setActiveAction(index)}
                    onMouseLeave={() => setActiveAction(null)}
                  >
                    <div className={`relative w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      activeAction === index ? 'scale-110 shadow-2xl ring-4 ring-blue-300' : ''
                    }`}>
                      <scenario.Icon className="w-10 h-10 text-white" />
                      {activeAction === index && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1.5, opacity: 0 }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="absolute inset-0 bg-blue-400 rounded-2xl"
                        />
                      )}
                    </div>
                    <div className="text-center mt-3">
                      <div className="text-sm font-bold text-gray-900">{scenario.action}</div>
                    </div>
                  </div>

                  {/* Arrow with animation */}
                  <div className="hidden md:flex items-center">
                    <motion.div
                      animate={activeAction === index ? { x: [0, 10, 0] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="relative"
                    >
                      <ArrowRight className="w-12 h-12 text-blue-500" />
                      {activeAction === index && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="absolute inset-0"
                        >
                          <ArrowRight className="w-12 h-12 text-blue-400" />
                        </motion.div>
                      )}
                    </motion.div>
                  </div>

                  {/* Updates Grid */}
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {scenario.updates.map((update, updateIndex) => (
                      <motion.div
                        key={updateIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={
                          activeAction === index
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0.7, scale: 0.95 }
                        }
                        transition={{ duration: 0.3, delay: updateIndex * 0.1 }}
                        className={`relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 border-2 transition-all ${
                          activeAction === index ? 'border-blue-400 shadow-lg' : 'border-gray-200'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                            activeAction === index ? 'bg-blue-100' : 'bg-white'
                          }`}>
                            <update.Icon className={`w-5 h-5 ${
                              activeAction === index ? 'text-blue-600' : 'text-gray-600'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-bold text-gray-900 mb-1">
                              {update.module}
                            </div>
                            <div className="text-xs text-gray-600">{update.effect}</div>
                          </div>
                          {activeAction === index && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 bg-green-500 rounded-full absolute top-2 right-2"
                            >
                              <motion.div
                                animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 bg-green-400 rounded-full"
                              />
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              One System, Zero Duplication
            </h3>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Every module in Kelly Work OS is interconnected. When you update one thing, 
              everything else adjusts automatically — saving you time and eliminating errors.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
