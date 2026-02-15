"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  price: string;
  index: number;
}

export default function ServiceCard({ icon, title, description, price, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-6 rounded-2xl bg-dark-card border border-white/5 hover:border-indigo-500/30 transition-all duration-300 glow-card flex flex-col"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-100 mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-4 flex-1">{description}</p>
      <div className="pt-4 border-t border-white/5">
        <span className="text-indigo-400 font-bold text-lg">{price}</span>
      </div>
    </motion.div>
  );
}
