"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const beliefs = [
  {
    tag: "对 AI",
    title: "接入口，不是工具",
    body: [
      "我不把 AI 看成一个工具。我把它看成一个接入口——各个领域里那些我没机会见到的顶尖思维，突然都可以问了。",
      "文科生，没有代码基础，照样搭出了自己的 AI 工作流。不是因为我特别厉害，是因为这件事本来门槛就不高——你只需要愿意坐下来，一个问题一个问题地问。",
    ],
  },
  {
    tag: "对创作",
    title: "说出去，才有可能",
    body: [
      "我花了很长时间才学会开口。",
      "有一段时间我以为，准备好了再说。后来发现不是这样的：你不说，别人不知道你懂这个。说出去，最坏是被嘲笑，最好是被人记住你的能力。人要把自己暴露在外界的视野里，不然什么都不会发生。",
      "这是我现在写东西的原因——不是因为我已经很厉害了，是因为我不想再等了。",
    ],
  },
  {
    tag: "对财富",
    title: "工具，不是目的",
    body: [
      "我对钱的理解很简单：它是工具，不是目的。目的是自由——时间自由，地域自由，不被人管的自由。",
      "不追求「财务自由」那种大词，但手里没有钱，就没有选择的权利。这是我做投资、做内容、做这一切的底层逻辑。",
    ],
  },
];

const tools = [
  { name: "Claude", cat: "写作 / 分析" },
  { name: "Claude Code", cat: "建站 / 开发" },
  { name: "ChatGPT", cat: "日常" },
  { name: "Midjourney", cat: "图像" },
  { name: "Runway", cat: "视频" },
  { name: "Obsidian", cat: "知识库" },
  { name: "NAS", cat: "本地服务器" },
  { name: "Next.js", cat: "框架" },
];

const stats = [
  { n: "3年+", label: "AI 深度实践" },
  { n: "10w+", label: "爆款单篇阅读" },
  { n: "2019", label: "第一台服务器" },
];

export default function MoePage() {
  return (
    <section className="min-h-screen px-6 sm:px-12 lg:px-20 py-24">
      <div className="max-w-[640px] mx-auto">

        <Link
          href="/"
          className="text-sm text-[#5a5450] hover:text-amber-400 transition-colors block mb-16"
        >
          ← 首页
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4"
        >
          <h1 className="font-display text-4xl sm:text-5xl text-[#e8e3d8] mb-6">关于我</h1>
          <p className="text-lg text-[#7a746c] leading-relaxed">
            我有一个信条：透明的自私，比伪装的无私更可信。
          </p>
          <p className="text-lg text-[#7a746c] leading-relaxed">
            所以这里写的，是我真实相信的东西。
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ originX: 0 }}
          className="h-px bg-gradient-to-r from-amber-500/20 to-transparent my-14"
        />

        {/* Beliefs */}
        <div className="space-y-16 mb-20">
          {beliefs.map((belief, i) => (
            <motion.div
              key={belief.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] font-mono tracking-widest text-amber-500/50 border border-amber-500/15 px-2.5 py-1 rounded shrink-0">
                  {belief.tag}
                </span>
                <h2 className="font-display text-xl text-[#b8b0a0]">{belief.title}</h2>
              </div>
              <div className="space-y-4">
                {belief.body.map((para, j) => (
                  <p key={j} className="text-lg text-[#7a746c] leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6 py-10 border-y border-white/[0.05] mb-14"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl text-amber-400/70 mb-1">{stat.n}</div>
              <div className="text-xs text-[#4a4440]">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Tool stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-[11px] font-mono tracking-[0.2em] text-[#4a4440] uppercase mb-5">
            工具栈
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool.name}
                className="px-3 py-1.5 rounded-lg bg-[#111111] border border-white/[0.05] text-sm text-[#7a746c]"
              >
                {tool.name}
                <span className="ml-2 text-xs text-[#4a4440]">{tool.cat}</span>
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
