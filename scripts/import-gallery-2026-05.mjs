/**
 * 2026-05 批量导入 37 张新画廊图
 * 从 ~/Pictures/AI 作品.library 反查原图 → 压成 webp → 更新 gallery.json
 *
 * 用法: node scripts/import-gallery-2026-05.mjs
 */
import sharp from "sharp";
import { readdir, mkdir, readFile, writeFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { homedir } from "os";

const HOME = homedir();
const REVIEW_DIR = path.join(HOME, "Documents/_lyq-image-review");
const LIBRARY_DIR = path.join(HOME, "Pictures/AI 作品.library/images");
const GALLERY_DIR = path.join(HOME, "Projects/lyq-site/public/works/gallery");
const GALLERY_JSON = path.join(HOME, "Projects/lyq-site/data/gallery.json");

// 编号 → 目标系列 + slug + alt 文案
const mapping = {
  "001": { series: "changzhou-painting", slug: "modern-river", alt: "工笔现代常州河景" },
  "002": { series: "changzhou-painting", slug: "ancient-tower", alt: "工笔古城楼塔" },
  "004": { series: "genshin-poetry", slug: "silver-sword", alt: "白发持剑女角色配诗" },
  "005": { series: "genshin-poetry", slug: "furina-fan", alt: "芙宁娜执扇" },
  "006": { series: "genshin-poetry", slug: "hutao-plum", alt: "胡桃执梅枝" },
  "007": { series: "genshin-poetry", slug: "yaemiko-fireworks", alt: "八重神子焰火" },
  "008": { series: "genshin-poetry", slug: "ayaka", alt: "神里绫华" },
  "009": { series: "genshin-poetry", slug: "ganyu-umbrella", alt: "甘雨持伞" },
  "010": { series: "genshin-poetry", slug: "ningguang", alt: "凝光背影" },
  "012": { series: "city-poster", slug: "huaiyan-mono", alt: "黑白水墨淮盐" },
  "013": { series: "concert-poster", slug: "ayumi-red", alt: "滨崎步红黑海报" },
  "014": { series: "concert-poster", slug: "jay-orange", alt: "周杰伦橙黑海报" },
  "015": { series: "concert-poster", slug: "beyond-faith", alt: "Beyond 信仰红" },
  "016": { series: "game-scenes", slug: "panoramic-night", alt: "360 度全景室内夜景" },
  "018": { series: "city-poster", slug: "huaiyan-village", alt: "千年淮盐古镇少女" },
  "019": { series: "me-scenes", slug: "plant-wall-selfie", alt: "植物墙前自拍" },
  "022": { series: "me-scenes", slug: "suit-portrait", alt: "黑西装正装" },
  "023": { series: "me-movie-poster", slug: "naruto-style", alt: "火影忍者风戴眼镜男" },
  "024": { series: "me-movie-poster", slug: "cyberpunk-2077", alt: "赛博朋克 2077 夜之城" },
  "026": { series: "changzhou-1988", slug: "neighbors-tv", alt: "弄堂夜晚围坐看电视" },
  "027": { series: "game-scenes", slug: "mmorpg-battle", alt: "MMORPG 战斗场景" },
  "028": { series: "game-scenes", slug: "warrior-vs-giant", alt: "战士对战巨型怪物" },
  "029": { series: "me-scenes", slug: "cyber-rooftop", alt: "赛博城市天台俯瞰" },
  "032": { series: "changzhou-1988", slug: "red-star-hotpot", alt: "红星火锅夜市摊" },
  "035": { series: "changzhou-1988", slug: "elder-reading", alt: "老人窗边读常州日报" },
  "037": { series: "changzhou-1988", slug: "state-store", alt: "老式国营商店柜台" },
  "038": { series: "changzhou-1988", slug: "repair-night", alt: "昏黄灯下修理铺" },
  "044": { series: "city-poster", slug: "swallow-mountain", alt: "国风燕子金色山河" },
  "045": { series: "city-poster", slug: "suchao-football", alt: "苏超江苏足球海报" },
  "050": { series: "city-poster", slug: "longcheng-spring", alt: "千年龙城春日海报" },
  "052": { series: "game-scenes", slug: "crystal-library", alt: "水晶藏书馆全息" },
  "053": { series: "game-scenes", slug: "magic-runes", alt: "古书桌蓝色魔法符文" },
  "054": { series: "game-scenes", slug: "ai-framework", alt: "AI Agent 框架办公桌" },
  "056": { series: "game-scenes", slug: "data-burst", alt: "数据爆裂虚拟世界" },
  "061": { series: "me-scenes", slug: "indoor-selfie", alt: "室内自拍" },
  "066": { series: "city-miniature", slug: "human-hive", alt: "摩天楼人类蜂巢" },
  "069": { series: "me-scenes", slug: "ai-workstation", alt: "AI Agent 工作站" },
};

/**
 * 从编号反查原图绝对路径
 *   缩略图：~/Documents/_lyq-image-review/001-XXX.jpg
 *   原图：  ~/Pictures/AI 作品.library/images/MOPVxxx.info/XXX.png|jpg
 */
async function findOriginal(num) {
  const reviewFiles = await readdir(REVIEW_DIR);
  const thumb = reviewFiles.find((f) => f.startsWith(`${num}-`));
  if (!thumb) throw new Error(`缩略图未找到: ${num}`);
  const basename = thumb.slice(4).replace(/\.jpg$/, "");

  const dirs = await readdir(LIBRARY_DIR);
  for (const dir of dirs) {
    const sub = path.join(LIBRARY_DIR, dir);
    let files;
    try {
      files = await readdir(sub);
    } catch {
      continue;
    }
    for (const f of files) {
      if (f.toLowerCase().includes("thumbnail")) continue;
      const stem = f.replace(/\.(png|jpg|jpeg)$/i, "");
      if (stem === basename) return path.join(sub, f);
    }
  }
  throw new Error(`原图未找到: ${num} (basename=${basename})`);
}

async function processOne(num, info) {
  const src = await findOriginal(num);
  const dstDir = path.join(GALLERY_DIR, info.series);
  await mkdir(dstDir, { recursive: true });
  const dst = path.join(dstDir, `${info.slug}.webp`);

  if (existsSync(dst)) {
    console.log(`⚠  ${info.series}/${info.slug}.webp 已存在，跳过`);
    return { skipped: true, ...info };
  }

  const r = await sharp(src)
    .resize(1600, 1600, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(dst);

  return {
    num,
    series: info.series,
    slug: info.slug,
    alt: info.alt,
    webpPath: `/works/gallery/${info.series}/${info.slug}.webp`,
    sizeKB: (r.size / 1024).toFixed(1),
    dims: `${r.width}×${r.height}`,
  };
}

// 主流程
const results = [];
const errors = [];
for (const [num, info] of Object.entries(mapping)) {
  try {
    const r = await processOne(num, info);
    if (!r.skipped) {
      results.push(r);
      console.log(`✓ ${num} → ${info.series}/${info.slug}.webp  (${r.sizeKB}KB ${r.dims})`);
    }
  } catch (err) {
    errors.push({ num, error: err.message });
    console.error(`✗ ${num}: ${err.message}`);
  }
}

console.log(`\n── 压缩完成: ${results.length} 张 / 失败: ${errors.length} ──\n`);

// 更新 gallery.json
const gallery = JSON.parse(await readFile(GALLERY_JSON, "utf-8"));
let added = 0;
for (const r of results) {
  const series = gallery.find((s) => s.id === r.series);
  if (!series) {
    console.warn(`⚠  系列 ${r.series} 在 gallery.json 中不存在，跳过 ${r.slug}`);
    continue;
  }
  if (series.images.some((img) => img.src === r.webpPath)) {
    console.log(`⚠  ${r.webpPath} 已在 gallery.json 中，跳过`);
    continue;
  }
  series.images.push({ src: r.webpPath, alt: r.alt });
  added++;
}

await writeFile(GALLERY_JSON, JSON.stringify(gallery, null, 2) + "\n");
console.log(`✓ gallery.json 已更新，新增 ${added} 条`);

if (errors.length) {
  console.log("\n失败编号：");
  errors.forEach((e) => console.log(`  ${e.num}: ${e.error}`));
}
