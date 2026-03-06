"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const sections = [
  {
    id: "ai",
    icon: "🤖",
    title: "AI 工具入门",
    color: "from-indigo-500/10 to-cyan-500/10",
    border: "border-indigo-500/20",
    tag: "indigo",
    articles: [
      {
        title: "Claude vs ChatGPT vs Gemini，你到底该用哪个？",
        body: `三个都用过之后，我的结论是：不要"选"，要"分工"。\n\nClaude 适合写作、分析、长文档处理，逻辑严密，不会乱编数据；ChatGPT 生态最全，插件多，适合需要联网或调工具的场景；Gemini 在 Google 系产品里嵌得最深，如果你重度依赖 Gmail / Docs，它最顺手。\n\n新手建议从 Claude 开始，原因只有一个：它最不容易让你用错——它会告诉你它不确定，而不是假装确定。`,
      },
      {
        title: "什么是提示词？为什么大家都在研究它？",
        body: `提示词（Prompt）就是你给 AI 的指令。同一个问题，问法不同，答案质量差十倍不夸张。\n\n最简单的提升方式：给 AI 一个角色 + 一个任务 + 一个格式要求。\n\n比如不要说"帮我写个自我介绍"，改成"你是一个资深 HR，帮我写一段 200 字以内的自我介绍，用于互联网大厂求职，突出数据分析和项目管理能力"。\n\n区别大吗？试一下就知道了。`,
      },
      {
        title: "文科生怎么搭自己的 AI 工作流？",
        body: `不需要懂代码。我自己的工作流是这样的：用 Obsidian 做知识库，Claude 负责写作和分析，Claude Code 负责帮我搭工具，NAS 做本地存储和自动化。\n\n整个体系从零到能用，花了大概三个月。期间踩过的坑：工具选太多反而用不起来，一个工具用深比五个工具用浅有用得多。\n\n从一个工具开始，搞透它，再加下一个。`,
      },
    ],
    cta: "想知道我完整的 AI 工具栈怎么搭？来 1v1 聊",
  },
  {
    id: "crypto",
    icon: "₿",
    title: "加密资产基础",
    color: "from-amber-500/10 to-orange-500/10",
    border: "border-amber-500/20",
    tag: "amber",
    articles: [
      {
        title: "区块链是什么？用一个你能记住的比喻解释",
        body: `把区块链想象成一本公开的账本，全世界有几万台电脑同时复制这本账本。你在里面转一笔钱，所有人的账本同时更新，没有人能偷偷改掉某一条记录——因为你改一台，其余几万台全不认。\n\n这就是为什么它被称为"去中心化"：没有一个中央服务器，也没有任何一家公司能单独控制它。\n\n比特币是运行在这套系统上的第一个货币实验。`,
      },
      {
        title: "交易所怎么选？Binance、OKX、Bybit 有什么区别？",
        body: `三个都是主流，安全性没有本质差别，区别主要在：\n\nBinance（币安）：全球最大，币种最全，新手友好，但部分功能对大陆用户有限制；OKX：大陆用户基础好，中文客服响应快，出入金渠道多；Bybit：界面简洁，合约交易者喜欢，优卡充值支持好。\n\n建议新手先开 OKX 或 Bybit，入门门槛低，出入金路径最顺。`,
      },
      {
        title: "什么是优卡？第一次入金怎么操作？",
        body: `优卡是一种加密礼品卡，你可以在国内电商平台购买，然后在 Bybit 等交易所兑换成 USDT（美元稳定币），再用来购买其他加密资产。整个流程不需要跨境汇款，是目前大陆用户最常用的入金路径之一。\n\n第一次操作建议小金额试水，走通流程比金额更重要。现货买入，不碰合约，是新手的铁律。`,
      },
    ],
    cta: "想手把手走一遍完整流程？来 1v1，我带你操作第一次",
  },
  {
    id: "invest",
    icon: "📈",
    title: "投资认知入门",
    color: "from-green-500/10 to-emerald-500/10",
    border: "border-green-500/20",
    tag: "green",
    articles: [
      {
        title: "普通人的资产配置，应该放几个篮子？",
        body: `芒格说，如果你知道自己在做什么，分散是没有必要的。但普通人大概率不知道，所以分散是必须的。\n\n我自己的框架：现金留够 6 个月生活费作应急；剩下的大头放指数基金（A股+美股各一半）；有风险承受能力的部分配一些加密资产；不碰自己看不懂的东西。\n\n不是最优解，是最适合普通人的"不犯大错"方案。`,
      },
      {
        title: "指数基金是什么？为什么大多数人买它就够了？",
        body: `指数基金不是买一家公司，是买一个市场里最大的 300 家或 500 家公司的一小点。哪家公司垮了，它从指数里淘汰；哪家公司崛起，它进来补上。\n\n你不需要研究个股，不需要看财报，只需要相信"这个市场长期会涨"这一件事。过去 100 年，美股指数年化约 10%，这是有历史数据支撑的。\n\n定期定额买入，忘掉它，五年以上再看。`,
      },
      {
        title: "美股、A股、港股，普通人到底该炒哪个？",
        body: `先说结论：新手最适合用指数基金买美股，不要直接炒个股。\n\nA股散户占多数，庄家游戏，规律性差，专业机构赚散户的钱；港股流动性低，坑多，不熟悉别碰；美股机构主导，信息透明，指数长期向上的逻辑最清晰。\n\n通过沪港通、互联网券商（老虎、富途）可以直接开户买美股 ETF，门槛不高。`,
      },
    ],
    cta: "想聊聊你自己的资产怎么配？来 1v1，不给建议，帮你建框架",
  },
];

const tagColors: Record<string, string> = {
  indigo: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
  amber: "text-amber-400 border-amber-500/30 bg-amber-500/10",
  green: "text-green-400 border-green-500/30 bg-green-500/10",
};

export default function LearnPage() {
  return (
    <section className="min-h-screen px-4 sm:px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-base text-gray-500 hover:text-indigo-400 transition-colors block mb-12">
          ← 返回首页
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4"
        >
          <h1 className="text-5xl font-bold mb-4">
            📚 知识<span className="gradient-text">入门</span>
          </h1>
          <p className="text-lg text-gray-500">
            免费阅读 · 看完有问题欢迎来找我
          </p>
        </motion.div>

        <div className="space-y-16 mt-16">
          {sections.map((section, si) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: si * 0.1 }}
            >
              {/* Section header */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">{section.icon}</span>
                <h2 className="text-3xl font-bold text-gray-100">{section.title}</h2>
              </div>

              {/* Articles */}
              <div className="space-y-5">
                {section.articles.map((article, ai) => (
                  <motion.div
                    key={article.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: ai * 0.08 }}
                    className={`p-7 rounded-2xl bg-gradient-to-br ${section.color} border ${section.border}`}
                  >
                    <h3 className="text-xl font-semibold text-gray-100 mb-4 leading-snug">
                      {article.title}
                    </h3>
                    <div className="space-y-3">
                      {article.body.split("\n\n").map((para, pi) => (
                        <p key={pi} className="text-base text-gray-300 leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-6 flex items-center justify-between p-5 rounded-xl border border-white/5 bg-dark-card"
              >
                <p className="text-base text-gray-400">{section.cta}</p>
                <Link
                  href="/business"
                  className={`shrink-0 ml-4 px-5 py-2 rounded-full text-sm font-medium border transition-all hover:scale-105 ${tagColors[section.tag]}`}
                >
                  了解 1v1 →
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
