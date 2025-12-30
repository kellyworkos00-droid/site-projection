'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bot, Sparkles, Brain, Zap, TrendingUp, FileText, MessageSquare, BarChart3 } from 'lucide-react';

export default function KellyAI() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const capabilities = [
    {
      Icon: Brain,
      title: 'Smart Business Insights',
      description: 'Kelly AI analyzes your data and provides actionable insights to grow your business.',
      color: 'from-violet-500 to-purple-600',
    },
    {
      Icon: MessageSquare,
      title: 'Natural Conversations',
      description: 'Ask questions in plain language and get instant, accurate answers about your business.',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      Icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Forecast sales, inventory needs, and cash flow with AI-powered predictions.',
      color: 'from-orange-500 to-red-600',
    },
    {
      Icon: Zap,
      title: 'Task Automation',
      description: 'Automate repetitive tasks like report generation, invoicing, and follow-ups.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      Icon: FileText,
      title: 'Instant Reports',
      description: 'Generate comprehensive reports in seconds with natural language commands.',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      Icon: TrendingUp,
      title: 'Growth Recommendations',
      description: 'Get personalized suggestions to optimize operations and increase revenue.',
      color: 'from-pink-500 to-rose-600',
    },
  ];

  const examples = [
    { question: "What were my top 5 products this month?", response: "Analyzing sales data..." },
    { question: "Show me customers with outstanding payments", response: "Fetching accounts..." },
    { question: "Predict next month's inventory needs", response: "Running forecast..." },
    { question: "Generate a profit & loss report", response: "Creating report..." },
  ];

  return (
    <section id="kelly-ai" ref={ref} className="py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Powered by Advanced AI
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Kelly AI
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Your Intelligent Business Assistant
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kelly AI is a highly intelligent assistant that learns from your business, 
            understands your needs, and helps you make smarter decisions faster.
          </p>
        </motion.div>

        {/* AI Demo Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-8 mb-16 max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Bot className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Kelly AI Chat</h3>
              <p className="text-sm text-gray-500">Ask me anything about your business</p>
            </div>
          </div>

          {/* Example Questions */}
          <div className="space-y-3">
            {examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex flex-col gap-2"
              >
                <div className="bg-gray-100 rounded-2xl rounded-br-sm px-5 py-3 self-end max-w-md">
                  <p className="text-gray-800 font-medium">{example.question}</p>
                </div>
                <div className="bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-2xl rounded-bl-sm px-5 py-3 self-start max-w-md">
                  <p className="flex items-center gap-2">
                    <span className="animate-pulse">●</span>
                    {example.response}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${capability.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <capability.Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{capability.title}</h3>
              <p className="text-gray-600">{capability.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Kelly AI gets smarter as you use it, learning your business patterns and preferences.
          </p>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
            <Bot className="w-6 h-6" />
            Try Kelly AI Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
