"use client";

import { useState, useMemo } from "react";
import { ToolLayout, InputRow, ResultCard, Disclaimer } from "../_components";

export default function PositionSizePage() {
  const [account, setAccount] = useState(100000);
  const [riskPct, setRiskPct] = useState(2);
  const [entry, setEntry] = useState(100);
  const [stopLoss, setStopLoss] = useState(95);

  const result = useMemo(() => {
    if (entry <= 0 || entry === stopLoss) return null;
    const riskAmount = account * (riskPct / 100);
    const priceDiff = Math.abs(entry - stopLoss);
    const shares = riskAmount / priceDiff;
    const positionValue = shares * entry;
    const positionPct = (positionValue / account) * 100;
    const stopLossPct = (priceDiff / entry) * 100;
    const isLong = entry > stopLoss;
    return { riskAmount, priceDiff, shares, positionValue, positionPct, stopLossPct, isLong };
  }, [account, riskPct, entry, stopLoss]);

  return (
    <ToolLayout
      emoji="🎲"
      title="仓位计算器"
      desc="输入账户资金、风险比例和止损位，精确算出每笔应建多少仓。"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <InputRow label="账户总资金" value={account} onChange={setAccount} prefix="¥" step={10000} />
        <InputRow label="单笔风险比例" value={riskPct} onChange={setRiskPct} suffix="%" step={0.5} min={0.1} max={20} />
        <InputRow label="入场价格" value={entry} onChange={setEntry} step={0.01} min={0.01} />
        <InputRow label="止损价格" value={stopLoss} onChange={setStopLoss} step={0.01} min={0.01} />
      </div>

      {result ? (
        <>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <ResultCard
              label="建议仓位"
              value={`¥ ${(result.positionValue / 10000).toFixed(2)} 万`}
              sub={`占账户 ${result.positionPct.toFixed(1)}%`}
              highlight
            />
            <ResultCard
              label="建议份额"
              value={result.shares >= 100 ? result.shares.toFixed(0) : result.shares.toFixed(2)}
              sub={`单价 ¥${entry}`}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <ResultCard
              label="最大亏损金额"
              value={`¥ ${result.riskAmount.toFixed(2)}`}
              sub={`账户 ${riskPct}% 风险上限`}
            />
            <ResultCard
              label="止损幅度"
              value={`${result.stopLossPct.toFixed(2)}%`}
              sub={result.isLong ? "做多，止损在下方" : "做空，止损在上方"}
            />
          </div>

          <div className="mt-6 p-4 bg-card border border-white/[0.06] rounded-xl">
            <p className="text-xs text-t-muted leading-relaxed">
              <span className="text-t-primary font-medium">凯利公式提示：</span>
              单笔风险建议不超过账户的 1–3%，频繁交易时用 1%。
              仓位 = 风险金额 ÷ 每份止损幅度（¥{result.priceDiff.toFixed(2)}）。
            </p>
          </div>
        </>
      ) : (
        <div className="p-6 bg-card border border-white/[0.06] rounded-xl text-center text-t-muted text-sm">
          入场价和止损价不能相同
        </div>
      )}

      <Disclaimer text="仓位管理仅供参考。实际交易需结合市场流动性、滑点和个人风险偏好。" />
    </ToolLayout>
  );
}
