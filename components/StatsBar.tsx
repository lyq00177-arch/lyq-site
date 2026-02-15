"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "3年+", label: "AI 深耕" },
  { number: "10w+", label: "全网粉丝" },
  { number: "10w+", label: "爆款文章" },
  { number: "1000+", label: "服务人次" },
];

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center p-6"
        >
          <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
            {stat.number}
          </div>
          <div className="text-sm text-gray-400">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
