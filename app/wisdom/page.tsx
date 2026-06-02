import WisdomReader from "@/components/WisdomReader";
import { wisdomMasters } from "@/data/wisdom/tree";
import { wisdomQuotes } from "@/data/wisdom/quotes";

export const metadata = {
  title: "智慧文集 · 投资大师文献读书馆",
  description:
    "巴菲特、芒格、段永平、李录的股东大会、演讲采访与经典语录，配凌逸清带个人视角的解读。",
};

export default function WisdomPage() {
  return (
    <main className="min-h-screen px-4 sm:px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="font-display text-3xl sm:text-4xl text-t-primary mb-2">
            智慧<span className="text-accent">文集</span>
          </h1>
          <p className="text-t-tertiary text-sm">
            向大师学习 · 巴菲特 / 芒格 / 段永平 / 李录 的原始文献 + 我的解读
          </p>
        </div>

        <WisdomReader masters={wisdomMasters} quotes={wisdomQuotes} />

        <p className="mt-12 text-center text-xs text-t-muted">
          文献整理自公开资料（参考 wise-hold.com），版权归原作者所有；解读由本站生成，仅供学习研究。
        </p>
      </div>
    </main>
  );
}
