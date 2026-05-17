"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    icon: "💬",
    title: "对话类",
    desc: "问问题、写东西、做分析的主力",
    tools: [
      { name: "Claude", note: "写作和长文档我只用它。逻辑不飘，不爱编数据。" },
      { name: "ChatGPT", note: "生态最全。要联网搜索或者调插件的时候用它。" },
      { name: "Gemini", note: "Google 系嵌得最深。重度用 Gmail 和 Docs 的人最顺手。" },
    ],
  },
  {
    icon: "🎨",
    title: "创作类",
    desc: "图、视频、音乐生成",
    tools: [
      { name: "Midjourney", note: "美学统一，风格化最强。出图慢，但出片率高。" },
      { name: "Sora", note: "目前最稳的文生视频。做过几个短片，没怎么翻车。" },
      { name: "Suno", note: "一句歌词出曲。配公众号用过几次，免费版够用。" },
    ],
  },
  {
    icon: "🛠️",
    title: "生产力类",
    desc: "改文件、搭工具、做笔记",
    tools: [
      { name: "Cursor", note: "程序员朋友推荐的 AI IDE。我用得不多，团队场景挺顺。" },
      { name: "Claude Code", note: "终端里的 Claude。这个网站就是用它一行行问出来的。" },
      { name: "Obsidian Copilot", note: "笔记里的 AI。优先调本地知识库，不会乱串数据。" },
    ],
  },
];

const faqs = [
  {
    q: "Claude / ChatGPT / Gemini，到底该用哪个？",
    a: "其实不是「选」的问题，是「分工」。\n\nClaude 写东西，ChatGPT 调插件，Gemini 跟 Google 文档绑死。\n\n如果只能装一个，我会选 Claude。",
  },
  {
    q: "什么是提示词？为什么大家都在研究它？",
    a: "提示词就是你给 AI 的指令。同一件事，问法不同，答案差十倍。\n\n最简单的提升：给 AI 一个角色 + 一个任务 + 一个格式要求。\n\n不要说「帮我写自我介绍」。说「你是资深 HR，写一段 200 字以内的自我介绍，用于互联网大厂求职，突出数据分析能力」。\n\n区别试一下就知道。",
  },
  {
    q: "文科生怎么搭自己的 AI 工作流？",
    a: "不需要懂代码。\n\n最小可用栈：Obsidian 做知识库 + Claude 写东西 + Claude Code 帮你搭小工具。\n\n从一个工具开始，搞透它，再加下一个。工具选太多，反而都用不起来。",
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
          其实市面上叫「AI」的东西，差距比你想象的大。
        </p>
        <p className="text-base text-t-muted leading-relaxed max-w-xl mt-3">
          三年里我试过的不下几十个。有些试两次就再没打开过，有些用了半年才发现新功能。这里只列现在还在用的，按场景分三类。
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
              <p className="text-sm text-t-tertiary leading-relaxed whitespace-pre-line">{f.a}</p>
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
