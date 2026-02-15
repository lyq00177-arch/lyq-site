"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WeChatModal() {
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
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-5 p-6 rounded-2xl bg-dark-card border border-white/5 hover:border-indigo-500/30 transition-all duration-300 w-full text-left"
      >
        <span className="text-4xl">💬</span>
        <div>
          <div className="text-lg font-medium text-gray-200">微信</div>
          <div className="text-base text-gray-500">点击查看微信号</div>
        </div>
      </button>

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
              className="bg-dark-card border border-white/10 rounded-2xl p-8 max-w-sm w-full text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">添加微信</h3>
              <p className="text-gray-400 text-sm mb-6">搜索微信号添加好友</p>

              <div className="bg-dark-lighter rounded-xl p-4 mb-6 flex items-center justify-center">
                <span className="text-lg font-mono text-indigo-400 tracking-wider">
                  {wechatId}
                </span>
              </div>

              <button
                onClick={handleCopy}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
              >
                {copied ? "✓ 已复制" : "一键复制微信号"}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-sm text-gray-500 hover:text-gray-300 transition-colors"
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
