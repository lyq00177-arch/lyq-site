"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nasdaqTopHoldings, sp500TopHoldings } from "@/data/etf-funds";

type Holding = { symbol: string; name: string; weight: number; color: string };

/** 前十大持仓横向堆叠占比条 —— 段宽 = 权重%，剩余留底色。
 *  纳指填到 ~52%、标普 ~36%，条长差本身就说明「纳指集中度更高」。 */
function StackedBar({ holdings }: { holdings: Holding[] }) {
  return (
    <div className="flex h-2.5 w-full gap-px overflow-hidden rounded-full bg-white/[0.04]">
      {holdings.map((h) => (
        <div
          key={h.symbol}
          title={`${h.name} ${h.weight}%`}
          style={{ width: `${h.weight}%`, backgroundColor: h.color }}
          className="h-full opacity-85 transition-opacity hover:opacity-100"
        />
      ))}
    </div>
  );
}

function IndexRow({
  code,
  codeCls,
  name,
  cagr,
  holdings,
}: {
  code: string;
  codeCls: string;
  name: string;
  cagr: string;
  holdings: Holding[];
}) {
  const top = holdings.reduce((s, h) => s + h.weight, 0);
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${codeCls}`}>{code}</span>
          <span className="text-sm text-t-secondary">{name}</span>
        </div>
        <div className="text-right">
          <span className="text-[11px] text-t-muted">历史年化 </span>
          <span className="font-display text-lg text-accent">{cagr}</span>
        </div>
      </div>
      <StackedBar holdings={holdings} />
      <div className="flex items-center justify-between text-[10px] text-t-muted">
        <span className="font-mono tracking-wide">
          {holdings.slice(0, 3).map((h) => h.symbol).join(" · ")} …
        </span>
        <span>
          前 {holdings.length} 大占 {top.toFixed(0)}%
        </span>
      </div>
    </div>
  );
}

export default function InvestPulse() {
  const [rate, setRate] = useState<number | null>(null);
  const [updatedAt, setUpdatedAt] = useState<string>("");

  useEffect(() => {
    let alive = true;
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((r) => r.json())
      .then((j) => {
        if (!alive) return;
        if (typeof j?.rates?.CNY === "number") setRate(j.rates.CNY);
        setUpdatedAt(
          new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })
        );
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  const isLive = rate !== null;
  const shown = rate ?? 7.18; // 兜底参考值

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
      {/* ── 左：实时市场大卡 ── */}
      <div className="lg:col-span-7 rounded-2xl bg-card border border-white/[0.06] p-6 sm:p-7 flex flex-col gap-6">
        {/* 实时汇率 */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isLive ? "bg-emerald-400 animate-pulse" : "bg-amber-400"
                }`}
              />
              <span className="text-[11px] tracking-[0.15em] uppercase text-t-muted">
                {isLive ? "实时汇率" : "参考汇率"} USD / CNY
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-4xl sm:text-5xl text-t-primary tabular-nums">
                {shown.toFixed(4)}
              </span>
              <span className="text-sm text-t-muted">¥ / $</span>
            </div>
            {updatedAt && (
              <p className="text-[10px] text-t-muted mt-1.5">更新于 {updatedAt} · open.er-api.com</p>
            )}
          </div>
          <span className="text-3xl opacity-70">💱</span>
        </div>

        <div className="h-px bg-white/[0.05]" />

        {/* 两大核心指数 */}
        <div className="space-y-5">
          <IndexRow
            code="NDX"
            codeCls="bg-accent/10 text-accent"
            name="纳斯达克100"
            cagr="~15%"
            holdings={nasdaqTopHoldings}
          />
          <IndexRow
            code="SPX"
            codeCls="bg-emerald-500/10 text-emerald-400"
            name="标普500"
            cagr="~10%"
            holdings={sp500TopHoldings}
          />
        </div>

        <Link
          href="/etf"
          className="group mt-auto inline-flex items-center gap-2 text-sm text-accent/80 hover:text-accent transition-colors"
        >
          ETF 全景 · 开户引导 · 定投测算
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      {/* ── 右：两个内容入口 ── */}
      <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
        <Link
          href="/holdings"
          className="group rounded-2xl bg-card border border-white/[0.06] hover:border-accent/20 hover:bg-elevated p-6 flex flex-col justify-between gap-4 transition-all duration-300 min-h-[124px]"
        >
          <div className="flex items-center justify-between">
            <span className="text-2xl">🏛️</span>
            <span className="font-display text-2xl text-accent/70 tabular-nums">21</span>
          </div>
          <div>
            <div className="text-base font-medium text-t-primary group-hover:text-accent transition-colors mb-0.5">
              名人持仓
            </div>
            <div className="text-xs text-t-muted leading-relaxed">
              投资大师 · 6 大思维范式分类追踪
            </div>
          </div>
        </Link>
        <Link
          href="/wisdom"
          className="group rounded-2xl bg-card border border-white/[0.06] hover:border-accent/20 hover:bg-elevated p-6 flex flex-col justify-between gap-4 transition-all duration-300 min-h-[124px]"
        >
          <div className="flex items-center justify-between">
            <span className="text-2xl">📜</span>
            <span className="font-display text-2xl text-accent/70 tabular-nums">65</span>
          </div>
          <div>
            <div className="text-base font-medium text-t-primary group-hover:text-accent transition-colors mb-0.5">
              智慧文集
            </div>
            <div className="text-xs text-t-muted leading-relaxed">
              巴菲特·芒格·段永平·李录 + 我的解读
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
