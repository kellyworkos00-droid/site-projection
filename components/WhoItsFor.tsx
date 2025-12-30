'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Store, Package, Factory, Wrench, Truck, Building } from 'lucide-react';

export default function WhoItsFor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const industries = [
    {
      Icon: Store,
      title: 'Retail',
      description: 'Perfect for retail stores managing inventory, sales, and customer relationships.',
      features: ['POS integration', 'Stock management', 'Customer loyalty', 'Multi-location'],
    },
    {
      Icon: Package,
      title: 'Wholesale',
      description: 'Streamline bulk orders, supplier relations, and distribution channels.',
      features: ['Bulk ordering', 'Supplier management', 'Price tiers', 'Distribution tracking'],
    },
    {
      Icon: Factory,
      title: 'Manufacturing',
      description: 'Manage production, inventory, and supply chain from raw materials to finished goods.',
      features: ['Production tracking', 'Material management', 'Quality control', 'Order fulfillment'],
    },
    {
      Icon: Wrench,
      title: 'Hardware',
      description: 'Control complex inventory of parts, tools, and equipment with ease.',
      features: ['Part cataloging', 'Tool tracking', 'Supplier orders', 'Service records'],
    },
    {
      Icon: Truck,
      title: 'Distributors',
      description: 'Coordinate logistics, warehousing, and delivery operations efficiently.',
      features: ['Route planning', 'Warehouse management', 'Delivery tracking', 'Fleet management'],
    },
    {
      Icon: Building,
      title: 'SMEs',
      description: 'All-in-one solution for small and medium enterprises looking to scale.',
      features: ['Team collaboration', 'Financial tracking', 'Client management', 'Growth tools'],
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for Growing Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're in retail, wholesale, manufacturing, or distribution — 
            Kelly Work OS adapts to your business needs.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500"
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <industry.Icon className="w-10 h-10 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{industry.title}</h3>

              {/* Description */}
              <p className="text-gray-600 mb-6">{industry.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {industry.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl inline-block">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Don't see your industry?</strong> Kelly Work OS is flexible and customizable.
            </p>
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Talk to Us About Your Needs
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
