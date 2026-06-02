"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import type { WisdomMaster, WisdomItem } from "@/data/wisdom/tree";

const PROSE =
  "leading-relaxed text-t-secondary [&>p]:mb-4 [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:text-t-primary [&>h1]:mt-8 [&>h1]:mb-4 [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-t-primary [&>h2]:mt-8 [&>h2]:mb-3 [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:text-t-primary [&>h3]:mt-6 [&>h3]:mb-2 [&>h4]:text-base [&>h4]:font-semibold [&>h4]:text-accent [&>h4]:mt-6 [&>h4]:mb-2 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-4 [&>li]:mb-1 [&>blockquote]:border-l-2 [&>blockquote]:border-accent/40 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:my-4 [&>blockquote]:text-t-tertiary [&_strong]:text-t-primary [&_a]:text-accent";

type Outline = { id: string; level: number; text: string };

function extractOutline(html: string): Outline[] {
  const out: Outline[] = [];
  const re = /<h([1-4])\s+id="(wh-\d+)"[^>]*>([\s\S]*?)<\/h\1>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const text = m[3].replace(/<[^>]+>/g, "").trim();
    if (text) out.push({ id: m[2], level: Number(m[1]), text });
  }
  return out;
}

export default function WisdomReader({
  masters,
  quotes,
}: {
  masters: WisdomMaster[];
  quotes: { text: string; person: string }[];
}) {
  const [masterId, setMasterId] = useState(masters[0].id);
  const [item, setItem] = useState<WisdomItem | null>(null);
  const [html, setHtml] = useState("");
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [daily, setDaily] = useState<{ text: string; person: string } | null>(null);
  const articleRef = useRef<HTMLDivElement>(null);

  const master = masters.find((m) => m.id === masterId) ?? masters[0];

  // 今日金句:客户端按当年天数轮换(避免服务端/客户端时区导致 hydration 不匹配)
  useEffect(() => {
    if (!quotes.length) return;
    const day = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
    setDaily(quotes[day % quotes.length]);
  }, [quotes]);

  // 搜索:跨大师按标题过滤
  const searchHits = useMemo(() => {
    const q = query.trim();
    if (!q) return null;
    const hits: { master: WisdomMaster; item: WisdomItem }[] = [];
    for (const m of masters)
      for (const c of m.categories)
        for (const it of c.items)
          if (it.title.includes(q)) hits.push({ master: m, item: it });
    return hits;
  }, [query, masters]);

  // 默认载入当前大师首篇
  useEffect(() => {
    const first = master.categories[0]?.items[0];
    if (first) loadItem(first);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [masterId]);

  async function loadItem(it: WisdomItem) {
    setItem(it);
    setLoading(true);
    setHtml("");
    setAnalysis(null);
    try {
      const r = await fetch(`/api/wisdom?path=${encodeURIComponent(it.path)}`);
      setHtml(r.ok ? await r.text() : "<p>正文加载失败,请稍后重试。</p>");
    } catch {
      setHtml("<p>正文加载失败,请稍后重试。</p>");
    }
    setLoading(false);
    // 解析(本站生成,仅在已补齐时请求,避免 404 噪音)
    if (it.hasAnalysis) {
      try {
        const ar = await fetch(`/wisdom/${it.id}.analysis.html`);
        setAnalysis(ar.ok ? await ar.text() : "");
      } catch {
        setAnalysis("");
      }
    } else {
      setAnalysis("");
    }
    articleRef.current?.scrollTo?.({ top: 0 });
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const outline = useMemo(() => extractOutline(html), [html]);

  function scrollToHeading(id: string) {
    articleRef.current?.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const categoryOf = (id: string | undefined) =>
    master.categories.find((c) => c.items.some((it) => it.id === id));

  return (
    <div>
      {/* 今日金句 */}
      {daily && (
        <div className="mb-8 rounded-2xl border border-accent/15 bg-accent/5 px-5 py-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-accent/70 mb-1.5">今日金句</div>
          <p className="text-t-primary leading-relaxed">「{daily.text}」</p>
          <p className="text-xs text-t-muted mt-1.5">— {daily.person}</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)_240px] gap-6">
        {/* 左:目录树 */}
        <aside className="lg:sticky lg:top-20 lg:self-start lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
          {/* 大师切换 */}
          <div className="flex gap-2 mb-4 flex-wrap">
            {masters.map((m) => {
              const active = m.id === masterId;
              return (
                <button
                  key={m.id}
                  onClick={() => setMasterId(m.id)}
                  title={m.name}
                  className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl border text-sm transition-colors ${
                    active ? "bg-accent/15 text-accent border-accent/30" : "bg-card text-t-tertiary border-white/[0.06] hover:text-accent"
                  }`}
                >
                  {m.avatar ? (
                    <Image src={m.avatar} alt={m.name} width={22} height={22} className="rounded-full object-cover w-[22px] h-[22px]" />
                  ) : null}
                  <span className="whitespace-nowrap">{m.name}</span>
                </button>
              );
            })}
          </div>

          {/* 搜索 */}
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索篇目标题…"
            className="w-full mb-4 px-3 py-2 rounded-xl bg-card border border-white/[0.06] text-sm text-t-primary placeholder:text-t-muted focus:outline-none focus:border-accent/30"
          />

          {searchHits ? (
            <div className="flex flex-col gap-1">
              <div className="text-xs text-t-muted mb-1">{searchHits.length} 条结果</div>
              {searchHits.map(({ master: m, item: it }) => (
                <button
                  key={it.id}
                  onClick={() => { setMasterId(m.id); loadItem(it); setQuery(""); }}
                  className="text-left text-sm px-2 py-1.5 rounded-lg text-t-tertiary hover:text-accent hover:bg-white/[0.03]"
                >
                  <span className="text-[10px] text-t-muted mr-1">{m.name}</span>
                  {it.title}
                </button>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {master.categories.map((c) => (
                <div key={c.id}>
                  <div className="text-xs font-medium text-t-secondary mb-1.5">
                    {c.icon} {c.title} <span className="text-t-muted">· {c.items.length}</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    {c.items.map((it) => {
                      const active = it.id === item?.id;
                      return (
                        <button
                          key={it.id}
                          onClick={() => loadItem(it)}
                          className={`text-left text-sm px-2 py-1.5 rounded-lg transition-colors ${
                            active ? "bg-accent/10 text-accent" : "text-t-tertiary hover:text-accent hover:bg-white/[0.03]"
                          }`}
                        >
                          {it.title}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </aside>

        {/* 中:正文 */}
        <div className="min-w-0">
          {item && (
            <div className="mb-4 text-xs text-t-muted">
              {master.name} <span className="mx-1">›</span> {categoryOf(item.id)?.title} <span className="mx-1">›</span>{" "}
              <span className="text-t-secondary">{item.title}</span>
            </div>
          )}
          <h2 className="font-display text-2xl sm:text-3xl text-t-primary mb-6">{item?.title ?? "选择左侧篇目开始阅读"}</h2>
          <div
            ref={articleRef}
            className={`${PROSE} max-w-none`}
          >
            {loading ? (
              <p className="text-t-muted">加载中…</p>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: html }} />
            )}
          </div>
        </div>

        {/* 右:大纲 + 解析 */}
        <aside className="lg:sticky lg:top-20 lg:self-start lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto hidden lg:block">
          {outline.length > 0 && (
            <div className="mb-6">
              <div className="text-xs font-medium text-t-secondary mb-2">大纲</div>
              <div className="flex flex-col gap-1 border-l border-white/[0.06] pl-3">
                {outline.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => scrollToHeading(h.id)}
                    className="text-left text-xs text-t-muted hover:text-accent transition-colors truncate"
                    style={{ paddingLeft: (h.level - 1) * 8 }}
                    title={h.text}
                  >
                    {h.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="rounded-xl border border-accent/15 bg-accent/[0.03] p-3">
            <div className="text-xs font-medium text-accent mb-2">✦ 凌逸清的解读</div>
            {analysis === null ? (
              <p className="text-xs text-t-muted">加载中…</p>
            ) : analysis ? (
              <div className={`${PROSE} text-xs [&>p]:mb-2 [&>p]:text-xs`} dangerouslySetInnerHTML={{ __html: analysis }} />
            ) : (
              <p className="text-xs text-t-muted leading-relaxed">本篇解读待补。我会陆续为每篇文献写下带个人视角的解析。</p>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
