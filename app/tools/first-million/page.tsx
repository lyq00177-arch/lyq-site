"use client";

import { useState, useMemo } from "react";
import { ToolLayout, InputRow, ResultCard, Disclaimer, fmtCNY } from "../_components";

const TARGET = 1_000_000;

export default function FirstMillionPage() {
  const [initial, setInitial] = useState(10000);
  const [monthly, setMonthly] = useState(2000);
  const [rate, setRate] = useState(10);

  const result = useMemo(() => {
    if (initial >= TARGET) return { months: 0, years: 0, remainMonths: 0, finalBalance: initial };
    const mr = rate / 100 / 12;
    let balance = initial;
    let months = 0;
    while (balance < TARGET && months < 12000) {
      balance = mr > 0 ? balance * (1 + mr) + monthly : balance + monthly;
      months++;
    }
    return {
      months,
      years: Math.floor(months / 12),
      remainMonths: months % 12,
      finalBalance: balance,
    };
  }, [initial, monthly, rate]);

  // 对比：0% 收益需要多久
  const monthsNoReturn = useMemo(() => {
    if (initial >= TARGET) return 0;
    return Math.max(0, Math.ceil((TARGET - initial) / monthly));
  }, [initial, monthly]);

  const savedMonths = monthsNoReturn - result.months;

  return (
    <ToolLayout
      emoji="🎯"
      title="第一个百万"
      desc="设定月定投和预期年化收益率，算出攒到 100 万需要多久。"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <InputRow label="初始金额" value={initial} onChange={setInitial} prefix="¥" step={1000} />
        <InputRow label="每月定投" value={monthly} onChange={setMonthly} prefix="¥" step={500} min={1} />
        <InputRow label="年化收益率" value={rate} onChange={setRate} suffix="%" step={0.5} max={50} />
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <ResultCard
          label="距离 100 万"
          value={result.months === 0 ? "已达到！" : `${result.years} 年 ${result.remainMonths} 月`}
          sub={result.months > 0 ? `共 ${result.months} 个月` : "初始金额已超过目标"}
          highlight
        />
        <ResultCard
          label="到达时总资产"
          value={fmtCNY(result.finalBalance)}
          sub="含复利增长"
        />
      </div>

      {savedMonths > 0 && (
        <div className="p-4 bg-emerald-500/5 border border-emerald-500/15 rounded-xl mb-4">
          <p className="text-sm text-emerald-400 font-medium mb-0.5">
            复利节省了 {Math.floor(savedMonths / 12)} 年 {savedMonths % 12} 个月
          </p>
          <p className="text-xs text-t-muted">
            vs 不投资只存钱需要 {Math.floor(monthsNoReturn / 12)} 年 {monthsNoReturn % 12} 月
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <ResultCard
          label="总投入本金"
          value={fmtCNY(initial + monthly * result.months)}
          sub="初始 + 月定投"
        />
        <ResultCard
          label="复利贡献"
          value={fmtCNY(result.finalBalance - (initial + monthly * result.months))}
          sub="帮你多赚的钱"
        />
      </div>

      <Disclaimer />
    </ToolLayout>
  );
}
