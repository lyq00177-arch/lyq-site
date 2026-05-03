"use client";

import Link from "next/link";
import { ReactNode } from "react";

export function ToolLayout({
  title, desc, emoji, children,
}: {
  title: string; desc: string; emoji: string; children: ReactNode;
}) {
  return (
    <main className="min-h-screen px-4 sm:px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/tools"
          className="inline-flex items-center gap-1.5 text-xs text-t-muted hover:text-accent transition-colors mb-8"
        >
          ← 工具箱
        </Link>
        <div className="mb-8">
          <span className="text-4xl mb-3 block">{emoji}</span>
          <h1 className="font-display text-3xl sm:text-4xl text-t-primary mb-2">{title}</h1>
          <p className="text-t-muted text-sm">{desc}</p>
        </div>
        {children}
      </div>
    </main>
  );
}

export function InputRow({
  label, value, onChange, prefix, suffix, step = 1, min = 0, max,
}: {
  label: string; value: number; onChange: (v: number) => void;
  prefix?: string; suffix?: string; step?: number; min?: number; max?: number;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-t-muted tracking-wide">{label}</label>
      <div className="flex items-center gap-2 bg-elevated border border-white/[0.07] rounded-xl px-4 py-3 focus-within:border-accent/30 transition-colors">
        {prefix && <span className="text-t-muted text-sm shrink-0">{prefix}</span>}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1 bg-transparent text-t-primary text-lg font-medium outline-none min-w-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          step={step}
          min={min}
          max={max}
        />
        {suffix && <span className="text-t-muted text-sm shrink-0">{suffix}</span>}
      </div>
    </div>
  );
}

export function ResultCard({
  label, value, sub, highlight = false,
}: {
  label: string; value: string; sub?: string; highlight?: boolean;
}) {
  return (
    <div className={`rounded-xl p-5 ${highlight ? "bg-accent/10 border border-accent/20" : "bg-card border border-white/[0.06]"}`}>
      <div className="text-xs text-t-muted mb-1">{label}</div>
      <div className={`text-2xl font-bold tabular-nums ${highlight ? "text-accent" : "text-t-primary"}`}>{value}</div>
      {sub && <div className="text-xs text-t-tertiary mt-1.5">{sub}</div>}
    </div>
  );
}

export function Disclaimer({ text }: { text?: string }) {
  return (
    <p className="mt-10 text-xs text-t-muted text-center leading-relaxed">
      {text ?? "以上计算结果仅供参考，不构成投资建议。实际收益受市场波动影响。"}
    </p>
  );
}

/** 把大数字格式化成"X.XX 万 / 亿" */
export function fmt(n: number, decimals = 2): string {
  if (!isFinite(n) || isNaN(n)) return "—";
  const abs = Math.abs(n);
  if (abs >= 1e8) return (n / 1e8).toFixed(decimals) + " 亿";
  if (abs >= 1e4) return (n / 1e4).toFixed(decimals) + " 万";
  return n.toFixed(decimals);
}

export function fmtCNY(n: number): string {
  if (!isFinite(n) || isNaN(n)) return "—";
  return "¥ " + fmt(n);
}
