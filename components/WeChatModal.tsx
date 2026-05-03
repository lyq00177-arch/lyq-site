"use client";

import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ModalMode = "wechat" | "official" | "group";

interface WeChatModalProps {
  trigger?: ReactNode;
  mode?: ModalMode;
}

const modeConfig: Record<ModalMode, { emoji: string; title: string; subtitle: string }> = {
  wechat:   { emoji: "💬", title: "添加微信",   subtitle: "搜索微信号添加好友" },
  official: { emoji: "📱", title: "关注公众号", subtitle: "扫码关注，获取最新内容" },
  group:    { emoji: "👥", title: "加入群聊",   subtitle: "扫码进入交流群" },
};

function QrPlaceholder({ mode }: { mode: "official" | "group" }) {
  const [err, setErr] = useState(false);
  const src = mode === "official" ? "/qr-official.png" : "/qr-group.png";

  return (
    <div className="w-44 h-44 bg-white rounded-xl overflow-hidden flex items-center justify-center mx-auto">
      {!err ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={mode === "official" ? "公众号二维码" : "群聊二维码"}
          className="w-full h-full object-contain"
          onError={() => setErr(true)}
        />
      ) : (
        <div className="text-center p-4">
          <div className="text-4xl mb-2">{mode === "official" ? "📱" : "👥"}</div>
          <div className="text-xs text-gray-400 leading-relaxed">
            二维码即将上线
          </div>
        </div>
      )}
    </div>
  );
}

export default function WeChatModal({ trigger, mode = "wechat" }: WeChatModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const wechatId = "lyq__017";
  const config = modeConfig[mode];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(wechatId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = wechatId;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const defaultTrigger = (
    <button className="flex items-center gap-5 p-6 rounded-2xl bg-card border border-[rgb(var(--border)_/_var(--border-opacity))] hover:border-accent/30 transition-all duration-300 w-full text-left">
      <span className="text-4xl">{config.emoji}</span>
      <div>
        <div className="text-lg font-medium text-t-primary">{config.title}</div>
        <div className="text-base text-t-muted">{config.subtitle}</div>
      </div>
    </button>
  );

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{trigger ?? defaultTrigger}</div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card border border-[rgb(var(--border)_/_var(--border-opacity))] rounded-2xl p-8 max-w-sm w-full text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-5xl mb-4">{config.emoji}</div>
              <h3 className="text-xl font-bold text-t-primary mb-2">{config.title}</h3>
              <p className="text-t-tertiary text-sm mb-6">{config.subtitle}</p>

              {mode === "wechat" ? (
                <>
                  <div className="bg-elevated rounded-xl p-4 mb-6 flex items-center justify-center">
                    <span className="text-lg font-mono text-accent tracking-wider">{wechatId}</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="w-full py-3 rounded-xl bg-accent text-primary font-medium hover:bg-accent-light transition-all duration-300"
                  >
                    {copied ? "✓ 已复制" : "一键复制微信号"}
                  </button>
                </>
              ) : (
                <div className="mb-6">
                  <QrPlaceholder mode={mode} />
                </div>
              )}

              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-sm text-t-muted hover:text-t-secondary transition-colors"
              >
                关闭
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
