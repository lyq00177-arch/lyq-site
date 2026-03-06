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
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.4) }}
      whileHover={{ scale: 1.01, y: -2 }}
    >
      <Link
        href={`/blog/${slug}`}
        className="block bg-dark-card border border-white/5 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 rounded-xl p-6 h-full transition-all duration-300"
      >
        <time className="text-xs text-gray-500">{date}</time>
        <h3 className="text-lg font-semibold text-white mt-2 mb-2 leading-snug">{title}</h3>
        <p className="text-sm text-gray-400 mb-4 line-clamp-2 leading-relaxed">{excerpt}</p>
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
