import HoldingsView from "@/components/HoldingsView";
import { investors, HOLDINGS_SNAPSHOT_DATE } from "@/data/holdings";

export const metadata = {
  title: "名人持仓 · 21 位投资大师持仓追踪",
  description:
    "按思维范式追踪 21 位顶级投资人与政界名人的公开持仓:段永平、巴菲特、芒格、达利欧、伯里、阿克曼、佩洛西等，数据来源 SEC 13F 与 STOCK Act。",
};

export default function HoldingsPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="font-display text-3xl sm:text-4xl text-t-primary mb-2">
                名人<span className="text-accent">持仓</span>
              </h1>
              <p className="text-t-tertiary text-sm">
                按思维范式追踪 21 位投资大师与政界名人的持仓 · 数据来源：SEC 13F / STOCK Act 公开披露
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-xs text-t-muted">快照 · 更新于 {HOLDINGS_SNAPSHOT_DATE}</span>
            </div>
          </div>
        </div>

        <HoldingsView investors={investors} />

        <p className="mt-12 text-center text-xs text-t-muted">
          数据整理自 SEC 13F 季度披露及公开信息，仅供学习研究，不构成投资建议。投资有风险，入市需谨慎。
        </p>
      </div>
    </main>
  );
}
