"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    icon: "💬",
    title: "对话类",
    desc: "日常问问题、写东西、做分析的主力",
    tools: [
      { name: "Claude", note: "写作、长文档、逻辑严密，不爱编数据。新手首选。" },
      { name: "ChatGPT", note: "生态最全，插件最多。联网搜索、调工具时用它。" },
      { name: "Gemini", note: "Google 系产品里嵌得最深。重度用 Gmail / Docs 的人最顺手。" },
    ],
  },
  {
    icon: "🎨",
    title: "创作类",
    desc: "图、视频、音乐生成",
    tools: [
      { name: "Midjourney", note: "美学统一，风格化最强。出图慢但出片率高。" },
      { name: "Sora", note: "目前最稳的文生视频。短片 / 概念片首选。" },
      { name: "Suno", note: "一句歌词出曲，可以生成可商用的背景音乐。" },
    ],
  },
  {
    icon: "🛠️",
    title: "生产力类",
    desc: "改文件、搭工具、做笔记的辅助",
    tools: [
      { name: "Cursor", note: "程序员的 AI IDE。团队协作场景友好。" },
      { name: "Claude Code", note: "终端里的 Claude。我这个网站就是用它一行行搭出来的。" },
      { name: "Obsidian Copilot", note: "笔记里的 AI 助手，优先调用你本地的知识库。" },
    ],
  },
];

const faqs = [
  {
    q: "Claude / ChatGPT / Gemini，到底该用哪个？",
    a: "不要纠结「选」，要想「分工」。Claude 写东西、ChatGPT 调插件、Gemini 跟 Google 文档绑死。新手只用 Claude 一个就够，等你需要联网或者绑邮箱了，再加另外两个。",
  },
  {
    q: "什么是提示词？为什么大家都在研究它？",
    a: "提示词就是你给 AI 的指令。同一个问题，问法不同，答案质量差十倍不夸张。最简单的提升：给 AI 一个角色 + 一个任务 + 一个格式要求。不要说「帮我写自我介绍」，说「你是资深 HR，写一段 200 字以内的自我介绍，用于互联网大厂求职，突出数据分析能力」——区别试一下就知道。",
  },
  {
    q: "文科生怎么搭自己的 AI 工作流？",
    a: "不需要懂代码。最小可用栈：Obsidian 做知识库 + Claude 写作分析 + Claude Code 帮你搭小工具。从一个工具开始，搞透它，再加下一个。工具选太多，反而都用不起来。",
  },
];

export default function AIToolsPage() {
  return (
    <section className="min-h-screen px-6 sm:px-12 lg:px-20 py-24 max-w-[860px] mx-auto">
      <Link
        href="/ai"
        className="text-sm text-t-muted hover:text-accent transition-colors block mb-16"
      >
        ← AI 学习
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-14"
      >
        <h1 className="font-display text-4xl sm:text-5xl text-t-primary mb-4">
          AI 工具
        </h1>
        <p className="text-lg text-t-tertiary leading-relaxed max-w-xl">
          三年里试过的 AI 工具不下几十个。这里只列还在用的，按场景分三类。
        </p>
      </motion.div>

      <div className="space-y-6 mb-20">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + ci * 0.08 }}
            className="p-7 rounded-2xl bg-card border border-[rgb(var(--border)_/_var(--border-opacity))]"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{cat.icon}</span>
              <h2 className="font-display text-2xl text-t-primary">{cat.title}</h2>
              <span className="text-xs text-t-muted ml-1">{cat.desc}</span>
            </div>
            <ul className="space-y-3">
              {cat.tools.map((t) => (
                <li key={t.name} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                  <span className="shrink-0 font-mono text-sm text-accent/80 sm:w-32">{t.name}</span>
                  <span className="text-sm text-t-tertiary leading-relaxed">{t.note}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[11px] font-mono tracking-[0.2em] text-t-muted uppercase">
            新手三问
          </span>
          <div className="flex-1 h-px bg-accent/10" />
        </div>

        <div className="space-y-5">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-xl bg-elevated border border-[rgb(var(--border)_/_var(--border-opacity))]"
            >
              <h3 className="text-base font-medium text-t-primary mb-3 leading-snug">
                {f.q}
              </h3>
              <p className="text-sm text-t-tertiary leading-relaxed">{f.a}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="p-6 rounded-xl bg-card border border-accent/10 text-center"
      >
        <p className="text-sm text-t-tertiary mb-2">
          想知道我完整的 AI 工具栈怎么搭？
        </p>
        <Link
          href="/business"
          className="text-sm text-accent/80 hover:text-accent transition-colors"
        >
          来一对一聊 →
        </Link>
      </motion.div>

      <p className="mt-16 text-[11px] text-t-muted/40 italic text-center leading-relaxed">
        本节为 AI 起草初稿，作者会逐步重写为个人视角与实际使用体验。
      </p>
    </section>
  );
}
