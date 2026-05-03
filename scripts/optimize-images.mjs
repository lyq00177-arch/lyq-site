/**
 * PNG → WebP 批量转换脚本
 * 用法: node scripts/optimize-images.mjs
 */
import sharp from "sharp";
import { readdir, mkdir } from "fs/promises";
import { join, basename } from "path";

const QUALITY = 82;
const SRC_DIR = "public/works";

// 源文件 → 目标路径映射（按系列分组）
const mapping = {
  // 城市系列
  "南京.png": "gallery/city/nanjing.webp",
  "苏州.png": "gallery/city/suzhou.webp",
  "无锡.png": "gallery/city/wuxi.webp",
  // AI 肖像系列
  "ai-portrait-liu.png": "gallery/portrait/liu-yifei-rock.webp",
  "ai-portrait-zhang.png": "gallery/portrait/zhang-guofeng.webp",
  "真人与迷你卡通角色肖像.png": "gallery/portrait/real-cartoon-portrait.webp",
  // Gemini 系列
  "gemini-1.png": "gallery/gemini/gemini-1.webp",
  "gemini-2.png": "gallery/gemini/gemini-2.webp",
  "gemini-3.png": "gallery/gemini/gemini-3.webp",
  "gemini-4.png": "gallery/gemini/gemini-4.webp",
  "gemini-5.png": "gallery/gemini/gemini-5.webp",
  // 场景系列
  "街头黑色电影爆发.png": "gallery/scene/street-noir.webp",
  "创意工作室手办绘制场景.png": "gallery/scene/studio-figurine.webp",
};

async function convert() {
  let totalSaved = 0;

  for (const [src, dest] of Object.entries(mapping)) {
    const srcPath = join(SRC_DIR, src);
    const destPath = join(SRC_DIR, dest);

    try {
      const result = await sharp(srcPath).webp({ quality: QUALITY }).toFile(destPath);

      const srcStat = await import("fs").then((fs) =>
        fs.statSync(srcPath)
      );
      const savedMB = ((srcStat.size - result.size) / 1024 / 1024).toFixed(1);
      totalSaved += srcStat.size - result.size;

      console.log(
        `✓ ${src} → ${dest}  (${(srcStat.size / 1024 / 1024).toFixed(1)}MB → ${(result.size / 1024 / 1024).toFixed(1)}MB, saved ${savedMB}MB)`
      );
    } catch (err) {
      console.error(`✗ ${src}: ${err.message}`);
    }
  }

  console.log(`\nTotal saved: ${(totalSaved / 1024 / 1024).toFixed(1)}MB`);
}

convert();
