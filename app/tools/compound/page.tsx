"use client";

import { useState, useMemo } from "react";
import { ToolLayout, InputRow, ResultCard, Disclaimer, fmtCNY } from "../_components";

export default function CompoundPage() {
  const [principal, setPrincipal] = useState(10000);
  const [monthly, setMonthly] = useState(1000);
  const [rate, setRate] = useState(10);
  const [years, setYears] = useState(20);

  const result = useMemo(() => {
    const mr = rate / 100 / 12;
    const n = years * 12;
    const fv =
      mr === 0
        ? principal + monthly * n
        : principal * Math.pow(1 + mr, n) +
          monthly * ((Math.pow(1 + mr, n) - 1) / mr);
    const totalCost = principal + monthly * n;
    const returns = fv - totalCost;
    const returnRate = (returns / totalCost) * 100;
    return { fv, totalCost, returns, returnRate };
  }, [principal, monthly, rate, years]);

  return (
    <ToolLayout
      emoji="📈"
      title="复利计算器"
      desc="设定初始金额、每月追加和年化收益率，看复利如何改变终值。"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <InputRow label="初始金额" value={principal} onChange={setPrincipal} prefix="¥" step={1000} />
        <InputRow label="每月追加" value={monthly} onChange={setMonthly} prefix="¥" step={500} />
        <InputRow label="年化收益率" value={rate} onChange={setRate} suffix="%" step={0.5} max={50} />
        <InputRow label="投资年限" value={years} onChange={setYears} suffix="年" min={1} max={50} />
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <ResultCard label="最终金额" value={fmtCNY(result.fv)} sub={`本金 ${fmtCNY(result.totalCost)}`} highlight />
        <ResultCard label="总收益" value={fmtCNY(result.returns)} sub={`收益率 ${result.returnRate.toFixed(1)}%`} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <ResultCard label="总投入" value={fmtCNY(result.totalCost)} sub={`初始 + 月定投 × ${years * 12} 月`} />
        <ResultCard label="收益倍数" value={`${(result.fv / result.totalCost).toFixed(2)}x`} sub="最终金额 / 总投入" />
      </div>

      {/* 可视化本金 vs 收益 */}
      <div className="mt-6 p-4 bg-card border border-white/[0.06] rounded-xl">
        <p className="text-xs text-t-muted mb-3">本金 vs 收益 占比</p>
        <div className="h-5 rounded-full overflow-hidden flex">
          <div
            className="h-full bg-elevated transition-all"
            style={{ width: `${Math.min((result.totalCost / result.fv) * 100, 100)}%` }}
          />
          <div className="h-full flex-1 bg-accent/40" />
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-[10px] text-t-muted">本金 {((result.totalCost / result.fv) * 100).toFixed(1)}%</span>
          <span className="text-[10px] text-accent">收益 {(100 - (result.totalCost / result.fv) * 100).toFixed(1)}%</span>
        </div>
      </div>

      <Disclaimer />
    </ToolLayout>
  );
}
