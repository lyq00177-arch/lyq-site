"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import WeChatModal from "@/components/WeChatModal";

const links = [
  { icon: "📢", label: "公众号", desc: "凌逸清的小茶馆", href: "#" },
  { icon: "🐦", label: "Twitter/X", desc: "@ykszs017", href: "https://x.com/ykszs017" },
  { icon: "📧", label: "邮箱", desc: "863730738@qq.com", href: "mailto:863730738@qq.com" },
];

export default function ConnectPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-20">
      <Link href="/" className="text-base text-t-tertiary hover:text-accent transition-colors mb-12">
        ← 返回首页
      </Link>

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-4"
      >
        🔗 <span className="gradient-text">链接</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="text-lg text-t-muted mb-12"
      >
        选择你喜欢的方式找到我
      </motion.p>

      <div className="w-full max-w-xl space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <WeChatModal />
        </motion.div>

        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + i * 0.08 }}
            className="flex items-center gap-5 p-6 rounded-2xl bg-card border border-white/5 hover:border-accent/30 transition-all duration-300 w-full"
          >
            <span className="text-4xl">{link.icon}</span>
            <div>
              <div className="text-lg font-medium text-t-primary">{link.label}</div>
              <div className="text-base text-t-muted">{link.desc}</div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
