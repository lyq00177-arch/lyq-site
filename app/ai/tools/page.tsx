"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AIToolsPage() {
  return (
    <section className="min-h-screen px-6 sm:px-12 lg:px-20 py-24 max-w-[820px] mx-auto">
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
          三年里我试过的 AI 工具不下几十个。这里只留下还在用的，附上「为什么」「适合谁」。
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="p-10 rounded-2xl bg-card border border-[rgb(var(--border)_/_var(--border-opacity))] text-center"
      >
        <div className="text-4xl mb-4 opacity-60">🚧</div>
        <h2 className="font-display text-xl text-t-primary mb-3">
          内容建设中
        </h2>
        <p className="text-sm text-t-muted leading-relaxed max-w-md mx-auto">
          预计先放三类：对话类（Claude / ChatGPT / Gemini）、创作类（Midjourney / Sora / Suno）、生产力类（Cursor / Claude Code / Obsidian Copilot）。
        </p>
        <p className="text-xs text-t-muted/60 mt-6">
          想先聊聊？
          <Link href="/business" className="text-accent/70 hover:text-accent ml-1">
            来一对一聊 →
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
