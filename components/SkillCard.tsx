"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

export default function SkillCard({ icon, title, description, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glow-card bg-dark-card border border-white/5 rounded-xl p-6 text-center"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </motion.div>
  );
}
