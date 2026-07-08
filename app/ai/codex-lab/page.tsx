import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Codex 上手记 · 玩中学 | 凌逸清",
  description:
    "把 122 万浏览的 Codex 入门教程做成能玩的互动游戏——在闯关里学会上手 Codex App。",
};

// 原型是自包含的单文件 HTML（内联 CSS + 原生 JS），先用 iframe 整块嵌入，
// 与网站全局样式隔离、零冲突；静态文件位于 public/codex-lab.html。
export default function CodexLabPage() {
  return (
    <>
      {/* 手机端全屏沉浸：隐藏网站页脚，减少干扰 */}
      <style dangerouslySetInnerHTML={{ __html: `@media (max-width:768px){footer{display:none!important}}` }} />
      <iframe
        src="/codex-lab.html"
        title="Codex 上手记 · 玩中学"
        className="block w-full border-0"
        style={{ height: "calc(100dvh - 4rem)" }}
      />
    </>
  );
}
