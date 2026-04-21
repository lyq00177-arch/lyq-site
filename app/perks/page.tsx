"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PerkCard } from "@/components/Card";

interface Perk {
  name: string;
  desc: string;
  link: string;
  tutorialLink?: string;
  code?: string;
}

interface Category {
  emoji: string;
  title: string;
  perks: Perk[];
}

const categories: Category[] = [
  {
    emoji: "₿",
    title: "加密交易所",
    perks: [
      { name: "币安 Binance", desc: "全球最大，永久 20% 手续费减免", link: "https://www.bsmkweb.cc/register?ref=QQQAK", code: "QQQAK" },
      { name: "欧易 OKX", desc: "中文友好，永久 20% 手续费减免", link: "https://www.nzdcvhpxqwy.com/join/29652064", code: "29652064" },
      { name: "Bitget", desc: "20% 手续费减免 + 新人专属活动", link: "https://web3.bgw.live/share/1vR9rS?inviteCode=2Jeyhw", code: "2Jeyhw" },
    ],
  },
  {
    emoji: "🤖",
    title: "AI 工具",
    perks: [
      { name: "YouMind", desc: "AI 知识管理 + 图片生成", link: "https://youmind.com/invite/46OW6F", code: "46OW6F" },
      { name: "Claude Pro", desc: "最强推理能力，写作首选", link: "https://claude.ai" },
      { name: "Cursor", desc: "AI 代码编辑器，不会写代码也能建站", link: "https://cursor.com" },
    ],
  },
];

export default function PerksPage() {
  return (
    <section className="min-h-screen px-4 sm:px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-sm text-t-tertiary hover:text-accent transition-colors block mb-12">← 返回首页</Link>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">
            🎁 专属<span className="gradient-text">福利</span>
          </h1>
          <p className="text-t-tertiary">通过以下链接注册，你我都能获得额外奖励</p>
        </motion.div>

        <div className="space-y-14">
          {categories.map((cat, ci) => (
            <motion.div key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-t-primary mb-6 flex items-center gap-3">
                <span className="text-3xl">{cat.emoji}</span>
                {cat.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.perks.map((perk, pi) => (
                  <motion.div key={perk.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: pi * 0.06 }}
                  >
                    <PerkCard {...perk} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-xs text-t-muted text-center leading-relaxed"
        >
          以上链接包含推荐码，你的费用不会增加，但我会获得少量佣金。感谢支持！
        </motion.p>
      </div>
    </section>
  );
}
