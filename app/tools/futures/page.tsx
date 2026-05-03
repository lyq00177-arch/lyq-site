"use client";

import { useState, useMemo } from "react";
import { ToolLayout, InputRow, ResultCard, Disclaimer } from "../_components";

export default function FuturesPage() {
  const [direction, setDirection] = useState<"long" | "short">("long");
  const [margin, setMargin] = useState(10000);
  const [leverage, setLeverage] = useState(10);
  const [entry, setEntry] = useState(100);
  const [target, setTarget] = useState(120);
  const [feeRate, setFeeRate] = useState(0.04);

  const result = useMemo(() => {
    if (entry <= 0 || leverage <= 0) return null;
    const positionValue = margin * leverage;

    // 简化强平价：忽略维持保证金率 (0.5%) 影响做近似估算
    const liqPrice =
      direction === "long"
        ? entry * (1 - 1 / leverage + 0.005)
        : entry * (1 + 1 / leverage - 0.005);

    const openFee = positionValue * (feeRate / 100);
    const closeFee = positionValue * (feeRate / 100);

    const priceMove =
      direction === "long" ? (target - entry) / entry : (entry - target) / entry;
    const profit = margin * leverage * priceMove - openFee - closeFee;
    const roi = (profit / margin) * 100;

    return { positionValue, liqPrice, openFee, closeFee, profit, roi };
  }, [direction, margin, leverage, entry, target, feeRate]);

  const isProfit = result && result.profit >= 0;

  return (
    <ToolLayout
      emoji="⚡"
      title="合约计算器"
      desc="杠杆交易的强平价、预期盈亏和手续费一键计算，做多做空均支持。"
    >
      {/* 方向 */}
      <div className="mb-4">
        <p className="text-xs font-medium text-t-muted mb-2">交易方向</p>
        <div className="flex gap-2">
          {(["long", "short"] as const).map((d) => (
            <button
              key={d}
              onClick={() => setDirection(d)}
              className={`flex-1 py-2 rounded-lg text-sm font-semibold border transition-colors ${
                direction === d
                  ? d === "long"
                    ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400"
                    : "bg-red-500/20 border-red-500/40 text-red-400"
                  : "border-white/[0.07] text-t-secondary hover:text-t-primary"
              }`}
            >
              {d === "long" ? "做多 Long" : "做空 Short"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <InputRow label="保证金" value={margin} onChange={setMargin} prefix="¥" step={1000} />
        <InputRow label="杠杆倍数" value={leverage} onChange={setLeverage} suffix="x" min={1} max={125} />
        <InputRow label="开仓价格" value={entry} onChange={setEntry} step={0.01} min={0.01} />
        <InputRow label="目标价格" value={target} onChange={setTarget} step={0.01} min={0.01} />
        <InputRow label="手续费率" value={feeRate} onChange={setFeeRate} suffix="%" step={0.01} max={1} />
      </div>

      {result ? (
        <>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <ResultCard
              label="预期收益"
              value={`${result.profit >= 0 ? "+" : ""}¥ ${Math.abs(result.profit).toFixed(2)}`}
              sub={`ROI ${result.roi.toFixed(2)}%`}
              highlight={!!isProfit}
            />
            <ResultCard
              label="强平价格"
              value={`¥ ${result.liqPrice.toFixed(4)}`}
              sub={direction === "long" ? "低于此价触发强平" : "高于此价触发强平"}
            />
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <ResultCard
              label="合约价值"
              value={`¥ ${(result.positionValue / 10000).toFixed(2)} 万`}
              sub={`保证金 × ${leverage}x`}
            />
            <ResultCard
              label="手续费合计"
              value={`¥ ${(result.openFee + result.closeFee).toFixed(2)}`}
              sub="开仓 + 平仓"
            />
          </div>

          {/* 爆仓距离 */}
          <div className={`p-4 rounded-xl border ${
            Math.abs((result.liqPrice - entry) / entry) < 0.05
              ? "bg-red-500/10 border-red-500/20"
              : "bg-card border-white/[0.06]"
          }`}>
            <p className="text-xs text-t-muted mb-1">强平距离</p>
            <p className={`text-lg font-bold ${Math.abs((result.liqPrice - entry) / entry) < 0.05 ? "text-red-400" : "text-t-primary"}`}>
              {(Math.abs((result.liqPrice - entry) / entry) * 100).toFixed(2)}%
            </p>
            <p className="text-xs text-t-muted mt-0.5">
              {Math.abs((result.liqPrice - entry) / entry) < 0.05
                ? "⚠️ 强平价距入场价不足 5%，风险极高"
                : "入场价至强平价的距离"}
            </p>
          </div>
        </>
      ) : (
        <div className="p-6 bg-card border border-white/[0.06] rounded-xl text-center text-t-muted text-sm">
          请输入有效的开仓参数
        </div>
      )}

      <Disclaimer text="强平价为简化估算，实际以交易所维持保证金率为准。高杠杆风险极高，请谨慎使用。" />
    </ToolLayout>
  );
}
