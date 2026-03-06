"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const highlights = [
  "3年+ AI 深度玩家",
  "公众号单篇 10w+ 爆款",
  "从零搭建 AI 工作流",
  "文科生·非技术·全程实战",
];

const gridCards = [
  {
    href: "/connect",
    icon: "🔗",
    title: "链接",
    desc: "微信 / 公众号 / Twitter / 邮箱",
    color: "from-blue-500/10 to-cyan-500/10",
    border: "hover:border-blue-500/40",
    glow: "hover:shadow-blue-500/10",
  },
  {
    href: "/business",
    icon: "💼",
    title: "业务",
    desc: "社群 / 1v1 咨询 / 建站 / 陪跑",
    color: "from-indigo-500/10 to-purple-500/10",
    border: "hover:border-indigo-500/40",
    glow: "hover:shadow-indigo-500/10",
  },
  {
    href: "/moe",
    icon: "🧠",
    title: "关于我",
    desc: "底层思考系统 · 工具栈 · 核心能力",
    color: "from-purple-500/10 to-pink-500/10",
    border: "hover:border-purple-500/40",
    glow: "hover:shadow-purple-500/10",
  },
  {
    href: "/story",
    icon: "📖",
    title: "故事",
    desc: "从 AI 元年到超级个体的旅程",
    color: "from-amber-500/10 to-orange-500/10",
    border: "hover:border-amber-500/40",
    glow: "hover:shadow-amber-500/10",
  },
];

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-20">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        {/* Avatar with ring pulse */}
        <motion.div
          className="relative inline-block mb-7"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-indigo-500/20 blur-md"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <img
            src="/avatar.jpg"
            alt="凌逸清 Harry"
            className="relative w-32 h-32 rounded-full object-cover border-2 border-indigo-500/30"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-6xl sm:text-7xl font-bold mb-5"
        >
          <span className="gradient-text">凌逸清</span>
          <span className="text-gray-500 mx-3">/</span>
          <span className="text-gray-200">Harry</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="text-xl sm:text-2xl text-gray-400 mb-4"
        >
          AI 全栈创作者 · 投资人 · 超级个体
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-lg text-gray-500 italic mb-8"
        >
          「从 ChatGPT 元年起，All in AI 至今」
        </motion.p>

        {/* Highlight tags — staggered */}
        <div className="flex flex-wrap justify-center gap-3">
          {highlights.map((h, i) => (
            <motion.span
              key={h}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + i * 0.08 }}
              className="px-5 py-2 rounded-full bg-dark-card border border-white/5 text-base text-gray-300"
            >
              {h}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* 4-Grid Cards — individual with whileHover scale */}
      <div className="grid grid-cols-2 gap-5 w-full max-w-2xl mb-12">
        {gridCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.08 }}
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href={card.href}
              className={`group block p-7 rounded-2xl bg-gradient-to-br ${card.color} border border-white/5 ${card.border} transition-all duration-300 hover:shadow-lg ${card.glow}`}
            >
              <div className="text-4xl mb-3">{card.icon}</div>
              <h3 className="text-lg font-bold text-gray-200 mb-2">{card.title}</h3>
              <p className="text-base text-gray-500 leading-relaxed">{card.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex gap-8 text-base text-gray-500"
      >
        <Link href="/blog" className="hover:text-gray-300 transition-colors">📝 博客</Link>
        <Link href="/portfolio" className="hover:text-gray-300 transition-colors">🎨 作品集</Link>
      </motion.div>
    </section>
  );
}
