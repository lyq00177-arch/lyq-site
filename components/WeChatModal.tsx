"use client";

import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WeChatModalProps {
  trigger?: ReactNode;
}

export default function WeChatModal({ trigger }: WeChatModalProps) {
  const defaultTrigger = (
    <button className="flex items-center gap-5 p-6 rounded-2xl bg-card border border-[rgb(var(--border)_/_var(--border-opacity))] hover:border-accent/30 transition-all duration-300 w-full text-left">
      <span className="text-4xl">💬</span>
      <div>
        <div className="text-lg font-medium text-t-primary">微信</div>
        <div className="text-base text-t-muted">点击查看微信号</div>
      </div>
    </button>
  );
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const wechatId = "lyq__017";

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
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-t-primary mb-2">添加微信</h3>
              <p className="text-t-tertiary text-sm mb-6">搜索微信号添加好友</p>

              <div className="bg-elevated rounded-xl p-4 mb-6 flex items-center justify-center">
                <span className="text-lg font-mono text-accent tracking-wider">
                  {wechatId}
                </span>
              </div>

              <button
                onClick={handleCopy}
                className="w-full py-3 rounded-xl bg-accent text-primary font-medium hover:bg-accent-light transition-all duration-300"
              >
                {copied ? "✓ 已复制" : "一键复制微信号"}
              </button>

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
