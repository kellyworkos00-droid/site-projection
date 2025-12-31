'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { BarChart3, TrendingUp, FileText, Package, DollarSign, Users, UserCog, FolderOpen, ClipboardList, Calendar, Settings, Bot, X } from 'lucide-react';

// Animated Character Component
function AnimatedCharacter({ moduleTitle }: { moduleTitle: string }) {
  const animations: Record<string, JSX.Element> = {
    'Kelly AI Assistant': (
      <div className="relative w-full h-64 flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 rounded-2xl">
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
            }}
            className="absolute w-2 h-2 bg-violet-400 rounded-full blur-sm"
            style={{ left: `${20 + i * 10}%`, top: '80%' }}
          />
        ))}
        
        {/* AI Robot with premium effects */}
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotateZ: [-2, 2, -2],
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          {/* Glow effect */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-violet-500 rounded-2xl blur-2xl -z-10"
          />
          
          {/* Head with shadow */}
          <div className="w-24 h-24 bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 rounded-2xl relative mx-auto mb-2 shadow-2xl">
            {/* Antenna */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute -top-3 left-1/2 -translate-x-1/2"
            >
              <div className="w-1 h-4 bg-violet-400 rounded-full" />
              <div className="w-3 h-3 bg-violet-300 rounded-full -mt-1 ml-[-4px] shadow-lg shadow-violet-500/50" />
            </motion.div>
            
            {/* Eyes with glow */}
            <motion.div
              animate={{ 
                scaleY: [1, 0.1, 1],
                boxShadow: ['0 0 10px rgba(139, 92, 246, 0.5)', '0 0 5px rgba(139, 92, 246, 0.2)', '0 0 10px rgba(139, 92, 246, 0.5)'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-7 left-5 w-4 h-4 bg-cyan-300 rounded-full shadow-lg shadow-cyan-500/50"
            />
            <motion.div
              animate={{ 
                scaleY: [1, 0.1, 1],
                boxShadow: ['0 0 10px rgba(139, 92, 246, 0.5)', '0 0 5px rgba(139, 92, 246, 0.2)', '0 0 10px rgba(139, 92, 246, 0.5)'],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.1 }}
              className="absolute top-7 right-5 w-4 h-4 bg-cyan-300 rounded-full shadow-lg shadow-cyan-500/50"
            />
            
            {/* Smile with animation */}
            <motion.div
              animate={{ scaleX: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-2 bg-white rounded-full shadow-inner"
            />
          </div>
          
          {/* Body with gradient */}
          <div className="w-20 h-20 bg-gradient-to-b from-purple-500 via-purple-600 to-purple-800 rounded-2xl mx-auto mb-2 shadow-2xl relative overflow-hidden">
            {/* Chest light */}
            <motion.div
              animate={{ 
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-cyan-400 rounded-full blur-sm"
            />
          </div>
          
          {/* Arms with smooth motion */}
          <div className="flex justify-center gap-4">
            <motion.div
              animate={{ 
                rotate: [0, -35, 0],
                scaleY: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-4 h-14 bg-gradient-to-b from-purple-600 to-purple-800 rounded-full shadow-lg"
              style={{ transformOrigin: 'top' }}
            />
            <motion.div
              animate={{ 
                rotate: [0, 35, 0],
                scaleY: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-4 h-14 bg-gradient-to-b from-purple-600 to-purple-800 rounded-full shadow-lg"
              style={{ transformOrigin: 'top' }}
            />
          </div>
        </motion.div>
        
        {/* Premium floating text with effects */}
        <motion.div
          animate={{ 
            opacity: [0, 1, 1, 0], 
            y: [-20, -50, -80],
            scale: [0.9, 1, 1.1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-8 right-12 px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full text-white text-sm font-bold shadow-xl"
        >
          <span className="flex items-center gap-2">
            <span className="text-yellow-300">✨</span>
            Analyzing...
          </span>
        </motion.div>
      </div>
    ),
    'Dashboard': (
      <div className="relative w-full h-64 flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-2xl">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
            {[...Array(64)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.02 }}
                className="border border-purple-300"
              />
            ))}
          </div>
        </div>
        
        {/* Dashboard Screen with premium effects */}
        <motion.div
          animate={{ 
            scale: [1, 1.03, 1],
            rotateY: [-2, 2, -2],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="w-48 h-36 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 rounded-2xl p-4 relative shadow-2xl border border-white/20">
            {/* Screen glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-transparent rounded-2xl" />
            
            {/* Screen Content */}
            <div className="space-y-3 relative z-10">
              {/* Title bar */}
              <motion.div
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <div className="flex-1 h-1 bg-white/20 rounded" />
              </motion.div>
              
              {/* Progress bar */}
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: ['0%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-500/50"
                />
              </div>
              
              {/* Chart bars */}
              <div className="flex items-end gap-2 h-16">
                {[0.4, 0.7, 0.9, 0.6, 0.8].map((height, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scaleY: [height, 1, height],
                      boxShadow: [
                        '0 0 5px rgba(34, 211, 238, 0.3)',
                        '0 0 20px rgba(34, 211, 238, 0.6)',
                        '0 0 5px rgba(34, 211, 238, 0.3)',
                      ],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                    className="flex-1 bg-gradient-to-t from-cyan-400 to-blue-500 rounded-t origin-bottom"
                    style={{ transformOrigin: 'bottom' }}
                  />
                ))}
              </div>
            </div>
            
            {/* Reflection */}
            <div className="absolute -bottom-1 left-0 right-0 h-8 bg-gradient-to-b from-white/5 to-transparent blur-sm rounded-b-2xl" />
          </div>
        </motion.div>
        
        {/* Person with premium design */}
        <motion.div
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-8 bottom-12"
        >
          {/* Head */}
          <motion.div
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mx-auto shadow-xl relative"
          >
            {/* Hair */}
            <div className="absolute -top-2 left-0 right-0 h-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-full" />
          </motion.div>
          
          {/* Body */}
          <div className="w-8 h-10 bg-gradient-to-b from-blue-600 to-blue-800 mx-auto mt-1 rounded-lg shadow-lg" />
          
          {/* Thought bubble */}
          <motion.div
            animate={{ 
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1, 1, 0.8],
              y: [0, -10, -20],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -right-8 -top-4 bg-white rounded-full px-3 py-1 shadow-lg text-xs font-bold text-purple-600"
          >
            📊
          </motion.div>
        </motion.div>
      </div>
    ),
    'Analytics': (
      <div className="relative w-full h-64 flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-2xl">
        {/* Animated grid background */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              opacity: [0.05, 0.15, 0.05],
              scaleY: [0.95, 1, 0.95],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: i * 0.3,
            }}
            className="absolute bottom-0 left-0 right-0 border-t border-orange-200"
            style={{ top: `${20 * i}%` }}
          />
        ))}
        
        {/* Premium Chart Bars with 3D effect */}
        <div className="flex items-end gap-4 h-48 relative z-10">
          {[0.4, 0.65, 0.9, 0.7, 0.5].map((height, i) => (
            <div key={i} className="relative">
              {/* Shadow */}
              <motion.div
                animate={{ 
                  scaleY: [height, 1, height],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-2 left-0 w-full h-full bg-orange-900/20 blur-xl rounded-t-lg"
                style={{ transformOrigin: 'bottom' }}
              />
              
              {/* Bar */}
              <motion.div
                animate={{ 
                  scaleY: [height, 1, height],
                  boxShadow: [
                    '0 10px 40px rgba(249, 115, 22, 0.2)',
                    '0 20px 60px rgba(249, 115, 22, 0.4)',
                    '0 10px 40px rgba(249, 115, 22, 0.2)',
                  ],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
                className="w-8 bg-gradient-to-t from-orange-600 via-orange-500 to-amber-400 rounded-t-xl relative"
                style={{ 
                  transformOrigin: 'bottom',
                  height: '160px',
                }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-t-xl" />
                
                {/* Value label */}
                <motion.div
                  animate={{ 
                    opacity: [0, 1, 0],
                    y: [-10, -20, -30],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: i * 0.15 + 1,
                  }}
                  className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg whitespace-nowrap"
                >
                  {Math.round((height + 0.5) * 100)}%
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
        
        {/* Premium magnifying glass with glow */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 4, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity },
          }}
          className="absolute bottom-8 right-8"
        >
          {/* Glow */}
          <motion.div
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-orange-400 rounded-full blur-xl"
          />
          
          {/* Glass circle */}
          <div className="relative w-14 h-14 border-4 border-orange-500 rounded-full bg-gradient-to-br from-orange-100/50 to-transparent backdrop-blur-sm shadow-xl">
            {/* Handle */}
            <div className="absolute -bottom-2 -right-2 w-6 h-8 border-4 border-orange-500 rounded-br-full rotate-45" />
            
            {/* Sparkle */}
            <motion.div
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full"
            />
          </div>
        </motion.div>
        
        {/* Floating trend arrow */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            x: [-10, 10, -10],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-8 right-16 text-3xl filter drop-shadow-lg"
        >
          📈
        </motion.div>
      </div>
    ),
    'Invoices': (
      <div className="relative w-full h-64 flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 rounded-2xl">
        {/* Floating coins background */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [100, -20],
              x: [0, Math.sin(i) * 30],
              opacity: [0, 0.3, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
            className="absolute text-2xl"
            style={{ left: `${10 + i * 8}%`, bottom: 0 }}
          >
            💰
          </motion.div>
        ))}
        
        {/* Premium Invoice Document */}
        <motion.div
          animate={{ 
            rotateZ: [-3, 3, -3], 
            y: [0, -10, 0],
            rotateY: [-5, 5, -5],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Shadow */}
          <motion.div
            animate={{ 
              scale: [0.9, 1.1, 0.9],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-4 left-0 right-0 h-8 bg-blue-900/30 blur-2xl rounded-full"
          />
          
          <div className="w-40 bg-white rounded-2xl p-5 shadow-2xl border-4 border-blue-500 relative overflow-hidden">
            {/* Corner stamp */}
            <div className="absolute top-2 right-2 w-8 h-8 border-2 border-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-blue-600">
              ✓
            </div>
            
            {/* Invoice content */}
            <div className="space-y-3">
              {/* Header */}
              <div className="flex items-center gap-2">
                <div className="h-3 bg-gradient-to-r from-blue-500 to-cyan-500 w-20 rounded-full shadow-lg shadow-blue-500/30" />
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-xs font-bold text-blue-600"
                >
                  INV-001
                </motion.div>
              </div>
              
              {/* Lines */}
              <div className="space-y-2">
                <div className="h-1.5 bg-gray-200 w-full rounded" />
                <div className="h-1.5 bg-gray-200 w-4/5 rounded" />
                <div className="h-1.5 bg-gray-200 w-3/4 rounded" />
              </div>
              
              {/* Payment status */}
              <div className="pt-3 border-t-2 border-dashed border-gray-300 mt-2">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      '0 0 10px rgba(34, 197, 94, 0.3)',
                      '0 0 20px rgba(34, 197, 94, 0.6)',
                      '0 0 10px rgba(34, 197, 94, 0.3)',
                    ],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold py-2 px-3 rounded-lg text-center shadow-lg"
                >
                  ✓ PAID
                </motion.div>
              </div>
            </div>
            
            {/* Shine effect */}
            <motion.div
              animate={{ x: [-100, 200] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
              className="absolute inset-0 w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
            />
          </div>
        </motion.div>
        
        {/* Money flying with trail */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            animate={{
              x: [-50, 50],
              y: [50, -50],
              opacity: [0, 1, 0],
              rotate: [0, 720],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
            className="absolute text-3xl filter drop-shadow-lg"
            style={{ left: '30%', top: '50%' }}
          >
            💵
          </motion.div>
        ))}
      </div>
    ),
    'Inventory': (
      <div className="relative w-full h-64 flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-2xl">
        {/* Conveyor belt animation */}
        <motion.div
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-16 left-0 right-0 h-3 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 opacity-30"
        />
        
        {/* Premium Boxes stacking with shadows */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -25, 0],
              rotateZ: [-3, 3, -3],
              rotateX: [-5, 5, -5],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
            className="absolute"
            style={{ 
              left: `${25 + i * 25}%`, 
              bottom: `${20 + i * 18}%`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Shadow */}
            <motion.div
              animate={{ 
                scale: [0.8, 1.2, 0.8],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.3 }}
              className="absolute -bottom-6 left-0 right-0 h-4 bg-green-900/30 blur-xl rounded-full"
            />
            
            {/* Box */}
            <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 via-green-600 to-emerald-700 rounded-xl flex items-center justify-center text-white font-bold text-3xl shadow-2xl border-2 border-green-400">
              {/* 3D effect lines */}
              <div className="absolute inset-2 border-2 border-green-300/30 rounded-lg" />
              <div className="absolute top-1 left-1 w-3 h-3 bg-white/30 rounded blur-sm" />
              
              📦
              
              {/* Barcode */}
              <motion.div
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-2 left-2 right-2 h-1.5 bg-black/20 rounded-sm"
              />
            </div>
            
            {/* Stock badge */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg"
            >
              {100 - i * 25}
            </motion.div>
          </motion.div>
        ))}
        
        {/* Checkmark animation */}
        <motion.div
          animate={{ 
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 360],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-8 right-8 text-4xl filter drop-shadow-lg"
        >
          ✅
        </motion.div>
      </div>
    ),
    'Accounts & Payments': (
      <div className="relative w-full h-64 flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 rounded-2xl">
        {/* Floating currency symbols */}
        {['$', '€', '£', 'KES'].map((symbol, i) => (
          <motion.div
            key={i}
            animate={{
              y: [100, -50],
              x: [0, Math.cos(i) * 40],
              opacity: [0, 0.3, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute text-2xl font-bold text-yellow-600/20"
            style={{ left: `${20 + i * 20}%`, bottom: 0 }}
          >
            {symbol}
          </motion.div>
        ))}
        
        {/* Premium Wallet/Card */}
        <div className="relative z-10">
          <motion.div
            animate={{ 
              rotate: [-8, 8, -8],
              y: [0, -15, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Glow */}
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-yellow-400 rounded-2xl blur-2xl"
            />
            
            {/* Card */}
            <div className="relative w-28 h-20 bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
              {/* Chip */}
              <div className="absolute top-3 left-3 w-8 h-6 bg-gradient-to-br from-amber-300 to-yellow-600 rounded-md" />
              
              {/* Card number dots */}
              <div className="absolute bottom-3 left-3 flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-white/50 rounded-full" />
                ))}
              </div>
              
              {/* Shine effect */}
              <motion.div
                animate={{ x: [-100, 150] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
                className="absolute inset-0 w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
              />
              
              {/* Icon */}
              <div className="text-4xl filter drop-shadow-lg">💳</div>
            </div>
          </motion.div>
        </div>
        
        {/* Money flowing with glow */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 60],
              y: [-30, -80],
              opacity: [1, 0],
              scale: [0.8, 1.2],
              rotate: [0, 180],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut",
            }}
            className="absolute text-2xl"
            style={{ left: '35%', top: '50%', filter: 'drop-shadow(0 0 10px rgba(234, 179, 8, 0.6))' }}
          >
            💰
          </motion.div>
        ))}
        
        {/* Transaction complete badge */}
        <motion.div
          animate={{ 
            scale: [0, 1, 1, 0],
            opacity: [0, 1, 1, 0],
            rotate: [0, 360],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-8 left-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-2 rounded-full shadow-xl"
        >
          ✓ Success
        </motion.div>
      </div>
    ),
    'Clients': (
      <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
        {/* Floating sparkles background */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.4,
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-pink-400"
            style={{ left: `${10 + i * 12}%`, bottom: 0 }}
          />
        ))}
        
        {/* Premium CRM interface with 3D effect */}
        <motion.div
          animate={{
            rotateY: [0, 5, 0, -5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* CRM Dashboard */}
          <div className="w-64 bg-gradient-to-br from-white to-pink-50 rounded-2xl shadow-2xl p-4 border border-pink-200">
            {/* Customer avatars with 3D depth */}
            <div className="flex gap-3 mb-4">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.15, 1],
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  {/* Avatar with glow */}
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg relative"
                    style={{ filter: 'drop-shadow(0 8px 16px rgba(236, 72, 153, 0.4))' }}
                  >
                    👤
                    {/* Status indicator */}
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                    />
                  </div>
                  
                  {/* Customer label */}
                  <motion.div
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-pink-600"
                  >
                    Client {i + 1}
                  </motion.div>
                </motion.div>
              ))}
            </div>
            
            {/* Connection lines with animation */}
            <div className="relative h-20 mb-3">
              <svg className="absolute inset-0 w-full h-full">
                {[
                  { x1: 30, y1: 0, x2: 128, y2: 60, delay: 0 },
                  { x1: 90, y1: 0, x2: 128, y2: 60, delay: 0.5 },
                  { x1: 150, y1: 0, x2: 128, y2: 60, delay: 1 },
                ].map((line, i) => (
                  <motion.line
                    key={i}
                    x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
                    stroke="url(#pinkGradient)"
                    strokeWidth="3"
                    strokeDasharray="5 5"
                    animate={{ 
                      strokeDashoffset: [0, -10],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: line.delay,
                      ease: "linear"
                    }}
                  />
                ))}
                <defs>
                  <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#f472b6" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Central hub */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    '0 0 20px rgba(236, 72, 153, 0.4)',
                    '0 0 40px rgba(236, 72, 153, 0.8)',
                    '0 0 20px rgba(236, 72, 153, 0.4)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-xl flex items-center justify-center text-2xl shadow-xl border-2 border-pink-300"
              >
                💼
              </motion.div>
            </div>
            
            {/* Stats bars with 3D effect */}
            <div className="space-y-2">
              {[
                { width: '85%', label: 'Engagement', delay: 0 },
                { width: '70%', label: 'Retention', delay: 0.2 },
                { width: '95%', label: 'Satisfaction', delay: 0.4 },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-pink-700 font-semibold">{stat.label}</span>
                    <motion.span
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: stat.delay }}
                      className="text-pink-600 font-bold"
                    >
                      {stat.width}
                    </motion.span>
                  </div>
                  <div className="h-2.5 bg-pink-100 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                      animate={{ width: ['0%', stat.width] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        delay: stat.delay,
                        ease: "easeOut"
                      }}
                      className="h-full bg-gradient-to-r from-pink-400 to-pink-600 rounded-full relative"
                      style={{ filter: 'drop-shadow(0 2px 4px rgba(236, 72, 153, 0.5))' }}
                    >
                      {/* Shine effect */}
                      <motion.div
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2, delay: stat.delay }}
                        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                      />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Floating success notification */}
        <motion.div
          animate={{
            y: [100, -20, -20, 100],
            opacity: [0, 1, 1, 0],
            scale: [0.8, 1, 1, 0.8],
          }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
          className="absolute bottom-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-xl shadow-2xl flex items-center gap-2"
        >
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            ✓
          </motion.span>
          New Lead Added
        </motion.div>
      </div>
    ),
    'Team & HR': (
      <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
        {/* Floating confetti particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, 300],
              x: [0, Math.sin(i) * 100],
              rotate: [0, 360 * (i % 2 ? 1 : -1)],
              opacity: [1, 0],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "linear",
            }}
            className={`absolute w-2 h-2 rounded ${i % 3 === 0 ? 'bg-indigo-400' : i % 3 === 1 ? 'bg-purple-400' : 'bg-blue-400'}`}
            style={{ left: `${10 + i * 7}%`, top: -20 }}
          />
        ))}
        
        {/* Premium team roster with 3D cards */}
        <div className="flex gap-6">
          {[
            { emoji: '👨', role: 'Manager', score: '98%', delay: 0 },
            { emoji: '👩', role: 'Sales', score: '95%', delay: 0.2 },
            { emoji: '🧑', role: 'Support', score: '92%', delay: 0.4 },
          ].map((member, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -15, 0],
                rotateY: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: member.delay,
                ease: "easeInOut",
              }}
              className="relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Employee card with glassmorphism */}
              <div className="w-20 bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-2xl p-3 border border-indigo-200 relative overflow-hidden">
                {/* Top shine */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                
                {/* Avatar with glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      '0 0 15px rgba(99, 102, 241, 0.3)',
                      '0 0 30px rgba(99, 102, 241, 0.6)',
                      '0 0 15px rgba(99, 102, 241, 0.3)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: member.delay }}
                  className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl mb-2 mx-auto shadow-xl relative"
                >
                  {member.emoji}
                  {/* Active status indicator */}
                  <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                  />
                </motion.div>
                
                {/* Role label */}
                <div className="text-center mb-2">
                  <div className="text-xs font-bold text-indigo-900">{member.role}</div>
                </div>
                
                {/* Performance bar */}
                <div className="space-y-1">
                  <div className="h-1.5 bg-indigo-100 rounded-full overflow-hidden">
                    <motion.div
                      animate={{ width: ['0%', member.score] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        delay: member.delay,
                        ease: "easeOut"
                      }}
                      className="h-full bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full"
                      style={{ filter: 'drop-shadow(0 2px 4px rgba(99, 102, 241, 0.5))' }}
                    />
                  </div>
                  <motion.div
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, delay: member.delay }}
                    className="text-[10px] font-bold text-indigo-600 text-center"
                  >
                    {member.score}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Floating rating stars with trail effect */}
        <motion.div
          animate={{
            y: [50, -60, -60],
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
          className="absolute top-12 right-12 flex gap-1"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              className="text-xl"
              style={{ filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.8))' }}
            >
              ⭐
            </motion.div>
          ))}
        </motion.div>
        
        {/* Payroll notification */}
        <motion.div
          animate={{
            x: [300, -20, -20, 300],
            opacity: [0, 1, 1, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, repeatDelay: 2 }}
          className="absolute bottom-6 left-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-xl flex items-center gap-2"
        >
          💰 Payroll Processed
        </motion.div>
      </div>
    ),
    'Files': (
      <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
        {/* Floating data particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [280, -20],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
            className="absolute w-1 h-1 bg-teal-400 rounded-full blur-sm"
            style={{ left: `${15 + i * 8}%`, bottom: 0 }}
          />
        ))}
        
        {/* Premium file cabinet with 3D folders */}
        <motion.div
          animate={{
            rotateY: [0, 8, 0, -8, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="relative flex flex-col gap-4">
            {[
              { icon: '📊', label: 'Reports', color: 'from-teal-400 to-teal-600', delay: 0 },
              { icon: '💼', label: 'Contracts', color: 'from-cyan-400 to-cyan-600', delay: 0.3 },
              { icon: '📄', label: 'Invoices', color: 'from-blue-400 to-blue-600', delay: 0.6 },
            ].map((folder, i) => (
              <motion.div
                key={i}
                animate={{
                  x: [0, 30, 0],
                  rotateZ: [0, 3, 0, -3, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: folder.delay,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                {/* 3D folder with shadow */}
                <div 
                  className={`w-48 h-16 bg-gradient-to-br ${folder.color} rounded-lg shadow-2xl relative overflow-hidden border-2 border-teal-300/50`}
                  style={{ 
                    filter: `drop-shadow(0 ${8 + i * 4}px ${16 + i * 4}px rgba(20, 184, 166, 0.4))`,
                    transform: `perspective(800px) rotateX(${5 - i * 2}deg)`
                  }}
                >
                  {/* Folder tab */}
                  <div className="absolute -top-3 left-3 w-16 h-5 bg-gradient-to-br from-teal-500 to-teal-700 rounded-t-lg border-2 border-teal-300/50 border-b-0" />
                  
                  {/* Shine effect */}
                  <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      delay: folder.delay
                    }}
                    className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                  />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex items-center px-4 gap-3">
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: folder.delay
                      }}
                      className="text-3xl"
                    >
                      {folder.icon}
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="text-white font-bold text-sm mb-1">{folder.label}</div>
                      {/* File count animation */}
                      <motion.div 
                        className="flex gap-1"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity, delay: folder.delay }}
                      >
                        {[...Array(3)].map((_, j) => (
                          <motion.div
                            key={j}
                            animate={{ 
                              height: ['4px', '10px', '4px'],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: folder.delay + j * 0.2,
                            }}
                            className="w-1 bg-white/60 rounded-full"
                          />
                        ))}
                      </motion.div>
                    </div>
                    
                    {/* File count badge */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: folder.delay
                      }}
                      className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-teal-700 font-bold text-xs shadow-lg"
                    >
                      {12 + i * 3}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Upload animation */}
        <motion.div
          animate={{
            y: [60, -40],
            opacity: [0, 1, 1, 0],
            scale: [0.8, 1, 1, 1.2],
          }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          className="absolute top-6 right-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-xl shadow-2xl flex items-center gap-2"
        >
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            ⬆️
          </motion.span>
          Uploaded
        </motion.div>
      </div>
    ),
    'Projects & Tasks': (
      <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
        {/* Floating task icons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.sin(i) * 30, 0],
              opacity: [0, 0.3, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.6,
            }}
            className="absolute text-xl"
            style={{ left: `${15 + i * 15}%`, bottom: 0 }}
          >
            ✓
          </motion.div>
        ))}
        
        {/* Premium Kanban board with 3D cards */}
        <motion.div
          animate={{
            rotateY: [0, 5, 0, -5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="flex gap-4">
            {[
              { status: 'To Do', progress: 0.3, color: 'from-red-400 to-red-600', tasks: 5, delay: 0 },
              { status: 'In Progress', progress: 0.65, color: 'from-amber-400 to-amber-600', tasks: 3, delay: 0.3 },
              { status: 'Done', progress: 1, color: 'from-green-400 to-green-600', tasks: 8, delay: 0.6 },
            ].map((column, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: column.delay,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                {/* Column card */}
                <div className="w-24 bg-gradient-to-br from-white to-red-50 rounded-xl shadow-2xl p-3 border border-red-200">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${column.color} text-white text-xs font-bold py-2 px-2 rounded-lg mb-3 text-center shadow-lg`}>
                    {column.status}
                  </div>
                  
                  {/* Task cards */}
                  <div className="space-y-2">
                    {[...Array(3)].map((_, j) => (
                      <motion.div
                        key={j}
                        animate={{
                          scale: [1, 1.05, 1],
                          x: j === 2 && i < 2 ? [0, 30, 30, 0] : 0,
                          opacity: j === 2 && i < 2 ? [1, 1, 0, 1] : 1,
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: column.delay + j * 0.3,
                          ease: "easeInOut",
                        }}
                        className="bg-white rounded-lg p-2 shadow-md border border-gray-200 relative overflow-hidden"
                      >
                        {/* Task lines */}
                        <div className="space-y-1">
                          <div className="h-1 bg-gray-300 rounded w-full" />
                          <div className="h-1 bg-gray-200 rounded w-3/4" />
                        </div>
                        
                        {/* Priority indicator */}
                        <motion.div
                          animate={{ 
                            opacity: [0.4, 1, 0.4],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: j * 0.2
                          }}
                          className={`absolute top-1 right-1 w-2 h-2 rounded-full ${
                            j === 0 ? 'bg-red-500' : j === 1 ? 'bg-yellow-500' : 'bg-green-500'
                          }`}
                        />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Task counter */}
                  <motion.div
                    animate={{ 
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: column.delay
                    }}
                    className="mt-3 text-center"
                  >
                    <div className="text-xs font-bold text-red-600">{column.tasks} tasks</div>
                    {/* Progress bar */}
                    <div className="mt-1 h-1.5 bg-red-100 rounded-full overflow-hidden">
                      <motion.div
                        animate={{ 
                          width: ['0%', `${column.progress * 100}%`],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1,
                          delay: column.delay,
                          ease: "easeOut"
                        }}
                        className={`h-full bg-gradient-to-r ${column.color} rounded-full`}
                        style={{ filter: 'drop-shadow(0 2px 4px rgba(239, 68, 68, 0.4))' }}
                      >
                        {/* Shine */}
                        <motion.div
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ 
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 2,
                            delay: column.delay
                          }}
                          className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Completion notification */}
        <motion.div
          animate={{
            scale: [0, 1, 1, 0],
            opacity: [0, 1, 1, 0],
            rotate: [0, 0, 0, 10],
          }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
          className="absolute top-6 right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-xl flex items-center gap-2"
        >
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            ✓
          </motion.span>
          Task Completed
        </motion.div>
      </div>
    ),
    'Calendar': (
      <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
        {/* Floating date bubbles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [250, -50],
              x: [0, Math.sin(i) * 50],
              opacity: [0, 0.5, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
            className="absolute text-sm font-bold text-cyan-400"
            style={{ left: `${10 + i * 12}%`, bottom: 0 }}
          >
            {i + 1}
          </motion.div>
        ))}
        
        {/* Premium 3D calendar with events */}
        <motion.div
          animate={{
            rotateY: [0, 8, 0, -8, 0],
            rotateX: [0, 3, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="w-64 bg-gradient-to-br from-white to-cyan-50 rounded-2xl shadow-2xl p-4 border-2 border-cyan-200 relative overflow-hidden">
            {/* Top shine */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            
            {/* Header with month */}
            <motion.div
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-500 text-white font-bold py-3 px-4 rounded-xl mb-4 text-center shadow-lg relative overflow-hidden"
              style={{ backgroundSize: '200% 200%' }}
            >
              {/* Shine effect */}
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
              />
              <div className="relative z-10">
                <div className="text-xl">January 2025</div>
                <div className="text-xs opacity-90">28 days</div>
              </div>
            </motion.div>
            
            {/* Day labels */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                <div key={i} className="text-center text-xs font-bold text-cyan-700">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Calendar grid with animated events */}
            <div className="grid grid-cols-7 gap-1.5">
              {Array.from({ length: 28 }).map((_, i) => {
                const isToday = i === 14;
                const hasEvent = [3, 7, 14, 18, 24].includes(i);
                
                return (
                  <motion.div
                    key={i}
                    animate={
                      isToday
                        ? {
                            scale: [1, 1.15, 1],
                            boxShadow: [
                              '0 0 0 rgba(6, 182, 212, 0)',
                              '0 0 20px rgba(6, 182, 212, 0.6)',
                              '0 0 0 rgba(6, 182, 212, 0)',
                            ],
                          }
                        : hasEvent
                        ? {
                            scale: [1, 1.08, 1],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.05,
                    }}
                    className={`
                      relative aspect-square rounded-lg flex items-center justify-center text-xs font-semibold
                      ${isToday 
                        ? 'bg-gradient-to-br from-cyan-500 to-cyan-700 text-white shadow-xl' 
                        : hasEvent
                        ? 'bg-gradient-to-br from-cyan-100 to-cyan-200 text-cyan-800'
                        : 'bg-cyan-50 text-cyan-600'
                      }
                    `}
                  >
                    {i + 1}
                    
                    {/* Event dot */}
                    {hasEvent && !isToday && (
                      <motion.div
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                        className="absolute bottom-0.5 w-1 h-1 bg-cyan-600 rounded-full"
                      />
                    )}
                    
                    {/* Today pulse ring */}
                    {isToday && (
                      <motion.div
                        animate={{
                          scale: [1, 1.8],
                          opacity: [0.6, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="absolute inset-0 border-2 border-cyan-300 rounded-lg"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
            
            {/* Upcoming events list */}
            <div className="mt-4 space-y-2">
              {[
                { time: '10:00', title: 'Team Meeting', delay: 0 },
                { time: '14:30', title: 'Client Call', delay: 0.3 },
              ].map((event, i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: [10, 0],
                    opacity: [0, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 2,
                    delay: event.delay,
                  }}
                  className="flex items-center gap-2 bg-cyan-100 rounded-lg p-2"
                >
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-cyan-600 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="text-xs font-bold text-cyan-900">{event.title}</div>
                    <div className="text-[10px] text-cyan-600">{event.time}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Event notification */}
        <motion.div
          animate={{
            y: [80, -20, -20, 80],
            opacity: [0, 1, 1, 0],
            scale: [0.8, 1, 1, 0.8],
          }}
          transition={{ duration: 5, repeat: Infinity, repeatDelay: 1 }}
          className="absolute bottom-6 right-6 bg-gradient-to-r from-purple-500 to-purple-700 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-2xl flex items-center gap-2"
        >
          <motion.span
            animate={{ rotate: [0, 20, -20, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            🔔
          </motion.span>
          Reminder: 15 min
        </motion.div>
      </div>
    ),
    'Settings & Admin': (
      <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
        {/* Floating tool icons */}
        {['🔧', '🔒', '⚡', '🛠️', '🎨', '📊'].map((icon, i) => (
          <motion.div
            key={i}
            animate={{
              y: [260, -40],
              x: [0, Math.sin(i) * 40],
              opacity: [0, 0.4, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "linear",
            }}
            className="absolute text-lg"
            style={{ left: `${10 + i * 15}%`, bottom: 0 }}
          >
            {icon}
          </motion.div>
        ))}
        
        {/* Premium control panel with 3D depth */}
        <motion.div
          animate={{
            rotateY: [0, 6, 0, -6, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="relative">
            {/* Main gear - central hub */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="relative w-32 h-32 mx-auto"
            >
              {/* Outer gear ring with shadow */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 rounded-full flex items-center justify-center shadow-2xl border-4 border-gray-500"
                style={{ 
                  filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5))',
                  clipPath: 'polygon(50% 0%, 60% 10%, 70% 5%, 75% 15%, 85% 15%, 90% 25%, 95% 30%, 100% 40%, 95% 50%, 100% 60%, 95% 70%, 90% 75%, 85% 85%, 75% 85%, 70% 95%, 60% 90%, 50% 100%, 40% 90%, 30% 95%, 25% 85%, 15% 85%, 10% 75%, 5% 70%, 0% 60%, 5% 50%, 0% 40%, 5% 30%, 10% 25%, 15% 15%, 25% 15%, 30% 5%, 40% 10%)'
                }}
              >
                {/* Inner circle */}
                <motion.div
                  animate={{ 
                    boxShadow: [
                      '0 0 20px rgba(156, 163, 175, 0.4)',
                      '0 0 40px rgba(156, 163, 175, 0.8)',
                      '0 0 20px rgba(156, 163, 175, 0.4)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-20 h-20 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full flex items-center justify-center shadow-inner"
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="text-3xl"
                  >
                    ⚙️
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Surrounding smaller gears */}
            {[
              { angle: 0, size: 16, duration: 4, icon: '🔒' },
              { angle: 120, size: 14, duration: 5, icon: '👥' },
              { angle: 240, size: 15, duration: 4.5, icon: '📊' },
            ].map((gear, i) => {
              const radius = 70;
              const x = Math.cos((gear.angle * Math.PI) / 180) * radius;
              const y = Math.sin((gear.angle * Math.PI) / 180) * radius;
              
              return (
                <motion.div
                  key={i}
                  animate={{ 
                    rotate: -360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: gear.duration, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, delay: i * 0.3 },
                  }}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div 
                    className={`w-${gear.size} h-${gear.size} bg-gradient-to-br from-gray-500 to-gray-700 rounded-full flex items-center justify-center shadow-xl border-2 border-gray-400`}
                    style={{ 
                      width: `${gear.size * 4}px`,
                      height: `${gear.size * 4}px`,
                      filter: `drop-shadow(0 ${4 + i * 2}px ${8 + i * 2}px rgba(0, 0, 0, 0.4))`,
                    }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="text-2xl"
                    >
                      {gear.icon}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
            
            {/* Control panel overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-48"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-3 shadow-2xl border border-gray-600">
                {/* Status indicators */}
                <div className="grid grid-cols-3 gap-2 mb-2">
                  {[
                    { label: 'Users', color: 'bg-green-500', delay: 0 },
                    { label: 'System', color: 'bg-blue-500', delay: 0.2 },
                    { label: 'Security', color: 'bg-purple-500', delay: 0.4 },
                  ].map((status, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <motion.div
                        animate={{
                          opacity: [0.4, 1, 0.4],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: status.delay,
                        }}
                        className={`w-3 h-3 ${status.color} rounded-full`}
                        style={{ filter: `drop-shadow(0 0 8px currentColor)` }}
                      />
                      <div className="text-[8px] text-gray-400 font-semibold">{status.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* Settings toggle switches */}
                <div className="space-y-1.5">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        x: [0, 2, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                      className="flex items-center justify-between bg-gray-700/50 rounded px-2 py-1"
                    >
                      <div className="h-1 w-16 bg-gray-600 rounded" />
                      <motion.div
                        animate={{
                          x: [0, 8, 0],
                          backgroundColor: ['#9ca3af', '#10b981', '#9ca3af'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                        className="w-5 h-2.5 bg-green-500 rounded-full relative shadow-lg"
                      >
                        <div className="absolute inset-0 rounded-full bg-white/30" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* System update notification */}
        <motion.div
          animate={{
            y: [100, -30, -30, 100],
            opacity: [0, 1, 1, 0],
            scale: [0.8, 1, 1, 0.8],
          }}
          transition={{ duration: 5, repeat: Infinity, repeatDelay: 2 }}
          className="absolute bottom-4 right-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-2xl flex items-center gap-2"
        >
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            ⚙️
          </motion.span>
          System Updated
        </motion.div>
      </div>
    ),
  };

  return (
    <div className="w-full h-64 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
      {animations[moduleTitle] || (
        <div className="text-center text-gray-500">
          <div className="text-4xl mb-2">✨</div>
          <p>Animation coming soon</p>
        </div>
      )}
    </div>
  );
}

export default function Modules() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedModule, setSelectedModule] = useState<typeof modules[0] | null>(null);

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
            <motion.button
              key={module.title}
              onClick={() => setSelectedModule(module)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative w-full bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-transparent hover:shadow-2xl transition-all duration-300 text-left cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
                <div className="flex items-center text-sm justify-between">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    <span className="text-gray-600 font-medium">{module.users}</span>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-semibold">Click to view</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Modal - Premium Animated Module Demonstration */}
        <AnimatePresence>
          {selectedModule && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModule(null)}
              className="fixed inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 50, rotateX: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: 'spring', stiffness: 280, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gradient-to-b from-white to-gray-50 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden relative shadow-2xl border border-gray-200/50"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Premium gradient overlay */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/50 to-transparent pointer-events-none z-10" />
                
                {/* Floating particles in modal */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -100, 0],
                      x: [0, Math.sin(i) * 30, 0],
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                    className={`absolute w-2 h-2 rounded-full blur-sm bg-gradient-to-br ${selectedModule.color}`}
                    style={{ left: `${10 + i * 15}%`, bottom: 0 }}
                  />
                ))}
                
                {/* Scrollable content */}
                <div className="overflow-y-auto max-h-[90vh] relative z-20">
                  {/* Close Button - Premium design */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedModule(null)}
                    className={`absolute top-6 right-6 z-30 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-xl flex items-center justify-center transition-all border border-gray-200/50`}
                  >
                    <X className="w-6 h-6 text-gray-700" />
                  </motion.button>

                  {/* Header - Enhanced with animations */}
                  <div className={`bg-gradient-to-br ${selectedModule.color} p-10 text-white rounded-t-3xl relative overflow-hidden`}>
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 3 + i * 0.2,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                          className="absolute w-4 h-4 bg-white rounded-full"
                          style={{
                            left: `${(i * 5) % 100}%`,
                            top: `${(i * 7) % 100}%`,
                          }}
                        />
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-6 mb-6 relative z-10">
                      <motion.div
                        animate={{ 
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.05, 1],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl border border-white/30"
                      >
                        <selectedModule.Icon className="w-10 h-10 text-white" />
                      </motion.div>
                      <div>
                        <motion.h2
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-4xl font-bold mb-2 drop-shadow-lg"
                        >
                          {selectedModule.title}
                        </motion.h2>
                        <motion.p
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                          className="text-white/90 text-lg"
                        >
                          {selectedModule.description}
                        </motion.p>
                      </div>
                    </div>
                    
                    {/* Wave decoration at bottom */}
                    <div className="absolute bottom-0 left-0 right-0">
                      <svg viewBox="0 0 1200 120" className="w-full h-8 text-white fill-current">
                        <path d="M0,0 C150,80 350,20 600,60 C850,100 1050,40 1200,80 L1200,120 L0,120 Z" />
                      </svg>
                    </div>
                  </div>

                {/* Content Area - Premium animated sections */}
                <div className="p-10">
                  {/* "See it in action" title with shine effect */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                  >
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-2">
                      See it in action
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto" />
                  </motion.div>
                  
                  {/* Animated Character Demo with premium background */}
                  <div className="relative mb-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl blur-xl opacity-50" />
                    <div className="relative">
                      <AnimatedCharacter moduleTitle={selectedModule.title} />
                    </div>
                  </div>

                  {/* Features Grid - Premium card design */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10"
                  >
                    {selectedModule.details.map((detail, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        whileHover={{ y: -4, scale: 1.02 }}
                        className={`group relative p-5 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-300`}
                      >
                        {/* Gradient border glow on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${selectedModule.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                        
                        {/* Top shine effect */}
                        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-60" />
                        
                        <div className="relative flex items-start gap-4">
                          <motion.div
                            animate={{ 
                              rotate: [0, 10, -10, 0],
                              scale: [1, 1.1, 1],
                            }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                            className="flex-shrink-0 text-3xl filter drop-shadow-lg"
                          >
                            ✨
                          </motion.div>
                          <div>
                            <p className="text-gray-800 font-medium leading-relaxed">{detail}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Users Info - Premium badge design */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="relative overflow-hidden mb-8"
                  >
                    <div className={`relative p-6 bg-gradient-to-br ${selectedModule.color} bg-opacity-5 rounded-2xl border-2 border-opacity-20 ${selectedModule.color.includes('from-') ? 'border-blue-200' : 'border-gray-200'}`}>
                      {/* Animated glow effect */}
                      <motion.div
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className={`absolute inset-0 bg-gradient-to-br ${selectedModule.color} opacity-10 blur-xl`}
                      />
                      
                      <div className="relative flex items-center gap-3">
                        <Users className="w-5 h-5 text-gray-600" />
                        <p className="text-gray-700 font-medium">
                          <span className="text-gray-500">Perfect for:</span> {selectedModule.users}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* CTA Button - Premium design with glow */}
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    onClick={() => setSelectedModule(null)}
                    className={`relative w-full p-5 bg-gradient-to-r ${selectedModule.color} text-white rounded-2xl font-semibold text-lg shadow-2xl overflow-hidden group`}
                  >
                    {/* Animated shine effect */}
                    <motion.div
                      animate={{
                        x: ['-200%', '200%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                      className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                    />
                    
                    {/* Glow effect on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${selectedModule.color} opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300`} />
                    
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Get Started with {selectedModule.title}
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </motion.button>
                </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
