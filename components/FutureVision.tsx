'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, Brain, MessageCircle, ShoppingCart, Receipt, Globe } from 'lucide-react';

export default function FutureVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const roadmap = [
    {
      Icon: Smartphone,
      title: 'Mobile App',
      description: 'Native iOS and Android apps for managing your business on the go.',
      status: 'Coming Soon',
      color: 'from-blue-500 to-blue-600',
    },
    {
      Icon: Brain,
      title: 'AI Insights',
      description: 'Smart analytics and predictive insights to help you make better decisions.',
      status: 'In Development',
      color: 'from-purple-500 to-purple-600',
    },
    {
      Icon: MessageCircle,
      title: 'WhatsApp Integration',
      description: 'Send invoices, updates, and communicate with customers via WhatsApp.',
      status: 'Planned',
      color: 'from-green-500 to-green-600',
    },
    {
      Icon: ShoppingCart,
      title: 'Supplier Automation',
      description: 'Automated ordering, inventory replenishment, and supplier management.',
      status: 'Planned',
      color: 'from-orange-500 to-orange-600',
    },
    {
      Icon: Receipt,
      title: 'Tax & Compliance',
      description: 'Built-in tax calculations, filing assistance, and compliance tracking.',
      status: 'Planned',
      color: 'from-red-500 to-red-600',
    },
    {
      Icon: Globe,
      title: 'E-commerce Integration',
      description: 'Sync with online stores and marketplaces for unified inventory.',
      status: 'Planned',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Future of Kelly Work OS
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            We&apos;re constantly innovating and adding new features to help your business thrive.
          </p>
        </motion.div>

        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {roadmap.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">
                  {item.status}
                </span>
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.Icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-blue-200 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Building the Ultimate Business OS
            </h3>
            <p className="text-lg text-blue-100 mb-6">
              Our vision is to create a complete ecosystem where every aspect of your business 
              is connected, automated, and optimized — freeing you to focus on growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                <span className="text-2xl">🚀</span>
                <span className="font-semibold">Continuous Innovation</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                <span className="text-2xl">👂</span>
                <span className="font-semibold">Customer Feedback</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                <span className="text-2xl">🎯</span>
                <span className="font-semibold">Business-First Design</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
