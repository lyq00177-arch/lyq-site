import {
  nasdaqFunds, sp500Funds, etfFunds,
  nasdaqTopHoldings, sp500TopHoldings, nasdaqMilestones,
  DATA_SNAPSHOT_DATE,
} from "@/data/etf-funds";
import EtfTable from "./EtfTable";
import { EtfSocialBar } from "./EtfSocialBar";

async function fetchEtfData() {
  try {
    const res = await fetch("https://www.wise-etf.com/api/etfs", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("api failed");
    const json = await res.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (json?.data?.length > 0) return json.data as any[];
  } catch {
    // fall through to snapshot
  }
  return null;
}

async function fetchUsdCny(): Promise<number | null> {
  try {
    const res = await fetch("https://open.er-api.com/v6/latest/USD", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error();
    const json = await res.json();
    return typeof json.rates?.CNY === "number" ? json.rates.CNY : null;
  } catch {
    return null;
  }
}

// ── Sub-sections (pure JSX, no client state needed) ──────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-mono tracking-[0.2em] text-t-muted uppercase mb-4">
      {children}
    </p>
  );
}

function Divider() {
  return <div className="h-px bg-gradient-to-r from-accent/15 via-accent/5 to-transparent my-16" />;
}

function IndexIntro() {
  const ndxFacts = [
    { label: "指数代号", value: "NDX" },
    { label: "成立年份", value: "1985年" },
    { label: "成分股", value: "100只" },
    { label: "再平衡", value: "每季度" },
    { label: "编制方", value: "纳斯达克" },
    { label: "20年年化", value: "约 15%" },
  ];

  const spxFacts = [
    { label: "指数代号", value: "SPX" },
    { label: "成立年份", value: "1957年" },
    { label: "成分股", value: "500只" },
    { label: "再平衡", value: "每季度" },
    { label: "编制方", value: "标准普尔" },
    { label: "20年年化", value: "约 10%" },
  ];

  return (
    <section id="intro" className="scroll-mt-24">
      <SectionLabel>核心介绍</SectionLabel>
      <h2 className="font-display text-2xl sm:text-3xl text-t-primary mb-8">
        认识两大<span className="text-accent">核心指数</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* NDX */}
        <div className="bg-card border border-white/[0.06] rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">NDX</span>
            <h3 className="font-semibold text-t-primary">纳斯达克100</h3>
          </div>
          <div className="space-y-3 text-sm text-t-secondary leading-relaxed">
            <p>追踪在纳斯达克上市、市值最大的
              <span className="text-t-primary font-medium"> 100 家非金融企业</span>，
              科技股约占 60%，是全球科技创新最密集的指数。</p>
            <p>集中度更高，<span className="text-t-primary font-medium">不含金融股</span>，
              前十大持仓合计约占 52%。历史年化约 15%，但波动也更大——
              互联网泡沫期最大回撤达 <span className="text-amber-400 font-medium">83%</span>。</p>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-2">
            {ndxFacts.map(f => (
              <div key={f.label} className="bg-elevated rounded-xl p-3">
                <div className="text-[10px] text-t-muted mb-1">{f.label}</div>
                <div className="text-sm font-bold text-accent">{f.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SPX */}
        <div className="bg-card border border-white/[0.06] rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">SPX</span>
            <h3 className="font-semibold text-t-primary">标准普尔500</h3>
          </div>
          <div className="space-y-3 text-sm text-t-secondary leading-relaxed">
            <p>涵盖美国最大的
              <span className="text-t-primary font-medium"> 500 家上市公司</span>，
              覆盖全行业，是衡量美国整体经济的权威基准指数。</p>
            <p>分散度更高，<span className="text-t-primary font-medium">含金融、医疗、能源等全行业</span>，
              前十大持仓约占 36%。历史年化约 10%，波动相对温和，适合长期配置底仓。</p>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-2">
            {spxFacts.map(f => (
              <div key={f.label} className="bg-elevated rounded-xl p-3">
                <div className="text-[10px] text-t-muted mb-1">{f.label}</div>
                <div className="text-sm font-bold text-emerald-400">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IndexHistory() {
  return (
    <section id="history" className="scroll-mt-24">
      <SectionLabel>指数诞生与发展</SectionLabel>
      <h2 className="font-display text-2xl sm:text-3xl text-t-primary mb-8">
        从 1971 到今天
      </h2>
      <div className="relative">
        {/* 竖线 */}
        <div className="absolute left-[52px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent hidden sm:block" />
        <div className="space-y-6">
          {nasdaqMilestones.map((m, i) => (
            <div key={m.year} className="flex gap-4 sm:gap-6 items-start group">
              <div className="shrink-0 flex flex-col items-center w-[52px] relative">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors ${
                  i === nasdaqMilestones.length - 1
                    ? "bg-accent text-[#0a0a0a] border-accent"
                    : "bg-card border-accent/30 text-accent group-hover:border-accent"
                }`}>
                  {(i + 1).toString().padStart(2, "0")}
                </div>
              </div>
              <div className="flex-1 pb-2">
                <span className="text-xs font-mono text-accent/70 mb-1 block">{m.year}</span>
                <p className="text-sm text-t-secondary leading-relaxed">{m.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Donut chart helpers ────────────────────────────────────────────────────────

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function sectorPath(
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

type Holding = { symbol: string; name: string; weight: number; color: string };

function DonutChart({ holdings, label, accentCls }: { holdings: Holding[]; label: string; accentCls: string }) {
  const cx = 100, cy = 100, outerR = 88, innerR = 58, gap = 1;
  const topTotal = holdings.reduce((s, h) => s + h.weight, 0);
  const other = { symbol: "其他", name: "其他", weight: 100 - topTotal, color: "#1e1e1e" };
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

function Holdings() {
  return (
    <section id="holdings" className="scroll-mt-24">
      <SectionLabel>核心持仓占比</SectionLabel>
      <h2 className="font-display text-2xl sm:text-3xl text-t-primary mb-8">
        前十大持仓
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
        <DonutChart holdings={nasdaqTopHoldings} label="纳斯达克100" accentCls="text-accent" />
        <DonutChart holdings={sp500TopHoldings} label="标普500" accentCls="text-emerald-400" />
      </div>
      <p className="mt-6 text-center text-xs text-t-muted">
        数据来源：Nasdaq / S&amp;P 官网 · 每季度再平衡 · 公司颜色在两图中保持一致
      </p>
    </section>
  );
}

function InvestmentMethods() {
  const methods = [
    {
      title: "场外QDII基金",
      badge: "推荐新手",
      badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
      pros: ["门槛极低，10 元起投", "可设置每月自动定投", "操作简单，天天基金 APP 直接操作"],
      cons: ["申购赎回 T+2 到账", "部分热门基金暂停申购"],
      note: "适合：长期定投、首次入场",
    },
    {
      title: "场内ETF",
      badge: "费率最优",
      badgeColor: "bg-accent/15 text-accent border-accent/20",
      pros: ["实时买卖，价格透明", "综合费率通常更低", "证券账户直接下单"],
      cons: ["存在溢价风险（溢价>3%需谨慎）", "需要开证券账户"],
      note: "适合：有股票账户、灵活操作",
    },
    {
      title: "直接买美股",
      badge: "最灵活",
      badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/20",
      pros: ["直接持有 QQQ 等原版 ETF", "无 QDII 汇率损耗问题", "不受 5 万美元购汇限制"],
      cons: ["需开海外券商账户（流程复杂）", "跨境税务申报问题", "资金出境有限制"],
      note: "适合：已有海外资产、高净值",
    },
  ];

  return (
    <section id="methods" className="scroll-mt-24">
      <SectionLabel>三种投资方式对比</SectionLabel>
      <h2 className="font-display text-2xl sm:text-3xl text-t-primary mb-8">
        怎么买最合适？
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {methods.map((m) => (
          <div key={m.title} className="bg-card border border-white/[0.07] rounded-2xl p-5 flex flex-col gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-t-primary">{m.title}</h3>
                <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${m.badgeColor}`}>
                  {m.badge}
                </span>
              </div>
            </div>
            <div className="flex-1 space-y-1.5">
              {m.pros.map((p) => (
                <div key={p} className="flex gap-2 text-xs text-t-secondary">
                  <span className="text-emerald-400 shrink-0 mt-0.5">✓</span>
                  <span>{p}</span>
                </div>
              ))}
              {m.cons.map((c) => (
                <div key={c} className="flex gap-2 text-xs text-t-secondary">
                  <span className="text-red-400 shrink-0 mt-0.5">✗</span>
                  <span>{c}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-t-muted pt-2 border-t border-white/[0.06]">
              {m.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function DcaComparison() {
  const scenarios = [
    {
      label: "纳斯达克100 QDII",
      cagr: "历史年化 ~15%",
      total: 150,
      cost: 24,
      color: "bg-accent",
      textColor: "text-accent",
    },
    {
      label: "标普500 QDII",
      cagr: "历史年化 ~10%",
      total: 76,
      cost: 24,
      color: "bg-emerald-500",
      textColor: "text-emerald-400",
    },
    {
      label: "余额宝 / 货币基金",
      cagr: "历史年化 ~3%",
      total: 33,
      cost: 24,
      color: "bg-blue-500",
      textColor: "text-blue-400",
    },
    {
      label: "存银行活期",
      cagr: "约 0%",
      total: 24,
      cost: 24,
      color: "bg-white/20",
      textColor: "text-t-muted",
    },
  ];
  const maxTotal = scenarios[0].total;

  return (
    <section id="dca" className="scroll-mt-24">
      <SectionLabel>定投20年资产对比</SectionLabel>
      <div className="flex items-end justify-between mb-2 flex-wrap gap-2">
        <h2 className="font-display text-2xl sm:text-3xl text-t-primary">
          每月定投 <span className="text-accent">1000 元</span>，坚持 20 年
        </h2>
      </div>
      <p className="text-sm text-t-muted mb-8">
        以各资产历史年化收益测算（本金合计 24 万元）。历史收益不代表未来，仅供参考。
      </p>
      <div className="space-y-5">
        {scenarios.map((s) => {
          const returns = s.total - s.cost;
          const barPct = (s.total / maxTotal) * 100;
          return (
            <div key={s.label} className="space-y-1.5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-t-primary">{s.label}</span>
                  <span className="ml-2 text-xs text-t-muted">{s.cagr}</span>
                </div>
                <div className="text-right">
                  <span className={`text-lg font-bold tabular-nums ${s.textColor}`}>
                    {s.total}万
                  </span>
                  {returns > 0 && (
                    <span className="ml-1.5 text-xs text-t-muted">
                      +{returns}万收益
                    </span>
                  )}
                </div>
              </div>
              <div className="h-7 bg-elevated rounded-lg overflow-hidden relative">
                {/* Returns portion */}
                <div
                  className={`absolute inset-0 ${s.color} opacity-25 rounded-lg transition-all duration-700`}
                  style={{ width: `${barPct}%` }}
                />
                {/* Principal portion */}
                <div
                  className="absolute inset-0 bg-white/10 rounded-lg transition-all duration-700"
                  style={{ width: `${(s.cost / maxTotal) * 100}%` }}
                />
                {/* Label */}
                <div
                  className="absolute inset-y-0 flex items-center px-2.5 transition-all duration-700"
                  style={{ left: `${barPct}%`, transform: "translateX(-100%)" }}
                >
                  <span className={`text-xs font-semibold tabular-nums ${s.textColor}`}>
                    {s.total}万
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-xs text-t-muted">
        ＊计算基于复利定投公式，不含税费。实际收益受市场波动影响。
      </p>
    </section>
  );
}

function AccountGuide() {
  const steps = [
    { n: "01", title: "下载基金平台 APP", desc: "支付宝、招商银行 APP、各大券商均支持买基金，注册并完成实名认证" },
    { n: "02", title: "完成实名认证", desc: "填写身份证信息，约 3 分钟，确保账户安全" },
    { n: "03", title: "绑定银行卡", desc: "开通基金账户，用于申购赎回时资金往来" },
    { n: "04", title: "搜索基金代码", desc: "推荐新手：019172（摩根纳指A，0.60%综合费率，开放申购）" },
    { n: "05", title: "设置定期定投", desc: "选择金额和日期，开启自动扣款，省心长期持有" },
    { n: "06", title: "忽略短期波动", desc: "长期定投摊低成本，不要因短期涨跌频繁操作" },
  ];

  return (
    <section id="guide" className="scroll-mt-24">
      <SectionLabel>开户引导</SectionLabel>
      <h2 className="font-display text-2xl sm:text-3xl text-t-primary mb-8">
        如何开始投资？
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((s) => (
          <div key={s.n} className="flex gap-4 p-4 bg-card border border-white/[0.06] rounded-xl">
            <div className="shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <span className="text-xs font-bold font-mono text-accent">{s.n}</span>
            </div>
            <div>
              <div className="text-sm font-medium text-t-primary mb-0.5">{s.title}</div>
              <div className="text-xs text-t-muted leading-relaxed">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function EtfPage() {
  const [liveEtf, usdCny] = await Promise.all([fetchEtfData(), fetchUsdCny()]);

  const etf = etfFunds.map(f => {
    if (!liveEtf) return f;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const live = liveEtf.find((d: any) => d.code === f.code);
    if (!live) return f;
    return {
      ...f,
      scale: live.scale ?? f.scale,
      ytdReturn: live.ytd_return ?? f.ytdReturn,
      marketPrice: live.market_price ?? f.marketPrice,
      nav: live.nav ?? f.nav,
      premium: live.premium ?? f.premium,
      changePct: live.change_pct ?? f.changePct,
      trackError: live.track_error ?? f.trackError,
    };
  });

  const isLive = liveEtf !== null;
  const now = new Date();
  const updateStr = isLive
    ? `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`
    : DATA_SNAPSHOT_DATE;

  return (
    <main className="min-h-screen px-4 sm:px-6 py-20">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="mb-10">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
            <div>
              <h1 className="font-display text-3xl sm:text-4xl text-t-primary mb-2">
                ETF <span className="text-accent">追踪</span>
              </h1>
              <p className="text-t-tertiary text-sm">
                纳指100 · 标普500 · 场内ETF  ·  数据来源：天天基金网
              </p>
            </div>
            <div className="flex flex-col items-end gap-3">
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${isLive ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
                <span className="text-xs text-t-muted">
                  {isLive ? "实时" : "快照"} · 更新于 {updateStr}
                </span>
              </div>
              <EtfSocialBar usdCny={usdCny} />
            </div>
          </div>

          {/* Stats summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            {[
              { label: "纳指QDII", value: `${nasdaqFunds.length}只`, sub: `${nasdaqFunds.filter(f => f.status === "open").length}只开放` },
              { label: "标普QDII", value: `${sp500Funds.length}只`, sub: "场外互联基金" },
              { label: "场内ETF", value: `${etf.length}只`, sub: "交易所直接买卖" },
              { label: "综合费率", value: "最低 0.6%", sub: "年运作费率" },
            ].map(s => (
              <div key={s.label} className="bg-card border border-white/[0.06] rounded-xl px-4 py-3">
                <div className="text-xs text-t-muted mb-1">{s.label}</div>
                <div className="text-lg font-bold text-accent">{s.value}</div>
                <div className="text-xs text-t-tertiary">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Content sections ── */}
        <IndexIntro />
        <Divider />
        <IndexHistory />
        <Divider />
        <Holdings />
        <Divider />
        <InvestmentMethods />
        <Divider />
        <DcaComparison />
        <Divider />

        {/* ── Fund table ── */}
        <section id="funds" className="scroll-mt-24">
          <SectionLabel>基金筛选</SectionLabel>
          <h2 className="font-display text-2xl sm:text-3xl text-t-primary mb-6">
            全量基金对比
          </h2>
          <EtfTable
            nasdaq={nasdaqFunds}
            sp500={sp500Funds}
            etf={etf}
            lastUpdate={updateStr}
          />
        </section>

        <Divider />

        {/* ── Account guide ── */}
        <AccountGuide />

        {/* ── Selection tip ── */}
        <div className="mt-12 p-4 bg-amber-500/5 border border-amber-500/15 rounded-xl">
          <p className="text-xs text-t-secondary leading-relaxed">
            <span className="text-accent font-medium">选基参考：</span>
            费率最低可用的纳指QDII是<span className="text-t-primary">摩根(019172, 0.72%综合)</span>和
            <span className="text-t-primary">广发(270042, 1.1%跟踪误差最小, 规模最大)</span>。
            场内ETF溢价超过 3% 时需谨慎，溢价买入亏损风险更高。
            A类/C类区别：持有&lt;7天选A，长期定投选C（无申购费但有销售服务费）。
          </p>
        </div>

        {/* ── Disclaimer ── */}
        <p className="mt-6 text-center text-xs text-t-muted">
          本页数据来源于天天基金网，每小时自动更新，不构成投资建议。投资有风险，入市需谨慎。
        </p>

      </div>
    </main>
  );
}
