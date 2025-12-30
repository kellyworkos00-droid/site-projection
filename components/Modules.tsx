'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BarChart3, TrendingUp, FileText, Package, DollarSign, Users, UserCog, FolderOpen, ClipboardList, Calendar, Settings, Bot } from 'lucide-react';

export default function Modules() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const modules = [
    {
      Icon: Bot,
      title: 'Kelly AI Assistant',
      description: 'Intelligent AI that understands your business and helps you make better decisions.',
      details: ['Smart business insights', 'Automated report generation', 'Predictive analytics', 'Natural language queries', 'Task automation'],
      users: 'All Users',
      color: 'from-violet-500 to-purple-600',
      featured: true,
    },
    {
      Icon: BarChart3,
      title: 'Dashboard',
      description: 'Complete overview of company performance at a glance.',
      details: ['Sales metrics', 'Inventory status', 'Finance summaries', 'Team activity'],
      users: 'Management & All Staff',
      color: 'from-purple-500 to-purple-600',
    },
    {
      Icon: TrendingUp,
      title: 'Analytics',
      description: 'Deep insights into your business performance.',
      details: ['Daily/weekly/monthly trends', 'Top customers & products', 'Revenue analysis', 'Performance forecasts'],
      users: 'Management & Analysts',
      color: 'from-orange-500 to-orange-600',
    },
    {
      Icon: FileText,
      title: 'Invoices',
      description: 'Create and manage all your sales orders seamlessly.',
      details: ['Quick order creation', 'Auto inventory deduction', 'Payment tracking', 'Customer history'],
      users: 'Sales Team',
      color: 'from-blue-500 to-blue-600',
    },
    {
      Icon: Package,
      title: 'Inventory',
      description: 'Complete product and stock management system.',
      details: ['Product catalog', 'Stock levels', 'Returns & credits', 'Restock alerts'],
      users: 'Warehouse & Sales',
      color: 'from-green-500 to-green-600',
    },
    {
      Icon: DollarSign,
      title: 'Accounts & Payments',
      description: 'Track all financial transactions in one place.',
      details: ['Revenue vs expenses', 'Bank integration', 'Payment reconciliation', 'Refund management'],
      users: 'Finance Team',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      Icon: Users,
      title: 'Clients',
      description: 'Manage your customer relationships effectively.',
      details: ['Lead conversion', 'Customer profiles', 'Order history', 'Payment statements'],
      users: 'Sales & Support',
      color: 'from-pink-500 to-pink-600',
    },
    {
      Icon: UserCog,
      title: 'Team & HR',
      description: 'Manage your workforce and performance.',
      details: ['Staff directory', 'Payroll records', 'Performance tracking', 'Role management'],
      users: 'HR & Management',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      Icon: FolderOpen,
      title: 'Files',
      description: 'Centralized document management system.',
      details: ['Upload documents', 'Financial statements', 'Reports archive', 'Shared access'],
      users: 'All Departments',
      color: 'from-teal-500 to-teal-600',
    },
    {
      Icon: ClipboardList,
      title: 'Projects & Tasks',
      description: 'Organize work and track team productivity.',
      details: ['Task assignment', 'Progress tracking', 'Deadline management', 'Priority levels'],
      users: 'Project Managers',
      color: 'from-red-500 to-red-600',
    },
    {
      Icon: Calendar,
      title: 'Calendar',
      description: 'Keep everyone aligned with company events.',
      details: ['Event scheduling', 'Invoice reminders', 'Team notifications', 'Deadline tracking'],
      users: 'All Staff',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      Icon: Settings,
      title: 'Settings & Admin',
      description: 'Complete control over system configuration.',
      details: ['User permissions', 'Branch management', 'Subscription billing', 'System preferences'],
      users: 'Administrators',
      color: 'from-gray-600 to-gray-700',
    },
  ];

  return (
    <section id="modules" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Modules, One System
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every tool your business needs, working together seamlessly in real-time.
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${module.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10`} />
              <div className="absolute inset-[2px] bg-white rounded-2xl -z-10" />

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <module.Icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h3>

              {/* Description */}
              <p className="text-gray-600 mb-4">{module.description}</p>

              {/* Details */}
              <ul className="space-y-2 mb-4">
                {module.details.map((detail, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-500">
                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Users */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center text-sm">
                  <svg className="w-4 h-4 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  <span className="text-gray-600 font-medium">{module.users}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connection Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              {[BarChart3, FileText, Package, DollarSign].map((Icon, i) => (
                <div key={i} className="w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-blue-200">
                  <Icon className="w-4 h-4 text-blue-600" />
                </div>
              ))}
            </div>
            <span className="text-gray-700 font-semibold">All modules connected & synchronized</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
