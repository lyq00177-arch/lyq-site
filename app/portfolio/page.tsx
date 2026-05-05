"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ── 顶部成就数字 ── */
const stats = [
  { n: "百万+", label: "抖音单条播放", sub: "AI 视频" },
  { n: "10w+", label: "公众号峰值", sub: "单篇阅读" },
  { n: "5w+", label: "推特单帖阅读", sub: "两条均突破" },
  { n: "品牌合作", label: "即梦 AI", sub: "Seedance 2.0" },
];

/* ── 荣誉 & 合作 ── */
const honors = [
  {
    icon: "🎖",
    title: "即梦 AI · Seedance 2.0 官方推广合作",
    desc: "即梦 AI（字节跳动旗下）Seedance 2.0 C端发布，官方主动邀约合作推广。",
    tag: "品牌合作",
  },
  {
    icon: "🥈",
    title: "AI 生图创作大赛 · 二等奖",
    desc: "参加 AI 图像生成创作比赛，从众多参赛者中脱颖而出，斩获二等奖，奖金 1000 元。",
    tag: "竞赛荣誉",
  },
];

/* ── 内容创作 ── */
const articles = [
  {
    title: "马斯克说，2026年1月是一道残酷的分界线",
    reads: "12.4w",
    tag: "时事深读",
    href: "/blog/musk-2026-turning-point",
  },
  {
    title: "投资教父芒格说，想要躺着赚钱，务必坚守这三个原则",
    reads: "1.4w",
    tag: "投资智慧",
    href: "/blog/munger-three-principles",
  },
  {
    title: "马斯克最新预言，你只剩五年时间变富",
    reads: "4,570",
    tag: "人物解析",
    href: "/blog/musk-five-years-rich",
  },
];

/* ── AI 创作图库 ── */
const gallery = [
  { src: "/works/ai-portrait-liu.png",        label: "AI 肖像 · 摇滚风" },
  { src: "/works/街头黑色电影爆发.png",       label: "街头电影感" },
  { src: "/works/ai-portrait-zhang.png",      label: "AI 肖像 · 国风" },
  { src: "/works/创意工作室手办绘制场景.png", label: "工作室场景" },
  { src: "/works/真人与迷你卡通角色肖像.png", label: "真人×卡通" },
  { src: "/works/gemini-1.png",              label: "Gemini 生成" },
  { src: "/works/南京.png",                  label: "南京" },
  { src: "/works/gemini-2.png",              label: "Gemini 生成" },
  { src: "/works/苏州.png",                  label: "苏州" },
  { src: "/works/gemini-3.png",             label: "Gemini 生成" },
  { src: "/works/无锡.png",                  label: "无锡" },
  { src: "/works/gemini-4.png",             label: "Gemini 生成" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-t-muted">
        {children}
      </span>
      <div className="flex-1 h-px bg-white/[0.04]" />
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <section className="min-h-screen px-6 sm:px-12 lg:px-20 py-24 max-w-[1000px] mx-auto">

      <Link
        href="/"
        className="text-sm text-t-muted hover:text-amber-400 transition-colors block mb-16"
      >
        ← 首页
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="font-display text-4xl sm:text-5xl text-t-primary mb-3">作品集</h1>
        <p className="text-base text-t-muted">真实发生的事情。</p>
      </motion.div>

      {/* ═══ 成就数据 ═══════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-20"
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.07 }}
            className="p-5 rounded-xl bg-card border border-white/[0.05] text-center"
          >
            <div className="font-display text-xl sm:text-2xl text-amber-400/80 mb-1 leading-tight">
              {s.n}
            </div>
            <div className="text-xs text-t-secondary mb-0.5">{s.label}</div>
            <div className="text-[10px] text-t-muted">{s.sub}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* ═══ 荣誉 & 合作 ══════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mb-20"
      >
        <SectionLabel>荣誉 & 合作</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {honors.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="p-6 rounded-xl bg-card border border-amber-500/10 hover:border-amber-500/20 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{h.icon}</span>
                <span className="text-[10px] font-mono tracking-wider text-amber-500/50 border border-amber-500/15 px-2 py-0.5 rounded">
                  {h.tag}
                </span>
              </div>
              <h3 className="text-sm font-medium text-t-secondary mb-2 leading-snug">
                {h.title}
              </h3>
              <p className="text-sm text-t-muted leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ═══ 内容创作 ══════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mb-20"
      >
        <SectionLabel>内容创作</SectionLabel>
        <div className="space-y-3">
          {articles.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.07 }}
            >
            <Link
              href={a.href}
              className="group flex items-center justify-between gap-4 p-5 rounded-xl bg-card border border-white/[0.05] hover:border-amber-500/15 transition-all duration-300"
            >
              <div className="flex items-center gap-4 min-w-0">
                <span className="shrink-0 text-[10px] font-medium tracking-wide text-amber-500/50 border border-amber-500/15 px-2 py-0.5 rounded">
                  {a.tag}
                </span>
                <span className="text-sm text-t-secondary group-hover:text-t-primary transition-colors truncate">
                  {a.title}
                </span>
              </div>
              <div className="shrink-0 flex items-center gap-4 text-xs text-t-muted">
                <span>👁 {a.reads}</span>
                <span className="text-amber-500/40 group-hover:text-amber-400 transition-colors">阅读 →</span>
              </div>
            </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ═══ AI 创作画廊 ═══════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        <SectionLabel>AI 创作</SectionLabel>

        {/* 科比视频 highlight */}
        <div className="mb-4 p-4 rounded-xl bg-card border border-white/[0.04] flex items-center gap-4">
          <span className="text-2xl shrink-0">🎬</span>
          <div>
            <p className="text-sm text-t-secondary mb-0.5">
              AI 复原科比经典扣篮 · <span className="text-amber-400/70">百万+ 播放</span>
            </p>
            <p className="text-xs text-t-muted">春节期间破圈，后因人脸版权下架。视频已不在，数字是真实的。</p>
          </div>
        </div>

        {/* 图片网格 */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
          {gallery.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.04 }}
              className="group relative aspect-square overflow-hidden rounded-lg bg-card border border-white/[0.04]"
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-107 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2.5">
                <span className="text-[11px] text-t-primary">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
