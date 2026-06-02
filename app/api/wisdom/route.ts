// 智慧文集正文代理 —— 服务端转发 wise-hold 文档 API,绕过浏览器 CORS;
// md 转 HTML、docx 解包为 HTML,并注入 heading id 供右栏大纲锚点。
// 正文不落仓库,运行时按需拉取并缓存(见 revalidate)。
import { marked } from "marked";
import { NextRequest } from "next/server";

const UPSTREAM = "https://www.wise-hold.com/api/wisdom/file";
export const revalidate = 86400; // 缓存 1 天

function injectHeadingIds(html: string): string {
  let n = 0;
  return html.replace(
    /<h([1-4])(\s[^>]*)?>([\s\S]*?)<\/h\1>/g,
    (_m, lvl, attrs, inner) => `<h${lvl} id="wh-${n++}"${attrs || ""}>${inner}</h${lvl}>`,
  );
}

export async function GET(req: NextRequest) {
  const path = req.nextUrl.searchParams.get("path");
  if (!path) return new Response("missing path", { status: 400 });

  let upstream: Response;
  try {
    upstream = await fetch(`${UPSTREAM}?path=${encodeURIComponent(path)}`, {
      next: { revalidate },
    });
  } catch {
    return new Response("upstream fetch failed", { status: 502 });
  }
  if (!upstream.ok) return new Response("upstream error", { status: upstream.status });

  const raw = await upstream.text();
  let html: string;
  try {
    const j = JSON.parse(raw);
    // docx → {type:'html', content}；md → {type:'markdown', content}
    if (j && j.type === "html") html = String(j.content);
    else if (j && typeof j.content === "string") html = await marked.parse(j.content);
    else html = await marked.parse(raw);
  } catch {
    html = await marked.parse(raw); // 纯 markdown 文本
  }
  html = injectHeadingIds(html);

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
