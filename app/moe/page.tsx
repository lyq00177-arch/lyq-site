"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { number: "3年+", label: "AI 深耕" },
  { number: "10w+", label: "爆款文章" },
];

const tools = [
  { name: "Claude", cat: "文本" },
  { name: "ChatGPT", cat: "文本" },
  { name: "Claude Code", cat: "开发" },
  { name: "Midjourney", cat: "图像" },
  { name: "Stable Diffusion", cat: "图像" },
  { name: "Runway", cat: "视频" },
  { name: "Next.js", cat: "开发" },
  { name: "Obsidian", cat: "效率" },
  { name: "NAS / 自建服务器", cat: "基础设施" },
];

const skills = [
  "AI 全链路创作",
  "投资认知与资产配置",
  "自媒体矩阵运营",
  "个人网站搭建（Claude Code）",
  "AI 工作流搭建",
  "优质信息筛选与提炼",
];

export default function MoePage() {
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
        🧠 底层思考<span className="gradient-text">系统</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="text-lg text-gray-500 mb-12"
      >
        Mixture of Experts — 多领域跨界融合
      </motion.p>

      <div className="w-full max-w-2xl space-y-14">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 gap-5"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl bg-dark-card border border-white/5"
            >
              <div className="text-4xl font-bold gradient-text mb-2">{s.number}</div>
              <div className="text-base text-gray-400">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-bold text-gray-300 mb-6 text-center">工具栈</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((t) => (
              <span
                key={t.name}
                className="px-5 py-2.5 rounded-full bg-dark-lighter border border-white/5 text-base text-gray-300"
              >
                {t.name}
                <span className="ml-2 text-sm text-gray-500">{t.cat}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-gray-300 mb-6 text-center">核心能力</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((s) => (
              <div
                key={s}
                className="flex items-center gap-3 px-5 py-4 rounded-xl bg-dark-card border border-white/5 text-base text-gray-300"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 shrink-0" />
                {s}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
