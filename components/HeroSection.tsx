"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-7xl font-bold mb-4">
            <span className="gradient-text">凌逸清</span>
            <span className="text-gray-500 mx-3">/</span>
            <span className="text-gray-200">LYQ</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-4"
        >
          AI 全栈创作者 · 投资人 · 超级个体
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-base text-gray-500 max-w-xl mx-auto mb-3 italic"
        >
          「从 ChatGPT 元年起，All in AI 至今」
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-sm text-gray-500 max-w-xl mx-auto mb-10"
        >
          深耕 AI 创作、Web3 投资与自媒体，帮助 1000+ 人拥抱 AI 时代
        </motion.p>

        {/* Subtle CTAs in a smaller style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-3 justify-center"
        >
          <a
            href="#services"
            className="px-4 py-2 rounded-lg text-xs text-gray-400 border border-white/10 hover:border-indigo-500/40 hover:text-gray-200 transition-all duration-300"
          >
            预约咨询
          </a>
          <a
            href="#services"
            className="px-4 py-2 rounded-lg text-xs text-gray-400 border border-white/10 hover:border-indigo-500/40 hover:text-gray-200 transition-all duration-300"
          >
            查看作品
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border-2 border-gray-600 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-gray-500" />
        </div>
      </motion.div>
    </section>
  );
}
