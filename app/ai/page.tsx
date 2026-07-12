"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const sections = [
  {
    href: "/ai/tools",
    icon: "🔧",
    label: "AI 工具",
    desc: "Claude / ChatGPT / Cursor 各自适合什么，怎么选、怎么搭",
    tag: "选什么",
  },
  {
    href: "/ai/prompts",
    icon: "📝",
    label: "AI 提示词",
    desc: "挖掘天赋、搭建数字人生、每日写日记、文字表达类提示词",
    tag: "怎么用",
  },
  {
    href: "/gallery",
    icon: "🎨",
    label: "AI 画廊",
    desc: "9 个系列 34 张图，看 AI 配合提示词能做出什么",
    tag: "用得好",
  },
  {
    href: "/ai/pantheon",
    icon: "🏯",
    label: "赛博活佛 · 群仙殿",
    desc: "3D 大殿供奉 AI 众神，WASD 漫游上香，Cloudflare 居 C 位享射灯",
    tag: "玩一玩",
  },
];

export default function AILearnPage() {
  return (
    <section className="min-h-screen px-6 sm:px-12 lg:px-20 py-24 max-w-[920px] mx-auto">
      <Link
        href="/"
        className="text-sm text-t-muted hover:text-accent transition-colors block mb-16"
      >
        ← 首页
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-14"
      >
        <h1 className="font-display text-4xl sm:text-5xl text-t-primary mb-4">
          AI 学习
        </h1>
        <p className="text-lg text-t-tertiary leading-relaxed max-w-xl">
          学 AI 不该只看作品。三件套：先知道选什么工具，再学怎么问它，最后看用得好是什么样。
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {sections.map((s, i) => (
          <motion.div
            key={s.href}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08 }}
          >
            <Link
              href={s.href}
              className="group flex flex-col gap-4 p-6 h-full rounded-2xl bg-card border border-[rgb(var(--border)_/_var(--border-opacity))] hover:border-accent/30 hover:bg-elevated transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{s.icon}</span>
                <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-accent/60">
                  {s.tag}
                </span>
              </div>
              <div className="flex-1">
                <div className="text-lg font-medium text-t-primary mb-2 group-hover:text-accent transition-colors">
                  {s.label}
                </div>
                <div className="text-sm text-t-muted leading-relaxed">
                  {s.desc}
                </div>
              </div>
              <div className="text-xs text-accent/50 group-hover:text-accent transition-colors">
                进入 →
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 text-xs text-t-muted/50 italic text-center"
      >
        AI 工具更新很快，这里的内容会持续迭代。
      </motion.p>
    </section>
  );
}
