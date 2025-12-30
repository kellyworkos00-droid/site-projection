'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileCheck, Settings, Mail, UserCheck, Users as UsersIcon, Zap } from 'lucide-react';

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: 1,
      title: 'Company Signs Up',
      description: 'Quick and easy registration to get your business started on Kelly Work OS.',
      Icon: FileCheck,
    },
    {
      number: 2,
      title: 'Setup Company Details',
      description: 'Owner configures business information, branches, and initial settings.',
      Icon: Settings,
    },
    {
      number: 3,
      title: 'Invite Employees',
      description: 'Add team members with a simple email invitation to join the platform.',
      Icon: Mail,
    },
    {
      number: 4,
      title: 'Assign Roles',
      description: 'Set permissions and access levels for different team members and departments.',
      Icon: UserCheck,
    },
    {
      number: 5,
      title: 'Work Together',
      description: 'Everyone works in one shared system with their specific tools and views.',
      Icon: UsersIcon,
    },
    {
      number: 6,
      title: 'Real-Time Updates',
      description: 'All actions sync instantly across the entire platform — no delays, no duplicates.',
      Icon: Zap,
    },
  ];

  return (
    <section id="how-it-works" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Kelly Work OS Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your entire team up and running in minutes with our simple onboarding process.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-600" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <step.Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-blue-600 mb-1">
                          Step {step.number}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white border-4 border-blue-600 rounded-full items-center justify-center shadow-lg z-10">
                  <span className="text-xl font-bold text-blue-600">{step.number}</span>
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full px-6 py-3 shadow-lg">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-semibold">Ready to go in under 10 minutes</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
