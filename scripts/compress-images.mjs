import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename, dirname } from "path";

const PUBLIC = new URL("../public", import.meta.url).pathname;

// 目标目录列表
const DIRS = [
  "works",
  "works/gallery/changzhou-1988",
  "works/gallery/changzhou-painting",
  "works/gallery/city-poster",
  "works/gallery/concert-poster",
  "works/gallery/game-scenes",
  "works/gallery/genshin-poetry",
  "works/gallery/me-movie-poster",
  "works/gallery/me-scenes",
];

const QUALITY = 82;   // WebP 质量（82 视觉无损但文件更小）
const SKIP_WEBP = true; // 已经是 webp 的跳过

async function compress(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) return;

  const dir = dirname(filePath);
  const name = basename(filePath, ext);
  const outPath = join(dir, `${name}.webp`);

  const before = (await stat(filePath)).size;
  await sharp(filePath).webp({ quality: QUALITY }).toFile(outPath);
  const after = (await stat(outPath)).size;

  const saved = ((1 - after / before) * 100).toFixed(1);
  console.log(`✓ ${basename(filePath)} → ${name}.webp  ${(before/1024/1024).toFixed(1)}MB → ${(after/1024/1024).toFixed(1)}MB  (${saved}% smaller)`);
}

async function run() {
  let total = 0;
  for (const dir of DIRS) {
    const absDir = join(PUBLIC, dir);
    let files;
    try { files = await readdir(absDir); } catch { continue; }

    for (const f of files) {
      const ext = extname(f).toLowerCase();
      if ([".png", ".jpg", ".jpeg"].includes(ext)) {
        await compress(join(absDir, f));
        total++;
      }
    }
  }
  console.log(`\n完成，共处理 ${total} 个文件。`);
  console.log("⚠️  原始 PNG/JPG 文件保留，gallery.json 和页面引用需手动更新为 .webp 路径。");
}

run().catch(console.error);
