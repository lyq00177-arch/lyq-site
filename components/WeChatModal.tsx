"use client";

import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ModalMode = "wechat" | "official" | "group";

interface WeChatModalProps {
  trigger?: ReactNode;
  mode?: ModalMode;
}

const modeConfig: Record<ModalMode, { emoji: string; title: string; subtitle: string }> = {
  wechat:   { emoji: "💬", title: "扫码加我",   subtitle: "扫描二维码，添加我为好友" },
  official: { emoji: "📱", title: "关注公众号", subtitle: "扫码关注，获取最新内容" },
  group:    { emoji: "👥", title: "加入群聊",   subtitle: "扫码进入交流群" },
};

const qrSrc: Record<ModalMode, string> = {
  wechat: "/qr-wechat.jpg",
  official: "/qr-official.jpg",
  group: "/qr-group.png",
};
const qrAlt: Record<ModalMode, string> = {
  wechat: "微信二维码",
  official: "公众号二维码",
  group: "群聊二维码",
};

function QrPlaceholder({ mode }: { mode: ModalMode }) {
  const [err, setErr] = useState(false);

  return (
    <div className="w-44 h-44 bg-white rounded-xl overflow-hidden flex items-center justify-center mx-auto">
      {!err ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={qrSrc[mode]}
          alt={qrAlt[mode]}
          className="w-full h-full object-contain"
          onError={() => setErr(true)}
        />
      ) : (
        <div className="text-center p-4">
          <div className="text-4xl mb-2">{modeConfig[mode].emoji}</div>
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

              <div className="mb-4">
                <QrPlaceholder mode={mode} />
              </div>

              {mode === "wechat" && (
                <button
                  onClick={handleCopy}
                  className="w-full py-2.5 rounded-xl bg-elevated text-sm font-mono text-t-secondary hover:text-accent transition-all duration-300"
                >
                  {copied ? "✓ 已复制" : `微信号 ${wechatId}（点击复制）`}
                </button>
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
