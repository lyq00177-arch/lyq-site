"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  index: number;
}

export default function ProjectCard({ title, description, tags, image, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glow-card group bg-dark-card border border-white/5 rounded-xl overflow-hidden min-w-[300px]"
    >
      <div className="aspect-video bg-dark-lighter relative overflow-hidden">
        <div
          className="w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center"
          style={{ backgroundImage: image ? `url(${image})` : undefined, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          {!image && (
            <span className="text-4xl opacity-50">
              {index % 2 === 0 ? "🎨" : "🎬"}
            </span>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
