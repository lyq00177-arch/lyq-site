"use client";

import { useState, useMemo } from "react";
import { ToolLayout, InputRow, ResultCard, Disclaimer } from "../_components";

export default function AvgDownPage() {
  const [price1, setPrice1] = useState(100);
  const [amount1, setAmount1] = useState(10000);
  const [price2, setPrice2] = useState(80);
  const [amount2, setAmount2] = useState(10000);

  const result = useMemo(() => {
    if (price1 <= 0 || price2 <= 0) return null;
    const shares1 = amount1 / price1;
    const shares2 = amount2 / price2;
    const totalShares = shares1 + shares2;
    const totalCost = amount1 + amount2;
    const avgPrice = totalCost / totalShares;

    // 当前持仓市值（以第二笔买入价为当前价）
    const currentValue = totalShares * price2;
    const unrealizedPL = currentValue - totalCost;
    const unrealizedPct = (unrealizedPL / totalCost) * 100;

    // 从第二笔价格回到均价需要涨多少
    const recoveryPct = ((avgPrice - price2) / price2) * 100;

    return { shares1, shares2, totalShares, totalCost, avgPrice, currentValue, unrealizedPL, unrealizedPct, recoveryPct };
  }, [price1, amount1, price2, amount2]);

  const isDown = price2 < price1;

  return (
    <ToolLayout
      emoji="📉"
      title="补仓计算器"
      desc="两笔买入后的新均价、当前盈亏和回本幅度，一目了然。"
    >
      <div className="mb-6">
        <p className="text-xs font-mono tracking-widest text-t-muted uppercase mb-3">第一笔买入</p>
        <div className="grid grid-cols-2 gap-4">
          <InputRow label="买入价格" value={price1} onChange={setPrice1} step={0.01} min={0.01} />
          <InputRow label="买入金额" value={amount1} onChange={setAmount1} prefix="¥" step={1000} />
        </div>
      </div>

      <div className="mb-8">
        <p className="text-xs font-mono tracking-widest text-t-muted uppercase mb-3">
          第二笔{isDown ? "补仓" : "加仓"}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <InputRow label="买入价格" value={price2} onChange={setPrice2} step={0.01} min={0.01} />
          <InputRow label="买入金额" value={amount2} onChange={setAmount2} prefix="¥" step={1000} />
        </div>
      </div>

      {result && (
        <>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <ResultCard
              label="持仓均价"
              value={`¥ ${result.avgPrice.toFixed(3)}`}
              sub={`较当前价 ${result.recoveryPct >= 0 ? "高" : "低"} ${Math.abs(result.recoveryPct).toFixed(1)}%`}
              highlight
            />
            <ResultCard
              label="回本需涨幅"
              value={`${result.recoveryPct > 0 ? "+" : ""}${result.recoveryPct.toFixed(2)}%`}
              sub={result.recoveryPct > 0 ? "涨回才回本" : "当前已超成本"}
            />
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <ResultCard
              label="总持仓份额"
              value={result.totalShares.toFixed(4)}
              sub={`${result.shares1.toFixed(2)} + ${result.shares2.toFixed(2)}`}
            />
            <ResultCard
              label="总买入成本"
              value={`¥ ${(result.totalCost / 10000).toFixed(2)} 万`}
            />
          </div>
          <div className={`p-4 rounded-xl border ${result.unrealizedPL >= 0 ? "bg-emerald-500/5 border-emerald-500/15" : "bg-red-500/5 border-red-500/15"}`}>
            <p className="text-xs text-t-muted mb-1">以第二笔价格计算当前浮盈亏</p>
            <p className={`text-2xl font-bold tabular-nums ${result.unrealizedPL >= 0 ? "text-emerald-400" : "text-red-400"}`}>
              {result.unrealizedPL >= 0 ? "+" : ""}¥ {Math.abs(result.unrealizedPL).toFixed(2)}
            </p>
            <p className="text-xs text-t-muted mt-0.5">{result.unrealizedPct.toFixed(2)}%</p>
          </div>
        </>
      )}

      <Disclaimer text="以第二笔买入价格作为当前价格估算浮动盈亏，实际交易以市场价为准。" />
    </ToolLayout>
  );
}
