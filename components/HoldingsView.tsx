"use client";

import { useState } from "react";
import Link from "next/link";
import { DonutChart } from "./DonutChart";
import type { Investor, InvestorCategory } from "@/data/holdings";

function changeColor(c?: string) {
  if (!c || c === "—") return "text-t-muted";
  return c.startsWith("-") ? "text-red-400" : "text-emerald-400";
}

// 思维范式分组 —— 顺序即叙事:从长期主义到权力玩家
const CATEGORY_GROUPS: { key: InvestorCategory; emoji: string; note: string }[] = [
  { key: "长期主义", emoji: "💎", note: "买好公司，与时间做朋友" },
  { key: "逆向押注", emoji: "🔄", note: "在恐慌处下注，赚认知的钱" },
  { key: "激进催化", emoji: "⚡", note: "买入后施压，主动逼出价值" },
  { key: "周期宏观", emoji: "🌊", note: "顺周期下注，赌的是大势" },
  { key: "趋势创新", emoji: "🚀", note: "押注颠覆，吃指数级红利" },
  { key: "权力玩家", emoji: "🏛️", note: "信息即优势，争议如影随形" },
];

export default function HoldingsView({ investors }: { investors: Investor[] }) {
  const [activeId, setActiveId] = useState(investors[0].id);
  const inv = investors.find((i) => i.id === activeId) ?? investors[0];
  const top = inv.holdings[0];

  const source = inv.source ?? "SEC 13F";
  const kpis = [
    { label: "组合总市值", value: inv.totalValue, sub: inv.quarter },
    { label: "持仓数量", value: `${inv.holdingsCount}只`, sub: "申报持仓" },
    { label: "第一大仓", value: `${top.weight}%`, sub: top.name },
    { label: "数据来源", value: source, sub: "公开披露" },
  ];

  return (
    <div>
      {/* 投资人切换 —— 按思维范式分组 */}
      <div className="flex flex-col gap-5 mb-8">
        {CATEGORY_GROUPS.map((group) => {
          const members = investors.filter((i) => i.category === group.key);
          if (members.length === 0) return null;
          return (
            <div key={group.key}>
              <div className="flex items-baseline gap-2 mb-2.5">
                <span className="text-sm">{group.emoji}</span>
                <span className="text-sm font-medium text-t-secondary">{group.key}</span>
                <span className="text-xs text-t-muted">{group.note}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {members.map((i) => {
                  const active = i.id === activeId;
                  return (
                    <button
                      key={i.id}
                      onClick={() => setActiveId(i.id)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium border transition-colors duration-200 ${
                        active
                          ? "bg-accent/15 text-accent border-accent/30"
                          : "bg-card text-t-tertiary border-white/[0.06] hover:text-accent"
                      }`}
                    >
                      {i.name}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* 投资人简介卡 */}
      <div className="bg-card border border-white/[0.06] rounded-2xl p-6 mb-6 flex gap-5 items-start">
        <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
          <span className="font-display text-2xl text-accent">{inv.name[0]}</span>
        </div>
        <div>
          <div className="flex items-baseline gap-2 flex-wrap mb-1">
            <h2 className="font-display text-xl sm:text-2xl text-t-primary">{inv.name}</h2>
            <span className="text-xs font-mono text-t-muted">{inv.nameEn}</span>
          </div>
          <p className="text-xs text-accent/80 mb-2">{inv.title}</p>
          <p className="text-sm text-t-secondary leading-relaxed">{inv.bio}</p>
        </div>
      </div>

      {/* KPI */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {kpis.map((k) => (
          <div key={k.label} className="bg-card border border-white/[0.06] rounded-xl px-4 py-3">
            <div className="text-xs text-t-muted mb-1">{k.label}</div>
            <div className="text-lg font-bold text-accent tabular-nums">{k.value}</div>
            <div className="text-xs text-t-tertiary">{k.sub}</div>
          </div>
        ))}
      </div>

      {/* 持仓：环形图 + 明细表 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="bg-card border border-white/[0.06] rounded-2xl p-6 flex justify-center">
          <DonutChart holdings={inv.holdings} label={inv.name} accentCls="text-accent" />
        </div>

        <div className="bg-card border border-white/[0.06] rounded-2xl p-2 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-t-muted text-xs">
                <th className="text-left font-medium px-3 py-2">公司</th>
                <th className="text-right font-medium px-3 py-2">占比</th>
                <th className="text-right font-medium px-3 py-2">市值</th>
                <th className="text-right font-medium px-3 py-2">较上季</th>
              </tr>
            </thead>
            <tbody>
              {inv.holdings.map((h) => (
                <tr key={h.symbol} className="border-t border-white/[0.04]">
                  <td className="px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="shrink-0 w-2 h-2 rounded-full" style={{ backgroundColor: h.color }} />
                      <span className="text-t-primary">{h.name}</span>
                      <span className="text-[10px] font-mono text-t-muted">{h.symbol}</span>
                    </div>
                  </td>
                  <td className="px-3 py-2.5 text-right tabular-nums text-t-secondary">{h.weight}%</td>
                  <td className="px-3 py-2.5 text-right tabular-nums text-t-secondary">{h.marketValue}</td>
                  <td className={`px-3 py-2.5 text-right tabular-nums ${changeColor(h.changeVsPrev)}`}>{h.changeVsPrev ?? "—"}</td>
                </tr>
              ))}
              <tr className="border-t border-white/[0.04] text-t-muted">
                <td className="px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className="shrink-0 w-2 h-2 rounded-full bg-white/10" />
                    <span>其他</span>
                  </div>
                </td>
                <td className="px-3 py-2.5 text-right tabular-nums">{inv.other.weight}%</td>
                <td className="px-3 py-2.5 text-right tabular-nums">{inv.other.marketValue}</td>
                <td className="px-3 py-2.5 text-right">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 摘要脚注 */}
      <p className="mt-5 text-xs text-t-muted">{inv.topNote}</p>

      {/* 认知层：延伸阅读 */}
      {inv.relatedPosts && inv.relatedPosts.length > 0 && (
        <div className="mt-8 p-4 bg-accent/5 border border-accent/15 rounded-xl">
          <div className="text-xs text-accent font-medium mb-2">我写过的相关文章</div>
          <div className="flex flex-col gap-1.5">
            {inv.relatedPosts.map((slug) => (
              <Link
                key={slug}
                href={`/blog/${slug}`}
                className="text-sm text-t-secondary hover:text-accent transition-colors"
              >
                → {slug}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
