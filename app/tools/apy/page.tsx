"use client";

import { useState, useMemo } from "react";
import { ToolLayout, InputRow, ResultCard, Disclaimer, fmtCNY } from "../_components";

const COMPOUND_OPTIONS = [
  { label: "按日复利", value: 365 },
  { label: "按月复利", value: 12 },
  { label: "按季复利", value: 4 },
  { label: "按年复利", value: 1 },
];

export default function ApyPage() {
  const [principal, setPrincipal] = useState(100000);
  const [apy, setApy] = useState(5);
  const [months, setMonths] = useState(12);
  const [compoundFreq, setCompoundFreq] = useState(365);

  const result = useMemo(() => {
    const n = compoundFreq;
    const t = months / 12;
    const finalAmount = principal * Math.pow(1 + apy / 100 / n, n * t);
    const interest = finalAmount - principal;
    const dailyIncome = interest / (months * 30);
    const monthlyIncome = interest / months;
    const effectiveApy = (Math.pow(1 + apy / 100 / n, n) - 1) * 100;
    return { finalAmount, interest, dailyIncome, monthlyIncome, effectiveApy };
  }, [principal, apy, months, compoundFreq]);

  return (
    <ToolLayout
      emoji="💰"
      title="APY 计算器"
      desc="年化收益率（APY）与复利效果精算，看复利频率对实际收益的影响。"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <InputRow label="本金" value={principal} onChange={setPrincipal} prefix="¥" step={10000} />
        <InputRow label="APY（年化收益率）" value={apy} onChange={setApy} suffix="%" step={0.1} max={100} />
        <InputRow label="投资期限" value={months} onChange={setMonths} suffix="月" min={1} max={360} />
      </div>

      {/* 复利频率 */}
      <div className="mb-8">
        <p className="text-xs font-medium text-t-muted mb-2">复利频率</p>
        <div className="flex flex-wrap gap-2">
          {COMPOUND_OPTIONS.map((o) => (
            <button
              key={o.value}
              onClick={() => setCompoundFreq(o.value)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                compoundFreq === o.value
                  ? "bg-accent/20 border-accent/40 text-accent"
                  : "border-white/[0.07] text-t-secondary hover:text-t-primary hover:border-white/20"
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <ResultCard label="最终金额" value={fmtCNY(result.finalAmount)} sub={`本金 ¥${(principal / 10000).toFixed(1)}万`} highlight />
        <ResultCard label="利息收入" value={fmtCNY(result.interest)} sub={`实际年化 ${result.effectiveApy.toFixed(2)}%`} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <ResultCard label="日均收益" value={fmtCNY(result.dailyIncome)} sub="每天进账" />
        <ResultCard label="月均收益" value={fmtCNY(result.monthlyIncome)} sub="每月进账" />
      </div>

      <div className="mt-6 p-4 bg-card border border-white/[0.06] rounded-xl">
        <p className="text-xs text-t-muted leading-relaxed">
          <span className="text-t-primary font-medium">APY vs APR：</span>
          APY 已计入复利效果；APR 是名义年利率，未计复利。
          复利频率越高，实际收益越接近连续复利上限（e^r - 1）。
        </p>
      </div>

      <Disclaimer text="计算结果仅供参考，实际收益以产品说明书为准。" />
    </ToolLayout>
  );
}
