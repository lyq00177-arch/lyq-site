"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import WeChatModal from "@/components/WeChatModal";
import { ToolCard } from "@/components/Card";
import { CountUp } from "@/components/CountUp";
import InvestPulse from "@/components/InvestPulse";

const sealChars = ["超", "级", "个", "体"];

const navModules = [
  { href: "/moe",      icon: "▲", label: "关于我",     desc: "我相信什么，我不相信什么" },
  { href: "/ai",       icon: "◆", label: "AI 学习",    desc: "工具 · 提示词 · 画廊三件套" },
  { href: "/learn",    icon: "◇", label: "投资认知",   desc: "复利、加密、长期主义" },
  { href: "/tools",    icon: "⬡", label: "工具箱",     desc: "8 个计算器，复利到合约" },
  { href: "/business", icon: "◎", label: "聊聊",       desc: "一对一咨询 · 社群闲聊" },
  { href: "/blog",     icon: "◈", label: "博客",       desc: "公众号精选 + 长文随笔" },
];

const proofStats = [
  { n: "10w+", label: "单篇阅读", sub: "公众号峰值" },
  { n: "百万+", label: "单条播放", sub: "AI 视频" },
  { n: "3年", label: "All in AI", sub: "2023 至今" },
  { n: "品牌合作", label: "即梦 AI", sub: "Seedance 2.0" },
];

const featuredTools = [
  { icon: "📊", title: "复利计算器", desc: "定投多少年能翻倍？可视化复利威力", href: "/tools/compound" },
  { icon: "🎯", title: "仓位管理", desc: "控制风险，计算最优开仓量", href: "/tools/position-size" },
  { icon: "⏳", title: "财富时光机", desc: "输入资产和年限，看复利把钱变成什么样", href: "/tools/wealth-machine" },
];

const featuredPosts = [
  { title: "马斯克说，2026年1月是一道残酷的分界线", tag: "时事深读", reads: "12.4w", href: "/blog/musk-2026-turning-point" },
  { title: "投资教父芒格说，想要躺着赚钱，务必坚守这三个原则", tag: "投资智慧", reads: "1.4w", href: "/blog/munger-three-principles" },
  { title: "马斯克最新预言，你只剩五年时间变富", tag: "人物解析", reads: "4,570", href: "/blog/musk-five-years-rich" },
];

/** 小节标签 —— 轻量灰字，用于次要区块 */
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

/** 大节标题 —— Playfair 展示字 + 小标签，用于重点区块做视觉锚点 */
function SectionHead({
  label,
  title,
  action,
}: {
  label: string;
  title: React.ReactNode;
  action?: { href: string; label: string };
}) {
  return (
    <div className="flex items-end justify-between gap-4 mb-8 sm:mb-10">
      <div>
        <span className="block text-[11px] font-medium tracking-[0.2em] uppercase text-accent/60 mb-2.5">
          {label}
        </span>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.6rem] text-t-primary leading-tight">
          {title}
        </h2>
      </div>
      {action && (
        <Link
          href={action.href}
          className="group shrink-0 inline-flex items-center gap-1.5 text-xs sm:text-sm text-t-muted hover:text-accent transition-colors pb-1.5"
        >
          {action.label}
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      )}
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

      {/* 篆刻印框做旧滤镜 #seal-rough 已定义在 layout.tsx 的服务端 svg 中（client 组件内渲染 SVG filter 会 hydration mismatch），此处仅 url(#seal-rough) 引用 */}

      {/* ═══ HERO ═══════════════════════════════════════ */}
      <div className="relative flex flex-col sm:flex-row gap-9 sm:gap-16 lg:gap-20 mb-24 items-start">

        {/* ── 左柱：2×2 印章 ── */}
        <div className="relative flex-shrink-0">
          {/* 动画金线（盖章后生长） */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.76, 0, 0.24, 1] }}
            style={{ originY: 0 }}
            className="absolute -left-5 top-2 bottom-0 w-px bg-gradient-to-b from-amber-400/70 via-amber-500/20 to-transparent"
          />
          {/* 2×2 印章网格 */}
          <div className="relative grid grid-cols-2 select-none">
            {/* 朱红篆刻印框 —— 盖章落定瞬间「啪」地浮现，滤镜做出刀刻残破边 */}
            <motion.div
              initial={{ opacity: 0, scale: 1.45, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.72, duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
              className="pointer-events-none absolute -inset-2.5 sm:-inset-3.5 border-[3px] border-[#b23b32]/55"
              style={{ filter: "url(#seal-rough)", borderRadius: "2px" }}
            />
            {sealChars.map((char, i) => (
              <motion.span
                key={char}
                initial={{ opacity: 0, scale: 1.7, filter: "blur(5px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.12 + i * 0.1, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                className="font-display text-[3.4rem] sm:text-[4.5rem] lg:text-[5.8rem] xl:text-[7rem] leading-none text-t-primary tracking-tight flex items-center justify-center w-[1em] h-[1em]"
              >
                {char}
              </motion.span>
            ))}

            {/* 右下角钤印 —— 签名落款式的小红方印 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.4, rotate: -14 }}
              animate={{ opacity: 1, scale: 1, rotate: -4 }}
              transition={{ delay: 1.05, duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
              className="pointer-events-none absolute -bottom-3.5 -right-3.5 sm:-bottom-4 sm:-right-4 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-[3px] bg-[#b23b32]/90 shadow-md shadow-black/40"
            >
              <span className="font-display text-base sm:text-lg text-[#f7ece1] leading-none">凌</span>
            </motion.div>
          </div>
        </div>

        {/* ── 右侧：内容区 ── */}
        <div className="flex-1 min-w-0 pt-1 sm:pt-6 lg:pt-10 flex flex-col gap-7 sm:gap-8">

          {/* 名字署名 */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
          >
            <div className="flex items-baseline gap-3 mb-1">
              <p className="font-display text-2xl sm:text-3xl text-accent">Harry</p>
              <span className="text-[#3a3428]">/</span>
              <p className="font-display text-xl sm:text-2xl text-t-tertiary">凌逸清</p>
            </div>
            <p className="text-sm text-t-muted tracking-widest uppercase">
              AI 创作者 · 投资人
            </p>
          </motion.div>

          {/* 简介 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="space-y-2 max-w-sm"
          >
            <p className="text-base sm:text-lg text-t-tertiary leading-relaxed">
              一个从常州出发的超级个体实践者。
            </p>
            <p className="text-base sm:text-lg text-t-tertiary leading-relaxed">
              白天在现实系统里工作，晚上用 AI、投资和自媒体，搭建自己的第二套人生系统。
            </p>
            <p className="text-base sm:text-lg text-t-secondary leading-relaxed">
              我踩过的 AI 与投资的坑，都变成了这里的工具、认知和实战记录——你可以少走一遍。
            </p>
            <p className="text-sm text-t-muted leading-relaxed">
              我不预测未来，我只把自己放进未来里试一遍。
            </p>
          </motion.div>

          {/* ── 微信入口（点击弹出微信号） ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.6 }}
          >
            <WeChatModal
              trigger={
                <div className="inline-flex items-center gap-4 self-start px-5 py-4 rounded-2xl bg-card border border-accent/15 hover:border-accent/35 hover:bg-elevated transition-all duration-300 group cursor-pointer">
                  <div className="relative flex items-center justify-center w-9 h-9 shrink-0">
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
                    <p className="text-sm font-semibold text-t-primary group-hover:text-accent transition-colors whitespace-nowrap">
                      扫码加我微信
                    </p>
                    <p className="text-xs text-t-muted whitespace-nowrap">聊 AI · 聊投资 · 聊人生</p>
                  </div>
                  <motion.span
                    className="ml-auto pl-2 text-t-muted group-hover:text-accent/60 transition-colors text-lg"
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
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hidden xl:block shrink-0 pt-4"
        >
          <Image
            src="/avatar.webp"
            alt="Harry"
            width={224}
            height={224}
            priority
            className="w-28 h-28 rounded-2xl object-cover border border-white/5 grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </div>

      {/* ═══ 分割线 ════════════════════════════════════ */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.25, duration: 1, ease: [0.76, 0, 0.24, 1] }}
        style={{ originX: 0 }}
        className="h-px bg-gradient-to-r from-amber-500/30 via-white/5 to-transparent mb-16"
      />

      {/* ═══ 导航模块 ════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.35, duration: 0.6 }}
      >
        <SectionLabel>探索</SectionLabel>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {navModules.map((m, i) => (
            <motion.div
              key={m.href}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.45 + i * 0.07 }}
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

      {/* ═══ 投资追踪（活数据大卡） ════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mt-28"
      >
        <SectionHead
          label="投资追踪 · Live"
          title={<>盯着<span className="text-accent">真金白银</span>的地方</>}
          action={{ href: "/etf", label: "全部投资页" }}
        />
        <InvestPulse />
      </motion.div>

      {/* ═══ 数据证明（count-up 大字） ════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mt-28"
      >
        <SectionHead
          label="真实数据 · Proof"
          title={<>不是 PPT，是<span className="text-accent">跑出来的数字</span></>}
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-white/[0.05] border border-white/[0.05]">
          {proofStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card px-5 py-9 sm:py-11 text-center"
            >
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl text-accent mb-2 leading-none tabular-nums">
                <CountUp value={s.n} />
              </div>
              <div className="text-sm text-t-secondary">{s.label}</div>
              <div className="text-[11px] text-t-muted mt-1">{s.sub}</div>
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
        className="mt-24"
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

      {/* ═══ 精选内容（杂志式） ════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mt-28"
      >
        <SectionHead
          label="精选文章 · Writing"
          title={<>那些被<span className="text-accent">10 万人读过</span>的字</>}
          action={{ href: "/blog", label: "全部文章" }}
        />
        <div className="border-t border-white/[0.06]">
          {featuredPosts.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href={a.href}
                className="group flex items-center gap-4 sm:gap-6 py-5 sm:py-6 border-b border-white/[0.06] transition-colors"
              >
                <span className="font-display text-xl sm:text-2xl text-accent/25 group-hover:text-accent/70 tabular-nums w-8 sm:w-10 shrink-0 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-[10px] font-medium tracking-wide text-accent/60 border border-accent/15 px-2 py-0.5 rounded">
                      {a.tag}
                    </span>
                    <span className="text-[11px] text-t-muted">👁 {a.reads}</span>
                  </div>
                  <h3 className="font-display text-base sm:text-xl text-t-secondary group-hover:text-t-primary leading-snug transition-colors">
                    {a.title}
                  </h3>
                </div>
                <span className="shrink-0 text-t-muted group-hover:text-accent group-hover:translate-x-1 transition-all text-lg">
                  →
                </span>
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
