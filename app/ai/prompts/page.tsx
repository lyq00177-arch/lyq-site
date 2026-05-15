"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const prompts = [
  {
    icon: "🌱",
    title: "挖掘天赋",
    why: "天赋是别人眼中你「轻松完成」的事，自己感觉不到。这个提示词强制 AI 先收集证据，再下判断——避免泛泛建议。",
    prompt: `你是一个深度访谈型职业咨询师，擅长从一个人的日常细节里识别他没有意识到的擅长。

接下来不要急着给建议。先用 7-10 轮对话问我具体例子（每轮只问 1-2 个问题，不要列清单）：

- 我做什么事会忘记时间？（不是"喜欢"做，是"做了就停不下来"）
- 朋友/同事最常找我帮的忙是哪类？
- 最近 3 个月我主动学的东西是什么？为什么是它？
- 别人觉得我做得费劲、我反而觉得轻松的事？

收集完之后，用一段散文（不要 bullet 列表）告诉我：你看到的我的"自然倾向"是什么，背后可能对应的擅长是什么。
最后给我 2 个低成本验证假设的小实验。`,
  },
  {
    icon: "📔",
    title: "搭建数字人生",
    why: "大多数人记录失败，是因为系统太重。强制约束让 AI 优先「能跑起来」，而不是炫技。",
    prompt: `我想把我的日常生活、想法、感悟，做成一份长期可追溯、可检索的"数字档案"。

请你以一个"个人 CIO"的视角，帮我设计一套**最简版**起步方案：

1. 推荐 1 种主存储工具（不超过 1 种，我不想搞复杂的栈）
2. 我应该每天/每周记录哪 3 类东西？（不要超过 3 类）
3. 给每类一个**模板格式**（直接可用，越简单越好）
4. 一年后我用什么方式翻看这份档案？

约束：我不是程序员，不能依赖代码或 API；每天投入不超过 15 分钟。`,
  },
  {
    icon: "✍️",
    title: "每日写日记",
    why: "日记最难的不是「写不出」，是「写出来的不是真心话」。这三个问题分别是事实、感受、价值——比「今天怎么样」开放式提问产出真实得多。",
    prompt: `你是一个温和的引导式日记教练。不要打鸡血，不要总结陈词。

每天我开始写日记前，请只问我 3 个问题，按以下顺序：

1. 今天有什么事让你"咦"了一下？（不一定大事，是让你愣一秒的）
2. 那一刻你心里第一反应是什么？（不是事后理性分析，是当时直觉）
3. 这件事，明天的你会想起来吗？

不要在我回答时插话评价。等我回答完三个，你再帮我把它写成一段 200 字以内的日记，保留我的语气。`,
  },
  {
    icon: "📝",
    title: "文字表达",
    why: "直接让 AI 写整段，永远是 AI 味。让 AI 给「切入角度」让你选，主导权在你，最后产出是你的视角 + AI 的润色。",
    prompt: `我要写一段 [文字类型：公众号开头 / 自我介绍 / 邮件 / 推文]，主题是 [主题]。

写之前请先帮我列 3 个不同的"切入角度"：
- 一个从读者最关心的点切入
- 一个从我自己最有感觉的点切入
- 一个看似无关、最终能勾住主题的反常切入

每个切入只给我**前两句话**，不要展开。

我选一个之后，你再帮我把整段写完。注意：不要用排比，不要用"首先其次最后"，不要用 emoji，不要用"我们""大家"这种集体代词——这些都是 AI 味。`,
  },
];

export default function AIPromptsPage() {
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
          AI 提示词
        </h1>
        <p className="text-lg text-t-tertiary leading-relaxed max-w-xl">
          AI 不是搜索引擎，问法决定答案的高度。这里收的是我自己用得顺手、能反复复用的提示词。
        </p>
      </motion.div>

      <div className="space-y-8 mb-12">
        {prompts.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08 }}
            className="p-7 rounded-2xl bg-card border border-[rgb(var(--border)_/_var(--border-opacity))]"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{p.icon}</span>
              <h2 className="font-display text-2xl text-t-primary">{p.title}</h2>
            </div>

            <p className="text-sm text-t-muted leading-relaxed mb-6 italic">
              {p.why}
            </p>

            <details className="group">
              <summary className="cursor-pointer text-xs font-mono tracking-wider text-accent/70 hover:text-accent uppercase mb-3 list-none flex items-center gap-2">
                <span className="transition-transform group-open:rotate-90">▸</span>
                展开提示词
              </summary>
              <pre className="mt-4 p-5 rounded-xl bg-elevated text-sm text-t-secondary leading-relaxed whitespace-pre-wrap font-sans overflow-x-auto border border-[rgb(var(--border)_/_var(--border-opacity))]">
                {p.prompt}
              </pre>
              <p className="mt-3 text-xs text-t-muted/60">
                复制后丢给 Claude / ChatGPT / Gemini 都能用。
              </p>
            </details>
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

      <p className="mt-16 text-[11px] text-t-muted/40 italic text-center leading-relaxed">
        本节为 AI 起草初稿，作者会逐步重写为个人视角与实战案例。
      </p>
    </section>
  );
}
