import Link from "next/link";

const tools = [
  {
    href: "/tools/compound",
    emoji: "📈",
    title: "复利计算器",
    desc: "初始资金 + 每月追加，看钱怎么以几何级数翻倍",
    tag: "投资",
  },
  {
    href: "/tools/wealth-machine",
    emoji: "⏳",
    title: "财富时光机",
    desc: "如果当年买了 XX，今天值多少钱",
    tag: "回测",
  },
  {
    href: "/tools/first-million",
    emoji: "🎯",
    title: "第一个百万",
    desc: "月定投 + 年化收益，算出离 100 万还有多远",
    tag: "目标",
  },
  {
    href: "/tools/apy",
    emoji: "💰",
    title: "APY 计算器",
    desc: "年化收益率与复利效果精算，日均 / 月均收益",
    tag: "收益",
  },
  {
    href: "/tools/hourly-wage",
    emoji: "⏰",
    title: "打工人时薪",
    desc: "月薪折算到每分钟，一杯奶茶要打几分钟工",
    tag: "认知",
  },
  {
    href: "/tools/avg-down",
    emoji: "📉",
    title: "补仓计算器",
    desc: "两笔买入后新均价与回本幅度一键算清",
    tag: "交易",
  },
  {
    href: "/tools/position-size",
    emoji: "🎲",
    title: "仓位计算器",
    desc: "基于账户风险比例，算出每笔该买多少",
    tag: "风控",
  },
  {
    href: "/tools/futures",
    emoji: "⚡",
    title: "合约计算器",
    desc: "杠杆交易的强平价、盈亏和手续费全算",
    tag: "合约",
  },
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] font-mono tracking-[0.2em] text-t-muted uppercase mb-4">
          投资工具箱
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-t-primary mb-3">
          工具<span className="text-accent">箱</span>
        </h1>
        <p className="text-t-tertiary mb-12">把数字算清楚，再做决定</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {tools.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group flex flex-col p-5 rounded-2xl bg-card border border-white/[0.06] hover:border-accent/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{t.emoji}</span>
                <span className="text-[10px] font-mono tracking-widest text-t-muted border border-white/[0.06] px-2 py-0.5 rounded">
                  {t.tag}
                </span>
              </div>
              <h2 className="text-base font-semibold text-t-primary group-hover:text-accent transition-colors mb-1.5">
                {t.title}
              </h2>
              <p className="text-sm text-t-muted flex-1 leading-relaxed">{t.desc}</p>
              <div className="mt-4 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                打开工具 →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
