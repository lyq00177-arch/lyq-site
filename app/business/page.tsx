"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import WeChatModal from "@/components/WeChatModal";

const services = [
  {
    icon: "🧠",
    title: "AI 工具入门",
    desc: "我怎么用的，就怎么教你。三年踩坑，一个小时说清楚——工具选什么，怎么组合，从哪里开始。",
    price: "¥399 / h",
  },
  {
    icon: "₿",
    title: "加密资产从零到一",
    desc: "第一次开户，第一次入金，第一次买币。全程陪你走一遍。不踩坑比赚快钱重要。",
    price: "¥399 / h",
  },
  {
    icon: "📱",
    title: "自媒体起号陪跑",
    desc: "公众号、推特、抖音——我自己摸索过的路，帮你少绕弯子。从选题到写完到发出去，实战派。",
    price: "¥499 / h",
  },
  {
    icon: "🌐",
    title: "个人网站搭建",
    desc: "不会写代码也能做。我这个网站就是对着 Claude Code 一行行问出来的。带你全程走一遍。",
    price: "项目制，按需报价",
  },
  {
    icon: "💰",
    title: "投资认知私聊",
    desc: "不给买什么的建议。帮你搭一个框架：你的钱，应该怎么分，为什么这么分，什么时候动。",
    price: "¥499 / h",
  },
];

export default function BusinessPage() {
  return (
    <section className="min-h-screen px-6 sm:px-12 lg:px-20 py-24">
      <div className="max-w-[640px] mx-auto">

        <Link
          href="/"
          className="text-sm text-t-muted hover:text-amber-400 transition-colors block mb-16"
        >
          ← 首页
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14"
        >
          <h1 className="font-display text-4xl sm:text-5xl text-t-primary mb-4">业务</h1>
          <p className="text-lg text-t-tertiary leading-relaxed">
            社群免费开放，一对一按需约起。
          </p>
        </motion.div>

        {/* 社群 - Featured */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="p-8 rounded-2xl bg-elevated border border-amber-500/15 mb-10 relative overflow-hidden"
        >
          {/* 顶部标签 */}
          <div className="absolute top-0 right-0 px-4 py-2 bg-amber-500/10 border-l border-b border-amber-500/15 rounded-bl-xl text-xs text-amber-400/80 font-medium tracking-wide">
            长期社群
          </div>

          <div className="text-3xl mb-5">🚀</div>
          <h2 className="font-display text-2xl text-t-primary mb-3">AI 超级个体社群</h2>
          <p className="text-base text-t-tertiary leading-relaxed mb-6">
            一个小圈子，聊 AI 工具、投资逻辑、自媒体和个人成长。不是课程，不是训练营——
            是一群想把日子过得更主动的人，在一起互相看见。
          </p>

          <ul className="space-y-2 mb-8">
            {[
              "定期内容分享（工具、选题、资产配置）",
              "提问可以得到真实回复，不是客服话术",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-t-tertiary">
                <span className="text-amber-500/50 mt-0.5 shrink-0">—</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl text-amber-400">免费</span>
              <span className="text-sm text-t-muted">长期开放</span>
            </div>
            <WeChatModal
              mode="group"
              trigger={
                <button className="px-5 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium hover:bg-amber-500/20 transition-colors">
                  扫码加入群聊 →
                </button>
              }
            />
          </div>
        </motion.div>

        {/* 分割 */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[11px] font-mono tracking-[0.2em] text-t-muted uppercase">
            一对一咨询
          </span>
          <div className="flex-1 h-px bg-white/[0.04]" />
        </div>

        {/* 服务列表 */}
        <div className="space-y-3 mb-14">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start justify-between gap-4 p-6 rounded-xl bg-card border border-white/[0.05] hover:border-amber-500/15 transition-all duration-300"
            >
              <div className="flex items-start gap-4 min-w-0">
                <span className="text-2xl shrink-0 mt-0.5">{s.icon}</span>
                <div className="min-w-0">
                  <div className="text-base font-medium text-t-secondary mb-1">{s.title}</div>
                  <div className="text-sm text-t-muted leading-relaxed">{s.desc}</div>
                </div>
              </div>
              <span className="text-sm font-medium text-amber-400/70 shrink-0 ml-2 text-right">
                {s.price}
              </span>
            </motion.div>
          ))}
        </div>

        {/* 怎么约 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-10 border-t border-white/[0.05]"
        >
          <p className="text-sm text-t-muted mb-5">怎么约？</p>
          <p className="text-base text-t-tertiary leading-relaxed mb-6">
            加我微信说你想聊什么，我会告诉你适不适合做、怎么安排。不需要提前准备什么，直接说你的情况就好。
          </p>
          <Link
            href="/connect"
            className="inline-flex items-center gap-2 text-sm text-amber-500/70 hover:text-amber-400 transition-colors"
          >
            找到我的联系方式 →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
