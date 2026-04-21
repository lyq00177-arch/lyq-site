"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

const PAGE_SIZE = 12;

type ViewMode = "grid" | "list";

export default function BlogListClient({ posts }: { posts: Post[] }) {
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags)));
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [view, setView] = useState<ViewMode>("grid");
  const [page, setPage] = useState(1);

  const filtered = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts;

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = useMemo(
    () => filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [filtered, page]
  );

  const handleTagChange = (tag: string | null) => {
    setActiveTag(tag);
    setPage(1);
  };

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
        <p className="text-t-tertiary">记录思考，分享见解</p>
      </motion.div>

      {/* Controls: Tag filter + View toggle */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
          <button
            onClick={() => handleTagChange(null)}
            className={`px-3 py-1.5 rounded-full text-xs transition-all ${
              !activeTag
                ? "bg-gradient-to-r from-accent to-accent-light text-white"
                : "bg-card border border-white/10 text-t-tertiary hover:border-accent/50"
            }`}
          >
            全部
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagChange(tag)}
              className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                activeTag === tag
                  ? "bg-gradient-to-r from-accent to-accent-light text-white"
                  : "bg-card border border-white/10 text-t-tertiary hover:border-accent/50"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* View toggle */}
        <div className="flex gap-1 bg-card rounded-lg p-1 border border-[rgb(var(--border)_/_var(--border-opacity))]">
          <button
            onClick={() => setView("grid")}
            className={`px-3 py-1.5 rounded-md text-xs transition-all ${
              view === "grid" ? "bg-elevated text-t-primary" : "text-t-muted hover:text-t-tertiary"
            }`}
          >
            卡片
          </button>
          <button
            onClick={() => setView("list")}
            className={`px-3 py-1.5 rounded-md text-xs transition-all ${
              view === "list" ? "bg-elevated text-t-primary" : "text-t-muted hover:text-t-tertiary"
            }`}
          >
            列表
          </button>
        </div>
      </div>

      {/* Content */}
      {view === "grid" ? (
        <div className="grid grid-cols-1 gap-6">
          {paged.map((post, i) => (
            <BlogCard key={post.slug} {...post} index={i} />
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-[rgb(var(--border)_/_var(--border-opacity))]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-card text-t-tertiary text-left">
                <th className="px-4 py-3 font-medium">日期</th>
                <th className="px-4 py-3 font-medium">标题</th>
                <th className="px-4 py-3 font-medium hidden sm:table-cell">标签</th>
              </tr>
            </thead>
            <tbody>
              {paged.map((post) => (
                <tr
                  key={post.slug}
                  className="border-t border-[rgb(var(--border)_/_var(--border-opacity))] hover:bg-card/50 transition-colors"
                >
                  <td className="px-4 py-3 text-t-muted whitespace-nowrap">{post.date}</td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-t-secondary hover:text-accent transition-colors"
                    >
                      {post.title}
                    </Link>
                  </td>
                  <td className="px-4 py-3 hidden sm:table-cell">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-1.5 py-0.5 rounded-full bg-accent/10 text-accent-light border border-accent/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Empty state */}
      {filtered.length === 0 && (
        <p className="text-center text-t-muted mt-8">暂无相关文章</p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-12">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-3 py-1.5 rounded-lg text-sm bg-card border border-[rgb(var(--border)_/_var(--border-opacity))] text-t-tertiary hover:text-t-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            ←
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-8 h-8 rounded-lg text-sm transition-all ${
                p === page
                  ? "bg-accent text-[#0a0a0a] font-medium"
                  : "bg-card border border-[rgb(var(--border)_/_var(--border-opacity))] text-t-tertiary hover:text-t-primary"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-3 py-1.5 rounded-lg text-sm bg-card border border-[rgb(var(--border)_/_var(--border-opacity))] text-t-tertiary hover:text-t-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}
