"use client";

import WeChatModal from "@/components/WeChatModal";

const TWITTER_URL = "https://x.com/intent/follow?screen_name=ykszs017";

export function EtfSocialBar({ usdCny }: { usdCny: number | null }) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {usdCny != null && (
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card border border-white/[0.07]">
          <span className="text-[10px] font-mono text-t-muted">USD/CNY</span>
          <span className="text-sm font-bold text-accent tabular-nums">{usdCny.toFixed(4)}</span>
        </div>
      )}

      <WeChatModal
        mode="group"
        trigger={
          <button className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors font-medium">
            <span>💬</span>
            <span>加入群聊</span>
          </button>
        }
      />

      <a
        href={TWITTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-card border border-white/[0.07] text-t-secondary hover:text-accent hover:border-accent/20 transition-colors font-medium"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        <span>关注</span>
      </a>

      <WeChatModal
        mode="official"
        trigger={
          <button className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-card border border-white/[0.07] text-t-secondary hover:text-accent hover:border-accent/20 transition-colors font-medium">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.11.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.49.49 0 0 1 .177-.554 5.52 5.52 0 0 0 2.502-4.626c0-3.273-3.089-5.9-6.061-6.117zm-1.48 2.556c.535 0 .969.44.969.984a.976.976 0 0 1-.969.984.976.976 0 0 1-.969-.984c0-.544.434-.984.97-.984zm4.845 0c.535 0 .969.44.969.984a.976.976 0 0 1-.969.984.976.976 0 0 1-.969-.984c0-.544.434-.984.969-.984z" />
            </svg>
            <span>公众号</span>
          </button>
        }
      />
    </div>
  );
}
