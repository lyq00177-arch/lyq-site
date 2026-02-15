"use client";

import { motion } from "framer-motion";
import WeChatModal from "./WeChatModal";

const socialLinks = [
  { icon: "📢", label: "公众号", href: "#", description: "凌逸清的小茶馆" },
  { icon: "🐦", label: "Twitter/X", href: "https://x.com/ykszs017", description: "关注我的推特" },
  { icon: "📧", label: "邮箱", href: "mailto:863730738@qq.com", description: "863730738@qq.com" },
];

export default function SocialLinks() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {/* WeChat with modal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0 }}
      >
        <WeChatModal />
      </motion.div>

      {socialLinks.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
          className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-dark-card border border-white/5 hover:border-indigo-500/30 transition-all duration-300 glow-card"
        >
          <span className="text-3xl">{link.icon}</span>
          <span className="text-sm text-gray-300 font-medium">{link.label}</span>
          <span className="text-xs text-gray-500">{link.description}</span>
        </motion.a>
      ))}
    </div>
  );
}
