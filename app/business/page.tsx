"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const consultingServices = [
  { icon: "🧠", title: "AI 全栈咨询", desc: "工具选型、工作流搭建、效率提升方案", price: "¥599/h" },
  { icon: "📱", title: "自媒体陪跑", desc: "定位策划、内容体系、爆款方法论", price: "¥599/h" },
  { icon: "🎯", title: "AI 工具私教", desc: "Midjourney/SD/ChatGPT/Claude 一对一教学", price: "¥599/h" },
  { icon: "💰", title: "投资交流", desc: "美股/Web3/加密货币认知分享", price: "¥599/h" },
];

export default function BusinessPage() {
  return (
    <section className="min-h-screen flex flex-col items-center px-4 sm:px-6 py-20">
      <Link href="/" className="text-base text-gray-500 hover:text-indigo-400 transition-colors mb-12">
        ← 返回首页
      </Link>

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-4"
      >
        💼 我的<span className="gradient-text">业务</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="text-lg text-gray-500 mb-12"
      >
        社群 & 一对一咨询，为你量身定制
      </motion.p>

      <div className="w-full max-w-2xl space-y-6">
        {/* 社群卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 px-5 py-2 bg-indigo-500/20 rounded-bl-xl text-base text-indigo-300 font-medium">
            限时优惠
          </div>
          <div className="text-4xl mb-4">🚀</div>
          <h2 className="text-2xl font-bold text-gray-100 mb-3">AI 超级个体社群</h2>
          <p className="text-lg text-gray-400 mb-5 leading-relaxed">
            加入社群，与志同道合的人一起成长。覆盖 AI 工具、投资认知、自媒体运营、个人品牌等全方位内容分享。
          </p>
          <div className="flex items-center gap-3 text-lg text-indigo-300 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
            加入社群即送个人网站搭建服务
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold gradient-text">¥298</span>
            <span className="text-base text-gray-500">前 200 名专属价 · 每新增 50 人涨 ¥50</span>
          </div>
        </motion.div>

        {/* 咨询服务 */}
        <div className="space-y-4">
          {consultingServices.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="flex items-center justify-between p-6 rounded-2xl bg-dark-card border border-white/5 hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-5">
                <span className="text-3xl">{s.icon}</span>
                <div>
                  <div className="text-lg font-medium text-gray-200">{s.title}</div>
                  <div className="text-base text-gray-500">{s.desc}</div>
                </div>
              </div>
              <span className="text-lg font-bold text-indigo-400 shrink-0 ml-4">{s.price}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center pt-4"
        >
          <Link href="/blog" className="text-lg text-gray-400 hover:text-indigo-400 transition-colors">
            查看更多作品与文章 →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
