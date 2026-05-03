"use client";

import { useState, useMemo } from "react";
import { ToolLayout, InputRow, ResultCard, Disclaimer } from "../_components";

const LIFE_ITEMS = [
  { emoji: "🧋", name: "一杯奶茶", price: 30 },
  { emoji: "🍱", name: "一次外卖", price: 35 },
  { emoji: "🎬", name: "一次电影", price: 60 },
  { emoji: "✈️", name: "机票（短途）", price: 500 },
  { emoji: "👕", name: "一件新衣", price: 300 },
  { emoji: "📱", name: "iPhone 16", price: 5999 },
  { emoji: "💻", name: "MacBook Air", price: 8999 },
  { emoji: "🚗", name: "一辆车（入门）", price: 100000 },
];

function timeStr(hours: number): string {
  if (hours < 1 / 60) return `${(hours * 3600).toFixed(0)} 秒`;
  if (hours < 1) return `${(hours * 60).toFixed(0)} 分钟`;
  if (hours < 24) return `${hours.toFixed(1)} 小时`;
  return `${(hours / 8).toFixed(1)} 个工作日`;
}

export default function HourlyWagePage() {
  const [monthly, setMonthly] = useState(15000);
  const [workDays, setWorkDays] = useState(22);
  const [hoursPerDay, setHoursPerDay] = useState(9);

  const { hourly, perMinute, perSecond, annualSalary } = useMemo(() => {
    const totalHours = workDays * hoursPerDay;
    const hourly = totalHours > 0 ? monthly / totalHours : 0;
    return {
      hourly,
      perMinute: hourly / 60,
      perSecond: hourly / 3600,
      annualSalary: monthly * 12,
    };
  }, [monthly, workDays, hoursPerDay]);

  return (
    <ToolLayout
      emoji="⏰"
      title="打工人时薪"
      desc="月薪折算成时薪、分薪，用生活消费告诉你时间真正的价格。"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <InputRow label="月薪（税前）" value={monthly} onChange={setMonthly} prefix="¥" step={1000} min={1} />
        <InputRow label="每月工作天数" value={workDays} onChange={setWorkDays} suffix="天" min={1} max={31} />
        <InputRow label="每天工作时长" value={hoursPerDay} onChange={setHoursPerDay} suffix="小时" min={1} max={24} />
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <ResultCard label="时薪" value={`¥ ${hourly.toFixed(2)}`} sub="每小时" highlight />
        <ResultCard label="分薪" value={`¥ ${perMinute.toFixed(3)}`} sub="每分钟" />
        <ResultCard label="年薪（×12）" value={`¥ ${(annualSalary / 10000).toFixed(1)} 万`} sub="不含奖金" />
        <ResultCard label="每秒收入" value={`¥ ${perSecond.toFixed(4)}`} sub="每秒" />
      </div>

      {/* 生活换算 */}
      <div className="bg-card border border-white/[0.06] rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-white/[0.06]">
          <p className="text-xs font-medium text-t-muted">你需要打多久工才能买到……</p>
        </div>
        <div className="divide-y divide-white/[0.04]">
          {LIFE_ITEMS.map((item) => {
            const hoursNeeded = hourly > 0 ? item.price / hourly : 0;
            return (
              <div key={item.name} className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-lg">{item.emoji}</span>
                  <div>
                    <span className="text-sm text-t-primary">{item.name}</span>
                    <span className="ml-2 text-xs text-t-muted">¥{item.price.toLocaleString()}</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-accent tabular-nums">
                  {timeStr(hoursNeeded)}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <Disclaimer text="数据基于税前月薪估算，未考虑五险一金和税后实得。" />
    </ToolLayout>
  );
}
