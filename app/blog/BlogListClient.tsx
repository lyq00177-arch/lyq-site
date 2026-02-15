"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "@/components/BlogCard";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export default function BlogListClient({ posts }: { posts: Post[] }) {
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags)));
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">
          博客 <span className="gradient-text">文章</span>
        </h1>
        <p className="text-gray-400">记录思考，分享见解</p>
      </motion.div>

      {/* Tag filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <button
          onClick={() => setActiveTag(null)}
          className={`px-3 py-1.5 rounded-full text-xs transition-all ${
            !activeTag
              ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
              : "bg-dark-card border border-white/10 text-gray-400 hover:border-indigo-500/50"
          }`}
        >
          全部
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-3 py-1.5 rounded-full text-xs transition-all ${
              activeTag === tag
                ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                : "bg-dark-card border border-white/10 text-gray-400 hover:border-indigo-500/50"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Post list */}
      <div className="grid grid-cols-1 gap-6">
        {filtered.map((post, i) => (
          <BlogCard key={post.slug} {...post} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-8">暂无相关文章</p>
      )}
    </div>
  );
}
