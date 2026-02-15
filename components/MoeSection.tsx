"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "3年+", label: "AI 深耕" },
  { number: "10w+", label: "全网粉丝" },
  { number: "10w+", label: "爆款文章" },
  { number: "1000+", label: "服务人次" },
];

const tools = [
  { name: "ChatGPT", category: "文本" },
  { name: "Claude", category: "文本" },
  { name: "Midjourney", category: "图像" },
  { name: "Stable Diffusion", category: "图像" },
  { name: "Runway", category: "视频" },
  { name: "GPT API", category: "开发" },
  { name: "Next.js", category: "开发" },
  { name: "WordPress", category: "开发" },
  { name: "Cursor", category: "开发" },
  { name: "Notion", category: "效率" },
];

const skills = [
  "AI 全链路创作",
  "美股 & Web3 投资",
  "自媒体矩阵运营",
  "独立站全栈开发",
  "AI 工作流搭建",
  "商业模式设计",
];

export default function MoeSection() {
  return (
    <div className="space-y-16">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center p-6 rounded-2xl bg-dark-card border border-white/5"
          >
            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
              {stat.number}
            </div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Tools */}
      <div>
        <h3 className="text-lg font-bold text-gray-200 mb-6 text-center">工具栈</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((tool, index) => (
            <motion.span
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="px-4 py-2 rounded-full bg-dark-lighter border border-white/5 text-sm text-gray-300 hover:border-indigo-500/30 transition-all duration-300"
            >
              {tool.name}
              <span className="ml-1.5 text-xs text-gray-500">{tool.category}</span>
            </motion.span>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-lg font-bold text-gray-200 mb-6 text-center">核心能力</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-dark-card border border-white/5 text-sm text-gray-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
