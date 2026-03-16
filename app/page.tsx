"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const sealChars = ["超", "级", "个", "体"];

const navModules = [
  { href: "/story",    icon: "◎", label: "我的故事",   desc: "从打工人到数字创作者的真实路径" },
  { href: "/moe",      icon: "▲", label: "关于我",     desc: "我相信什么，我不相信什么" },
  { href: "/portfolio",icon: "◈", label: "作品集",     desc: "百万播放、公众号、AI 创作" },
  { href: "/business", icon: "◇", label: "合作业务",   desc: "咨询、建站、AI 入门陪跑" },
  { href: "/learn",    icon: "⬡", label: "入门指南",   desc: "AI / 加密 / 自媒体 · 从零开始" },
  { href: "#wechat",   icon: "◉", label: "加我微信",   desc: "直接聊，比表单快" },
];

export default function Home() {
  return (
    <main className="min-h-screen px-8 sm:px-14 lg:px-20 xl:px-28 py-24 max-w-[1400px] mx-auto">

      {/* ═══ HERO ═══════════════════════════════════════ */}
      <div className="flex gap-10 sm:gap-16 lg:gap-20 mb-24 items-start">

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

          {/* ── 微信入口（凸显） ── */}
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            href="https://mp.weixin.qq.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 self-start px-5 py-4 rounded-2xl bg-[#1a1a1a] border border-amber-500/15 hover:border-amber-500/35 hover:bg-[#1f1f1f] transition-all duration-300 group cursor-pointer"
          >
            {/* 微信图标 + 呼吸光圈 */}
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
              <p className="text-sm font-semibold text-[#e8e3d8] group-hover:text-amber-300 transition-colors">
                加我微信
              </p>
              <p className="text-xs text-[#5a5450]">聊 AI · 聊投资 · 聊人生</p>
            </div>
            <motion.span
              className="ml-auto text-[#3a3428] group-hover:text-amber-500/60 transition-colors text-lg"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.a>

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
        <div className="flex items-center gap-5 mb-10">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#4a4440]">
            探索
          </span>
          <div className="flex-1 h-px bg-white/[0.04]" />
        </div>

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
                className="group flex flex-col gap-3 p-5 rounded-xl bg-[#111111] border border-white/[0.05] hover:border-amber-500/20 hover:bg-[#141414] transition-all duration-300 h-full"
              >
                <span className="text-lg text-amber-500/50 group-hover:text-amber-400 transition-colors">
                  {m.icon}
                </span>
                <div>
                  <div className="text-sm font-medium text-[#c8c2b8] group-hover:text-[#e8e3d8] transition-colors mb-1">
                    {m.label}
                  </div>
                  <div className="text-xs text-[#4a4440] leading-relaxed">
                    {m.desc}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ═══ 签名小字 ════════════════════════════════════ */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-20 text-xs text-[#2e2a24] italic"
      >
        「从 ChatGPT 元年起，All in AI 至今」
      </motion.p>

    </main>
  );
}
