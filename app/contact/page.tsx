"use client";

import { motion } from "framer-motion";

const socials = [
  { name: "GitHub", icon: "💻", url: "https://github.com", description: "查看我的开源项目" },
  { name: "微信公众号", icon: "💬", url: "#", description: "关注获取最新内容" },
  { name: "小红书", icon: "📕", url: "#", description: "查看我的创作分享" },
  { name: "Bilibili", icon: "📺", url: "#", description: "观看我的视频内容" },
  { name: "Email", icon: "📧", url: "mailto:contact@lyq017.cn", description: "contact@lyq017.cn" },
];

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">
          联系 <span className="gradient-text">我</span>
        </h1>
        <p className="text-gray-400">期待与你交流想法，欢迎通过以下方式联系我</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {socials.map((social, i) => (
          <motion.a
            key={social.name}
            href={social.url}
            target={social.url.startsWith("http") ? "_blank" : undefined}
            rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glow-card bg-dark-card border border-white/5 rounded-xl p-6 flex items-center gap-4"
          >
            <span className="text-3xl">{social.icon}</span>
            <div>
              <h3 className="font-semibold text-white">{social.name}</h3>
              <p className="text-sm text-gray-400">{social.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
