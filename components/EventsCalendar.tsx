"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Category = "fomc" | "cpi" | "etf";

interface CalEvent {
  date: string;
  label: string;
  cat: Category;
}

const events: CalEvent[] = [
  // FOMC 2026
  { date: "2026-01-29", label: "FOMC 利率决议", cat: "fomc" },
  { date: "2026-03-19", label: "FOMC 利率决议", cat: "fomc" },
  { date: "2026-04-29", label: "FOMC 利率决议", cat: "fomc" },
  { date: "2026-06-18", label: "FOMC 利率决议", cat: "fomc" },
  { date: "2026-07-30", label: "FOMC 利率决议", cat: "fomc" },
  { date: "2026-09-17", label: "FOMC 利率决议", cat: "fomc" },
  { date: "2026-10-29", label: "FOMC 利率决议", cat: "fomc" },
  { date: "2026-12-10", label: "FOMC 利率决议", cat: "fomc" },
  // CPI 2026
  { date: "2026-01-15", label: "美国 CPI 数据发布", cat: "cpi" },
  { date: "2026-02-12", label: "美国 CPI 数据发布", cat: "cpi" },
  { date: "2026-03-12", label: "美国 CPI 数据发布", cat: "cpi" },
  { date: "2026-04-10", label: "美国 CPI 数据发布", cat: "cpi" },
  { date: "2026-05-13", label: "美国 CPI 数据发布", cat: "cpi" },
  { date: "2026-06-11", label: "美国 CPI 数据发布", cat: "cpi" },
  { date: "2026-07-15", label: "美国 CPI 数据发布", cat: "cpi" },
  { date: "2026-08-13", label: "美国 CPI 数据发布", cat: "cpi" },
  { date: "2026-09-11", label: "美国 CPI 数据发布", cat: "cpi" },
  { date: "2026-10-14", label: "美国 CPI 数据发布", cat: "cpi" },
  { date: "2026-11-13", label: "美国 CPI 数据发布", cat: "cpi" },
  { date: "2026-12-11", label: "美国 CPI 数据发布", cat: "cpi" },
  // ETF 再平衡
  { date: "2026-03-20", label: "纳指100 季度再平衡", cat: "etf" },
  { date: "2026-06-19", label: "纳指100 季度再平衡", cat: "etf" },
  { date: "2026-09-18", label: "纳指100 季度再平衡", cat: "etf" },
  { date: "2026-12-18", label: "纳指100 季度再平衡", cat: "etf" },
];

const catStyle: Record<Category, { short: string; cls: string }> = {
  fomc: { short: "FOMC", cls: "bg-amber-500/15 text-amber-400" },
  cpi:  { short: "CPI",  cls: "bg-blue-500/15 text-blue-400" },
  etf:  { short: "ETF",  cls: "bg-emerald-500/15 text-emerald-400" },
};

function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function daysUntil(dateStr: string): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const target = new Date(dateStr);
  return Math.round((target.getTime() - now.getTime()) / 86400000);
}

export default function EventsCalendar() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const today = todayStr();
  const upcoming = events
    .filter((e) => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 10);

  const nextEvent = upcoming[0];
  const nextDays = nextEvent ? daysUntil(nextEvent.date) : null;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-lg text-t-tertiary hover:text-accent hover:bg-elevated transition-colors"
        aria-label="财经日历"
        title="财经日历"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        {nextDays !== null && nextDays <= 7 && (
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-amber-400" />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.14 }}
            className="absolute right-0 top-full mt-2 w-72 bg-card border border-[rgb(var(--border)_/_var(--border-opacity))] rounded-xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="px-4 py-3 border-b border-white/[0.05] flex items-center justify-between">
              <p className="text-xs font-mono tracking-widest text-t-muted uppercase">财经日历 2026</p>
              {nextDays !== null && (
                <span className="text-[10px] text-amber-400">
                  下一事件 {nextDays === 0 ? "今天" : `${nextDays}天后`}
                </span>
              )}
            </div>

            <div className="max-h-80 overflow-y-auto divide-y divide-white/[0.04]">
              {upcoming.length === 0 ? (
                <p className="px-4 py-6 text-xs text-t-muted text-center">今年活动已全部结束</p>
              ) : (
                upcoming.map((ev) => {
                  const days = daysUntil(ev.date);
                  const style = catStyle[ev.cat];
                  return (
                    <div key={`${ev.date}-${ev.cat}`} className="flex items-center gap-3 px-4 py-2.5 hover:bg-elevated transition-colors">
                      <div className="shrink-0 w-11 text-center">
                        <div className="text-[11px] font-mono text-t-secondary">
                          {ev.date.slice(5, 7)}/{ev.date.slice(8, 10)}
                        </div>
                        <div className={`text-[9px] font-medium mt-0.5 tabular-nums ${
                          days === 0 ? "text-amber-400" : days <= 7 ? "text-amber-400/70" : "text-t-muted"
                        }`}>
                          {days === 0 ? "今天" : `${days}天`}
                        </div>
                      </div>
                      <p className="flex-1 min-w-0 text-xs text-t-secondary truncate">{ev.label}</p>
                      <span className={`shrink-0 text-[9px] px-1.5 py-0.5 rounded-full font-medium ${style.cls}`}>
                        {style.short}
                      </span>
                    </div>
                  );
                })
              )}
            </div>

            <div className="px-4 py-2 border-t border-white/[0.05]">
              <p className="text-[10px] text-t-muted">FOMC · 美国CPI · 纳指ETF再平衡</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
