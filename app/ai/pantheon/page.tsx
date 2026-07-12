import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "赛博活佛 · 群仙殿 | 凌逸清",
  description:
    "用 3D 大殿供奉各家 AI 众神——WASD 漫游，点神龛上香，看香火计数跳动，Cloudflare 大神居 C 位。",
};

// 群仙殿是自包含的单文件 HTML（内联 base64 贴图 + three.js CDN），
// 用 iframe 整块嵌入，与网站全局样式隔离、零冲突；
// 静态文件位于 public/ai/pantheon.html。
export default function PantheonPage() {
  return (
    <>
      {/* 全屏沉浸：隐藏页脚，减少干扰 */}
      <style dangerouslySetInnerHTML={{ __html: `footer{display:none!important}` }} />
      <iframe
        src="/ai/pantheon.html"
        title="赛博活佛 · 群仙殿"
        className="block w-full border-0"
        style={{ height: "calc(100dvh - 4rem)" }}
      />
    </>
  );
}
