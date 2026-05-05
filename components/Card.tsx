"use client";

import Link from "next/link";
import { useState } from "react";

/* ═══ Shared styles ═══════════════════════════════════════ */

const baseCard =
  "rounded-xl bg-card border border-[rgb(var(--border)_/_var(--border-opacity))] hover:border-accent/20 transition-all duration-300";

/* ═══ Sub-components ══════════════════════════════════════ */

export function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="text-accent text-xs tracking-tight">
      {"★".repeat(full)}
      {half ? "½" : ""}
      <span className="text-t-muted/30">
        {"★".repeat(5 - full - (half ? 1 : 0))}
      </span>
    </span>
  );
}

export function TagBadge({ tag }: { tag: string }) {
  const isHighlight = tag.includes("推荐") || tag.includes("本站");
  return (
    <span
      className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
        isHighlight
          ? "bg-accent/15 text-accent"
          : "bg-orange-500/15 text-orange-400"
      }`}
    >
      {tag}
    </span>
  );
}

export function CopyCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  if (!code) return null;
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="mt-2 text-xs px-3 py-1.5 rounded-md bg-surface border border-[rgb(var(--border)_/_var(--border-opacity))] text-t-muted hover:text-accent font-mono transition-colors"
    >
      {copied ? "已复制 ✓" : `邀请码: ${code}`}
    </button>
  );
}

/* ═══ ResourceCard ════════════════════════════════════════ */

interface ResourceCardProps {
  name: string;
  desc: string;
  url: string;
  rating: number;
  tag?: string;
  internal?: boolean;
}

export function ResourceCard({
  name,
  desc,
  url,
  rating,
  tag,
  internal,
}: ResourceCardProps) {
  const cls = `group flex flex-col gap-1.5 p-4 ${baseCard} hover:-translate-y-1 h-full`;
  const inner = (
    <>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-t-primary group-hover:text-accent transition-colors truncate">
          {name}
        </span>
        {tag && <TagBadge tag={tag} />}
      </div>
      <p className="text-xs text-t-muted leading-relaxed">{desc}</p>
      <Stars rating={rating} />
    </>
  );

  return internal ? (
    <Link href={url} className={cls}>
      {inner}
    </Link>
  ) : (
    <a href={url} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  );
}

/* ═══ PerkCard ════════════════════════════════════════════ */

interface PerkCardProps {
  name: string;
  desc: string;
  link: string;
  benefit?: string; // 核心利益，大字显示，如"永久 20% 手续费减免"
  tutorialLink?: string;
  code?: string;
}

export function PerkCard({
  name,
  desc,
  link,
  benefit,
  tutorialLink,
}: PerkCardProps) {
  return (
    <div className="flex flex-col p-5 rounded-2xl bg-card border border-[rgb(var(--border)_/_var(--border-opacity))] hover:border-accent/20 transition-all duration-300">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-base font-semibold text-t-primary">{name}</h3>
      </div>

      {benefit && (
        <p className="text-xl font-bold text-accent mb-1">{benefit}</p>
      )}

      <p className="text-sm text-t-tertiary mb-4 flex-1">{desc}</p>

      <div className="flex gap-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center px-3 py-2 rounded-lg text-sm font-medium bg-accent text-[#0a0a0a] hover:opacity-90 transition-opacity"
        >
          立即领取
        </a>
        {tutorialLink && (
          <a
            href={tutorialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-3 py-2 rounded-lg text-sm font-medium border border-accent/30 text-accent hover:bg-accent/10 transition-colors"
          >
            查看教程
          </a>
        )}
      </div>

    </div>
  );
}

/* ═══ ToolCard ════════════════════════════════════════════ */

interface ToolCardProps {
  icon: string;
  title: string;
  desc: string;
  href: string;
}

export function ToolCard({ icon, title, desc, href }: ToolCardProps) {
  return (
    <Link
      href={href}
      className={`group flex flex-col gap-3 p-5 ${baseCard} hover:bg-elevated h-full`}
    >
      <span className="text-lg text-accent/50 group-hover:text-accent transition-colors">
        {icon}
      </span>
      <div>
        <div className="text-sm font-medium text-t-secondary group-hover:text-t-primary transition-colors mb-1">
          {title}
        </div>
        <div className="text-xs text-t-muted leading-relaxed">{desc}</div>
      </div>
    </Link>
  );
}
