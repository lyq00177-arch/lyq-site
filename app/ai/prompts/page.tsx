"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const planned = [
  { icon: "🌱", title: "挖掘天赋", desc: "让 AI 帮你找到你都没意识到的擅长方向" },
  { icon: "📔", title: "搭建数字人生", desc: "把生活、记忆、思考结构化沉淀的提示词工作流" },
  { icon: "✍️", title: "每日写日记", desc: "AI 引导式日记模板，比空白页面好用十倍" },
  { icon: "📝", title: "文字表达", desc: "公众号、推文、自我介绍、邮件——文字活提示词集" },
];

export default function AIPromptsPage() {
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
          AI 提示词
        </h1>
        <p className="text-lg text-t-tertiary leading-relaxed max-w-xl">
          AI 不是搜索引擎，问法决定答案的高度。这里慢慢收我自己用得顺手、能复用的提示词。
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {planned.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.07 }}
            className="p-6 rounded-2xl bg-card border border-[rgb(var(--border)_/_var(--border-opacity))]"
          >
            <div className="text-2xl mb-3">{p.icon}</div>
            <div className="text-base font-medium text-t-primary mb-2">{p.title}</div>
            <div className="text-sm text-t-muted leading-relaxed">{p.desc}</div>
            <div className="mt-4 text-[11px] text-accent/40 tracking-wider uppercase">
              · 建设中 ·
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="p-6 rounded-xl bg-elevated border border-accent/10 text-center"
      >
        <p className="text-sm text-t-tertiary mb-2">
          有想看的提示词主题？告诉我，我可以优先做。
        </p>
        <Link
          href="/business"
          className="text-sm text-accent/80 hover:text-accent transition-colors"
        >
          来微信群聊 →
        </Link>
      </motion.div>
    </section>
  );
}
