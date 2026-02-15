"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["全部", "图片", "视频", "设计"];

const projects = [
  { id: 1, title: "未来城市 · 黎明", category: "图片", description: "Midjourney 生成的赛博朋克城市概念图", tags: ["Midjourney", "概念设计"] },
  { id: 2, title: "数字花园", category: "图片", description: "AI 生成的超现实主义数字花园场景", tags: ["Stable Diffusion", "艺术"] },
  { id: 3, title: "品牌视觉系统", category: "设计", description: "AI 辅助设计的完整品牌视觉识别系统", tags: ["设计", "品牌"] },
  { id: 4, title: "AI 创意短片", category: "视频", description: "使用多种 AI 工具制作的 60 秒创意短片", tags: ["视频", "Runway"] },
  { id: 5, title: "星际漫游", category: "图片", description: "太空主题的 AI 艺术创作系列", tags: ["Midjourney", "科幻"] },
  { id: 6, title: "产品展示动画", category: "视频", description: "AI 生成的产品 3D 展示动画", tags: ["视频", "3D"] },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("全部");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filtered = activeCategory === "全部"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const selected = projects.find((p) => p.id === selectedProject);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">
          作品 <span className="gradient-text">集</span>
        </h1>
        <p className="text-gray-400">我的 AI 创作作品展示</p>
      </motion.div>

      {/* Category filter */}
      <div className="flex justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
              activeCategory === cat
                ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                : "bg-dark-card border border-white/10 text-gray-400 hover:border-indigo-500/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(project.id)}
              className="glow-card bg-dark-card border border-white/5 rounded-xl overflow-hidden cursor-pointer group"
            >
              <div className="aspect-square bg-dark-lighter relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-blue-500/20 flex items-center justify-center">
                  <span className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity group-hover:scale-110 transform duration-500">
                    {project.category === "图片" ? "🎨" : project.category === "视频" ? "🎬" : "✏️"}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-dark-card border border-white/10 rounded-2xl max-w-lg w-full overflow-hidden"
            >
              <div className="aspect-video bg-dark-lighter flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-blue-500/20 flex items-center justify-center">
                  <span className="text-8xl opacity-30">
                    {selected.category === "图片" ? "🎨" : selected.category === "视频" ? "🎬" : "✏️"}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-white">{selected.title}</h2>
                <p className="text-gray-400 mt-2">{selected.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {selected.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="mt-6 text-sm text-gray-500 hover:text-white transition-colors"
                >
                  关闭
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
