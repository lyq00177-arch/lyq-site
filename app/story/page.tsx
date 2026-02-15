"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Timeline from "@/components/Timeline";

export default function StoryPage() {
  return (
    <section className="min-h-screen flex flex-col items-center px-4 sm:px-6 py-20">
      <Link href="/" className="text-base text-gray-500 hover:text-indigo-400 transition-colors mb-12">
        ← 返回首页
      </Link>

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-4"
      >
        📖 我的<span className="gradient-text">故事</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="text-lg text-gray-500 mb-10"
      >
        从 AI 元年到超级个体的旅程
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl text-center mb-16"
      >
        <p className="text-lg text-gray-400 leading-relaxed mb-5">
          2022 年末，ChatGPT 横空出世。我在第一时间深度体验，从此 All in AI。
        </p>
        <p className="text-lg text-gray-400 leading-relaxed mb-5">
          三年间，从 AI 工具研究到全栈创作，从美股投资到 Web3 探索，
          从公众号单篇 10w+ 到全网粉丝破 10w——
        </p>
        <p className="text-lg text-gray-400 leading-relaxed">
          这是一个普通人拥抱 AI 时代、成为超级个体的故事。
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="w-full max-w-3xl"
      >
        <Timeline />
      </motion.div>
    </section>
  );
}
