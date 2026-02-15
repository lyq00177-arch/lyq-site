"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const highlights = [
  "3年+ AI 深度玩家",
  "全网 10w+ 粉丝",
  "公众号单篇 10w+ 爆款",
  "服务 1000+ 人次",
];

const gridCards = [
  {
    href: "/connect",
    icon: "🔗",
    title: "链接",
    desc: "微信 / 公众号 / Twitter / 邮箱",
    color: "from-blue-500/10 to-cyan-500/10",
    border: "hover:border-blue-500/30",
  },
  {
    href: "/business",
    icon: "💼",
    title: "业务",
    desc: "社群 / 1v1 咨询 / 建站 / 陪跑",
    color: "from-indigo-500/10 to-purple-500/10",
    border: "hover:border-indigo-500/30",
  },
  {
    href: "/moe",
    icon: "🧠",
    title: "MOE",
    desc: "底层思考系统 · 工具栈 · 核心能力",
    color: "from-purple-500/10 to-pink-500/10",
    border: "hover:border-purple-500/30",
  },
  {
    href: "/story",
    icon: "📖",
    title: "故事",
    desc: "从 AI 元年到超级个体的旅程",
    color: "from-amber-500/10 to-orange-500/10",
    border: "hover:border-amber-500/30",
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
        {/* Avatar */}
        <img
          src="/avatar.jpg"
          alt="凌逸清 Harry"
          className="w-32 h-32 rounded-full mx-auto mb-7 object-cover border-2 border-white/10"
        />
        <h1 className="text-6xl sm:text-7xl font-bold mb-5">
          <span className="gradient-text">凌逸清</span>
          <span className="text-gray-500 mx-3">/</span>
          <span className="text-gray-200">Harry</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 mb-4">
          AI 全栈创作者 · 投资人 · 超级个体
        </p>
        <p className="text-lg text-gray-500 italic mb-8">
          「从 ChatGPT 元年起，All in AI 至今」
        </p>

        {/* Highlight tags */}
        <div className="flex flex-wrap justify-center gap-3">
          {highlights.map((h) => (
            <span
              key={h}
              className="px-5 py-2 rounded-full bg-dark-card border border-white/5 text-base text-gray-300"
            >
              {h}
            </span>
          ))}
        </div>
      </motion.div>

      {/* 4-Grid Cards */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="grid grid-cols-2 gap-5 w-full max-w-2xl mb-12"
      >
        {gridCards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className={`group p-7 rounded-2xl bg-gradient-to-br ${card.color} border border-white/5 ${card.border} transition-all duration-300 hover:translate-y-[-2px]`}
          >
            <div className="text-4xl mb-3">{card.icon}</div>
            <h3 className="text-lg font-bold text-gray-200 mb-2">{card.title}</h3>
            <p className="text-base text-gray-500 leading-relaxed">{card.desc}</p>
          </Link>
        ))}
      </motion.div>

      {/* Bottom links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="flex gap-8 text-base text-gray-500"
      >
        <Link href="/blog" className="hover:text-gray-300 transition-colors">📝 博客</Link>
        <Link href="/portfolio" className="hover:text-gray-300 transition-colors">🎨 作品集</Link>
      </motion.div>
    </section>
  );
}
