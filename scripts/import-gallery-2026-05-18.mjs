/**
 * 2026-05-18 第二批导入 31 张新画廊图
 *   - 8 张追加既有系列（city-miniature +5, genshin-poetry +3）
 *   - 23 张组成 3 个新系列（anime-ensemble / poetry-cinematic / mosaic-poster）
 *
 * 源图：~/Documents/_lyq-new-images-2026-05-18/ （从 Downloads 复制过来）
 * 用法：node scripts/import-gallery-2026-05-18.mjs
 */
import sharp from "sharp";
import { mkdir, readFile, writeFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { homedir } from "os";

const HOME = homedir();
const SRC_DIR = path.join(HOME, "Documents/_lyq-new-images-2026-05-18");
const GALLERY_DIR = path.join(HOME, "Projects/lyq-site/public/works/gallery");
const GALLERY_JSON = path.join(HOME, "Projects/lyq-site/data/gallery.json");

// 三个新系列的元数据
const newSeries = {
  "anime-ensemble": {
    title: "动漫群像回眸",
    description:
      "各动漫角色的群像版海报。统一的回眸/伸手邀约构图，从经典到当代。",
    model: "ChatGPT",
    prompt: "",
  },
  "poetry-cinematic": {
    title: "宽银幕诗意画作",
    description:
      "古诗词配宽银幕电影级画面。月夜、山水、背影孤客——苏轼、词曲、电影感。",
    model: "ChatGPT",
    prompt: "",
  },
  "mosaic-poster": {
    title: "电影级马赛克",
    description:
      "用细密照片马赛克拼成角色肖像。远看是脸，近看是图。",
    model: "ChatGPT",
    prompt: "",
  },
};

// 映射：原文件名 → 系列 + slug + alt
const mapping = [
  // city-miniature 追加
  { file: "怪奇物语风微型白天城市.png", series: "city-miniature", slug: "stranger-things", alt: "怪奇物语风微缩小镇" },
  { file: "斯巴达克斯风微型古罗马城.png", series: "city-miniature", slug: "spartacus", alt: "斯巴达克斯古罗马微缩" },
  { file: "绝命毒师风微型城市.png", series: "city-miniature", slug: "breaking-bad", alt: "绝命毒师风微缩沙漠城" },
  { file: "权力的游戏风微型城市.png", series: "city-miniature", slug: "got", alt: "权力的游戏中世纪微缩" },
  { file: "君临城微型城市重制版.png", series: "city-miniature", slug: "kings-landing", alt: "君临城微缩重制版" },
  // genshin-poetry 追加
  { file: "宋代工笔画风 Fate 女角色合影.png", series: "genshin-poetry", slug: "fate-ensemble", alt: "宋工笔 Fate 女角合影" },
  { file: "ChatGPT Image 2026年5月9日 23_06_20 (2).png", series: "genshin-poetry", slug: "girls-grove", alt: "工笔少女花树群像" },
  { file: "ChatGPT Image 2026年5月9日 23_06_19 (1).png", series: "genshin-poetry", slug: "girls-courtyard", alt: "工笔少女庭院群像" },
  // anime-ensemble 新系列
  { file: "家庭教师REBORN群像回眸邀约.png", series: "anime-ensemble", slug: "reborn", alt: "家庭教师 REBORN 群像" },
  { file: "叛逆的鲁鲁修前行签名修正版.png", series: "anime-ensemble", slug: "lelouch-signature", alt: "鲁鲁修 签名前行版" },
  { file: "叛逆的鲁鲁修群像回眸邀约.png", series: "anime-ensemble", slug: "lelouch-ensemble", alt: "鲁鲁修群像回眸" },
  { file: "钢之炼金术师群像回眸邀约.png", series: "anime-ensemble", slug: "fullmetal", alt: "钢之炼金术师群像" },
  { file: "滑头鬼之孙群像回眸邀约.png", series: "anime-ensemble", slug: "nurarihyon", alt: "滑头鬼之孙夜行群像" },
  { file: "夏目友人帐群像回眸邀约.png", series: "anime-ensemble", slug: "natsume", alt: "夏目友人帐黄昏群像" },
  { file: "斩赤红之瞳群像回眸邀约.png", series: "anime-ensemble", slug: "akame", alt: "斩赤红之瞳夜战群像" },
  { file: "灌篮高手群像回眸邀约.png", series: "anime-ensemble", slug: "slamdunk-court", alt: "灌篮高手球场群像" },
  { file: "灌篮高手晴子回眸邀约版.png", series: "anime-ensemble", slug: "slamdunk-haruko", alt: "灌篮高手 晴子版" },
  { file: "Fate Zero 群像回眸邀约.png", series: "anime-ensemble", slug: "fate-zero", alt: "Fate Zero Saber 群像" },
  { file: "Fate stay night 凛樱群像回眸版.png", series: "anime-ensemble", slug: "fate-stay-night", alt: "Fate stay night 凛樱群像" },
  // poetry-cinematic 新系列
  { file: "水调歌头·明月几时有 宽银幕诗意画作.png", series: "poetry-cinematic", slug: "shuidiao-mingyue", alt: "水调歌头·明月几时有" },
  { file: "自题金山画像 宽银幕诗意画作.png", series: "poetry-cinematic", slug: "jinshan", alt: "自题金山画像" },
  { file: "定风波·莫听穿林打叶声 宽银幕诗意画作.png", series: "poetry-cinematic", slug: "dingfengbo", alt: "定风波·莫听穿林打叶声" },
  { file: "ChatGPT Image 2026年5月9日 23_30_11.png", series: "poetry-cinematic", slug: "niannujiao-dawn", alt: "念奴娇·赤壁怀古夜浪" },
  { file: "江城子·密州出猎 宽银幕诗意画作.png", series: "poetry-cinematic", slug: "jiangchengzi-mizhou", alt: "江城子·密州出猎" },
  { file: "江城子·乙卯正月二十日夜记梦 小轩窗版.png", series: "poetry-cinematic", slug: "jiangchengzi-window", alt: "江城子·小轩窗" },
  { file: "江城子·乙卯正月二十日夜记梦 宽银幕诗意画作.png", series: "poetry-cinematic", slug: "jiangchengzi-moonlight", alt: "江城子·月下背影" },
  { file: "赤壁赋 宽银幕诗意画作.png", series: "poetry-cinematic", slug: "chibifu", alt: "赤壁赋 月下江岸" },
  // mosaic-poster 新系列
  { file: "宇智波鼬电影级照片马赛克封面海报.png", series: "mosaic-poster", slug: "itachi", alt: "宇智波鼬马赛克" },
  { file: "林允儿电影级照片马赛克海报.png", series: "mosaic-poster", slug: "yoona", alt: "林允儿星河马赛克" },
  { file: "绫波丽电影级照片马赛克海报.png", series: "mosaic-poster", slug: "rei", alt: "绫波丽蓝调马赛克" },
  { file: "胡桃电影级照片马赛克海报.png", series: "mosaic-poster", slug: "hutao-mosaic", alt: "胡桃红灯笼马赛克" },
];

async function processOne(item) {
  const src = path.join(SRC_DIR, item.file);
  if (!existsSync(src)) throw new Error(`源图不存在: ${item.file}`);
  const dstDir = path.join(GALLERY_DIR, item.series);
  await mkdir(dstDir, { recursive: true });
  const dst = path.join(dstDir, `${item.slug}.webp`);
  if (existsSync(dst)) return { skipped: true, ...item };

  const r = await sharp(src)
    .resize(1600, 1600, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(dst);

  return {
    series: item.series,
    slug: item.slug,
    alt: item.alt,
    webpPath: `/works/gallery/${item.series}/${item.slug}.webp`,
    sizeKB: (r.size / 1024).toFixed(1),
    dims: `${r.width}×${r.height}`,
  };
}

const results = [];
const errors = [];
for (const item of mapping) {
  try {
    const r = await processOne(item);
    if (!r.skipped) {
      results.push(r);
      console.log(`✓ ${item.series}/${item.slug}.webp  (${r.sizeKB}KB ${r.dims})`);
    } else {
      console.log(`⚠ ${item.series}/${item.slug}.webp 已存在，跳过`);
    }
  } catch (err) {
    errors.push({ file: item.file, error: err.message });
    console.error(`✗ ${item.file}: ${err.message}`);
  }
}

console.log(`\n── 压缩: ${results.length} 张 / 失败: ${errors.length} ──\n`);

// 更新 gallery.json
const gallery = JSON.parse(await readFile(GALLERY_JSON, "utf-8"));

// 先新增系列对象
for (const [id, meta] of Object.entries(newSeries)) {
  if (!gallery.find((s) => s.id === id)) {
    gallery.push({ id, ...meta, images: [] });
    console.log(`+ 新建系列: ${id} (${meta.title})`);
  }
}

// 追加 images
let added = 0;
for (const r of results) {
  const series = gallery.find((s) => s.id === r.series);
  if (!series) {
    console.warn(`⚠ 系列 ${r.series} 不存在，跳过`);
    continue;
  }
  if (series.images.some((img) => img.src === r.webpPath)) {
    console.log(`⚠ ${r.webpPath} 已在 gallery.json，跳过`);
    continue;
  }
  series.images.push({ src: r.webpPath, alt: r.alt });
  added++;
}

await writeFile(GALLERY_JSON, JSON.stringify(gallery, null, 2) + "\n");
console.log(`✓ gallery.json 已更新，新增 ${added} 条`);

if (errors.length) {
  console.log("\n失败：");
  errors.forEach((e) => console.log(`  ${e.file}: ${e.error}`));
}
