"use client";

import { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
  images: { src: string; alt: string }[];
  initialIndex: number;
  seriesTitle: string;
  onClose: () => void;
}

export default function Lightbox({
  images,
  initialIndex,
  seriesTitle,
  onClose,
}: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const current = images[index];
  const hasPrev = index > 0;
  const hasNext = index < images.length - 1;

  const goPrev = useCallback(() => {
    if (hasPrev) setIndex((i) => i - 1);
  }, [hasPrev]);

  const goNext = useCallback(() => {
    if (hasNext) setIndex((i) => i + 1);
  }, [hasNext]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* 关闭按钮 */}
        <button
          className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors text-2xl z-10"
          onClick={onClose}
          aria-label="关闭"
        >
          ✕
        </button>

        {/* 左箭头 */}
        {hasPrev && (
          <button
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all text-lg z-10"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="上一张"
          >
            ‹
          </button>
        )}

        {/* 右箭头 */}
        {hasNext && (
          <button
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all text-lg z-10"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="下一张"
          >
            ›
          </button>
        )}

        {/* 图片 + 信息 */}
        <motion.div
          key={current.src}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="flex flex-col items-center gap-4 max-w-[90vw] max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={current.src}
            alt={current.alt}
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
          />
          <div className="text-center">
            <span className="text-white/90 text-sm">{current.alt}</span>
            <span className="text-white/40 text-xs ml-3">
              {seriesTitle} · {index + 1}/{images.length}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
