"use client";

import { useState, useMemo } from "react";
import type { QdiiFund, EtfFund } from "@/types/etf";

type SortKey = "scale" | "ytdReturn" | "oneYearReturn" | "feeRate" | "changePct" | "trackError";
type SortDir = "asc" | "desc";

function ReturnCell({ value }: { value?: number }) {
  if (value == null) return <span className="text-t-muted">—</span>;
  const isPos = value >= 0;
  return (
    <span className={isPos ? "text-emerald-400 font-medium" : "text-red-400 font-medium"}>
      {isPos ? "+" : ""}{value.toFixed(2)}%
    </span>
  );
}

function StatusBadge({ status, limit }: { status?: "open" | "suspended"; limit: string }) {
  if (status === "suspended" || limit === "暂停申购") {
    return (
      <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
        <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
        暂停
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
      {limit}
    </span>
  );
}

function SortHeader({
  label, sortKey, current, dir, onSort
}: {
  label: string; sortKey: SortKey;
  current: SortKey; dir: SortDir;
  onSort: (k: SortKey) => void;
}) {
  const active = current === sortKey;
  return (
    <th
      className="px-3 py-3 text-right text-xs font-medium text-t-secondary cursor-pointer select-none whitespace-nowrap hover:text-accent transition-colors"
      onClick={() => onSort(sortKey)}
    >
      {label}
      <span className="ml-1 opacity-50">
        {active ? (dir === "desc" ? "↓" : "↑") : "↕"}
      </span>
    </th>
  );
}

// ── QDII Tab (纳指/标普) ──────────────────────────────────────────────────────

function QdiiTable({ funds }: { funds: QdiiFund[] }) {
  const [filter, setFilter] = useState<"all" | "open" | "suspended">("all");
  const [sortKey, setSortKey] = useState<SortKey>("scale");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const handleSort = (key: SortKey) => {
    if (key === sortKey) setSortDir(d => d === "desc" ? "asc" : "desc");
    else { setSortKey(key); setSortDir("desc"); }
  };

  const filtered = useMemo(() => {
    let list = funds;
    if (filter === "open") list = list.filter(f => f.status === "open");
    if (filter === "suspended") list = list.filter(f => f.status === "suspended");
    return [...list].sort((a, b) => {
      const av = (a[sortKey] as number) ?? -Infinity;
      const bv = (b[sortKey] as number) ?? -Infinity;
      return sortDir === "desc" ? bv - av : av - bv;
    });
  }, [funds, filter, sortKey, sortDir]);

  return (
    <>
      {/* Filter buttons */}
      <div className="flex gap-2 mb-4">
        {(["all", "open", "suspended"] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              filter === f
                ? "bg-accent/20 border-accent/40 text-accent"
                : "border-white/10 text-t-secondary hover:text-t-primary hover:border-white/20"
            }`}
          >
            {f === "all" ? "全部" : f === "open" ? "开放申购" : "暂停申购"}
            <span className="ml-1.5 text-t-muted">
              {f === "all" ? funds.length : funds.filter(x => f === "open" ? x.status === "open" : x.status === "suspended").length}
            </span>
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-white/[0.07]">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-elevated/50 border-b border-white/[0.07]">
              <th className="px-3 py-3 text-left text-xs font-medium text-t-secondary w-8">#</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-t-secondary">基金</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-t-secondary">C类代码</th>
              <th className="px-3 py-3 text-right text-xs font-medium text-t-secondary">费率</th>
              <SortHeader label="规模(亿)" sortKey="scale" current={sortKey} dir={sortDir} onSort={handleSort} />
              <SortHeader label="25年涨幅" sortKey="ytdReturn" current={sortKey} dir={sortDir} onSort={handleSort} />
              <SortHeader label="近1年" sortKey="oneYearReturn" current={sortKey} dir={sortDir} onSort={handleSort} />
              <SortHeader label="昨日" sortKey="changePct" current={sortKey} dir={sortDir} onSort={handleSort} />
              <SortHeader label="跟踪误差" sortKey="trackError" current={sortKey} dir={sortDir} onSort={handleSort} />
              <th className="px-3 py-3 text-right text-xs font-medium text-t-secondary">申购</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.04]">
            {filtered.map((fund, i) => (
              <tr key={fund.code} className="hover:bg-elevated/30 transition-colors group">
                <td className="px-3 py-3 text-t-muted text-xs">{i + 1}</td>
                <td className="px-3 py-3">
                  <a
                    href={`https://fund.eastmoney.com/${fund.code}.html`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-t-primary group-hover:text-accent transition-colors block leading-snug"
                  >
                    {fund.name}
                  </a>
                  <span className="text-xs text-t-muted font-mono">{fund.code}</span>
                </td>
                <td className="px-3 py-3">
                  <span className="text-xs font-mono text-t-muted bg-surface px-1.5 py-0.5 rounded">
                    {fund.cCode}
                  </span>
                </td>
                <td className="px-3 py-3 text-right text-t-secondary text-xs">{fund.feeRate}%</td>
                <td className="px-3 py-3 text-right text-t-primary">{fund.scale ?? "—"}</td>
                <td className="px-3 py-3 text-right"><ReturnCell value={fund.ytdReturn} /></td>
                <td className="px-3 py-3 text-right"><ReturnCell value={fund.oneYearReturn} /></td>
                <td className="px-3 py-3 text-right"><ReturnCell value={fund.changePct} /></td>
                <td className="px-3 py-3 text-right text-t-secondary text-xs">
                  {fund.trackError != null ? `${fund.trackError}%` : "—"}
                </td>
                <td className="px-3 py-3 text-right">
                  <StatusBadge status={fund.status} limit={fund.purchaseLimit} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

// ── 场内 ETF Tab ──────────────────────────────────────────────────────────────

function EtfInTable({ funds }: { funds: EtfFund[] }) {
  const [sortKey, setSortKey] = useState<SortKey>("scale");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const handleSort = (key: SortKey) => {
    if (key === sortKey) setSortDir(d => d === "desc" ? "asc" : "desc");
    else { setSortKey(key); setSortDir("desc"); }
  };

  const sorted = useMemo(() => (
    [...funds].sort((a, b) => {
      const av = (a[sortKey as keyof EtfFund] as number) ?? -Infinity;
      const bv = (b[sortKey as keyof EtfFund] as number) ?? -Infinity;
      return sortDir === "desc" ? bv - av : av - bv;
    })
  ), [funds, sortKey, sortDir]);

  return (
    <div className="overflow-x-auto rounded-xl border border-white/[0.07]">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-elevated/50 border-b border-white/[0.07]">
            <th className="px-3 py-3 text-left text-xs font-medium text-t-secondary w-8">#</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-t-secondary">ETF</th>
            <th className="px-3 py-3 text-left text-xs font-medium text-t-secondary">跟踪标的</th>
            <th className="px-3 py-3 text-right text-xs font-medium text-t-secondary">费率</th>
            <SortHeader label="规模(亿)" sortKey="scale" current={sortKey} dir={sortDir} onSort={handleSort} />
            <SortHeader label="25年涨幅" sortKey="ytdReturn" current={sortKey} dir={sortDir} onSort={handleSort} />
            <SortHeader label="昨日涨跌" sortKey="changePct" current={sortKey} dir={sortDir} onSort={handleSort} />
            <th className="px-3 py-3 text-right text-xs font-medium text-t-secondary whitespace-nowrap">市价/净值</th>
            <th className="px-3 py-3 text-right text-xs font-medium text-t-secondary">溢价率</th>
            <SortHeader label="跟踪误差" sortKey="trackError" current={sortKey} dir={sortDir} onSort={handleSort} />
          </tr>
        </thead>
        <tbody className="divide-y divide-white/[0.04]">
          {sorted.map((fund, i) => (
            <tr key={fund.code} className="hover:bg-elevated/30 transition-colors group">
              <td className="px-3 py-3 text-t-muted text-xs">{i + 1}</td>
              <td className="px-3 py-3">
                <a
                  href={`https://fund.eastmoney.com/${fund.code}.html`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-t-primary group-hover:text-accent transition-colors block leading-snug"
                >
                  {fund.name}
                </a>
                <span className="text-xs text-t-muted font-mono">{fund.code}</span>
              </td>
              <td className="px-3 py-3 text-xs text-t-secondary">{fund.trackingIndex}</td>
              <td className="px-3 py-3 text-right text-t-secondary text-xs">{fund.feeRate}%</td>
              <td className="px-3 py-3 text-right text-t-primary">{fund.scale ?? "—"}</td>
              <td className="px-3 py-3 text-right"><ReturnCell value={fund.ytdReturn} /></td>
              <td className="px-3 py-3 text-right"><ReturnCell value={fund.changePct} /></td>
              <td className="px-3 py-3 text-right text-xs text-t-secondary">
                {fund.marketPrice?.toFixed(3)} / {fund.nav?.toFixed(4)}
              </td>
              <td className="px-3 py-3 text-right">
                {fund.premium != null && (
                  <span className={`text-xs font-medium ${fund.premium > 3 ? "text-amber-400" : "text-t-secondary"}`}>
                    {fund.premium > 0 ? "+" : ""}{fund.premium.toFixed(2)}%
                  </span>
                )}
              </td>
              <td className="px-3 py-3 text-right text-t-secondary text-xs">
                {fund.trackError != null ? `${fund.trackError}%` : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────

type TabId = "nasdaq" | "sp500" | "etf";

interface Props {
  nasdaq: QdiiFund[];
  sp500: QdiiFund[];
  etf: EtfFund[];
  lastUpdate: string;
}

const TABS: { id: TabId; label: string; count: (p: Props) => number }[] = [
  { id: "nasdaq", label: "纳指100 QDII", count: p => p.nasdaq.length },
  { id: "sp500", label: "标普500 QDII", count: p => p.sp500.length },
  { id: "etf", label: "场内 ETF", count: p => p.etf.length },
];

export default function EtfTable({ nasdaq, sp500, etf, lastUpdate }: Props) {
  const [tab, setTab] = useState<TabId>("nasdaq");
  const props = { nasdaq, sp500, etf, lastUpdate };

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-1 mb-6 border-b border-white/[0.07] pb-0">
        {TABS.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 py-2.5 text-sm font-medium rounded-t-lg transition-colors relative -mb-px ${
              tab === t.id
                ? "text-accent border border-b-bg-primary border-white/[0.07] bg-card"
                : "text-t-tertiary hover:text-t-primary"
            }`}
          >
            {t.label}
            <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
              tab === t.id ? "bg-accent/20 text-accent" : "bg-elevated text-t-muted"
            }`}>
              {t.count(props)}
            </span>
          </button>
        ))}
      </div>

      {/* Content */}
      {tab === "nasdaq" && <QdiiTable funds={nasdaq} />}
      {tab === "sp500" && <QdiiTable funds={sp500} />}
      {tab === "etf" && <EtfInTable funds={etf} />}
    </div>
  );
}
