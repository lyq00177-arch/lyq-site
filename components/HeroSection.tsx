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
            <span className="gradient-text">LYQ</span>
            <span className="text-gray-500 mx-4">/</span>
            <span className="text-gray-200">凌逸清</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8"
        >
          AI 创作者 · 跨界探索者 · 用技术连接创意与商业
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="/portfolio"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
          >
            查看作品
          </a>
          <a
            href="/about"
            className="px-6 py-3 rounded-lg border border-gray-700 text-gray-300 hover:border-indigo-500/50 hover:text-white transition-all duration-300"
          >
            了解更多
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
