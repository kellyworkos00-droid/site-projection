'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles, TrendingUp, Package, DollarSign } from 'lucide-react';

export default function KellyAIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([
    { 
      type: 'ai', 
      text: "Hi 👋 I'm Kelly AI. I help businesses understand their operations, sales, and finances — all in one system."
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickActions = [
    { label: "How does Kelly OS work?", icon: TrendingUp },
    { label: "What can Kelly AI do?", icon: Sparkles },
    { label: "Is Kelly right for my business?", icon: Package },
    { label: "See example insights", icon: DollarSign }
  ];

  const demoResponses: { [key: string]: any } = {
    "how does kelly os work": {
      text: "Kelly Work OS is an all-in-one business operating system that connects invoices, inventory, finance, teams, and analytics. Kelly AI reads data from all these modules to give you clear insights and recommendations.",
      insight: "Everything syncs in real-time — when you create an invoice, inventory updates automatically, and Kelly AI tracks the impact on your business."
    },
    "what can kelly ai do": {
      text: "Kelly AI is your business co-pilot. I can:",
      bullets: [
        "Answer questions like 'Why are sales low this month?'",
        "Suggest when to restock products",
        "Flag unusual expenses or risks",
        "Generate daily, weekly, and monthly reports",
        "Compare branch performance",
        "Predict inventory needs"
      ],
      demo: "Example based on typical retail business"
    },
    "is kelly right for my business": {
      text: "Based on your business size, Kelly OS can reduce manual work by over 40%. It's perfect for:",
      bullets: [
        "Growing retail businesses",
        "Wholesale operations",
        "Manufacturing companies",
        "Multi-branch businesses",
        "Service providers"
      ],
      cta: true
    },
    "see example insights": {
      text: "Here's an example of Kelly AI in action:",
      insight: "Your cement sales dropped 18% this week. Two competitors lowered prices. Consider adjusting price or bundling.",
      metrics: [
        { label: "Sales Trend", value: "-18%", color: "text-red-600" },
        { label: "Top Product", value: "Cement 50kg", color: "text-blue-600" },
        { label: "Stock Level", value: "82%", color: "text-green-600" }
      ],
      demo: "Example insight - connect Kelly OS to see your real data"
    },
    "default": {
      text: "I understand you're asking about business operations. In demo mode, I can show you examples of how Kelly AI helps businesses.",
      demo: "Unlock full Kelly AI insights when you create your company workspace"
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      
      const lowercaseInput = userMessage.toLowerCase();
      let response = demoResponses.default;
      
      for (const key in demoResponses) {
        if (lowercaseInput.includes(key)) {
          response = demoResponses[key];
          break;
        }
      }

      setMessages(prev => [...prev, { type: 'ai', ...response }]);
    }, 1500);
  };

  const handleQuickAction = (question: string) => {
    setInput(question);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 bg-gradient-to-br from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Bot className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-400 border-2 border-white"></span>
        </span>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
          Ask Kelly AI
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-white" />
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-sm h-[70vh] max-h-[500px] md:w-96 md:h-[600px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold flex items-center gap-1.5">
                    Kelly AI
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Demo</span>
                  </h3>
                  <p className="text-white/90 text-xs font-medium">Your business co-pilot</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] ${message.type === 'user' ? '' : 'space-y-2'}`}>
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        message.type === 'user'
                          ? 'bg-blue-600 text-white rounded-br-sm'
                          : 'bg-white border border-gray-200 text-gray-800 rounded-bl-sm shadow-sm'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      
                      {message.bullets && (
                        <ul className="mt-2 space-y-1 text-sm">
                          {message.bullets.map((bullet: string, i: number) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-violet-600 mt-1">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      {message.insight && (
                        <div className="mt-3 p-3 bg-violet-50 rounded-lg border border-violet-200">
                          <div className="flex items-start gap-2">
                            <Sparkles className="w-4 h-4 text-violet-600 flex-shrink-0 mt-0.5" />
                            <p className="text-xs text-violet-900 font-medium">{message.insight}</p>
                          </div>
                        </div>
                      )}
                      
                      {message.metrics && (
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          {message.metrics.map((metric: any, i: number) => (
                            <div key={i} className="bg-gray-50 rounded-lg p-2 text-center">
                              <div className={`text-lg font-bold ${metric.color}`}>{metric.value}</div>
                              <div className="text-xs text-gray-600">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {message.demo && (
                      <p className="text-xs text-gray-500 px-2">{message.demo}</p>
                    )}
                    
                    {message.cta && (
                      <div className="space-y-2 mt-2">
                        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition-all shadow-md hover:shadow-lg">
                          Start Free Onboarding
                        </button>
                        <div className="grid grid-cols-2 gap-2">
                          <button className="text-xs bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-medium py-2 px-3 rounded-lg transition-colors">
                            Request Demo
                          </button>
                          <button className="text-xs bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 font-medium py-2 px-3 rounded-lg transition-colors">
                            Talk to Team
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Quick Actions */}
            {messages.length === 1 && !isTyping && (
              <div className="px-4 pb-3 space-y-2 border-t border-gray-100 pt-3 bg-white">
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => handleQuickAction(action.label)}
                        className="flex items-center gap-2 text-left text-xs bg-gradient-to-br from-violet-50 to-purple-50 hover:from-violet-100 hover:to-purple-100 text-violet-700 font-medium px-3 py-2.5 rounded-xl transition-all border border-violet-200 hover:border-violet-300"
                      >
                        <Icon className="w-4 h-4 flex-shrink-0" />
                        <span className="line-clamp-2">{action.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about your business..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all text-sm"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-3 rounded-xl transition-all hover:shadow-lg flex-shrink-0"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
        />
      )}
    </>
  );
}
