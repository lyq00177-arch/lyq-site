"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  index: number;
}

export default function BlogCard({ slug, title, excerpt, date, tags, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${slug}`} className="block glow-card bg-dark-card border border-white/5 rounded-xl p-6 h-full">
        <time className="text-xs text-gray-500">{date}</time>
        <h3 className="text-lg font-semibold text-white mt-2 mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
