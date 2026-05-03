"use client";

import { useState, useMemo } from "react";
import { ToolLayout, ResultCard, Disclaimer, fmt } from "../_components";

// 近似年化 CAGR（按持有年限），数据基于历史截至 2026 年初，仅供参考
const ASSETS: Record<string, { label: string; cagr: Record<number, number>; note: string }> = {
  nasdaq: {
    label: "纳指100 QDII",
    cagr: { 1: 0.15, 3: 0.18, 5: 0.22, 10: 0.18, 15: 0.16, 20: 0.15 },
    note: "历史年化 ~15%，波动大但长期强势",
  },
  sp500: {
    label: "标普500 QDII",
    cagr: { 1: 0.12, 3: 0.10, 5: 0.14, 10: 0.13, 15: 0.12, 20: 0.10 },
    note: "历史年化 ~10%，分散度更高更稳健",
  },
  btc: {
    label: "比特币 BTC",
    cagr: { 1: 0.60, 3: 0.50, 5: 0.65, 10: 0.80 },
    note: "极高收益，同等极高风险，波动 ±80%+",
  },
  gold: {
    label: "黄金 Gold",
    cagr: { 1: 0.20, 3: 0.12, 5: 0.12, 10: 0.09, 15: 0.08, 20: 0.07 },
    note: "抗通胀保值，收益温和",
  },
  csi300: {
    label: "A股沪深300",
    cagr: { 1: 0.10, 3: -0.01, 5: 0.04, 10: 0.06, 15: 0.07, 20: 0.08 },
    note: "近几年表现低迷，长期数据有限",
  },
};

function getCagr(assetKey: string, years: number): number {
  const checkpoints = ASSETS[assetKey]?.cagr ?? {};
  const keys = Object.keys(checkpoints).map(Number).sort((a, b) => a - b);
  // 找最近的档位
  for (const k of keys) {
    if (years <= k) return checkpoints[k];
  }
  return checkpoints[keys[keys.length - 1]] ?? 0;
}

const YEARS_OPTIONS = [1, 2, 3, 5, 7, 10, 15, 20];

export default function WealthMachinePage() {
  const [amount, setAmount] = useState(10000);
  const [years, setYears] = useState(5);
  const [assetKey, setAssetKey] = useState("nasdaq");

  const { currentValue, totalReturn, cagr } = useMemo(() => {
    const c = getCagr(assetKey, years);
    const v = amount * Math.pow(1 + c, years);
    return { currentValue: v, totalReturn: v - amount, cagr: c };
  }, [amount, years, assetKey]);

  const asset = ASSETS[assetKey];

  return (
    <ToolLayout
      emoji="⏳"
      title="财富时光机"
      desc="如果 X 年前把钱投进去，今天值多少？用历史年化数据模拟。"
    >
      {/* 金额输入 */}
      <div className="flex flex-col gap-1.5 mb-4">
        <label className="text-xs font-medium text-t-muted">当年投入金额</label>
        <div className="flex items-center gap-2 bg-elevated border border-white/[0.07] rounded-xl px-4 py-3 focus-within:border-accent/30 transition-colors">
          <span className="text-t-muted text-sm shrink-0">¥</span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="flex-1 bg-transparent text-t-primary text-lg font-medium outline-none min-w-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            min={100}
            step={1000}
          />
        </div>
      </div>

      {/* 年限选择 */}
      <div className="mb-4">
        <p className="text-xs font-medium text-t-muted mb-2">持有年限（X 年前买入）</p>
        <div className="flex flex-wrap gap-2">
          {YEARS_OPTIONS.map((y) => (
            <button
              key={y}
              onClick={() => setYears(y)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                years === y
                  ? "bg-accent/20 border-accent/40 text-accent"
                  : "border-white/[0.07] text-t-secondary hover:text-t-primary hover:border-white/20"
              }`}
            >
              {y} 年
            </button>
          ))}
        </div>
      </div>

      {/* 资产选择 */}
      <div className="mb-8">
        <p className="text-xs font-medium text-t-muted mb-2">选择资产</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {Object.entries(ASSETS).map(([key, a]) => (
            <button
              key={key}
              onClick={() => setAssetKey(key)}
              className={`px-3 py-2 rounded-lg text-sm text-left border transition-colors ${
                assetKey === key
                  ? "bg-accent/15 border-accent/30 text-accent"
                  : "border-white/[0.07] text-t-secondary hover:text-t-primary hover:border-white/20"
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <ResultCard
          label={`${years} 年后的今天`}
          value={`¥ ${fmt(currentValue)}`}
          sub={`年化 ~${(cagr * 100).toFixed(0)}%`}
          highlight
        />
        <ResultCard
          label="总收益"
          value={totalReturn >= 0 ? `+¥ ${fmt(totalReturn)}` : `-¥ ${fmt(Math.abs(totalReturn))}`}
          sub={`共涨 ${(((currentValue - amount) / amount) * 100).toFixed(1)}%`}
        />
      </div>

      <div className="p-4 bg-card border border-white/[0.06] rounded-xl">
        <p className="text-xs text-t-muted leading-relaxed">{asset.note}</p>
        <p className="text-[10px] text-t-muted/60 mt-1">
          数据来源：历史年化收益估算，不同时段差异较大，仅供参考。
        </p>
      </div>

      <Disclaimer text="历史收益不代表未来。不同买入时点收益差异极大，请勿据此做投资决策。" />
    </ToolLayout>
  );
}
