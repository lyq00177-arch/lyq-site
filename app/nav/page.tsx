"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ResourceCard } from "@/components/Card";

interface Resource {
  name: string;
  desc: string;
  url: string;
  rating: number;
  tag?: string;
  internal?: boolean;
}

interface Category {
  emoji: string;
  title: string;
  resources: Resource[];
}

const categories: Category[] = [
  {
    emoji: "📈",
    title: "投资工具",
    resources: [
      { name: "TradingView", desc: "专业图表分析", url: "https://tradingview.com", rating: 5.0, tag: "🔥热门" },
      { name: "CoinMarketCap", desc: "加密市值排名", url: "https://coinmarketcap.com", rating: 4.5, tag: "🔥热门" },
      { name: "DeFiLlama", desc: "DeFi TVL 数据", url: "https://defillama.com", rating: 5.0 },
      { name: "Coinglass", desc: "合约数据看板", url: "https://coinglass.com", rating: 4.5 },
      { name: "投资工具箱", desc: "复利/仓位/恐慌指数", url: "/tools", rating: 5.0, tag: "⭐本站", internal: true },
      { name: "Yahoo Finance", desc: "美股数据", url: "https://finance.yahoo.com", rating: 4.5, tag: "🔥热门" },
      { name: "Investing.com", desc: "财经日历", url: "https://investing.com", rating: 4.0 },
    ],
  },
  {
    emoji: "🤖",
    title: "AI 工具",
    resources: [
      { name: "Claude", desc: "最强推理 AI", url: "https://claude.ai", rating: 5.0, tag: "⭐推荐" },
      { name: "ChatGPT", desc: "最全生态", url: "https://chatgpt.com", rating: 4.5, tag: "🔥热门" },
      { name: "Cursor", desc: "AI 编程", url: "https://cursor.com", rating: 5.0, tag: "⭐推荐" },
      { name: "Midjourney", desc: "AI 绘画", url: "https://midjourney.com", rating: 4.5 },
      { name: "Perplexity", desc: "AI 搜索引擎", url: "https://perplexity.ai", rating: 4.5 },
      { name: "Obsidian", desc: "知识管理", url: "https://obsidian.md", rating: 5.0, tag: "⭐推荐" },
      { name: "YouMind", desc: "AI 知识库", url: "https://youmind.com", rating: 4.0 },
    ],
  },
  {
    emoji: "📱",
    title: "自媒体",
    resources: [
      { name: "即梦 Dreamina", desc: "AI 视频生成", url: "https://dreamina.jianying.com", rating: 4.5, tag: "🔥热门" },
      { name: "剪映 CapCut", desc: "视频剪辑", url: "https://www.capcut.com", rating: 4.5 },
      { name: "Canva", desc: "设计工具", url: "https://canva.com", rating: 4.0 },
      { name: "秀米", desc: "公众号排版", url: "https://xiumi.us", rating: 4.0 },
      { name: "X / Twitter", desc: "海外社交平台", url: "https://x.com", rating: 4.5 },
    ],
  },
];

export default function NavPage() {
  return (
    <section className="min-h-screen px-4 sm:px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-sm text-t-tertiary hover:text-accent transition-colors block mb-12">← 返回首页</Link>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">
            🧭 常用<span className="gradient-text">导航</span>
          </h1>
          <p className="text-t-tertiary">我日常在用的工具和资源，带个人评分</p>
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

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {cat.resources.map((r, ri) => (
                  <motion.div key={r.name}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: ri * 0.04 }}
                  >
                    <ResourceCard {...r} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
