// 持仓占比双环图 — 由 ETF 页与名人持仓页共用
// 输入 top holdings（占比之和 < 100），组件自动补足「其他」扇区。

export type Holding = { symbol: string; name: string; weight: number; color: string };

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export function sectorPath(
  cx: number, cy: number,
  outerR: number, innerR: number,
  startAngle: number, endAngle: number,
) {
  const o1 = polarToCartesian(cx, cy, outerR, startAngle);
  const o2 = polarToCartesian(cx, cy, outerR, endAngle);
  const i1 = polarToCartesian(cx, cy, innerR, endAngle);
  const i2 = polarToCartesian(cx, cy, innerR, startAngle);
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${o1.x} ${o1.y} A ${outerR} ${outerR} 0 ${large} 1 ${o2.x} ${o2.y} L ${i1.x} ${i1.y} A ${innerR} ${innerR} 0 ${large} 0 ${i2.x} ${i2.y} Z`;
}

export function DonutChart({ holdings, label, accentCls }: { holdings: Holding[]; label: string; accentCls: string }) {
  const cx = 100, cy = 100, outerR = 88, innerR = 58, gap = 1;
  const topTotal = holdings.reduce((s, h) => s + h.weight, 0);
  const other = { symbol: "其他", name: "其他", weight: Math.max(0, 100 - topTotal), color: "#1e1e1e" };
  const allSegs = [...holdings, other];

  let angle = 0;
  const segs = allSegs.map((h) => {
    const sweep = (h.weight / 100) * 360;
    const s = { ...h, start: angle + gap / 2, end: angle + sweep - gap / 2 };
    angle += sweep;
    return s;
  });

  return (
    <div className="flex flex-col items-center gap-5">
      <p className={`text-xs font-mono tracking-widest uppercase ${accentCls}`}>{label}</p>
      <svg width="200" height="200" viewBox="0 0 200 200">
        {segs.map((s) => (
          <path
            key={s.symbol}
            d={sectorPath(cx, cy, outerR, innerR, s.start, s.end)}
            fill={s.color}
            opacity={s.symbol === "其他" ? 0.12 : 0.9}
          />
        ))}
        <text x="100" y="94" textAnchor="middle" fontSize="13" fontWeight="700" fill="currentColor" style={{ fill: "rgb(var(--color-text-primary, 232 227 216))" }}>
          前{holdings.length}大
        </text>
        <text x="100" y="112" textAnchor="middle" fontSize="10" style={{ fill: "rgb(var(--color-text-muted, 90 84 80))" }}>
          合计 {topTotal.toFixed(1)}%
        </text>
      </svg>

      <div className="grid grid-cols-2 gap-x-5 gap-y-2 w-full max-w-[220px]">
        {holdings.map((h) => (
          <div key={h.symbol} className="flex items-center gap-1.5">
            <span className="shrink-0 w-2 h-2 rounded-full" style={{ backgroundColor: h.color }} />
            <span className="text-[10px] font-mono text-t-muted">{h.symbol}</span>
            <span className="text-[10px] text-t-muted ml-auto tabular-nums">{h.weight}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
