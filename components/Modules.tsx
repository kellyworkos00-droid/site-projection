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
      <div className="relative w-full h-64 flex items-center justify-center">
        {/* Invoice Document */}
        <motion.div
          animate={{ rotateZ: [-5, 5, -5], y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-32 bg-white rounded-lg p-4 shadow-lg border-4 border-blue-500"
        >
          <div className="space-y-2">
            <div className="h-2 bg-blue-500 w-16 rounded" />
            <div className="h-1 bg-gray-300 w-full rounded" />
            <div className="h-1 bg-gray-300 w-4/5 rounded" />
            <div className="pt-2 border-t border-gray-300 mt-2">
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="h-1 bg-green-500 w-12 rounded"
              />
              <div className="text-xs font-bold text-blue-600 mt-1">✓ PAID</div>
            </div>
          </div>
        </motion.div>
        {/* Money flying in */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 40],
              y: [-40, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="absolute w-6 h-4 bg-green-500 rounded text-white text-xs flex items-center justify-center font-bold"
          >
            💵
          </motion.div>
        ))}
      </div>
    ),
    'Inventory': (
      <div className="relative w-full h-64 flex items-center justify-center">
        {/* Boxes stacking */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              rotateZ: [-2, 2, -2],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className={`absolute w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded flex items-center justify-center text-white font-bold`}
            style={{ left: `${20 + i * 40}px`, top: `${80 - i * 30}px` }}
          >
            📦
          </motion.div>
        ))}
      </div>
    ),
    'Accounts & Payments': (
      <div className="relative w-full h-64 flex items-center justify-center">
        {/* Wallet with flowing money */}
        <div className="relative">
          <motion.div
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-20 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center text-3xl"
          >
            💳
          </motion.div>
          {/* Money flowing */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, 40],
                y: [-20, -60],
                opacity: [1, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.25,
              }}
              className="absolute text-lg"
              style={{ left: '50%', top: '50%' }}
            >
              💰
            </motion.div>
          ))}
        </div>
      </div>
    ),
    'Clients': (
      <div className="relative w-full h-64 flex items-center justify-center">
        {/* People network */}
        {[
          { x: 50, y: 50, delay: 0 },
          { x: 150, y: 50, delay: 0.2 },
          { x: 100, y: 120, delay: 0.4 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: pos.delay }}
            className="absolute w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold"
            style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
          >
            👤
          </motion.div>
        ))}
        {/* Connection lines */}
        <svg className="absolute w-48 h-40 pointer-events-none">
          <motion.line
            x1="50" y1="50" x2="100" y2="120"
            stroke="#ec4899"
            strokeWidth="2"
            animate={{ strokeDasharray: ['0 1', '1 0'] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.line
            x1="150" y1="50" x2="100" y2="120"
            stroke="#ec4899"
            strokeWidth="2"
            animate={{ strokeDasharray: ['0 1', '1 0'] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </div>
    ),
    'Team & HR': (
      <div className="relative w-full h-64 flex items-center justify-center">
        {/* Team members */}
        <div className="flex gap-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white text-lg">
                👨
              </div>
              <div className="w-8 h-6 bg-indigo-600 rounded-sm mt-1" />
            </motion.div>
          ))}
        </div>
        {/* Rating stars */}
        <motion.div
          animate={{ opacity: [0, 1, 0], y: [-20, -40] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-8 right-12 text-lg"
        >
          ⭐⭐⭐
        </motion.div>
      </div>
    ),
    'Files': (
      <div className="relative w-full h-64 flex items-center justify-center">
        {/* File stack */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              rotate: [0, 10, -10, 0],
              x: [-10, 0, 10],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="absolute w-16 h-20 bg-white border-3 border-teal-500 rounded flex items-center justify-center font-bold text-teal-600"
            style={{ left: `${80 + i * 15}px`, top: `${60 + i * 10}px` }}
          >
            📄
          </motion.div>
        ))}
      </div>
    ),
    'Projects & Tasks': (
      <div className="relative w-full h-64 flex items-center justify-center">
        {/* Task list with progress */}
        <div className="space-y-3 w-32">
          {[0.4, 0.7, 1].map((progress, i) => (
            <motion.div key={i} className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className="w-4 h-4 bg-red-500 rounded"
              />
              <div className="flex-1 h-2 bg-gray-300 rounded overflow-hidden">
                <motion.div
                  animate={{ width: ['0%', `${progress * 100}%`] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="h-full bg-red-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    ),
    'Calendar': (
      <div className="relative w-full h-64 flex items-center justify-center">
        {/* Calendar grid */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-32 bg-white border-4 border-cyan-500 rounded-lg p-2"
        >
          {/* Calendar header */}
          <div className="bg-cyan-500 text-white text-xs font-bold py-1 px-2 rounded text-center mb-2">
            JAN
          </div>
          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 28 }).map((_, i) => (
              <motion.div
                key={i}
                animate={
                  i === 15
                    ? {
                        backgroundColor: ['rgba(6, 182, 212, 0.2)', 'rgba(6, 182, 212, 1)', 'rgba(6, 182, 212, 0.2)'],
                      }
                    : {}
                }
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="w-3 h-3 bg-cyan-500/20 rounded text-xs flex items-center justify-center"
              />
            ))}
          </div>
        </motion.div>
      </div>
    ),
    'Settings & Admin': (
      <div className="relative w-full h-64 flex items-center justify-center">
        {/* Gear spinning */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, linear: true }}
          className="absolute w-24 h-24 text-4xl"
        >
          ⚙️
        </motion.div>
        {/* Smaller gears */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ rotate: -360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              linear: true,
            }}
            className="absolute text-2xl"
            style={{
              left: `${80 + Math.cos((i * 120) * Math.PI / 180) * 50}px`,
              top: `${60 + Math.sin((i * 120) * Math.PI / 180) * 50}px`,
            }}
          >
            ⚙️
          </motion.div>
        ))}
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

        {/* Modal - Animated Module Demonstration */}
        <AnimatePresence>
          {selectedModule && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedModule(null)}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
              >
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedModule(null)}
                  className={`absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors`}
                >
                  <X className="w-6 h-6 text-gray-600" />
                </motion.button>

                {/* Header */}
                <div className={`bg-gradient-to-br ${selectedModule.color} p-8 text-white rounded-t-3xl`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                      <selectedModule.Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">{selectedModule.title}</h2>
                      <p className="text-white/90 mt-1">{selectedModule.description}</p>
                    </div>
                  </div>
                </div>

                {/* Animated Character Demo */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">See it in action</h3>
                  <AnimatedCharacter moduleTitle={selectedModule.title} />

                  {/* Features List */}
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedModule.details.map((detail, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                          className="text-xl flex-shrink-0"
                        >
                          ✨
                        </motion.div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{detail}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Users Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`mt-8 p-4 bg-gradient-to-br ${selectedModule.color} bg-opacity-10 rounded-xl border-2 border-opacity-20 border-current`}
                  >
                    <p className="text-sm text-gray-600">
                      <strong>For:</strong> {selectedModule.users}
                    </p>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedModule(null)}
                    className={`w-full mt-8 bg-gradient-to-br ${selectedModule.color} text-white font-bold py-3 rounded-xl transition-all hover:shadow-lg`}
                  >
                    Get Started with {selectedModule.title}
                  </motion.button>
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
