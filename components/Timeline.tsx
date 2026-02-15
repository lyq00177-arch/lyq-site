"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2022.11",
    title: "ChatGPT 发布，第一时间深度体验，开启 AI 探索之路",
  },
  {
    year: "2023",
    title: "系统研究 AI 全栈工具，掌握 Midjourney、Stable Diffusion、GPT API 等主流工具",
  },
  {
    year: "2024",
    title: "深耕 AI + 投资交叉领域，建立美股与 Web3 投资体系",
  },
  {
    year: "2025",
    title: "启动自媒体矩阵，公众号单篇 10w+ 爆款，全网粉丝破 10w",
  },
  {
    year: "2026",
    title: "开放个人咨询，搭建超级个体站，帮助更多人拥抱 AI 时代",
  },
];

export default function Timeline() {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent" />

      {timelineData.map((item, index) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className={`relative flex items-start gap-6 mb-10 md:mb-12 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Dot */}
          <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-indigo-500 ring-4 ring-dark z-10 mt-1.5" />

          {/* Content */}
          <div className={`ml-14 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-14 md:text-right" : "md:pl-14"}`}>
            <span className="inline-block text-base font-bold text-indigo-400 mb-2 font-mono">
              {item.year}
            </span>
            <p className="text-gray-300 text-base leading-relaxed">{item.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
