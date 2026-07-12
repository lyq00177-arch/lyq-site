import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "一蓑烟雨 · 苏轼词境特展 | 凌逸清",
  description:
    "可走入的 3D 特展：八幅 AI 宽银幕词画沿一面墙按苏轼人生时间线排开，配博物馆展签与年表——从密州出猎到卒于常州。",
};

// 特展是自包含的单文件 HTML（three.js 走 /vendor 本地化），
// 与群仙殿(/ai/pantheon)同一嵌入模式：iframe 隔离全局样式。
export default function SushiExhibitionPage() {
  return (
    <>
      {/* 全屏沉浸：隐藏页脚 */}
      <style dangerouslySetInnerHTML={{ __html: `footer{display:none!important}` }} />
      <iframe
        src="/gallery/sushi.html"
        title="一蓑烟雨 · 苏轼词境特展"
        className="block w-full border-0"
        style={{ height: "calc(100dvh - 4rem)" }}
      />
    </>
  );
}
