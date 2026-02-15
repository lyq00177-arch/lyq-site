"use client";

import { motion } from "framer-motion";

const timeline = [
  { year: "2024", title: "开启 AI 创作之旅", description: "开始系统学习和使用 AI 创作工具，探索 AI 在视觉创作领域的无限可能" },
  { year: "2024", title: "MBA 学习", description: "攻读 MBA，培养商业思维与战略分析能力" },
  { year: "2025", title: "跨界探索", description: "将 AI 技术与行业需求结合，探索商业落地方案" },
  { year: "2026", title: "个人品牌建设", description: "搭建个人网站，开始系统化输出内容，建立个人影响力" },
];

const skills = [
  "Midjourney", "Stable Diffusion", "ChatGPT", "Claude",
  "Photoshop", "Premiere", "Figma",
  "Python", "JavaScript", "Next.js",
  "商业分析", "项目管理", "内容创作",
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">
          关于 <span className="gradient-text">我</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          我是凌逸清（LYQ），一个热爱用 AI 进行创意探索的跨界学习者。
          我相信 AI 不仅是工具，更是释放人类创造力的催化剂。
        </p>
      </motion.div>

      {/* Timeline */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">
          个人 <span className="gradient-text">经历</span>
        </h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 to-purple-500" />
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex items-start gap-8 mb-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:block md:w-1/2" />
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-500 border-2 border-dark mt-1.5" />
              <div className="ml-10 md:ml-0 md:w-1/2 glow-card bg-dark-card border border-white/5 rounded-xl p-5">
                <span className="text-xs text-indigo-400 font-mono">{item.year}</span>
                <h3 className="text-lg font-semibold text-white mt-1">{item.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-center">
          技能 <span className="gradient-text">标签</span>
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 rounded-full bg-dark-card border border-white/10 text-sm text-gray-300 hover:border-indigo-500/50 hover:text-indigo-300 transition-all cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
