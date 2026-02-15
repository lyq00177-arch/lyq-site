"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-20">
      <Link href="/" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors mb-10">
        ← 返回首页
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="text-6xl mb-6">🎨</div>
        <h1 className="text-3xl font-bold mb-3">
          <span className="gradient-text">作品集</span>
        </h1>
        <p className="text-base text-gray-500 mb-8">
          正在整理中，敬请期待...
        </p>
        <Link
          href="/"
          className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          返回首页 →
        </Link>
      </motion.div>
    </section>
  );
}
