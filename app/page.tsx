"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import WeChatModal from "@/components/WeChatModal";
import { ToolCard } from "@/components/Card";

const sealChars = ["超", "级", "个", "体"];

const navModules = [
  { href: "/story",    icon: "◎", label: "我的故事",   desc: "从打工人到数字创作者的真实路径" },
  { href: "/moe",      icon: "▲", label: "关于我",     desc: "我相信什么，我不相信什么" },
  { href: "/portfolio",icon: "◈", label: "作品集",     desc: "百万播放、公众号、AI 创作" },
  { href: "/gallery", icon: "◆", label: "AI 画廊",    desc: "提示词工程 · 视觉创作集" },
  { href: "/business", icon: "◇", label: "合作业务",   desc: "咨询、建站、AI 入门陪跑" },
  { href: "/learn",    icon: "⬡", label: "入门指南",   desc: "AI / 加密 / 自媒体 · 从零开始" },
];

const proofStats = [
  { n: "12.4w", label: "单篇阅读", sub: "公众号峰值" },
  { n: "百万+", label: "单条播放", sub: "AI 视频" },
  { n: "3年", label: "All in AI", sub: "2023 至今" },
  { n: "品牌合作", label: "即梦 AI", sub: "Seedance 2.0" },
];

const featuredTools = [
  { icon: "📊", title: "复利计算器", desc: "定投多少年能翻倍？可视化复利威力", href: "/tools/apy" },
  { icon: "🎯", title: "仓位管理", desc: "控制风险，计算最优开仓量", href: "/tools/first-million" },
  { icon: "😱", title: "恐慌贪婪指数", desc: "市场情绪一眼看清，辅助买卖决策", href: "/tools/hourly-wage" },
];

const featuredPosts = [
  { title: "马斯克说，2026年1月是一道残酷的分界线", tag: "时事深读", reads: "12.4w", href: "/blog/musk-2026-turning-point" },
  { title: "投资教父芒格说，想要躺着赚钱，务必坚守这三个原则", tag: "投资智慧", reads: "1.4w", href: "/blog/munger-three-principles" },
  { title: "马斯克最新预言，你只剩五年时间变富", tag: "人物解析", reads: "4,570", href: "/blog/musk-five-years-rich" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-5 mb-10">
      <span className="text-xs font-medium tracking-[0.2em] uppercase text-t-muted">
        {children}
      </span>
      <div className="flex-1 h-px bg-white/[0.04]" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen px-8 sm:px-14 lg:px-20 xl:px-28 py-24 max-w-[1400px] mx-auto overflow-hidden">

      {/* ═══ Ambient glow blobs ═══ */}
      <div className="ambient-glow -top-32 left-1/4 w-[600px] h-[600px] bg-[rgb(var(--accent)_/_0.06)]" />
      <div className="ambient-glow top-40 -right-20 w-[400px] h-[400px] bg-[rgb(var(--accent)_/_0.03)]" />
      <div className="ambient-glow top-[800px] left-0 w-[500px] h-[300px] bg-[rgb(var(--accent)_/_0.04)]" />

      {/* ═══ HERO ═══════════════════════════════════════ */}
      <div className="relative flex gap-10 sm:gap-16 lg:gap-20 mb-24 items-start">

        {/* ── 左柱：2×2 印章 ── */}
        <div className="relative flex-shrink-0">
          {/* 动画金线 */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            style={{ originY: 0 }}
            className="absolute -left-5 top-2 bottom-0 w-px bg-gradient-to-b from-amber-400/70 via-amber-500/20 to-transparent"
          />
          {/* 2×2 印章网格 */}
          <div className="grid grid-cols-2 select-none">
            {sealChars.map((char, i) => (
              <motion.span
                key={char}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[3.2rem] sm:text-[4.5rem] lg:text-[5.8rem] xl:text-[7rem] leading-none text-[#e8e3d8] tracking-tight flex items-center justify-center w-[1em] h-[1em]"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* ── 右侧：内容区 ── */}
        <div className="flex-1 min-w-0 pt-3 sm:pt-6 lg:pt-10 flex flex-col gap-8">

          {/* 名字署名 */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-baseline gap-3 mb-1">
              <p className="font-display text-2xl sm:text-3xl text-[#d4a853]">Harry</p>
              <span className="text-[#3a3428]">/</span>
              <p className="font-display text-xl sm:text-2xl text-[#7a746c]">凌逸清</p>
            </div>
            <p className="text-sm text-[#5a5450] tracking-widest uppercase">
              AI 创作者 · 投资人
            </p>
          </motion.div>

          {/* 简介 */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-base sm:text-lg text-[#7a746c] leading-relaxed max-w-sm"
          >
            从 ChatGPT 元年开始，用三年时间把 AI 塞进工作流的每一个角落。
            文科生，合同工，写字的人。
          </motion.p>

          {/* ── 微信入口（点击弹出微信号） ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <WeChatModal
              trigger={
                <div className="inline-flex items-center gap-4 self-start px-5 py-4 rounded-2xl bg-card border border-accent/15 hover:border-accent/35 hover:bg-elevated transition-all duration-300 group cursor-pointer">
                  <div className="relative flex items-center justify-center w-9 h-9">
                    <motion.span
                      animate={{ scale: [1, 1.7, 1.7], opacity: [0.5, 0, 0] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full bg-green-400/40"
                    />
                    <motion.span
                      animate={{ scale: [1, 1.4, 1.4], opacity: [0.4, 0, 0] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
                      className="absolute inset-0 rounded-full bg-green-400/25"
                    />
                    <span className="relative text-xl">💬</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-t-primary group-hover:text-accent transition-colors">
                      加我微信
                    </p>
                    <p className="text-xs text-t-muted">聊 AI · 聊投资 · 聊人生</p>
                  </div>
                  <motion.span
                    className="ml-auto text-t-muted group-hover:text-accent/60 transition-colors text-lg"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </div>
              }
            />
          </motion.div>

        </div>

        {/* ── 头像（右上角，仅大屏） ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hidden xl:block shrink-0 pt-4"
        >
          <img
            src="/avatar.jpg"
            alt="Harry"
            className="w-28 h-28 rounded-2xl object-cover border border-white/5 grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </div>

      {/* ═══ 分割线 ════════════════════════════════════ */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.9, duration: 1, ease: [0.76, 0, 0.24, 1] }}
        style={{ originX: 0 }}
        className="h-px bg-gradient-to-r from-amber-500/30 via-white/5 to-transparent mb-16"
      />

      {/* ═══ 导航模块 ════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        <SectionLabel>探索</SectionLabel>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {navModules.map((m, i) => (
            <motion.div
              key={m.href}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.07 }}
            >
              <Link
                href={m.href}
                className="group flex flex-col gap-3 p-5 rounded-xl bg-card border border-[rgb(var(--border)_/_var(--border-opacity))] hover:border-accent/20 hover:bg-elevated transition-all duration-300 h-full"
              >
                <span className="text-lg text-accent/50 group-hover:text-accent transition-colors">
                  {m.icon}
                </span>
                <div>
                  <div className="text-sm font-medium text-t-secondary group-hover:text-t-primary transition-colors mb-1">
                    {m.label}
                  </div>
                  <div className="text-xs text-t-muted leading-relaxed">
                    {m.desc}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ═══ 数据证明 ════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-24"
      >
        <SectionLabel>真实数据</SectionLabel>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {proofStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-xl bg-card border border-[rgb(var(--border)_/_var(--border-opacity))] text-center"
            >
              <div className="font-display text-xl sm:text-2xl text-accent/80 mb-1 leading-tight">
                {s.n}
              </div>
              <div className="text-xs text-t-secondary mb-0.5">{s.label}</div>
              <div className="text-[10px] text-t-muted">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ═══ 精选工具 ════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <SectionLabel>实用工具</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {featuredTools.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <ToolCard {...t} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ═══ 精选内容 ════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <SectionLabel>精选文章</SectionLabel>
        <div className="space-y-2.5">
          {featuredPosts.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <Link
                href={a.href}
                className="group flex items-center justify-between gap-4 p-4 sm:p-5 rounded-xl bg-card border border-[rgb(var(--border)_/_var(--border-opacity))] hover:border-accent/15 transition-all duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <span className="shrink-0 text-[10px] font-medium tracking-wide text-accent/50 border border-accent/15 px-2 py-0.5 rounded">
                    {a.tag}
                  </span>
                  <span className="text-sm text-t-secondary group-hover:text-t-primary transition-colors truncate">
                    {a.title}
                  </span>
                </div>
                <div className="shrink-0 flex items-center gap-3 sm:gap-4 text-xs text-t-muted">
                  <span>👁 {a.reads}</span>
                  <span className="text-accent/40 group-hover:text-accent transition-colors">阅读 →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ═══ 签名小字 ════════════════════════════════════ */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-24 text-xs text-t-muted/40 italic"
      >
        「从 ChatGPT 元年起，All in AI 至今」
      </motion.p>

    </main>
  );
}
