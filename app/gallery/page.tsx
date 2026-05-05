"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Lightbox from "@/components/Lightbox";
import galleryData from "@/data/gallery.json";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GallerySeries {
  id: string;
  title: string;
  description: string;
  prompt?: string;
  model: string;
  images: GalleryImage[];
}

const series: GallerySeries[] = galleryData;

/* ── 系列分割线 ── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-t-muted">
        {children}
      </span>
      <div className="flex-1 h-px bg-accent/10" />
    </div>
  );
}

/* ── 自适应网格列数 ── */
function gridCols(count: number): string {
  if (count <= 2) return "grid-cols-1 sm:grid-cols-2";
  if (count <= 4) return "grid-cols-2 sm:grid-cols-3";
  return "grid-cols-2 sm:grid-cols-3";
}

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<{
    images: GalleryImage[];
    index: number;
    title: string;
  } | null>(null);

  return (
    <section className="min-h-screen px-6 sm:px-12 lg:px-20 py-24 max-w-[1100px] mx-auto">
      {/* 返回首页 */}
      <Link
        href="/"
        className="text-sm text-t-muted hover:text-accent transition-colors block mb-16"
      >
        ← 首页
      </Link>

      {/* 页面标题 */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="font-display text-4xl sm:text-5xl text-t-primary mb-3">
          画廊
        </h1>
        <p className="text-base text-t-tertiary">
          AI 创作 · 提示词 · 视觉实验
        </p>
      </motion.div>

      {/* 系列锚点导航 */}
      {series.length >= 3 && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-x-4 gap-y-2 mb-20 text-sm"
        >
          {series.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-t-muted hover:text-accent transition-colors"
            >
              {s.title}
            </a>
          ))}
        </motion.nav>
      )}

      {/* 系列内容 */}
      <div className="space-y-24">
        {series.map((s) => (
          <motion.div
            key={s.id}
            id={s.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="scroll-mt-24"
          >
            <SectionLabel>{s.title}</SectionLabel>

            {/* 描述 */}
            <p className="text-t-secondary text-sm mb-5 max-w-xl">
              {s.description}
            </p>

            {/* 提示词（可选） */}
            {s.prompt && (
              <div className="mb-5 border-l-2 border-accent/60 bg-surface/50 rounded-r-lg px-4 py-3">
                <div className="text-[10px] font-mono tracking-wider text-t-muted mb-2 uppercase">
                  Prompt
                </div>
                <p className="font-mono text-sm text-t-secondary leading-relaxed whitespace-pre-wrap">
                  {s.prompt}
                </p>
              </div>
            )}

            {/* 模型标签 */}
            <div className="mb-6">
              <span className="text-[10px] font-mono tracking-wider text-accent/50 border border-accent/15 px-2 py-0.5 rounded">
                {s.model}
              </span>
            </div>

            {/* 图片网格 */}
            <div className={`grid ${gridCols(s.images.length)} gap-3`}>
              {s.images.map((img, imgIdx) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: imgIdx * 0.06 }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-card border border-[rgb(var(--border)_/_var(--border-opacity))] cursor-pointer"
                  onClick={() =>
                    setLightbox({
                      images: s.images,
                      index: imgIdx,
                      title: s.title,
                    })
                  }
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 360px"
                    className="object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-xs text-white/90">{img.alt}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          initialIndex={lightbox.index}
          seriesTitle={lightbox.title}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
