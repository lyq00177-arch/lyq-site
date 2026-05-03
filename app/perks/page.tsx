"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { PerkCard } from "@/components/Card";

interface Perk {
  name: string;
  benefit?: string;
  desc: string;
  link: string;
  tutorialLink?: string;
  code?: string;
}

interface Category {
  id: string;
  emoji: string;
  title: string;
  perks: Perk[];
}

const categories: Category[] = [
  {
    id: "crypto",
    emoji: "₿",
    title: "加密交易所",
    perks: [
      {
        name: "币安 Binance",
        benefit: "永久 20% 手续费减免",
        desc: "全球最大加密交易所，流动性最佳，支持合约/现货/理财。",
        link: "https://www.bsmkweb.cc/register?ref=QQQAK",
        code: "QQQAK",
      },
      {
        name: "欧易 OKX",
        benefit: "永久 20% 手续费减免",
        desc: "中文界面友好，适合新手入门，Web3 功能完善。",
        link: "https://www.nzdcvhpxqwy.com/join/29652064",
        code: "29652064",
      },
      {
        name: "Bitget",
        benefit: "20% 手续费减免 + 新人专属活动",
        desc: "跟单交易平台领先，适合学习跟随高手操作。",
        link: "https://web3.bgw.live/share/1vR9rS?inviteCode=2Jeyhw",
        code: "2Jeyhw",
      },
    ],
  },
  {
    id: "ai",
    emoji: "🤖",
    title: "AI 工具",
    perks: [
      {
        name: "YouMind",
        benefit: "专属注册福利",
        desc: "AI 知识管理 + 图片生成，适合内容创作者。",
        link: "https://youmind.com/invite/46OW6F",
        code: "46OW6F",
      },
      {
        name: "Claude Pro",
        desc: "最强推理和写作能力，我每天主力工具。",
        link: "https://claude.ai",
      },
      {
        name: "Cursor",
        desc: "AI 代码编辑器，不会写代码也能建站，门槛极低。",
        link: "https://cursor.com",
      },
    ],
  },
  {
    id: "api",
    emoji: "🔌",
    title: "AI 周边",
    perks: [
      {
        name: "OpenClaw API 中转站",
        benefit: "国内直连 Claude / GPT",
        desc: "稳定访问 Claude、GPT-4o 等主流模型的 API 中转服务，价格透明，适合开发者和重度 AI 用户。",
        link: "https://openclaw-api.com/register?aff=TMSWGAVB",
        code: "TMSWGAVB",
      },
    ],
  },
];

export default function PerksPage() {
  const [activeId, setActiveId] = useState(categories[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // 监听滚动，高亮对应分类
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    Object.values(sectionRefs.current).forEach(el => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">
            专属<span className="gradient-text">福利</span>
          </h1>
          <p className="text-t-tertiary">通过以下链接注册，你我都能获得额外奖励</p>
        </motion.div>

        <div className="flex gap-8 items-start">

          {/* Left sticky sidebar */}
          <aside className="hidden lg:block w-48 shrink-0 sticky top-24 self-start">
            <p className="text-xs font-mono tracking-widest text-t-muted uppercase mb-3">分类导航</p>
            <nav className="flex flex-col gap-1">
              {categories.map(cat => {
                const isActive = activeId === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => scrollTo(cat.id)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-left transition-all duration-200 ${
                      isActive
                        ? "bg-accent/15 text-accent border border-accent/25"
                        : "text-t-tertiary hover:text-t-primary hover:bg-elevated"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-base">{cat.emoji}</span>
                      <span className="font-medium">{cat.title}</span>
                    </span>
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-accent/20 text-accent" : "bg-surface text-t-muted"
                    }`}>
                      {cat.perks.length}
                    </span>
                  </button>
                );
              })}
            </nav>

            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <p className="text-xs text-t-muted leading-relaxed">
                以上链接包含推荐码，你的费用不会增加，我会获得少量佣金。感谢支持！
              </p>
            </div>
          </aside>

          {/* Right content */}
          <div className="flex-1 min-w-0 space-y-14">
            {categories.map((cat, ci) => (
              <motion.section
                key={cat.id}
                id={cat.id}
                ref={el => { sectionRefs.current[cat.id] = el; }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.08 }}
              >
                <h2 className="text-xl font-bold text-t-primary mb-5 flex items-center gap-3">
                  <span className="text-2xl">{cat.emoji}</span>
                  {cat.title}
                  <span className="text-sm font-normal text-t-muted">{cat.perks.length} 个</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {cat.perks.map((perk, pi) => (
                    <motion.div
                      key={perk.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: pi * 0.06 }}
                    >
                      <PerkCard {...perk} />
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            ))}

            {/* Mobile disclaimer */}
            <p className="lg:hidden mt-8 text-xs text-t-muted text-center leading-relaxed">
              以上链接包含推荐码，你的费用不会增加，但我会获得少量佣金。感谢支持！
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
