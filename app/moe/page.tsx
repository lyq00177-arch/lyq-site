"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import WeChatModal from "@/components/WeChatModal";

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
      "有一段时间我以为，准备好了再说。后来发现不是这样的：你不说，别人不知道你懂这个。说出去，最坏是被嘲笑，最好是被人记住你的能力。",
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
    <section className="min-h-screen px-4 sm:px-6 lg:px-12 py-24">
      <div className="max-w-6xl mx-auto">

        {/* ── Hero: 两列大头像布局 ── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-20 items-start">

          {/* 左列：大照片 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[42%] shrink-0 relative"
          >
            {/* 照片容器 */}
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:max-w-none shadow-2xl">
              <Image
                src="/avatar.jpg"
                alt="凌逸清 Harry"
                fill
                className="object-cover object-top"
                priority
              />
              {/* 底部渐变遮罩 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* 悬浮徽章：左下角 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 shadow-lg"
            >
              <p className="text-xs text-t-muted mb-0.5">内容创作</p>
              <p className="text-sm font-semibold text-t-primary">从 2022 开始</p>
            </motion.div>

            {/* 悬浮徽章：右上角 */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-4 right-4 bg-card/90 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 shadow-lg"
            >
              <p className="text-xs text-t-muted mb-0.5">公众号</p>
              <p className="text-lg font-bold text-accent">10w+ 作者</p>
            </motion.div>
          </motion.div>

          {/* 右列：Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 pt-2"
          >
            {/* 标签行 */}
            <div className="flex flex-wrap gap-2 mb-5">
              {["AI 实践", "投资", "内容创作"].map(tag => (
                <span
                  key={tag}
                  className="text-xs font-mono tracking-widest text-accent border border-accent/25 px-3 py-1 rounded-full bg-accent/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-display text-4xl sm:text-5xl text-t-primary mb-2">
              凌逸清
            </h1>
            <p className="text-lg text-t-tertiary mb-6 leading-relaxed">
              超级个体 · AI × 投资 × 自媒体
            </p>

            <div className="space-y-4 text-t-secondary leading-relaxed mb-8">
              <p>
                我理解的超级个体，不是一个人什么都会。而是一个普通人，借助 AI、投资和内容，把自己的能力放大到原本不可能到达的地方。
              </p>
              <div className="space-y-1 py-2 border-l-2 border-accent/25 pl-4">
                <p className="text-t-primary font-medium">AI 是生产力。</p>
                <p className="text-t-primary font-medium">投资是判断力。</p>
                <p className="text-t-primary font-medium">自媒体是影响力。</p>
              </div>
              <p>三件事合在一起，就是我正在搭建的个人系统。</p>
              <div className="space-y-3 pt-1">
                <p><span className="text-t-primary font-medium">AI：</span>我不是程序员，但 AI 让我拥有了接近工程师、编辑、分析师、设计师的能力。</p>
                <p><span className="text-t-primary font-medium">投资：</span>我不提供答案，只训练自己理解世界、控制欲望、管理风险。</p>
                <p><span className="text-t-primary font-medium">自媒体：</span>我把自己暴露到外界视野里，让能力有机会被看见。</p>
              </div>
            </div>

            {/* 统计数据行 */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/[0.06] mb-8">
              {stats.map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl text-accent mb-1">{stat.n}</div>
                  <div className="text-xs text-t-muted">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* 荣誉 */}
            <div className="space-y-2 mb-8">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-accent/10">
                <span className="text-xl shrink-0">🎖</span>
                <div>
                  <p className="text-sm font-medium text-t-primary">即梦 AI · Seedance 2.0 官方推广合作</p>
                  <p className="text-xs text-t-muted">字节跳动旗下，官方主动邀约</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-white/[0.05]">
                <span className="text-xl shrink-0">🥈</span>
                <div>
                  <p className="text-sm font-medium text-t-primary">AI 生图创作大赛 · 二等奖</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-3 flex-wrap">
              <WeChatModal
                mode="official"
                trigger={
                  <button className="px-5 py-2.5 rounded-xl bg-accent text-[#0a0a0a] text-sm font-semibold hover:opacity-90 transition-opacity">
                    关注公众号
                  </button>
                }
              />
              <Link
                href="/business"
                className="px-5 py-2.5 rounded-xl border border-accent/30 text-accent text-sm font-semibold hover:bg-accent/10 transition-colors"
              >
                业务合作
              </Link>
              <Link
                href="/story"
                className="px-5 py-2.5 rounded-xl border border-white/[0.08] text-t-secondary text-sm font-semibold hover:text-accent hover:border-accent/20 transition-colors"
              >
                我的故事 →
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 分割线 */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ originX: 0 }}
          className="h-px bg-gradient-to-r from-accent/20 to-transparent mb-16"
        />

        {/* ── 信条部分（保留原内容）── */}
        <div className="max-w-[640px] space-y-16 mb-20">
          {beliefs.map((belief) => (
            <motion.div
              key={belief.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] font-mono tracking-widest text-accent/50 border border-accent/15 px-2.5 py-1 rounded shrink-0">
                  {belief.tag}
                </span>
                <h2 className="font-display text-xl text-t-secondary">{belief.title}</h2>
              </div>
              <div className="space-y-4">
                {belief.body.map((para, j) => (
                  <p key={j} className="text-lg text-t-tertiary leading-relaxed">{para}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── 工具栈 ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-[640px]"
        >
          <p className="text-[11px] font-mono tracking-[0.2em] text-t-muted uppercase mb-5">
            工具栈
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool.name}
                className="px-3 py-1.5 rounded-lg bg-card border border-white/[0.05] text-sm text-t-secondary"
              >
                {tool.name}
                <span className="ml-2 text-xs text-t-muted">{tool.cat}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── 故事入口 ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-[640px] mt-16 pt-10 border-t border-white/[0.05]"
        >
          <p className="text-sm text-t-muted mb-4">想了解我是怎么走到这里的？</p>
          <Link
            href="/story"
            className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all duration-200 text-sm font-medium"
          >
            读完整故事 →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
